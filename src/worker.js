import { onRequest as onUploadRequest } from '../functions/upload/index.js';
import { onRequestPost as onUploadHfGetUploadUrlPost } from '../functions/upload/huggingface/getUploadUrl.js';
import { onRequestPost as onUploadHfCommitPost } from '../functions/upload/huggingface/commitUpload.js';
import { errorHandling, telemetryData, checkDatabaseConfig } from '../functions/utils/middleware.js';

import { onRequest as onFileRequest } from '../functions/file/[[path]].js';

import { onRequestPost as onLoginPost } from '../functions/api/login.js';
import { onRequestGet as onDirectoryTreeGet } from '../functions/api/directoryTree.js';
import { onRequest as onUserConfigRequest } from '../functions/api/userConfig.js';
import { onRequest as onChannelsRequest } from '../functions/api/channels.js';
import { onRequest as onFetchResRequest } from '../functions/api/fetchRes.js';
import { onRequest as onPublicListRequest } from '../functions/api/public/list.js';
import { onRequest as onBingWallpaperRequest } from '../functions/api/bing/wallpaper/index.js';

import { onRequest as onManageMiddleware } from '../functions/api/manage/_middleware.js';
import { onRequest as onManageLoginRequest } from '../functions/api/manage/login.js';
import { onRequest as onManageLogoutRequest } from '../functions/api/manage/logout.js';
import { onRequest as onManageListRequest } from '../functions/api/manage/list.js';
import { onRequest as onManageQuotaRequest } from '../functions/api/manage/quota.js';
import { onRequest as onManageCheckRequest } from '../functions/api/manage/check.js';
import { onRequest as onManageApiTokens } from '../functions/api/manage/apiTokens.js';
import { onRequest as onManageDeleteRequest } from '../functions/api/manage/delete/[[path]].js';
import { onRequest as onManageBlockRequest } from '../functions/api/manage/block/[[path]].js';
import { onRequest as onManageWhiteRequest } from '../functions/api/manage/white/[[path]].js';
import { onRequest as onManageMetadataRequest } from '../functions/api/manage/metadata/[[path]].js';
import { onRequest as onManageMoveRequest } from '../functions/api/manage/move/[[path]].js';
import { onRequest as onManageRenameRequest } from '../functions/api/manage/rename/[[path]].js';
import { onRequest as onManageTagsRequest } from '../functions/api/manage/tags/[[path]].js';
import { onRequest as onManageTagsAutoRequest } from '../functions/api/manage/tags/autocomplete.js';
import { onRequest as onManageTagsBatchRequest } from '../functions/api/manage/tags/batch.js';
import { onRequest as onManageSysConfigSecurity } from '../functions/api/manage/sysConfig/security.js';
import { onRequest as onManageSysConfigUpload } from '../functions/api/manage/sysConfig/upload.js';
import { onRequest as onManageSysConfigOthers } from '../functions/api/manage/sysConfig/others.js';
import { onRequest as onManageSysConfigPage } from '../functions/api/manage/sysConfig/page.js';
import { onRequest as onManageCusConfigList } from '../functions/api/manage/cusConfig/list.js';
import { onRequest as onManageCusConfigBlockIp } from '../functions/api/manage/cusConfig/blockip.js';
import { onRequest as onManageCusConfigBlockIpList } from '../functions/api/manage/cusConfig/blockipList.js';
import { onRequest as onManageCusConfigWhiteIp } from '../functions/api/manage/cusConfig/whiteip.js';
import { onRequest as onManageBatchList } from '../functions/api/manage/batch/list.js';
import { onRequest as onManageBatchSettings } from '../functions/api/manage/batch/settings.js';
import { onRequest as onManageBatchIndexChunk } from '../functions/api/manage/batch/index/chunk.js';
import { onRequest as onManageBatchIndexConfig } from '../functions/api/manage/batch/index/config.js';
import { onRequest as onManageBatchIndexFinalize } from '../functions/api/manage/batch/index/finalize.js';
import { onRequest as onManageBatchRestoreChunk } from '../functions/api/manage/batch/restore/chunk.js';

import { onRequest as onRandomRequest } from '../functions/random/index.js';
import { onRequest as onDavRequest } from '../functions/dav/[[path]].js';

