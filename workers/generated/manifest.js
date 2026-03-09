import * as module0 from '../../functions/api/_middleware.js';
import * as module1 from '../../functions/api/bing/wallpaper/index.js';
import * as module2 from '../../functions/api/channels.js';
import * as module3 from '../../functions/api/directoryTree.js';
import * as module4 from '../../functions/api/fetchRes.js';
import * as module5 from '../../functions/api/login.js';
import * as module6 from '../../functions/api/manage/_middleware.js';
import * as module7 from '../../functions/api/manage/apiTokens.js';
import * as module8 from '../../functions/api/manage/batch/index/chunk.js';
import * as module9 from '../../functions/api/manage/batch/index/config.js';
import * as module10 from '../../functions/api/manage/batch/index/finalize.js';
import * as module11 from '../../functions/api/manage/batch/list.js';
import * as module12 from '../../functions/api/manage/batch/restore/chunk.js';
import * as module13 from '../../functions/api/manage/batch/settings.js';
import * as module14 from '../../functions/api/manage/block/[[path]].js';
import * as module15 from '../../functions/api/manage/check.js';
import * as module16 from '../../functions/api/manage/cusConfig/blockip.js';
import * as module17 from '../../functions/api/manage/cusConfig/blockipList.js';
import * as module18 from '../../functions/api/manage/cusConfig/list.js';
import * as module19 from '../../functions/api/manage/cusConfig/whiteip.js';
import * as module20 from '../../functions/api/manage/delete/[[path]].js';
import * as module21 from '../../functions/api/manage/list.js';
import * as module22 from '../../functions/api/manage/login.js';
import * as module23 from '../../functions/api/manage/logout.js';
import * as module24 from '../../functions/api/manage/metadata/[[path]].js';
import * as module25 from '../../functions/api/manage/move/[[path]].js';
import * as module26 from '../../functions/api/manage/quota.js';
import * as module27 from '../../functions/api/manage/rename/[[path]].js';
import * as module28 from '../../functions/api/manage/sysConfig/others.js';
import * as module29 from '../../functions/api/manage/sysConfig/page.js';
import * as module30 from '../../functions/api/manage/sysConfig/security.js';
import * as module31 from '../../functions/api/manage/sysConfig/upload.js';
import * as module32 from '../../functions/api/manage/tags/[[path]].js';
import * as module33 from '../../functions/api/manage/tags/autocomplete.js';
import * as module34 from '../../functions/api/manage/tags/batch.js';
import * as module35 from '../../functions/api/manage/white/[[path]].js';
import * as module36 from '../../functions/api/public/list.js';
import * as module37 from '../../functions/api/userConfig.js';
import * as module38 from '../../functions/dav/_middleware.js';
import * as module39 from '../../functions/dav/[[path]].js';
import * as module40 from '../../functions/file/_middleware.js';
import * as module41 from '../../functions/file/[[path]].js';
import * as module42 from '../../functions/random/_middleware.js';
import * as module43 from '../../functions/random/index.js';
import * as module44 from '../../functions/upload/_middleware.js';
import * as module45 from '../../functions/upload/huggingface/commitUpload.js';
import * as module46 from '../../functions/upload/huggingface/getUploadUrl.js';
import * as module47 from '../../functions/upload/index.js';

