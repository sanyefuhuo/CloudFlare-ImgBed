import { workerMiddlewares, workerRoutes } from './generated/manifest.js';

function splitPathname(pathname) {
  return pathname.split('/').filter(Boolean);
}

function startsWithSegments(parts, prefix) {
  if (prefix.length > parts.length) {
    return false;
  }

  for (let i = 0; i < prefix.length; i++) {
    if (parts[i] !== prefix[i]) {
      return false;
    }
  }

  return true;
}

function findFunctionRoute(pathname) {
  const parts = splitPathname(pathname);

  for (const route of workerRoutes) {
    if (route.type === 'exact' && route.routeSegments.length === parts.length && startsWithSegments(parts, route.routeSegments)) {
      return { route, params: {} };
    }
  }

  for (const route of workerRoutes) {
    if (route.type === 'index' && route.routeSegments.length === parts.length && startsWithSegments(parts, route.routeSegments)) {
      return { route, params: {} };
    }
  }

  for (const route of workerRoutes) {
    if (route.type === 'catchall' && startsWithSegments(parts, route.routeSegments)) {
      return {
        route,
        params: {
          path: parts.slice(route.routeSegments.length)
        }
      };
    }
  }

  return null;
}

function findMiddlewares(pathname) {
  const parts = splitPathname(pathname);
  const matched = [];

  const sorted = [...workerMiddlewares].sort((a, b) => a.dirSegments.length - b.dirSegments.length);
  for (const middleware of sorted) {
    if (startsWithSegments(parts, middleware.dirSegments)) {
      const handlers = Array.isArray(middleware.mod.onRequest)
        ? middleware.mod.onRequest
        : middleware.mod.onRequest
          ? [middleware.mod.onRequest]
          : [];
      matched.push(...handlers);
    }
  }

  return matched;
}

async function executeChain(middlewares, handler, context) {
  const chain = [...middlewares, handler];
  let index = 0;

  context.next = async function next() {
    if (index < chain.length) {
      const fn = chain[index++];
      return fn(context);
    }

    return new Response('Not Found', { status: 404 });
  };

  return context.next();
}

function resolveHandler(mod, method) {
  const methodName = `onRequest${method.charAt(0)}${method.slice(1).toLowerCase()}`;
  if (typeof mod[methodName] === 'function') {
    return mod[methodName];
  }

  if (Array.isArray(mod.onRequest) && mod.onRequest.length > 0) {
    return mod.onRequest[mod.onRequest.length - 1];
  }

  if (typeof mod.onRequest === 'function') {
    return mod.onRequest;
  }

  return null;
}

async function handleFunctionRequest(request, env, ctx) {
  const pathname = new URL(request.url).pathname;
  const match = findFunctionRoute(pathname);
  if (!match) {
    return null;
  }

  const { route, params } = match;
  const handler = resolveHandler(route.mod, request.method.toUpperCase());
  if (!handler) {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const middlewares = findMiddlewares(pathname);
  if (Array.isArray(route.mod.onRequest) && route.mod.onRequest.length > 1 && handler === route.mod.onRequest[route.mod.onRequest.length - 1]) {
    middlewares.push(...route.mod.onRequest.slice(0, -1));
  }

  const context = {
    request,
    env,
    params,
    waitUntil: (promise) => {
      if (promise) {
        ctx.waitUntil(promise);
      }
    },
    next: null,
    data: {},
  };

  return executeChain(middlewares, handler, context);
}

export default {
  async fetch(request, env, ctx) {
    try {
      const response = await handleFunctionRequest(request, env, ctx);
      if (response) {
        return response;
      }

      if (env.ASSETS && typeof env.ASSETS.fetch === 'function') {
        return env.ASSETS.fetch(request);
      }

      return new Response('Asset binding not configured', { status: 500 });
    } catch (error) {
      console.error('Worker runtime error:', error);
      return new Response(`Internal Server Error: ${error.message}`, { status: 500 });
    }
  }
};