function makeContext(request, env, ctx, params = {}, data = {}, nextFn = null) {
  return {
    request,
    env,
    params,
    data,
    waitUntil: ctx.waitUntil.bind(ctx),
    passThroughOnException: ctx.passThroughOnException?.bind(ctx),
    next: nextFn ?? (() => new Response('Not Found', { status: 404 })),
  };
}

async function runMiddlewareChain(request, env, ctx, params, middlewares) {
  const chain = Array.isArray(middlewares) ? middlewares : [middlewares];
  const data = {};
  let index = 0;

  async function dispatch() {
    if (index >= chain.length) {
      return new Response('Not Found', { status: 404 });
    }

    const current = chain[index++];
    const context = makeContext(request, env, ctx, params, data, dispatch);
    return current(context);
  }

  return dispatch();
}

function postOnly(handler) {
  return async function(context) {
    if (context.request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    if (context.request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    return handler(context);
  };
}

function getOnly(handler) {
  return async function(context) {
    if (context.request.method !== 'GET') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    return handler(context);
  };
}

const uploadMiddleware = [checkDatabaseConfig, errorHandling, telemetryData, onUploadRequest];
const fileMiddleware = [checkDatabaseConfig, onFileRequest];
const davMiddleware = [checkDatabaseConfig, onDavRequest];
const randomMiddleware = [checkDatabaseConfig, onRandomRequest];

function apiManageChain(handler) {
  return [...(Array.isArray(onManageMiddleware) ? onManageMiddleware : [onManageMiddleware]), handler];
}

const ROUTES = [
  { pattern: /^\/upload\/huggingface\/getUploadUrl$/, params: () => ({}), middlewares: [checkDatabaseConfig, postOnly(onUploadHfGetUploadUrlPost)] },
  { pattern: /^\/upload\/huggingface\/commitUpload$/, params: () => ({}), middlewares: [checkDatabaseConfig, postOnly(onUploadHfCommitPost)] },
  { pattern: /^\/upload(\/.*)?$/, params: () => ({}), middlewares: uploadMiddleware },

  { pattern: /^\/file\/(.+)$/, params: (m) => ({ path: m[1] }), middlewares: fileMiddleware },
  { pattern: /^\/random(\/.*)?$/, params: () => ({}), middlewares: randomMiddleware },
  { pattern: /^\/dav(\/.*)?$/, params: (m) => ({ path: m[1]?.slice(1) ?? '' }), middlewares: davMiddleware },

  { pattern: /^\/api\/manage\/login$/, params: () => ({}), middlewares: apiManageChain(onManageLoginRequest) },
  { pattern: /^\/api\/manage\/logout$/, params: () => ({}), middlewares: apiManageChain(onManageLogoutRequest) },
  { pattern: /^\/api\/manage\/quota$/, params: () => ({}), middlewares: apiManageChain(onManageQuotaRequest) },
  { pattern: /^\/api\/manage\/check$/, params: () => ({}), middlewares: apiManageChain(onManageCheckRequest) },
  { pattern: /^\/api\/manage\/list$/, params: () => ({}), middlewares: apiManageChain(onManageListRequest) },
  { pattern: /^\/api\/manage\/apiTokens$/, params: () => ({}), middlewares: apiManageChain(onManageApiTokens) },
  { pattern: /^\/api\/manage\/delete\/(.*)$/, params: (m) => ({ path: m[1] }), middlewares: apiManageChain(onManageDeleteRequest) },
  { pattern: /^\/api\/manage\/block\/(.*)$/, params: (m) => ({ path: m[1] }), middlewares: apiManageChain(onManageBlockRequest) },
  { pattern: /^\/api\/manage\/white\/(.*)$/, params: (m) => ({ path: m[1] }), middlewares: apiManageChain(onManageWhiteRequest) },
  { pattern: /^\/api\/manage\/metadata\/(.*)$/, params: (m) => ({ path: m[1] }), middlewares: apiManageChain(onManageMetadataRequest) },
  { pattern: /^\/api\/manage\/move\/(.*)$/, params: (m) => ({ path: m[1] }), middlewares: apiManageChain(onManageMoveRequest) },
  { pattern: /^\/api\/manage\/rename\/(.*)$/, params: (m) => ({ path: m[1] }), middlewares: apiManageChain(onManageRenameRequest) },
  { pattern: /^\/api\/manage\/tags\/autocomplete$/, params: () => ({}), middlewares: apiManageChain(onManageTagsAutoRequest) },
  { pattern: /^\/api\/manage\/tags\/batch$/, params: () => ({}), middlewares: apiManageChain(onManageTagsBatchRequest) },
  { pattern: /^\/api\/manage\/tags\/(.*)$/, params: (m) => ({ path: m[1] }), middlewares: apiManageChain(onManageTagsRequest) },
  { pattern: /^\/api\/manage\/sysConfig\/security$/, params: () => ({}), middlewares: apiManageChain(onManageSysConfigSecurity) },
  { pattern: /^\/api\/manage\/sysConfig\/upload$/, params: () => ({}), middlewares: apiManageChain(onManageSysConfigUpload) },
  { pattern: /^\/api\/manage\/sysConfig\/others$/, params: () => ({}), middlewares: apiManageChain(onManageSysConfigOthers) },
  { pattern: /^\/api\/manage\/sysConfig\/page$/, params: () => ({}), middlewares: apiManageChain(onManageSysConfigPage) },
  { pattern: /^\/api\/manage\/cusConfig\/list$/, params: () => ({}), middlewares: apiManageChain(onManageCusConfigList) },
  { pattern: /^\/api\/manage\/cusConfig\/blockip$/, params: () => ({}), middlewares: apiManageChain(onManageCusConfigBlockIp) },
  { pattern: /^\/api\/manage\/cusConfig\/blockipList$/, params: () => ({}), middlewares: apiManageChain(onManageCusConfigBlockIpList) },
  { pattern: /^\/api\/manage\/cusConfig\/whiteip$/, params: () => ({}), middlewares: apiManageChain(onManageCusConfigWhiteIp) },
  { pattern: /^\/api\/manage\/batch\/list$/, params: () => ({}), middlewares: apiManageChain(onManageBatchList) },
  { pattern: /^\/api\/manage\/batch\/settings$/, params: () => ({}), middlewares: apiManageChain(onManageBatchSettings) },
  { pattern: /^\/api\/manage\/batch\/index\/chunk$/, params: () => ({}), middlewares: apiManageChain(onManageBatchIndexChunk) },
  { pattern: /^\/api\/manage\/batch\/index\/config$/, params: () => ({}), middlewares: apiManageChain(onManageBatchIndexConfig) },
  { pattern: /^\/api\/manage\/batch\/index\/finalize$/, params: () => ({}), middlewares: apiManageChain(onManageBatchIndexFinalize) },
  { pattern: /^\/api\/manage\/batch\/restore\/chunk$/, params: () => ({}), middlewares: apiManageChain(onManageBatchRestoreChunk) },

  { pattern: /^\/api\/login$/, params: () => ({}), middlewares: [checkDatabaseConfig, postOnly(onLoginPost)] },
  { pattern: /^\/api\/directoryTree$/, params: () => ({}), middlewares: [checkDatabaseConfig, getOnly(onDirectoryTreeGet)] },
  { pattern: /^\/api\/userConfig$/, params: () => ({}), middlewares: [checkDatabaseConfig, onUserConfigRequest] },
  { pattern: /^\/api\/channels$/, params: () => ({}), middlewares: [checkDatabaseConfig, onChannelsRequest] },
  { pattern: /^\/api\/fetchRes$/, params: () => ({}), middlewares: [checkDatabaseConfig, onFetchResRequest] },
  { pattern: /^\/api\/public\/list$/, params: () => ({}), middlewares: [checkDatabaseConfig, onPublicListRequest] },
  { pattern: /^\/api\/bing\/wallpaper$/, params: () => ({}), middlewares: [checkDatabaseConfig, onBingWallpaperRequest] },
];

export default {
  async fetch(request, env, ctx) {
    const pathname = new URL(request.url).pathname;

    for (const route of ROUTES) {
      const match = pathname.match(route.pattern);
      if (!match) continue;

      const params = route.params(match);
      try {
        return await runMiddlewareChain(request, env, ctx, params, route.middlewares);
      } catch (error) {
        console.error(`[worker] Error handling ${pathname}:`, error);
        return new Response(`Internal Server Error: ${error.message}`, { status: 500 });
      }
    }

    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response('Not Found', { status: 404 });
  },
};