export const workerRoutes = [
  {
    type: "index",
    routeSegments: ["api","bing","wallpaper"],
    relativePath: "functions/api/bing/wallpaper/index.js",
    mod: module1
  },
  {
    type: "exact",
    routeSegments: ["api","channels"],
    relativePath: "functions/api/channels.js",
    mod: module2
  },
  {
    type: "exact",
    routeSegments: ["api","directoryTree"],
    relativePath: "functions/api/directoryTree.js",
    mod: module3
  },
  {
    type: "exact",
    routeSegments: ["api","fetchRes"],
    relativePath: "functions/api/fetchRes.js",
    mod: module4
  },
  {
    type: "exact",
    routeSegments: ["api","login"],
    relativePath: "functions/api/login.js",
    mod: module5
  },
  {
    type: "exact",
    routeSegments: ["api","manage","apiTokens"],
    relativePath: "functions/api/manage/apiTokens.js",
    mod: module7
  },
  {
    type: "exact",
    routeSegments: ["api","manage","batch","index","chunk"],
    relativePath: "functions/api/manage/batch/index/chunk.js",
    mod: module8
  },
  {
    type: "exact",
    routeSegments: ["api","manage","batch","index","config"],
    relativePath: "functions/api/manage/batch/index/config.js",
    mod: module9
  },
  {
    type: "exact",
    routeSegments: ["api","manage","batch","index","finalize"],
    relativePath: "functions/api/manage/batch/index/finalize.js",
    mod: module10
  },
  {
    type: "exact",
    routeSegments: ["api","manage","batch","list"],
    relativePath: "functions/api/manage/batch/list.js",
    mod: module11
  },
  {
    type: "exact",
    routeSegments: ["api","manage","batch","restore","chunk"],
    relativePath: "functions/api/manage/batch/restore/chunk.js",
    mod: module12
  },
  {
    type: "exact",
    routeSegments: ["api","manage","batch","settings"],
    relativePath: "functions/api/manage/batch/settings.js",
    mod: module13
  },
  {
    type: "catchall",
    routeSegments: ["api","manage","block"],
    relativePath: "functions/api/manage/block/[[path]].js",
    mod: module14
  },
  {
    type: "exact",
    routeSegments: ["api","manage","check"],
    relativePath: "functions/api/manage/check.js",
    mod: module15
  },
  {
    type: "exact",
    routeSegments: ["api","manage","cusConfig","blockip"],
    relativePath: "functions/api/manage/cusConfig/blockip.js",
    mod: module16
  },
  {
    type: "exact",
    routeSegments: ["api","manage","cusConfig","blockipList"],
    relativePath: "functions/api/manage/cusConfig/blockipList.js",
    mod: module17
  },
  {
    type: "exact",
    routeSegments: ["api","manage","cusConfig","list"],
    relativePath: "functions/api/manage/cusConfig/list.js",
    mod: module18
  },
  {
    type: "exact",
    routeSegments: ["api","manage","cusConfig","whiteip"],
    relativePath: "functions/api/manage/cusConfig/whiteip.js",
    mod: module19
  },
  {
    type: "catchall",
    routeSegments: ["api","manage","delete"],
    relativePath: "functions/api/manage/delete/[[path]].js",
    mod: module20
  },
  {
    type: "exact",
    routeSegments: ["api","manage","list"],
    relativePath: "functions/api/manage/list.js",
    mod: module21
  },
  {
    type: "exact",
    routeSegments: ["api","manage","login"],
    relativePath: "functions/api/manage/login.js",
    mod: module22
  },
  {
    type: "exact",
    routeSegments: ["api","manage","logout"],
    relativePath: "functions/api/manage/logout.js",
    mod: module23
  },
  {
    type: "catchall",
    routeSegments: ["api","manage","metadata"],
    relativePath: "functions/api/manage/metadata/[[path]].js",
    mod: module24
  },
  {
    type: "catchall",
    routeSegments: ["api","manage","move"],
    relativePath: "functions/api/manage/move/[[path]].js",
    mod: module25
  },
  {
    type: "exact",
    routeSegments: ["api","manage","quota"],
    relativePath: "functions/api/manage/quota.js",
    mod: module26
  },
  {
    type: "catchall",
    routeSegments: ["api","manage","rename"],
    relativePath: "functions/api/manage/rename/[[path]].js",
    mod: module27
  },
  {
    type: "exact",
    routeSegments: ["api","manage","sysConfig","others"],
    relativePath: "functions/api/manage/sysConfig/others.js",
    mod: module28
  },
  {
    type: "exact",
    routeSegments: ["api","manage","sysConfig","page"],
    relativePath: "functions/api/manage/sysConfig/page.js",
    mod: module29
  },
  {
    type: "exact",
    routeSegments: ["api","manage","sysConfig","security"],
    relativePath: "functions/api/manage/sysConfig/security.js",
    mod: module30
  },
  {
    type: "exact",
    routeSegments: ["api","manage","sysConfig","upload"],
    relativePath: "functions/api/manage/sysConfig/upload.js",
    mod: module31
  },
  {
    type: "catchall",
    routeSegments: ["api","manage","tags"],
    relativePath: "functions/api/manage/tags/[[path]].js",
    mod: module32
  },
  {
    type: "exact",
    routeSegments: ["api","manage","tags","autocomplete"],
    relativePath: "functions/api/manage/tags/autocomplete.js",
    mod: module33
  },
  {
    type: "exact",
    routeSegments: ["api","manage","tags","batch"],
    relativePath: "functions/api/manage/tags/batch.js",
    mod: module34
  },
  {
    type: "catchall",
    routeSegments: ["api","manage","white"],
    relativePath: "functions/api/manage/white/[[path]].js",
    mod: module35
  },
  {
    type: "exact",
    routeSegments: ["api","public","list"],
    relativePath: "functions/api/public/list.js",
    mod: module36
  },
  {
    type: "exact",
    routeSegments: ["api","userConfig"],
    relativePath: "functions/api/userConfig.js",
    mod: module37
  },
  {
    type: "catchall",
    routeSegments: ["dav"],
    relativePath: "functions/dav/[[path]].js",
    mod: module39
  },
  {
    type: "catchall",
    routeSegments: ["file"],
    relativePath: "functions/file/[[path]].js",
    mod: module41
  },
  {
    type: "index",
    routeSegments: ["random"],
    relativePath: "functions/random/index.js",
    mod: module43
  },
  {
    type: "exact",
    routeSegments: ["upload","huggingface","commitUpload"],
    relativePath: "functions/upload/huggingface/commitUpload.js",
    mod: module45
  },
  {
    type: "exact",
    routeSegments: ["upload","huggingface","getUploadUrl"],
    relativePath: "functions/upload/huggingface/getUploadUrl.js",
    mod: module46
  },
  {
    type: "index",
    routeSegments: ["upload"],
    relativePath: "functions/upload/index.js",
    mod: module47
  }
];

export const workerMiddlewares = [
  {
    dirSegments: ["api"],
    relativePath: "functions/api/_middleware.js",
    mod: module0
  },
  {
    dirSegments: ["api","manage"],
    relativePath: "functions/api/manage/_middleware.js",
    mod: module6
  },
  {
    dirSegments: ["dav"],
    relativePath: "functions/dav/_middleware.js",
    mod: module38
  },
  {
    dirSegments: ["file"],
    relativePath: "functions/file/_middleware.js",
    mod: module40
  },
  {
    dirSegments: ["random"],
    relativePath: "functions/random/_middleware.js",
    mod: module42
  },
  {
    dirSegments: ["upload"],
    relativePath: "functions/upload/_middleware.js",
    mod: module44
  }
];
