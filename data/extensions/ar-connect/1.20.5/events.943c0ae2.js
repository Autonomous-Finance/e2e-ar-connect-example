var e, t
"function" == typeof (e = globalThis.define) && ((t = e), (e = null)),
  (function (t, r, n, o, i) {
    var s =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
              ? window
              : "undefined" != typeof global
                ? global
                : {},
      a = "function" == typeof s[o] && s[o],
      l = a.cache || {},
      f =
        "undefined" != typeof module &&
        "function" == typeof module.require &&
        module.require.bind(module)
    function u(e, r) {
      if (!l[e]) {
        if (!t[e]) {
          var n = "function" == typeof s[o] && s[o]
          if (!r && n) return n(e, !0)
          if (a) return a(e, !0)
          if (f && "string" == typeof e) return f(e)
          var i = Error("Cannot find module '" + e + "'")
          throw ((i.code = "MODULE_NOT_FOUND"), i)
        }
        ;(c.resolve = function (r) {
          var n = t[e][1][r]
          return null != n ? n : r
        }),
          (c.cache = {})
        var g = (l[e] = new u.Module(e))
        t[e][0].call(g.exports, c, g, g.exports, this)
      }
      return l[e].exports
      function c(e) {
        var t = c.resolve(e)
        return !1 === t ? {} : u(t)
      }
    }
    ;(u.isParcelRequire = !0),
      (u.Module = function (e) {
        ;(this.id = e), (this.bundle = u), (this.exports = {})
      }),
      (u.modules = t),
      (u.cache = l),
      (u.parent = a),
      (u.register = function (e, r) {
        t[e] = [
          function (e, t) {
            t.exports = r
          },
          {},
        ]
      }),
      Object.defineProperty(u, "root", {
        get: function () {
          return s[o]
        },
      }),
      (s[o] = u)
    for (var g = 0; g < r.length; g++) u(r[g])
    if (n) {
      var c = u(n)
      "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = c)
        : "function" == typeof e && e.amd
          ? e(function () {
              return c
            })
          : i && (this[i] = c)
    }
  })(
    {
      epTwP: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "config", () => i)
          var o = e("@arconnect/webext-bridge")
          let i = {
            matches: ["file://*/*", "http://*/*", "https://*/*"],
            run_at: "document_end",
            all_frames: !0,
          }
          ;(0, o.onMessage)("event", ({ data: e, sender: t }) => {
            "background" === t.context && postMessage({ type: "arconnect_event", event: e })
          }),
            (0, o.onMessage)("switch_wallet_event", ({ data: e, sender: t }) => {
              "background" === t.context &&
                dispatchEvent(new CustomEvent("walletSwitch", { detail: { address: e } }))
            }),
            (0, o.onMessage)("copy_address", async ({ sender: e, data: t }) => {
              if ("background" !== e.context) return
              let r = document.createElement("input")
              ;(r.value = t),
                document.body.appendChild(r),
                r.select(),
                document.execCommand("Copy"),
                document.body.removeChild(r)
            })
        },
        {
          "@arconnect/webext-bridge": "2dl6a",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      "2dl6a": [
        function (e, t, r) {
          var n,
            o,
            i = e("@parcel/transformer-js/src/esmodule-helpers.js")
          i.defineInteropFlag(r),
            i.export(r, "Stream", () => S),
            i.export(r, "allowWindowMessaging", () => B),
            i.export(r, "getCurrentContext", () => O),
            i.export(r, "isInternalEndpoint", () => m),
            i.export(r, "onMessage", () => C),
            i.export(r, "onOpenStreamChannel", () => F),
            i.export(r, "openStream", () => N),
            i.export(r, "parseEndpoint", () => p),
            i.export(r, "sendMessage", () => M),
            i.export(r, "setNamespace", () => E)
          var s = e("nanoevents"),
            a = e("webextension-polyfill"),
            l = i.interopDefault(a),
            f = e("serialize-error"),
            u = e("tiny-uid"),
            g = i.interopDefault(u),
            c =
              /^((?:background$)|devtools|popup|options|content-script|window|web_accessible)(?:@(\d+)(?:\.(\d+))?)?$/,
            p = (e) => {
              let [, t, r, n] = e.match(c) || []
              return { context: t, tabId: +r, frameId: n ? +n : void 0 }
            },
            m = ({ context: e }) =>
              ["content-script", "background", "devtools", "web_accessible"].includes(e),
            h = (e) => l.default[e],
            d = h("devtools")
              ? "devtools"
              : h("tabs")
                ? (() => {
                    var e, t, r
                    let n = (0, l.default).runtime.getManifest()
                    if ("undefined" == typeof window) return "background"
                    let o =
                      (null == (e = n.browser_action) ? void 0 : e.default_popup) ||
                      (null == (t = n.action) ? void 0 : t.default_popup)
                    if (o) {
                      let e = new URL((0, l.default).runtime.getURL(o))
                      if (e.pathname === window.location.pathname) return "popup"
                    }
                    if (null == (r = n.options_ui) ? void 0 : r.page) {
                      let e = new URL((0, l.default).runtime.getURL(n.options_ui.page))
                      if (e.pathname === window.location.pathname) return "options"
                    }
                    let i = new URL(window.location.href)
                    if ("chrome-extension:" === i.protocol || "moz-extension:" === i.protocol) {
                      let e = l.default.runtime.id
                      if (e === i.host) return "web_accessible"
                    }
                    return "background"
                  })()
                : h("extension")
                  ? "content-script"
                  : "undefined" != typeof document
                    ? "window"
                    : null,
            A = (0, g.default)(),
            y = new Map(),
            b = new Map(),
            w = new Set(),
            x = new Map(),
            v = null
          function E(e) {
            n = e
          }
          function B(e) {
            ;(o = !0), (n = e)
          }
          async function I() {
            if (null === d)
              throw Error(
                "Unable to detect runtime context i.e webext-bridge can't figure out what to do",
              )
            if (
              (("window" === d || "content-script" === d) && window.addEventListener("message", U),
              "content-script" === d &&
                top === window &&
                ((v = (0, l.default).runtime.connect()).onMessage.addListener((e) => {
                  _(e)
                }),
                v.onDisconnect.addListener(() => {
                  ;(v = null), I()
                })),
              "content-script" === d &&
                top !== window &&
                ((v = (0, l.default).runtime.connect()).onMessage.addListener((e) => {
                  _(e)
                }),
                v.onDisconnect.addListener(() => {
                  ;(v = null), I()
                })),
              "devtools" === d)
            ) {
              let { tabId: e } = l.default.devtools.inspectedWindow,
                t = `devtools@${e}`
              ;(v = (0, l.default).runtime.connect(void 0, { name: t })).onMessage.addListener(
                (e) => {
                  _(e)
                },
              ),
                v.onDisconnect.addListener(() => {
                  ;(v = null), I()
                })
            }
            if ("popup" === d || "options" === d) {
              let e = `${d}`
              ;(v = (0, l.default).runtime.connect(void 0, { name: e })).onMessage.addListener(
                (e) => {
                  _(e)
                },
              ),
                v.onDisconnect.addListener(() => {
                  ;(v = null), I()
                })
            }
            if ("web_accessible" === d) {
              let e = await (0, l.default).tabs.query({ active: !0, currentWindow: !0 }),
                { id: t } = e[0],
                r = `web_accessible@${t}`
              ;(v = (0, l.default).runtime.connect(void 0, { name: r })).onMessage.addListener(
                (e) => {
                  _(e)
                },
              ),
                v.onDisconnect.addListener(() => {
                  ;(v = null), I()
                })
            }
            "background" === d &&
              (0, l.default).runtime.onConnect.addListener((e) => {
                let t = e.name || `content-script@${e.sender.tab.id}`,
                  r = e.sender.frameId
                r && (t = `${t}.${r}`)
                let { context: n, tabId: o, frameId: i } = p(t)
                ;(o || "popup" === n || "options" === n || "web_accessible" === n) &&
                  (x.set(t, e),
                  w.forEach((r) => {
                    r.resolvedDestination === t && (e.postMessage(r.message), w.delete(r))
                  }),
                  e.onDisconnect.addListener(() => {
                    x.delete(t)
                  }),
                  e.onMessage.addListener((e) => {
                    var t
                    ;(null == (t = null == e ? void 0 : e.origin) ? void 0 : t.context) &&
                      ((e.origin.tabId = o), (e.origin.frameId = i), _(e))
                  }))
              })
          }
          function _(e) {
            let { origin: t, destination: r } = e
            if (
              !e.hops.includes(A) &&
              (e.hops.push(A),
              !(
                "content-script" === d &&
                [r, t].some((e) => (null == e ? void 0 : e.context) === "window")
              ) || o)
            ) {
              if (!r) return T(e)
              if (r.context) {
                if ("window" === d) return k(window, e)
                if ("content-script" === d && "window" === r.context)
                  return (e.destination = null), k(window, e)
                if (
                  ["devtools", "content-script", "popup", "options", "web_accessible"].includes(d)
                )
                  return "background" === r.context && (e.destination = null), v.postMessage(e)
                if ("background" === d) {
                  let { context: n, tabId: o, frameId: i } = r,
                    { tabId: s } = t
                  "window" !== n ? (e.destination = null) : (e.destination.tabId = null)
                  let a = ["popup", "options"].includes(n)
                    ? n
                    : `${"window" === n ? "content-script" : n}@${o || s}`
                  i && (a = `${a}.${i}`)
                  let l = x.get(a)
                  l ? l.postMessage(e) : w.add({ resolvedDestination: a, message: e })
                }
              }
            }
          }
          async function T(e) {
            let { transactionId: t, messageID: r, messageType: n } = e,
              o = async () => {
                let t, n
                let o = !1
                try {
                  let n = b.get(r)
                  if ("function" == typeof n)
                    t = await n({ sender: e.origin, id: r, data: e.data, timestamp: e.timestamp })
                  else
                    throw (
                      ((o = !0),
                      Error(
                        `[webext-bridge] No handler registered in '${d}' to accept messages with id '${r}'`,
                      ))
                    )
                } catch (e) {
                  n = e
                } finally {
                  if (
                    (n && (e.err = (0, f.serializeError)(n)),
                    _({
                      ...e,
                      messageType: "reply",
                      data: t,
                      origin: { context: d, tabId: null },
                      destination: e.origin,
                      hops: [],
                    }),
                    n && !o)
                  )
                    throw t
                }
              }
            switch (n) {
              case "reply":
                return (() => {
                  let r = y.get(t)
                  if (r) {
                    let { err: n, data: o } = e
                    if (n) {
                      let e = self[n.name],
                        t = new ("function" == typeof e ? e : Error)(n.message)
                      for (let e in n) t[e] = n[e]
                      r.reject(t)
                    } else r.resolve(o)
                    y.delete(t)
                  }
                })()
              case "message":
                return o()
            }
          }
          async function U({ data: e, ports: t }) {
            if ("content-script" !== d || o) {
              if ("__crx_bridge_verify_listening" === e.cmd && e.scope === n && e.context !== d) {
                let e = t[0]
                e.postMessage(!0)
              } else if (
                "__crx_bridge_route_message" === e.cmd &&
                e.scope === n &&
                e.context !== d
              ) {
                let { payload: t } = e
                "content-script" === d && (t.origin = { context: "window", tabId: null }), _(t)
              }
            }
          }
          function k(e, t) {
            ;(function () {
              if ("string" != typeof n || 0 === n.length)
                throw Error(
                  "webext-bridge uses window.postMessage to talk with other \"window\"(s), for message routing and stuff,which is global/conflicting operation in case there are other scripts using webext-bridge. Call Bridge#setNamespace(nsps) to isolate your app. Example: setNamespace('com.facebook.react-devtools'). Make sure to use same namespace across all your scripts whereever window.postMessage is likely to be used`",
                )
            })()
            let r = new MessageChannel(),
              o = setTimeout(() => {
                ;(r.port1.onmessage = null), k(e, t)
              }, 300)
            ;(r.port1.onmessage = () => {
              clearTimeout(o),
                e.postMessage(
                  { cmd: "__crx_bridge_route_message", scope: n, context: d, payload: t },
                  "*",
                )
            }),
              e.postMessage({ cmd: "__crx_bridge_verify_listening", scope: n, context: d }, "*", [
                r.port2,
              ])
          }
          function O() {
            return d
          }
          function C(e, t) {
            b.set(e, t)
          }
          async function M(e, t, r = "background") {
            let n = "string" == typeof r ? p(r) : r,
              o = "Bridge#sendMessage ->"
            if (!n.context)
              throw TypeError(`${o} Destination must be any one of known destinations`)
            if ("background" === d) {
              let { context: e, tabId: t } = n
              if ("background" !== e && !t)
                throw TypeError(
                  `${o} When sending messages from background page, use @tabId syntax to target specific tab`,
                )
            }
            return new Promise((r, o) => {
              let i = {
                messageID: e,
                data: t,
                destination: n,
                messageType: "message",
                transactionId: (0, g.default)(),
                origin: { context: d, tabId: null },
                hops: [],
                timestamp: Date.now(),
              }
              y.set(i.transactionId, { resolve: r, reject: o }), _(i)
            })
          }
          I()
          var R = class {
              constructor(e) {
                ;(this.handleStreamClose = () => {
                  this.isClosed ||
                    ((this.isClosed = !0),
                    this.emitter.emit("closed", !0),
                    (this.emitter.events = {}))
                }),
                  (this.internalInfo = e),
                  (this.emitter = (0, s.createNanoEvents)()),
                  (this.isClosed = !1),
                  R.initDone ||
                    (C("__crx_bridge_stream_transfer__", (e) => {
                      let { streamId: t, streamTransfer: r, action: n } = e.data,
                        o = R.openStreams.get(t)
                      o &&
                        !o.isClosed &&
                        ("transfer" === n && o.emitter.emit("message", r),
                        "close" === n && (R.openStreams.delete(t), o.handleStreamClose()))
                    }),
                    (R.initDone = !0)),
                  R.openStreams.set(e.streamId, this)
              }
              get info() {
                return this.internalInfo
              }
              send(e) {
                if (this.isClosed)
                  throw Error(
                    "Attempting to send a message over closed stream. Use stream.onClose(<callback>) to keep an eye on stream status",
                  )
                M(
                  "__crx_bridge_stream_transfer__",
                  { streamId: this.internalInfo.streamId, streamTransfer: e, action: "transfer" },
                  this.internalInfo.endpoint,
                )
              }
              close(e) {
                e && this.send(e),
                  this.handleStreamClose(),
                  M(
                    "__crx_bridge_stream_transfer__",
                    { streamId: this.internalInfo.streamId, streamTransfer: null, action: "close" },
                    this.internalInfo.endpoint,
                  )
              }
              onMessage(e) {
                return this.getDisposable("message", e)
              }
              onClose(e) {
                return this.getDisposable("closed", e)
              }
              getDisposable(e, t) {
                let r = this.emitter.on(e, t)
                return Object.assign(r, { dispose: r, close: r })
              }
            },
            S = R
          ;(S.initDone = !1), (S.openStreams = new Map())
          var L = new Map(),
            j = new Map(),
            P = (0, s.createNanoEvents)()
          async function N(e, t) {
            if (L.has(e)) throw Error("webext-bridge: A Stream is already open at this channel")
            let r = "string" == typeof t ? p(t) : t,
              n = { streamId: (0, g.default)(), channel: e, endpoint: r },
              o = new S(n)
            return (
              o.onClose(() => L.delete(e)),
              await M("__crx_bridge_stream_open__", n, r),
              L.set(e, o),
              o
            )
          }
          function F(e, t) {
            if (j.has(e))
              throw Error(
                "webext-bridge: This channel has already been claimed. Stream allows only one-on-one communication",
              )
            j.set(e, t), P.emit("did-change-stream-callbacks")
          }
          C(
            "__crx_bridge_stream_open__",
            (e) =>
              new Promise((t) => {
                let { sender: r, data: n } = e,
                  { channel: o } = n,
                  i = !1,
                  s = () => {},
                  a = () => {
                    let e = j.get(o)
                    "function" == typeof e
                      ? (e(new S({ ...n, endpoint: r })), i && s(), t(!0))
                      : i || ((i = !0), (s = P.on("did-change-stream-callbacks", a)))
                  }
                a()
              }),
          )
        },
        {
          nanoevents: "6B5Zm",
          "webextension-polyfill": "3gRxY",
          "serialize-error": "lhUKN",
          "tiny-uid": "dQXUK",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      "6B5Zm": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "createNanoEvents", () => o)
          let o = () => ({
            events: {},
            emit(e, ...t) {
              ;(this.events[e] || []).forEach((e) => e(...t))
            },
            on(e, t) {
              return (
                (this.events[e] = this.events[e] || []).push(t),
                () => (this.events[e] = (this.events[e] || []).filter((e) => e !== t))
              )
            },
          })
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      fRZO2: [
        function (e, t, r) {
          ;(r.interopDefault = function (e) {
            return e && e.__esModule ? e : { default: e }
          }),
            (r.defineInteropFlag = function (e) {
              Object.defineProperty(e, "__esModule", { value: !0 })
            }),
            (r.exportAll = function (e, t) {
              return (
                Object.keys(e).forEach(function (r) {
                  "default" === r ||
                    "__esModule" === r ||
                    t.hasOwnProperty(r) ||
                    Object.defineProperty(t, r, {
                      enumerable: !0,
                      get: function () {
                        return e[r]
                      },
                    })
                }),
                t
              )
            }),
            (r.export = function (e, t, r) {
              Object.defineProperty(e, t, { enumerable: !0, get: r })
            })
        },
        {},
      ],
      "3gRxY": [
        function (t, r, n) {
          var o
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self,
            (o = function (e) {
              if (
                "object" != typeof globalThis ||
                "object" != typeof chrome ||
                !chrome ||
                !chrome.runtime ||
                !chrome.runtime.id
              )
                throw Error("This script should only be loaded in a browser extension.")
              void 0 === globalThis.browser ||
              Object.getPrototypeOf(globalThis.browser) !== Object.prototype
                ? (e.exports = ((e) => {
                    let t = {
                      alarms: {
                        clear: { minArgs: 0, maxArgs: 1 },
                        clearAll: { minArgs: 0, maxArgs: 0 },
                        get: { minArgs: 0, maxArgs: 1 },
                        getAll: { minArgs: 0, maxArgs: 0 },
                      },
                      bookmarks: {
                        create: { minArgs: 1, maxArgs: 1 },
                        get: { minArgs: 1, maxArgs: 1 },
                        getChildren: { minArgs: 1, maxArgs: 1 },
                        getRecent: { minArgs: 1, maxArgs: 1 },
                        getSubTree: { minArgs: 1, maxArgs: 1 },
                        getTree: { minArgs: 0, maxArgs: 0 },
                        move: { minArgs: 2, maxArgs: 2 },
                        remove: { minArgs: 1, maxArgs: 1 },
                        removeTree: { minArgs: 1, maxArgs: 1 },
                        search: { minArgs: 1, maxArgs: 1 },
                        update: { minArgs: 2, maxArgs: 2 },
                      },
                      browserAction: {
                        disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                        enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                        getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                        getBadgeText: { minArgs: 1, maxArgs: 1 },
                        getPopup: { minArgs: 1, maxArgs: 1 },
                        getTitle: { minArgs: 1, maxArgs: 1 },
                        openPopup: { minArgs: 0, maxArgs: 0 },
                        setBadgeBackgroundColor: {
                          minArgs: 1,
                          maxArgs: 1,
                          fallbackToNoCallback: !0,
                        },
                        setBadgeText: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                        setIcon: { minArgs: 1, maxArgs: 1 },
                        setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                        setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                      },
                      browsingData: {
                        remove: { minArgs: 2, maxArgs: 2 },
                        removeCache: { minArgs: 1, maxArgs: 1 },
                        removeCookies: { minArgs: 1, maxArgs: 1 },
                        removeDownloads: { minArgs: 1, maxArgs: 1 },
                        removeFormData: { minArgs: 1, maxArgs: 1 },
                        removeHistory: { minArgs: 1, maxArgs: 1 },
                        removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                        removePasswords: { minArgs: 1, maxArgs: 1 },
                        removePluginData: { minArgs: 1, maxArgs: 1 },
                        settings: { minArgs: 0, maxArgs: 0 },
                      },
                      commands: { getAll: { minArgs: 0, maxArgs: 0 } },
                      contextMenus: {
                        remove: { minArgs: 1, maxArgs: 1 },
                        removeAll: { minArgs: 0, maxArgs: 0 },
                        update: { minArgs: 2, maxArgs: 2 },
                      },
                      cookies: {
                        get: { minArgs: 1, maxArgs: 1 },
                        getAll: { minArgs: 1, maxArgs: 1 },
                        getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                        remove: { minArgs: 1, maxArgs: 1 },
                        set: { minArgs: 1, maxArgs: 1 },
                      },
                      devtools: {
                        inspectedWindow: {
                          eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 },
                        },
                        panels: {
                          create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 },
                          elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } },
                        },
                      },
                      downloads: {
                        cancel: { minArgs: 1, maxArgs: 1 },
                        download: { minArgs: 1, maxArgs: 1 },
                        erase: { minArgs: 1, maxArgs: 1 },
                        getFileIcon: { minArgs: 1, maxArgs: 2 },
                        open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                        pause: { minArgs: 1, maxArgs: 1 },
                        removeFile: { minArgs: 1, maxArgs: 1 },
                        resume: { minArgs: 1, maxArgs: 1 },
                        search: { minArgs: 1, maxArgs: 1 },
                        show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                      },
                      extension: {
                        isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                        isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 },
                      },
                      history: {
                        addUrl: { minArgs: 1, maxArgs: 1 },
                        deleteAll: { minArgs: 0, maxArgs: 0 },
                        deleteRange: { minArgs: 1, maxArgs: 1 },
                        deleteUrl: { minArgs: 1, maxArgs: 1 },
                        getVisits: { minArgs: 1, maxArgs: 1 },
                        search: { minArgs: 1, maxArgs: 1 },
                      },
                      i18n: {
                        detectLanguage: { minArgs: 1, maxArgs: 1 },
                        getAcceptLanguages: { minArgs: 0, maxArgs: 0 },
                      },
                      identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
                      idle: { queryState: { minArgs: 1, maxArgs: 1 } },
                      management: {
                        get: { minArgs: 1, maxArgs: 1 },
                        getAll: { minArgs: 0, maxArgs: 0 },
                        getSelf: { minArgs: 0, maxArgs: 0 },
                        setEnabled: { minArgs: 2, maxArgs: 2 },
                        uninstallSelf: { minArgs: 0, maxArgs: 1 },
                      },
                      notifications: {
                        clear: { minArgs: 1, maxArgs: 1 },
                        create: { minArgs: 1, maxArgs: 2 },
                        getAll: { minArgs: 0, maxArgs: 0 },
                        getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                        update: { minArgs: 2, maxArgs: 2 },
                      },
                      pageAction: {
                        getPopup: { minArgs: 1, maxArgs: 1 },
                        getTitle: { minArgs: 1, maxArgs: 1 },
                        hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                        setIcon: { minArgs: 1, maxArgs: 1 },
                        setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                        setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                        show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                      },
                      permissions: {
                        contains: { minArgs: 1, maxArgs: 1 },
                        getAll: { minArgs: 0, maxArgs: 0 },
                        remove: { minArgs: 1, maxArgs: 1 },
                        request: { minArgs: 1, maxArgs: 1 },
                      },
                      runtime: {
                        getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                        getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                        openOptionsPage: { minArgs: 0, maxArgs: 0 },
                        requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                        sendMessage: { minArgs: 1, maxArgs: 3 },
                        sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                        setUninstallURL: { minArgs: 1, maxArgs: 1 },
                      },
                      sessions: {
                        getDevices: { minArgs: 0, maxArgs: 1 },
                        getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                        restore: { minArgs: 0, maxArgs: 1 },
                      },
                      storage: {
                        local: {
                          clear: { minArgs: 0, maxArgs: 0 },
                          get: { minArgs: 0, maxArgs: 1 },
                          getBytesInUse: { minArgs: 0, maxArgs: 1 },
                          remove: { minArgs: 1, maxArgs: 1 },
                          set: { minArgs: 1, maxArgs: 1 },
                        },
                        managed: {
                          get: { minArgs: 0, maxArgs: 1 },
                          getBytesInUse: { minArgs: 0, maxArgs: 1 },
                        },
                        sync: {
                          clear: { minArgs: 0, maxArgs: 0 },
                          get: { minArgs: 0, maxArgs: 1 },
                          getBytesInUse: { minArgs: 0, maxArgs: 1 },
                          remove: { minArgs: 1, maxArgs: 1 },
                          set: { minArgs: 1, maxArgs: 1 },
                        },
                      },
                      tabs: {
                        captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                        create: { minArgs: 1, maxArgs: 1 },
                        detectLanguage: { minArgs: 0, maxArgs: 1 },
                        discard: { minArgs: 0, maxArgs: 1 },
                        duplicate: { minArgs: 1, maxArgs: 1 },
                        executeScript: { minArgs: 1, maxArgs: 2 },
                        get: { minArgs: 1, maxArgs: 1 },
                        getCurrent: { minArgs: 0, maxArgs: 0 },
                        getZoom: { minArgs: 0, maxArgs: 1 },
                        getZoomSettings: { minArgs: 0, maxArgs: 1 },
                        goBack: { minArgs: 0, maxArgs: 1 },
                        goForward: { minArgs: 0, maxArgs: 1 },
                        highlight: { minArgs: 1, maxArgs: 1 },
                        insertCSS: { minArgs: 1, maxArgs: 2 },
                        move: { minArgs: 2, maxArgs: 2 },
                        query: { minArgs: 1, maxArgs: 1 },
                        reload: { minArgs: 0, maxArgs: 2 },
                        remove: { minArgs: 1, maxArgs: 1 },
                        removeCSS: { minArgs: 1, maxArgs: 2 },
                        sendMessage: { minArgs: 2, maxArgs: 3 },
                        setZoom: { minArgs: 1, maxArgs: 2 },
                        setZoomSettings: { minArgs: 1, maxArgs: 2 },
                        update: { minArgs: 1, maxArgs: 2 },
                      },
                      topSites: { get: { minArgs: 0, maxArgs: 0 } },
                      webNavigation: {
                        getAllFrames: { minArgs: 1, maxArgs: 1 },
                        getFrame: { minArgs: 1, maxArgs: 1 },
                      },
                      webRequest: { handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 } },
                      windows: {
                        create: { minArgs: 0, maxArgs: 1 },
                        get: { minArgs: 1, maxArgs: 2 },
                        getAll: { minArgs: 0, maxArgs: 1 },
                        getCurrent: { minArgs: 0, maxArgs: 1 },
                        getLastFocused: { minArgs: 0, maxArgs: 1 },
                        remove: { minArgs: 1, maxArgs: 1 },
                        update: { minArgs: 2, maxArgs: 2 },
                      },
                    }
                    if (0 === Object.keys(t).length)
                      throw Error("api-metadata.json has not been included in browser-polyfill")
                    class r extends WeakMap {
                      constructor(e, t) {
                        super(t), (this.createItem = e)
                      }
                      get(e) {
                        return this.has(e) || this.set(e, this.createItem(e)), super.get(e)
                      }
                    }
                    let n = (e) => e && "object" == typeof e && "function" == typeof e.then,
                      o =
                        (t, r) =>
                        (...n) => {
                          e.runtime.lastError
                            ? t.reject(Error(e.runtime.lastError.message))
                            : r.singleCallbackArg || (n.length <= 1 && !1 !== r.singleCallbackArg)
                              ? t.resolve(n[0])
                              : t.resolve(n)
                        },
                      i = (e) => (1 == e ? "argument" : "arguments"),
                      s = (e, t) =>
                        function (r, ...n) {
                          if (n.length < t.minArgs)
                            throw Error(
                              `Expected at least ${t.minArgs} ${i(t.minArgs)} for ${e}(), got ${n.length}`,
                            )
                          if (n.length > t.maxArgs)
                            throw Error(
                              `Expected at most ${t.maxArgs} ${i(t.maxArgs)} for ${e}(), got ${n.length}`,
                            )
                          return new Promise((i, s) => {
                            if (t.fallbackToNoCallback)
                              try {
                                r[e](...n, o({ resolve: i, reject: s }, t))
                              } catch (o) {
                                console.warn(
                                  `${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                                  o,
                                ),
                                  r[e](...n),
                                  (t.fallbackToNoCallback = !1),
                                  (t.noCallback = !0),
                                  i()
                              }
                            else
                              t.noCallback
                                ? (r[e](...n), i())
                                : r[e](...n, o({ resolve: i, reject: s }, t))
                          })
                        },
                      a = (e, t, r) => new Proxy(t, { apply: (t, n, o) => r.call(n, e, ...o) }),
                      l = Function.call.bind(Object.prototype.hasOwnProperty),
                      f = (e, t = {}, r = {}) => {
                        let n = Object.create(null),
                          o = Object.create(e)
                        return new Proxy(o, {
                          has: (t, r) => r in e || r in n,
                          get(o, i, u) {
                            if (i in n) return n[i]
                            if (!(i in e)) return
                            let g = e[i]
                            if ("function" == typeof g) {
                              if ("function" == typeof t[i]) g = a(e, e[i], t[i])
                              else if (l(r, i)) {
                                let t = s(i, r[i])
                                g = a(e, e[i], t)
                              } else g = g.bind(e)
                            } else if ("object" == typeof g && null !== g && (l(t, i) || l(r, i)))
                              g = f(g, t[i], r[i])
                            else {
                              if (!l(r, "*"))
                                return (
                                  Object.defineProperty(n, i, {
                                    configurable: !0,
                                    enumerable: !0,
                                    get: () => e[i],
                                    set(t) {
                                      e[i] = t
                                    },
                                  }),
                                  g
                                )
                              g = f(g, t[i], r["*"])
                            }
                            return (n[i] = g), g
                          },
                          set: (t, r, o, i) => (r in n ? (n[r] = o) : (e[r] = o), !0),
                          defineProperty: (e, t, r) => Reflect.defineProperty(n, t, r),
                          deleteProperty: (e, t) => Reflect.deleteProperty(n, t),
                        })
                      },
                      u = (e) => ({
                        addListener(t, r, ...n) {
                          t.addListener(e.get(r), ...n)
                        },
                        hasListener: (t, r) => t.hasListener(e.get(r)),
                        removeListener(t, r) {
                          t.removeListener(e.get(r))
                        },
                      }),
                      g = new r((e) =>
                        "function" != typeof e
                          ? e
                          : function (t) {
                              let r = f(t, {}, { getContent: { minArgs: 0, maxArgs: 0 } })
                              e(r)
                            },
                      ),
                      c = !1,
                      p = new r((e) =>
                        "function" != typeof e
                          ? e
                          : function (t, r, o) {
                              let i,
                                s,
                                a = !1,
                                l = new Promise((e) => {
                                  i = function (t) {
                                    c ||
                                      (console.warn(
                                        "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",
                                        Error().stack,
                                      ),
                                      (c = !0)),
                                      (a = !0),
                                      e(t)
                                  }
                                })
                              try {
                                s = e(t, r, i)
                              } catch (e) {
                                s = Promise.reject(e)
                              }
                              let f = !0 !== s && n(s)
                              return (
                                (!0 === s || !!f || !!a) &&
                                (((e) => {
                                  e.then(
                                    (e) => {
                                      o(e)
                                    },
                                    (e) => {
                                      o({
                                        __mozWebExtensionPolyfillReject__: !0,
                                        message:
                                          e && (e instanceof Error || "string" == typeof e.message)
                                            ? e.message
                                            : "An unexpected error occurred",
                                      })
                                    },
                                  ).catch((e) => {
                                    console.error("Failed to send onMessage rejected reply", e)
                                  })
                                })(f ? s : l),
                                !0)
                              )
                            },
                      ),
                      m = ({ reject: t, resolve: r }, n) => {
                        e.runtime.lastError
                          ? "The message port closed before a response was received." ===
                            e.runtime.lastError.message
                            ? r()
                            : t(Error(e.runtime.lastError.message))
                          : n && n.__mozWebExtensionPolyfillReject__
                            ? t(Error(n.message))
                            : r(n)
                      },
                      h = (e, t, r, ...n) => {
                        if (n.length < t.minArgs)
                          throw Error(
                            `Expected at least ${t.minArgs} ${i(t.minArgs)} for ${e}(), got ${n.length}`,
                          )
                        if (n.length > t.maxArgs)
                          throw Error(
                            `Expected at most ${t.maxArgs} ${i(t.maxArgs)} for ${e}(), got ${n.length}`,
                          )
                        return new Promise((e, t) => {
                          let o = m.bind(null, { resolve: e, reject: t })
                          n.push(o), r.sendMessage(...n)
                        })
                      },
                      d = {
                        devtools: { network: { onRequestFinished: u(g) } },
                        runtime: {
                          onMessage: u(p),
                          onMessageExternal: u(p),
                          sendMessage: h.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }),
                        },
                        tabs: {
                          sendMessage: h.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }),
                        },
                      },
                      A = {
                        clear: { minArgs: 1, maxArgs: 1 },
                        get: { minArgs: 1, maxArgs: 1 },
                        set: { minArgs: 1, maxArgs: 1 },
                      }
                    return (
                      (t.privacy = {
                        network: { "*": A },
                        services: { "*": A },
                        websites: { "*": A },
                      }),
                      f(e, d, t)
                    )
                  })(chrome))
                : (e.exports = globalThis.browser)
            }),
            "function" == typeof e && e.amd ? e("webextension-polyfill", ["module"], o) : o(r)
        },
        {},
      ],
      lhUKN: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "NonError", () => i),
            n.export(r, "serializeError", () => u),
            n.export(r, "deserializeError", () => g)
          var o = e("fab4cf031e977643").Buffer
          class i extends Error {
            name = "NonError"
            constructor(e) {
              super(i._prepareSuperMessage(e))
            }
            static _prepareSuperMessage(e) {
              try {
                return JSON.stringify(e)
              } catch {
                return String(e)
              }
            }
          }
          let s = [
              { property: "name", enumerable: !1 },
              { property: "message", enumerable: !1 },
              { property: "stack", enumerable: !1 },
              { property: "code", enumerable: !0 },
            ],
            a = Symbol(".toJSON was called"),
            l = (e) => {
              e[a] = !0
              let t = e.toJSON()
              return delete e[a], t
            },
            f = ({ from: e, seen: t, to_: r, forceEnumerable: n, maxDepth: i, depth: u }) => {
              let g = r || (Array.isArray(e) ? [] : {})
              if ((t.push(e), u >= i)) return g
              if ("function" == typeof e.toJSON && !0 !== e[a]) return l(e)
              for (let [r, s] of Object.entries(e)) {
                if ("function" == typeof o && o.isBuffer(s)) {
                  g[r] = "[object Buffer]"
                  continue
                }
                if (null !== s && "object" == typeof s && "function" == typeof s.pipe) {
                  g[r] = "[object Stream]"
                  continue
                }
                if ("function" != typeof s) {
                  if (!s || "object" != typeof s) {
                    g[r] = s
                    continue
                  }
                  if (!t.includes(e[r])) {
                    u++,
                      (g[r] = f({
                        from: e[r],
                        seen: [...t],
                        forceEnumerable: n,
                        maxDepth: i,
                        depth: u,
                      }))
                    continue
                  }
                  g[r] = "[Circular]"
                }
              }
              for (let { property: t, enumerable: r } of s)
                "string" == typeof e[t] &&
                  Object.defineProperty(g, t, {
                    value: e[t],
                    enumerable: !!n || r,
                    configurable: !0,
                    writable: !0,
                  })
              return g
            }
          function u(e, t = {}) {
            let { maxDepth: r = Number.POSITIVE_INFINITY } = t
            return "object" == typeof e && null !== e
              ? f({ from: e, seen: [], forceEnumerable: !0, maxDepth: r, depth: 0 })
              : "function" == typeof e
                ? `[Function: ${e.name || "anonymous"}]`
                : e
          }
          function g(e, t = {}) {
            let { maxDepth: r = Number.POSITIVE_INFINITY } = t
            if (e instanceof Error) return e
            if ("object" == typeof e && null !== e && !Array.isArray(e)) {
              let t = Error()
              return f({ from: e, seen: [], to_: t, maxDepth: r, depth: 0 }), t
            }
            return new i(e)
          }
        },
        { fab4cf031e977643: "89Y7O", "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "89Y7O": [
        function (e, t, r) {
          var n,
            o,
            i = Object.create,
            s = Object.defineProperty,
            a = Object.getOwnPropertyDescriptor,
            l = Object.getOwnPropertyNames,
            f = Object.getPrototypeOf,
            u = Object.prototype.hasOwnProperty,
            g = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
            c = (e, t, r, n) => {
              if ((t && "object" == typeof t) || "function" == typeof t)
                for (let o of l(t))
                  u.call(e, o) ||
                    o === r ||
                    s(e, o, { get: () => t[o], enumerable: !(n = a(t, o)) || n.enumerable })
              return e
            },
            p = (e, t, r) => (
              (r = null != e ? i(f(e)) : {}),
              c(!t && e && e.__esModule ? r : s(r, "default", { value: e, enumerable: !0 }), e)
            ),
            m = g((e) => {
              ;(e.byteLength = function (e) {
                var t = a(e),
                  r = t[0],
                  n = t[1]
                return ((r + n) * 3) / 4 - n
              }),
                (e.toByteArray = function (e) {
                  var t,
                    r,
                    n = a(e),
                    s = n[0],
                    l = n[1],
                    f = new i(((s + l) * 3) / 4 - l),
                    u = 0,
                    g = l > 0 ? s - 4 : s
                  for (r = 0; r < g; r += 4)
                    (t =
                      (o[e.charCodeAt(r)] << 18) |
                      (o[e.charCodeAt(r + 1)] << 12) |
                      (o[e.charCodeAt(r + 2)] << 6) |
                      o[e.charCodeAt(r + 3)]),
                      (f[u++] = (t >> 16) & 255),
                      (f[u++] = (t >> 8) & 255),
                      (f[u++] = 255 & t)
                  return (
                    2 === l &&
                      ((t = (o[e.charCodeAt(r)] << 2) | (o[e.charCodeAt(r + 1)] >> 4)),
                      (f[u++] = 255 & t)),
                    1 === l &&
                      ((t =
                        (o[e.charCodeAt(r)] << 10) |
                        (o[e.charCodeAt(r + 1)] << 4) |
                        (o[e.charCodeAt(r + 2)] >> 2)),
                      (f[u++] = (t >> 8) & 255),
                      (f[u++] = 255 & t)),
                    f
                  )
                }),
                (e.fromByteArray = function (e) {
                  for (var t, r = e.length, o = r % 3, i = [], s = 0, a = r - o; s < a; s += 16383)
                    i.push(
                      (function (e, t, r) {
                        for (var o, i = [], s = t; s < r; s += 3)
                          i.push(
                            n[
                              ((o =
                                ((e[s] << 16) & 16711680) +
                                ((e[s + 1] << 8) & 65280) +
                                (255 & e[s + 2])) >>
                                18) &
                                63
                            ] +
                              n[(o >> 12) & 63] +
                              n[(o >> 6) & 63] +
                              n[63 & o],
                          )
                        return i.join("")
                      })(e, s, s + 16383 > a ? a : s + 16383),
                    )
                  return (
                    1 === o
                      ? i.push(n[(t = e[r - 1]) >> 2] + n[(t << 4) & 63] + "==")
                      : 2 === o &&
                        i.push(
                          n[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] +
                            n[(t >> 4) & 63] +
                            n[(t << 2) & 63] +
                            "=",
                        ),
                    i.join("")
                  )
                })
              var t,
                r,
                n = [],
                o = [],
                i = "u" > typeof Uint8Array ? Uint8Array : Array,
                s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
              for (t = 0, r = s.length; t < r; ++t) (n[t] = s[t]), (o[s.charCodeAt(t)] = t)
              function a(e) {
                var t = e.length
                if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4")
                var r = e.indexOf("=")
                ;-1 === r && (r = t)
                var n = r === t ? 0 : 4 - (r % 4)
                return [r, n]
              }
              ;(o["-".charCodeAt(0)] = 62), (o["_".charCodeAt(0)] = 63)
            }),
            h = g((e) => {
              ;(e.read = function (e, t, r, n, o) {
                var i,
                  s,
                  a = 8 * o - n - 1,
                  l = (1 << a) - 1,
                  f = l >> 1,
                  u = -7,
                  g = r ? o - 1 : 0,
                  c = r ? -1 : 1,
                  p = e[t + g]
                for (
                  g += c, i = p & ((1 << -u) - 1), p >>= -u, u += a;
                  u > 0;
                  i = 256 * i + e[t + g], g += c, u -= 8
                );
                for (
                  s = i & ((1 << -u) - 1), i >>= -u, u += n;
                  u > 0;
                  s = 256 * s + e[t + g], g += c, u -= 8
                );
                if (0 === i) i = 1 - f
                else {
                  if (i === l) return s ? NaN : (p ? -1 : 1) * (1 / 0)
                  ;(s += Math.pow(2, n)), (i -= f)
                }
                return (p ? -1 : 1) * s * Math.pow(2, i - n)
              }),
                (e.write = function (e, t, r, n, o, i) {
                  var s,
                    a,
                    l,
                    f = 8 * i - o - 1,
                    u = (1 << f) - 1,
                    g = u >> 1,
                    c = 23 === o ? 5960464477539062e-23 : 0,
                    p = n ? 0 : i - 1,
                    m = n ? 1 : -1,
                    h = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0
                  for (
                    isNaN((t = Math.abs(t))) || t === 1 / 0
                      ? ((a = isNaN(t) ? 1 : 0), (s = u))
                      : ((s = Math.floor(Math.log(t) / Math.LN2)),
                        t * (l = Math.pow(2, -s)) < 1 && (s--, (l *= 2)),
                        s + g >= 1 ? (t += c / l) : (t += c * Math.pow(2, 1 - g)),
                        t * l >= 2 && (s++, (l /= 2)),
                        s + g >= u
                          ? ((a = 0), (s = u))
                          : s + g >= 1
                            ? ((a = (t * l - 1) * Math.pow(2, o)), (s += g))
                            : ((a = t * Math.pow(2, g - 1) * Math.pow(2, o)), (s = 0)));
                    o >= 8;
                    e[r + p] = 255 & a, p += m, a /= 256, o -= 8
                  );
                  for (
                    s = (s << o) | a, f += o;
                    f > 0;
                    e[r + p] = 255 & s, p += m, s /= 256, f -= 8
                  );
                  e[r + p - m] |= 128 * h
                })
            }),
            d = g((e) => {
              var t = m(),
                r = h(),
                n =
                  "function" == typeof Symbol && "function" == typeof Symbol.for
                    ? Symbol.for("nodejs.util.inspect.custom")
                    : null
              function o(e) {
                if (e > 2147483647)
                  throw RangeError('The value "' + e + '" is invalid for option "size"')
                let t = new Uint8Array(e)
                return Object.setPrototypeOf(t, i.prototype), t
              }
              function i(e, t, r) {
                if ("number" == typeof e) {
                  if ("string" == typeof t)
                    throw TypeError(
                      'The "string" argument must be of type string. Received type number',
                    )
                  return l(e)
                }
                return s(e, t, r)
              }
              function s(e, t, r) {
                if ("string" == typeof e)
                  return (function (e, t) {
                    if ((("string" != typeof t || "" === t) && (t = "utf8"), !i.isEncoding(t)))
                      throw TypeError("Unknown encoding: " + t)
                    let r = 0 | c(e, t),
                      n = o(r),
                      s = n.write(e, t)
                    return s !== r && (n = n.slice(0, s)), n
                  })(e, t)
                if (ArrayBuffer.isView(e))
                  return (function (e) {
                    if (P(e, Uint8Array)) {
                      let t = new Uint8Array(e)
                      return u(t.buffer, t.byteOffset, t.byteLength)
                    }
                    return f(e)
                  })(e)
                if (null == e)
                  throw TypeError(
                    "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                      typeof e,
                  )
                if (
                  P(e, ArrayBuffer) ||
                  (e && P(e.buffer, ArrayBuffer)) ||
                  ("u" > typeof SharedArrayBuffer &&
                    (P(e, SharedArrayBuffer) || (e && P(e.buffer, SharedArrayBuffer))))
                )
                  return u(e, t, r)
                if ("number" == typeof e)
                  throw TypeError(
                    'The "value" argument must not be of type number. Received type number',
                  )
                let n = e.valueOf && e.valueOf()
                if (null != n && n !== e) return i.from(n, t, r)
                let s = (function (e) {
                  var t
                  if (i.isBuffer(e)) {
                    let t = 0 | g(e.length),
                      r = o(t)
                    return 0 === r.length || e.copy(r, 0, 0, t), r
                  }
                  return void 0 !== e.length
                    ? "number" != typeof e.length || (t = e.length) != t
                      ? o(0)
                      : f(e)
                    : "Buffer" === e.type && Array.isArray(e.data)
                      ? f(e.data)
                      : void 0
                })(e)
                if (s) return s
                if (
                  "u" > typeof Symbol &&
                  null != Symbol.toPrimitive &&
                  "function" == typeof e[Symbol.toPrimitive]
                )
                  return i.from(e[Symbol.toPrimitive]("string"), t, r)
                throw TypeError(
                  "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                    typeof e,
                )
              }
              function a(e) {
                if ("number" != typeof e) throw TypeError('"size" argument must be of type number')
                if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"')
              }
              function l(e) {
                return a(e), o(e < 0 ? 0 : 0 | g(e))
              }
              function f(e) {
                let t = e.length < 0 ? 0 : 0 | g(e.length),
                  r = o(t)
                for (let n = 0; n < t; n += 1) r[n] = 255 & e[n]
                return r
              }
              function u(e, t, r) {
                let n
                if (t < 0 || e.byteLength < t)
                  throw RangeError('"offset" is outside of buffer bounds')
                if (e.byteLength < t + (r || 0))
                  throw RangeError('"length" is outside of buffer bounds')
                return (
                  Object.setPrototypeOf(
                    (n =
                      void 0 === t && void 0 === r
                        ? new Uint8Array(e)
                        : void 0 === r
                          ? new Uint8Array(e, t)
                          : new Uint8Array(e, t, r)),
                    i.prototype,
                  ),
                  n
                )
              }
              function g(e) {
                if (e >= 2147483647)
                  throw RangeError(
                    "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes",
                  )
                return 0 | e
              }
              function c(e, t) {
                if (i.isBuffer(e)) return e.length
                if (ArrayBuffer.isView(e) || P(e, ArrayBuffer)) return e.byteLength
                if ("string" != typeof e)
                  throw TypeError(
                    'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                      typeof e,
                  )
                let r = e.length,
                  n = arguments.length > 2 && !0 === arguments[2]
                if (!n && 0 === r) return 0
                let o = !1
                for (;;)
                  switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                      return r
                    case "utf8":
                    case "utf-8":
                      return S(e).length
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return 2 * r
                    case "hex":
                      return r >>> 1
                    case "base64":
                      return L(e).length
                    default:
                      if (o) return n ? -1 : S(e).length
                      ;(t = ("" + t).toLowerCase()), (o = !0)
                  }
              }
              function p(e, r, n) {
                let o = !1
                if (
                  ((void 0 === r || r < 0) && (r = 0),
                  r > this.length ||
                    ((void 0 === n || n > this.length) && (n = this.length), n <= 0) ||
                    (n >>>= 0) <= (r >>>= 0))
                )
                  return ""
                for (e || (e = "utf8"); ; )
                  switch (e) {
                    case "hex":
                      return (function (e, t, r) {
                        let n = e.length
                        ;(!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n)
                        let o = ""
                        for (let n = t; n < r; ++n) o += N[e[n]]
                        return o
                      })(this, r, n)
                    case "utf8":
                    case "utf-8":
                      return b(this, r, n)
                    case "ascii":
                      return (function (e, t, r) {
                        let n = ""
                        r = Math.min(e.length, r)
                        for (let o = t; o < r; ++o) n += String.fromCharCode(127 & e[o])
                        return n
                      })(this, r, n)
                    case "latin1":
                    case "binary":
                      return (function (e, t, r) {
                        let n = ""
                        r = Math.min(e.length, r)
                        for (let o = t; o < r; ++o) n += String.fromCharCode(e[o])
                        return n
                      })(this, r, n)
                    case "base64":
                      var i, s
                      return (
                        (i = r),
                        (s = n),
                        0 === i && s === this.length
                          ? t.fromByteArray(this)
                          : t.fromByteArray(this.slice(i, s))
                      )
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return (function (e, t, r) {
                        let n = e.slice(t, r),
                          o = ""
                        for (let e = 0; e < n.length - 1; e += 2)
                          o += String.fromCharCode(n[e] + 256 * n[e + 1])
                        return o
                      })(this, r, n)
                    default:
                      if (o) throw TypeError("Unknown encoding: " + e)
                      ;(e = (e + "").toLowerCase()), (o = !0)
                  }
              }
              function d(e, t, r) {
                let n = e[t]
                ;(e[t] = e[r]), (e[r] = n)
              }
              function A(e, t, r, n, o) {
                var s
                if (0 === e.length) return -1
                if (
                  ("string" == typeof r
                    ? ((n = r), (r = 0))
                    : r > 2147483647
                      ? (r = 2147483647)
                      : r < -2147483648 && (r = -2147483648),
                  (s = r = +r) != s && (r = o ? 0 : e.length - 1),
                  r < 0 && (r = e.length + r),
                  r >= e.length)
                ) {
                  if (o) return -1
                  r = e.length - 1
                } else if (r < 0) {
                  if (!o) return -1
                  r = 0
                }
                if (("string" == typeof t && (t = i.from(t, n)), i.isBuffer(t)))
                  return 0 === t.length ? -1 : y(e, t, r, n, o)
                if ("number" == typeof t)
                  return (
                    (t &= 255),
                    "function" == typeof Uint8Array.prototype.indexOf
                      ? o
                        ? Uint8Array.prototype.indexOf.call(e, t, r)
                        : Uint8Array.prototype.lastIndexOf.call(e, t, r)
                      : y(e, [t], r, n, o)
                  )
                throw TypeError("val must be string, number or Buffer")
              }
              function y(e, t, r, n, o) {
                let i,
                  s = 1,
                  a = e.length,
                  l = t.length
                if (
                  void 0 !== n &&
                  ("ucs2" === (n = String(n).toLowerCase()) ||
                    "ucs-2" === n ||
                    "utf16le" === n ||
                    "utf-16le" === n)
                ) {
                  if (e.length < 2 || t.length < 2) return -1
                  ;(s = 2), (a /= 2), (l /= 2), (r /= 2)
                }
                function f(e, t) {
                  return 1 === s ? e[t] : e.readUInt16BE(t * s)
                }
                if (o) {
                  let n = -1
                  for (i = r; i < a; i++)
                    if (f(e, i) === f(t, -1 === n ? 0 : i - n)) {
                      if ((-1 === n && (n = i), i - n + 1 === l)) return n * s
                    } else -1 !== n && (i -= i - n), (n = -1)
                } else
                  for (r + l > a && (r = a - l), i = r; i >= 0; i--) {
                    let r = !0
                    for (let n = 0; n < l; n++)
                      if (f(e, i + n) !== f(t, n)) {
                        r = !1
                        break
                      }
                    if (r) return i
                  }
                return -1
              }
              function b(e, t, r) {
                r = Math.min(e.length, r)
                let n = [],
                  o = t
                for (; o < r; ) {
                  let t = e[o],
                    i = null,
                    s = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1
                  if (o + s <= r) {
                    let r, n, a, l
                    switch (s) {
                      case 1:
                        t < 128 && (i = t)
                        break
                      case 2:
                        ;(192 & (r = e[o + 1])) == 128 &&
                          (l = ((31 & t) << 6) | (63 & r)) > 127 &&
                          (i = l)
                        break
                      case 3:
                        ;(r = e[o + 1]),
                          (n = e[o + 2]),
                          (192 & r) == 128 &&
                            (192 & n) == 128 &&
                            (l = ((15 & t) << 12) | ((63 & r) << 6) | (63 & n)) > 2047 &&
                            (l < 55296 || l > 57343) &&
                            (i = l)
                        break
                      case 4:
                        ;(r = e[o + 1]),
                          (n = e[o + 2]),
                          (a = e[o + 3]),
                          (192 & r) == 128 &&
                            (192 & n) == 128 &&
                            (192 & a) == 128 &&
                            (l = ((15 & t) << 18) | ((63 & r) << 12) | ((63 & n) << 6) | (63 & a)) >
                              65535 &&
                            l < 1114112 &&
                            (i = l)
                    }
                  }
                  null === i
                    ? ((i = 65533), (s = 1))
                    : i > 65535 &&
                      ((i -= 65536), n.push(((i >>> 10) & 1023) | 55296), (i = 56320 | (1023 & i))),
                    n.push(i),
                    (o += s)
                }
                return (function (e) {
                  let t = e.length
                  if (t <= 4096) return String.fromCharCode.apply(String, e)
                  let r = "",
                    n = 0
                  for (; n < t; ) r += String.fromCharCode.apply(String, e.slice(n, (n += 4096)))
                  return r
                })(n)
              }
              function w(e, t, r) {
                if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint")
                if (e + t > r) throw RangeError("Trying to access beyond buffer length")
              }
              function x(e, t, r, n, o, s) {
                if (!i.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance')
                if (t > o || t < s) throw RangeError('"value" argument is out of bounds')
                if (r + n > e.length) throw RangeError("Index out of range")
              }
              function v(e, t, r, n, o) {
                O(t, n, o, e, r, 7)
                let i = Number(t & BigInt(4294967295))
                ;(e[r++] = i),
                  (i >>= 8),
                  (e[r++] = i),
                  (i >>= 8),
                  (e[r++] = i),
                  (i >>= 8),
                  (e[r++] = i)
                let s = Number((t >> BigInt(32)) & BigInt(4294967295))
                return (
                  (e[r++] = s),
                  (s >>= 8),
                  (e[r++] = s),
                  (s >>= 8),
                  (e[r++] = s),
                  (s >>= 8),
                  (e[r++] = s),
                  r
                )
              }
              function E(e, t, r, n, o) {
                O(t, n, o, e, r, 7)
                let i = Number(t & BigInt(4294967295))
                ;(e[r + 7] = i),
                  (i >>= 8),
                  (e[r + 6] = i),
                  (i >>= 8),
                  (e[r + 5] = i),
                  (i >>= 8),
                  (e[r + 4] = i)
                let s = Number((t >> BigInt(32)) & BigInt(4294967295))
                return (
                  (e[r + 3] = s),
                  (s >>= 8),
                  (e[r + 2] = s),
                  (s >>= 8),
                  (e[r + 1] = s),
                  (s >>= 8),
                  (e[r] = s),
                  r + 8
                )
              }
              function B(e, t, r, n, o, i) {
                if (r + n > e.length || r < 0) throw RangeError("Index out of range")
              }
              function I(e, t, n, o, i) {
                return (
                  (t = +t),
                  (n >>>= 0),
                  i || B(e, t, n, 4, 34028234663852886e22, -34028234663852886e22),
                  r.write(e, t, n, o, 23, 4),
                  n + 4
                )
              }
              function _(e, t, n, o, i) {
                return (
                  (t = +t),
                  (n >>>= 0),
                  i || B(e, t, n, 8, 17976931348623157e292, -17976931348623157e292),
                  r.write(e, t, n, o, 52, 8),
                  n + 8
                )
              }
              ;(e.Buffer = i),
                (e.SlowBuffer = function (e) {
                  return +e != e && (e = 0), i.alloc(+e)
                }),
                (e.INSPECT_MAX_BYTES = 50),
                (e.kMaxLength = 2147483647),
                (i.TYPED_ARRAY_SUPPORT = (function () {
                  try {
                    let e = new Uint8Array(1),
                      t = {
                        foo: function () {
                          return 42
                        },
                      }
                    return (
                      Object.setPrototypeOf(t, Uint8Array.prototype),
                      Object.setPrototypeOf(e, t),
                      42 === e.foo()
                    )
                  } catch (e) {
                    return !1
                  }
                })()),
                !i.TYPED_ARRAY_SUPPORT &&
                  "u" > typeof console &&
                  "function" == typeof console.error &&
                  console.error(
                    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
                  ),
                Object.defineProperty(i.prototype, "parent", {
                  enumerable: !0,
                  get: function () {
                    if (i.isBuffer(this)) return this.buffer
                  },
                }),
                Object.defineProperty(i.prototype, "offset", {
                  enumerable: !0,
                  get: function () {
                    if (i.isBuffer(this)) return this.byteOffset
                  },
                }),
                (i.poolSize = 8192),
                (i.from = function (e, t, r) {
                  return s(e, t, r)
                }),
                Object.setPrototypeOf(i.prototype, Uint8Array.prototype),
                Object.setPrototypeOf(i, Uint8Array),
                (i.alloc = function (e, t, r) {
                  return (
                    a(e),
                    e <= 0
                      ? o(e)
                      : void 0 !== t
                        ? "string" == typeof r
                          ? o(e).fill(t, r)
                          : o(e).fill(t)
                        : o(e)
                  )
                }),
                (i.allocUnsafe = function (e) {
                  return l(e)
                }),
                (i.allocUnsafeSlow = function (e) {
                  return l(e)
                }),
                (i.isBuffer = function (e) {
                  return null != e && !0 === e._isBuffer && e !== i.prototype
                }),
                (i.compare = function (e, t) {
                  if (
                    (P(e, Uint8Array) && (e = i.from(e, e.offset, e.byteLength)),
                    P(t, Uint8Array) && (t = i.from(t, t.offset, t.byteLength)),
                    !i.isBuffer(e) || !i.isBuffer(t))
                  )
                    throw TypeError(
                      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
                    )
                  if (e === t) return 0
                  let r = e.length,
                    n = t.length
                  for (let o = 0, i = Math.min(r, n); o < i; ++o)
                    if (e[o] !== t[o]) {
                      ;(r = e[o]), (n = t[o])
                      break
                    }
                  return r < n ? -1 : n < r ? 1 : 0
                }),
                (i.isEncoding = function (e) {
                  switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return !0
                    default:
                      return !1
                  }
                }),
                (i.concat = function (e, t) {
                  let r
                  if (!Array.isArray(e))
                    throw TypeError('"list" argument must be an Array of Buffers')
                  if (0 === e.length) return i.alloc(0)
                  if (void 0 === t) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length
                  let n = i.allocUnsafe(t),
                    o = 0
                  for (r = 0; r < e.length; ++r) {
                    let t = e[r]
                    if (P(t, Uint8Array))
                      o + t.length > n.length
                        ? (i.isBuffer(t) || (t = i.from(t)), t.copy(n, o))
                        : Uint8Array.prototype.set.call(n, t, o)
                    else if (i.isBuffer(t)) t.copy(n, o)
                    else throw TypeError('"list" argument must be an Array of Buffers')
                    o += t.length
                  }
                  return n
                }),
                (i.byteLength = c),
                (i.prototype._isBuffer = !0),
                (i.prototype.swap16 = function () {
                  let e = this.length
                  if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits")
                  for (let t = 0; t < e; t += 2) d(this, t, t + 1)
                  return this
                }),
                (i.prototype.swap32 = function () {
                  let e = this.length
                  if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits")
                  for (let t = 0; t < e; t += 4) d(this, t, t + 3), d(this, t + 1, t + 2)
                  return this
                }),
                (i.prototype.swap64 = function () {
                  let e = this.length
                  if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits")
                  for (let t = 0; t < e; t += 8)
                    d(this, t, t + 7),
                      d(this, t + 1, t + 6),
                      d(this, t + 2, t + 5),
                      d(this, t + 3, t + 4)
                  return this
                }),
                (i.prototype.toString = function () {
                  let e = this.length
                  return 0 === e
                    ? ""
                    : 0 == arguments.length
                      ? b(this, 0, e)
                      : p.apply(this, arguments)
                }),
                (i.prototype.toLocaleString = i.prototype.toString),
                (i.prototype.equals = function (e) {
                  if (!i.isBuffer(e)) throw TypeError("Argument must be a Buffer")
                  return this === e || 0 === i.compare(this, e)
                }),
                (i.prototype.inspect = function () {
                  let t = "",
                    r = e.INSPECT_MAX_BYTES
                  return (
                    (t = this.toString("hex", 0, r)
                      .replace(/(.{2})/g, "$1 ")
                      .trim()),
                    this.length > r && (t += " ... "),
                    "<Buffer " + t + ">"
                  )
                }),
                n && (i.prototype[n] = i.prototype.inspect),
                (i.prototype.compare = function (e, t, r, n, o) {
                  if ((P(e, Uint8Array) && (e = i.from(e, e.offset, e.byteLength)), !i.isBuffer(e)))
                    throw TypeError(
                      'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                        typeof e,
                    )
                  if (
                    (void 0 === t && (t = 0),
                    void 0 === r && (r = e ? e.length : 0),
                    void 0 === n && (n = 0),
                    void 0 === o && (o = this.length),
                    t < 0 || r > e.length || n < 0 || o > this.length)
                  )
                    throw RangeError("out of range index")
                  if (n >= o && t >= r) return 0
                  if (n >= o) return -1
                  if (t >= r) return 1
                  if (((t >>>= 0), (r >>>= 0), (n >>>= 0), (o >>>= 0), this === e)) return 0
                  let s = o - n,
                    a = r - t,
                    l = Math.min(s, a),
                    f = this.slice(n, o),
                    u = e.slice(t, r)
                  for (let e = 0; e < l; ++e)
                    if (f[e] !== u[e]) {
                      ;(s = f[e]), (a = u[e])
                      break
                    }
                  return s < a ? -1 : a < s ? 1 : 0
                }),
                (i.prototype.includes = function (e, t, r) {
                  return -1 !== this.indexOf(e, t, r)
                }),
                (i.prototype.indexOf = function (e, t, r) {
                  return A(this, e, t, r, !0)
                }),
                (i.prototype.lastIndexOf = function (e, t, r) {
                  return A(this, e, t, r, !1)
                }),
                (i.prototype.write = function (e, t, r, n) {
                  var o, i, s, a, l, f, u, g
                  if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0)
                  else if (void 0 === r && "string" == typeof t) (n = t), (r = this.length), (t = 0)
                  else if (isFinite(t))
                    (t >>>= 0),
                      isFinite(r)
                        ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                        : ((n = r), (r = void 0))
                  else
                    throw Error(
                      "Buffer.write(string, encoding, offset[, length]) is no longer supported",
                    )
                  let c = this.length - t
                  if (
                    ((void 0 === r || r > c) && (r = c),
                    (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
                  )
                    throw RangeError("Attempt to write outside buffer bounds")
                  n || (n = "utf8")
                  let p = !1
                  for (;;)
                    switch (n) {
                      case "hex":
                        return (function (e, t, r, n) {
                          let o
                          r = Number(r) || 0
                          let i = e.length - r
                          n ? (n = Number(n)) > i && (n = i) : (n = i)
                          let s = t.length
                          for (n > s / 2 && (n = s / 2), o = 0; o < n; ++o) {
                            let n = parseInt(t.substr(2 * o, 2), 16)
                            if (n != n) break
                            e[r + o] = n
                          }
                          return o
                        })(this, e, t, r)
                      case "utf8":
                      case "utf-8":
                        return (o = t), (i = r), j(S(e, this.length - o), this, o, i)
                      case "ascii":
                      case "latin1":
                      case "binary":
                        return (
                          (s = t),
                          (a = r),
                          j(
                            (function (e) {
                              let t = []
                              for (let r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r))
                              return t
                            })(e),
                            this,
                            s,
                            a,
                          )
                        )
                      case "base64":
                        return (l = t), (f = r), j(L(e), this, l, f)
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return (
                          (u = t),
                          (g = r),
                          j(
                            (function (e, t) {
                              let r,
                                n,
                                o = []
                              for (let i = 0; i < e.length && !((t -= 2) < 0); ++i)
                                (n = (r = e.charCodeAt(i)) >> 8), o.push(r % 256), o.push(n)
                              return o
                            })(e, this.length - u),
                            this,
                            u,
                            g,
                          )
                        )
                      default:
                        if (p) throw TypeError("Unknown encoding: " + n)
                        ;(n = ("" + n).toLowerCase()), (p = !0)
                    }
                }),
                (i.prototype.toJSON = function () {
                  return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) }
                }),
                (i.prototype.slice = function (e, t) {
                  let r = this.length
                  ;(e = ~~e),
                    (t = void 0 === t ? r : ~~t),
                    e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
                    t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
                    t < e && (t = e)
                  let n = this.subarray(e, t)
                  return Object.setPrototypeOf(n, i.prototype), n
                }),
                (i.prototype.readUintLE = i.prototype.readUIntLE =
                  function (e, t, r) {
                    ;(e >>>= 0), (t >>>= 0), r || w(e, t, this.length)
                    let n = this[e],
                      o = 1,
                      i = 0
                    for (; ++i < t && (o *= 256); ) n += this[e + i] * o
                    return n
                  }),
                (i.prototype.readUintBE = i.prototype.readUIntBE =
                  function (e, t, r) {
                    ;(e >>>= 0), (t >>>= 0), r || w(e, t, this.length)
                    let n = this[e + --t],
                      o = 1
                    for (; t > 0 && (o *= 256); ) n += this[e + --t] * o
                    return n
                  }),
                (i.prototype.readUint8 = i.prototype.readUInt8 =
                  function (e, t) {
                    return (e >>>= 0), t || w(e, 1, this.length), this[e]
                  }),
                (i.prototype.readUint16LE = i.prototype.readUInt16LE =
                  function (e, t) {
                    return (e >>>= 0), t || w(e, 2, this.length), this[e] | (this[e + 1] << 8)
                  }),
                (i.prototype.readUint16BE = i.prototype.readUInt16BE =
                  function (e, t) {
                    return (e >>>= 0), t || w(e, 2, this.length), (this[e] << 8) | this[e + 1]
                  }),
                (i.prototype.readUint32LE = i.prototype.readUInt32LE =
                  function (e, t) {
                    return (
                      (e >>>= 0),
                      t || w(e, 4, this.length),
                      (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 16777216 * this[e + 3]
                    )
                  }),
                (i.prototype.readUint32BE = i.prototype.readUInt32BE =
                  function (e, t) {
                    return (
                      (e >>>= 0),
                      t || w(e, 4, this.length),
                      16777216 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
                    )
                  }),
                (i.prototype.readBigUInt64LE = F(function (e) {
                  C((e >>>= 0), "offset")
                  let t = this[e],
                    r = this[e + 7]
                  ;(void 0 === t || void 0 === r) && M(e, this.length - 8)
                  let n = t + 256 * this[++e] + 65536 * this[++e] + 16777216 * this[++e],
                    o = this[++e] + 256 * this[++e] + 65536 * this[++e] + 16777216 * r
                  return BigInt(n) + (BigInt(o) << BigInt(32))
                })),
                (i.prototype.readBigUInt64BE = F(function (e) {
                  C((e >>>= 0), "offset")
                  let t = this[e],
                    r = this[e + 7]
                  ;(void 0 === t || void 0 === r) && M(e, this.length - 8)
                  let n = 16777216 * t + 65536 * this[++e] + 256 * this[++e] + this[++e],
                    o = 16777216 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r
                  return (BigInt(n) << BigInt(32)) + BigInt(o)
                })),
                (i.prototype.readIntLE = function (e, t, r) {
                  ;(e >>>= 0), (t >>>= 0), r || w(e, t, this.length)
                  let n = this[e],
                    o = 1,
                    i = 0
                  for (; ++i < t && (o *= 256); ) n += this[e + i] * o
                  return n >= (o *= 128) && (n -= Math.pow(2, 8 * t)), n
                }),
                (i.prototype.readIntBE = function (e, t, r) {
                  ;(e >>>= 0), (t >>>= 0), r || w(e, t, this.length)
                  let n = t,
                    o = 1,
                    i = this[e + --n]
                  for (; n > 0 && (o *= 256); ) i += this[e + --n] * o
                  return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i
                }),
                (i.prototype.readInt8 = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || w(e, 1, this.length),
                    128 & this[e] ? -((255 - this[e] + 1) * 1) : this[e]
                  )
                }),
                (i.prototype.readInt16LE = function (e, t) {
                  ;(e >>>= 0), t || w(e, 2, this.length)
                  let r = this[e] | (this[e + 1] << 8)
                  return 32768 & r ? 4294901760 | r : r
                }),
                (i.prototype.readInt16BE = function (e, t) {
                  ;(e >>>= 0), t || w(e, 2, this.length)
                  let r = this[e + 1] | (this[e] << 8)
                  return 32768 & r ? 4294901760 | r : r
                }),
                (i.prototype.readInt32LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || w(e, 4, this.length),
                    this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
                  )
                }),
                (i.prototype.readInt32BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || w(e, 4, this.length),
                    (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
                  )
                }),
                (i.prototype.readBigInt64LE = F(function (e) {
                  C((e >>>= 0), "offset")
                  let t = this[e],
                    r = this[e + 7]
                  return (
                    (void 0 === t || void 0 === r) && M(e, this.length - 8),
                    (BigInt(this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24)) <<
                      BigInt(32)) +
                      BigInt(t + 256 * this[++e] + 65536 * this[++e] + 16777216 * this[++e])
                  )
                })),
                (i.prototype.readBigInt64BE = F(function (e) {
                  C((e >>>= 0), "offset")
                  let t = this[e],
                    r = this[e + 7]
                  return (
                    (void 0 === t || void 0 === r) && M(e, this.length - 8),
                    (BigInt((t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e]) <<
                      BigInt(32)) +
                      BigInt(16777216 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r)
                  )
                })),
                (i.prototype.readFloatLE = function (e, t) {
                  return (e >>>= 0), t || w(e, 4, this.length), r.read(this, e, !0, 23, 4)
                }),
                (i.prototype.readFloatBE = function (e, t) {
                  return (e >>>= 0), t || w(e, 4, this.length), r.read(this, e, !1, 23, 4)
                }),
                (i.prototype.readDoubleLE = function (e, t) {
                  return (e >>>= 0), t || w(e, 8, this.length), r.read(this, e, !0, 52, 8)
                }),
                (i.prototype.readDoubleBE = function (e, t) {
                  return (e >>>= 0), t || w(e, 8, this.length), r.read(this, e, !1, 52, 8)
                }),
                (i.prototype.writeUintLE = i.prototype.writeUIntLE =
                  function (e, t, r, n) {
                    if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
                      let n = Math.pow(2, 8 * r) - 1
                      x(this, e, t, r, n, 0)
                    }
                    let o = 1,
                      i = 0
                    for (this[t] = 255 & e; ++i < r && (o *= 256); ) this[t + i] = (e / o) & 255
                    return t + r
                  }),
                (i.prototype.writeUintBE = i.prototype.writeUIntBE =
                  function (e, t, r, n) {
                    if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
                      let n = Math.pow(2, 8 * r) - 1
                      x(this, e, t, r, n, 0)
                    }
                    let o = r - 1,
                      i = 1
                    for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); )
                      this[t + o] = (e / i) & 255
                    return t + r
                  }),
                (i.prototype.writeUint8 = i.prototype.writeUInt8 =
                  function (e, t, r) {
                    return (
                      (e = +e),
                      (t >>>= 0),
                      r || x(this, e, t, 1, 255, 0),
                      (this[t] = 255 & e),
                      t + 1
                    )
                  }),
                (i.prototype.writeUint16LE = i.prototype.writeUInt16LE =
                  function (e, t, r) {
                    return (
                      (e = +e),
                      (t >>>= 0),
                      r || x(this, e, t, 2, 65535, 0),
                      (this[t] = 255 & e),
                      (this[t + 1] = e >>> 8),
                      t + 2
                    )
                  }),
                (i.prototype.writeUint16BE = i.prototype.writeUInt16BE =
                  function (e, t, r) {
                    return (
                      (e = +e),
                      (t >>>= 0),
                      r || x(this, e, t, 2, 65535, 0),
                      (this[t] = e >>> 8),
                      (this[t + 1] = 255 & e),
                      t + 2
                    )
                  }),
                (i.prototype.writeUint32LE = i.prototype.writeUInt32LE =
                  function (e, t, r) {
                    return (
                      (e = +e),
                      (t >>>= 0),
                      r || x(this, e, t, 4, 4294967295, 0),
                      (this[t + 3] = e >>> 24),
                      (this[t + 2] = e >>> 16),
                      (this[t + 1] = e >>> 8),
                      (this[t] = 255 & e),
                      t + 4
                    )
                  }),
                (i.prototype.writeUint32BE = i.prototype.writeUInt32BE =
                  function (e, t, r) {
                    return (
                      (e = +e),
                      (t >>>= 0),
                      r || x(this, e, t, 4, 4294967295, 0),
                      (this[t] = e >>> 24),
                      (this[t + 1] = e >>> 16),
                      (this[t + 2] = e >>> 8),
                      (this[t + 3] = 255 & e),
                      t + 4
                    )
                  }),
                (i.prototype.writeBigUInt64LE = F(function (e, t = 0) {
                  return v(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
                })),
                (i.prototype.writeBigUInt64BE = F(function (e, t = 0) {
                  return E(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
                })),
                (i.prototype.writeIntLE = function (e, t, r, n) {
                  if (((e = +e), (t >>>= 0), !n)) {
                    let n = Math.pow(2, 8 * r - 1)
                    x(this, e, t, r, n - 1, -n)
                  }
                  let o = 0,
                    i = 1,
                    s = 0
                  for (this[t] = 255 & e; ++o < r && (i *= 256); )
                    e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1),
                      (this[t + o] = (((e / i) >> 0) - s) & 255)
                  return t + r
                }),
                (i.prototype.writeIntBE = function (e, t, r, n) {
                  if (((e = +e), (t >>>= 0), !n)) {
                    let n = Math.pow(2, 8 * r - 1)
                    x(this, e, t, r, n - 1, -n)
                  }
                  let o = r - 1,
                    i = 1,
                    s = 0
                  for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); )
                    e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1),
                      (this[t + o] = (((e / i) >> 0) - s) & 255)
                  return t + r
                }),
                (i.prototype.writeInt8 = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || x(this, e, t, 1, 127, -128),
                    e < 0 && (e = 255 + e + 1),
                    (this[t] = 255 & e),
                    t + 1
                  )
                }),
                (i.prototype.writeInt16LE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || x(this, e, t, 2, 32767, -32768),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    t + 2
                  )
                }),
                (i.prototype.writeInt16BE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || x(this, e, t, 2, 32767, -32768),
                    (this[t] = e >>> 8),
                    (this[t + 1] = 255 & e),
                    t + 2
                  )
                }),
                (i.prototype.writeInt32LE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || x(this, e, t, 4, 2147483647, -2147483648),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    (this[t + 2] = e >>> 16),
                    (this[t + 3] = e >>> 24),
                    t + 4
                  )
                }),
                (i.prototype.writeInt32BE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || x(this, e, t, 4, 2147483647, -2147483648),
                    e < 0 && (e = 4294967295 + e + 1),
                    (this[t] = e >>> 24),
                    (this[t + 1] = e >>> 16),
                    (this[t + 2] = e >>> 8),
                    (this[t + 3] = 255 & e),
                    t + 4
                  )
                }),
                (i.prototype.writeBigInt64LE = F(function (e, t = 0) {
                  return v(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
                })),
                (i.prototype.writeBigInt64BE = F(function (e, t = 0) {
                  return E(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
                })),
                (i.prototype.writeFloatLE = function (e, t, r) {
                  return I(this, e, t, !0, r)
                }),
                (i.prototype.writeFloatBE = function (e, t, r) {
                  return I(this, e, t, !1, r)
                }),
                (i.prototype.writeDoubleLE = function (e, t, r) {
                  return _(this, e, t, !0, r)
                }),
                (i.prototype.writeDoubleBE = function (e, t, r) {
                  return _(this, e, t, !1, r)
                }),
                (i.prototype.copy = function (e, t, r, n) {
                  if (!i.isBuffer(e)) throw TypeError("argument should be a Buffer")
                  if (
                    (r || (r = 0),
                    n || 0 === n || (n = this.length),
                    t >= e.length && (t = e.length),
                    t || (t = 0),
                    n > 0 && n < r && (n = r),
                    n === r || 0 === e.length || 0 === this.length)
                  )
                    return 0
                  if (t < 0) throw RangeError("targetStart out of bounds")
                  if (r < 0 || r >= this.length) throw RangeError("Index out of range")
                  if (n < 0) throw RangeError("sourceEnd out of bounds")
                  n > this.length && (n = this.length),
                    e.length - t < n - r && (n = e.length - t + r)
                  let o = n - r
                  return (
                    this === e && "function" == typeof Uint8Array.prototype.copyWithin
                      ? this.copyWithin(t, r, n)
                      : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
                    o
                  )
                }),
                (i.prototype.fill = function (e, t, r, n) {
                  let o
                  if ("string" == typeof e) {
                    if (
                      ("string" == typeof t
                        ? ((n = t), (t = 0), (r = this.length))
                        : "string" == typeof r && ((n = r), (r = this.length)),
                      void 0 !== n && "string" != typeof n)
                    )
                      throw TypeError("encoding must be a string")
                    if ("string" == typeof n && !i.isEncoding(n))
                      throw TypeError("Unknown encoding: " + n)
                    if (1 === e.length) {
                      let t = e.charCodeAt(0)
                      ;(("utf8" === n && t < 128) || "latin1" === n) && (e = t)
                    }
                  } else
                    "number" == typeof e ? (e &= 255) : "boolean" == typeof e && (e = Number(e))
                  if (t < 0 || this.length < t || this.length < r)
                    throw RangeError("Out of range index")
                  if (r <= t) return this
                  if (
                    ((t >>>= 0),
                    (r = void 0 === r ? this.length : r >>> 0),
                    e || (e = 0),
                    "number" == typeof e)
                  )
                    for (o = t; o < r; ++o) this[o] = e
                  else {
                    let s = i.isBuffer(e) ? e : i.from(e, n),
                      a = s.length
                    if (0 === a)
                      throw TypeError('The value "' + e + '" is invalid for argument "value"')
                    for (o = 0; o < r - t; ++o) this[o + t] = s[o % a]
                  }
                  return this
                })
              var T = {}
              function U(e, t, r) {
                T[e] = class extends r {
                  constructor() {
                    super(),
                      Object.defineProperty(this, "message", {
                        value: t.apply(this, arguments),
                        writable: !0,
                        configurable: !0,
                      }),
                      (this.name = "".concat(this.name, " [").concat(e, "]")),
                      this.stack,
                      delete this.name
                  }
                  get code() {
                    return e
                  }
                  set code(e) {
                    Object.defineProperty(this, "code", {
                      configurable: !0,
                      enumerable: !0,
                      value: e,
                      writable: !0,
                    })
                  }
                  toString() {
                    return "".concat(this.name, " [").concat(e, "]: ").concat(this.message)
                  }
                }
              }
              function k(e) {
                let t = "",
                  r = e.length,
                  n = "-" === e[0] ? 1 : 0
                for (; r >= n + 4; r -= 3) t = "_".concat(e.slice(r - 3, r)).concat(t)
                return "".concat(e.slice(0, r)).concat(t)
              }
              function O(e, t, r, n, o, i) {
                if (e > r || e < t) {
                  let n = "bigint" == typeof t ? "n" : "",
                    o
                  throw (
                    ((o =
                      i > 3
                        ? 0 === t || t === BigInt(0)
                          ? ">= 0"
                              .concat(n, " and < 2")
                              .concat(n, " ** ")
                              .concat((i + 1) * 8)
                              .concat(n)
                          : ">= -(2"
                              .concat(n, " ** ")
                              .concat((i + 1) * 8 - 1)
                              .concat(n, ") and < 2 ** ") + "".concat((i + 1) * 8 - 1).concat(n)
                        : ">= ".concat(t).concat(n, " and <= ").concat(r).concat(n)),
                    new T.ERR_OUT_OF_RANGE("value", o, e))
                  )
                }
                C(o, "offset"), (void 0 === n[o] || void 0 === n[o + i]) && M(o, n.length - (i + 1))
              }
              function C(e, t) {
                if ("number" != typeof e) throw new T.ERR_INVALID_ARG_TYPE(t, "number", e)
              }
              function M(e, t, r) {
                throw Math.floor(e) !== e
                  ? (C(e, r), new T.ERR_OUT_OF_RANGE(r || "offset", "an integer", e))
                  : t < 0
                    ? new T.ERR_BUFFER_OUT_OF_BOUNDS()
                    : new T.ERR_OUT_OF_RANGE(
                        r || "offset",
                        ">= ".concat(r ? 1 : 0, " and <= ").concat(t),
                        e,
                      )
              }
              U(
                "ERR_BUFFER_OUT_OF_BOUNDS",
                function (e) {
                  return e
                    ? "".concat(e, " is outside of buffer bounds")
                    : "Attempt to access memory outside buffer bounds"
                },
                RangeError,
              ),
                U(
                  "ERR_INVALID_ARG_TYPE",
                  function (e, t) {
                    return 'The "'
                      .concat(e, '" argument must be of type number. Received type ')
                      .concat(typeof t)
                  },
                  TypeError,
                ),
                U(
                  "ERR_OUT_OF_RANGE",
                  function (e, t, r) {
                    let n = 'The value of "'.concat(e, '" is out of range.'),
                      o = r
                    return (
                      Number.isInteger(r) && Math.abs(r) > 4294967296
                        ? (o = k(String(r)))
                        : "bigint" == typeof r &&
                          ((o = String(r)),
                          (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) &&
                            (o = k(o)),
                          (o += "n")),
                      (n += " It must be ".concat(t, ". Received ").concat(o))
                    )
                  },
                  RangeError,
                )
              var R = /[^+/0-9A-Za-z-_]/g
              function S(e, t) {
                t = t || 1 / 0
                let r,
                  n = e.length,
                  o = null,
                  i = []
                for (let s = 0; s < n; ++s) {
                  if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
                    if (!o) {
                      if (r > 56319 || s + 1 === n) {
                        ;(t -= 3) > -1 && i.push(239, 191, 189)
                        continue
                      }
                      o = r
                      continue
                    }
                    if (r < 56320) {
                      ;(t -= 3) > -1 && i.push(239, 191, 189), (o = r)
                      continue
                    }
                    r = (((o - 55296) << 10) | (r - 56320)) + 65536
                  } else o && (t -= 3) > -1 && i.push(239, 191, 189)
                  if (((o = null), r < 128)) {
                    if ((t -= 1) < 0) break
                    i.push(r)
                  } else if (r < 2048) {
                    if ((t -= 2) < 0) break
                    i.push((r >> 6) | 192, (63 & r) | 128)
                  } else if (r < 65536) {
                    if ((t -= 3) < 0) break
                    i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128)
                  } else if (r < 1114112) {
                    if ((t -= 4) < 0) break
                    i.push(
                      (r >> 18) | 240,
                      ((r >> 12) & 63) | 128,
                      ((r >> 6) & 63) | 128,
                      (63 & r) | 128,
                    )
                  } else throw Error("Invalid code point")
                }
                return i
              }
              function L(e) {
                return t.toByteArray(
                  (function (e) {
                    if ((e = (e = e.split("=")[0]).trim().replace(R, "")).length < 2) return ""
                    for (; e.length % 4 != 0; ) e += "="
                    return e
                  })(e),
                )
              }
              function j(e, t, r, n) {
                let o
                for (o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o) t[o + r] = e[o]
                return o
              }
              function P(e, t) {
                return (
                  e instanceof t ||
                  (null != e &&
                    null != e.constructor &&
                    null != e.constructor.name &&
                    e.constructor.name === t.name)
                )
              }
              var N = (function () {
                let e = "0123456789abcdef",
                  t = Array(256)
                for (let r = 0; r < 16; ++r) {
                  let n = 16 * r
                  for (let o = 0; o < 16; ++o) t[n + o] = e[r] + e[o]
                }
                return t
              })()
              function F(e) {
                return typeof BigInt > "u" ? D : e
              }
              function D() {
                throw Error("BigInt not supported")
              }
            }),
            A = {}
          ;((e, t) => {
            for (var r in t) s(e, r, { get: t[r], enumerable: !0 })
          })(A, { default: () => b }),
            (t.exports = c(s({}, "__esModule", { value: !0 }), A))
          var y = p(d())
          ;(n = p(d())), (o = t.exports), c(A, n, "default"), o && c(o, n, "default")
          var b = y.default /*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
        },
        {},
      ],
      dQXUK: [
        function (e, t, r) {
          let n = (e) =>
              "undefined" != typeof crypto && "function" == typeof crypto.getRandomValues
                ? () => {
                    let t = crypto.getRandomValues(new Uint8Array(1))[0]
                    return (t >= e ? t % e : t).toString(e)
                  }
                : () => Math.floor(Math.random() * e).toString(e),
            o = (e = 7, t = !1) => Array.from({ length: e }, n(t ? 16 : 36)).join("")
          ;(t.exports = o), (t.exports.default = o)
        },
        {},
      ],
    },
    ["epTwP"],
    "epTwP",
    "parcelRequired52c",
  ),
  (globalThis.define = t)