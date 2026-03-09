var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb2, mod) => function __require() {
  return mod || (0, cb2[__getOwnPropNames(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
var fromUtf8;
var init_fromUtf8_browser = __esm({
  "node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js"() {
    fromUtf8 = /* @__PURE__ */ __name((input) => new TextEncoder().encode(input), "fromUtf8");
  }
});

// node_modules/@smithy/util-utf8/dist-es/toUint8Array.js
var toUint8Array;
var init_toUint8Array = __esm({
  "node_modules/@smithy/util-utf8/dist-es/toUint8Array.js"() {
    init_fromUtf8_browser();
    toUint8Array = /* @__PURE__ */ __name((data) => {
      if (typeof data === "string") {
        return fromUtf8(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    }, "toUint8Array");
  }
});

// node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js
var toUtf8;
var init_toUtf8_browser = __esm({
  "node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js"() {
    toUtf8 = /* @__PURE__ */ __name((input) => {
      if (typeof input === "string") {
        return input;
      }
      if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
      }
      return new TextDecoder("utf-8").decode(input);
    }, "toUtf8");
  }
});

// node_modules/@smithy/util-utf8/dist-es/index.js
var init_dist_es = __esm({
  "node_modules/@smithy/util-utf8/dist-es/index.js"() {
    init_fromUtf8_browser();
    init_toUint8Array();
    init_toUtf8_browser();
  }
});

// node_modules/bowser/es5.js
var require_es5 = __commonJS({
  "node_modules/bowser/es5.js"(exports2, module) {
    !(function(e2, t2) {
      "object" == typeof exports2 && "object" == typeof module ? module.exports = t2() : "function" == typeof define && define.amd ? define([], t2) : "object" == typeof exports2 ? exports2.bowser = t2() : e2.bowser = t2();
    })(exports2, (function() {
      return (function(e2) {
        var t2 = {};
        function r2(i2) {
          if (t2[i2]) return t2[i2].exports;
          var n2 = t2[i2] = { i: i2, l: false, exports: {} };
          return e2[i2].call(n2.exports, n2, n2.exports, r2), n2.l = true, n2.exports;
        }
        __name(r2, "r");
        return r2.m = e2, r2.c = t2, r2.d = function(e3, t3, i2) {
          r2.o(e3, t3) || Object.defineProperty(e3, t3, { enumerable: true, get: i2 });
        }, r2.r = function(e3) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
        }, r2.t = function(e3, t3) {
          if (1 & t3 && (e3 = r2(e3)), 8 & t3) return e3;
          if (4 & t3 && "object" == typeof e3 && e3 && e3.__esModule) return e3;
          var i2 = /* @__PURE__ */ Object.create(null);
          if (r2.r(i2), Object.defineProperty(i2, "default", { enumerable: true, value: e3 }), 2 & t3 && "string" != typeof e3) for (var n2 in e3) r2.d(i2, n2, function(t4) {
            return e3[t4];
          }.bind(null, n2));
          return i2;
        }, r2.n = function(e3) {
          var t3 = e3 && e3.__esModule ? function() {
            return e3.default;
          } : function() {
            return e3;
          };
          return r2.d(t3, "a", t3), t3;
        }, r2.o = function(e3, t3) {
          return Object.prototype.hasOwnProperty.call(e3, t3);
        }, r2.p = "", r2(r2.s = 90);
      })({ 17: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var i2 = r2(18), n2 = (function() {
          function e3() {
          }
          __name(e3, "e");
          return e3.getFirstMatch = function(e4, t3) {
            var r3 = t3.match(e4);
            return r3 && r3.length > 0 && r3[1] || "";
          }, e3.getSecondMatch = function(e4, t3) {
            var r3 = t3.match(e4);
            return r3 && r3.length > 1 && r3[2] || "";
          }, e3.matchAndReturnConst = function(e4, t3, r3) {
            if (e4.test(t3)) return r3;
          }, e3.getWindowsVersionName = function(e4) {
            switch (e4) {
              case "NT":
                return "NT";
              case "XP":
                return "XP";
              case "NT 5.0":
                return "2000";
              case "NT 5.1":
                return "XP";
              case "NT 5.2":
                return "2003";
              case "NT 6.0":
                return "Vista";
              case "NT 6.1":
                return "7";
              case "NT 6.2":
                return "8";
              case "NT 6.3":
                return "8.1";
              case "NT 10.0":
                return "10";
              default:
                return;
            }
          }, e3.getMacOSVersionName = function(e4) {
            var t3 = e4.split(".").splice(0, 2).map((function(e5) {
              return parseInt(e5, 10) || 0;
            }));
            t3.push(0);
            var r3 = t3[0], i3 = t3[1];
            if (10 === r3) switch (i3) {
              case 5:
                return "Leopard";
              case 6:
                return "Snow Leopard";
              case 7:
                return "Lion";
              case 8:
                return "Mountain Lion";
              case 9:
                return "Mavericks";
              case 10:
                return "Yosemite";
              case 11:
                return "El Capitan";
              case 12:
                return "Sierra";
              case 13:
                return "High Sierra";
              case 14:
                return "Mojave";
              case 15:
                return "Catalina";
              default:
                return;
            }
            switch (r3) {
              case 11:
                return "Big Sur";
              case 12:
                return "Monterey";
              case 13:
                return "Ventura";
              case 14:
                return "Sonoma";
              case 15:
                return "Sequoia";
              default:
                return;
            }
          }, e3.getAndroidVersionName = function(e4) {
            var t3 = e4.split(".").splice(0, 2).map((function(e5) {
              return parseInt(e5, 10) || 0;
            }));
            if (t3.push(0), !(1 === t3[0] && t3[1] < 5)) return 1 === t3[0] && t3[1] < 6 ? "Cupcake" : 1 === t3[0] && t3[1] >= 6 ? "Donut" : 2 === t3[0] && t3[1] < 2 ? "Eclair" : 2 === t3[0] && 2 === t3[1] ? "Froyo" : 2 === t3[0] && t3[1] > 2 ? "Gingerbread" : 3 === t3[0] ? "Honeycomb" : 4 === t3[0] && t3[1] < 1 ? "Ice Cream Sandwich" : 4 === t3[0] && t3[1] < 4 ? "Jelly Bean" : 4 === t3[0] && t3[1] >= 4 ? "KitKat" : 5 === t3[0] ? "Lollipop" : 6 === t3[0] ? "Marshmallow" : 7 === t3[0] ? "Nougat" : 8 === t3[0] ? "Oreo" : 9 === t3[0] ? "Pie" : void 0;
          }, e3.getVersionPrecision = function(e4) {
            return e4.split(".").length;
          }, e3.compareVersions = function(t3, r3, i3) {
            void 0 === i3 && (i3 = false);
            var n3 = e3.getVersionPrecision(t3), a2 = e3.getVersionPrecision(r3), o2 = Math.max(n3, a2), s2 = 0, u2 = e3.map([t3, r3], (function(t4) {
              var r4 = o2 - e3.getVersionPrecision(t4), i4 = t4 + new Array(r4 + 1).join(".0");
              return e3.map(i4.split("."), (function(e4) {
                return new Array(20 - e4.length).join("0") + e4;
              })).reverse();
            }));
            for (i3 && (s2 = o2 - Math.min(n3, a2)), o2 -= 1; o2 >= s2; ) {
              if (u2[0][o2] > u2[1][o2]) return 1;
              if (u2[0][o2] === u2[1][o2]) {
                if (o2 === s2) return 0;
                o2 -= 1;
              } else if (u2[0][o2] < u2[1][o2]) return -1;
            }
          }, e3.map = function(e4, t3) {
            var r3, i3 = [];
            if (Array.prototype.map) return Array.prototype.map.call(e4, t3);
            for (r3 = 0; r3 < e4.length; r3 += 1) i3.push(t3(e4[r3]));
            return i3;
          }, e3.find = function(e4, t3) {
            var r3, i3;
            if (Array.prototype.find) return Array.prototype.find.call(e4, t3);
            for (r3 = 0, i3 = e4.length; r3 < i3; r3 += 1) {
              var n3 = e4[r3];
              if (t3(n3, r3)) return n3;
            }
          }, e3.assign = function(e4) {
            for (var t3, r3, i3 = e4, n3 = arguments.length, a2 = new Array(n3 > 1 ? n3 - 1 : 0), o2 = 1; o2 < n3; o2++) a2[o2 - 1] = arguments[o2];
            if (Object.assign) return Object.assign.apply(Object, [e4].concat(a2));
            var s2 = /* @__PURE__ */ __name(function() {
              var e5 = a2[t3];
              "object" == typeof e5 && null !== e5 && Object.keys(e5).forEach((function(t4) {
                i3[t4] = e5[t4];
              }));
            }, "s");
            for (t3 = 0, r3 = a2.length; t3 < r3; t3 += 1) s2();
            return e4;
          }, e3.getBrowserAlias = function(e4) {
            return i2.BROWSER_ALIASES_MAP[e4];
          }, e3.getBrowserTypeByAlias = function(e4) {
            return i2.BROWSER_MAP[e4] || "";
          }, e3;
        })();
        t2.default = n2, e2.exports = t2.default;
      }, 18: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.ENGINE_MAP = t2.OS_MAP = t2.PLATFORMS_MAP = t2.BROWSER_MAP = t2.BROWSER_ALIASES_MAP = void 0;
        t2.BROWSER_ALIASES_MAP = { AmazonBot: "amazonbot", "Amazon Silk": "amazon_silk", "Android Browser": "android", BaiduSpider: "baiduspider", Bada: "bada", BingCrawler: "bingcrawler", Brave: "brave", BlackBerry: "blackberry", "ChatGPT-User": "chatgpt_user", Chrome: "chrome", ClaudeBot: "claudebot", Chromium: "chromium", Diffbot: "diffbot", DuckDuckBot: "duckduckbot", DuckDuckGo: "duckduckgo", Electron: "electron", Epiphany: "epiphany", FacebookExternalHit: "facebookexternalhit", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", GPTBot: "gptbot", "Internet Explorer": "ie", InternetArchiveCrawler: "internetarchivecrawler", "K-Meleon": "k_meleon", LibreWolf: "librewolf", Linespider: "linespider", Maxthon: "maxthon", "Meta-ExternalAds": "meta_externalads", "Meta-ExternalAgent": "meta_externalagent", "Meta-ExternalFetcher": "meta_externalfetcher", "Meta-WebIndexer": "meta_webindexer", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", "OAI-SearchBot": "oai_searchbot", Omgilibot: "omgilibot", Opera: "opera", "Opera Coast": "opera_coast", "Pale Moon": "pale_moon", PerplexityBot: "perplexitybot", "Perplexity-User": "perplexity_user", PhantomJS: "phantomjs", PingdomBot: "pingdombot", Puffin: "puffin", QQ: "qq", QQLite: "qqlite", QupZilla: "qupzilla", Roku: "roku", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SlackBot: "slackbot", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", "Sogou Browser": "sogou", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", YahooSlurp: "yahooslurp", "Yandex Browser": "yandex", YandexBot: "yandexbot", YouBot: "youbot" };
        t2.BROWSER_MAP = { amazonbot: "AmazonBot", amazon_silk: "Amazon Silk", android: "Android Browser", baiduspider: "BaiduSpider", bada: "Bada", bingcrawler: "BingCrawler", blackberry: "BlackBerry", brave: "Brave", chatgpt_user: "ChatGPT-User", chrome: "Chrome", claudebot: "ClaudeBot", chromium: "Chromium", diffbot: "Diffbot", duckduckbot: "DuckDuckBot", duckduckgo: "DuckDuckGo", edge: "Microsoft Edge", electron: "Electron", epiphany: "Epiphany", facebookexternalhit: "FacebookExternalHit", firefox: "Firefox", focus: "Focus", generic: "Generic", google_search: "Google Search", googlebot: "Googlebot", gptbot: "GPTBot", ie: "Internet Explorer", internetarchivecrawler: "InternetArchiveCrawler", k_meleon: "K-Meleon", librewolf: "LibreWolf", linespider: "Linespider", maxthon: "Maxthon", meta_externalads: "Meta-ExternalAds", meta_externalagent: "Meta-ExternalAgent", meta_externalfetcher: "Meta-ExternalFetcher", meta_webindexer: "Meta-WebIndexer", mz: "MZ Browser", naver: "NAVER Whale Browser", oai_searchbot: "OAI-SearchBot", omgilibot: "Omgilibot", opera: "Opera", opera_coast: "Opera Coast", pale_moon: "Pale Moon", perplexitybot: "PerplexityBot", perplexity_user: "Perplexity-User", phantomjs: "PhantomJS", pingdombot: "PingdomBot", puffin: "Puffin", qq: "QQ Browser", qqlite: "QQ Browser Lite", qupzilla: "QupZilla", roku: "Roku", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", slackbot: "SlackBot", sleipnir: "Sleipnir", sogou: "Sogou Browser", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yahooslurp: "YahooSlurp", yandex: "Yandex Browser", yandexbot: "YandexBot", youbot: "YouBot" };
        t2.PLATFORMS_MAP = { bot: "bot", desktop: "desktop", mobile: "mobile", tablet: "tablet", tv: "tv" };
        t2.OS_MAP = { Android: "Android", Bada: "Bada", BlackBerry: "BlackBerry", ChromeOS: "Chrome OS", HarmonyOS: "HarmonyOS", iOS: "iOS", Linux: "Linux", MacOS: "macOS", PlayStation4: "PlayStation 4", Roku: "Roku", Tizen: "Tizen", WebOS: "WebOS", Windows: "Windows", WindowsPhone: "Windows Phone" };
        t2.ENGINE_MAP = { Blink: "Blink", EdgeHTML: "EdgeHTML", Gecko: "Gecko", Presto: "Presto", Trident: "Trident", WebKit: "WebKit" };
      }, 90: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var i2, n2 = (i2 = r2(91)) && i2.__esModule ? i2 : { default: i2 }, a2 = r2(18);
        function o2(e3, t3) {
          for (var r3 = 0; r3 < t3.length; r3++) {
            var i3 = t3[r3];
            i3.enumerable = i3.enumerable || false, i3.configurable = true, "value" in i3 && (i3.writable = true), Object.defineProperty(e3, i3.key, i3);
          }
        }
        __name(o2, "o");
        var s2 = (function() {
          function e3() {
          }
          __name(e3, "e");
          var t3, r3, i3;
          return e3.getParser = function(e4, t4, r4) {
            if (void 0 === t4 && (t4 = false), void 0 === r4 && (r4 = null), "string" != typeof e4) throw new Error("UserAgent should be a string");
            return new n2.default(e4, t4, r4);
          }, e3.parse = function(e4, t4) {
            return void 0 === t4 && (t4 = null), new n2.default(e4, t4).getResult();
          }, t3 = e3, i3 = [{ key: "BROWSER_MAP", get: /* @__PURE__ */ __name(function() {
            return a2.BROWSER_MAP;
          }, "get") }, { key: "ENGINE_MAP", get: /* @__PURE__ */ __name(function() {
            return a2.ENGINE_MAP;
          }, "get") }, { key: "OS_MAP", get: /* @__PURE__ */ __name(function() {
            return a2.OS_MAP;
          }, "get") }, { key: "PLATFORMS_MAP", get: /* @__PURE__ */ __name(function() {
            return a2.PLATFORMS_MAP;
          }, "get") }], (r3 = null) && o2(t3.prototype, r3), i3 && o2(t3, i3), e3;
        })();
        t2.default = s2, e2.exports = t2.default;
      }, 91: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var i2 = u2(r2(92)), n2 = u2(r2(93)), a2 = u2(r2(94)), o2 = u2(r2(95)), s2 = u2(r2(17));
        function u2(e3) {
          return e3 && e3.__esModule ? e3 : { default: e3 };
        }
        __name(u2, "u");
        var d2 = (function() {
          function e3(e4, t4, r3) {
            if (void 0 === t4 && (t4 = false), void 0 === r3 && (r3 = null), null == e4 || "" === e4) throw new Error("UserAgent parameter can't be empty");
            this._ua = e4;
            var i3 = false;
            "boolean" == typeof t4 ? (i3 = t4, this._hints = r3) : this._hints = null != t4 && "object" == typeof t4 ? t4 : null, this.parsedResult = {}, true !== i3 && this.parse();
          }
          __name(e3, "e");
          var t3 = e3.prototype;
          return t3.getHints = function() {
            return this._hints;
          }, t3.hasBrand = function(e4) {
            if (!this._hints || !Array.isArray(this._hints.brands)) return false;
            var t4 = e4.toLowerCase();
            return this._hints.brands.some((function(e5) {
              return e5.brand && e5.brand.toLowerCase() === t4;
            }));
          }, t3.getBrandVersion = function(e4) {
            if (this._hints && Array.isArray(this._hints.brands)) {
              var t4 = e4.toLowerCase(), r3 = this._hints.brands.find((function(e5) {
                return e5.brand && e5.brand.toLowerCase() === t4;
              }));
              return r3 ? r3.version : void 0;
            }
          }, t3.getUA = function() {
            return this._ua;
          }, t3.test = function(e4) {
            return e4.test(this._ua);
          }, t3.parseBrowser = function() {
            var e4 = this;
            this.parsedResult.browser = {};
            var t4 = s2.default.find(i2.default, (function(t5) {
              if ("function" == typeof t5.test) return t5.test(e4);
              if (Array.isArray(t5.test)) return t5.test.some((function(t6) {
                return e4.test(t6);
              }));
              throw new Error("Browser's test function is not valid");
            }));
            return t4 && (this.parsedResult.browser = t4.describe(this.getUA(), this)), this.parsedResult.browser;
          }, t3.getBrowser = function() {
            return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
          }, t3.getBrowserName = function(e4) {
            return e4 ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
          }, t3.getBrowserVersion = function() {
            return this.getBrowser().version;
          }, t3.getOS = function() {
            return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
          }, t3.parseOS = function() {
            var e4 = this;
            this.parsedResult.os = {};
            var t4 = s2.default.find(n2.default, (function(t5) {
              if ("function" == typeof t5.test) return t5.test(e4);
              if (Array.isArray(t5.test)) return t5.test.some((function(t6) {
                return e4.test(t6);
              }));
              throw new Error("Browser's test function is not valid");
            }));
            return t4 && (this.parsedResult.os = t4.describe(this.getUA())), this.parsedResult.os;
          }, t3.getOSName = function(e4) {
            var t4 = this.getOS().name;
            return e4 ? String(t4).toLowerCase() || "" : t4 || "";
          }, t3.getOSVersion = function() {
            return this.getOS().version;
          }, t3.getPlatform = function() {
            return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
          }, t3.getPlatformType = function(e4) {
            void 0 === e4 && (e4 = false);
            var t4 = this.getPlatform().type;
            return e4 ? String(t4).toLowerCase() || "" : t4 || "";
          }, t3.parsePlatform = function() {
            var e4 = this;
            this.parsedResult.platform = {};
            var t4 = s2.default.find(a2.default, (function(t5) {
              if ("function" == typeof t5.test) return t5.test(e4);
              if (Array.isArray(t5.test)) return t5.test.some((function(t6) {
                return e4.test(t6);
              }));
              throw new Error("Browser's test function is not valid");
            }));
            return t4 && (this.parsedResult.platform = t4.describe(this.getUA())), this.parsedResult.platform;
          }, t3.getEngine = function() {
            return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
          }, t3.getEngineName = function(e4) {
            return e4 ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
          }, t3.parseEngine = function() {
            var e4 = this;
            this.parsedResult.engine = {};
            var t4 = s2.default.find(o2.default, (function(t5) {
              if ("function" == typeof t5.test) return t5.test(e4);
              if (Array.isArray(t5.test)) return t5.test.some((function(t6) {
                return e4.test(t6);
              }));
              throw new Error("Browser's test function is not valid");
            }));
            return t4 && (this.parsedResult.engine = t4.describe(this.getUA())), this.parsedResult.engine;
          }, t3.parse = function() {
            return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
          }, t3.getResult = function() {
            return s2.default.assign({}, this.parsedResult);
          }, t3.satisfies = function(e4) {
            var t4 = this, r3 = {}, i3 = 0, n3 = {}, a3 = 0;
            if (Object.keys(e4).forEach((function(t5) {
              var o4 = e4[t5];
              "string" == typeof o4 ? (n3[t5] = o4, a3 += 1) : "object" == typeof o4 && (r3[t5] = o4, i3 += 1);
            })), i3 > 0) {
              var o3 = Object.keys(r3), u3 = s2.default.find(o3, (function(e5) {
                return t4.isOS(e5);
              }));
              if (u3) {
                var d3 = this.satisfies(r3[u3]);
                if (void 0 !== d3) return d3;
              }
              var c2 = s2.default.find(o3, (function(e5) {
                return t4.isPlatform(e5);
              }));
              if (c2) {
                var f2 = this.satisfies(r3[c2]);
                if (void 0 !== f2) return f2;
              }
            }
            if (a3 > 0) {
              var l2 = Object.keys(n3), b2 = s2.default.find(l2, (function(e5) {
                return t4.isBrowser(e5, true);
              }));
              if (void 0 !== b2) return this.compareVersion(n3[b2]);
            }
          }, t3.isBrowser = function(e4, t4) {
            void 0 === t4 && (t4 = false);
            var r3 = this.getBrowserName().toLowerCase(), i3 = e4.toLowerCase(), n3 = s2.default.getBrowserTypeByAlias(i3);
            return t4 && n3 && (i3 = n3.toLowerCase()), i3 === r3;
          }, t3.compareVersion = function(e4) {
            var t4 = [0], r3 = e4, i3 = false, n3 = this.getBrowserVersion();
            if ("string" == typeof n3) return ">" === e4[0] || "<" === e4[0] ? (r3 = e4.substr(1), "=" === e4[1] ? (i3 = true, r3 = e4.substr(2)) : t4 = [], ">" === e4[0] ? t4.push(1) : t4.push(-1)) : "=" === e4[0] ? r3 = e4.substr(1) : "~" === e4[0] && (i3 = true, r3 = e4.substr(1)), t4.indexOf(s2.default.compareVersions(n3, r3, i3)) > -1;
          }, t3.isOS = function(e4) {
            return this.getOSName(true) === String(e4).toLowerCase();
          }, t3.isPlatform = function(e4) {
            return this.getPlatformType(true) === String(e4).toLowerCase();
          }, t3.isEngine = function(e4) {
            return this.getEngineName(true) === String(e4).toLowerCase();
          }, t3.is = function(e4, t4) {
            return void 0 === t4 && (t4 = false), this.isBrowser(e4, t4) || this.isOS(e4) || this.isPlatform(e4);
          }, t3.some = function(e4) {
            var t4 = this;
            return void 0 === e4 && (e4 = []), e4.some((function(e5) {
              return t4.is(e5);
            }));
          }, e3;
        })();
        t2.default = d2, e2.exports = t2.default;
      }, 92: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var i2, n2 = (i2 = r2(17)) && i2.__esModule ? i2 : { default: i2 };
        var a2 = /version\/(\d+(\.?_?\d+)+)/i, o2 = [{ test: [/gptbot/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "GPTBot" }, r3 = n2.default.getFirstMatch(/gptbot\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/chatgpt-user/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "ChatGPT-User" }, r3 = n2.default.getFirstMatch(/chatgpt-user\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/oai-searchbot/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "OAI-SearchBot" }, r3 = n2.default.getFirstMatch(/oai-searchbot\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/claudebot/i, /claude-web/i, /claude-user/i, /claude-searchbot/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "ClaudeBot" }, r3 = n2.default.getFirstMatch(/(?:claudebot|claude-web|claude-user|claude-searchbot)\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/omgilibot/i, /webzio-extended/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Omgilibot" }, r3 = n2.default.getFirstMatch(/(?:omgilibot|webzio-extended)\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/diffbot/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Diffbot" }, r3 = n2.default.getFirstMatch(/diffbot\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/perplexitybot/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "PerplexityBot" }, r3 = n2.default.getFirstMatch(/perplexitybot\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/perplexity-user/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Perplexity-User" }, r3 = n2.default.getFirstMatch(/perplexity-user\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/youbot/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "YouBot" }, r3 = n2.default.getFirstMatch(/youbot\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/meta-webindexer/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Meta-WebIndexer" }, r3 = n2.default.getFirstMatch(/meta-webindexer\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/meta-externalads/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Meta-ExternalAds" }, r3 = n2.default.getFirstMatch(/meta-externalads\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/meta-externalagent/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Meta-ExternalAgent" }, r3 = n2.default.getFirstMatch(/meta-externalagent\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/meta-externalfetcher/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Meta-ExternalFetcher" }, r3 = n2.default.getFirstMatch(/meta-externalfetcher\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/googlebot/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Googlebot" }, r3 = n2.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/linespider/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Linespider" }, r3 = n2.default.getFirstMatch(/(?:linespider)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/amazonbot/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "AmazonBot" }, r3 = n2.default.getFirstMatch(/amazonbot\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/bingbot/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "BingCrawler" }, r3 = n2.default.getFirstMatch(/bingbot\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/baiduspider/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "BaiduSpider" }, r3 = n2.default.getFirstMatch(/baiduspider\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/duckduckbot/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "DuckDuckBot" }, r3 = n2.default.getFirstMatch(/duckduckbot\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/ia_archiver/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "InternetArchiveCrawler" }, r3 = n2.default.getFirstMatch(/ia_archiver\/(\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/facebookexternalhit/i, /facebookcatalog/i], describe: /* @__PURE__ */ __name(function() {
          return { name: "FacebookExternalHit" };
        }, "describe") }, { test: [/slackbot/i, /slack-imgProxy/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "SlackBot" }, r3 = n2.default.getFirstMatch(/(?:slackbot|slack-imgproxy)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/yahoo!?[\s/]*slurp/i], describe: /* @__PURE__ */ __name(function() {
          return { name: "YahooSlurp" };
        }, "describe") }, { test: [/yandexbot/i, /yandexmobilebot/i], describe: /* @__PURE__ */ __name(function() {
          return { name: "YandexBot" };
        }, "describe") }, { test: [/pingdom/i], describe: /* @__PURE__ */ __name(function() {
          return { name: "PingdomBot" };
        }, "describe") }, { test: [/opera/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Opera" }, r3 = n2.default.getFirstMatch(a2, e3) || n2.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/opr\/|opios/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Opera" }, r3 = n2.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/SamsungBrowser/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Samsung Internet for Android" }, r3 = n2.default.getFirstMatch(a2, e3) || n2.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/Whale/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "NAVER Whale Browser" }, r3 = n2.default.getFirstMatch(a2, e3) || n2.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/PaleMoon/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Pale Moon" }, r3 = n2.default.getFirstMatch(a2, e3) || n2.default.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/MZBrowser/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "MZ Browser" }, r3 = n2.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/focus/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Focus" }, r3 = n2.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/swing/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Swing" }, r3 = n2.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/coast/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Opera Coast" }, r3 = n2.default.getFirstMatch(a2, e3) || n2.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/opt\/\d+(?:.?_?\d+)+/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Opera Touch" }, r3 = n2.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/yabrowser/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Yandex Browser" }, r3 = n2.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/ucbrowser/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "UC Browser" }, r3 = n2.default.getFirstMatch(a2, e3) || n2.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/Maxthon|mxios/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Maxthon" }, r3 = n2.default.getFirstMatch(a2, e3) || n2.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/epiphany/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Epiphany" }, r3 = n2.default.getFirstMatch(a2, e3) || n2.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/puffin/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Puffin" }, r3 = n2.default.getFirstMatch(a2, e3) || n2.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/sleipnir/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Sleipnir" }, r3 = n2.default.getFirstMatch(a2, e3) || n2.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/k-meleon/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "K-Meleon" }, r3 = n2.default.getFirstMatch(a2, e3) || n2.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/micromessenger/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "WeChat" }, r3 = n2.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/qqbrowser/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: /qqbrowserlite/i.test(e3) ? "QQ Browser Lite" : "QQ Browser" }, r3 = n2.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/msie|trident/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Internet Explorer" }, r3 = n2.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/\sedg\//i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Microsoft Edge" }, r3 = n2.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/edg([ea]|ios)/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Microsoft Edge" }, r3 = n2.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/vivaldi/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Vivaldi" }, r3 = n2.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/seamonkey/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "SeaMonkey" }, r3 = n2.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/sailfish/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Sailfish" }, r3 = n2.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/silk/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Amazon Silk" }, r3 = n2.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/phantom/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "PhantomJS" }, r3 = n2.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/slimerjs/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "SlimerJS" }, r3 = n2.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "BlackBerry" }, r3 = n2.default.getFirstMatch(a2, e3) || n2.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/(web|hpw)[o0]s/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "WebOS Browser" }, r3 = n2.default.getFirstMatch(a2, e3) || n2.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/bada/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Bada" }, r3 = n2.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/tizen/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Tizen" }, r3 = n2.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/qupzilla/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "QupZilla" }, r3 = n2.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/librewolf/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "LibreWolf" }, r3 = n2.default.getFirstMatch(/(?:librewolf)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/firefox|iceweasel|fxios/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Firefox" }, r3 = n2.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/electron/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Electron" }, r3 = n2.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/sogoumobilebrowser/i, /metasr/i, /se 2\.[x]/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Sogou Browser" }, r3 = n2.default.getFirstMatch(/(?:sogoumobilebrowser)[\s/](\d+(\.?_?\d+)+)/i, e3), i3 = n2.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e3), a3 = n2.default.getFirstMatch(/se ([\d.]+)x/i, e3), o3 = r3 || i3 || a3;
          return o3 && (t3.version = o3), t3;
        }, "describe") }, { test: [/MiuiBrowser/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Miui" }, r3 = n2.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e3) {
          return !!e3.hasBrand("DuckDuckGo") || e3.test(/\sDdg\/[\d.]+$/i);
        }, "test"), describe: /* @__PURE__ */ __name(function(e3, t3) {
          var r3 = { name: "DuckDuckGo" };
          if (t3) {
            var i3 = t3.getBrandVersion("DuckDuckGo");
            if (i3) return r3.version = i3, r3;
          }
          var a3 = n2.default.getFirstMatch(/\sDdg\/([\d.]+)$/i, e3);
          return a3 && (r3.version = a3), r3;
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e3) {
          return e3.hasBrand("Brave");
        }, "test"), describe: /* @__PURE__ */ __name(function(e3, t3) {
          var r3 = { name: "Brave" };
          if (t3) {
            var i3 = t3.getBrandVersion("Brave");
            if (i3) return r3.version = i3, r3;
          }
          return r3;
        }, "describe") }, { test: [/chromium/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Chromium" }, r3 = n2.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e3) || n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/chrome|crios|crmo/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Chrome" }, r3 = n2.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/GSA/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Google Search" }, r3 = n2.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e3) {
          var t3 = !e3.test(/like android/i), r3 = e3.test(/android/i);
          return t3 && r3;
        }, "test"), describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Android Browser" }, r3 = n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/playstation 4/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "PlayStation 4" }, r3 = n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/safari|applewebkit/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: "Safari" }, r3 = n2.default.getFirstMatch(a2, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/.*/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = -1 !== e3.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
          return { name: n2.default.getFirstMatch(t3, e3), version: n2.default.getSecondMatch(t3, e3) };
        }, "describe") }];
        t2.default = o2, e2.exports = t2.default;
      }, 93: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var i2, n2 = (i2 = r2(17)) && i2.__esModule ? i2 : { default: i2 }, a2 = r2(18);
        var o2 = [{ test: [/Roku\/DVP/], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = n2.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e3);
          return { name: a2.OS_MAP.Roku, version: t3 };
        }, "describe") }, { test: [/windows phone/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = n2.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e3);
          return { name: a2.OS_MAP.WindowsPhone, version: t3 };
        }, "describe") }, { test: [/windows /i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = n2.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e3), r3 = n2.default.getWindowsVersionName(t3);
          return { name: a2.OS_MAP.Windows, version: t3, versionName: r3 };
        }, "describe") }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: a2.OS_MAP.iOS }, r3 = n2.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/macintosh/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = n2.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e3).replace(/[_\s]/g, "."), r3 = n2.default.getMacOSVersionName(t3), i3 = { name: a2.OS_MAP.MacOS, version: t3 };
          return r3 && (i3.versionName = r3), i3;
        }, "describe") }, { test: [/(ipod|iphone|ipad)/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = n2.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e3).replace(/[_\s]/g, ".");
          return { name: a2.OS_MAP.iOS, version: t3 };
        }, "describe") }, { test: [/OpenHarmony/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = n2.default.getFirstMatch(/OpenHarmony\s+(\d+(\.\d+)*)/i, e3);
          return { name: a2.OS_MAP.HarmonyOS, version: t3 };
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e3) {
          var t3 = !e3.test(/like android/i), r3 = e3.test(/android/i);
          return t3 && r3;
        }, "test"), describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = n2.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e3), r3 = n2.default.getAndroidVersionName(t3), i3 = { name: a2.OS_MAP.Android, version: t3 };
          return r3 && (i3.versionName = r3), i3;
        }, "describe") }, { test: [/(web|hpw)[o0]s/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = n2.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e3), r3 = { name: a2.OS_MAP.WebOS };
          return t3 && t3.length && (r3.version = t3), r3;
        }, "describe") }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = n2.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e3) || n2.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e3) || n2.default.getFirstMatch(/\bbb(\d+)/i, e3);
          return { name: a2.OS_MAP.BlackBerry, version: t3 };
        }, "describe") }, { test: [/bada/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = n2.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e3);
          return { name: a2.OS_MAP.Bada, version: t3 };
        }, "describe") }, { test: [/tizen/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = n2.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e3);
          return { name: a2.OS_MAP.Tizen, version: t3 };
        }, "describe") }, { test: [/linux/i], describe: /* @__PURE__ */ __name(function() {
          return { name: a2.OS_MAP.Linux };
        }, "describe") }, { test: [/CrOS/], describe: /* @__PURE__ */ __name(function() {
          return { name: a2.OS_MAP.ChromeOS };
        }, "describe") }, { test: [/PlayStation 4/], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = n2.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e3);
          return { name: a2.OS_MAP.PlayStation4, version: t3 };
        }, "describe") }];
        t2.default = o2, e2.exports = t2.default;
      }, 94: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var i2, n2 = (i2 = r2(17)) && i2.__esModule ? i2 : { default: i2 }, a2 = r2(18);
        var o2 = [{ test: [/googlebot/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Google" };
        }, "describe") }, { test: [/linespider/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Line" };
        }, "describe") }, { test: [/amazonbot/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Amazon" };
        }, "describe") }, { test: [/gptbot/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "OpenAI" };
        }, "describe") }, { test: [/chatgpt-user/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "OpenAI" };
        }, "describe") }, { test: [/oai-searchbot/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "OpenAI" };
        }, "describe") }, { test: [/baiduspider/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Baidu" };
        }, "describe") }, { test: [/bingbot/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Bing" };
        }, "describe") }, { test: [/duckduckbot/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "DuckDuckGo" };
        }, "describe") }, { test: [/claudebot/i, /claude-web/i, /claude-user/i, /claude-searchbot/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Anthropic" };
        }, "describe") }, { test: [/omgilibot/i, /webzio-extended/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Webz.io" };
        }, "describe") }, { test: [/diffbot/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Diffbot" };
        }, "describe") }, { test: [/perplexitybot/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Perplexity AI" };
        }, "describe") }, { test: [/perplexity-user/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Perplexity AI" };
        }, "describe") }, { test: [/youbot/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "You.com" };
        }, "describe") }, { test: [/ia_archiver/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Internet Archive" };
        }, "describe") }, { test: [/meta-webindexer/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Meta" };
        }, "describe") }, { test: [/meta-externalads/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Meta" };
        }, "describe") }, { test: [/meta-externalagent/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Meta" };
        }, "describe") }, { test: [/meta-externalfetcher/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Meta" };
        }, "describe") }, { test: [/facebookexternalhit/i, /facebookcatalog/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Meta" };
        }, "describe") }, { test: [/slackbot/i, /slack-imgProxy/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Slack" };
        }, "describe") }, { test: [/yahoo/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Yahoo" };
        }, "describe") }, { test: [/yandexbot/i, /yandexmobilebot/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Yandex" };
        }, "describe") }, { test: [/pingdom/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.bot, vendor: "Pingdom" };
        }, "describe") }, { test: [/huawei/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = n2.default.getFirstMatch(/(can-l01)/i, e3) && "Nova", r3 = { type: a2.PLATFORMS_MAP.mobile, vendor: "Huawei" };
          return t3 && (r3.model = t3), r3;
        }, "describe") }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.tablet, vendor: "Nexus" };
        }, "describe") }, { test: [/ipad/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
        }, "describe") }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
        }, "describe") }, { test: [/kftt build/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" };
        }, "describe") }, { test: [/silk/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.tablet, vendor: "Amazon" };
        }, "describe") }, { test: [/tablet(?! pc)/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.tablet };
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e3) {
          var t3 = e3.test(/ipod|iphone/i), r3 = e3.test(/like (ipod|iphone)/i);
          return t3 && !r3;
        }, "test"), describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = n2.default.getFirstMatch(/(ipod|iphone)/i, e3);
          return { type: a2.PLATFORMS_MAP.mobile, vendor: "Apple", model: t3 };
        }, "describe") }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.mobile, vendor: "Nexus" };
        }, "describe") }, { test: [/Nokia/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = n2.default.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i, e3), r3 = { type: a2.PLATFORMS_MAP.mobile, vendor: "Nokia" };
          return t3 && (r3.model = t3), r3;
        }, "describe") }, { test: [/[^-]mobi/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.mobile };
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e3) {
          return "blackberry" === e3.getBrowserName(true);
        }, "test"), describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.mobile, vendor: "BlackBerry" };
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e3) {
          return "bada" === e3.getBrowserName(true);
        }, "test"), describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.mobile };
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e3) {
          return "windows phone" === e3.getBrowserName();
        }, "test"), describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.mobile, vendor: "Microsoft" };
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e3) {
          var t3 = Number(String(e3.getOSVersion()).split(".")[0]);
          return "android" === e3.getOSName(true) && t3 >= 3;
        }, "test"), describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.tablet };
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e3) {
          return "android" === e3.getOSName(true);
        }, "test"), describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.mobile };
        }, "describe") }, { test: [/smart-?tv|smarttv/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.tv };
        }, "describe") }, { test: [/netcast/i], describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.tv };
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e3) {
          return "macos" === e3.getOSName(true);
        }, "test"), describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.desktop, vendor: "Apple" };
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e3) {
          return "windows" === e3.getOSName(true);
        }, "test"), describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.desktop };
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e3) {
          return "linux" === e3.getOSName(true);
        }, "test"), describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.desktop };
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e3) {
          return "playstation 4" === e3.getOSName(true);
        }, "test"), describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.tv };
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e3) {
          return "roku" === e3.getOSName(true);
        }, "test"), describe: /* @__PURE__ */ __name(function() {
          return { type: a2.PLATFORMS_MAP.tv };
        }, "describe") }];
        t2.default = o2, e2.exports = t2.default;
      }, 95: function(e2, t2, r2) {
        "use strict";
        t2.__esModule = true, t2.default = void 0;
        var i2, n2 = (i2 = r2(17)) && i2.__esModule ? i2 : { default: i2 }, a2 = r2(18);
        var o2 = [{ test: /* @__PURE__ */ __name(function(e3) {
          return "microsoft edge" === e3.getBrowserName(true);
        }, "test"), describe: /* @__PURE__ */ __name(function(e3) {
          if (/\sedg\//i.test(e3)) return { name: a2.ENGINE_MAP.Blink };
          var t3 = n2.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e3);
          return { name: a2.ENGINE_MAP.EdgeHTML, version: t3 };
        }, "describe") }, { test: [/trident/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: a2.ENGINE_MAP.Trident }, r3 = n2.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e3) {
          return e3.test(/presto/i);
        }, "test"), describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: a2.ENGINE_MAP.Presto }, r3 = n2.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e3) {
          var t3 = e3.test(/gecko/i), r3 = e3.test(/like gecko/i);
          return t3 && !r3;
        }, "test"), describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: a2.ENGINE_MAP.Gecko }, r3 = n2.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }, { test: [/(apple)?webkit\/537\.36/i], describe: /* @__PURE__ */ __name(function() {
          return { name: a2.ENGINE_MAP.Blink };
        }, "describe") }, { test: [/(apple)?webkit/i], describe: /* @__PURE__ */ __name(function(e3) {
          var t3 = { name: a2.ENGINE_MAP.WebKit }, r3 = n2.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e3);
          return r3 && (t3.version = r3), t3;
        }, "describe") }];
        t2.default = o2, e2.exports = t2.default;
      } });
    }));
  }
});

// functions/utils/d1Database.js
var D1Database = class {
  static {
    __name(this, "D1Database");
  }
  constructor(db) {
    this.db = db;
  }
};
D1Database.prototype.putFile = function(fileId, value, options) {
  value = value || "";
  options = options || {};
  var metadata = options.metadata || {};
  var extractedFields = this.extractMetadataFields(metadata);
  var stmt = this.db.prepare(
    "INSERT OR REPLACE INTO files (id, value, metadata, file_name, file_type, file_size, upload_ip, upload_address, list_type, timestamp, label, directory, channel, channel_name, tg_file_id, tg_chat_id, tg_bot_token, is_chunked) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
  );
  return stmt.bind(
    fileId,
    value,
    JSON.stringify(metadata),
    extractedFields.fileName,
    extractedFields.fileType,
    extractedFields.fileSize,
    extractedFields.uploadIP,
    extractedFields.uploadAddress,
    extractedFields.listType,
    extractedFields.timestamp,
    extractedFields.label,
    extractedFields.directory,
    extractedFields.channel,
    extractedFields.channelName,
    extractedFields.tgFileId,
    extractedFields.tgChatId,
    extractedFields.tgBotToken,
    extractedFields.isChunked
  ).run();
};
D1Database.prototype.getFile = function(fileId) {
  var self2 = this;
  var stmt = this.db.prepare("SELECT * FROM files WHERE id = ?");
  return stmt.bind(fileId).first().then(function(result) {
    if (!result) return null;
    return {
      value: result.value,
      metadata: JSON.parse(result.metadata || "{}")
    };
  });
};
D1Database.prototype.getFileWithMetadata = function(fileId) {
  return this.getFile(fileId);
};
D1Database.prototype.deleteFile = function(fileId) {
  var stmt = this.db.prepare("DELETE FROM files WHERE id = ?");
  return stmt.bind(fileId).run();
};
D1Database.prototype.listFiles = function(options) {
  options = options || {};
  var prefix = options.prefix || "";
  var limit = options.limit || 1e3;
  var cursor = options.cursor || null;
  var query = "SELECT id, metadata FROM files";
  var params = [];
  if (prefix) {
    query += " WHERE id LIKE ?";
    params.push(prefix + "%");
  }
  if (cursor) {
    query += prefix ? " AND" : " WHERE";
    query += " id > ?";
    params.push(cursor);
  }
  query += " ORDER BY id LIMIT ?";
  params.push(limit + 1);
  var stmt = this.db.prepare(query);
  if (params.length > 0) {
    stmt = stmt.bind.apply(stmt, params);
  }
  return stmt.all().then(function(response) {
    var results = response.results || [];
    var hasMore = results.length > limit;
    if (hasMore) {
      results.pop();
    }
    var keys = results.map(function(row) {
      return {
        name: row.id,
        metadata: JSON.parse(row.metadata || "{}")
      };
    });
    return {
      keys,
      cursor: hasMore && keys.length > 0 ? keys[keys.length - 1].name : null,
      list_complete: !hasMore
    };
  });
};
D1Database.prototype.putSetting = function(key, value, category) {
  if (!category && key.startsWith("manage@sysConfig@")) {
    category = key.split("@")[2];
  }
  var stmt = this.db.prepare(
    "INSERT OR REPLACE INTO settings (key, value, category) VALUES (?, ?, ?)"
  );
  return stmt.bind(key, value, category).run();
};
D1Database.prototype.getSetting = function(key) {
  var stmt = this.db.prepare("SELECT value FROM settings WHERE key = ?");
  return stmt.bind(key).first().then(function(result) {
    return result ? result.value : null;
  });
};
D1Database.prototype.deleteSetting = function(key) {
  var stmt = this.db.prepare("DELETE FROM settings WHERE key = ?");
  return stmt.bind(key).run();
};
D1Database.prototype.listSettings = function(options) {
  options = options || {};
  var prefix = options.prefix || "";
  var limit = options.limit || 1e3;
  var query = "SELECT key, value FROM settings";
  var params = [];
  if (prefix) {
    query += " WHERE key LIKE ?";
    params.push(prefix + "%");
  }
  query += " ORDER BY key LIMIT ?";
  params.push(limit);
  var stmt = this.db.prepare(query);
  if (params.length > 0) {
    stmt = stmt.bind.apply(stmt, params);
  }
  return stmt.all().then(function(response) {
    var results = response.results || [];
    var keys = results.map(function(row) {
      return {
        name: row.key,
        value: row.value
      };
    });
    return { keys };
  });
};
D1Database.prototype.putIndexOperation = function(operationId, operation) {
  var stmt = this.db.prepare(
    "INSERT OR REPLACE INTO index_operations (id, type, timestamp, data) VALUES (?, ?, ?, ?)"
  );
  return stmt.bind(
    operationId,
    operation.type,
    operation.timestamp,
    JSON.stringify(operation.data)
  ).run();
};
D1Database.prototype.getIndexOperation = function(operationId) {
  var stmt = this.db.prepare("SELECT * FROM index_operations WHERE id = ?");
  return stmt.bind(operationId).first().then(function(result) {
    if (!result) return null;
    return {
      type: result.type,
      timestamp: result.timestamp,
      data: JSON.parse(result.data)
    };
  });
};
D1Database.prototype.deleteIndexOperation = function(operationId) {
  var stmt = this.db.prepare("DELETE FROM index_operations WHERE id = ?");
  return stmt.bind(operationId).run();
};
D1Database.prototype.listIndexOperations = function(options) {
  options = options || {};
  var limit = options.limit || 1e3;
  var processed = options.processed;
  var query = "SELECT * FROM index_operations";
  var params = [];
  if (processed !== null && processed !== void 0) {
    query += " WHERE processed = ?";
    params.push(processed);
  }
  query += " ORDER BY timestamp LIMIT ?";
  params.push(limit);
  var stmt = this.db.prepare(query);
  if (params.length > 0) {
    stmt = stmt.bind.apply(stmt, params);
  }
  return stmt.all().then(function(response) {
    var results = response.results || [];
    return results.map(function(row) {
      return {
        id: row.id,
        type: row.type,
        timestamp: row.timestamp,
        data: JSON.parse(row.data),
        processed: row.processed
      };
    });
  });
};
D1Database.prototype.extractMetadataFields = function(metadata) {
  return {
    fileName: metadata.FileName || null,
    fileType: metadata.FileType || null,
    fileSize: metadata.FileSize || null,
    uploadIP: metadata.UploadIP || null,
    uploadAddress: metadata.UploadAddress || null,
    listType: metadata.ListType || null,
    timestamp: metadata.TimeStamp || null,
    label: metadata.Label || null,
    directory: metadata.Directory || null,
    channel: metadata.Channel || null,
    channelName: metadata.ChannelName || null,
    tgFileId: metadata.TgFileId || null,
    tgChatId: metadata.TgChatId || null,
    tgBotToken: metadata.TgBotToken || null,
    isChunked: metadata.IsChunked || false
  };
};
D1Database.prototype.put = function(key, value, options) {
  options = options || {};
  if (key.startsWith("manage@sysConfig@")) {
    return this.putSetting(key, value);
  } else if (key.startsWith("manage@index@operation_")) {
    var operationId = key.replace("manage@index@operation_", "");
    var operation = JSON.parse(value);
    return this.putIndexOperation(operationId, operation);
  } else {
    return this.putFile(key, value, options);
  }
};
D1Database.prototype.get = function(key) {
  var self2 = this;
  if (key.startsWith("manage@sysConfig@")) {
    return this.getSetting(key);
  } else if (key.startsWith("manage@index@operation_")) {
    var operationId = key.replace("manage@index@operation_", "");
    return this.getIndexOperation(operationId).then(function(operation) {
      return operation ? JSON.stringify(operation) : null;
    });
  } else {
    return this.getFile(key).then(function(file) {
      return file ? file.value : null;
    });
  }
};
D1Database.prototype.getWithMetadata = function(key) {
  var self2 = this;
  if (key.startsWith("manage@sysConfig@")) {
    return this.getSetting(key).then(function(value) {
      return value ? { value, metadata: {} } : null;
    });
  } else {
    return this.getFileWithMetadata(key);
  }
};
D1Database.prototype.delete = function(key) {
  if (key.startsWith("manage@sysConfig@")) {
    return this.deleteSetting(key);
  } else if (key.startsWith("manage@index@operation_")) {
    var operationId = key.replace("manage@index@operation_", "");
    return this.deleteIndexOperation(operationId);
  } else {
    return this.deleteFile(key);
  }
};
D1Database.prototype.list = function(options) {
  options = options || {};
  var prefix = options.prefix || "";
  var self2 = this;
  if (prefix.startsWith("manage@sysConfig@")) {
    return this.listSettings(options);
  } else if (prefix.startsWith("manage@index@operation_")) {
    return this.listIndexOperations(options).then(function(operations) {
      var keys = operations.map(function(op) {
        return {
          name: "manage@index@operation_" + op.id
        };
      });
      return { keys };
    });
  } else {
    return this.listFiles(options);
  }
};

// functions/utils/databaseAdapter.js
function createDatabaseAdapter(env) {
  if (env.img_url && typeof env.img_url.get === "function") {
    return new KVAdapter(env.img_url);
  } else if (env.img_d1 && typeof env.img_d1.prepare === "function") {
    return new D1Database(env.img_d1);
  } else {
    console.error("No database configured. Please configure either KV (env.img_url) or D1 (env.img_d1).");
    return null;
  }
}
__name(createDatabaseAdapter, "createDatabaseAdapter");
var KVAdapter = class {
  static {
    __name(this, "KVAdapter");
  }
  constructor(kv) {
    this.kv = kv;
  }
  // 直接代理到KV的方法
  async put(key, value, options) {
    options = options || {};
    return await this.kv.put(key, value, options);
  }
  async get(key, options) {
    options = options || {};
    return await this.kv.get(key, options);
  }
  async getWithMetadata(key, options) {
    options = options || {};
    return await this.kv.getWithMetadata(key, options);
  }
  async delete(key, options) {
    options = options || {};
    return await this.kv.delete(key, options);
  }
  async list(options) {
    options = options || {};
    return await this.kv.list(options);
  }
  // 为了兼容性，添加一些别名方法
  async putFile(fileId, value, options) {
    return await this.put(fileId, value, options);
  }
  async getFile(fileId, options) {
    const result = await this.getWithMetadata(fileId, options);
    return result;
  }
  async getFileWithMetadata(fileId, options) {
    return await this.getWithMetadata(fileId, options);
  }
  async deleteFile(fileId, options) {
    return await this.delete(fileId, options);
  }
  async listFiles(options) {
    return await this.list(options);
  }
  async putSetting(key, value, options) {
    return await this.put(key, value, options);
  }
  async getSetting(key, options) {
    return await this.get(key, options);
  }
  async deleteSetting(key, options) {
    return await this.delete(key, options);
  }
  async listSettings(options) {
    return await this.list(options);
  }
  async putIndexOperation(operationId, operation, options) {
    const key = "manage@index@operation_" + operationId;
    return await this.put(key, JSON.stringify(operation), options);
  }
  async getIndexOperation(operationId, options) {
    const key = "manage@index@operation_" + operationId;
    const result = await this.get(key, options);
    return result ? JSON.parse(result) : null;
  }
  async deleteIndexOperation(operationId, options) {
    const key = "manage@index@operation_" + operationId;
    return await this.delete(key, options);
  }
  async listIndexOperations(options) {
    const listOptions = Object.assign({}, options, {
      prefix: "manage@index@operation_"
    });
    const result = await this.list(listOptions);
    const operations = [];
    for (const item of result.keys) {
      const operationData = await this.get(item.name);
      if (operationData) {
        const operation = JSON.parse(operationData);
        operations.push({
          id: item.name.replace("manage@index@operation_", ""),
          type: operation.type,
          timestamp: operation.timestamp,
          data: operation.data,
          processed: false
          // KV中没有这个字段，默认为false
        });
      }
    }
    return operations;
  }
};
function getDatabase(env) {
  var adapter = createDatabaseAdapter(env);
  if (!adapter) {
    throw new Error("Database not configured. Please configure D1 database (env.img_d1) or KV storage (env.img_url).");
  }
  return adapter;
}
__name(getDatabase, "getDatabase");
function checkDatabaseConfig(env) {
  var hasD1 = env.img_d1 && typeof env.img_d1.prepare === "function";
  var hasKV = env.img_url && typeof env.img_url.get === "function";
  return {
    hasD1,
    hasKV,
    usingD1: hasD1,
    usingKV: !hasD1 && hasKV,
    configured: hasD1 || hasKV
  };
}
__name(checkDatabaseConfig, "checkDatabaseConfig");

// functions/api/manage/sysConfig/upload.js
async function onRequest(context) {
  const {
    request,
    // same as existing Worker API
    env,
    // same as existing Worker API
    params,
    // if filename includes [id] or [[path]]
    waitUntil,
    // same as ctx.waitUntil in existing Worker API
    next,
    // used for middleware or to fetch assets
    data
    // arbitrary space for passing data between middlewares
  } = context;
  const db = getDatabase(env);
  if (request.method === "GET") {
    const settings = await getUploadConfig(db, env);
    return new Response(JSON.stringify(settings), {
      headers: {
        "content-type": "application/json"
      }
    });
  }
  if (request.method === "POST") {
    const body = await request.json();
    const settings = body;
    await db.put("manage@sysConfig@upload", JSON.stringify(settings));
    return new Response(JSON.stringify(settings), {
      headers: {
        "content-type": "application/json"
      }
    });
  }
}
__name(onRequest, "onRequest");
async function getUploadConfig(db, env) {
  const settings = {};
  const settingsStr = await db.get("manage@sysConfig@upload");
  const settingsKV = settingsStr ? JSON.parse(settingsStr) : {};
  const telegram = {};
  const telegramChannels = [];
  telegram.channels = telegramChannels;
  if (env.TG_BOT_TOKEN) {
    telegramChannels.push({
      id: 1,
      name: "Telegram_env",
      type: "telegram",
      savePath: "environment variable",
      botToken: env.TG_BOT_TOKEN,
      chatId: env.TG_CHAT_ID,
      proxyUrl: env.TG_PROXY_URL || "",
      // 可选的代理 URL
      enabled: true,
      fixed: true
    });
  }
  for (const tg of settingsKV.telegram?.channels || []) {
    if (tg.savePath === "environment variable") {
      if (telegramChannels[0]) {
        telegramChannels[0].enabled = tg.enabled;
        telegramChannels[0].proxyUrl = tg.proxyUrl;
      }
      continue;
    }
    tg.id = telegramChannels.length + 1;
    telegramChannels.push(tg);
  }
  const tgLoadBalance = settingsKV.telegram?.loadBalance || {
    enabled: false,
    channels: []
  };
  telegram.loadBalance = tgLoadBalance;
  const cfr2 = {};
  const cfr2Channels = [];
  cfr2.channels = cfr2Channels;
  if (env.img_r2) {
    cfr2Channels.push({
      id: 1,
      name: "R2_env",
      type: "cfr2",
      savePath: "environment variable",
      publicUrl: env.R2PublicUrl,
      enabled: true,
      fixed: true
    });
  }
  for (const r2 of settingsKV.cfr2?.channels || []) {
    if (r2.savePath === "environment variable") {
      if (cfr2Channels[0]) {
        cfr2Channels[0].publicUrl = r2.publicUrl;
        cfr2Channels[0].enabled = r2.enabled;
        cfr2Channels[0].quota = r2.quota;
      }
      continue;
    }
    r2.id = cfr2Channels.length + 1;
    cfr2Channels.push(r2);
  }
  const r2LoadBalance = settingsKV.cfr2?.loadBalance || {
    enabled: false,
    channels: []
  };
  cfr2.loadBalance = r2LoadBalance;
  const s3 = {};
  const s3Channels = [];
  s3.channels = s3Channels;
  if (env.S3_ACCESS_KEY_ID) {
    s3Channels.push({
      id: 1,
      name: "S3_env",
      type: "s3",
      savePath: "environment variable",
      accessKeyId: env.S3_ACCESS_KEY_ID,
      secretAccessKey: env.S3_SECRET_ACCESS_KEY,
      region: env.S3_REGION || "auto",
      bucketName: env.S3_BUCKET_NAME,
      endpoint: env.S3_ENDPOINT,
      pathStyle: env.S3_PATH_STYLE === "true",
      cdnDomain: env.S3_CDN_DOMAIN || "",
      // 可选的 CDN 域名
      enabled: true,
      fixed: true
    });
  }
  for (const s2 of settingsKV.s3?.channels || []) {
    if (s2.savePath === "environment variable") {
      if (s3Channels[0]) {
        s3Channels[0].enabled = s2.enabled;
        s3Channels[0].quota = s2.quota;
        s3Channels[0].cdnDomain = s2.cdnDomain;
      }
      continue;
    }
    s2.id = s3Channels.length + 1;
    s3Channels.push(s2);
  }
  const s3LoadBalance = settingsKV.s3?.loadBalance || {
    enabled: false,
    channels: []
  };
  s3.loadBalance = s3LoadBalance;
  const discord = {};
  const discordChannels = [];
  discord.channels = discordChannels;
  if (env.DISCORD_BOT_TOKEN) {
    discordChannels.push({
      id: 1,
      name: "Discord_env",
      type: "discord",
      savePath: "environment variable",
      botToken: env.DISCORD_BOT_TOKEN,
      channelId: env.DISCORD_CHANNEL_ID,
      proxyUrl: env.DISCORD_PROXY_URL || "",
      // 可选的代理 URL
      isNitro: env.DISCORD_IS_NITRO === "true",
      // Nitro 会员，支持 25MB
      enabled: true,
      fixed: true
    });
  }
  for (const dc of settingsKV.discord?.channels || []) {
    if (dc.savePath === "environment variable") {
      if (discordChannels[0]) {
        discordChannels[0].enabled = dc.enabled;
        discordChannels[0].proxyUrl = dc.proxyUrl;
        discordChannels[0].isNitro = dc.isNitro;
      }
      continue;
    }
    dc.id = discordChannels.length + 1;
    discordChannels.push(dc);
  }
  const discordLoadBalance = settingsKV.discord?.loadBalance || {
    enabled: false,
    channels: []
  };
  discord.loadBalance = discordLoadBalance;
  const huggingface = {};
  const huggingfaceChannels = [];
  huggingface.channels = huggingfaceChannels;
  if (env.HF_TOKEN) {
    huggingfaceChannels.push({
      id: 1,
      name: "HuggingFace_env",
      type: "huggingface",
      savePath: "environment variable",
      token: env.HF_TOKEN,
      repo: env.HF_REPO,
      isPrivate: env.HF_PRIVATE === "true",
      enabled: true,
      fixed: true
    });
  }
  for (const hf of settingsKV.huggingface?.channels || []) {
    if (hf.savePath === "environment variable") {
      if (huggingfaceChannels[0]) {
        huggingfaceChannels[0].enabled = hf.enabled;
        huggingfaceChannels[0].isPrivate = hf.isPrivate;
      }
      continue;
    }
    hf.id = huggingfaceChannels.length + 1;
    huggingfaceChannels.push(hf);
  }
  const huggingfaceLoadBalance = settingsKV.huggingface?.loadBalance || {
    enabled: false,
    channels: []
  };
  huggingface.loadBalance = huggingfaceLoadBalance;
  settings.telegram = telegram;
  settings.cfr2 = cfr2;
  settings.s3 = s3;
  settings.discord = discord;
  settings.huggingface = huggingface;
  return settings;
}
__name(getUploadConfig, "getUploadConfig");

// functions/api/manage/sysConfig/security.js
async function onRequest2(context) {
  const {
    request,
    // same as existing Worker API
    env,
    // same as existing Worker API
    params,
    // if filename includes [id] or [[path]]
    waitUntil,
    // same as ctx.waitUntil in existing Worker API
    next,
    // used for middleware or to fetch assets
    data
    // arbitrary space for passing data between middlewares
  } = context;
  const db = getDatabase(env);
  if (request.method === "GET") {
    const settings = await getSecurityConfig(db, env);
    return new Response(JSON.stringify(settings), {
      headers: {
        "content-type": "application/json"
      }
    });
  }
  if (request.method === "POST") {
    const settings = await getSecurityConfig(db, env);
    const body = await request.json();
    const newSettings = body;
    settings.auth = newSettings.auth || settings.auth;
    settings.upload = newSettings.upload || settings.upload;
    settings.access = newSettings.access || settings.access;
    await db.put("manage@sysConfig@security", JSON.stringify(settings));
    return new Response("security settings saved", {
      headers: {
        "content-type": "application/json"
      }
    });
  }
}
__name(onRequest2, "onRequest");
async function getSecurityConfig(db, env) {
  const settings = {};
  const settingsStr = await db.get("manage@sysConfig@security");
  const settingsKV = settingsStr ? JSON.parse(settingsStr) : {};
  const kvAuth = settingsKV.auth || {};
  const auth = {
    user: {
      authCode: kvAuth.user?.authCode || env.AUTH_CODE || ""
    },
    admin: {
      adminUsername: kvAuth.admin?.adminUsername || env.BASIC_USER || "",
      adminPassword: kvAuth.admin?.adminPassword || env.BASIC_PASS || ""
    }
  };
  settings.auth = auth;
  const kvUpload = settingsKV.upload || {};
  const upload = {
    moderate: {
      enabled: kvUpload.moderate?.enabled ?? false,
      channel: kvUpload.moderate?.channel || "moderatecontent.com",
      // [moderatecontent.com, nsfwjs]
      moderateContentApiKey: kvUpload.moderate?.moderateContentApiKey || kvUpload.moderate?.apiKey || env.ModerateContentApiKey || "",
      nsfwApiPath: kvUpload.moderate?.nsfwApiPath || ""
    }
  };
  settings.upload = upload;
  const kvAccess = settingsKV.access || {};
  const access = {
    allowedDomains: kvAccess.allowedDomains || env.ALLOWED_DOMAINS || "",
    whiteListMode: kvAccess.whiteListMode ?? env.WhiteList_Mode === "true"
  };
  settings.access = access;
  const kvApiTokens = settingsKV.apiTokens || {};
  const apiTokens = {
    tokens: kvApiTokens.tokens || {}
  };
  settings.apiTokens = apiTokens;
  return settings;
}
__name(getSecurityConfig, "getSecurityConfig");

// functions/api/manage/sysConfig/page.js
async function onRequest3(context) {
  const {
    request,
    // same as existing Worker API
    env,
    // same as existing Worker API
    params,
    // if filename includes [id] or [[path]]
    waitUntil,
    // same as ctx.waitUntil in existing Worker API
    next,
    // used for middleware or to fetch assets
    data
    // arbitrary space for passing data between middlewares
  } = context;
  const db = getDatabase(env);
  if (request.method === "GET") {
    const settings = await getPageConfig(db, env);
    return new Response(JSON.stringify(settings), {
      headers: {
        "content-type": "application/json"
      }
    });
  }
  if (request.method === "POST") {
    const body = await request.json();
    const settings = body;
    await db.put("manage@sysConfig@page", JSON.stringify(settings));
    return new Response(JSON.stringify(settings), {
      headers: {
        "content-type": "application/json"
      }
    });
  }
}
__name(onRequest3, "onRequest");
async function getPageConfig(db, env) {
  const settings = {};
  const settingsStr = await db.get("manage@sysConfig@page");
  const settingsKV = settingsStr ? JSON.parse(settingsStr) : {};
  const config = [];
  settings.config = config;
  config.push(
    // 全局设置
    {
      id: "siteTitle",
      label: "\u7F51\u7AD9\u6807\u9898",
      placeholder: "Sanyue ImgHub",
      category: "\u5168\u5C40\u8BBE\u7F6E"
    },
    {
      id: "siteIcon",
      label: "\u7F51\u7AD9\u56FE\u6807",
      category: "\u5168\u5C40\u8BBE\u7F6E"
    },
    {
      id: "ownerName",
      label: "\u56FE\u5E8A\u540D\u79F0",
      placeholder: "Sanyue ImgHub",
      category: "\u5168\u5C40\u8BBE\u7F6E"
    },
    {
      id: "logoUrl",
      label: "\u56FE\u5E8ALogo",
      category: "\u5168\u5C40\u8BBE\u7F6E"
    },
    {
      id: "logoLink",
      label: "Logo\u8DF3\u8F6C\u94FE\u63A5",
      placeholder: "https://github.com/MarSeventh/CloudFlare-ImgBed",
      tooltip: "\u70B9\u51FBLogo\u65F6\u8DF3\u8F6C\u7684\u94FE\u63A5\uFF0C\u7559\u7A7A\u5219\u4F7F\u7528\u9ED8\u8BA4GitHub\u94FE\u63A5",
      category: "\u5168\u5C40\u8BBE\u7F6E"
    },
    {
      id: "bkInterval",
      label: "\u80CC\u666F\u5207\u6362\u95F4\u9694",
      placeholder: "3000",
      tooltip: "\u5355\u4F4D\uFF1A\u6BEB\u79D2 ms",
      category: "\u5168\u5C40\u8BBE\u7F6E"
    },
    {
      id: "bkOpacity",
      label: "\u80CC\u666F\u56FE\u900F\u660E\u5EA6",
      placeholder: "1",
      tooltip: "0-1 \u4E4B\u95F4\u7684\u5C0F\u6570",
      category: "\u5168\u5C40\u8BBE\u7F6E"
    },
    {
      id: "urlPrefix",
      label: "\u9ED8\u8BA4URL\u524D\u7F00",
      tooltip: "\u81EA\u5B9A\u4E49URL\u524D\u7F00\uFF0C\u5982\uFF1Ahttps://img.a.com/file/\uFF0C\u7559\u7A7A\u5219\u4F7F\u7528\u5F53\u524D\u57DF\u540D <br/> \u8BBE\u7F6E\u540E\u5C06\u5E94\u7528\u4E8E\u5BA2\u6237\u7AEF\u548C\u7BA1\u7406\u7AEF",
      category: "\u5168\u5C40\u8BBE\u7F6E"
    },
    // 客户端设置
    {
      id: "announcement",
      label: "\u516C\u544A",
      type: "textarea",
      tooltip: "\u652F\u6301HTML\u6807\u7B7E",
      category: "\u5BA2\u6237\u7AEF\u8BBE\u7F6E"
    },
    {
      id: "showDirectorySuggestions",
      label: "\u76EE\u5F55\u5019\u9009\u9879",
      type: "boolean",
      default: true,
      tooltip: "\u63A7\u5236\u4E0A\u4F20\u9875\u9762\u662F\u5426\u5C55\u793A\u76EE\u5F55\u6811\u9009\u62E9\u5668",
      category: "\u5BA2\u6237\u7AEF\u8BBE\u7F6E"
    },
    {
      id: "defaultUploadChannel",
      label: "\u9ED8\u8BA4\u6E20\u9053\u7C7B\u578B",
      type: "select",
      options: [
        { label: "Telegram", value: "telegram" },
        { label: "Cloudflare R2", value: "cfr2" },
        { label: "S3", value: "s3" },
        { label: "Discord", value: "discord" },
        { label: "HuggingFace", value: "huggingface" }
      ],
      placeholder: "telegram",
      category: "\u5BA2\u6237\u7AEF\u8BBE\u7F6E"
    },
    {
      id: "defaultChannelName",
      label: "\u9ED8\u8BA4\u6E20\u9053\u540D\u79F0",
      type: "channelName",
      tooltip: "\u6307\u5B9A\u9ED8\u8BA4\u4F7F\u7528\u7684\u6E20\u9053\u540D\u79F0\uFF0C\u9700\u5148\u9009\u62E9\u4E0A\u4F20\u6E20\u9053",
      category: "\u5BA2\u6237\u7AEF\u8BBE\u7F6E"
    },
    {
      id: "defaultUploadFolder",
      label: "\u9ED8\u8BA4\u4E0A\u4F20\u76EE\u5F55",
      placeholder: "/ \u5F00\u5934\u7684\u5408\u6CD5\u76EE\u5F55\uFF0C\u4E0D\u80FD\u5305\u542B\u7279\u6B8A\u5B57\u7B26\uFF0C \u9ED8\u8BA4\u4E3A\u6839\u76EE\u5F55",
      category: "\u5BA2\u6237\u7AEF\u8BBE\u7F6E"
    },
    {
      id: "defaultUploadNameType",
      label: "\u9ED8\u8BA4\u547D\u540D\u65B9\u5F0F",
      type: "select",
      options: [
        { label: "\u9ED8\u8BA4", value: "default" },
        { label: "\u4EC5\u524D\u7F00", value: "index" },
        { label: "\u4EC5\u539F\u540D", value: "origin" },
        { label: "\u77ED\u94FE\u63A5", value: "short" }
      ],
      placeholder: "default",
      category: "\u5BA2\u6237\u7AEF\u8BBE\u7F6E"
    },
    {
      id: "defaultConvertToWebp",
      label: "\u9ED8\u8BA4\u8F6C\u6362WebP",
      type: "boolean",
      default: false,
      tooltip: "\u4E0A\u4F20\u524D\u5C06\u56FE\u7247\u8F6C\u6362\u4E3AWebP\u683C\u5F0F\uFF0C\u53EF\u6709\u6548\u51CF\u5C0F\u6587\u4EF6\u4F53\u79EF",
      category: "\u5BA2\u6237\u7AEF\u8BBE\u7F6E"
    },
    {
      id: "defaultCustomerCompress",
      label: "\u9ED8\u8BA4\u5F00\u542F\u538B\u7F29",
      type: "boolean",
      default: true,
      tooltip: "\u4E0A\u4F20\u524D\u5728\u672C\u5730\u8FDB\u884C\u538B\u7F29\uFF0C\u4EC5\u5BF9\u56FE\u7247\u6587\u4EF6\u751F\u6548",
      category: "\u5BA2\u6237\u7AEF\u8BBE\u7F6E"
    },
    {
      id: "defaultCompressBar",
      label: "\u9ED8\u8BA4\u538B\u7F29\u9608\u503C",
      placeholder: "5",
      tooltip: "\u56FE\u7247\u5927\u5C0F\u8D85\u8FC7\u6B64\u503C\u5C06\u81EA\u52A8\u538B\u7F29\uFF0C\u5355\u4F4DMB\uFF0C\u8303\u56F41-20",
      category: "\u5BA2\u6237\u7AEF\u8BBE\u7F6E"
    },
    {
      id: "defaultCompressQuality",
      label: "\u9ED8\u8BA4\u538B\u7F29\u671F\u671B",
      placeholder: "4",
      tooltip: "\u538B\u7F29\u540E\u56FE\u7247\u5927\u5C0F\u671F\u671B\u503C\uFF0C\u5355\u4F4DMB\uFF0C\u8303\u56F40.5-\u538B\u7F29\u9608\u503C",
      category: "\u5BA2\u6237\u7AEF\u8BBE\u7F6E"
    },
    {
      id: "loginBkImg",
      label: "\u767B\u5F55\u9875\u80CC\u666F\u56FE",
      tooltip: '1.\u586B\u5199 bing \u4F7F\u7528\u5FC5\u5E94\u58C1\u7EB8\u8F6E\u64AD <br/> 2.\u586B\u5199 ["url1","url2"] \u4F7F\u7528\u591A\u5F20\u56FE\u7247\u8F6E\u64AD <br/> 3.\u586B\u5199 ["url"] \u4F7F\u7528\u5355\u5F20\u56FE\u7247',
      category: "\u5BA2\u6237\u7AEF\u8BBE\u7F6E"
    },
    {
      id: "uploadBkImg",
      label: "\u4E0A\u4F20\u9875\u80CC\u666F\u56FE",
      tooltip: '1.\u586B\u5199 bing \u4F7F\u7528\u5FC5\u5E94\u58C1\u7EB8\u8F6E\u64AD <br/> 2.\u586B\u5199 ["url1","url2"] \u4F7F\u7528\u591A\u5F20\u56FE\u7247\u8F6E\u64AD <br/> 3.\u586B\u5199 ["url"] \u4F7F\u7528\u5355\u5F20\u56FE\u7247',
      category: "\u5BA2\u6237\u7AEF\u8BBE\u7F6E"
    },
    {
      id: "footerLink",
      label: "\u9875\u811A\u4F20\u9001\u95E8\u94FE\u63A5",
      category: "\u5BA2\u6237\u7AEF\u8BBE\u7F6E"
    },
    {
      id: "disableFooter",
      label: "\u9690\u85CF\u9875\u811A",
      type: "boolean",
      default: false,
      category: "\u5BA2\u6237\u7AEF\u8BBE\u7F6E"
    },
    // 管理端设置
    {
      id: "adminLoginBkImg",
      label: "\u767B\u5F55\u9875\u80CC\u666F\u56FE",
      tooltip: '1.\u586B\u5199 bing \u4F7F\u7528\u5FC5\u5E94\u58C1\u7EB8\u8F6E\u64AD <br/> 2.\u586B\u5199 ["url1","url2"] \u4F7F\u7528\u591A\u5F20\u56FE\u7247\u8F6E\u64AD <br/> 3.\u586B\u5199 ["url"] \u4F7F\u7528\u5355\u5F20\u56FE\u7247',
      category: "\u7BA1\u7406\u7AEF\u8BBE\u7F6E"
    },
    {
      id: "adminBkImg",
      label: "\u7BA1\u7406\u9875\u80CC\u666F\u56FE",
      tooltip: '1.\u586B\u5199 bing \u4F7F\u7528\u5FC5\u5E94\u58C1\u7EB8\u8F6E\u64AD <br/> 2.\u586B\u5199 ["url1","url2"] \u4F7F\u7528\u591A\u5F20\u56FE\u7247\u8F6E\u64AD <br/> 3.\u586B\u5199 ["url"] \u4F7F\u7528\u5355\u5F20\u56FE\u7247',
      category: "\u7BA1\u7406\u7AEF\u8BBE\u7F6E"
    }
  );
  const userConfig = env.USER_CONFIG;
  if (userConfig) {
    try {
      const parsedConfig = JSON.parse(userConfig);
      if (typeof parsedConfig === "object" && parsedConfig !== null) {
        for (let i2 = 0; i2 < config.length; i2++) {
          if (parsedConfig[config[i2].id]) {
            config[i2].value = parsedConfig[config[i2].id];
          }
        }
      }
    } catch (error) {
    }
  }
  for (let i2 = 0; i2 < settingsKV.config?.length; i2++) {
    const item = settingsKV.config[i2];
    const index = config.findIndex((x2) => x2.id === item.id);
    if (index !== -1) {
      config[index].value = item.value;
    }
  }
  return settings;
}
__name(getPageConfig, "getPageConfig");

// functions/api/manage/sysConfig/others.js
async function onRequest4(context) {
  const {
    request,
    // same as existing Worker API
    env,
    // same as existing Worker API
    params,
    // if filename includes [id] or [[path]]
    waitUntil,
    // same as ctx.waitUntil in existing Worker API
    next,
    // used for middleware or to fetch assets
    data
    // arbitrary space for passing data between middlewares
  } = context;
  const db = getDatabase(env);
  if (request.method === "GET") {
    const settings = await getOthersConfig(db, env);
    return new Response(JSON.stringify(settings), {
      headers: {
        "content-type": "application/json"
      }
    });
  }
  if (request.method === "POST") {
    const body = await request.json();
    const settings = body;
    await db.put("manage@sysConfig@others", JSON.stringify(settings));
    return new Response(JSON.stringify(settings), {
      headers: {
        "content-type": "application/json"
      }
    });
  }
}
__name(onRequest4, "onRequest");
async function getOthersConfig(db, env) {
  const settings = {};
  const settingsStr = await db.get("manage@sysConfig@others");
  const settingsKV = settingsStr ? JSON.parse(settingsStr) : {};
  const kvTelemetry = settingsKV.telemetry || {};
  settings.telemetry = {
    enabled: kvTelemetry.enabled ?? !(env.disable_telemetry === "true"),
    fixed: false
  };
  const kvRandomImageAPI = settingsKV.randomImageAPI || {};
  settings.randomImageAPI = {
    enabled: kvRandomImageAPI.enabled ?? env.AllowRandom === "true",
    allowedDir: kvRandomImageAPI.allowedDir ?? "",
    fixed: false
  };
  const kvCloudflareApiToken = settingsKV.cloudflareApiToken || {};
  settings.cloudflareApiToken = {
    CF_ZONE_ID: kvCloudflareApiToken.CF_ZONE_ID || env.CF_ZONE_ID,
    CF_EMAIL: kvCloudflareApiToken.CF_EMAIL || env.CF_EMAIL,
    CF_API_KEY: kvCloudflareApiToken.CF_API_KEY || env.CF_API_KEY,
    fixed: false
  };
  const kvWebDAV = settingsKV.webDAV || {};
  settings.webDAV = {
    enabled: kvWebDAV.enabled ?? false,
    username: kvWebDAV.username || "",
    password: kvWebDAV.password || "",
    uploadChannel: kvWebDAV.uploadChannel || "",
    channelName: kvWebDAV.channelName || "",
    fixed: false
  };
  const kvPublicBrowse = settingsKV.publicBrowse || {};
  settings.publicBrowse = {
    enabled: kvPublicBrowse.enabled ?? false,
    allowedDir: kvPublicBrowse.allowedDir || "",
    fixed: false
  };
  return settings;
}
__name(getOthersConfig, "getOthersConfig");

// functions/utils/indexManager.js
var INDEX_KEY = "manage@index";
var INDEX_META_KEY = "manage@index@meta";
var OPERATION_KEY_PREFIX = "manage@index@operation_";
var INDEX_CHUNK_SIZE_D1 = 500;
var INDEX_CHUNK_SIZE_KV = 5e3;
var KV_LIST_LIMIT = 1e3;
var BATCH_SIZE = 10;
function getIndexChunkSize(env) {
  const config = checkDatabaseConfig(env);
  return config.usingD1 ? INDEX_CHUNK_SIZE_D1 : INDEX_CHUNK_SIZE_KV;
}
__name(getIndexChunkSize, "getIndexChunkSize");
async function addFileToIndex(context, fileId, metadata = null) {
  const { env } = context;
  const db = getDatabase(env);
  try {
    if (metadata === null) {
      const fileData = await db.getWithMetadata(fileId);
      metadata = fileData.metadata || {};
    }
    const operationId = await recordOperation(context, "add", {
      fileId,
      metadata
    });
    console.log(`File ${fileId} add operation recorded with ID: ${operationId}`);
    return { success: true, operationId };
  } catch (error) {
    console.error("Error recording add file operation:", error);
    return { success: false, error: error.message };
  }
}
__name(addFileToIndex, "addFileToIndex");
async function batchAddFilesToIndex(context, files, options = {}) {
  try {
    const { env } = context;
    const { skipExisting = false } = options;
    const db = getDatabase(env);
    const processedFiles = [];
    for (const fileItem of files) {
      const { fileId, metadata } = fileItem;
      let finalMetadata = metadata;
      if (!finalMetadata) {
        try {
          const fileData = await db.getWithMetadata(fileId);
          finalMetadata = fileData.metadata || {};
        } catch (error) {
          console.warn(`Failed to get metadata for file ${fileId}:`, error);
          finalMetadata = {};
        }
      }
      processedFiles.push({
        fileId,
        metadata: finalMetadata
      });
    }
    const operationId = await recordOperation(context, "batch_add", {
      files: processedFiles,
      options: { skipExisting }
    });
    console.log(`Batch add operation recorded with ID: ${operationId}, ${files.length} files`);
    return {
      success: true,
      operationId,
      totalProcessed: files.length
    };
  } catch (error) {
    console.error("Error recording batch add files operation:", error);
    return {
      success: false,
      error: error.message,
      totalProcessed: 0
    };
  }
}
__name(batchAddFilesToIndex, "batchAddFilesToIndex");
async function removeFileFromIndex(context, fileId) {
  try {
    const operationId = await recordOperation(context, "remove", {
      fileId
    });
    console.log(`File ${fileId} remove operation recorded with ID: ${operationId}`);
    return { success: true, operationId };
  } catch (error) {
    console.error("Error recording remove file operation:", error);
    return { success: false, error: error.message };
  }
}
__name(removeFileFromIndex, "removeFileFromIndex");
async function batchRemoveFilesFromIndex(context, fileIds) {
  try {
    const operationId = await recordOperation(context, "batch_remove", {
      fileIds
    });
    console.log(`Batch remove operation recorded with ID: ${operationId}, ${fileIds.length} files`);
    return {
      success: true,
      operationId,
      totalProcessed: fileIds.length
    };
  } catch (error) {
    console.error("Error recording batch remove files operation:", error);
    return {
      success: false,
      error: error.message,
      totalProcessed: 0
    };
  }
}
__name(batchRemoveFilesFromIndex, "batchRemoveFilesFromIndex");
async function moveFileInIndex(context, originalFileId, newFileId, newMetadata = null) {
  try {
    const { env } = context;
    const db = getDatabase(env);
    let finalMetadata = newMetadata;
    if (finalMetadata === null) {
      try {
        const fileData = await db.getWithMetadata(newFileId);
        finalMetadata = fileData.metadata || {};
      } catch (error) {
        console.warn(`Failed to get metadata for new file ${newFileId}:`, error);
        finalMetadata = {};
      }
    }
    const operationId = await recordOperation(context, "move", {
      originalFileId,
      newFileId,
      metadata: finalMetadata
    });
    console.log(`File move operation from ${originalFileId} to ${newFileId} recorded with ID: ${operationId}`);
    return { success: true, operationId };
  } catch (error) {
    console.error("Error recording move file operation:", error);
    return { success: false, error: error.message };
  }
}
__name(moveFileInIndex, "moveFileInIndex");
async function batchMoveFilesInIndex(context, moveOperations) {
  try {
    const { env } = context;
    const db = getDatabase(env);
    const processedOperations = [];
    for (const operation of moveOperations) {
      const { originalFileId, newFileId, metadata } = operation;
      let finalMetadata = metadata;
      if (finalMetadata === null || finalMetadata === void 0) {
        try {
          const fileData = await db.getWithMetadata(newFileId);
          finalMetadata = fileData.metadata || {};
        } catch (error) {
          console.warn(`Failed to get metadata for new file ${newFileId}:`, error);
          finalMetadata = {};
        }
      }
      processedOperations.push({
        originalFileId,
        newFileId,
        metadata: finalMetadata
      });
    }
    const operationId = await recordOperation(context, "batch_move", {
      operations: processedOperations
    });
    console.log(`Batch move operation recorded with ID: ${operationId}, ${moveOperations.length} operations`);
    return {
      success: true,
      operationId,
      totalProcessed: moveOperations.length
    };
  } catch (error) {
    console.error("Error recording batch move files operation:", error);
    return {
      success: false,
      error: error.message,
      totalProcessed: 0
    };
  }
}
__name(batchMoveFilesInIndex, "batchMoveFilesInIndex");
async function mergeOperationsToIndex(context, options = {}) {
  const { request } = context;
  const { cleanupAfterMerge = true } = options;
  try {
    console.log("Starting operations merge...");
    const currentIndex = await getIndex(context);
    if (currentIndex.success === false) {
      console.error("Failed to get current index for merge");
      return {
        success: false,
        error: "Failed to get current index"
      };
    }
    const operationsResult = await getAllPendingOperations(context, currentIndex.lastOperationId);
    const operations = operationsResult.operations;
    const isALLOperations = operationsResult.isAll;
    if (operations.length === 0) {
      console.log("No pending operations to merge");
      return {
        success: true,
        processedOperations: 0,
        message: "No pending operations"
      };
    }
    console.log(`Found ${operations.length} pending operations to merge. Is all operations: ${isALLOperations}, if there are remaining operations they will be processed in the next merge.`);
    operations.sort((a2, b2) => a2.timestamp - b2.timestamp);
    const workingIndex = currentIndex;
    let operationsProcessed = 0;
    let addedCount = 0;
    let removedCount = 0;
    let movedCount = 0;
    let updatedCount = 0;
    const processedOperationIds = [];
    for (const operation of operations) {
      try {
        switch (operation.type) {
          case "add":
            const addResult = applyAddOperation(workingIndex, operation.data);
            if (addResult.added) addedCount++;
            if (addResult.updated) updatedCount++;
            break;
          case "remove":
            if (applyRemoveOperation(workingIndex, operation.data)) {
              removedCount++;
            }
            break;
          case "move":
            if (applyMoveOperation(workingIndex, operation.data)) {
              movedCount++;
            }
            break;
          case "batch_add":
            const batchAddResult = applyBatchAddOperation(workingIndex, operation.data);
            addedCount += batchAddResult.addedCount;
            updatedCount += batchAddResult.updatedCount;
            break;
          case "batch_remove":
            removedCount += applyBatchRemoveOperation(workingIndex, operation.data);
            break;
          case "batch_move":
            movedCount += applyBatchMoveOperation(workingIndex, operation.data);
            break;
          default:
            console.warn(`Unknown operation type: ${operation.type}`);
            continue;
        }
        operationsProcessed++;
        processedOperationIds.push(operation.id);
        if (operationsProcessed % 3 === 0) {
          await new Promise((resolve) => setTimeout(resolve, 0));
        }
      } catch (error) {
        console.error(`Error applying operation ${operation.id}:`, error);
      }
    }
    if (operationsProcessed > 0) {
      workingIndex.lastUpdated = Date.now();
      workingIndex.totalCount = workingIndex.files.length;
      if (processedOperationIds.length > 0) {
        workingIndex.lastOperationId = processedOperationIds[processedOperationIds.length - 1];
      }
      const saveSuccess = await saveChunkedIndex(context, workingIndex);
      if (!saveSuccess) {
        console.error("Failed to save chunked index");
        return {
          success: false,
          error: "Failed to save index"
        };
      }
      console.log(`Index updated: ${addedCount} added, ${updatedCount} updated, ${removedCount} removed, ${movedCount} moved`);
    }
    if (cleanupAfterMerge && processedOperationIds.length > 0) {
      await cleanupOperations(context, processedOperationIds);
    }
    if (!isALLOperations) {
      console.log("There are remaining operations, will process them in subsequent calls.");
      const headers = new Headers(request.headers);
      const originUrl = new URL(request.url);
      const mergeUrl = `${originUrl.protocol}//${originUrl.host}/api/manage/list?action=merge-operations`;
      await fetch(mergeUrl, { method: "GET", headers });
      return {
        success: false,
        error: "There are remaining operations, will process them in subsequent calls."
      };
    }
    const result = {
      success: true,
      processedOperations: operationsProcessed,
      addedCount,
      updatedCount,
      removedCount,
      movedCount,
      totalFiles: workingIndex.totalCount
    };
    console.log("Operations merge completed:", result);
    return result;
  } catch (error) {
    console.error("Error merging operations:", error);
    return {
      success: false,
      error: error.message
    };
  }
}
__name(mergeOperationsToIndex, "mergeOperationsToIndex");
async function readIndex(context, options = {}) {
  try {
    const {
      search = "",
      directory = "",
      start = 0,
      count = 50,
      channel = [],
      listType = [],
      accessStatus = [],
      label = [],
      fileType = [],
      channelName = [],
      includeTags = [],
      excludeTags = [],
      countOnly = false,
      includeSubdirFiles = false
    } = options;
    const channelArr = Array.isArray(channel) ? channel : channel ? [channel] : [];
    const listTypeArr = Array.isArray(listType) ? listType : listType ? [listType] : [];
    const accessStatusArr = Array.isArray(accessStatus) ? accessStatus : accessStatus ? [accessStatus] : [];
    const labelArr = Array.isArray(label) ? label : label ? [label] : [];
    const fileTypeArr = Array.isArray(fileType) ? fileType : fileType ? [fileType] : [];
    const channelNameArr = Array.isArray(channelName) ? channelName : channelName ? [channelName] : [];
    const dirPrefix = directory === "" || directory.endsWith("/") ? directory : directory + "/";
    const mergeResult = await mergeOperationsToIndex(context);
    if (!mergeResult.success) {
      throw new Error("Failed to merge operations: " + mergeResult.error);
    }
    const index = await getIndex(context);
    if (!index.success) {
      throw new Error("Failed to get index");
    }
    let filteredFiles = index.files;
    if (directory) {
      const normalizedDir = directory.endsWith("/") ? directory : directory + "/";
      filteredFiles = filteredFiles.filter((file) => {
        const fileDir = file.metadata.Directory ? file.metadata.Directory : extractDirectory(file.id);
        return fileDir.startsWith(normalizedDir) || file.metadata.Directory === directory;
      });
    }
    if (channelArr.length > 0) {
      filteredFiles = filteredFiles.filter(
        (file) => channelArr.some((ch2) => file.metadata.Channel?.toLowerCase() === ch2.toLowerCase())
      );
    }
    if (listTypeArr.length > 0) {
      filteredFiles = filteredFiles.filter((file) => {
        const fileListType = file.metadata.ListType;
        return listTypeArr.some((lt) => {
          if (lt === "None") {
            return !fileListType || fileListType === "" || fileListType === "None";
          }
          return fileListType === lt;
        });
      });
    }
    if (accessStatusArr.length > 0) {
      filteredFiles = filteredFiles.filter((file) => {
        const fileListType = file.metadata.ListType;
        const fileLabel = file.metadata.Label;
        const isBlocked = fileListType === "Block" || fileLabel === "adult" && fileListType !== "White";
        return accessStatusArr.some((status) => {
          if (status === "normal") {
            return !isBlocked;
          } else if (status === "blocked") {
            return isBlocked;
          }
          return false;
        });
      });
    }
    if (labelArr.length > 0) {
      filteredFiles = filteredFiles.filter((file) => {
        const fileLabel = file.metadata.Label;
        return labelArr.some((lbl) => {
          if (lbl === "normal") {
            return !fileLabel || fileLabel === "" || fileLabel === "None" || fileLabel === "everyone";
          } else if (lbl === "teen") {
            return fileLabel === "teen";
          } else if (lbl === "adult") {
            return fileLabel === "adult";
          }
          return false;
        });
      });
    }
    if (fileTypeArr.length > 0) {
      filteredFiles = filteredFiles.filter((file) => {
        const mimeType = file.metadata.FileType || "";
        return fileTypeArr.some((ft) => {
          if (ft === "image") {
            return mimeType.startsWith("image/");
          } else if (ft === "video") {
            return mimeType.startsWith("video/");
          } else if (ft === "audio") {
            return mimeType.startsWith("audio/");
          } else if (ft === "other") {
            return !mimeType.startsWith("image/") && !mimeType.startsWith("video/") && !mimeType.startsWith("audio/");
          }
          return false;
        });
      });
    }
    if (channelNameArr.length > 0) {
      filteredFiles = filteredFiles.filter((file) => {
        const fileChannel = file.metadata.Channel;
        const fileChannelName = file.metadata.ChannelName;
        return channelNameArr.some((filterValue) => {
          if (filterValue.includes(":")) {
            const [type, name] = filterValue.split(":", 2);
            return fileChannel === type && fileChannelName === name;
          } else {
            return fileChannelName === filterValue;
          }
        });
      });
    }
    if (includeTags.length > 0 || excludeTags.length > 0) {
      filteredFiles = filteredFiles.filter((file) => {
        const fileTags = (file.metadata.Tags || []).map((t2) => t2.toLowerCase());
        if (includeTags.length > 0) {
          const hasAllIncludeTags = includeTags.every(
            (tag) => fileTags.includes(tag.toLowerCase())
          );
          if (!hasAllIncludeTags) {
            return false;
          }
        }
        if (excludeTags.length > 0) {
          const hasAnyExcludeTag = excludeTags.some(
            (tag) => fileTags.includes(tag.toLowerCase())
          );
          if (hasAnyExcludeTag) {
            return false;
          }
        }
        return true;
      });
    }
    if (search) {
      const searchLower = search.toLowerCase();
      filteredFiles = filteredFiles.filter((file) => {
        const matchesKeyword = file.metadata.FileName?.toLowerCase().includes(searchLower) || file.id.toLowerCase().includes(searchLower);
        return matchesKeyword;
      });
    }
    if (countOnly) {
      return {
        totalCount: filteredFiles.length,
        indexLastUpdated: index.lastUpdated
      };
    }
    const totalCount = filteredFiles.length;
    let resultFiles = filteredFiles;
    const directFiles = filteredFiles.filter((file) => {
      const fileDir = file.metadata.Directory ? file.metadata.Directory : extractDirectory(file.id);
      return fileDir === dirPrefix;
    });
    const directFileCount = directFiles.length;
    if (!includeSubdirFiles) {
      resultFiles = directFiles;
    }
    if (count !== -1) {
      const startIndex = Math.max(0, start);
      const endIndex = startIndex + Math.max(1, count);
      resultFiles = resultFiles.slice(startIndex, endIndex);
    }
    const directories = /* @__PURE__ */ new Set();
    filteredFiles.forEach((file) => {
      const fileDir = file.metadata.Directory ? file.metadata.Directory : extractDirectory(file.id);
      if (fileDir && fileDir.startsWith(dirPrefix)) {
        const relativePath = fileDir.substring(dirPrefix.length);
        const firstSlashIndex = relativePath.indexOf("/");
        if (firstSlashIndex !== -1) {
          const subDir = dirPrefix + relativePath.substring(0, firstSlashIndex);
          directories.add(subDir);
        }
      }
    });
    const directFolderCount = directories.size;
    return {
      files: resultFiles,
      directories: Array.from(directories),
      totalCount,
      directFileCount,
      directFolderCount,
      indexLastUpdated: index.lastUpdated,
      returnedCount: resultFiles.length,
      success: true
    };
  } catch (error) {
    console.error("Error reading index:", error);
    return {
      files: [],
      directories: [],
      totalCount: 0,
      indexLastUpdated: Date.now(),
      returnedCount: 0,
      success: false
    };
  }
}
__name(readIndex, "readIndex");
async function rebuildIndex(context, progressCallback = null) {
  const { env, waitUntil } = context;
  const db = getDatabase(env);
  try {
    console.log("Starting index rebuild...");
    let cursor = null;
    let processedCount = 0;
    const newIndex = {
      files: [],
      lastUpdated: Date.now(),
      totalCount: 0,
      lastOperationId: null
    };
    while (true) {
      const response = await db.list({
        limit: KV_LIST_LIMIT,
        cursor
      });
      cursor = response.cursor;
      for (const item of response.keys) {
        if (item.name.startsWith("manage@") || item.name.startsWith("chunk_")) {
          continue;
        }
        if (!item.metadata || !item.metadata.TimeStamp) {
          continue;
        }
        const fileItem = {
          id: item.name,
          metadata: item.metadata || {}
        };
        newIndex.files.push(fileItem);
        processedCount++;
        if (progressCallback && processedCount % 100 === 0) {
          progressCallback(processedCount);
        }
      }
      if (!cursor) break;
      await new Promise((resolve) => setTimeout(resolve, 10));
    }
    newIndex.files.sort((a2, b2) => b2.metadata.TimeStamp - a2.metadata.TimeStamp);
    newIndex.totalCount = newIndex.files.length;
    const saveSuccess = await saveChunkedIndex(context, newIndex);
    if (!saveSuccess) {
      console.error("Failed to save chunked index during rebuild");
      return {
        success: false,
        error: "Failed to save rebuilt index"
      };
    }
    waitUntil(deleteAllOperations(context));
    waitUntil(clearChunkedIndex(context, true));
    console.log(`Index rebuild completed. Processed ${processedCount} files, indexed ${newIndex.totalCount} files.`);
    return {
      success: true,
      processedCount,
      indexedCount: newIndex.totalCount
    };
  } catch (error) {
    console.error("Error rebuilding index:", error);
    return {
      success: false,
      error: error.message
    };
  }
}
__name(rebuildIndex, "rebuildIndex");
async function getIndexInfo(context) {
  try {
    const index = await getIndex(context);
    if (index.success === false) {
      return {
        success: false,
        error: "Failed to retrieve index",
        message: "Index is not available or corrupted"
      };
    }
    const channelStats = {};
    const directoryStats = {};
    const typeStats = {};
    index.files.forEach((file) => {
      let channel = file.metadata.Channel || "Telegraph";
      if (channel === "TelegramNew") {
        channel = "Telegram";
      }
      channelStats[channel] = (channelStats[channel] || 0) + 1;
      const dir = file.metadata.Directory || extractDirectory(file.id) || "/";
      directoryStats[dir] = (directoryStats[dir] || 0) + 1;
      let listType = file.metadata.ListType || "None";
      const label = file.metadata.Label || "None";
      if (listType !== "White" && label === "adult") {
        listType = "Block";
      }
      typeStats[listType] = (typeStats[listType] || 0) + 1;
    });
    return {
      success: true,
      totalFiles: index.totalCount,
      lastUpdated: index.lastUpdated,
      channelStats,
      directoryStats,
      typeStats,
      oldestFile: index.files[index.files.length - 1],
      newestFile: index.files[0]
    };
  } catch (error) {
    console.error("Error getting index info:", error);
    return null;
  }
}
__name(getIndexInfo, "getIndexInfo");
async function getIndexMeta(context) {
  const { env } = context;
  const db = getDatabase(env);
  try {
    const metadataStr = await db.get(INDEX_META_KEY);
    if (!metadataStr) {
      return {
        success: false,
        totalCount: 0,
        totalSizeMB: 0,
        channelStats: {}
      };
    }
    const metadata = JSON.parse(metadataStr);
    return {
      success: true,
      totalCount: metadata.totalCount || 0,
      totalSizeMB: metadata.totalSizeMB || 0,
      channelStats: metadata.channelStats || {},
      lastUpdated: metadata.lastUpdated
    };
  } catch (error) {
    console.error("Error getting index meta:", error);
    return {
      success: false,
      totalCount: 0,
      totalSizeMB: 0,
      channelStats: {}
    };
  }
}
__name(getIndexMeta, "getIndexMeta");
function generateOperationId() {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 9);
  return `${timestamp}_${random}`;
}
__name(generateOperationId, "generateOperationId");
async function recordOperation(context, type, data) {
  const { env } = context;
  const db = getDatabase(env);
  const operationId = generateOperationId();
  const operation = {
    type,
    timestamp: Date.now(),
    data
  };
  const operationKey = OPERATION_KEY_PREFIX + operationId;
  await db.put(operationKey, JSON.stringify(operation));
  return operationId;
}
__name(recordOperation, "recordOperation");
async function getAllPendingOperations(context, lastOperationId = null) {
  const { env } = context;
  const db = getDatabase(env);
  const operations = [];
  let cursor = null;
  const MAX_OPERATION_COUNT = 30;
  let isALL = true;
  let operationCount = 0;
  try {
    while (true) {
      const response = await db.list({
        prefix: OPERATION_KEY_PREFIX,
        limit: KV_LIST_LIMIT,
        cursor
      });
      for (const item of response.keys) {
        if (lastOperationId && item.name <= OPERATION_KEY_PREFIX + lastOperationId) {
          continue;
        }
        if (operationCount >= MAX_OPERATION_COUNT) {
          isALL = false;
          break;
        }
        try {
          const operationData = await db.get(item.name);
          if (operationData) {
            const operation = JSON.parse(operationData);
            operation.id = item.name.substring(OPERATION_KEY_PREFIX.length);
            operations.push(operation);
            operationCount++;
          }
        } catch (error) {
          isALL = false;
          console.warn(`Failed to parse operation ${item.name}:`, error);
        }
      }
      cursor = response.cursor;
      if (!cursor || operationCount >= MAX_OPERATION_COUNT) break;
    }
  } catch (error) {
    console.error("Error getting pending operations:", error);
  }
  return {
    operations,
    isAll: isALL
  };
}
__name(getAllPendingOperations, "getAllPendingOperations");
function applyAddOperation(index, data) {
  const { fileId, metadata } = data;
  const existingIndex = index.files.findIndex((file) => file.id === fileId);
  const fileItem = {
    id: fileId,
    metadata: metadata || {}
  };
  if (existingIndex !== -1) {
    index.files[existingIndex] = fileItem;
    return { added: false, updated: true };
  } else {
    insertFileInOrder(index.files, fileItem);
    return { added: true, updated: false };
  }
}
__name(applyAddOperation, "applyAddOperation");
function applyRemoveOperation(index, data) {
  const { fileId } = data;
  const initialLength = index.files.length;
  index.files = index.files.filter((file) => file.id !== fileId);
  return index.files.length < initialLength;
}
__name(applyRemoveOperation, "applyRemoveOperation");
function applyMoveOperation(index, data) {
  const { originalFileId, newFileId, metadata } = data;
  const originalIndex = index.files.findIndex((file) => file.id === originalFileId);
  if (originalIndex === -1) {
    return false;
  }
  index.files[originalIndex] = {
    id: newFileId,
    metadata: metadata || index.files[originalIndex].metadata
  };
  return true;
}
__name(applyMoveOperation, "applyMoveOperation");
function applyBatchAddOperation(index, data) {
  const { files, options } = data;
  const { skipExisting = false } = options || {};
  let addedCount = 0;
  let updatedCount = 0;
  const existingFilesMap = /* @__PURE__ */ new Map();
  index.files.forEach((file, idx) => {
    existingFilesMap.set(file.id, idx);
  });
  for (const fileData of files) {
    const { fileId, metadata } = fileData;
    const fileItem = {
      id: fileId,
      metadata: metadata || {}
    };
    const existingIndex = existingFilesMap.get(fileId);
    if (existingIndex !== void 0) {
      if (!skipExisting) {
        index.files[existingIndex] = fileItem;
        updatedCount++;
      }
    } else {
      insertFileInOrder(index.files, fileItem);
      index.files.forEach((file, idx) => {
        existingFilesMap.set(file.id, idx);
      });
      addedCount++;
    }
  }
  return { addedCount, updatedCount };
}
__name(applyBatchAddOperation, "applyBatchAddOperation");
function applyBatchRemoveOperation(index, data) {
  const { fileIds } = data;
  const fileIdSet = new Set(fileIds);
  const initialLength = index.files.length;
  index.files = index.files.filter((file) => !fileIdSet.has(file.id));
  return initialLength - index.files.length;
}
__name(applyBatchRemoveOperation, "applyBatchRemoveOperation");
function applyBatchMoveOperation(index, data) {
  const { operations } = data;
  let movedCount = 0;
  const existingFilesMap = /* @__PURE__ */ new Map();
  index.files.forEach((file, idx) => {
    existingFilesMap.set(file.id, idx);
  });
  for (const operation of operations) {
    const { originalFileId, newFileId, metadata } = operation;
    const originalIndex = existingFilesMap.get(originalFileId);
    if (originalIndex !== void 0) {
      existingFilesMap.delete(originalFileId);
      existingFilesMap.set(newFileId, originalIndex);
      index.files[originalIndex] = {
        id: newFileId,
        metadata: metadata || index.files[originalIndex].metadata
      };
      movedCount++;
    }
  }
  return movedCount;
}
__name(applyBatchMoveOperation, "applyBatchMoveOperation");
async function cleanupOperations(context, operationIds, concurrency = 10) {
  const { env } = context;
  const db = getDatabase(env);
  try {
    console.log(`Cleaning up ${operationIds.length} processed operations with concurrency ${concurrency}...`);
    let deletedCount = 0;
    let errorCount = 0;
    const deleteTasks = operationIds.map((operationId) => {
      const operationKey = OPERATION_KEY_PREFIX + operationId;
      return async () => {
        try {
          await db.delete(operationKey);
          deletedCount++;
        } catch (error) {
          console.error(`Error deleting operation ${operationId}:`, error);
          errorCount++;
        }
      };
    });
    await promiseLimit(deleteTasks, concurrency);
    console.log(`Successfully cleaned up ${deletedCount} operations, ${errorCount} operations failed.`);
    return {
      success: true,
      deletedCount,
      errorCount
    };
  } catch (error) {
    console.error("Error cleaning up operations:", error);
  }
}
__name(cleanupOperations, "cleanupOperations");
async function deleteAllOperations(context) {
  const { request, env } = context;
  const db = getDatabase(env);
  try {
    console.log("Starting to delete all atomic operations...");
    const allOperationIds = [];
    let cursor = null;
    let totalFound = 0;
    while (true) {
      const response = await db.list({
        prefix: OPERATION_KEY_PREFIX,
        limit: KV_LIST_LIMIT,
        cursor
      });
      for (const item of response.keys) {
        allOperationIds.push(item.name.substring(OPERATION_KEY_PREFIX.length));
        totalFound++;
      }
      cursor = response.cursor;
      if (!cursor) break;
    }
    if (totalFound === 0) {
      console.log("No atomic operations found to delete");
      return {
        success: true,
        deletedCount: 0,
        totalFound: 0,
        message: "No operations to delete"
      };
    }
    console.log(`Found ${totalFound} atomic operations to delete`);
    const MAX_DELETE_BATCH = 40;
    const toDeleteOperationIds = allOperationIds.slice(0, MAX_DELETE_BATCH);
    const cleanupResult = await cleanupOperations(context, toDeleteOperationIds);
    if (allOperationIds.length > MAX_DELETE_BATCH || cleanupResult.errorCount > 0) {
      console.warn(`Too many operations (${allOperationIds.length}), only deleting first ${cleanupResult.deletedCount}. The remaining operations will be deleted in subsequent calls.`);
      const headers = new Headers(request.headers);
      const originUrl = new URL(request.url);
      const deleteUrl = `${originUrl.protocol}//${originUrl.host}/api/manage/list?action=delete-operations`;
      await fetch(deleteUrl, {
        method: "GET",
        headers
      });
    } else {
      console.log(`Delete all operations completed`);
    }
  } catch (error) {
    console.error("Error deleting all operations:", error);
  }
}
__name(deleteAllOperations, "deleteAllOperations");
async function getIndex(context) {
  const { waitUntil } = context;
  try {
    const index = await loadChunkedIndex(context);
    if (index.success) {
      return index;
    } else {
      waitUntil(rebuildIndex(context));
    }
  } catch (error) {
    console.warn("Error reading index, creating new one:", error);
    waitUntil(rebuildIndex(context));
  }
  return {
    files: [],
    lastUpdated: Date.now(),
    totalCount: 0,
    lastOperationId: null,
    success: false
  };
}
__name(getIndex, "getIndex");
function extractDirectory(filePath) {
  const lastSlashIndex = filePath.lastIndexOf("/");
  if (lastSlashIndex === -1) {
    return "";
  }
  return filePath.substring(0, lastSlashIndex + 1);
}
__name(extractDirectory, "extractDirectory");
function buildTree(directories) {
  const root = {
    name: "/",
    path: "",
    children: []
  };
  if (!directories || directories.length === 0) {
    return root;
  }
  const nodeMap = /* @__PURE__ */ new Map();
  nodeMap.set("", root);
  const sortedDirs = [...directories].sort();
  for (const dirPath of sortedDirs) {
    if (!dirPath) continue;
    const normalizedPath = dirPath.endsWith("/") ? dirPath : dirPath + "/";
    if (nodeMap.has(normalizedPath)) continue;
    const parts = normalizedPath.split("/").filter((part) => part !== "");
    let currentPath = "";
    let parentNode = root;
    for (let i2 = 0; i2 < parts.length; i2++) {
      const part = parts[i2];
      currentPath = currentPath + part + "/";
      if (nodeMap.has(currentPath)) {
        parentNode = nodeMap.get(currentPath);
      } else {
        const newNode = {
          name: part,
          path: currentPath,
          children: []
        };
        parentNode.children.push(newNode);
        nodeMap.set(currentPath, newNode);
        parentNode = newNode;
      }
    }
  }
  const sortChildren = /* @__PURE__ */ __name((node) => {
    node.children.sort((a2, b2) => a2.name.localeCompare(b2.name));
    node.children.forEach(sortChildren);
  }, "sortChildren");
  sortChildren(root);
  return root;
}
__name(buildTree, "buildTree");
function insertFileInOrder(sortedFiles, fileItem) {
  const fileTimestamp = fileItem.metadata.TimeStamp || 0;
  if (sortedFiles.length === 0 || fileTimestamp >= (sortedFiles[0].metadata.TimeStamp || 0)) {
    sortedFiles.unshift(fileItem);
    return;
  }
  if (fileTimestamp <= (sortedFiles[sortedFiles.length - 1].metadata.TimeStamp || 0)) {
    sortedFiles.push(fileItem);
    return;
  }
  let left = 0;
  let right = sortedFiles.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const midTimestamp = sortedFiles[mid].metadata.TimeStamp || 0;
    if (fileTimestamp >= midTimestamp) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  sortedFiles.splice(left, 0, fileItem);
}
__name(insertFileInOrder, "insertFileInOrder");
async function promiseLimit(tasks, concurrency = BATCH_SIZE) {
  const results = [];
  const executing = [];
  for (let i2 = 0; i2 < tasks.length; i2++) {
    const task = tasks[i2];
    const promise = Promise.resolve().then(() => task()).then((result) => {
      results[i2] = result;
      return result;
    }).finally(() => {
      const index = executing.indexOf(promise);
      if (index >= 0) {
        executing.splice(index, 1);
      }
    });
    executing.push(promise);
    if (executing.length >= concurrency) {
      await Promise.race(executing);
    }
  }
  await Promise.all(executing);
  return results;
}
__name(promiseLimit, "promiseLimit");
async function saveChunkedIndex(context, index) {
  const { env } = context;
  const db = getDatabase(env);
  const chunkSize = getIndexChunkSize(env);
  try {
    const files = index.files || [];
    const chunks = [];
    for (let i2 = 0; i2 < files.length; i2 += chunkSize) {
      const chunk = files.slice(i2, i2 + chunkSize);
      chunks.push(chunk);
    }
    const channelStats = {};
    let totalSizeMB = 0;
    for (const file of files) {
      const channelName = file.metadata?.ChannelName;
      const fileSize = parseFloat(file.metadata?.FileSize) || 0;
      totalSizeMB += fileSize;
      if (channelName) {
        if (!channelStats[channelName]) {
          channelStats[channelName] = { usedMB: 0, fileCount: 0 };
        }
        channelStats[channelName].usedMB += fileSize;
        channelStats[channelName].fileCount += 1;
      }
    }
    const metadata = {
      lastUpdated: index.lastUpdated,
      totalCount: index.totalCount,
      totalSizeMB: Math.round(totalSizeMB * 100) / 100,
      channelStats,
      lastOperationId: index.lastOperationId,
      chunkCount: chunks.length,
      chunkSize
    };
    await db.put(INDEX_META_KEY, JSON.stringify(metadata));
    const savePromises = chunks.map((chunk, chunkId) => {
      const chunkKey = `${INDEX_KEY}_${chunkId}`;
      return db.put(chunkKey, JSON.stringify(chunk));
    });
    await Promise.all(savePromises);
    console.log(`Saved chunked index: ${chunks.length} chunks, ${files.length} total files, ${totalSizeMB.toFixed(2)} MB`);
    return true;
  } catch (error) {
    console.error("Error saving chunked index:", error);
    return false;
  }
}
__name(saveChunkedIndex, "saveChunkedIndex");
async function loadChunkedIndex(context) {
  const { env } = context;
  const db = getDatabase(env);
  try {
    const metadataStr = await db.get(INDEX_META_KEY);
    if (!metadataStr) {
      throw new Error("Index metadata not found");
    }
    const metadata = JSON.parse(metadataStr);
    const files = [];
    const loadPromises = [];
    for (let chunkId = 0; chunkId < metadata.chunkCount; chunkId++) {
      const chunkKey = `${INDEX_KEY}_${chunkId}`;
      loadPromises.push(
        db.get(chunkKey).then((chunkStr) => {
          if (chunkStr) {
            return JSON.parse(chunkStr);
          }
          return [];
        })
      );
    }
    const chunks = await Promise.all(loadPromises);
    chunks.forEach((chunk) => {
      if (Array.isArray(chunk)) {
        files.push(...chunk);
      }
    });
    const index = {
      files,
      lastUpdated: metadata.lastUpdated,
      totalCount: metadata.totalCount,
      lastOperationId: metadata.lastOperationId,
      success: true
    };
    console.log(`Loaded chunked index: ${metadata.chunkCount} chunks, ${files.length} total files`);
    return index;
  } catch (error) {
    console.error("Error loading chunked index:", error);
    return {
      files: [],
      lastUpdated: Date.now(),
      totalCount: 0,
      lastOperationId: null,
      success: false
    };
  }
}
__name(loadChunkedIndex, "loadChunkedIndex");
async function clearChunkedIndex(context, onlyNonUsed = false) {
  const { env } = context;
  const db = getDatabase(env);
  try {
    console.log("Starting chunked index cleanup...");
    const metadataStr = await db.get(INDEX_META_KEY);
    let chunkCount = 0;
    if (metadataStr) {
      const metadata = JSON.parse(metadataStr);
      chunkCount = metadata.chunkCount || 0;
      if (!onlyNonUsed) {
        await db.delete(INDEX_META_KEY).catch(() => {
        });
      }
    }
    const recordedChunks = [];
    let cursor = null;
    while (true) {
      const response = await db.list({
        prefix: INDEX_KEY,
        limit: KV_LIST_LIMIT,
        cursor
      });
      for (const item of response.keys) {
        recordedChunks.push(item.name);
      }
      cursor = response.cursor;
      if (!cursor) break;
    }
    const reservedChunks = [];
    if (onlyNonUsed) {
      for (let chunkId = 0; chunkId < chunkCount; chunkId++) {
        reservedChunks.push(`${INDEX_KEY}_${chunkId}`);
      }
    }
    const deletePromises = [];
    for (let chunkKey of recordedChunks) {
      if (reservedChunks.includes(chunkKey) || !chunkKey.startsWith(INDEX_KEY + "_")) {
        continue;
      }
      deletePromises.push(
        db.delete(chunkKey).catch(() => {
        })
      );
    }
    if (recordedChunks.includes(INDEX_KEY)) {
      deletePromises.push(
        db.delete(INDEX_KEY).catch(() => {
        })
      );
    }
    await Promise.all(deletePromises);
    console.log(`Chunked index cleanup completed. Attempted to delete ${chunkCount} chunks.`);
    return true;
  } catch (error) {
    console.error("Error during chunked index cleanup:", error);
    return false;
  }
}
__name(clearChunkedIndex, "clearChunkedIndex");
async function getIndexStorageStats(context) {
  const { env } = context;
  const db = getDatabase(env);
  try {
    const metadataStr = await db.get(INDEX_META_KEY);
    if (!metadataStr) {
      return {
        success: false,
        error: "No chunked index metadata found",
        isChunked: false
      };
    }
    const metadata = JSON.parse(metadataStr);
    const chunkChecks = [];
    for (let chunkId = 0; chunkId < metadata.chunkCount; chunkId++) {
      const chunkKey = `${INDEX_KEY}_${chunkId}`;
      chunkChecks.push(
        db.get(chunkKey).then((data) => ({
          chunkId,
          exists: !!data,
          size: data ? data.length : 0
        }))
      );
    }
    const chunkResults = await Promise.all(chunkChecks);
    const stats = {
      success: true,
      isChunked: true,
      metadata,
      chunks: chunkResults,
      totalChunks: metadata.chunkCount,
      existingChunks: chunkResults.filter((c2) => c2.exists).length,
      totalSize: chunkResults.reduce((sum, c2) => sum + c2.size, 0)
    };
    return stats;
  } catch (error) {
    console.error("Error getting index storage stats:", error);
    return {
      success: false,
      error: error.message,
      isChunked: false
    };
  }
}
__name(getIndexStorageStats, "getIndexStorageStats");
async function getDirectoryTree(context) {
  await mergeOperationsToIndex(context);
  const index = await getIndex(context);
  const directorySet = /* @__PURE__ */ new Set();
  if (index.files && index.files.length > 0) {
    for (const file of index.files) {
      const dirPath = file.metadata?.Directory || extractDirectory(file.id);
      if (dirPath) {
        const normalizedDir = dirPath.endsWith("/") ? dirPath : dirPath + "/";
        const parts = normalizedDir.split("/").filter((part) => part !== "");
        let currentPath = "";
        for (const part of parts) {
          currentPath = currentPath + part + "/";
          directorySet.add(currentPath);
        }
      }
    }
  }
  const directories = Array.from(directorySet);
  return buildTree(directories);
}
__name(getDirectoryTree, "getDirectoryTree");

// functions/utils/sysConfig.js
async function filterChannelsByQuota(context, channels) {
  const hasQuotaEnabled = channels.some((ch2) => ch2.quota?.enabled && ch2.quota?.limitGB);
  if (!hasQuotaEnabled) {
    return channels;
  }
  const indexMeta = await getIndexMeta(context);
  const channelStats = indexMeta.channelStats || {};
  const result = [];
  for (const channel of channels) {
    if (!channel.quota?.enabled || !channel.quota?.limitGB) {
      result.push(channel);
      continue;
    }
    try {
      const stats = channelStats[channel.name] || { usedMB: 0, fileCount: 0 };
      const usedGB = stats.usedMB / 1024;
      const limitGB = channel.quota.limitGB;
      const threshold = channel.quota.threshold || 95;
      if (usedGB / limitGB * 100 < threshold) {
        result.push(channel);
      } else {
        console.log(`Channel ${channel.name} quota exceeded: ${usedGB.toFixed(2)}GB / ${limitGB}GB (${threshold}% threshold)`);
      }
    } catch (error) {
      console.error(`Failed to check quota for channel ${channel.name}:`, error);
      result.push(channel);
    }
  }
  return result;
}
__name(filterChannelsByQuota, "filterChannelsByQuota");
async function fetchUploadConfig(env, context = null) {
  try {
    const db = getDatabase(env);
    const settings = await getUploadConfig(db, env);
    settings.telegram.channels = settings.telegram.channels.filter((channel) => channel.enabled);
    settings.cfr2.channels = settings.cfr2.channels.filter((channel) => channel.enabled);
    settings.s3.channels = settings.s3.channels.filter((channel) => channel.enabled);
    settings.discord.channels = settings.discord.channels.filter((channel) => channel.enabled);
    settings.huggingface.channels = settings.huggingface.channels.filter((channel) => channel.enabled);
    if (context) {
      settings.cfr2.channels = await filterChannelsByQuota(context, settings.cfr2.channels);
      settings.s3.channels = await filterChannelsByQuota(context, settings.s3.channels);
    }
    return settings;
  } catch (error) {
    console.error("Failed to fetch upload config:", error);
    return {
      telegram: { channels: [] },
      cfr2: { channels: [] },
      s3: { channels: [] },
      discord: { channels: [] },
      huggingface: { channels: [] }
    };
  }
}
__name(fetchUploadConfig, "fetchUploadConfig");
async function fetchSecurityConfig(env) {
  try {
    const db = getDatabase(env);
    const settings = await getSecurityConfig(db, env);
    return settings;
  } catch (error) {
    console.error("Failed to fetch security config:", error);
    return {
      auth: {
        user: { authCode: "" },
        admin: { adminUsername: "", adminPassword: "" }
      },
      upload: {
        moderate: { enabled: false, channel: "default", moderateContentApiKey: "", nsfwApiPath: "" }
      },
      access: { allowedDomains: "", whiteListMode: false }
    };
  }
}
__name(fetchSecurityConfig, "fetchSecurityConfig");
async function fetchPageConfig(env) {
  try {
    const db = getDatabase(env);
    const settings = await getPageConfig(db, env);
    return settings;
  } catch (error) {
    console.error("Failed to fetch page config:", error);
    return { config: [] };
  }
}
__name(fetchPageConfig, "fetchPageConfig");
async function fetchOthersConfig(env) {
  try {
    const db = getDatabase(env);
    const settings = await getOthersConfig(db, env);
    return settings;
  } catch (error) {
    console.error("Failed to fetch others config:", error);
    return {
      telemetry: { enabled: false }
    };
  }
}
__name(fetchOthersConfig, "fetchOthersConfig");

// functions/api/manage/apiTokens.js
async function onRequest5(context) {
  const {
    request,
    env
  } = context;
  const db = getDatabase(env);
  const url = new URL(request.url);
  const method = request.method;
  if (method === "GET") {
    const tokens = await getApiTokens(db);
    return new Response(JSON.stringify(tokens), {
      headers: {
        "content-type": "application/json"
      }
    });
  }
  if (method === "POST") {
    const body = await request.json();
    const { name, permissions, owner } = body;
    if (!name || !permissions || !owner) {
      return new Response(JSON.stringify({ error: "\u7F3A\u5C11\u5FC5\u8981\u53C2\u6570" }), {
        status: 400,
        headers: {
          "content-type": "application/json"
        }
      });
    }
    const token = await createApiToken(db, name, permissions, owner);
    return new Response(JSON.stringify(token), {
      headers: {
        "content-type": "application/json"
      }
    });
  }
  if (method === "DELETE") {
    const tokenId = url.searchParams.get("id");
    if (!tokenId) {
      return new Response(JSON.stringify({ error: "\u7F3A\u5C11Token ID" }), {
        status: 400,
        headers: {
          "content-type": "application/json"
        }
      });
    }
    const result = await deleteApiToken(db, tokenId);
    return new Response(JSON.stringify(result), {
      headers: {
        "content-type": "application/json"
      }
    });
  }
  if (method === "PUT") {
    const body = await request.json();
    const { tokenId, permissions } = body;
    if (!tokenId || !permissions) {
      return new Response(JSON.stringify({ error: "\u7F3A\u5C11\u5FC5\u8981\u53C2\u6570" }), {
        status: 400,
        headers: {
          "content-type": "application/json"
        }
      });
    }
    const result = await updateApiToken(db, tokenId, permissions);
    return new Response(JSON.stringify(result), {
      headers: {
        "content-type": "application/json"
      }
    });
  }
  return new Response("Method not allowed", { status: 405 });
}
__name(onRequest5, "onRequest");
async function getApiTokens(db) {
  const settingsStr = await db.get("manage@sysConfig@security");
  const settings = settingsStr ? JSON.parse(settingsStr) : {};
  const tokens = settings.apiTokens?.tokens || {};
  const tokenList = Object.keys(tokens).map((id) => {
    const token = tokens[id];
    return {
      id,
      name: token.name,
      owner: token.owner,
      permissions: token.permissions,
      createdAt: token.createdAt,
      updatedAt: token.updatedAt,
      token: token.token.substr(0, 15) + "..."
      // 只显示前15位
    };
  });
  return { tokens: tokenList };
}
__name(getApiTokens, "getApiTokens");
async function createApiToken(db, name, permissions, owner) {
  const settingsStr = await db.get("manage@sysConfig@security");
  const settings = settingsStr ? JSON.parse(settingsStr) : {};
  if (!settings.apiTokens) {
    settings.apiTokens = { tokens: {} };
  }
  const tokenId = generateTokenId();
  const token = generateApiToken();
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const tokenData = {
    id: tokenId,
    name,
    token,
    owner,
    permissions,
    createdAt: now,
    updatedAt: now
  };
  settings.apiTokens.tokens[tokenId] = tokenData;
  await db.put("manage@sysConfig@security", JSON.stringify(settings));
  return {
    id: tokenId,
    name,
    token,
    owner,
    permissions,
    createdAt: now,
    updatedAt: now
  };
}
__name(createApiToken, "createApiToken");
async function deleteApiToken(db, tokenId) {
  const settingsStr = await db.get("manage@sysConfig@security");
  const settings = settingsStr ? JSON.parse(settingsStr) : {};
  if (!settings.apiTokens?.tokens?.[tokenId]) {
    return { error: "Token \u4E0D\u5B58\u5728" };
  }
  delete settings.apiTokens.tokens[tokenId];
  await db.put("manage@sysConfig@security", JSON.stringify(settings));
  return { success: true, message: "Token \u5DF2\u5220\u9664" };
}
__name(deleteApiToken, "deleteApiToken");
async function updateApiToken(db, tokenId, permissions) {
  const settingsStr = await db.get("manage@sysConfig@security");
  const settings = settingsStr ? JSON.parse(settingsStr) : {};
  if (!settings.apiTokens?.tokens?.[tokenId]) {
    return { error: "Token \u4E0D\u5B58\u5728" };
  }
  settings.apiTokens.tokens[tokenId].permissions = permissions;
  settings.apiTokens.tokens[tokenId].updatedAt = (/* @__PURE__ */ new Date()).toISOString();
  await db.put("manage@sysConfig@security", JSON.stringify(settings));
  return {
    success: true,
    message: "Token \u6743\u9650\u5DF2\u66F4\u65B0",
    token: settings.apiTokens.tokens[tokenId]
  };
}
__name(updateApiToken, "updateApiToken");
function generateApiToken() {
  const chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "imgbed_";
  for (let i2 = 0; i2 < 32; i2++) {
    result += chars2.charAt(Math.floor(Math.random() * chars2.length));
  }
  return result;
}
__name(generateApiToken, "generateApiToken");
function generateTokenId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}
__name(generateTokenId, "generateTokenId");
async function getTokenPermissions(db, token) {
  const settingsStr = await db.get("manage@sysConfig@security");
  const settings = settingsStr ? JSON.parse(settingsStr) : {};
  const tokens = settings.apiTokens?.tokens || {};
  for (const tokenId in tokens) {
    if (tokens[tokenId].token === token) {
      return tokens[tokenId].permissions;
    }
  }
  return null;
}
__name(getTokenPermissions, "getTokenPermissions");

// functions/utils/tokenValidator.js
async function validateApiToken(request, db, requiredPermission) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader) {
    return { valid: false, error: "\u7F3A\u5C11Authorization\u5934" };
  }
  let token;
  if (authHeader.startsWith("Bearer ")) {
    token = authHeader.substring(7);
  } else {
    token = authHeader;
  }
  if (!token) {
    return { valid: false, error: "\u65E0\u6548\u7684Token\u683C\u5F0F" };
  }
  const permissions = await getTokenPermissions(db, token);
  if (!permissions) {
    return { valid: false, error: "\u65E0\u6548\u7684Token" };
  }
  if (requiredPermission !== null && !permissions.includes(requiredPermission)) {
    return { valid: false, error: `\u7F3A\u5C11${requiredPermission}\u6743\u9650` };
  }
  return { valid: true };
}
__name(validateApiToken, "validateApiToken");

// functions/utils/userAuth.js
async function userAuthCheck(env, url, request, requiredPermission = null) {
  const tokenValidation = await validateApiToken(request, getDatabase(env), requiredPermission);
  if (tokenValidation.valid) {
    return true;
  }
  const securityConfig2 = await fetchSecurityConfig(env);
  const rightAuthCode = securityConfig2.auth.user.authCode;
  let authCode = url.searchParams.get("authCode");
  if (!authCode) {
    const referer = request.headers.get("Referer");
    if (referer) {
      try {
        const refererUrl = new URL(referer);
        authCode = new URLSearchParams(refererUrl.search).get("authCode");
      } catch (e2) {
        console.error("Invalid referer URL:", e2);
      }
    }
  }
  if (!authCode) {
    authCode = request.headers.get("authCode");
  }
  if (!authCode) {
    const cookies = request.headers.get("Cookie");
    if (cookies) {
      authCode = getCookieValue(cookies, "authCode");
    }
  }
  if (isAuthCodeDefined(rightAuthCode) && !isValidAuthCode(rightAuthCode, authCode)) {
    return false;
  }
  return true;
}
__name(userAuthCheck, "userAuthCheck");
function UnauthorizedResponse(reason) {
  return new Response(reason, {
    status: 401,
    statusText: "Unauthorized",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, authCode",
      "Content-Type": "text/plain;charset=UTF-8",
      "Cache-Control": "no-store",
      "Content-Length": reason.length
    }
  });
}
__name(UnauthorizedResponse, "UnauthorizedResponse");
function isValidAuthCode(rightAuthCode, authCode) {
  return authCode === rightAuthCode;
}
__name(isValidAuthCode, "isValidAuthCode");
function isAuthCodeDefined(authCode) {
  return authCode !== void 0 && authCode !== null && authCode.trim() !== "";
}
__name(isAuthCodeDefined, "isAuthCodeDefined");
function getCookieValue(cookies, name) {
  const match = cookies.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}
__name(getCookieValue, "getCookieValue");

// functions/utils/purgeCache.js
var othersConfig = {};
var cfZoneId = "";
var cfEmail = "";
var cfApiKey = "";
async function purgeCFCache(env, cdnUrl) {
  try {
    othersConfig = await fetchOthersConfig(env);
    cfZoneId = othersConfig.cloudflareApiToken.CF_ZONE_ID;
    cfEmail = othersConfig.cloudflareApiToken.CF_EMAIL;
    cfApiKey = othersConfig.cloudflareApiToken.CF_API_KEY;
    if (!cfZoneId || !cfEmail || !cfApiKey) {
      return;
    }
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Auth-Email": `${cfEmail}`, "X-Auth-Key": `${cfApiKey}` },
      body: `{"files":["${cdnUrl}"]}`
    };
    await fetch(`https://api.cloudflare.com/client/v4/zones/${cfZoneId}/purge_cache`, options);
  } catch (error) {
    console.error("Failed to purge CF cache:", error.message || error);
  }
}
__name(purgeCFCache, "purgeCFCache");
async function purgeRandomFileListCache(origin, ...dirs) {
  try {
    const cache2 = caches.default;
    const nullResponse = new Response(null, {
      headers: { "Cache-Control": "max-age=0" }
    });
    for (const dir of dirs) {
      await cache2.put(`${origin}/api/randomFileList?dir=${dir}`, nullResponse);
    }
  } catch (error) {
    console.error("Failed to clear randomFileList cache:", error);
  }
}
__name(purgeRandomFileListCache, "purgeRandomFileListCache");
async function purgePublicFileListCache(origin, ...dirs) {
  try {
    const cache2 = caches.default;
    const nullResponse = new Response(null, {
      headers: { "Cache-Control": "max-age=0" }
    });
    for (const dir of dirs) {
      await cache2.put(`${origin}/api/publicFileList?dir=${dir}&recursive=false`, nullResponse);
      await cache2.put(`${origin}/api/publicFileList?dir=${dir}&recursive=true`, nullResponse);
    }
  } catch (error) {
    console.error("Failed to clear publicFileList cache:", error);
  }
}
__name(purgePublicFileListCache, "purgePublicFileListCache");

// functions/upload/uploadTools.js
function createResponse(body, options = {}) {
  const defaultHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, authCode",
    "Access-Control-Max-Age": "86400"
  };
  return new Response(body, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers
    }
  });
}
__name(createResponse, "createResponse");
function generateShortId(length = 8) {
  const chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i2 = 0; i2 < length; i2++) {
    result += chars2.charAt(Math.floor(Math.random() * chars2.length));
  }
  return result;
}
__name(generateShortId, "generateShortId");
async function getIPAddress(ip) {
  let address = "\u672A\u77E5";
  try {
    const ipInfo = await fetch(`https://apimobile.meituan.com/locate/v2/ip/loc?rgeo=true&ip=${ip}`);
    const ipData = await ipInfo.json();
    if (ipInfo.ok && ipData.data) {
      const lng = ipData.data?.lng || 0;
      const lat = ipData.data?.lat || 0;
      const addressInfo = await fetch(`https://apimobile.meituan.com/group/v1/city/latlng/${lat},${lng}?tag=0`);
      const addressData = await addressInfo.json();
      if (addressInfo.ok && addressData.data) {
        address = [
          addressData.data.detail,
          addressData.data.city,
          addressData.data.province,
          addressData.data.country
        ].filter(Boolean).join(", ");
      }
    }
  } catch (error) {
    console.error("Error fetching IP address:", error);
  }
  return address;
}
__name(getIPAddress, "getIPAddress");
function sanitizeFileName(fileName) {
  fileName = decodeURIComponent(fileName);
  fileName = fileName.split("/").pop();
  const unsafeCharsRe = /[\\\/:\*\?"'<>\| \(\)\[\]\{\}#%\^`~;@&=\+\$,]/g;
  return fileName.replace(unsafeCharsRe, "_");
}
__name(sanitizeFileName, "sanitizeFileName");
function sanitizeUploadFolder(folder) {
  if (!folder || folder.trim() === "") {
    return "";
  }
  if (/%[0-9a-fA-F]{2}/.test(folder)) {
    try {
      folder = decodeURIComponent(folder);
    } catch (e2) {
    }
  }
  folder = folder.replace(/\.\./g, "_");
  folder = folder.split("/").map((seg) => seg === "." ? "_" : seg).join("/");
  folder = folder.replace(/\\/g, "/");
  folder = folder.replace(/\/{2,}/g, "/");
  folder = folder.replace(/^\/+/, "");
  folder = folder.replace(/\/+$/, "");
  const segments = folder.split("/");
  const sanitizedSegments = segments.map((seg) => {
    return seg.replace(/[\\:\*\?"'<>\| \(\)\[\]\{\}#%\^`~;@&=\+\$,]/g, "_");
  }).filter((seg) => seg.length > 0);
  return sanitizedSegments.join("/");
}
__name(sanitizeUploadFolder, "sanitizeUploadFolder");
function isExtValid(fileExt) {
  return [
    "jpeg",
    "jpg",
    "png",
    "gif",
    "webp",
    "mp4",
    "mp3",
    "ogg",
    "mp3",
    "wav",
    "flac",
    "aac",
    "opus",
    "doc",
    "docx",
    "ppt",
    "pptx",
    "xls",
    "xlsx",
    "pdf",
    "txt",
    "md",
    "json",
    "xml",
    "html",
    "css",
    "js",
    "ts",
    "go",
    "java",
    "php",
    "py",
    "rb",
    "sh",
    "bat",
    "cmd",
    "ps1",
    "psm1",
    "psd",
    "ai",
    "sketch",
    "fig",
    "svg",
    "eps",
    "zip",
    "rar",
    "7z",
    "tar",
    "gz",
    "bz2",
    "xz",
    "apk",
    "exe",
    "msi",
    "dmg",
    "iso",
    "torrent",
    "webp",
    "ico",
    "svg",
    "ttf",
    "otf",
    "woff",
    "woff2",
    "eot",
    "apk",
    "crx",
    "xpi",
    "deb",
    "rpm",
    "jar",
    "war",
    "ear",
    "img",
    "iso",
    "vdi",
    "ova",
    "ovf",
    "qcow2",
    "vmdk",
    "vhd",
    "vhdx",
    "pvm",
    "dsk",
    "hdd",
    "bin",
    "cue",
    "mds",
    "mdf",
    "nrg",
    "ccd",
    "cif",
    "c2d",
    "daa",
    "b6t",
    "b5t",
    "bwt",
    "isz",
    "isz",
    "cdi",
    "flp",
    "uif",
    "xdi",
    "sdi"
  ].includes(fileExt);
}
__name(isExtValid, "isExtValid");
function resolveFileExt(fileName, fileType = "application/octet-stream") {
  let fileExt = fileName.split(".").pop();
  if (fileExt && fileExt !== fileName && isExtValid(fileExt)) {
    return fileExt;
  }
  const typePart = fileType.split("/").pop();
  if (typePart && typePart !== fileType) {
    return typePart;
  }
  return "bin";
}
__name(resolveFileExt, "resolveFileExt");
function getImageDimensions(buffer, fileType) {
  try {
    const view = new DataView(buffer);
    const uint8 = new Uint8Array(buffer);
    if (uint8[0] === 137 && uint8[1] === 80 && uint8[2] === 78 && uint8[3] === 71) {
      const width = view.getUint32(16, false);
      const height = view.getUint32(20, false);
      return { width, height };
    }
    if (uint8[0] === 255 && uint8[1] === 216 && uint8[2] === 255) {
      let offset = 2;
      while (offset < buffer.byteLength - 9) {
        if (uint8[offset] !== 255) break;
        const marker = uint8[offset + 1];
        if (marker >= 192 && marker <= 195 && marker !== 196) {
          const height = view.getUint16(offset + 5, false);
          const width = view.getUint16(offset + 7, false);
          return { width, height };
        }
        const length = view.getUint16(offset + 2, false);
        offset += 2 + length;
      }
      return null;
    }
    if (uint8[0] === 71 && uint8[1] === 73 && uint8[2] === 70) {
      const width = view.getUint16(6, true);
      const height = view.getUint16(8, true);
      return { width, height };
    }
    if (uint8[0] === 82 && uint8[1] === 73 && uint8[2] === 70 && uint8[3] === 70 && uint8[8] === 87 && uint8[9] === 69 && uint8[10] === 66 && uint8[11] === 80) {
      if (uint8[12] === 86 && uint8[13] === 80 && uint8[14] === 56 && uint8[15] === 32) {
        if (buffer.byteLength >= 30) {
          const width = view.getUint16(26, true) & 16383;
          const height = view.getUint16(28, true) & 16383;
          return { width, height };
        }
      }
      if (uint8[12] === 86 && uint8[13] === 80 && uint8[14] === 56 && uint8[15] === 76) {
        if (buffer.byteLength >= 25) {
          const bits = view.getUint32(21, true);
          const width = (bits & 16383) + 1;
          const height = (bits >> 14 & 16383) + 1;
          return { width, height };
        }
      }
      if (uint8[12] === 86 && uint8[13] === 80 && uint8[14] === 56 && uint8[15] === 88) {
        if (buffer.byteLength >= 30) {
          const width = (uint8[24] | uint8[25] << 8 | uint8[26] << 16) + 1;
          const height = (uint8[27] | uint8[28] << 8 | uint8[29] << 16) + 1;
          return { width, height };
        }
      }
      return null;
    }
    if (uint8[0] === 66 && uint8[1] === 77) {
      const width = view.getInt32(18, true);
      const height = Math.abs(view.getInt32(22, true));
      return { width, height };
    }
    return null;
  } catch (error) {
    console.error("Error extracting image dimensions:", error);
    return null;
  }
}
__name(getImageDimensions, "getImageDimensions");
async function moderateContent(env, url) {
  const securityConfig2 = await fetchSecurityConfig(env);
  const uploadModerate = securityConfig2.upload.moderate;
  const enableModerate = uploadModerate && uploadModerate.enabled;
  let label = "None";
  if (!enableModerate) {
    return label;
  }
  if (uploadModerate.channel === "moderatecontent.com") {
    const apikey = uploadModerate.moderateContentApiKey;
    if (apikey == void 0 || apikey == null || apikey == "") {
      label = "None";
    } else {
      try {
        const params = new URLSearchParams({ key: apikey, url });
        const fetchResponse = await fetch("https://api.moderatecontent.com/moderate/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: params.toString()
        });
        if (!fetchResponse.ok) {
          throw new Error(`HTTP error! status: ${fetchResponse.status}`);
        }
        const moderate_data = await fetchResponse.json();
        if (moderate_data.rating_label) {
          label = moderate_data.rating_label;
        }
      } catch (error) {
        console.error("Moderate Error:", error);
        label = "None";
      }
    }
    return label;
  }
  if (uploadModerate.channel === "nsfwjs") {
    const nsfwApiPath = securityConfig2.upload.moderate.nsfwApiPath;
    try {
      const fetchResponse = await fetch(`${nsfwApiPath}?url=${encodeURIComponent(url)}`);
      if (!fetchResponse.ok) {
        throw new Error(`HTTP error! status: ${fetchResponse.status}`);
      }
      const moderate_data = await fetchResponse.json();
      const score = moderate_data.score || 0;
      if (score >= 0.9) {
        label = "adult";
      } else if (score >= 0.7) {
        label = "teen";
      } else {
        label = "everyone";
      }
    } catch (error) {
      console.error("Moderate Error:", error);
      label = "None";
    }
    return label;
  }
  return label;
}
__name(moderateContent, "moderateContent");
async function purgeCDNCache(env, cdnUrl, url, normalizedFolder) {
  if (env.dev_mode === "true") {
    return;
  }
  try {
    await purgeCFCache(env, cdnUrl);
  } catch (error) {
    console.error("Failed to clear CDN cache:", error);
  }
  await purgeRandomFileListCache(url.origin, normalizedFolder);
  await purgePublicFileListCache(url.origin, normalizedFolder);
}
__name(purgeCDNCache, "purgeCDNCache");
async function endUpload(context, fileId, metadata) {
  const { env, url } = context;
  const cdnUrl = `https://${url.hostname}/file/${fileId}`;
  const normalizedFolder = sanitizeUploadFolder(url.searchParams.get("uploadFolder") || "");
  await purgeCDNCache(env, cdnUrl, url, normalizedFolder);
  await addFileToIndex(context, fileId, metadata);
}
__name(endUpload, "endUpload");
function getUploadIp(request) {
  const ip = request.headers.get("cf-connecting-ip") || request.headers.get("x-real-ip") || request.headers.get("x-forwarded-for") || request.headers.get("x-client-ip") || request.headers.get("x-host") || request.headers.get("x-originating-ip") || request.headers.get("x-cluster-client-ip") || request.headers.get("forwarded-for") || request.headers.get("forwarded") || request.headers.get("via") || request.headers.get("requester") || request.headers.get("true-client-ip") || request.headers.get("client-ip") || request.headers.get("x-remote-ip") || request.headers.get("x-originating-ip") || request.headers.get("fastly-client-ip") || request.headers.get("akamai-origin-hop") || request.headers.get("x-remote-addr") || request.headers.get("x-remote-host") || request.headers.get("x-client-ips");
  if (!ip) {
    return null;
  }
  const ips = ip.split(",").map((i2) => i2.trim());
  return ips[0];
}
__name(getUploadIp, "getUploadIp");
async function isBlockedUploadIp(env, uploadIp) {
  try {
    const db = getDatabase(env);
    let list = await db.get("manage@blockipList");
    if (list == null) {
      list = [];
    } else {
      list = list.split(",");
    }
    return list.includes(uploadIp);
  } catch (error) {
    console.error("Failed to check blocked IP:", error);
    return false;
  }
}
__name(isBlockedUploadIp, "isBlockedUploadIp");
async function buildUniqueFileId(context, fileName, fileType = "application/octet-stream") {
  const { env, url } = context;
  const db = getDatabase(env);
  const fileExt = resolveFileExt(fileName, fileType);
  const nameType = url.searchParams.get("uploadNameType") || "default";
  const uploadFolder = url.searchParams.get("uploadFolder") || "";
  const normalizedFolder = sanitizeUploadFolder(uploadFolder);
  fileName = sanitizeFileName(fileName);
  const unique_index = Date.now() + Math.floor(Math.random() * 1e4);
  let baseId = "";
  if (nameType === "index") {
    baseId = normalizedFolder ? `${normalizedFolder}/${unique_index}.${fileExt}` : `${unique_index}.${fileExt}`;
  } else if (nameType === "origin") {
    baseId = normalizedFolder ? `${normalizedFolder}/${fileName}` : fileName;
  } else if (nameType === "short") {
    while (true) {
      const shortId = generateShortId(8);
      const testFullId = normalizedFolder ? `${normalizedFolder}/${shortId}.${fileExt}` : `${shortId}.${fileExt}`;
      if (await db.get(testFullId) === null) {
        return testFullId;
      }
    }
  } else {
    baseId = normalizedFolder ? `${normalizedFolder}/${unique_index}_${fileName}` : `${unique_index}_${fileName}`;
  }
  if (await db.get(baseId) === null) {
    return baseId;
  }
  let counter = 1;
  while (true) {
    let duplicateId;
    if (nameType === "index") {
      const baseName = unique_index;
      duplicateId = normalizedFolder ? `${normalizedFolder}/${baseName}(${counter}).${fileExt}` : `${baseName}(${counter}).${fileExt}`;
    } else if (nameType === "origin") {
      const nameWithoutExt = fileName.substring(0, fileName.lastIndexOf("."));
      const ext = fileName.substring(fileName.lastIndexOf("."));
      duplicateId = normalizedFolder ? `${normalizedFolder}/${nameWithoutExt}(${counter})${ext}` : `${nameWithoutExt}(${counter})${ext}`;
    } else {
      const baseName = `${unique_index}_${fileName}`;
      const nameWithoutExt = baseName.substring(0, baseName.lastIndexOf("."));
      const ext = baseName.substring(baseName.lastIndexOf("."));
      duplicateId = normalizedFolder ? `${normalizedFolder}/${nameWithoutExt}(${counter})${ext}` : `${nameWithoutExt}(${counter})${ext}`;
    }
    if (await db.get(duplicateId) === null) {
      return duplicateId;
    }
    counter++;
    if (counter > 1e3) {
      throw new Error("\u65E0\u6CD5\u751F\u6210\u552F\u4E00\u7684\u6587\u4EF6ID");
    }
  }
}
__name(buildUniqueFileId, "buildUniqueFileId");
function selectConsistentChannel(channels, uploadId, loadBalanceEnabled) {
  if (!loadBalanceEnabled || !channels || channels.length === 0) {
    return channels[0];
  }
  let hash = 0;
  for (let i2 = 0; i2 < uploadId.length; i2++) {
    const char = uploadId.charCodeAt(i2);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  const index = Math.abs(hash) % channels.length;
  return channels[index];
}
__name(selectConsistentChannel, "selectConsistentChannel");

// functions/utils/telegramAPI.js
var TelegramAPI = class {
  static {
    __name(this, "TelegramAPI");
  }
  constructor(botToken, proxyUrl = "") {
    this.botToken = botToken;
    this.proxyUrl = proxyUrl;
    const apiDomain = proxyUrl ? `https://${proxyUrl}` : "https://api.telegram.org";
    this.baseURL = `${apiDomain}/bot${this.botToken}`;
    this.fileDomain = proxyUrl ? `https://${proxyUrl}` : "https://api.telegram.org";
    this.defaultHeaders = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0"
    };
  }
  /**
   * 发送文件到Telegram
   * @param {File} file - 要发送的文件
   * @param {string} chatId - 聊天ID
   * @param {string} functionName - API方法名（如：sendPhoto, sendDocument等）
   * @param {string} functionType - 文件类型参数名（如：photo, document等）
   * @returns {Promise<Object>} API响应结果
   */
  async sendFile(file, chatId, functionName, functionType, caption = "", fileName = "") {
    const formData = new FormData();
    formData.append("chat_id", chatId);
    if (fileName) {
      formData.append(functionType, file, fileName);
    } else {
      formData.append(functionType, file);
    }
    if (caption) {
      formData.append("caption", caption);
    }
    const response = await fetch(`${this.baseURL}/${functionName}`, {
      method: "POST",
      headers: this.defaultHeaders,
      body: formData
    });
    console.log("Telegram API response:", response.status, response.statusText);
    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.statusText}`);
    }
    const responseData = await response.json();
    return responseData;
  }
  /**
   * 获取文件信息
   * @param {Object} responseData - Telegram API响应数据
   * @returns {Object|null} 文件信息对象或null
   */
  getFileInfo(responseData) {
    const getFileDetails = /* @__PURE__ */ __name((file) => ({
      file_id: file.file_id,
      file_name: file.file_name || file.file_unique_id,
      file_size: file.file_size
    }), "getFileDetails");
    try {
      if (!responseData.ok) {
        console.error("Telegram API error:", responseData.description);
        return null;
      }
      if (responseData.result.photo) {
        const largestPhoto = responseData.result.photo.reduce(
          (prev, current) => prev.file_size > current.file_size ? prev : current
        );
        return getFileDetails(largestPhoto);
      }
      if (responseData.result.video) {
        return getFileDetails(responseData.result.video);
      }
      if (responseData.result.audio) {
        return getFileDetails(responseData.result.audio);
      }
      if (responseData.result.document) {
        return getFileDetails(responseData.result.document);
      }
      return null;
    } catch (error) {
      console.error("Error parsing Telegram response:", error.message);
      return null;
    }
  }
  /**
   * 获取文件路径
   * @param {string} fileId - 文件ID
   * @returns {Promise<string|null>} 文件路径或null
   */
  async getFilePath(fileId) {
    try {
      const url = `${this.baseURL}/getFile?file_id=${fileId}`;
      const response = await fetch(url, {
        method: "GET",
        headers: this.defaultHeaders
      });
      const responseData = await response.json();
      if (responseData.ok) {
        return responseData.result.file_path;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error getting file path:", error.message);
      return null;
    }
  }
  /**
   * 获取文件内容
   * @param {string} fileId - 文件ID
   * @returns {Promise<Response>} 文件响应
   */
  async getFileContent(fileId) {
    const filePath = await this.getFilePath(fileId);
    if (!filePath) {
      throw new Error(`File path not found for fileId: ${fileId}`);
    }
    const fullURL = `${this.fileDomain}/file/bot${this.botToken}/${filePath}`;
    const response = await fetch(fullURL, {
      headers: this.defaultHeaders
    });
    return response;
  }
};

// functions/utils/discordAPI.js
var DiscordAPI = class {
  static {
    __name(this, "DiscordAPI");
  }
  constructor(botToken) {
    this.botToken = botToken;
    this.baseURL = "https://discord.com/api/v10";
    this.defaultHeaders = {
      "Authorization": `Bot ${this.botToken}`,
      "User-Agent": "DiscordBot (CloudFlare-ImgBed, 1.0)"
    };
  }
  /**
   * 发送文件到 Discord 频道
   * @param {File|Blob} file - 要发送的文件
   * @param {string} channelId - 频道 ID
   * @param {string} fileName - 文件名
   * @returns {Promise<Object>} API 响应结果
   */
  async sendFile(file, channelId, fileName = "") {
    const formData = new FormData();
    if (fileName) {
      formData.append("files[0]", file, fileName);
    } else {
      formData.append("files[0]", file);
    }
    const response = await fetch(`${this.baseURL}/channels/${channelId}/messages`, {
      method: "POST",
      headers: this.defaultHeaders,
      body: formData
    });
    console.log("Discord API response:", response.status, response.statusText);
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`Discord API error: ${response.status} - ${errorData.message || response.statusText}`);
    }
    const responseData = await response.json();
    return responseData;
  }
  /**
   * 从响应中提取文件信息
   * @param {Object} responseData - Discord API 响应数据
   * @returns {Object|null} 文件信息对象或 null
   */
  getFileInfo(responseData) {
    try {
      if (!responseData || !responseData.id) {
        console.error("Invalid Discord response:", responseData);
        return null;
      }
      if (responseData.attachments && responseData.attachments.length > 0) {
        const attachment = responseData.attachments[0];
        return {
          message_id: responseData.id,
          attachment_id: attachment.id,
          file_name: attachment.filename,
          file_size: attachment.size,
          content_type: attachment.content_type,
          url: attachment.url,
          proxy_url: attachment.proxy_url
        };
      }
      return null;
    } catch (error) {
      console.error("Error parsing Discord response:", error.message);
      return null;
    }
  }
  /**
   * 获取消息信息（用于获取文件 URL）
   * @param {string} channelId - 频道 ID
   * @param {string} messageId - 消息 ID
   * @param {number} maxRetries - 最大重试次数（默认 3 次）
   * @returns {Promise<Object|null>} 消息数据或 null
   */
  async getMessage(channelId, messageId, maxRetries = 3) {
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const response = await fetch(`${this.baseURL}/channels/${channelId}/messages/${messageId}`, {
          method: "GET",
          headers: this.defaultHeaders
        });
        if (response.status === 429) {
          const retryAfter = response.headers.get("Retry-After");
          const waitTime = retryAfter ? parseFloat(retryAfter) * 1e3 : 1e3 * (attempt + 1);
          console.warn(`Discord 429 rate limit, waiting ${waitTime}ms before retry ${attempt + 1}/${maxRetries}`);
          if (attempt < maxRetries) {
            await new Promise((resolve) => setTimeout(resolve, waitTime));
            continue;
          }
        }
        if (!response.ok) {
          console.error("Discord getMessage error:", response.status, response.statusText);
          return null;
        }
        const messageData = await response.json();
        return messageData;
      } catch (error) {
        console.error("Error getting Discord message:", error.message);
        if (attempt < maxRetries) {
          await new Promise((resolve) => setTimeout(resolve, 500 * (attempt + 1)));
          continue;
        }
        return null;
      }
    }
    return null;
  }
  /**
   * 获取文件 URL
   * @param {string} channelId - 频道 ID
   * @param {string} messageId - 消息 ID
   * @returns {Promise<string|null>} 文件 URL 或 null
   */
  async getFileURL(channelId, messageId) {
    const message = await this.getMessage(channelId, messageId);
    if (message && message.attachments && message.attachments.length > 0) {
      return message.attachments[0].url;
    }
    return null;
  }
  /**
   * 获取文件内容
   * @param {string} channelId - 频道 ID
   * @param {string} messageId - 消息 ID
   * @returns {Promise<Response>} 文件响应
   */
  async getFileContent(channelId, messageId) {
    const fileURL = await this.getFileURL(channelId, messageId);
    if (!fileURL) {
      throw new Error(`File URL not found for messageId: ${messageId}`);
    }
    const response = await fetch(fileURL);
    return response;
  }
  /**
   * 删除消息（用于删除文件）
   * @param {string} channelId - 频道 ID
   * @param {string} messageId - 消息 ID
   * @returns {Promise<boolean>} 是否删除成功
   */
  async deleteMessage(channelId, messageId) {
    try {
      const response = await fetch(`${this.baseURL}/channels/${channelId}/messages/${messageId}`, {
        method: "DELETE",
        headers: this.defaultHeaders
      });
      if (response.status === 204 || response.ok) {
        return true;
      }
      console.error("Discord deleteMessage error:", response.status, response.statusText);
      return false;
    } catch (error) {
      console.error("Error deleting Discord message:", error.message);
      return false;
    }
  }
};

// node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js
var getHttpHandlerExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  return {
    setHttpHandler(handler) {
      runtimeConfig.httpHandler = handler;
    },
    httpHandler() {
      return runtimeConfig.httpHandler;
    },
    updateHttpClientConfig(key, value) {
      runtimeConfig.httpHandler?.updateHttpClientConfig(key, value);
    },
    httpHandlerConfigs() {
      return runtimeConfig.httpHandler.httpHandlerConfigs();
    }
  };
}, "getHttpHandlerExtensionConfiguration");
var resolveHttpHandlerRuntimeConfig = /* @__PURE__ */ __name((httpHandlerExtensionConfiguration) => {
  return {
    httpHandler: httpHandlerExtensionConfiguration.httpHandler()
  };
}, "resolveHttpHandlerRuntimeConfig");

// node_modules/@smithy/types/dist-es/endpoint.js
var EndpointURLScheme;
(function(EndpointURLScheme2) {
  EndpointURLScheme2["HTTP"] = "http";
  EndpointURLScheme2["HTTPS"] = "https";
})(EndpointURLScheme || (EndpointURLScheme = {}));

// node_modules/@smithy/types/dist-es/extensions/checksum.js
var AlgorithmId;
(function(AlgorithmId2) {
  AlgorithmId2["MD5"] = "md5";
  AlgorithmId2["CRC32"] = "crc32";
  AlgorithmId2["CRC32C"] = "crc32c";
  AlgorithmId2["SHA1"] = "sha1";
  AlgorithmId2["SHA256"] = "sha256";
})(AlgorithmId || (AlgorithmId = {}));

// node_modules/@smithy/types/dist-es/middleware.js
var SMITHY_CONTEXT_KEY = "__smithy_context";

// node_modules/@smithy/protocol-http/dist-es/httpRequest.js
var HttpRequest = class _HttpRequest {
  static {
    __name(this, "HttpRequest");
  }
  method;
  protocol;
  hostname;
  port;
  path;
  query;
  headers;
  username;
  password;
  fragment;
  body;
  constructor(options) {
    this.method = options.method || "GET";
    this.hostname = options.hostname || "localhost";
    this.port = options.port;
    this.query = options.query || {};
    this.headers = options.headers || {};
    this.body = options.body;
    this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
    this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
    this.username = options.username;
    this.password = options.password;
    this.fragment = options.fragment;
  }
  static clone(request) {
    const cloned = new _HttpRequest({
      ...request,
      headers: { ...request.headers }
    });
    if (cloned.query) {
      cloned.query = cloneQuery(cloned.query);
    }
    return cloned;
  }
  static isInstance(request) {
    if (!request) {
      return false;
    }
    const req = request;
    return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
  }
  clone() {
    return _HttpRequest.clone(this);
  }
};
function cloneQuery(query) {
  return Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
      ...carry,
      [paramName]: Array.isArray(param) ? [...param] : param
    };
  }, {});
}
__name(cloneQuery, "cloneQuery");

// node_modules/@smithy/protocol-http/dist-es/httpResponse.js
var HttpResponse = class {
  static {
    __name(this, "HttpResponse");
  }
  statusCode;
  reason;
  headers;
  body;
  constructor(options) {
    this.statusCode = options.statusCode;
    this.reason = options.reason;
    this.headers = options.headers || {};
    this.body = options.body;
  }
  static isInstance(response) {
    if (!response)
      return false;
    const resp = response;
    return typeof resp.statusCode === "number" && typeof resp.headers === "object";
  }
};

// node_modules/@aws-sdk/middleware-expect-continue/dist-es/index.js
function addExpectContinueMiddleware(options) {
  return (next) => async (args) => {
    const { request } = args;
    if (HttpRequest.isInstance(request) && request.body && options.runtime === "node") {
      if (options.requestHandler?.constructor?.name !== "FetchHttpHandler") {
        request.headers = {
          ...request.headers,
          Expect: "100-continue"
        };
      }
    }
    return next({
      ...args,
      request
    });
  };
}
__name(addExpectContinueMiddleware, "addExpectContinueMiddleware");
var addExpectContinueMiddlewareOptions = {
  step: "build",
  tags: ["SET_EXPECT_HEADER", "EXPECT_HEADER"],
  name: "addExpectContinueMiddleware",
  override: true
};
var getAddExpectContinuePlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.add(addExpectContinueMiddleware(options), addExpectContinueMiddlewareOptions);
  }, "applyToStack")
}), "getAddExpectContinuePlugin");

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/constants.js
var RequestChecksumCalculation = {
  WHEN_SUPPORTED: "WHEN_SUPPORTED",
  WHEN_REQUIRED: "WHEN_REQUIRED"
};
var DEFAULT_REQUEST_CHECKSUM_CALCULATION = RequestChecksumCalculation.WHEN_SUPPORTED;
var DEFAULT_RESPONSE_CHECKSUM_VALIDATION = RequestChecksumCalculation.WHEN_SUPPORTED;
var ChecksumAlgorithm;
(function(ChecksumAlgorithm2) {
  ChecksumAlgorithm2["MD5"] = "MD5";
  ChecksumAlgorithm2["CRC32"] = "CRC32";
  ChecksumAlgorithm2["CRC32C"] = "CRC32C";
  ChecksumAlgorithm2["SHA1"] = "SHA1";
  ChecksumAlgorithm2["SHA256"] = "SHA256";
})(ChecksumAlgorithm || (ChecksumAlgorithm = {}));
var ChecksumLocation;
(function(ChecksumLocation2) {
  ChecksumLocation2["HEADER"] = "header";
  ChecksumLocation2["TRAILER"] = "trailer";
})(ChecksumLocation || (ChecksumLocation = {}));
var DEFAULT_CHECKSUM_ALGORITHM = ChecksumAlgorithm.MD5;
var S3_EXPRESS_DEFAULT_CHECKSUM_ALGORITHM = ChecksumAlgorithm.CRC32;

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/stringUnionSelector.js
var SelectorType;
(function(SelectorType2) {
  SelectorType2["ENV"] = "env";
  SelectorType2["CONFIG"] = "shared config entry";
})(SelectorType || (SelectorType = {}));

// node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js
function setCredentialFeature(credentials, feature, value) {
  if (!credentials.$source) {
    credentials.$source = {};
  }
  credentials.$source[feature] = value;
  return credentials;
}
__name(setCredentialFeature, "setCredentialFeature");

// node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js
function setFeature(context, feature, value) {
  if (!context.__aws_sdk_context) {
    context.__aws_sdk_context = {
      features: {}
    };
  } else if (!context.__aws_sdk_context.features) {
    context.__aws_sdk_context.features = {};
  }
  context.__aws_sdk_context.features[feature] = value;
}
__name(setFeature, "setFeature");

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js
var getDateHeader = /* @__PURE__ */ __name((response) => HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : void 0, "getDateHeader");

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js
var getSkewCorrectedDate = /* @__PURE__ */ __name((systemClockOffset) => new Date(Date.now() + systemClockOffset), "getSkewCorrectedDate");

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js
var isClockSkewed = /* @__PURE__ */ __name((clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 3e5, "isClockSkewed");

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js
var getUpdatedSystemClockOffset = /* @__PURE__ */ __name((clockTime, currentSystemClockOffset) => {
  const clockTimeInMs = Date.parse(clockTime);
  if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
    return clockTimeInMs - Date.now();
  }
  return currentSystemClockOffset;
}, "getUpdatedSystemClockOffset");

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js
var throwSigningPropertyError = /* @__PURE__ */ __name((name, property) => {
  if (!property) {
    throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
  }
  return property;
}, "throwSigningPropertyError");
var validateSigningProperties = /* @__PURE__ */ __name(async (signingProperties) => {
  const context = throwSigningPropertyError("context", signingProperties.context);
  const config = throwSigningPropertyError("config", signingProperties.config);
  const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
  const signerFunction = throwSigningPropertyError("signer", config.signer);
  const signer = await signerFunction(authScheme);
  const signingRegion = signingProperties?.signingRegion;
  const signingRegionSet = signingProperties?.signingRegionSet;
  const signingName = signingProperties?.signingName;
  return {
    config,
    signer,
    signingRegion,
    signingRegionSet,
    signingName
  };
}, "validateSigningProperties");
var AwsSdkSigV4Signer = class {
  static {
    __name(this, "AwsSdkSigV4Signer");
  }
  async sign(httpRequest, identity, signingProperties) {
    if (!HttpRequest.isInstance(httpRequest)) {
      throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
    }
    const validatedProps = await validateSigningProperties(signingProperties);
    const { config, signer } = validatedProps;
    let { signingRegion, signingName } = validatedProps;
    const handlerExecutionContext = signingProperties.context;
    if (handlerExecutionContext?.authSchemes?.length ?? 0 > 1) {
      const [first, second] = handlerExecutionContext.authSchemes;
      if (first?.name === "sigv4a" && second?.name === "sigv4") {
        signingRegion = second?.signingRegion ?? signingRegion;
        signingName = second?.signingName ?? signingName;
      }
    }
    const signedRequest = await signer.sign(httpRequest, {
      signingDate: getSkewCorrectedDate(config.systemClockOffset),
      signingRegion,
      signingService: signingName
    });
    return signedRequest;
  }
  errorHandler(signingProperties) {
    return (error) => {
      const serverTime = error.ServerTime ?? getDateHeader(error.$response);
      if (serverTime) {
        const config = throwSigningPropertyError("config", signingProperties.config);
        const initialSystemClockOffset = config.systemClockOffset;
        config.systemClockOffset = getUpdatedSystemClockOffset(serverTime, config.systemClockOffset);
        const clockSkewCorrected = config.systemClockOffset !== initialSystemClockOffset;
        if (clockSkewCorrected && error.$metadata) {
          error.$metadata.clockSkewCorrected = true;
        }
      }
      throw error;
    };
  }
  successHandler(httpResponse, signingProperties) {
    const dateHeader = getDateHeader(httpResponse);
    if (dateHeader) {
      const config = throwSigningPropertyError("config", signingProperties.config);
      config.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, config.systemClockOffset);
    }
  }
};

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4ASigner.js
var AwsSdkSigV4ASigner = class extends AwsSdkSigV4Signer {
  static {
    __name(this, "AwsSdkSigV4ASigner");
  }
  async sign(httpRequest, identity, signingProperties) {
    if (!HttpRequest.isInstance(httpRequest)) {
      throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
    }
    const { config, signer, signingRegion, signingRegionSet, signingName } = await validateSigningProperties(signingProperties);
    const configResolvedSigningRegionSet = await config.sigv4aSigningRegionSet?.();
    const multiRegionOverride = (configResolvedSigningRegionSet ?? signingRegionSet ?? [signingRegion]).join(",");
    const signedRequest = await signer.sign(httpRequest, {
      signingDate: getSkewCorrectedDate(config.systemClockOffset),
      signingRegion: multiRegionOverride,
      signingService: signingName
    });
    return signedRequest;
  }
};

// node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js
var getSmithyContext = /* @__PURE__ */ __name((context) => context[SMITHY_CONTEXT_KEY] || (context[SMITHY_CONTEXT_KEY] = {}), "getSmithyContext");

// node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js
var normalizeProvider = /* @__PURE__ */ __name((input) => {
  if (typeof input === "function")
    return input;
  const promisified = Promise.resolve(input);
  return () => promisified;
}, "normalizeProvider");

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/resolveAuthOptions.js
var resolveAuthOptions = /* @__PURE__ */ __name((candidateAuthOptions, authSchemePreference) => {
  if (!authSchemePreference || authSchemePreference.length === 0) {
    return candidateAuthOptions;
  }
  const preferredAuthOptions = [];
  for (const preferredSchemeName of authSchemePreference) {
    for (const candidateAuthOption of candidateAuthOptions) {
      const candidateAuthSchemeName = candidateAuthOption.schemeId.split("#")[1];
      if (candidateAuthSchemeName === preferredSchemeName) {
        preferredAuthOptions.push(candidateAuthOption);
      }
    }
  }
  for (const candidateAuthOption of candidateAuthOptions) {
    if (!preferredAuthOptions.find(({ schemeId }) => schemeId === candidateAuthOption.schemeId)) {
      preferredAuthOptions.push(candidateAuthOption);
    }
  }
  return preferredAuthOptions;
}, "resolveAuthOptions");

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
function convertHttpAuthSchemesToMap(httpAuthSchemes) {
  const map2 = /* @__PURE__ */ new Map();
  for (const scheme of httpAuthSchemes) {
    map2.set(scheme.schemeId, scheme);
  }
  return map2;
}
__name(convertHttpAuthSchemesToMap, "convertHttpAuthSchemesToMap");
var httpAuthSchemeMiddleware = /* @__PURE__ */ __name((config, mwOptions) => (next, context) => async (args) => {
  const options = config.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config, context, args.input));
  const authSchemePreference = config.authSchemePreference ? await config.authSchemePreference() : [];
  const resolvedOptions = resolveAuthOptions(options, authSchemePreference);
  const authSchemes = convertHttpAuthSchemesToMap(config.httpAuthSchemes);
  const smithyContext = getSmithyContext(context);
  const failureReasons = [];
  for (const option of resolvedOptions) {
    const scheme = authSchemes.get(option.schemeId);
    if (!scheme) {
      failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
      continue;
    }
    const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config));
    if (!identityProvider) {
      failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
      continue;
    }
    const { identityProperties = {}, signingProperties = {} } = option.propertiesExtractor?.(config, context) || {};
    option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
    option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
    smithyContext.selectedHttpAuthScheme = {
      httpAuthOption: option,
      identity: await identityProvider(option.identityProperties),
      signer: scheme.signer
    };
    break;
  }
  if (!smithyContext.selectedHttpAuthScheme) {
    throw new Error(failureReasons.join("\n"));
  }
  return next(args);
}, "httpAuthSchemeMiddleware");

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js
var httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
  step: "serialize",
  tags: ["HTTP_AUTH_SCHEME"],
  name: "httpAuthSchemeMiddleware",
  override: true,
  relation: "before",
  toMiddleware: "endpointV2Middleware"
};
var getHttpAuthSchemeEndpointRuleSetPlugin = /* @__PURE__ */ __name((config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.addRelativeTo(httpAuthSchemeMiddleware(config, {
      httpAuthSchemeParametersProvider,
      identityProviderConfigProvider
    }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
  }, "applyToStack")
}), "getHttpAuthSchemeEndpointRuleSetPlugin");

// node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js
var deserializerMiddleware = /* @__PURE__ */ __name((options, deserializer) => (next, context) => async (args) => {
  const { response } = await next(args);
  try {
    const parsed = await deserializer(response, options);
    return {
      response,
      output: parsed
    };
  } catch (error) {
    Object.defineProperty(error, "$response", {
      value: response,
      enumerable: false,
      writable: false,
      configurable: false
    });
    if (!("$metadata" in error)) {
      const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
      try {
        error.message += "\n  " + hint;
      } catch (e2) {
        if (!context.logger || context.logger?.constructor?.name === "NoOpLogger") {
          console.warn(hint);
        } else {
          context.logger?.warn?.(hint);
        }
      }
      if (typeof error.$responseBodyText !== "undefined") {
        if (error.$response) {
          error.$response.body = error.$responseBodyText;
        }
      }
      try {
        if (HttpResponse.isInstance(response)) {
          const { headers = {} } = response;
          const headerEntries = Object.entries(headers);
          error.$metadata = {
            httpStatusCode: response.statusCode,
            requestId: findHeader(/^x-[\w-]+-request-?id$/, headerEntries),
            extendedRequestId: findHeader(/^x-[\w-]+-id-2$/, headerEntries),
            cfId: findHeader(/^x-[\w-]+-cf-id$/, headerEntries)
          };
        }
      } catch (e2) {
      }
    }
    throw error;
  }
}, "deserializerMiddleware");
var findHeader = /* @__PURE__ */ __name((pattern, headers) => {
  return (headers.find(([k2]) => {
    return k2.match(pattern);
  }) || [void 0, void 0])[1];
}, "findHeader");

// node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js
var serializerMiddleware = /* @__PURE__ */ __name((options, serializer) => (next, context) => async (args) => {
  const endpointConfig = options;
  const endpoint = context.endpointV2?.url && endpointConfig.urlParser ? async () => endpointConfig.urlParser(context.endpointV2.url) : endpointConfig.endpoint;
  if (!endpoint) {
    throw new Error("No valid endpoint provider available.");
  }
  const request = await serializer(args.input, { ...options, endpoint });
  return next({
    ...args,
    request
  });
}, "serializerMiddleware");

// node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js
var deserializerMiddlewareOption = {
  name: "deserializerMiddleware",
  step: "deserialize",
  tags: ["DESERIALIZER"],
  override: true
};
var serializerMiddlewareOption = {
  name: "serializerMiddleware",
  step: "serialize",
  tags: ["SERIALIZER"],
  override: true
};
function getSerdePlugin(config, serializer, deserializer) {
  return {
    applyToStack: /* @__PURE__ */ __name((commandStack) => {
      commandStack.add(deserializerMiddleware(config, deserializer), deserializerMiddlewareOption);
      commandStack.add(serializerMiddleware(config, serializer), serializerMiddlewareOption);
    }, "applyToStack")
  };
}
__name(getSerdePlugin, "getSerdePlugin");

// node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js
var defaultErrorHandler = /* @__PURE__ */ __name((signingProperties) => (error) => {
  throw error;
}, "defaultErrorHandler");
var defaultSuccessHandler = /* @__PURE__ */ __name((httpResponse, signingProperties) => {
}, "defaultSuccessHandler");
var httpSigningMiddleware = /* @__PURE__ */ __name((config) => (next, context) => async (args) => {
  if (!HttpRequest.isInstance(args.request)) {
    return next(args);
  }
  const smithyContext = getSmithyContext(context);
  const scheme = smithyContext.selectedHttpAuthScheme;
  if (!scheme) {
    throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
  }
  const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
  const output = await next({
    ...args,
    request: await signer.sign(args.request, identity, signingProperties)
  }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
  (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
  return output;
}, "httpSigningMiddleware");

// node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js
var httpSigningMiddlewareOptions = {
  step: "finalizeRequest",
  tags: ["HTTP_SIGNING"],
  name: "httpSigningMiddleware",
  aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
  override: true,
  relation: "after",
  toMiddleware: "retryMiddleware"
};
var getHttpSigningPlugin = /* @__PURE__ */ __name((config) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.addRelativeTo(httpSigningMiddleware(config), httpSigningMiddlewareOptions);
  }, "applyToStack")
}), "getHttpSigningPlugin");

// node_modules/@smithy/core/dist-es/normalizeProvider.js
var normalizeProvider2 = /* @__PURE__ */ __name((input) => {
  if (typeof input === "function")
    return input;
  const promisified = Promise.resolve(input);
  return () => promisified;
}, "normalizeProvider");

// node_modules/@smithy/util-base64/dist-es/constants.browser.js
var chars = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`;
var alphabetByEncoding = Object.entries(chars).reduce((acc, [i2, c2]) => {
  acc[c2] = Number(i2);
  return acc;
}, {});
var alphabetByValue = chars.split("");
var bitsPerLetter = 6;
var bitsPerByte = 8;
var maxLetterValue = 63;

// node_modules/@smithy/util-base64/dist-es/fromBase64.browser.js
var fromBase64 = /* @__PURE__ */ __name((input) => {
  let totalByteLength = input.length / 4 * 3;
  if (input.slice(-2) === "==") {
    totalByteLength -= 2;
  } else if (input.slice(-1) === "=") {
    totalByteLength--;
  }
  const out = new ArrayBuffer(totalByteLength);
  const dataView = new DataView(out);
  for (let i2 = 0; i2 < input.length; i2 += 4) {
    let bits = 0;
    let bitLength = 0;
    for (let j2 = i2, limit = i2 + 3; j2 <= limit; j2++) {
      if (input[j2] !== "=") {
        if (!(input[j2] in alphabetByEncoding)) {
          throw new TypeError(`Invalid character ${input[j2]} in base64 string.`);
        }
        bits |= alphabetByEncoding[input[j2]] << (limit - j2) * bitsPerLetter;
        bitLength += bitsPerLetter;
      } else {
        bits >>= bitsPerLetter;
      }
    }
    const chunkOffset = i2 / 4 * 3;
    bits >>= bitLength % bitsPerByte;
    const byteLength = Math.floor(bitLength / bitsPerByte);
    for (let k2 = 0; k2 < byteLength; k2++) {
      const offset = (byteLength - k2 - 1) * bitsPerByte;
      dataView.setUint8(chunkOffset + k2, (bits & 255 << offset) >> offset);
    }
  }
  return new Uint8Array(out);
}, "fromBase64");

// node_modules/@smithy/util-base64/dist-es/toBase64.browser.js
init_dist_es();
function toBase64(_input) {
  let input;
  if (typeof _input === "string") {
    input = fromUtf8(_input);
  } else {
    input = _input;
  }
  const isArrayLike = typeof input === "object" && typeof input.length === "number";
  const isUint8Array = typeof input === "object" && typeof input.byteOffset === "number" && typeof input.byteLength === "number";
  if (!isArrayLike && !isUint8Array) {
    throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
  }
  let str = "";
  for (let i2 = 0; i2 < input.length; i2 += 3) {
    let bits = 0;
    let bitLength = 0;
    for (let j2 = i2, limit = Math.min(i2 + 3, input.length); j2 < limit; j2++) {
      bits |= input[j2] << (limit - j2 - 1) * bitsPerByte;
      bitLength += bitsPerByte;
    }
    const bitClusterCount = Math.ceil(bitLength / bitsPerLetter);
    bits <<= bitClusterCount * bitsPerLetter - bitLength;
    for (let k2 = 1; k2 <= bitClusterCount; k2++) {
      const offset = (bitClusterCount - k2) * bitsPerLetter;
      str += alphabetByValue[(bits & maxLetterValue << offset) >> offset];
    }
    str += "==".slice(0, 4 - bitClusterCount);
  }
  return str;
}
__name(toBase64, "toBase64");

// node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js
init_dist_es();
var Uint8ArrayBlobAdapter = class _Uint8ArrayBlobAdapter extends Uint8Array {
  static {
    __name(this, "Uint8ArrayBlobAdapter");
  }
  static fromString(source, encoding = "utf-8") {
    if (typeof source === "string") {
      if (encoding === "base64") {
        return _Uint8ArrayBlobAdapter.mutate(fromBase64(source));
      }
      return _Uint8ArrayBlobAdapter.mutate(fromUtf8(source));
    }
    throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
  }
  static mutate(source) {
    Object.setPrototypeOf(source, _Uint8ArrayBlobAdapter.prototype);
    return source;
  }
  transformToString(encoding = "utf-8") {
    if (encoding === "base64") {
      return toBase64(this);
    }
    return toUtf8(this);
  }
};

// node_modules/@smithy/util-stream/dist-es/checksum/ChecksumStream.browser.js
var ReadableStreamRef = typeof ReadableStream === "function" ? ReadableStream : function() {
};
var ChecksumStream = class extends ReadableStreamRef {
  static {
    __name(this, "ChecksumStream");
  }
};

// node_modules/@smithy/util-stream/dist-es/stream-type-check.js
var isReadableStream = /* @__PURE__ */ __name((stream) => typeof ReadableStream === "function" && (stream?.constructor?.name === ReadableStream.name || stream instanceof ReadableStream), "isReadableStream");

// node_modules/@smithy/util-stream/dist-es/checksum/createChecksumStream.browser.js
var createChecksumStream = /* @__PURE__ */ __name(({ expectedChecksum, checksum, source, checksumSourceLocation, base64Encoder }) => {
  if (!isReadableStream(source)) {
    throw new Error(`@smithy/util-stream: unsupported source type ${source?.constructor?.name ?? source} in ChecksumStream.`);
  }
  const encoder = base64Encoder ?? toBase64;
  if (typeof TransformStream !== "function") {
    throw new Error("@smithy/util-stream: unable to instantiate ChecksumStream because API unavailable: ReadableStream/TransformStream.");
  }
  const transform = new TransformStream({
    start() {
    },
    async transform(chunk, controller) {
      checksum.update(chunk);
      controller.enqueue(chunk);
    },
    async flush(controller) {
      const digest = await checksum.digest();
      const received = encoder(digest);
      if (expectedChecksum !== received) {
        const error = new Error(`Checksum mismatch: expected "${expectedChecksum}" but received "${received}" in response header "${checksumSourceLocation}".`);
        controller.error(error);
      } else {
        controller.terminate();
      }
    }
  });
  source.pipeThrough(transform);
  const readable = transform.readable;
  Object.setPrototypeOf(readable, ChecksumStream.prototype);
  return readable;
}, "createChecksumStream");

// node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.browser.js
var getAwsChunkedEncodingStream = /* @__PURE__ */ __name((readableStream, options) => {
  const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;
  const checksumRequired = base64Encoder !== void 0 && bodyLengthChecker !== void 0 && checksumAlgorithmFn !== void 0 && checksumLocationName !== void 0 && streamHasher !== void 0;
  const digest = checksumRequired ? streamHasher(checksumAlgorithmFn, readableStream) : void 0;
  const reader = readableStream.getReader();
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await reader.read();
      if (done) {
        controller.enqueue(`0\r
`);
        if (checksumRequired) {
          const checksum = base64Encoder(await digest);
          controller.enqueue(`${checksumLocationName}:${checksum}\r
`);
          controller.enqueue(`\r
`);
        }
        controller.close();
      } else {
        controller.enqueue(`${(bodyLengthChecker(value) || 0).toString(16)}\r
${value}\r
`);
      }
    }
  });
}, "getAwsChunkedEncodingStream");

// node_modules/@smithy/util-stream/dist-es/headStream.browser.js
async function headStream(stream, bytes) {
  let byteLengthCounter = 0;
  const chunks = [];
  const reader = stream.getReader();
  let isDone = false;
  while (!isDone) {
    const { done, value } = await reader.read();
    if (value) {
      chunks.push(value);
      byteLengthCounter += value?.byteLength ?? 0;
    }
    if (byteLengthCounter >= bytes) {
      break;
    }
    isDone = done;
  }
  reader.releaseLock();
  const collected = new Uint8Array(Math.min(bytes, byteLengthCounter));
  let offset = 0;
  for (const chunk of chunks) {
    if (chunk.byteLength > collected.byteLength - offset) {
      collected.set(chunk.subarray(0, collected.byteLength - offset), offset);
      break;
    } else {
      collected.set(chunk, offset);
    }
    offset += chunk.length;
  }
  return collected;
}
__name(headStream, "headStream");

// node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js
var escapeUri = /* @__PURE__ */ __name((uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode), "escapeUri");
var hexEncode = /* @__PURE__ */ __name((c2) => `%${c2.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode");

// node_modules/@smithy/querystring-builder/dist-es/index.js
function buildQueryString(query) {
  const parts = [];
  for (let key of Object.keys(query).sort()) {
    const value = query[key];
    key = escapeUri(key);
    if (Array.isArray(value)) {
      for (let i2 = 0, iLen = value.length; i2 < iLen; i2++) {
        parts.push(`${key}=${escapeUri(value[i2])}`);
      }
    } else {
      let qsEntry = key;
      if (value || typeof value === "string") {
        qsEntry += `=${escapeUri(value)}`;
      }
      parts.push(qsEntry);
    }
  }
  return parts.join("&");
}
__name(buildQueryString, "buildQueryString");

// node_modules/@smithy/fetch-http-handler/dist-es/create-request.js
function createRequest(url, requestOptions) {
  return new Request(url, requestOptions);
}
__name(createRequest, "createRequest");

// node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js
function requestTimeout(timeoutInMs = 0) {
  return new Promise((resolve, reject) => {
    if (timeoutInMs) {
      setTimeout(() => {
        const timeoutError = new Error(`Request did not complete within ${timeoutInMs} ms`);
        timeoutError.name = "TimeoutError";
        reject(timeoutError);
      }, timeoutInMs);
    }
  });
}
__name(requestTimeout, "requestTimeout");

// node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js
var keepAliveSupport = {
  supported: void 0
};
var FetchHttpHandler = class _FetchHttpHandler {
  static {
    __name(this, "FetchHttpHandler");
  }
  config;
  configProvider;
  static create(instanceOrOptions) {
    if (typeof instanceOrOptions?.handle === "function") {
      return instanceOrOptions;
    }
    return new _FetchHttpHandler(instanceOrOptions);
  }
  constructor(options) {
    if (typeof options === "function") {
      this.configProvider = options().then((opts) => opts || {});
    } else {
      this.config = options ?? {};
      this.configProvider = Promise.resolve(this.config);
    }
    if (keepAliveSupport.supported === void 0) {
      keepAliveSupport.supported = Boolean(typeof Request !== "undefined" && "keepalive" in createRequest("https://[::1]"));
    }
  }
  destroy() {
  }
  async handle(request, { abortSignal, requestTimeout: requestTimeout2 } = {}) {
    if (!this.config) {
      this.config = await this.configProvider;
    }
    const requestTimeoutInMs = requestTimeout2 ?? this.config.requestTimeout;
    const keepAlive = this.config.keepAlive === true;
    const credentials = this.config.credentials;
    if (abortSignal?.aborted) {
      const abortError = new Error("Request aborted");
      abortError.name = "AbortError";
      return Promise.reject(abortError);
    }
    let path = request.path;
    const queryString = buildQueryString(request.query || {});
    if (queryString) {
      path += `?${queryString}`;
    }
    if (request.fragment) {
      path += `#${request.fragment}`;
    }
    let auth = "";
    if (request.username != null || request.password != null) {
      const username = request.username ?? "";
      const password = request.password ?? "";
      auth = `${username}:${password}@`;
    }
    const { port, method } = request;
    const url = `${request.protocol}//${auth}${request.hostname}${port ? `:${port}` : ""}${path}`;
    const body = method === "GET" || method === "HEAD" ? void 0 : request.body;
    const requestOptions = {
      body,
      headers: new Headers(request.headers),
      method,
      credentials
    };
    if (this.config?.cache) {
      requestOptions.cache = this.config.cache;
    }
    if (body) {
      requestOptions.duplex = "half";
    }
    if (typeof AbortController !== "undefined") {
      requestOptions.signal = abortSignal;
    }
    if (keepAliveSupport.supported) {
      requestOptions.keepalive = keepAlive;
    }
    if (typeof this.config.requestInit === "function") {
      Object.assign(requestOptions, this.config.requestInit(request));
    }
    let removeSignalEventListener = /* @__PURE__ */ __name(() => {
    }, "removeSignalEventListener");
    const fetchRequest = createRequest(url, requestOptions);
    const raceOfPromises = [
      fetch(fetchRequest).then((response) => {
        const fetchHeaders = response.headers;
        const transformedHeaders = {};
        for (const pair of fetchHeaders.entries()) {
          transformedHeaders[pair[0]] = pair[1];
        }
        const hasReadableStream = response.body != void 0;
        if (!hasReadableStream) {
          return response.blob().then((body2) => ({
            response: new HttpResponse({
              headers: transformedHeaders,
              reason: response.statusText,
              statusCode: response.status,
              body: body2
            })
          }));
        }
        return {
          response: new HttpResponse({
            headers: transformedHeaders,
            reason: response.statusText,
            statusCode: response.status,
            body: response.body
          })
        };
      }),
      requestTimeout(requestTimeoutInMs)
    ];
    if (abortSignal) {
      raceOfPromises.push(new Promise((resolve, reject) => {
        const onAbort = /* @__PURE__ */ __name(() => {
          const abortError = new Error("Request aborted");
          abortError.name = "AbortError";
          reject(abortError);
        }, "onAbort");
        if (typeof abortSignal.addEventListener === "function") {
          const signal = abortSignal;
          signal.addEventListener("abort", onAbort, { once: true });
          removeSignalEventListener = /* @__PURE__ */ __name(() => signal.removeEventListener("abort", onAbort), "removeSignalEventListener");
        } else {
          abortSignal.onabort = onAbort;
        }
      }));
    }
    return Promise.race(raceOfPromises).finally(removeSignalEventListener);
  }
  updateHttpClientConfig(key, value) {
    this.config = void 0;
    this.configProvider = this.configProvider.then((config) => {
      config[key] = value;
      return config;
    });
  }
  httpHandlerConfigs() {
    return this.config ?? {};
  }
};

// node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js
var streamCollector = /* @__PURE__ */ __name(async (stream) => {
  if (typeof Blob === "function" && stream instanceof Blob || stream.constructor?.name === "Blob") {
    if (Blob.prototype.arrayBuffer !== void 0) {
      return new Uint8Array(await stream.arrayBuffer());
    }
    return collectBlob(stream);
  }
  return collectStream(stream);
}, "streamCollector");
async function collectBlob(blob) {
  const base64 = await readToBase64(blob);
  const arrayBuffer = fromBase64(base64);
  return new Uint8Array(arrayBuffer);
}
__name(collectBlob, "collectBlob");
async function collectStream(stream) {
  const chunks = [];
  const reader = stream.getReader();
  let isDone = false;
  let length = 0;
  while (!isDone) {
    const { done, value } = await reader.read();
    if (value) {
      chunks.push(value);
      length += value.length;
    }
    isDone = done;
  }
  const collected = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    collected.set(chunk, offset);
    offset += chunk.length;
  }
  return collected;
}
__name(collectStream, "collectStream");
function readToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.readyState !== 2) {
        return reject(new Error("Reader aborted too early"));
      }
      const result = reader.result ?? "";
      const commaIndex = result.indexOf(",");
      const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
      resolve(result.substring(dataOffset));
    };
    reader.onabort = () => reject(new Error("Read aborted"));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}
__name(readToBase64, "readToBase64");

// node_modules/@smithy/util-hex-encoding/dist-es/index.js
var SHORT_TO_HEX = {};
var HEX_TO_SHORT = {};
for (let i2 = 0; i2 < 256; i2++) {
  let encodedByte = i2.toString(16).toLowerCase();
  if (encodedByte.length === 1) {
    encodedByte = `0${encodedByte}`;
  }
  SHORT_TO_HEX[i2] = encodedByte;
  HEX_TO_SHORT[encodedByte] = i2;
}
function fromHex(encoded) {
  if (encoded.length % 2 !== 0) {
    throw new Error("Hex encoded strings must have an even number length");
  }
  const out = new Uint8Array(encoded.length / 2);
  for (let i2 = 0; i2 < encoded.length; i2 += 2) {
    const encodedByte = encoded.slice(i2, i2 + 2).toLowerCase();
    if (encodedByte in HEX_TO_SHORT) {
      out[i2 / 2] = HEX_TO_SHORT[encodedByte];
    } else {
      throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
    }
  }
  return out;
}
__name(fromHex, "fromHex");
function toHex(bytes) {
  let out = "";
  for (let i2 = 0; i2 < bytes.byteLength; i2++) {
    out += SHORT_TO_HEX[bytes[i2]];
  }
  return out;
}
__name(toHex, "toHex");

// node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js
init_dist_es();
var ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
var sdkStreamMixin = /* @__PURE__ */ __name((stream) => {
  if (!isBlobInstance(stream) && !isReadableStream(stream)) {
    const name = stream?.__proto__?.constructor?.name || stream;
    throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${name}`);
  }
  let transformed = false;
  const transformToByteArray = /* @__PURE__ */ __name(async () => {
    if (transformed) {
      throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
    }
    transformed = true;
    return await streamCollector(stream);
  }, "transformToByteArray");
  const blobToWebStream = /* @__PURE__ */ __name((blob) => {
    if (typeof blob.stream !== "function") {
      throw new Error("Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\nIf you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body");
    }
    return blob.stream();
  }, "blobToWebStream");
  return Object.assign(stream, {
    transformToByteArray,
    transformToString: /* @__PURE__ */ __name(async (encoding) => {
      const buf = await transformToByteArray();
      if (encoding === "base64") {
        return toBase64(buf);
      } else if (encoding === "hex") {
        return toHex(buf);
      } else if (encoding === void 0 || encoding === "utf8" || encoding === "utf-8") {
        return toUtf8(buf);
      } else if (typeof TextDecoder === "function") {
        return new TextDecoder(encoding).decode(buf);
      } else {
        throw new Error("TextDecoder is not available, please make sure polyfill is provided.");
      }
    }, "transformToString"),
    transformToWebStream: /* @__PURE__ */ __name(() => {
      if (transformed) {
        throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
      }
      transformed = true;
      if (isBlobInstance(stream)) {
        return blobToWebStream(stream);
      } else if (isReadableStream(stream)) {
        return stream;
      } else {
        throw new Error(`Cannot transform payload to web stream, got ${stream}`);
      }
    }, "transformToWebStream")
  });
}, "sdkStreamMixin");
var isBlobInstance = /* @__PURE__ */ __name((stream) => typeof Blob === "function" && stream instanceof Blob, "isBlobInstance");

// node_modules/@smithy/util-stream/dist-es/splitStream.browser.js
async function splitStream(stream) {
  if (typeof stream.stream === "function") {
    stream = stream.stream();
  }
  const readableStream = stream;
  return readableStream.tee();
}
__name(splitStream, "splitStream");

// node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js
var collectBody = /* @__PURE__ */ __name(async (streamBody = new Uint8Array(), context) => {
  if (streamBody instanceof Uint8Array) {
    return Uint8ArrayBlobAdapter.mutate(streamBody);
  }
  if (!streamBody) {
    return Uint8ArrayBlobAdapter.mutate(new Uint8Array());
  }
  const fromContext = context.streamCollector(streamBody);
  return Uint8ArrayBlobAdapter.mutate(await fromContext);
}, "collectBody");

// node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js
function extendedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c2) {
    return "%" + c2.charCodeAt(0).toString(16).toUpperCase();
  });
}
__name(extendedEncodeURIComponent, "extendedEncodeURIComponent");

// node_modules/@smithy/core/dist-es/submodules/schema/deref.js
var deref = /* @__PURE__ */ __name((schemaRef) => {
  if (typeof schemaRef === "function") {
    return schemaRef();
  }
  return schemaRef;
}, "deref");

// node_modules/@smithy/core/dist-es/submodules/schema/schemas/translateTraits.js
function translateTraits(indicator) {
  if (typeof indicator === "object") {
    return indicator;
  }
  indicator = indicator | 0;
  const traits = {};
  let i2 = 0;
  for (const trait of [
    "httpLabel",
    "idempotent",
    "idempotencyToken",
    "sensitive",
    "httpPayload",
    "httpResponseCode",
    "httpQueryParams"
  ]) {
    if ((indicator >> i2++ & 1) === 1) {
      traits[trait] = 1;
    }
  }
  return traits;
}
__name(translateTraits, "translateTraits");

// node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js
var anno = {
  it: /* @__PURE__ */ Symbol.for("@smithy/nor-struct-it")
};
var NormalizedSchema = class _NormalizedSchema {
  static {
    __name(this, "NormalizedSchema");
  }
  ref;
  memberName;
  static symbol = /* @__PURE__ */ Symbol.for("@smithy/nor");
  symbol = _NormalizedSchema.symbol;
  name;
  schema;
  _isMemberSchema;
  traits;
  memberTraits;
  normalizedTraits;
  constructor(ref, memberName) {
    this.ref = ref;
    this.memberName = memberName;
    const traitStack = [];
    let _ref = ref;
    let schema = ref;
    this._isMemberSchema = false;
    while (isMemberSchema(_ref)) {
      traitStack.push(_ref[1]);
      _ref = _ref[0];
      schema = deref(_ref);
      this._isMemberSchema = true;
    }
    if (traitStack.length > 0) {
      this.memberTraits = {};
      for (let i2 = traitStack.length - 1; i2 >= 0; --i2) {
        const traitSet = traitStack[i2];
        Object.assign(this.memberTraits, translateTraits(traitSet));
      }
    } else {
      this.memberTraits = 0;
    }
    if (schema instanceof _NormalizedSchema) {
      const computedMemberTraits = this.memberTraits;
      Object.assign(this, schema);
      this.memberTraits = Object.assign({}, computedMemberTraits, schema.getMemberTraits(), this.getMemberTraits());
      this.normalizedTraits = void 0;
      this.memberName = memberName ?? schema.memberName;
      return;
    }
    this.schema = deref(schema);
    if (isStaticSchema(this.schema)) {
      this.name = `${this.schema[1]}#${this.schema[2]}`;
      this.traits = this.schema[3];
    } else {
      this.name = this.memberName ?? String(schema);
      this.traits = 0;
    }
    if (this._isMemberSchema && !memberName) {
      throw new Error(`@smithy/core/schema - NormalizedSchema member init ${this.getName(true)} missing member name.`);
    }
  }
  static [Symbol.hasInstance](lhs) {
    const isPrototype = this.prototype.isPrototypeOf(lhs);
    if (!isPrototype && typeof lhs === "object" && lhs !== null) {
      const ns = lhs;
      return ns.symbol === this.symbol;
    }
    return isPrototype;
  }
  static of(ref) {
    const sc = deref(ref);
    if (sc instanceof _NormalizedSchema) {
      return sc;
    }
    if (isMemberSchema(sc)) {
      const [ns, traits] = sc;
      if (ns instanceof _NormalizedSchema) {
        Object.assign(ns.getMergedTraits(), translateTraits(traits));
        return ns;
      }
      throw new Error(`@smithy/core/schema - may not init unwrapped member schema=${JSON.stringify(ref, null, 2)}.`);
    }
    return new _NormalizedSchema(sc);
  }
  getSchema() {
    const sc = this.schema;
    if (Array.isArray(sc) && sc[0] === 0) {
      return sc[4];
    }
    return sc;
  }
  getName(withNamespace = false) {
    const { name } = this;
    const short = !withNamespace && name && name.includes("#");
    return short ? name.split("#")[1] : name || void 0;
  }
  getMemberName() {
    return this.memberName;
  }
  isMemberSchema() {
    return this._isMemberSchema;
  }
  isListSchema() {
    const sc = this.getSchema();
    return typeof sc === "number" ? sc >= 64 && sc < 128 : sc[0] === 1;
  }
  isMapSchema() {
    const sc = this.getSchema();
    return typeof sc === "number" ? sc >= 128 && sc <= 255 : sc[0] === 2;
  }
  isStructSchema() {
    const sc = this.getSchema();
    if (typeof sc !== "object") {
      return false;
    }
    const id = sc[0];
    return id === 3 || id === -3 || id === 4;
  }
  isUnionSchema() {
    const sc = this.getSchema();
    if (typeof sc !== "object") {
      return false;
    }
    return sc[0] === 4;
  }
  isBlobSchema() {
    const sc = this.getSchema();
    return sc === 21 || sc === 42;
  }
  isTimestampSchema() {
    const sc = this.getSchema();
    return typeof sc === "number" && sc >= 4 && sc <= 7;
  }
  isUnitSchema() {
    return this.getSchema() === "unit";
  }
  isDocumentSchema() {
    return this.getSchema() === 15;
  }
  isStringSchema() {
    return this.getSchema() === 0;
  }
  isBooleanSchema() {
    return this.getSchema() === 2;
  }
  isNumericSchema() {
    return this.getSchema() === 1;
  }
  isBigIntegerSchema() {
    return this.getSchema() === 17;
  }
  isBigDecimalSchema() {
    return this.getSchema() === 19;
  }
  isStreaming() {
    const { streaming } = this.getMergedTraits();
    return !!streaming || this.getSchema() === 42;
  }
  isIdempotencyToken() {
    return !!this.getMergedTraits().idempotencyToken;
  }
  getMergedTraits() {
    return this.normalizedTraits ?? (this.normalizedTraits = {
      ...this.getOwnTraits(),
      ...this.getMemberTraits()
    });
  }
  getMemberTraits() {
    return translateTraits(this.memberTraits);
  }
  getOwnTraits() {
    return translateTraits(this.traits);
  }
  getKeySchema() {
    const [isDoc, isMap] = [this.isDocumentSchema(), this.isMapSchema()];
    if (!isDoc && !isMap) {
      throw new Error(`@smithy/core/schema - cannot get key for non-map: ${this.getName(true)}`);
    }
    const schema = this.getSchema();
    const memberSchema = isDoc ? 15 : schema[4] ?? 0;
    return member([memberSchema, 0], "key");
  }
  getValueSchema() {
    const sc = this.getSchema();
    const [isDoc, isMap, isList] = [this.isDocumentSchema(), this.isMapSchema(), this.isListSchema()];
    const memberSchema = typeof sc === "number" ? 63 & sc : sc && typeof sc === "object" && (isMap || isList) ? sc[3 + sc[0]] : isDoc ? 15 : void 0;
    if (memberSchema != null) {
      return member([memberSchema, 0], isMap ? "value" : "member");
    }
    throw new Error(`@smithy/core/schema - ${this.getName(true)} has no value member.`);
  }
  getMemberSchema(memberName) {
    const struct = this.getSchema();
    if (this.isStructSchema() && struct[4].includes(memberName)) {
      const i2 = struct[4].indexOf(memberName);
      const memberSchema = struct[5][i2];
      return member(isMemberSchema(memberSchema) ? memberSchema : [memberSchema, 0], memberName);
    }
    if (this.isDocumentSchema()) {
      return member([15, 0], memberName);
    }
    throw new Error(`@smithy/core/schema - ${this.getName(true)} has no no member=${memberName}.`);
  }
  getMemberSchemas() {
    const buffer = {};
    try {
      for (const [k2, v2] of this.structIterator()) {
        buffer[k2] = v2;
      }
    } catch (ignored) {
    }
    return buffer;
  }
  getEventStreamMember() {
    if (this.isStructSchema()) {
      for (const [memberName, memberSchema] of this.structIterator()) {
        if (memberSchema.isStreaming() && memberSchema.isStructSchema()) {
          return memberName;
        }
      }
    }
    return "";
  }
  *structIterator() {
    if (this.isUnitSchema()) {
      return;
    }
    if (!this.isStructSchema()) {
      throw new Error("@smithy/core/schema - cannot iterate non-struct schema.");
    }
    const struct = this.getSchema();
    const z2 = struct[4].length;
    let it = struct[anno.it];
    if (it && z2 === it.length) {
      yield* it;
      return;
    }
    it = Array(z2);
    for (let i2 = 0; i2 < z2; ++i2) {
      const k2 = struct[4][i2];
      const v2 = member([struct[5][i2], 0], k2);
      yield it[i2] = [k2, v2];
    }
    struct[anno.it] = it;
  }
};
function member(memberSchema, memberName) {
  if (memberSchema instanceof NormalizedSchema) {
    return Object.assign(memberSchema, {
      memberName,
      _isMemberSchema: true
    });
  }
  const internalCtorAccess = NormalizedSchema;
  return new internalCtorAccess(memberSchema, memberName);
}
__name(member, "member");
var isMemberSchema = /* @__PURE__ */ __name((sc) => Array.isArray(sc) && sc.length === 2, "isMemberSchema");
var isStaticSchema = /* @__PURE__ */ __name((sc) => Array.isArray(sc) && sc.length >= 5, "isStaticSchema");

// node_modules/@smithy/core/dist-es/submodules/serde/parse-utils.js
var parseBoolean = /* @__PURE__ */ __name((value) => {
  switch (value) {
    case "true":
      return true;
    case "false":
      return false;
    default:
      throw new Error(`Unable to parse boolean value "${value}"`);
  }
}, "parseBoolean");
var expectNumber = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value === "string") {
    const parsed = parseFloat(value);
    if (!Number.isNaN(parsed)) {
      if (String(parsed) !== String(value)) {
        logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
      }
      return parsed;
    }
  }
  if (typeof value === "number") {
    return value;
  }
  throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
}, "expectNumber");
var MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
var expectFloat32 = /* @__PURE__ */ __name((value) => {
  const expected = expectNumber(value);
  if (expected !== void 0 && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
    if (Math.abs(expected) > MAX_FLOAT) {
      throw new TypeError(`Expected 32-bit float, got ${value}`);
    }
  }
  return expected;
}, "expectFloat32");
var expectLong = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (Number.isInteger(value) && !Number.isNaN(value)) {
    return value;
  }
  throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
}, "expectLong");
var expectInt32 = /* @__PURE__ */ __name((value) => expectSizedInt(value, 32), "expectInt32");
var expectShort = /* @__PURE__ */ __name((value) => expectSizedInt(value, 16), "expectShort");
var expectByte = /* @__PURE__ */ __name((value) => expectSizedInt(value, 8), "expectByte");
var expectSizedInt = /* @__PURE__ */ __name((value, size) => {
  const expected = expectLong(value);
  if (expected !== void 0 && castInt(expected, size) !== expected) {
    throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
  }
  return expected;
}, "expectSizedInt");
var castInt = /* @__PURE__ */ __name((value, size) => {
  switch (size) {
    case 32:
      return Int32Array.of(value)[0];
    case 16:
      return Int16Array.of(value)[0];
    case 8:
      return Int8Array.of(value)[0];
  }
}, "castInt");
var expectNonNull = /* @__PURE__ */ __name((value, location) => {
  if (value === null || value === void 0) {
    if (location) {
      throw new TypeError(`Expected a non-null value for ${location}`);
    }
    throw new TypeError("Expected a non-null value");
  }
  return value;
}, "expectNonNull");
var expectObject = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value === "object" && !Array.isArray(value)) {
    return value;
  }
  const receivedType = Array.isArray(value) ? "array" : typeof value;
  throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
}, "expectObject");
var expectString = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value === "string") {
    return value;
  }
  if (["boolean", "number", "bigint"].includes(typeof value)) {
    logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
    return String(value);
  }
  throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
}, "expectString");
var strictParseFloat32 = /* @__PURE__ */ __name((value) => {
  if (typeof value == "string") {
    return expectFloat32(parseNumber(value));
  }
  return expectFloat32(value);
}, "strictParseFloat32");
var NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
var parseNumber = /* @__PURE__ */ __name((value) => {
  const matches = value.match(NUMBER_REGEX);
  if (matches === null || matches[0].length !== value.length) {
    throw new TypeError(`Expected real number, got implicit NaN`);
  }
  return parseFloat(value);
}, "parseNumber");
var strictParseLong = /* @__PURE__ */ __name((value) => {
  if (typeof value === "string") {
    return expectLong(parseNumber(value));
  }
  return expectLong(value);
}, "strictParseLong");
var strictParseInt32 = /* @__PURE__ */ __name((value) => {
  if (typeof value === "string") {
    return expectInt32(parseNumber(value));
  }
  return expectInt32(value);
}, "strictParseInt32");
var strictParseShort = /* @__PURE__ */ __name((value) => {
  if (typeof value === "string") {
    return expectShort(parseNumber(value));
  }
  return expectShort(value);
}, "strictParseShort");
var strictParseByte = /* @__PURE__ */ __name((value) => {
  if (typeof value === "string") {
    return expectByte(parseNumber(value));
  }
  return expectByte(value);
}, "strictParseByte");
var stackTraceWarning = /* @__PURE__ */ __name((message) => {
  return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s2) => !s2.includes("stackTraceWarning")).join("\n");
}, "stackTraceWarning");
var logger = {
  warn: console.warn
};

// node_modules/@smithy/core/dist-es/submodules/serde/date-utils.js
var DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function dateToUtcString(date) {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const dayOfWeek = date.getUTCDay();
  const dayOfMonthInt = date.getUTCDate();
  const hoursInt = date.getUTCHours();
  const minutesInt = date.getUTCMinutes();
  const secondsInt = date.getUTCSeconds();
  const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
  const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
  const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
  const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
  return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year} ${hoursString}:${minutesString}:${secondsString} GMT`;
}
__name(dateToUtcString, "dateToUtcString");
var RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
var RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
var parseRfc3339DateTimeWithOffset = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value !== "string") {
    throw new TypeError("RFC-3339 date-times must be expressed as strings");
  }
  const match = RFC3339_WITH_OFFSET.exec(value);
  if (!match) {
    throw new TypeError("Invalid RFC-3339 date-time value");
  }
  const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
  const year = strictParseShort(stripLeadingZeroes(yearStr));
  const month = parseDateValue(monthStr, "month", 1, 12);
  const day = parseDateValue(dayStr, "day", 1, 31);
  const date = buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
  if (offsetStr.toUpperCase() != "Z") {
    date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));
  }
  return date;
}, "parseRfc3339DateTimeWithOffset");
var IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
var RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
var ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
var parseRfc7231DateTime = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value !== "string") {
    throw new TypeError("RFC-7231 date-times must be expressed as strings");
  }
  let match = IMF_FIXDATE.exec(value);
  if (match) {
    const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
    return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
  }
  match = RFC_850_DATE.exec(value);
  if (match) {
    const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
    return adjustRfc850Year(buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
      hours,
      minutes,
      seconds,
      fractionalMilliseconds
    }));
  }
  match = ASC_TIME.exec(value);
  if (match) {
    const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
    return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr.trimLeft(), "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
  }
  throw new TypeError("Invalid RFC-7231 date-time value");
}, "parseRfc7231DateTime");
var buildDate = /* @__PURE__ */ __name((year, month, day, time) => {
  const adjustedMonth = month - 1;
  validateDayOfMonth(year, adjustedMonth, day);
  return new Date(Date.UTC(year, adjustedMonth, day, parseDateValue(time.hours, "hour", 0, 23), parseDateValue(time.minutes, "minute", 0, 59), parseDateValue(time.seconds, "seconds", 0, 60), parseMilliseconds(time.fractionalMilliseconds)));
}, "buildDate");
var parseTwoDigitYear = /* @__PURE__ */ __name((value) => {
  const thisYear = (/* @__PURE__ */ new Date()).getUTCFullYear();
  const valueInThisCentury = Math.floor(thisYear / 100) * 100 + strictParseShort(stripLeadingZeroes(value));
  if (valueInThisCentury < thisYear) {
    return valueInThisCentury + 100;
  }
  return valueInThisCentury;
}, "parseTwoDigitYear");
var FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1e3;
var adjustRfc850Year = /* @__PURE__ */ __name((input) => {
  if (input.getTime() - (/* @__PURE__ */ new Date()).getTime() > FIFTY_YEARS_IN_MILLIS) {
    return new Date(Date.UTC(input.getUTCFullYear() - 100, input.getUTCMonth(), input.getUTCDate(), input.getUTCHours(), input.getUTCMinutes(), input.getUTCSeconds(), input.getUTCMilliseconds()));
  }
  return input;
}, "adjustRfc850Year");
var parseMonthByShortName = /* @__PURE__ */ __name((value) => {
  const monthIdx = MONTHS.indexOf(value);
  if (monthIdx < 0) {
    throw new TypeError(`Invalid month: ${value}`);
  }
  return monthIdx + 1;
}, "parseMonthByShortName");
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var validateDayOfMonth = /* @__PURE__ */ __name((year, month, day) => {
  let maxDays = DAYS_IN_MONTH[month];
  if (month === 1 && isLeapYear(year)) {
    maxDays = 29;
  }
  if (day > maxDays) {
    throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
  }
}, "validateDayOfMonth");
var isLeapYear = /* @__PURE__ */ __name((year) => {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}, "isLeapYear");
var parseDateValue = /* @__PURE__ */ __name((value, type, lower, upper) => {
  const dateVal = strictParseByte(stripLeadingZeroes(value));
  if (dateVal < lower || dateVal > upper) {
    throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
  }
  return dateVal;
}, "parseDateValue");
var parseMilliseconds = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return 0;
  }
  return strictParseFloat32("0." + value) * 1e3;
}, "parseMilliseconds");
var parseOffsetToMilliseconds = /* @__PURE__ */ __name((value) => {
  const directionStr = value[0];
  let direction = 1;
  if (directionStr == "+") {
    direction = 1;
  } else if (directionStr == "-") {
    direction = -1;
  } else {
    throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
  }
  const hour = Number(value.substring(1, 3));
  const minute = Number(value.substring(4, 6));
  return direction * (hour * 60 + minute) * 60 * 1e3;
}, "parseOffsetToMilliseconds");
var stripLeadingZeroes = /* @__PURE__ */ __name((value) => {
  let idx = 0;
  while (idx < value.length - 1 && value.charAt(idx) === "0") {
    idx++;
  }
  if (idx === 0) {
    return value;
  }
  return value.slice(idx);
}, "stripLeadingZeroes");

// node_modules/@smithy/uuid/dist-es/randomUUID.browser.js
var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);

// node_modules/@smithy/uuid/dist-es/v4.js
var decimalToHex = Array.from({ length: 256 }, (_, i2) => i2.toString(16).padStart(2, "0"));
var v4 = /* @__PURE__ */ __name(() => {
  if (randomUUID) {
    return randomUUID();
  }
  const rnds = new Uint8Array(16);
  crypto.getRandomValues(rnds);
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  return decimalToHex[rnds[0]] + decimalToHex[rnds[1]] + decimalToHex[rnds[2]] + decimalToHex[rnds[3]] + "-" + decimalToHex[rnds[4]] + decimalToHex[rnds[5]] + "-" + decimalToHex[rnds[6]] + decimalToHex[rnds[7]] + "-" + decimalToHex[rnds[8]] + decimalToHex[rnds[9]] + "-" + decimalToHex[rnds[10]] + decimalToHex[rnds[11]] + decimalToHex[rnds[12]] + decimalToHex[rnds[13]] + decimalToHex[rnds[14]] + decimalToHex[rnds[15]];
}, "v4");

// node_modules/@smithy/core/dist-es/submodules/protocols/resolve-path.js
var resolvedPath = /* @__PURE__ */ __name((resolvedPath2, input, memberName, labelValueProvider, uriLabel, isGreedyLabel) => {
  if (input != null && input[memberName] !== void 0) {
    const labelValue = labelValueProvider();
    if (labelValue == null || labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: " + memberName + ".");
    }
    resolvedPath2 = resolvedPath2.replace(uriLabel, isGreedyLabel ? labelValue.split("/").map((segment) => extendedEncodeURIComponent(segment)).join("/") : extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: " + memberName + ".");
  }
  return resolvedPath2;
}, "resolvedPath");

// node_modules/@smithy/core/dist-es/submodules/protocols/requestBuilder.js
function requestBuilder(input, context) {
  return new RequestBuilder(input, context);
}
__name(requestBuilder, "requestBuilder");
var RequestBuilder = class {
  static {
    __name(this, "RequestBuilder");
  }
  input;
  context;
  query = {};
  method = "";
  headers = {};
  path = "";
  body = null;
  hostname = "";
  resolvePathStack = [];
  constructor(input, context) {
    this.input = input;
    this.context = context;
  }
  async build() {
    const { hostname, protocol = "https", port, path: basePath } = await this.context.endpoint();
    this.path = basePath;
    for (const resolvePath of this.resolvePathStack) {
      resolvePath(this.path);
    }
    return new HttpRequest({
      protocol,
      hostname: this.hostname || hostname,
      port,
      method: this.method,
      path: this.path,
      query: this.query,
      body: this.body,
      headers: this.headers
    });
  }
  hn(hostname) {
    this.hostname = hostname;
    return this;
  }
  bp(uriLabel) {
    this.resolvePathStack.push((basePath) => {
      this.path = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + uriLabel;
    });
    return this;
  }
  p(memberName, labelValueProvider, uriLabel, isGreedyLabel) {
    this.resolvePathStack.push((path) => {
      this.path = resolvedPath(path, this.input, memberName, labelValueProvider, uriLabel, isGreedyLabel);
    });
    return this;
  }
  h(headers) {
    this.headers = headers;
    return this;
  }
  q(query) {
    this.query = query;
    return this;
  }
  b(body) {
    this.body = body;
    return this;
  }
  m(method) {
    this.method = method;
    return this;
  }
};

// node_modules/@smithy/core/dist-es/setFeature.js
function setFeature2(context, feature, value) {
  if (!context.__smithy_context) {
    context.__smithy_context = {
      features: {}
    };
  } else if (!context.__smithy_context.features) {
    context.__smithy_context.features = {};
  }
  context.__smithy_context.features[feature] = value;
}
__name(setFeature2, "setFeature");

// node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js
var DefaultIdentityProviderConfig = class {
  static {
    __name(this, "DefaultIdentityProviderConfig");
  }
  authSchemes = /* @__PURE__ */ new Map();
  constructor(config) {
    for (const [key, value] of Object.entries(config)) {
      if (value !== void 0) {
        this.authSchemes.set(key, value);
      }
    }
  }
  getIdentityProvider(schemeId) {
    return this.authSchemes.get(schemeId);
  }
};

// node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js
var createIsIdentityExpiredFunction = /* @__PURE__ */ __name((expirationMs) => /* @__PURE__ */ __name(function isIdentityExpired2(identity) {
  return doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
}, "isIdentityExpired"), "createIsIdentityExpiredFunction");
var EXPIRATION_MS = 3e5;
var isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
var doesIdentityRequireRefresh = /* @__PURE__ */ __name((identity) => identity.expiration !== void 0, "doesIdentityRequireRefresh");
var memoizeIdentityProvider = /* @__PURE__ */ __name((provider, isExpired, requiresRefresh) => {
  if (provider === void 0) {
    return void 0;
  }
  const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
  let resolved;
  let pending;
  let hasResult;
  let isConstant = false;
  const coalesceProvider = /* @__PURE__ */ __name(async (options) => {
    if (!pending) {
      pending = normalizedProvider(options);
    }
    try {
      resolved = await pending;
      hasResult = true;
      isConstant = false;
    } finally {
      pending = void 0;
    }
    return resolved;
  }, "coalesceProvider");
  if (isExpired === void 0) {
    return async (options) => {
      if (!hasResult || options?.forceRefresh) {
        resolved = await coalesceProvider(options);
      }
      return resolved;
    };
  }
  return async (options) => {
    if (!hasResult || options?.forceRefresh) {
      resolved = await coalesceProvider(options);
    }
    if (isConstant) {
      return resolved;
    }
    if (!requiresRefresh(resolved)) {
      isConstant = true;
      return resolved;
    }
    if (isExpired(resolved)) {
      await coalesceProvider(options);
      return resolved;
    }
    return resolved;
  };
}, "memoizeIdentityProvider");

// node_modules/@smithy/property-provider/dist-es/memoize.js
var memoize = /* @__PURE__ */ __name((provider, isExpired, requiresRefresh) => {
  let resolved;
  let pending;
  let hasResult;
  let isConstant = false;
  const coalesceProvider = /* @__PURE__ */ __name(async () => {
    if (!pending) {
      pending = provider();
    }
    try {
      resolved = await pending;
      hasResult = true;
      isConstant = false;
    } finally {
      pending = void 0;
    }
    return resolved;
  }, "coalesceProvider");
  if (isExpired === void 0) {
    return async (options) => {
      if (!hasResult || options?.forceRefresh) {
        resolved = await coalesceProvider();
      }
      return resolved;
    };
  }
  return async (options) => {
    if (!hasResult || options?.forceRefresh) {
      resolved = await coalesceProvider();
    }
    if (isConstant) {
      return resolved;
    }
    if (requiresRefresh && !requiresRefresh(resolved)) {
      isConstant = true;
      return resolved;
    }
    if (isExpired(resolved)) {
      await coalesceProvider();
      return resolved;
    }
    return resolved;
  };
}, "memoize");

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4AConfig.js
var resolveAwsSdkSigV4AConfig = /* @__PURE__ */ __name((config) => {
  config.sigv4aSigningRegionSet = normalizeProvider2(config.sigv4aSigningRegionSet);
  return config;
}, "resolveAwsSdkSigV4AConfig");

// node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
init_dist_es();

// node_modules/@smithy/signature-v4/dist-es/constants.js
var ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
var CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
var AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
var SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
var EXPIRES_QUERY_PARAM = "X-Amz-Expires";
var SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
var TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
var AUTH_HEADER = "authorization";
var AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
var DATE_HEADER = "date";
var GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
var SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
var SHA256_HEADER = "x-amz-content-sha256";
var TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
var ALWAYS_UNSIGNABLE_HEADERS = {
  authorization: true,
  "cache-control": true,
  connection: true,
  expect: true,
  from: true,
  "keep-alive": true,
  "max-forwards": true,
  pragma: true,
  referer: true,
  te: true,
  trailer: true,
  "transfer-encoding": true,
  upgrade: true,
  "user-agent": true,
  "x-amzn-trace-id": true
};
var PROXY_HEADER_PATTERN = /^proxy-/;
var SEC_HEADER_PATTERN = /^sec-/;
var ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
var EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
var UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
var MAX_CACHE_SIZE = 50;
var KEY_TYPE_IDENTIFIER = "aws4_request";
var MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;

// node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js
init_dist_es();
var signingKeyCache = {};
var cacheQueue = [];
var createScope = /* @__PURE__ */ __name((shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`, "createScope");
var getSigningKey = /* @__PURE__ */ __name(async (sha256Constructor, credentials, shortDate, region, service) => {
  const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
  const cacheKey = `${shortDate}:${region}:${service}:${toHex(credsHash)}:${credentials.sessionToken}`;
  if (cacheKey in signingKeyCache) {
    return signingKeyCache[cacheKey];
  }
  cacheQueue.push(cacheKey);
  while (cacheQueue.length > MAX_CACHE_SIZE) {
    delete signingKeyCache[cacheQueue.shift()];
  }
  let key = `AWS4${credentials.secretAccessKey}`;
  for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
    key = await hmac(sha256Constructor, key, signable);
  }
  return signingKeyCache[cacheKey] = key;
}, "getSigningKey");
var hmac = /* @__PURE__ */ __name((ctor, secret, data) => {
  const hash = new ctor(secret);
  hash.update(toUint8Array(data));
  return hash.digest();
}, "hmac");

// node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js
var getCanonicalHeaders = /* @__PURE__ */ __name(({ headers }, unsignableHeaders, signableHeaders) => {
  const canonical = {};
  for (const headerName of Object.keys(headers).sort()) {
    if (headers[headerName] == void 0) {
      continue;
    }
    const canonicalHeaderName = headerName.toLowerCase();
    if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS || unsignableHeaders?.has(canonicalHeaderName) || PROXY_HEADER_PATTERN.test(canonicalHeaderName) || SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
      if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
        continue;
      }
    }
    canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
  }
  return canonical;
}, "getCanonicalHeaders");

// node_modules/@smithy/is-array-buffer/dist-es/index.js
var isArrayBuffer = /* @__PURE__ */ __name((arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]", "isArrayBuffer");

// node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js
init_dist_es();
var getPayloadHash = /* @__PURE__ */ __name(async ({ headers, body }, hashConstructor) => {
  for (const headerName of Object.keys(headers)) {
    if (headerName.toLowerCase() === SHA256_HEADER) {
      return headers[headerName];
    }
  }
  if (body == void 0) {
    return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  } else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
    const hashCtor = new hashConstructor();
    hashCtor.update(toUint8Array(body));
    return toHex(await hashCtor.digest());
  }
  return UNSIGNED_PAYLOAD;
}, "getPayloadHash");

// node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js
init_dist_es();
var HeaderFormatter = class {
  static {
    __name(this, "HeaderFormatter");
  }
  format(headers) {
    const chunks = [];
    for (const headerName of Object.keys(headers)) {
      const bytes = fromUtf8(headerName);
      chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
    }
    const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
    let position = 0;
    for (const chunk of chunks) {
      out.set(chunk, position);
      position += chunk.byteLength;
    }
    return out;
  }
  formatHeaderValue(header) {
    switch (header.type) {
      case "boolean":
        return Uint8Array.from([header.value ? 0 : 1]);
      case "byte":
        return Uint8Array.from([2, header.value]);
      case "short":
        const shortView = new DataView(new ArrayBuffer(3));
        shortView.setUint8(0, 3);
        shortView.setInt16(1, header.value, false);
        return new Uint8Array(shortView.buffer);
      case "integer":
        const intView = new DataView(new ArrayBuffer(5));
        intView.setUint8(0, 4);
        intView.setInt32(1, header.value, false);
        return new Uint8Array(intView.buffer);
      case "long":
        const longBytes = new Uint8Array(9);
        longBytes[0] = 5;
        longBytes.set(header.value.bytes, 1);
        return longBytes;
      case "binary":
        const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
        binView.setUint8(0, 6);
        binView.setUint16(1, header.value.byteLength, false);
        const binBytes = new Uint8Array(binView.buffer);
        binBytes.set(header.value, 3);
        return binBytes;
      case "string":
        const utf8Bytes = fromUtf8(header.value);
        const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
        strView.setUint8(0, 7);
        strView.setUint16(1, utf8Bytes.byteLength, false);
        const strBytes = new Uint8Array(strView.buffer);
        strBytes.set(utf8Bytes, 3);
        return strBytes;
      case "timestamp":
        const tsBytes = new Uint8Array(9);
        tsBytes[0] = 8;
        tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
        return tsBytes;
      case "uuid":
        if (!UUID_PATTERN.test(header.value)) {
          throw new Error(`Invalid UUID received: ${header.value}`);
        }
        const uuidBytes = new Uint8Array(17);
        uuidBytes[0] = 9;
        uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
        return uuidBytes;
    }
  }
};
var HEADER_VALUE_TYPE;
(function(HEADER_VALUE_TYPE3) {
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["boolTrue"] = 0] = "boolTrue";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["boolFalse"] = 1] = "boolFalse";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["byte"] = 2] = "byte";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["short"] = 3] = "short";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["integer"] = 4] = "integer";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["long"] = 5] = "long";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["byteArray"] = 6] = "byteArray";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["string"] = 7] = "string";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["timestamp"] = 8] = "timestamp";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
var UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
var Int64 = class _Int64 {
  static {
    __name(this, "Int64");
  }
  bytes;
  constructor(bytes) {
    this.bytes = bytes;
    if (bytes.byteLength !== 8) {
      throw new Error("Int64 buffers must be exactly 8 bytes");
    }
  }
  static fromNumber(number) {
    if (number > 9223372036854776e3 || number < -9223372036854776e3) {
      throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
    }
    const bytes = new Uint8Array(8);
    for (let i2 = 7, remaining = Math.abs(Math.round(number)); i2 > -1 && remaining > 0; i2--, remaining /= 256) {
      bytes[i2] = remaining;
    }
    if (number < 0) {
      negate(bytes);
    }
    return new _Int64(bytes);
  }
  valueOf() {
    const bytes = this.bytes.slice(0);
    const negative = bytes[0] & 128;
    if (negative) {
      negate(bytes);
    }
    return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
  }
  toString() {
    return String(this.valueOf());
  }
};
function negate(bytes) {
  for (let i2 = 0; i2 < 8; i2++) {
    bytes[i2] ^= 255;
  }
  for (let i2 = 7; i2 > -1; i2--) {
    bytes[i2]++;
    if (bytes[i2] !== 0)
      break;
  }
}
__name(negate, "negate");

// node_modules/@smithy/signature-v4/dist-es/headerUtil.js
var hasHeader = /* @__PURE__ */ __name((soughtHeader, headers) => {
  soughtHeader = soughtHeader.toLowerCase();
  for (const headerName of Object.keys(headers)) {
    if (soughtHeader === headerName.toLowerCase()) {
      return true;
    }
  }
  return false;
}, "hasHeader");

// node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js
var moveHeadersToQuery = /* @__PURE__ */ __name((request, options = {}) => {
  const { headers, query = {} } = HttpRequest.clone(request);
  for (const name of Object.keys(headers)) {
    const lname = name.toLowerCase();
    if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname) || options.hoistableHeaders?.has(lname)) {
      query[name] = headers[name];
      delete headers[name];
    }
  }
  return {
    ...request,
    headers,
    query
  };
}, "moveHeadersToQuery");

// node_modules/@smithy/signature-v4/dist-es/prepareRequest.js
var prepareRequest = /* @__PURE__ */ __name((request) => {
  request = HttpRequest.clone(request);
  for (const headerName of Object.keys(request.headers)) {
    if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
      delete request.headers[headerName];
    }
  }
  return request;
}, "prepareRequest");

// node_modules/@smithy/signature-v4/dist-es/SignatureV4Base.js
init_dist_es();

// node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js
var getCanonicalQuery = /* @__PURE__ */ __name(({ query = {} }) => {
  const keys = [];
  const serialized = {};
  for (const key of Object.keys(query)) {
    if (key.toLowerCase() === SIGNATURE_HEADER) {
      continue;
    }
    const encodedKey = escapeUri(key);
    keys.push(encodedKey);
    const value = query[key];
    if (typeof value === "string") {
      serialized[encodedKey] = `${encodedKey}=${escapeUri(value)}`;
    } else if (Array.isArray(value)) {
      serialized[encodedKey] = value.slice(0).reduce((encoded, value2) => encoded.concat([`${encodedKey}=${escapeUri(value2)}`]), []).sort().join("&");
    }
  }
  return keys.sort().map((key) => serialized[key]).filter((serialized2) => serialized2).join("&");
}, "getCanonicalQuery");

// node_modules/@smithy/signature-v4/dist-es/utilDate.js
var iso8601 = /* @__PURE__ */ __name((time) => toDate(time).toISOString().replace(/\.\d{3}Z$/, "Z"), "iso8601");
var toDate = /* @__PURE__ */ __name((time) => {
  if (typeof time === "number") {
    return new Date(time * 1e3);
  }
  if (typeof time === "string") {
    if (Number(time)) {
      return new Date(Number(time) * 1e3);
    }
    return new Date(time);
  }
  return time;
}, "toDate");

// node_modules/@smithy/signature-v4/dist-es/SignatureV4Base.js
var SignatureV4Base = class {
  static {
    __name(this, "SignatureV4Base");
  }
  service;
  regionProvider;
  credentialProvider;
  sha256;
  uriEscapePath;
  applyChecksum;
  constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
    this.service = service;
    this.sha256 = sha256;
    this.uriEscapePath = uriEscapePath;
    this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
    this.regionProvider = normalizeProvider(region);
    this.credentialProvider = normalizeProvider(credentials);
  }
  createCanonicalRequest(request, canonicalHeaders, payloadHash) {
    const sortedHeaders = Object.keys(canonicalHeaders).sort();
    return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
  }
  async createStringToSign(longDate, credentialScope, canonicalRequest, algorithmIdentifier) {
    const hash = new this.sha256();
    hash.update(toUint8Array(canonicalRequest));
    const hashedRequest = await hash.digest();
    return `${algorithmIdentifier}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
  }
  getCanonicalPath({ path }) {
    if (this.uriEscapePath) {
      const normalizedPathSegments = [];
      for (const pathSegment of path.split("/")) {
        if (pathSegment?.length === 0)
          continue;
        if (pathSegment === ".")
          continue;
        if (pathSegment === "..") {
          normalizedPathSegments.pop();
        } else {
          normalizedPathSegments.push(pathSegment);
        }
      }
      const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
      const doubleEncoded = escapeUri(normalizedPath);
      return doubleEncoded.replace(/%2F/g, "/");
    }
    return path;
  }
  validateResolvedCredentials(credentials) {
    if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") {
      throw new Error("Resolved credential object is not valid");
    }
  }
  formatDate(now) {
    const longDate = iso8601(now).replace(/[\-:]/g, "");
    return {
      longDate,
      shortDate: longDate.slice(0, 8)
    };
  }
  getCanonicalHeaderList(headers) {
    return Object.keys(headers).sort().join(";");
  }
};

// node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
var SignatureV4 = class extends SignatureV4Base {
  static {
    __name(this, "SignatureV4");
  }
  headerFormatter = new HeaderFormatter();
  constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
    super({
      applyChecksum,
      credentials,
      region,
      service,
      sha256,
      uriEscapePath
    });
  }
  async presign(originalRequest, options = {}) {
    const { signingDate = /* @__PURE__ */ new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, hoistableHeaders, signingRegion, signingService } = options;
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? await this.regionProvider();
    const { longDate, shortDate } = this.formatDate(signingDate);
    if (expiresIn > MAX_PRESIGNED_TTL) {
      return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
    }
    const scope = createScope(shortDate, region, signingService ?? this.service);
    const request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders, hoistableHeaders });
    if (credentials.sessionToken) {
      request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
    }
    request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
    request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
    request.query[AMZ_DATE_QUERY_PARAM] = longDate;
    request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
    const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
    request.query[SIGNED_HEADERS_QUERY_PARAM] = this.getCanonicalHeaderList(canonicalHeaders);
    request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)));
    return request;
  }
  async sign(toSign, options) {
    if (typeof toSign === "string") {
      return this.signString(toSign, options);
    } else if (toSign.headers && toSign.payload) {
      return this.signEvent(toSign, options);
    } else if (toSign.message) {
      return this.signMessage(toSign, options);
    } else {
      return this.signRequest(toSign, options);
    }
  }
  async signEvent({ headers, payload }, { signingDate = /* @__PURE__ */ new Date(), priorSignature, signingRegion, signingService }) {
    const region = signingRegion ?? await this.regionProvider();
    const { shortDate, longDate } = this.formatDate(signingDate);
    const scope = createScope(shortDate, region, signingService ?? this.service);
    const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
    const hash = new this.sha256();
    hash.update(headers);
    const hashedHeaders = toHex(await hash.digest());
    const stringToSign = [
      EVENT_ALGORITHM_IDENTIFIER,
      longDate,
      scope,
      priorSignature,
      hashedHeaders,
      hashedPayload
    ].join("\n");
    return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
  }
  async signMessage(signableMessage, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService }) {
    const promise = this.signEvent({
      headers: this.headerFormatter.format(signableMessage.message.headers),
      payload: signableMessage.message.body
    }, {
      signingDate,
      signingRegion,
      signingService,
      priorSignature: signableMessage.priorSignature
    });
    return promise.then((signature) => {
      return { message: signableMessage.message, signature };
    });
  }
  async signString(stringToSign, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService } = {}) {
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? await this.regionProvider();
    const { shortDate } = this.formatDate(signingDate);
    const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
    hash.update(toUint8Array(stringToSign));
    return toHex(await hash.digest());
  }
  async signRequest(requestToSign, { signingDate = /* @__PURE__ */ new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? await this.regionProvider();
    const request = prepareRequest(requestToSign);
    const { longDate, shortDate } = this.formatDate(signingDate);
    const scope = createScope(shortDate, region, signingService ?? this.service);
    request.headers[AMZ_DATE_HEADER] = longDate;
    if (credentials.sessionToken) {
      request.headers[TOKEN_HEADER] = credentials.sessionToken;
    }
    const payloadHash = await getPayloadHash(request, this.sha256);
    if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
      request.headers[SHA256_HEADER] = payloadHash;
    }
    const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
    const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
    request.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} Credential=${credentials.accessKeyId}/${scope}, SignedHeaders=${this.getCanonicalHeaderList(canonicalHeaders)}, Signature=${signature}`;
    return request;
  }
  async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
    const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest, ALGORITHM_IDENTIFIER);
    const hash = new this.sha256(await keyPromise);
    hash.update(toUint8Array(stringToSign));
    return toHex(await hash.digest());
  }
  getSigningKey(credentials, region, shortDate, service) {
    return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
  }
};

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
var resolveAwsSdkSigV4Config = /* @__PURE__ */ __name((config) => {
  let isUserSupplied = false;
  let credentialsProvider;
  if (config.credentials) {
    isUserSupplied = true;
    credentialsProvider = memoizeIdentityProvider(config.credentials, isIdentityExpired, doesIdentityRequireRefresh);
  }
  if (!credentialsProvider) {
    if (config.credentialDefaultProvider) {
      credentialsProvider = normalizeProvider2(config.credentialDefaultProvider(Object.assign({}, config, {
        parentClientConfig: config
      })));
    } else {
      credentialsProvider = /* @__PURE__ */ __name(async () => {
        throw new Error("`credentials` is missing");
      }, "credentialsProvider");
    }
  }
  const boundCredentialsProvider = /* @__PURE__ */ __name(async () => credentialsProvider({ callerClientConfig: config }), "boundCredentialsProvider");
  const { signingEscapePath = true, systemClockOffset = config.systemClockOffset || 0, sha256 } = config;
  let signer;
  if (config.signer) {
    signer = normalizeProvider2(config.signer);
  } else if (config.regionInfoProvider) {
    signer = /* @__PURE__ */ __name(() => normalizeProvider2(config.region)().then(async (region) => [
      await config.regionInfoProvider(region, {
        useFipsEndpoint: await config.useFipsEndpoint(),
        useDualstackEndpoint: await config.useDualstackEndpoint()
      }) || {},
      region
    ]).then(([regionInfo, region]) => {
      const { signingRegion, signingService } = regionInfo;
      config.signingRegion = config.signingRegion || signingRegion || region;
      config.signingName = config.signingName || signingService || config.serviceId;
      const params = {
        ...config,
        credentials: boundCredentialsProvider,
        region: config.signingRegion,
        service: config.signingName,
        sha256,
        uriEscapePath: signingEscapePath
      };
      const SignerCtor = config.signerConstructor || SignatureV4;
      return new SignerCtor(params);
    }), "signer");
  } else {
    signer = /* @__PURE__ */ __name(async (authScheme) => {
      authScheme = Object.assign({}, {
        name: "sigv4",
        signingName: config.signingName || config.defaultSigningName,
        signingRegion: await normalizeProvider2(config.region)(),
        properties: {}
      }, authScheme);
      const signingRegion = authScheme.signingRegion;
      const signingService = authScheme.signingName;
      config.signingRegion = config.signingRegion || signingRegion;
      config.signingName = config.signingName || signingService || config.serviceId;
      const params = {
        ...config,
        credentials: boundCredentialsProvider,
        region: config.signingRegion,
        service: config.signingName,
        sha256,
        uriEscapePath: signingEscapePath
      };
      const SignerCtor = config.signerConstructor || SignatureV4;
      return new SignerCtor(params);
    }, "signer");
  }
  return {
    ...config,
    systemClockOffset,
    signingEscapePath,
    credentials: isUserSupplied ? async () => boundCredentialsProvider().then((creds) => setCredentialFeature(creds, "CREDENTIALS_CODE", "e")) : boundCredentialsProvider,
    signer
  };
}, "resolveAwsSdkSigV4Config");

// node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js
var getAllAliases = /* @__PURE__ */ __name((name, aliases) => {
  const _aliases = [];
  if (name) {
    _aliases.push(name);
  }
  if (aliases) {
    for (const alias of aliases) {
      _aliases.push(alias);
    }
  }
  return _aliases;
}, "getAllAliases");
var getMiddlewareNameWithAliases = /* @__PURE__ */ __name((name, aliases) => {
  return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
}, "getMiddlewareNameWithAliases");
var constructStack = /* @__PURE__ */ __name(() => {
  let absoluteEntries = [];
  let relativeEntries = [];
  let identifyOnResolve = false;
  const entriesNameSet = /* @__PURE__ */ new Set();
  const sort = /* @__PURE__ */ __name((entries) => entries.sort((a2, b2) => stepWeights[b2.step] - stepWeights[a2.step] || priorityWeights[b2.priority || "normal"] - priorityWeights[a2.priority || "normal"]), "sort");
  const removeByName = /* @__PURE__ */ __name((toRemove) => {
    let isRemoved = false;
    const filterCb = /* @__PURE__ */ __name((entry) => {
      const aliases = getAllAliases(entry.name, entry.aliases);
      if (aliases.includes(toRemove)) {
        isRemoved = true;
        for (const alias of aliases) {
          entriesNameSet.delete(alias);
        }
        return false;
      }
      return true;
    }, "filterCb");
    absoluteEntries = absoluteEntries.filter(filterCb);
    relativeEntries = relativeEntries.filter(filterCb);
    return isRemoved;
  }, "removeByName");
  const removeByReference = /* @__PURE__ */ __name((toRemove) => {
    let isRemoved = false;
    const filterCb = /* @__PURE__ */ __name((entry) => {
      if (entry.middleware === toRemove) {
        isRemoved = true;
        for (const alias of getAllAliases(entry.name, entry.aliases)) {
          entriesNameSet.delete(alias);
        }
        return false;
      }
      return true;
    }, "filterCb");
    absoluteEntries = absoluteEntries.filter(filterCb);
    relativeEntries = relativeEntries.filter(filterCb);
    return isRemoved;
  }, "removeByReference");
  const cloneTo = /* @__PURE__ */ __name((toStack) => {
    absoluteEntries.forEach((entry) => {
      toStack.add(entry.middleware, { ...entry });
    });
    relativeEntries.forEach((entry) => {
      toStack.addRelativeTo(entry.middleware, { ...entry });
    });
    toStack.identifyOnResolve?.(stack.identifyOnResolve());
    return toStack;
  }, "cloneTo");
  const expandRelativeMiddlewareList = /* @__PURE__ */ __name((from) => {
    const expandedMiddlewareList = [];
    from.before.forEach((entry) => {
      if (entry.before.length === 0 && entry.after.length === 0) {
        expandedMiddlewareList.push(entry);
      } else {
        expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
      }
    });
    expandedMiddlewareList.push(from);
    from.after.reverse().forEach((entry) => {
      if (entry.before.length === 0 && entry.after.length === 0) {
        expandedMiddlewareList.push(entry);
      } else {
        expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
      }
    });
    return expandedMiddlewareList;
  }, "expandRelativeMiddlewareList");
  const getMiddlewareList = /* @__PURE__ */ __name((debug = false) => {
    const normalizedAbsoluteEntries = [];
    const normalizedRelativeEntries = [];
    const normalizedEntriesNameMap = {};
    absoluteEntries.forEach((entry) => {
      const normalizedEntry = {
        ...entry,
        before: [],
        after: []
      };
      for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
        normalizedEntriesNameMap[alias] = normalizedEntry;
      }
      normalizedAbsoluteEntries.push(normalizedEntry);
    });
    relativeEntries.forEach((entry) => {
      const normalizedEntry = {
        ...entry,
        before: [],
        after: []
      };
      for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
        normalizedEntriesNameMap[alias] = normalizedEntry;
      }
      normalizedRelativeEntries.push(normalizedEntry);
    });
    normalizedRelativeEntries.forEach((entry) => {
      if (entry.toMiddleware) {
        const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
        if (toMiddleware === void 0) {
          if (debug) {
            return;
          }
          throw new Error(`${entry.toMiddleware} is not found when adding ${getMiddlewareNameWithAliases(entry.name, entry.aliases)} middleware ${entry.relation} ${entry.toMiddleware}`);
        }
        if (entry.relation === "after") {
          toMiddleware.after.push(entry);
        }
        if (entry.relation === "before") {
          toMiddleware.before.push(entry);
        }
      }
    });
    const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce((wholeList, expandedMiddlewareList) => {
      wholeList.push(...expandedMiddlewareList);
      return wholeList;
    }, []);
    return mainChain;
  }, "getMiddlewareList");
  const stack = {
    add: /* @__PURE__ */ __name((middleware, options = {}) => {
      const { name, override, aliases: _aliases } = options;
      const entry = {
        step: "initialize",
        priority: "normal",
        middleware,
        ...options
      };
      const aliases = getAllAliases(name, _aliases);
      if (aliases.length > 0) {
        if (aliases.some((alias) => entriesNameSet.has(alias))) {
          if (!override)
            throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
          for (const alias of aliases) {
            const toOverrideIndex = absoluteEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a2) => a2 === alias));
            if (toOverrideIndex === -1) {
              continue;
            }
            const toOverride = absoluteEntries[toOverrideIndex];
            if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
              throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ${entry.priority} priority in ${entry.step} step.`);
            }
            absoluteEntries.splice(toOverrideIndex, 1);
          }
        }
        for (const alias of aliases) {
          entriesNameSet.add(alias);
        }
      }
      absoluteEntries.push(entry);
    }, "add"),
    addRelativeTo: /* @__PURE__ */ __name((middleware, options) => {
      const { name, override, aliases: _aliases } = options;
      const entry = {
        middleware,
        ...options
      };
      const aliases = getAllAliases(name, _aliases);
      if (aliases.length > 0) {
        if (aliases.some((alias) => entriesNameSet.has(alias))) {
          if (!override)
            throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
          for (const alias of aliases) {
            const toOverrideIndex = relativeEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a2) => a2 === alias));
            if (toOverrideIndex === -1) {
              continue;
            }
            const toOverride = relativeEntries[toOverrideIndex];
            if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
              throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} "${entry.toMiddleware}" middleware.`);
            }
            relativeEntries.splice(toOverrideIndex, 1);
          }
        }
        for (const alias of aliases) {
          entriesNameSet.add(alias);
        }
      }
      relativeEntries.push(entry);
    }, "addRelativeTo"),
    clone: /* @__PURE__ */ __name(() => cloneTo(constructStack()), "clone"),
    use: /* @__PURE__ */ __name((plugin) => {
      plugin.applyToStack(stack);
    }, "use"),
    remove: /* @__PURE__ */ __name((toRemove) => {
      if (typeof toRemove === "string")
        return removeByName(toRemove);
      else
        return removeByReference(toRemove);
    }, "remove"),
    removeByTag: /* @__PURE__ */ __name((toRemove) => {
      let isRemoved = false;
      const filterCb = /* @__PURE__ */ __name((entry) => {
        const { tags, name, aliases: _aliases } = entry;
        if (tags && tags.includes(toRemove)) {
          const aliases = getAllAliases(name, _aliases);
          for (const alias of aliases) {
            entriesNameSet.delete(alias);
          }
          isRemoved = true;
          return false;
        }
        return true;
      }, "filterCb");
      absoluteEntries = absoluteEntries.filter(filterCb);
      relativeEntries = relativeEntries.filter(filterCb);
      return isRemoved;
    }, "removeByTag"),
    concat: /* @__PURE__ */ __name((from) => {
      const cloned = cloneTo(constructStack());
      cloned.use(from);
      cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false));
      return cloned;
    }, "concat"),
    applyToStack: cloneTo,
    identify: /* @__PURE__ */ __name(() => {
      return getMiddlewareList(true).map((mw) => {
        const step = mw.step ?? mw.relation + " " + mw.toMiddleware;
        return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
      });
    }, "identify"),
    identifyOnResolve(toggle) {
      if (typeof toggle === "boolean")
        identifyOnResolve = toggle;
      return identifyOnResolve;
    },
    resolve: /* @__PURE__ */ __name((handler, context) => {
      for (const middleware of getMiddlewareList().map((entry) => entry.middleware).reverse()) {
        handler = middleware(handler, context);
      }
      if (identifyOnResolve) {
        console.log(stack.identify());
      }
      return handler;
    }, "resolve")
  };
  return stack;
}, "constructStack");
var stepWeights = {
  initialize: 5,
  serialize: 4,
  build: 3,
  finalizeRequest: 2,
  deserialize: 1
};
var priorityWeights = {
  high: 3,
  normal: 2,
  low: 1
};

// node_modules/@smithy/smithy-client/dist-es/client.js
var Client = class {
  static {
    __name(this, "Client");
  }
  config;
  middlewareStack = constructStack();
  initConfig;
  handlers;
  constructor(config) {
    this.config = config;
    const { protocol, protocolSettings } = config;
    if (protocolSettings) {
      if (typeof protocol === "function") {
        config.protocol = new protocol(protocolSettings);
      }
    }
  }
  send(command, optionsOrCb, cb2) {
    const options = typeof optionsOrCb !== "function" ? optionsOrCb : void 0;
    const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb2;
    const useHandlerCache = options === void 0 && this.config.cacheMiddleware === true;
    let handler;
    if (useHandlerCache) {
      if (!this.handlers) {
        this.handlers = /* @__PURE__ */ new WeakMap();
      }
      const handlers = this.handlers;
      if (handlers.has(command.constructor)) {
        handler = handlers.get(command.constructor);
      } else {
        handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
        handlers.set(command.constructor, handler);
      }
    } else {
      delete this.handlers;
      handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
    }
    if (callback) {
      handler(command).then((result) => callback(null, result.output), (err) => callback(err)).catch(() => {
      });
    } else {
      return handler(command).then((result) => result.output);
    }
  }
  destroy() {
    this.config?.requestHandler?.destroy?.();
    delete this.handlers;
  }
};

// node_modules/@smithy/smithy-client/dist-es/schemaLogFilter.js
var SENSITIVE_STRING = "***SensitiveInformation***";
function schemaLogFilter(schema, data) {
  if (data == null) {
    return data;
  }
  const ns = NormalizedSchema.of(schema);
  if (ns.getMergedTraits().sensitive) {
    return SENSITIVE_STRING;
  }
  if (ns.isListSchema()) {
    const isSensitive = !!ns.getValueSchema().getMergedTraits().sensitive;
    if (isSensitive) {
      return SENSITIVE_STRING;
    }
  } else if (ns.isMapSchema()) {
    const isSensitive = !!ns.getKeySchema().getMergedTraits().sensitive || !!ns.getValueSchema().getMergedTraits().sensitive;
    if (isSensitive) {
      return SENSITIVE_STRING;
    }
  } else if (ns.isStructSchema() && typeof data === "object") {
    const object = data;
    const newObject = {};
    for (const [member2, memberNs] of ns.structIterator()) {
      if (object[member2] != null) {
        newObject[member2] = schemaLogFilter(memberNs, object[member2]);
      }
    }
    return newObject;
  }
  return data;
}
__name(schemaLogFilter, "schemaLogFilter");

// node_modules/@smithy/smithy-client/dist-es/command.js
var Command = class {
  static {
    __name(this, "Command");
  }
  middlewareStack = constructStack();
  schema;
  static classBuilder() {
    return new ClassBuilder();
  }
  resolveMiddlewareWithContext(clientStack, configuration, options, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor }) {
    for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
      this.middlewareStack.use(mw);
    }
    const stack = clientStack.concat(this.middlewareStack);
    const { logger: logger2 } = configuration;
    const handlerExecutionContext = {
      logger: logger2,
      clientName,
      commandName,
      inputFilterSensitiveLog,
      outputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        commandInstance: this,
        ...smithyContext
      },
      ...additionalContext
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
};
var ClassBuilder = class {
  static {
    __name(this, "ClassBuilder");
  }
  _init = /* @__PURE__ */ __name(() => {
  }, "_init");
  _ep = {};
  _middlewareFn = /* @__PURE__ */ __name(() => [], "_middlewareFn");
  _commandName = "";
  _clientName = "";
  _additionalContext = {};
  _smithyContext = {};
  _inputFilterSensitiveLog = void 0;
  _outputFilterSensitiveLog = void 0;
  _serializer = null;
  _deserializer = null;
  _operationSchema;
  init(cb2) {
    this._init = cb2;
  }
  ep(endpointParameterInstructions) {
    this._ep = endpointParameterInstructions;
    return this;
  }
  m(middlewareSupplier) {
    this._middlewareFn = middlewareSupplier;
    return this;
  }
  s(service, operation, smithyContext = {}) {
    this._smithyContext = {
      service,
      operation,
      ...smithyContext
    };
    return this;
  }
  c(additionalContext = {}) {
    this._additionalContext = additionalContext;
    return this;
  }
  n(clientName, commandName) {
    this._clientName = clientName;
    this._commandName = commandName;
    return this;
  }
  f(inputFilter = (_) => _, outputFilter = (_) => _) {
    this._inputFilterSensitiveLog = inputFilter;
    this._outputFilterSensitiveLog = outputFilter;
    return this;
  }
  ser(serializer) {
    this._serializer = serializer;
    return this;
  }
  de(deserializer) {
    this._deserializer = deserializer;
    return this;
  }
  sc(operation) {
    this._operationSchema = operation;
    this._smithyContext.operationSchema = operation;
    return this;
  }
  build() {
    const closure = this;
    let CommandRef;
    return CommandRef = class extends Command {
      static {
        __name(this, "CommandRef");
      }
      input;
      static getEndpointParameterInstructions() {
        return closure._ep;
      }
      constructor(...[input]) {
        super();
        this.input = input ?? {};
        closure._init(this);
        this.schema = closure._operationSchema;
      }
      resolveMiddleware(stack, configuration, options) {
        const op = closure._operationSchema;
        const input = op?.[4] ?? op?.input;
        const output = op?.[5] ?? op?.output;
        return this.resolveMiddlewareWithContext(stack, configuration, options, {
          CommandCtor: CommandRef,
          middlewareFn: closure._middlewareFn,
          clientName: closure._clientName,
          commandName: closure._commandName,
          inputFilterSensitiveLog: closure._inputFilterSensitiveLog ?? (op ? schemaLogFilter.bind(null, input) : (_) => _),
          outputFilterSensitiveLog: closure._outputFilterSensitiveLog ?? (op ? schemaLogFilter.bind(null, output) : (_) => _),
          smithyContext: closure._smithyContext,
          additionalContext: closure._additionalContext
        });
      }
      serialize = closure._serializer;
      deserialize = closure._deserializer;
    };
  }
};

// node_modules/@smithy/smithy-client/dist-es/constants.js
var SENSITIVE_STRING2 = "***SensitiveInformation***";

// node_modules/@smithy/smithy-client/dist-es/exceptions.js
var ServiceException = class _ServiceException extends Error {
  static {
    __name(this, "ServiceException");
  }
  $fault;
  $response;
  $retryable;
  $metadata;
  constructor(options) {
    super(options.message);
    Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype);
    this.name = options.name;
    this.$fault = options.$fault;
    this.$metadata = options.$metadata;
  }
  static isInstance(value) {
    if (!value)
      return false;
    const candidate = value;
    return _ServiceException.prototype.isPrototypeOf(candidate) || Boolean(candidate.$fault) && Boolean(candidate.$metadata) && (candidate.$fault === "client" || candidate.$fault === "server");
  }
  static [Symbol.hasInstance](instance) {
    if (!instance)
      return false;
    const candidate = instance;
    if (this === _ServiceException) {
      return _ServiceException.isInstance(instance);
    }
    if (_ServiceException.isInstance(instance)) {
      if (candidate.name && this.name) {
        return this.prototype.isPrototypeOf(instance) || candidate.name === this.name;
      }
      return this.prototype.isPrototypeOf(instance);
    }
    return false;
  }
};
var decorateServiceException = /* @__PURE__ */ __name((exception, additions = {}) => {
  Object.entries(additions).filter(([, v2]) => v2 !== void 0).forEach(([k2, v2]) => {
    if (exception[k2] == void 0 || exception[k2] === "") {
      exception[k2] = v2;
    }
  });
  const message = exception.message || exception.Message || "UnknownError";
  exception.message = message;
  delete exception.Message;
  return exception;
}, "decorateServiceException");

// node_modules/@smithy/smithy-client/dist-es/default-error-handler.js
var throwDefaultError = /* @__PURE__ */ __name(({ output, parsedBody, exceptionCtor, errorCode }) => {
  const $metadata = deserializeMetadata(output);
  const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : void 0;
  const response = new exceptionCtor({
    name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
    $fault: "client",
    $metadata
  });
  throw decorateServiceException(response, parsedBody);
}, "throwDefaultError");
var withBaseException = /* @__PURE__ */ __name((ExceptionCtor) => {
  return ({ output, parsedBody, errorCode }) => {
    throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
  };
}, "withBaseException");
var deserializeMetadata = /* @__PURE__ */ __name((output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
}), "deserializeMetadata");

// node_modules/@smithy/smithy-client/dist-es/defaults-mode.js
var loadConfigsForDefaultMode = /* @__PURE__ */ __name((mode) => {
  switch (mode) {
    case "standard":
      return {
        retryMode: "standard",
        connectionTimeout: 3100
      };
    case "in-region":
      return {
        retryMode: "standard",
        connectionTimeout: 1100
      };
    case "cross-region":
      return {
        retryMode: "standard",
        connectionTimeout: 3100
      };
    case "mobile":
      return {
        retryMode: "standard",
        connectionTimeout: 3e4
      };
    default:
      return {};
  }
}, "loadConfigsForDefaultMode");

// node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js
var knownAlgorithms = Object.values(AlgorithmId);
var getChecksumConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  const checksumAlgorithms = [];
  for (const id in AlgorithmId) {
    const algorithmId = AlgorithmId[id];
    if (runtimeConfig[algorithmId] === void 0) {
      continue;
    }
    checksumAlgorithms.push({
      algorithmId: /* @__PURE__ */ __name(() => algorithmId, "algorithmId"),
      checksumConstructor: /* @__PURE__ */ __name(() => runtimeConfig[algorithmId], "checksumConstructor")
    });
  }
  for (const [id, ChecksumCtor] of Object.entries(runtimeConfig.checksumAlgorithms ?? {})) {
    checksumAlgorithms.push({
      algorithmId: /* @__PURE__ */ __name(() => id, "algorithmId"),
      checksumConstructor: /* @__PURE__ */ __name(() => ChecksumCtor, "checksumConstructor")
    });
  }
  return {
    addChecksumAlgorithm(algo) {
      runtimeConfig.checksumAlgorithms = runtimeConfig.checksumAlgorithms ?? {};
      const id = algo.algorithmId();
      const ctor = algo.checksumConstructor();
      if (knownAlgorithms.includes(id)) {
        runtimeConfig.checksumAlgorithms[id.toUpperCase()] = ctor;
      } else {
        runtimeConfig.checksumAlgorithms[id] = ctor;
      }
      checksumAlgorithms.push(algo);
    },
    checksumAlgorithms() {
      return checksumAlgorithms;
    }
  };
}, "getChecksumConfiguration");
var resolveChecksumRuntimeConfig = /* @__PURE__ */ __name((clientConfig) => {
  const runtimeConfig = {};
  clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
    const id = checksumAlgorithm.algorithmId();
    if (knownAlgorithms.includes(id)) {
      runtimeConfig[id] = checksumAlgorithm.checksumConstructor();
    }
  });
  return runtimeConfig;
}, "resolveChecksumRuntimeConfig");

// node_modules/@smithy/smithy-client/dist-es/extensions/retry.js
var getRetryConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  return {
    setRetryStrategy(retryStrategy) {
      runtimeConfig.retryStrategy = retryStrategy;
    },
    retryStrategy() {
      return runtimeConfig.retryStrategy;
    }
  };
}, "getRetryConfiguration");
var resolveRetryRuntimeConfig = /* @__PURE__ */ __name((retryStrategyConfiguration) => {
  const runtimeConfig = {};
  runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
  return runtimeConfig;
}, "resolveRetryRuntimeConfig");

// node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js
var getDefaultExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  return Object.assign(getChecksumConfiguration(runtimeConfig), getRetryConfiguration(runtimeConfig));
}, "getDefaultExtensionConfiguration");
var resolveDefaultRuntimeConfig = /* @__PURE__ */ __name((config) => {
  return Object.assign(resolveChecksumRuntimeConfig(config), resolveRetryRuntimeConfig(config));
}, "resolveDefaultRuntimeConfig");

// node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js
var getValueFromTextNode = /* @__PURE__ */ __name((obj) => {
  const textNodeName = "#text";
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== void 0) {
      obj[key] = obj[key][textNodeName];
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      obj[key] = getValueFromTextNode(obj[key]);
    }
  }
  return obj;
}, "getValueFromTextNode");

// node_modules/@smithy/smithy-client/dist-es/is-serializable-header-value.js
var isSerializableHeaderValue = /* @__PURE__ */ __name((value) => {
  return value != null;
}, "isSerializableHeaderValue");

// node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js
var NoOpLogger = class {
  static {
    __name(this, "NoOpLogger");
  }
  trace() {
  }
  debug() {
  }
  info() {
  }
  warn() {
  }
  error() {
  }
};

// node_modules/@smithy/smithy-client/dist-es/object-mapping.js
function map(arg0, arg1, arg2) {
  let target;
  let filter;
  let instructions;
  if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
    target = {};
    instructions = arg0;
  } else {
    target = arg0;
    if (typeof arg1 === "function") {
      filter = arg1;
      instructions = arg2;
      return mapWithFilter(target, filter, instructions);
    } else {
      instructions = arg1;
    }
  }
  for (const key of Object.keys(instructions)) {
    if (!Array.isArray(instructions[key])) {
      target[key] = instructions[key];
      continue;
    }
    applyInstruction(target, null, instructions, key);
  }
  return target;
}
__name(map, "map");
var mapWithFilter = /* @__PURE__ */ __name((target, filter, instructions) => {
  return map(target, Object.entries(instructions).reduce((_instructions, [key, value]) => {
    if (Array.isArray(value)) {
      _instructions[key] = value;
    } else {
      if (typeof value === "function") {
        _instructions[key] = [filter, value()];
      } else {
        _instructions[key] = [filter, value];
      }
    }
    return _instructions;
  }, {}));
}, "mapWithFilter");
var applyInstruction = /* @__PURE__ */ __name((target, source, instructions, targetKey) => {
  if (source !== null) {
    let instruction = instructions[targetKey];
    if (typeof instruction === "function") {
      instruction = [, instruction];
    }
    const [filter2 = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
    if (typeof filter2 === "function" && filter2(source[sourceKey]) || typeof filter2 !== "function" && !!filter2) {
      target[targetKey] = valueFn(source[sourceKey]);
    }
    return;
  }
  let [filter, value] = instructions[targetKey];
  if (typeof value === "function") {
    let _value;
    const defaultFilterPassed = filter === void 0 && (_value = value()) != null;
    const customFilterPassed = typeof filter === "function" && !!filter(void 0) || typeof filter !== "function" && !!filter;
    if (defaultFilterPassed) {
      target[targetKey] = _value;
    } else if (customFilterPassed) {
      target[targetKey] = value();
    }
  } else {
    const defaultFilterPassed = filter === void 0 && value != null;
    const customFilterPassed = typeof filter === "function" && !!filter(value) || typeof filter !== "function" && !!filter;
    if (defaultFilterPassed || customFilterPassed) {
      target[targetKey] = value;
    }
  }
}, "applyInstruction");
var nonNullish = /* @__PURE__ */ __name((_) => _ != null, "nonNullish");
var pass = /* @__PURE__ */ __name((_) => _, "pass");

// node_modules/@smithy/smithy-client/dist-es/ser-utils.js
var serializeDateTime = /* @__PURE__ */ __name((date) => date.toISOString().replace(".000Z", "Z"), "serializeDateTime");

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js
var collectBodyString = /* @__PURE__ */ __name((streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body)), "collectBodyString");

// node_modules/fast-xml-parser/src/util.js
var nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
var nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
var nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
var regexName = new RegExp("^" + nameRegexp + "$");
function getAllMatches(string, regex) {
  const matches = [];
  let match = regex.exec(string);
  while (match) {
    const allmatches = [];
    allmatches.startIndex = regex.lastIndex - match[0].length;
    const len = match.length;
    for (let index = 0; index < len; index++) {
      allmatches.push(match[index]);
    }
    matches.push(allmatches);
    match = regex.exec(string);
  }
  return matches;
}
__name(getAllMatches, "getAllMatches");
var isName = /* @__PURE__ */ __name(function(string) {
  const match = regexName.exec(string);
  return !(match === null || typeof match === "undefined");
}, "isName");
function isExist(v2) {
  return typeof v2 !== "undefined";
}
__name(isExist, "isExist");

// node_modules/fast-xml-parser/src/validator.js
var defaultOptions = {
  allowBooleanAttributes: false,
  //A tag can have attributes without any value
  unpairedTags: []
};
function validate(xmlData, options) {
  options = Object.assign({}, defaultOptions, options);
  const tags = [];
  let tagFound = false;
  let reachedRoot = false;
  if (xmlData[0] === "\uFEFF") {
    xmlData = xmlData.substr(1);
  }
  for (let i2 = 0; i2 < xmlData.length; i2++) {
    if (xmlData[i2] === "<" && xmlData[i2 + 1] === "?") {
      i2 += 2;
      i2 = readPI(xmlData, i2);
      if (i2.err) return i2;
    } else if (xmlData[i2] === "<") {
      let tagStartPos = i2;
      i2++;
      if (xmlData[i2] === "!") {
        i2 = readCommentAndCDATA(xmlData, i2);
        continue;
      } else {
        let closingTag = false;
        if (xmlData[i2] === "/") {
          closingTag = true;
          i2++;
        }
        let tagName = "";
        for (; i2 < xmlData.length && xmlData[i2] !== ">" && xmlData[i2] !== " " && xmlData[i2] !== "	" && xmlData[i2] !== "\n" && xmlData[i2] !== "\r"; i2++) {
          tagName += xmlData[i2];
        }
        tagName = tagName.trim();
        if (tagName[tagName.length - 1] === "/") {
          tagName = tagName.substring(0, tagName.length - 1);
          i2--;
        }
        if (!validateTagName(tagName)) {
          let msg;
          if (tagName.trim().length === 0) {
            msg = "Invalid space after '<'.";
          } else {
            msg = "Tag '" + tagName + "' is an invalid name.";
          }
          return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i2));
        }
        const result = readAttributeStr(xmlData, i2);
        if (result === false) {
          return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i2));
        }
        let attrStr = result.value;
        i2 = result.index;
        if (attrStr[attrStr.length - 1] === "/") {
          const attrStrStart = i2 - attrStr.length;
          attrStr = attrStr.substring(0, attrStr.length - 1);
          const isValid = validateAttributeString(attrStr, options);
          if (isValid === true) {
            tagFound = true;
          } else {
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
          }
        } else if (closingTag) {
          if (!result.tagClosed) {
            return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i2));
          } else if (attrStr.trim().length > 0) {
            return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
          } else if (tags.length === 0) {
            return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' has not been opened.", getLineNumberForPosition(xmlData, tagStartPos));
          } else {
            const otg = tags.pop();
            if (tagName !== otg.tagName) {
              let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
              return getErrorObject(
                "InvalidTag",
                "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.",
                getLineNumberForPosition(xmlData, tagStartPos)
              );
            }
            if (tags.length == 0) {
              reachedRoot = true;
            }
          }
        } else {
          const isValid = validateAttributeString(attrStr, options);
          if (isValid !== true) {
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i2 - attrStr.length + isValid.err.line));
          }
          if (reachedRoot === true) {
            return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i2));
          } else if (options.unpairedTags.indexOf(tagName) !== -1) {
          } else {
            tags.push({ tagName, tagStartPos });
          }
          tagFound = true;
        }
        for (i2++; i2 < xmlData.length; i2++) {
          if (xmlData[i2] === "<") {
            if (xmlData[i2 + 1] === "!") {
              i2++;
              i2 = readCommentAndCDATA(xmlData, i2);
              continue;
            } else if (xmlData[i2 + 1] === "?") {
              i2 = readPI(xmlData, ++i2);
              if (i2.err) return i2;
            } else {
              break;
            }
          } else if (xmlData[i2] === "&") {
            const afterAmp = validateAmpersand(xmlData, i2);
            if (afterAmp == -1)
              return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i2));
            i2 = afterAmp;
          } else {
            if (reachedRoot === true && !isWhiteSpace(xmlData[i2])) {
              return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i2));
            }
          }
        }
        if (xmlData[i2] === "<") {
          i2--;
        }
      }
    } else {
      if (isWhiteSpace(xmlData[i2])) {
        continue;
      }
      return getErrorObject("InvalidChar", "char '" + xmlData[i2] + "' is not expected.", getLineNumberForPosition(xmlData, i2));
    }
  }
  if (!tagFound) {
    return getErrorObject("InvalidXml", "Start tag expected.", 1);
  } else if (tags.length == 1) {
    return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
  } else if (tags.length > 0) {
    return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t2) => t2.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  }
  return true;
}
__name(validate, "validate");
function isWhiteSpace(char) {
  return char === " " || char === "	" || char === "\n" || char === "\r";
}
__name(isWhiteSpace, "isWhiteSpace");
function readPI(xmlData, i2) {
  const start = i2;
  for (; i2 < xmlData.length; i2++) {
    if (xmlData[i2] == "?" || xmlData[i2] == " ") {
      const tagname = xmlData.substr(start, i2 - start);
      if (i2 > 5 && tagname === "xml") {
        return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i2));
      } else if (xmlData[i2] == "?" && xmlData[i2 + 1] == ">") {
        i2++;
        break;
      } else {
        continue;
      }
    }
  }
  return i2;
}
__name(readPI, "readPI");
function readCommentAndCDATA(xmlData, i2) {
  if (xmlData.length > i2 + 5 && xmlData[i2 + 1] === "-" && xmlData[i2 + 2] === "-") {
    for (i2 += 3; i2 < xmlData.length; i2++) {
      if (xmlData[i2] === "-" && xmlData[i2 + 1] === "-" && xmlData[i2 + 2] === ">") {
        i2 += 2;
        break;
      }
    }
  } else if (xmlData.length > i2 + 8 && xmlData[i2 + 1] === "D" && xmlData[i2 + 2] === "O" && xmlData[i2 + 3] === "C" && xmlData[i2 + 4] === "T" && xmlData[i2 + 5] === "Y" && xmlData[i2 + 6] === "P" && xmlData[i2 + 7] === "E") {
    let angleBracketsCount = 1;
    for (i2 += 8; i2 < xmlData.length; i2++) {
      if (xmlData[i2] === "<") {
        angleBracketsCount++;
      } else if (xmlData[i2] === ">") {
        angleBracketsCount--;
        if (angleBracketsCount === 0) {
          break;
        }
      }
    }
  } else if (xmlData.length > i2 + 9 && xmlData[i2 + 1] === "[" && xmlData[i2 + 2] === "C" && xmlData[i2 + 3] === "D" && xmlData[i2 + 4] === "A" && xmlData[i2 + 5] === "T" && xmlData[i2 + 6] === "A" && xmlData[i2 + 7] === "[") {
    for (i2 += 8; i2 < xmlData.length; i2++) {
      if (xmlData[i2] === "]" && xmlData[i2 + 1] === "]" && xmlData[i2 + 2] === ">") {
        i2 += 2;
        break;
      }
    }
  }
  return i2;
}
__name(readCommentAndCDATA, "readCommentAndCDATA");
var doubleQuote = '"';
var singleQuote = "'";
function readAttributeStr(xmlData, i2) {
  let attrStr = "";
  let startChar = "";
  let tagClosed = false;
  for (; i2 < xmlData.length; i2++) {
    if (xmlData[i2] === doubleQuote || xmlData[i2] === singleQuote) {
      if (startChar === "") {
        startChar = xmlData[i2];
      } else if (startChar !== xmlData[i2]) {
      } else {
        startChar = "";
      }
    } else if (xmlData[i2] === ">") {
      if (startChar === "") {
        tagClosed = true;
        break;
      }
    }
    attrStr += xmlData[i2];
  }
  if (startChar !== "") {
    return false;
  }
  return {
    value: attrStr,
    index: i2,
    tagClosed
  };
}
__name(readAttributeStr, "readAttributeStr");
var validAttrStrRegxp = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function validateAttributeString(attrStr, options) {
  const matches = getAllMatches(attrStr, validAttrStrRegxp);
  const attrNames = {};
  for (let i2 = 0; i2 < matches.length; i2++) {
    if (matches[i2][1].length === 0) {
      return getErrorObject("InvalidAttr", "Attribute '" + matches[i2][2] + "' has no space in starting.", getPositionFromMatch(matches[i2]));
    } else if (matches[i2][3] !== void 0 && matches[i2][4] === void 0) {
      return getErrorObject("InvalidAttr", "Attribute '" + matches[i2][2] + "' is without value.", getPositionFromMatch(matches[i2]));
    } else if (matches[i2][3] === void 0 && !options.allowBooleanAttributes) {
      return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i2][2] + "' is not allowed.", getPositionFromMatch(matches[i2]));
    }
    const attrName = matches[i2][2];
    if (!validateAttrName(attrName)) {
      return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i2]));
    }
    if (!Object.prototype.hasOwnProperty.call(attrNames, attrName)) {
      attrNames[attrName] = 1;
    } else {
      return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i2]));
    }
  }
  return true;
}
__name(validateAttributeString, "validateAttributeString");
function validateNumberAmpersand(xmlData, i2) {
  let re = /\d/;
  if (xmlData[i2] === "x") {
    i2++;
    re = /[\da-fA-F]/;
  }
  for (; i2 < xmlData.length; i2++) {
    if (xmlData[i2] === ";")
      return i2;
    if (!xmlData[i2].match(re))
      break;
  }
  return -1;
}
__name(validateNumberAmpersand, "validateNumberAmpersand");
function validateAmpersand(xmlData, i2) {
  i2++;
  if (xmlData[i2] === ";")
    return -1;
  if (xmlData[i2] === "#") {
    i2++;
    return validateNumberAmpersand(xmlData, i2);
  }
  let count = 0;
  for (; i2 < xmlData.length; i2++, count++) {
    if (xmlData[i2].match(/\w/) && count < 20)
      continue;
    if (xmlData[i2] === ";")
      break;
    return -1;
  }
  return i2;
}
__name(validateAmpersand, "validateAmpersand");
function getErrorObject(code, message, lineNumber) {
  return {
    err: {
      code,
      msg: message,
      line: lineNumber.line || lineNumber,
      col: lineNumber.col
    }
  };
}
__name(getErrorObject, "getErrorObject");
function validateAttrName(attrName) {
  return isName(attrName);
}
__name(validateAttrName, "validateAttrName");
function validateTagName(tagname) {
  return isName(tagname);
}
__name(validateTagName, "validateTagName");
function getLineNumberForPosition(xmlData, index) {
  const lines = xmlData.substring(0, index).split(/\r?\n/);
  return {
    line: lines.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: lines[lines.length - 1].length + 1
  };
}
__name(getLineNumberForPosition, "getLineNumberForPosition");
function getPositionFromMatch(match) {
  return match.startIndex + match[1].length;
}
__name(getPositionFromMatch, "getPositionFromMatch");

// node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js
var defaultOptions2 = {
  preserveOrder: false,
  attributeNamePrefix: "@_",
  attributesGroupName: false,
  textNodeName: "#text",
  ignoreAttributes: true,
  removeNSPrefix: false,
  // remove NS from tag name or attribute name if true
  allowBooleanAttributes: false,
  //a tag can have attributes without any value
  //ignoreRootElement : false,
  parseTagValue: true,
  parseAttributeValue: false,
  trimValues: true,
  //Trim string values of tag and attributes
  cdataPropName: false,
  numberParseOptions: {
    hex: true,
    leadingZeros: true,
    eNotation: true
  },
  tagValueProcessor: /* @__PURE__ */ __name(function(tagName, val) {
    return val;
  }, "tagValueProcessor"),
  attributeValueProcessor: /* @__PURE__ */ __name(function(attrName, val) {
    return val;
  }, "attributeValueProcessor"),
  stopNodes: [],
  //nested tags will not be parsed even for errors
  alwaysCreateTextNode: false,
  isArray: /* @__PURE__ */ __name(() => false, "isArray"),
  commentPropName: false,
  unpairedTags: [],
  processEntities: true,
  htmlEntities: false,
  ignoreDeclaration: false,
  ignorePiTags: false,
  transformTagName: false,
  transformAttributeName: false,
  updateTag: /* @__PURE__ */ __name(function(tagName, jPath, attrs) {
    return tagName;
  }, "updateTag"),
  // skipEmptyListItem: false
  captureMetaData: false,
  maxNestedTags: 100,
  strictReservedNames: true
};
function normalizeProcessEntities(value) {
  if (typeof value === "boolean") {
    return {
      enabled: value,
      // true or false
      maxEntitySize: 1e4,
      maxExpansionDepth: 10,
      maxTotalExpansions: 1e3,
      maxExpandedLength: 1e5,
      allowedTags: null,
      tagFilter: null
    };
  }
  if (typeof value === "object" && value !== null) {
    return {
      enabled: value.enabled !== false,
      // default true if not specified
      maxEntitySize: value.maxEntitySize ?? 1e4,
      maxExpansionDepth: value.maxExpansionDepth ?? 10,
      maxTotalExpansions: value.maxTotalExpansions ?? 1e3,
      maxExpandedLength: value.maxExpandedLength ?? 1e5,
      allowedTags: value.allowedTags ?? null,
      tagFilter: value.tagFilter ?? null
    };
  }
  return normalizeProcessEntities(true);
}
__name(normalizeProcessEntities, "normalizeProcessEntities");
var buildOptions = /* @__PURE__ */ __name(function(options) {
  const built = Object.assign({}, defaultOptions2, options);
  built.processEntities = normalizeProcessEntities(built.processEntities);
  return built;
}, "buildOptions");

// node_modules/fast-xml-parser/src/xmlparser/xmlNode.js
var METADATA_SYMBOL;
if (typeof Symbol !== "function") {
  METADATA_SYMBOL = "@@xmlMetadata";
} else {
  METADATA_SYMBOL = /* @__PURE__ */ Symbol("XML Node Metadata");
}
var XmlNode = class {
  static {
    __name(this, "XmlNode");
  }
  constructor(tagname) {
    this.tagname = tagname;
    this.child = [];
    this[":@"] = /* @__PURE__ */ Object.create(null);
  }
  add(key, val) {
    if (key === "__proto__") key = "#__proto__";
    this.child.push({ [key]: val });
  }
  addChild(node, startIndex) {
    if (node.tagname === "__proto__") node.tagname = "#__proto__";
    if (node[":@"] && Object.keys(node[":@"]).length > 0) {
      this.child.push({ [node.tagname]: node.child, [":@"]: node[":@"] });
    } else {
      this.child.push({ [node.tagname]: node.child });
    }
    if (startIndex !== void 0) {
      this.child[this.child.length - 1][METADATA_SYMBOL] = { startIndex };
    }
  }
  /** symbol used for metadata */
  static getMetaDataSymbol() {
    return METADATA_SYMBOL;
  }
};

// node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js
var DocTypeReader = class {
  static {
    __name(this, "DocTypeReader");
  }
  constructor(options) {
    this.suppressValidationErr = !options;
    this.options = options;
  }
  readDocType(xmlData, i2) {
    const entities = /* @__PURE__ */ Object.create(null);
    if (xmlData[i2 + 3] === "O" && xmlData[i2 + 4] === "C" && xmlData[i2 + 5] === "T" && xmlData[i2 + 6] === "Y" && xmlData[i2 + 7] === "P" && xmlData[i2 + 8] === "E") {
      i2 = i2 + 9;
      let angleBracketsCount = 1;
      let hasBody = false, comment = false;
      let exp = "";
      for (; i2 < xmlData.length; i2++) {
        if (xmlData[i2] === "<" && !comment) {
          if (hasBody && hasSeq(xmlData, "!ENTITY", i2)) {
            i2 += 7;
            let entityName, val;
            [entityName, val, i2] = this.readEntityExp(xmlData, i2 + 1, this.suppressValidationErr);
            if (val.indexOf("&") === -1) {
              const escaped = entityName.replace(/[.\-+*:]/g, "\\.");
              entities[entityName] = {
                regx: RegExp(`&${escaped};`, "g"),
                val
              };
            }
          } else if (hasBody && hasSeq(xmlData, "!ELEMENT", i2)) {
            i2 += 8;
            const { index } = this.readElementExp(xmlData, i2 + 1);
            i2 = index;
          } else if (hasBody && hasSeq(xmlData, "!ATTLIST", i2)) {
            i2 += 8;
          } else if (hasBody && hasSeq(xmlData, "!NOTATION", i2)) {
            i2 += 9;
            const { index } = this.readNotationExp(xmlData, i2 + 1, this.suppressValidationErr);
            i2 = index;
          } else if (hasSeq(xmlData, "!--", i2)) comment = true;
          else throw new Error(`Invalid DOCTYPE`);
          angleBracketsCount++;
          exp = "";
        } else if (xmlData[i2] === ">") {
          if (comment) {
            if (xmlData[i2 - 1] === "-" && xmlData[i2 - 2] === "-") {
              comment = false;
              angleBracketsCount--;
            }
          } else {
            angleBracketsCount--;
          }
          if (angleBracketsCount === 0) {
            break;
          }
        } else if (xmlData[i2] === "[") {
          hasBody = true;
        } else {
          exp += xmlData[i2];
        }
      }
      if (angleBracketsCount !== 0) {
        throw new Error(`Unclosed DOCTYPE`);
      }
    } else {
      throw new Error(`Invalid Tag instead of DOCTYPE`);
    }
    return { entities, i: i2 };
  }
  readEntityExp(xmlData, i2) {
    i2 = skipWhitespace(xmlData, i2);
    let entityName = "";
    while (i2 < xmlData.length && !/\s/.test(xmlData[i2]) && xmlData[i2] !== '"' && xmlData[i2] !== "'") {
      entityName += xmlData[i2];
      i2++;
    }
    validateEntityName(entityName);
    i2 = skipWhitespace(xmlData, i2);
    if (!this.suppressValidationErr) {
      if (xmlData.substring(i2, i2 + 6).toUpperCase() === "SYSTEM") {
        throw new Error("External entities are not supported");
      } else if (xmlData[i2] === "%") {
        throw new Error("Parameter entities are not supported");
      }
    }
    let entityValue = "";
    [i2, entityValue] = this.readIdentifierVal(xmlData, i2, "entity");
    if (this.options.enabled !== false && this.options.maxEntitySize && entityValue.length > this.options.maxEntitySize) {
      throw new Error(
        `Entity "${entityName}" size (${entityValue.length}) exceeds maximum allowed size (${this.options.maxEntitySize})`
      );
    }
    i2--;
    return [entityName, entityValue, i2];
  }
  readNotationExp(xmlData, i2) {
    i2 = skipWhitespace(xmlData, i2);
    let notationName = "";
    while (i2 < xmlData.length && !/\s/.test(xmlData[i2])) {
      notationName += xmlData[i2];
      i2++;
    }
    !this.suppressValidationErr && validateEntityName(notationName);
    i2 = skipWhitespace(xmlData, i2);
    const identifierType = xmlData.substring(i2, i2 + 6).toUpperCase();
    if (!this.suppressValidationErr && identifierType !== "SYSTEM" && identifierType !== "PUBLIC") {
      throw new Error(`Expected SYSTEM or PUBLIC, found "${identifierType}"`);
    }
    i2 += identifierType.length;
    i2 = skipWhitespace(xmlData, i2);
    let publicIdentifier = null;
    let systemIdentifier = null;
    if (identifierType === "PUBLIC") {
      [i2, publicIdentifier] = this.readIdentifierVal(xmlData, i2, "publicIdentifier");
      i2 = skipWhitespace(xmlData, i2);
      if (xmlData[i2] === '"' || xmlData[i2] === "'") {
        [i2, systemIdentifier] = this.readIdentifierVal(xmlData, i2, "systemIdentifier");
      }
    } else if (identifierType === "SYSTEM") {
      [i2, systemIdentifier] = this.readIdentifierVal(xmlData, i2, "systemIdentifier");
      if (!this.suppressValidationErr && !systemIdentifier) {
        throw new Error("Missing mandatory system identifier for SYSTEM notation");
      }
    }
    return { notationName, publicIdentifier, systemIdentifier, index: --i2 };
  }
  readIdentifierVal(xmlData, i2, type) {
    let identifierVal = "";
    const startChar = xmlData[i2];
    if (startChar !== '"' && startChar !== "'") {
      throw new Error(`Expected quoted string, found "${startChar}"`);
    }
    i2++;
    while (i2 < xmlData.length && xmlData[i2] !== startChar) {
      identifierVal += xmlData[i2];
      i2++;
    }
    if (xmlData[i2] !== startChar) {
      throw new Error(`Unterminated ${type} value`);
    }
    i2++;
    return [i2, identifierVal];
  }
  readElementExp(xmlData, i2) {
    i2 = skipWhitespace(xmlData, i2);
    let elementName = "";
    while (i2 < xmlData.length && !/\s/.test(xmlData[i2])) {
      elementName += xmlData[i2];
      i2++;
    }
    if (!this.suppressValidationErr && !isName(elementName)) {
      throw new Error(`Invalid element name: "${elementName}"`);
    }
    i2 = skipWhitespace(xmlData, i2);
    let contentModel = "";
    if (xmlData[i2] === "E" && hasSeq(xmlData, "MPTY", i2)) i2 += 4;
    else if (xmlData[i2] === "A" && hasSeq(xmlData, "NY", i2)) i2 += 2;
    else if (xmlData[i2] === "(") {
      i2++;
      while (i2 < xmlData.length && xmlData[i2] !== ")") {
        contentModel += xmlData[i2];
        i2++;
      }
      if (xmlData[i2] !== ")") {
        throw new Error("Unterminated content model");
      }
    } else if (!this.suppressValidationErr) {
      throw new Error(`Invalid Element Expression, found "${xmlData[i2]}"`);
    }
    return {
      elementName,
      contentModel: contentModel.trim(),
      index: i2
    };
  }
  readAttlistExp(xmlData, i2) {
    i2 = skipWhitespace(xmlData, i2);
    let elementName = "";
    while (i2 < xmlData.length && !/\s/.test(xmlData[i2])) {
      elementName += xmlData[i2];
      i2++;
    }
    validateEntityName(elementName);
    i2 = skipWhitespace(xmlData, i2);
    let attributeName = "";
    while (i2 < xmlData.length && !/\s/.test(xmlData[i2])) {
      attributeName += xmlData[i2];
      i2++;
    }
    if (!validateEntityName(attributeName)) {
      throw new Error(`Invalid attribute name: "${attributeName}"`);
    }
    i2 = skipWhitespace(xmlData, i2);
    let attributeType = "";
    if (xmlData.substring(i2, i2 + 8).toUpperCase() === "NOTATION") {
      attributeType = "NOTATION";
      i2 += 8;
      i2 = skipWhitespace(xmlData, i2);
      if (xmlData[i2] !== "(") {
        throw new Error(`Expected '(', found "${xmlData[i2]}"`);
      }
      i2++;
      let allowedNotations = [];
      while (i2 < xmlData.length && xmlData[i2] !== ")") {
        let notation = "";
        while (i2 < xmlData.length && xmlData[i2] !== "|" && xmlData[i2] !== ")") {
          notation += xmlData[i2];
          i2++;
        }
        notation = notation.trim();
        if (!validateEntityName(notation)) {
          throw new Error(`Invalid notation name: "${notation}"`);
        }
        allowedNotations.push(notation);
        if (xmlData[i2] === "|") {
          i2++;
          i2 = skipWhitespace(xmlData, i2);
        }
      }
      if (xmlData[i2] !== ")") {
        throw new Error("Unterminated list of notations");
      }
      i2++;
      attributeType += " (" + allowedNotations.join("|") + ")";
    } else {
      while (i2 < xmlData.length && !/\s/.test(xmlData[i2])) {
        attributeType += xmlData[i2];
        i2++;
      }
      const validTypes = ["CDATA", "ID", "IDREF", "IDREFS", "ENTITY", "ENTITIES", "NMTOKEN", "NMTOKENS"];
      if (!this.suppressValidationErr && !validTypes.includes(attributeType.toUpperCase())) {
        throw new Error(`Invalid attribute type: "${attributeType}"`);
      }
    }
    i2 = skipWhitespace(xmlData, i2);
    let defaultValue = "";
    if (xmlData.substring(i2, i2 + 8).toUpperCase() === "#REQUIRED") {
      defaultValue = "#REQUIRED";
      i2 += 8;
    } else if (xmlData.substring(i2, i2 + 7).toUpperCase() === "#IMPLIED") {
      defaultValue = "#IMPLIED";
      i2 += 7;
    } else {
      [i2, defaultValue] = this.readIdentifierVal(xmlData, i2, "ATTLIST");
    }
    return {
      elementName,
      attributeName,
      attributeType,
      defaultValue,
      index: i2
    };
  }
};
var skipWhitespace = /* @__PURE__ */ __name((data, index) => {
  while (index < data.length && /\s/.test(data[index])) {
    index++;
  }
  return index;
}, "skipWhitespace");
function hasSeq(data, seq, i2) {
  for (let j2 = 0; j2 < seq.length; j2++) {
    if (seq[j2] !== data[i2 + j2 + 1]) return false;
  }
  return true;
}
__name(hasSeq, "hasSeq");
function validateEntityName(name) {
  if (isName(name))
    return name;
  else
    throw new Error(`Invalid entity name ${name}`);
}
__name(validateEntityName, "validateEntityName");

// node_modules/strnum/strnum.js
var hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
var numRegex = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/;
var consider = {
  hex: true,
  // oct: false,
  leadingZeros: true,
  decimalPoint: ".",
  eNotation: true
  //skipLike: /regex/
};
function toNumber(str, options = {}) {
  options = Object.assign({}, consider, options);
  if (!str || typeof str !== "string") return str;
  let trimmedStr = str.trim();
  if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr)) return str;
  else if (str === "0") return 0;
  else if (options.hex && hexRegex.test(trimmedStr)) {
    return parse_int(trimmedStr, 16);
  } else if (trimmedStr.includes("e") || trimmedStr.includes("E")) {
    return resolveEnotation(str, trimmedStr, options);
  } else {
    const match = numRegex.exec(trimmedStr);
    if (match) {
      const sign = match[1] || "";
      const leadingZeros = match[2];
      let numTrimmedByZeros = trimZeros(match[3]);
      const decimalAdjacentToLeadingZeros = sign ? (
        // 0., -00., 000.
        str[leadingZeros.length + 1] === "."
      ) : str[leadingZeros.length] === ".";
      if (!options.leadingZeros && (leadingZeros.length > 1 || leadingZeros.length === 1 && !decimalAdjacentToLeadingZeros)) {
        return str;
      } else {
        const num = Number(trimmedStr);
        const parsedStr = String(num);
        if (num === 0) return num;
        if (parsedStr.search(/[eE]/) !== -1) {
          if (options.eNotation) return num;
          else return str;
        } else if (trimmedStr.indexOf(".") !== -1) {
          if (parsedStr === "0") return num;
          else if (parsedStr === numTrimmedByZeros) return num;
          else if (parsedStr === `${sign}${numTrimmedByZeros}`) return num;
          else return str;
        }
        let n2 = leadingZeros ? numTrimmedByZeros : trimmedStr;
        if (leadingZeros) {
          return n2 === parsedStr || sign + n2 === parsedStr ? num : str;
        } else {
          return n2 === parsedStr || n2 === sign + parsedStr ? num : str;
        }
      }
    } else {
      return str;
    }
  }
}
__name(toNumber, "toNumber");
var eNotationRegx = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
function resolveEnotation(str, trimmedStr, options) {
  if (!options.eNotation) return str;
  const notation = trimmedStr.match(eNotationRegx);
  if (notation) {
    let sign = notation[1] || "";
    const eChar = notation[3].indexOf("e") === -1 ? "E" : "e";
    const leadingZeros = notation[2];
    const eAdjacentToLeadingZeros = sign ? (
      // 0E.
      str[leadingZeros.length + 1] === eChar
    ) : str[leadingZeros.length] === eChar;
    if (leadingZeros.length > 1 && eAdjacentToLeadingZeros) return str;
    else if (leadingZeros.length === 1 && (notation[3].startsWith(`.${eChar}`) || notation[3][0] === eChar)) {
      return Number(trimmedStr);
    } else if (options.leadingZeros && !eAdjacentToLeadingZeros) {
      trimmedStr = (notation[1] || "") + notation[3];
      return Number(trimmedStr);
    } else return str;
  } else {
    return str;
  }
}
__name(resolveEnotation, "resolveEnotation");
function trimZeros(numStr) {
  if (numStr && numStr.indexOf(".") !== -1) {
    numStr = numStr.replace(/0+$/, "");
    if (numStr === ".") numStr = "0";
    else if (numStr[0] === ".") numStr = "0" + numStr;
    else if (numStr[numStr.length - 1] === ".") numStr = numStr.substring(0, numStr.length - 1);
    return numStr;
  }
  return numStr;
}
__name(trimZeros, "trimZeros");
function parse_int(numStr, base) {
  if (parseInt) return parseInt(numStr, base);
  else if (Number.parseInt) return Number.parseInt(numStr, base);
  else if (window && window.parseInt) return window.parseInt(numStr, base);
  else throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
__name(parse_int, "parse_int");

// node_modules/fast-xml-parser/src/ignoreAttributes.js
function getIgnoreAttributesFn(ignoreAttributes) {
  if (typeof ignoreAttributes === "function") {
    return ignoreAttributes;
  }
  if (Array.isArray(ignoreAttributes)) {
    return (attrName) => {
      for (const pattern of ignoreAttributes) {
        if (typeof pattern === "string" && attrName === pattern) {
          return true;
        }
        if (pattern instanceof RegExp && pattern.test(attrName)) {
          return true;
        }
      }
    };
  }
  return () => false;
}
__name(getIgnoreAttributesFn, "getIgnoreAttributesFn");

// node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js
var OrderedObjParser = class {
  static {
    __name(this, "OrderedObjParser");
  }
  constructor(options) {
    this.options = options;
    this.currentNode = null;
    this.tagsNodeStack = [];
    this.docTypeEntities = {};
    this.lastEntities = {
      "apos": { regex: /&(apos|#39|#x27);/g, val: "'" },
      "gt": { regex: /&(gt|#62|#x3E);/g, val: ">" },
      "lt": { regex: /&(lt|#60|#x3C);/g, val: "<" },
      "quot": { regex: /&(quot|#34|#x22);/g, val: '"' }
    };
    this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" };
    this.htmlEntities = {
      "space": { regex: /&(nbsp|#160);/g, val: " " },
      // "lt" : { regex: /&(lt|#60);/g, val: "<" },
      // "gt" : { regex: /&(gt|#62);/g, val: ">" },
      // "amp" : { regex: /&(amp|#38);/g, val: "&" },
      // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
      // "apos" : { regex: /&(apos|#39);/g, val: "'" },
      "cent": { regex: /&(cent|#162);/g, val: "\xA2" },
      "pound": { regex: /&(pound|#163);/g, val: "\xA3" },
      "yen": { regex: /&(yen|#165);/g, val: "\xA5" },
      "euro": { regex: /&(euro|#8364);/g, val: "\u20AC" },
      "copyright": { regex: /&(copy|#169);/g, val: "\xA9" },
      "reg": { regex: /&(reg|#174);/g, val: "\xAE" },
      "inr": { regex: /&(inr|#8377);/g, val: "\u20B9" },
      "num_dec": { regex: /&#([0-9]{1,7});/g, val: /* @__PURE__ */ __name((_, str) => fromCodePoint(str, 10, "&#"), "val") },
      "num_hex": { regex: /&#x([0-9a-fA-F]{1,6});/g, val: /* @__PURE__ */ __name((_, str) => fromCodePoint(str, 16, "&#x"), "val") }
    };
    this.addExternalEntities = addExternalEntities;
    this.parseXml = parseXml;
    this.parseTextData = parseTextData;
    this.resolveNameSpace = resolveNameSpace;
    this.buildAttributesMap = buildAttributesMap;
    this.isItStopNode = isItStopNode;
    this.replaceEntitiesValue = replaceEntitiesValue;
    this.readStopNodeData = readStopNodeData;
    this.saveTextToParentTag = saveTextToParentTag;
    this.addChild = addChild;
    this.ignoreAttributesFn = getIgnoreAttributesFn(this.options.ignoreAttributes);
    this.entityExpansionCount = 0;
    this.currentExpandedLength = 0;
    if (this.options.stopNodes && this.options.stopNodes.length > 0) {
      this.stopNodesExact = /* @__PURE__ */ new Set();
      this.stopNodesWildcard = /* @__PURE__ */ new Set();
      for (let i2 = 0; i2 < this.options.stopNodes.length; i2++) {
        const stopNodeExp = this.options.stopNodes[i2];
        if (typeof stopNodeExp !== "string") continue;
        if (stopNodeExp.startsWith("*.")) {
          this.stopNodesWildcard.add(stopNodeExp.substring(2));
        } else {
          this.stopNodesExact.add(stopNodeExp);
        }
      }
    }
  }
};
function addExternalEntities(externalEntities) {
  const entKeys = Object.keys(externalEntities);
  for (let i2 = 0; i2 < entKeys.length; i2++) {
    const ent = entKeys[i2];
    const escaped = ent.replace(/[.\-+*:]/g, "\\.");
    this.lastEntities[ent] = {
      regex: new RegExp("&" + escaped + ";", "g"),
      val: externalEntities[ent]
    };
  }
}
__name(addExternalEntities, "addExternalEntities");
function parseTextData(val, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
  if (val !== void 0) {
    if (this.options.trimValues && !dontTrim) {
      val = val.trim();
    }
    if (val.length > 0) {
      if (!escapeEntities) val = this.replaceEntitiesValue(val, tagName, jPath);
      const newval = this.options.tagValueProcessor(tagName, val, jPath, hasAttributes, isLeafNode);
      if (newval === null || newval === void 0) {
        return val;
      } else if (typeof newval !== typeof val || newval !== val) {
        return newval;
      } else if (this.options.trimValues) {
        return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
      } else {
        const trimmedVal = val.trim();
        if (trimmedVal === val) {
          return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
        } else {
          return val;
        }
      }
    }
  }
}
__name(parseTextData, "parseTextData");
function resolveNameSpace(tagname) {
  if (this.options.removeNSPrefix) {
    const tags = tagname.split(":");
    const prefix = tagname.charAt(0) === "/" ? "/" : "";
    if (tags[0] === "xmlns") {
      return "";
    }
    if (tags.length === 2) {
      tagname = prefix + tags[1];
    }
  }
  return tagname;
}
__name(resolveNameSpace, "resolveNameSpace");
var attrsRegx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function buildAttributesMap(attrStr, jPath, tagName) {
  if (this.options.ignoreAttributes !== true && typeof attrStr === "string") {
    const matches = getAllMatches(attrStr, attrsRegx);
    const len = matches.length;
    const attrs = {};
    for (let i2 = 0; i2 < len; i2++) {
      const attrName = this.resolveNameSpace(matches[i2][1]);
      if (this.ignoreAttributesFn(attrName, jPath)) {
        continue;
      }
      let oldVal = matches[i2][4];
      let aName = this.options.attributeNamePrefix + attrName;
      if (attrName.length) {
        if (this.options.transformAttributeName) {
          aName = this.options.transformAttributeName(aName);
        }
        if (aName === "__proto__") aName = "#__proto__";
        if (oldVal !== void 0) {
          if (this.options.trimValues) {
            oldVal = oldVal.trim();
          }
          oldVal = this.replaceEntitiesValue(oldVal, tagName, jPath);
          const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
          if (newVal === null || newVal === void 0) {
            attrs[aName] = oldVal;
          } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
            attrs[aName] = newVal;
          } else {
            attrs[aName] = parseValue(
              oldVal,
              this.options.parseAttributeValue,
              this.options.numberParseOptions
            );
          }
        } else if (this.options.allowBooleanAttributes) {
          attrs[aName] = true;
        }
      }
    }
    if (!Object.keys(attrs).length) {
      return;
    }
    if (this.options.attributesGroupName) {
      const attrCollection = {};
      attrCollection[this.options.attributesGroupName] = attrs;
      return attrCollection;
    }
    return attrs;
  }
}
__name(buildAttributesMap, "buildAttributesMap");
var parseXml = /* @__PURE__ */ __name(function(xmlData) {
  xmlData = xmlData.replace(/\r\n?/g, "\n");
  const xmlObj = new XmlNode("!xml");
  let currentNode = xmlObj;
  let textData = "";
  let jPath = "";
  this.entityExpansionCount = 0;
  this.currentExpandedLength = 0;
  const docTypeReader = new DocTypeReader(this.options.processEntities);
  for (let i2 = 0; i2 < xmlData.length; i2++) {
    const ch2 = xmlData[i2];
    if (ch2 === "<") {
      if (xmlData[i2 + 1] === "/") {
        const closeIndex = findClosingIndex(xmlData, ">", i2, "Closing Tag is not closed.");
        let tagName = xmlData.substring(i2 + 2, closeIndex).trim();
        if (this.options.removeNSPrefix) {
          const colonIndex = tagName.indexOf(":");
          if (colonIndex !== -1) {
            tagName = tagName.substr(colonIndex + 1);
          }
        }
        if (this.options.transformTagName) {
          tagName = this.options.transformTagName(tagName);
        }
        if (currentNode) {
          textData = this.saveTextToParentTag(textData, currentNode, jPath);
        }
        const lastTagName = jPath.substring(jPath.lastIndexOf(".") + 1);
        if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) {
          throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
        }
        let propIndex = 0;
        if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
          propIndex = jPath.lastIndexOf(".", jPath.lastIndexOf(".") - 1);
          this.tagsNodeStack.pop();
        } else {
          propIndex = jPath.lastIndexOf(".");
        }
        jPath = jPath.substring(0, propIndex);
        currentNode = this.tagsNodeStack.pop();
        textData = "";
        i2 = closeIndex;
      } else if (xmlData[i2 + 1] === "?") {
        let tagData = readTagExp(xmlData, i2, false, "?>");
        if (!tagData) throw new Error("Pi Tag is not closed.");
        textData = this.saveTextToParentTag(textData, currentNode, jPath);
        if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) {
        } else {
          const childNode = new XmlNode(tagData.tagName);
          childNode.add(this.options.textNodeName, "");
          if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
            childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
          }
          this.addChild(currentNode, childNode, jPath, i2);
        }
        i2 = tagData.closeIndex + 1;
      } else if (xmlData.substr(i2 + 1, 3) === "!--") {
        const endIndex = findClosingIndex(xmlData, "-->", i2 + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const comment = xmlData.substring(i2 + 4, endIndex - 2);
          textData = this.saveTextToParentTag(textData, currentNode, jPath);
          currentNode.add(this.options.commentPropName, [{ [this.options.textNodeName]: comment }]);
        }
        i2 = endIndex;
      } else if (xmlData.substr(i2 + 1, 2) === "!D") {
        const result = docTypeReader.readDocType(xmlData, i2);
        this.docTypeEntities = result.entities;
        i2 = result.i;
      } else if (xmlData.substr(i2 + 1, 2) === "![") {
        const closeIndex = findClosingIndex(xmlData, "]]>", i2, "CDATA is not closed.") - 2;
        const tagExp = xmlData.substring(i2 + 9, closeIndex);
        textData = this.saveTextToParentTag(textData, currentNode, jPath);
        let val = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true, true);
        if (val == void 0) val = "";
        if (this.options.cdataPropName) {
          currentNode.add(this.options.cdataPropName, [{ [this.options.textNodeName]: tagExp }]);
        } else {
          currentNode.add(this.options.textNodeName, val);
        }
        i2 = closeIndex + 2;
      } else {
        let result = readTagExp(xmlData, i2, this.options.removeNSPrefix);
        let tagName = result.tagName;
        const rawTagName = result.rawTagName;
        let tagExp = result.tagExp;
        let attrExpPresent = result.attrExpPresent;
        let closeIndex = result.closeIndex;
        if (this.options.transformTagName) {
          const newTagName = this.options.transformTagName(tagName);
          if (tagExp === tagName) {
            tagExp = newTagName;
          }
          tagName = newTagName;
        }
        if (this.options.strictReservedNames && (tagName === this.options.commentPropName || tagName === this.options.cdataPropName)) {
          throw new Error(`Invalid tag name: ${tagName}`);
        }
        if (currentNode && textData) {
          if (currentNode.tagname !== "!xml") {
            textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
          }
        }
        const lastTag = currentNode;
        if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
          currentNode = this.tagsNodeStack.pop();
          jPath = jPath.substring(0, jPath.lastIndexOf("."));
        }
        if (tagName !== xmlObj.tagname) {
          jPath += jPath ? "." + tagName : tagName;
        }
        const startIndex = i2;
        if (this.isItStopNode(this.stopNodesExact, this.stopNodesWildcard, jPath, tagName)) {
          let tagContent = "";
          if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
            if (tagName[tagName.length - 1] === "/") {
              tagName = tagName.substr(0, tagName.length - 1);
              jPath = jPath.substr(0, jPath.length - 1);
              tagExp = tagName;
            } else {
              tagExp = tagExp.substr(0, tagExp.length - 1);
            }
            i2 = result.closeIndex;
          } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
            i2 = result.closeIndex;
          } else {
            const result2 = this.readStopNodeData(xmlData, rawTagName, closeIndex + 1);
            if (!result2) throw new Error(`Unexpected end of ${rawTagName}`);
            i2 = result2.i;
            tagContent = result2.tagContent;
          }
          const childNode = new XmlNode(tagName);
          if (tagName !== tagExp && attrExpPresent) {
            childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
          }
          if (tagContent) {
            tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
          }
          jPath = jPath.substr(0, jPath.lastIndexOf("."));
          childNode.add(this.options.textNodeName, tagContent);
          this.addChild(currentNode, childNode, jPath, startIndex);
        } else {
          if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
            if (tagName[tagName.length - 1] === "/") {
              tagName = tagName.substr(0, tagName.length - 1);
              jPath = jPath.substr(0, jPath.length - 1);
              tagExp = tagName;
            } else {
              tagExp = tagExp.substr(0, tagExp.length - 1);
            }
            if (this.options.transformTagName) {
              const newTagName = this.options.transformTagName(tagName);
              if (tagExp === tagName) {
                tagExp = newTagName;
              }
              tagName = newTagName;
            }
            const childNode = new XmlNode(tagName);
            if (tagName !== tagExp && attrExpPresent) {
              childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
            }
            this.addChild(currentNode, childNode, jPath, startIndex);
            jPath = jPath.substr(0, jPath.lastIndexOf("."));
          } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
            const childNode = new XmlNode(tagName);
            if (tagName !== tagExp && attrExpPresent) {
              childNode[":@"] = this.buildAttributesMap(tagExp, jPath);
            }
            this.addChild(currentNode, childNode, jPath, startIndex);
            jPath = jPath.substr(0, jPath.lastIndexOf("."));
            i2 = result.closeIndex;
            continue;
          } else {
            const childNode = new XmlNode(tagName);
            if (this.tagsNodeStack.length > this.options.maxNestedTags) {
              throw new Error("Maximum nested tags exceeded");
            }
            this.tagsNodeStack.push(currentNode);
            if (tagName !== tagExp && attrExpPresent) {
              childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
            }
            this.addChild(currentNode, childNode, jPath, startIndex);
            currentNode = childNode;
          }
          textData = "";
          i2 = closeIndex;
        }
      }
    } else {
      textData += xmlData[i2];
    }
  }
  return xmlObj.child;
}, "parseXml");
function addChild(currentNode, childNode, jPath, startIndex) {
  if (!this.options.captureMetaData) startIndex = void 0;
  const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
  if (result === false) {
  } else if (typeof result === "string") {
    childNode.tagname = result;
    currentNode.addChild(childNode, startIndex);
  } else {
    currentNode.addChild(childNode, startIndex);
  }
}
__name(addChild, "addChild");
var replaceEntitiesValue = /* @__PURE__ */ __name(function(val, tagName, jPath) {
  if (val.indexOf("&") === -1) {
    return val;
  }
  const entityConfig = this.options.processEntities;
  if (!entityConfig.enabled) {
    return val;
  }
  if (entityConfig.allowedTags) {
    if (!entityConfig.allowedTags.includes(tagName)) {
      return val;
    }
  }
  if (entityConfig.tagFilter) {
    if (!entityConfig.tagFilter(tagName, jPath)) {
      return val;
    }
  }
  for (let entityName in this.docTypeEntities) {
    const entity = this.docTypeEntities[entityName];
    const matches = val.match(entity.regx);
    if (matches) {
      this.entityExpansionCount += matches.length;
      if (entityConfig.maxTotalExpansions && this.entityExpansionCount > entityConfig.maxTotalExpansions) {
        throw new Error(
          `Entity expansion limit exceeded: ${this.entityExpansionCount} > ${entityConfig.maxTotalExpansions}`
        );
      }
      const lengthBefore = val.length;
      val = val.replace(entity.regx, entity.val);
      if (entityConfig.maxExpandedLength) {
        this.currentExpandedLength += val.length - lengthBefore;
        if (this.currentExpandedLength > entityConfig.maxExpandedLength) {
          throw new Error(
            `Total expanded content size exceeded: ${this.currentExpandedLength} > ${entityConfig.maxExpandedLength}`
          );
        }
      }
    }
  }
  if (val.indexOf("&") === -1) return val;
  for (let entityName in this.lastEntities) {
    const entity = this.lastEntities[entityName];
    val = val.replace(entity.regex, entity.val);
  }
  if (val.indexOf("&") === -1) return val;
  if (this.options.htmlEntities) {
    for (let entityName in this.htmlEntities) {
      const entity = this.htmlEntities[entityName];
      val = val.replace(entity.regex, entity.val);
    }
  }
  val = val.replace(this.ampEntity.regex, this.ampEntity.val);
  return val;
}, "replaceEntitiesValue");
function saveTextToParentTag(textData, parentNode, jPath, isLeafNode) {
  if (textData) {
    if (isLeafNode === void 0) isLeafNode = parentNode.child.length === 0;
    textData = this.parseTextData(
      textData,
      parentNode.tagname,
      jPath,
      false,
      parentNode[":@"] ? Object.keys(parentNode[":@"]).length !== 0 : false,
      isLeafNode
    );
    if (textData !== void 0 && textData !== "")
      parentNode.add(this.options.textNodeName, textData);
    textData = "";
  }
  return textData;
}
__name(saveTextToParentTag, "saveTextToParentTag");
function isItStopNode(stopNodesExact, stopNodesWildcard, jPath, currentTagName) {
  if (stopNodesWildcard && stopNodesWildcard.has(currentTagName)) return true;
  if (stopNodesExact && stopNodesExact.has(jPath)) return true;
  return false;
}
__name(isItStopNode, "isItStopNode");
function tagExpWithClosingIndex(xmlData, i2, closingChar = ">") {
  let attrBoundary;
  let tagExp = "";
  for (let index = i2; index < xmlData.length; index++) {
    let ch2 = xmlData[index];
    if (attrBoundary) {
      if (ch2 === attrBoundary) attrBoundary = "";
    } else if (ch2 === '"' || ch2 === "'") {
      attrBoundary = ch2;
    } else if (ch2 === closingChar[0]) {
      if (closingChar[1]) {
        if (xmlData[index + 1] === closingChar[1]) {
          return {
            data: tagExp,
            index
          };
        }
      } else {
        return {
          data: tagExp,
          index
        };
      }
    } else if (ch2 === "	") {
      ch2 = " ";
    }
    tagExp += ch2;
  }
}
__name(tagExpWithClosingIndex, "tagExpWithClosingIndex");
function findClosingIndex(xmlData, str, i2, errMsg) {
  const closingIndex = xmlData.indexOf(str, i2);
  if (closingIndex === -1) {
    throw new Error(errMsg);
  } else {
    return closingIndex + str.length - 1;
  }
}
__name(findClosingIndex, "findClosingIndex");
function readTagExp(xmlData, i2, removeNSPrefix, closingChar = ">") {
  const result = tagExpWithClosingIndex(xmlData, i2 + 1, closingChar);
  if (!result) return;
  let tagExp = result.data;
  const closeIndex = result.index;
  const separatorIndex = tagExp.search(/\s/);
  let tagName = tagExp;
  let attrExpPresent = true;
  if (separatorIndex !== -1) {
    tagName = tagExp.substring(0, separatorIndex);
    tagExp = tagExp.substring(separatorIndex + 1).trimStart();
  }
  const rawTagName = tagName;
  if (removeNSPrefix) {
    const colonIndex = tagName.indexOf(":");
    if (colonIndex !== -1) {
      tagName = tagName.substr(colonIndex + 1);
      attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
    }
  }
  return {
    tagName,
    tagExp,
    closeIndex,
    attrExpPresent,
    rawTagName
  };
}
__name(readTagExp, "readTagExp");
function readStopNodeData(xmlData, tagName, i2) {
  const startIndex = i2;
  let openTagCount = 1;
  for (; i2 < xmlData.length; i2++) {
    if (xmlData[i2] === "<") {
      if (xmlData[i2 + 1] === "/") {
        const closeIndex = findClosingIndex(xmlData, ">", i2, `${tagName} is not closed`);
        let closeTagName = xmlData.substring(i2 + 2, closeIndex).trim();
        if (closeTagName === tagName) {
          openTagCount--;
          if (openTagCount === 0) {
            return {
              tagContent: xmlData.substring(startIndex, i2),
              i: closeIndex
            };
          }
        }
        i2 = closeIndex;
      } else if (xmlData[i2 + 1] === "?") {
        const closeIndex = findClosingIndex(xmlData, "?>", i2 + 1, "StopNode is not closed.");
        i2 = closeIndex;
      } else if (xmlData.substr(i2 + 1, 3) === "!--") {
        const closeIndex = findClosingIndex(xmlData, "-->", i2 + 3, "StopNode is not closed.");
        i2 = closeIndex;
      } else if (xmlData.substr(i2 + 1, 2) === "![") {
        const closeIndex = findClosingIndex(xmlData, "]]>", i2, "StopNode is not closed.") - 2;
        i2 = closeIndex;
      } else {
        const tagData = readTagExp(xmlData, i2, ">");
        if (tagData) {
          const openTagName = tagData && tagData.tagName;
          if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
            openTagCount++;
          }
          i2 = tagData.closeIndex;
        }
      }
    }
  }
}
__name(readStopNodeData, "readStopNodeData");
function parseValue(val, shouldParse, options) {
  if (shouldParse && typeof val === "string") {
    const newval = val.trim();
    if (newval === "true") return true;
    else if (newval === "false") return false;
    else return toNumber(val, options);
  } else {
    if (isExist(val)) {
      return val;
    } else {
      return "";
    }
  }
}
__name(parseValue, "parseValue");
function fromCodePoint(str, base, prefix) {
  const codePoint = Number.parseInt(str, base);
  if (codePoint >= 0 && codePoint <= 1114111) {
    return String.fromCodePoint(codePoint);
  } else {
    return prefix + str + ";";
  }
}
__name(fromCodePoint, "fromCodePoint");

// node_modules/fast-xml-parser/src/xmlparser/node2json.js
var METADATA_SYMBOL2 = XmlNode.getMetaDataSymbol();
function prettify(node, options) {
  return compress(node, options);
}
__name(prettify, "prettify");
function compress(arr, options, jPath) {
  let text;
  const compressedObj = {};
  for (let i2 = 0; i2 < arr.length; i2++) {
    const tagObj = arr[i2];
    const property = propName(tagObj);
    let newJpath = "";
    if (jPath === void 0) newJpath = property;
    else newJpath = jPath + "." + property;
    if (property === options.textNodeName) {
      if (text === void 0) text = tagObj[property];
      else text += "" + tagObj[property];
    } else if (property === void 0) {
      continue;
    } else if (tagObj[property]) {
      let val = compress(tagObj[property], options, newJpath);
      const isLeaf = isLeafTag(val, options);
      if (tagObj[":@"]) {
        assignAttributes(val, tagObj[":@"], newJpath, options);
      } else if (Object.keys(val).length === 1 && val[options.textNodeName] !== void 0 && !options.alwaysCreateTextNode) {
        val = val[options.textNodeName];
      } else if (Object.keys(val).length === 0) {
        if (options.alwaysCreateTextNode) val[options.textNodeName] = "";
        else val = "";
      }
      if (tagObj[METADATA_SYMBOL2] !== void 0 && typeof val === "object" && val !== null) {
        val[METADATA_SYMBOL2] = tagObj[METADATA_SYMBOL2];
      }
      if (compressedObj[property] !== void 0 && Object.prototype.hasOwnProperty.call(compressedObj, property)) {
        if (!Array.isArray(compressedObj[property])) {
          compressedObj[property] = [compressedObj[property]];
        }
        compressedObj[property].push(val);
      } else {
        if (options.isArray(property, newJpath, isLeaf)) {
          compressedObj[property] = [val];
        } else {
          compressedObj[property] = val;
        }
      }
    }
  }
  if (typeof text === "string") {
    if (text.length > 0) compressedObj[options.textNodeName] = text;
  } else if (text !== void 0) compressedObj[options.textNodeName] = text;
  return compressedObj;
}
__name(compress, "compress");
function propName(obj) {
  const keys = Object.keys(obj);
  for (let i2 = 0; i2 < keys.length; i2++) {
    const key = keys[i2];
    if (key !== ":@") return key;
  }
}
__name(propName, "propName");
function assignAttributes(obj, attrMap, jpath, options) {
  if (attrMap) {
    const keys = Object.keys(attrMap);
    const len = keys.length;
    for (let i2 = 0; i2 < len; i2++) {
      const atrrName = keys[i2];
      if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
        obj[atrrName] = [attrMap[atrrName]];
      } else {
        obj[atrrName] = attrMap[atrrName];
      }
    }
  }
}
__name(assignAttributes, "assignAttributes");
function isLeafTag(obj, options) {
  const { textNodeName } = options;
  const propCount = Object.keys(obj).length;
  if (propCount === 0) {
    return true;
  }
  if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
    return true;
  }
  return false;
}
__name(isLeafTag, "isLeafTag");

// node_modules/fast-xml-parser/src/xmlparser/XMLParser.js
var XMLParser = class {
  static {
    __name(this, "XMLParser");
  }
  constructor(options) {
    this.externalEntities = {};
    this.options = buildOptions(options);
  }
  /**
   * Parse XML dats to JS object 
   * @param {string|Uint8Array} xmlData 
   * @param {boolean|Object} validationOption 
   */
  parse(xmlData, validationOption) {
    if (typeof xmlData !== "string" && xmlData.toString) {
      xmlData = xmlData.toString();
    } else if (typeof xmlData !== "string") {
      throw new Error("XML data is accepted in String or Bytes[] form.");
    }
    if (validationOption) {
      if (validationOption === true) validationOption = {};
      const result = validate(xmlData, validationOption);
      if (result !== true) {
        throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
      }
    }
    const orderedObjParser = new OrderedObjParser(this.options);
    orderedObjParser.addExternalEntities(this.externalEntities);
    const orderedResult = orderedObjParser.parseXml(xmlData);
    if (this.options.preserveOrder || orderedResult === void 0) return orderedResult;
    else return prettify(orderedResult, this.options);
  }
  /**
   * Add Entity which is not by default supported by this library
   * @param {string} key 
   * @param {string} value 
   */
  addEntity(key, value) {
    if (value.indexOf("&") !== -1) {
      throw new Error("Entity value can't have '&'");
    } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
      throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    } else if (value === "&") {
      throw new Error("An entity with value '&' is not permitted");
    } else {
      this.externalEntities[key] = value;
    }
  }
  /**
   * Returns a Symbol that can be used to access the metadata
   * property on a node.
   * 
   * If Symbol is not available in the environment, an ordinary property is used
   * and the name of the property is here returned.
   * 
   * The XMLMetaData property is only present when `captureMetaData`
   * is true in the options.
   */
  static getMetaDataSymbol() {
    return XmlNode.getMetaDataSymbol();
  }
};

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/parseXmlBody.js
var parseXmlBody = /* @__PURE__ */ __name((streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
  if (encoded.length) {
    const parser = new XMLParser({
      attributeNamePrefix: "",
      htmlEntities: true,
      ignoreAttributes: false,
      ignoreDeclaration: true,
      parseTagValue: false,
      trimValues: false,
      tagValueProcessor: /* @__PURE__ */ __name((_, val) => val.trim() === "" && val.includes("\n") ? "" : void 0, "tagValueProcessor")
    });
    parser.addEntity("#xD", "\r");
    parser.addEntity("#10", "\n");
    let parsedObj;
    try {
      parsedObj = parser.parse(encoded, true);
    } catch (e2) {
      if (e2 && typeof e2 === "object") {
        Object.defineProperty(e2, "$responseBodyText", {
          value: encoded
        });
      }
      throw e2;
    }
    const textNodeName = "#text";
    const key = Object.keys(parsedObj)[0];
    const parsedObjToReturn = parsedObj[key];
    if (parsedObjToReturn[textNodeName]) {
      parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
      delete parsedObjToReturn[textNodeName];
    }
    return getValueFromTextNode(parsedObjToReturn);
  }
  return {};
}), "parseXmlBody");
var parseXmlErrorBody = /* @__PURE__ */ __name(async (errorBody, context) => {
  const value = await parseXmlBody(errorBody, context);
  if (value.Error) {
    value.Error.message = value.Error.message ?? value.Error.Message;
  }
  return value;
}, "parseXmlErrorBody");
var loadRestXmlErrorCode = /* @__PURE__ */ __name((output, data) => {
  if (data?.Error?.Code !== void 0) {
    return data.Error.Code;
  }
  if (data?.Code !== void 0) {
    return data.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
}, "loadRestXmlErrorCode");

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/types.js
var CLIENT_SUPPORTED_ALGORITHMS = [
  ChecksumAlgorithm.CRC32,
  ChecksumAlgorithm.CRC32C,
  ChecksumAlgorithm.SHA1,
  ChecksumAlgorithm.SHA256
];
var PRIORITY_ORDER_ALGORITHMS = [
  ChecksumAlgorithm.SHA256,
  ChecksumAlgorithm.SHA1,
  ChecksumAlgorithm.CRC32,
  ChecksumAlgorithm.CRC32C
];

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksumAlgorithmForRequest.js
var getChecksumAlgorithmForRequest = /* @__PURE__ */ __name((input, { requestChecksumRequired, requestAlgorithmMember }, isS3Express) => {
  const defaultAlgorithm = isS3Express ? S3_EXPRESS_DEFAULT_CHECKSUM_ALGORITHM : DEFAULT_CHECKSUM_ALGORITHM;
  if (!requestAlgorithmMember || !input[requestAlgorithmMember]) {
    return requestChecksumRequired ? defaultAlgorithm : void 0;
  }
  const checksumAlgorithm = input[requestAlgorithmMember];
  if (!CLIENT_SUPPORTED_ALGORITHMS.includes(checksumAlgorithm)) {
    throw new Error(`The checksum algorithm "${checksumAlgorithm}" is not supported by the client. Select one of ${CLIENT_SUPPORTED_ALGORITHMS}.`);
  }
  return checksumAlgorithm;
}, "getChecksumAlgorithmForRequest");

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksumLocationName.js
var getChecksumLocationName = /* @__PURE__ */ __name((algorithm) => algorithm === ChecksumAlgorithm.MD5 ? "content-md5" : `x-amz-checksum-${algorithm.toLowerCase()}`, "getChecksumLocationName");

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/hasHeader.js
var hasHeader2 = /* @__PURE__ */ __name((header, headers) => {
  const soughtHeader = header.toLowerCase();
  for (const headerName of Object.keys(headers)) {
    if (soughtHeader === headerName.toLowerCase()) {
      return true;
    }
  }
  return false;
}, "hasHeader");

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/hasHeaderWithPrefix.js
var hasHeaderWithPrefix = /* @__PURE__ */ __name((headerPrefix, headers) => {
  const soughtHeaderPrefix = headerPrefix.toLowerCase();
  for (const headerName of Object.keys(headers)) {
    if (headerName.toLowerCase().startsWith(soughtHeaderPrefix)) {
      return true;
    }
  }
  return false;
}, "hasHeaderWithPrefix");

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/isStreaming.js
var isStreaming = /* @__PURE__ */ __name((body) => body !== void 0 && typeof body !== "string" && !ArrayBuffer.isView(body) && !isArrayBuffer(body), "isStreaming");

// node_modules/tslib/tslib.es6.mjs
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
__name(__awaiter, "__awaiter");
function __generator(thisArg, body) {
  var _ = { label: 0, sent: /* @__PURE__ */ __name(function() {
    if (t2[0] & 1) throw t2[1];
    return t2[1];
  }, "sent"), trys: [], ops: [] }, f2, y2, t2, g2 = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g2.next = verb(0), g2["throw"] = verb(1), g2["return"] = verb(2), typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  __name(verb, "verb");
  function step(op) {
    if (f2) throw new TypeError("Generator is already executing.");
    while (g2 && (g2 = 0, op[0] && (_ = 0)), _) try {
      if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done) return t2;
      if (y2 = 0, t2) op = [op[0] & 2, t2.value];
      switch (op[0]) {
        case 0:
        case 1:
          t2 = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y2 = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t2[1]) {
            _.label = t2[1];
            t2 = op;
            break;
          }
          if (t2 && _.label < t2[2]) {
            _.label = t2[2];
            _.ops.push(op);
            break;
          }
          if (t2[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e2) {
      op = [6, e2];
      y2 = 0;
    } finally {
      f2 = t2 = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
  __name(step, "step");
}
__name(__generator, "__generator");
function __values(o2) {
  var s2 = typeof Symbol === "function" && Symbol.iterator, m2 = s2 && o2[s2], i2 = 0;
  if (m2) return m2.call(o2);
  if (o2 && typeof o2.length === "number") return {
    next: /* @__PURE__ */ __name(function() {
      if (o2 && i2 >= o2.length) o2 = void 0;
      return { value: o2 && o2[i2++], done: !o2 };
    }, "next")
  };
  throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
__name(__values, "__values");

// node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
var fromUtf82 = /* @__PURE__ */ __name((input) => new TextEncoder().encode(input), "fromUtf8");

// node_modules/@aws-crypto/util/build/module/convertToBuffer.js
var fromUtf83 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
  return Buffer.from(input, "utf8");
} : fromUtf82;
function convertToBuffer(data) {
  if (data instanceof Uint8Array)
    return data;
  if (typeof data === "string") {
    return fromUtf83(data);
  }
  if (ArrayBuffer.isView(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }
  return new Uint8Array(data);
}
__name(convertToBuffer, "convertToBuffer");

// node_modules/@aws-crypto/util/build/module/isEmptyData.js
function isEmptyData(data) {
  if (typeof data === "string") {
    return data.length === 0;
  }
  return data.byteLength === 0;
}
__name(isEmptyData, "isEmptyData");

// node_modules/@aws-crypto/util/build/module/numToUint8.js
function numToUint8(num) {
  return new Uint8Array([
    (num & 4278190080) >> 24,
    (num & 16711680) >> 16,
    (num & 65280) >> 8,
    num & 255
  ]);
}
__name(numToUint8, "numToUint8");

// node_modules/@aws-crypto/util/build/module/uint32ArrayFrom.js
function uint32ArrayFrom(a_lookUpTable2) {
  if (!Uint32Array.from) {
    var return_array = new Uint32Array(a_lookUpTable2.length);
    var a_index = 0;
    while (a_index < a_lookUpTable2.length) {
      return_array[a_index] = a_lookUpTable2[a_index];
      a_index += 1;
    }
    return return_array;
  }
  return Uint32Array.from(a_lookUpTable2);
}
__name(uint32ArrayFrom, "uint32ArrayFrom");

// node_modules/@aws-crypto/crc32c/build/module/aws_crc32c.js
var AwsCrc32c = (
  /** @class */
  (function() {
    function AwsCrc32c2() {
      this.crc32c = new Crc32c();
    }
    __name(AwsCrc32c2, "AwsCrc32c");
    AwsCrc32c2.prototype.update = function(toHash) {
      if (isEmptyData(toHash))
        return;
      this.crc32c.update(convertToBuffer(toHash));
    };
    AwsCrc32c2.prototype.digest = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, numToUint8(this.crc32c.digest())];
        });
      });
    };
    AwsCrc32c2.prototype.reset = function() {
      this.crc32c = new Crc32c();
    };
    return AwsCrc32c2;
  })()
);

// node_modules/@aws-crypto/crc32c/build/module/index.js
var Crc32c = (
  /** @class */
  (function() {
    function Crc32c2() {
      this.checksum = 4294967295;
    }
    __name(Crc32c2, "Crc32c");
    Crc32c2.prototype.update = function(data) {
      var e_1, _a;
      try {
        for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
          var byte = data_1_1.value;
          this.checksum = this.checksum >>> 8 ^ lookupTable[(this.checksum ^ byte) & 255];
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return this;
    };
    Crc32c2.prototype.digest = function() {
      return (this.checksum ^ 4294967295) >>> 0;
    };
    return Crc32c2;
  })()
);
var a_lookupTable = [
  0,
  4067132163,
  3778769143,
  324072436,
  3348797215,
  904991772,
  648144872,
  3570033899,
  2329499855,
  2024987596,
  1809983544,
  2575936315,
  1296289744,
  3207089363,
  2893594407,
  1578318884,
  274646895,
  3795141740,
  4049975192,
  51262619,
  3619967088,
  632279923,
  922689671,
  3298075524,
  2592579488,
  1760304291,
  2075979607,
  2312596564,
  1562183871,
  2943781820,
  3156637768,
  1313733451,
  549293790,
  3537243613,
  3246849577,
  871202090,
  3878099393,
  357341890,
  102525238,
  4101499445,
  2858735121,
  1477399826,
  1264559846,
  3107202533,
  1845379342,
  2677391885,
  2361733625,
  2125378298,
  820201905,
  3263744690,
  3520608582,
  598981189,
  4151959214,
  85089709,
  373468761,
  3827903834,
  3124367742,
  1213305469,
  1526817161,
  2842354314,
  2107672161,
  2412447074,
  2627466902,
  1861252501,
  1098587580,
  3004210879,
  2688576843,
  1378610760,
  2262928035,
  1955203488,
  1742404180,
  2511436119,
  3416409459,
  969524848,
  714683780,
  3639785095,
  205050476,
  4266873199,
  3976438427,
  526918040,
  1361435347,
  2739821008,
  2954799652,
  1114974503,
  2529119692,
  1691668175,
  2005155131,
  2247081528,
  3690758684,
  697762079,
  986182379,
  3366744552,
  476452099,
  3993867776,
  4250756596,
  255256311,
  1640403810,
  2477592673,
  2164122517,
  1922457750,
  2791048317,
  1412925310,
  1197962378,
  3037525897,
  3944729517,
  427051182,
  170179418,
  4165941337,
  746937522,
  3740196785,
  3451792453,
  1070968646,
  1905808397,
  2213795598,
  2426610938,
  1657317369,
  3053634322,
  1147748369,
  1463399397,
  2773627110,
  4215344322,
  153784257,
  444234805,
  3893493558,
  1021025245,
  3467647198,
  3722505002,
  797665321,
  2197175160,
  1889384571,
  1674398607,
  2443626636,
  1164749927,
  3070701412,
  2757221520,
  1446797203,
  137323447,
  4198817972,
  3910406976,
  461344835,
  3484808360,
  1037989803,
  781091935,
  3705997148,
  2460548119,
  1623424788,
  1939049696,
  2180517859,
  1429367560,
  2807687179,
  3020495871,
  1180866812,
  410100952,
  3927582683,
  4182430767,
  186734380,
  3756733383,
  763408580,
  1053836080,
  3434856499,
  2722870694,
  1344288421,
  1131464017,
  2971354706,
  1708204729,
  2545590714,
  2229949006,
  1988219213,
  680717673,
  3673779818,
  3383336350,
  1002577565,
  4010310262,
  493091189,
  238226049,
  4233660802,
  2987750089,
  1082061258,
  1395524158,
  2705686845,
  1972364758,
  2279892693,
  2494862625,
  1725896226,
  952904198,
  3399985413,
  3656866545,
  731699698,
  4283874585,
  222117402,
  510512622,
  3959836397,
  3280807620,
  837199303,
  582374963,
  3504198960,
  68661723,
  4135334616,
  3844915500,
  390545967,
  1230274059,
  3141532936,
  2825850620,
  1510247935,
  2395924756,
  2091215383,
  1878366691,
  2644384480,
  3553878443,
  565732008,
  854102364,
  3229815391,
  340358836,
  3861050807,
  4117890627,
  119113024,
  1493875044,
  2875275879,
  3090270611,
  1247431312,
  2660249211,
  1828433272,
  2141937292,
  2378227087,
  3811616794,
  291187481,
  34330861,
  4032846830,
  615137029,
  3603020806,
  3314634738,
  939183345,
  1776939221,
  2609017814,
  2295496738,
  2058945313,
  2926798794,
  1545135305,
  1330124605,
  3173225534,
  4084100981,
  17165430,
  307568514,
  3762199681,
  888469610,
  3332340585,
  3587147933,
  665062302,
  2042050490,
  2346497209,
  2559330125,
  1793573966,
  3190661285,
  1279665062,
  1595330642,
  2910671697
];
var lookupTable = uint32ArrayFrom(a_lookupTable);

// node_modules/@aws-crypto/crc32/build/module/aws_crc32.js
var AwsCrc32 = (
  /** @class */
  (function() {
    function AwsCrc322() {
      this.crc32 = new Crc32();
    }
    __name(AwsCrc322, "AwsCrc32");
    AwsCrc322.prototype.update = function(toHash) {
      if (isEmptyData(toHash))
        return;
      this.crc32.update(convertToBuffer(toHash));
    };
    AwsCrc322.prototype.digest = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, numToUint8(this.crc32.digest())];
        });
      });
    };
    AwsCrc322.prototype.reset = function() {
      this.crc32 = new Crc32();
    };
    return AwsCrc322;
  })()
);

// node_modules/@aws-crypto/crc32/build/module/index.js
var Crc32 = (
  /** @class */
  (function() {
    function Crc322() {
      this.checksum = 4294967295;
    }
    __name(Crc322, "Crc32");
    Crc322.prototype.update = function(data) {
      var e_1, _a;
      try {
        for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
          var byte = data_1_1.value;
          this.checksum = this.checksum >>> 8 ^ lookupTable2[(this.checksum ^ byte) & 255];
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return this;
    };
    Crc322.prototype.digest = function() {
      return (this.checksum ^ 4294967295) >>> 0;
    };
    return Crc322;
  })()
);
var a_lookUpTable = [
  0,
  1996959894,
  3993919788,
  2567524794,
  124634137,
  1886057615,
  3915621685,
  2657392035,
  249268274,
  2044508324,
  3772115230,
  2547177864,
  162941995,
  2125561021,
  3887607047,
  2428444049,
  498536548,
  1789927666,
  4089016648,
  2227061214,
  450548861,
  1843258603,
  4107580753,
  2211677639,
  325883990,
  1684777152,
  4251122042,
  2321926636,
  335633487,
  1661365465,
  4195302755,
  2366115317,
  997073096,
  1281953886,
  3579855332,
  2724688242,
  1006888145,
  1258607687,
  3524101629,
  2768942443,
  901097722,
  1119000684,
  3686517206,
  2898065728,
  853044451,
  1172266101,
  3705015759,
  2882616665,
  651767980,
  1373503546,
  3369554304,
  3218104598,
  565507253,
  1454621731,
  3485111705,
  3099436303,
  671266974,
  1594198024,
  3322730930,
  2970347812,
  795835527,
  1483230225,
  3244367275,
  3060149565,
  1994146192,
  31158534,
  2563907772,
  4023717930,
  1907459465,
  112637215,
  2680153253,
  3904427059,
  2013776290,
  251722036,
  2517215374,
  3775830040,
  2137656763,
  141376813,
  2439277719,
  3865271297,
  1802195444,
  476864866,
  2238001368,
  4066508878,
  1812370925,
  453092731,
  2181625025,
  4111451223,
  1706088902,
  314042704,
  2344532202,
  4240017532,
  1658658271,
  366619977,
  2362670323,
  4224994405,
  1303535960,
  984961486,
  2747007092,
  3569037538,
  1256170817,
  1037604311,
  2765210733,
  3554079995,
  1131014506,
  879679996,
  2909243462,
  3663771856,
  1141124467,
  855842277,
  2852801631,
  3708648649,
  1342533948,
  654459306,
  3188396048,
  3373015174,
  1466479909,
  544179635,
  3110523913,
  3462522015,
  1591671054,
  702138776,
  2966460450,
  3352799412,
  1504918807,
  783551873,
  3082640443,
  3233442989,
  3988292384,
  2596254646,
  62317068,
  1957810842,
  3939845945,
  2647816111,
  81470997,
  1943803523,
  3814918930,
  2489596804,
  225274430,
  2053790376,
  3826175755,
  2466906013,
  167816743,
  2097651377,
  4027552580,
  2265490386,
  503444072,
  1762050814,
  4150417245,
  2154129355,
  426522225,
  1852507879,
  4275313526,
  2312317920,
  282753626,
  1742555852,
  4189708143,
  2394877945,
  397917763,
  1622183637,
  3604390888,
  2714866558,
  953729732,
  1340076626,
  3518719985,
  2797360999,
  1068828381,
  1219638859,
  3624741850,
  2936675148,
  906185462,
  1090812512,
  3747672003,
  2825379669,
  829329135,
  1181335161,
  3412177804,
  3160834842,
  628085408,
  1382605366,
  3423369109,
  3138078467,
  570562233,
  1426400815,
  3317316542,
  2998733608,
  733239954,
  1555261956,
  3268935591,
  3050360625,
  752459403,
  1541320221,
  2607071920,
  3965973030,
  1969922972,
  40735498,
  2617837225,
  3943577151,
  1913087877,
  83908371,
  2512341634,
  3803740692,
  2075208622,
  213261112,
  2463272603,
  3855990285,
  2094854071,
  198958881,
  2262029012,
  4057260610,
  1759359992,
  534414190,
  2176718541,
  4139329115,
  1873836001,
  414664567,
  2282248934,
  4279200368,
  1711684554,
  285281116,
  2405801727,
  4167216745,
  1634467795,
  376229701,
  2685067896,
  3608007406,
  1308918612,
  956543938,
  2808555105,
  3495958263,
  1231636301,
  1047427035,
  2932959818,
  3654703836,
  1088359270,
  936918e3,
  2847714899,
  3736837829,
  1202900863,
  817233897,
  3183342108,
  3401237130,
  1404277552,
  615818150,
  3134207493,
  3453421203,
  1423857449,
  601450431,
  3009837614,
  3294710456,
  1567103746,
  711928724,
  3020668471,
  3272380065,
  1510334235,
  755167117
];
var lookupTable2 = uint32ArrayFrom(a_lookUpTable);

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getCrc32ChecksumAlgorithmFunction.browser.js
var getCrc32ChecksumAlgorithmFunction = /* @__PURE__ */ __name(() => AwsCrc32, "getCrc32ChecksumAlgorithmFunction");

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/selectChecksumAlgorithmFunction.js
var selectChecksumAlgorithmFunction = /* @__PURE__ */ __name((checksumAlgorithm, config) => {
  switch (checksumAlgorithm) {
    case ChecksumAlgorithm.MD5:
      return config.md5;
    case ChecksumAlgorithm.CRC32:
      return getCrc32ChecksumAlgorithmFunction();
    case ChecksumAlgorithm.CRC32C:
      return AwsCrc32c;
    case ChecksumAlgorithm.SHA1:
      return config.sha1;
    case ChecksumAlgorithm.SHA256:
      return config.sha256;
    default:
      throw new Error(`Unsupported checksum algorithm: ${checksumAlgorithm}`);
  }
}, "selectChecksumAlgorithmFunction");

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/stringHasher.js
init_dist_es();
var stringHasher = /* @__PURE__ */ __name((checksumAlgorithmFn, body) => {
  const hash = new checksumAlgorithmFn();
  hash.update(toUint8Array(body || ""));
  return hash.digest();
}, "stringHasher");

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/flexibleChecksumsMiddleware.js
var flexibleChecksumsMiddlewareOptions = {
  name: "flexibleChecksumsMiddleware",
  step: "build",
  tags: ["BODY_CHECKSUM"],
  override: true
};
var flexibleChecksumsMiddleware = /* @__PURE__ */ __name((config, middlewareConfig) => (next, context) => async (args) => {
  if (!HttpRequest.isInstance(args.request)) {
    return next(args);
  }
  if (hasHeaderWithPrefix("x-amz-checksum-", args.request.headers)) {
    return next(args);
  }
  const { request, input } = args;
  const { body: requestBody, headers } = request;
  const { base64Encoder, streamHasher } = config;
  const { requestChecksumRequired, requestAlgorithmMember } = middlewareConfig;
  const checksumAlgorithm = getChecksumAlgorithmForRequest(input, {
    requestChecksumRequired,
    requestAlgorithmMember: requestAlgorithmMember?.name
  }, !!context.isS3ExpressBucket);
  let updatedBody = requestBody;
  let updatedHeaders = headers;
  if (checksumAlgorithm) {
    switch (checksumAlgorithm) {
      case ChecksumAlgorithm.CRC32:
        setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_CRC32", "U");
        break;
      case ChecksumAlgorithm.CRC32C:
        setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_CRC32C", "V");
        break;
      case ChecksumAlgorithm.SHA1:
        setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_SHA1", "X");
        break;
      case ChecksumAlgorithm.SHA256:
        setFeature(context, "FLEXIBLE_CHECKSUMS_REQ_SHA256", "Y");
        break;
    }
    const checksumLocationName = getChecksumLocationName(checksumAlgorithm);
    const checksumAlgorithmFn = selectChecksumAlgorithmFunction(checksumAlgorithm, config);
    if (isStreaming(requestBody)) {
      const { getAwsChunkedEncodingStream: getAwsChunkedEncodingStream2, bodyLengthChecker } = config;
      updatedBody = getAwsChunkedEncodingStream2(requestBody, {
        base64Encoder,
        bodyLengthChecker,
        checksumLocationName,
        checksumAlgorithmFn,
        streamHasher
      });
      updatedHeaders = {
        ...headers,
        "content-encoding": headers["content-encoding"] ? `${headers["content-encoding"]},aws-chunked` : "aws-chunked",
        "transfer-encoding": "chunked",
        "x-amz-decoded-content-length": headers["content-length"],
        "x-amz-content-sha256": "STREAMING-UNSIGNED-PAYLOAD-TRAILER",
        "x-amz-trailer": checksumLocationName
      };
      delete updatedHeaders["content-length"];
    } else if (!hasHeader2(checksumLocationName, headers)) {
      const rawChecksum = await stringHasher(checksumAlgorithmFn, requestBody);
      updatedHeaders = {
        ...headers,
        [checksumLocationName]: base64Encoder(rawChecksum)
      };
    }
  }
  const result = await next({
    ...args,
    request: {
      ...request,
      headers: updatedHeaders,
      body: updatedBody
    }
  });
  return result;
}, "flexibleChecksumsMiddleware");

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksumAlgorithmListForResponse.js
var getChecksumAlgorithmListForResponse = /* @__PURE__ */ __name((responseAlgorithms = []) => {
  const validChecksumAlgorithms = [];
  for (const algorithm of PRIORITY_ORDER_ALGORITHMS) {
    if (!responseAlgorithms.includes(algorithm) || !CLIENT_SUPPORTED_ALGORITHMS.includes(algorithm)) {
      continue;
    }
    validChecksumAlgorithms.push(algorithm);
  }
  return validChecksumAlgorithms;
}, "getChecksumAlgorithmListForResponse");

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/isChecksumWithPartNumber.js
var isChecksumWithPartNumber = /* @__PURE__ */ __name((checksum) => {
  const lastHyphenIndex = checksum.lastIndexOf("-");
  if (lastHyphenIndex !== -1) {
    const numberPart = checksum.slice(lastHyphenIndex + 1);
    if (!numberPart.startsWith("0")) {
      const number = parseInt(numberPart, 10);
      if (!isNaN(number) && number >= 1 && number <= 1e4) {
        return true;
      }
    }
  }
  return false;
}, "isChecksumWithPartNumber");

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/streams/create-read-stream-on-buffer.browser.js
function createReadStreamOnBuffer(buffer) {
  return new Blob([buffer]).stream();
}
__name(createReadStreamOnBuffer, "createReadStreamOnBuffer");

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksum.js
var getChecksum = /* @__PURE__ */ __name(async (body, { checksumAlgorithmFn, base64Encoder }) => base64Encoder(await stringHasher(checksumAlgorithmFn, body)), "getChecksum");

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/validateChecksumFromResponse.js
var validateChecksumFromResponse = /* @__PURE__ */ __name(async (response, { config, responseAlgorithms }) => {
  const checksumAlgorithms = getChecksumAlgorithmListForResponse(responseAlgorithms);
  const { body: responseBody, headers: responseHeaders } = response;
  for (const algorithm of checksumAlgorithms) {
    const responseHeader = getChecksumLocationName(algorithm);
    const checksumFromResponse = responseHeaders[responseHeader];
    if (checksumFromResponse) {
      const checksumAlgorithmFn = selectChecksumAlgorithmFunction(algorithm, config);
      const { base64Encoder } = config;
      if (isStreaming(responseBody)) {
        response.body = createChecksumStream({
          expectedChecksum: checksumFromResponse,
          checksumSourceLocation: responseHeader,
          checksum: new checksumAlgorithmFn(),
          source: responseBody,
          base64Encoder
        });
        return;
      }
      const checksum = await getChecksum(responseBody, { checksumAlgorithmFn, base64Encoder });
      if (checksum === checksumFromResponse) {
        break;
      }
      throw new Error(`Checksum mismatch: expected "${checksum}" but received "${checksumFromResponse}" in response header "${responseHeader}".`);
    }
  }
}, "validateChecksumFromResponse");

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/flexibleChecksumsResponseMiddleware.js
var flexibleChecksumsResponseMiddlewareOptions = {
  name: "flexibleChecksumsResponseMiddleware",
  toMiddleware: "deserializerMiddleware",
  relation: "after",
  tags: ["BODY_CHECKSUM"],
  override: true
};
var flexibleChecksumsResponseMiddleware = /* @__PURE__ */ __name((config, middlewareConfig) => (next, context) => async (args) => {
  if (!HttpRequest.isInstance(args.request)) {
    return next(args);
  }
  const input = args.input;
  const result = await next(args);
  const response = result.response;
  let collectedStream = void 0;
  const { requestValidationModeMember, responseAlgorithms } = middlewareConfig;
  if (requestValidationModeMember && input[requestValidationModeMember] === "ENABLED") {
    const { clientName, commandName } = context;
    const isS3WholeObjectMultipartGetResponseChecksum = clientName === "S3Client" && commandName === "GetObjectCommand" && getChecksumAlgorithmListForResponse(responseAlgorithms).every((algorithm) => {
      const responseHeader = getChecksumLocationName(algorithm);
      const checksumFromResponse = response.headers[responseHeader];
      return !checksumFromResponse || isChecksumWithPartNumber(checksumFromResponse);
    });
    if (isS3WholeObjectMultipartGetResponseChecksum) {
      return result;
    }
    const isStreamingBody = isStreaming(response.body);
    if (isStreamingBody) {
      collectedStream = await config.streamCollector(response.body);
      response.body = createReadStreamOnBuffer(collectedStream);
    }
    await validateChecksumFromResponse(result.response, {
      config,
      responseAlgorithms
    });
    if (isStreamingBody && collectedStream) {
      response.body = createReadStreamOnBuffer(collectedStream);
    }
  }
  return result;
}, "flexibleChecksumsResponseMiddleware");

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getFlexibleChecksumsPlugin.js
var getFlexibleChecksumsPlugin = /* @__PURE__ */ __name((config, middlewareConfig) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.add(flexibleChecksumsMiddleware(config, middlewareConfig), flexibleChecksumsMiddlewareOptions);
    clientStack.addRelativeTo(flexibleChecksumsResponseMiddleware(config, middlewareConfig), flexibleChecksumsResponseMiddlewareOptions);
  }, "applyToStack")
}), "getFlexibleChecksumsPlugin");

// node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/resolveFlexibleChecksumsConfig.js
var resolveFlexibleChecksumsConfig = /* @__PURE__ */ __name((input) => ({
  ...input,
  requestChecksumCalculation: normalizeProvider(input.requestChecksumCalculation ?? DEFAULT_REQUEST_CHECKSUM_CALCULATION),
  responseChecksumValidation: normalizeProvider(input.responseChecksumValidation ?? DEFAULT_RESPONSE_CHECKSUM_VALIDATION)
}), "resolveFlexibleChecksumsConfig");

// node_modules/@aws-sdk/middleware-host-header/dist-es/index.js
function resolveHostHeaderConfig(input) {
  return input;
}
__name(resolveHostHeaderConfig, "resolveHostHeaderConfig");
var hostHeaderMiddleware = /* @__PURE__ */ __name((options) => (next) => async (args) => {
  if (!HttpRequest.isInstance(args.request))
    return next(args);
  const { request } = args;
  const { handlerProtocol = "" } = options.requestHandler.metadata || {};
  if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
    delete request.headers["host"];
    request.headers[":authority"] = request.hostname + (request.port ? ":" + request.port : "");
  } else if (!request.headers["host"]) {
    let host = request.hostname;
    if (request.port != null)
      host += `:${request.port}`;
    request.headers["host"] = host;
  }
  return next(args);
}, "hostHeaderMiddleware");
var hostHeaderMiddlewareOptions = {
  name: "hostHeaderMiddleware",
  step: "build",
  priority: "low",
  tags: ["HOST"],
  override: true
};
var getHostHeaderPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
  }, "applyToStack")
}), "getHostHeaderPlugin");

// node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js
var loggerMiddleware = /* @__PURE__ */ __name(() => (next, context) => async (args) => {
  try {
    const response = await next(args);
    const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context;
    const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
    const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
    const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;
    const { $metadata, ...outputWithoutMetadata } = response.output;
    logger2?.info?.({
      clientName,
      commandName,
      input: inputFilterSensitiveLog(args.input),
      output: outputFilterSensitiveLog(outputWithoutMetadata),
      metadata: $metadata
    });
    return response;
  } catch (error) {
    const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context;
    const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
    const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
    logger2?.error?.({
      clientName,
      commandName,
      input: inputFilterSensitiveLog(args.input),
      error,
      metadata: error.$metadata
    });
    throw error;
  }
}, "loggerMiddleware");
var loggerMiddlewareOptions = {
  name: "loggerMiddleware",
  tags: ["LOGGER"],
  step: "initialize",
  override: true
};
var getLoggerPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
  }, "applyToStack")
}), "getLoggerPlugin");

// node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js
var TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
var ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
var ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
var recursionDetectionMiddleware = /* @__PURE__ */ __name((options) => (next) => async (args) => {
  const { request } = args;
  if (!HttpRequest.isInstance(request) || options.runtime !== "node" || request.headers.hasOwnProperty(TRACE_ID_HEADER_NAME)) {
    return next(args);
  }
  const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
  const traceId = process.env[ENV_TRACE_ID];
  const nonEmptyString = /* @__PURE__ */ __name((str) => typeof str === "string" && str.length > 0, "nonEmptyString");
  if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
    request.headers[TRACE_ID_HEADER_NAME] = traceId;
  }
  return next({
    ...args,
    request
  });
}, "recursionDetectionMiddleware");
var addRecursionDetectionMiddlewareOptions = {
  step: "build",
  tags: ["RECURSION_DETECTION"],
  name: "recursionDetectionMiddleware",
  override: true,
  priority: "low"
};
var getRecursionDetectionPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);
  }, "applyToStack")
}), "getRecursionDetectionPlugin");

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/check-content-length-header.js
var CONTENT_LENGTH_HEADER = "content-length";
function checkContentLengthHeader() {
  return (next, context) => async (args) => {
    const { request } = args;
    if (HttpRequest.isInstance(request)) {
      if (!(CONTENT_LENGTH_HEADER in request.headers)) {
        const message = `Are you using a Stream of unknown length as the Body of a PutObject request? Consider using Upload instead from @aws-sdk/lib-storage.`;
        if (typeof context?.logger?.warn === "function" && !(context.logger instanceof NoOpLogger)) {
          context.logger.warn(message);
        } else {
          console.warn(message);
        }
      }
    }
    return next({ ...args });
  };
}
__name(checkContentLengthHeader, "checkContentLengthHeader");
var checkContentLengthHeaderMiddlewareOptions = {
  step: "finalizeRequest",
  tags: ["CHECK_CONTENT_LENGTH_HEADER"],
  name: "getCheckContentLengthHeaderPlugin",
  override: true
};
var getCheckContentLengthHeaderPlugin = /* @__PURE__ */ __name((unused) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.add(checkContentLengthHeader(), checkContentLengthHeaderMiddlewareOptions);
  }, "applyToStack")
}), "getCheckContentLengthHeaderPlugin");

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/region-redirect-endpoint-middleware.js
var regionRedirectEndpointMiddleware = /* @__PURE__ */ __name((config) => {
  return (next, context) => async (args) => {
    const originalRegion = await config.region();
    const regionProviderRef = config.region;
    let unlock = /* @__PURE__ */ __name(() => {
    }, "unlock");
    if (context.__s3RegionRedirect) {
      Object.defineProperty(config, "region", {
        writable: false,
        value: /* @__PURE__ */ __name(async () => {
          return context.__s3RegionRedirect;
        }, "value")
      });
      unlock = /* @__PURE__ */ __name(() => Object.defineProperty(config, "region", {
        writable: true,
        value: regionProviderRef
      }), "unlock");
    }
    try {
      const result = await next(args);
      if (context.__s3RegionRedirect) {
        unlock();
        const region = await config.region();
        if (originalRegion !== region) {
          throw new Error("Region was not restored following S3 region redirect.");
        }
      }
      return result;
    } catch (e2) {
      unlock();
      throw e2;
    }
  };
}, "regionRedirectEndpointMiddleware");
var regionRedirectEndpointMiddlewareOptions = {
  tags: ["REGION_REDIRECT", "S3"],
  name: "regionRedirectEndpointMiddleware",
  override: true,
  relation: "before",
  toMiddleware: "endpointV2Middleware"
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/region-redirect-middleware.js
function regionRedirectMiddleware(clientConfig) {
  return (next, context) => async (args) => {
    try {
      return await next(args);
    } catch (err) {
      if (clientConfig.followRegionRedirects) {
        if (err?.$metadata?.httpStatusCode === 301 || err?.$metadata?.httpStatusCode === 400 && err?.name === "IllegalLocationConstraintException") {
          try {
            const actualRegion = err.$response.headers["x-amz-bucket-region"];
            context.logger?.debug(`Redirecting from ${await clientConfig.region()} to ${actualRegion}`);
            context.__s3RegionRedirect = actualRegion;
          } catch (e2) {
            throw new Error("Region redirect failed: " + e2);
          }
          return next(args);
        }
      }
      throw err;
    }
  };
}
__name(regionRedirectMiddleware, "regionRedirectMiddleware");
var regionRedirectMiddlewareOptions = {
  step: "initialize",
  tags: ["REGION_REDIRECT", "S3"],
  name: "regionRedirectMiddleware",
  override: true
};
var getRegionRedirectMiddlewarePlugin = /* @__PURE__ */ __name((clientConfig) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.add(regionRedirectMiddleware(clientConfig), regionRedirectMiddlewareOptions);
    clientStack.addRelativeTo(regionRedirectEndpointMiddleware(clientConfig), regionRedirectEndpointMiddlewareOptions);
  }, "applyToStack")
}), "getRegionRedirectMiddlewarePlugin");

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-expires-middleware.js
var s3ExpiresMiddleware = /* @__PURE__ */ __name((config) => {
  return (next, context) => async (args) => {
    const result = await next(args);
    const { response } = result;
    if (HttpResponse.isInstance(response)) {
      if (response.headers.expires) {
        response.headers.expiresstring = response.headers.expires;
        try {
          parseRfc7231DateTime(response.headers.expires);
        } catch (e2) {
          context.logger?.warn(`AWS SDK Warning for ${context.clientName}::${context.commandName} response parsing (${response.headers.expires}): ${e2}`);
          delete response.headers.expires;
        }
      }
    }
    return result;
  };
}, "s3ExpiresMiddleware");
var s3ExpiresMiddlewareOptions = {
  tags: ["S3"],
  name: "s3ExpiresMiddleware",
  override: true,
  relation: "after",
  toMiddleware: "deserializerMiddleware"
};
var getS3ExpiresMiddlewarePlugin = /* @__PURE__ */ __name((clientConfig) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.addRelativeTo(s3ExpiresMiddleware(clientConfig), s3ExpiresMiddlewareOptions);
  }, "applyToStack")
}), "getS3ExpiresMiddlewarePlugin");

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/S3ExpressIdentityCache.js
var S3ExpressIdentityCache = class _S3ExpressIdentityCache {
  static {
    __name(this, "S3ExpressIdentityCache");
  }
  data;
  lastPurgeTime = Date.now();
  static EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS = 3e4;
  constructor(data = {}) {
    this.data = data;
  }
  get(key) {
    const entry = this.data[key];
    if (!entry) {
      return;
    }
    return entry;
  }
  set(key, entry) {
    this.data[key] = entry;
    return entry;
  }
  delete(key) {
    delete this.data[key];
  }
  async purgeExpired() {
    const now = Date.now();
    if (this.lastPurgeTime + _S3ExpressIdentityCache.EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS > now) {
      return;
    }
    for (const key in this.data) {
      const entry = this.data[key];
      if (!entry.isRefreshing) {
        const credential = await entry.identity;
        if (credential.expiration) {
          if (credential.expiration.getTime() < now) {
            delete this.data[key];
          }
        }
      }
    }
  }
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/S3ExpressIdentityCacheEntry.js
var S3ExpressIdentityCacheEntry = class {
  static {
    __name(this, "S3ExpressIdentityCacheEntry");
  }
  _identity;
  isRefreshing;
  accessed;
  constructor(_identity, isRefreshing = false, accessed = Date.now()) {
    this._identity = _identity;
    this.isRefreshing = isRefreshing;
    this.accessed = accessed;
  }
  get identity() {
    this.accessed = Date.now();
    return this._identity;
  }
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/S3ExpressIdentityProviderImpl.js
var S3ExpressIdentityProviderImpl = class _S3ExpressIdentityProviderImpl {
  static {
    __name(this, "S3ExpressIdentityProviderImpl");
  }
  createSessionFn;
  cache;
  static REFRESH_WINDOW_MS = 6e4;
  constructor(createSessionFn, cache2 = new S3ExpressIdentityCache()) {
    this.createSessionFn = createSessionFn;
    this.cache = cache2;
  }
  async getS3ExpressIdentity(awsIdentity, identityProperties) {
    const key = identityProperties.Bucket;
    const { cache: cache2 } = this;
    const entry = cache2.get(key);
    if (entry) {
      return entry.identity.then((identity) => {
        const isExpired = (identity.expiration?.getTime() ?? 0) < Date.now();
        if (isExpired) {
          return cache2.set(key, new S3ExpressIdentityCacheEntry(this.getIdentity(key))).identity;
        }
        const isExpiringSoon = (identity.expiration?.getTime() ?? 0) < Date.now() + _S3ExpressIdentityProviderImpl.REFRESH_WINDOW_MS;
        if (isExpiringSoon && !entry.isRefreshing) {
          entry.isRefreshing = true;
          this.getIdentity(key).then((id) => {
            cache2.set(key, new S3ExpressIdentityCacheEntry(Promise.resolve(id)));
          });
        }
        return identity;
      });
    }
    return cache2.set(key, new S3ExpressIdentityCacheEntry(this.getIdentity(key))).identity;
  }
  async getIdentity(key) {
    await this.cache.purgeExpired().catch((error) => {
      console.warn("Error while clearing expired entries in S3ExpressIdentityCache: \n" + error);
    });
    const session = await this.createSessionFn(key);
    if (!session.Credentials?.AccessKeyId || !session.Credentials?.SecretAccessKey) {
      throw new Error("s3#createSession response credential missing AccessKeyId or SecretAccessKey.");
    }
    const identity = {
      accessKeyId: session.Credentials.AccessKeyId,
      secretAccessKey: session.Credentials.SecretAccessKey,
      sessionToken: session.Credentials.SessionToken,
      expiration: session.Credentials.Expiration ? new Date(session.Credentials.Expiration) : void 0
    };
    return identity;
  }
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/constants.js
var S3_EXPRESS_BUCKET_TYPE = "Directory";
var S3_EXPRESS_BACKEND = "S3Express";
var S3_EXPRESS_AUTH_SCHEME = "sigv4-s3express";
var SESSION_TOKEN_QUERY_PARAM = "X-Amz-S3session-Token";
var SESSION_TOKEN_HEADER = SESSION_TOKEN_QUERY_PARAM.toLowerCase();

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/SignatureV4S3Express.js
var SignatureV4S3Express = class extends SignatureV4 {
  static {
    __name(this, "SignatureV4S3Express");
  }
  async signWithCredentials(requestToSign, credentials, options) {
    const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);
    requestToSign.headers[SESSION_TOKEN_HEADER] = credentials.sessionToken;
    const privateAccess = this;
    setSingleOverride(privateAccess, credentialsWithoutSessionToken);
    return privateAccess.signRequest(requestToSign, options ?? {});
  }
  async presignWithCredentials(requestToSign, credentials, options) {
    const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);
    delete requestToSign.headers[SESSION_TOKEN_HEADER];
    requestToSign.headers[SESSION_TOKEN_QUERY_PARAM] = credentials.sessionToken;
    requestToSign.query = requestToSign.query ?? {};
    requestToSign.query[SESSION_TOKEN_QUERY_PARAM] = credentials.sessionToken;
    const privateAccess = this;
    setSingleOverride(privateAccess, credentialsWithoutSessionToken);
    return this.presign(requestToSign, options);
  }
};
function getCredentialsWithoutSessionToken(credentials) {
  const credentialsWithoutSessionToken = {
    accessKeyId: credentials.accessKeyId,
    secretAccessKey: credentials.secretAccessKey,
    expiration: credentials.expiration
  };
  return credentialsWithoutSessionToken;
}
__name(getCredentialsWithoutSessionToken, "getCredentialsWithoutSessionToken");
function setSingleOverride(privateAccess, credentialsWithoutSessionToken) {
  const id = setTimeout(() => {
    throw new Error("SignatureV4S3Express credential override was created but not called.");
  }, 10);
  const currentCredentialProvider = privateAccess.credentialProvider;
  const overrideCredentialsProviderOnce = /* @__PURE__ */ __name(() => {
    clearTimeout(id);
    privateAccess.credentialProvider = currentCredentialProvider;
    return Promise.resolve(credentialsWithoutSessionToken);
  }, "overrideCredentialsProviderOnce");
  privateAccess.credentialProvider = overrideCredentialsProviderOnce;
}
__name(setSingleOverride, "setSingleOverride");

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/functions/s3ExpressMiddleware.js
var s3ExpressMiddleware = /* @__PURE__ */ __name((options) => {
  return (next, context) => async (args) => {
    if (context.endpointV2) {
      const endpoint = context.endpointV2;
      const isS3ExpressAuth = endpoint.properties?.authSchemes?.[0]?.name === S3_EXPRESS_AUTH_SCHEME;
      const isS3ExpressBucket = endpoint.properties?.backend === S3_EXPRESS_BACKEND || endpoint.properties?.bucketType === S3_EXPRESS_BUCKET_TYPE;
      if (isS3ExpressBucket) {
        setFeature(context, "S3_EXPRESS_BUCKET", "J");
        context.isS3ExpressBucket = true;
      }
      if (isS3ExpressAuth) {
        const requestBucket = args.input.Bucket;
        if (requestBucket) {
          const s3ExpressIdentity = await options.s3ExpressIdentityProvider.getS3ExpressIdentity(await options.credentials(), {
            Bucket: requestBucket
          });
          context.s3ExpressIdentity = s3ExpressIdentity;
          if (HttpRequest.isInstance(args.request) && s3ExpressIdentity.sessionToken) {
            args.request.headers[SESSION_TOKEN_HEADER] = s3ExpressIdentity.sessionToken;
          }
        }
      }
    }
    return next(args);
  };
}, "s3ExpressMiddleware");
var s3ExpressMiddlewareOptions = {
  name: "s3ExpressMiddleware",
  step: "build",
  tags: ["S3", "S3_EXPRESS"],
  override: true
};
var getS3ExpressPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.add(s3ExpressMiddleware(options), s3ExpressMiddlewareOptions);
  }, "applyToStack")
}), "getS3ExpressPlugin");

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/functions/signS3Express.js
var signS3Express = /* @__PURE__ */ __name(async (s3ExpressIdentity, signingOptions, request, sigV4MultiRegionSigner) => {
  const signedRequest = await sigV4MultiRegionSigner.signWithCredentials(request, s3ExpressIdentity, {});
  if (signedRequest.headers["X-Amz-Security-Token"] || signedRequest.headers["x-amz-security-token"]) {
    throw new Error("X-Amz-Security-Token must not be set for s3-express requests.");
  }
  return signedRequest;
}, "signS3Express");

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/functions/s3ExpressHttpSigningMiddleware.js
var defaultErrorHandler2 = /* @__PURE__ */ __name((signingProperties) => (error) => {
  throw error;
}, "defaultErrorHandler");
var defaultSuccessHandler2 = /* @__PURE__ */ __name((httpResponse, signingProperties) => {
}, "defaultSuccessHandler");
var s3ExpressHttpSigningMiddleware = /* @__PURE__ */ __name((config) => (next, context) => async (args) => {
  if (!HttpRequest.isInstance(args.request)) {
    return next(args);
  }
  const smithyContext = getSmithyContext(context);
  const scheme = smithyContext.selectedHttpAuthScheme;
  if (!scheme) {
    throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
  }
  const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
  let request;
  if (context.s3ExpressIdentity) {
    request = await signS3Express(context.s3ExpressIdentity, signingProperties, args.request, await config.signer());
  } else {
    request = await signer.sign(args.request, identity, signingProperties);
  }
  const output = await next({
    ...args,
    request
  }).catch((signer.errorHandler || defaultErrorHandler2)(signingProperties));
  (signer.successHandler || defaultSuccessHandler2)(output.response, signingProperties);
  return output;
}, "s3ExpressHttpSigningMiddleware");
var getS3ExpressHttpSigningPlugin = /* @__PURE__ */ __name((config) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.addRelativeTo(s3ExpressHttpSigningMiddleware(config), httpSigningMiddlewareOptions);
  }, "applyToStack")
}), "getS3ExpressHttpSigningPlugin");

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3Configuration.js
var resolveS3Config = /* @__PURE__ */ __name((input, { session }) => {
  const [s3ClientProvider, CreateSessionCommandCtor] = session;
  return {
    ...input,
    forcePathStyle: input.forcePathStyle ?? false,
    useAccelerateEndpoint: input.useAccelerateEndpoint ?? false,
    disableMultiregionAccessPoints: input.disableMultiregionAccessPoints ?? false,
    followRegionRedirects: input.followRegionRedirects ?? false,
    s3ExpressIdentityProvider: input.s3ExpressIdentityProvider ?? new S3ExpressIdentityProviderImpl(async (key) => s3ClientProvider().send(new CreateSessionCommandCtor({
      Bucket: key,
      SessionMode: "ReadWrite"
    }))),
    bucketEndpoint: input.bucketEndpoint ?? false
  };
}, "resolveS3Config");

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/throw-200-exceptions.js
var THROW_IF_EMPTY_BODY = {
  CopyObjectCommand: true,
  UploadPartCopyCommand: true,
  CompleteMultipartUploadCommand: true
};
var MAX_BYTES_TO_INSPECT = 3e3;
var throw200ExceptionsMiddleware = /* @__PURE__ */ __name((config) => (next, context) => async (args) => {
  const result = await next(args);
  const { response } = result;
  if (!HttpResponse.isInstance(response)) {
    return result;
  }
  const { statusCode, body: sourceBody } = response;
  if (statusCode < 200 || statusCode >= 300) {
    return result;
  }
  const isSplittableStream = typeof sourceBody?.stream === "function" || typeof sourceBody?.pipe === "function" || typeof sourceBody?.tee === "function";
  if (!isSplittableStream) {
    return result;
  }
  let bodyCopy = sourceBody;
  let body = sourceBody;
  if (sourceBody && typeof sourceBody === "object" && !(sourceBody instanceof Uint8Array)) {
    [bodyCopy, body] = await splitStream(sourceBody);
  }
  response.body = body;
  const bodyBytes = await collectBody2(bodyCopy, {
    streamCollector: /* @__PURE__ */ __name(async (stream) => {
      return headStream(stream, MAX_BYTES_TO_INSPECT);
    }, "streamCollector")
  });
  if (typeof bodyCopy?.destroy === "function") {
    bodyCopy.destroy();
  }
  const bodyStringTail = config.utf8Encoder(bodyBytes.subarray(bodyBytes.length - 16));
  if (bodyBytes.length === 0 && THROW_IF_EMPTY_BODY[context.commandName]) {
    const err = new Error("S3 aborted request");
    err.name = "InternalError";
    throw err;
  }
  if (bodyStringTail && bodyStringTail.endsWith("</Error>")) {
    response.statusCode = 400;
  }
  return result;
}, "throw200ExceptionsMiddleware");
var collectBody2 = /* @__PURE__ */ __name((streamBody = new Uint8Array(), context) => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
}, "collectBody");
var throw200ExceptionsMiddlewareOptions = {
  relation: "after",
  toMiddleware: "deserializerMiddleware",
  tags: ["THROW_200_EXCEPTIONS", "S3"],
  name: "throw200ExceptionsMiddleware",
  override: true
};
var getThrow200ExceptionsPlugin = /* @__PURE__ */ __name((config) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.addRelativeTo(throw200ExceptionsMiddleware(config), throw200ExceptionsMiddlewareOptions);
  }, "applyToStack")
}), "getThrow200ExceptionsPlugin");

// node_modules/@aws-sdk/util-arn-parser/dist-es/index.js
var validate2 = /* @__PURE__ */ __name((str) => typeof str === "string" && str.indexOf("arn:") === 0 && str.split(":").length >= 6, "validate");

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/bucket-endpoint-middleware.js
function bucketEndpointMiddleware(options) {
  return (next, context) => async (args) => {
    if (options.bucketEndpoint) {
      const endpoint = context.endpointV2;
      if (endpoint) {
        const bucket = args.input.Bucket;
        if (typeof bucket === "string") {
          try {
            const bucketEndpointUrl = new URL(bucket);
            context.endpointV2 = {
              ...endpoint,
              url: bucketEndpointUrl
            };
          } catch (e2) {
            const warning = `@aws-sdk/middleware-sdk-s3: bucketEndpoint=true was set but Bucket=${bucket} could not be parsed as URL.`;
            if (context.logger?.constructor?.name === "NoOpLogger") {
              console.warn(warning);
            } else {
              context.logger?.warn?.(warning);
            }
            throw e2;
          }
        }
      }
    }
    return next(args);
  };
}
__name(bucketEndpointMiddleware, "bucketEndpointMiddleware");
var bucketEndpointMiddlewareOptions = {
  name: "bucketEndpointMiddleware",
  override: true,
  relation: "after",
  toMiddleware: "endpointV2Middleware"
};

// node_modules/@aws-sdk/middleware-sdk-s3/dist-es/validate-bucket-name.js
function validateBucketNameMiddleware({ bucketEndpoint }) {
  return (next) => async (args) => {
    const { input: { Bucket } } = args;
    if (!bucketEndpoint && typeof Bucket === "string" && !validate2(Bucket) && Bucket.indexOf("/") >= 0) {
      const err = new Error(`Bucket name shouldn't contain '/', received '${Bucket}'`);
      err.name = "InvalidBucketName";
      throw err;
    }
    return next({ ...args });
  };
}
__name(validateBucketNameMiddleware, "validateBucketNameMiddleware");
var validateBucketNameMiddlewareOptions = {
  step: "initialize",
  tags: ["VALIDATE_BUCKET_NAME"],
  name: "validateBucketNameMiddleware",
  override: true
};
var getValidateBucketNamePlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.add(validateBucketNameMiddleware(options), validateBucketNameMiddlewareOptions);
    clientStack.addRelativeTo(bucketEndpointMiddleware(options), bucketEndpointMiddlewareOptions);
  }, "applyToStack")
}), "getValidateBucketNamePlugin");

// node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js
var DEFAULT_UA_APP_ID = void 0;
function isValidUserAgentAppId(appId) {
  if (appId === void 0) {
    return true;
  }
  return typeof appId === "string" && appId.length <= 50;
}
__name(isValidUserAgentAppId, "isValidUserAgentAppId");
function resolveUserAgentConfig(input) {
  const normalizedAppIdProvider = normalizeProvider2(input.userAgentAppId ?? DEFAULT_UA_APP_ID);
  return {
    ...input,
    customUserAgent: typeof input.customUserAgent === "string" ? [[input.customUserAgent]] : input.customUserAgent,
    userAgentAppId: /* @__PURE__ */ __name(async () => {
      const appId = await normalizedAppIdProvider();
      if (!isValidUserAgentAppId(appId)) {
        const logger2 = input.logger?.constructor?.name === "NoOpLogger" || !input.logger ? console : input.logger;
        if (typeof appId !== "string") {
          logger2?.warn("userAgentAppId must be a string or undefined.");
        } else if (appId.length > 50) {
          logger2?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
        }
      }
      return appId;
    }, "userAgentAppId")
  };
}
__name(resolveUserAgentConfig, "resolveUserAgentConfig");

// node_modules/@smithy/util-endpoints/dist-es/cache/EndpointCache.js
var EndpointCache = class {
  static {
    __name(this, "EndpointCache");
  }
  capacity;
  data = /* @__PURE__ */ new Map();
  parameters = [];
  constructor({ size, params }) {
    this.capacity = size ?? 50;
    if (params) {
      this.parameters = params;
    }
  }
  get(endpointParams, resolver) {
    const key = this.hash(endpointParams);
    if (key === false) {
      return resolver();
    }
    if (!this.data.has(key)) {
      if (this.data.size > this.capacity + 10) {
        const keys = this.data.keys();
        let i2 = 0;
        while (true) {
          const { value, done } = keys.next();
          this.data.delete(value);
          if (done || ++i2 > 10) {
            break;
          }
        }
      }
      this.data.set(key, resolver());
    }
    return this.data.get(key);
  }
  size() {
    return this.data.size;
  }
  hash(endpointParams) {
    let buffer = "";
    const { parameters } = this;
    if (parameters.length === 0) {
      return false;
    }
    for (const param of parameters) {
      const val = String(endpointParams[param] ?? "");
      if (val.includes("|;")) {
        return false;
      }
      buffer += val + "|;";
    }
    return buffer;
  }
};

// node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js
var IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
var isIpAddress = /* @__PURE__ */ __name((value) => IP_V4_REGEX.test(value) || value.startsWith("[") && value.endsWith("]"), "isIpAddress");

// node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js
var VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
var isValidHostLabel = /* @__PURE__ */ __name((value, allowSubDomains = false) => {
  if (!allowSubDomains) {
    return VALID_HOST_LABEL_REGEX.test(value);
  }
  const labels = value.split(".");
  for (const label of labels) {
    if (!isValidHostLabel(label)) {
      return false;
    }
  }
  return true;
}, "isValidHostLabel");

// node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js
var customEndpointFunctions = {};

// node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js
var debugId = "endpoints";

// node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js
function toDebugString(input) {
  if (typeof input !== "object" || input == null) {
    return input;
  }
  if ("ref" in input) {
    return `$${toDebugString(input.ref)}`;
  }
  if ("fn" in input) {
    return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
  }
  return JSON.stringify(input, null, 2);
}
__name(toDebugString, "toDebugString");

// node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js
var EndpointError = class extends Error {
  static {
    __name(this, "EndpointError");
  }
  constructor(message) {
    super(message);
    this.name = "EndpointError";
  }
};

// node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js
var booleanEquals = /* @__PURE__ */ __name((value1, value2) => value1 === value2, "booleanEquals");

// node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js
var getAttrPathList = /* @__PURE__ */ __name((path) => {
  const parts = path.split(".");
  const pathList = [];
  for (const part of parts) {
    const squareBracketIndex = part.indexOf("[");
    if (squareBracketIndex !== -1) {
      if (part.indexOf("]") !== part.length - 1) {
        throw new EndpointError(`Path: '${path}' does not end with ']'`);
      }
      const arrayIndex = part.slice(squareBracketIndex + 1, -1);
      if (Number.isNaN(parseInt(arrayIndex))) {
        throw new EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
      }
      if (squareBracketIndex !== 0) {
        pathList.push(part.slice(0, squareBracketIndex));
      }
      pathList.push(arrayIndex);
    } else {
      pathList.push(part);
    }
  }
  return pathList;
}, "getAttrPathList");

// node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js
var getAttr = /* @__PURE__ */ __name((value, path) => getAttrPathList(path).reduce((acc, index) => {
  if (typeof acc !== "object") {
    throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
  } else if (Array.isArray(acc)) {
    return acc[parseInt(index)];
  }
  return acc[index];
}, value), "getAttr");

// node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js
var isSet = /* @__PURE__ */ __name((value) => value != null, "isSet");

// node_modules/@smithy/util-endpoints/dist-es/lib/not.js
var not = /* @__PURE__ */ __name((value) => !value, "not");

// node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js
var DEFAULT_PORTS = {
  [EndpointURLScheme.HTTP]: 80,
  [EndpointURLScheme.HTTPS]: 443
};
var parseURL = /* @__PURE__ */ __name((value) => {
  const whatwgURL = (() => {
    try {
      if (value instanceof URL) {
        return value;
      }
      if (typeof value === "object" && "hostname" in value) {
        const { hostname: hostname2, port, protocol: protocol2 = "", path = "", query = {} } = value;
        const url = new URL(`${protocol2}//${hostname2}${port ? `:${port}` : ""}${path}`);
        url.search = Object.entries(query).map(([k2, v2]) => `${k2}=${v2}`).join("&");
        return url;
      }
      return new URL(value);
    } catch (error) {
      return null;
    }
  })();
  if (!whatwgURL) {
    console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
    return null;
  }
  const urlString = whatwgURL.href;
  const { host, hostname, pathname, protocol, search } = whatwgURL;
  if (search) {
    return null;
  }
  const scheme = protocol.slice(0, -1);
  if (!Object.values(EndpointURLScheme).includes(scheme)) {
    return null;
  }
  const isIp = isIpAddress(hostname);
  const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) || typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`);
  const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
  return {
    scheme,
    authority,
    path: pathname,
    normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
    isIp
  };
}, "parseURL");

// node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js
var stringEquals = /* @__PURE__ */ __name((value1, value2) => value1 === value2, "stringEquals");

// node_modules/@smithy/util-endpoints/dist-es/lib/substring.js
var substring = /* @__PURE__ */ __name((input, start, stop, reverse) => {
  if (start >= stop || input.length < stop || /[^\u0000-\u007f]/.test(input)) {
    return null;
  }
  if (!reverse) {
    return input.substring(start, stop);
  }
  return input.substring(input.length - stop, input.length - start);
}, "substring");

// node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js
var uriEncode = /* @__PURE__ */ __name((value) => encodeURIComponent(value).replace(/[!*'()]/g, (c2) => `%${c2.charCodeAt(0).toString(16).toUpperCase()}`), "uriEncode");

// node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js
var endpointFunctions = {
  booleanEquals,
  getAttr,
  isSet,
  isValidHostLabel,
  not,
  parseURL,
  stringEquals,
  substring,
  uriEncode
};

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js
var evaluateTemplate = /* @__PURE__ */ __name((template, options) => {
  const evaluatedTemplateArr = [];
  const templateContext = {
    ...options.endpointParams,
    ...options.referenceRecord
  };
  let currentIndex = 0;
  while (currentIndex < template.length) {
    const openingBraceIndex = template.indexOf("{", currentIndex);
    if (openingBraceIndex === -1) {
      evaluatedTemplateArr.push(template.slice(currentIndex));
      break;
    }
    evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
    const closingBraceIndex = template.indexOf("}", openingBraceIndex);
    if (closingBraceIndex === -1) {
      evaluatedTemplateArr.push(template.slice(openingBraceIndex));
      break;
    }
    if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
      evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
      currentIndex = closingBraceIndex + 2;
    }
    const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
    if (parameterName.includes("#")) {
      const [refName, attrName] = parameterName.split("#");
      evaluatedTemplateArr.push(getAttr(templateContext[refName], attrName));
    } else {
      evaluatedTemplateArr.push(templateContext[parameterName]);
    }
    currentIndex = closingBraceIndex + 1;
  }
  return evaluatedTemplateArr.join("");
}, "evaluateTemplate");

// node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js
var getReferenceValue = /* @__PURE__ */ __name(({ ref }, options) => {
  const referenceRecord = {
    ...options.endpointParams,
    ...options.referenceRecord
  };
  return referenceRecord[ref];
}, "getReferenceValue");

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js
var evaluateExpression = /* @__PURE__ */ __name((obj, keyName, options) => {
  if (typeof obj === "string") {
    return evaluateTemplate(obj, options);
  } else if (obj["fn"]) {
    return group.callFunction(obj, options);
  } else if (obj["ref"]) {
    return getReferenceValue(obj, options);
  }
  throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
}, "evaluateExpression");
var callFunction = /* @__PURE__ */ __name(({ fn, argv }, options) => {
  const evaluatedArgs = argv.map((arg) => ["boolean", "number"].includes(typeof arg) ? arg : group.evaluateExpression(arg, "arg", options));
  const fnSegments = fn.split(".");
  if (fnSegments[0] in customEndpointFunctions && fnSegments[1] != null) {
    return customEndpointFunctions[fnSegments[0]][fnSegments[1]](...evaluatedArgs);
  }
  return endpointFunctions[fn](...evaluatedArgs);
}, "callFunction");
var group = {
  evaluateExpression,
  callFunction
};

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js
var evaluateCondition = /* @__PURE__ */ __name(({ assign, ...fnArgs }, options) => {
  if (assign && assign in options.referenceRecord) {
    throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
  }
  const value = callFunction(fnArgs, options);
  options.logger?.debug?.(`${debugId} evaluateCondition: ${toDebugString(fnArgs)} = ${toDebugString(value)}`);
  return {
    result: value === "" ? true : !!value,
    ...assign != null && { toAssign: { name: assign, value } }
  };
}, "evaluateCondition");

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js
var evaluateConditions = /* @__PURE__ */ __name((conditions = [], options) => {
  const conditionsReferenceRecord = {};
  for (const condition of conditions) {
    const { result, toAssign } = evaluateCondition(condition, {
      ...options,
      referenceRecord: {
        ...options.referenceRecord,
        ...conditionsReferenceRecord
      }
    });
    if (!result) {
      return { result };
    }
    if (toAssign) {
      conditionsReferenceRecord[toAssign.name] = toAssign.value;
      options.logger?.debug?.(`${debugId} assign: ${toAssign.name} := ${toDebugString(toAssign.value)}`);
    }
  }
  return { result: true, referenceRecord: conditionsReferenceRecord };
}, "evaluateConditions");

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js
var getEndpointHeaders = /* @__PURE__ */ __name((headers, options) => Object.entries(headers).reduce((acc, [headerKey, headerVal]) => ({
  ...acc,
  [headerKey]: headerVal.map((headerValEntry) => {
    const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
    if (typeof processedExpr !== "string") {
      throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
    }
    return processedExpr;
  })
}), {}), "getEndpointHeaders");

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js
var getEndpointProperties = /* @__PURE__ */ __name((properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => ({
  ...acc,
  [propertyKey]: group2.getEndpointProperty(propertyVal, options)
}), {}), "getEndpointProperties");
var getEndpointProperty = /* @__PURE__ */ __name((property, options) => {
  if (Array.isArray(property)) {
    return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
  }
  switch (typeof property) {
    case "string":
      return evaluateTemplate(property, options);
    case "object":
      if (property === null) {
        throw new EndpointError(`Unexpected endpoint property: ${property}`);
      }
      return group2.getEndpointProperties(property, options);
    case "boolean":
      return property;
    default:
      throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
  }
}, "getEndpointProperty");
var group2 = {
  getEndpointProperty,
  getEndpointProperties
};

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js
var getEndpointUrl = /* @__PURE__ */ __name((endpointUrl, options) => {
  const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
  if (typeof expression === "string") {
    try {
      return new URL(expression);
    } catch (error) {
      console.error(`Failed to construct URL with ${expression}`, error);
      throw error;
    }
  }
  throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
}, "getEndpointUrl");

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js
var evaluateEndpointRule = /* @__PURE__ */ __name((endpointRule, options) => {
  const { conditions, endpoint } = endpointRule;
  const { result, referenceRecord } = evaluateConditions(conditions, options);
  if (!result) {
    return;
  }
  const endpointRuleOptions = {
    ...options,
    referenceRecord: { ...options.referenceRecord, ...referenceRecord }
  };
  const { url, properties, headers } = endpoint;
  options.logger?.debug?.(`${debugId} Resolving endpoint from template: ${toDebugString(endpoint)}`);
  return {
    ...headers != void 0 && {
      headers: getEndpointHeaders(headers, endpointRuleOptions)
    },
    ...properties != void 0 && {
      properties: getEndpointProperties(properties, endpointRuleOptions)
    },
    url: getEndpointUrl(url, endpointRuleOptions)
  };
}, "evaluateEndpointRule");

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateErrorRule.js
var evaluateErrorRule = /* @__PURE__ */ __name((errorRule, options) => {
  const { conditions, error } = errorRule;
  const { result, referenceRecord } = evaluateConditions(conditions, options);
  if (!result) {
    return;
  }
  throw new EndpointError(evaluateExpression(error, "Error", {
    ...options,
    referenceRecord: { ...options.referenceRecord, ...referenceRecord }
  }));
}, "evaluateErrorRule");

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js
var evaluateRules = /* @__PURE__ */ __name((rules, options) => {
  for (const rule of rules) {
    if (rule.type === "endpoint") {
      const endpointOrUndefined = evaluateEndpointRule(rule, options);
      if (endpointOrUndefined) {
        return endpointOrUndefined;
      }
    } else if (rule.type === "error") {
      evaluateErrorRule(rule, options);
    } else if (rule.type === "tree") {
      const endpointOrUndefined = group3.evaluateTreeRule(rule, options);
      if (endpointOrUndefined) {
        return endpointOrUndefined;
      }
    } else {
      throw new EndpointError(`Unknown endpoint rule: ${rule}`);
    }
  }
  throw new EndpointError(`Rules evaluation failed`);
}, "evaluateRules");
var evaluateTreeRule = /* @__PURE__ */ __name((treeRule, options) => {
  const { conditions, rules } = treeRule;
  const { result, referenceRecord } = evaluateConditions(conditions, options);
  if (!result) {
    return;
  }
  return group3.evaluateRules(rules, {
    ...options,
    referenceRecord: { ...options.referenceRecord, ...referenceRecord }
  });
}, "evaluateTreeRule");
var group3 = {
  evaluateRules,
  evaluateTreeRule
};

// node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js
var resolveEndpoint = /* @__PURE__ */ __name((ruleSetObject, options) => {
  const { endpointParams, logger: logger2 } = options;
  const { parameters, rules } = ruleSetObject;
  options.logger?.debug?.(`${debugId} Initial EndpointParams: ${toDebugString(endpointParams)}`);
  const paramsWithDefault = Object.entries(parameters).filter(([, v2]) => v2.default != null).map(([k2, v2]) => [k2, v2.default]);
  if (paramsWithDefault.length > 0) {
    for (const [paramKey, paramDefaultValue] of paramsWithDefault) {
      endpointParams[paramKey] = endpointParams[paramKey] ?? paramDefaultValue;
    }
  }
  const requiredParams = Object.entries(parameters).filter(([, v2]) => v2.required).map(([k2]) => k2);
  for (const requiredParam of requiredParams) {
    if (endpointParams[requiredParam] == null) {
      throw new EndpointError(`Missing required parameter: '${requiredParam}'`);
    }
  }
  const endpoint = evaluateRules(rules, { endpointParams, logger: logger2, referenceRecord: {} });
  options.logger?.debug?.(`${debugId} Resolved endpoint: ${toDebugString(endpoint)}`);
  return endpoint;
}, "resolveEndpoint");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js
var isVirtualHostableS3Bucket = /* @__PURE__ */ __name((value, allowSubDomains = false) => {
  if (allowSubDomains) {
    for (const label of value.split(".")) {
      if (!isVirtualHostableS3Bucket(label)) {
        return false;
      }
    }
    return true;
  }
  if (!isValidHostLabel(value)) {
    return false;
  }
  if (value.length < 3 || value.length > 63) {
    return false;
  }
  if (value !== value.toLowerCase()) {
    return false;
  }
  if (isIpAddress(value)) {
    return false;
  }
  return true;
}, "isVirtualHostableS3Bucket");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js
var ARN_DELIMITER = ":";
var RESOURCE_DELIMITER = "/";
var parseArn = /* @__PURE__ */ __name((value) => {
  const segments = value.split(ARN_DELIMITER);
  if (segments.length < 6)
    return null;
  const [arn, partition2, service, region, accountId, ...resourcePath] = segments;
  if (arn !== "arn" || partition2 === "" || service === "" || resourcePath.join(ARN_DELIMITER) === "")
    return null;
  const resourceId = resourcePath.map((resource) => resource.split(RESOURCE_DELIMITER)).flat();
  return {
    partition: partition2,
    service,
    region,
    accountId,
    resourceId
  };
}, "parseArn");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json
var partitions_default = {
  partitions: [{
    id: "aws",
    outputs: {
      dnsSuffix: "amazonaws.com",
      dualStackDnsSuffix: "api.aws",
      implicitGlobalRegion: "us-east-1",
      name: "aws",
      supportsDualStack: true,
      supportsFIPS: true
    },
    regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$",
    regions: {
      "af-south-1": {
        description: "Africa (Cape Town)"
      },
      "ap-east-1": {
        description: "Asia Pacific (Hong Kong)"
      },
      "ap-northeast-1": {
        description: "Asia Pacific (Tokyo)"
      },
      "ap-northeast-2": {
        description: "Asia Pacific (Seoul)"
      },
      "ap-northeast-3": {
        description: "Asia Pacific (Osaka)"
      },
      "ap-south-1": {
        description: "Asia Pacific (Mumbai)"
      },
      "ap-south-2": {
        description: "Asia Pacific (Hyderabad)"
      },
      "ap-southeast-1": {
        description: "Asia Pacific (Singapore)"
      },
      "ap-southeast-2": {
        description: "Asia Pacific (Sydney)"
      },
      "ap-southeast-3": {
        description: "Asia Pacific (Jakarta)"
      },
      "ap-southeast-4": {
        description: "Asia Pacific (Melbourne)"
      },
      "ap-southeast-5": {
        description: "Asia Pacific (Malaysia)"
      },
      "ap-southeast-7": {
        description: "Asia Pacific (Thailand)"
      },
      "aws-global": {
        description: "AWS Standard global region"
      },
      "ca-central-1": {
        description: "Canada (Central)"
      },
      "ca-west-1": {
        description: "Canada West (Calgary)"
      },
      "eu-central-1": {
        description: "Europe (Frankfurt)"
      },
      "eu-central-2": {
        description: "Europe (Zurich)"
      },
      "eu-north-1": {
        description: "Europe (Stockholm)"
      },
      "eu-south-1": {
        description: "Europe (Milan)"
      },
      "eu-south-2": {
        description: "Europe (Spain)"
      },
      "eu-west-1": {
        description: "Europe (Ireland)"
      },
      "eu-west-2": {
        description: "Europe (London)"
      },
      "eu-west-3": {
        description: "Europe (Paris)"
      },
      "il-central-1": {
        description: "Israel (Tel Aviv)"
      },
      "me-central-1": {
        description: "Middle East (UAE)"
      },
      "me-south-1": {
        description: "Middle East (Bahrain)"
      },
      "sa-east-1": {
        description: "South America (Sao Paulo)"
      },
      "us-east-1": {
        description: "US East (N. Virginia)"
      },
      "us-east-2": {
        description: "US East (Ohio)"
      },
      "us-west-1": {
        description: "US West (N. California)"
      },
      "us-west-2": {
        description: "US West (Oregon)"
      }
    }
  }, {
    id: "aws-cn",
    outputs: {
      dnsSuffix: "amazonaws.com.cn",
      dualStackDnsSuffix: "api.amazonwebservices.com.cn",
      implicitGlobalRegion: "cn-northwest-1",
      name: "aws-cn",
      supportsDualStack: true,
      supportsFIPS: true
    },
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    regions: {
      "aws-cn-global": {
        description: "AWS China global region"
      },
      "cn-north-1": {
        description: "China (Beijing)"
      },
      "cn-northwest-1": {
        description: "China (Ningxia)"
      }
    }
  }, {
    id: "aws-us-gov",
    outputs: {
      dnsSuffix: "amazonaws.com",
      dualStackDnsSuffix: "api.aws",
      implicitGlobalRegion: "us-gov-west-1",
      name: "aws-us-gov",
      supportsDualStack: true,
      supportsFIPS: true
    },
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    regions: {
      "aws-us-gov-global": {
        description: "AWS GovCloud (US) global region"
      },
      "us-gov-east-1": {
        description: "AWS GovCloud (US-East)"
      },
      "us-gov-west-1": {
        description: "AWS GovCloud (US-West)"
      }
    }
  }, {
    id: "aws-iso",
    outputs: {
      dnsSuffix: "c2s.ic.gov",
      dualStackDnsSuffix: "c2s.ic.gov",
      implicitGlobalRegion: "us-iso-east-1",
      name: "aws-iso",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    regions: {
      "aws-iso-global": {
        description: "AWS ISO (US) global region"
      },
      "us-iso-east-1": {
        description: "US ISO East"
      },
      "us-iso-west-1": {
        description: "US ISO WEST"
      }
    }
  }, {
    id: "aws-iso-b",
    outputs: {
      dnsSuffix: "sc2s.sgov.gov",
      dualStackDnsSuffix: "sc2s.sgov.gov",
      implicitGlobalRegion: "us-isob-east-1",
      name: "aws-iso-b",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    regions: {
      "aws-iso-b-global": {
        description: "AWS ISOB (US) global region"
      },
      "us-isob-east-1": {
        description: "US ISOB East (Ohio)"
      }
    }
  }, {
    id: "aws-iso-e",
    outputs: {
      dnsSuffix: "cloud.adc-e.uk",
      dualStackDnsSuffix: "cloud.adc-e.uk",
      implicitGlobalRegion: "eu-isoe-west-1",
      name: "aws-iso-e",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
    regions: {
      "eu-isoe-west-1": {
        description: "EU ISOE West"
      }
    }
  }, {
    id: "aws-iso-f",
    outputs: {
      dnsSuffix: "csp.hci.ic.gov",
      dualStackDnsSuffix: "csp.hci.ic.gov",
      implicitGlobalRegion: "us-isof-south-1",
      name: "aws-iso-f",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
    regions: {}
  }],
  version: "1.1"
};

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js
var selectedPartitionsInfo = partitions_default;
var selectedUserAgentPrefix = "";
var partition = /* @__PURE__ */ __name((value) => {
  const { partitions } = selectedPartitionsInfo;
  for (const partition2 of partitions) {
    const { regions, outputs } = partition2;
    for (const [region, regionData] of Object.entries(regions)) {
      if (region === value) {
        return {
          ...outputs,
          ...regionData
        };
      }
    }
  }
  for (const partition2 of partitions) {
    const { regionRegex, outputs } = partition2;
    if (new RegExp(regionRegex).test(value)) {
      return {
        ...outputs
      };
    }
  }
  const DEFAULT_PARTITION = partitions.find((partition2) => partition2.id === "aws");
  if (!DEFAULT_PARTITION) {
    throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
  }
  return {
    ...DEFAULT_PARTITION.outputs
  };
}, "partition");
var getUserAgentPrefix = /* @__PURE__ */ __name(() => selectedUserAgentPrefix, "getUserAgentPrefix");

// node_modules/@aws-sdk/util-endpoints/dist-es/aws.js
var awsEndpointFunctions = {
  isVirtualHostableS3Bucket,
  parseArn,
  partition
};
customEndpointFunctions.aws = awsEndpointFunctions;

// node_modules/@aws-sdk/middleware-user-agent/dist-es/check-features.js
var ACCOUNT_ID_ENDPOINT_REGEX = /\d{12}\.ddb/;
async function checkFeatures(context, config, args) {
  const request = args.request;
  if (request?.headers?.["smithy-protocol"] === "rpc-v2-cbor") {
    setFeature(context, "PROTOCOL_RPC_V2_CBOR", "M");
  }
  if (typeof config.retryStrategy === "function") {
    const retryStrategy = await config.retryStrategy();
    if (typeof retryStrategy.acquireInitialRetryToken === "function") {
      if (retryStrategy.constructor?.name?.includes("Adaptive")) {
        setFeature(context, "RETRY_MODE_ADAPTIVE", "F");
      } else {
        setFeature(context, "RETRY_MODE_STANDARD", "E");
      }
    } else {
      setFeature(context, "RETRY_MODE_LEGACY", "D");
    }
  }
  if (typeof config.accountIdEndpointMode === "function") {
    const endpointV2 = context.endpointV2;
    if (String(endpointV2?.url?.hostname).match(ACCOUNT_ID_ENDPOINT_REGEX)) {
      setFeature(context, "ACCOUNT_ID_ENDPOINT", "O");
    }
    switch (await config.accountIdEndpointMode?.()) {
      case "disabled":
        setFeature(context, "ACCOUNT_ID_MODE_DISABLED", "Q");
        break;
      case "preferred":
        setFeature(context, "ACCOUNT_ID_MODE_PREFERRED", "P");
        break;
      case "required":
        setFeature(context, "ACCOUNT_ID_MODE_REQUIRED", "R");
        break;
    }
  }
  const identity = context.__smithy_context?.selectedHttpAuthScheme?.identity;
  if (identity?.$source) {
    const credentials = identity;
    if (credentials.accountId) {
      setFeature(context, "RESOLVED_ACCOUNT_ID", "T");
    }
    for (const [key, value] of Object.entries(credentials.$source ?? {})) {
      setFeature(context, key, value);
    }
  }
}
__name(checkFeatures, "checkFeatures");

// node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js
var USER_AGENT = "user-agent";
var X_AMZ_USER_AGENT = "x-amz-user-agent";
var SPACE = " ";
var UA_NAME_SEPARATOR = "/";
var UA_NAME_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
var UA_VALUE_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
var UA_ESCAPE_CHAR = "-";

// node_modules/@aws-sdk/middleware-user-agent/dist-es/encode-features.js
var BYTE_LIMIT = 1024;
function encodeFeatures(features) {
  let buffer = "";
  for (const key in features) {
    const val = features[key];
    if (buffer.length + val.length + 1 <= BYTE_LIMIT) {
      if (buffer.length) {
        buffer += "," + val;
      } else {
        buffer += val;
      }
      continue;
    }
    break;
  }
  return buffer;
}
__name(encodeFeatures, "encodeFeatures");

// node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js
var userAgentMiddleware = /* @__PURE__ */ __name((options) => (next, context) => async (args) => {
  const { request } = args;
  if (!HttpRequest.isInstance(request)) {
    return next(args);
  }
  const { headers } = request;
  const userAgent = context?.userAgent?.map(escapeUserAgent) || [];
  const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
  await checkFeatures(context, options, args);
  const awsContext = context;
  defaultUserAgent.push(`m/${encodeFeatures(Object.assign({}, context.__smithy_context?.features, awsContext.__aws_sdk_context?.features))}`);
  const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
  const appId = await options.userAgentAppId();
  if (appId) {
    defaultUserAgent.push(escapeUserAgent([`app/${appId}`]));
  }
  const prefix = getUserAgentPrefix();
  const sdkUserAgentValue = (prefix ? [prefix] : []).concat([...defaultUserAgent, ...userAgent, ...customUserAgent]).join(SPACE);
  const normalUAValue = [
    ...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")),
    ...customUserAgent
  ].join(SPACE);
  if (options.runtime !== "browser") {
    if (normalUAValue) {
      headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT] ? `${headers[USER_AGENT]} ${normalUAValue}` : normalUAValue;
    }
    headers[USER_AGENT] = sdkUserAgentValue;
  } else {
    headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
  }
  return next({
    ...args,
    request
  });
}, "userAgentMiddleware");
var escapeUserAgent = /* @__PURE__ */ __name((userAgentPair) => {
  const name = userAgentPair[0].split(UA_NAME_SEPARATOR).map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR)).join(UA_NAME_SEPARATOR);
  const version = userAgentPair[1]?.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
  const prefixSeparatorIndex = name.indexOf(UA_NAME_SEPARATOR);
  const prefix = name.substring(0, prefixSeparatorIndex);
  let uaName = name.substring(prefixSeparatorIndex + 1);
  if (prefix === "api") {
    uaName = uaName.toLowerCase();
  }
  return [prefix, uaName, version].filter((item) => item && item.length > 0).reduce((acc, item, index) => {
    switch (index) {
      case 0:
        return item;
      case 1:
        return `${acc}/${item}`;
      default:
        return `${acc}#${item}`;
    }
  }, "");
}, "escapeUserAgent");
var getUserAgentMiddlewareOptions = {
  name: "getUserAgentMiddleware",
  step: "build",
  priority: "low",
  tags: ["SET_USER_AGENT", "USER_AGENT"],
  override: true
};
var getUserAgentPlugin = /* @__PURE__ */ __name((config) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
  }, "applyToStack")
}), "getUserAgentPlugin");

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js
var DEFAULT_USE_DUALSTACK_ENDPOINT = false;

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js
var DEFAULT_USE_FIPS_ENDPOINT = false;

// node_modules/@smithy/config-resolver/dist-es/regionConfig/checkRegion.js
var validRegions = /* @__PURE__ */ new Set();
var checkRegion = /* @__PURE__ */ __name((region, check = isValidHostLabel) => {
  if (!validRegions.has(region) && !check(region)) {
    if (region === "*") {
      console.warn(`@smithy/config-resolver WARN - Please use the caller region instead of "*". See "sigv4a" in https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md.`);
    } else {
      throw new Error(`Region not accepted: region="${region}" is not a valid hostname component.`);
    }
  } else {
    validRegions.add(region);
  }
}, "checkRegion");

// node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js
var isFipsRegion = /* @__PURE__ */ __name((region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips")), "isFipsRegion");

// node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js
var getRealRegion = /* @__PURE__ */ __name((region) => isFipsRegion(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region, "getRealRegion");

// node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js
var resolveRegionConfig = /* @__PURE__ */ __name((input) => {
  const { region, useFipsEndpoint } = input;
  if (!region) {
    throw new Error("Region is missing");
  }
  return Object.assign(input, {
    region: /* @__PURE__ */ __name(async () => {
      const providedRegion = typeof region === "function" ? await region() : region;
      const realRegion = getRealRegion(providedRegion);
      checkRegion(realRegion);
      return realRegion;
    }, "region"),
    useFipsEndpoint: /* @__PURE__ */ __name(async () => {
      const providedRegion = typeof region === "string" ? region : await region();
      if (isFipsRegion(providedRegion)) {
        return true;
      }
      return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
    }, "useFipsEndpoint")
  });
}, "resolveRegionConfig");

// node_modules/@smithy/eventstream-serde-config-resolver/dist-es/EventStreamSerdeConfig.js
var resolveEventStreamSerdeConfig = /* @__PURE__ */ __name((input) => Object.assign(input, {
  eventStreamMarshaller: input.eventStreamSerdeProvider(input)
}), "resolveEventStreamSerdeConfig");

// node_modules/@smithy/middleware-content-length/dist-es/index.js
var CONTENT_LENGTH_HEADER2 = "content-length";
function contentLengthMiddleware(bodyLengthChecker) {
  return (next) => async (args) => {
    const request = args.request;
    if (HttpRequest.isInstance(request)) {
      const { body, headers } = request;
      if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf(CONTENT_LENGTH_HEADER2) === -1) {
        try {
          const length = bodyLengthChecker(body);
          request.headers = {
            ...request.headers,
            [CONTENT_LENGTH_HEADER2]: String(length)
          };
        } catch (error) {
        }
      }
    }
    return next({
      ...args,
      request
    });
  };
}
__name(contentLengthMiddleware, "contentLengthMiddleware");
var contentLengthMiddlewareOptions = {
  step: "build",
  tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
  name: "contentLengthMiddleware",
  override: true
};
var getContentLengthPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
  }, "applyToStack")
}), "getContentLengthPlugin");

// node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js
var resolveParamsForS3 = /* @__PURE__ */ __name(async (endpointParams) => {
  const bucket = endpointParams?.Bucket || "";
  if (typeof endpointParams.Bucket === "string") {
    endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
  }
  if (isArnBucketName(bucket)) {
    if (endpointParams.ForcePathStyle === true) {
      throw new Error("Path-style addressing cannot be used with ARN buckets");
    }
  } else if (!isDnsCompatibleBucketName(bucket) || bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:") || bucket.toLowerCase() !== bucket || bucket.length < 3) {
    endpointParams.ForcePathStyle = true;
  }
  if (endpointParams.DisableMultiRegionAccessPoints) {
    endpointParams.disableMultiRegionAccessPoints = true;
    endpointParams.DisableMRAP = true;
  }
  return endpointParams;
}, "resolveParamsForS3");
var DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
var IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
var DOTS_PATTERN = /\.\./;
var isDnsCompatibleBucketName = /* @__PURE__ */ __name((bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName), "isDnsCompatibleBucketName");
var isArnBucketName = /* @__PURE__ */ __name((bucketName) => {
  const [arn, partition2, service, , , bucket] = bucketName.split(":");
  const isArn = arn === "arn" && bucketName.split(":").length >= 6;
  const isValidArn = Boolean(isArn && partition2 && service && bucket);
  if (isArn && !isValidArn) {
    throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
  }
  return isValidArn;
}, "isArnBucketName");

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js
var createConfigValueProvider = /* @__PURE__ */ __name((configKey, canonicalEndpointParamKey, config, isClientContextParam = false) => {
  const configProvider = /* @__PURE__ */ __name(async () => {
    let configValue;
    if (isClientContextParam) {
      const clientContextParams = config.clientContextParams;
      const nestedValue = clientContextParams?.[configKey];
      configValue = nestedValue ?? config[configKey] ?? config[canonicalEndpointParamKey];
    } else {
      configValue = config[configKey] ?? config[canonicalEndpointParamKey];
    }
    if (typeof configValue === "function") {
      return configValue();
    }
    return configValue;
  }, "configProvider");
  if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
    return async () => {
      const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
      const configValue = credentials?.credentialScope ?? credentials?.CredentialScope;
      return configValue;
    };
  }
  if (configKey === "accountId" || canonicalEndpointParamKey === "AccountId") {
    return async () => {
      const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
      const configValue = credentials?.accountId ?? credentials?.AccountId;
      return configValue;
    };
  }
  if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
    return async () => {
      if (config.isCustomEndpoint === false) {
        return void 0;
      }
      const endpoint = await configProvider();
      if (endpoint && typeof endpoint === "object") {
        if ("url" in endpoint) {
          return endpoint.url.href;
        }
        if ("hostname" in endpoint) {
          const { protocol, hostname, port, path } = endpoint;
          return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
        }
      }
      return endpoint;
    };
  }
  return configProvider;
}, "createConfigValueProvider");

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.browser.js
var getEndpointFromConfig = /* @__PURE__ */ __name(async (serviceId) => void 0, "getEndpointFromConfig");

// node_modules/@smithy/querystring-parser/dist-es/index.js
function parseQueryString(querystring) {
  const query = {};
  querystring = querystring.replace(/^\?/, "");
  if (querystring) {
    for (const pair of querystring.split("&")) {
      let [key, value = null] = pair.split("=");
      key = decodeURIComponent(key);
      if (value) {
        value = decodeURIComponent(value);
      }
      if (!(key in query)) {
        query[key] = value;
      } else if (Array.isArray(query[key])) {
        query[key].push(value);
      } else {
        query[key] = [query[key], value];
      }
    }
  }
  return query;
}
__name(parseQueryString, "parseQueryString");

// node_modules/@smithy/url-parser/dist-es/index.js
var parseUrl = /* @__PURE__ */ __name((url) => {
  if (typeof url === "string") {
    return parseUrl(new URL(url));
  }
  const { hostname, pathname, port, protocol, search } = url;
  let query;
  if (search) {
    query = parseQueryString(search);
  }
  return {
    hostname,
    port: port ? parseInt(port) : void 0,
    protocol,
    path: pathname,
    query
  };
}, "parseUrl");

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js
var toEndpointV1 = /* @__PURE__ */ __name((endpoint) => {
  if (typeof endpoint === "object") {
    if ("url" in endpoint) {
      return parseUrl(endpoint.url);
    }
    return endpoint;
  }
  return parseUrl(endpoint);
}, "toEndpointV1");

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js
var getEndpointFromInstructions = /* @__PURE__ */ __name(async (commandInput, instructionsSupplier, clientConfig, context) => {
  if (!clientConfig.isCustomEndpoint) {
    let endpointFromConfig;
    if (clientConfig.serviceConfiguredEndpoint) {
      endpointFromConfig = await clientConfig.serviceConfiguredEndpoint();
    } else {
      endpointFromConfig = await getEndpointFromConfig(clientConfig.serviceId);
    }
    if (endpointFromConfig) {
      clientConfig.endpoint = () => Promise.resolve(toEndpointV1(endpointFromConfig));
      clientConfig.isCustomEndpoint = true;
    }
  }
  const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
  if (typeof clientConfig.endpointProvider !== "function") {
    throw new Error("config.endpointProvider is not set.");
  }
  const endpoint = clientConfig.endpointProvider(endpointParams, context);
  return endpoint;
}, "getEndpointFromInstructions");
var resolveParams = /* @__PURE__ */ __name(async (commandInput, instructionsSupplier, clientConfig) => {
  const endpointParams = {};
  const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
  for (const [name, instruction] of Object.entries(instructions)) {
    switch (instruction.type) {
      case "staticContextParams":
        endpointParams[name] = instruction.value;
        break;
      case "contextParams":
        endpointParams[name] = commandInput[instruction.name];
        break;
      case "clientContextParams":
      case "builtInParams":
        endpointParams[name] = await createConfigValueProvider(instruction.name, name, clientConfig, instruction.type !== "builtInParams")();
        break;
      case "operationContextParams":
        endpointParams[name] = instruction.get(commandInput);
        break;
      default:
        throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
    }
  }
  if (Object.keys(instructions).length === 0) {
    Object.assign(endpointParams, clientConfig);
  }
  if (String(clientConfig.serviceId).toLowerCase() === "s3") {
    await resolveParamsForS3(endpointParams);
  }
  return endpointParams;
}, "resolveParams");

// node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js
var endpointMiddleware = /* @__PURE__ */ __name(({ config, instructions }) => {
  return (next, context) => async (args) => {
    if (config.isCustomEndpoint) {
      setFeature2(context, "ENDPOINT_OVERRIDE", "N");
    }
    const endpoint = await getEndpointFromInstructions(args.input, {
      getEndpointParameterInstructions() {
        return instructions;
      }
    }, { ...config }, context);
    context.endpointV2 = endpoint;
    context.authSchemes = endpoint.properties?.authSchemes;
    const authScheme = context.authSchemes?.[0];
    if (authScheme) {
      context["signing_region"] = authScheme.signingRegion;
      context["signing_service"] = authScheme.signingName;
      const smithyContext = getSmithyContext(context);
      const httpAuthOption = smithyContext?.selectedHttpAuthScheme?.httpAuthOption;
      if (httpAuthOption) {
        httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, {
          signing_region: authScheme.signingRegion,
          signingRegion: authScheme.signingRegion,
          signing_service: authScheme.signingName,
          signingName: authScheme.signingName,
          signingRegionSet: authScheme.signingRegionSet
        }, authScheme.properties);
      }
    }
    return next({
      ...args
    });
  };
}, "endpointMiddleware");

// node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js
var endpointMiddlewareOptions = {
  step: "serialize",
  tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
  name: "endpointV2Middleware",
  override: true,
  relation: "before",
  toMiddleware: serializerMiddlewareOption.name
};
var getEndpointPlugin = /* @__PURE__ */ __name((config, instructions) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.addRelativeTo(endpointMiddleware({
      config,
      instructions
    }), endpointMiddlewareOptions);
  }, "applyToStack")
}), "getEndpointPlugin");

// node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js
var resolveEndpointConfig = /* @__PURE__ */ __name((input) => {
  const tls = input.tls ?? true;
  const { endpoint, useDualstackEndpoint, useFipsEndpoint } = input;
  const customEndpointProvider = endpoint != null ? async () => toEndpointV1(await normalizeProvider(endpoint)()) : void 0;
  const isCustomEndpoint = !!endpoint;
  const resolvedConfig = Object.assign(input, {
    endpoint: customEndpointProvider,
    tls,
    isCustomEndpoint,
    useDualstackEndpoint: normalizeProvider(useDualstackEndpoint ?? false),
    useFipsEndpoint: normalizeProvider(useFipsEndpoint ?? false)
  });
  let configuredEndpointPromise = void 0;
  resolvedConfig.serviceConfiguredEndpoint = async () => {
    if (input.serviceId && !configuredEndpointPromise) {
      configuredEndpointPromise = getEndpointFromConfig(input.serviceId);
    }
    return configuredEndpointPromise;
  };
  return resolvedConfig;
}, "resolveEndpointConfig");

// node_modules/@smithy/util-retry/dist-es/config.js
var RETRY_MODES;
(function(RETRY_MODES2) {
  RETRY_MODES2["STANDARD"] = "standard";
  RETRY_MODES2["ADAPTIVE"] = "adaptive";
})(RETRY_MODES || (RETRY_MODES = {}));
var DEFAULT_MAX_ATTEMPTS = 3;
var DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;

// node_modules/@smithy/service-error-classification/dist-es/constants.js
var THROTTLING_ERROR_CODES = [
  "BandwidthLimitExceeded",
  "EC2ThrottledException",
  "LimitExceededException",
  "PriorRequestNotComplete",
  "ProvisionedThroughputExceededException",
  "RequestLimitExceeded",
  "RequestThrottled",
  "RequestThrottledException",
  "SlowDown",
  "ThrottledException",
  "Throttling",
  "ThrottlingException",
  "TooManyRequestsException",
  "TransactionInProgressException"
];
var TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
var TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
var NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];
var NODEJS_NETWORK_ERROR_CODES = ["EHOSTUNREACH", "ENETUNREACH", "ENOTFOUND"];

// node_modules/@smithy/service-error-classification/dist-es/index.js
var isRetryableByTrait = /* @__PURE__ */ __name((error) => error?.$retryable !== void 0, "isRetryableByTrait");
var isClockSkewCorrectedError = /* @__PURE__ */ __name((error) => error.$metadata?.clockSkewCorrected, "isClockSkewCorrectedError");
var isBrowserNetworkError = /* @__PURE__ */ __name((error) => {
  const errorMessages = /* @__PURE__ */ new Set([
    "Failed to fetch",
    "NetworkError when attempting to fetch resource",
    "The Internet connection appears to be offline",
    "Load failed",
    "Network request failed"
  ]);
  const isValid = error && error instanceof TypeError;
  if (!isValid) {
    return false;
  }
  return errorMessages.has(error.message);
}, "isBrowserNetworkError");
var isThrottlingError = /* @__PURE__ */ __name((error) => error.$metadata?.httpStatusCode === 429 || THROTTLING_ERROR_CODES.includes(error.name) || error.$retryable?.throttling == true, "isThrottlingError");
var isTransientError = /* @__PURE__ */ __name((error, depth = 0) => isRetryableByTrait(error) || isClockSkewCorrectedError(error) || TRANSIENT_ERROR_CODES.includes(error.name) || NODEJS_TIMEOUT_ERROR_CODES.includes(error?.code || "") || NODEJS_NETWORK_ERROR_CODES.includes(error?.code || "") || TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0) || isBrowserNetworkError(error) || error.cause !== void 0 && depth <= 10 && isTransientError(error.cause, depth + 1), "isTransientError");
var isServerError = /* @__PURE__ */ __name((error) => {
  if (error.$metadata?.httpStatusCode !== void 0) {
    const statusCode = error.$metadata.httpStatusCode;
    if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
      return true;
    }
    return false;
  }
  return false;
}, "isServerError");

// node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js
var DefaultRateLimiter = class _DefaultRateLimiter {
  static {
    __name(this, "DefaultRateLimiter");
  }
  static setTimeoutFn = setTimeout;
  beta;
  minCapacity;
  minFillRate;
  scaleConstant;
  smooth;
  currentCapacity = 0;
  enabled = false;
  lastMaxRate = 0;
  measuredTxRate = 0;
  requestCount = 0;
  fillRate;
  lastThrottleTime;
  lastTimestamp = 0;
  lastTxRateBucket;
  maxCapacity;
  timeWindow = 0;
  constructor(options) {
    this.beta = options?.beta ?? 0.7;
    this.minCapacity = options?.minCapacity ?? 1;
    this.minFillRate = options?.minFillRate ?? 0.5;
    this.scaleConstant = options?.scaleConstant ?? 0.4;
    this.smooth = options?.smooth ?? 0.8;
    const currentTimeInSeconds = this.getCurrentTimeInSeconds();
    this.lastThrottleTime = currentTimeInSeconds;
    this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
    this.fillRate = this.minFillRate;
    this.maxCapacity = this.minCapacity;
  }
  getCurrentTimeInSeconds() {
    return Date.now() / 1e3;
  }
  async getSendToken() {
    return this.acquireTokenBucket(1);
  }
  async acquireTokenBucket(amount) {
    if (!this.enabled) {
      return;
    }
    this.refillTokenBucket();
    if (amount > this.currentCapacity) {
      const delay = (amount - this.currentCapacity) / this.fillRate * 1e3;
      await new Promise((resolve) => _DefaultRateLimiter.setTimeoutFn(resolve, delay));
    }
    this.currentCapacity = this.currentCapacity - amount;
  }
  refillTokenBucket() {
    const timestamp = this.getCurrentTimeInSeconds();
    if (!this.lastTimestamp) {
      this.lastTimestamp = timestamp;
      return;
    }
    const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
    this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
    this.lastTimestamp = timestamp;
  }
  updateClientSendingRate(response) {
    let calculatedRate;
    this.updateMeasuredRate();
    if (isThrottlingError(response)) {
      const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
      this.lastMaxRate = rateToUse;
      this.calculateTimeWindow();
      this.lastThrottleTime = this.getCurrentTimeInSeconds();
      calculatedRate = this.cubicThrottle(rateToUse);
      this.enableTokenBucket();
    } else {
      this.calculateTimeWindow();
      calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
    }
    const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
    this.updateTokenBucketRate(newRate);
  }
  calculateTimeWindow() {
    this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
  }
  cubicThrottle(rateToUse) {
    return this.getPrecise(rateToUse * this.beta);
  }
  cubicSuccess(timestamp) {
    return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
  }
  enableTokenBucket() {
    this.enabled = true;
  }
  updateTokenBucketRate(newRate) {
    this.refillTokenBucket();
    this.fillRate = Math.max(newRate, this.minFillRate);
    this.maxCapacity = Math.max(newRate, this.minCapacity);
    this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
  }
  updateMeasuredRate() {
    const t2 = this.getCurrentTimeInSeconds();
    const timeBucket = Math.floor(t2 * 2) / 2;
    this.requestCount++;
    if (timeBucket > this.lastTxRateBucket) {
      const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
      this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
      this.requestCount = 0;
      this.lastTxRateBucket = timeBucket;
    }
  }
  getPrecise(num) {
    return parseFloat(num.toFixed(8));
  }
};

// node_modules/@smithy/util-retry/dist-es/constants.js
var DEFAULT_RETRY_DELAY_BASE = 100;
var MAXIMUM_RETRY_DELAY = 20 * 1e3;
var THROTTLING_RETRY_DELAY_BASE = 500;
var INITIAL_RETRY_TOKENS = 500;
var RETRY_COST = 5;
var TIMEOUT_RETRY_COST = 10;
var NO_RETRY_INCREMENT = 1;
var INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
var REQUEST_HEADER = "amz-sdk-request";

// node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js
var getDefaultRetryBackoffStrategy = /* @__PURE__ */ __name(() => {
  let delayBase = DEFAULT_RETRY_DELAY_BASE;
  const computeNextBackoffDelay = /* @__PURE__ */ __name((attempts) => {
    return Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
  }, "computeNextBackoffDelay");
  const setDelayBase = /* @__PURE__ */ __name((delay) => {
    delayBase = delay;
  }, "setDelayBase");
  return {
    computeNextBackoffDelay,
    setDelayBase
  };
}, "getDefaultRetryBackoffStrategy");

// node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js
var createDefaultRetryToken = /* @__PURE__ */ __name(({ retryDelay, retryCount, retryCost }) => {
  const getRetryCount = /* @__PURE__ */ __name(() => retryCount, "getRetryCount");
  const getRetryDelay = /* @__PURE__ */ __name(() => Math.min(MAXIMUM_RETRY_DELAY, retryDelay), "getRetryDelay");
  const getRetryCost = /* @__PURE__ */ __name(() => retryCost, "getRetryCost");
  return {
    getRetryCount,
    getRetryDelay,
    getRetryCost
  };
}, "createDefaultRetryToken");

// node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js
var StandardRetryStrategy = class {
  static {
    __name(this, "StandardRetryStrategy");
  }
  maxAttempts;
  mode = RETRY_MODES.STANDARD;
  capacity = INITIAL_RETRY_TOKENS;
  retryBackoffStrategy = getDefaultRetryBackoffStrategy();
  maxAttemptsProvider;
  constructor(maxAttempts) {
    this.maxAttempts = maxAttempts;
    this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
  }
  async acquireInitialRetryToken(retryTokenScope) {
    return createDefaultRetryToken({
      retryDelay: DEFAULT_RETRY_DELAY_BASE,
      retryCount: 0
    });
  }
  async refreshRetryTokenForRetry(token, errorInfo) {
    const maxAttempts = await this.getMaxAttempts();
    if (this.shouldRetry(token, errorInfo, maxAttempts)) {
      const errorType = errorInfo.errorType;
      this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE);
      const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
      const retryDelay = errorInfo.retryAfterHint ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType) : delayFromErrorType;
      const capacityCost = this.getCapacityCost(errorType);
      this.capacity -= capacityCost;
      return createDefaultRetryToken({
        retryDelay,
        retryCount: token.getRetryCount() + 1,
        retryCost: capacityCost
      });
    }
    throw new Error("No retry token available");
  }
  recordSuccess(token) {
    this.capacity = Math.max(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
  }
  getCapacity() {
    return this.capacity;
  }
  async getMaxAttempts() {
    try {
      return await this.maxAttemptsProvider();
    } catch (error) {
      console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
      return DEFAULT_MAX_ATTEMPTS;
    }
  }
  shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
    const attempts = tokenToRenew.getRetryCount() + 1;
    return attempts < maxAttempts && this.capacity >= this.getCapacityCost(errorInfo.errorType) && this.isRetryableError(errorInfo.errorType);
  }
  getCapacityCost(errorType) {
    return errorType === "TRANSIENT" ? TIMEOUT_RETRY_COST : RETRY_COST;
  }
  isRetryableError(errorType) {
    return errorType === "THROTTLING" || errorType === "TRANSIENT";
  }
};

// node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js
var AdaptiveRetryStrategy = class {
  static {
    __name(this, "AdaptiveRetryStrategy");
  }
  maxAttemptsProvider;
  rateLimiter;
  standardRetryStrategy;
  mode = RETRY_MODES.ADAPTIVE;
  constructor(maxAttemptsProvider, options) {
    this.maxAttemptsProvider = maxAttemptsProvider;
    const { rateLimiter } = options ?? {};
    this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
    this.standardRetryStrategy = new StandardRetryStrategy(maxAttemptsProvider);
  }
  async acquireInitialRetryToken(retryTokenScope) {
    await this.rateLimiter.getSendToken();
    return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
  }
  async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
    this.rateLimiter.updateClientSendingRate(errorInfo);
    return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
  }
  recordSuccess(token) {
    this.rateLimiter.updateClientSendingRate({});
    this.standardRetryStrategy.recordSuccess(token);
  }
};

// node_modules/@smithy/middleware-retry/dist-es/util.js
var asSdkError = /* @__PURE__ */ __name((error) => {
  if (error instanceof Error)
    return error;
  if (error instanceof Object)
    return Object.assign(new Error(), error);
  if (typeof error === "string")
    return new Error(error);
  return new Error(`AWS SDK error wrapper for ${error}`);
}, "asSdkError");

// node_modules/@smithy/middleware-retry/dist-es/configurations.js
var resolveRetryConfig = /* @__PURE__ */ __name((input) => {
  const { retryStrategy, retryMode: _retryMode, maxAttempts: _maxAttempts } = input;
  const maxAttempts = normalizeProvider(_maxAttempts ?? DEFAULT_MAX_ATTEMPTS);
  return Object.assign(input, {
    maxAttempts,
    retryStrategy: /* @__PURE__ */ __name(async () => {
      if (retryStrategy) {
        return retryStrategy;
      }
      const retryMode = await normalizeProvider(_retryMode)();
      if (retryMode === RETRY_MODES.ADAPTIVE) {
        return new AdaptiveRetryStrategy(maxAttempts);
      }
      return new StandardRetryStrategy(maxAttempts);
    }, "retryStrategy")
  });
}, "resolveRetryConfig");

// node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.browser.js
var isStreamingPayload = /* @__PURE__ */ __name((request) => request?.body instanceof ReadableStream, "isStreamingPayload");

// node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js
var retryMiddleware = /* @__PURE__ */ __name((options) => (next, context) => async (args) => {
  let retryStrategy = await options.retryStrategy();
  const maxAttempts = await options.maxAttempts();
  if (isRetryStrategyV2(retryStrategy)) {
    retryStrategy = retryStrategy;
    let retryToken = await retryStrategy.acquireInitialRetryToken(context["partition_id"]);
    let lastError = new Error();
    let attempts = 0;
    let totalRetryDelay = 0;
    const { request } = args;
    const isRequest = HttpRequest.isInstance(request);
    if (isRequest) {
      request.headers[INVOCATION_ID_HEADER] = v4();
    }
    while (true) {
      try {
        if (isRequest) {
          request.headers[REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
        }
        const { response, output } = await next(args);
        retryStrategy.recordSuccess(retryToken);
        output.$metadata.attempts = attempts + 1;
        output.$metadata.totalRetryDelay = totalRetryDelay;
        return { response, output };
      } catch (e2) {
        const retryErrorInfo = getRetryErrorInfo(e2);
        lastError = asSdkError(e2);
        if (isRequest && isStreamingPayload(request)) {
          (context.logger instanceof NoOpLogger ? console : context.logger)?.warn("An error was encountered in a non-retryable streaming request.");
          throw lastError;
        }
        try {
          retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
        } catch (refreshError) {
          if (!lastError.$metadata) {
            lastError.$metadata = {};
          }
          lastError.$metadata.attempts = attempts + 1;
          lastError.$metadata.totalRetryDelay = totalRetryDelay;
          throw lastError;
        }
        attempts = retryToken.getRetryCount();
        const delay = retryToken.getRetryDelay();
        totalRetryDelay += delay;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  } else {
    retryStrategy = retryStrategy;
    if (retryStrategy?.mode)
      context.userAgent = [...context.userAgent || [], ["cfg/retry-mode", retryStrategy.mode]];
    return retryStrategy.retry(next, args);
  }
}, "retryMiddleware");
var isRetryStrategyV2 = /* @__PURE__ */ __name((retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" && typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" && typeof retryStrategy.recordSuccess !== "undefined", "isRetryStrategyV2");
var getRetryErrorInfo = /* @__PURE__ */ __name((error) => {
  const errorInfo = {
    error,
    errorType: getRetryErrorType(error)
  };
  const retryAfterHint = getRetryAfterHint(error.$response);
  if (retryAfterHint) {
    errorInfo.retryAfterHint = retryAfterHint;
  }
  return errorInfo;
}, "getRetryErrorInfo");
var getRetryErrorType = /* @__PURE__ */ __name((error) => {
  if (isThrottlingError(error))
    return "THROTTLING";
  if (isTransientError(error))
    return "TRANSIENT";
  if (isServerError(error))
    return "SERVER_ERROR";
  return "CLIENT_ERROR";
}, "getRetryErrorType");
var retryMiddlewareOptions = {
  name: "retryMiddleware",
  tags: ["RETRY"],
  step: "finalizeRequest",
  priority: "high",
  override: true
};
var getRetryPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
  }, "applyToStack")
}), "getRetryPlugin");
var getRetryAfterHint = /* @__PURE__ */ __name((response) => {
  if (!HttpResponse.isInstance(response))
    return;
  const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
  if (!retryAfterHeaderName)
    return;
  const retryAfter = response.headers[retryAfterHeaderName];
  const retryAfterSeconds = Number(retryAfter);
  if (!Number.isNaN(retryAfterSeconds))
    return new Date(retryAfterSeconds * 1e3);
  const retryAfterDate = new Date(retryAfter);
  return retryAfterDate;
}, "getRetryAfterHint");

// node_modules/@aws-sdk/signature-v4-multi-region/dist-es/signature-v4-crt-container.js
var signatureV4CrtContainer = {
  CrtSignerV4: null
};

// node_modules/@aws-sdk/signature-v4-multi-region/dist-es/SignatureV4MultiRegion.js
var SignatureV4MultiRegion = class {
  static {
    __name(this, "SignatureV4MultiRegion");
  }
  sigv4aSigner;
  sigv4Signer;
  signerOptions;
  constructor(options) {
    this.sigv4Signer = new SignatureV4S3Express(options);
    this.signerOptions = options;
  }
  async sign(requestToSign, options = {}) {
    if (options.signingRegion === "*") {
      if (this.signerOptions.runtime !== "node")
        throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
      return this.getSigv4aSigner().sign(requestToSign, options);
    }
    return this.sigv4Signer.sign(requestToSign, options);
  }
  async signWithCredentials(requestToSign, credentials, options = {}) {
    if (options.signingRegion === "*") {
      if (this.signerOptions.runtime !== "node")
        throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
      return this.getSigv4aSigner().signWithCredentials(requestToSign, credentials, options);
    }
    return this.sigv4Signer.signWithCredentials(requestToSign, credentials, options);
  }
  async presign(originalRequest, options = {}) {
    if (options.signingRegion === "*") {
      if (this.signerOptions.runtime !== "node")
        throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
      return this.getSigv4aSigner().presign(originalRequest, options);
    }
    return this.sigv4Signer.presign(originalRequest, options);
  }
  async presignWithCredentials(originalRequest, credentials, options = {}) {
    if (options.signingRegion === "*") {
      throw new Error("Method presignWithCredentials is not supported for [signingRegion=*].");
    }
    return this.sigv4Signer.presignWithCredentials(originalRequest, credentials, options);
  }
  getSigv4aSigner() {
    if (!this.sigv4aSigner) {
      let CrtSignerV4 = null;
      try {
        CrtSignerV4 = signatureV4CrtContainer.CrtSignerV4;
        if (typeof CrtSignerV4 !== "function")
          throw new Error();
      } catch (e2) {
        e2.message = `${e2.message}
Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. 
You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. 
For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`;
        throw e2;
      }
      this.sigv4aSigner = new CrtSignerV4({
        ...this.signerOptions,
        signingAlgorithm: 1
      });
    }
    return this.sigv4aSigner;
  }
};

// node_modules/@aws-sdk/client-s3/dist-es/endpoint/ruleset.js
var ci = "required";
var cj = "type";
var ck = "conditions";
var cl = "fn";
var cm = "argv";
var cn = "ref";
var co = "assign";
var cp = "url";
var cq = "properties";
var cr = "backend";
var cs = "authSchemes";
var ct = "disableDoubleEncoding";
var cu = "signingName";
var cv = "signingRegion";
var cw = "headers";
var cx = "signingRegionSet";
var a = 6;
var b = false;
var c = true;
var d = "isSet";
var e = "booleanEquals";
var f = "error";
var g = "aws.partition";
var h = "stringEquals";
var i = "getAttr";
var j = "name";
var k = "substring";
var l = "bucketSuffix";
var m = "parseURL";
var n = "{url#scheme}://{url#authority}/{uri_encoded_bucket}{url#path}";
var o = "endpoint";
var p = "tree";
var q = "aws.isVirtualHostableS3Bucket";
var r = "{url#scheme}://{Bucket}.{url#authority}{url#path}";
var s = "not";
var t = "{url#scheme}://{url#authority}{url#path}";
var u = "hardwareType";
var v = "regionPrefix";
var w = "bucketAliasSuffix";
var x = "outpostId";
var y = "isValidHostLabel";
var z = "sigv4a";
var A = "s3-outposts";
var B = "s3";
var C = "{url#scheme}://{url#authority}{url#normalizedPath}{Bucket}";
var D = "https://{Bucket}.s3-accelerate.{partitionResult#dnsSuffix}";
var E = "https://{Bucket}.s3.{partitionResult#dnsSuffix}";
var F = "aws.parseArn";
var G = "bucketArn";
var H = "arnType";
var I = "";
var J = "s3-object-lambda";
var K = "accesspoint";
var L = "accessPointName";
var M = "{url#scheme}://{accessPointName}-{bucketArn#accountId}.{url#authority}{url#path}";
var N = "mrapPartition";
var O = "outpostType";
var P = "arnPrefix";
var Q = "{url#scheme}://{url#authority}{url#normalizedPath}{uri_encoded_bucket}";
var R = "https://s3.{partitionResult#dnsSuffix}/{uri_encoded_bucket}";
var S = "https://s3.{partitionResult#dnsSuffix}";
var T = { [ci]: false, [cj]: "String" };
var U = { [ci]: true, "default": false, [cj]: "Boolean" };
var V = { [ci]: false, [cj]: "Boolean" };
var W = { [cl]: e, [cm]: [{ [cn]: "Accelerate" }, true] };
var X = { [cl]: e, [cm]: [{ [cn]: "UseFIPS" }, true] };
var Y = { [cl]: e, [cm]: [{ [cn]: "UseDualStack" }, true] };
var Z = { [cl]: d, [cm]: [{ [cn]: "Endpoint" }] };
var aa = { [cl]: g, [cm]: [{ [cn]: "Region" }], [co]: "partitionResult" };
var ab = { [cl]: h, [cm]: [{ [cl]: i, [cm]: [{ [cn]: "partitionResult" }, j] }, "aws-cn"] };
var ac = { [cl]: d, [cm]: [{ [cn]: "Bucket" }] };
var ad = { [cn]: "Bucket" };
var ae = { [cl]: m, [cm]: [{ [cn]: "Endpoint" }], [co]: "url" };
var af = { [cl]: e, [cm]: [{ [cl]: i, [cm]: [{ [cn]: "url" }, "isIp"] }, true] };
var ag = { [cn]: "url" };
var ah = { [cl]: "uriEncode", [cm]: [ad], [co]: "uri_encoded_bucket" };
var ai = { [cr]: "S3Express", [cs]: [{ [ct]: true, [j]: "sigv4", [cu]: "s3express", [cv]: "{Region}" }] };
var aj = {};
var ak = { [cl]: q, [cm]: [ad, false] };
var al = { [f]: "S3Express bucket name is not a valid virtual hostable name.", [cj]: f };
var am = { [cr]: "S3Express", [cs]: [{ [ct]: true, [j]: "sigv4-s3express", [cu]: "s3express", [cv]: "{Region}" }] };
var an = { [cl]: d, [cm]: [{ [cn]: "UseS3ExpressControlEndpoint" }] };
var ao = { [cl]: e, [cm]: [{ [cn]: "UseS3ExpressControlEndpoint" }, true] };
var ap = { [cl]: s, [cm]: [Z] };
var aq = { [f]: "Unrecognized S3Express bucket name format.", [cj]: f };
var ar = { [cl]: s, [cm]: [ac] };
var as = { [cn]: u };
var at = { [ck]: [ap], [f]: "Expected a endpoint to be specified but no endpoint was found", [cj]: f };
var au = { [cs]: [{ [ct]: true, [j]: z, [cu]: A, [cx]: ["*"] }, { [ct]: true, [j]: "sigv4", [cu]: A, [cv]: "{Region}" }] };
var av = { [cl]: e, [cm]: [{ [cn]: "ForcePathStyle" }, false] };
var aw = { [cn]: "ForcePathStyle" };
var ax = { [cl]: e, [cm]: [{ [cn]: "Accelerate" }, false] };
var ay = { [cl]: h, [cm]: [{ [cn]: "Region" }, "aws-global"] };
var az = { [cs]: [{ [ct]: true, [j]: "sigv4", [cu]: B, [cv]: "us-east-1" }] };
var aA = { [cl]: s, [cm]: [ay] };
var aB = { [cl]: e, [cm]: [{ [cn]: "UseGlobalEndpoint" }, true] };
var aC = { [cp]: "https://{Bucket}.s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}", [cq]: { [cs]: [{ [ct]: true, [j]: "sigv4", [cu]: B, [cv]: "{Region}" }] }, [cw]: {} };
var aD = { [cs]: [{ [ct]: true, [j]: "sigv4", [cu]: B, [cv]: "{Region}" }] };
var aE = { [cl]: e, [cm]: [{ [cn]: "UseGlobalEndpoint" }, false] };
var aF = { [cl]: e, [cm]: [{ [cn]: "UseDualStack" }, false] };
var aG = { [cp]: "https://{Bucket}.s3-fips.{Region}.{partitionResult#dnsSuffix}", [cq]: aD, [cw]: {} };
var aH = { [cl]: e, [cm]: [{ [cn]: "UseFIPS" }, false] };
var aI = { [cp]: "https://{Bucket}.s3-accelerate.dualstack.{partitionResult#dnsSuffix}", [cq]: aD, [cw]: {} };
var aJ = { [cp]: "https://{Bucket}.s3.dualstack.{Region}.{partitionResult#dnsSuffix}", [cq]: aD, [cw]: {} };
var aK = { [cl]: e, [cm]: [{ [cl]: i, [cm]: [ag, "isIp"] }, false] };
var aL = { [cp]: C, [cq]: aD, [cw]: {} };
var aM = { [cp]: r, [cq]: aD, [cw]: {} };
var aN = { [o]: aM, [cj]: o };
var aO = { [cp]: D, [cq]: aD, [cw]: {} };
var aP = { [cp]: "https://{Bucket}.s3.{Region}.{partitionResult#dnsSuffix}", [cq]: aD, [cw]: {} };
var aQ = { [f]: "Invalid region: region was not a valid DNS name.", [cj]: f };
var aR = { [cn]: G };
var aS = { [cn]: H };
var aT = { [cl]: i, [cm]: [aR, "service"] };
var aU = { [cn]: L };
var aV = { [ck]: [Y], [f]: "S3 Object Lambda does not support Dual-stack", [cj]: f };
var aW = { [ck]: [W], [f]: "S3 Object Lambda does not support S3 Accelerate", [cj]: f };
var aX = { [ck]: [{ [cl]: d, [cm]: [{ [cn]: "DisableAccessPoints" }] }, { [cl]: e, [cm]: [{ [cn]: "DisableAccessPoints" }, true] }], [f]: "Access points are not supported for this operation", [cj]: f };
var aY = { [ck]: [{ [cl]: d, [cm]: [{ [cn]: "UseArnRegion" }] }, { [cl]: e, [cm]: [{ [cn]: "UseArnRegion" }, false] }, { [cl]: s, [cm]: [{ [cl]: h, [cm]: [{ [cl]: i, [cm]: [aR, "region"] }, "{Region}"] }] }], [f]: "Invalid configuration: region from ARN `{bucketArn#region}` does not match client region `{Region}` and UseArnRegion is `false`", [cj]: f };
var aZ = { [cl]: i, [cm]: [{ [cn]: "bucketPartition" }, j] };
var ba = { [cl]: i, [cm]: [aR, "accountId"] };
var bb = { [cs]: [{ [ct]: true, [j]: "sigv4", [cu]: J, [cv]: "{bucketArn#region}" }] };
var bc = { [f]: "Invalid ARN: The access point name may only contain a-z, A-Z, 0-9 and `-`. Found: `{accessPointName}`", [cj]: f };
var bd = { [f]: "Invalid ARN: The account id may only contain a-z, A-Z, 0-9 and `-`. Found: `{bucketArn#accountId}`", [cj]: f };
var be = { [f]: "Invalid region in ARN: `{bucketArn#region}` (invalid DNS name)", [cj]: f };
var bf = { [f]: "Client was configured for partition `{partitionResult#name}` but ARN (`{Bucket}`) has `{bucketPartition#name}`", [cj]: f };
var bg = { [f]: "Invalid ARN: The ARN may only contain a single resource component after `accesspoint`.", [cj]: f };
var bh = { [f]: "Invalid ARN: Expected a resource of the format `accesspoint:<accesspoint name>` but no name was provided", [cj]: f };
var bi = { [cs]: [{ [ct]: true, [j]: "sigv4", [cu]: B, [cv]: "{bucketArn#region}" }] };
var bj = { [cs]: [{ [ct]: true, [j]: z, [cu]: A, [cx]: ["*"] }, { [ct]: true, [j]: "sigv4", [cu]: A, [cv]: "{bucketArn#region}" }] };
var bk = { [cl]: F, [cm]: [ad] };
var bl = { [cp]: "https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cq]: aD, [cw]: {} };
var bm = { [cp]: "https://s3-fips.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cq]: aD, [cw]: {} };
var bn = { [cp]: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cq]: aD, [cw]: {} };
var bo = { [cp]: Q, [cq]: aD, [cw]: {} };
var bp = { [cp]: "https://s3.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cq]: aD, [cw]: {} };
var bq = { [cn]: "UseObjectLambdaEndpoint" };
var br = { [cs]: [{ [ct]: true, [j]: "sigv4", [cu]: J, [cv]: "{Region}" }] };
var bs = { [cp]: "https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}", [cq]: aD, [cw]: {} };
var bt = { [cp]: "https://s3-fips.{Region}.{partitionResult#dnsSuffix}", [cq]: aD, [cw]: {} };
var bu = { [cp]: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}", [cq]: aD, [cw]: {} };
var bv = { [cp]: t, [cq]: aD, [cw]: {} };
var bw = { [cp]: "https://s3.{Region}.{partitionResult#dnsSuffix}", [cq]: aD, [cw]: {} };
var bx = [{ [cn]: "Region" }];
var by = [{ [cn]: "Endpoint" }];
var bz = [ad];
var bA = [Y];
var bB = [W];
var bC = [Z, ae];
var bD = [{ [cl]: d, [cm]: [{ [cn]: "DisableS3ExpressSessionAuth" }] }, { [cl]: e, [cm]: [{ [cn]: "DisableS3ExpressSessionAuth" }, true] }];
var bE = [af];
var bF = [ah];
var bG = [ak];
var bH = [X];
var bI = [{ [cl]: k, [cm]: [ad, 6, 14, true], [co]: "s3expressAvailabilityZoneId" }, { [cl]: k, [cm]: [ad, 14, 16, true], [co]: "s3expressAvailabilityZoneDelim" }, { [cl]: h, [cm]: [{ [cn]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bJ = [{ [ck]: [X], [o]: { [cp]: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com", [cq]: ai, [cw]: {} }, [cj]: o }, { [o]: { [cp]: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com", [cq]: ai, [cw]: {} }, [cj]: o }];
var bK = [{ [cl]: k, [cm]: [ad, 6, 15, true], [co]: "s3expressAvailabilityZoneId" }, { [cl]: k, [cm]: [ad, 15, 17, true], [co]: "s3expressAvailabilityZoneDelim" }, { [cl]: h, [cm]: [{ [cn]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bL = [{ [cl]: k, [cm]: [ad, 6, 19, true], [co]: "s3expressAvailabilityZoneId" }, { [cl]: k, [cm]: [ad, 19, 21, true], [co]: "s3expressAvailabilityZoneDelim" }, { [cl]: h, [cm]: [{ [cn]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bM = [{ [cl]: k, [cm]: [ad, 6, 20, true], [co]: "s3expressAvailabilityZoneId" }, { [cl]: k, [cm]: [ad, 20, 22, true], [co]: "s3expressAvailabilityZoneDelim" }, { [cl]: h, [cm]: [{ [cn]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bN = [{ [cl]: k, [cm]: [ad, 6, 26, true], [co]: "s3expressAvailabilityZoneId" }, { [cl]: k, [cm]: [ad, 26, 28, true], [co]: "s3expressAvailabilityZoneDelim" }, { [cl]: h, [cm]: [{ [cn]: "s3expressAvailabilityZoneDelim" }, "--"] }];
var bO = [{ [ck]: [X], [o]: { [cp]: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com", [cq]: am, [cw]: {} }, [cj]: o }, { [o]: { [cp]: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com", [cq]: am, [cw]: {} }, [cj]: o }];
var bP = [ac];
var bQ = [{ [cl]: y, [cm]: [{ [cn]: x }, false] }];
var bR = [{ [cl]: h, [cm]: [{ [cn]: v }, "beta"] }];
var bS = ["*"];
var bT = [aa];
var bU = [{ [cl]: y, [cm]: [{ [cn]: "Region" }, false] }];
var bV = [{ [cl]: h, [cm]: [{ [cn]: "Region" }, "us-east-1"] }];
var bW = [{ [cl]: h, [cm]: [aS, K] }];
var bX = [{ [cl]: i, [cm]: [aR, "resourceId[1]"], [co]: L }, { [cl]: s, [cm]: [{ [cl]: h, [cm]: [aU, I] }] }];
var bY = [aR, "resourceId[1]"];
var bZ = [{ [cl]: s, [cm]: [{ [cl]: h, [cm]: [{ [cl]: i, [cm]: [aR, "region"] }, I] }] }];
var ca = [{ [cl]: s, [cm]: [{ [cl]: d, [cm]: [{ [cl]: i, [cm]: [aR, "resourceId[2]"] }] }] }];
var cb = [aR, "resourceId[2]"];
var cc = [{ [cl]: g, [cm]: [{ [cl]: i, [cm]: [aR, "region"] }], [co]: "bucketPartition" }];
var cd = [{ [cl]: h, [cm]: [aZ, { [cl]: i, [cm]: [{ [cn]: "partitionResult" }, j] }] }];
var ce = [{ [cl]: y, [cm]: [{ [cl]: i, [cm]: [aR, "region"] }, true] }];
var cf = [{ [cl]: y, [cm]: [ba, false] }];
var cg = [{ [cl]: y, [cm]: [aU, false] }];
var ch = [{ [cl]: y, [cm]: [{ [cn]: "Region" }, true] }];
var _data = { version: "1.0", parameters: { Bucket: T, Region: T, UseFIPS: U, UseDualStack: U, Endpoint: T, ForcePathStyle: U, Accelerate: U, UseGlobalEndpoint: U, UseObjectLambdaEndpoint: V, Key: T, Prefix: T, CopySource: T, DisableAccessPoints: V, DisableMultiRegionAccessPoints: U, UseArnRegion: V, UseS3ExpressControlEndpoint: V, DisableS3ExpressSessionAuth: V }, rules: [{ [ck]: [{ [cl]: d, [cm]: bx }], rules: [{ [ck]: [W, X], error: "Accelerate cannot be used with FIPS", [cj]: f }, { [ck]: [Y, Z], error: "Cannot set dual-stack in combination with a custom endpoint.", [cj]: f }, { [ck]: [Z, X], error: "A custom endpoint cannot be combined with FIPS", [cj]: f }, { [ck]: [Z, W], error: "A custom endpoint cannot be combined with S3 Accelerate", [cj]: f }, { [ck]: [X, aa, ab], error: "Partition does not support FIPS", [cj]: f }, { [ck]: [ac, { [cl]: k, [cm]: [ad, 0, a, c], [co]: l }, { [cl]: h, [cm]: [{ [cn]: l }, "--x-s3"] }], rules: [{ [ck]: bA, error: "S3Express does not support Dual-stack.", [cj]: f }, { [ck]: bB, error: "S3Express does not support S3 Accelerate.", [cj]: f }, { [ck]: bC, rules: [{ [ck]: bD, rules: [{ [ck]: bE, rules: [{ [ck]: bF, rules: [{ endpoint: { [cp]: n, [cq]: ai, [cw]: aj }, [cj]: o }], [cj]: p }], [cj]: p }, { [ck]: bG, rules: [{ endpoint: { [cp]: r, [cq]: ai, [cw]: aj }, [cj]: o }], [cj]: p }, al], [cj]: p }, { [ck]: bE, rules: [{ [ck]: bF, rules: [{ endpoint: { [cp]: n, [cq]: am, [cw]: aj }, [cj]: o }], [cj]: p }], [cj]: p }, { [ck]: bG, rules: [{ endpoint: { [cp]: r, [cq]: am, [cw]: aj }, [cj]: o }], [cj]: p }, al], [cj]: p }, { [ck]: [an, ao], rules: [{ [ck]: [ah, ap], rules: [{ [ck]: bH, endpoint: { [cp]: "https://s3express-control-fips.{Region}.amazonaws.com/{uri_encoded_bucket}", [cq]: ai, [cw]: aj }, [cj]: o }, { endpoint: { [cp]: "https://s3express-control.{Region}.amazonaws.com/{uri_encoded_bucket}", [cq]: ai, [cw]: aj }, [cj]: o }], [cj]: p }], [cj]: p }, { [ck]: bG, rules: [{ [ck]: bD, rules: [{ [ck]: bI, rules: bJ, [cj]: p }, { [ck]: bK, rules: bJ, [cj]: p }, { [ck]: bL, rules: bJ, [cj]: p }, { [ck]: bM, rules: bJ, [cj]: p }, { [ck]: bN, rules: bJ, [cj]: p }, aq], [cj]: p }, { [ck]: bI, rules: bO, [cj]: p }, { [ck]: bK, rules: bO, [cj]: p }, { [ck]: bL, rules: bO, [cj]: p }, { [ck]: bM, rules: bO, [cj]: p }, { [ck]: bN, rules: bO, [cj]: p }, aq], [cj]: p }, al], [cj]: p }, { [ck]: [ar, an, ao], rules: [{ [ck]: bC, endpoint: { [cp]: t, [cq]: ai, [cw]: aj }, [cj]: o }, { [ck]: bH, endpoint: { [cp]: "https://s3express-control-fips.{Region}.amazonaws.com", [cq]: ai, [cw]: aj }, [cj]: o }, { endpoint: { [cp]: "https://s3express-control.{Region}.amazonaws.com", [cq]: ai, [cw]: aj }, [cj]: o }], [cj]: p }, { [ck]: [ac, { [cl]: k, [cm]: [ad, 49, 50, c], [co]: u }, { [cl]: k, [cm]: [ad, 8, 12, c], [co]: v }, { [cl]: k, [cm]: [ad, 0, 7, c], [co]: w }, { [cl]: k, [cm]: [ad, 32, 49, c], [co]: x }, { [cl]: g, [cm]: bx, [co]: "regionPartition" }, { [cl]: h, [cm]: [{ [cn]: w }, "--op-s3"] }], rules: [{ [ck]: bQ, rules: [{ [ck]: [{ [cl]: h, [cm]: [as, "e"] }], rules: [{ [ck]: bR, rules: [at, { [ck]: bC, endpoint: { [cp]: "https://{Bucket}.ec2.{url#authority}", [cq]: au, [cw]: aj }, [cj]: o }], [cj]: p }, { endpoint: { [cp]: "https://{Bucket}.ec2.s3-outposts.{Region}.{regionPartition#dnsSuffix}", [cq]: au, [cw]: aj }, [cj]: o }], [cj]: p }, { [ck]: [{ [cl]: h, [cm]: [as, "o"] }], rules: [{ [ck]: bR, rules: [at, { [ck]: bC, endpoint: { [cp]: "https://{Bucket}.op-{outpostId}.{url#authority}", [cq]: au, [cw]: aj }, [cj]: o }], [cj]: p }, { endpoint: { [cp]: "https://{Bucket}.op-{outpostId}.s3-outposts.{Region}.{regionPartition#dnsSuffix}", [cq]: au, [cw]: aj }, [cj]: o }], [cj]: p }, { error: 'Unrecognized hardware type: "Expected hardware type o or e but got {hardwareType}"', [cj]: f }], [cj]: p }, { error: "Invalid ARN: The outpost Id must only contain a-z, A-Z, 0-9 and `-`.", [cj]: f }], [cj]: p }, { [ck]: bP, rules: [{ [ck]: [Z, { [cl]: s, [cm]: [{ [cl]: d, [cm]: [{ [cl]: m, [cm]: by }] }] }], error: "Custom endpoint `{Endpoint}` was not a valid URI", [cj]: f }, { [ck]: [av, ak], rules: [{ [ck]: bT, rules: [{ [ck]: bU, rules: [{ [ck]: [W, ab], error: "S3 Accelerate cannot be used in this region", [cj]: f }, { [ck]: [Y, X, ax, ap, ay], endpoint: { [cp]: "https://{Bucket}.s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}", [cq]: az, [cw]: aj }, [cj]: o }, { [ck]: [Y, X, ax, ap, aA, aB], rules: [{ endpoint: aC, [cj]: o }], [cj]: p }, { [ck]: [Y, X, ax, ap, aA, aE], endpoint: aC, [cj]: o }, { [ck]: [aF, X, ax, ap, ay], endpoint: { [cp]: "https://{Bucket}.s3-fips.us-east-1.{partitionResult#dnsSuffix}", [cq]: az, [cw]: aj }, [cj]: o }, { [ck]: [aF, X, ax, ap, aA, aB], rules: [{ endpoint: aG, [cj]: o }], [cj]: p }, { [ck]: [aF, X, ax, ap, aA, aE], endpoint: aG, [cj]: o }, { [ck]: [Y, aH, W, ap, ay], endpoint: { [cp]: "https://{Bucket}.s3-accelerate.dualstack.us-east-1.{partitionResult#dnsSuffix}", [cq]: az, [cw]: aj }, [cj]: o }, { [ck]: [Y, aH, W, ap, aA, aB], rules: [{ endpoint: aI, [cj]: o }], [cj]: p }, { [ck]: [Y, aH, W, ap, aA, aE], endpoint: aI, [cj]: o }, { [ck]: [Y, aH, ax, ap, ay], endpoint: { [cp]: "https://{Bucket}.s3.dualstack.us-east-1.{partitionResult#dnsSuffix}", [cq]: az, [cw]: aj }, [cj]: o }, { [ck]: [Y, aH, ax, ap, aA, aB], rules: [{ endpoint: aJ, [cj]: o }], [cj]: p }, { [ck]: [Y, aH, ax, ap, aA, aE], endpoint: aJ, [cj]: o }, { [ck]: [aF, aH, ax, Z, ae, af, ay], endpoint: { [cp]: C, [cq]: az, [cw]: aj }, [cj]: o }, { [ck]: [aF, aH, ax, Z, ae, aK, ay], endpoint: { [cp]: r, [cq]: az, [cw]: aj }, [cj]: o }, { [ck]: [aF, aH, ax, Z, ae, af, aA, aB], rules: [{ [ck]: bV, endpoint: aL, [cj]: o }, { endpoint: aL, [cj]: o }], [cj]: p }, { [ck]: [aF, aH, ax, Z, ae, aK, aA, aB], rules: [{ [ck]: bV, endpoint: aM, [cj]: o }, aN], [cj]: p }, { [ck]: [aF, aH, ax, Z, ae, af, aA, aE], endpoint: aL, [cj]: o }, { [ck]: [aF, aH, ax, Z, ae, aK, aA, aE], endpoint: aM, [cj]: o }, { [ck]: [aF, aH, W, ap, ay], endpoint: { [cp]: D, [cq]: az, [cw]: aj }, [cj]: o }, { [ck]: [aF, aH, W, ap, aA, aB], rules: [{ [ck]: bV, endpoint: aO, [cj]: o }, { endpoint: aO, [cj]: o }], [cj]: p }, { [ck]: [aF, aH, W, ap, aA, aE], endpoint: aO, [cj]: o }, { [ck]: [aF, aH, ax, ap, ay], endpoint: { [cp]: E, [cq]: az, [cw]: aj }, [cj]: o }, { [ck]: [aF, aH, ax, ap, aA, aB], rules: [{ [ck]: bV, endpoint: { [cp]: E, [cq]: aD, [cw]: aj }, [cj]: o }, { endpoint: aP, [cj]: o }], [cj]: p }, { [ck]: [aF, aH, ax, ap, aA, aE], endpoint: aP, [cj]: o }], [cj]: p }, aQ], [cj]: p }], [cj]: p }, { [ck]: [Z, ae, { [cl]: h, [cm]: [{ [cl]: i, [cm]: [ag, "scheme"] }, "http"] }, { [cl]: q, [cm]: [ad, c] }, av, aH, aF, ax], rules: [{ [ck]: bT, rules: [{ [ck]: bU, rules: [aN], [cj]: p }, aQ], [cj]: p }], [cj]: p }, { [ck]: [av, { [cl]: F, [cm]: bz, [co]: G }], rules: [{ [ck]: [{ [cl]: i, [cm]: [aR, "resourceId[0]"], [co]: H }, { [cl]: s, [cm]: [{ [cl]: h, [cm]: [aS, I] }] }], rules: [{ [ck]: [{ [cl]: h, [cm]: [aT, J] }], rules: [{ [ck]: bW, rules: [{ [ck]: bX, rules: [aV, aW, { [ck]: bZ, rules: [aX, { [ck]: ca, rules: [aY, { [ck]: cc, rules: [{ [ck]: bT, rules: [{ [ck]: cd, rules: [{ [ck]: ce, rules: [{ [ck]: [{ [cl]: h, [cm]: [ba, I] }], error: "Invalid ARN: Missing account id", [cj]: f }, { [ck]: cf, rules: [{ [ck]: cg, rules: [{ [ck]: bC, endpoint: { [cp]: M, [cq]: bb, [cw]: aj }, [cj]: o }, { [ck]: bH, endpoint: { [cp]: "https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cq]: bb, [cw]: aj }, [cj]: o }, { endpoint: { [cp]: "https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cq]: bb, [cw]: aj }, [cj]: o }], [cj]: p }, bc], [cj]: p }, bd], [cj]: p }, be], [cj]: p }, bf], [cj]: p }], [cj]: p }], [cj]: p }, bg], [cj]: p }, { error: "Invalid ARN: bucket ARN is missing a region", [cj]: f }], [cj]: p }, bh], [cj]: p }, { error: "Invalid ARN: Object Lambda ARNs only support `accesspoint` arn types, but found: `{arnType}`", [cj]: f }], [cj]: p }, { [ck]: bW, rules: [{ [ck]: bX, rules: [{ [ck]: bZ, rules: [{ [ck]: bW, rules: [{ [ck]: bZ, rules: [aX, { [ck]: ca, rules: [aY, { [ck]: cc, rules: [{ [ck]: bT, rules: [{ [ck]: [{ [cl]: h, [cm]: [aZ, "{partitionResult#name}"] }], rules: [{ [ck]: ce, rules: [{ [ck]: [{ [cl]: h, [cm]: [aT, B] }], rules: [{ [ck]: cf, rules: [{ [ck]: cg, rules: [{ [ck]: bB, error: "Access Points do not support S3 Accelerate", [cj]: f }, { [ck]: [X, Y], endpoint: { [cp]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cq]: bi, [cw]: aj }, [cj]: o }, { [ck]: [X, aF], endpoint: { [cp]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cq]: bi, [cw]: aj }, [cj]: o }, { [ck]: [aH, Y], endpoint: { [cp]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cq]: bi, [cw]: aj }, [cj]: o }, { [ck]: [aH, aF, Z, ae], endpoint: { [cp]: M, [cq]: bi, [cw]: aj }, [cj]: o }, { [ck]: [aH, aF], endpoint: { [cp]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cq]: bi, [cw]: aj }, [cj]: o }], [cj]: p }, bc], [cj]: p }, bd], [cj]: p }, { error: "Invalid ARN: The ARN was not for the S3 service, found: {bucketArn#service}", [cj]: f }], [cj]: p }, be], [cj]: p }, bf], [cj]: p }], [cj]: p }], [cj]: p }, bg], [cj]: p }], [cj]: p }], [cj]: p }, { [ck]: [{ [cl]: y, [cm]: [aU, c] }], rules: [{ [ck]: bA, error: "S3 MRAP does not support dual-stack", [cj]: f }, { [ck]: bH, error: "S3 MRAP does not support FIPS", [cj]: f }, { [ck]: bB, error: "S3 MRAP does not support S3 Accelerate", [cj]: f }, { [ck]: [{ [cl]: e, [cm]: [{ [cn]: "DisableMultiRegionAccessPoints" }, c] }], error: "Invalid configuration: Multi-Region Access Point ARNs are disabled.", [cj]: f }, { [ck]: [{ [cl]: g, [cm]: bx, [co]: N }], rules: [{ [ck]: [{ [cl]: h, [cm]: [{ [cl]: i, [cm]: [{ [cn]: N }, j] }, { [cl]: i, [cm]: [aR, "partition"] }] }], rules: [{ endpoint: { [cp]: "https://{accessPointName}.accesspoint.s3-global.{mrapPartition#dnsSuffix}", [cq]: { [cs]: [{ [ct]: c, name: z, [cu]: B, [cx]: bS }] }, [cw]: aj }, [cj]: o }], [cj]: p }, { error: "Client was configured for partition `{mrapPartition#name}` but bucket referred to partition `{bucketArn#partition}`", [cj]: f }], [cj]: p }], [cj]: p }, { error: "Invalid Access Point Name", [cj]: f }], [cj]: p }, bh], [cj]: p }, { [ck]: [{ [cl]: h, [cm]: [aT, A] }], rules: [{ [ck]: bA, error: "S3 Outposts does not support Dual-stack", [cj]: f }, { [ck]: bH, error: "S3 Outposts does not support FIPS", [cj]: f }, { [ck]: bB, error: "S3 Outposts does not support S3 Accelerate", [cj]: f }, { [ck]: [{ [cl]: d, [cm]: [{ [cl]: i, [cm]: [aR, "resourceId[4]"] }] }], error: "Invalid Arn: Outpost Access Point ARN contains sub resources", [cj]: f }, { [ck]: [{ [cl]: i, [cm]: bY, [co]: x }], rules: [{ [ck]: bQ, rules: [aY, { [ck]: cc, rules: [{ [ck]: bT, rules: [{ [ck]: cd, rules: [{ [ck]: ce, rules: [{ [ck]: cf, rules: [{ [ck]: [{ [cl]: i, [cm]: cb, [co]: O }], rules: [{ [ck]: [{ [cl]: i, [cm]: [aR, "resourceId[3]"], [co]: L }], rules: [{ [ck]: [{ [cl]: h, [cm]: [{ [cn]: O }, K] }], rules: [{ [ck]: bC, endpoint: { [cp]: "https://{accessPointName}-{bucketArn#accountId}.{outpostId}.{url#authority}", [cq]: bj, [cw]: aj }, [cj]: o }, { endpoint: { [cp]: "https://{accessPointName}-{bucketArn#accountId}.{outpostId}.s3-outposts.{bucketArn#region}.{bucketPartition#dnsSuffix}", [cq]: bj, [cw]: aj }, [cj]: o }], [cj]: p }, { error: "Expected an outpost type `accesspoint`, found {outpostType}", [cj]: f }], [cj]: p }, { error: "Invalid ARN: expected an access point name", [cj]: f }], [cj]: p }, { error: "Invalid ARN: Expected a 4-component resource", [cj]: f }], [cj]: p }, bd], [cj]: p }, be], [cj]: p }, bf], [cj]: p }], [cj]: p }], [cj]: p }, { error: "Invalid ARN: The outpost Id may only contain a-z, A-Z, 0-9 and `-`. Found: `{outpostId}`", [cj]: f }], [cj]: p }, { error: "Invalid ARN: The Outpost Id was not set", [cj]: f }], [cj]: p }, { error: "Invalid ARN: Unrecognized format: {Bucket} (type: {arnType})", [cj]: f }], [cj]: p }, { error: "Invalid ARN: No ARN type specified", [cj]: f }], [cj]: p }, { [ck]: [{ [cl]: k, [cm]: [ad, 0, 4, b], [co]: P }, { [cl]: h, [cm]: [{ [cn]: P }, "arn:"] }, { [cl]: s, [cm]: [{ [cl]: d, [cm]: [bk] }] }], error: "Invalid ARN: `{Bucket}` was not a valid ARN", [cj]: f }, { [ck]: [{ [cl]: e, [cm]: [aw, c] }, bk], error: "Path-style addressing cannot be used with ARN buckets", [cj]: f }, { [ck]: bF, rules: [{ [ck]: bT, rules: [{ [ck]: [ax], rules: [{ [ck]: [Y, ap, X, ay], endpoint: { [cp]: "https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cq]: az, [cw]: aj }, [cj]: o }, { [ck]: [Y, ap, X, aA, aB], rules: [{ endpoint: bl, [cj]: o }], [cj]: p }, { [ck]: [Y, ap, X, aA, aE], endpoint: bl, [cj]: o }, { [ck]: [aF, ap, X, ay], endpoint: { [cp]: "https://s3-fips.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cq]: az, [cw]: aj }, [cj]: o }, { [ck]: [aF, ap, X, aA, aB], rules: [{ endpoint: bm, [cj]: o }], [cj]: p }, { [ck]: [aF, ap, X, aA, aE], endpoint: bm, [cj]: o }, { [ck]: [Y, ap, aH, ay], endpoint: { [cp]: "https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [cq]: az, [cw]: aj }, [cj]: o }, { [ck]: [Y, ap, aH, aA, aB], rules: [{ endpoint: bn, [cj]: o }], [cj]: p }, { [ck]: [Y, ap, aH, aA, aE], endpoint: bn, [cj]: o }, { [ck]: [aF, Z, ae, aH, ay], endpoint: { [cp]: Q, [cq]: az, [cw]: aj }, [cj]: o }, { [ck]: [aF, Z, ae, aH, aA, aB], rules: [{ [ck]: bV, endpoint: bo, [cj]: o }, { endpoint: bo, [cj]: o }], [cj]: p }, { [ck]: [aF, Z, ae, aH, aA, aE], endpoint: bo, [cj]: o }, { [ck]: [aF, ap, aH, ay], endpoint: { [cp]: R, [cq]: az, [cw]: aj }, [cj]: o }, { [ck]: [aF, ap, aH, aA, aB], rules: [{ [ck]: bV, endpoint: { [cp]: R, [cq]: aD, [cw]: aj }, [cj]: o }, { endpoint: bp, [cj]: o }], [cj]: p }, { [ck]: [aF, ap, aH, aA, aE], endpoint: bp, [cj]: o }], [cj]: p }, { error: "Path-style addressing cannot be used with S3 Accelerate", [cj]: f }], [cj]: p }], [cj]: p }], [cj]: p }, { [ck]: [{ [cl]: d, [cm]: [bq] }, { [cl]: e, [cm]: [bq, c] }], rules: [{ [ck]: bT, rules: [{ [ck]: ch, rules: [aV, aW, { [ck]: bC, endpoint: { [cp]: t, [cq]: br, [cw]: aj }, [cj]: o }, { [ck]: bH, endpoint: { [cp]: "https://s3-object-lambda-fips.{Region}.{partitionResult#dnsSuffix}", [cq]: br, [cw]: aj }, [cj]: o }, { endpoint: { [cp]: "https://s3-object-lambda.{Region}.{partitionResult#dnsSuffix}", [cq]: br, [cw]: aj }, [cj]: o }], [cj]: p }, aQ], [cj]: p }], [cj]: p }, { [ck]: [ar], rules: [{ [ck]: bT, rules: [{ [ck]: ch, rules: [{ [ck]: [X, Y, ap, ay], endpoint: { [cp]: "https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}", [cq]: az, [cw]: aj }, [cj]: o }, { [ck]: [X, Y, ap, aA, aB], rules: [{ endpoint: bs, [cj]: o }], [cj]: p }, { [ck]: [X, Y, ap, aA, aE], endpoint: bs, [cj]: o }, { [ck]: [X, aF, ap, ay], endpoint: { [cp]: "https://s3-fips.us-east-1.{partitionResult#dnsSuffix}", [cq]: az, [cw]: aj }, [cj]: o }, { [ck]: [X, aF, ap, aA, aB], rules: [{ endpoint: bt, [cj]: o }], [cj]: p }, { [ck]: [X, aF, ap, aA, aE], endpoint: bt, [cj]: o }, { [ck]: [aH, Y, ap, ay], endpoint: { [cp]: "https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}", [cq]: az, [cw]: aj }, [cj]: o }, { [ck]: [aH, Y, ap, aA, aB], rules: [{ endpoint: bu, [cj]: o }], [cj]: p }, { [ck]: [aH, Y, ap, aA, aE], endpoint: bu, [cj]: o }, { [ck]: [aH, aF, Z, ae, ay], endpoint: { [cp]: t, [cq]: az, [cw]: aj }, [cj]: o }, { [ck]: [aH, aF, Z, ae, aA, aB], rules: [{ [ck]: bV, endpoint: bv, [cj]: o }, { endpoint: bv, [cj]: o }], [cj]: p }, { [ck]: [aH, aF, Z, ae, aA, aE], endpoint: bv, [cj]: o }, { [ck]: [aH, aF, ap, ay], endpoint: { [cp]: S, [cq]: az, [cw]: aj }, [cj]: o }, { [ck]: [aH, aF, ap, aA, aB], rules: [{ [ck]: bV, endpoint: { [cp]: S, [cq]: aD, [cw]: aj }, [cj]: o }, { endpoint: bw, [cj]: o }], [cj]: p }, { [ck]: [aH, aF, ap, aA, aE], endpoint: bw, [cj]: o }], [cj]: p }, aQ], [cj]: p }], [cj]: p }], [cj]: p }, { error: "A region must be set when sending requests to S3.", [cj]: f }] };
var ruleSet = _data;

// node_modules/@aws-sdk/client-s3/dist-es/endpoint/endpointResolver.js
var cache = new EndpointCache({
  size: 50,
  params: [
    "Accelerate",
    "Bucket",
    "DisableAccessPoints",
    "DisableMultiRegionAccessPoints",
    "DisableS3ExpressSessionAuth",
    "Endpoint",
    "ForcePathStyle",
    "Region",
    "UseArnRegion",
    "UseDualStack",
    "UseFIPS",
    "UseGlobalEndpoint",
    "UseObjectLambdaEndpoint",
    "UseS3ExpressControlEndpoint"
  ]
});
var defaultEndpointResolver = /* @__PURE__ */ __name((endpointParams, context = {}) => {
  return cache.get(endpointParams, () => resolveEndpoint(ruleSet, {
    endpointParams,
    logger: context.logger
  }));
}, "defaultEndpointResolver");
customEndpointFunctions.aws = awsEndpointFunctions;

// node_modules/@aws-sdk/client-s3/dist-es/auth/httpAuthSchemeProvider.js
var createEndpointRuleSetHttpAuthSchemeParametersProvider = /* @__PURE__ */ __name((defaultHttpAuthSchemeParametersProvider) => async (config, context, input) => {
  if (!input) {
    throw new Error(`Could not find \`input\` for \`defaultEndpointRuleSetHttpAuthSchemeParametersProvider\``);
  }
  const defaultParameters = await defaultHttpAuthSchemeParametersProvider(config, context, input);
  const instructionsFn = getSmithyContext(context)?.commandInstance?.constructor?.getEndpointParameterInstructions;
  if (!instructionsFn) {
    throw new Error(`getEndpointParameterInstructions() is not defined on \`${context.commandName}\``);
  }
  const endpointParameters = await resolveParams(input, { getEndpointParameterInstructions: instructionsFn }, config);
  return Object.assign(defaultParameters, endpointParameters);
}, "createEndpointRuleSetHttpAuthSchemeParametersProvider");
var _defaultS3HttpAuthSchemeParametersProvider = /* @__PURE__ */ __name(async (config, context, input) => {
  return {
    operation: getSmithyContext(context).operation,
    region: await normalizeProvider(config.region)() || (() => {
      throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
    })()
  };
}, "_defaultS3HttpAuthSchemeParametersProvider");
var defaultS3HttpAuthSchemeParametersProvider = createEndpointRuleSetHttpAuthSchemeParametersProvider(_defaultS3HttpAuthSchemeParametersProvider);
function createAwsAuthSigv4HttpAuthOption(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "s3",
      region: authParameters.region
    },
    propertiesExtractor: /* @__PURE__ */ __name((config, context) => ({
      signingProperties: {
        config,
        context
      }
    }), "propertiesExtractor")
  };
}
__name(createAwsAuthSigv4HttpAuthOption, "createAwsAuthSigv4HttpAuthOption");
function createAwsAuthSigv4aHttpAuthOption(authParameters) {
  return {
    schemeId: "aws.auth#sigv4a",
    signingProperties: {
      name: "s3",
      region: authParameters.region
    },
    propertiesExtractor: /* @__PURE__ */ __name((config, context) => ({
      signingProperties: {
        config,
        context
      }
    }), "propertiesExtractor")
  };
}
__name(createAwsAuthSigv4aHttpAuthOption, "createAwsAuthSigv4aHttpAuthOption");
var createEndpointRuleSetHttpAuthSchemeProvider = /* @__PURE__ */ __name((defaultEndpointResolver2, defaultHttpAuthSchemeResolver, createHttpAuthOptionFunctions) => {
  const endpointRuleSetHttpAuthSchemeProvider = /* @__PURE__ */ __name((authParameters) => {
    const endpoint = defaultEndpointResolver2(authParameters);
    const authSchemes = endpoint.properties?.authSchemes;
    if (!authSchemes) {
      return defaultHttpAuthSchemeResolver(authParameters);
    }
    const options = [];
    for (const scheme of authSchemes) {
      const { name: resolvedName, properties = {}, ...rest } = scheme;
      const name = resolvedName.toLowerCase();
      if (resolvedName !== name) {
        console.warn(`HttpAuthScheme has been normalized with lowercasing: \`${resolvedName}\` to \`${name}\``);
      }
      let schemeId;
      if (name === "sigv4a") {
        schemeId = "aws.auth#sigv4a";
        const sigv4Present = authSchemes.find((s2) => {
          const name2 = s2.name.toLowerCase();
          return name2 !== "sigv4a" && name2.startsWith("sigv4");
        });
        if (!signatureV4CrtContainer.CrtSignerV4 && sigv4Present) {
          continue;
        }
      } else if (name.startsWith("sigv4")) {
        schemeId = "aws.auth#sigv4";
      } else {
        throw new Error(`Unknown HttpAuthScheme found in \`@smithy.rules#endpointRuleSet\`: \`${name}\``);
      }
      const createOption = createHttpAuthOptionFunctions[schemeId];
      if (!createOption) {
        throw new Error(`Could not find HttpAuthOption create function for \`${schemeId}\``);
      }
      const option = createOption(authParameters);
      option.schemeId = schemeId;
      option.signingProperties = { ...option.signingProperties || {}, ...rest, ...properties };
      options.push(option);
    }
    return options;
  }, "endpointRuleSetHttpAuthSchemeProvider");
  return endpointRuleSetHttpAuthSchemeProvider;
}, "createEndpointRuleSetHttpAuthSchemeProvider");
var _defaultS3HttpAuthSchemeProvider = /* @__PURE__ */ __name((authParameters) => {
  const options = [];
  switch (authParameters.operation) {
    default: {
      options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
      options.push(createAwsAuthSigv4aHttpAuthOption(authParameters));
    }
  }
  return options;
}, "_defaultS3HttpAuthSchemeProvider");
var defaultS3HttpAuthSchemeProvider = createEndpointRuleSetHttpAuthSchemeProvider(defaultEndpointResolver, _defaultS3HttpAuthSchemeProvider, {
  "aws.auth#sigv4": createAwsAuthSigv4HttpAuthOption,
  "aws.auth#sigv4a": createAwsAuthSigv4aHttpAuthOption
});
var resolveHttpAuthSchemeConfig = /* @__PURE__ */ __name((config) => {
  const config_0 = resolveAwsSdkSigV4Config(config);
  const config_1 = resolveAwsSdkSigV4AConfig(config_0);
  return {
    ...config_1
  };
}, "resolveHttpAuthSchemeConfig");

// node_modules/@aws-sdk/client-s3/dist-es/endpoint/EndpointParameters.js
var resolveClientEndpointParameters = /* @__PURE__ */ __name((options) => {
  return {
    ...options,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    forcePathStyle: options.forcePathStyle ?? false,
    useAccelerateEndpoint: options.useAccelerateEndpoint ?? false,
    useGlobalEndpoint: options.useGlobalEndpoint ?? false,
    disableMultiregionAccessPoints: options.disableMultiregionAccessPoints ?? false,
    defaultSigningName: "s3"
  };
}, "resolveClientEndpointParameters");
var commonParams = {
  ForcePathStyle: { type: "clientContextParams", name: "forcePathStyle" },
  UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
  DisableMultiRegionAccessPoints: { type: "clientContextParams", name: "disableMultiregionAccessPoints" },
  Accelerate: { type: "clientContextParams", name: "useAccelerateEndpoint" },
  DisableS3ExpressSessionAuth: { type: "clientContextParams", name: "disableS3ExpressSessionAuth" },
  UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
  UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
  Endpoint: { type: "builtInParams", name: "endpoint" },
  Region: { type: "builtInParams", name: "region" },
  UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
};

// node_modules/@aws-sdk/client-s3/dist-es/models/S3ServiceException.js
var S3ServiceException = class _S3ServiceException extends ServiceException {
  static {
    __name(this, "S3ServiceException");
  }
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, _S3ServiceException.prototype);
  }
};

// node_modules/@aws-sdk/client-s3/dist-es/models/models_0.js
var NoSuchUpload = class _NoSuchUpload extends S3ServiceException {
  static {
    __name(this, "NoSuchUpload");
  }
  name = "NoSuchUpload";
  $fault = "client";
  constructor(opts) {
    super({
      name: "NoSuchUpload",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _NoSuchUpload.prototype);
  }
};
var ObjectNotInActiveTierError = class _ObjectNotInActiveTierError extends S3ServiceException {
  static {
    __name(this, "ObjectNotInActiveTierError");
  }
  name = "ObjectNotInActiveTierError";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ObjectNotInActiveTierError",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ObjectNotInActiveTierError.prototype);
  }
};
var BucketAlreadyExists = class _BucketAlreadyExists extends S3ServiceException {
  static {
    __name(this, "BucketAlreadyExists");
  }
  name = "BucketAlreadyExists";
  $fault = "client";
  constructor(opts) {
    super({
      name: "BucketAlreadyExists",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _BucketAlreadyExists.prototype);
  }
};
var BucketAlreadyOwnedByYou = class _BucketAlreadyOwnedByYou extends S3ServiceException {
  static {
    __name(this, "BucketAlreadyOwnedByYou");
  }
  name = "BucketAlreadyOwnedByYou";
  $fault = "client";
  constructor(opts) {
    super({
      name: "BucketAlreadyOwnedByYou",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _BucketAlreadyOwnedByYou.prototype);
  }
};
var NoSuchBucket = class _NoSuchBucket extends S3ServiceException {
  static {
    __name(this, "NoSuchBucket");
  }
  name = "NoSuchBucket";
  $fault = "client";
  constructor(opts) {
    super({
      name: "NoSuchBucket",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _NoSuchBucket.prototype);
  }
};
var AnalyticsFilter;
(function(AnalyticsFilter2) {
  AnalyticsFilter2.visit = (value, visitor) => {
    if (value.Prefix !== void 0)
      return visitor.Prefix(value.Prefix);
    if (value.Tag !== void 0)
      return visitor.Tag(value.Tag);
    if (value.And !== void 0)
      return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
})(AnalyticsFilter || (AnalyticsFilter = {}));
var MetricsFilter;
(function(MetricsFilter2) {
  MetricsFilter2.visit = (value, visitor) => {
    if (value.Prefix !== void 0)
      return visitor.Prefix(value.Prefix);
    if (value.Tag !== void 0)
      return visitor.Tag(value.Tag);
    if (value.AccessPointArn !== void 0)
      return visitor.AccessPointArn(value.AccessPointArn);
    if (value.And !== void 0)
      return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
})(MetricsFilter || (MetricsFilter = {}));
var InvalidObjectState = class _InvalidObjectState extends S3ServiceException {
  static {
    __name(this, "InvalidObjectState");
  }
  name = "InvalidObjectState";
  $fault = "client";
  StorageClass;
  AccessTier;
  constructor(opts) {
    super({
      name: "InvalidObjectState",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidObjectState.prototype);
    this.StorageClass = opts.StorageClass;
    this.AccessTier = opts.AccessTier;
  }
};
var NoSuchKey = class _NoSuchKey extends S3ServiceException {
  static {
    __name(this, "NoSuchKey");
  }
  name = "NoSuchKey";
  $fault = "client";
  constructor(opts) {
    super({
      name: "NoSuchKey",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _NoSuchKey.prototype);
  }
};
var NotFound = class _NotFound extends S3ServiceException {
  static {
    __name(this, "NotFound");
  }
  name = "NotFound";
  $fault = "client";
  constructor(opts) {
    super({
      name: "NotFound",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _NotFound.prototype);
  }
};
var CompleteMultipartUploadOutputFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING2 }
}), "CompleteMultipartUploadOutputFilterSensitiveLog");
var CompleteMultipartUploadRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING2 }
}), "CompleteMultipartUploadRequestFilterSensitiveLog");
var CopyObjectOutputFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING2 },
  ...obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING2 }
}), "CopyObjectOutputFilterSensitiveLog");
var CopyObjectRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING2 },
  ...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING2 },
  ...obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING2 },
  ...obj.CopySourceSSECustomerKey && { CopySourceSSECustomerKey: SENSITIVE_STRING2 }
}), "CopyObjectRequestFilterSensitiveLog");
var CreateMultipartUploadOutputFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING2 },
  ...obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING2 }
}), "CreateMultipartUploadOutputFilterSensitiveLog");
var CreateMultipartUploadRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING2 },
  ...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING2 },
  ...obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING2 }
}), "CreateMultipartUploadRequestFilterSensitiveLog");
var SessionCredentialsFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.SecretAccessKey && { SecretAccessKey: SENSITIVE_STRING2 },
  ...obj.SessionToken && { SessionToken: SENSITIVE_STRING2 }
}), "SessionCredentialsFilterSensitiveLog");
var CreateSessionOutputFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING2 },
  ...obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING2 },
  ...obj.Credentials && { Credentials: SessionCredentialsFilterSensitiveLog(obj.Credentials) }
}), "CreateSessionOutputFilterSensitiveLog");
var CreateSessionRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING2 },
  ...obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING2 }
}), "CreateSessionRequestFilterSensitiveLog");
var GetObjectOutputFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING2 }
}), "GetObjectOutputFilterSensitiveLog");
var GetObjectRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING2 }
}), "GetObjectRequestFilterSensitiveLog");

// node_modules/@aws-sdk/xml-builder/dist-es/escape-attribute.js
function escapeAttribute(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
__name(escapeAttribute, "escapeAttribute");

// node_modules/@aws-sdk/xml-builder/dist-es/escape-element.js
function escapeElement(value) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#x0D;").replace(/\n/g, "&#x0A;").replace(/\u0085/g, "&#x85;").replace(/\u2028/, "&#x2028;");
}
__name(escapeElement, "escapeElement");

// node_modules/@aws-sdk/xml-builder/dist-es/XmlText.js
var XmlText = class {
  static {
    __name(this, "XmlText");
  }
  value;
  constructor(value) {
    this.value = value;
  }
  toString() {
    return escapeElement("" + this.value);
  }
};

// node_modules/@aws-sdk/xml-builder/dist-es/XmlNode.js
var XmlNode2 = class _XmlNode {
  static {
    __name(this, "XmlNode");
  }
  name;
  children;
  attributes = {};
  static of(name, childText, withName) {
    const node = new _XmlNode(name);
    if (childText !== void 0) {
      node.addChildNode(new XmlText(childText));
    }
    if (withName !== void 0) {
      node.withName(withName);
    }
    return node;
  }
  constructor(name, children = []) {
    this.name = name;
    this.children = children;
  }
  withName(name) {
    this.name = name;
    return this;
  }
  addAttribute(name, value) {
    this.attributes[name] = value;
    return this;
  }
  addChildNode(child) {
    this.children.push(child);
    return this;
  }
  removeAttribute(name) {
    delete this.attributes[name];
    return this;
  }
  n(name) {
    this.name = name;
    return this;
  }
  c(child) {
    this.children.push(child);
    return this;
  }
  a(name, value) {
    if (value != null) {
      this.attributes[name] = value;
    }
    return this;
  }
  cc(input, field, withName = field) {
    if (input[field] != null) {
      const node = _XmlNode.of(field, input[field]).withName(withName);
      this.c(node);
    }
  }
  l(input, listName, memberName, valueProvider) {
    if (input[listName] != null) {
      const nodes = valueProvider();
      nodes.map((node) => {
        node.withName(memberName);
        this.c(node);
      });
    }
  }
  lc(input, listName, memberName, valueProvider) {
    if (input[listName] != null) {
      const nodes = valueProvider();
      const containerNode = new _XmlNode(memberName);
      nodes.map((node) => {
        containerNode.c(node);
      });
      this.c(containerNode);
    }
  }
  toString() {
    const hasChildren = Boolean(this.children.length);
    let xmlText = `<${this.name}`;
    const attributes = this.attributes;
    for (const attributeName of Object.keys(attributes)) {
      const attribute = attributes[attributeName];
      if (attribute != null) {
        xmlText += ` ${attributeName}="${escapeAttribute("" + attribute)}"`;
      }
    }
    return xmlText += !hasChildren ? "/>" : `>${this.children.map((c2) => c2.toString()).join("")}</${this.name}>`;
  }
};

// node_modules/@aws-sdk/client-s3/dist-es/models/models_1.js
var EncryptionTypeMismatch = class _EncryptionTypeMismatch extends S3ServiceException {
  static {
    __name(this, "EncryptionTypeMismatch");
  }
  name = "EncryptionTypeMismatch";
  $fault = "client";
  constructor(opts) {
    super({
      name: "EncryptionTypeMismatch",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _EncryptionTypeMismatch.prototype);
  }
};
var InvalidRequest = class _InvalidRequest extends S3ServiceException {
  static {
    __name(this, "InvalidRequest");
  }
  name = "InvalidRequest";
  $fault = "client";
  constructor(opts) {
    super({
      name: "InvalidRequest",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidRequest.prototype);
  }
};
var InvalidWriteOffset = class _InvalidWriteOffset extends S3ServiceException {
  static {
    __name(this, "InvalidWriteOffset");
  }
  name = "InvalidWriteOffset";
  $fault = "client";
  constructor(opts) {
    super({
      name: "InvalidWriteOffset",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidWriteOffset.prototype);
  }
};
var TooManyParts = class _TooManyParts extends S3ServiceException {
  static {
    __name(this, "TooManyParts");
  }
  name = "TooManyParts";
  $fault = "client";
  constructor(opts) {
    super({
      name: "TooManyParts",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _TooManyParts.prototype);
  }
};
var ObjectAlreadyInActiveTierError = class _ObjectAlreadyInActiveTierError extends S3ServiceException {
  static {
    __name(this, "ObjectAlreadyInActiveTierError");
  }
  name = "ObjectAlreadyInActiveTierError";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ObjectAlreadyInActiveTierError",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ObjectAlreadyInActiveTierError.prototype);
  }
};
var SelectObjectContentEventStream;
(function(SelectObjectContentEventStream2) {
  SelectObjectContentEventStream2.visit = (value, visitor) => {
    if (value.Records !== void 0)
      return visitor.Records(value.Records);
    if (value.Stats !== void 0)
      return visitor.Stats(value.Stats);
    if (value.Progress !== void 0)
      return visitor.Progress(value.Progress);
    if (value.Cont !== void 0)
      return visitor.Cont(value.Cont);
    if (value.End !== void 0)
      return visitor.End(value.End);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
})(SelectObjectContentEventStream || (SelectObjectContentEventStream = {}));
var PutObjectOutputFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING2 },
  ...obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING2 }
}), "PutObjectOutputFilterSensitiveLog");
var PutObjectRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING2 },
  ...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING2 },
  ...obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING2 }
}), "PutObjectRequestFilterSensitiveLog");
var UploadPartOutputFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING2 }
}), "UploadPartOutputFilterSensitiveLog");
var UploadPartRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING2 }
}), "UploadPartRequestFilterSensitiveLog");

// node_modules/@aws-sdk/client-s3/dist-es/protocols/Aws_restXml.js
var se_AbortMultipartUploadCommand = /* @__PURE__ */ __name(async (input, context) => {
  const b2 = requestBuilder(input, context);
  const headers = map({}, isSerializableHeaderValue, {
    [_xarp]: input[_RP],
    [_xaebo]: input[_EBO],
    [_xaimit]: [() => isSerializableHeaderValue(input[_IMIT]), () => dateToUtcString(input[_IMIT]).toString()]
  });
  b2.bp("/{Key+}");
  b2.p("Bucket", () => input.Bucket, "{Bucket}", false);
  b2.p("Key", () => input.Key, "{Key+}", true);
  const query = map({
    [_xi]: [, "AbortMultipartUpload"],
    [_uI]: [, expectNonNull(input[_UI], `UploadId`)]
  });
  let body;
  b2.m("DELETE").h(headers).q(query).b(body);
  return b2.build();
}, "se_AbortMultipartUploadCommand");
var se_CompleteMultipartUploadCommand = /* @__PURE__ */ __name(async (input, context) => {
  const b2 = requestBuilder(input, context);
  const headers = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xacc]: input[_CCRC],
    [_xacc_]: input[_CCRCC],
    [_xacs]: input[_CSHA],
    [_xacs_]: input[_CSHAh],
    [_xarp]: input[_RP],
    [_xaebo]: input[_EBO],
    [_im]: input[_IM],
    [_inm]: input[_INM],
    [_xasseca]: input[_SSECA],
    [_xasseck]: input[_SSECK],
    [_xasseckm]: input[_SSECKMD]
  });
  b2.bp("/{Key+}");
  b2.p("Bucket", () => input.Bucket, "{Bucket}", false);
  b2.p("Key", () => input.Key, "{Key+}", true);
  const query = map({
    [_uI]: [, expectNonNull(input[_UI], `UploadId`)]
  });
  let body;
  let contents;
  if (input.MultipartUpload !== void 0) {
    contents = se_CompletedMultipartUpload(input.MultipartUpload, context);
    contents = contents.n("CompleteMultipartUpload");
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b2.m("POST").h(headers).q(query).b(body);
  return b2.build();
}, "se_CompleteMultipartUploadCommand");
var se_CopyObjectCommand = /* @__PURE__ */ __name(async (input, context) => {
  const b2 = requestBuilder(input, context);
  const headers = map({}, isSerializableHeaderValue, {
    [_xaa]: input[_ACL],
    [_cc]: input[_CC],
    [_xaca]: input[_CA],
    [_cd]: input[_CD],
    [_ce]: input[_CE],
    [_cl]: input[_CL],
    [_ct]: input[_CT],
    [_xacs__]: input[_CS],
    [_xacsim]: input[_CSIM],
    [_xacsims]: [() => isSerializableHeaderValue(input[_CSIMS]), () => dateToUtcString(input[_CSIMS]).toString()],
    [_xacsinm]: input[_CSINM],
    [_xacsius]: [() => isSerializableHeaderValue(input[_CSIUS]), () => dateToUtcString(input[_CSIUS]).toString()],
    [_e]: [() => isSerializableHeaderValue(input[_E]), () => dateToUtcString(input[_E]).toString()],
    [_xagfc]: input[_GFC],
    [_xagr]: input[_GR],
    [_xagra]: input[_GRACP],
    [_xagwa]: input[_GWACP],
    [_xamd]: input[_MD],
    [_xatd]: input[_TD],
    [_xasse]: input[_SSE],
    [_xasc]: input[_SC],
    [_xawrl]: input[_WRL],
    [_xasseca]: input[_SSECA],
    [_xasseck]: input[_SSECK],
    [_xasseckm]: input[_SSECKMD],
    [_xasseakki]: input[_SSEKMSKI],
    [_xassec]: input[_SSEKMSEC],
    [_xassebke]: [() => isSerializableHeaderValue(input[_BKE]), () => input[_BKE].toString()],
    [_xacssseca]: input[_CSSSECA],
    [_xacssseck]: input[_CSSSECK],
    [_xacssseckm]: input[_CSSSECKMD],
    [_xarp]: input[_RP],
    [_xat]: input[_T],
    [_xaolm]: input[_OLM],
    [_xaolrud]: [() => isSerializableHeaderValue(input[_OLRUD]), () => serializeDateTime(input[_OLRUD]).toString()],
    [_xaollh]: input[_OLLHS],
    [_xaebo]: input[_EBO],
    [_xasebo]: input[_ESBO],
    ...input.Metadata !== void 0 && Object.keys(input.Metadata).reduce((acc, suffix) => {
      acc[`x-amz-meta-${suffix.toLowerCase()}`] = input.Metadata[suffix];
      return acc;
    }, {})
  });
  b2.bp("/{Key+}");
  b2.p("Bucket", () => input.Bucket, "{Bucket}", false);
  b2.p("Key", () => input.Key, "{Key+}", true);
  const query = map({
    [_xi]: [, "CopyObject"]
  });
  let body;
  b2.m("PUT").h(headers).q(query).b(body);
  return b2.build();
}, "se_CopyObjectCommand");
var se_CreateMultipartUploadCommand = /* @__PURE__ */ __name(async (input, context) => {
  const b2 = requestBuilder(input, context);
  const headers = map({}, isSerializableHeaderValue, {
    [_xaa]: input[_ACL],
    [_cc]: input[_CC],
    [_cd]: input[_CD],
    [_ce]: input[_CE],
    [_cl]: input[_CL],
    [_ct]: input[_CT],
    [_e]: [() => isSerializableHeaderValue(input[_E]), () => dateToUtcString(input[_E]).toString()],
    [_xagfc]: input[_GFC],
    [_xagr]: input[_GR],
    [_xagra]: input[_GRACP],
    [_xagwa]: input[_GWACP],
    [_xasse]: input[_SSE],
    [_xasc]: input[_SC],
    [_xawrl]: input[_WRL],
    [_xasseca]: input[_SSECA],
    [_xasseck]: input[_SSECK],
    [_xasseckm]: input[_SSECKMD],
    [_xasseakki]: input[_SSEKMSKI],
    [_xassec]: input[_SSEKMSEC],
    [_xassebke]: [() => isSerializableHeaderValue(input[_BKE]), () => input[_BKE].toString()],
    [_xarp]: input[_RP],
    [_xat]: input[_T],
    [_xaolm]: input[_OLM],
    [_xaolrud]: [() => isSerializableHeaderValue(input[_OLRUD]), () => serializeDateTime(input[_OLRUD]).toString()],
    [_xaollh]: input[_OLLHS],
    [_xaebo]: input[_EBO],
    [_xaca]: input[_CA],
    ...input.Metadata !== void 0 && Object.keys(input.Metadata).reduce((acc, suffix) => {
      acc[`x-amz-meta-${suffix.toLowerCase()}`] = input.Metadata[suffix];
      return acc;
    }, {})
  });
  b2.bp("/{Key+}");
  b2.p("Bucket", () => input.Bucket, "{Bucket}", false);
  b2.p("Key", () => input.Key, "{Key+}", true);
  const query = map({
    [_u]: [, ""]
  });
  let body;
  b2.m("POST").h(headers).q(query).b(body);
  return b2.build();
}, "se_CreateMultipartUploadCommand");
var se_CreateSessionCommand = /* @__PURE__ */ __name(async (input, context) => {
  const b2 = requestBuilder(input, context);
  const headers = map({}, isSerializableHeaderValue, {
    [_xacsm]: input[_SM],
    [_xasse]: input[_SSE],
    [_xasseakki]: input[_SSEKMSKI],
    [_xassec]: input[_SSEKMSEC],
    [_xassebke]: [() => isSerializableHeaderValue(input[_BKE]), () => input[_BKE].toString()]
  });
  b2.bp("/");
  b2.p("Bucket", () => input.Bucket, "{Bucket}", false);
  const query = map({
    [_s]: [, ""]
  });
  let body;
  b2.m("GET").h(headers).q(query).b(body);
  return b2.build();
}, "se_CreateSessionCommand");
var se_DeleteObjectCommand = /* @__PURE__ */ __name(async (input, context) => {
  const b2 = requestBuilder(input, context);
  const headers = map({}, isSerializableHeaderValue, {
    [_xam]: input[_MFA],
    [_xarp]: input[_RP],
    [_xabgr]: [() => isSerializableHeaderValue(input[_BGR]), () => input[_BGR].toString()],
    [_xaebo]: input[_EBO],
    [_im]: input[_IM],
    [_xaimlmt]: [() => isSerializableHeaderValue(input[_IMLMT]), () => dateToUtcString(input[_IMLMT]).toString()],
    [_xaims]: [() => isSerializableHeaderValue(input[_IMS]), () => input[_IMS].toString()]
  });
  b2.bp("/{Key+}");
  b2.p("Bucket", () => input.Bucket, "{Bucket}", false);
  b2.p("Key", () => input.Key, "{Key+}", true);
  const query = map({
    [_xi]: [, "DeleteObject"],
    [_vI]: [, input[_VI]]
  });
  let body;
  b2.m("DELETE").h(headers).q(query).b(body);
  return b2.build();
}, "se_DeleteObjectCommand");
var se_GetObjectCommand = /* @__PURE__ */ __name(async (input, context) => {
  const b2 = requestBuilder(input, context);
  const headers = map({}, isSerializableHeaderValue, {
    [_im]: input[_IM],
    [_ims]: [() => isSerializableHeaderValue(input[_IMSf]), () => dateToUtcString(input[_IMSf]).toString()],
    [_inm]: input[_INM],
    [_ius]: [() => isSerializableHeaderValue(input[_IUS]), () => dateToUtcString(input[_IUS]).toString()],
    [_ra]: input[_R],
    [_xasseca]: input[_SSECA],
    [_xasseck]: input[_SSECK],
    [_xasseckm]: input[_SSECKMD],
    [_xarp]: input[_RP],
    [_xaebo]: input[_EBO],
    [_xacm]: input[_CM]
  });
  b2.bp("/{Key+}");
  b2.p("Bucket", () => input.Bucket, "{Bucket}", false);
  b2.p("Key", () => input.Key, "{Key+}", true);
  const query = map({
    [_xi]: [, "GetObject"],
    [_rcc]: [, input[_RCC]],
    [_rcd]: [, input[_RCD]],
    [_rce]: [, input[_RCE]],
    [_rcl]: [, input[_RCL]],
    [_rct]: [, input[_RCT]],
    [_re]: [() => input.ResponseExpires !== void 0, () => dateToUtcString(input[_RE]).toString()],
    [_vI]: [, input[_VI]],
    [_pN]: [() => input.PartNumber !== void 0, () => input[_PN].toString()]
  });
  let body;
  b2.m("GET").h(headers).q(query).b(body);
  return b2.build();
}, "se_GetObjectCommand");
var se_PutObjectCommand = /* @__PURE__ */ __name(async (input, context) => {
  const b2 = requestBuilder(input, context);
  const headers = map({}, isSerializableHeaderValue, {
    [_ct]: input[_CT] || "application/octet-stream",
    [_xaa]: input[_ACL],
    [_cc]: input[_CC],
    [_cd]: input[_CD],
    [_ce]: input[_CE],
    [_cl]: input[_CL],
    [_cl_]: [() => isSerializableHeaderValue(input[_CLo]), () => input[_CLo].toString()],
    [_cm]: input[_CMD],
    [_xasca]: input[_CA],
    [_xacc]: input[_CCRC],
    [_xacc_]: input[_CCRCC],
    [_xacs]: input[_CSHA],
    [_xacs_]: input[_CSHAh],
    [_e]: [() => isSerializableHeaderValue(input[_E]), () => dateToUtcString(input[_E]).toString()],
    [_im]: input[_IM],
    [_inm]: input[_INM],
    [_xagfc]: input[_GFC],
    [_xagr]: input[_GR],
    [_xagra]: input[_GRACP],
    [_xagwa]: input[_GWACP],
    [_xawob]: [() => isSerializableHeaderValue(input[_WOB]), () => input[_WOB].toString()],
    [_xasse]: input[_SSE],
    [_xasc]: input[_SC],
    [_xawrl]: input[_WRL],
    [_xasseca]: input[_SSECA],
    [_xasseck]: input[_SSECK],
    [_xasseckm]: input[_SSECKMD],
    [_xasseakki]: input[_SSEKMSKI],
    [_xassec]: input[_SSEKMSEC],
    [_xassebke]: [() => isSerializableHeaderValue(input[_BKE]), () => input[_BKE].toString()],
    [_xarp]: input[_RP],
    [_xat]: input[_T],
    [_xaolm]: input[_OLM],
    [_xaolrud]: [() => isSerializableHeaderValue(input[_OLRUD]), () => serializeDateTime(input[_OLRUD]).toString()],
    [_xaollh]: input[_OLLHS],
    [_xaebo]: input[_EBO],
    ...input.Metadata !== void 0 && Object.keys(input.Metadata).reduce((acc, suffix) => {
      acc[`x-amz-meta-${suffix.toLowerCase()}`] = input.Metadata[suffix];
      return acc;
    }, {})
  });
  b2.bp("/{Key+}");
  b2.p("Bucket", () => input.Bucket, "{Bucket}", false);
  b2.p("Key", () => input.Key, "{Key+}", true);
  const query = map({
    [_xi]: [, "PutObject"]
  });
  let body;
  let contents;
  if (input.Body !== void 0) {
    contents = input.Body;
    body = contents;
  }
  b2.m("PUT").h(headers).q(query).b(body);
  return b2.build();
}, "se_PutObjectCommand");
var se_UploadPartCommand = /* @__PURE__ */ __name(async (input, context) => {
  const b2 = requestBuilder(input, context);
  const headers = map({}, isSerializableHeaderValue, {
    "content-type": "application/octet-stream",
    [_cl_]: [() => isSerializableHeaderValue(input[_CLo]), () => input[_CLo].toString()],
    [_cm]: input[_CMD],
    [_xasca]: input[_CA],
    [_xacc]: input[_CCRC],
    [_xacc_]: input[_CCRCC],
    [_xacs]: input[_CSHA],
    [_xacs_]: input[_CSHAh],
    [_xasseca]: input[_SSECA],
    [_xasseck]: input[_SSECK],
    [_xasseckm]: input[_SSECKMD],
    [_xarp]: input[_RP],
    [_xaebo]: input[_EBO]
  });
  b2.bp("/{Key+}");
  b2.p("Bucket", () => input.Bucket, "{Bucket}", false);
  b2.p("Key", () => input.Key, "{Key+}", true);
  const query = map({
    [_xi]: [, "UploadPart"],
    [_pN]: [expectNonNull(input.PartNumber, `PartNumber`) != null, () => input[_PN].toString()],
    [_uI]: [, expectNonNull(input[_UI], `UploadId`)]
  });
  let body;
  let contents;
  if (input.Body !== void 0) {
    contents = input.Body;
    body = contents;
  }
  b2.m("PUT").h(headers).q(query).b(body);
  return b2.build();
}, "se_UploadPartCommand");
var de_AbortMultipartUploadCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata2(output),
    [_RC]: [, output.headers[_xarc]]
  });
  await collectBody(output.body, context);
  return contents;
}, "de_AbortMultipartUploadCommand");
var de_CompleteMultipartUploadCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata2(output),
    [_Exp]: [, output.headers[_xae]],
    [_SSE]: [, output.headers[_xasse]],
    [_VI]: [, output.headers[_xavi]],
    [_SSEKMSKI]: [, output.headers[_xasseakki]],
    [_BKE]: [() => void 0 !== output.headers[_xassebke], () => parseBoolean(output.headers[_xassebke])],
    [_RC]: [, output.headers[_xarc]]
  });
  const data = expectNonNull(expectObject(await parseXmlBody(output.body, context)), "body");
  if (data[_B] != null) {
    contents[_B] = expectString(data[_B]);
  }
  if (data[_CCRC] != null) {
    contents[_CCRC] = expectString(data[_CCRC]);
  }
  if (data[_CCRCC] != null) {
    contents[_CCRCC] = expectString(data[_CCRCC]);
  }
  if (data[_CSHA] != null) {
    contents[_CSHA] = expectString(data[_CSHA]);
  }
  if (data[_CSHAh] != null) {
    contents[_CSHAh] = expectString(data[_CSHAh]);
  }
  if (data[_ETa] != null) {
    contents[_ETa] = expectString(data[_ETa]);
  }
  if (data[_K] != null) {
    contents[_K] = expectString(data[_K]);
  }
  if (data[_L] != null) {
    contents[_L] = expectString(data[_L]);
  }
  return contents;
}, "de_CompleteMultipartUploadCommand");
var de_CopyObjectCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata2(output),
    [_Exp]: [, output.headers[_xae]],
    [_CSVI]: [, output.headers[_xacsvi]],
    [_VI]: [, output.headers[_xavi]],
    [_SSE]: [, output.headers[_xasse]],
    [_SSECA]: [, output.headers[_xasseca]],
    [_SSECKMD]: [, output.headers[_xasseckm]],
    [_SSEKMSKI]: [, output.headers[_xasseakki]],
    [_SSEKMSEC]: [, output.headers[_xassec]],
    [_BKE]: [() => void 0 !== output.headers[_xassebke], () => parseBoolean(output.headers[_xassebke])],
    [_RC]: [, output.headers[_xarc]]
  });
  const data = expectObject(await parseXmlBody(output.body, context));
  contents.CopyObjectResult = de_CopyObjectResult(data, context);
  return contents;
}, "de_CopyObjectCommand");
var de_CreateMultipartUploadCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata2(output),
    [_AD]: [
      () => void 0 !== output.headers[_xaad],
      () => expectNonNull(parseRfc7231DateTime(output.headers[_xaad]))
    ],
    [_ARI]: [, output.headers[_xaari]],
    [_SSE]: [, output.headers[_xasse]],
    [_SSECA]: [, output.headers[_xasseca]],
    [_SSECKMD]: [, output.headers[_xasseckm]],
    [_SSEKMSKI]: [, output.headers[_xasseakki]],
    [_SSEKMSEC]: [, output.headers[_xassec]],
    [_BKE]: [() => void 0 !== output.headers[_xassebke], () => parseBoolean(output.headers[_xassebke])],
    [_RC]: [, output.headers[_xarc]],
    [_CA]: [, output.headers[_xaca]]
  });
  const data = expectNonNull(expectObject(await parseXmlBody(output.body, context)), "body");
  if (data[_B] != null) {
    contents[_B] = expectString(data[_B]);
  }
  if (data[_K] != null) {
    contents[_K] = expectString(data[_K]);
  }
  if (data[_UI] != null) {
    contents[_UI] = expectString(data[_UI]);
  }
  return contents;
}, "de_CreateMultipartUploadCommand");
var de_CreateSessionCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata2(output),
    [_SSE]: [, output.headers[_xasse]],
    [_SSEKMSKI]: [, output.headers[_xasseakki]],
    [_SSEKMSEC]: [, output.headers[_xassec]],
    [_BKE]: [() => void 0 !== output.headers[_xassebke], () => parseBoolean(output.headers[_xassebke])]
  });
  const data = expectNonNull(expectObject(await parseXmlBody(output.body, context)), "body");
  if (data[_C] != null) {
    contents[_C] = de_SessionCredentials(data[_C], context);
  }
  return contents;
}, "de_CreateSessionCommand");
var de_DeleteObjectCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata2(output),
    [_DM]: [() => void 0 !== output.headers[_xadm], () => parseBoolean(output.headers[_xadm])],
    [_VI]: [, output.headers[_xavi]],
    [_RC]: [, output.headers[_xarc]]
  });
  await collectBody(output.body, context);
  return contents;
}, "de_DeleteObjectCommand");
var de_GetObjectCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata2(output),
    [_DM]: [() => void 0 !== output.headers[_xadm], () => parseBoolean(output.headers[_xadm])],
    [_AR]: [, output.headers[_ar]],
    [_Exp]: [, output.headers[_xae]],
    [_Re]: [, output.headers[_xar]],
    [_LM]: [() => void 0 !== output.headers[_lm], () => expectNonNull(parseRfc7231DateTime(output.headers[_lm]))],
    [_CLo]: [() => void 0 !== output.headers[_cl_], () => strictParseLong(output.headers[_cl_])],
    [_ETa]: [, output.headers[_eta]],
    [_CCRC]: [, output.headers[_xacc]],
    [_CCRCC]: [, output.headers[_xacc_]],
    [_CSHA]: [, output.headers[_xacs]],
    [_CSHAh]: [, output.headers[_xacs_]],
    [_MM]: [() => void 0 !== output.headers[_xamm], () => strictParseInt32(output.headers[_xamm])],
    [_VI]: [, output.headers[_xavi]],
    [_CC]: [, output.headers[_cc]],
    [_CD]: [, output.headers[_cd]],
    [_CE]: [, output.headers[_ce]],
    [_CL]: [, output.headers[_cl]],
    [_CR]: [, output.headers[_cr]],
    [_CT]: [, output.headers[_ct]],
    [_E]: [() => void 0 !== output.headers[_e], () => expectNonNull(parseRfc7231DateTime(output.headers[_e]))],
    [_ES]: [, output.headers[_ex]],
    [_WRL]: [, output.headers[_xawrl]],
    [_SSE]: [, output.headers[_xasse]],
    [_SSECA]: [, output.headers[_xasseca]],
    [_SSECKMD]: [, output.headers[_xasseckm]],
    [_SSEKMSKI]: [, output.headers[_xasseakki]],
    [_BKE]: [() => void 0 !== output.headers[_xassebke], () => parseBoolean(output.headers[_xassebke])],
    [_SC]: [, output.headers[_xasc]],
    [_RC]: [, output.headers[_xarc]],
    [_RS]: [, output.headers[_xars]],
    [_PC]: [() => void 0 !== output.headers[_xampc], () => strictParseInt32(output.headers[_xampc])],
    [_TC]: [() => void 0 !== output.headers[_xatc], () => strictParseInt32(output.headers[_xatc])],
    [_OLM]: [, output.headers[_xaolm]],
    [_OLRUD]: [
      () => void 0 !== output.headers[_xaolrud],
      () => expectNonNull(parseRfc3339DateTimeWithOffset(output.headers[_xaolrud]))
    ],
    [_OLLHS]: [, output.headers[_xaollh]],
    Metadata: [
      ,
      Object.keys(output.headers).filter((header) => header.startsWith("x-amz-meta-")).reduce((acc, header) => {
        acc[header.substring(11)] = output.headers[header];
        return acc;
      }, {})
    ]
  });
  const data = output.body;
  context.sdkStreamMixin(data);
  contents.Body = data;
  return contents;
}, "de_GetObjectCommand");
var de_PutObjectCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata2(output),
    [_Exp]: [, output.headers[_xae]],
    [_ETa]: [, output.headers[_eta]],
    [_CCRC]: [, output.headers[_xacc]],
    [_CCRCC]: [, output.headers[_xacc_]],
    [_CSHA]: [, output.headers[_xacs]],
    [_CSHAh]: [, output.headers[_xacs_]],
    [_SSE]: [, output.headers[_xasse]],
    [_VI]: [, output.headers[_xavi]],
    [_SSECA]: [, output.headers[_xasseca]],
    [_SSECKMD]: [, output.headers[_xasseckm]],
    [_SSEKMSKI]: [, output.headers[_xasseakki]],
    [_SSEKMSEC]: [, output.headers[_xassec]],
    [_BKE]: [() => void 0 !== output.headers[_xassebke], () => parseBoolean(output.headers[_xassebke])],
    [_Si]: [() => void 0 !== output.headers[_xaos], () => strictParseLong(output.headers[_xaos])],
    [_RC]: [, output.headers[_xarc]]
  });
  await collectBody(output.body, context);
  return contents;
}, "de_PutObjectCommand");
var de_UploadPartCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata2(output),
    [_SSE]: [, output.headers[_xasse]],
    [_ETa]: [, output.headers[_eta]],
    [_CCRC]: [, output.headers[_xacc]],
    [_CCRCC]: [, output.headers[_xacc_]],
    [_CSHA]: [, output.headers[_xacs]],
    [_CSHAh]: [, output.headers[_xacs_]],
    [_SSECA]: [, output.headers[_xasseca]],
    [_SSECKMD]: [, output.headers[_xasseckm]],
    [_SSEKMSKI]: [, output.headers[_xasseakki]],
    [_BKE]: [() => void 0 !== output.headers[_xassebke], () => parseBoolean(output.headers[_xassebke])],
    [_RC]: [, output.headers[_xarc]]
  });
  await collectBody(output.body, context);
  return contents;
}, "de_UploadPartCommand");
var de_CommandError = /* @__PURE__ */ __name(async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseXmlErrorBody(output.body, context)
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchUpload":
    case "com.amazonaws.s3#NoSuchUpload":
      throw await de_NoSuchUploadRes(parsedOutput, context);
    case "ObjectNotInActiveTierError":
    case "com.amazonaws.s3#ObjectNotInActiveTierError":
      throw await de_ObjectNotInActiveTierErrorRes(parsedOutput, context);
    case "BucketAlreadyExists":
    case "com.amazonaws.s3#BucketAlreadyExists":
      throw await de_BucketAlreadyExistsRes(parsedOutput, context);
    case "BucketAlreadyOwnedByYou":
    case "com.amazonaws.s3#BucketAlreadyOwnedByYou":
      throw await de_BucketAlreadyOwnedByYouRes(parsedOutput, context);
    case "NoSuchBucket":
    case "com.amazonaws.s3#NoSuchBucket":
      throw await de_NoSuchBucketRes(parsedOutput, context);
    case "InvalidObjectState":
    case "com.amazonaws.s3#InvalidObjectState":
      throw await de_InvalidObjectStateRes(parsedOutput, context);
    case "NoSuchKey":
    case "com.amazonaws.s3#NoSuchKey":
      throw await de_NoSuchKeyRes(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.s3#NotFound":
      throw await de_NotFoundRes(parsedOutput, context);
    case "EncryptionTypeMismatch":
    case "com.amazonaws.s3#EncryptionTypeMismatch":
      throw await de_EncryptionTypeMismatchRes(parsedOutput, context);
    case "InvalidRequest":
    case "com.amazonaws.s3#InvalidRequest":
      throw await de_InvalidRequestRes(parsedOutput, context);
    case "InvalidWriteOffset":
    case "com.amazonaws.s3#InvalidWriteOffset":
      throw await de_InvalidWriteOffsetRes(parsedOutput, context);
    case "TooManyParts":
    case "com.amazonaws.s3#TooManyParts":
      throw await de_TooManyPartsRes(parsedOutput, context);
    case "ObjectAlreadyInActiveTierError":
    case "com.amazonaws.s3#ObjectAlreadyInActiveTierError":
      throw await de_ObjectAlreadyInActiveTierErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError2({
        output,
        parsedBody,
        errorCode
      });
  }
}, "de_CommandError");
var throwDefaultError2 = withBaseException(S3ServiceException);
var de_BucketAlreadyExistsRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new BucketAlreadyExists({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_BucketAlreadyExistsRes");
var de_BucketAlreadyOwnedByYouRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new BucketAlreadyOwnedByYou({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_BucketAlreadyOwnedByYouRes");
var de_EncryptionTypeMismatchRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new EncryptionTypeMismatch({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_EncryptionTypeMismatchRes");
var de_InvalidObjectStateRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  if (data[_AT] != null) {
    contents[_AT] = expectString(data[_AT]);
  }
  if (data[_SC] != null) {
    contents[_SC] = expectString(data[_SC]);
  }
  const exception = new InvalidObjectState({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_InvalidObjectStateRes");
var de_InvalidRequestRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new InvalidRequest({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_InvalidRequestRes");
var de_InvalidWriteOffsetRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new InvalidWriteOffset({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_InvalidWriteOffsetRes");
var de_NoSuchBucketRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new NoSuchBucket({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_NoSuchBucketRes");
var de_NoSuchKeyRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new NoSuchKey({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_NoSuchKeyRes");
var de_NoSuchUploadRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new NoSuchUpload({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_NoSuchUploadRes");
var de_NotFoundRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new NotFound({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_NotFoundRes");
var de_ObjectAlreadyInActiveTierErrorRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new ObjectAlreadyInActiveTierError({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_ObjectAlreadyInActiveTierErrorRes");
var de_ObjectNotInActiveTierErrorRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new ObjectNotInActiveTierError({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_ObjectNotInActiveTierErrorRes");
var de_TooManyPartsRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const exception = new TooManyParts({
    $metadata: deserializeMetadata2(parsedOutput),
    ...contents
  });
  return decorateServiceException(exception, parsedOutput.body);
}, "de_TooManyPartsRes");
var se_CompletedMultipartUpload = /* @__PURE__ */ __name((input, context) => {
  const bn2 = new XmlNode2(_CMU);
  bn2.l(input, "Parts", "Part", () => se_CompletedPartList(input[_Part], context));
  return bn2;
}, "se_CompletedMultipartUpload");
var se_CompletedPart = /* @__PURE__ */ __name((input, context) => {
  const bn2 = new XmlNode2(_CPo);
  bn2.cc(input, _ETa);
  bn2.cc(input, _CCRC);
  bn2.cc(input, _CCRCC);
  bn2.cc(input, _CSHA);
  bn2.cc(input, _CSHAh);
  if (input[_PN] != null) {
    bn2.c(XmlNode2.of(_PN, String(input[_PN])).n(_PN));
  }
  return bn2;
}, "se_CompletedPart");
var se_CompletedPartList = /* @__PURE__ */ __name((input, context) => {
  return input.filter((e2) => e2 != null).map((entry) => {
    const n2 = se_CompletedPart(entry, context);
    return n2.n(_me);
  });
}, "se_CompletedPartList");
var de_CopyObjectResult = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_ETa] != null) {
    contents[_ETa] = expectString(output[_ETa]);
  }
  if (output[_LM] != null) {
    contents[_LM] = expectNonNull(parseRfc3339DateTimeWithOffset(output[_LM]));
  }
  if (output[_CCRC] != null) {
    contents[_CCRC] = expectString(output[_CCRC]);
  }
  if (output[_CCRCC] != null) {
    contents[_CCRCC] = expectString(output[_CCRCC]);
  }
  if (output[_CSHA] != null) {
    contents[_CSHA] = expectString(output[_CSHA]);
  }
  if (output[_CSHAh] != null) {
    contents[_CSHAh] = expectString(output[_CSHAh]);
  }
  return contents;
}, "de_CopyObjectResult");
var de_SessionCredentials = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_AKI] != null) {
    contents[_AKI] = expectString(output[_AKI]);
  }
  if (output[_SAK] != null) {
    contents[_SAK] = expectString(output[_SAK]);
  }
  if (output[_ST] != null) {
    contents[_ST] = expectString(output[_ST]);
  }
  if (output[_Exp] != null) {
    contents[_Exp] = expectNonNull(parseRfc3339DateTimeWithOffset(output[_Exp]));
  }
  return contents;
}, "de_SessionCredentials");
var deserializeMetadata2 = /* @__PURE__ */ __name((output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
}), "deserializeMetadata");
var _ACL = "ACL";
var _AD = "AbortDate";
var _AKI = "AccessKeyId";
var _AR = "AcceptRanges";
var _ARI = "AbortRuleId";
var _AT = "AccessTier";
var _B = "Bucket";
var _BGR = "BypassGovernanceRetention";
var _BKE = "BucketKeyEnabled";
var _C = "Credentials";
var _CA = "ChecksumAlgorithm";
var _CC = "CacheControl";
var _CCRC = "ChecksumCRC32";
var _CCRCC = "ChecksumCRC32C";
var _CD = "ContentDisposition";
var _CE = "ContentEncoding";
var _CL = "ContentLanguage";
var _CLo = "ContentLength";
var _CM = "ChecksumMode";
var _CMD = "ContentMD5";
var _CMU = "CompletedMultipartUpload";
var _CPo = "CompletedPart";
var _CR = "ContentRange";
var _CS = "CopySource";
var _CSHA = "ChecksumSHA1";
var _CSHAh = "ChecksumSHA256";
var _CSIM = "CopySourceIfMatch";
var _CSIMS = "CopySourceIfModifiedSince";
var _CSINM = "CopySourceIfNoneMatch";
var _CSIUS = "CopySourceIfUnmodifiedSince";
var _CSSSECA = "CopySourceSSECustomerAlgorithm";
var _CSSSECK = "CopySourceSSECustomerKey";
var _CSSSECKMD = "CopySourceSSECustomerKeyMD5";
var _CSVI = "CopySourceVersionId";
var _CT = "ContentType";
var _DM = "DeleteMarker";
var _E = "Expires";
var _EBO = "ExpectedBucketOwner";
var _ES = "ExpiresString";
var _ESBO = "ExpectedSourceBucketOwner";
var _ETa = "ETag";
var _Exp = "Expiration";
var _GFC = "GrantFullControl";
var _GR = "GrantRead";
var _GRACP = "GrantReadACP";
var _GWACP = "GrantWriteACP";
var _IM = "IfMatch";
var _IMIT = "IfMatchInitiatedTime";
var _IMLMT = "IfMatchLastModifiedTime";
var _IMS = "IfMatchSize";
var _IMSf = "IfModifiedSince";
var _INM = "IfNoneMatch";
var _IUS = "IfUnmodifiedSince";
var _K = "Key";
var _L = "Location";
var _LM = "LastModified";
var _MD = "MetadataDirective";
var _MFA = "MFA";
var _MM = "MissingMeta";
var _OLLHS = "ObjectLockLegalHoldStatus";
var _OLM = "ObjectLockMode";
var _OLRUD = "ObjectLockRetainUntilDate";
var _PC = "PartsCount";
var _PN = "PartNumber";
var _Part = "Parts";
var _R = "Range";
var _RC = "RequestCharged";
var _RCC = "ResponseCacheControl";
var _RCD = "ResponseContentDisposition";
var _RCE = "ResponseContentEncoding";
var _RCL = "ResponseContentLanguage";
var _RCT = "ResponseContentType";
var _RE = "ResponseExpires";
var _RP = "RequestPayer";
var _RS = "ReplicationStatus";
var _Re = "Restore";
var _SAK = "SecretAccessKey";
var _SC = "StorageClass";
var _SM = "SessionMode";
var _SSE = "ServerSideEncryption";
var _SSECA = "SSECustomerAlgorithm";
var _SSECK = "SSECustomerKey";
var _SSECKMD = "SSECustomerKeyMD5";
var _SSEKMSEC = "SSEKMSEncryptionContext";
var _SSEKMSKI = "SSEKMSKeyId";
var _ST = "SessionToken";
var _Si = "Size";
var _T = "Tagging";
var _TC = "TagCount";
var _TD = "TaggingDirective";
var _UI = "UploadId";
var _VI = "VersionId";
var _WOB = "WriteOffsetBytes";
var _WRL = "WebsiteRedirectLocation";
var _ar = "accept-ranges";
var _cc = "cache-control";
var _cd = "content-disposition";
var _ce = "content-encoding";
var _cl = "content-language";
var _cl_ = "content-length";
var _cm = "content-md5";
var _cr = "content-range";
var _ct = "content-type";
var _e = "expires";
var _eta = "etag";
var _ex = "expiresstring";
var _im = "if-match";
var _ims = "if-modified-since";
var _inm = "if-none-match";
var _ius = "if-unmodified-since";
var _lm = "last-modified";
var _me = "member";
var _pN = "partNumber";
var _ra = "range";
var _rcc = "response-cache-control";
var _rcd = "response-content-disposition";
var _rce = "response-content-encoding";
var _rcl = "response-content-language";
var _rct = "response-content-type";
var _re = "response-expires";
var _s = "session";
var _u = "uploads";
var _uI = "uploadId";
var _vI = "versionId";
var _ve = '<?xml version="1.0" encoding="UTF-8"?>';
var _xaa = "x-amz-acl";
var _xaad = "x-amz-abort-date";
var _xaari = "x-amz-abort-rule-id";
var _xabgr = "x-amz-bypass-governance-retention";
var _xaca = "x-amz-checksum-algorithm";
var _xacc = "x-amz-checksum-crc32";
var _xacc_ = "x-amz-checksum-crc32c";
var _xacm = "x-amz-checksum-mode";
var _xacs = "x-amz-checksum-sha1";
var _xacs_ = "x-amz-checksum-sha256";
var _xacs__ = "x-amz-copy-source";
var _xacsim = "x-amz-copy-source-if-match";
var _xacsims = "x-amz-copy-source-if-modified-since";
var _xacsinm = "x-amz-copy-source-if-none-match";
var _xacsius = "x-amz-copy-source-if-unmodified-since";
var _xacsm = "x-amz-create-session-mode";
var _xacssseca = "x-amz-copy-source-server-side-encryption-customer-algorithm";
var _xacssseck = "x-amz-copy-source-server-side-encryption-customer-key";
var _xacssseckm = "x-amz-copy-source-server-side-encryption-customer-key-md5";
var _xacsvi = "x-amz-copy-source-version-id";
var _xadm = "x-amz-delete-marker";
var _xae = "x-amz-expiration";
var _xaebo = "x-amz-expected-bucket-owner";
var _xagfc = "x-amz-grant-full-control";
var _xagr = "x-amz-grant-read";
var _xagra = "x-amz-grant-read-acp";
var _xagwa = "x-amz-grant-write-acp";
var _xaimit = "x-amz-if-match-initiated-time";
var _xaimlmt = "x-amz-if-match-last-modified-time";
var _xaims = "x-amz-if-match-size";
var _xam = "x-amz-mfa";
var _xamd = "x-amz-metadata-directive";
var _xamm = "x-amz-missing-meta";
var _xampc = "x-amz-mp-parts-count";
var _xaollh = "x-amz-object-lock-legal-hold";
var _xaolm = "x-amz-object-lock-mode";
var _xaolrud = "x-amz-object-lock-retain-until-date";
var _xaos = "x-amz-object-size";
var _xar = "x-amz-restore";
var _xarc = "x-amz-request-charged";
var _xarp = "x-amz-request-payer";
var _xars = "x-amz-replication-status";
var _xasc = "x-amz-storage-class";
var _xasca = "x-amz-sdk-checksum-algorithm";
var _xasebo = "x-amz-source-expected-bucket-owner";
var _xasse = "x-amz-server-side-encryption";
var _xasseakki = "x-amz-server-side-encryption-aws-kms-key-id";
var _xassebke = "x-amz-server-side-encryption-bucket-key-enabled";
var _xassec = "x-amz-server-side-encryption-context";
var _xasseca = "x-amz-server-side-encryption-customer-algorithm";
var _xasseck = "x-amz-server-side-encryption-customer-key";
var _xasseckm = "x-amz-server-side-encryption-customer-key-md5";
var _xat = "x-amz-tagging";
var _xatc = "x-amz-tagging-count";
var _xatd = "x-amz-tagging-directive";
var _xavi = "x-amz-version-id";
var _xawob = "x-amz-write-offset-bytes";
var _xawrl = "x-amz-website-redirect-location";
var _xi = "x-id";

// node_modules/@aws-sdk/client-s3/dist-es/commands/CreateSessionCommand.js
var CreateSessionCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  DisableS3ExpressSessionAuth: { type: "staticContextParams", value: true },
  Bucket: { type: "contextParams", name: "Bucket" }
}).m(function(Command2, cs2, config, o2) {
  return [
    getSerdePlugin(config, this.serialize, this.deserialize),
    getEndpointPlugin(config, Command2.getEndpointParameterInstructions()),
    getThrow200ExceptionsPlugin(config)
  ];
}).s("AmazonS3", "CreateSession", {}).n("S3Client", "CreateSessionCommand").f(CreateSessionRequestFilterSensitiveLog, CreateSessionOutputFilterSensitiveLog).ser(se_CreateSessionCommand).de(de_CreateSessionCommand).build() {
  static {
    __name(this, "CreateSessionCommand");
  }
};

// node_modules/@aws-sdk/client-s3/package.json
var package_default = {
  name: "@aws-sdk/client-s3",
  description: "AWS SDK for JavaScript S3 Client for Node.js, Browser and React Native",
  version: "3.726.1",
  scripts: {
    build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
    "build:cjs": "node ../../scripts/compilation/inline client-s3",
    "build:es": "tsc -p tsconfig.es.json",
    "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
    "build:types": "tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
    "extract:docs": "api-extractor run --local",
    "generate:client": "node ../../scripts/generate-clients/single-service --solo s3",
    test: "yarn g:vitest run",
    "test:browser": "node ./test/browser-build/esbuild && yarn g:vitest run -c vitest.config.browser.ts",
    "test:browser:watch": "node ./test/browser-build/esbuild && yarn g:vitest watch -c vitest.config.browser.ts",
    "test:e2e": "yarn g:vitest run -c vitest.config.e2e.ts && yarn test:browser",
    "test:e2e:watch": "yarn g:vitest watch -c vitest.config.e2e.ts",
    "test:watch": "yarn g:vitest watch"
  },
  main: "./dist-cjs/index.js",
  types: "./dist-types/index.d.ts",
  module: "./dist-es/index.js",
  sideEffects: false,
  dependencies: {
    "@aws-crypto/sha1-browser": "5.2.0",
    "@aws-crypto/sha256-browser": "5.2.0",
    "@aws-crypto/sha256-js": "5.2.0",
    "@aws-sdk/client-sso-oidc": "3.726.0",
    "@aws-sdk/client-sts": "3.726.1",
    "@aws-sdk/core": "3.723.0",
    "@aws-sdk/credential-provider-node": "3.726.0",
    "@aws-sdk/middleware-bucket-endpoint": "3.726.0",
    "@aws-sdk/middleware-expect-continue": "3.723.0",
    "@aws-sdk/middleware-flexible-checksums": "3.723.0",
    "@aws-sdk/middleware-host-header": "3.723.0",
    "@aws-sdk/middleware-location-constraint": "3.723.0",
    "@aws-sdk/middleware-logger": "3.723.0",
    "@aws-sdk/middleware-recursion-detection": "3.723.0",
    "@aws-sdk/middleware-sdk-s3": "3.723.0",
    "@aws-sdk/middleware-ssec": "3.723.0",
    "@aws-sdk/middleware-user-agent": "3.726.0",
    "@aws-sdk/region-config-resolver": "3.723.0",
    "@aws-sdk/signature-v4-multi-region": "3.723.0",
    "@aws-sdk/types": "3.723.0",
    "@aws-sdk/util-endpoints": "3.726.0",
    "@aws-sdk/util-user-agent-browser": "3.723.0",
    "@aws-sdk/util-user-agent-node": "3.726.0",
    "@aws-sdk/xml-builder": "3.723.0",
    "@smithy/config-resolver": "^4.0.0",
    "@smithy/core": "^3.0.0",
    "@smithy/eventstream-serde-browser": "^4.0.0",
    "@smithy/eventstream-serde-config-resolver": "^4.0.0",
    "@smithy/eventstream-serde-node": "^4.0.0",
    "@smithy/fetch-http-handler": "^5.0.0",
    "@smithy/hash-blob-browser": "^4.0.0",
    "@smithy/hash-node": "^4.0.0",
    "@smithy/hash-stream-node": "^4.0.0",
    "@smithy/invalid-dependency": "^4.0.0",
    "@smithy/md5-js": "^4.0.0",
    "@smithy/middleware-content-length": "^4.0.0",
    "@smithy/middleware-endpoint": "^4.0.0",
    "@smithy/middleware-retry": "^4.0.0",
    "@smithy/middleware-serde": "^4.0.0",
    "@smithy/middleware-stack": "^4.0.0",
    "@smithy/node-config-provider": "^4.0.0",
    "@smithy/node-http-handler": "^4.0.0",
    "@smithy/protocol-http": "^5.0.0",
    "@smithy/smithy-client": "^4.0.0",
    "@smithy/types": "^4.0.0",
    "@smithy/url-parser": "^4.0.0",
    "@smithy/util-base64": "^4.0.0",
    "@smithy/util-body-length-browser": "^4.0.0",
    "@smithy/util-body-length-node": "^4.0.0",
    "@smithy/util-defaults-mode-browser": "^4.0.0",
    "@smithy/util-defaults-mode-node": "^4.0.0",
    "@smithy/util-endpoints": "^3.0.0",
    "@smithy/util-middleware": "^4.0.0",
    "@smithy/util-retry": "^4.0.0",
    "@smithy/util-stream": "^4.0.0",
    "@smithy/util-utf8": "^4.0.0",
    "@smithy/util-waiter": "^4.0.0",
    tslib: "^2.6.2"
  },
  devDependencies: {
    "@aws-sdk/signature-v4-crt": "3.726.0",
    "@tsconfig/node18": "18.2.4",
    "@types/node": "^18.19.69",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    rimraf: "3.0.2",
    typescript: "~5.2.2"
  },
  engines: {
    node: ">=18.0.0"
  },
  typesVersions: {
    "<4.0": {
      "dist-types/*": [
        "dist-types/ts3.4/*"
      ]
    }
  },
  files: [
    "dist-*/**"
  ],
  author: {
    name: "AWS SDK for JavaScript Team",
    url: "https://aws.amazon.com/javascript/"
  },
  license: "Apache-2.0",
  browser: {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
  },
  "react-native": {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
  },
  homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-s3",
  repository: {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-s3"
  }
};

// node_modules/@aws-crypto/sha1-browser/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
var fromUtf84 = /* @__PURE__ */ __name((input) => new TextEncoder().encode(input), "fromUtf8");

// node_modules/@aws-crypto/sha1-browser/build/module/isEmptyData.js
function isEmptyData2(data) {
  if (typeof data === "string") {
    return data.length === 0;
  }
  return data.byteLength === 0;
}
__name(isEmptyData2, "isEmptyData");

// node_modules/@aws-crypto/sha1-browser/build/module/constants.js
var SHA_1_HASH = { name: "SHA-1" };
var SHA_1_HMAC_ALGO = {
  name: "HMAC",
  hash: SHA_1_HASH
};
var EMPTY_DATA_SHA_1 = new Uint8Array([
  218,
  57,
  163,
  238,
  94,
  107,
  75,
  13,
  50,
  85,
  191,
  239,
  149,
  96,
  24,
  144,
  175,
  216,
  7,
  9
]);

// node_modules/@aws-sdk/util-locate-window/dist-es/index.js
var fallbackWindow = {};
function locateWindow() {
  if (typeof window !== "undefined") {
    return window;
  } else if (typeof self !== "undefined") {
    return self;
  }
  return fallbackWindow;
}
__name(locateWindow, "locateWindow");

// node_modules/@aws-crypto/sha1-browser/build/module/webCryptoSha1.js
var Sha1 = (
  /** @class */
  (function() {
    function Sha13(secret) {
      this.toHash = new Uint8Array(0);
      if (secret !== void 0) {
        this.key = new Promise(function(resolve, reject) {
          locateWindow().crypto.subtle.importKey("raw", convertToBuffer2(secret), SHA_1_HMAC_ALGO, false, ["sign"]).then(resolve, reject);
        });
        this.key.catch(function() {
        });
      }
    }
    __name(Sha13, "Sha1");
    Sha13.prototype.update = function(data) {
      if (isEmptyData2(data)) {
        return;
      }
      var update = convertToBuffer2(data);
      var typedArray = new Uint8Array(this.toHash.byteLength + update.byteLength);
      typedArray.set(this.toHash, 0);
      typedArray.set(update, this.toHash.byteLength);
      this.toHash = typedArray;
    };
    Sha13.prototype.digest = function() {
      var _this = this;
      if (this.key) {
        return this.key.then(function(key) {
          return locateWindow().crypto.subtle.sign(SHA_1_HMAC_ALGO, key, _this.toHash).then(function(data) {
            return new Uint8Array(data);
          });
        });
      }
      if (isEmptyData2(this.toHash)) {
        return Promise.resolve(EMPTY_DATA_SHA_1);
      }
      return Promise.resolve().then(function() {
        return locateWindow().crypto.subtle.digest(SHA_1_HASH, _this.toHash);
      }).then(function(data) {
        return Promise.resolve(new Uint8Array(data));
      });
    };
    Sha13.prototype.reset = function() {
      this.toHash = new Uint8Array(0);
    };
    return Sha13;
  })()
);
function convertToBuffer2(data) {
  if (typeof data === "string") {
    return fromUtf84(data);
  }
  if (ArrayBuffer.isView(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }
  return new Uint8Array(data);
}
__name(convertToBuffer2, "convertToBuffer");

// node_modules/@aws-crypto/supports-web-crypto/build/module/supportsWebCrypto.js
var subtleCryptoMethods = [
  "decrypt",
  "digest",
  "encrypt",
  "exportKey",
  "generateKey",
  "importKey",
  "sign",
  "verify"
];
function supportsWebCrypto(window2) {
  if (supportsSecureRandom(window2) && typeof window2.crypto.subtle === "object") {
    var subtle = window2.crypto.subtle;
    return supportsSubtleCrypto(subtle);
  }
  return false;
}
__name(supportsWebCrypto, "supportsWebCrypto");
function supportsSecureRandom(window2) {
  if (typeof window2 === "object" && typeof window2.crypto === "object") {
    var getRandomValues = window2.crypto.getRandomValues;
    return typeof getRandomValues === "function";
  }
  return false;
}
__name(supportsSecureRandom, "supportsSecureRandom");
function supportsSubtleCrypto(subtle) {
  return subtle && subtleCryptoMethods.every(function(methodName) {
    return typeof subtle[methodName] === "function";
  });
}
__name(supportsSubtleCrypto, "supportsSubtleCrypto");

// node_modules/@aws-crypto/sha1-browser/build/module/crossPlatformSha1.js
var Sha12 = (
  /** @class */
  (function() {
    function Sha13(secret) {
      if (supportsWebCrypto(locateWindow())) {
        this.hash = new Sha1(secret);
      } else {
        throw new Error("SHA1 not supported");
      }
    }
    __name(Sha13, "Sha1");
    Sha13.prototype.update = function(data, encoding) {
      this.hash.update(convertToBuffer(data));
    };
    Sha13.prototype.digest = function() {
      return this.hash.digest();
    };
    Sha13.prototype.reset = function() {
      this.hash.reset();
    };
    return Sha13;
  })()
);

// node_modules/@aws-crypto/sha256-browser/build/module/constants.js
var SHA_256_HASH = { name: "SHA-256" };
var SHA_256_HMAC_ALGO = {
  name: "HMAC",
  hash: SHA_256_HASH
};
var EMPTY_DATA_SHA_256 = new Uint8Array([
  227,
  176,
  196,
  66,
  152,
  252,
  28,
  20,
  154,
  251,
  244,
  200,
  153,
  111,
  185,
  36,
  39,
  174,
  65,
  228,
  100,
  155,
  147,
  76,
  164,
  149,
  153,
  27,
  120,
  82,
  184,
  85
]);

// node_modules/@aws-crypto/sha256-browser/build/module/webCryptoSha256.js
var Sha256 = (
  /** @class */
  (function() {
    function Sha2564(secret) {
      this.toHash = new Uint8Array(0);
      this.secret = secret;
      this.reset();
    }
    __name(Sha2564, "Sha256");
    Sha2564.prototype.update = function(data) {
      if (isEmptyData(data)) {
        return;
      }
      var update = convertToBuffer(data);
      var typedArray = new Uint8Array(this.toHash.byteLength + update.byteLength);
      typedArray.set(this.toHash, 0);
      typedArray.set(update, this.toHash.byteLength);
      this.toHash = typedArray;
    };
    Sha2564.prototype.digest = function() {
      var _this = this;
      if (this.key) {
        return this.key.then(function(key) {
          return locateWindow().crypto.subtle.sign(SHA_256_HMAC_ALGO, key, _this.toHash).then(function(data) {
            return new Uint8Array(data);
          });
        });
      }
      if (isEmptyData(this.toHash)) {
        return Promise.resolve(EMPTY_DATA_SHA_256);
      }
      return Promise.resolve().then(function() {
        return locateWindow().crypto.subtle.digest(SHA_256_HASH, _this.toHash);
      }).then(function(data) {
        return Promise.resolve(new Uint8Array(data));
      });
    };
    Sha2564.prototype.reset = function() {
      var _this = this;
      this.toHash = new Uint8Array(0);
      if (this.secret && this.secret !== void 0) {
        this.key = new Promise(function(resolve, reject) {
          locateWindow().crypto.subtle.importKey("raw", convertToBuffer(_this.secret), SHA_256_HMAC_ALGO, false, ["sign"]).then(resolve, reject);
        });
        this.key.catch(function() {
        });
      }
    };
    return Sha2564;
  })()
);

// node_modules/@aws-crypto/sha256-js/build/module/constants.js
var BLOCK_SIZE = 64;
var DIGEST_LENGTH = 32;
var KEY = new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
var INIT = [
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
];
var MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;

// node_modules/@aws-crypto/sha256-js/build/module/RawSha256.js
var RawSha256 = (
  /** @class */
  (function() {
    function RawSha2562() {
      this.state = Int32Array.from(INIT);
      this.temp = new Int32Array(64);
      this.buffer = new Uint8Array(64);
      this.bufferLength = 0;
      this.bytesHashed = 0;
      this.finished = false;
    }
    __name(RawSha2562, "RawSha256");
    RawSha2562.prototype.update = function(data) {
      if (this.finished) {
        throw new Error("Attempted to update an already finished hash.");
      }
      var position = 0;
      var byteLength = data.byteLength;
      this.bytesHashed += byteLength;
      if (this.bytesHashed * 8 > MAX_HASHABLE_LENGTH) {
        throw new Error("Cannot hash more than 2^53 - 1 bits");
      }
      while (byteLength > 0) {
        this.buffer[this.bufferLength++] = data[position++];
        byteLength--;
        if (this.bufferLength === BLOCK_SIZE) {
          this.hashBuffer();
          this.bufferLength = 0;
        }
      }
    };
    RawSha2562.prototype.digest = function() {
      if (!this.finished) {
        var bitsHashed = this.bytesHashed * 8;
        var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
        var undecoratedLength = this.bufferLength;
        bufferView.setUint8(this.bufferLength++, 128);
        if (undecoratedLength % BLOCK_SIZE >= BLOCK_SIZE - 8) {
          for (var i2 = this.bufferLength; i2 < BLOCK_SIZE; i2++) {
            bufferView.setUint8(i2, 0);
          }
          this.hashBuffer();
          this.bufferLength = 0;
        }
        for (var i2 = this.bufferLength; i2 < BLOCK_SIZE - 8; i2++) {
          bufferView.setUint8(i2, 0);
        }
        bufferView.setUint32(BLOCK_SIZE - 8, Math.floor(bitsHashed / 4294967296), true);
        bufferView.setUint32(BLOCK_SIZE - 4, bitsHashed);
        this.hashBuffer();
        this.finished = true;
      }
      var out = new Uint8Array(DIGEST_LENGTH);
      for (var i2 = 0; i2 < 8; i2++) {
        out[i2 * 4] = this.state[i2] >>> 24 & 255;
        out[i2 * 4 + 1] = this.state[i2] >>> 16 & 255;
        out[i2 * 4 + 2] = this.state[i2] >>> 8 & 255;
        out[i2 * 4 + 3] = this.state[i2] >>> 0 & 255;
      }
      return out;
    };
    RawSha2562.prototype.hashBuffer = function() {
      var _a = this, buffer = _a.buffer, state = _a.state;
      var state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7];
      for (var i2 = 0; i2 < BLOCK_SIZE; i2++) {
        if (i2 < 16) {
          this.temp[i2] = (buffer[i2 * 4] & 255) << 24 | (buffer[i2 * 4 + 1] & 255) << 16 | (buffer[i2 * 4 + 2] & 255) << 8 | buffer[i2 * 4 + 3] & 255;
        } else {
          var u2 = this.temp[i2 - 2];
          var t1_1 = (u2 >>> 17 | u2 << 15) ^ (u2 >>> 19 | u2 << 13) ^ u2 >>> 10;
          u2 = this.temp[i2 - 15];
          var t2_1 = (u2 >>> 7 | u2 << 25) ^ (u2 >>> 18 | u2 << 14) ^ u2 >>> 3;
          this.temp[i2] = (t1_1 + this.temp[i2 - 7] | 0) + (t2_1 + this.temp[i2 - 16] | 0);
        }
        var t1 = (((state4 >>> 6 | state4 << 26) ^ (state4 >>> 11 | state4 << 21) ^ (state4 >>> 25 | state4 << 7)) + (state4 & state5 ^ ~state4 & state6) | 0) + (state7 + (KEY[i2] + this.temp[i2] | 0) | 0) | 0;
        var t2 = ((state0 >>> 2 | state0 << 30) ^ (state0 >>> 13 | state0 << 19) ^ (state0 >>> 22 | state0 << 10)) + (state0 & state1 ^ state0 & state2 ^ state1 & state2) | 0;
        state7 = state6;
        state6 = state5;
        state5 = state4;
        state4 = state3 + t1 | 0;
        state3 = state2;
        state2 = state1;
        state1 = state0;
        state0 = t1 + t2 | 0;
      }
      state[0] += state0;
      state[1] += state1;
      state[2] += state2;
      state[3] += state3;
      state[4] += state4;
      state[5] += state5;
      state[6] += state6;
      state[7] += state7;
    };
    return RawSha2562;
  })()
);

// node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js
var Sha2562 = (
  /** @class */
  (function() {
    function Sha2564(secret) {
      this.secret = secret;
      this.hash = new RawSha256();
      this.reset();
    }
    __name(Sha2564, "Sha256");
    Sha2564.prototype.update = function(toHash) {
      if (isEmptyData(toHash) || this.error) {
        return;
      }
      try {
        this.hash.update(convertToBuffer(toHash));
      } catch (e2) {
        this.error = e2;
      }
    };
    Sha2564.prototype.digestSync = function() {
      if (this.error) {
        throw this.error;
      }
      if (this.outer) {
        if (!this.outer.finished) {
          this.outer.update(this.hash.digest());
        }
        return this.outer.digest();
      }
      return this.hash.digest();
    };
    Sha2564.prototype.digest = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, this.digestSync()];
        });
      });
    };
    Sha2564.prototype.reset = function() {
      this.hash = new RawSha256();
      if (this.secret) {
        this.outer = new RawSha256();
        var inner = bufferFromSecret(this.secret);
        var outer = new Uint8Array(BLOCK_SIZE);
        outer.set(inner);
        for (var i2 = 0; i2 < BLOCK_SIZE; i2++) {
          inner[i2] ^= 54;
          outer[i2] ^= 92;
        }
        this.hash.update(inner);
        this.outer.update(outer);
        for (var i2 = 0; i2 < inner.byteLength; i2++) {
          inner[i2] = 0;
        }
      }
    };
    return Sha2564;
  })()
);
function bufferFromSecret(secret) {
  var input = convertToBuffer(secret);
  if (input.byteLength > BLOCK_SIZE) {
    var bufferHash = new RawSha256();
    bufferHash.update(input);
    input = bufferHash.digest();
  }
  var buffer = new Uint8Array(BLOCK_SIZE);
  buffer.set(input);
  return buffer;
}
__name(bufferFromSecret, "bufferFromSecret");

// node_modules/@aws-crypto/sha256-browser/build/module/crossPlatformSha256.js
var Sha2563 = (
  /** @class */
  (function() {
    function Sha2564(secret) {
      if (supportsWebCrypto(locateWindow())) {
        this.hash = new Sha256(secret);
      } else {
        this.hash = new Sha2562(secret);
      }
    }
    __name(Sha2564, "Sha256");
    Sha2564.prototype.update = function(data, encoding) {
      this.hash.update(convertToBuffer(data));
    };
    Sha2564.prototype.digest = function() {
      return this.hash.digest();
    };
    Sha2564.prototype.reset = function() {
      this.hash.reset();
    };
    return Sha2564;
  })()
);

// node_modules/@aws-sdk/util-user-agent-browser/dist-es/index.js
var import_bowser = __toESM(require_es5());
var createDefaultUserAgentProvider = /* @__PURE__ */ __name(({ serviceId, clientVersion }) => async (config) => {
  const parsedUA = typeof window !== "undefined" && window?.navigator?.userAgent ? import_bowser.default.parse(window.navigator.userAgent) : void 0;
  const sections = [
    ["aws-sdk-js", clientVersion],
    ["ua", "2.1"],
    [`os/${parsedUA?.os?.name || "other"}`, parsedUA?.os?.version],
    ["lang/js"],
    ["md/browser", `${parsedUA?.browser?.name ?? "unknown"}_${parsedUA?.browser?.version ?? "unknown"}`]
  ];
  if (serviceId) {
    sections.push([`api/${serviceId}`, clientVersion]);
  }
  const appId = await config?.userAgentAppId?.();
  if (appId) {
    sections.push([`app/${appId}`]);
  }
  return sections;
}, "createDefaultUserAgentProvider");

// node_modules/@smithy/eventstream-codec/dist-es/Int64.js
var Int642 = class _Int64 {
  static {
    __name(this, "Int64");
  }
  bytes;
  constructor(bytes) {
    this.bytes = bytes;
    if (bytes.byteLength !== 8) {
      throw new Error("Int64 buffers must be exactly 8 bytes");
    }
  }
  static fromNumber(number) {
    if (number > 9223372036854776e3 || number < -9223372036854776e3) {
      throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
    }
    const bytes = new Uint8Array(8);
    for (let i2 = 7, remaining = Math.abs(Math.round(number)); i2 > -1 && remaining > 0; i2--, remaining /= 256) {
      bytes[i2] = remaining;
    }
    if (number < 0) {
      negate2(bytes);
    }
    return new _Int64(bytes);
  }
  valueOf() {
    const bytes = this.bytes.slice(0);
    const negative = bytes[0] & 128;
    if (negative) {
      negate2(bytes);
    }
    return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
  }
  toString() {
    return String(this.valueOf());
  }
};
function negate2(bytes) {
  for (let i2 = 0; i2 < 8; i2++) {
    bytes[i2] ^= 255;
  }
  for (let i2 = 7; i2 > -1; i2--) {
    bytes[i2]++;
    if (bytes[i2] !== 0)
      break;
  }
}
__name(negate2, "negate");

// node_modules/@smithy/eventstream-codec/dist-es/HeaderMarshaller.js
var HeaderMarshaller = class {
  static {
    __name(this, "HeaderMarshaller");
  }
  toUtf8;
  fromUtf8;
  constructor(toUtf82, fromUtf85) {
    this.toUtf8 = toUtf82;
    this.fromUtf8 = fromUtf85;
  }
  format(headers) {
    const chunks = [];
    for (const headerName of Object.keys(headers)) {
      const bytes = this.fromUtf8(headerName);
      chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
    }
    const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
    let position = 0;
    for (const chunk of chunks) {
      out.set(chunk, position);
      position += chunk.byteLength;
    }
    return out;
  }
  formatHeaderValue(header) {
    switch (header.type) {
      case "boolean":
        return Uint8Array.from([header.value ? 0 : 1]);
      case "byte":
        return Uint8Array.from([2, header.value]);
      case "short":
        const shortView = new DataView(new ArrayBuffer(3));
        shortView.setUint8(0, 3);
        shortView.setInt16(1, header.value, false);
        return new Uint8Array(shortView.buffer);
      case "integer":
        const intView = new DataView(new ArrayBuffer(5));
        intView.setUint8(0, 4);
        intView.setInt32(1, header.value, false);
        return new Uint8Array(intView.buffer);
      case "long":
        const longBytes = new Uint8Array(9);
        longBytes[0] = 5;
        longBytes.set(header.value.bytes, 1);
        return longBytes;
      case "binary":
        const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
        binView.setUint8(0, 6);
        binView.setUint16(1, header.value.byteLength, false);
        const binBytes = new Uint8Array(binView.buffer);
        binBytes.set(header.value, 3);
        return binBytes;
      case "string":
        const utf8Bytes = this.fromUtf8(header.value);
        const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
        strView.setUint8(0, 7);
        strView.setUint16(1, utf8Bytes.byteLength, false);
        const strBytes = new Uint8Array(strView.buffer);
        strBytes.set(utf8Bytes, 3);
        return strBytes;
      case "timestamp":
        const tsBytes = new Uint8Array(9);
        tsBytes[0] = 8;
        tsBytes.set(Int642.fromNumber(header.value.valueOf()).bytes, 1);
        return tsBytes;
      case "uuid":
        if (!UUID_PATTERN2.test(header.value)) {
          throw new Error(`Invalid UUID received: ${header.value}`);
        }
        const uuidBytes = new Uint8Array(17);
        uuidBytes[0] = 9;
        uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
        return uuidBytes;
    }
  }
  parse(headers) {
    const out = {};
    let position = 0;
    while (position < headers.byteLength) {
      const nameLength = headers.getUint8(position++);
      const name = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
      position += nameLength;
      switch (headers.getUint8(position++)) {
        case 0:
          out[name] = {
            type: BOOLEAN_TAG,
            value: true
          };
          break;
        case 1:
          out[name] = {
            type: BOOLEAN_TAG,
            value: false
          };
          break;
        case 2:
          out[name] = {
            type: BYTE_TAG,
            value: headers.getInt8(position++)
          };
          break;
        case 3:
          out[name] = {
            type: SHORT_TAG,
            value: headers.getInt16(position, false)
          };
          position += 2;
          break;
        case 4:
          out[name] = {
            type: INT_TAG,
            value: headers.getInt32(position, false)
          };
          position += 4;
          break;
        case 5:
          out[name] = {
            type: LONG_TAG,
            value: new Int642(new Uint8Array(headers.buffer, headers.byteOffset + position, 8))
          };
          position += 8;
          break;
        case 6:
          const binaryLength = headers.getUint16(position, false);
          position += 2;
          out[name] = {
            type: BINARY_TAG,
            value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength)
          };
          position += binaryLength;
          break;
        case 7:
          const stringLength = headers.getUint16(position, false);
          position += 2;
          out[name] = {
            type: STRING_TAG,
            value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength))
          };
          position += stringLength;
          break;
        case 8:
          out[name] = {
            type: TIMESTAMP_TAG,
            value: new Date(new Int642(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf())
          };
          position += 8;
          break;
        case 9:
          const uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
          position += 16;
          out[name] = {
            type: UUID_TAG,
            value: `${toHex(uuidBytes.subarray(0, 4))}-${toHex(uuidBytes.subarray(4, 6))}-${toHex(uuidBytes.subarray(6, 8))}-${toHex(uuidBytes.subarray(8, 10))}-${toHex(uuidBytes.subarray(10))}`
          };
          break;
        default:
          throw new Error(`Unrecognized header type tag`);
      }
    }
    return out;
  }
};
var HEADER_VALUE_TYPE2;
(function(HEADER_VALUE_TYPE3) {
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["boolTrue"] = 0] = "boolTrue";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["boolFalse"] = 1] = "boolFalse";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["byte"] = 2] = "byte";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["short"] = 3] = "short";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["integer"] = 4] = "integer";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["long"] = 5] = "long";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["byteArray"] = 6] = "byteArray";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["string"] = 7] = "string";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["timestamp"] = 8] = "timestamp";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE2 || (HEADER_VALUE_TYPE2 = {}));
var BOOLEAN_TAG = "boolean";
var BYTE_TAG = "byte";
var SHORT_TAG = "short";
var INT_TAG = "integer";
var LONG_TAG = "long";
var BINARY_TAG = "binary";
var STRING_TAG = "string";
var TIMESTAMP_TAG = "timestamp";
var UUID_TAG = "uuid";
var UUID_PATTERN2 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;

// node_modules/@smithy/eventstream-codec/dist-es/splitMessage.js
var PRELUDE_MEMBER_LENGTH = 4;
var PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;
var CHECKSUM_LENGTH = 4;
var MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;
function splitMessage({ byteLength, byteOffset, buffer }) {
  if (byteLength < MINIMUM_MESSAGE_LENGTH) {
    throw new Error("Provided message too short to accommodate event stream message overhead");
  }
  const view = new DataView(buffer, byteOffset, byteLength);
  const messageLength = view.getUint32(0, false);
  if (byteLength !== messageLength) {
    throw new Error("Reported message length does not match received message length");
  }
  const headerLength = view.getUint32(PRELUDE_MEMBER_LENGTH, false);
  const expectedPreludeChecksum = view.getUint32(PRELUDE_LENGTH, false);
  const expectedMessageChecksum = view.getUint32(byteLength - CHECKSUM_LENGTH, false);
  const checksummer = new Crc32().update(new Uint8Array(buffer, byteOffset, PRELUDE_LENGTH));
  if (expectedPreludeChecksum !== checksummer.digest()) {
    throw new Error(`The prelude checksum specified in the message (${expectedPreludeChecksum}) does not match the calculated CRC32 checksum (${checksummer.digest()})`);
  }
  checksummer.update(new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH, byteLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH)));
  if (expectedMessageChecksum !== checksummer.digest()) {
    throw new Error(`The message checksum (${checksummer.digest()}) did not match the expected value of ${expectedMessageChecksum}`);
  }
  return {
    headers: new DataView(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH, headerLength),
    body: new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH + headerLength, messageLength - headerLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH + CHECKSUM_LENGTH))
  };
}
__name(splitMessage, "splitMessage");

// node_modules/@smithy/eventstream-codec/dist-es/EventStreamCodec.js
var EventStreamCodec = class {
  static {
    __name(this, "EventStreamCodec");
  }
  headerMarshaller;
  messageBuffer;
  isEndOfStream;
  constructor(toUtf82, fromUtf85) {
    this.headerMarshaller = new HeaderMarshaller(toUtf82, fromUtf85);
    this.messageBuffer = [];
    this.isEndOfStream = false;
  }
  feed(message) {
    this.messageBuffer.push(this.decode(message));
  }
  endOfStream() {
    this.isEndOfStream = true;
  }
  getMessage() {
    const message = this.messageBuffer.pop();
    const isEndOfStream = this.isEndOfStream;
    return {
      getMessage() {
        return message;
      },
      isEndOfStream() {
        return isEndOfStream;
      }
    };
  }
  getAvailableMessages() {
    const messages = this.messageBuffer;
    this.messageBuffer = [];
    const isEndOfStream = this.isEndOfStream;
    return {
      getMessages() {
        return messages;
      },
      isEndOfStream() {
        return isEndOfStream;
      }
    };
  }
  encode({ headers: rawHeaders, body }) {
    const headers = this.headerMarshaller.format(rawHeaders);
    const length = headers.byteLength + body.byteLength + 16;
    const out = new Uint8Array(length);
    const view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    const checksum = new Crc32();
    view.setUint32(0, length, false);
    view.setUint32(4, headers.byteLength, false);
    view.setUint32(8, checksum.update(out.subarray(0, 8)).digest(), false);
    out.set(headers, 12);
    out.set(body, headers.byteLength + 12);
    view.setUint32(length - 4, checksum.update(out.subarray(8, length - 4)).digest(), false);
    return out;
  }
  decode(message) {
    const { headers, body } = splitMessage(message);
    return { headers: this.headerMarshaller.parse(headers), body };
  }
  formatHeaders(rawHeaders) {
    return this.headerMarshaller.format(rawHeaders);
  }
};

// node_modules/@smithy/eventstream-codec/dist-es/MessageDecoderStream.js
var MessageDecoderStream = class {
  static {
    __name(this, "MessageDecoderStream");
  }
  options;
  constructor(options) {
    this.options = options;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const bytes of this.options.inputStream) {
      const decoded = this.options.decoder.decode(bytes);
      yield decoded;
    }
  }
};

// node_modules/@smithy/eventstream-codec/dist-es/MessageEncoderStream.js
var MessageEncoderStream = class {
  static {
    __name(this, "MessageEncoderStream");
  }
  options;
  constructor(options) {
    this.options = options;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const msg of this.options.messageStream) {
      const encoded = this.options.encoder.encode(msg);
      yield encoded;
    }
    if (this.options.includeEndFrame) {
      yield new Uint8Array(0);
    }
  }
};

// node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageDecoderStream.js
var SmithyMessageDecoderStream = class {
  static {
    __name(this, "SmithyMessageDecoderStream");
  }
  options;
  constructor(options) {
    this.options = options;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const message of this.options.messageStream) {
      const deserialized = await this.options.deserializer(message);
      if (deserialized === void 0)
        continue;
      yield deserialized;
    }
  }
};

// node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageEncoderStream.js
var SmithyMessageEncoderStream = class {
  static {
    __name(this, "SmithyMessageEncoderStream");
  }
  options;
  constructor(options) {
    this.options = options;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (const chunk of this.options.inputStream) {
      const payloadBuf = this.options.serializer(chunk);
      yield payloadBuf;
    }
  }
};

// node_modules/@smithy/eventstream-serde-universal/dist-es/getChunkedStream.js
function getChunkedStream(source) {
  let currentMessageTotalLength = 0;
  let currentMessagePendingLength = 0;
  let currentMessage = null;
  let messageLengthBuffer = null;
  const allocateMessage = /* @__PURE__ */ __name((size) => {
    if (typeof size !== "number") {
      throw new Error("Attempted to allocate an event message where size was not a number: " + size);
    }
    currentMessageTotalLength = size;
    currentMessagePendingLength = 4;
    currentMessage = new Uint8Array(size);
    const currentMessageView = new DataView(currentMessage.buffer);
    currentMessageView.setUint32(0, size, false);
  }, "allocateMessage");
  const iterator = /* @__PURE__ */ __name(async function* () {
    const sourceIterator = source[Symbol.asyncIterator]();
    while (true) {
      const { value, done } = await sourceIterator.next();
      if (done) {
        if (!currentMessageTotalLength) {
          return;
        } else if (currentMessageTotalLength === currentMessagePendingLength) {
          yield currentMessage;
        } else {
          throw new Error("Truncated event message received.");
        }
        return;
      }
      const chunkLength = value.length;
      let currentOffset = 0;
      while (currentOffset < chunkLength) {
        if (!currentMessage) {
          const bytesRemaining = chunkLength - currentOffset;
          if (!messageLengthBuffer) {
            messageLengthBuffer = new Uint8Array(4);
          }
          const numBytesForTotal = Math.min(4 - currentMessagePendingLength, bytesRemaining);
          messageLengthBuffer.set(value.slice(currentOffset, currentOffset + numBytesForTotal), currentMessagePendingLength);
          currentMessagePendingLength += numBytesForTotal;
          currentOffset += numBytesForTotal;
          if (currentMessagePendingLength < 4) {
            break;
          }
          allocateMessage(new DataView(messageLengthBuffer.buffer).getUint32(0, false));
          messageLengthBuffer = null;
        }
        const numBytesToWrite = Math.min(currentMessageTotalLength - currentMessagePendingLength, chunkLength - currentOffset);
        currentMessage.set(value.slice(currentOffset, currentOffset + numBytesToWrite), currentMessagePendingLength);
        currentMessagePendingLength += numBytesToWrite;
        currentOffset += numBytesToWrite;
        if (currentMessageTotalLength && currentMessageTotalLength === currentMessagePendingLength) {
          yield currentMessage;
          currentMessage = null;
          currentMessageTotalLength = 0;
          currentMessagePendingLength = 0;
        }
      }
    }
  }, "iterator");
  return {
    [Symbol.asyncIterator]: iterator
  };
}
__name(getChunkedStream, "getChunkedStream");

// node_modules/@smithy/eventstream-serde-universal/dist-es/getUnmarshalledStream.js
function getMessageUnmarshaller(deserializer, toUtf82) {
  return async function(message) {
    const { value: messageType } = message.headers[":message-type"];
    if (messageType === "error") {
      const unmodeledError = new Error(message.headers[":error-message"].value || "UnknownError");
      unmodeledError.name = message.headers[":error-code"].value;
      throw unmodeledError;
    } else if (messageType === "exception") {
      const code = message.headers[":exception-type"].value;
      const exception = { [code]: message };
      const deserializedException = await deserializer(exception);
      if (deserializedException.$unknown) {
        const error = new Error(toUtf82(message.body));
        error.name = code;
        throw error;
      }
      throw deserializedException[code];
    } else if (messageType === "event") {
      const event = {
        [message.headers[":event-type"].value]: message
      };
      const deserialized = await deserializer(event);
      if (deserialized.$unknown)
        return;
      return deserialized;
    } else {
      throw Error(`Unrecognizable event type: ${message.headers[":event-type"].value}`);
    }
  };
}
__name(getMessageUnmarshaller, "getMessageUnmarshaller");

// node_modules/@smithy/eventstream-serde-universal/dist-es/EventStreamMarshaller.js
var EventStreamMarshaller = class {
  static {
    __name(this, "EventStreamMarshaller");
  }
  eventStreamCodec;
  utfEncoder;
  constructor({ utf8Encoder, utf8Decoder }) {
    this.eventStreamCodec = new EventStreamCodec(utf8Encoder, utf8Decoder);
    this.utfEncoder = utf8Encoder;
  }
  deserialize(body, deserializer) {
    const inputStream = getChunkedStream(body);
    return new SmithyMessageDecoderStream({
      messageStream: new MessageDecoderStream({ inputStream, decoder: this.eventStreamCodec }),
      deserializer: getMessageUnmarshaller(deserializer, this.utfEncoder)
    });
  }
  serialize(inputStream, serializer) {
    return new MessageEncoderStream({
      messageStream: new SmithyMessageEncoderStream({ inputStream, serializer }),
      encoder: this.eventStreamCodec,
      includeEndFrame: true
    });
  }
};

// node_modules/@smithy/eventstream-serde-browser/dist-es/utils.js
var readableStreamtoIterable = /* @__PURE__ */ __name((readableStream) => ({
  [Symbol.asyncIterator]: async function* () {
    const reader = readableStream.getReader();
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done)
          return;
        yield value;
      }
    } finally {
      reader.releaseLock();
    }
  }
}), "readableStreamtoIterable");
var iterableToReadableStream = /* @__PURE__ */ __name((asyncIterable) => {
  const iterator = asyncIterable[Symbol.asyncIterator]();
  return new ReadableStream({
    async pull(controller) {
      const { done, value } = await iterator.next();
      if (done) {
        return controller.close();
      }
      controller.enqueue(value);
    }
  });
}, "iterableToReadableStream");

// node_modules/@smithy/eventstream-serde-browser/dist-es/EventStreamMarshaller.js
var EventStreamMarshaller2 = class {
  static {
    __name(this, "EventStreamMarshaller");
  }
  universalMarshaller;
  constructor({ utf8Encoder, utf8Decoder }) {
    this.universalMarshaller = new EventStreamMarshaller({
      utf8Decoder,
      utf8Encoder
    });
  }
  deserialize(body, deserializer) {
    const bodyIterable = isReadableStream2(body) ? readableStreamtoIterable(body) : body;
    return this.universalMarshaller.deserialize(bodyIterable, deserializer);
  }
  serialize(input, serializer) {
    const serialziedIterable = this.universalMarshaller.serialize(input, serializer);
    return typeof ReadableStream === "function" ? iterableToReadableStream(serialziedIterable) : serialziedIterable;
  }
};
var isReadableStream2 = /* @__PURE__ */ __name((body) => typeof ReadableStream === "function" && body instanceof ReadableStream, "isReadableStream");

// node_modules/@smithy/eventstream-serde-browser/dist-es/provider.js
var eventStreamSerdeProvider = /* @__PURE__ */ __name((options) => new EventStreamMarshaller2(options), "eventStreamSerdeProvider");

// node_modules/@smithy/chunked-blob-reader/dist-es/index.js
async function blobReader(blob, onChunk, chunkSize = 1024 * 1024) {
  const size = blob.size;
  let totalBytesRead = 0;
  while (totalBytesRead < size) {
    const slice = blob.slice(totalBytesRead, Math.min(size, totalBytesRead + chunkSize));
    onChunk(new Uint8Array(await slice.arrayBuffer()));
    totalBytesRead += slice.size;
  }
}
__name(blobReader, "blobReader");

// node_modules/@smithy/hash-blob-browser/dist-es/index.js
var blobHasher = /* @__PURE__ */ __name(async function blobHasher2(hashCtor, blob) {
  const hash = new hashCtor();
  await blobReader(blob, (chunk) => {
    hash.update(chunk);
  });
  return hash.digest();
}, "blobHasher");

// node_modules/@smithy/invalid-dependency/dist-es/invalidProvider.js
var invalidProvider = /* @__PURE__ */ __name((message) => () => Promise.reject(message), "invalidProvider");

// node_modules/@smithy/md5-js/dist-es/index.js
init_dist_es();

// node_modules/@smithy/md5-js/dist-es/constants.js
var BLOCK_SIZE2 = 64;
var DIGEST_LENGTH2 = 16;
var INIT2 = [1732584193, 4023233417, 2562383102, 271733878];

// node_modules/@smithy/md5-js/dist-es/index.js
var Md5 = class {
  static {
    __name(this, "Md5");
  }
  state;
  buffer;
  bufferLength;
  bytesHashed;
  finished;
  constructor() {
    this.reset();
  }
  update(sourceData) {
    if (isEmptyData3(sourceData)) {
      return;
    } else if (this.finished) {
      throw new Error("Attempted to update an already finished hash.");
    }
    const data = convertToBuffer3(sourceData);
    let position = 0;
    let { byteLength } = data;
    this.bytesHashed += byteLength;
    while (byteLength > 0) {
      this.buffer.setUint8(this.bufferLength++, data[position++]);
      byteLength--;
      if (this.bufferLength === BLOCK_SIZE2) {
        this.hashBuffer();
        this.bufferLength = 0;
      }
    }
  }
  async digest() {
    if (!this.finished) {
      const { buffer, bufferLength: undecoratedLength, bytesHashed } = this;
      const bitsHashed = bytesHashed * 8;
      buffer.setUint8(this.bufferLength++, 128);
      if (undecoratedLength % BLOCK_SIZE2 >= BLOCK_SIZE2 - 8) {
        for (let i2 = this.bufferLength; i2 < BLOCK_SIZE2; i2++) {
          buffer.setUint8(i2, 0);
        }
        this.hashBuffer();
        this.bufferLength = 0;
      }
      for (let i2 = this.bufferLength; i2 < BLOCK_SIZE2 - 8; i2++) {
        buffer.setUint8(i2, 0);
      }
      buffer.setUint32(BLOCK_SIZE2 - 8, bitsHashed >>> 0, true);
      buffer.setUint32(BLOCK_SIZE2 - 4, Math.floor(bitsHashed / 4294967296), true);
      this.hashBuffer();
      this.finished = true;
    }
    const out = new DataView(new ArrayBuffer(DIGEST_LENGTH2));
    for (let i2 = 0; i2 < 4; i2++) {
      out.setUint32(i2 * 4, this.state[i2], true);
    }
    return new Uint8Array(out.buffer, out.byteOffset, out.byteLength);
  }
  hashBuffer() {
    const { buffer, state } = this;
    let a2 = state[0], b2 = state[1], c2 = state[2], d2 = state[3];
    a2 = ff(a2, b2, c2, d2, buffer.getUint32(0, true), 7, 3614090360);
    d2 = ff(d2, a2, b2, c2, buffer.getUint32(4, true), 12, 3905402710);
    c2 = ff(c2, d2, a2, b2, buffer.getUint32(8, true), 17, 606105819);
    b2 = ff(b2, c2, d2, a2, buffer.getUint32(12, true), 22, 3250441966);
    a2 = ff(a2, b2, c2, d2, buffer.getUint32(16, true), 7, 4118548399);
    d2 = ff(d2, a2, b2, c2, buffer.getUint32(20, true), 12, 1200080426);
    c2 = ff(c2, d2, a2, b2, buffer.getUint32(24, true), 17, 2821735955);
    b2 = ff(b2, c2, d2, a2, buffer.getUint32(28, true), 22, 4249261313);
    a2 = ff(a2, b2, c2, d2, buffer.getUint32(32, true), 7, 1770035416);
    d2 = ff(d2, a2, b2, c2, buffer.getUint32(36, true), 12, 2336552879);
    c2 = ff(c2, d2, a2, b2, buffer.getUint32(40, true), 17, 4294925233);
    b2 = ff(b2, c2, d2, a2, buffer.getUint32(44, true), 22, 2304563134);
    a2 = ff(a2, b2, c2, d2, buffer.getUint32(48, true), 7, 1804603682);
    d2 = ff(d2, a2, b2, c2, buffer.getUint32(52, true), 12, 4254626195);
    c2 = ff(c2, d2, a2, b2, buffer.getUint32(56, true), 17, 2792965006);
    b2 = ff(b2, c2, d2, a2, buffer.getUint32(60, true), 22, 1236535329);
    a2 = gg(a2, b2, c2, d2, buffer.getUint32(4, true), 5, 4129170786);
    d2 = gg(d2, a2, b2, c2, buffer.getUint32(24, true), 9, 3225465664);
    c2 = gg(c2, d2, a2, b2, buffer.getUint32(44, true), 14, 643717713);
    b2 = gg(b2, c2, d2, a2, buffer.getUint32(0, true), 20, 3921069994);
    a2 = gg(a2, b2, c2, d2, buffer.getUint32(20, true), 5, 3593408605);
    d2 = gg(d2, a2, b2, c2, buffer.getUint32(40, true), 9, 38016083);
    c2 = gg(c2, d2, a2, b2, buffer.getUint32(60, true), 14, 3634488961);
    b2 = gg(b2, c2, d2, a2, buffer.getUint32(16, true), 20, 3889429448);
    a2 = gg(a2, b2, c2, d2, buffer.getUint32(36, true), 5, 568446438);
    d2 = gg(d2, a2, b2, c2, buffer.getUint32(56, true), 9, 3275163606);
    c2 = gg(c2, d2, a2, b2, buffer.getUint32(12, true), 14, 4107603335);
    b2 = gg(b2, c2, d2, a2, buffer.getUint32(32, true), 20, 1163531501);
    a2 = gg(a2, b2, c2, d2, buffer.getUint32(52, true), 5, 2850285829);
    d2 = gg(d2, a2, b2, c2, buffer.getUint32(8, true), 9, 4243563512);
    c2 = gg(c2, d2, a2, b2, buffer.getUint32(28, true), 14, 1735328473);
    b2 = gg(b2, c2, d2, a2, buffer.getUint32(48, true), 20, 2368359562);
    a2 = hh(a2, b2, c2, d2, buffer.getUint32(20, true), 4, 4294588738);
    d2 = hh(d2, a2, b2, c2, buffer.getUint32(32, true), 11, 2272392833);
    c2 = hh(c2, d2, a2, b2, buffer.getUint32(44, true), 16, 1839030562);
    b2 = hh(b2, c2, d2, a2, buffer.getUint32(56, true), 23, 4259657740);
    a2 = hh(a2, b2, c2, d2, buffer.getUint32(4, true), 4, 2763975236);
    d2 = hh(d2, a2, b2, c2, buffer.getUint32(16, true), 11, 1272893353);
    c2 = hh(c2, d2, a2, b2, buffer.getUint32(28, true), 16, 4139469664);
    b2 = hh(b2, c2, d2, a2, buffer.getUint32(40, true), 23, 3200236656);
    a2 = hh(a2, b2, c2, d2, buffer.getUint32(52, true), 4, 681279174);
    d2 = hh(d2, a2, b2, c2, buffer.getUint32(0, true), 11, 3936430074);
    c2 = hh(c2, d2, a2, b2, buffer.getUint32(12, true), 16, 3572445317);
    b2 = hh(b2, c2, d2, a2, buffer.getUint32(24, true), 23, 76029189);
    a2 = hh(a2, b2, c2, d2, buffer.getUint32(36, true), 4, 3654602809);
    d2 = hh(d2, a2, b2, c2, buffer.getUint32(48, true), 11, 3873151461);
    c2 = hh(c2, d2, a2, b2, buffer.getUint32(60, true), 16, 530742520);
    b2 = hh(b2, c2, d2, a2, buffer.getUint32(8, true), 23, 3299628645);
    a2 = ii(a2, b2, c2, d2, buffer.getUint32(0, true), 6, 4096336452);
    d2 = ii(d2, a2, b2, c2, buffer.getUint32(28, true), 10, 1126891415);
    c2 = ii(c2, d2, a2, b2, buffer.getUint32(56, true), 15, 2878612391);
    b2 = ii(b2, c2, d2, a2, buffer.getUint32(20, true), 21, 4237533241);
    a2 = ii(a2, b2, c2, d2, buffer.getUint32(48, true), 6, 1700485571);
    d2 = ii(d2, a2, b2, c2, buffer.getUint32(12, true), 10, 2399980690);
    c2 = ii(c2, d2, a2, b2, buffer.getUint32(40, true), 15, 4293915773);
    b2 = ii(b2, c2, d2, a2, buffer.getUint32(4, true), 21, 2240044497);
    a2 = ii(a2, b2, c2, d2, buffer.getUint32(32, true), 6, 1873313359);
    d2 = ii(d2, a2, b2, c2, buffer.getUint32(60, true), 10, 4264355552);
    c2 = ii(c2, d2, a2, b2, buffer.getUint32(24, true), 15, 2734768916);
    b2 = ii(b2, c2, d2, a2, buffer.getUint32(52, true), 21, 1309151649);
    a2 = ii(a2, b2, c2, d2, buffer.getUint32(16, true), 6, 4149444226);
    d2 = ii(d2, a2, b2, c2, buffer.getUint32(44, true), 10, 3174756917);
    c2 = ii(c2, d2, a2, b2, buffer.getUint32(8, true), 15, 718787259);
    b2 = ii(b2, c2, d2, a2, buffer.getUint32(36, true), 21, 3951481745);
    state[0] = a2 + state[0] & 4294967295;
    state[1] = b2 + state[1] & 4294967295;
    state[2] = c2 + state[2] & 4294967295;
    state[3] = d2 + state[3] & 4294967295;
  }
  reset() {
    this.state = Uint32Array.from(INIT2);
    this.buffer = new DataView(new ArrayBuffer(BLOCK_SIZE2));
    this.bufferLength = 0;
    this.bytesHashed = 0;
    this.finished = false;
  }
};
function cmn(q2, a2, b2, x2, s2, t2) {
  a2 = (a2 + q2 & 4294967295) + (x2 + t2 & 4294967295) & 4294967295;
  return (a2 << s2 | a2 >>> 32 - s2) + b2 & 4294967295;
}
__name(cmn, "cmn");
function ff(a2, b2, c2, d2, x2, s2, t2) {
  return cmn(b2 & c2 | ~b2 & d2, a2, b2, x2, s2, t2);
}
__name(ff, "ff");
function gg(a2, b2, c2, d2, x2, s2, t2) {
  return cmn(b2 & d2 | c2 & ~d2, a2, b2, x2, s2, t2);
}
__name(gg, "gg");
function hh(a2, b2, c2, d2, x2, s2, t2) {
  return cmn(b2 ^ c2 ^ d2, a2, b2, x2, s2, t2);
}
__name(hh, "hh");
function ii(a2, b2, c2, d2, x2, s2, t2) {
  return cmn(c2 ^ (b2 | ~d2), a2, b2, x2, s2, t2);
}
__name(ii, "ii");
function isEmptyData3(data) {
  if (typeof data === "string") {
    return data.length === 0;
  }
  return data.byteLength === 0;
}
__name(isEmptyData3, "isEmptyData");
function convertToBuffer3(data) {
  if (typeof data === "string") {
    return fromUtf8(data);
  }
  if (ArrayBuffer.isView(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }
  return new Uint8Array(data);
}
__name(convertToBuffer3, "convertToBuffer");

// node_modules/@smithy/util-body-length-browser/dist-es/calculateBodyLength.js
var TEXT_ENCODER = typeof TextEncoder == "function" ? new TextEncoder() : null;
var calculateBodyLength = /* @__PURE__ */ __name((body) => {
  if (typeof body === "string") {
    if (TEXT_ENCODER) {
      return TEXT_ENCODER.encode(body).byteLength;
    }
    let len = body.length;
    for (let i2 = len - 1; i2 >= 0; i2--) {
      const code = body.charCodeAt(i2);
      if (code > 127 && code <= 2047)
        len++;
      else if (code > 2047 && code <= 65535)
        len += 2;
      if (code >= 56320 && code <= 57343)
        i2--;
    }
    return len;
  } else if (typeof body.byteLength === "number") {
    return body.byteLength;
  } else if (typeof body.size === "number") {
    return body.size;
  }
  throw new Error(`Body Length computation failed for ${body}`);
}, "calculateBodyLength");

// node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.shared.js
init_dist_es();
var getRuntimeConfig = /* @__PURE__ */ __name((config) => {
  return {
    apiVersion: "2006-03-01",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
    extensions: config?.extensions ?? [],
    getAwsChunkedEncodingStream: config?.getAwsChunkedEncodingStream ?? getAwsChunkedEncodingStream,
    httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultS3HttpAuthSchemeProvider,
    httpAuthSchemes: config?.httpAuthSchemes ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("aws.auth#sigv4"), "identityProvider"),
        signer: new AwsSdkSigV4Signer()
      },
      {
        schemeId: "aws.auth#sigv4a",
        identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("aws.auth#sigv4a"), "identityProvider"),
        signer: new AwsSdkSigV4ASigner()
      }
    ],
    logger: config?.logger ?? new NoOpLogger(),
    sdkStreamMixin: config?.sdkStreamMixin ?? sdkStreamMixin,
    serviceId: config?.serviceId ?? "S3",
    signerConstructor: config?.signerConstructor ?? SignatureV4MultiRegion,
    signingEscapePath: config?.signingEscapePath ?? false,
    urlParser: config?.urlParser ?? parseUrl,
    useArnRegion: config?.useArnRegion ?? false,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8
  };
}, "getRuntimeConfig");

// node_modules/@smithy/util-defaults-mode-browser/dist-es/constants.js
var DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];

// node_modules/@smithy/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js
var resolveDefaultsModeConfig = /* @__PURE__ */ __name(({ defaultsMode } = {}) => memoize(async () => {
  const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
  switch (mode?.toLowerCase()) {
    case "auto":
      return Promise.resolve(useMobileConfiguration() ? "mobile" : "standard");
    case "mobile":
    case "in-region":
    case "cross-region":
    case "standard":
    case "legacy":
      return Promise.resolve(mode?.toLocaleLowerCase());
    case void 0:
      return Promise.resolve("legacy");
    default:
      throw new Error(`Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
  }
}), "resolveDefaultsModeConfig");
var useMobileConfiguration = /* @__PURE__ */ __name(() => {
  const navigator = window?.navigator;
  if (navigator?.connection) {
    const { effectiveType, rtt, downlink } = navigator?.connection;
    const slow = typeof effectiveType === "string" && effectiveType !== "4g" || Number(rtt) > 100 || Number(downlink) < 10;
    if (slow) {
      return true;
    }
  }
  return navigator?.userAgentData?.mobile || typeof navigator?.maxTouchPoints === "number" && navigator?.maxTouchPoints > 1;
}, "useMobileConfiguration");

// node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.browser.js
var getRuntimeConfig2 = /* @__PURE__ */ __name((config) => {
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = /* @__PURE__ */ __name(() => defaultsMode().then(loadConfigsForDefaultMode), "defaultConfigProvider");
  const clientSharedValues = getRuntimeConfig(config);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "browser",
    defaultsMode,
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    credentialDefaultProvider: config?.credentialDefaultProvider ?? ((_) => () => Promise.reject(new Error("Credential is missing"))),
    defaultUserAgentProvider: config?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
    eventStreamSerdeProvider: config?.eventStreamSerdeProvider ?? eventStreamSerdeProvider,
    maxAttempts: config?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
    md5: config?.md5 ?? Md5,
    region: config?.region ?? invalidProvider("Region is missing"),
    requestHandler: FetchHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
    retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE),
    sha1: config?.sha1 ?? Sha12,
    sha256: config?.sha256 ?? Sha2563,
    streamCollector: config?.streamCollector ?? streamCollector,
    streamHasher: config?.streamHasher ?? blobHasher,
    useDualstackEndpoint: config?.useDualstackEndpoint ?? (() => Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT)),
    useFipsEndpoint: config?.useFipsEndpoint ?? (() => Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT))
  };
}, "getRuntimeConfig");

// node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js
var getAwsRegionExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  let runtimeConfigRegion = /* @__PURE__ */ __name(async () => {
    if (runtimeConfig.region === void 0) {
      throw new Error("Region is missing from runtimeConfig");
    }
    const region = runtimeConfig.region;
    if (typeof region === "string") {
      return region;
    }
    return region();
  }, "runtimeConfigRegion");
  return {
    setRegion(region) {
      runtimeConfigRegion = region;
    },
    region() {
      return runtimeConfigRegion;
    }
  };
}, "getAwsRegionExtensionConfiguration");
var resolveAwsRegionExtensionConfiguration = /* @__PURE__ */ __name((awsRegionExtensionConfiguration) => {
  return {
    region: awsRegionExtensionConfiguration.region()
  };
}, "resolveAwsRegionExtensionConfiguration");

// node_modules/@aws-sdk/client-s3/dist-es/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
  let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
  let _credentials = runtimeConfig.credentials;
  return {
    setHttpAuthScheme(httpAuthScheme) {
      const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
      if (index === -1) {
        _httpAuthSchemes.push(httpAuthScheme);
      } else {
        _httpAuthSchemes.splice(index, 1, httpAuthScheme);
      }
    },
    httpAuthSchemes() {
      return _httpAuthSchemes;
    },
    setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
      _httpAuthSchemeProvider = httpAuthSchemeProvider;
    },
    httpAuthSchemeProvider() {
      return _httpAuthSchemeProvider;
    },
    setCredentials(credentials) {
      _credentials = credentials;
    },
    credentials() {
      return _credentials;
    }
  };
}, "getHttpAuthExtensionConfiguration");
var resolveHttpAuthRuntimeConfig = /* @__PURE__ */ __name((config) => {
  return {
    httpAuthSchemes: config.httpAuthSchemes(),
    httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
    credentials: config.credentials()
  };
}, "resolveHttpAuthRuntimeConfig");

// node_modules/@aws-sdk/client-s3/dist-es/runtimeExtensions.js
var asPartial = /* @__PURE__ */ __name((t2) => t2, "asPartial");
var resolveRuntimeExtensions = /* @__PURE__ */ __name((runtimeConfig, extensions) => {
  const extensionConfiguration = {
    ...asPartial(getAwsRegionExtensionConfiguration(runtimeConfig)),
    ...asPartial(getDefaultExtensionConfiguration(runtimeConfig)),
    ...asPartial(getHttpHandlerExtensionConfiguration(runtimeConfig)),
    ...asPartial(getHttpAuthExtensionConfiguration(runtimeConfig))
  };
  extensions.forEach((extension) => extension.configure(extensionConfiguration));
  return {
    ...runtimeConfig,
    ...resolveAwsRegionExtensionConfiguration(extensionConfiguration),
    ...resolveDefaultRuntimeConfig(extensionConfiguration),
    ...resolveHttpHandlerRuntimeConfig(extensionConfiguration),
    ...resolveHttpAuthRuntimeConfig(extensionConfiguration)
  };
}, "resolveRuntimeExtensions");

// node_modules/@aws-sdk/client-s3/dist-es/S3Client.js
var S3Client = class extends Client {
  static {
    __name(this, "S3Client");
  }
  config;
  constructor(...[configuration]) {
    const _config_0 = getRuntimeConfig2(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveFlexibleChecksumsConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveRegionConfig(_config_4);
    const _config_6 = resolveHostHeaderConfig(_config_5);
    const _config_7 = resolveEndpointConfig(_config_6);
    const _config_8 = resolveEventStreamSerdeConfig(_config_7);
    const _config_9 = resolveHttpAuthSchemeConfig(_config_8);
    const _config_10 = resolveS3Config(_config_9, { session: [() => this, CreateSessionCommand] });
    const _config_11 = resolveRuntimeExtensions(_config_10, configuration?.extensions || []);
    super(_config_11);
    this.config = _config_11;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
      httpAuthSchemeParametersProvider: defaultS3HttpAuthSchemeParametersProvider,
      identityProviderConfigProvider: /* @__PURE__ */ __name(async (config) => new DefaultIdentityProviderConfig({
        "aws.auth#sigv4": config.credentials,
        "aws.auth#sigv4a": config.credentials
      }), "identityProviderConfigProvider")
    }));
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
    this.middlewareStack.use(getValidateBucketNamePlugin(this.config));
    this.middlewareStack.use(getAddExpectContinuePlugin(this.config));
    this.middlewareStack.use(getRegionRedirectMiddlewarePlugin(this.config));
    this.middlewareStack.use(getS3ExpressPlugin(this.config));
    this.middlewareStack.use(getS3ExpressHttpSigningPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
};

// node_modules/@aws-sdk/client-s3/dist-es/commands/AbortMultipartUploadCommand.js
var AbortMultipartUploadCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  Bucket: { type: "contextParams", name: "Bucket" },
  Key: { type: "contextParams", name: "Key" }
}).m(function(Command2, cs2, config, o2) {
  return [
    getSerdePlugin(config, this.serialize, this.deserialize),
    getEndpointPlugin(config, Command2.getEndpointParameterInstructions()),
    getThrow200ExceptionsPlugin(config)
  ];
}).s("AmazonS3", "AbortMultipartUpload", {}).n("S3Client", "AbortMultipartUploadCommand").f(void 0, void 0).ser(se_AbortMultipartUploadCommand).de(de_AbortMultipartUploadCommand).build() {
  static {
    __name(this, "AbortMultipartUploadCommand");
  }
};

// node_modules/@aws-sdk/middleware-ssec/dist-es/index.js
function ssecMiddleware(options) {
  return (next) => async (args) => {
    const input = { ...args.input };
    const properties = [
      {
        target: "SSECustomerKey",
        hash: "SSECustomerKeyMD5"
      },
      {
        target: "CopySourceSSECustomerKey",
        hash: "CopySourceSSECustomerKeyMD5"
      }
    ];
    for (const prop of properties) {
      const value = input[prop.target];
      if (value) {
        let valueForHash;
        if (typeof value === "string") {
          if (isValidBase64EncodedSSECustomerKey(value, options)) {
            valueForHash = options.base64Decoder(value);
          } else {
            valueForHash = options.utf8Decoder(value);
            input[prop.target] = options.base64Encoder(valueForHash);
          }
        } else {
          valueForHash = ArrayBuffer.isView(value) ? new Uint8Array(value.buffer, value.byteOffset, value.byteLength) : new Uint8Array(value);
          input[prop.target] = options.base64Encoder(valueForHash);
        }
        const hash = new options.md5();
        hash.update(valueForHash);
        input[prop.hash] = options.base64Encoder(await hash.digest());
      }
    }
    return next({
      ...args,
      input
    });
  };
}
__name(ssecMiddleware, "ssecMiddleware");
var ssecMiddlewareOptions = {
  name: "ssecMiddleware",
  step: "initialize",
  tags: ["SSE"],
  override: true
};
var getSsecPlugin = /* @__PURE__ */ __name((config) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.add(ssecMiddleware(config), ssecMiddlewareOptions);
  }, "applyToStack")
}), "getSsecPlugin");
function isValidBase64EncodedSSECustomerKey(str, options) {
  const base64Regex = /^(?:[A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
  if (!base64Regex.test(str))
    return false;
  try {
    const decodedBytes = options.base64Decoder(str);
    return decodedBytes.length === 32;
  } catch {
    return false;
  }
}
__name(isValidBase64EncodedSSECustomerKey, "isValidBase64EncodedSSECustomerKey");

// node_modules/@aws-sdk/client-s3/dist-es/commands/CompleteMultipartUploadCommand.js
var CompleteMultipartUploadCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  Bucket: { type: "contextParams", name: "Bucket" },
  Key: { type: "contextParams", name: "Key" }
}).m(function(Command2, cs2, config, o2) {
  return [
    getSerdePlugin(config, this.serialize, this.deserialize),
    getEndpointPlugin(config, Command2.getEndpointParameterInstructions()),
    getThrow200ExceptionsPlugin(config),
    getSsecPlugin(config)
  ];
}).s("AmazonS3", "CompleteMultipartUpload", {}).n("S3Client", "CompleteMultipartUploadCommand").f(CompleteMultipartUploadRequestFilterSensitiveLog, CompleteMultipartUploadOutputFilterSensitiveLog).ser(se_CompleteMultipartUploadCommand).de(de_CompleteMultipartUploadCommand).build() {
  static {
    __name(this, "CompleteMultipartUploadCommand");
  }
};

// node_modules/@aws-sdk/client-s3/dist-es/commands/CopyObjectCommand.js
var CopyObjectCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  DisableS3ExpressSessionAuth: { type: "staticContextParams", value: true },
  Bucket: { type: "contextParams", name: "Bucket" },
  Key: { type: "contextParams", name: "Key" },
  CopySource: { type: "contextParams", name: "CopySource" }
}).m(function(Command2, cs2, config, o2) {
  return [
    getSerdePlugin(config, this.serialize, this.deserialize),
    getEndpointPlugin(config, Command2.getEndpointParameterInstructions()),
    getThrow200ExceptionsPlugin(config),
    getSsecPlugin(config)
  ];
}).s("AmazonS3", "CopyObject", {}).n("S3Client", "CopyObjectCommand").f(CopyObjectRequestFilterSensitiveLog, CopyObjectOutputFilterSensitiveLog).ser(se_CopyObjectCommand).de(de_CopyObjectCommand).build() {
  static {
    __name(this, "CopyObjectCommand");
  }
};

// node_modules/@aws-sdk/client-s3/dist-es/commands/CreateMultipartUploadCommand.js
var CreateMultipartUploadCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  Bucket: { type: "contextParams", name: "Bucket" },
  Key: { type: "contextParams", name: "Key" }
}).m(function(Command2, cs2, config, o2) {
  return [
    getSerdePlugin(config, this.serialize, this.deserialize),
    getEndpointPlugin(config, Command2.getEndpointParameterInstructions()),
    getThrow200ExceptionsPlugin(config),
    getSsecPlugin(config)
  ];
}).s("AmazonS3", "CreateMultipartUpload", {}).n("S3Client", "CreateMultipartUploadCommand").f(CreateMultipartUploadRequestFilterSensitiveLog, CreateMultipartUploadOutputFilterSensitiveLog).ser(se_CreateMultipartUploadCommand).de(de_CreateMultipartUploadCommand).build() {
  static {
    __name(this, "CreateMultipartUploadCommand");
  }
};

// node_modules/@aws-sdk/client-s3/dist-es/commands/DeleteObjectCommand.js
var DeleteObjectCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  Bucket: { type: "contextParams", name: "Bucket" },
  Key: { type: "contextParams", name: "Key" }
}).m(function(Command2, cs2, config, o2) {
  return [
    getSerdePlugin(config, this.serialize, this.deserialize),
    getEndpointPlugin(config, Command2.getEndpointParameterInstructions()),
    getThrow200ExceptionsPlugin(config)
  ];
}).s("AmazonS3", "DeleteObject", {}).n("S3Client", "DeleteObjectCommand").f(void 0, void 0).ser(se_DeleteObjectCommand).de(de_DeleteObjectCommand).build() {
  static {
    __name(this, "DeleteObjectCommand");
  }
};

// node_modules/@aws-sdk/client-s3/dist-es/commands/GetObjectCommand.js
var GetObjectCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  Bucket: { type: "contextParams", name: "Bucket" },
  Key: { type: "contextParams", name: "Key" }
}).m(function(Command2, cs2, config, o2) {
  return [
    getSerdePlugin(config, this.serialize, this.deserialize),
    getEndpointPlugin(config, Command2.getEndpointParameterInstructions()),
    getFlexibleChecksumsPlugin(config, {
      requestChecksumRequired: false,
      requestValidationModeMember: "ChecksumMode",
      responseAlgorithms: ["CRC32", "CRC32C", "SHA256", "SHA1"]
    }),
    getSsecPlugin(config),
    getS3ExpiresMiddlewarePlugin(config)
  ];
}).s("AmazonS3", "GetObject", {}).n("S3Client", "GetObjectCommand").f(GetObjectRequestFilterSensitiveLog, GetObjectOutputFilterSensitiveLog).ser(se_GetObjectCommand).de(de_GetObjectCommand).build() {
  static {
    __name(this, "GetObjectCommand");
  }
};

// node_modules/@aws-sdk/client-s3/dist-es/commands/PutObjectCommand.js
var PutObjectCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  Bucket: { type: "contextParams", name: "Bucket" },
  Key: { type: "contextParams", name: "Key" }
}).m(function(Command2, cs2, config, o2) {
  return [
    getSerdePlugin(config, this.serialize, this.deserialize),
    getEndpointPlugin(config, Command2.getEndpointParameterInstructions()),
    getFlexibleChecksumsPlugin(config, {
      requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
      requestChecksumRequired: false
    }),
    getCheckContentLengthHeaderPlugin(config),
    getThrow200ExceptionsPlugin(config),
    getSsecPlugin(config)
  ];
}).s("AmazonS3", "PutObject", {}).n("S3Client", "PutObjectCommand").f(PutObjectRequestFilterSensitiveLog, PutObjectOutputFilterSensitiveLog).ser(se_PutObjectCommand).de(de_PutObjectCommand).build() {
  static {
    __name(this, "PutObjectCommand");
  }
};

// node_modules/@aws-sdk/client-s3/dist-es/commands/UploadPartCommand.js
var UploadPartCommand = class extends Command.classBuilder().ep({
  ...commonParams,
  Bucket: { type: "contextParams", name: "Bucket" },
  Key: { type: "contextParams", name: "Key" }
}).m(function(Command2, cs2, config, o2) {
  return [
    getSerdePlugin(config, this.serialize, this.deserialize),
    getEndpointPlugin(config, Command2.getEndpointParameterInstructions()),
    getFlexibleChecksumsPlugin(config, {
      requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
      requestChecksumRequired: false
    }),
    getThrow200ExceptionsPlugin(config),
    getSsecPlugin(config)
  ];
}).s("AmazonS3", "UploadPart", {}).n("S3Client", "UploadPartCommand").f(UploadPartRequestFilterSensitiveLog, UploadPartOutputFilterSensitiveLog).ser(se_UploadPartCommand).de(de_UploadPartCommand).build() {
  static {
    __name(this, "UploadPartCommand");
  }
};

// functions/upload/chunkUpload.js
async function initializeChunkedUpload(context) {
  const { request, env, url } = context;
  const db = getDatabase(env);
  try {
    const formdata = await request.formData();
    const originalFileName = formdata.get("originalFileName");
    const originalFileType = formdata.get("originalFileType");
    const totalChunks = parseInt(formdata.get("totalChunks"));
    if (!originalFileName || !originalFileType || !totalChunks) {
      return createResponse("Error: Missing initialization parameters", { status: 400 });
    }
    const timestamp = Date.now();
    const random = Math.random().toString(36).slice(2, 11);
    const uploadId = `upload_${timestamp}_${random}`;
    const uploadIp = getUploadIp(request);
    const ipAddress = await getIPAddress(uploadIp);
    const uploadChannel = url.searchParams.get("uploadChannel") || "telegram";
    const channelName = url.searchParams.get("channelName") || "";
    const sessionInfo = {
      uploadId,
      originalFileName,
      originalFileType,
      totalChunks,
      uploadChannel,
      channelName,
      uploadIp,
      ipAddress,
      status: "initialized",
      createdAt: timestamp,
      expiresAt: timestamp + 36e5
      // 1小时过期
    };
    const sessionKey = `upload_session_${uploadId}`;
    await db.put(sessionKey, JSON.stringify(sessionInfo), {
      expirationTtl: 3600
      // 1小时过期
    });
    return createResponse(JSON.stringify({
      success: true,
      uploadId,
      message: "Chunked upload initialized successfully",
      sessionInfo: {
        uploadId,
        originalFileName,
        totalChunks,
        uploadChannel,
        channelName
      }
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return createResponse(`Error: Failed to initialize chunked upload - ${error.message}`, { status: 500 });
  }
}
__name(initializeChunkedUpload, "initializeChunkedUpload");
async function handleChunkUpload(context) {
  const { env, request, url, waitUntil } = context;
  const db = getDatabase(env);
  const formdata = await request.formData();
  context.formdata = formdata;
  try {
    const chunk = formdata.get("file");
    const chunkIndex = parseInt(formdata.get("chunkIndex"));
    const totalChunks = parseInt(formdata.get("totalChunks"));
    const uploadId = formdata.get("uploadId");
    const originalFileName = formdata.get("originalFileName");
    const originalFileType = formdata.get("originalFileType");
    if (!chunk || chunkIndex === null || !totalChunks || !uploadId || !originalFileName || !originalFileType) {
      return createResponse("Error: Missing chunk upload parameters", { status: 400 });
    }
    const sessionKey = `upload_session_${uploadId}`;
    const sessionData = await db.get(sessionKey);
    if (!sessionData) {
      return createResponse("Error: Invalid or expired upload session", { status: 400 });
    }
    const sessionInfo = JSON.parse(sessionData);
    if (sessionInfo.originalFileName !== originalFileName || sessionInfo.totalChunks !== totalChunks) {
      return createResponse("Error: Session parameters mismatch", { status: 400 });
    }
    if (Date.now() > sessionInfo.expiresAt) {
      return createResponse("Error: Upload session expired", { status: 410 });
    }
    const uploadChannel = url.searchParams.get("uploadChannel") || sessionInfo.uploadChannel || "telegram";
    const channelName = url.searchParams.get("channelName") || sessionInfo.channelName || "";
    context.specifiedChannelName = channelName;
    const chunkKey = `chunk_${uploadId}_${chunkIndex.toString().padStart(3, "0")}`;
    const chunkData = await chunk.arrayBuffer();
    const uploadStartTime = Date.now();
    const initialChunkMetadata = {
      uploadId,
      chunkIndex,
      totalChunks,
      originalFileName,
      originalFileType,
      chunkSize: chunkData.byteLength,
      uploadTime: uploadStartTime,
      uploadStartTime,
      status: "uploading",
      uploadChannel,
      timeoutThreshold: uploadStartTime + 6e4
      // 1分钟超时阈值
    };
    const { usingD1 } = checkDatabaseConfig(env);
    await db.put(chunkKey, usingD1 ? "" : chunkData, {
      metadata: initialChunkMetadata,
      expirationTtl: 3600
      // 1小时过期
    });
    await uploadChunkToStorageWithTimeout(context, chunkIndex, totalChunks, uploadId, originalFileName, originalFileType, uploadChannel, usingD1 ? chunkData : void 0);
    return createResponse(JSON.stringify({
      success: true,
      message: `Chunk ${chunkIndex + 1}/${totalChunks} received and being uploaded`,
      uploadId,
      chunkIndex
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return createResponse(`Error: Failed to upload chunk - ${error.message}`, { status: 500 });
  }
}
__name(handleChunkUpload, "handleChunkUpload");
async function handleCleanupRequest(context, uploadId, totalChunks) {
  try {
    if (!uploadId) {
      return createResponse(JSON.stringify({
        error: "Missing uploadId parameter"
      }), { status: 400, headers: { "Content-Type": "application/json" } });
    }
    await forceCleanupUpload(context, uploadId, totalChunks);
    return createResponse(JSON.stringify({
      success: true,
      message: `Cleanup completed for upload ${uploadId}`,
      uploadId,
      cleanedChunks: totalChunks
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return createResponse(JSON.stringify({
      error: `Cleanup failed: ${error.message}`,
      uploadId
    }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
__name(handleCleanupRequest, "handleCleanupRequest");
async function uploadChunkToStorageWithTimeout(context, chunkIndex, totalChunks, uploadId, originalFileName, originalFileType, uploadChannel, chunkData) {
  const { env } = context;
  const db = getDatabase(env);
  const chunkKey = `chunk_${uploadId}_${chunkIndex.toString().padStart(3, "0")}`;
  const UPLOAD_TIMEOUT = 18e4;
  try {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Upload timeout")), UPLOAD_TIMEOUT);
    });
    const uploadPromise = uploadChunkToStorage(context, chunkIndex, totalChunks, uploadId, originalFileName, originalFileType, uploadChannel, chunkData);
    await Promise.race([uploadPromise, timeoutPromise]);
  } catch (error) {
    console.error(`Chunk ${chunkIndex} upload failed or timed out:`, error);
    try {
      const chunkRecord = await db.getWithMetadata(chunkKey, { type: "arrayBuffer" });
      if (chunkRecord && chunkRecord.metadata) {
        const isTimeout = error.message === "Upload timeout";
        const errorMetadata = {
          ...chunkRecord.metadata,
          status: isTimeout ? "timeout" : "failed",
          error: error.message,
          failedTime: Date.now(),
          isTimeout
        };
        await db.put(chunkKey, chunkRecord.value, {
          metadata: errorMetadata,
          expirationTtl: 3600
        });
      }
    } catch (metaError) {
      console.error("Failed to save timeout/error metadata:", metaError);
    }
  }
}
__name(uploadChunkToStorageWithTimeout, "uploadChunkToStorageWithTimeout");
async function uploadChunkToStorage(context, chunkIndex, totalChunks, uploadId, originalFileName, originalFileType, uploadChannel, chunkData) {
  const { env } = context;
  const db = getDatabase(env);
  const chunkKey = `chunk_${uploadId}_${chunkIndex.toString().padStart(3, "0")}`;
  const MAX_RETRIES = 3;
  try {
    let chunkMetadata;
    if (chunkData !== void 0) {
      const chunkRecord = await db.getWithMetadata(chunkKey);
      chunkMetadata = chunkRecord && chunkRecord.metadata ? chunkRecord.metadata : {};
    } else {
      const chunkRecord = await db.getWithMetadata(chunkKey, { type: "arrayBuffer" });
      if (!chunkRecord || !chunkRecord.value) {
        console.error(`Chunk ${chunkIndex} data not found in database`);
        return;
      }
      chunkData = chunkRecord.value;
      chunkMetadata = chunkRecord.metadata;
    }
    for (let retry = 0; retry < MAX_RETRIES; retry++) {
      let uploadResult = null;
      if (uploadChannel === "cfr2") {
        uploadResult = await uploadSingleChunkToR2Multipart(context, chunkData, chunkIndex, totalChunks, uploadId, originalFileName, originalFileType);
      } else if (uploadChannel === "s3") {
        uploadResult = await uploadSingleChunkToS3Multipart(context, chunkData, chunkIndex, totalChunks, uploadId, originalFileName, originalFileType);
      } else if (uploadChannel === "telegram") {
        uploadResult = await uploadSingleChunkToTelegram(context, chunkData, chunkIndex, totalChunks, uploadId, originalFileName, originalFileType);
      } else if (uploadChannel === "discord") {
        uploadResult = await uploadSingleChunkToDiscord(context, chunkData, chunkIndex, totalChunks, uploadId, originalFileName, originalFileType);
      }
      if (uploadResult && uploadResult.success) {
        const updatedMetadata = {
          ...chunkMetadata,
          status: "completed",
          uploadResult,
          completedTime: Date.now()
        };
        await db.put(chunkKey, "", {
          metadata: updatedMetadata,
          expirationTtl: 3600
          // 1小时过期
        });
        console.log(`Chunk ${chunkIndex} uploaded successfully to ${uploadChannel}`);
        break;
      } else if (retry === MAX_RETRIES - 1) {
        const failedMetadata = {
          ...chunkMetadata,
          status: "failed",
          error: uploadResult ? uploadResult.error : "Unknown error",
          failedTime: Date.now()
        };
        await db.put(chunkKey, chunkData, {
          metadata: failedMetadata,
          expirationTtl: 3600
          // 1小时过期
        });
        console.warn(`Chunk ${chunkIndex} upload failed: ${failedMetadata.error}`);
      }
    }
  } catch (error) {
    console.error(`Error uploading chunk ${chunkIndex}:`, error);
    try {
      const chunkRecord = await db.getWithMetadata(chunkKey, { type: "arrayBuffer" });
      if (chunkRecord && chunkRecord.metadata) {
        const errorMetadata = {
          ...chunkRecord.metadata,
          status: "failed",
          error: error.message,
          failedTime: Date.now()
        };
        await db.put(chunkKey, chunkRecord.value, {
          metadata: errorMetadata,
          expirationTtl: 3600
          // 1小时过期
        });
      }
    } catch (metaError) {
      console.error("Failed to save error metadata:", metaError);
    }
  }
}
__name(uploadChunkToStorage, "uploadChunkToStorage");
async function uploadSingleChunkToR2Multipart(context, chunkData, chunkIndex, totalChunks, uploadId, originalFileName, originalFileType) {
  const { env, uploadConfig } = context;
  const db = getDatabase(env);
  try {
    const r2Settings = uploadConfig.cfr2;
    if (!r2Settings.channels || r2Settings.channels.length === 0) {
      return { success: false, error: "No R2 channel provided" };
    }
    const R2DataBase = env.img_r2;
    const multipartKey = `multipart_${uploadId}`;
    let finalFileId;
    if (chunkIndex === 0) {
      finalFileId = await buildUniqueFileId(context, originalFileName, originalFileType);
      const multipartUpload2 = await R2DataBase.createMultipartUpload(finalFileId);
      const multipartInfo2 = {
        uploadId: multipartUpload2.uploadId,
        key: finalFileId
      };
      await db.put(multipartKey, JSON.stringify(multipartInfo2), {
        expirationTtl: 3600
        // 1小时过期
      });
    } else {
      let multipartInfoData2 = null;
      let retryCount = 0;
      const maxRetries = 30;
      while (!multipartInfoData2 && retryCount < maxRetries) {
        multipartInfoData2 = await db.get(multipartKey);
        if (!multipartInfoData2) {
          await new Promise((resolve) => setTimeout(resolve, 2e3));
          retryCount++;
          console.log(`R2 chunk ${chunkIndex} waiting for multipart initialization... (${retryCount}/${maxRetries})`);
        }
      }
      if (!multipartInfoData2) {
        return { success: false, error: "Multipart upload not initialized after waiting" };
      }
      const multipartInfo2 = JSON.parse(multipartInfoData2);
      finalFileId = multipartInfo2.key;
    }
    const multipartInfoData = await db.get(multipartKey);
    if (!multipartInfoData) {
      return { success: false, error: "Multipart upload not initialized" };
    }
    const multipartInfo = JSON.parse(multipartInfoData);
    const multipartUpload = R2DataBase.resumeMultipartUpload(finalFileId, multipartInfo.uploadId);
    const uploadedPart = await multipartUpload.uploadPart(chunkIndex + 1, chunkData);
    if (!uploadedPart || !uploadedPart.etag) {
      throw new Error(`Failed to upload part ${chunkIndex + 1} to R2`);
    }
    return {
      success: true,
      partNumber: chunkIndex + 1,
      etag: uploadedPart.etag,
      size: chunkData.byteLength,
      uploadTime: Date.now(),
      multipartUploadId: multipartInfo.uploadId,
      key: finalFileId
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}
__name(uploadSingleChunkToR2Multipart, "uploadSingleChunkToR2Multipart");
async function uploadSingleChunkToS3Multipart(context, chunkData, chunkIndex, totalChunks, uploadId, originalFileName, originalFileType) {
  const { env, uploadConfig, specifiedChannelName } = context;
  const db = getDatabase(env);
  try {
    const s3Settings = uploadConfig.s3;
    const s3Channels = s3Settings.channels;
    let s3Channel;
    if (specifiedChannelName) {
      s3Channel = s3Channels.find((ch2) => ch2.name === specifiedChannelName);
    }
    if (!s3Channel) {
      s3Channel = selectConsistentChannel(s3Channels, uploadId, s3Settings.loadBalance.enabled);
    }
    console.log(`Uploading S3 chunk ${chunkIndex} for uploadId: ${uploadId}, selected channel: ${s3Channel.name || "default"}`);
    if (!s3Channel) {
      return { success: false, error: "No S3 channel provided" };
    }
    const { endpoint, pathStyle, accessKeyId, secretAccessKey, bucketName, region } = s3Channel;
    const s3Client = new S3Client({
      region: region || "auto",
      endpoint,
      credentials: { accessKeyId, secretAccessKey },
      forcePathStyle: pathStyle
    });
    const multipartKey = `multipart_${uploadId}`;
    let finalFileId;
    if (chunkIndex === 0) {
      finalFileId = await buildUniqueFileId(context, originalFileName, originalFileType);
      const createResponse2 = await s3Client.send(new CreateMultipartUploadCommand({
        Bucket: bucketName,
        Key: finalFileId,
        ContentType: originalFileType || "application/octet-stream"
      }));
      const multipartInfo2 = {
        uploadId: createResponse2.UploadId,
        key: finalFileId
      };
      await db.put(multipartKey, JSON.stringify(multipartInfo2), {
        expirationTtl: 3600
        // 1小时过期
      });
    } else {
      let multipartInfoData2 = null;
      let retryCount = 0;
      const maxRetries = 30;
      while (!multipartInfoData2 && retryCount < maxRetries) {
        multipartInfoData2 = await db.get(multipartKey);
        if (!multipartInfoData2) {
          await new Promise((resolve) => setTimeout(resolve, 2e3));
          retryCount++;
          console.log(`S3 chunk ${chunkIndex} waiting for multipart initialization... (${retryCount}/${maxRetries})`);
        }
      }
      if (!multipartInfoData2) {
        return { success: false, error: "Multipart upload not initialized after waiting" };
      }
      const multipartInfo2 = JSON.parse(multipartInfoData2);
      finalFileId = multipartInfo2.key;
    }
    const multipartInfoData = await db.get(multipartKey);
    if (!multipartInfoData) {
      return { success: false, error: "Multipart upload not initialized" };
    }
    const multipartInfo = JSON.parse(multipartInfoData);
    const uploadResponse = await s3Client.send(new UploadPartCommand({
      Bucket: bucketName,
      Key: finalFileId,
      PartNumber: chunkIndex + 1,
      UploadId: multipartInfo.uploadId,
      Body: new Uint8Array(chunkData)
    }));
    if (!uploadResponse || !uploadResponse.ETag) {
      throw new Error(`Failed to upload part ${chunkIndex + 1} to S3`);
    }
    return {
      success: true,
      partNumber: chunkIndex + 1,
      etag: uploadResponse.ETag,
      size: chunkData.byteLength,
      uploadTime: Date.now(),
      s3Channel: s3Channel.name,
      multipartUploadId: multipartInfo.uploadId,
      key: finalFileId
    };
  } catch (error) {
    console.error(`S3 chunk upload error (chunk ${chunkIndex}):`, error.message, error.name, error.$metadata);
    return {
      success: false,
      error: error.message
    };
  }
}
__name(uploadSingleChunkToS3Multipart, "uploadSingleChunkToS3Multipart");
async function uploadSingleChunkToTelegram(context, chunkData, chunkIndex, totalChunks, uploadId, originalFileName, originalFileType) {
  const { uploadConfig, specifiedChannelName } = context;
  try {
    const tgSettings = uploadConfig.telegram;
    const tgChannels = tgSettings.channels;
    let tgChannel;
    if (specifiedChannelName) {
      tgChannel = tgChannels.find((ch2) => ch2.name === specifiedChannelName);
    }
    if (!tgChannel) {
      tgChannel = selectConsistentChannel(tgChannels, uploadId, tgSettings.loadBalance.enabled);
    }
    console.log(`Uploading Telegram chunk ${chunkIndex} for uploadId: ${uploadId}, selected channel: ${tgChannel.name || "default"}`);
    if (!tgChannel) {
      return { success: false, error: "No Telegram channel provided" };
    }
    const tgBotToken = tgChannel.botToken;
    const tgChatId = tgChannel.chatId;
    const tgProxyUrl = tgChannel.proxyUrl || "";
    const chunkFileName = `${originalFileName}.part${chunkIndex.toString().padStart(3, "0")}`;
    const chunkBlob = new Blob([chunkData], { type: "application/octet-stream" });
    const chunkInfo = await uploadChunkToTelegramWithRetry(
      tgBotToken,
      tgChatId,
      tgProxyUrl,
      chunkBlob,
      chunkFileName,
      chunkIndex,
      totalChunks,
      // 传入正确的totalChunks
      2
      // maxRetries
    );
    if (!chunkInfo) {
      return { success: false, error: "Failed to upload chunk to Telegram" };
    }
    return {
      success: true,
      fileId: chunkInfo.file_id,
      size: chunkInfo.file_size,
      fileName: chunkFileName,
      uploadTime: Date.now(),
      tgChannel: tgChannel.name
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}
__name(uploadSingleChunkToTelegram, "uploadSingleChunkToTelegram");
async function uploadSingleChunkToDiscord(context, chunkData, chunkIndex, totalChunks, uploadId, originalFileName, originalFileType) {
  const { uploadConfig, specifiedChannelName } = context;
  try {
    const discordSettings = uploadConfig.discord;
    const discordChannels = discordSettings.channels;
    let discordChannel;
    if (specifiedChannelName) {
      discordChannel = discordChannels.find((ch2) => ch2.name === specifiedChannelName);
    }
    if (!discordChannel) {
      discordChannel = selectConsistentChannel(discordChannels, uploadId, discordSettings.loadBalance?.enabled);
    }
    console.log(`Uploading Discord chunk ${chunkIndex} for uploadId: ${uploadId}, selected channel: ${discordChannel.name || "default"}`);
    if (!discordChannel) {
      return { success: false, error: "No Discord channel provided" };
    }
    const botToken = discordChannel.botToken;
    const channelId = discordChannel.channelId;
    const chunkFileName = `${originalFileName}.part${chunkIndex.toString().padStart(3, "0")}`;
    const chunkBlob = new Blob([chunkData], { type: "application/octet-stream" });
    const chunkInfo = await uploadChunkToDiscordWithRetry(
      botToken,
      channelId,
      chunkBlob,
      chunkFileName,
      chunkIndex,
      totalChunks,
      2
      // maxRetries
    );
    if (!chunkInfo) {
      return { success: false, error: "Failed to upload chunk to Discord" };
    }
    return {
      success: true,
      messageId: chunkInfo.message_id,
      // 注意：不存储 attachmentId 和 url，因为它们会在约24小时后过期
      // 读取时会通过 messageId 获取新的 URL
      size: chunkInfo.file_size,
      fileName: chunkFileName,
      uploadTime: Date.now(),
      discordChannel: discordChannel.name
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}
__name(uploadSingleChunkToDiscord, "uploadSingleChunkToDiscord");
async function uploadChunkToDiscordWithRetry(botToken, channelId, chunkBlob, chunkFileName, chunkIndex, totalChunks, maxRetries = 2) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const discordAPI = new DiscordAPI(botToken);
      const response = await discordAPI.sendFile(chunkBlob, channelId, chunkFileName);
      if (!response || !response.id) {
        throw new Error("Invalid Discord response");
      }
      const fileInfo = discordAPI.getFileInfo(response);
      if (!fileInfo) {
        throw new Error("Failed to extract file info from response");
      }
      return fileInfo;
    } catch (error) {
      console.warn(`Discord chunk ${chunkIndex} upload attempt ${attempt + 1} failed:`, error.message);
      if (error.message && error.message.includes("429")) {
        const retryAfter = 5e3;
        console.log(`Discord rate limited, waiting ${retryAfter}ms...`);
        await new Promise((resolve) => setTimeout(resolve, retryAfter));
        continue;
      }
      if (attempt === maxRetries - 1) {
        return null;
      }
      await new Promise((resolve) => setTimeout(resolve, 1e3 * (attempt + 1)));
    }
  }
  return null;
}
__name(uploadChunkToDiscordWithRetry, "uploadChunkToDiscordWithRetry");
async function retryFailedChunks(context, failedChunks, uploadChannel, options = {}) {
  const {
    maxRetries = 5,
    retryTimeout = 6e4,
    // 60秒重试超时
    maxConcurrency = 3,
    // 最大并发数
    batchSize = 6
    // 每批处理的分块数
  } = options;
  if (!failedChunks || failedChunks.length === 0) {
    console.log("No failed chunks to retry");
    return { success: true, results: [] };
  }
  console.log(`Starting concurrent retry for ${failedChunks.length} failed chunks with max concurrency: ${maxConcurrency}`);
  const results = [];
  const chunksToRetry = failedChunks.filter(
    (chunk) => chunk.hasData && chunk.status !== "uploading" && chunk.status !== "completed"
  );
  if (chunksToRetry.length === 0) {
    console.log("No chunks need retry (all are either uploading, completed, or have no data)");
    return { success: true, results: [] };
  }
  for (let i2 = 0; i2 < chunksToRetry.length; i2 += batchSize) {
    const batch = chunksToRetry.slice(i2, i2 + batchSize);
    console.log(`Processing batch ${Math.floor(i2 / batchSize) + 1}: chunks ${batch.map((c2) => c2.index).join(", ")}`);
    const retryTasks = batch.map(async (chunk) => {
      return retrySingleChunk(context, chunk, uploadChannel, maxRetries, retryTimeout);
    });
    const batchResults = [];
    for (let j2 = 0; j2 < retryTasks.length; j2 += maxConcurrency) {
      const concurrentTasks = retryTasks.slice(j2, j2 + maxConcurrency);
      const concurrentResults = await Promise.allSettled(concurrentTasks);
      for (const result of concurrentResults) {
        if (result.status === "fulfilled") {
          batchResults.push(result.value);
        } else {
          console.error("Retry task failed:", result.reason);
          batchResults.push({
            success: false,
            chunk: null,
            error: result.reason?.message || "Task failed",
            reason: "task_error"
          });
        }
      }
    }
    results.push(...batchResults);
    if (i2 + batchSize < chunksToRetry.length) {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
  const successCount = results.filter((r2) => r2.success).length;
  const failureCount = results.filter((r2) => !r2.success).length;
  console.log(`Retry completed: ${successCount} successful, ${failureCount} failed out of ${results.length} chunks`);
  const failedResults = results.filter((r2) => !r2.success);
  if (failedResults.length > 0) {
    console.warn("Failed chunks:", failedResults.map((r2) => ({
      index: r2.chunk?.index,
      reason: r2.reason,
      error: r2.error
    })));
  }
  return {
    success: failureCount === 0,
    results,
    summary: {
      total: results.length,
      successful: successCount,
      failed: failureCount,
      failedChunks: failedResults.map((r2) => r2.chunk?.index).filter(Boolean)
    }
  };
}
__name(retryFailedChunks, "retryFailedChunks");
async function retrySingleChunk(context, chunk, uploadChannel, maxRetries = 5, retryTimeout = 6e4) {
  const { env } = context;
  const db = getDatabase(env);
  let retryCount = 0;
  let lastError = null;
  try {
    const chunkRecord = await db.getWithMetadata(chunk.key, { type: "arrayBuffer" });
    if (!chunkRecord || !chunkRecord.value) {
      console.error(`Chunk ${chunk.index} data missing for retry`);
      return { success: false, chunk, reason: "data_missing", error: "Chunk data not found" };
    }
    const chunkData = chunkRecord.value;
    const originalFileName = chunkRecord.metadata?.originalFileName || "unknown";
    const originalFileType = chunkRecord.metadata?.originalFileType || "application/octet-stream";
    const uploadId = chunkRecord.metadata?.uploadId;
    const totalChunks = chunkRecord.metadata?.totalChunks || 1;
    const retryMetadata = {
      ...chunkRecord.metadata,
      status: "retrying"
    };
    await db.put(chunk.key, chunkData, {
      metadata: retryMetadata,
      expirationTtl: 3600
    });
    while (retryCount < maxRetries) {
      const retryPromise = (async () => {
        if (uploadChannel === "cfr2") {
          return await uploadSingleChunkToR2Multipart(context, chunkData, chunk.index, totalChunks, uploadId, originalFileName, originalFileType);
        } else if (uploadChannel === "s3") {
          return await uploadSingleChunkToS3Multipart(context, chunkData, chunk.index, totalChunks, uploadId, originalFileName, originalFileType);
        } else if (uploadChannel === "telegram") {
          return await uploadSingleChunkToTelegram(context, chunkData, chunk.index, totalChunks, uploadId, originalFileName, originalFileType);
        } else if (uploadChannel === "discord") {
          return await uploadSingleChunkToDiscord(context, chunkData, chunk.index, totalChunks, uploadId, originalFileName, originalFileType);
        }
        return null;
      })();
      const timeoutPromise = new Promise((resolve) => {
        setTimeout(() => resolve({
          success: false,
          error: "Retry timeout"
        }), retryTimeout);
      });
      const uploadResult = await Promise.race([retryPromise, timeoutPromise]);
      if (uploadResult && uploadResult.success) {
        const updatedMetadata = {
          ...chunkRecord.metadata,
          status: "completed",
          uploadResult,
          retryCount: retryCount + 1,
          completedTime: Date.now()
        };
        await db.put(chunk.key, "", {
          metadata: updatedMetadata,
          expirationTtl: 3600
          // 1小时过期
        });
        console.log(`Chunk ${chunk.index} retry successful after ${retryCount + 1} attempts`);
        return { success: true, chunk, retryCount: retryCount + 1 };
      } else if (retryCount === maxRetries - 1) {
        throw new Error(uploadResult?.error || "Unknown retry error");
      }
      retryCount++;
      lastError = uploadResult?.error || "Unknown error";
      console.warn(`Chunk ${chunk.index} retry ${retryCount} failed: ${lastError}`);
    }
  } catch (error) {
    lastError = error;
    const isTimeout = error.message === "Retry timeout";
    console.warn(`Chunk ${chunk.index} retry ${retryCount} ${isTimeout ? "timed out" : "failed"}: ${error.message}`);
    try {
      const chunkRecord = await db.getWithMetadata(chunk.key, { type: "arrayBuffer" });
      if (chunkRecord) {
        const failedRetryMetadata = {
          ...chunkRecord.metadata,
          status: isTimeout ? "retry_timeout" : "retry_failed"
        };
        await db.put(chunk.key, chunkRecord.value, {
          metadata: failedRetryMetadata,
          expirationTtl: 3600
        });
      }
    } catch (metaError) {
      console.error(`Failed to update retry error metadata for chunk ${chunk.index}:`, metaError);
    }
    if (retryCount < maxRetries) {
      const delay = Math.min(1e3 * Math.pow(2, retryCount - 1), 1e4);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  console.error(`Chunk ${chunk.index} failed after ${maxRetries} retry attempts`);
  return { success: false, chunk, retryCount, error: lastError?.message || "Max retries exceeded" };
}
__name(retrySingleChunk, "retrySingleChunk");
async function cleanupFailedMultipartUploads(context, uploadId, uploadChannel) {
  const { env, uploadConfig } = context;
  const db = getDatabase(env);
  try {
    const multipartKey = `multipart_${uploadId}`;
    const multipartInfoData = await db.get(multipartKey);
    if (!multipartInfoData) {
      return;
    }
    const multipartInfo = JSON.parse(multipartInfoData);
    if (uploadChannel === "cfr2") {
      const R2DataBase = env.img_r2;
      const multipartUpload = R2DataBase.resumeMultipartUpload(multipartInfo.key, multipartInfo.uploadId);
      await multipartUpload.abort();
    } else if (uploadChannel === "s3") {
      const s3Settings = uploadConfig.s3;
      const s3Channels = s3Settings.channels;
      let s3Channel;
      const specifiedChannelName = context.specifiedChannelName;
      if (specifiedChannelName) {
        s3Channel = s3Channels.find((ch2) => ch2.name === specifiedChannelName);
      }
      if (!s3Channel) {
        s3Channel = selectConsistentChannel(s3Channels, uploadId, s3Settings.loadBalance.enabled);
      }
      if (s3Channel) {
        const { endpoint, pathStyle, accessKeyId, secretAccessKey, bucketName, region } = s3Channel;
        const s3Client = new S3Client({
          region: region || "auto",
          endpoint,
          credentials: { accessKeyId, secretAccessKey },
          forcePathStyle: pathStyle
        });
        await s3Client.send(new AbortMultipartUploadCommand({
          Bucket: bucketName,
          Key: multipartInfo.key,
          UploadId: multipartInfo.uploadId
        }));
      }
    }
    await db.delete(multipartKey);
    console.log(`Cleaned up failed multipart upload for ${uploadId}`);
  } catch (error) {
    console.error(`Failed to cleanup multipart upload for ${uploadId}:`, error);
  }
}
__name(cleanupFailedMultipartUploads, "cleanupFailedMultipartUploads");
async function checkChunkUploadStatuses(env, uploadId, totalChunks) {
  const chunkStatuses = [];
  const currentTime = Date.now();
  const db = getDatabase(env);
  for (let i2 = 0; i2 < totalChunks; i2++) {
    const chunkKey = `chunk_${uploadId}_${i2.toString().padStart(3, "0")}`;
    try {
      const chunkRecord = await db.getWithMetadata(chunkKey, { type: "arrayBuffer" });
      if (chunkRecord && chunkRecord.metadata) {
        let status = chunkRecord.metadata.status || "unknown";
        if (status === "uploading" && chunkRecord.metadata.timeoutThreshold && currentTime > chunkRecord.metadata.timeoutThreshold) {
          status = "timeout";
          const timeoutMetadata = {
            ...chunkRecord.metadata,
            status: "timeout",
            error: "Upload timeout detected",
            timeoutDetectedTime: currentTime
          };
          await db.put(chunkKey, chunkRecord.value, {
            metadata: timeoutMetadata,
            expirationTtl: 3600
          }).catch((err) => console.warn(`Failed to update timeout status for chunk ${i2}:`, err));
        }
        let hasData = false;
        if (status === "completed") {
          hasData = false;
        } else if (status === "uploading" || status === "failed" || status === "timeout") {
          hasData = chunkRecord.value && chunkRecord.value.byteLength > 0;
        } else {
          hasData = chunkRecord.value && chunkRecord.value.byteLength > 0;
        }
        chunkStatuses.push({
          index: i2,
          key: chunkKey,
          status,
          uploadResult: chunkRecord.metadata.uploadResult,
          error: chunkRecord.metadata.error,
          hasData,
          chunkSize: chunkRecord.metadata.chunkSize,
          uploadTime: chunkRecord.metadata.uploadTime,
          uploadStartTime: chunkRecord.metadata.uploadStartTime,
          timeoutThreshold: chunkRecord.metadata.timeoutThreshold,
          uploadChannel: chunkRecord.metadata.uploadChannel,
          isTimeout: status === "timeout"
        });
      } else {
        chunkStatuses.push({
          index: i2,
          key: chunkKey,
          status: "missing",
          hasData: false
        });
      }
    } catch (error) {
      chunkStatuses.push({
        index: i2,
        key: chunkKey,
        status: "error",
        error: error.message,
        hasData: false
      });
    }
  }
  return chunkStatuses;
}
__name(checkChunkUploadStatuses, "checkChunkUploadStatuses");
async function cleanupChunkData(env, uploadId, totalChunks) {
  try {
    const db = getDatabase(env);
    for (let i2 = 0; i2 < totalChunks; i2++) {
      const chunkKey = `chunk_${uploadId}_${i2.toString().padStart(3, "0")}`;
      await db.delete(chunkKey);
    }
    const multipartKey = `multipart_${uploadId}`;
    await db.delete(multipartKey);
  } catch (cleanupError) {
    console.warn("Failed to cleanup chunk data:", cleanupError);
  }
}
__name(cleanupChunkData, "cleanupChunkData");
async function cleanupUploadSession(env, uploadId) {
  try {
    const db = getDatabase(env);
    const sessionKey = `upload_session_${uploadId}`;
    await db.delete(sessionKey);
    console.log(`Cleaned up upload session for ${uploadId}`);
  } catch (cleanupError) {
    console.warn("Failed to cleanup upload session:", cleanupError);
  }
}
__name(cleanupUploadSession, "cleanupUploadSession");
async function forceCleanupUpload(context, uploadId, totalChunks) {
  const { env } = context;
  const db = getDatabase(env);
  try {
    const sessionKey = `upload_session_${uploadId}`;
    const sessionRecord = await db.get(sessionKey);
    const uploadChannel = sessionRecord ? JSON.parse(sessionRecord).uploadChannel : "cfr2";
    await cleanupFailedMultipartUploads(context, uploadId, uploadChannel);
    const cleanupPromises = [];
    for (let i2 = 0; i2 < totalChunks; i2++) {
      const chunkKey = `chunk_${uploadId}_${i2.toString().padStart(3, "0")}`;
      cleanupPromises.push(db.delete(chunkKey).catch(
        (err) => console.warn(`Failed to delete chunk ${i2}:`, err)
      ));
    }
    const keysToCleanup = [
      `upload_session_${uploadId}`,
      `multipart_${uploadId}`
    ];
    keysToCleanup.forEach((key) => {
      cleanupPromises.push(db.delete(key).catch(
        (err) => console.warn(`Failed to delete key ${key}:`, err)
      ));
    });
    await Promise.allSettled(cleanupPromises);
    console.log(`Force cleanup completed for ${uploadId}`);
  } catch (cleanupError) {
    console.warn("Failed to force cleanup upload:", cleanupError);
  }
}
__name(forceCleanupUpload, "forceCleanupUpload");
async function uploadLargeFileToTelegram(context, file, fullId, metadata, fileName, fileType, returnLink, tgBotToken, tgChatId, tgChannel) {
  const { env, waitUntil } = context;
  const db = getDatabase(env);
  const CHUNK_SIZE = 16 * 1024 * 1024;
  const fileSize = file.size;
  const totalChunks = Math.ceil(fileSize / CHUNK_SIZE);
  const MAX_FILE_SIZE_BYTES = 100 * 1024 * 1024 * 1024;
  const maxChunks = Math.ceil(MAX_FILE_SIZE_BYTES / CHUNK_SIZE);
  if (totalChunks > maxChunks) {
    return createResponse("Error: File too large (exceeds 100GB limit)", { status: 413 });
  }
  const chunks = [];
  const uploadedChunks = [];
  try {
    for (let i2 = 0; i2 < totalChunks; i2++) {
      const start = i2 * CHUNK_SIZE;
      const end = Math.min(start + CHUNK_SIZE, fileSize);
      const chunkBlob = file.slice(start, end);
      const chunkFileName = `${fileName}.part${i2.toString().padStart(3, "0")}`;
      const tgProxyUrl = tgChannel.proxyUrl || "";
      const chunkInfo = await uploadChunkToTelegramWithRetry(
        tgBotToken,
        tgChatId,
        tgProxyUrl,
        chunkBlob,
        chunkFileName,
        i2,
        totalChunks
      );
      if (!chunkInfo) {
        throw new Error(`Failed to upload chunk ${i2 + 1}/${totalChunks} after retries`);
      }
      if (!chunkInfo.file_id || !chunkInfo.file_size) {
        throw new Error(`Invalid chunk info for chunk ${i2 + 1}/${totalChunks}`);
      }
      chunks.push({
        index: i2,
        fileId: chunkInfo.file_id,
        size: chunkInfo.file_size,
        fileName: chunkFileName
      });
      uploadedChunks.push(chunkInfo.file_id);
      if (i2 > 0 && i2 % 10 === 0) {
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
    }
    metadata.Channel = "TelegramNew";
    metadata.ChannelName = tgChannel.name;
    metadata.TgChatId = tgChatId;
    metadata.TgBotToken = tgBotToken;
    metadata.TgProxyUrl = tgChannel.proxyUrl || "";
    metadata.IsChunked = true;
    metadata.TotalChunks = totalChunks;
    metadata.FileSize = (fileSize / 1024 / 1024).toFixed(2);
    const chunksData = JSON.stringify(chunks);
    if (chunks.length !== totalChunks) {
      throw new Error(`Chunk count mismatch: expected ${totalChunks}, got ${chunks.length}`);
    }
    await db.put(fullId, chunksData, { metadata });
    waitUntil(endUpload(context, fullId, metadata));
    return createResponse(
      JSON.stringify([{ "src": returnLink }]),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    return createResponse(`Telegram Channel Error: Large file upload failed - ${error.message}`, { status: 500 });
  }
}
__name(uploadLargeFileToTelegram, "uploadLargeFileToTelegram");
async function uploadChunkToTelegramWithRetry(tgBotToken, tgChatId, tgProxyUrl, chunkBlob, chunkFileName, chunkIndex, totalChunks, maxRetries = 2) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const tgAPI = new TelegramAPI(tgBotToken, tgProxyUrl);
      const caption = `Part ${chunkIndex + 1}/${totalChunks}`;
      const response = await tgAPI.sendFile(chunkBlob, tgChatId, "sendDocument", "document", caption, chunkFileName);
      if (!response.ok) {
        throw new Error(response.description || "Telegram API error");
      }
      const fileInfo = tgAPI.getFileInfo(response);
      if (!fileInfo) {
        throw new Error("Failed to extract file info from response");
      }
      return fileInfo;
    } catch (error) {
      console.warn(`Chunk ${chunkIndex} upload attempt ${attempt + 1} failed:`, error.message);
      if (attempt === maxRetries - 1) {
        return null;
      }
      await new Promise((resolve) => setTimeout(resolve, 500 * (attempt + 1)));
    }
  }
  return null;
}
__name(uploadChunkToTelegramWithRetry, "uploadChunkToTelegramWithRetry");

// functions/upload/chunkMerge.js
async function handleChunkMerge(context) {
  const { request, env, url, waitUntil } = context;
  const db = getDatabase(env);
  const formdata = await request.formData();
  context.formdata = formdata;
  let uploadId, totalChunks, originalFileName, originalFileType, uploadChannel;
  try {
    uploadId = formdata.get("uploadId");
    totalChunks = parseInt(formdata.get("totalChunks"));
    originalFileName = formdata.get("originalFileName");
    originalFileType = formdata.get("originalFileType");
    if (!uploadId || !totalChunks || !originalFileName) {
      return createResponse("Error: Missing merge parameters", { status: 400 });
    }
    const sessionKey = `upload_session_${uploadId}`;
    const sessionData = await db.get(sessionKey);
    if (!sessionData) {
      return createResponse("Error: Invalid or expired upload session", { status: 400 });
    }
    const sessionInfo = JSON.parse(sessionData);
    if (sessionInfo.originalFileName !== originalFileName || sessionInfo.totalChunks !== totalChunks) {
      return createResponse("Error: Session parameters mismatch", { status: 400 });
    }
    if (Date.now() > sessionInfo.expiresAt) {
      return createResponse("Error: Upload session expired", { status: 410 });
    }
    uploadChannel = url.searchParams.get("uploadChannel") || sessionInfo.uploadChannel || "telegram";
    const channelName = url.searchParams.get("channelName") || sessionInfo.channelName || "";
    context.specifiedChannelName = channelName;
    const chunkStatuses = await checkChunkUploadStatuses(env, uploadId, totalChunks);
    const initialStatusSummary = chunkStatuses.reduce((acc, chunk) => {
      acc[chunk.status] = (acc[chunk.status] || 0) + 1;
      return acc;
    }, {});
    console.log(`Initial chunk status summary: ${JSON.stringify(initialStatusSummary)}`);
    return await startMerge(context, uploadId, totalChunks, originalFileName, originalFileType, uploadChannel);
  } catch (error) {
    if (uploadChannel === "cfr2" || uploadChannel === "s3") {
      waitUntil(cleanupFailedMultipartUploads(context, uploadId, uploadChannel));
    }
    waitUntil(cleanupChunkData(env, uploadId, totalChunks));
    waitUntil(cleanupUploadSession(env, uploadId));
    return createResponse(`Error: Failed to merge chunks - ${error.message}`, { status: 500 });
  }
}
__name(handleChunkMerge, "handleChunkMerge");
async function startMerge(context, uploadId, totalChunks, originalFileName, originalFileType, uploadChannel) {
  const { env } = context;
  try {
    const mergeStatus = {
      uploadId,
      status: "processing",
      progress: 0,
      totalChunks,
      originalFileName,
      originalFileType,
      uploadChannel,
      createdAt: Date.now(),
      message: "Starting merge process..."
    };
    console.log(`Merge status: ${JSON.stringify(mergeStatus)}`);
    const result = await handleChannelBasedMerge(context, uploadId, totalChunks, originalFileName, originalFileType, uploadChannel);
    if (result.success) {
      await cleanupChunkData(env, uploadId, totalChunks);
      await cleanupUploadSession(env, uploadId);
      return createResponse(JSON.stringify(result.result), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else {
      throw new Error(result.error || "Merge failed");
    }
  } catch (error) {
    if (uploadChannel === "cfr2" || uploadChannel === "s3") {
      await cleanupFailedMultipartUploads(context, uploadId, uploadChannel);
    }
    await cleanupChunkData(env, uploadId, totalChunks);
    await cleanupUploadSession(env, uploadId);
    return createResponse(`Error: Failed to merge chunks - ${error.message}`, { status: 500 });
  }
}
__name(startMerge, "startMerge");
async function handleChannelBasedMerge(context, uploadId, totalChunks, originalFileName, originalFileType, uploadChannel) {
  const { request, env, url } = context;
  try {
    const uploadIp = getUploadIp(request);
    const normalizedFolder = sanitizeUploadFolder(url.searchParams.get("uploadFolder") || "");
    const metadata = {
      FileName: originalFileName,
      FileType: originalFileType,
      FileSize: "0",
      // 会在最终合并后更新
      UploadIP: uploadIp,
      UploadAddress: await getIPAddress(uploadIp),
      ListType: "None",
      TimeStamp: Date.now(),
      Label: "None",
      Directory: normalizedFolder === "" ? "" : normalizedFolder + "/",
      Tags: []
    };
    const chunkStatuses = await checkChunkUploadStatuses(env, uploadId, totalChunks);
    let completedChunks = chunkStatuses.filter((chunk) => chunk.status === "completed");
    let uploadingChunks = chunkStatuses.filter(
      (chunk) => chunk.status === "uploading" || chunk.status === "retrying"
    );
    let failedChunks = chunkStatuses.filter(
      (chunk) => chunk.status === "failed" || chunk.status === "timeout"
    );
    const statusSummary = chunkStatuses.reduce((acc, chunk) => {
      acc[chunk.status] = (acc[chunk.status] || 0) + 1;
      return acc;
    }, {});
    console.log(`Chunk status summary: ${JSON.stringify(statusSummary)}`);
    if (failedChunks.length > 0) {
      console.log(`Retrying ${failedChunks.length} failed chunks...`);
      await retryFailedChunks(context, failedChunks, uploadChannel);
    }
    const updatedStatuses = await checkChunkUploadStatuses(env, uploadId, totalChunks);
    completedChunks = updatedStatuses.filter((chunk) => chunk.status === "completed");
    if (completedChunks.length !== totalChunks) {
      const finalStatuses = await checkChunkUploadStatuses(env, uploadId, totalChunks);
      const finalStatusSummary = finalStatuses.reduce((acc, chunk) => {
        acc[chunk.status] = (acc[chunk.status] || 0) + 1;
        return acc;
      }, {});
      throw new Error(`Only ${completedChunks.length}/${totalChunks} chunks completed successfully. Final status: ${JSON.stringify(finalStatusSummary)}`);
    }
    let result;
    if (uploadChannel === "cfr2") {
      result = await mergeR2ChunksInfo(context, uploadId, completedChunks, metadata);
    } else if (uploadChannel === "s3") {
      result = await mergeS3ChunksInfo(context, uploadId, completedChunks, metadata);
    } else if (uploadChannel === "telegram") {
      result = await mergeTelegramChunksInfo(context, uploadId, completedChunks, metadata);
    } else if (uploadChannel === "discord") {
      result = await mergeDiscordChunksInfo(context, uploadId, completedChunks, metadata);
    } else {
      throw new Error(`Unsupported upload channel: ${uploadChannel}`);
    }
    return result;
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}
__name(handleChannelBasedMerge, "handleChannelBasedMerge");
async function mergeR2ChunksInfo(context, uploadId, completedChunks, metadata) {
  const { env, waitUntil, url, specifiedChannelName } = context;
  const db = getDatabase(env);
  try {
    const R2DataBase = env.img_r2;
    const multipartKey = `multipart_${uploadId}`;
    const multipartInfoData = await db.get(multipartKey);
    if (!multipartInfoData) {
      throw new Error("Multipart upload info not found");
    }
    const multipartInfo = JSON.parse(multipartInfoData);
    const sortedChunks = completedChunks.sort((a2, b2) => a2.index - b2.index);
    const parts = [];
    for (const chunk of sortedChunks) {
      const part = {
        etag: chunk.uploadResult.etag,
        partNumber: chunk.uploadResult.partNumber
      };
      parts.push(part);
    }
    const multipartUpload = R2DataBase.resumeMultipartUpload(multipartInfo.key, multipartInfo.uploadId);
    await multipartUpload.complete(parts);
    const totalSize = completedChunks.reduce((sum, chunk) => sum + chunk.uploadResult.size, 0);
    const finalFileId = multipartInfo.key;
    metadata.Channel = "CloudflareR2";
    const r2Settings = context.uploadConfig.cfr2;
    let r2ChannelName = "R2_env";
    if (specifiedChannelName) {
      const r2Channel = r2Settings.channels?.find((ch2) => ch2.name === specifiedChannelName);
      if (r2Channel) {
        r2ChannelName = r2Channel.name;
      }
    } else if (r2Settings.channels?.[0]?.name) {
      r2ChannelName = r2Settings.channels[0].name;
    }
    metadata.ChannelName = r2ChannelName;
    metadata.FileSize = (totalSize / 1024 / 1024).toFixed(2);
    metadata.FileSizeBytes = totalSize;
    await db.delete(multipartKey);
    await db.put(finalFileId, "", { metadata });
    waitUntil(endUpload(context, finalFileId, metadata));
    const returnFormat = url.searchParams.get("returnFormat") || "default";
    let updatedReturnLink = "";
    if (returnFormat === "full") {
      updatedReturnLink = `${url.origin}/file/${finalFileId}`;
    } else {
      updatedReturnLink = `/file/${finalFileId}`;
    }
    return {
      success: true,
      result: [{ "src": updatedReturnLink }]
    };
  } catch (error) {
    throw new Error(`R2 merge failed: ${error.message}`);
  }
}
__name(mergeR2ChunksInfo, "mergeR2ChunksInfo");
async function mergeS3ChunksInfo(context, uploadId, completedChunks, metadata) {
  const { env, waitUntil, uploadConfig, url, specifiedChannelName } = context;
  const db = getDatabase(env);
  try {
    const s3Settings = uploadConfig.s3;
    const s3Channels = s3Settings.channels;
    let s3Channel;
    if (specifiedChannelName) {
      s3Channel = s3Channels.find((ch2) => ch2.name === specifiedChannelName);
    }
    if (!s3Channel) {
      s3Channel = selectConsistentChannel(s3Channels, uploadId, s3Settings.loadBalance.enabled);
    }
    console.log(`Merging S3 chunks for uploadId: ${uploadId}, selected channel: ${s3Channel.name || "default"}`);
    const { endpoint, pathStyle, accessKeyId, secretAccessKey, bucketName, region } = s3Channel;
    const s3Client = new S3Client({
      region: region || "auto",
      endpoint,
      credentials: { accessKeyId, secretAccessKey },
      forcePathStyle: pathStyle
    });
    const multipartKey = `multipart_${uploadId}`;
    const multipartInfoData = await db.get(multipartKey);
    if (!multipartInfoData) {
      throw new Error("Multipart upload info not found");
    }
    const multipartInfo = JSON.parse(multipartInfoData);
    const sortedChunks = completedChunks.sort((a2, b2) => a2.index - b2.index);
    const parts = [];
    for (const chunk of sortedChunks) {
      const part = {
        ETag: chunk.uploadResult.etag,
        PartNumber: chunk.uploadResult.partNumber
      };
      parts.push(part);
    }
    await s3Client.send(new CompleteMultipartUploadCommand({
      Bucket: bucketName,
      Key: multipartInfo.key,
      UploadId: multipartInfo.uploadId,
      MultipartUpload: { Parts: parts }
    }));
    const totalSize = completedChunks.reduce((sum, chunk) => sum + chunk.uploadResult.size, 0);
    const finalFileId = multipartInfo.key;
    metadata.Channel = "S3";
    metadata.ChannelName = s3Channel.name;
    metadata.FileSize = (totalSize / 1024 / 1024).toFixed(2);
    metadata.FileSizeBytes = totalSize;
    const s3ServerDomain = endpoint.replace(/https?:\/\//, "");
    if (pathStyle) {
      metadata.S3Location = `https://${s3ServerDomain}/${bucketName}/${finalFileId}`;
    } else {
      metadata.S3Location = `https://${bucketName}.${s3ServerDomain}/${finalFileId}`;
    }
    metadata.S3Endpoint = endpoint;
    metadata.S3PathStyle = pathStyle;
    metadata.S3AccessKeyId = accessKeyId;
    metadata.S3SecretAccessKey = secretAccessKey;
    metadata.S3Region = region || "auto";
    metadata.S3BucketName = bucketName;
    metadata.S3FileKey = finalFileId;
    await db.delete(multipartKey);
    await db.put(finalFileId, "", { metadata });
    waitUntil(endUpload(context, finalFileId, metadata));
    const returnFormat = url.searchParams.get("returnFormat") || "default";
    let updatedReturnLink = "";
    if (returnFormat === "full") {
      updatedReturnLink = `${url.origin}/file/${finalFileId}`;
    } else {
      updatedReturnLink = `/file/${finalFileId}`;
    }
    return {
      success: true,
      result: [{ src: updatedReturnLink }]
    };
  } catch (error) {
    throw new Error(`S3 merge failed: ${error.message}`);
  }
}
__name(mergeS3ChunksInfo, "mergeS3ChunksInfo");
async function mergeTelegramChunksInfo(context, uploadId, completedChunks, metadata) {
  const { env, waitUntil, uploadConfig, url, specifiedChannelName } = context;
  const db = getDatabase(env);
  try {
    const tgSettings = uploadConfig.telegram;
    const tgChannels = tgSettings.channels;
    let tgChannel;
    if (specifiedChannelName) {
      tgChannel = tgChannels.find((ch2) => ch2.name === specifiedChannelName);
    }
    if (!tgChannel) {
      tgChannel = selectConsistentChannel(tgChannels, uploadId, tgSettings.loadBalance.enabled);
    }
    console.log(`Merging Telegram chunks for uploadId: ${uploadId}, selected channel: ${tgChannel.name || "default"}`);
    const tgBotToken = tgChannel.botToken;
    const tgChatId = tgChannel.chatId;
    const sortedChunks = completedChunks.sort((a2, b2) => a2.index - b2.index);
    const totalSize = sortedChunks.reduce((sum, chunk) => sum + chunk.uploadResult.size, 0);
    const chunks = sortedChunks.map((chunk) => ({
      index: chunk.index,
      fileId: chunk.uploadResult.fileId,
      size: chunk.uploadResult.size,
      fileName: chunk.uploadResult.fileName
    }));
    const finalFileId = await buildUniqueFileId(context, metadata.FileName, metadata.FileType);
    metadata.Channel = "TelegramNew";
    metadata.ChannelName = tgChannel.name;
    metadata.TgChatId = tgChatId;
    metadata.TgBotToken = tgBotToken;
    metadata.TgProxyUrl = tgChannel.proxyUrl || "";
    metadata.IsChunked = true;
    metadata.TotalChunks = completedChunks.length;
    metadata.FileSize = (totalSize / 1024 / 1024).toFixed(2);
    metadata.FileSizeBytes = totalSize;
    const chunksData = JSON.stringify(chunks);
    await db.put(finalFileId, chunksData, { metadata });
    waitUntil(endUpload(context, finalFileId, metadata));
    const returnFormat = url.searchParams.get("returnFormat") || "default";
    let updatedReturnLink = "";
    if (returnFormat === "full") {
      updatedReturnLink = `${url.origin}/file/${finalFileId}`;
    } else {
      updatedReturnLink = `/file/${finalFileId}`;
    }
    return {
      success: true,
      result: [{ "src": updatedReturnLink }]
    };
  } catch (error) {
    throw new Error(`Telegram merge failed: ${error.message}`);
  }
}
__name(mergeTelegramChunksInfo, "mergeTelegramChunksInfo");
async function mergeDiscordChunksInfo(context, uploadId, completedChunks, metadata) {
  const { env, waitUntil, uploadConfig, url, specifiedChannelName } = context;
  const db = getDatabase(env);
  try {
    const discordSettings = uploadConfig.discord;
    const discordChannels = discordSettings.channels;
    let discordChannel;
    if (specifiedChannelName) {
      discordChannel = discordChannels.find((ch2) => ch2.name === specifiedChannelName);
    }
    if (!discordChannel) {
      discordChannel = selectConsistentChannel(discordChannels, uploadId, discordSettings.loadBalance?.enabled);
    }
    console.log(`Merging Discord chunks for uploadId: ${uploadId}, selected channel: ${discordChannel.name || "default"}`);
    const botToken = discordChannel.botToken;
    const channelId = discordChannel.channelId;
    const sortedChunks = completedChunks.sort((a2, b2) => a2.index - b2.index);
    const totalSize = sortedChunks.reduce((sum, chunk) => sum + chunk.uploadResult.size, 0);
    const chunks = sortedChunks.map((chunk) => ({
      index: chunk.index,
      messageId: chunk.uploadResult.messageId,
      // 注意：不存储 attachmentId 和 url，它们会在约24小时后过期
      size: chunk.uploadResult.size,
      fileName: chunk.uploadResult.fileName
    }));
    const finalFileId = await buildUniqueFileId(context, metadata.FileName, metadata.FileType);
    metadata.Channel = "Discord";
    metadata.ChannelName = discordChannel.name;
    metadata.DiscordChannelId = channelId;
    metadata.DiscordBotToken = botToken;
    metadata.DiscordProxyUrl = discordChannel.proxyUrl || "";
    metadata.IsChunked = true;
    metadata.TotalChunks = completedChunks.length;
    metadata.FileSize = (totalSize / 1024 / 1024).toFixed(2);
    metadata.FileSizeBytes = totalSize;
    const chunksData = JSON.stringify(chunks);
    await db.put(finalFileId, chunksData, { metadata });
    waitUntil(endUpload(context, finalFileId, metadata));
    const returnFormat = url.searchParams.get("returnFormat") || "default";
    let updatedReturnLink = "";
    if (returnFormat === "full") {
      updatedReturnLink = `${url.origin}/file/${finalFileId}`;
    } else {
      updatedReturnLink = `/file/${finalFileId}`;
    }
    return {
      success: true,
      result: [{ "src": updatedReturnLink }]
    };
  } catch (error) {
    throw new Error(`Discord merge failed: ${error.message}`);
  }
}
__name(mergeDiscordChunksInfo, "mergeDiscordChunksInfo");

// functions/utils/huggingfaceAPI.js
var HuggingFaceAPI = class {
  static {
    __name(this, "HuggingFaceAPI");
  }
  constructor(token, repo, isPrivate = false) {
    this.token = token;
    this.repo = repo;
    this.isPrivate = isPrivate;
    this.baseURL = "https://huggingface.co";
  }
  /**
   * 计算文件的 SHA256 哈希（仅在未提供预计算哈希时使用）
   * @param {Blob} blob 
   * @returns {Promise<string>} hex string
   */
  async sha256(blob) {
    const buffer = await blob.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b2) => b2.toString(16).padStart(2, "0")).join("");
  }
  /**
   * 检查仓库是否存在
   */
  async repoExists() {
    try {
      const response = await fetch(`${this.baseURL}/api/datasets/${this.repo}`, {
        headers: { "Authorization": `Bearer ${this.token}` }
      });
      return response.ok;
    } catch (error) {
      console.error("Error checking repo:", error.message);
      return false;
    }
  }
  /**
   * 创建仓库（如果不存在）
   */
  async createRepoIfNotExists() {
    try {
      if (await this.repoExists()) {
        console.log("Repository exists:", this.repo);
        return true;
      }
      console.log("Creating repository:", this.repo);
      const response = await fetch(`${this.baseURL}/api/repos/create`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${this.token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.repo.split("/")[1],
          type: "dataset",
          private: this.isPrivate
        })
      });
      if (response.ok || response.status === 409) {
        console.log("Repository ready");
        return true;
      }
      const errorText = await response.text();
      throw new Error(`Failed to create repo: ${response.status} - ${errorText}`);
    } catch (error) {
      console.error("Error creating repo:", error.message);
      return false;
    }
  }
  /**
   * 步骤1: Preupload - 检查文件是否需要 LFS
   */
  async preupload(filePath, fileSize, fileSample) {
    const url = `${this.baseURL}/api/datasets/${this.repo}/preupload/main`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${this.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        files: [{
          path: filePath,
          size: fileSize,
          sample: fileSample
        }]
      })
    });
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Preupload failed: ${response.status} - ${error}`);
    }
    return await response.json();
  }
  /**
   * 步骤2: LFS Batch - 获取上传 URL
   */
  async lfsBatch(oid, fileSize) {
    const url = `${this.baseURL}/datasets/${this.repo}.git/info/lfs/objects/batch`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${this.token}`,
        "Accept": "application/vnd.git-lfs+json",
        "Content-Type": "application/vnd.git-lfs+json"
      },
      body: JSON.stringify({
        operation: "upload",
        transfers: ["basic", "multipart"],
        hash_algo: "sha_256",
        ref: { name: "main" },
        objects: [{ oid, size: fileSize }]
      })
    });
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`LFS batch failed: ${response.status} - ${error}`);
    }
    return await response.json();
  }
  /**
   * 步骤3: 上传文件到 LFS 存储
   * @param {object} uploadAction - 上传动作信息
   * @param {File|Blob} file - 文件
   * @param {string} oid - 文件的 SHA256 哈希
   */
  async uploadToLFS(uploadAction, file, oid) {
    const { href, header } = uploadAction;
    if (header?.chunk_size) {
      return await this.uploadMultipart(uploadAction, file, oid);
    }
    console.log("Uploading to LFS (basic):", href);
    const response = await fetch(href, {
      method: "PUT",
      headers: header || {},
      body: file
    });
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`LFS upload failed: ${response.status} - ${error}`);
    }
    return true;
  }
  /**
   * 分片上传（大文件）
   * @param {object} uploadAction - 上传动作信息
   * @param {File|Blob} file - 文件
   * @param {string} oid - 文件的 SHA256 哈希
   */
  async uploadMultipart(uploadAction, file, oid) {
    const { href: completionUrl, header } = uploadAction;
    const chunkSize = parseInt(header.chunk_size);
    const parts = Object.keys(header).filter((key) => /^[0-9]+$/.test(key));
    console.log(`Multipart upload: ${parts.length} parts, chunk size: ${chunkSize}`);
    const completeParts = [];
    for (const part of parts) {
      const index = parseInt(part) - 1;
      const start = index * chunkSize;
      const end = Math.min(start + chunkSize, file.size);
      const chunk = file.slice(start, end);
      console.log(`Uploading part ${part}/${parts.length}`);
      const response = await fetch(header[part], {
        method: "PUT",
        body: chunk
      });
      if (!response.ok) {
        throw new Error(`Failed to upload part ${part}: ${response.status}`);
      }
      const etag = response.headers.get("ETag");
      if (!etag) {
        throw new Error(`No ETag for part ${part}`);
      }
      completeParts.push({ partNumber: parseInt(part), etag });
    }
    console.log("Completing multipart upload...");
    const completeResponse = await fetch(completionUrl, {
      method: "POST",
      headers: {
        "Accept": "application/vnd.git-lfs+json",
        "Content-Type": "application/vnd.git-lfs+json"
      },
      body: JSON.stringify({
        oid,
        parts: completeParts
      })
    });
    if (!completeResponse.ok) {
      const error = await completeResponse.text();
      throw new Error(`Multipart complete failed: ${completeResponse.status} - ${error}`);
    }
    return true;
  }
  /**
   * 步骤4: 提交 LFS 文件引用
   */
  async commitLfsFile(filePath, oid, fileSize, commitMessage) {
    const url = `${this.baseURL}/api/datasets/${this.repo}/commit/main`;
    const body = [
      JSON.stringify({
        key: "header",
        value: { summary: commitMessage }
      }),
      JSON.stringify({
        key: "lfsFile",
        value: {
          path: filePath,
          algo: "sha256",
          size: fileSize,
          oid
        }
      })
    ].join("\n");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${this.token}`,
        "Content-Type": "application/x-ndjson"
      },
      body
    });
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Commit failed: ${response.status} - ${error}`);
    }
    return await response.json();
  }
  /**
   * 获取 LFS 上传信息（用于前端直传大文件）
   * 返回上传 URL 和必要的信息，让前端直接上传到 S3
   * @param {number} fileSize - 文件大小
   * @param {string} filePath - 存储路径
   * @param {string} sha256 - 文件的 SHA256 哈希
   * @param {string} fileSample - 文件前512字节的 base64
   */
  async getLfsUploadInfo(fileSize, filePath, sha256, fileSample) {
    if (!await this.createRepoIfNotExists()) {
      throw new Error("Failed to create or access repository");
    }
    console.log("Preupload check for direct upload...");
    const preuploadResult = await this.preupload(filePath, fileSize, fileSample);
    console.log("Preupload result:", JSON.stringify(preuploadResult));
    const fileInfo = preuploadResult.files?.[0];
    const needsLfs = fileInfo?.uploadMode === "lfs";
    if (!needsLfs) {
      return { needsLfs: false };
    }
    console.log("LFS batch request for direct upload...");
    const batchResult = await this.lfsBatch(sha256, fileSize);
    console.log("LFS batch result:", JSON.stringify(batchResult));
    const obj = batchResult.objects?.[0];
    if (obj?.error) {
      throw new Error(`LFS error: ${obj.error.message}`);
    }
    if (!obj?.actions?.upload) {
      return {
        needsLfs: true,
        alreadyExists: true,
        oid: sha256,
        filePath
      };
    }
    return {
      needsLfs: true,
      alreadyExists: false,
      oid: sha256,
      filePath,
      uploadAction: obj.actions.upload
    };
  }
  /**
   * 上传文件（完整流程）- 用于小文件或后端代理上传
   * @param {File|Blob} file - 要上传的文件
   * @param {string} filePath - 存储路径
   * @param {string} commitMessage - 提交信息
   * @param {string} precomputedSha256 - 前端预计算的 SHA256（可选，传入可避免后端计算）
   */
  async uploadFile(file, filePath, commitMessage = "Upload file", precomputedSha256 = null) {
    try {
      if (!await this.createRepoIfNotExists()) {
        throw new Error("Failed to create or access repository");
      }
      console.log("=== HuggingFace LFS Upload ===");
      console.log("Repo:", this.repo);
      console.log("Path:", filePath);
      console.log("Size:", file.size);
      let oid;
      if (precomputedSha256) {
        console.log("Using precomputed SHA256:", precomputedSha256);
        oid = precomputedSha256;
      } else {
        console.log("Computing SHA256 on server (may timeout for large files)...");
        oid = await this.sha256(file);
        console.log("SHA256:", oid);
      }
      const sampleBytes = new Uint8Array(await file.slice(0, 512).arrayBuffer());
      const sample = btoa(String.fromCharCode(...sampleBytes));
      console.log("Preupload check...");
      const preuploadResult = await this.preupload(filePath, file.size, sample);
      console.log("Preupload result:", JSON.stringify(preuploadResult));
      const fileInfo = preuploadResult.files?.[0];
      const needsLfs = fileInfo?.uploadMode === "lfs";
      console.log("Needs LFS:", needsLfs);
      if (needsLfs) {
        console.log("LFS batch request...");
        const batchResult = await this.lfsBatch(oid, file.size);
        console.log("LFS batch result:", JSON.stringify(batchResult));
        const obj = batchResult.objects?.[0];
        if (obj?.error) {
          throw new Error(`LFS error: ${obj.error.message}`);
        }
        if (obj?.actions?.upload) {
          console.log("Uploading to LFS storage...");
          await this.uploadToLFS(obj.actions.upload, file, oid);
          console.log("LFS upload complete");
        } else {
          console.log("File already exists in LFS");
        }
        console.log("Committing LFS file...");
        const commitResult = await this.commitLfsFile(filePath, oid, file.size, commitMessage);
        console.log("Commit result:", JSON.stringify(commitResult));
      } else {
        console.log("Direct commit (non-LFS)...");
        await this.commitDirectFile(filePath, file, commitMessage);
      }
      const fileUrl = `${this.baseURL}/datasets/${this.repo}/resolve/main/${filePath}`;
      return {
        success: true,
        filePath,
        fileUrl,
        fileSize: file.size,
        oid
      };
    } catch (error) {
      console.error("HuggingFace upload error:", error.message);
      throw error;
    }
  }
  /**
   * 直接提交文件（非 LFS，用于小文本文件）
   */
  async commitDirectFile(filePath, file, commitMessage) {
    const url = `${this.baseURL}/api/datasets/${this.repo}/commit/main`;
    const bytes = new Uint8Array(await file.arrayBuffer());
    const chunkSize = 4096;
    const parts = [];
    for (let i2 = 0; i2 < bytes.length; i2 += chunkSize) {
      const chunk = bytes.subarray(i2, Math.min(i2 + chunkSize, bytes.length));
      let s2 = "";
      for (let j2 = 0; j2 < chunk.length; j2++) {
        s2 += String.fromCharCode(chunk[j2]);
      }
      parts.push(s2);
    }
    const content = btoa(parts.join(""));
    const body = [
      JSON.stringify({
        key: "header",
        value: { summary: commitMessage }
      }),
      JSON.stringify({
        key: "file",
        value: {
          path: filePath,
          content,
          encoding: "base64"
        }
      })
    ].join("\n");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${this.token}`,
        "Content-Type": "application/x-ndjson"
      },
      body
    });
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Direct commit failed: ${response.status} - ${error}`);
    }
    return await response.json();
  }
  /**
   * 删除文件
   */
  async deleteFile(filePath, commitMessage = "Delete file") {
    const url = `${this.baseURL}/api/datasets/${this.repo}/commit/main`;
    const body = [
      JSON.stringify({
        key: "header",
        value: { summary: commitMessage }
      }),
      JSON.stringify({
        key: "deletedFile",
        value: { path: filePath }
      })
    ].join("\n");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${this.token}`,
        "Content-Type": "application/x-ndjson"
      },
      body
    });
    return response.ok;
  }
  /**
   * 获取文件内容（用于私有仓库代理）
   */
  async getFileContent(filePath) {
    const fileUrl = `${this.baseURL}/datasets/${this.repo}/resolve/main/${filePath}`;
    return await fetch(fileUrl, {
      headers: this.isPrivate ? { "Authorization": `Bearer ${this.token}` } : {}
    });
  }
  /**
   * 获取文件 URL
   */
  getFileURL(filePath) {
    return `${this.baseURL}/datasets/${this.repo}/resolve/main/${filePath}`;
  }
};

// functions/upload/index.js
async function onRequest6(context) {
  const { request, env, params, waitUntil, next, data } = context;
  const url = new URL(request.url);
  context.url = url;
  const securityConfig2 = await fetchSecurityConfig(env);
  const uploadConfig = await fetchUploadConfig(env, context);
  context.securityConfig = securityConfig2;
  context.uploadConfig = uploadConfig;
  const requiredPermission = "upload";
  if (!await userAuthCheck(env, url, request, requiredPermission)) {
    return UnauthorizedResponse("Unauthorized");
  }
  const uploadIp = getUploadIp(request);
  const isBlockedIp = await isBlockedUploadIp(env, uploadIp);
  if (isBlockedIp) {
    return createResponse("Error: Your IP is blocked", { status: 403 });
  }
  const cleanupRequest = url.searchParams.get("cleanup") === "true";
  if (cleanupRequest) {
    const uploadId = url.searchParams.get("uploadId");
    const totalChunks = parseInt(url.searchParams.get("totalChunks")) || 0;
    return await handleCleanupRequest(context, uploadId, totalChunks);
  }
  const initChunked = url.searchParams.get("initChunked") === "true";
  if (initChunked) {
    return await initializeChunkedUpload(context);
  }
  const isChunked = url.searchParams.get("chunked") === "true";
  const isMerge = url.searchParams.get("merge") === "true";
  if (isChunked) {
    if (isMerge) {
      return await handleChunkMerge(context);
    } else {
      return await handleChunkUpload(context);
    }
  }
  return await processFileUpload(context);
}
__name(onRequest6, "onRequest");
async function processFileUpload(context, formdata = null) {
  const { request, url } = context;
  formdata = formdata || await request.formData();
  context.formdata = formdata;
  const urlParamUploadChannel = url.searchParams.get("uploadChannel");
  const urlParamChannelName = url.searchParams.get("channelName");
  const uploadIp = getUploadIp(request);
  const ipAddress = await getIPAddress(uploadIp);
  let uploadFolder = url.searchParams.get("uploadFolder") || "";
  uploadFolder = sanitizeUploadFolder(uploadFolder);
  let uploadChannel = "TelegramNew";
  switch (urlParamUploadChannel) {
    case "telegram":
      uploadChannel = "TelegramNew";
      break;
    case "cfr2":
      uploadChannel = "CloudflareR2";
      break;
    case "s3":
      uploadChannel = "S3";
      break;
    case "discord":
      uploadChannel = "Discord";
      break;
    case "huggingface":
      uploadChannel = "HuggingFace";
      break;
    case "external":
      uploadChannel = "External";
      break;
    default:
      uploadChannel = "TelegramNew";
      break;
  }
  context.specifiedChannelName = urlParamChannelName || null;
  const time = (/* @__PURE__ */ new Date()).getTime();
  const file = formdata.get("file");
  const fileType = file.type;
  let fileName = file.name;
  const fileSizeBytes = file.size;
  const fileSize = (fileSizeBytes / 1024 / 1024).toFixed(2);
  if (fileType === null || fileType === void 0 || fileName === null || fileName === void 0) {
    return createResponse("Error: fileType or fileName is wrong, check the integrity of this file!", { status: 400 });
  }
  let imageDimensions = null;
  if (fileType.startsWith("image/")) {
    try {
      const headerBuffer = await file.slice(0, 65536).arrayBuffer();
      imageDimensions = getImageDimensions(headerBuffer, fileType);
    } catch (error) {
      console.error("Error reading image dimensions:", error);
    }
  }
  if (uploadFolder === "" || uploadFolder === null || uploadFolder === void 0) {
    uploadFolder = fileName.split("/").slice(0, -1).join("/");
    uploadFolder = sanitizeUploadFolder(uploadFolder);
    fileName = fileName.split("/").pop();
  }
  const normalizedFolder = uploadFolder;
  const metadata = {
    FileName: fileName,
    FileType: fileType,
    FileSize: fileSize,
    FileSizeBytes: fileSizeBytes,
    UploadIP: uploadIp,
    UploadAddress: ipAddress,
    ListType: "None",
    TimeStamp: time,
    Label: "None",
    Directory: normalizedFolder === "" ? "" : normalizedFolder + "/",
    Tags: []
  };
  if (imageDimensions) {
    metadata.Width = imageDimensions.width;
    metadata.Height = imageDimensions.height;
  }
  const fileExt = resolveFileExt(fileName, fileType);
  const fullId = await buildUniqueFileId(context, fileName, fileType);
  const returnFormat = url.searchParams.get("returnFormat") || "default";
  let returnLink = "";
  if (returnFormat === "full") {
    returnLink = `${url.origin}/file/${fullId}`;
  } else {
    returnLink = `/file/${fullId}`;
  }
  const autoRetry = url.searchParams.get("autoRetry") === "false" ? false : true;
  let err = "";
  if (uploadChannel === "CloudflareR2") {
    const res2 = await uploadFileToCloudflareR2(context, fullId, metadata, returnLink);
    if (res2.status === 200 || !autoRetry) {
      return res2;
    } else {
      err = await res2.text();
    }
  } else if (uploadChannel === "S3") {
    const res2 = await uploadFileToS3(context, fullId, metadata, returnLink);
    if (res2.status === 200 || !autoRetry) {
      return res2;
    } else {
      err = await res2.text();
    }
  } else if (uploadChannel === "Discord") {
    const res2 = await uploadFileToDiscord(context, fullId, metadata, returnLink);
    if (res2.status === 200 || !autoRetry) {
      return res2;
    } else {
      err = await res2.text();
    }
  } else if (uploadChannel === "HuggingFace") {
    const res2 = await uploadFileToHuggingFace(context, fullId, metadata, returnLink);
    if (res2.status === 200 || !autoRetry) {
      return res2;
    } else {
      err = await res2.text();
    }
  } else if (uploadChannel === "External") {
    const res2 = await uploadFileToExternal(context, fullId, metadata, returnLink);
    return res2;
  } else {
    const res2 = await uploadFileToTelegram(context, fullId, metadata, fileExt, fileName, fileType, returnLink);
    if (res2.status === 200 || !autoRetry) {
      return res2;
    } else {
      err = await res2.text();
    }
  }
  const res = await tryRetry(err, context, uploadChannel, fullId, metadata, fileExt, fileName, fileType, returnLink);
  return res;
}
__name(processFileUpload, "processFileUpload");
async function uploadFileToCloudflareR2(context, fullId, metadata, returnLink) {
  const { env, waitUntil, uploadConfig, formdata, specifiedChannelName } = context;
  const db = getDatabase(env);
  if (typeof env.img_r2 == "undefined" || env.img_r2 == null || env.img_r2 == "") {
    return createResponse("Error: Please configure R2 database", { status: 500 });
  }
  const r2Settings = uploadConfig.cfr2;
  if (!r2Settings.channels || r2Settings.channels.length === 0) {
    return createResponse("Error: No R2 channel provided", { status: 400 });
  }
  let r2Channel;
  if (specifiedChannelName) {
    r2Channel = r2Settings.channels.find((ch2) => ch2.name === specifiedChannelName);
  }
  if (!r2Channel) {
    r2Channel = r2Settings.channels[0];
  }
  const R2DataBase = env.img_r2;
  await R2DataBase.put(fullId, formdata.get("file"));
  metadata.Channel = "CloudflareR2";
  metadata.ChannelName = r2Channel.name || "R2_env";
  const R2PublicUrl = r2Channel.publicUrl;
  let moderateUrl = `${R2PublicUrl}/${fullId}`;
  metadata.Label = await moderateContent(env, moderateUrl);
  try {
    await db.put(fullId, "", {
      metadata
    });
  } catch (error) {
    return createResponse("Error: Failed to write to database", { status: 500 });
  }
  waitUntil(endUpload(context, fullId, metadata));
  return createResponse(
    JSON.stringify([{ "src": `${returnLink}` }]),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
__name(uploadFileToCloudflareR2, "uploadFileToCloudflareR2");
async function uploadFileToS3(context, fullId, metadata, returnLink) {
  const { env, waitUntil, uploadConfig, securityConfig: securityConfig2, url, formdata, specifiedChannelName } = context;
  const db = getDatabase(env);
  const uploadModerate = securityConfig2.upload.moderate;
  const s3Settings = uploadConfig.s3;
  const s3Channels = s3Settings.channels;
  let s3Channel;
  if (specifiedChannelName) {
    s3Channel = s3Channels.find((ch2) => ch2.name === specifiedChannelName);
  }
  if (!s3Channel) {
    s3Channel = s3Settings.loadBalance.enabled ? s3Channels[Math.floor(Math.random() * s3Channels.length)] : s3Channels[0];
  }
  if (!s3Channel) {
    return createResponse("Error: No S3 channel provided", { status: 400 });
  }
  const { endpoint, pathStyle, accessKeyId, secretAccessKey, bucketName, region, cdnDomain } = s3Channel;
  const s3Client = new S3Client({
    region: region || "auto",
    // R2 可用 "auto"
    endpoint,
    // 自定义 S3 端点
    credentials: {
      accessKeyId,
      secretAccessKey
    },
    forcePathStyle: pathStyle
    // 是否启用路径风格
  });
  const file = formdata.get("file");
  if (!file) return createResponse("Error: No file provided", { status: 400 });
  const arrayBuffer = await file.arrayBuffer();
  const uint8Array = new Uint8Array(arrayBuffer);
  const s3FileName = fullId;
  try {
    const putObjectParams = {
      Bucket: bucketName,
      Key: s3FileName,
      Body: uint8Array,
      // 直接使用 Blob
      ContentType: file.type
    };
    await s3Client.send(new PutObjectCommand(putObjectParams));
    metadata.Channel = "S3";
    metadata.ChannelName = s3Channel.name;
    const s3ServerDomain = endpoint.replace(/https?:\/\//, "");
    if (pathStyle) {
      metadata.S3Location = `https://${s3ServerDomain}/${bucketName}/${s3FileName}`;
    } else {
      metadata.S3Location = `https://${bucketName}.${s3ServerDomain}/${s3FileName}`;
    }
    metadata.S3Endpoint = endpoint;
    metadata.S3PathStyle = pathStyle;
    metadata.S3AccessKeyId = accessKeyId;
    metadata.S3SecretAccessKey = secretAccessKey;
    metadata.S3Region = region || "auto";
    metadata.S3BucketName = bucketName;
    metadata.S3FileKey = s3FileName;
    if (cdnDomain) {
      metadata.S3CdnFileUrl = `${cdnDomain.replace(/\/$/, "")}/${s3FileName}`;
    }
    if (uploadModerate && uploadModerate.enabled) {
      try {
        await db.put(fullId, "", { metadata });
      } catch {
        return createResponse("Error: Failed to write to KV database", { status: 500 });
      }
      const moderateUrl = `https://${url.hostname}/file/${fullId}`;
      await purgeCDNCache(env, moderateUrl, url);
      metadata.Label = await moderateContent(env, moderateUrl);
    }
    try {
      await db.put(fullId, "", { metadata });
    } catch {
      return createResponse("Error: Failed to write to database", { status: 500 });
    }
    waitUntil(endUpload(context, fullId, metadata));
    return createResponse(JSON.stringify([{ src: returnLink }]), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return createResponse(`Error: Failed to upload to S3 - ${error.message}`, { status: 500 });
  }
}
__name(uploadFileToS3, "uploadFileToS3");
async function uploadFileToTelegram(context, fullId, metadata, fileExt, fileName, fileType, returnLink) {
  const { env, waitUntil, uploadConfig, url, formdata, specifiedChannelName } = context;
  const db = getDatabase(env);
  const tgSettings = uploadConfig.telegram;
  const tgChannels = tgSettings.channels;
  let tgChannel;
  if (specifiedChannelName) {
    tgChannel = tgChannels.find((ch2) => ch2.name === specifiedChannelName);
  }
  if (!tgChannel) {
    tgChannel = tgSettings.loadBalance.enabled ? tgChannels[Math.floor(Math.random() * tgChannels.length)] : tgChannels[0];
  }
  if (!tgChannel) {
    return createResponse("Error: No Telegram channel provided", { status: 400 });
  }
  const tgBotToken = tgChannel.botToken;
  const tgChatId = tgChannel.chatId;
  const tgProxyUrl = tgChannel.proxyUrl || "";
  const file = formdata.get("file");
  const fileSize = file.size;
  const telegramAPI = new TelegramAPI(tgBotToken, tgProxyUrl);
  const CHUNK_SIZE = 16 * 1024 * 1024;
  if (fileSize > CHUNK_SIZE) {
    return await uploadLargeFileToTelegram(context, file, fullId, metadata, fileName, fileType, returnLink, tgBotToken, tgChatId, tgChannel);
  }
  if (fileExt === "gif") {
    const newFileName = fileName.replace(/\.gif$/, ".jpeg");
    const newFile = new File([formdata.get("file")], newFileName, { type: fileType });
    formdata.set("file", newFile);
  } else if (fileExt === "webp") {
    const newFileName = fileName.replace(/\.webp$/, ".jpeg");
    const newFile = new File([formdata.get("file")], newFileName, { type: fileType });
    formdata.set("file", newFile);
  }
  const fileTypeMap = {
    "image/": { "url": "sendPhoto", "type": "photo" },
    "video/": { "url": "sendVideo", "type": "video" },
    "audio/": { "url": "sendAudio", "type": "audio" },
    "application/pdf": { "url": "sendDocument", "type": "document" }
  };
  const defaultType = { "url": "sendDocument", "type": "document" };
  let sendFunction = Object.keys(fileTypeMap).find((key) => fileType.startsWith(key)) ? fileTypeMap[Object.keys(fileTypeMap).find((key) => fileType.startsWith(key))] : defaultType;
  if (fileType === "image/gif" || fileType === "image/webp" || fileExt === "gif" || fileExt === "webp") {
    sendFunction = { "url": "sendAnimation", "type": "animation" };
  } else if (fileType === "image/svg+xml" || fileType === "image/x-icon") {
    sendFunction = { "url": "sendDocument", "type": "document" };
  }
  if (url.searchParams.get("serverCompress") === "false") {
    sendFunction = { "url": "sendDocument", "type": "document" };
  }
  let res = createResponse("upload error, check your environment params about telegram channel!", { status: 400 });
  try {
    const response = await telegramAPI.sendFile(formdata.get("file"), tgChatId, sendFunction.url, sendFunction.type);
    const fileInfo = telegramAPI.getFileInfo(response);
    const filePath = await telegramAPI.getFilePath(fileInfo.file_id);
    const id = fileInfo.file_id;
    metadata.FileSize = (fileInfo.file_size / 1024 / 1024).toFixed(2);
    res = createResponse(
      JSON.stringify([{ "src": `${returnLink}` }]),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const moderateDomain = tgProxyUrl ? `https://${tgProxyUrl}` : "https://api.telegram.org";
    const moderateUrl = `${moderateDomain}/file/bot${tgBotToken}/${filePath}`;
    metadata.Label = await moderateContent(env, moderateUrl);
    try {
      metadata.Channel = "TelegramNew";
      metadata.ChannelName = tgChannel.name;
      metadata.TgFileId = id;
      metadata.TgChatId = tgChatId;
      metadata.TgBotToken = tgBotToken;
      if (tgProxyUrl) {
        metadata.TgProxyUrl = tgProxyUrl;
      }
      await db.put(fullId, "", {
        metadata
      });
    } catch (error) {
      res = createResponse("Error: Failed to write to KV database", { status: 500 });
    }
    waitUntil(endUpload(context, fullId, metadata));
  } catch (error) {
    console.log("Telegram upload error:", error.message);
    res = createResponse("upload error, check your environment params about telegram channel!", { status: 400 });
  } finally {
    return res;
  }
}
__name(uploadFileToTelegram, "uploadFileToTelegram");
async function uploadFileToExternal(context, fullId, metadata, returnLink) {
  const { env, waitUntil, formdata } = context;
  const db = getDatabase(env);
  metadata.Channel = "External";
  metadata.ChannelName = "External";
  const extUrl = formdata.get("url");
  if (extUrl === null || extUrl === void 0) {
    return createResponse("Error: No url provided", { status: 400 });
  }
  metadata.ExternalLink = extUrl;
  try {
    await db.put(fullId, "", {
      metadata
    });
  } catch (error) {
    return createResponse("Error: Failed to write to KV database", { status: 500 });
  }
  waitUntil(endUpload(context, fullId, metadata));
  return createResponse(
    JSON.stringify([{ "src": `${returnLink}` }]),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
__name(uploadFileToExternal, "uploadFileToExternal");
async function uploadFileToDiscord(context, fullId, metadata, returnLink) {
  const { env, waitUntil, uploadConfig, formdata, specifiedChannelName } = context;
  const db = getDatabase(env);
  const discordSettings = uploadConfig.discord;
  if (!discordSettings || !discordSettings.channels || discordSettings.channels.length === 0) {
    return createResponse("Error: No Discord channel configured", { status: 400 });
  }
  const discordChannels = discordSettings.channels;
  let discordChannel;
  if (specifiedChannelName) {
    discordChannel = discordChannels.find((ch2) => ch2.name === specifiedChannelName);
  }
  if (!discordChannel) {
    discordChannel = discordSettings.loadBalance?.enabled ? discordChannels[Math.floor(Math.random() * discordChannels.length)] : discordChannels[0];
  }
  if (!discordChannel || !discordChannel.botToken || !discordChannel.channelId) {
    return createResponse("Error: Discord channel not properly configured", { status: 400 });
  }
  const file = formdata.get("file");
  const fileSize = file.size;
  const fileName = metadata.FileName;
  const isNitro = discordChannel.isNitro || false;
  const DISCORD_MAX_SIZE = isNitro ? 25 * 1024 * 1024 : 10 * 1024 * 1024;
  if (fileSize > DISCORD_MAX_SIZE) {
    const limitMB = isNitro ? 25 : 10;
    return createResponse(`Error: File size exceeds Discord limit (${limitMB}MB), please use another channel`, { status: 413 });
  }
  const discordAPI = new DiscordAPI(discordChannel.botToken);
  try {
    const response = await discordAPI.sendFile(file, discordChannel.channelId, fileName);
    const fileInfo = discordAPI.getFileInfo(response);
    if (!fileInfo) {
      throw new Error("Failed to get file info from Discord response");
    }
    metadata.Channel = "Discord";
    metadata.ChannelName = discordChannel.name || "Discord_env";
    metadata.FileSize = (fileInfo.file_size / 1024 / 1024).toFixed(2);
    metadata.DiscordMessageId = fileInfo.message_id;
    metadata.DiscordChannelId = discordChannel.channelId;
    metadata.DiscordBotToken = discordChannel.botToken;
    if (discordChannel.proxyUrl) {
      metadata.DiscordProxyUrl = discordChannel.proxyUrl;
    }
    let moderateUrl = fileInfo.url;
    if (discordChannel.proxyUrl) {
      moderateUrl = fileInfo.url.replace("https://cdn.discordapp.com", `https://${discordChannel.proxyUrl}`);
    }
    metadata.Label = await moderateContent(env, moderateUrl);
    try {
      await db.put(fullId, "", { metadata });
    } catch (error) {
      return createResponse("Error: Failed to write to KV database", { status: 500 });
    }
    waitUntil(endUpload(context, fullId, metadata));
    return createResponse(
      JSON.stringify([{ "src": returnLink }]),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Discord upload error:", error.message);
    return createResponse(`Error: Discord upload failed - ${error.message}`, { status: 500 });
  }
}
__name(uploadFileToDiscord, "uploadFileToDiscord");
async function uploadFileToHuggingFace(context, fullId, metadata, returnLink) {
  const { env, waitUntil, uploadConfig, formdata, specifiedChannelName } = context;
  const db = getDatabase(env);
  console.log("=== HuggingFace Upload Start ===");
  const hfSettings = uploadConfig.huggingface;
  console.log("HuggingFace settings:", hfSettings ? "found" : "not found");
  if (!hfSettings || !hfSettings.channels || hfSettings.channels.length === 0) {
    console.log("Error: No HuggingFace channel configured");
    return createResponse("Error: No HuggingFace channel configured", { status: 400 });
  }
  const hfChannels = hfSettings.channels;
  console.log("HuggingFace channels count:", hfChannels.length);
  let hfChannel;
  if (specifiedChannelName) {
    hfChannel = hfChannels.find((ch2) => ch2.name === specifiedChannelName);
  }
  if (!hfChannel) {
    hfChannel = hfSettings.loadBalance?.enabled ? hfChannels[Math.floor(Math.random() * hfChannels.length)] : hfChannels[0];
  }
  console.log("Selected channel:", hfChannel?.name, "repo:", hfChannel?.repo);
  if (!hfChannel || !hfChannel.token || !hfChannel.repo) {
    console.log("Error: HuggingFace channel not properly configured", {
      hasChannel: !!hfChannel,
      hasToken: !!hfChannel?.token,
      hasRepo: !!hfChannel?.repo
    });
    return createResponse("Error: HuggingFace channel not properly configured", { status: 400 });
  }
  const file = formdata.get("file");
  const fileName = metadata.FileName;
  const precomputedSha256 = formdata.get("sha256") || null;
  console.log("File to upload:", fileName, "size:", file?.size, "precomputed SHA256:", precomputedSha256 ? "yes" : "no");
  const uniquePrefix = crypto.randomUUID();
  const lastSlashIndex = fullId.lastIndexOf("/");
  const hfFilePath = lastSlashIndex === -1 ? `${uniquePrefix}_${fullId}` : `${fullId.substring(0, lastSlashIndex + 1)}${uniquePrefix}_${fullId.substring(lastSlashIndex + 1)}`;
  console.log("HuggingFace file path:", hfFilePath);
  const huggingfaceAPI = new HuggingFaceAPI(hfChannel.token, hfChannel.repo, hfChannel.isPrivate || false);
  try {
    console.log("Starting HuggingFace upload...");
    const result = await huggingfaceAPI.uploadFile(file, hfFilePath, `Upload ${fileName}`, precomputedSha256);
    console.log("HuggingFace upload result:", result);
    if (!result.success) {
      throw new Error("Failed to upload file to HuggingFace");
    }
    metadata.Channel = "HuggingFace";
    metadata.ChannelName = hfChannel.name || "HuggingFace_env";
    metadata.HfRepo = hfChannel.repo;
    metadata.HfFilePath = hfFilePath;
    metadata.HfToken = hfChannel.token;
    metadata.HfIsPrivate = hfChannel.isPrivate || false;
    metadata.HfFileUrl = result.fileUrl;
    const securityConfig2 = context.securityConfig;
    const uploadModerate = securityConfig2.upload?.moderate;
    if (uploadModerate && uploadModerate.enabled) {
      if (!hfChannel.isPrivate) {
        metadata.Label = await moderateContent(env, result.fileUrl);
      } else {
        try {
          await db.put(fullId, "", { metadata });
        } catch (error) {
          return createResponse("Error: Failed to write to KV database", { status: 500 });
        }
        const moderateUrl = `https://${context.url.hostname}/file/${fullId}`;
        await purgeCDNCache(env, moderateUrl, context.url);
        metadata.Label = await moderateContent(env, moderateUrl);
      }
    }
    try {
      await db.put(fullId, "", { metadata });
    } catch (error) {
      return createResponse("Error: Failed to write to KV database", { status: 500 });
    }
    waitUntil(endUpload(context, fullId, metadata));
    return createResponse(
      JSON.stringify([{ "src": returnLink }]),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("HuggingFace upload error:", error.message);
    return createResponse(`Error: HuggingFace upload failed - ${error.message}`, { status: 500 });
  }
}
__name(uploadFileToHuggingFace, "uploadFileToHuggingFace");
async function tryRetry(err, context, uploadChannel, fullId, metadata, fileExt, fileName, fileType, returnLink) {
  const { env, url, formdata } = context;
  const channelList = ["CloudflareR2", "TelegramNew", "S3", "HuggingFace", "Discord"];
  const errMessages = {};
  errMessages[uploadChannel] = "Error: " + uploadChannel + err;
  url.searchParams.set("serverCompress", "false");
  let retryRes = null;
  if (uploadChannel === "CloudflareR2") {
    retryRes = await uploadFileToCloudflareR2(context, fullId, metadata, returnLink);
  } else if (uploadChannel === "TelegramNew") {
    retryRes = await uploadFileToTelegram(context, fullId, metadata, fileExt, fileName, fileType, returnLink);
  } else if (uploadChannel === "S3") {
    retryRes = await uploadFileToS3(context, fullId, metadata, returnLink);
  } else if (uploadChannel === "HuggingFace") {
    retryRes = await uploadFileToHuggingFace(context, fullId, metadata, returnLink);
  } else if (uploadChannel === "Discord") {
    retryRes = await uploadFileToDiscord(context, fullId, metadata, returnLink);
  }
  if (retryRes && retryRes.status === 200) {
    return retryRes;
  } else if (retryRes) {
    errMessages[uploadChannel + "_retry"] = "Error: " + uploadChannel + " retry - " + await retryRes.text();
  }
  for (let i2 = 0; i2 < channelList.length; i2++) {
    if (channelList[i2] !== uploadChannel) {
      let res = null;
      if (channelList[i2] === "CloudflareR2") {
        res = await uploadFileToCloudflareR2(context, fullId, metadata, returnLink);
      } else if (channelList[i2] === "TelegramNew") {
        res = await uploadFileToTelegram(context, fullId, metadata, fileExt, fileName, fileType, returnLink);
      } else if (channelList[i2] === "S3") {
        res = await uploadFileToS3(context, fullId, metadata, returnLink);
      } else if (channelList[i2] === "HuggingFace") {
        res = await uploadFileToHuggingFace(context, fullId, metadata, returnLink);
      } else if (channelList[i2] === "Discord") {
        res = await uploadFileToDiscord(context, fullId, metadata, returnLink);
      }
      if (res && res.status === 200) {
        return res;
      } else if (res) {
        errMessages[channelList[i2]] = "Error: " + channelList[i2] + await res.text();
      }
    }
  }
  return createResponse(JSON.stringify(errMessages), { status: 500 });
}
__name(tryRetry, "tryRetry");

// functions/upload/huggingface/getUploadUrl.js
async function onRequestPost(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  context.url = url;
  try {
    const requiredPermission = "upload";
    if (!await userAuthCheck(env, url, request, requiredPermission)) {
      return UnauthorizedResponse("Unauthorized");
    }
    const uploadIp = getUploadIp(request);
    if (await isBlockedUploadIp(env, uploadIp)) {
      return new Response(JSON.stringify({ error: "IP blocked" }), {
        status: 403,
        headers: { "Content-Type": "application/json" }
      });
    }
    const body = await request.json();
    const { fileSize, fileName, fileType, sha256, fileSample, channelName, uploadNameType, uploadFolder } = body;
    if (!fileSize || !fileName || !fileType || !sha256 || !fileSample) {
      return new Response(JSON.stringify({
        error: "Missing required fields: fileSize, fileName, fileType, sha256, fileSample"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const uploadConfig = await fetchUploadConfig(env);
    const hfSettings = uploadConfig.huggingface;
    if (!hfSettings || !hfSettings.channels || hfSettings.channels.length === 0) {
      return new Response(JSON.stringify({ error: "No HuggingFace channel configured" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    let hfChannel;
    if (channelName) {
      hfChannel = hfSettings.channels.find((c2) => c2.name === channelName);
    }
    if (!hfChannel) {
      hfChannel = hfSettings.loadBalance?.enabled ? hfSettings.channels[Math.floor(Math.random() * hfSettings.channels.length)] : hfSettings.channels[0];
    }
    if (!hfChannel || !hfChannel.token || !hfChannel.repo) {
      return new Response(JSON.stringify({ error: "HuggingFace channel not properly configured" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (uploadNameType) {
      url.searchParams.set("uploadNameType", uploadNameType);
    }
    if (uploadFolder) {
      url.searchParams.set("uploadFolder", uploadFolder);
    }
    const fullId = await buildUniqueFileId(context, fileName, fileType || "application/octet-stream");
    const uniquePrefix = crypto.randomUUID();
    const lastSlashIndex = fullId.lastIndexOf("/");
    const filePath = lastSlashIndex === -1 ? `${uniquePrefix}_${fullId}` : `${fullId.substring(0, lastSlashIndex + 1)}${uniquePrefix}_${fullId.substring(lastSlashIndex + 1)}`;
    const huggingfaceAPI = new HuggingFaceAPI(hfChannel.token, hfChannel.repo, hfChannel.isPrivate || false);
    const uploadInfo = await huggingfaceAPI.getLfsUploadInfo(fileSize, filePath, sha256, fileSample);
    return new Response(JSON.stringify({
      success: true,
      fullId,
      filePath,
      channelName: hfChannel.name,
      repo: hfChannel.repo,
      isPrivate: hfChannel.isPrivate || false,
      ...uploadInfo
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("getUploadUrl error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
__name(onRequestPost, "onRequestPost");

// functions/upload/huggingface/commitUpload.js
async function onRequestPost2(context) {
  const { request, env, waitUntil } = context;
  const url = new URL(request.url);
  try {
    const requiredPermission = "upload";
    if (!await userAuthCheck(env, url, request, requiredPermission)) {
      return UnauthorizedResponse("Unauthorized");
    }
    const body = await request.json();
    const { fullId, filePath, sha256, fileSize, fileName, fileType, channelName, multipartParts } = body;
    if (!fullId || !filePath || !sha256 || !fileSize) {
      return new Response(JSON.stringify({
        error: "Missing required fields: fullId, filePath, sha256, fileSize"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const sanitizedFullId = sanitizeUploadFolder(fullId);
    if (sanitizedFullId !== fullId) {
      return new Response(JSON.stringify({
        error: "Invalid fullId: contains illegal path characters"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const uploadConfig = await fetchUploadConfig(env);
    const hfSettings = uploadConfig.huggingface;
    if (!hfSettings || !hfSettings.channels || hfSettings.channels.length === 0) {
      return new Response(JSON.stringify({ error: "No HuggingFace channel configured" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    let hfChannel;
    if (channelName) {
      hfChannel = hfSettings.channels.find((c2) => c2.name === channelName);
    }
    if (!hfChannel) {
      hfChannel = hfSettings.channels[0];
    }
    if (!hfChannel || !hfChannel.token || !hfChannel.repo) {
      return new Response(JSON.stringify({ error: "HuggingFace channel not properly configured" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const huggingfaceAPI = new HuggingFaceAPI(hfChannel.token, hfChannel.repo, hfChannel.isPrivate || false);
    if (multipartParts && multipartParts.length > 0) {
      console.log("Completing multipart upload...");
    }
    console.log("Committing LFS file...");
    const commitResult = await huggingfaceAPI.commitLfsFile(
      filePath,
      sha256,
      fileSize,
      `Upload ${fileName || fullId}`
    );
    console.log("Commit result:", JSON.stringify(commitResult));
    const fileUrl = `https://huggingface.co/datasets/${hfChannel.repo}/resolve/main/${filePath}`;
    const dirParts = fullId.split("/").slice(0, -1).join("/");
    const normalizedDirectory = dirParts === "" ? "" : dirParts + "/";
    const uploadIp = getUploadIp(request) || "";
    const uploadAddress = await getIPAddress(uploadIp);
    const metadata = {
      FileName: fileName || fullId,
      FileType: fileType || "",
      Channel: "HuggingFace",
      ChannelName: hfChannel.name || "HuggingFace_env",
      FileSize: (fileSize / 1024 / 1024).toFixed(2),
      FileSizeBytes: fileSize,
      UploadIP: uploadIp,
      UploadAddress: uploadAddress,
      ListType: "None",
      HfRepo: hfChannel.repo,
      HfFilePath: filePath,
      HfToken: hfChannel.token,
      HfIsPrivate: hfChannel.isPrivate || false,
      HfFileUrl: fileUrl,
      TimeStamp: Date.now(),
      Label: "None",
      Directory: normalizedDirectory,
      Tags: []
    };
    if (!hfChannel.isPrivate) {
      try {
        metadata.Label = await moderateContent(env, fileUrl);
      } catch (e2) {
        console.warn("Content moderation failed:", e2.message);
      }
    }
    const db = getDatabase(env);
    await db.put(fullId, "", { metadata });
    const uploadContext = {
      env,
      waitUntil,
      uploadConfig,
      url
    };
    waitUntil(endUpload(uploadContext, fullId, metadata));
    const returnLink = `/file/${fullId}`;
    return new Response(JSON.stringify({
      success: true,
      src: returnLink,
      fileUrl,
      fullId
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("commitUpload error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
__name(onRequestPost2, "onRequestPost");

// functions/utils/middleware.js
var disableTelemetry = false;
function ensureSentryContext(context) {
  if (!context.data) {
    context.data = {};
  }
  if (context.data.sentry) {
    return context.data.sentry;
  }
  const transaction = {
    startChild: /* @__PURE__ */ __name(() => ({ finish: /* @__PURE__ */ __name(() => {
    }, "finish") }), "startChild"),
    finish: /* @__PURE__ */ __name(() => {
    }, "finish")
  };
  context.data.sentry = {
    setTag: /* @__PURE__ */ __name(() => {
    }, "setTag"),
    setContext: /* @__PURE__ */ __name(() => {
    }, "setContext"),
    startTransaction: /* @__PURE__ */ __name(() => transaction, "startTransaction")
  };
  return context.data.sentry;
}
__name(ensureSentryContext, "ensureSentryContext");
async function errorHandling(context) {
  const othersConfig3 = await fetchOthersConfig(context.env);
  disableTelemetry = !othersConfig3.telemetry.enabled;
  const env = context.env;
  if (!disableTelemetry) {
    context.data.telemetry = true;
    ensureSentryContext(context);
    let remoteSampleRate = 1e-3;
    try {
      const sampleRate = await fetchSampleRate(context);
      if (sampleRate) {
        remoteSampleRate = sampleRate;
      }
    } catch (e2) {
      console.log(e2);
    }
    context.data.sampleRate = env.sampleRate || remoteSampleRate;
  }
  return context.next();
}
__name(errorHandling, "errorHandling");
async function telemetryData(context) {
  const othersConfig3 = await fetchOthersConfig(context.env);
  disableTelemetry = !othersConfig3.telemetry.enabled;
  if (!disableTelemetry) {
    try {
      ensureSentryContext(context);
      const parsedHeaders = {};
      context.request.headers.forEach((value, key) => {
        parsedHeaders[key] = value;
        if (value.length > 0) {
          context.data.sentry.setTag(key, value);
        }
      });
      const CF = JSON.parse(JSON.stringify(context.request.cf || {}));
      const parsedCF = {};
      for (const key in CF) {
        if (typeof CF[key] == "object") {
          parsedCF[key] = JSON.stringify(CF[key]);
        } else {
          parsedCF[key] = CF[key];
          if (CF[key].length > 0) {
            context.data.sentry.setTag(key, CF[key]);
          }
        }
      }
      const data = {
        headers: parsedHeaders,
        cf: parsedCF,
        url: context.request.url,
        method: context.request.method,
        redirect: context.request.redirect
      };
      const urlPath = new URL(context.request.url).pathname;
      const hostname = new URL(context.request.url).hostname;
      context.data.sentry.setTag("path", urlPath);
      context.data.sentry.setTag("url", data.url);
      context.data.sentry.setTag("method", context.request.method);
      context.data.sentry.setTag("redirect", context.request.redirect);
      context.data.sentry.setContext("request", data);
      const transaction = context.data.sentry.startTransaction({ name: `${context.request.method} ${hostname}` });
      context.data.transaction = transaction;
      return await context.next();
    } catch (e2) {
      console.log(e2);
    } finally {
      if (context.data.transaction) {
        context.data.transaction.finish();
      }
    }
  }
  return context.next();
}
__name(telemetryData, "telemetryData");
async function fetchSampleRate(context) {
  const data = context.data;
  if (data.telemetry) {
    const url = "https://frozen-sentinel.pages.dev/signal/sampleRate.json";
    const response = await fetch(url);
    const json = await response.json();
    return json.rate;
  }
}
__name(fetchSampleRate, "fetchSampleRate");
async function checkDatabaseConfig2(context) {
  var env = context.env;
  var dbConfig = checkDatabaseConfig(env);
  if (!dbConfig.configured) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "\u6570\u636E\u5E93\u672A\u914D\u7F6E / Database not configured",
        message: "\u8BF7\u914D\u7F6E KV \u5B58\u50A8 (env.img_url) \u6216 D1 \u6570\u636E\u5E93 (env.img_d1)\u3002 / Please configure KV storage (env.img_url) or D1 database (env.img_d1)."
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
  return await context.next();
}
__name(checkDatabaseConfig2, "checkDatabaseConfig");

// functions/file/fileTools.js
function isDomainAllowed(context) {
  const { Referer, securityConfig: securityConfig2, url } = context;
  const allowedDomains = securityConfig2.access.allowedDomains;
  if (Referer) {
    try {
      const refererUrl = new URL(Referer);
      if (allowedDomains && allowedDomains.trim() !== "") {
        const domains = allowedDomains.split(",");
        domains.push(url.hostname);
        let isAllowed = domains.some((domain) => {
          let domainPattern = new RegExp(`(^|\\.)${domain.replace(".", "\\.")}$`);
          return domainPattern.test(refererUrl.hostname);
        });
        if (!isAllowed) {
          return false;
        }
      }
    } catch (e2) {
      return false;
    }
  }
  return true;
}
__name(isDomainAllowed, "isDomainAllowed");
function isFromPublicBrowse(Referer, origin) {
  if (!Referer) return false;
  try {
    const refererUrl = new URL(Referer);
    if (refererUrl.origin === origin) {
      const pathname = refererUrl.pathname;
      if (pathname === "/browse" || pathname.startsWith("/browse/")) {
        return true;
      }
    }
  } catch (e2) {
    return false;
  }
  return false;
}
__name(isFromPublicBrowse, "isFromPublicBrowse");
function setCommonHeaders(headers, encodedFileName, fileType, Referer, url) {
  headers.set("Content-Disposition", `inline; filename="${encodedFileName}"; filename*=UTF-8''${encodedFileName}`);
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Accept-Ranges", "bytes");
  headers.set("Vary", "Range");
  if (fileType) {
    headers.set("Content-Type", fileType);
  }
  if (Referer && Referer.includes(url.origin) && !isFromPublicBrowse(Referer, url.origin)) {
    headers.set("Cache-Control", "private, max-age=86400");
  } else {
    headers.set("Cache-Control", "public, max-age=2592000");
  }
}
__name(setCommonHeaders, "setCommonHeaders");
function setRangeHeaders(headers, rangeStart, rangeEnd, totalSize) {
  const contentLength = rangeEnd - rangeStart + 1;
  headers.set("Content-Length", contentLength.toString());
  headers.set("Content-Range", `bytes ${rangeStart}-${rangeEnd}/${totalSize}`);
}
__name(setRangeHeaders, "setRangeHeaders");
function handleHeadRequest(headers, etag = null) {
  const responseHeaders = new Headers();
  responseHeaders.set("Content-Length", headers.get("Content-Length") || "0");
  responseHeaders.set("Content-Type", headers.get("Content-Type") || "application/octet-stream");
  responseHeaders.set("Content-Disposition", headers.get("Content-Disposition") || "inline");
  responseHeaders.set("Access-Control-Allow-Origin", headers.get("Access-Control-Allow-Origin") || "*");
  responseHeaders.set("Accept-Ranges", headers.get("Accept-Ranges") || "bytes");
  responseHeaders.set("Cache-Control", headers.get("Cache-Control") || "public, max-age=2592000");
  if (etag) {
    responseHeaders.set("ETag", etag);
  }
  return new Response(null, {
    status: 200,
    headers: responseHeaders
  });
}
__name(handleHeadRequest, "handleHeadRequest");
async function getFileContent(request, targetUrl, max_retries = 2) {
  let retries = 0;
  while (retries <= max_retries) {
    try {
      const response = await fetch(targetUrl, {
        method: request.method,
        headers: request.headers,
        body: request.body
      });
      if (response.ok || response.status === 304) {
        return response;
      } else if (response.status === 404) {
        return new Response("Error: Image Not Found", { status: 404 });
      } else {
        retries++;
      }
    } catch (error) {
      retries++;
    }
  }
  return null;
}
__name(getFileContent, "getFileContent");
function isTgChannel(imgRecord) {
  return imgRecord.metadata?.Channel === "Telegram" || imgRecord.metadata?.Channel === "TelegramNew";
}
__name(isTgChannel, "isTgChannel");
async function returnWithCheck(context, imgRecord) {
  const { request, env, url, securityConfig: securityConfig2 } = context;
  const whiteListMode = securityConfig2.access.whiteListMode;
  const response = new Response("success", { status: 200 });
  const referer = request.headers.get("Referer");
  if (referer && referer.includes(url.origin) && !isFromPublicBrowse(referer, url.origin)) {
    return response;
  }
  const record = imgRecord;
  if (record.metadata === null) {
  } else {
    if (record.metadata.ListType == "White") {
      return response;
    } else if (record.metadata.ListType == "Block") {
      return await returnBlockImg(url);
    } else if (record.metadata.Label == "adult") {
      return await returnBlockImg(url);
    }
    if (whiteListMode) {
      return await returnWhiteListImg(url);
    } else {
      return response;
    }
  }
  return response;
}
__name(returnWithCheck, "returnWithCheck");
async function return404(url) {
  const Img404 = await fetch(url.origin + "/static/404.png");
  if (!Img404.ok) {
    return new Response(
      "Error: Image Not Found",
      {
        status: 404,
        headers: {
          "Cache-Control": "public, max-age=86400"
        }
      }
    );
  } else {
    return new Response(Img404.body, {
      status: 404,
      headers: {
        "Content-Type": "image/png",
        "Content-Disposition": "inline",
        "Cache-Control": "public, max-age=86400"
      }
    });
  }
}
__name(return404, "return404");
async function returnBlockImg(url) {
  const blockImg = await fetch(url.origin + "/static/BlockImg.png");
  if (!blockImg.ok) {
    return new Response(null, {
      status: 302,
      headers: {
        "Location": url.origin + "/blockimg",
        "Cache-Control": "public, max-age=86400"
      }
    });
  } else {
    return new Response(blockImg.body, {
      status: 403,
      headers: {
        "Content-Type": "image/png",
        "Content-Disposition": "inline",
        "Cache-Control": "public, max-age=86400"
      }
    });
  }
}
__name(returnBlockImg, "returnBlockImg");
async function returnWhiteListImg(url) {
  const WhiteListImg = await fetch(url.origin + "/static/WhiteListOn.png");
  if (!WhiteListImg.ok) {
    return new Response(null, {
      status: 302,
      headers: {
        "Location": url.origin + "/whiteliston",
        "Cache-Control": "public, max-age=86400"
      }
    });
  } else {
    return new Response(WhiteListImg.body, {
      status: 403,
      headers: {
        "Content-Type": "image/png",
        "Content-Disposition": "inline",
        "Cache-Control": "public, max-age=86400"
      }
    });
  }
}
__name(returnWhiteListImg, "returnWhiteListImg");

// functions/file/[[path]].js
async function onRequest7(context) {
  const {
    request,
    // same as existing Worker API
    env,
    // same as existing Worker API
    params,
    // if filename includes [id] or [[path]]
    waitUntil,
    // same as ctx.waitUntil in existing Worker API
    next,
    // used for middleware or to fetch assets
    data
    // arbitrary space for passing data between middlewares
  } = context;
  let fileId = "";
  try {
    params.path = decodeURIComponent(params.path);
    fileId = params.path.split(",").join("/");
  } catch (e2) {
    return new Response("Error: Decode Image ID Failed", { status: 400 });
  }
  const securityConfig2 = await fetchSecurityConfig(env);
  context.securityConfig = securityConfig2;
  const url = new URL(request.url);
  context.url = url;
  const Referer = request.headers.get("Referer");
  context.Referer = Referer;
  if (!isDomainAllowed(context)) {
    return await returnBlockImg(url);
  }
  const db = getDatabase(env);
  const imgRecord = await db.getWithMetadata(fileId);
  if (!imgRecord) {
    return new Response("Error: Image Not Found", { status: 404 });
  }
  if (!imgRecord.metadata) {
    imgRecord.metadata = {};
  }
  const fileName = imgRecord.metadata?.FileName || fileId;
  const encodedFileName = encodeURIComponent(fileName);
  const fileType = imgRecord.metadata?.FileType || null;
  let accessRes = await returnWithCheck(context, imgRecord);
  if (accessRes.status !== 200) {
    return accessRes;
  }
  if (imgRecord.metadata?.Channel === "CloudflareR2") {
    return await handleR2File(context, fileId, encodedFileName, fileType);
  }
  if (imgRecord.metadata?.Channel === "S3") {
    return await handleS3File(context, imgRecord.metadata, encodedFileName, fileType);
  }
  if (imgRecord.metadata?.Channel === "Discord") {
    if (imgRecord.metadata?.IsChunked === true) {
      return await handleDiscordChunkedFile(context, imgRecord, encodedFileName, fileType);
    }
    return await handleDiscordFile(context, imgRecord.metadata, encodedFileName, fileType);
  }
  if (imgRecord.metadata?.Channel === "HuggingFace") {
    return await handleHuggingFaceFile(context, imgRecord.metadata, encodedFileName, fileType);
  }
  if (imgRecord.metadata?.Channel === "External") {
    return Response.redirect(imgRecord.metadata?.ExternalLink, 302);
  }
  let targetUrl = "";
  if (isTgChannel(imgRecord)) {
    let TgFileID = "";
    if (imgRecord.metadata?.Channel === "Telegram") {
      TgFileID = fileId.split(".")[0];
    } else if (imgRecord.metadata?.Channel === "TelegramNew") {
      if (imgRecord.metadata?.IsChunked === true) {
        return await handleTelegramChunkedFile(context, imgRecord, encodedFileName, fileType);
      }
      TgFileID = imgRecord.metadata?.TgFileId;
      if (TgFileID === null) {
        return new Response("Error: Failed to fetch image", { status: 500 });
      }
    }
    const TgBotToken = imgRecord.metadata?.TgBotToken || env.TG_BOT_TOKEN;
    const TgProxyUrl = imgRecord.metadata?.TgProxyUrl || "";
    const tgApi = new TelegramAPI(TgBotToken, TgProxyUrl);
    const filePath = await tgApi.getFilePath(TgFileID);
    if (filePath === null) {
      return new Response("Error: Failed to fetch image path", { status: 500 });
    }
    const fileDomain = TgProxyUrl ? `https://${TgProxyUrl}` : "https://api.telegram.org";
    targetUrl = `${fileDomain}/file/bot${TgBotToken}/${filePath}`;
  } else {
    targetUrl = "https://telegra.ph/" + url.pathname + url.search;
  }
  try {
    const response = await getFileContent(request, targetUrl);
    if (response === null) {
      return new Response("Error: Failed to fetch image", { status: 500 });
    } else if (response.status === 404) {
      return await return404(url);
    }
    const headers = new Headers(response.headers);
    setCommonHeaders(headers, encodedFileName, fileType, Referer, url);
    const newRes = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
    return newRes;
  } catch (error) {
    return new Response("Error: " + error, { status: 500 });
  }
}
__name(onRequest7, "onRequest");
async function handleTelegramChunkedFile(context, imgRecord, encodedFileName, fileType) {
  const { env, request, url, Referer } = context;
  const metadata = imgRecord.metadata;
  const TgBotToken = metadata.TgBotToken || env.TG_BOT_TOKEN;
  const TgProxyUrl = metadata.TgProxyUrl || "";
  let chunks = [];
  try {
    if (imgRecord.value) {
      chunks = JSON.parse(imgRecord.value);
      chunks.sort((a2, b2) => a2.index - b2.index);
    }
  } catch (parseError) {
    console.error("Failed to parse chunks data:", parseError);
    return new Response("Error: Invalid chunks data", { status: 500 });
  }
  if (chunks.length === 0) {
    return new Response("Error: No chunks found for this file", { status: 500 });
  }
  const expectedChunks = metadata.TotalChunks || chunks.length;
  if (chunks.length !== expectedChunks) {
    return new Response(`Error: Missing chunks, expected ${expectedChunks}, got ${chunks.length}`, { status: 500 });
  }
  const totalSize = chunks.reduce((total, chunk) => total + (chunk.size || 0), 0);
  const headers = new Headers();
  setCommonHeaders(headers, encodedFileName, fileType, Referer, url);
  headers.set("Content-Length", totalSize.toString());
  const etag = `"${metadata.TimeStamp || Date.now()}-${totalSize}"`;
  headers.set("ETag", etag);
  const ifNoneMatch = request.headers.get("If-None-Match");
  if (ifNoneMatch && ifNoneMatch === etag) {
    return new Response(null, {
      status: 304,
      headers: {
        "ETag": etag,
        "Cache-Control": headers.get("Cache-Control"),
        "Accept-Ranges": "bytes"
      }
    });
  }
  const range = request.headers.get("Range");
  let rangeStart = 0;
  let rangeEnd = totalSize - 1;
  let isRangeRequest = false;
  if (range) {
    const matches = range.match(/bytes=(\d+)-(\d*)/);
    if (matches) {
      rangeStart = parseInt(matches[1]);
      rangeEnd = matches[2] ? parseInt(matches[2]) : totalSize - 1;
      isRangeRequest = true;
      if (rangeStart >= totalSize || rangeEnd >= totalSize || rangeStart > rangeEnd) {
        return new Response("Range Not Satisfiable", { status: 416 });
      }
    }
  }
  if (request.method === "HEAD") {
    return handleHeadRequest(headers, etag);
  }
  try {
    const stream = new ReadableStream({
      async start(controller) {
        try {
          let currentPosition = 0;
          for (let i2 = 0; i2 < chunks.length; i2++) {
            const chunk = chunks[i2];
            const chunkSize = chunk.size || 0;
            if (currentPosition + chunkSize <= rangeStart) {
              currentPosition += chunkSize;
              continue;
            }
            if (currentPosition > rangeEnd) {
              break;
            }
            const chunkData = await fetchTelegramChunkWithRetry(TgBotToken, chunk, TgProxyUrl, 3);
            if (!chunkData) {
              throw new Error(`Failed to fetch chunk ${chunk.index} after retries`);
            }
            const chunkStart = Math.max(0, rangeStart - currentPosition);
            const chunkEnd = Math.min(chunkSize, rangeEnd - currentPosition + 1);
            if (chunkStart > 0 || chunkEnd < chunkSize) {
              const partialData = chunkData.slice(chunkStart, chunkEnd);
              controller.enqueue(partialData);
            } else {
              controller.enqueue(chunkData);
            }
            currentPosition += chunkSize;
          }
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      }
    });
    if (isRangeRequest) {
      setRangeHeaders(headers, rangeStart, rangeEnd, totalSize);
      return new Response(stream, {
        status: 206,
        // Partial Content
        headers
      });
    } else {
      headers.set("Cache-Control", "private, max-age=86400");
      return new Response(stream, {
        status: 200,
        headers
      });
    }
  } catch (error) {
    return new Response(`Error: Failed to reconstruct chunked file - ${error.message}`, { status: 500 });
  }
}
__name(handleTelegramChunkedFile, "handleTelegramChunkedFile");
async function fetchTelegramChunkWithRetry(botToken, chunk, proxyUrl = "", maxRetries = 3) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const tgApi = new TelegramAPI(botToken, proxyUrl);
      const response = await tgApi.getFileContent(chunk.fileId);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      const chunkData = await response.arrayBuffer();
      const actualSize = chunkData.byteLength;
      if (chunk.size && actualSize !== chunk.size) {
        console.warn(`Chunk ${chunk.index} size mismatch: expected ${chunk.size}, got ${actualSize}`);
      }
      return new Uint8Array(chunkData);
    } catch (error) {
      console.warn(`Chunk ${chunk.index} fetch attempt ${attempt + 1} failed:`, error.message);
      if (attempt === maxRetries - 1) {
        return null;
      }
      await new Promise((resolve) => setTimeout(resolve, 500 * (attempt + 1)));
    }
  }
  return null;
}
__name(fetchTelegramChunkWithRetry, "fetchTelegramChunkWithRetry");
async function handleDiscordChunkedFile(context, imgRecord, encodedFileName, fileType) {
  const { request, url, Referer } = context;
  const metadata = imgRecord.metadata;
  const botToken = metadata.DiscordBotToken;
  const proxyUrl = metadata.DiscordProxyUrl;
  let chunks = [];
  try {
    if (imgRecord.value) {
      chunks = JSON.parse(imgRecord.value);
      chunks.sort((a2, b2) => a2.index - b2.index);
    }
  } catch (parseError) {
    console.error("Failed to parse Discord chunks data:", parseError);
    return new Response("Error: Invalid chunks data", { status: 500 });
  }
  if (chunks.length === 0) {
    return new Response("Error: No chunks found for this file", { status: 500 });
  }
  const expectedChunks = metadata.TotalChunks || chunks.length;
  if (chunks.length !== expectedChunks) {
    return new Response(`Error: Missing chunks, expected ${expectedChunks}, got ${chunks.length}`, { status: 500 });
  }
  const totalSize = chunks.reduce((total, chunk) => total + (chunk.size || 0), 0);
  const headers = new Headers();
  setCommonHeaders(headers, encodedFileName, fileType, Referer, url);
  headers.set("Content-Length", totalSize.toString());
  const etag = `"${metadata.TimeStamp || Date.now()}-${totalSize}"`;
  headers.set("ETag", etag);
  const ifNoneMatch = request.headers.get("If-None-Match");
  if (ifNoneMatch && ifNoneMatch === etag) {
    return new Response(null, {
      status: 304,
      headers: {
        "ETag": etag,
        "Cache-Control": headers.get("Cache-Control"),
        "Accept-Ranges": "bytes"
      }
    });
  }
  const range = request.headers.get("Range");
  let rangeStart = 0;
  let rangeEnd = totalSize - 1;
  let isRangeRequest = false;
  if (range) {
    const matches = range.match(/bytes=(\d+)-(\d*)/);
    if (matches) {
      rangeStart = parseInt(matches[1]);
      rangeEnd = matches[2] ? parseInt(matches[2]) : totalSize - 1;
      isRangeRequest = true;
      if (rangeStart >= totalSize || rangeEnd >= totalSize || rangeStart > rangeEnd) {
        return new Response("Range Not Satisfiable", { status: 416 });
      }
    }
  }
  if (request.method === "HEAD") {
    return handleHeadRequest(headers, etag);
  }
  try {
    const stream = new ReadableStream({
      async start(controller) {
        try {
          let currentPosition = 0;
          for (let i2 = 0; i2 < chunks.length; i2++) {
            const chunk = chunks[i2];
            const chunkSize = chunk.size || 0;
            if (currentPosition + chunkSize <= rangeStart) {
              currentPosition += chunkSize;
              continue;
            }
            if (currentPosition > rangeEnd) {
              break;
            }
            const chunkData = await fetchDiscordChunkWithRetry(botToken, metadata.DiscordChannelId, chunk, proxyUrl, 3);
            if (!chunkData) {
              throw new Error(`Failed to fetch Discord chunk ${chunk.index} after retries`);
            }
            const chunkStart = Math.max(0, rangeStart - currentPosition);
            const chunkEnd = Math.min(chunkSize, rangeEnd - currentPosition + 1);
            if (chunkStart > 0 || chunkEnd < chunkSize) {
              const partialData = chunkData.slice(chunkStart, chunkEnd);
              controller.enqueue(partialData);
            } else {
              controller.enqueue(chunkData);
            }
            currentPosition += chunkSize;
          }
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      }
    });
    if (isRangeRequest) {
      setRangeHeaders(headers, rangeStart, rangeEnd, totalSize);
      return new Response(stream, {
        status: 206,
        // Partial Content
        headers
      });
    } else {
      headers.set("Cache-Control", "private, max-age=86400");
      return new Response(stream, {
        status: 200,
        headers
      });
    }
  } catch (error) {
    return new Response(`Error: Failed to reconstruct Discord chunked file - ${error.message}`, { status: 500 });
  }
}
__name(handleDiscordChunkedFile, "handleDiscordChunkedFile");
async function fetchDiscordChunkWithRetry(botToken, channelId, chunk, proxyUrl, maxRetries = 3) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const discordAPI = new DiscordAPI(botToken);
      let fileUrl = await discordAPI.getFileURL(channelId, chunk.messageId);
      if (!fileUrl) {
        throw new Error("Failed to get attachment URL from Discord API");
      }
      if (proxyUrl) {
        fileUrl = fileUrl.replace("https://cdn.discordapp.com", `https://${proxyUrl}`);
      }
      const response = await fetch(fileUrl);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      const chunkData = await response.arrayBuffer();
      const actualSize = chunkData.byteLength;
      if (chunk.size && actualSize !== chunk.size) {
        console.warn(`Discord chunk ${chunk.index} size mismatch: expected ${chunk.size}, got ${actualSize}`);
      }
      return new Uint8Array(chunkData);
    } catch (error) {
      console.warn(`Discord chunk ${chunk.index} fetch attempt ${attempt + 1} failed:`, error.message);
      if (attempt === maxRetries - 1) {
        return null;
      }
      await new Promise((resolve) => setTimeout(resolve, 500 * (attempt + 1)));
    }
  }
  return null;
}
__name(fetchDiscordChunkWithRetry, "fetchDiscordChunkWithRetry");
async function handleR2File(context, fileId, encodedFileName, fileType) {
  const { env, request, url, Referer } = context;
  try {
    if (typeof env.img_r2 == "undefined" || env.img_r2 == null || env.img_r2 == "") {
      return new Response("Error: Please configure R2 database", { status: 500 });
    }
    const R2DataBase = env.img_r2;
    const range = request.headers.get("Range");
    let object;
    if (range) {
      const matches = range.match(/bytes=(\d+)-(\d*)/);
      if (matches) {
        const start = parseInt(matches[1]);
        const end = matches[2] ? parseInt(matches[2]) : void 0;
        const rangeOptions = {
          range: {
            offset: start
          }
        };
        if (end !== void 0) {
          rangeOptions.range.length = end - start + 1;
        }
        object = await R2DataBase.get(fileId, rangeOptions);
      } else {
        object = await R2DataBase.get(fileId);
      }
    } else {
      object = await R2DataBase.get(fileId);
    }
    if (object === null) {
      return new Response("Error: Failed to fetch file", { status: 500 });
    }
    const headers = new Headers();
    object.writeHttpMetadata(headers);
    setCommonHeaders(headers, encodedFileName, fileType, Referer, url);
    if (request.method === "HEAD") {
      return handleHeadRequest(headers);
    }
    if (range && object.range) {
      headers.set("Content-Range", `bytes ${object.range.offset}-${object.range.offset + object.range.length - 1}/${object.size}`);
      headers.set("Content-Length", object.range.length.toString());
      return new Response(object.body, {
        status: 206,
        // Partial Content
        headers
      });
    }
    return new Response(object.body, {
      status: 200,
      headers
    });
  } catch (error) {
    return new Response(`Error: Failed to fetch from R2 - ${error.message}`, { status: 500 });
  }
}
__name(handleR2File, "handleR2File");
async function handleS3File(context, metadata, encodedFileName, fileType) {
  const { Referer, url, request } = context;
  const cdnFileUrl = metadata?.S3CdnFileUrl;
  if (cdnFileUrl) {
    try {
      if (request.method === "HEAD") {
        const headers2 = new Headers();
        setCommonHeaders(headers2, encodedFileName, fileType, Referer, url);
        return handleHeadRequest(headers2);
      }
      const fetchHeaders = {};
      const range = request.headers.get("Range");
      if (range) {
        fetchHeaders["Range"] = range;
      }
      const response = await fetch(cdnFileUrl, {
        method: "GET",
        headers: fetchHeaders
      });
      if (!response.ok && response.status !== 206) {
        console.warn(`CDN fetch failed (${response.status}), falling back to S3 API`);
        return await handleS3FileViaAPI(context, metadata, encodedFileName, fileType);
      }
      const headers = new Headers();
      setCommonHeaders(headers, encodedFileName, fileType, Referer, url);
      if (response.headers.get("Content-Length")) {
        headers.set("Content-Length", response.headers.get("Content-Length"));
      }
      if (response.headers.get("Content-Range")) {
        headers.set("Content-Range", response.headers.get("Content-Range"));
      }
      return new Response(response.body, {
        status: response.status,
        headers
      });
    } catch (error) {
      console.error(`CDN fetch error: ${error.message}, falling back to S3 API`);
      return await handleS3FileViaAPI(context, metadata, encodedFileName, fileType);
    }
  }
  return await handleS3FileViaAPI(context, metadata, encodedFileName, fileType);
}
__name(handleS3File, "handleS3File");
async function handleS3FileViaAPI(context, metadata, encodedFileName, fileType) {
  const { Referer, url, request } = context;
  const s3Client = new S3Client({
    region: metadata?.S3Region || "auto",
    endpoint: metadata?.S3Endpoint,
    credentials: {
      accessKeyId: metadata?.S3AccessKeyId,
      secretAccessKey: metadata?.S3SecretAccessKey
    },
    forcePathStyle: metadata?.S3PathStyle || false
  });
  const bucketName = metadata?.S3BucketName;
  const key = metadata?.S3FileKey;
  try {
    const range = request.headers.get("Range");
    const commandParams = {
      Bucket: bucketName,
      Key: key
    };
    if (range) {
      commandParams.Range = range;
    }
    const command = new GetObjectCommand(commandParams);
    const response = await s3Client.send(command);
    const headers = new Headers();
    setCommonHeaders(headers, encodedFileName, fileType, Referer, url);
    if (response.ContentLength) {
      headers.set("Content-Length", response.ContentLength.toString());
    }
    if (response.ContentRange) {
      headers.set("Content-Range", response.ContentRange);
    }
    if (request.method === "HEAD") {
      return handleHeadRequest(headers);
    }
    const statusCode = range ? 206 : 200;
    return new Response(response.Body, {
      status: statusCode,
      headers
    });
  } catch (error) {
    return new Response(`Error: Failed to fetch from S3 - ${error.message}`, { status: 500 });
  }
}
__name(handleS3FileViaAPI, "handleS3FileViaAPI");
async function handleDiscordFile(context, metadata, encodedFileName, fileType) {
  const { env, request, url, Referer } = context;
  try {
    let fileUrl = null;
    if (metadata.DiscordMessageId && metadata.DiscordChannelId && metadata.DiscordBotToken) {
      const discordAPI = new DiscordAPI(metadata.DiscordBotToken);
      fileUrl = await discordAPI.getFileURL(metadata.DiscordChannelId, metadata.DiscordMessageId);
    }
    if (!fileUrl) {
      return new Response("Error: Discord file URL not found", { status: 500 });
    }
    if (metadata.DiscordProxyUrl) {
      fileUrl = fileUrl.replace("https://cdn.discordapp.com", `https://${metadata.DiscordProxyUrl}`);
    }
    if (request.method === "HEAD") {
      const headers2 = new Headers();
      setCommonHeaders(headers2, encodedFileName, fileType, Referer, url);
      return handleHeadRequest(headers2);
    }
    const fetchHeaders = {};
    const range = request.headers.get("Range");
    if (range) {
      fetchHeaders["Range"] = range;
    }
    const response = await fetch(fileUrl, {
      method: "GET",
      headers: fetchHeaders
    });
    if (!response.ok && response.status !== 206) {
      return new Response(`Error: Failed to fetch from Discord - ${response.status}`, { status: response.status });
    }
    const headers = new Headers();
    setCommonHeaders(headers, encodedFileName, fileType, Referer, url);
    if (response.headers.get("Content-Length")) {
      headers.set("Content-Length", response.headers.get("Content-Length"));
    }
    if (response.headers.get("Content-Range")) {
      headers.set("Content-Range", response.headers.get("Content-Range"));
    }
    return new Response(response.body, {
      status: response.status,
      headers
    });
  } catch (error) {
    return new Response(`Error: Failed to fetch from Discord - ${error.message}`, { status: 500 });
  }
}
__name(handleDiscordFile, "handleDiscordFile");
async function handleHuggingFaceFile(context, metadata, encodedFileName, fileType) {
  const { request, url, Referer } = context;
  try {
    const hfRepo = metadata.HfRepo;
    const hfFilePath = metadata.HfFilePath;
    const hfToken = metadata.HfToken;
    const hfIsPrivate = metadata.HfIsPrivate || false;
    if (!hfRepo || !hfFilePath) {
      return new Response("Error: HuggingFace file info not found", { status: 500 });
    }
    const fileUrl = metadata.HfFileUrl || `https://huggingface.co/datasets/${hfRepo}/resolve/main/${hfFilePath}`;
    if (request.method === "HEAD") {
      const headers2 = new Headers();
      setCommonHeaders(headers2, encodedFileName, fileType, Referer, url);
      return handleHeadRequest(headers2);
    }
    const fetchHeaders = {};
    if (hfIsPrivate && hfToken) {
      fetchHeaders["Authorization"] = `Bearer ${hfToken}`;
    }
    const range = request.headers.get("Range");
    if (range) {
      fetchHeaders["Range"] = range;
    }
    const response = await fetch(fileUrl, {
      method: "GET",
      headers: fetchHeaders
    });
    if (!response.ok && response.status !== 206) {
      return new Response(`Error: Failed to fetch from HuggingFace - ${response.status}`, { status: response.status });
    }
    const headers = new Headers();
    setCommonHeaders(headers, encodedFileName, fileType, Referer, url);
    if (response.headers.get("Content-Length")) {
      headers.set("Content-Length", response.headers.get("Content-Length"));
    }
    if (response.headers.get("Content-Range")) {
      headers.set("Content-Range", response.headers.get("Content-Range"));
    }
    return new Response(response.body, {
      status: response.status,
      headers
    });
  } catch (error) {
    return new Response(`Error: Failed to fetch from HuggingFace - ${error.message}`, { status: 500 });
  }
}
__name(handleHuggingFaceFile, "handleHuggingFaceFile");

// functions/api/login.js
async function onRequestPost3(context) {
  const {
    request,
    // same as existing Worker API
    env,
    // same as existing Worker API
    params,
    // if filename includes [id] or [[path]]
    waitUntil,
    // same as ctx.waitUntil in existing Worker API
    next,
    // used for middleware or to fetch assets
    data
    // arbitrary space for passing data between middlewares
  } = context;
  const jsonRequest = await request.json();
  const authCode = jsonRequest.authCode;
  const securityConfig2 = await fetchSecurityConfig(env);
  const rightAuthCode = securityConfig2.auth.user.authCode;
  if (rightAuthCode !== void 0 && rightAuthCode !== "" && authCode !== rightAuthCode) {
    return new Response("Unauthorized", { status: 401 });
  }
  return new Response("Login success", { status: 200 });
}
__name(onRequestPost3, "onRequestPost");

// functions/utils/dualAuth.js
async function dualAuthCheck(env, url, request) {
  const adminAuthPassed = await adminAuthCheck(env, request);
  if (adminAuthPassed) {
    return { authorized: true, authType: "admin" };
  }
  const userAuthPassed = await userAuthCheck(env, url, request, null);
  if (userAuthPassed) {
    return { authorized: true, authType: "user" };
  }
  return { authorized: false, authType: null };
}
__name(dualAuthCheck, "dualAuthCheck");
async function adminAuthCheck(env, request) {
  const securityConfig2 = await fetchSecurityConfig(env);
  const basicUser2 = securityConfig2.auth.admin.adminUsername;
  const basicPass2 = securityConfig2.auth.admin.adminPassword;
  if (typeof basicUser2 === "undefined" || basicUser2 === null || basicUser2 === "") {
    return true;
  }
  if (!request.headers.has("Authorization")) {
    return false;
  }
  const db = getDatabase(env);
  const tokenValidation = await validateApiToken(request, db, null);
  if (tokenValidation.valid) {
    return true;
  }
  try {
    const { user, pass: pass2 } = parseBasicAuth(request);
    return user === basicUser2 && pass2 === basicPass2;
  } catch {
    return false;
  }
}
__name(adminAuthCheck, "adminAuthCheck");
function parseBasicAuth(request) {
  const auth = request.headers.get("Authorization");
  if (!auth) {
    throw new Error("No Authorization header");
  }
  const [scheme, encoded] = auth.split(" ");
  if (scheme !== "Basic" || !encoded) {
    throw new Error("Invalid auth scheme");
  }
  const buffer = Uint8Array.from(atob(encoded), (c2) => c2.charCodeAt(0));
  const decoded = new TextDecoder().decode(buffer).normalize();
  const index = decoded.indexOf(":");
  if (index === -1) {
    throw new Error("Invalid auth format");
  }
  return {
    user: decoded.substring(0, index),
    pass: decoded.substring(index + 1)
  };
}
__name(parseBasicAuth, "parseBasicAuth");

// functions/api/directoryTree.js
async function onRequestGet(context) {
  const { env, request } = context;
  const url = new URL(request.url);
  const authResult = await dualAuthCheck(env, url, request);
  if (!authResult.authorized) {
    return new Response("Unauthorized", { status: 401 });
  }
  if (authResult.authType === "user") {
    const pageConfig = await fetchPageConfig(env);
    const showDirSetting = pageConfig.config?.find((c2) => c2.id === "showDirectorySuggestions");
    const showDirectorySuggestions = showDirSetting?.value ?? showDirSetting?.default ?? true;
    if (!showDirectorySuggestions) {
      return new Response(JSON.stringify({ error: "Directory suggestions disabled" }), {
        status: 403,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
  try {
    const tree = await getDirectoryTree(context);
    const cacheTime = url.searchParams.get("cacheTime") || 60;
    return new Response(JSON.stringify({ tree }), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": `public, max-age=${cacheTime}`,
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
__name(onRequestGet, "onRequestGet");

// functions/api/userConfig.js
async function onRequest8(context) {
  const { env } = context;
  const PageConfig = await fetchPageConfig(env);
  const userConfigList = PageConfig.config;
  const userConfig = {};
  for (const config of userConfigList) {
    if (config.value !== void 0 && config.value !== null && config.value !== "") {
      try {
        userConfig[config.id] = JSON.parse(config.value);
      } catch (error) {
        userConfig[config.id] = config.value;
      }
    } else if (config.type === "boolean" && config.default !== void 0) {
      userConfig[config.id] = config.default;
    }
  }
  if (!userConfig) {
    return new Response(JSON.stringify({}), { status: 200 });
  }
  try {
    const parsedConfig = userConfig;
    if (typeof parsedConfig === "object" && parsedConfig !== null) {
      return new Response(JSON.stringify(parsedConfig), { status: 200 });
    } else {
      return new Response(JSON.stringify({}), { status: 200 });
    }
  } catch (error) {
    return new Response(JSON.stringify({}), { status: 200 });
  }
}
__name(onRequest8, "onRequest");

// functions/api/channels.js
async function onRequest9(context) {
  const { request, env } = context;
  if (request.method !== "GET") {
    return new Response("Method Not Allowed", { status: 405 });
  }
  const url = new URL(request.url);
  const { authorized } = await dualAuthCheck(env, url, request);
  if (!authorized) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const includeDisabled = url.searchParams.get("includeDisabled") === "true";
    let uploadConfig;
    if (includeDisabled) {
      const db = getDatabase(env);
      uploadConfig = await getUploadConfig(db, env);
    } else {
      uploadConfig = await fetchUploadConfig(env, context);
    }
    const channels = {
      telegram: uploadConfig.telegram.channels.map((ch2) => ({
        name: ch2.name,
        type: "TelegramNew"
      })),
      cfr2: uploadConfig.cfr2.channels.map((ch2) => ({
        name: ch2.name,
        type: "CloudflareR2"
      })),
      s3: uploadConfig.s3.channels.map((ch2) => ({
        name: ch2.name,
        type: "S3"
      })),
      discord: uploadConfig.discord.channels.map((ch2) => ({
        name: ch2.name,
        type: "Discord"
      })),
      huggingface: uploadConfig.huggingface.channels.map((ch2) => ({
        name: ch2.name,
        type: "HuggingFace"
      }))
    };
    return new Response(JSON.stringify(channels), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Failed to get channels:", error);
    return new Response(JSON.stringify({ error: "Failed to get channels" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
__name(onRequest9, "onRequest");

// functions/api/fetchRes.js
async function onRequest10(context) {
  const {
    request,
    env,
    params,
    waitUntil,
    next,
    data
  } = context;
  const url = new URL(request.url);
  const { authorized } = await dualAuthCheck(env, url, request);
  if (!authorized) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }
  const jsonRequest = await request.json();
  const targetUrl = jsonRequest.url;
  if (targetUrl === void 0) {
    return new Response("URL is required", { status: 400 });
  }
  const response = await fetch(targetUrl);
  const headers = new Headers(response.headers);
  return new Response(response.body, {
    headers
  });
}
__name(onRequest10, "onRequest");

// functions/api/public/list.js
var corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400"
};
function isAllowedDirectory(dir, allowedDirs) {
  if (!allowedDirs || allowedDirs.length === 0) {
    return true;
  }
  const normalizedDir = dir.replace(/^\/+/, "").replace(/\/+$/, "");
  for (const allowed of allowedDirs) {
    const normalizedAllowed = allowed.trim().replace(/^\/+/, "").replace(/\/+$/, "");
    if (normalizedAllowed === "*" || normalizedAllowed === "") {
      return true;
    }
    if (normalizedDir === "" && normalizedAllowed !== "") {
      continue;
    }
    if (normalizedDir === normalizedAllowed || normalizedDir.startsWith(normalizedAllowed + "/")) {
      return true;
    }
  }
  return false;
}
__name(isAllowedDirectory, "isAllowedDirectory");
async function getPublicFileList(context, url, dir, recursive) {
  const cacheDir = dir.replace(/\/$/, "");
  const cacheKey = `${url.origin}/api/publicFileList?dir=${cacheDir}&recursive=${recursive}`;
  const cache2 = caches.default;
  const cacheRes = await cache2.match(cacheKey);
  if (cacheRes) {
    const data = JSON.parse(await cacheRes.text());
    data.fromCache = true;
    return data;
  }
  const result = await readIndex(context, {
    directory: dir,
    start: 0,
    count: -1,
    includeSubdirFiles: recursive,
    accessStatus: "normal"
    // 只返回正常可访问的内容
  });
  if (!result.success) {
    return { files: [], directories: [], totalCount: 0, fromCache: false };
  }
  const files = result.files.map((file) => ({
    id: file.id,
    metadata: {
      FileType: file.metadata?.FileType,
      TimeStamp: file.metadata?.TimeStamp,
      FileSize: file.metadata?.FileSize
    }
  }));
  const cacheData = {
    files,
    directories: result.directories,
    totalCount: result.totalCount
  };
  await cache2.put(cacheKey, new Response(JSON.stringify(cacheData), {
    headers: {
      "Content-Type": "application/json"
    }
  }), {
    expirationTtl: 24 * 60 * 60
  });
  cacheData.fromCache = false;
  return cacheData;
}
__name(getPublicFileList, "getPublicFileList");
async function onRequest11(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders
    });
  }
  if (request.method !== "GET") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders }
    });
  }
  try {
    const othersConfig3 = await fetchOthersConfig(env);
    const publicBrowse = othersConfig3.publicBrowse || {};
    if (!publicBrowse.enabled) {
      return new Response(JSON.stringify({ error: "Public browse is disabled" }), {
        status: 403,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    }
    const allowedDirStr = publicBrowse.allowedDir || "";
    let allowedDirs = allowedDirStr.split(",").map((d2) => d2.trim()).filter((d2) => d2);
    let dir = url.searchParams.get("dir") || "";
    let search = url.searchParams.get("search") || "";
    if (search) {
      search = decodeURIComponent(search).trim().toLowerCase();
    }
    const recursive = url.searchParams.get("recursive") === "true";
    const fileType = url.searchParams.get("type") || "";
    if (!isAllowedDirectory(dir, allowedDirs)) {
      return new Response(JSON.stringify({ error: "Directory not allowed" }), {
        status: 403,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    }
    if (dir) {
      dir = dir.replace(/\.\./g, "_").replace(/\\/g, "/").replace(/\/{2,}/g, "/");
    }
    if (dir.startsWith("/")) {
      dir = dir.substring(1);
    }
    if (dir && !dir.endsWith("/")) {
      dir += "/";
    }
    const start = parseInt(url.searchParams.get("start"), 10) || 0;
    const count = parseInt(url.searchParams.get("count"), 10) || 50;
    const cachedData = await getPublicFileList(context, url, dir, recursive);
    const filteredDirectories = cachedData.directories.filter((subDir) => {
      return isAllowedDirectory(subDir, allowedDirs);
    });
    const imageExts = ["jpg", "jpeg", "png", "gif", "webp", "bmp", "svg", "avif"];
    const videoExts = ["mp4", "webm", "ogg", "mov", "m4v", "mkv", "avi", "3gp", "mpeg", "mpg", "flv", "wmv", "ts", "rmvb"];
    const audioExts = ["mp3", "wav", "ogg", "flac", "aac", "m4a", "wma", "ape", "opus"];
    const getFileExt = /* @__PURE__ */ __name((name) => (name.split(".").pop() || "").toLowerCase(), "getFileExt");
    const isImageFile = /* @__PURE__ */ __name((name) => imageExts.includes(getFileExt(name)), "isImageFile");
    const isVideoFile = /* @__PURE__ */ __name((name) => videoExts.includes(getFileExt(name)), "isVideoFile");
    const isAudioFile = /* @__PURE__ */ __name((name) => audioExts.includes(getFileExt(name)), "isAudioFile");
    let filteredFiles = cachedData.files;
    if (search) {
      filteredFiles = filteredFiles.filter((file) => {
        return file.id.toLowerCase().includes(search);
      });
    }
    if (fileType) {
      filteredFiles = filteredFiles.filter((file) => {
        const name = file.id;
        switch (fileType) {
          case "image":
            return isImageFile(name);
          case "video":
            return isVideoFile(name);
          case "audio":
            return isAudioFile(name);
          case "other":
            return !isImageFile(name) && !isVideoFile(name) && !isAudioFile(name);
          default:
            return true;
        }
      });
    }
    const filteredTotalCount = filteredFiles.length;
    filteredFiles = filteredFiles.slice(start, start + count);
    const safeFiles = filteredFiles.map((file) => ({
      name: file.id,
      metadata: file.metadata
    }));
    return new Response(JSON.stringify({
      files: safeFiles,
      directories: filteredDirectories,
      totalCount: search || fileType ? filteredTotalCount : cachedData.totalCount,
      returnedCount: safeFiles.length,
      allowedDirs,
      // 返回允许的目录列表供前端使用
      fromCache: cachedData.fromCache
    }), {
      headers: { "Content-Type": "application/json", ...corsHeaders }
    });
  } catch (error) {
    console.error("Error in public list API:", error);
    return new Response(JSON.stringify({
      error: "Internal server error",
      message: error.message
    }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders }
    });
  }
}
__name(onRequest11, "onRequest");

// functions/api/bing/wallpaper/index.js
async function onRequest12(context) {
  const {
    request,
    // same as existing Worker API
    env,
    // same as existing Worker API
    params,
    // if filename includes [id] or [[path]]
    waitUntil,
    // same as ctx.waitUntil in existing Worker API
    next,
    // used for middleware or to fetch assets
    data
    // arbitrary space for passing data between middlewares
  } = context;
  const res = await fetch(`https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=5`);
  const bing_data = await res.json();
  const return_data = {
    "status": true,
    "message": "\u64CD\u4F5C\u6210\u529F",
    "data": bing_data.images
  };
  const info = JSON.stringify(return_data);
  return new Response(info);
}
__name(onRequest12, "onRequest");

// functions/api/manage/_middleware.js
var securityConfig = {};
var basicUser = "";
var basicPass = "";
async function errorHandling2(context) {
  try {
    return await context.next();
  } catch (err) {
    return new Response(`${err.message}
${err.stack}`, { status: 500 });
  }
}
__name(errorHandling2, "errorHandling");
function basicAuthentication(request) {
  const Authorization = request.headers.get("Authorization");
  const [scheme, encoded] = Authorization.split(" ");
  if (!encoded || scheme !== "Basic") {
    return BadRequestException("Malformed authorization header.");
  }
  const buffer = Uint8Array.from(atob(encoded), (character) => character.charCodeAt(0));
  const decoded = new TextDecoder().decode(buffer).normalize();
  const index = decoded.indexOf(":");
  if (index === -1 || /[\0-\x1F\x7F]/.test(decoded)) {
    return BadRequestException("Invalid authorization value.");
  }
  return {
    user: decoded.substring(0, index),
    pass: decoded.substring(index + 1)
  };
}
__name(basicAuthentication, "basicAuthentication");
function UnauthorizedException(reason) {
  return new Response(reason, {
    status: 401,
    statusText: "Unauthorized",
    headers: {
      "Content-Type": "text/plain;charset=UTF-8",
      // Disables caching by default.
      "Cache-Control": "no-store",
      // Returns the "Content-Length" header for HTTP HEAD requests.
      "Content-Length": reason.length
    }
  });
}
__name(UnauthorizedException, "UnauthorizedException");
function BadRequestException(reason) {
  return new Response(reason, {
    status: 400,
    statusText: "Bad Request",
    headers: {
      "Content-Type": "text/plain;charset=UTF-8",
      // Disables caching by default.
      "Cache-Control": "no-store",
      // Returns the "Content-Length" header for HTTP HEAD requests.
      "Content-Length": reason.length
    }
  });
}
__name(BadRequestException, "BadRequestException");
function extractRequiredPermission(pathname) {
  const pathParts = pathname.toLowerCase().split("/");
  if (pathParts.includes("delete")) {
    return "delete";
  }
  if (pathParts.includes("list")) {
    return "list";
  }
  return null;
}
__name(extractRequiredPermission, "extractRequiredPermission");
var corsHeaders2 = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT, PATCH, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400"
};
async function authentication(context) {
  if (context.request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders2
    });
  }
  securityConfig = await fetchSecurityConfig(context.env);
  basicUser = securityConfig.auth.admin.adminUsername;
  basicPass = securityConfig.auth.admin.adminPassword;
  if (typeof basicUser == "undefined" || basicUser == null || basicUser == "") {
    return context.next();
  } else {
    if (context.request.headers.has("Authorization")) {
      const pathname = new URL(context.request.url).pathname;
      const requiredPermission = extractRequiredPermission(pathname);
      const db = getDatabase(context.env);
      const tokenValidation = await validateApiToken(context.request, db, requiredPermission);
      if (tokenValidation.valid) {
        return context.next();
      }
      const { user, pass: pass2 } = basicAuthentication(context.request);
      if (basicUser !== user || basicPass !== pass2) {
        return UnauthorizedException("Invalid credentials.");
      } else {
        return context.next();
      }
    } else {
      return new Response("You need to login.", {
        status: 401,
        headers: {
          // Prompts the user for credentials.
          "WWW-Authenticate": 'Basic realm="my scope", charset="UTF-8"'
          // 'WWW-Authenticate': 'None',
        }
      });
    }
  }
}
__name(authentication, "authentication");
var onRequest13 = [checkDatabaseConfig2, errorHandling2, authentication];

// functions/api/manage/login.js
async function onRequest14(context) {
  const {
    request,
    // same as existing Worker API
    env,
    // same as existing Worker API
    params,
    // if filename includes [id] or [[path]]
    waitUntil,
    // same as ctx.waitUntil in existing Worker API
    next,
    // used for middleware or to fetch assets
    data
    // arbitrary space for passing data between middlewares
  } = context;
  const url = new URL(request.url);
  return Response.redirect(url.origin + "/dashboard", 302);
}
__name(onRequest14, "onRequest");

// functions/api/manage/logout.js
async function onRequest15(context) {
  const {
    request,
    // same as existing Worker API
    env,
    // same as existing Worker API
    params,
    // if filename includes [id] or [[path]]
    waitUntil,
    // same as ctx.waitUntil in existing Worker API
    next,
    // used for middleware or to fetch assets
    data
    // arbitrary space for passing data between middlewares
  } = context;
  return new Response("Logged out.", { status: 401 });
}
__name(onRequest15, "onRequest");

// functions/api/manage/list.js
var corsHeaders3 = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400"
};
async function onRequest16(context) {
  const { request, waitUntil } = context;
  const url = new URL(request.url);
  let start = parseInt(url.searchParams.get("start"), 10) || 0;
  let count = parseInt(url.searchParams.get("count"), 10) || 50;
  let sum = url.searchParams.get("sum") === "true";
  let recursive = url.searchParams.get("recursive") === "true";
  let dir = url.searchParams.get("dir") || "";
  let search = url.searchParams.get("search") || "";
  let channel = url.searchParams.get("channel") || "";
  let listType = url.searchParams.get("listType") || "";
  let accessStatus = url.searchParams.get("accessStatus") || "";
  let action = url.searchParams.get("action") || "";
  let includeTags = url.searchParams.get("includeTags") || "";
  let excludeTags = url.searchParams.get("excludeTags") || "";
  let label = url.searchParams.get("label") || "";
  let fileType = url.searchParams.get("fileType") || "";
  let channelName = url.searchParams.get("channelName") || "";
  if (search) {
    search = decodeURIComponent(search).trim();
  }
  const includeTagsArray = includeTags ? includeTags.split(",").map((t2) => t2.trim()).filter((t2) => t2) : [];
  const excludeTagsArray = excludeTags ? excludeTags.split(",").map((t2) => t2.trim()).filter((t2) => t2) : [];
  const listTypeArray = listType ? listType.split(",").map((t2) => t2.trim()).filter((t2) => t2) : [];
  const accessStatusArray = accessStatus ? accessStatus.split(",").map((t2) => t2.trim()).filter((t2) => t2) : [];
  const labelArray = label ? label.split(",").map((t2) => t2.trim()).filter((t2) => t2) : [];
  const fileTypeArray = fileType ? fileType.split(",").map((t2) => t2.trim()).filter((t2) => t2) : [];
  const channelArray = channel ? channel.split(",").map((t2) => t2.trim()).filter((t2) => t2) : [];
  const channelNameArray = channelName ? channelName.split(",").map((t2) => t2.trim()).filter((t2) => t2) : [];
  if (dir) {
    dir = dir.replace(/\.\./g, "_").replace(/\\/g, "/").replace(/\/{2,}/g, "/");
  }
  if (dir.startsWith("/")) {
    dir = dir.substring(1);
  }
  if (dir && !dir.endsWith("/")) {
    dir += "/";
  }
  try {
    if (action === "rebuild") {
      waitUntil(rebuildIndex(context, (processed) => {
        console.log(`Rebuilt ${processed} files...`);
      }));
      return new Response("Index rebuilt asynchronously", {
        headers: { "Content-Type": "text/plain", ...corsHeaders3 }
      });
    }
    if (action === "merge-operations") {
      waitUntil(mergeOperationsToIndex(context));
      return new Response("Operations merged into index asynchronously", {
        headers: { "Content-Type": "text/plain", ...corsHeaders3 }
      });
    }
    if (action === "delete-operations") {
      waitUntil(deleteAllOperations(context));
      return new Response("All operations deleted asynchronously", {
        headers: { "Content-Type": "text/plain", ...corsHeaders3 }
      });
    }
    if (action === "index-storage-stats") {
      const stats = await getIndexStorageStats(context);
      return new Response(JSON.stringify(stats), {
        headers: { "Content-Type": "application/json", ...corsHeaders3 }
      });
    }
    if (action === "info") {
      const info = await getIndexInfo(context);
      return new Response(JSON.stringify(info), {
        headers: { "Content-Type": "application/json", ...corsHeaders3 }
      });
    }
    if (count === -1 && sum) {
      const result2 = await readIndex(context, {
        search,
        directory: dir,
        channel: channelArray,
        listType: listTypeArray,
        accessStatus: accessStatusArray,
        label: labelArray,
        fileType: fileTypeArray,
        channelName: channelNameArray,
        includeTags: includeTagsArray,
        excludeTags: excludeTagsArray,
        countOnly: true
      });
      return new Response(JSON.stringify({
        sum: result2.totalCount,
        indexLastUpdated: result2.indexLastUpdated
      }), {
        headers: { "Content-Type": "application/json", ...corsHeaders3 }
      });
    }
    const result = await readIndex(context, {
      search,
      directory: dir,
      start,
      count,
      channel: channelArray,
      listType: listTypeArray,
      accessStatus: accessStatusArray,
      label: labelArray,
      fileType: fileTypeArray,
      channelName: channelNameArray,
      includeTags: includeTagsArray,
      excludeTags: excludeTagsArray,
      includeSubdirFiles: recursive
    });
    if (!result.success) {
      const dbRecords = await getAllFileRecords(context.env, dir);
      return new Response(JSON.stringify({
        files: dbRecords.files,
        directories: dbRecords.directories,
        totalCount: dbRecords.totalCount,
        directFileCount: dbRecords.directFileCount,
        directFolderCount: dbRecords.directFolderCount,
        returnedCount: dbRecords.returnedCount,
        indexLastUpdated: Date.now(),
        isIndexedResponse: false
        // 标记这是来自 KV 的响应
      }), {
        headers: { "Content-Type": "application/json", ...corsHeaders3 }
      });
    }
    const compatibleFiles = result.files.map((file) => ({
      name: file.id,
      metadata: file.metadata
    }));
    return new Response(JSON.stringify({
      files: compatibleFiles,
      directories: result.directories,
      totalCount: result.totalCount,
      directFileCount: result.directFileCount,
      directFolderCount: result.directFolderCount,
      returnedCount: result.returnedCount,
      indexLastUpdated: result.indexLastUpdated,
      isIndexedResponse: true
      // 标记这是来自索引的响应
    }), {
      headers: { "Content-Type": "application/json", ...corsHeaders3 }
    });
  } catch (error) {
    console.error("Error in list-indexed API:", error);
    return new Response(JSON.stringify({
      error: "Internal server error",
      message: error.message
    }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders3 }
    });
  }
}
__name(onRequest16, "onRequest");
async function getAllFileRecords(env, dir) {
  const allRecords = [];
  let cursor = null;
  try {
    const db = getDatabase(env);
    while (true) {
      const response = await db.list({
        prefix: dir,
        limit: 1e3,
        cursor
      });
      if (!response || !response.keys || !Array.isArray(response.keys)) {
        console.error("Invalid response from database list:", response);
        break;
      }
      cursor = response.cursor;
      for (const item of response.keys) {
        if (item.name.startsWith("manage@") || item.name.startsWith("chunk_")) {
          continue;
        }
        if (!item.metadata || !item.metadata.TimeStamp) {
          continue;
        }
        allRecords.push(item);
      }
      if (!cursor) break;
      await new Promise((resolve) => setTimeout(resolve, 10));
    }
    const directories = /* @__PURE__ */ new Set();
    const filteredRecords = [];
    allRecords.forEach((item) => {
      const subDir = item.name.substring(dir.length);
      const firstSlashIndex = subDir.indexOf("/");
      if (firstSlashIndex !== -1) {
        directories.add(dir + subDir.substring(0, firstSlashIndex));
      } else {
        filteredRecords.push(item);
      }
    });
    return {
      files: filteredRecords,
      directories: Array.from(directories),
      totalCount: allRecords.length,
      directFileCount: filteredRecords.length,
      directFolderCount: directories.size,
      returnedCount: filteredRecords.length
    };
  } catch (error) {
    console.error("Error in getAllFileRecords:", error);
    return {
      files: [],
      directories: [],
      totalCount: 0,
      directFileCount: 0,
      directFolderCount: 0,
      returnedCount: 0,
      error: error.message
    };
  }
}
__name(getAllFileRecords, "getAllFileRecords");

// functions/api/manage/quota.js
var corsHeaders4 = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400"
};
async function onRequest17(context) {
  const { request, env } = context;
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders4 });
  }
  if (request.method === "GET") {
    return await getQuotaStats(context);
  }
  if (request.method === "POST") {
    return await recalculateQuota(context);
  }
  return new Response("Method not allowed", { status: 405, headers: corsHeaders4 });
}
__name(onRequest17, "onRequest");
async function getQuotaStats(context) {
  try {
    const indexMeta = await getIndexMeta(context);
    return new Response(JSON.stringify({
      success: true,
      quotaStats: indexMeta.channelStats || {},
      totalSizeMB: indexMeta.totalSizeMB || 0,
      totalCount: indexMeta.totalCount || 0,
      lastUpdated: indexMeta.lastUpdated
    }), {
      headers: { "Content-Type": "application/json", ...corsHeaders4 }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders4 }
    });
  }
}
__name(getQuotaStats, "getQuotaStats");
async function recalculateQuota(context) {
  try {
    const result = await rebuildIndex(context);
    if (!result.success) {
      return new Response(JSON.stringify({
        success: false,
        error: result.error || "Failed to rebuild index"
      }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders4 }
      });
    }
    const indexMeta = await getIndexMeta(context);
    return new Response(JSON.stringify({
      success: true,
      message: "Quota recalculated successfully",
      channelStats: indexMeta.channelStats || {},
      totalSizeMB: indexMeta.totalSizeMB || 0,
      totalCount: indexMeta.totalCount || 0,
      totalUniqueFiles: result.indexedCount
    }), {
      headers: { "Content-Type": "application/json", ...corsHeaders4 }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders4 }
    });
  }
}
__name(recalculateQuota, "recalculateQuota");

// functions/api/manage/check.js
async function onRequest18(context) {
  const {
    request,
    // same as existing Worker API
    env,
    // same as existing Worker API
    params,
    // if filename includes [id] or [[path]]
    waitUntil,
    // same as ctx.waitUntil in existing Worker API
    next,
    // used for middleware or to fetch assets
    data
    // arbitrary space for passing data between middlewares
  } = context;
  return new Response("true", { status: 200 });
}
__name(onRequest18, "onRequest");

// functions/api/manage/delete/[[path]].js
var corsHeaders5 = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400"
};
async function onRequest19(context) {
  const { request, env, params, waitUntil } = context;
  const url = new URL(request.url);
  const folder = url.searchParams.get("folder");
  if (folder === "true") {
    try {
      params.path = decodeURIComponent(params.path);
      const folderQueue = [{
        path: params.path.split(",").join("/")
      }];
      const deletedFiles = [];
      const failedFiles = [];
      while (folderQueue.length > 0) {
        const currentFolder = folderQueue.shift();
        const listUrl = new URL(`${url.origin}/api/manage/list?count=-1&dir=${currentFolder.path}`);
        const listRequest = new Request(listUrl, {
          headers: request.headers
        });
        const listResponse = await fetch(listRequest);
        const listData = await listResponse.json();
        const files = listData.files;
        for (const file of files) {
          const fileId = file.name;
          const cdnUrl = `https://${url.hostname}/file/${fileId}`;
          const success = await deleteFile(env, fileId, cdnUrl, url);
          if (success) {
            deletedFiles.push(fileId);
          } else {
            failedFiles.push(fileId);
          }
        }
        const directories = listData.directories;
        for (const dir of directories) {
          folderQueue.push({
            path: dir
          });
        }
      }
      if (deletedFiles.length > 0) {
        waitUntil(batchRemoveFilesFromIndex(context, deletedFiles));
      }
      return new Response(JSON.stringify({
        success: true,
        deleted: deletedFiles,
        failed: failedFiles
      }), {
        headers: { "Content-Type": "application/json", ...corsHeaders5 }
      });
    } catch (e2) {
      return new Response(JSON.stringify({
        success: false,
        error: e2.message
      }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders5 }
      });
    }
  }
  try {
    params.path = decodeURIComponent(params.path);
    const fileId = params.path.split(",").join("/");
    const cdnUrl = `https://${url.hostname}/file/${fileId}`;
    const success = await deleteFile(env, fileId, cdnUrl, url);
    if (!success) {
      throw new Error("Delete file failed");
    } else {
      waitUntil(removeFileFromIndex(context, fileId));
    }
    return new Response(JSON.stringify({
      success: true,
      fileId
    }), {
      headers: { "Content-Type": "application/json", ...corsHeaders5 }
    });
  } catch (e2) {
    return new Response(JSON.stringify({
      success: false,
      error: e2.message
    }), {
      status: 400,
      headers: { "Content-Type": "application/json", ...corsHeaders5 }
    });
  }
}
__name(onRequest19, "onRequest");
async function deleteFile(env, fileId, cdnUrl, url) {
  try {
    const db = getDatabase(env);
    const img = await db.getWithMetadata(fileId);
    if (!img) {
      console.warn(`File ${fileId} not found in database, skipping delete`);
      return true;
    }
    if (img.metadata?.Channel === "CloudflareR2") {
      const R2DataBase = env.img_r2;
      await R2DataBase.delete(fileId);
    }
    if (img.metadata?.Channel === "S3") {
      await deleteS3File(img);
    }
    if (img.metadata?.Channel === "Discord") {
      await deleteDiscordFile(img);
    }
    if (img.metadata?.Channel === "HuggingFace") {
      await deleteHuggingFaceFile(img);
    }
    await db.delete(fileId);
    await purgeCFCache(env, cdnUrl);
    const normalizedFolder = fileId.split("/").slice(0, -1).join("/");
    await purgeRandomFileListCache(url.origin, normalizedFolder);
    await purgePublicFileListCache(url.origin, normalizedFolder);
    return true;
  } catch (e2) {
    console.error("Delete file failed:", e2);
    return false;
  }
}
__name(deleteFile, "deleteFile");
async function deleteS3File(img) {
  const s3Client = new S3Client({
    region: img.metadata?.S3Region || "auto",
    endpoint: img.metadata?.S3Endpoint,
    credentials: {
      accessKeyId: img.metadata?.S3AccessKeyId,
      secretAccessKey: img.metadata?.S3SecretAccessKey
    },
    forcePathStyle: img.metadata?.S3PathStyle || false
    // 是否启用路径风格
  });
  const bucketName = img.metadata?.S3BucketName;
  const key = img.metadata?.S3FileKey;
  try {
    await s3Client.send(new DeleteObjectCommand({
      Bucket: bucketName,
      Key: key
    }));
    return true;
  } catch (error) {
    console.error("S3 Delete Failed:", error);
    return false;
  }
}
__name(deleteS3File, "deleteS3File");
async function deleteDiscordFile(img) {
  const botToken = img.metadata?.DiscordBotToken;
  const channelId = img.metadata?.DiscordChannelId;
  const messageId = img.metadata?.DiscordMessageId;
  if (!botToken || !channelId || !messageId) {
    console.warn("Discord file missing required metadata for deletion");
    return false;
  }
  try {
    const discordAPI = new DiscordAPI(botToken);
    const success = await discordAPI.deleteMessage(channelId, messageId);
    if (!success) {
      console.error("Discord Delete Failed: API returned false");
    }
    return success;
  } catch (error) {
    console.error("Discord Delete Failed:", error);
    return false;
  }
}
__name(deleteDiscordFile, "deleteDiscordFile");
async function deleteHuggingFaceFile(img) {
  const token = img.metadata?.HfToken;
  const repo = img.metadata?.HfRepo;
  const filePath = img.metadata?.HfFilePath;
  const isPrivate = img.metadata?.HfIsPrivate || false;
  if (!token || !repo || !filePath) {
    console.warn("HuggingFace file missing required metadata for deletion");
    return false;
  }
  try {
    const huggingfaceAPI = new HuggingFaceAPI(token, repo, isPrivate);
    const success = await huggingfaceAPI.deleteFile(filePath, `Delete ${filePath}`);
    if (!success) {
      console.error("HuggingFace Delete Failed: API returned false");
    }
    return success;
  } catch (error) {
    console.error("HuggingFace Delete Failed:", error);
    return false;
  }
}
__name(deleteHuggingFaceFile, "deleteHuggingFaceFile");

// functions/api/manage/block/[[path]].js
async function onRequest20(context) {
  const {
    request,
    // same as existing Worker API
    env,
    // same as existing Worker API
    params,
    // if filename includes [id] or [[path]]
    waitUntil,
    // same as ctx.waitUntil in existing Worker API
    next,
    // used for middleware or to fetch assets
    data
    // arbitrary space for passing data between middlewares
  } = context;
  const url = new URL(request.url);
  if (params.path) {
    params.path = String(params.path).split(",").join("/");
  }
  const cdnUrl = `https://${url.hostname}/file/${params.path}`;
  params.path = decodeURIComponent(params.path);
  const db = getDatabase(env);
  const value = await db.getWithMetadata(params.path);
  value.metadata.ListType = "Block";
  await db.put(params.path, value.value, { metadata: value.metadata });
  const info = JSON.stringify(value.metadata);
  await purgeCFCache(env, cdnUrl);
  const normalizedFolder = params.path.split("/").slice(0, -1).join("/");
  await purgeRandomFileListCache(url.origin, normalizedFolder);
  await purgePublicFileListCache(url.origin, normalizedFolder);
  waitUntil(addFileToIndex(context, params.path, value.metadata));
  return new Response(info);
}
__name(onRequest20, "onRequest");

// functions/api/manage/white/[[path]].js
async function onRequest21(context) {
  const {
    request,
    // same as existing Worker API
    env,
    // same as existing Worker API
    params,
    // if filename includes [id] or [[path]]
    waitUntil,
    // same as ctx.waitUntil in existing Worker API
    next,
    // used for middleware or to fetch assets
    data
    // arbitrary space for passing data between middlewares
  } = context;
  const url = new URL(request.url);
  if (params.path) {
    params.path = String(params.path).split(",").join("/");
  }
  const cdnUrl = `https://${url.hostname}/file/${params.path}`;
  params.path = decodeURIComponent(params.path);
  const db = getDatabase(env);
  const value = await db.getWithMetadata(params.path);
  value.metadata.ListType = "White";
  await db.put(params.path, value.value, { metadata: value.metadata });
  const info = JSON.stringify(value.metadata);
  await purgeCFCache(env, cdnUrl);
  const normalizedFolder = params.path.split("/").slice(0, -1).join("/");
  await purgeRandomFileListCache(url.origin, normalizedFolder);
  await purgePublicFileListCache(url.origin, normalizedFolder);
  waitUntil(addFileToIndex(context, params.path, value.metadata));
  return new Response(info);
}
__name(onRequest21, "onRequest");

// functions/api/manage/metadata/[[path]].js
var corsHeaders6 = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT, PATCH, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400"
};
async function onRequest22(context) {
  const { request, env, params, waitUntil } = context;
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders6
    });
  }
  if (request.method !== "PATCH") {
    return new Response(JSON.stringify({
      success: false,
      message: "Method not allowed. Use PATCH."
    }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders6 }
    });
  }
  try {
    const fileId = decodeURIComponent(params.path).split(",").join("/");
    if (!fileId) {
      return new Response(JSON.stringify({
        success: false,
        message: "File ID is required."
      }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders6 }
      });
    }
    let body;
    try {
      body = await request.json();
    } catch (e2) {
      return new Response(JSON.stringify({
        success: false,
        message: "Invalid request body. Expected JSON."
      }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders6 }
      });
    }
    if (!body || typeof body.FileName !== "string" && typeof body.FileType !== "string") {
      return new Response(JSON.stringify({
        success: false,
        message: "At least one of FileName or FileType is required."
      }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders6 }
      });
    }
    const db = getDatabase(env);
    const fileData = await db.getWithMetadata(fileId);
    if (!fileData || !fileData.metadata) {
      return new Response(JSON.stringify({
        success: false,
        message: "File not found."
      }), {
        status: 404,
        headers: { "Content-Type": "application/json", ...corsHeaders6 }
      });
    }
    const updatedMetadata = { ...fileData.metadata };
    if (typeof body.FileName === "string") {
      updatedMetadata.FileName = body.FileName;
    }
    if (typeof body.FileType === "string") {
      updatedMetadata.FileType = body.FileType;
    }
    await db.put(fileId, fileData.value, { metadata: updatedMetadata });
    waitUntil(addFileToIndex(context, fileId, updatedMetadata));
    return new Response(JSON.stringify({
      success: true,
      metadata: updatedMetadata
    }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders6 }
    });
  } catch (error) {
    console.error("Error updating metadata:", error);
    return new Response(JSON.stringify({
      success: false,
      message: error.message || "Internal server error."
    }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders6 }
    });
  }
}
__name(onRequest22, "onRequest");

// functions/api/manage/move/[[path]].js
async function onRequest23(context) {
  const { request, env, params, waitUntil } = context;
  const url = new URL(request.url);
  const rawDist = url.searchParams.get("dist") || "";
  const dist = sanitizeUploadFolder(rawDist);
  const folder = url.searchParams.get("folder");
  if (folder === "true") {
    try {
      params.path = decodeURIComponent(params.path);
      const folderQueue = [{
        path: params.path.split(",").join("/"),
        dist
      }];
      const processedFiles = [];
      const failedFiles = [];
      while (folderQueue.length > 0) {
        const currentFolder = folderQueue.shift();
        const curFolderName = currentFolder.path.split("/").pop();
        const listUrl = new URL(`${url.origin}/api/manage/list?count=-1&dir=${currentFolder.path}`);
        const listRequest = new Request(listUrl, {
          headers: request.headers
        });
        const listResponse = await fetch(listRequest);
        const listData = await listResponse.json();
        const files = listData.files;
        const folderDist = currentFolder.dist === "" ? curFolderName : `${currentFolder.dist}/${curFolderName}`;
        for (const file of files) {
          const fileId = file.name;
          const fileName = file.name.split("/").pop();
          const newFileId = `${folderDist}/${fileName}`;
          const cdnUrl = `https://${url.hostname}/file/${fileId}`;
          const success = await moveFile(env, fileId, newFileId, cdnUrl, url);
          if (success) {
            processedFiles.push({ fileId, newFileId });
          } else {
            failedFiles.push(fileId);
          }
        }
        const directories = listData.directories;
        for (const dir of directories) {
          folderQueue.push({
            path: dir,
            dist: folderDist
          });
        }
      }
      if (processedFiles.length > 0) {
        waitUntil(batchMoveFilesInIndex(context, processedFiles.map((file) => {
          return {
            originalFileId: file.fileId,
            newFileId: file.newFileId
          };
        })));
      }
      return new Response(JSON.stringify({
        success: true,
        processed: processedFiles,
        failed: failedFiles
      }));
    } catch (e2) {
      return new Response(JSON.stringify({
        success: false,
        error: e2.message
      }), { status: 400 });
    }
  }
  try {
    params.path = decodeURIComponent(params.path);
    const fileId = params.path.split(",").join("/");
    const fileKey = fileId.split("/").pop();
    const newFileId = dist === "" ? fileKey : `${dist}/${fileKey}`;
    const cdnUrl = `https://${url.hostname}/file/${fileId}`;
    const success = await moveFile(env, fileId, newFileId, cdnUrl, url);
    if (!success) {
      throw new Error("Move file failed");
    } else {
      waitUntil(moveFileInIndex(context, fileId, newFileId));
    }
    return new Response(JSON.stringify({
      success: true,
      fileId,
      newFileId
    }));
  } catch (e2) {
    return new Response(JSON.stringify({
      success: false,
      error: e2.message
    }), { status: 400 });
  }
}
__name(onRequest23, "onRequest");
async function moveFile(env, fileId, newFileId, cdnUrl, url) {
  try {
    const db = getDatabase(env);
    const img = await db.getWithMetadata(fileId);
    if (img.metadata?.Channel === "CloudflareR2") {
      const R2DataBase = env.img_r2;
      const object = await R2DataBase.get(fileId);
      if (!object) {
        throw new Error("R2 Object Not Found");
      }
      await R2DataBase.put(newFileId, object.body);
      await R2DataBase.delete(fileId);
    }
    if (img.metadata?.Channel === "S3") {
      const { success, newKey, error } = await moveS3File(img, newFileId);
      if (success) {
        img.metadata.S3FileKey = newFileId;
        const s3ServerDomain = img.metadata.S3Endpoint.replace(/https?:\/\//, "");
        img.metadata.S3Location = `https://${img.metadata.S3BucketName}.${s3ServerDomain}/${newKey}`;
      } else {
      }
    }
    if (img.metadata?.Channel === "Telegram" || img.metadata?.Channel === void 0) {
      throw new Error("Unsupported Channel");
    }
    const DirectoryPath = newFileId.split("/").slice(0, -1).join("/") === "" ? "" : newFileId.split("/").slice(0, -1).join("/") + "/";
    img.metadata.Directory = DirectoryPath;
    await db.put(newFileId, img.value, { metadata: img.metadata });
    await db.delete(fileId);
    await purgeCFCache(env, cdnUrl);
    const normalizedFolder = fileId.split("/").slice(0, -1).join("/");
    const normalizedDist = newFileId.split("/").slice(0, -1).join("/");
    await purgeRandomFileListCache(url.origin, normalizedFolder, normalizedDist);
    await purgePublicFileListCache(url.origin, normalizedFolder, normalizedDist);
    return true;
  } catch (e2) {
    console.error("Move file failed:", e2);
    return false;
  }
}
__name(moveFile, "moveFile");
async function moveS3File(img, newFileId) {
  const s3Client = new S3Client({
    region: img.metadata?.S3Region || "auto",
    endpoint: img.metadata?.S3Endpoint,
    credentials: {
      accessKeyId: img.metadata?.S3AccessKeyId,
      secretAccessKey: img.metadata?.S3SecretAccessKey
    },
    forcePathStyle: img.metadata?.S3PathStyle || false
    // 是否启用路径风格
  });
  const bucketName = img.metadata?.S3BucketName;
  const oldKey = img.metadata?.S3FileKey;
  const newKey = newFileId;
  try {
    await s3Client.send(new CopyObjectCommand({
      Bucket: bucketName,
      CopySource: `/${bucketName}/${oldKey}`,
      Key: newKey
    }));
    await s3Client.send(new DeleteObjectCommand({
      Bucket: bucketName,
      Key: oldKey
    }));
    return { success: true, newKey };
  } catch (error) {
    console.error("S3 Move Failed:", error);
    return { success: false, error: error.message };
  }
}
__name(moveS3File, "moveS3File");

// functions/api/manage/rename/[[path]].js
var corsHeaders7 = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT, PATCH, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400"
};
async function onRequest24(context) {
  const { request, env, params, waitUntil } = context;
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders7
    });
  }
  if (request.method !== "POST") {
    return new Response(JSON.stringify({
      success: false,
      message: "Method not allowed. Use POST."
    }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders7 }
    });
  }
  try {
    const fileId = decodeURIComponent(params.path).split(",").join("/");
    if (!fileId) {
      return new Response(JSON.stringify({
        success: false,
        message: "File ID is required."
      }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders7 }
      });
    }
    let body;
    try {
      body = await request.json();
    } catch (e2) {
      return new Response(JSON.stringify({
        success: false,
        message: "Invalid request body. Expected JSON."
      }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders7 }
      });
    }
    if (!body || typeof body.newFileId !== "string" || !body.newFileId.trim()) {
      return new Response(JSON.stringify({
        success: false,
        message: "newFileId is required and must be a non-empty string."
      }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders7 }
      });
    }
    const newFileId = sanitizeUploadFolder(body.newFileId.trim());
    const url = new URL(request.url);
    const db = getDatabase(env);
    const fileData = await db.getWithMetadata(fileId);
    if (!fileData || !fileData.metadata) {
      return new Response(JSON.stringify({
        success: false,
        message: "File not found."
      }), {
        status: 404,
        headers: { "Content-Type": "application/json", ...corsHeaders7 }
      });
    }
    const existingFile = await db.getWithMetadata(newFileId);
    if (existingFile && existingFile.value !== null) {
      return new Response(JSON.stringify({
        success: false,
        message: "\u76EE\u6807\u6587\u4EF6\u540D\u5DF2\u5B58\u5728"
      }), {
        status: 409,
        headers: { "Content-Type": "application/json", ...corsHeaders7 }
      });
    }
    const metadata = { ...fileData.metadata };
    if (metadata?.Channel === "CloudflareR2") {
      const R2DataBase = env.img_r2;
      const object = await R2DataBase.get(fileId);
      if (!object) {
        throw new Error("R2 Object Not Found");
      }
      await R2DataBase.put(newFileId, object.body);
      await R2DataBase.delete(fileId);
    }
    if (metadata?.Channel === "S3") {
      const { success, newKey, error } = await moveS3File2(fileData, newFileId);
      if (success) {
        metadata.S3FileKey = newFileId;
        const s3ServerDomain = metadata.S3Endpoint.replace(/https?:\/\//, "");
        metadata.S3Location = `https://${metadata.S3BucketName}.${s3ServerDomain}/${newKey}`;
      } else {
      }
    }
    if (metadata?.Channel === "Telegram" || metadata?.Channel === void 0) {
      return new Response(JSON.stringify({
        success: false,
        message: "\u65E7\u7248 Telegram/Telegraph \u6E20\u9053\u4E0D\u652F\u6301\u91CD\u547D\u540D"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders7 }
      });
    }
    const DirectoryPath = newFileId.split("/").slice(0, -1).join("/") === "" ? "" : newFileId.split("/").slice(0, -1).join("/") + "/";
    metadata.Directory = DirectoryPath;
    await db.put(newFileId, fileData.value, { metadata });
    await db.delete(fileId);
    const cdnUrl = `https://${url.hostname}/file/${fileId}`;
    await purgeCFCache(env, cdnUrl);
    const normalizedFolder = fileId.split("/").slice(0, -1).join("/");
    const normalizedDist = newFileId.split("/").slice(0, -1).join("/");
    await purgeRandomFileListCache(url.origin, normalizedFolder, normalizedDist);
    await purgePublicFileListCache(url.origin, normalizedFolder, normalizedDist);
    waitUntil(moveFileInIndex(context, fileId, newFileId));
    return new Response(JSON.stringify({
      success: true,
      newFileId,
      metadata
    }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders7 }
    });
  } catch (error) {
    console.error("Error renaming file:", error);
    return new Response(JSON.stringify({
      success: false,
      message: error.message || "Internal server error."
    }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders7 }
    });
  }
}
__name(onRequest24, "onRequest");
async function moveS3File2(img, newFileId) {
  const s3Client = new S3Client({
    region: img.metadata?.S3Region || "auto",
    endpoint: img.metadata?.S3Endpoint,
    credentials: {
      accessKeyId: img.metadata?.S3AccessKeyId,
      secretAccessKey: img.metadata?.S3SecretAccessKey
    },
    forcePathStyle: img.metadata?.S3PathStyle || false
  });
  const bucketName = img.metadata?.S3BucketName;
  const oldKey = img.metadata?.S3FileKey;
  const newKey = newFileId;
  try {
    await s3Client.send(new CopyObjectCommand({
      Bucket: bucketName,
      CopySource: `/${bucketName}/${oldKey}`,
      Key: newKey
    }));
    await s3Client.send(new DeleteObjectCommand({
      Bucket: bucketName,
      Key: oldKey
    }));
    return { success: true, newKey };
  } catch (error) {
    console.error("S3 Move Failed:", error);
    return { success: false, error: error.message };
  }
}
__name(moveS3File2, "moveS3File");

// functions/utils/tagHelpers.js
function validateTag(tag) {
  if (!tag || typeof tag !== "string") {
    return false;
  }
  return /^[\w\u4e00-\u9fa5\u3040-\u309f\u30a0-\u30ff\uac00-\ud7af-]+$/.test(tag);
}
__name(validateTag, "validateTag");
function normalizeTags(tags) {
  if (!Array.isArray(tags)) {
    return [];
  }
  const normalized = tags.filter((tag) => tag && typeof tag === "string").map((tag) => tag.toLowerCase().trim()).filter((tag) => validateTag(tag));
  return [...new Set(normalized)];
}
__name(normalizeTags, "normalizeTags");
function mergeTags(existingTags, newTags, action) {
  const existing = Array.isArray(existingTags) ? existingTags : [];
  const normalized = normalizeTags(newTags);
  switch (action) {
    case "set":
      return normalized;
    case "add":
      return normalizeTags([...existing, ...normalized]);
    case "remove":
      const toRemove = new Set(normalized);
      return existing.filter((tag) => !toRemove.has(tag.toLowerCase()));
    default:
      throw new Error(`Invalid action: ${action}. Must be 'set', 'add', or 'remove'`);
  }
}
__name(mergeTags, "mergeTags");
function filterTagsByPrefix(tags, prefix, limit = 20) {
  if (!Array.isArray(tags) || !prefix || typeof prefix !== "string") {
    return [];
  }
  const prefixLower = prefix.toLowerCase().trim();
  return tags.filter((tag) => tag.toLowerCase().startsWith(prefixLower)).slice(0, limit);
}
__name(filterTagsByPrefix, "filterTagsByPrefix");

// functions/api/manage/tags/[[path]].js
async function onRequest25(context) {
  const {
    request,
    env,
    params,
    waitUntil
  } = context;
  const url = new URL(request.url);
  if (params.path) {
    params.path = String(params.path).split(",").join("/");
  }
  const fileId = decodeURIComponent(params.path);
  const db = getDatabase(env);
  try {
    if (request.method === "GET") {
      return await handleGetTags(db, fileId);
    } else if (request.method === "POST") {
      return await handleUpdateTags(context, db, fileId, url.hostname);
    } else {
      return new Response(JSON.stringify({
        error: "Method not allowed",
        allowedMethods: ["GET", "POST"]
      }), {
        status: 405,
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    console.error(`Error in tag management for ${fileId}:`, error);
    return new Response(JSON.stringify({
      error: "Internal server error",
      message: error.message
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
__name(onRequest25, "onRequest");
async function handleGetTags(db, fileId) {
  try {
    const fileData = await db.getWithMetadata(fileId);
    if (!fileData || !fileData.metadata) {
      return new Response(JSON.stringify({
        error: "File not found",
        fileId
      }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store"
        }
      });
    }
    const tags = fileData.metadata.Tags || [];
    return new Response(JSON.stringify({
      success: true,
      fileId,
      tags
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store"
      }
    });
  } catch (error) {
    throw new Error(`Failed to get tags: ${error.message}`);
  }
}
__name(handleGetTags, "handleGetTags");
async function handleUpdateTags(context, db, fileId, hostname) {
  const { request, waitUntil } = context;
  try {
    const body = await request.json();
    const { action = "set", tags = [] } = body;
    if (!["set", "add", "remove"].includes(action)) {
      return new Response(JSON.stringify({
        error: "Invalid action",
        message: "Action must be one of: set, add, remove"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (!Array.isArray(tags)) {
      return new Response(JSON.stringify({
        error: "Invalid tags format",
        message: "Tags must be an array of strings"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const invalidTags = tags.filter((tag) => !validateTag(tag));
    if (invalidTags.length > 0) {
      return new Response(JSON.stringify({
        error: "Invalid tag format",
        message: "Tags must contain only alphanumeric characters, underscores, hyphens, and CJK characters",
        invalidTags
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const fileData = await db.getWithMetadata(fileId);
    if (!fileData || !fileData.metadata) {
      return new Response(JSON.stringify({
        error: "File not found",
        fileId
      }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    const existingTags = fileData.metadata.Tags || [];
    const updatedTags = mergeTags(existingTags, tags, action);
    fileData.metadata.Tags = updatedTags;
    await db.put(fileId, fileData.value, {
      metadata: fileData.metadata
    });
    const cdnUrl = `https://${hostname}/file/${fileId}`;
    waitUntil(purgeCFCache(context.env, cdnUrl));
    waitUntil(addFileToIndex(context, fileId, fileData.metadata));
    return new Response(JSON.stringify({
      success: true,
      fileId,
      action,
      tags: updatedTags,
      metadata: fileData.metadata
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    throw new Error(`Failed to update tags: ${error.message}`);
  }
}
__name(handleUpdateTags, "handleUpdateTags");

// functions/api/manage/tags/autocomplete.js
async function onRequest26(context) {
  const { request } = context;
  const url = new URL(request.url);
  if (request.method !== "GET") {
    return new Response(JSON.stringify({
      error: "Method not allowed",
      allowedMethods: ["GET"]
    }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const prefix = url.searchParams.get("prefix") || "";
    const limit = parseInt(url.searchParams.get("limit") || "20", 10);
    if (limit < 1 || limit > 100) {
      return new Response(JSON.stringify({
        error: "Invalid limit",
        message: "Limit must be between 1 and 100"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const result = await readIndex(context, {
      start: 0,
      count: 1e3,
      includeSubdirFiles: true
    });
    if (!result.success) {
      return new Response(JSON.stringify({
        error: "Failed to read index",
        message: "Index not available"
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    const allTags = /* @__PURE__ */ new Set();
    for (const file of result.files) {
      if (file.metadata && Array.isArray(file.metadata.Tags)) {
        file.metadata.Tags.forEach((tag) => {
          if (tag && typeof tag === "string") {
            allTags.add(tag.toLowerCase().trim());
          }
        });
      }
    }
    const tagsArray = Array.from(allTags).sort();
    const filteredTags = prefix ? filterTagsByPrefix(tagsArray, prefix, limit) : tagsArray.slice(0, limit);
    return new Response(JSON.stringify({
      success: true,
      prefix,
      tags: filteredTags,
      total: filteredTags.length,
      hasMore: tagsArray.length > filteredTags.length
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60"
        // Cache for 1 minute
      }
    });
  } catch (error) {
    console.error("Error in tag autocomplete:", error);
    return new Response(JSON.stringify({
      error: "Internal server error",
      message: error.message
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
__name(onRequest26, "onRequest");

// functions/api/manage/tags/batch.js
async function onRequest27(context) {
  const {
    request,
    env,
    waitUntil
  } = context;
  const url = new URL(request.url);
  if (request.method !== "POST") {
    return new Response(JSON.stringify({
      error: "Method not allowed",
      allowedMethods: ["POST"]
    }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }
  const db = getDatabase(env);
  try {
    const body = await request.json();
    const { fileIds = [], action = "set", tags = [] } = body;
    if (!Array.isArray(fileIds) || fileIds.length === 0) {
      return new Response(JSON.stringify({
        error: "Invalid fileIds",
        message: "fileIds must be a non-empty array of file identifiers"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (!["set", "add", "remove"].includes(action)) {
      return new Response(JSON.stringify({
        error: "Invalid action",
        message: "Action must be one of: set, add, remove"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (!Array.isArray(tags)) {
      return new Response(JSON.stringify({
        error: "Invalid tags format",
        message: "Tags must be an array of strings"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const invalidTags = tags.filter((tag) => !validateTag(tag));
    if (invalidTags.length > 0) {
      return new Response(JSON.stringify({
        error: "Invalid tag format",
        message: "Tags must contain only alphanumeric characters, underscores, hyphens, and CJK characters",
        invalidTags
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const results = {
      success: true,
      total: fileIds.length,
      updated: 0,
      errors: []
    };
    const updatedFiles = [];
    for (const fileId of fileIds) {
      try {
        const fileData = await db.getWithMetadata(fileId);
        if (!fileData || !fileData.metadata) {
          results.errors.push({
            fileId,
            error: "File not found"
          });
          continue;
        }
        const existingTags = fileData.metadata.Tags || [];
        const updatedTags = mergeTags(existingTags, tags, action);
        fileData.metadata.Tags = updatedTags;
        await db.put(fileId, fileData.value, {
          metadata: fileData.metadata
        });
        const cdnUrl = `https://${url.hostname}/file/${fileId}`;
        waitUntil(purgeCFCache(env, cdnUrl));
        updatedFiles.push({
          fileId,
          metadata: fileData.metadata
        });
        results.updated++;
      } catch (error) {
        results.errors.push({
          fileId,
          error: error.message
        });
      }
    }
    if (updatedFiles.length > 0) {
      waitUntil(batchAddFilesToIndex(context, updatedFiles, { skipExisting: false }));
    }
    if (results.errors.length > 0) {
      results.success = false;
    }
    return new Response(JSON.stringify(results), {
      status: results.success ? 200 : 207,
      // 207 = Multi-Status (partial success)
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error in batch tag update:", error);
    return new Response(JSON.stringify({
      error: "Internal server error",
      message: error.message
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
__name(onRequest27, "onRequest");

// functions/api/manage/cusConfig/list.js
async function onRequest28(context) {
  const {
    request,
    // same as existing Worker API
    env,
    // same as existing Worker API
    params,
    // if filename includes [id] or [[path]]
    waitUntil,
    // same as ctx.waitUntil in existing Worker API
    next,
    // used for middleware or to fetch assets
    data
    // arbitrary space for passing data between middlewares
  } = context;
  const url = new URL(request.url);
  let start = parseInt(url.searchParams.get("start"), 10) || 0;
  let count = parseInt(url.searchParams.get("count"), 10) || 10;
  start = Math.max(0, start);
  count = Math.max(1, count);
  let allRecords = [];
  allRecords = await readIndex(context, { count: -1, includeSubdirFiles: true });
  const dealedData = await dealByIP(allRecords.files);
  dealedData.sort((a2, b2) => {
    return b2.count - a2.count;
  });
  const resultRecords = dealedData.slice(start, start + count);
  return new Response(JSON.stringify(resultRecords), {
    headers: { "Content-Type": "application/json" }
  });
}
__name(onRequest28, "onRequest");
async function dealByIP(data) {
  let dealedData = [];
  let ipSet = /* @__PURE__ */ new Set();
  data.forEach((item) => {
    if (item.metadata?.UploadIP) {
      ipSet.add(item.metadata.UploadIP);
    }
  });
  ipSet.forEach(async (ip) => {
    let ipData = data.filter((item) => item.metadata?.UploadIP === ip);
    let count = ipData.length;
    let address = ipData[0].metadata?.UploadAddress || "\u672A\u77E5";
    dealedData.push({ ip, address, count, data: ipData });
  });
  return dealedData;
}
__name(dealByIP, "dealByIP");

// functions/api/manage/cusConfig/blockip.js
async function onRequest29(context) {
  const {
    request,
    // same as existing Worker API
    env,
    // same as existing Worker API
    params,
    // if filename includes [id] or [[path]]
    waitUntil,
    // same as ctx.waitUntil in existing Worker API
    next,
    // used for middleware or to fetch assets
    data
    // arbitrary space for passing data between middlewares
  } = context;
  try {
    const db = getDatabase(env);
    let list = await db.get("manage@blockipList");
    if (list == null) {
      list = [];
    } else {
      list = list.split(",");
    }
    const ip = await request.text();
    if (ip == null || ip == "") {
      return new Response("Error: Please input ip", { status: 400 });
    }
    list.push(ip);
    await db.put("manage@blockipList", list.join(","));
    return new Response("Add ip to block list successfully", { status: 200 });
  } catch (e2) {
    return new Response("Add ip to block list failed", { status: 500 });
  }
}
__name(onRequest29, "onRequest");

// functions/api/manage/cusConfig/blockipList.js
async function onRequest30(context) {
  const {
    request,
    // same as existing Worker API
    env,
    // same as existing Worker API
    params,
    // if filename includes [id] or [[path]]
    waitUntil,
    // same as ctx.waitUntil in existing Worker API
    next,
    // used for middleware or to fetch assets
    data
    // arbitrary space for passing data between middlewares
  } = context;
  try {
    const db = getDatabase(env);
    const list = await db.get("manage@blockipList");
    if (list == null) {
      return new Response("", { status: 200 });
    } else {
      return new Response(list, { status: 200 });
    }
  } catch (e2) {
    return new Response("fetch block ip list failed", { status: 500 });
  }
}
__name(onRequest30, "onRequest");

// functions/api/manage/cusConfig/whiteip.js
async function onRequest31(context) {
  const {
    request,
    // same as existing Worker API
    env,
    // same as existing Worker API
    params,
    // if filename includes [id] or [[path]]
    waitUntil,
    // same as ctx.waitUntil in existing Worker API
    next,
    // used for middleware or to fetch assets
    data
    // arbitrary space for passing data between middlewares
  } = context;
  try {
    const db = getDatabase(env);
    let list = await db.get("manage@blockipList");
    if (list == null) {
      list = [];
    } else {
      list = list.split(",");
    }
    const ip = await request.text();
    if (ip == null || ip == "") {
      return new Response("Error: Please input ip", { status: 400 });
    }
    list = list.filter((item) => item !== ip);
    await db.put("manage@blockipList", list.join(","));
    return new Response("delete ip from block ip list successfully", { status: 200 });
  } catch (e2) {
    return new Response("delete ip from block ip list failed", { status: 500 });
  }
}
__name(onRequest31, "onRequest");

// functions/api/manage/batch/list.js
var corsHeaders8 = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400"
};
function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders8
    }
  });
}
__name(jsonResponse, "jsonResponse");
function errorResponse(message, status = 400) {
  return jsonResponse({ success: false, error: message }, status);
}
__name(errorResponse, "errorResponse");
function isChunkedFileNeedingValue(metadata) {
  if (!metadata || !metadata.IsChunked) {
    return false;
  }
  const channel = metadata.Channel;
  return channel === "TelegramNew" || channel === "Discord";
}
__name(isChunkedFileNeedingValue, "isChunkedFileNeedingValue");
async function onRequestGet2(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  try {
    const cursor = url.searchParams.get("cursor") || null;
    let limit = parseInt(url.searchParams.get("limit"), 10) || 1e3;
    const includeValue = url.searchParams.get("includeValue") === "true";
    if (limit > 1e3) {
      limit = 1e3;
    }
    if (limit < 1) {
      limit = 1;
    }
    const db = getDatabase(env);
    const listOptions = {
      limit
    };
    if (cursor) {
      listOptions.cursor = cursor;
    }
    const listResult = await db.list(listOptions);
    if (!listResult || !listResult.keys || !Array.isArray(listResult.keys)) {
      return errorResponse("Database list operation failed", 500);
    }
    const records = [];
    for (const item of listResult.keys) {
      if (item.name.startsWith("manage@")) {
        continue;
      }
      if (item.name.startsWith("chunk_")) {
        continue;
      }
      if (!item.metadata) {
        continue;
      }
      const record = {
        id: item.name,
        metadata: item.metadata
      };
      if (includeValue && isChunkedFileNeedingValue(item.metadata)) {
        try {
          const value = await db.get(item.name);
          if (value) {
            record.value = value;
          }
        } catch (valueError) {
          console.error(`Failed to read value for ${item.name}:`, valueError);
        }
      }
      records.push(record);
    }
    const response = {
      success: true,
      records,
      nextCursor: listResult.cursor || null,
      totalProcessed: records.length
    };
    return jsonResponse(response);
  } catch (error) {
    console.error("Error in BatchListAPI:", error);
    return errorResponse(`Database read error: ${error.message}`, 500);
  }
}
__name(onRequestGet2, "onRequestGet");
async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders8
  });
}
__name(onRequestOptions, "onRequestOptions");
async function onRequest32(context) {
  const { request } = context;
  if (request.method === "GET") {
    return onRequestGet2(context);
  }
  if (request.method === "OPTIONS") {
    return onRequestOptions();
  }
  return errorResponse("Method not allowed", 405);
}
__name(onRequest32, "onRequest");

// functions/api/manage/batch/settings.js
var corsHeaders9 = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400"
};
function jsonResponse2(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders9
    }
  });
}
__name(jsonResponse2, "jsonResponse");
function errorResponse2(message, status = 400) {
  return jsonResponse2({ success: false, error: message }, status);
}
__name(errorResponse2, "errorResponse");
function isIndexRelatedKey(key) {
  if (key === "manage@index") {
    return true;
  }
  if (key.startsWith("manage@index_")) {
    return true;
  }
  if (key.startsWith("manage@index@")) {
    return true;
  }
  if (key === "manage@indexMeta") {
    return true;
  }
  return false;
}
__name(isIndexRelatedKey, "isIndexRelatedKey");
function stripManagePrefix(key) {
  const prefix = "manage@";
  if (key.startsWith(prefix)) {
    return key.slice(prefix.length);
  }
  return key;
}
__name(stripManagePrefix, "stripManagePrefix");
async function onRequestGet3(context) {
  const { env } = context;
  try {
    const db = getDatabase(env);
    const settings = {};
    let cursor = null;
    do {
      const listOptions = {
        prefix: "manage@",
        limit: 1e3
      };
      if (cursor) {
        listOptions.cursor = cursor;
      }
      const listResult = await db.list(listOptions);
      if (!listResult || !listResult.keys || !Array.isArray(listResult.keys)) {
        return errorResponse2("Database list operation failed", 500);
      }
      for (const item of listResult.keys) {
        const key = item.name;
        if (isIndexRelatedKey(key)) {
          continue;
        }
        try {
          const value = await db.get(key);
          if (value !== null && value !== void 0) {
            let parsedValue;
            try {
              parsedValue = JSON.parse(value);
            } catch {
              parsedValue = value;
            }
            const settingKey = stripManagePrefix(key);
            settings[settingKey] = parsedValue;
          }
        } catch (valueError) {
          console.error(`Failed to read value for ${key}:`, valueError);
        }
      }
      cursor = listResult.cursor || null;
    } while (cursor);
    return jsonResponse2({
      success: true,
      settings
    });
  } catch (error) {
    console.error("Error in BatchSettingsAPI:", error);
    return errorResponse2(`Database read error: ${error.message}`, 500);
  }
}
__name(onRequestGet3, "onRequestGet");
async function onRequestOptions2() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders9
  });
}
__name(onRequestOptions2, "onRequestOptions");
async function onRequest33(context) {
  const { request } = context;
  if (request.method === "GET") {
    return onRequestGet3(context);
  }
  if (request.method === "OPTIONS") {
    return onRequestOptions2();
  }
  return errorResponse2("Method not allowed", 405);
}
__name(onRequest33, "onRequest");

// functions/api/manage/batch/index/chunk.js
var corsHeaders10 = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400"
};
function jsonResponse3(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders10
    }
  });
}
__name(jsonResponse3, "jsonResponse");
function errorResponse3(message, status = 400, details = null) {
  const responseData = { success: false, error: message };
  if (details) {
    responseData.details = details;
  }
  return jsonResponse3(responseData, status);
}
__name(errorResponse3, "errorResponse");
async function calculateChecksum(data) {
  const text = JSON.stringify(data);
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b2) => b2.toString(16).padStart(2, "0")).join("");
}
__name(calculateChecksum, "calculateChecksum");
function calculateFallbackChecksum(data) {
  const text = JSON.stringify(data);
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(text);
  let h1 = 2166136261 >>> 0;
  let h2 = 2166136261 >>> 0;
  for (let i2 = 0; i2 < dataBuffer.length; i2++) {
    h1 = Math.imul(h1 ^ dataBuffer[i2], 16777619) >>> 0;
    h2 = Math.imul(h2 ^ dataBuffer[i2], 16777619 + 16) >>> 0;
  }
  return h1.toString(16).padStart(8, "0") + h2.toString(16).padStart(8, "0");
}
__name(calculateFallbackChecksum, "calculateFallbackChecksum");
function isValidSessionId(sessionId) {
  if (typeof sessionId !== "string" || sessionId.length === 0) {
    return false;
  }
  if (sessionId.length > 100) {
    return false;
  }
  const validPattern = /^[a-zA-Z0-9_-]+$/;
  return validPattern.test(sessionId);
}
__name(isValidSessionId, "isValidSessionId");
function isValidChunkId(chunkId) {
  if (typeof chunkId !== "string" || chunkId.length === 0) {
    return false;
  }
  const num = parseInt(chunkId, 10);
  return !isNaN(num) && num >= 0 && String(num) === chunkId;
}
__name(isValidChunkId, "isValidChunkId");
function sanitizeString(str) {
  if (typeof str !== "string") {
    return str;
  }
  return str.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "");
}
__name(sanitizeString, "sanitizeString");
function sanitizeObject(obj) {
  if (obj === null || obj === void 0) {
    return obj;
  }
  if (typeof obj === "string") {
    return sanitizeString(obj);
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => sanitizeObject(item));
  }
  if (typeof obj === "object") {
    const sanitized = {};
    for (const key of Object.keys(obj)) {
      sanitized[sanitizeString(key)] = sanitizeObject(obj[key]);
    }
    return sanitized;
  }
  return obj;
}
__name(sanitizeObject, "sanitizeObject");
function validateMetadata(metadata) {
  if (!metadata || typeof metadata !== "object") {
    return { valid: false, error: "metadata must be an object" };
  }
  if (metadata.FileName !== void 0 && typeof metadata.FileName !== "string") {
    return { valid: false, error: "metadata.FileName must be a string if provided" };
  }
  if (metadata.FileType !== void 0 && metadata.FileType !== null && typeof metadata.FileType !== "string") {
    return { valid: false, error: "metadata.FileType must be a string" };
  }
  if (metadata.FileSize !== void 0 && metadata.FileSize !== null && typeof metadata.FileSize !== "string") {
    return { valid: false, error: "metadata.FileSize must be a string" };
  }
  if (metadata.TimeStamp !== void 0 && typeof metadata.TimeStamp !== "number") {
    return { valid: false, error: "metadata.TimeStamp must be a number" };
  }
  if (metadata.Channel !== void 0 && metadata.Channel !== null && typeof metadata.Channel !== "string") {
    return { valid: false, error: "metadata.Channel must be a string" };
  }
  if (metadata.Tags !== void 0 && !Array.isArray(metadata.Tags)) {
    return { valid: false, error: "metadata.Tags must be an array" };
  }
  if (metadata.ListType !== void 0 && metadata.ListType !== null && typeof metadata.ListType !== "string") {
    return { valid: false, error: "metadata.ListType must be a string" };
  }
  if (metadata.Label !== void 0 && metadata.Label !== null && typeof metadata.Label !== "string") {
    return { valid: false, error: "metadata.Label must be a string" };
  }
  return { valid: true };
}
__name(validateMetadata, "validateMetadata");
function validateRecord(record, index) {
  if (!record || typeof record !== "object") {
    return { valid: false, error: `record[${index}] must be an object` };
  }
  if (typeof record.id !== "string" || record.id.length === 0) {
    return { valid: false, error: `record[${index}].id must be a non-empty string` };
  }
  if (record.id.includes("\0") || record.id.includes("\n") || record.id.includes("\r")) {
    return { valid: false, error: `record[${index}].id contains invalid characters` };
  }
  const metadataValidation = validateMetadata(record.metadata);
  if (!metadataValidation.valid) {
    return { valid: false, error: `record[${index}].${metadataValidation.error}` };
  }
  return { valid: true };
}
__name(validateRecord, "validateRecord");
function validateRequestBody(body) {
  if (!body || typeof body !== "object") {
    return { valid: false, error: "Request body must be a JSON object" };
  }
  if (!isValidChunkId(body.chunkId)) {
    return { valid: false, error: "chunkId must be a valid non-negative integer string" };
  }
  if (!isValidSessionId(body.sessionId)) {
    return { valid: false, error: "sessionId must be a valid alphanumeric string" };
  }
  if (!Array.isArray(body.data)) {
    return { valid: false, error: "data must be an array" };
  }
  if (body.data.length > 1e4) {
    return { valid: false, error: "data array exceeds maximum size of 10000 records" };
  }
  for (let i2 = 0; i2 < body.data.length; i2++) {
    const recordValidation = validateRecord(body.data[i2], i2);
    if (!recordValidation.valid) {
      return recordValidation;
    }
  }
  if (typeof body.checksum !== "string" || body.checksum.length === 0) {
    return { valid: false, error: "checksum must be a non-empty string" };
  }
  if (!/^[a-f0-9]{16}$/i.test(body.checksum) && !/^[a-f0-9]{64}$/i.test(body.checksum)) {
    return { valid: false, error: "checksum must be a valid hex string (16 or 64 characters)" };
  }
  return { valid: true };
}
__name(validateRequestBody, "validateRequestBody");
async function onRequestPost4(context) {
  const { request, env } = context;
  try {
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      return errorResponse3("Invalid JSON in request body", 400);
    }
    const validation = validateRequestBody(body);
    if (!validation.valid) {
      return errorResponse3("Invalid request body", 400, validation.error);
    }
    const { chunkId, sessionId, data, checksum } = body;
    const sanitizedData = sanitizeObject(data);
    const isFallback = checksum.length === 16;
    const calculatedChecksum = isFallback ? calculateFallbackChecksum(sanitizedData) : await calculateChecksum(sanitizedData);
    if (calculatedChecksum.toLowerCase() !== checksum.toLowerCase()) {
      return errorResponse3("Checksum mismatch", 400, "The provided checksum does not match the data");
    }
    const db = getDatabase(env);
    const chunkKey = `chunk_${sessionId}_${chunkId}`;
    const chunkData = {
      chunkId,
      sessionId,
      data: sanitizedData,
      checksum: calculatedChecksum,
      storedAt: Date.now(),
      recordCount: sanitizedData.length
    };
    await db.put(chunkKey, JSON.stringify(chunkData));
    return jsonResponse3({
      success: true,
      chunkId,
      storedCount: sanitizedData.length
    });
  } catch (error) {
    console.error("Error in BatchIndexChunkAPI:", error);
    return errorResponse3(`Database write error: ${error.message}`, 500);
  }
}
__name(onRequestPost4, "onRequestPost");
async function onRequestOptions3() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders10
  });
}
__name(onRequestOptions3, "onRequestOptions");
async function onRequest34(context) {
  const { request } = context;
  if (request.method === "POST") {
    return onRequestPost4(context);
  }
  if (request.method === "OPTIONS") {
    return onRequestOptions3();
  }
  return errorResponse3("Method not allowed", 405);
}
__name(onRequest34, "onRequest");

// functions/api/manage/batch/index/config.js
var corsHeaders11 = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400"
};
var INDEX_CHUNK_SIZE_D12 = 500;
var INDEX_CHUNK_SIZE_KV2 = 5e3;
function jsonResponse4(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders11
    }
  });
}
__name(jsonResponse4, "jsonResponse");
async function onRequestGet4(context) {
  const { env } = context;
  try {
    const config = checkDatabaseConfig(env);
    const chunkSize = config.usingD1 ? INDEX_CHUNK_SIZE_D12 : INDEX_CHUNK_SIZE_KV2;
    return jsonResponse4({
      success: true,
      chunkSize,
      databaseType: config.usingD1 ? "d1" : "kv"
    });
  } catch (error) {
    return jsonResponse4({ success: false, error: error.message }, 500);
  }
}
__name(onRequestGet4, "onRequestGet");
async function onRequestOptions4() {
  return new Response(null, { status: 204, headers: corsHeaders11 });
}
__name(onRequestOptions4, "onRequestOptions");
async function onRequest35(context) {
  const { request } = context;
  if (request.method === "GET") return onRequestGet4(context);
  if (request.method === "OPTIONS") return onRequestOptions4();
  return jsonResponse4({ success: false, error: "Method not allowed" }, 405);
}
__name(onRequest35, "onRequest");

// functions/api/manage/batch/index/finalize.js
var corsHeaders12 = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400"
};
var INDEX_KEY2 = "manage@index";
var INDEX_META_KEY2 = "manage@index@meta";
var INDEX_CHUNK_SIZE_D13 = 500;
var INDEX_CHUNK_SIZE_KV3 = 5e3;
function getIndexChunkSize2(env) {
  const config = checkDatabaseConfig(env);
  return config.usingD1 ? INDEX_CHUNK_SIZE_D13 : INDEX_CHUNK_SIZE_KV3;
}
__name(getIndexChunkSize2, "getIndexChunkSize");
function jsonResponse5(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders12
    }
  });
}
__name(jsonResponse5, "jsonResponse");
function errorResponse4(message, status = 400, details = null) {
  const responseData = { success: false, error: message };
  if (details) {
    responseData.details = details;
  }
  return jsonResponse5(responseData, status);
}
__name(errorResponse4, "errorResponse");
function isValidSessionId2(sessionId) {
  if (typeof sessionId !== "string" || sessionId.length === 0) {
    return false;
  }
  if (sessionId.length > 100) {
    return false;
  }
  const validPattern = /^[a-zA-Z0-9_-]+$/;
  return validPattern.test(sessionId);
}
__name(isValidSessionId2, "isValidSessionId");
function validateRequestBody2(body) {
  if (!body || typeof body !== "object") {
    return { valid: false, error: "Request body must be a JSON object" };
  }
  if (!isValidSessionId2(body.sessionId)) {
    return { valid: false, error: "sessionId must be a valid alphanumeric string" };
  }
  if (typeof body.totalChunks !== "number" || !Number.isInteger(body.totalChunks) || body.totalChunks < 0) {
    return { valid: false, error: "totalChunks must be a non-negative integer" };
  }
  if (typeof body.totalFiles !== "number" || !Number.isInteger(body.totalFiles) || body.totalFiles < 0) {
    return { valid: false, error: "totalFiles must be a non-negative integer" };
  }
  if (body.checksum !== void 0 && body.checksum !== null) {
    if (typeof body.checksum !== "string") {
      return { valid: false, error: "checksum must be a string if provided" };
    }
  }
  return { valid: true };
}
__name(validateRequestBody2, "validateRequestBody");
async function readAllChunks(db, sessionId, totalChunks) {
  const chunks = [];
  const missingChunks = [];
  for (let chunkId = 0; chunkId < totalChunks; chunkId++) {
    const chunkKey = `chunk_${sessionId}_${chunkId}`;
    try {
      const chunkDataStr = await db.get(chunkKey);
      if (!chunkDataStr) {
        missingChunks.push(chunkId);
        continue;
      }
      const chunkData = JSON.parse(chunkDataStr);
      if (!chunkData || !Array.isArray(chunkData.data)) {
        missingChunks.push(chunkId);
        continue;
      }
      chunks.push({
        chunkId: parseInt(chunkData.chunkId, 10),
        data: chunkData.data,
        recordCount: chunkData.recordCount || chunkData.data.length
      });
    } catch (error) {
      console.error(`Error reading chunk ${chunkId}:`, error);
      missingChunks.push(chunkId);
    }
  }
  if (missingChunks.length > 0) {
    return {
      success: false,
      error: `Missing chunks: ${missingChunks.join(", ")}`,
      missingChunks
    };
  }
  return { success: true, chunks };
}
__name(readAllChunks, "readAllChunks");
function assembleChunks(chunks) {
  chunks.sort((a2, b2) => a2.chunkId - b2.chunkId);
  const allFiles = [];
  for (const chunk of chunks) {
    allFiles.push(...chunk.data);
  }
  return allFiles;
}
__name(assembleChunks, "assembleChunks");
async function saveIndex(db, files, env) {
  try {
    const chunkSize = getIndexChunkSize2(env);
    const chunks = [];
    for (let i2 = 0; i2 < files.length; i2 += chunkSize) {
      const chunk = files.slice(i2, i2 + chunkSize);
      chunks.push(chunk);
    }
    const channelStats = {};
    let totalSizeMB = 0;
    for (const file of files) {
      const channelName = file.metadata?.ChannelName;
      const fileSize = parseFloat(file.metadata?.FileSize) || 0;
      totalSizeMB += fileSize;
      if (channelName) {
        if (!channelStats[channelName]) {
          channelStats[channelName] = { usedMB: 0, fileCount: 0 };
        }
        channelStats[channelName].usedMB += fileSize;
        channelStats[channelName].fileCount += 1;
      }
    }
    const lastUpdated = Date.now();
    const metadata = {
      lastUpdated,
      totalCount: files.length,
      totalSizeMB: Math.round(totalSizeMB * 100) / 100,
      channelStats,
      lastOperationId: null,
      // 重建后清除操作 ID
      chunkCount: chunks.length,
      chunkSize
    };
    await db.put(INDEX_META_KEY2, JSON.stringify(metadata));
    const savePromises = chunks.map((chunk, chunkId) => {
      const chunkKey = `${INDEX_KEY2}_${chunkId}`;
      return db.put(chunkKey, JSON.stringify(chunk));
    });
    await Promise.all(savePromises);
    console.log(`Saved index: ${chunks.length} chunks, ${files.length} total files, ${totalSizeMB.toFixed(2)} MB`);
    return { success: true, metadata };
  } catch (error) {
    console.error("Error saving index:", error);
    return { success: false, error: error.message };
  }
}
__name(saveIndex, "saveIndex");
async function cleanupChunks(db, sessionId, totalChunks) {
  const deletePromises = [];
  for (let chunkId = 0; chunkId < totalChunks; chunkId++) {
    const chunkKey = `chunk_${sessionId}_${chunkId}`;
    deletePromises.push(
      db.delete(chunkKey).catch((error) => {
        console.warn(`Failed to delete chunk ${chunkKey}:`, error);
      })
    );
  }
  await Promise.all(deletePromises);
  console.log(`Cleaned up ${totalChunks} temporary chunks for session ${sessionId}`);
}
__name(cleanupChunks, "cleanupChunks");
async function cleanupOldIndexChunks(db, newChunkCount) {
  try {
    const oldMetaStr = await db.get(INDEX_META_KEY2);
    if (!oldMetaStr) {
      return;
    }
    const oldMeta = JSON.parse(oldMetaStr);
    const oldChunkCount = oldMeta.chunkCount || 0;
    if (newChunkCount < oldChunkCount) {
      const deletePromises = [];
      for (let i2 = newChunkCount; i2 < oldChunkCount; i2++) {
        const chunkKey = `${INDEX_KEY2}_${i2}`;
        deletePromises.push(
          db.delete(chunkKey).catch((error) => {
            console.warn(`Failed to delete old index chunk ${chunkKey}:`, error);
          })
        );
      }
      await Promise.all(deletePromises);
      console.log(`Cleaned up ${oldChunkCount - newChunkCount} old index chunks`);
    }
  } catch (error) {
    console.warn("Error cleaning up old index chunks:", error);
  }
}
__name(cleanupOldIndexChunks, "cleanupOldIndexChunks");
async function onRequestPost5(context) {
  const { request, env } = context;
  try {
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      return errorResponse4("Invalid JSON in request body", 400);
    }
    const validation = validateRequestBody2(body);
    if (!validation.valid) {
      return errorResponse4("Invalid request body", 400, validation.error);
    }
    const { sessionId, totalChunks, totalFiles } = body;
    const db = getDatabase(env);
    if (totalChunks === 0 || totalFiles === 0) {
      const saveResult2 = await saveIndex(db, [], env);
      if (!saveResult2.success) {
        return errorResponse4("Failed to save empty index", 500, saveResult2.error);
      }
      await cleanupOldIndexChunks(db, 0);
      return jsonResponse5({
        success: true,
        indexedCount: 0,
        lastUpdated: saveResult2.metadata.lastUpdated
      });
    }
    const chunksResult = await readAllChunks(db, sessionId, totalChunks);
    if (!chunksResult.success) {
      return errorResponse4("Failed to read chunks", 400, chunksResult.error);
    }
    const allFiles = assembleChunks(chunksResult.chunks);
    if (allFiles.length !== totalFiles) {
      console.warn(`File count mismatch: expected ${totalFiles}, got ${allFiles.length}`);
    }
    const chunkSize = getIndexChunkSize2(env);
    const newChunkCount = Math.ceil(allFiles.length / chunkSize);
    await cleanupOldIndexChunks(db, newChunkCount);
    const saveResult = await saveIndex(db, allFiles, env);
    if (!saveResult.success) {
      return errorResponse4("Failed to save index", 500, saveResult.error);
    }
    if (context.waitUntil) {
      context.waitUntil(cleanupChunks(db, sessionId, totalChunks));
    } else {
      await cleanupChunks(db, sessionId, totalChunks);
    }
    return jsonResponse5({
      success: true,
      indexedCount: allFiles.length,
      lastUpdated: saveResult.metadata.lastUpdated
    });
  } catch (error) {
    console.error("Error in BatchIndexFinalizeAPI:", error);
    return errorResponse4(`Server error: ${error.message}`, 500);
  }
}
__name(onRequestPost5, "onRequestPost");
async function onRequestOptions5() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders12
  });
}
__name(onRequestOptions5, "onRequestOptions");
async function onRequest36(context) {
  const { request } = context;
  if (request.method === "POST") {
    return onRequestPost5(context);
  }
  if (request.method === "OPTIONS") {
    return onRequestOptions5();
  }
  return errorResponse4("Method not allowed", 405);
}
__name(onRequest36, "onRequest");

// functions/api/manage/batch/restore/chunk.js
var corsHeaders13 = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400"
};
function jsonResponse6(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders13
    }
  });
}
__name(jsonResponse6, "jsonResponse");
function errorResponse5(message, status = 400, details = null) {
  const responseData = { success: false, error: message };
  if (details) {
    responseData.details = details;
  }
  return jsonResponse6(responseData, status);
}
__name(errorResponse5, "errorResponse");
async function onRequestPost6(context) {
  const { request, env } = context;
  try {
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      return errorResponse5("Invalid JSON in request body", 400);
    }
    const { type, data } = body;
    if (!type || !["files", "settings"].includes(type)) {
      return errorResponse5('type must be "files" or "settings"', 400);
    }
    if (!data || typeof data !== "object") {
      return errorResponse5("data must be an object", 400);
    }
    const db = getDatabase(env);
    let restoredCount = 0;
    let failedCount = 0;
    const errors = [];
    if (type === "files") {
      const filePromises = Object.entries(data).map(async ([key, fileData]) => {
        try {
          if (fileData.value) {
            await db.put(key, fileData.value, {
              metadata: fileData.metadata
            });
          } else if (fileData.metadata) {
            await db.put(key, "", {
              metadata: fileData.metadata
            });
          }
          return { success: true };
        } catch (error) {
          return { success: false, key, error: error.message };
        }
      });
      const results = await Promise.all(filePromises);
      for (const result of results) {
        if (result.success) {
          restoredCount++;
        } else {
          failedCount++;
          errors.push({ key: result.key, error: result.error });
        }
      }
    } else if (type === "settings") {
      const settingPromises = Object.entries(data).map(async ([key, value]) => {
        try {
          const valueToStore = typeof value === "string" ? value : JSON.stringify(value);
          const fullKey = key.startsWith("manage@") ? key : `manage@${key}`;
          await db.put(fullKey, valueToStore);
          return { success: true };
        } catch (error) {
          return { success: false, key, error: error.message };
        }
      });
      const results = await Promise.all(settingPromises);
      for (const result of results) {
        if (result.success) {
          restoredCount++;
        } else {
          failedCount++;
          errors.push({ key: result.key, error: result.error });
        }
      }
    }
    return jsonResponse6({
      success: true,
      restoredCount,
      failedCount,
      errors: errors.length > 0 ? errors.slice(0, 10) : void 0
      // 只返回前10个错误
    });
  } catch (error) {
    console.error("Error in BatchRestoreChunkAPI:", error);
    return errorResponse5(`Server error: ${error.message}`, 500);
  }
}
__name(onRequestPost6, "onRequestPost");
async function onRequestOptions6() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders13
  });
}
__name(onRequestOptions6, "onRequestOptions");
async function onRequest37(context) {
  const { request } = context;
  if (request.method === "POST") {
    return onRequestPost6(context);
  }
  if (request.method === "OPTIONS") {
    return onRequestOptions6();
  }
  return errorResponse5("Method not allowed", 405);
}
__name(onRequest37, "onRequest");

// functions/random/adaptive.js
var MOBILE_UA_REGEX = /Mobile|Android|iPhone|iPad|iPod|webOS|BlackBerry|Opera Mini|IEMobile/i;
function detectDevice(request) {
  const viewportWidth = request.headers.get("Sec-CH-Viewport-Width");
  const viewportHeight = request.headers.get("Sec-CH-Viewport-Height");
  if (viewportWidth !== null && viewportHeight !== null) {
    const width = Number(viewportWidth);
    const height = Number(viewportHeight);
    if (isFinite(width) && isFinite(height) && width > 0 && height > 0) {
      return {
        source: "client-hints",
        viewportRatio: width / height
      };
    }
  }
  const userAgent = request.headers.get("User-Agent");
  if (userAgent) {
    const isMobile = MOBILE_UA_REGEX.test(userAgent);
    return {
      source: "user-agent",
      deviceType: isMobile ? "mobile" : "desktop"
    };
  }
  return { source: null };
}
__name(detectDevice, "detectDevice");
function resolveOrientation(deviceInfo) {
  if (deviceInfo.source === "client-hints") {
    const ratio = deviceInfo.viewportRatio;
    if (ratio > 1.1) {
      return "landscape";
    }
    if (ratio < 0.9) {
      return "portrait";
    }
    return "square";
  }
  if (deviceInfo.source === "user-agent") {
    if (deviceInfo.deviceType === "mobile") {
      return "portrait";
    }
    if (deviceInfo.deviceType === "desktop") {
      return "landscape";
    }
  }
  return "";
}
__name(resolveOrientation, "resolveOrientation");
function addClientHintsHeaders(headers) {
  headers.set("Accept-CH", "Sec-CH-Viewport-Width, Sec-CH-Viewport-Height");
  const varyValues = ["Sec-CH-Viewport-Width", "Sec-CH-Viewport-Height", "User-Agent"];
  const existingVary = headers.get("Vary");
  if (existingVary) {
    const existingValues = existingVary.split(",").map((v2) => v2.trim().toLowerCase());
    const newValues = varyValues.filter((v2) => !existingValues.includes(v2.toLowerCase()));
    if (newValues.length > 0) {
      headers.set("Vary", existingVary + ", " + newValues.join(", "));
    }
  } else {
    headers.set("Vary", varyValues.join(", "));
  }
  return headers;
}
__name(addClientHintsHeaders, "addClientHintsHeaders");

// functions/random/index.js
var corsHeaders14 = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400"
};
var othersConfig2 = {};
var allowRandom = false;
async function onRequest38(context) {
  const {
    request,
    // same as existing Worker API
    env,
    // same as existing Worker API
    params,
    // if filename includes [id] or [[path]]
    waitUntil,
    // same as ctx.waitUntil in existing Worker API
    next,
    // used for middleware or to fetch assets
    data
    // arbitrary space for passing data between middlewares
  } = context;
  const requestUrl = new URL(request.url);
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders14 });
  }
  othersConfig2 = await fetchOthersConfig(env);
  allowRandom = othersConfig2.randomImageAPI.enabled;
  const allowedDir = othersConfig2.randomImageAPI.allowedDir;
  if (allowRandom != true) {
    return new Response(JSON.stringify({ error: "Random is disabled" }), { status: 403, headers: corsHeaders14 });
  }
  const allowedDirList = allowedDir.split(",");
  const allowedDirListFormatted = allowedDirList.map((item) => {
    return item.trim().replace(/^\/+/, "").replace(/\/{2,}/g, "/").replace(/\/$/, "");
  });
  let fileType = requestUrl.searchParams.get("content");
  if (fileType == null) {
    fileType = ["image"];
  } else {
    fileType = fileType.split(",");
  }
  const orientationParam = requestUrl.searchParams.get("orientation") || "";
  const VALID_ORIENTATIONS = ["landscape", "portrait", "square"];
  let orientation = "";
  let isAutoMode = false;
  if (VALID_ORIENTATIONS.includes(orientationParam)) {
    orientation = orientationParam;
  } else if (orientationParam === "auto") {
    isAutoMode = true;
    const deviceInfo = detectDevice(request);
    orientation = resolveOrientation(deviceInfo);
  }
  const paramDir = requestUrl.searchParams.get("dir") || "";
  const dir = paramDir.replace(/^\/+/, "").replace(/\/{2,}/g, "/").replace(/\/$/, "");
  let dirAllowed = false;
  for (let i2 = 0; i2 < allowedDirListFormatted.length; i2++) {
    if (allowedDirListFormatted[i2] === "" || dir === allowedDirListFormatted[i2] || dir.startsWith(allowedDirListFormatted[i2] + "/")) {
      dirAllowed = true;
      break;
    }
  }
  if (!dirAllowed) {
    return new Response(JSON.stringify({ error: "Directory not allowed" }), { status: 403, headers: corsHeaders14 });
  }
  let allRecords = await getRandomFileList(context, requestUrl, dir);
  allRecords = allRecords.filter((item) => {
    return fileType.some((type) => item.FileType?.includes(type));
  });
  const allRecordsBeforeOrientationFilter = allRecords;
  if (orientation && allRecords.length > 0) {
    const SQUARE_THRESHOLD = 0.1;
    allRecords = allRecords.filter((item) => {
      if (!item.Width || !item.Height) return false;
      const ratio = item.Width / item.Height;
      switch (orientation) {
        case "landscape":
          return ratio > 1 + SQUARE_THRESHOLD;
        case "portrait":
          return ratio < 1 - SQUARE_THRESHOLD;
        case "square":
          return ratio >= 1 - SQUARE_THRESHOLD && ratio <= 1 + SQUARE_THRESHOLD;
        default:
          return true;
      }
    });
  }
  if (isAutoMode && orientation && allRecords.length === 0) {
    allRecords = allRecordsBeforeOrientationFilter;
  }
  const responseHeaders = new Headers(corsHeaders14);
  if (isAutoMode) {
    addClientHintsHeaders(responseHeaders);
  }
  if (allRecords.length == 0) {
    return new Response(JSON.stringify({}), { status: 200, headers: responseHeaders });
  } else {
    const randomIndex = Math.floor(Math.random() * allRecords.length);
    const randomKey = allRecords[randomIndex];
    const randomPath = "/file/" + randomKey.name;
    let randomUrl = randomPath;
    const randomType = requestUrl.searchParams.get("type");
    const resType = requestUrl.searchParams.get("form");
    if (randomType == "url") {
      randomUrl = requestUrl.origin + randomPath;
    }
    if (randomType == "img") {
      randomUrl = requestUrl.origin + randomPath;
      let contentType = "image/jpeg";
      const imgHeaders = new Headers(responseHeaders);
      return new Response(await fetch(randomUrl).then((res) => {
        contentType = res.headers.get("content-type");
        return res.blob();
      }), {
        headers: (() => {
          imgHeaders.set("Content-Type", contentType || "image/jpeg");
          return imgHeaders;
        })(),
        status: 200
      });
    }
    if (resType == "text") {
      return new Response(randomUrl, { status: 200, headers: responseHeaders });
    } else {
      return new Response(JSON.stringify({ url: randomUrl }), { status: 200, headers: responseHeaders });
    }
  }
}
__name(onRequest38, "onRequest");
async function getRandomFileList(context, url, dir) {
  const cache2 = caches.default;
  const cacheRes = await cache2.match(`${url.origin}/api/randomFileList?dir=${dir}`);
  if (cacheRes) {
    return JSON.parse(await cacheRes.text());
  }
  let allRecords = await readIndex(context, { directory: dir, count: -1, includeSubdirFiles: true, accessStatus: "normal" });
  allRecords = allRecords.files?.map((item) => {
    return {
      name: item.id,
      FileType: item.metadata?.FileType,
      Width: item.metadata?.Width,
      Height: item.metadata?.Height
    };
  });
  await cache2.put(`${url.origin}/api/randomFileList?dir=${dir}`, new Response(JSON.stringify(allRecords), {
    headers: {
      "Content-Type": "application/json"
    }
  }), {
    expirationTtl: 24 * 60 * 60
  });
  return allRecords;
}
__name(getRandomFileList, "getRandomFileList");

// functions/dav/[[path]].js
async function onRequest39(context) {
  const { request, env } = context;
  const authResponse = await checkAuth(request, env);
  if (authResponse) return authResponse;
  const url = new URL(request.url);
  url.pathname = url.pathname.replace(/^\/dav/, "") || "/";
  const modifiedRequest = new Request(url.toString(), request);
  switch (modifiedRequest.method) {
    case "OPTIONS":
      return handleOptions(modifiedRequest);
    case "PROPFIND":
      return handlePropfind(modifiedRequest, env);
    case "PUT":
      return handlePut(modifiedRequest, env);
    case "DELETE":
      return handleDelete(modifiedRequest, env);
    case "GET":
      return handleGet(modifiedRequest, env);
    case "MKCOL":
      return new Response(null, { status: 201 });
    default:
      return new Response("Method Not Allowed", { status: 405 });
  }
}
__name(onRequest39, "onRequest");
async function getApiHeaders(env) {
  const securityConfig2 = await fetchSecurityConfig(env);
  const adminUsername = securityConfig2.auth.admin.adminUsername;
  const adminPassword = securityConfig2.auth.admin.adminPassword;
  const authCode = securityConfig2.auth.user.authCode;
  let credentials = btoa("unset:unset");
  if (adminUsername && adminPassword) {
    credentials = btoa(`${adminUsername}:${adminPassword}`);
  }
  return {
    "Authorization": `Basic ${credentials}`,
    "authCode": authCode || ""
  };
}
__name(getApiHeaders, "getApiHeaders");
async function checkAuth(request, env) {
  const othersConfig3 = await fetchOthersConfig(env);
  const enabled = othersConfig3.webDAV.enabled;
  if (!enabled) return new Response("WebDAV is disabled", { status: 403 });
  const davUser = othersConfig3.webDAV.username;
  const davPass = othersConfig3.webDAV.password;
  if (!davUser || !davPass) return null;
  const authHeader = request.headers.get("Authorization");
  if (!authHeader) {
    return new Response("Authorization required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="WebDAV"' }
    });
  }
  const [scheme, encoded] = authHeader.split(" ");
  if (scheme !== "Basic" || !encoded) {
    return new Response("Malformed Authorization header", { status: 400 });
  }
  const [user, pass2] = atob(encoded).split(":");
  if (user !== davUser || pass2 !== davPass) {
    return new Response("Invalid credentials", { status: 403 });
  }
  return null;
}
__name(checkAuth, "checkAuth");
function handleOptions(request) {
  return new Response(null, {
    status: 204,
    headers: {
      "Allow": "OPTIONS, GET, PUT, DELETE, PROPFIND, MKCOL",
      "DAV": "1, 2",
      "MS-Author-Via": "DAV"
    }
  });
}
__name(handleOptions, "handleOptions");
async function handleGet(request, env) {
  const path = decodeURIComponent(new URL(request.url).pathname);
  if (path.endsWith("/")) {
    try {
      const dir = path === "/" ? "" : path.substring(1, path.length - 1);
      const contents = await fetchDirectoryContents(dir, env, request);
      const html = generateDirectoryListingHtml(path, contents);
      return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
    } catch (error) {
      console.error("GET (directory) failed:", error.stack);
      return new Response(`Error listing directory: ${error.message}`, { status: 500 });
    }
  } else {
    try {
      const fileUrl = new URL(`/file${path}`, request.url);
      const fileResponse = await fetch(fileUrl.toString());
      if (!fileResponse.ok) {
        return new Response("File not found", { status: fileResponse.status, statusText: fileResponse.statusText });
      }
      const response = new Response(fileResponse.body, fileResponse);
      response.headers.set("Access-Control-Allow-Origin", "*");
      return response;
    } catch (error) {
      console.error("GET (file) failed:", error.stack);
      return new Response(`Error getting file: ${error.message}`, { status: 500 });
    }
  }
}
__name(handleGet, "handleGet");
async function handlePut(request, env) {
  const fullPath = decodeURIComponent(new URL(request.url).pathname.substring(1));
  if (!fullPath || fullPath.endsWith("/")) {
    return new Response("Invalid file name", { status: 400 });
  }
  const lastSlashIndex = fullPath.lastIndexOf("/");
  let uploadFolder = lastSlashIndex > -1 ? fullPath.substring(0, lastSlashIndex) : "";
  const fileName = lastSlashIndex > -1 ? fullPath.substring(lastSlashIndex + 1) : fullPath;
  if (uploadFolder) {
    if (/%[0-9a-fA-F]{2}/.test(uploadFolder)) {
      try {
        uploadFolder = decodeURIComponent(uploadFolder);
      } catch (e2) {
      }
    }
    uploadFolder = uploadFolder.replace(/\.\./g, "_").replace(/\\/g, "/").replace(/\/{2,}/g, "/").replace(/^\/+/, "").replace(/\/+$/, "");
  }
  const fileContent = await request.blob();
  const formData = new FormData();
  formData.append("file", fileContent, fileName);
  const uploadUrl = new URL(`/upload`, request.url);
  if (uploadFolder) {
    uploadUrl.searchParams.set("uploadFolder", uploadFolder);
  }
  const othersConfig3 = await fetchOthersConfig(env);
  const webdavConfig = othersConfig3.webDAV || {};
  if (webdavConfig.uploadChannel) {
    uploadUrl.searchParams.set("uploadChannel", webdavConfig.uploadChannel);
  }
  if (webdavConfig.channelName) {
    uploadUrl.searchParams.set("channelName", webdavConfig.channelName);
  }
  try {
    const response = await fetch(uploadUrl.toString(), {
      method: "POST",
      body: formData,
      headers: await getApiHeaders(env)
    });
    const result = await response.json();
    if (response.ok && Array.isArray(result) && result.length > 0 && result[0].src) {
      return new Response(null, { status: 201 });
    } else {
      const errorMsg = result.error || JSON.stringify(result);
      console.error("Upload API error:", errorMsg);
      return new Response(`Upload failed: ${errorMsg}`, { status: 500 });
    }
  } catch (error) {
    console.error("Fetch to upload API failed:", error.stack);
    return new Response("Failed to contact upload service", { status: 502 });
  }
}
__name(handlePut, "handlePut");
async function handleDelete(request, env) {
  const path = decodeURIComponent(new URL(request.url).pathname.substring(1));
  if (!path) return new Response("Invalid path for DELETE", { status: 400 });
  const isFolder = path.endsWith("/");
  const cleanPath = isFolder ? path.slice(0, -1) : path;
  const deleteUrl = new URL(`/api/manage/delete/${cleanPath}`, request.url);
  if (isFolder) deleteUrl.searchParams.set("folder", "true");
  try {
    const response = await fetch(deleteUrl.toString(), {
      method: "DELETE",
      headers: await getApiHeaders(env)
    });
    const result = await response.json();
    if (result.success) {
      return new Response(null, { status: 204 });
    } else {
      console.error("Delete API error:", JSON.stringify(result));
      return new Response(`Deletion failed: ${result.error || "API error"}`, { status: 500 });
    }
  } catch (error) {
    console.error("Delete operation failed:", error.stack);
    return new Response(`Internal server error: ${error.message}`, { status: 500 });
  }
}
__name(handleDelete, "handleDelete");
async function handlePropfind(request, env) {
  const path = decodeURIComponent(new URL(request.url).pathname);
  try {
    const dir = path === "/" ? "" : path.substring(1, path.endsWith("/") ? path.length - 1 : path.length);
    const contents = await fetchDirectoryContents(dir, env, request);
    const xml = generateWebDAVXml(path, contents);
    return new Response(xml, { status: 207, headers: { "Content-Type": "application/xml; charset=utf-8" } });
  } catch (error) {
    console.error("Propfind failed:", error.stack);
    return new Response(`Failed to list files: ${error.message}`, { status: 500 });
  }
}
__name(handlePropfind, "handlePropfind");
async function fetchDirectoryContents(dir, env, request) {
  let allFiles = [];
  let allDirectories = [];
  const count = -1;
  const listUrl = new URL(`/api/manage/list`, request.url);
  listUrl.searchParams.set("dir", dir);
  listUrl.searchParams.set("count", count);
  const response = await fetch(listUrl.toString(), { headers: await getApiHeaders(env) });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API fetch error: Status ${response.status} - ${errorText}`);
  }
  const result = await response.json();
  if (result.error) {
    throw new Error(`API error: ${result.error} - ${result.message}`);
  }
  if (result.files && result.files.length > 0) allFiles = allFiles.concat(result.files);
  if (result.directories && result.directories.length > 0) allDirectories = allDirectories.concat(result.directories);
  return { files: allFiles, directories: [...new Set(allDirectories)] };
}
__name(fetchDirectoryContents, "fetchDirectoryContents");
function generateDirectoryListingHtml(basePath, contents) {
  let fileLinks = "";
  let dirLinks = "";
  for (const dir of contents.directories) {
    const fullDirPath = `/dav/${dir}/`;
    const dirName = dir.split("/").pop();
    dirLinks += `<li><a href="${fullDirPath}"><strong>${dirName}/</strong></a></li>`;
  }
  for (const file of contents.files) {
    const fullFilePath = `/dav/${file.name}`;
    const fileName = file.name.split("/").pop();
    const fileSize = file.metadata && file.metadata["FileSize"] ? `${file.metadata["FileSize"]} MB` : "N/A";
    fileLinks += `<li><a href="${fullFilePath}">${fileName}</a> - ${fileSize}</li>`;
  }
  let parentDirLink = "";
  if (basePath !== "/") {
    const parentPath = new URL("..", `http://dummy.com${basePath}`).pathname;
    parentDirLink = `<li><a href="/dav${parentPath}"><strong>../ (Parent Directory)</strong></a></li>`;
  }
  return `<!DOCTYPE html><html><head><title>Index of ${basePath}</title><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>body{font-family:sans-serif;padding:20px}li{margin:5px 0}</style></head><body><h1>Index of ${basePath}</h1><ul>${parentDirLink}${dirLinks}${fileLinks}</ul></body></html>`;
}
__name(generateDirectoryListingHtml, "generateDirectoryListingHtml");
function generateWebDAVXml(basePath, contents) {
  let responses = "";
  const currentPath = basePath.endsWith("/") ? basePath : `${basePath}/`;
  responses += createCollectionXml(currentPath);
  for (const dir of contents.directories) {
    responses += createCollectionXml(`/${dir}/`);
  }
  for (const file of contents.files) {
    responses += createFileXml(file);
  }
  return `<?xml version="1.0" encoding="utf-8"?><D:multistatus xmlns:D="DAV:">${responses}</D:multistatus>`;
}
__name(generateWebDAVXml, "generateWebDAVXml");
function createCollectionXml(path) {
  const now = (/* @__PURE__ */ new Date()).toUTCString();
  const cleanPath = path.endsWith("/") ? path.slice(0, -1) : path;
  const name = cleanPath.split("/").pop() || "";
  return `<D:response><D:href>${encodeURI(path)}</D:href><D:propstat><D:prop><D:displayname>${name}</D:displayname><D:resourcetype><D:collection/></D:resourcetype><D:creationdate>${now}</D:creationdate><D:getlastmodified>${now}</D:getlastmodified></D:prop><D:status>HTTP/1.1 200 OK</D:status></D:propstat></D:response>`;
}
__name(createCollectionXml, "createCollectionXml");
function createFileXml(file) {
  const now = (/* @__PURE__ */ new Date()).toUTCString();
  const fileSize = file.metadata && file.metadata["File-Size"] ? file.metadata["File-Size"] : "0";
  return `<D:response><D:href>${encodeURI(`/${file.name}`)}</D:href><D:propstat><D:prop><D:displayname>${file.name.split("/").pop()}</D:displayname><D:resourcetype/><D:creationdate>${now}</D:creationdate><D:getlastmodified>${now}</D:getlastmodified><D:getcontentlength>${fileSize}</D:getcontentlength></D:prop><D:status>HTTP/1.1 200 OK</D:status></D:propstat></D:response>`;
}
__name(createFileXml, "createFileXml");

// src/worker.js
function makeContext(request, env, ctx, params = {}, data = {}, nextFn = null) {
  return {
    request,
    env,
    params,
    data,
    waitUntil: ctx.waitUntil.bind(ctx),
    passThroughOnException: ctx.passThroughOnException?.bind(ctx),
    next: nextFn ?? (() => new Response("Not Found", { status: 404 }))
  };
}
__name(makeContext, "makeContext");
async function runMiddlewareChain(request, env, ctx, params, middlewares) {
  const chain = Array.isArray(middlewares) ? middlewares : [middlewares];
  const data = {};
  let index = 0;
  async function dispatch() {
    if (index >= chain.length) {
      return new Response("Not Found", { status: 404 });
    }
    const current = chain[index++];
    const context = makeContext(request, env, ctx, params, data, dispatch);
    return current(context);
  }
  __name(dispatch, "dispatch");
  return dispatch();
}
__name(runMiddlewareChain, "runMiddlewareChain");
function postOnly(handler) {
  return async function(context) {
    if (context.request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Access-Control-Max-Age": "86400"
        }
      });
    }
    if (context.request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }
    return handler(context);
  };
}
__name(postOnly, "postOnly");
function getOnly(handler) {
  return async function(context) {
    if (context.request.method !== "GET") {
      return new Response("Method Not Allowed", { status: 405 });
    }
    return handler(context);
  };
}
__name(getOnly, "getOnly");
var uploadMiddleware = [checkDatabaseConfig2, errorHandling, telemetryData, onRequest6];
var fileMiddleware = [checkDatabaseConfig2, onRequest7];
var davMiddleware = [checkDatabaseConfig2, onRequest39];
var randomMiddleware = [checkDatabaseConfig2, onRequest38];
function apiManageChain(handler) {
  return [...Array.isArray(onRequest13) ? onRequest13 : [onRequest13], handler];
}
__name(apiManageChain, "apiManageChain");
var ROUTES = [
  { pattern: /^\/upload\/huggingface\/getUploadUrl$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: [checkDatabaseConfig2, postOnly(onRequestPost)] },
  { pattern: /^\/upload\/huggingface\/commitUpload$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: [checkDatabaseConfig2, postOnly(onRequestPost2)] },
  { pattern: /^\/upload(\/.*)?$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: uploadMiddleware },
  { pattern: /^\/file\/(.+)$/, params: /* @__PURE__ */ __name((m2) => ({ path: m2[1] }), "params"), middlewares: fileMiddleware },
  { pattern: /^\/random(\/.*)?$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: randomMiddleware },
  { pattern: /^\/dav(\/.*)?$/, params: /* @__PURE__ */ __name((m2) => ({ path: m2[1]?.slice(1) ?? "" }), "params"), middlewares: davMiddleware },
  { pattern: /^\/api\/manage\/login$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: apiManageChain(onRequest14) },
  { pattern: /^\/api\/manage\/logout$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: apiManageChain(onRequest15) },
  { pattern: /^\/api\/manage\/quota$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: apiManageChain(onRequest17) },
  { pattern: /^\/api\/manage\/check$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: apiManageChain(onRequest18) },
  { pattern: /^\/api\/manage\/list$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: apiManageChain(onRequest16) },
  { pattern: /^\/api\/manage\/apiTokens$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: apiManageChain(onRequest5) },
  { pattern: /^\/api\/manage\/delete\/(.*)$/, params: /* @__PURE__ */ __name((m2) => ({ path: m2[1] }), "params"), middlewares: apiManageChain(onRequest19) },
  { pattern: /^\/api\/manage\/block\/(.*)$/, params: /* @__PURE__ */ __name((m2) => ({ path: m2[1] }), "params"), middlewares: apiManageChain(onRequest20) },
  { pattern: /^\/api\/manage\/white\/(.*)$/, params: /* @__PURE__ */ __name((m2) => ({ path: m2[1] }), "params"), middlewares: apiManageChain(onRequest21) },
  { pattern: /^\/api\/manage\/metadata\/(.*)$/, params: /* @__PURE__ */ __name((m2) => ({ path: m2[1] }), "params"), middlewares: apiManageChain(onRequest22) },
  { pattern: /^\/api\/manage\/move\/(.*)$/, params: /* @__PURE__ */ __name((m2) => ({ path: m2[1] }), "params"), middlewares: apiManageChain(onRequest23) },
  { pattern: /^\/api\/manage\/rename\/(.*)$/, params: /* @__PURE__ */ __name((m2) => ({ path: m2[1] }), "params"), middlewares: apiManageChain(onRequest24) },
  { pattern: /^\/api\/manage\/tags\/autocomplete$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: apiManageChain(onRequest26) },
  { pattern: /^\/api\/manage\/tags\/batch$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: apiManageChain(onRequest27) },
  { pattern: /^\/api\/manage\/tags\/(.*)$/, params: /* @__PURE__ */ __name((m2) => ({ path: m2[1] }), "params"), middlewares: apiManageChain(onRequest25) },
  { pattern: /^\/api\/manage\/sysConfig\/security$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: apiManageChain(onRequest2) },
  { pattern: /^\/api\/manage\/sysConfig\/upload$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: apiManageChain(onRequest) },
  { pattern: /^\/api\/manage\/sysConfig\/others$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: apiManageChain(onRequest4) },
  { pattern: /^\/api\/manage\/sysConfig\/page$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: apiManageChain(onRequest3) },
  { pattern: /^\/api\/manage\/cusConfig\/list$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: apiManageChain(onRequest28) },
  { pattern: /^\/api\/manage\/cusConfig\/blockip$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: apiManageChain(onRequest29) },
  { pattern: /^\/api\/manage\/cusConfig\/blockipList$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: apiManageChain(onRequest30) },
  { pattern: /^\/api\/manage\/cusConfig\/whiteip$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: apiManageChain(onRequest31) },
  { pattern: /^\/api\/manage\/batch\/list$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: apiManageChain(onRequest32) },
  { pattern: /^\/api\/manage\/batch\/settings$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: apiManageChain(onRequest33) },
  { pattern: /^\/api\/manage\/batch\/index\/chunk$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: apiManageChain(onRequest34) },
  { pattern: /^\/api\/manage\/batch\/index\/config$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: apiManageChain(onRequest35) },
  { pattern: /^\/api\/manage\/batch\/index\/finalize$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: apiManageChain(onRequest36) },
  { pattern: /^\/api\/manage\/batch\/restore\/chunk$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: apiManageChain(onRequest37) },
  { pattern: /^\/api\/login$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: [checkDatabaseConfig2, postOnly(onRequestPost3)] },
  { pattern: /^\/api\/directoryTree$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: [checkDatabaseConfig2, getOnly(onRequestGet)] },
  { pattern: /^\/api\/userConfig$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: [checkDatabaseConfig2, onRequest8] },
  { pattern: /^\/api\/channels$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: [checkDatabaseConfig2, onRequest9] },
  { pattern: /^\/api\/fetchRes$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: [checkDatabaseConfig2, onRequest10] },
  { pattern: /^\/api\/public\/list$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: [checkDatabaseConfig2, onRequest11] },
  { pattern: /^\/api\/bing\/wallpaper$/, params: /* @__PURE__ */ __name(() => ({}), "params"), middlewares: [checkDatabaseConfig2, onRequest12] }
];
var worker_default = {
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
    return new Response("Not Found", { status: 404 });
  }
};
export {
  worker_default as default
};
//# sourceMappingURL=worker.js.map
