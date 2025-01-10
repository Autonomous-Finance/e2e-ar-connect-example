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
      u = a.cache || {},
      l =
        "undefined" != typeof module &&
        "function" == typeof module.require &&
        module.require.bind(module)
    function c(e, r) {
      if (!u[e]) {
        if (!t[e]) {
          var n = "function" == typeof s[o] && s[o]
          if (!r && n) return n(e, !0)
          if (a) return a(e, !0)
          if (l && "string" == typeof e) return l(e)
          var i = Error("Cannot find module '" + e + "'")
          throw ((i.code = "MODULE_NOT_FOUND"), i)
        }
        ;(p.resolve = function (r) {
          var n = t[e][1][r]
          return null != n ? n : r
        }),
          (p.cache = {})
        var f = (u[e] = new c.Module(e))
        t[e][0].call(f.exports, p, f, f.exports, this)
      }
      return u[e].exports
      function p(e) {
        var t = p.resolve(e)
        return !1 === t ? {} : c(t)
      }
    }
    ;(c.isParcelRequire = !0),
      (c.Module = function (e) {
        ;(this.id = e), (this.bundle = c), (this.exports = {})
      }),
      (c.modules = t),
      (c.cache = u),
      (c.parent = a),
      (c.register = function (e, r) {
        t[e] = [
          function (e, t) {
            t.exports = r
          },
          {},
        ]
      }),
      Object.defineProperty(c, "root", {
        get: function () {
          return s[o]
        },
      }),
      (s[o] = c)
    for (var f = 0; f < r.length; f++) c(r[f])
    if (n) {
      var p = c(n)
      "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = p)
        : "function" == typeof e && e.amd
          ? e(function () {
              return p
            })
          : i && (this[i] = p)
    }
  })(
    {
      "1TaEE": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "queryString", () => a)
          var o = e("./pickPrefix"),
            i = e("./gracefulDecodeURIComponent"),
            s = e("@segment/analytics-core")
          function a(e, t) {
            var r = document.createElement("a")
            r.href = t
            var n = r.search
                .slice(1)
                .split("&")
                .reduce(function (e, t) {
                  var r = t.split("="),
                    n = r[0],
                    o = r[1]
                  return (e[n] = (0, i.gracefulDecodeURIComponent)(o)), e
                }, {}),
              a = [],
              u = n.ajs_uid,
              l = n.ajs_event,
              c = n.ajs_aid,
              f = (0, s.isPlainObject)(e.options.useQueryString) ? e.options.useQueryString : {},
              p = f.aid,
              d = f.uid
            if (c) {
              var h = Array.isArray(n.ajs_aid) ? n.ajs_aid[0] : n.ajs_aid
              ;(void 0 === p ? /.+/ : p).test(h) && e.setAnonymousId(h)
            }
            if (u) {
              var v = Array.isArray(n.ajs_uid) ? n.ajs_uid[0] : n.ajs_uid
              if ((void 0 === d ? /.+/ : d).test(v)) {
                var m = (0, o.pickPrefix)("ajs_trait_", n)
                a.push(e.identify(v, m))
              }
            }
            if (l) {
              var g = Array.isArray(n.ajs_event) ? n.ajs_event[0] : n.ajs_event,
                y = (0, o.pickPrefix)("ajs_prop_", n)
              a.push(e.track(g, y))
            }
            return Promise.all(a)
          }
        },
        {
          "./pickPrefix": "f847E",
          "./gracefulDecodeURIComponent": "czBDX",
          "@segment/analytics-core": "lfzmU",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      f847E: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          function o(e, t) {
            return Object.keys(t).reduce(function (r, n) {
              return n.startsWith(e) && (r[n.substr(e.length)] = t[n]), r
            }, {})
          }
          n.defineInteropFlag(r), n.export(r, "pickPrefix", () => o)
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
      czBDX: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          function o(e) {
            try {
              return decodeURIComponent(e.replace(/\+/g, " "))
            } catch (t) {
              return e
            }
          }
          n.defineInteropFlag(r), n.export(r, "gracefulDecodeURIComponent", () => o)
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      lfzmU: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "backoff", () => c.backoff),
            n.export(r, "CoreLogger", () => b.CoreLogger)
          var o = e("./emitter/interface")
          n.exportAll(o, r)
          var i = e("./plugins")
          n.exportAll(i, r)
          var s = e("./events/interfaces")
          n.exportAll(s, r)
          var a = e("./events")
          n.exportAll(a, r)
          var u = e("./callback")
          n.exportAll(u, r)
          var l = e("./priority-queue")
          n.exportAll(l, r)
          var c = e("./priority-queue/backoff"),
            f = e("./context")
          n.exportAll(f, r)
          var p = e("./queue/event-queue")
          n.exportAll(p, r)
          var d = e("./analytics")
          n.exportAll(d, r)
          var h = e("./analytics/dispatch")
          n.exportAll(h, r)
          var v = e("./validation/helpers")
          n.exportAll(v, r)
          var m = e("./validation/errors")
          n.exportAll(m, r)
          var g = e("./validation/assertions")
          n.exportAll(g, r)
          var y = e("./utils/bind-all")
          n.exportAll(y, r)
          var _ = e("./stats")
          n.exportAll(_, r)
          var b = e("./logger"),
            j = e("./queue/delivery")
          n.exportAll(j, r)
        },
        {
          "./emitter/interface": !1,
          "./plugins": !1,
          "./events/interfaces": !1,
          "./events": "0jYDP",
          "./callback": "4gLXe",
          "./priority-queue": "hHmwz",
          "./priority-queue/backoff": !1,
          "./context": "7OiVm",
          "./queue/event-queue": "1SjnA",
          "./analytics": !1,
          "./analytics/dispatch": "gcLNv",
          "./validation/helpers": "kdm5c",
          "./validation/errors": !1,
          "./validation/assertions": !1,
          "./utils/bind-all": !1,
          "./stats": "jVSKK",
          "./logger": !1,
          "./queue/delivery": "kD4Ut",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      "0jYDP": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "CoreEventFactory", () => c)
          var o = e("tslib"),
            i = e("./interfaces")
          n.exportAll(i, r)
          var s = e("dset"),
            a = e("../utils/pick"),
            u = e("../validation/assertions"),
            l = function (e) {
              var t, r
              ;(this.settings = e),
                (this.createMessageId = e.createMessageId),
                (this.onEventMethodCall =
                  null !== (t = e.onEventMethodCall) && void 0 !== t ? t : function () {}),
                (this.onFinishedEvent =
                  null !== (r = e.onFinishedEvent) && void 0 !== r ? r : function () {})
            },
            c = (function () {
              function e(e) {
                this.settings = new l(e)
              }
              return (
                (e.prototype.track = function (e, t, r, n) {
                  return (
                    this.settings.onEventMethodCall({ type: "track", options: r }),
                    this.normalize(
                      (0, o.__assign)((0, o.__assign)({}, this.baseEvent()), {
                        event: e,
                        type: "track",
                        properties: null != t ? t : {},
                        options: (0, o.__assign)({}, r),
                        integrations: (0, o.__assign)({}, n),
                      }),
                    )
                  )
                }),
                (e.prototype.page = function (e, t, r, n, i) {
                  this.settings.onEventMethodCall({ type: "page", options: n })
                  var s,
                    a = {
                      type: "page",
                      properties: (0, o.__assign)({}, r),
                      options: (0, o.__assign)({}, n),
                      integrations: (0, o.__assign)({}, i),
                    }
                  return (
                    null !== e &&
                      ((a.category = e),
                      (a.properties = null !== (s = a.properties) && void 0 !== s ? s : {}),
                      (a.properties.category = e)),
                    null !== t && (a.name = t),
                    this.normalize((0, o.__assign)((0, o.__assign)({}, this.baseEvent()), a))
                  )
                }),
                (e.prototype.screen = function (e, t, r, n, i) {
                  this.settings.onEventMethodCall({ type: "screen", options: n })
                  var s = {
                    type: "screen",
                    properties: (0, o.__assign)({}, r),
                    options: (0, o.__assign)({}, n),
                    integrations: (0, o.__assign)({}, i),
                  }
                  return (
                    null !== e && (s.category = e),
                    null !== t && (s.name = t),
                    this.normalize((0, o.__assign)((0, o.__assign)({}, this.baseEvent()), s))
                  )
                }),
                (e.prototype.identify = function (e, t, r, n) {
                  return (
                    this.settings.onEventMethodCall({ type: "identify", options: r }),
                    this.normalize(
                      (0, o.__assign)((0, o.__assign)({}, this.baseEvent()), {
                        type: "identify",
                        userId: e,
                        traits: null != t ? t : {},
                        options: (0, o.__assign)({}, r),
                        integrations: n,
                      }),
                    )
                  )
                }),
                (e.prototype.group = function (e, t, r, n) {
                  return (
                    this.settings.onEventMethodCall({ type: "group", options: r }),
                    this.normalize(
                      (0, o.__assign)((0, o.__assign)({}, this.baseEvent()), {
                        type: "group",
                        traits: null != t ? t : {},
                        options: (0, o.__assign)({}, r),
                        integrations: (0, o.__assign)({}, n),
                        groupId: e,
                      }),
                    )
                  )
                }),
                (e.prototype.alias = function (e, t, r, n) {
                  this.settings.onEventMethodCall({ type: "alias", options: r })
                  var i = {
                    userId: e,
                    type: "alias",
                    options: (0, o.__assign)({}, r),
                    integrations: (0, o.__assign)({}, n),
                  }
                  return (null !== t && (i.previousId = t), void 0 === e)
                    ? this.normalize((0, o.__assign)((0, o.__assign)({}, i), this.baseEvent()))
                    : this.normalize((0, o.__assign)((0, o.__assign)({}, this.baseEvent()), i))
                }),
                (e.prototype.baseEvent = function () {
                  return { integrations: {}, options: {} }
                }),
                (e.prototype.context = function (e) {
                  var t,
                    r = ["userId", "anonymousId", "timestamp", "messageId"]
                  delete e.integrations
                  var n = Object.keys(e),
                    o = null !== (t = e.context) && void 0 !== t ? t : {},
                    i = {}
                  return (
                    n.forEach(function (t) {
                      "context" !== t &&
                        (r.includes(t) ? (0, s.dset)(i, t, e[t]) : (0, s.dset)(o, t, e[t]))
                    }),
                    [o, i]
                  )
                }),
                (e.prototype.normalize = function (e) {
                  var t,
                    r,
                    n = Object.keys(null !== (t = e.integrations) && void 0 !== t ? t : {}).reduce(
                      function (t, r) {
                        var n, i
                        return (0, o.__assign)(
                          (0, o.__assign)({}, t),
                          (((n = {})[r] = !!(null === (i = e.integrations) || void 0 === i
                            ? void 0
                            : i[r])),
                          n),
                        )
                      },
                      {},
                    )
                  e.options = (0, a.pickBy)(e.options || {}, function (e, t) {
                    return void 0 !== t
                  })
                  var i = (0, o.__assign)(
                      (0, o.__assign)({}, n),
                      null === (r = e.options) || void 0 === r ? void 0 : r.integrations,
                    ),
                    s = e.options ? this.context(e.options) : [],
                    l = s[0],
                    c = s[1],
                    f = e.options,
                    p = (0, o.__rest)(e, ["options"]),
                    d = (0, o.__assign)(
                      (0, o.__assign)(
                        (0, o.__assign)((0, o.__assign)({ timestamp: new Date() }, p), {
                          context: l,
                          integrations: i,
                        }),
                        c,
                      ),
                      { messageId: f.messageId || this.settings.createMessageId() },
                    )
                  return this.settings.onFinishedEvent(d), (0, u.validateEvent)(d), d
                }),
                e
              )
            })()
        },
        {
          tslib: "gdEuw",
          "./interfaces": !1,
          dset: "86Bnd",
          "../utils/pick": "38qlM",
          "../validation/assertions": "2FbMz",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      gdEuw: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "__extends", () => i),
            n.export(r, "__assign", () => s),
            n.export(r, "__rest", () => a),
            n.export(r, "__decorate", () => u),
            n.export(r, "__param", () => l),
            n.export(r, "__esDecorate", () => c),
            n.export(r, "__runInitializers", () => f),
            n.export(r, "__propKey", () => p),
            n.export(r, "__setFunctionName", () => d),
            n.export(r, "__metadata", () => h),
            n.export(r, "__awaiter", () => v),
            n.export(r, "__generator", () => m),
            n.export(r, "__createBinding", () => g),
            n.export(r, "__exportStar", () => y),
            n.export(r, "__values", () => _),
            n.export(r, "__read", () => b),
            n.export(r, "__spread", () => j),
            n.export(r, "__spreadArrays", () => x),
            n.export(r, "__spreadArray", () => w),
            n.export(r, "__await", () => E),
            n.export(r, "__asyncGenerator", () => O),
            n.export(r, "__asyncDelegator", () => k),
            n.export(r, "__asyncValues", () => I),
            n.export(r, "__makeTemplateObject", () => P),
            n.export(r, "__importStar", () => S),
            n.export(r, "__importDefault", () => A),
            n.export(r, "__classPrivateFieldGet", () => R),
            n.export(r, "__classPrivateFieldSet", () => T),
            n.export(r, "__classPrivateFieldIn", () => D),
            n.export(r, "__addDisposableResource", () => C),
            n.export(r, "__disposeResources", () => M)
          var o = function (e, t) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
              })(e, t)
          }
          function i(e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError("Class extends value " + String(t) + " is not a constructor or null")
            function r() {
              this.constructor = e
            }
            o(e, t),
              (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
          }
          var s = function () {
            return (s =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var o in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                return e
              }).apply(this, arguments)
          }
          function a(e, t) {
            var r = {}
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n])
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                0 > t.indexOf(n[o]) &&
                  Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                  (r[n[o]] = e[n[o]])
            return r
          }
          function u(e, t, r, n) {
            var o,
              i = arguments.length,
              s = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              s = Reflect.decorate(e, t, r, n)
            else
              for (var a = e.length - 1; a >= 0; a--)
                (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s)
            return i > 3 && s && Object.defineProperty(t, r, s), s
          }
          function l(e, t) {
            return function (r, n) {
              t(r, n, e)
            }
          }
          function c(e, t, r, n, o, i) {
            function s(e) {
              if (void 0 !== e && "function" != typeof e) throw TypeError("Function expected")
              return e
            }
            for (
              var a,
                u = n.kind,
                l = "getter" === u ? "get" : "setter" === u ? "set" : "value",
                c = !t && e ? (n.static ? e : e.prototype) : null,
                f = t || (c ? Object.getOwnPropertyDescriptor(c, n.name) : {}),
                p = !1,
                d = r.length - 1;
              d >= 0;
              d--
            ) {
              var h = {}
              for (var v in n) h[v] = "access" === v ? {} : n[v]
              for (var v in n.access) h.access[v] = n.access[v]
              h.addInitializer = function (e) {
                if (p) throw TypeError("Cannot add initializers after decoration has completed")
                i.push(s(e || null))
              }
              var m = (0, r[d])("accessor" === u ? { get: f.get, set: f.set } : f[l], h)
              if ("accessor" === u) {
                if (void 0 === m) continue
                if (null === m || "object" != typeof m) throw TypeError("Object expected")
                ;(a = s(m.get)) && (f.get = a),
                  (a = s(m.set)) && (f.set = a),
                  (a = s(m.init)) && o.unshift(a)
              } else (a = s(m)) && ("field" === u ? o.unshift(a) : (f[l] = a))
            }
            c && Object.defineProperty(c, n.name, f), (p = !0)
          }
          function f(e, t, r) {
            for (var n = arguments.length > 2, o = 0; o < t.length; o++)
              r = n ? t[o].call(e, r) : t[o].call(e)
            return n ? r : void 0
          }
          function p(e) {
            return "symbol" == typeof e ? e : "".concat(e)
          }
          function d(e, t, r) {
            return (
              "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""),
              Object.defineProperty(e, "name", {
                configurable: !0,
                value: r ? "".concat(r, " ", t) : t,
              })
            )
          }
          function h(e, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
              return Reflect.metadata(e, t)
          }
          function v(e, t, r, n) {
            return new (r || (r = Promise))(function (o, i) {
              function s(e) {
                try {
                  u(n.next(e))
                } catch (e) {
                  i(e)
                }
              }
              function a(e) {
                try {
                  u(n.throw(e))
                } catch (e) {
                  i(e)
                }
              }
              function u(e) {
                var t
                e.done
                  ? o(e.value)
                  : ((t = e.value) instanceof r
                      ? t
                      : new r(function (e) {
                          e(t)
                        })
                    ).then(s, a)
              }
              u((n = n.apply(e, t || [])).next())
            })
          }
          function m(e, t) {
            var r,
              n,
              o,
              i,
              s = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1]
                  return o[1]
                },
                trys: [],
                ops: [],
              }
            return (
              (i = { next: a(0), throw: a(1), return: a(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this
                }),
              i
            )
            function a(a) {
              return function (u) {
                return (function (a) {
                  if (r) throw TypeError("Generator is already executing.")
                  for (; i && ((i = 0), a[0] && (s = 0)), s; )
                    try {
                      if (
                        ((r = 1),
                        n &&
                          (o =
                            2 & a[0]
                              ? n.return
                              : a[0]
                                ? n.throw || ((o = n.return) && o.call(n), 0)
                                : n.next) &&
                          !(o = o.call(n, a[1])).done)
                      )
                        return o
                      switch (((n = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                        case 0:
                        case 1:
                          o = a
                          break
                        case 4:
                          return s.label++, { value: a[1], done: !1 }
                        case 5:
                          s.label++, (n = a[1]), (a = [0])
                          continue
                        case 7:
                          ;(a = s.ops.pop()), s.trys.pop()
                          continue
                        default:
                          if (
                            !(o = (o = s.trys).length > 0 && o[o.length - 1]) &&
                            (6 === a[0] || 2 === a[0])
                          ) {
                            s = 0
                            continue
                          }
                          if (3 === a[0] && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                            s.label = a[1]
                            break
                          }
                          if (6 === a[0] && s.label < o[1]) {
                            ;(s.label = o[1]), (o = a)
                            break
                          }
                          if (o && s.label < o[2]) {
                            ;(s.label = o[2]), s.ops.push(a)
                            break
                          }
                          o[2] && s.ops.pop(), s.trys.pop()
                          continue
                      }
                      a = t.call(e, s)
                    } catch (e) {
                      ;(a = [6, e]), (n = 0)
                    } finally {
                      r = o = 0
                    }
                  if (5 & a[0]) throw a[1]
                  return { value: a[0] ? a[1] : void 0, done: !0 }
                })([a, u])
              }
            }
          }
          var g = Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r)
                var o = Object.getOwnPropertyDescriptor(t, r)
                ;(!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) &&
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r]
                    },
                  }),
                  Object.defineProperty(e, n, o)
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r])
              }
          function y(e, t) {
            for (var r in e)
              "default" === r || Object.prototype.hasOwnProperty.call(t, r) || g(t, e, r)
          }
          function _(e) {
            var t = "function" == typeof Symbol && Symbol.iterator,
              r = t && e[t],
              n = 0
            if (r) return r.call(e)
            if (e && "number" == typeof e.length)
              return {
                next: function () {
                  return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e }
                },
              }
            throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
          }
          function b(e, t) {
            var r = "function" == typeof Symbol && e[Symbol.iterator]
            if (!r) return e
            var n,
              o,
              i = r.call(e),
              s = []
            try {
              for (; (void 0 === t || t-- > 0) && !(n = i.next()).done; ) s.push(n.value)
            } catch (e) {
              o = { error: e }
            } finally {
              try {
                n && !n.done && (r = i.return) && r.call(i)
              } finally {
                if (o) throw o.error
              }
            }
            return s
          }
          function j() {
            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(b(arguments[t]))
            return e
          }
          function x() {
            for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length
            for (var n = Array(e), o = 0, t = 0; t < r; t++)
              for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++) n[o] = i[s]
            return n
          }
          function w(e, t, r) {
            if (r || 2 == arguments.length)
              for (var n, o = 0, i = t.length; o < i; o++)
                (!n && o in t) || (n || (n = Array.prototype.slice.call(t, 0, o)), (n[o] = t[o]))
            return e.concat(n || Array.prototype.slice.call(t))
          }
          function E(e) {
            return this instanceof E ? ((this.v = e), this) : new E(e)
          }
          function O(e, t, r) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.")
            var n,
              o = r.apply(e, t || []),
              i = []
            return (
              (n = {}),
              s("next"),
              s("throw"),
              s("return"),
              (n[Symbol.asyncIterator] = function () {
                return this
              }),
              n
            )
            function s(e) {
              o[e] &&
                (n[e] = function (t) {
                  return new Promise(function (r, n) {
                    i.push([e, t, r, n]) > 1 || a(e, t)
                  })
                })
            }
            function a(e, t) {
              try {
                var r
                ;(r = o[e](t)).value instanceof E
                  ? Promise.resolve(r.value.v).then(u, l)
                  : c(i[0][2], r)
              } catch (e) {
                c(i[0][3], e)
              }
            }
            function u(e) {
              a("next", e)
            }
            function l(e) {
              a("throw", e)
            }
            function c(e, t) {
              e(t), i.shift(), i.length && a(i[0][0], i[0][1])
            }
          }
          function k(e) {
            var t, r
            return (
              (t = {}),
              n("next"),
              n("throw", function (e) {
                throw e
              }),
              n("return"),
              (t[Symbol.iterator] = function () {
                return this
              }),
              t
            )
            function n(n, o) {
              t[n] = e[n]
                ? function (t) {
                    return (r = !r) ? { value: E(e[n](t)), done: !1 } : o ? o(t) : t
                  }
                : o
            }
          }
          function I(e) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.")
            var t,
              r = e[Symbol.asyncIterator]
            return r
              ? r.call(e)
              : ((e = _(e)),
                (t = {}),
                n("next"),
                n("throw"),
                n("return"),
                (t[Symbol.asyncIterator] = function () {
                  return this
                }),
                t)
            function n(r) {
              t[r] =
                e[r] &&
                function (t) {
                  return new Promise(function (n, o) {
                    ;(function (e, t, r, n) {
                      Promise.resolve(n).then(function (t) {
                        e({ value: t, done: r })
                      }, t)
                    })(n, o, (t = e[r](t)).done, t.value)
                  })
                }
            }
          }
          function P(e, t) {
            return (
              Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e
            )
          }
          var F = Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", { enumerable: !0, value: t })
              }
            : function (e, t) {
                e.default = t
              }
          function S(e) {
            if (e && e.__esModule) return e
            var t = {}
            if (null != e)
              for (var r in e)
                "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && g(t, e, r)
            return F(t, e), t
          }
          function A(e) {
            return e && e.__esModule ? e : { default: e }
          }
          function R(e, t, r, n) {
            if ("a" === r && !n) throw TypeError("Private accessor was defined without a getter")
            if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw TypeError(
                "Cannot read private member from an object whose class did not declare it",
              )
            return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
          }
          function T(e, t, r, n, o) {
            if ("m" === n) throw TypeError("Private method is not writable")
            if ("a" === n && !o) throw TypeError("Private accessor was defined without a setter")
            if ("function" == typeof t ? e !== t || !o : !t.has(e))
              throw TypeError(
                "Cannot write private member to an object whose class did not declare it",
              )
            return "a" === n ? o.call(e, r) : o ? (o.value = r) : t.set(e, r), r
          }
          function D(e, t) {
            if (null === t || ("object" != typeof t && "function" != typeof t))
              throw TypeError("Cannot use 'in' operator on non-object")
            return "function" == typeof e ? t === e : e.has(t)
          }
          function C(e, t, r) {
            if (null != t) {
              var n
              if ("object" != typeof t && "function" != typeof t)
                throw TypeError("Object expected.")
              if (r) {
                if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.")
                n = t[Symbol.asyncDispose]
              }
              if (void 0 === n) {
                if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.")
                n = t[Symbol.dispose]
              }
              if ("function" != typeof n) throw TypeError("Object not disposable.")
              e.stack.push({ value: t, dispose: n, async: r })
            } else r && e.stack.push({ async: !0 })
            return t
          }
          var q =
            "function" == typeof SuppressedError
              ? SuppressedError
              : function (e, t, r) {
                  var n = Error(r)
                  return (n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n
                }
          function M(e) {
            function t(t) {
              ;(e.error = e.hasError
                ? new q(t, e.error, "An error was suppressed during disposal.")
                : t),
                (e.hasError = !0)
            }
            return (function r() {
              for (; e.stack.length; ) {
                var n = e.stack.pop()
                try {
                  var o = n.dispose && n.dispose.call(n.value)
                  if (n.async)
                    return Promise.resolve(o).then(r, function (e) {
                      return t(e), r()
                    })
                } catch (e) {
                  t(e)
                }
              }
              if (e.hasError) throw e.error
            })()
          }
          r.default = {
            __extends: i,
            __assign: s,
            __rest: a,
            __decorate: u,
            __param: l,
            __metadata: h,
            __awaiter: v,
            __generator: m,
            __createBinding: g,
            __exportStar: y,
            __values: _,
            __read: b,
            __spread: j,
            __spreadArrays: x,
            __spreadArray: w,
            __await: E,
            __asyncGenerator: O,
            __asyncDelegator: k,
            __asyncValues: I,
            __makeTemplateObject: P,
            __importStar: S,
            __importDefault: A,
            __classPrivateFieldGet: R,
            __classPrivateFieldSet: T,
            __classPrivateFieldIn: D,
            __addDisposableResource: C,
            __disposeResources: M,
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "86Bnd": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          function o(e, t, r) {
            t.split && (t = t.split("."))
            for (
              var n, o, i = 0, s = t.length, a = e;
              i < s && "__proto__" !== (o = t[i++]) && "constructor" !== o && "prototype" !== o;

            )
              a = a[o] =
                i === s
                  ? r
                  : typeof (n = a[o]) == typeof t
                    ? n
                    : 0 * t[i] != 0 || ~("" + t[i]).indexOf(".")
                      ? {}
                      : []
          }
          n.defineInteropFlag(r), n.export(r, "dset", () => o)
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "38qlM": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "pickBy", () => o)
          var o = function (e, t) {
            return Object.keys(e)
              .filter(function (r) {
                return t(r, e[r])
              })
              .reduce(function (t, r) {
                return (t[r] = e[r]), t
              }, {})
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "2FbMz": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "assertUserIdentity", () => l),
            n.export(r, "assertEventExists", () => c),
            n.export(r, "assertEventType", () => f),
            n.export(r, "assertTrackEventName", () => p),
            n.export(r, "assertTrackEventProperties", () => d),
            n.export(r, "assertTraits", () => h),
            n.export(r, "assertMessageId", () => v),
            n.export(r, "validateEvent", () => m)
          var o = e("./errors"),
            i = e("./helpers"),
            s = "is not a string",
            a = "is not an object",
            u = "is nil"
          function l(e) {
            var t,
              r,
              n,
              a = ".userId/anonymousId/previousId/groupId",
              l =
                null !==
                  (n =
                    null !== (r = null !== (t = e.userId) && void 0 !== t ? t : e.anonymousId) &&
                    void 0 !== r
                      ? r
                      : e.groupId) && void 0 !== n
                  ? n
                  : e.previousId
            if ((0, i.exists)(l)) {
              if (!(0, i.isString)(l)) throw new o.ValidationError(a, s)
            } else throw new o.ValidationError(a, u)
          }
          function c(e) {
            if (!(0, i.exists)(e)) throw new o.ValidationError("Event", u)
            if ("object" != typeof e) throw new o.ValidationError("Event", a)
          }
          function f(e) {
            if (!(0, i.isString)(e.type)) throw new o.ValidationError(".type", s)
          }
          function p(e) {
            if (!(0, i.isString)(e.event)) throw new o.ValidationError(".event", s)
          }
          function d(e) {
            if (!(0, i.isPlainObject)(e.properties)) throw new o.ValidationError(".properties", a)
          }
          function h(e) {
            if (!(0, i.isPlainObject)(e.traits)) throw new o.ValidationError(".traits", a)
          }
          function v(e) {
            if (!(0, i.isString)(e.messageId)) throw new o.ValidationError(".messageId", s)
          }
          function m(e) {
            c(e),
              f(e),
              v(e),
              "track" === e.type && (p(e), d(e)),
              ["group", "identify"].includes(e.type) && h(e)
          }
        },
        {
          "./errors": "69Z1n",
          "./helpers": "kdm5c",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      "69Z1n": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "ValidationError", () => i)
          var o = e("tslib"),
            i = (function (e) {
              function t(t, r) {
                var n = e.call(this, "".concat(t, " ").concat(r)) || this
                return (n.field = t), n
              }
              return (0, o.__extends)(t, e), t
            })(Error)
        },
        { tslib: "gdEuw", "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      kdm5c: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          function o(e) {
            return "string" == typeof e
          }
          function i(e) {
            return "number" == typeof e
          }
          function s(e) {
            return "function" == typeof e
          }
          function a(e) {
            return null != e
          }
          function u(e) {
            return "object" === Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
          }
          n.defineInteropFlag(r),
            n.export(r, "isString", () => o),
            n.export(r, "isNumber", () => i),
            n.export(r, "isFunction", () => s),
            n.export(r, "exists", () => a),
            n.export(r, "isPlainObject", () => u)
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "4gLXe": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          function o(e, t) {
            return new Promise(function (r, n) {
              var o = setTimeout(function () {
                n(Error("Promise timed out"))
              }, t)
              e.then(function (e) {
                return clearTimeout(o), r(e)
              }).catch(n)
            })
          }
          function i(e) {
            return new Promise(function (t) {
              return setTimeout(t, e)
            })
          }
          function s(e, t, r) {
            var n = function () {
              try {
                return Promise.resolve(t(e))
              } catch (e) {
                return Promise.reject(e)
              }
            }
            return i(r)
              .then(function () {
                return o(n(), 1e3)
              })
              .catch(function (t) {
                null == e || e.log("warn", "Callback Error", { error: t }),
                  null == e || e.stats.increment("callback_error")
              })
              .then(function () {
                return e
              })
          }
          n.defineInteropFlag(r),
            n.export(r, "pTimeout", () => o),
            n.export(r, "sleep", () => i),
            n.export(r, "invokeCallback", () => s)
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      hHmwz: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "ON_REMOVE_FROM_FUTURE", () => a),
            n.export(r, "PriorityQueue", () => u)
          var o = e("tslib"),
            i = e("@segment/analytics-generic-utils"),
            s = e("./backoff"),
            a = "onRemoveFromFuture",
            u = (function (e) {
              function t(t, r, n) {
                var o = e.call(this) || this
                return (
                  (o.future = []),
                  (o.maxAttempts = t),
                  (o.queue = r),
                  (o.seen = null != n ? n : {}),
                  o
                )
              }
              return (
                (0, o.__extends)(t, e),
                (t.prototype.push = function () {
                  for (var e = this, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r]
                  var n = t.map(function (t) {
                    return (
                      !(e.updateAttempts(t) > e.maxAttempts || e.includes(t)) &&
                      (e.queue.push(t), !0)
                    )
                  })
                  return (
                    (this.queue = this.queue.sort(function (t, r) {
                      return e.getAttempts(t) - e.getAttempts(r)
                    })),
                    n
                  )
                }),
                (t.prototype.pushWithBackoff = function (e) {
                  var t = this
                  if (0 === this.getAttempts(e)) return this.push(e)[0]
                  var r = this.updateAttempts(e)
                  return (
                    !(r > this.maxAttempts || this.includes(e)) &&
                    (setTimeout(
                      function () {
                        t.queue.push(e),
                          (t.future = t.future.filter(function (t) {
                            return t.id !== e.id
                          })),
                          t.emit(a)
                      },
                      (0, s.backoff)({ attempt: r - 1 }),
                    ),
                    this.future.push(e),
                    !0)
                  )
                }),
                (t.prototype.getAttempts = function (e) {
                  var t
                  return null !== (t = this.seen[e.id]) && void 0 !== t ? t : 0
                }),
                (t.prototype.updateAttempts = function (e) {
                  return (this.seen[e.id] = this.getAttempts(e) + 1), this.getAttempts(e)
                }),
                (t.prototype.includes = function (e) {
                  return (
                    this.queue.includes(e) ||
                    this.future.includes(e) ||
                    !!this.queue.find(function (t) {
                      return t.id === e.id
                    }) ||
                    !!this.future.find(function (t) {
                      return t.id === e.id
                    })
                  )
                }),
                (t.prototype.pop = function () {
                  return this.queue.shift()
                }),
                Object.defineProperty(t.prototype, "length", {
                  get: function () {
                    return this.queue.length
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(t.prototype, "todo", {
                  get: function () {
                    return this.queue.length + this.future.length
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                t
              )
            })(i.Emitter)
        },
        {
          tslib: "gdEuw",
          "@segment/analytics-generic-utils": "NOMyI",
          "./backoff": "lck0E",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      NOMyI: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r)
          var o = e("./create-deferred")
          n.exportAll(o, r)
          var i = e("./emitter")
          n.exportAll(i, r)
        },
        {
          "./create-deferred": "h0iVW",
          "./emitter": "jyHjI",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      h0iVW: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r)
          var o = e("./create-deferred")
          n.exportAll(o, r)
        },
        { "./create-deferred": "e5jKi", "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      e5jKi: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "createDeferred", () => o)
          var o = function () {
            var e,
              t,
              r = !1,
              n = new Promise(function (n, o) {
                ;(e = function () {
                  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
                  ;(r = !0), n.apply(void 0, e)
                }),
                  (t = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
                    ;(r = !0), o.apply(void 0, e)
                  })
              })
            return {
              resolve: e,
              reject: t,
              promise: n,
              isSettled: function () {
                return r
              },
            }
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      jyHjI: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r)
          var o = e("./emitter")
          n.exportAll(o, r)
        },
        { "./emitter": "7QmfY", "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "7QmfY": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "Emitter", () => o)
          var o = (function () {
            function e(e) {
              var t
              ;(this.callbacks = {}),
                (this.warned = !1),
                (this.maxListeners =
                  null !== (t = null == e ? void 0 : e.maxListeners) && void 0 !== t ? t : 10)
            }
            return (
              (e.prototype.warnIfPossibleMemoryLeak = function (e) {
                !this.warned &&
                  this.maxListeners &&
                  this.callbacks[e].length > this.maxListeners &&
                  (console.warn(
                    "Event Emitter: Possible memory leak detected; "
                      .concat(String(e), " has exceeded ")
                      .concat(this.maxListeners, " listeners."),
                  ),
                  (this.warned = !0))
              }),
              (e.prototype.on = function (e, t) {
                return (
                  this.callbacks[e]
                    ? (this.callbacks[e].push(t), this.warnIfPossibleMemoryLeak(e))
                    : (this.callbacks[e] = [t]),
                  this
                )
              }),
              (e.prototype.once = function (e, t) {
                var r = this,
                  n = function () {
                    for (var o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i]
                    r.off(e, n), t.apply(r, o)
                  }
                return this.on(e, n), this
              }),
              (e.prototype.off = function (e, t) {
                var r,
                  n = (null !== (r = this.callbacks[e]) && void 0 !== r ? r : []).filter(
                    function (e) {
                      return e !== t
                    },
                  )
                return (this.callbacks[e] = n), this
              }),
              (e.prototype.emit = function (e) {
                for (var t, r = this, n = [], o = 1; o < arguments.length; o++)
                  n[o - 1] = arguments[o]
                return (
                  (null !== (t = this.callbacks[e]) && void 0 !== t ? t : []).forEach(function (e) {
                    e.apply(r, n)
                  }),
                  this
                )
              }),
              e
            )
          })()
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      lck0E: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          function o(e) {
            var t = e.minTimeout,
              r = e.factor,
              n = e.attempt,
              o = e.maxTimeout
            return Math.min(
              (Math.random() + 1) * (void 0 === t ? 500 : t) * Math.pow(void 0 === r ? 2 : r, n),
              void 0 === o ? 1 / 0 : o,
            )
          }
          n.defineInteropFlag(r), n.export(r, "backoff", () => o)
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "7OiVm": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "ContextCancelation", () => u),
            n.export(r, "CoreContext", () => l)
          var o = e("@lukeed/uuid"),
            i = e("dset"),
            s = e("../logger"),
            a = e("../stats"),
            u = function (e) {
              var t, r, n
              ;(this.retry = null === (t = e.retry) || void 0 === t || t),
                (this.type = null !== (r = e.type) && void 0 !== r ? r : "plugin Error"),
                (this.reason = null !== (n = e.reason) && void 0 !== n ? n : "")
            },
            l = (function () {
              function e(e, t, r, n) {
                void 0 === t && (t = (0, o.v4)()),
                  void 0 === r && (r = new a.NullStats()),
                  void 0 === n && (n = new s.CoreLogger()),
                  (this.attempts = 0),
                  (this.event = e),
                  (this._id = t),
                  (this.logger = n),
                  (this.stats = r)
              }
              return (
                (e.system = function () {}),
                (e.prototype.isSame = function (e) {
                  return e.id === this.id
                }),
                (e.prototype.cancel = function (e) {
                  if (e) throw e
                  throw new u({ reason: "Context Cancel" })
                }),
                (e.prototype.log = function (e, t, r) {
                  this.logger.log(e, t, r)
                }),
                Object.defineProperty(e.prototype, "id", {
                  get: function () {
                    return this._id
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.updateEvent = function (e, t) {
                  var r
                  if ("integrations" === e.split(".")[0]) {
                    var n = e.split(".")[1]
                    if (
                      (null === (r = this.event.integrations) || void 0 === r ? void 0 : r[n]) ===
                      !1
                    )
                      return this.event
                  }
                  return (0, i.dset)(this.event, e, t), this.event
                }),
                (e.prototype.failedDelivery = function () {
                  return this._failedDelivery
                }),
                (e.prototype.setFailedDelivery = function (e) {
                  this._failedDelivery = e
                }),
                (e.prototype.logs = function () {
                  return this.logger.logs
                }),
                (e.prototype.flush = function () {
                  this.logger.flush(), this.stats.flush()
                }),
                (e.prototype.toJSON = function () {
                  return {
                    id: this._id,
                    event: this.event,
                    logs: this.logger.logs,
                    metrics: this.stats.metrics,
                  }
                }),
                e
              )
            })()
        },
        {
          "@lukeed/uuid": "eguzz",
          dset: "86Bnd",
          "../logger": "lHKF4",
          "../stats": "jVSKK",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      eguzz: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "v4", () => a)
          for (var o, i = 256, s = []; i--; ) s[i] = (i + 256).toString(16).substring(1)
          function a() {
            var e,
              t = 0,
              r = ""
            if (!o || i + 16 > 256) {
              for (o = Array((t = 256)); t--; ) o[t] = (256 * Math.random()) | 0
              t = i = 0
            }
            for (; t < 16; t++)
              (e = o[i + t]),
                6 == t ? (r += s[(15 & e) | 64]) : 8 == t ? (r += s[(63 & e) | 128]) : (r += s[e]),
                1 & t && t > 1 && t < 11 && (r += "-")
            return i++, r
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      lHKF4: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "CoreLogger", () => i)
          var o = e("tslib"),
            i = (function () {
              function e() {
                this._logs = []
              }
              return (
                (e.prototype.log = function (e, t, r) {
                  var n = new Date()
                  this._logs.push({ level: e, message: t, time: n, extras: r })
                }),
                Object.defineProperty(e.prototype, "logs", {
                  get: function () {
                    return this._logs
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.flush = function () {
                  if (this.logs.length > 1) {
                    var e = this._logs.reduce(function (e, t) {
                      var r,
                        n,
                        i,
                        s = (0, o.__assign)((0, o.__assign)({}, t), {
                          json: JSON.stringify(t.extras, null, " "),
                          extras: t.extras,
                        })
                      delete s.time
                      var a =
                        null !==
                          (i = null === (n = t.time) || void 0 === n ? void 0 : n.toISOString()) &&
                        void 0 !== i
                          ? i
                          : ""
                      return (
                        e[a] && (a = "".concat(a, "-").concat(Math.random())),
                        (0, o.__assign)((0, o.__assign)({}, e), (((r = {})[a] = s), r))
                      )
                    }, {})
                    console.table ? console.table(e) : console.log(e)
                  } else
                    this.logs.forEach(function (e) {
                      var t = e.level,
                        r = e.message,
                        n = e.extras
                      "info" === t || "debug" === t
                        ? console.log(r, null != n ? n : "")
                        : console[t](r, null != n ? n : "")
                    })
                  this._logs = []
                }),
                e
              )
            })()
        },
        { tslib: "gdEuw", "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      jVSKK: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "CoreStats", () => i),
            n.export(r, "NullStats", () => s)
          var o = e("tslib"),
            i = (function () {
              function e() {
                this.metrics = []
              }
              return (
                (e.prototype.increment = function (e, t, r) {
                  void 0 === t && (t = 1),
                    this.metrics.push({
                      metric: e,
                      value: t,
                      tags: null != r ? r : [],
                      type: "counter",
                      timestamp: Date.now(),
                    })
                }),
                (e.prototype.gauge = function (e, t, r) {
                  this.metrics.push({
                    metric: e,
                    value: t,
                    tags: null != r ? r : [],
                    type: "gauge",
                    timestamp: Date.now(),
                  })
                }),
                (e.prototype.flush = function () {
                  var e = this.metrics.map(function (e) {
                    return (0, o.__assign)((0, o.__assign)({}, e), { tags: e.tags.join(",") })
                  })
                  console.table ? console.table(e) : console.log(e), (this.metrics = [])
                }),
                (e.prototype.serialize = function () {
                  return this.metrics.map(function (e) {
                    return {
                      m: e.metric,
                      v: e.value,
                      t: e.tags,
                      k: { gauge: "g", counter: "c" }[e.type],
                      e: e.timestamp,
                    }
                  })
                }),
                e
              )
            })(),
            s = (function (e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this
              }
              return (
                (0, o.__extends)(t, e),
                (t.prototype.gauge = function () {
                  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
                }),
                (t.prototype.increment = function () {
                  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
                }),
                (t.prototype.flush = function () {
                  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
                }),
                (t.prototype.serialize = function () {
                  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
                  return []
                }),
                t
              )
            })(i)
        },
        { tslib: "gdEuw", "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "1SjnA": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "CoreEventQueue", () => f)
          var o = e("tslib"),
            i = e("../utils/group-by"),
            s = e("../priority-queue"),
            a = e("../context"),
            u = e("@segment/analytics-generic-utils"),
            l = e("../task/task-group"),
            c = e("./delivery"),
            f = (function (e) {
              function t(t) {
                var r = e.call(this) || this
                return (
                  (r.criticalTasks = (0, l.createTaskGroup)()),
                  (r.plugins = []),
                  (r.failedInitializations = []),
                  (r.flushing = !1),
                  (r.queue = t),
                  r.queue.on(s.ON_REMOVE_FROM_FUTURE, function () {
                    r.scheduleFlush(0)
                  }),
                  r
                )
              }
              return (
                (0, o.__extends)(t, e),
                (t.prototype.register = function (e, t, r) {
                  return (0, o.__awaiter)(this, void 0, void 0, function () {
                    var n,
                      i,
                      s = this
                    return (0, o.__generator)(this, function (o) {
                      switch (o.label) {
                        case 0:
                          if (
                            (this.plugins.push(t),
                            (n = function (r) {
                              s.failedInitializations.push(t.name),
                                s.emit("initialization_failure", t),
                                console.warn(t.name, r),
                                e.log("warn", "Failed to load destination", {
                                  plugin: t.name,
                                  error: r,
                                }),
                                (s.plugins = s.plugins.filter(function (e) {
                                  return e !== t
                                }))
                            }),
                            !("destination" === t.type && "Segment.io" !== t.name))
                          )
                            return [3, 1]
                          return t.load(e, r).catch(n), [3, 4]
                        case 1:
                          return o.trys.push([1, 3, , 4]), [4, t.load(e, r)]
                        case 2:
                          return o.sent(), [3, 4]
                        case 3:
                          return (i = o.sent()), n(i), [3, 4]
                        case 4:
                          return [2]
                      }
                    })
                  })
                }),
                (t.prototype.deregister = function (e, t, r) {
                  return (0, o.__awaiter)(this, void 0, void 0, function () {
                    var n
                    return (0, o.__generator)(this, function (o) {
                      switch (o.label) {
                        case 0:
                          if ((o.trys.push([0, 3, , 4]), !t.unload)) return [3, 2]
                          return [4, Promise.resolve(t.unload(e, r))]
                        case 1:
                          o.sent(), (o.label = 2)
                        case 2:
                          return (
                            (this.plugins = this.plugins.filter(function (e) {
                              return e.name !== t.name
                            })),
                            [3, 4]
                          )
                        case 3:
                          return (
                            (n = o.sent()),
                            e.log("warn", "Failed to unload destination", {
                              plugin: t.name,
                              error: n,
                            }),
                            [3, 4]
                          )
                        case 4:
                          return [2]
                      }
                    })
                  })
                }),
                (t.prototype.dispatch = function (e) {
                  return (0, o.__awaiter)(this, void 0, void 0, function () {
                    var t
                    return (0, o.__generator)(this, function (r) {
                      return (
                        e.log("debug", "Dispatching"),
                        e.stats.increment("message_dispatched"),
                        this.queue.push(e),
                        (t = this.subscribeToDelivery(e)),
                        this.scheduleFlush(0),
                        [2, t]
                      )
                    })
                  })
                }),
                (t.prototype.subscribeToDelivery = function (e) {
                  return (0, o.__awaiter)(this, void 0, void 0, function () {
                    var t = this
                    return (0, o.__generator)(this, function (r) {
                      return [
                        2,
                        new Promise(function (r) {
                          var n = function (o, i) {
                            o.isSame(e) && (t.off("flush", n), r(o))
                          }
                          t.on("flush", n)
                        }),
                      ]
                    })
                  })
                }),
                (t.prototype.dispatchSingle = function (e) {
                  return (0, o.__awaiter)(this, void 0, void 0, function () {
                    var t = this
                    return (0, o.__generator)(this, function (r) {
                      return (
                        e.log("debug", "Dispatching"),
                        e.stats.increment("message_dispatched"),
                        this.queue.updateAttempts(e),
                        (e.attempts = 1),
                        [
                          2,
                          this.deliver(e).catch(function (r) {
                            return t.enqueuRetry(r, e)
                              ? t.subscribeToDelivery(e)
                              : (e.setFailedDelivery({ reason: r }), e)
                          }),
                        ]
                      )
                    })
                  })
                }),
                (t.prototype.isEmpty = function () {
                  return 0 === this.queue.length
                }),
                (t.prototype.scheduleFlush = function (e) {
                  var t = this
                  void 0 === e && (e = 500),
                    this.flushing ||
                      ((this.flushing = !0),
                      setTimeout(function () {
                        t.flush().then(function () {
                          setTimeout(function () {
                            ;(t.flushing = !1), t.queue.length && t.scheduleFlush(0)
                          }, 0)
                        })
                      }, e))
                }),
                (t.prototype.deliver = function (e) {
                  return (0, o.__awaiter)(this, void 0, void 0, function () {
                    var t, r, n, i
                    return (0, o.__generator)(this, function (o) {
                      switch (o.label) {
                        case 0:
                          return [4, this.criticalTasks.done()]
                        case 1:
                          o.sent(), (t = Date.now()), (o.label = 2)
                        case 2:
                          return o.trys.push([2, 4, , 5]), [4, this.flushOne(e)]
                        case 3:
                          return (
                            (e = o.sent()),
                            (r = Date.now() - t),
                            this.emit("delivery_success", e),
                            e.stats.gauge("delivered", r),
                            e.log("debug", "Delivered", e.event),
                            [2, e]
                          )
                        case 4:
                          throw (
                            ((i = n = o.sent()),
                            e.log("error", "Failed to deliver", i),
                            this.emit("delivery_failure", e, i),
                            e.stats.increment("delivery_failed"),
                            n)
                          )
                        case 5:
                          return [2]
                      }
                    })
                  })
                }),
                (t.prototype.enqueuRetry = function (e, t) {
                  return (
                    (!(e instanceof a.ContextCancelation) || !!e.retry) &&
                    this.queue.pushWithBackoff(t)
                  )
                }),
                (t.prototype.flush = function () {
                  return (0, o.__awaiter)(this, void 0, void 0, function () {
                    var e, t
                    return (0, o.__generator)(this, function (r) {
                      switch (r.label) {
                        case 0:
                          if (0 === this.queue.length || !(e = this.queue.pop())) return [2, []]
                          ;(e.attempts = this.queue.getAttempts(e)), (r.label = 1)
                        case 1:
                          return r.trys.push([1, 3, , 4]), [4, this.deliver(e)]
                        case 2:
                          return (e = r.sent()), this.emit("flush", e, !0), [3, 4]
                        case 3:
                          return (
                            (t = r.sent()),
                            this.enqueuRetry(t, e) ||
                              (e.setFailedDelivery({ reason: t }), this.emit("flush", e, !1)),
                            [2, []]
                          )
                        case 4:
                          return [2, [e]]
                      }
                    })
                  })
                }),
                (t.prototype.isReady = function () {
                  return !0
                }),
                (t.prototype.availableExtensions = function (e) {
                  var t = this.plugins.filter(function (t) {
                      if ("destination" !== t.type && "Segment.io" !== t.name) return !0
                      var r,
                        n,
                        o,
                        i = void 0
                      return (
                        null === (r = t.alternativeNames) ||
                          void 0 === r ||
                          r.forEach(function (t) {
                            void 0 !== e[t] && (i = e[t])
                          }),
                        null !== (o = null !== (n = e[t.name]) && void 0 !== n ? n : i) &&
                        void 0 !== o
                          ? o
                          : !1 !== ("Segment.io" === t.name || e.All)
                      )
                    }),
                    r = (0, i.groupBy)(t, "type"),
                    n = r.before,
                    o = r.enrichment,
                    s = r.destination,
                    a = r.after
                  return {
                    before: void 0 === n ? [] : n,
                    enrichment: void 0 === o ? [] : o,
                    destinations: void 0 === s ? [] : s,
                    after: void 0 === a ? [] : a,
                  }
                }),
                (t.prototype.flushOne = function (e) {
                  var t, r
                  return (0, o.__awaiter)(this, void 0, void 0, function () {
                    var n, i, s, u, l, f, p, d, h, v, m, g, y
                    return (0, o.__generator)(this, function (o) {
                      switch (o.label) {
                        case 0:
                          if (!this.isReady()) throw Error("Not ready")
                          e.attempts > 1 && this.emit("delivery_retry", e),
                            (i = (n = this.availableExtensions(
                              null !== (t = e.event.integrations) && void 0 !== t ? t : {},
                            )).before),
                            (s = n.enrichment),
                            (u = 0),
                            (l = i),
                            (o.label = 1)
                        case 1:
                          if (!(u < l.length)) return [3, 4]
                          return (f = l[u]), [4, (0, c.ensure)(e, f)]
                        case 2:
                          ;(p = o.sent()) instanceof a.CoreContext && (e = p),
                            this.emit("message_enriched", e, f),
                            (o.label = 3)
                        case 3:
                          return u++, [3, 1]
                        case 4:
                          ;(d = 0), (h = s), (o.label = 5)
                        case 5:
                          if (!(d < h.length)) return [3, 8]
                          return (v = h[d]), [4, (0, c.attempt)(e, v)]
                        case 6:
                          ;(p = o.sent()) instanceof a.CoreContext && (e = p),
                            this.emit("message_enriched", e, v),
                            (o.label = 7)
                        case 7:
                          return d++, [3, 5]
                        case 8:
                          return (
                            (g = (m = this.availableExtensions(
                              null !== (r = e.event.integrations) && void 0 !== r ? r : {},
                            )).destinations),
                            (y = m.after),
                            [
                              4,
                              new Promise(function (t, r) {
                                setTimeout(function () {
                                  Promise.all(
                                    g.map(function (t) {
                                      return (0, c.attempt)(e, t)
                                    }),
                                  )
                                    .then(t)
                                    .catch(r)
                                }, 0)
                              }),
                            ]
                          )
                        case 9:
                          return (
                            o.sent(),
                            e.stats.increment("message_delivered"),
                            this.emit("message_delivered", e),
                            [
                              4,
                              Promise.all(
                                y.map(function (t) {
                                  return (0, c.attempt)(e, t)
                                }),
                              ),
                            ]
                          )
                        case 10:
                          return o.sent(), [2, e]
                      }
                    })
                  })
                }),
                t
              )
            })(u.Emitter)
        },
        {
          tslib: "gdEuw",
          "../utils/group-by": "dTBkA",
          "../priority-queue": "hHmwz",
          "../context": "7OiVm",
          "@segment/analytics-generic-utils": "NOMyI",
          "../task/task-group": "1kBFE",
          "./delivery": "kD4Ut",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      dTBkA: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "groupBy", () => i)
          var o = e("tslib")
          function i(e, t) {
            var r = {}
            return (
              e.forEach(function (e) {
                var n,
                  i = void 0
                if ("string" == typeof t) {
                  var s = e[t]
                  i = "string" != typeof s ? JSON.stringify(s) : s
                } else t instanceof Function && (i = t(e))
                void 0 !== i &&
                  (r[i] = (0, o.__spreadArray)(
                    (0, o.__spreadArray)([], null !== (n = r[i]) && void 0 !== n ? n : [], !0),
                    [e],
                    !1,
                  ))
              }),
              r
            )
          }
        },
        { tslib: "gdEuw", "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "1kBFE": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "createTaskGroup", () => i)
          var o = e("../utils/is-thenable"),
            i = function () {
              var e,
                t,
                r = 0
              return {
                done: function () {
                  return e
                },
                run: function (n) {
                  var i = n()
                  return (
                    (0, o.isThenable)(i) &&
                      (1 == ++r &&
                        (e = new Promise(function (e) {
                          return (t = e)
                        })),
                      i.finally(function () {
                        return 0 == --r && t()
                      })),
                    i
                  )
                },
              }
            }
        },
        {
          "../utils/is-thenable": "05bFP",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      "05bFP": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "isThenable", () => o)
          var o = function (e) {
            return "object" == typeof e && null !== e && "then" in e && "function" == typeof e.then
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      kD4Ut: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "attempt", () => s), n.export(r, "ensure", () => a)
          var o = e("tslib"),
            i = e("../context")
          function s(e, t) {
            e.log("debug", "plugin", { plugin: t.name })
            var r = new Date().getTime(),
              n = t[e.event.type]
            return void 0 === n
              ? Promise.resolve(e)
              : (function (e) {
                  return (0, o.__awaiter)(this, void 0, void 0, function () {
                    return (0, o.__generator)(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return t.trys.push([0, 2, , 3]), [4, e()]
                        case 1:
                          return [2, t.sent()]
                        case 2:
                          return [2, Promise.reject(t.sent())]
                        case 3:
                          return [2]
                      }
                    })
                  })
                })(function () {
                  return n.apply(t, [e])
                })
                  .then(function (e) {
                    var n = new Date().getTime() - r
                    return e.stats.gauge("plugin_time", n, ["plugin:".concat(t.name)]), e
                  })
                  .catch(function (r) {
                    if (r instanceof i.ContextCancelation && "middleware_cancellation" === r.type)
                      throw r
                    return (
                      r instanceof i.ContextCancelation
                        ? e.log("warn", r.type, { plugin: t.name, error: r })
                        : (e.log("error", "plugin Error", { plugin: t.name, error: r }),
                          e.stats.increment("plugin_error", 1, ["plugin:".concat(t.name)])),
                      r
                    )
                  })
          }
          function a(e, t) {
            return s(e, t).then(function (t) {
              if (t instanceof i.CoreContext) return t
              e.log("debug", "Context canceled"), e.stats.increment("context_canceled"), e.cancel(t)
            })
          }
        },
        {
          tslib: "gdEuw",
          "../context": "7OiVm",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      gcLNv: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "getDelay", () => s), n.export(r, "dispatch", () => a)
          var o = e("tslib"),
            i = e("../callback"),
            s = function (e, t) {
              return Math.max((null != t ? t : 300) - (Date.now() - e), 0)
            }
          function a(e, t, r, n) {
            return (0, o.__awaiter)(this, void 0, void 0, function () {
              var a, u
              return (0, o.__generator)(this, function (o) {
                switch (o.label) {
                  case 0:
                    if ((r.emit("dispatch_start", e), (a = Date.now()), !t.isEmpty())) return [3, 2]
                    return [4, t.dispatchSingle(e)]
                  case 1:
                    return (u = o.sent()), [3, 4]
                  case 2:
                    return [4, t.dispatch(e)]
                  case 3:
                    ;(u = o.sent()), (o.label = 4)
                  case 4:
                    if (!(null == n ? void 0 : n.callback)) return [3, 6]
                    return [4, (0, i.invokeCallback)(u, n.callback, s(a, n.timeout))]
                  case 5:
                    ;(u = o.sent()), (o.label = 6)
                  case 6:
                    return (null == n ? void 0 : n.debug) && u.flush(), [2, u]
                }
              })
            })
          }
        },
        {
          tslib: "gdEuw",
          "../callback": "4gLXe",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
    },
    [],
    null,
    "parcelRequired52c",
  ),
  (globalThis.define = t)
