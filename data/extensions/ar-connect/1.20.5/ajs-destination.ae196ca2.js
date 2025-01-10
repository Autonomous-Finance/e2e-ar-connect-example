var e, t
"function" == typeof (e = globalThis.define) && ((t = e), (e = null)),
  (function (t, r, n, i, o) {
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
      a = "function" == typeof s[i] && s[i],
      u = a.cache || {},
      c =
        "undefined" != typeof module &&
        "function" == typeof module.require &&
        module.require.bind(module)
    function l(e, r) {
      if (!u[e]) {
        if (!t[e]) {
          var n = "function" == typeof s[i] && s[i]
          if (!r && n) return n(e, !0)
          if (a) return a(e, !0)
          if (c && "string" == typeof e) return c(e)
          var o = Error("Cannot find module '" + e + "'")
          throw ((o.code = "MODULE_NOT_FOUND"), o)
        }
        ;(f.resolve = function (r) {
          var n = t[e][1][r]
          return null != n ? n : r
        }),
          (f.cache = {})
        var p = (u[e] = new l.Module(e))
        t[e][0].call(p.exports, f, p, p.exports, this)
      }
      return u[e].exports
      function f(e) {
        var t = f.resolve(e)
        return !1 === t ? {} : l(t)
      }
    }
    ;(l.isParcelRequire = !0),
      (l.Module = function (e) {
        ;(this.id = e), (this.bundle = l), (this.exports = {})
      }),
      (l.modules = t),
      (l.cache = u),
      (l.parent = a),
      (l.register = function (e, r) {
        t[e] = [
          function (e, t) {
            t.exports = r
          },
          {},
        ]
      }),
      Object.defineProperty(l, "root", {
        get: function () {
          return s[i]
        },
      }),
      (s[i] = l)
    for (var p = 0; p < r.length; p++) l(r[p])
    if (n) {
      var f = l(n)
      "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = f)
        : "function" == typeof e && e.amd
          ? e(function () {
              return f
            })
          : o && (this[o] = f)
    }
  })(
    {
      "38QLv": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "LegacyDestination", () => b),
            n.export(r, "ajsDestinations", () => x)
          var i = e("tslib"),
            o = e("@segment/facade"),
            s = e("../../core/connection"),
            a = e("../../core/context"),
            u = e("../../core/environment"),
            c = e("@segment/analytics-core"),
            l = e("../../lib/is-plan-event-enabled"),
            p = e("../../lib/merged-options"),
            f = e("../../lib/p-while"),
            d = e("../../lib/priority-queue"),
            h = e("../../lib/priority-queue/persisted"),
            v = e("../middleware"),
            y = e("./loader"),
            m = e("./utils"),
            g = e("../../core/stats/metric-helpers"),
            _ = e("@segment/analytics-generic-utils"),
            b = (function () {
              function e(e, t, r, n, o, s) {
                void 0 === n && (n = {})
                var a = this
                ;(this.options = {}),
                  (this.type = "destination"),
                  (this.middleware = []),
                  (this.initializePromise = (0, _.createDeferred)()),
                  (this.flushing = !1),
                  (this.name = e),
                  (this.version = t),
                  (this.settings = (0, i.__assign)({}, n)),
                  (this.disableAutoISOConversion = o.disableAutoISOConversion || !1),
                  (this.integrationSource = s),
                  this.settings.type &&
                    "browser" === this.settings.type &&
                    delete this.settings.type,
                  this.initializePromise.promise.then(
                    function (e) {
                      return (a._initialized = e)
                    },
                    function () {},
                  ),
                  (this.options = o),
                  (this.buffer = o.disableClientPersistence
                    ? new d.PriorityQueue(4, [])
                    : new h.PersistedPriorityQueue(4, "".concat(r, ":dest-").concat(e))),
                  this.scheduleFlush()
              }
              return (
                (e.prototype.isLoaded = function () {
                  return !!this._ready
                }),
                (e.prototype.ready = function () {
                  var e = this
                  return this.initializePromise.promise.then(function () {
                    var t
                    return null !== (t = e.onReady) && void 0 !== t ? t : Promise.resolve()
                  })
                }),
                (e.prototype.load = function (e, t) {
                  var r
                  return (0, i.__awaiter)(this, void 0, void 0, function () {
                    var n,
                      o,
                      s = this
                    return (0, i.__generator)(this, function (i) {
                      switch (i.label) {
                        case 0:
                          if (this._ready || void 0 !== this.onReady) return [2]
                          if (!(null !== (r = this.integrationSource) && void 0 !== r))
                            return [3, 1]
                          return (o = r), [3, 3]
                        case 1:
                          return [
                            4,
                            (0, y.loadIntegration)(
                              e,
                              this.name,
                              this.version,
                              this.options.obfuscate,
                            ),
                          ]
                        case 2:
                          ;(o = i.sent()), (i.label = 3)
                        case 3:
                          ;(n = o),
                            (this.integration = (0, y.buildIntegration)(n, this.settings, t)),
                            (this.onReady = new Promise(function (e) {
                              s.integration.once("ready", function () {
                                ;(s._ready = !0), e(!0)
                              })
                            })),
                            this.integration.on("initialize", function () {
                              s.initializePromise.resolve(!0)
                            })
                          try {
                            ;(0, g.recordIntegrationMetric)(e, {
                              integrationName: this.name,
                              methodName: "initialize",
                              type: "classic",
                            }),
                              this.integration.initialize()
                          } catch (t) {
                            throw (
                              ((0, g.recordIntegrationMetric)(e, {
                                integrationName: this.name,
                                methodName: "initialize",
                                type: "classic",
                                didError: !0,
                              }),
                              this.initializePromise.resolve(!1),
                              t)
                            )
                          }
                          return [2]
                      }
                    })
                  })
                }),
                (e.prototype.unload = function (e, t) {
                  return (0, y.unloadIntegration)(this.name, this.version, this.options.obfuscate)
                }),
                (e.prototype.addMiddleware = function () {
                  for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r]
                  this.middleware = (e = this.middleware).concat.apply(e, t)
                }),
                (e.prototype.shouldBuffer = function (e) {
                  return (
                    "page" !== e.event.type &&
                    ((0, s.isOffline)() || !0 !== this._ready || !0 !== this._initialized)
                  )
                }),
                (e.prototype.send = function (e, t, r) {
                  var n, o
                  return (0, i.__awaiter)(this, void 0, void 0, function () {
                    var s, u, c, p, f, d
                    return (0, i.__generator)(this, function (h) {
                      switch (h.label) {
                        case 0:
                          if (this.shouldBuffer(e))
                            return this.buffer.push(e), this.scheduleFlush(), [2, e]
                          return (
                            (s =
                              null ===
                                (o =
                                  null === (n = this.options) || void 0 === n ? void 0 : n.plan) ||
                              void 0 === o
                                ? void 0
                                : o.track),
                            (u = e.event.event),
                            s &&
                              u &&
                              "Segment.io" !== this.name &&
                              ((c = s[u]),
                              (0, l.isPlanEventEnabled)(s, c)
                                ? e.updateEvent(
                                    "integrations",
                                    (0, i.__assign)(
                                      (0, i.__assign)({}, e.event.integrations),
                                      null == c ? void 0 : c.integrations,
                                    ),
                                  )
                                : (e.updateEvent(
                                    "integrations",
                                    (0, i.__assign)((0, i.__assign)({}, e.event.integrations), {
                                      All: !1,
                                      "Segment.io": !0,
                                    }),
                                  ),
                                  e.cancel(
                                    new a.ContextCancelation({
                                      retry: !1,
                                      reason: "Event "
                                        .concat(u, " disabled for integration ")
                                        .concat(this.name, " in tracking plan"),
                                      type: "Dropped by plan",
                                    }),
                                  )),
                              (null == c ? void 0 : c.enabled) &&
                                (null == c ? void 0 : c.integrations[this.name]) === !1 &&
                                e.cancel(
                                  new a.ContextCancelation({
                                    retry: !1,
                                    reason: "Event "
                                      .concat(u, " disabled for integration ")
                                      .concat(this.name, " in tracking plan"),
                                    type: "Dropped by plan",
                                  }),
                                )),
                            [
                              4,
                              (0, v.applyDestinationMiddleware)(
                                this.name,
                                e.event,
                                this.middleware,
                              ),
                            ]
                          )
                        case 1:
                          if (null === (p = h.sent())) return [2, e]
                          ;(f = new t(p, { traverse: !this.disableAutoISOConversion })),
                            (0, g.recordIntegrationMetric)(e, {
                              integrationName: this.name,
                              methodName: r,
                              type: "classic",
                            }),
                            (h.label = 2)
                        case 2:
                          if ((h.trys.push([2, 5, , 6]), !this.integration)) return [3, 4]
                          return [4, this.integration.invoke.call(this.integration, r, f)]
                        case 3:
                          h.sent(), (h.label = 4)
                        case 4:
                          return [3, 6]
                        case 5:
                          throw (
                            ((d = h.sent()),
                            (0, g.recordIntegrationMetric)(e, {
                              integrationName: this.name,
                              methodName: r,
                              type: "classic",
                              didError: !0,
                            }),
                            d)
                          )
                        case 6:
                          return [2, e]
                      }
                    })
                  })
                }),
                (e.prototype.track = function (e) {
                  return (0, i.__awaiter)(this, void 0, void 0, function () {
                    return (0, i.__generator)(this, function (t) {
                      return [2, this.send(e, o.Track, "track")]
                    })
                  })
                }),
                (e.prototype.page = function (e) {
                  var t
                  return (0, i.__awaiter)(this, void 0, void 0, function () {
                    return (0, i.__generator)(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return (
                            (null === (t = this.integration) || void 0 === t
                              ? void 0
                              : t._assumesPageview) &&
                              !this._initialized &&
                              this.integration.initialize(),
                            [4, this.initializePromise.promise]
                          )
                        case 1:
                          return r.sent(), [2, this.send(e, o.Page, "page")]
                      }
                    })
                  })
                }),
                (e.prototype.identify = function (e) {
                  return (0, i.__awaiter)(this, void 0, void 0, function () {
                    return (0, i.__generator)(this, function (t) {
                      return [2, this.send(e, o.Identify, "identify")]
                    })
                  })
                }),
                (e.prototype.alias = function (e) {
                  return (0, i.__awaiter)(this, void 0, void 0, function () {
                    return (0, i.__generator)(this, function (t) {
                      return [2, this.send(e, o.Alias, "alias")]
                    })
                  })
                }),
                (e.prototype.group = function (e) {
                  return (0, i.__awaiter)(this, void 0, void 0, function () {
                    return (0, i.__generator)(this, function (t) {
                      return [2, this.send(e, o.Group, "group")]
                    })
                  })
                }),
                (e.prototype.scheduleFlush = function () {
                  var e = this
                  this.flushing ||
                    setTimeout(function () {
                      return (0, i.__awaiter)(e, void 0, void 0, function () {
                        var e
                        return (0, i.__generator)(this, function (t) {
                          switch (t.label) {
                            case 0:
                              if (
                                (0, s.isOffline)() ||
                                !0 !== this._ready ||
                                !0 !== this._initialized
                              )
                                return this.scheduleFlush(), [2]
                              return (
                                (this.flushing = !0),
                                (e = this),
                                [
                                  4,
                                  (function (e, t) {
                                    return (0, i.__awaiter)(this, void 0, void 0, function () {
                                      var r,
                                        n = this
                                      return (0, i.__generator)(this, function (o) {
                                        switch (o.label) {
                                          case 0:
                                            if (((r = []), (0, s.isOffline)())) return [2, t]
                                            return [
                                              4,
                                              (0, f.pWhile)(
                                                function () {
                                                  return t.length > 0 && (0, s.isOnline)()
                                                },
                                                function () {
                                                  return (0, i.__awaiter)(
                                                    n,
                                                    void 0,
                                                    void 0,
                                                    function () {
                                                      var n
                                                      return (0, i.__generator)(this, function (i) {
                                                        switch (i.label) {
                                                          case 0:
                                                            if (!(n = t.pop())) return [2]
                                                            return [4, (0, c.attempt)(n, e)]
                                                          case 1:
                                                            return (
                                                              i.sent() instanceof a.Context ||
                                                                r.push(n),
                                                              [2]
                                                            )
                                                        }
                                                      })
                                                    },
                                                  )
                                                },
                                              ),
                                            ]
                                          case 1:
                                            return (
                                              o.sent(),
                                              r.map(function (e) {
                                                return t.pushWithBackoff(e)
                                              }),
                                              [2, t]
                                            )
                                        }
                                      })
                                    })
                                  })(this, this.buffer),
                                ]
                              )
                            case 1:
                              return (
                                (e.buffer = t.sent()),
                                (this.flushing = !1),
                                this.buffer.todo > 0 && this.scheduleFlush(),
                                [2]
                              )
                          }
                        })
                      })
                    }, 5e3 * Math.random())
                }),
                e
              )
            })()
          function x(e, t, r, n, o, s) {
            if ((void 0 === r && (r = {}), void 0 === n && (n = {}), (0, u.isServer)())) return []
            t.plan && ((n = null != n ? n : {}).plan = t.plan)
            var a,
              l,
              f =
                null !==
                  (l =
                    null === (a = t.middlewareSettings) || void 0 === a
                      ? void 0
                      : a.routingRules) && void 0 !== l
                  ? l
                  : [],
              d = t.integrations,
              h = n.integrations,
              v = (0, p.mergedOptions)(t, null != n ? n : {}),
              g =
                null == s
                  ? void 0
                  : s.reduce(function (e, t) {
                      var r
                      return (0, i.__assign)(
                        (0, i.__assign)({}, e),
                        (((r = {})[(0, y.resolveIntegrationNameFromSource)(t)] = t), r),
                      )
                    }, {})
            return Array.from(
              new Set(
                (0, i.__spreadArray)(
                  (0, i.__spreadArray)(
                    [],
                    Object.keys(d).filter(function (e) {
                      return (0, m.isInstallableIntegration)(e, d[e])
                    }),
                    !0,
                  ),
                  Object.keys(g || {}).filter(function (e) {
                    return (
                      (0, c.isPlainObject)(d[e]) || (0, c.isPlainObject)(null == h ? void 0 : h[e])
                    )
                  }),
                  !0,
                ),
              ),
            )
              .filter(function (e) {
                return !(0, m.isDisabledIntegration)(e, r)
              })
              .map(function (t) {
                var r = d[t],
                  i = (0, y.resolveVersion)(r),
                  s = new b(t, i, e, v[t], n, null == g ? void 0 : g[t])
                return (
                  f.filter(function (e) {
                    return e.destinationName === t
                  }).length > 0 &&
                    o &&
                    s.addMiddleware(o),
                  s
                )
              })
          }
        },
        {
          tslib: "gdEuw",
          "@segment/facade": "gqQyk",
          "../../core/connection": "4URqS",
          "../../core/context": "lGERA",
          "../../core/environment": "95DB8",
          "@segment/analytics-core": "lfzmU",
          "../../lib/is-plan-event-enabled": "8Xjbl",
          "../../lib/merged-options": "9MLNj",
          "../../lib/p-while": "7CDsQ",
          "../../lib/priority-queue": "g5NmY",
          "../../lib/priority-queue/persisted": "6tu3y",
          "../middleware": "g78U6",
          "./loader": "1ycfW",
          "./utils": "aeu5T",
          "../../core/stats/metric-helpers": "krTqW",
          "@segment/analytics-generic-utils": "NOMyI",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      gdEuw: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "__extends", () => o),
            n.export(r, "__assign", () => s),
            n.export(r, "__rest", () => a),
            n.export(r, "__decorate", () => u),
            n.export(r, "__param", () => c),
            n.export(r, "__esDecorate", () => l),
            n.export(r, "__runInitializers", () => p),
            n.export(r, "__propKey", () => f),
            n.export(r, "__setFunctionName", () => d),
            n.export(r, "__metadata", () => h),
            n.export(r, "__awaiter", () => v),
            n.export(r, "__generator", () => y),
            n.export(r, "__createBinding", () => m),
            n.export(r, "__exportStar", () => g),
            n.export(r, "__values", () => _),
            n.export(r, "__read", () => b),
            n.export(r, "__spread", () => x),
            n.export(r, "__spreadArrays", () => j),
            n.export(r, "__spreadArray", () => w),
            n.export(r, "__await", () => O),
            n.export(r, "__asyncGenerator", () => I),
            n.export(r, "__asyncDelegator", () => E),
            n.export(r, "__asyncValues", () => F),
            n.export(r, "__makeTemplateObject", () => P),
            n.export(r, "__importStar", () => S),
            n.export(r, "__importDefault", () => A),
            n.export(r, "__classPrivateFieldGet", () => R),
            n.export(r, "__classPrivateFieldSet", () => T),
            n.export(r, "__classPrivateFieldIn", () => D),
            n.export(r, "__addDisposableResource", () => M),
            n.export(r, "__disposeResources", () => q)
          var i = function (e, t) {
            return (i =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
              })(e, t)
          }
          function o(e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError("Class extends value " + String(t) + " is not a constructor or null")
            function r() {
              this.constructor = e
            }
            i(e, t),
              (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
          }
          var s = function () {
            return (s =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                return e
              }).apply(this, arguments)
          }
          function a(e, t) {
            var r = {}
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n])
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                0 > t.indexOf(n[i]) &&
                  Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                  (r[n[i]] = e[n[i]])
            return r
          }
          function u(e, t, r, n) {
            var i,
              o = arguments.length,
              s = o < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              s = Reflect.decorate(e, t, r, n)
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s)
            return o > 3 && s && Object.defineProperty(t, r, s), s
          }
          function c(e, t) {
            return function (r, n) {
              t(r, n, e)
            }
          }
          function l(e, t, r, n, i, o) {
            function s(e) {
              if (void 0 !== e && "function" != typeof e) throw TypeError("Function expected")
              return e
            }
            for (
              var a,
                u = n.kind,
                c = "getter" === u ? "get" : "setter" === u ? "set" : "value",
                l = !t && e ? (n.static ? e : e.prototype) : null,
                p = t || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}),
                f = !1,
                d = r.length - 1;
              d >= 0;
              d--
            ) {
              var h = {}
              for (var v in n) h[v] = "access" === v ? {} : n[v]
              for (var v in n.access) h.access[v] = n.access[v]
              h.addInitializer = function (e) {
                if (f) throw TypeError("Cannot add initializers after decoration has completed")
                o.push(s(e || null))
              }
              var y = (0, r[d])("accessor" === u ? { get: p.get, set: p.set } : p[c], h)
              if ("accessor" === u) {
                if (void 0 === y) continue
                if (null === y || "object" != typeof y) throw TypeError("Object expected")
                ;(a = s(y.get)) && (p.get = a),
                  (a = s(y.set)) && (p.set = a),
                  (a = s(y.init)) && i.unshift(a)
              } else (a = s(y)) && ("field" === u ? i.unshift(a) : (p[c] = a))
            }
            l && Object.defineProperty(l, n.name, p), (f = !0)
          }
          function p(e, t, r) {
            for (var n = arguments.length > 2, i = 0; i < t.length; i++)
              r = n ? t[i].call(e, r) : t[i].call(e)
            return n ? r : void 0
          }
          function f(e) {
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
            return new (r || (r = Promise))(function (i, o) {
              function s(e) {
                try {
                  u(n.next(e))
                } catch (e) {
                  o(e)
                }
              }
              function a(e) {
                try {
                  u(n.throw(e))
                } catch (e) {
                  o(e)
                }
              }
              function u(e) {
                var t
                e.done
                  ? i(e.value)
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
          function y(e, t) {
            var r,
              n,
              i,
              o,
              s = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1]
                  return i[1]
                },
                trys: [],
                ops: [],
              }
            return (
              (o = { next: a(0), throw: a(1), return: a(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this
                }),
              o
            )
            function a(a) {
              return function (u) {
                return (function (a) {
                  if (r) throw TypeError("Generator is already executing.")
                  for (; o && ((o = 0), a[0] && (s = 0)), s; )
                    try {
                      if (
                        ((r = 1),
                        n &&
                          (i =
                            2 & a[0]
                              ? n.return
                              : a[0]
                                ? n.throw || ((i = n.return) && i.call(n), 0)
                                : n.next) &&
                          !(i = i.call(n, a[1])).done)
                      )
                        return i
                      switch (((n = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                        case 0:
                        case 1:
                          i = a
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
                            !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                            (6 === a[0] || 2 === a[0])
                          ) {
                            s = 0
                            continue
                          }
                          if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                            s.label = a[1]
                            break
                          }
                          if (6 === a[0] && s.label < i[1]) {
                            ;(s.label = i[1]), (i = a)
                            break
                          }
                          if (i && s.label < i[2]) {
                            ;(s.label = i[2]), s.ops.push(a)
                            break
                          }
                          i[2] && s.ops.pop(), s.trys.pop()
                          continue
                      }
                      a = t.call(e, s)
                    } catch (e) {
                      ;(a = [6, e]), (n = 0)
                    } finally {
                      r = i = 0
                    }
                  if (5 & a[0]) throw a[1]
                  return { value: a[0] ? a[1] : void 0, done: !0 }
                })([a, u])
              }
            }
          }
          var m = Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r)
                var i = Object.getOwnPropertyDescriptor(t, r)
                ;(!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) &&
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[r]
                    },
                  }),
                  Object.defineProperty(e, n, i)
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r])
              }
          function g(e, t) {
            for (var r in e)
              "default" === r || Object.prototype.hasOwnProperty.call(t, r) || m(t, e, r)
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
              i,
              o = r.call(e),
              s = []
            try {
              for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; ) s.push(n.value)
            } catch (e) {
              i = { error: e }
            } finally {
              try {
                n && !n.done && (r = o.return) && r.call(o)
              } finally {
                if (i) throw i.error
              }
            }
            return s
          }
          function x() {
            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(b(arguments[t]))
            return e
          }
          function j() {
            for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length
            for (var n = Array(e), i = 0, t = 0; t < r; t++)
              for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++) n[i] = o[s]
            return n
          }
          function w(e, t, r) {
            if (r || 2 == arguments.length)
              for (var n, i = 0, o = t.length; i < o; i++)
                (!n && i in t) || (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]))
            return e.concat(n || Array.prototype.slice.call(t))
          }
          function O(e) {
            return this instanceof O ? ((this.v = e), this) : new O(e)
          }
          function I(e, t, r) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.")
            var n,
              i = r.apply(e, t || []),
              o = []
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
              i[e] &&
                (n[e] = function (t) {
                  return new Promise(function (r, n) {
                    o.push([e, t, r, n]) > 1 || a(e, t)
                  })
                })
            }
            function a(e, t) {
              try {
                var r
                ;(r = i[e](t)).value instanceof O
                  ? Promise.resolve(r.value.v).then(u, c)
                  : l(o[0][2], r)
              } catch (e) {
                l(o[0][3], e)
              }
            }
            function u(e) {
              a("next", e)
            }
            function c(e) {
              a("throw", e)
            }
            function l(e, t) {
              e(t), o.shift(), o.length && a(o[0][0], o[0][1])
            }
          }
          function E(e) {
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
            function n(n, i) {
              t[n] = e[n]
                ? function (t) {
                    return (r = !r) ? { value: O(e[n](t)), done: !1 } : i ? i(t) : t
                  }
                : i
            }
          }
          function F(e) {
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
                  return new Promise(function (n, i) {
                    ;(function (e, t, r, n) {
                      Promise.resolve(n).then(function (t) {
                        e({ value: t, done: r })
                      }, t)
                    })(n, i, (t = e[r](t)).done, t.value)
                  })
                }
            }
          }
          function P(e, t) {
            return (
              Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e
            )
          }
          var k = Object.create
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
                "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && m(t, e, r)
            return k(t, e), t
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
          function T(e, t, r, n, i) {
            if ("m" === n) throw TypeError("Private method is not writable")
            if ("a" === n && !i) throw TypeError("Private accessor was defined without a setter")
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw TypeError(
                "Cannot write private member to an object whose class did not declare it",
              )
            return "a" === n ? i.call(e, r) : i ? (i.value = r) : t.set(e, r), r
          }
          function D(e, t) {
            if (null === t || ("object" != typeof t && "function" != typeof t))
              throw TypeError("Cannot use 'in' operator on non-object")
            return "function" == typeof e ? t === e : e.has(t)
          }
          function M(e, t, r) {
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
          var C =
            "function" == typeof SuppressedError
              ? SuppressedError
              : function (e, t, r) {
                  var n = Error(r)
                  return (n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n
                }
          function q(e) {
            function t(t) {
              ;(e.error = e.hasError
                ? new C(t, e.error, "An error was suppressed during disposal.")
                : t),
                (e.hasError = !0)
            }
            return (function r() {
              for (; e.stack.length; ) {
                var n = e.stack.pop()
                try {
                  var i = n.dispose && n.dispose.call(n.value)
                  if (n.async)
                    return Promise.resolve(i).then(r, function (e) {
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
            __extends: o,
            __assign: s,
            __rest: a,
            __decorate: u,
            __param: c,
            __metadata: h,
            __awaiter: v,
            __generator: y,
            __createBinding: m,
            __exportStar: g,
            __values: _,
            __read: b,
            __spread: x,
            __spreadArrays: j,
            __spreadArray: w,
            __await: O,
            __asyncGenerator: I,
            __asyncDelegator: E,
            __asyncValues: F,
            __makeTemplateObject: P,
            __importStar: S,
            __importDefault: A,
            __classPrivateFieldGet: R,
            __classPrivateFieldSet: T,
            __classPrivateFieldIn: D,
            __addDisposableResource: M,
            __disposeResources: q,
          }
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
      gqQyk: [
        function (e, t, r) {
          var n =
            (this && this.__assign) ||
            function () {
              return (n =
                Object.assign ||
                function (e) {
                  for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var i in (t = arguments[r]))
                      Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                  return e
                }).apply(this, arguments)
            }
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.Delete =
              r.Screen =
              r.Page =
              r.Track =
              r.Identify =
              r.Group =
              r.Alias =
              r.Facade =
                void 0)
          var i = e("a467e031c8878919")
          Object.defineProperty(r, "Facade", {
            enumerable: !0,
            get: function () {
              return i.Facade
            },
          })
          var o = e("6217043d13ee3417")
          Object.defineProperty(r, "Alias", {
            enumerable: !0,
            get: function () {
              return o.Alias
            },
          })
          var s = e("73ca563f5f3d5620")
          Object.defineProperty(r, "Group", {
            enumerable: !0,
            get: function () {
              return s.Group
            },
          })
          var a = e("51979a9c859d6b32")
          Object.defineProperty(r, "Identify", {
            enumerable: !0,
            get: function () {
              return a.Identify
            },
          })
          var u = e("de327eb4b969061a")
          Object.defineProperty(r, "Track", {
            enumerable: !0,
            get: function () {
              return u.Track
            },
          })
          var c = e("d54e1a31dbb6299f")
          Object.defineProperty(r, "Page", {
            enumerable: !0,
            get: function () {
              return c.Page
            },
          })
          var l = e("66ec23a9b2cde56e")
          Object.defineProperty(r, "Screen", {
            enumerable: !0,
            get: function () {
              return l.Screen
            },
          })
          var p = e("b76fe96c2882b677")
          Object.defineProperty(r, "Delete", {
            enumerable: !0,
            get: function () {
              return p.Delete
            },
          }),
            (r.default = n(n({}, i.Facade), {
              Alias: o.Alias,
              Group: s.Group,
              Identify: a.Identify,
              Track: u.Track,
              Page: c.Page,
              Screen: l.Screen,
              Delete: p.Delete,
            }))
        },
        {
          a467e031c8878919: "aCZ9y",
          "6217043d13ee3417": "9eq1i",
          "73ca563f5f3d5620": "lASHI",
          "51979a9c859d6b32": "l5vs1",
          de327eb4b969061a: "kZCAB",
          d54e1a31dbb6299f: "4T2AB",
          "66ec23a9b2cde56e": "443C4",
          b76fe96c2882b677: "huts4",
        },
      ],
      aCZ9y: [
        function (e, t, r) {
          var n =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
          Object.defineProperty(r, "__esModule", { value: !0 }), (r.Facade = void 0)
          var i = n(e("babf673b1189b04a")),
            o = e("22ff2fd8a26e9049"),
            s = n(e("b0816d57c602b790")),
            a = n(e("f82ac8909da84a7e")),
            u = n(e("439a9d68c9f19251")),
            c = n(e("5c85568736f9877b"))
          function l(e, t) {
            ;(t = t || {}),
              (this.raw = o.clone(e)),
              "clone" in t || (t.clone = !0),
              t.clone && (e = o.clone(e)),
              "traverse" in t || (t.traverse = !0),
              "timestamp" in e
                ? (e.timestamp = a.default(e.timestamp))
                : (e.timestamp = new Date()),
              t.traverse && c.default(e),
              (this.opts = t),
              (this.obj = e)
          }
          r.Facade = l
          var p = l.prototype
          function f(e) {
            return o.clone(e)
          }
          ;(p.proxy = function (e) {
            var t,
              r = e.split("."),
              n = this[(e = r.shift())] || this.obj[e]
            return n
              ? ("function" == typeof n && (n = n.call(this) || {}),
                0 === r.length || (n = u.default(n, r.join("."))),
                this.opts.clone ? ((t = n), o.clone(t)) : n)
              : n
          }),
            (p.field = function (e) {
              var t,
                r = this.obj[e]
              return this.opts.clone ? ((t = r), o.clone(t)) : r
            }),
            (l.proxy = function (e) {
              return function () {
                return this.proxy(e)
              }
            }),
            (l.field = function (e) {
              return function () {
                return this.field(e)
              }
            }),
            (l.multi = function (e) {
              return function () {
                var t = this.proxy(e + "s")
                if (Array.isArray(t)) return t
                var r = this.proxy(e)
                return r && (r = [this.opts.clone ? o.clone(r) : r]), r || []
              }
            }),
            (l.one = function (e) {
              return function () {
                var t = this.proxy(e)
                if (t) return t
                var r = this.proxy(e + "s")
                if (Array.isArray(r)) return r[0]
              }
            }),
            (p.json = function () {
              var e = this.opts.clone ? o.clone(this.obj) : this.obj
              return this.type && (e.type = this.type()), e
            }),
            (p.rawEvent = function () {
              return this.raw
            }),
            (p.options = function (e) {
              var t = this.obj.options || this.obj.context || {},
                r = this.opts.clone ? o.clone(t) : t
              if (!e) return r
              if (this.enabled(e)) {
                var n = this.integrations(),
                  i = n[e] || u.default(n, e)
                return (
                  "object" != typeof i && (i = u.default(this.options(), e)),
                  "object" == typeof i ? i : {}
                )
              }
            }),
            (p.context = p.options),
            (p.enabled = function (e) {
              var t = this.proxy("options.providers.all")
              "boolean" != typeof t && (t = this.proxy("options.all")),
                "boolean" != typeof t && (t = this.proxy("integrations.all")),
                "boolean" != typeof t && (t = !0)
              var r = t && s.default(e),
                n = this.integrations()
              if (
                (n.providers && n.providers.hasOwnProperty(e) && (r = n.providers[e]),
                n.hasOwnProperty(e))
              ) {
                var i = n[e]
                r = "boolean" != typeof i || i
              }
              return !!r
            }),
            (p.integrations = function () {
              return this.obj.integrations || this.proxy("options.providers") || this.options()
            }),
            (p.active = function () {
              var e = this.proxy("options.active")
              return null == e && (e = !0), e
            }),
            (p.anonymousId = function () {
              return this.field("anonymousId") || this.field("sessionId")
            }),
            (p.sessionId = p.anonymousId),
            (p.groupId = l.proxy("options.groupId")),
            (p.traits = function (e) {
              var t = this.proxy("options.traits") || {},
                r = this.userId()
              for (var n in ((e = e || {}), r && (t.id = r), e))
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                  var i = null == this[n] ? this.proxy("options.traits." + n) : this[n]()
                  if (null == i) continue
                  ;(t[e[n]] = i), delete t[n]
                }
              return t
            }),
            (p.library = function () {
              var e = this.proxy("options.library")
              return e
                ? "string" == typeof e
                  ? { name: e, version: null }
                  : e
                : { name: "unknown", version: null }
            }),
            (p.device = function () {
              var e = this.proxy("context.device")
              ;("object" != typeof e || null === e) && (e = {})
              var t = this.library().name
              return (
                e.type ||
                  (t.indexOf("ios") > -1 && (e.type = "ios"),
                  t.indexOf("android") > -1 && (e.type = "android")),
                e
              )
            }),
            (p.userAgent = l.proxy("context.userAgent")),
            (p.timezone = l.proxy("context.timezone")),
            (p.timestamp = l.field("timestamp")),
            (p.channel = l.field("channel")),
            (p.ip = l.proxy("context.ip")),
            (p.userId = l.field("userId")),
            i.default(p)
        },
        {
          babf673b1189b04a: "bDi5Q",
          "22ff2fd8a26e9049": "g3FXg",
          b0816d57c602b790: "fBKeQ",
          f82ac8909da84a7e: "4Igjt",
          "439a9d68c9f19251": "8th0G",
          "5c85568736f9877b": "h9gZD",
        },
      ],
      bDi5Q: [
        function (e, t, r) {
          var n =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
          Object.defineProperty(r, "__esModule", { value: !0 })
          var i = n(e("b9ecada4c194725"))
          function o(e, t) {
            return function () {
              var r = this.traits(),
                n = this.properties ? this.properties() : {}
              return (
                i.default(r, "address." + e) ||
                i.default(r, e) ||
                (t ? i.default(r, "address." + t) : null) ||
                (t ? i.default(r, t) : null) ||
                i.default(n, "address." + e) ||
                i.default(n, e) ||
                (t ? i.default(n, "address." + t) : null) ||
                (t ? i.default(n, t) : null)
              )
            }
          }
          r.default = function (e) {
            ;(e.zip = o("postalCode", "zip")),
              (e.country = o("country")),
              (e.street = o("street")),
              (e.state = o("state")),
              (e.city = o("city")),
              (e.region = o("region"))
          }
        },
        { b9ecada4c194725: "8th0G" },
      ],
      "8th0G": [
        function (e, t, r) {
          function n(e) {
            return function (t, r, n, i) {
              var o,
                a = i && "function" == typeof i.normalizer ? i.normalizer : s
              r = a(r)
              for (var u = !1; !u; )
                (function () {
                  for (o in t) {
                    var e = a(o)
                    if (0 === r.indexOf(e)) {
                      var n = r.substr(e.length)
                      if ("." === n.charAt(0) || 0 === n.length) {
                        r = n.substr(1)
                        var i = t[o]
                        if (null == i || !r.length) {
                          u = !0
                          return
                        }
                        t = i
                        return
                      }
                    }
                  }
                  ;(o = void 0), (u = !0)
                })()
              if (o) return null == t ? t : e(t, o, n)
            }
          }
          function i(e, t) {
            return e.hasOwnProperty(t) && delete e[t], e
          }
          function o(e, t, r) {
            return e.hasOwnProperty(t) && (e[t] = r), e
          }
          function s(e) {
            return e.replace(/[^a-zA-Z0-9\.]+/g, "").toLowerCase()
          }
          ;(t.exports = n(function (e, t) {
            if (e.hasOwnProperty(t)) return e[t]
          })),
            (t.exports.find = t.exports),
            (t.exports.replace = function (e, t, r, i) {
              return n(o).call(this, e, t, r, i), e
            }),
            (t.exports.del = function (e, t, r) {
              return n(i).call(this, e, t, null, r), e
            })
        },
        {},
      ],
      g3FXg: [
        function (e, t, r) {
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.clone = void 0),
            (r.clone = function e(t) {
              if ("object" != typeof t) return t
              if ("[object Object]" === Object.prototype.toString.call(t)) {
                var r = {}
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[n] = e(t[n]))
                return r
              }
              return Array.isArray(t) ? t.map(e) : t
            })
        },
        {},
      ],
      fBKeQ: [
        function (e, t, r) {
          Object.defineProperty(r, "__esModule", { value: !0 })
          var n = { Salesforce: !0 }
          r.default = function (e) {
            return !n[e]
          }
        },
        {},
      ],
      "4Igjt": [
        function (e, t, r) {
          var n = e("2f19a45c0d85a975"),
            i = e("aabb62a2330824e"),
            o = e("995703c749ffdb56"),
            s = Object.prototype.toString
          t.exports = function (e) {
            return "[object Date]" === s.call(e)
              ? e
              : "[object Number]" === s.call(e)
                ? new Date(e < 315576e5 ? 1e3 * e : e)
                : n.is(e)
                  ? n.parse(e)
                  : i.is(e)
                    ? i.parse(e)
                    : o.is(e)
                      ? o.parse(e)
                      : new Date(e)
          }
        },
        { "2f19a45c0d85a975": "hUIh0", aabb62a2330824e: "iOxED", "995703c749ffdb56": "jmvEH" },
      ],
      hUIh0: [
        function (e, t, r) {
          var n =
            /^(\d{4})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:([ T])(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/
          ;(r.parse = function (e) {
            var t = [1, 5, 6, 7, 11, 12],
              r = n.exec(e),
              i = 0
            if (!r) return new Date(e)
            for (var o, s = 0; (o = t[s]); s++) r[o] = parseInt(r[o], 10) || 0
            ;(r[2] = parseInt(r[2], 10) || 1),
              (r[3] = parseInt(r[3], 10) || 1),
              r[2]--,
              (r[8] = r[8] ? (r[8] + "00").substring(0, 3) : 0),
              " " === r[4]
                ? (i = new Date().getTimezoneOffset())
                : "Z" !== r[9] && r[10] && ((i = 60 * r[11] + r[12]), "+" === r[10] && (i = 0 - i))
            var a = Date.UTC(r[1], r[2], r[3], r[5], r[6] + i, r[7], r[8])
            return new Date(a)
          }),
            (r.is = function (e, t) {
              return (
                "string" == typeof e && (!t || !1 !== /^\d{4}-\d{2}-\d{2}/.test(e)) && n.test(e)
              )
            })
        },
        {},
      ],
      iOxED: [
        function (e, t, r) {
          var n = /\d{13}/
          ;(r.is = function (e) {
            return n.test(e)
          }),
            (r.parse = function (e) {
              return (e = parseInt(e, 10)), new Date(e)
            })
        },
        {},
      ],
      jmvEH: [
        function (e, t, r) {
          var n = /\d{10}/
          ;(r.is = function (e) {
            return n.test(e)
          }),
            (r.parse = function (e) {
              var t = 1e3 * parseInt(e, 10)
              return new Date(t)
            })
        },
        {},
      ],
      h9gZD: [
        function (e, t, r) {
          var n = e("dc7348db6d2487a4")
          t.exports = function e(t, r) {
            var i, o
            return (void 0 === r && (r = !0), t && "object" == typeof t)
              ? ((i = r),
                Object.keys(t).forEach(function (r) {
                  t[r] = e(t[r], i)
                }),
                t)
              : Array.isArray(t)
                ? ((o = r),
                  t.forEach(function (r, n) {
                    t[n] = e(r, o)
                  }),
                  t)
                : n.is(t, r)
                  ? n.parse(t)
                  : t
          }
        },
        { dc7348db6d2487a4: "hUIh0" },
      ],
      "9eq1i": [
        function (e, t, r) {
          var n =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
          Object.defineProperty(r, "__esModule", { value: !0 }), (r.Alias = void 0)
          var i = n(e("ac8cf14739a746f2")),
            o = e("c81ef307ee78c6b7")
          function s(e, t) {
            o.Facade.call(this, e, t)
          }
          ;(r.Alias = s),
            i.default(s, o.Facade),
            (s.prototype.action = function () {
              return "alias"
            }),
            (s.prototype.type = s.prototype.action),
            (s.prototype.previousId = function () {
              return this.field("previousId") || this.field("from")
            }),
            (s.prototype.from = s.prototype.previousId),
            (s.prototype.userId = function () {
              return this.field("userId") || this.field("to")
            }),
            (s.prototype.to = s.prototype.userId)
        },
        { ac8cf14739a746f2: "joR05", c81ef307ee78c6b7: "aCZ9y" },
      ],
      joR05: [
        function (e, t, r) {
          "function" == typeof Object.create
            ? (t.exports = function (e, t) {
                t &&
                  ((e.super_ = t),
                  (e.prototype = Object.create(t.prototype, {
                    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                  })))
              })
            : (t.exports = function (e, t) {
                if (t) {
                  e.super_ = t
                  var r = function () {}
                  ;(r.prototype = t.prototype),
                    (e.prototype = new r()),
                    (e.prototype.constructor = e)
                }
              })
        },
        {},
      ],
      lASHI: [
        function (e, t, r) {
          var n =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
          Object.defineProperty(r, "__esModule", { value: !0 }), (r.Group = void 0)
          var i = n(e("fd593743ed4fdf41")),
            o = n(e("739beb8e5f67551f")),
            s = n(e("9ec84eb2fd45718c")),
            a = e("eedadc62e0ae3e3b")
          function u(e, t) {
            a.Facade.call(this, e, t)
          }
          ;(r.Group = u), i.default(u, a.Facade)
          var c = u.prototype
          ;(c.action = function () {
            return "group"
          }),
            (c.type = c.action),
            (c.groupId = a.Facade.field("groupId")),
            (c.created = function () {
              var e =
                this.proxy("traits.createdAt") ||
                this.proxy("traits.created") ||
                this.proxy("properties.createdAt") ||
                this.proxy("properties.created")
              if (e) return s.default(e)
            }),
            (c.email = function () {
              var e = this.proxy("traits.email")
              if (e) return e
              var t = this.groupId()
              if (o.default(t)) return t
            }),
            (c.traits = function (e) {
              var t = this.properties(),
                r = this.groupId()
              for (var n in ((e = e || {}), r && (t.id = r), e))
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                  var i = null == this[n] ? this.proxy("traits." + n) : this[n]()
                  if (null == i) continue
                  ;(t[e[n]] = i), delete t[n]
                }
              return t
            }),
            (c.name = a.Facade.proxy("traits.name")),
            (c.industry = a.Facade.proxy("traits.industry")),
            (c.employees = a.Facade.proxy("traits.employees")),
            (c.properties = function () {
              return this.field("traits") || this.field("properties") || {}
            })
        },
        {
          fd593743ed4fdf41: "joR05",
          "739beb8e5f67551f": "6zq8d",
          "9ec84eb2fd45718c": "4Igjt",
          eedadc62e0ae3e3b: "aCZ9y",
        },
      ],
      "6zq8d": [
        function (e, t, r) {
          Object.defineProperty(r, "__esModule", { value: !0 })
          var n = /.+\@.+\..+/
          r.default = function (e) {
            return n.test(e)
          }
        },
        {},
      ],
      l5vs1: [
        function (e, t, r) {
          var n =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
          Object.defineProperty(r, "__esModule", { value: !0 }), (r.Identify = void 0)
          var i = e("1d15fb9bedcee421"),
            o = n(e("90031cdad95380db")),
            s = n(e("9dec33e08b9dd4dd")),
            a = n(e("b65aa4cffd3720e2")),
            u = n(e("a7524d1218817873")),
            c = function (e) {
              return e.trim()
            }
          function l(e, t) {
            i.Facade.call(this, e, t)
          }
          ;(r.Identify = l), s.default(l, i.Facade)
          var p = l.prototype
          ;(p.action = function () {
            return "identify"
          }),
            (p.type = p.action),
            (p.traits = function (e) {
              var t = this.field("traits") || {},
                r = this.userId()
              for (var n in ((e = e || {}), r && (t.id = r), e)) {
                var i = null == this[n] ? this.proxy("traits." + n) : this[n]()
                null != i && ((t[e[n]] = i), n !== e[n] && delete t[n])
              }
              return t
            }),
            (p.email = function () {
              var e = this.proxy("traits.email")
              if (e) return e
              var t = this.userId()
              if (a.default(t)) return t
            }),
            (p.created = function () {
              var e = this.proxy("traits.created") || this.proxy("traits.createdAt")
              if (e) return u.default(e)
            }),
            (p.companyCreated = function () {
              var e = this.proxy("traits.company.created") || this.proxy("traits.company.createdAt")
              if (e) return u.default(e)
            }),
            (p.companyName = function () {
              return this.proxy("traits.company.name")
            }),
            (p.name = function () {
              var e = this.proxy("traits.name")
              if ("string" == typeof e) return c(e)
              var t = this.firstName(),
                r = this.lastName()
              if (t && r) return c(t + " " + r)
            }),
            (p.firstName = function () {
              var e = this.proxy("traits.firstName")
              if ("string" == typeof e) return c(e)
              var t = this.proxy("traits.name")
              if ("string" == typeof t) return c(t).split(" ")[0]
            }),
            (p.lastName = function () {
              var e = this.proxy("traits.lastName")
              if ("string" == typeof e) return c(e)
              var t = this.proxy("traits.name")
              if ("string" == typeof t) {
                var r = c(t).indexOf(" ")
                if (-1 !== r) return c(t.substr(r + 1))
              }
            }),
            (p.uid = function () {
              return this.userId() || this.username() || this.email()
            }),
            (p.description = function () {
              return this.proxy("traits.description") || this.proxy("traits.background")
            }),
            (p.age = function () {
              var e = this.birthday(),
                t = o.default(this.traits(), "age")
              return null != t
                ? t
                : e instanceof Date
                  ? new Date().getFullYear() - e.getFullYear()
                  : void 0
            }),
            (p.avatar = function () {
              var e = this.traits()
              return o.default(e, "avatar") || o.default(e, "photoUrl") || o.default(e, "avatarUrl")
            }),
            (p.position = function () {
              var e = this.traits()
              return o.default(e, "position") || o.default(e, "jobTitle")
            }),
            (p.username = i.Facade.proxy("traits.username")),
            (p.website = i.Facade.one("traits.website")),
            (p.websites = i.Facade.multi("traits.website")),
            (p.phone = i.Facade.one("traits.phone")),
            (p.phones = i.Facade.multi("traits.phone")),
            (p.address = i.Facade.proxy("traits.address")),
            (p.gender = i.Facade.proxy("traits.gender")),
            (p.birthday = i.Facade.proxy("traits.birthday"))
        },
        {
          "1d15fb9bedcee421": "aCZ9y",
          "90031cdad95380db": "8th0G",
          "9dec33e08b9dd4dd": "joR05",
          b65aa4cffd3720e2: "6zq8d",
          a7524d1218817873: "4Igjt",
        },
      ],
      kZCAB: [
        function (e, t, r) {
          var n =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
          Object.defineProperty(r, "__esModule", { value: !0 }), (r.Track = void 0)
          var i = n(e("ef97448c695671e")),
            o = e("63a8fb8dc8aa36d9"),
            s = e("db6b504c0c274670"),
            a = n(e("da19f2ae8cdbbaef")),
            u = n(e("8340893b7041997e"))
          function c(e, t) {
            o.Facade.call(this, e, t)
          }
          ;(r.Track = c), i.default(c, o.Facade)
          var l = c.prototype
          ;(l.action = function () {
            return "track"
          }),
            (l.type = l.action),
            (l.event = o.Facade.field("event")),
            (l.value = o.Facade.proxy("properties.value")),
            (l.category = o.Facade.proxy("properties.category")),
            (l.id = o.Facade.proxy("properties.id")),
            (l.productId = function () {
              return this.proxy("properties.product_id") || this.proxy("properties.productId")
            }),
            (l.promotionId = function () {
              return this.proxy("properties.promotion_id") || this.proxy("properties.promotionId")
            }),
            (l.cartId = function () {
              return this.proxy("properties.cart_id") || this.proxy("properties.cartId")
            }),
            (l.checkoutId = function () {
              return this.proxy("properties.checkout_id") || this.proxy("properties.checkoutId")
            }),
            (l.paymentId = function () {
              return this.proxy("properties.payment_id") || this.proxy("properties.paymentId")
            }),
            (l.couponId = function () {
              return this.proxy("properties.coupon_id") || this.proxy("properties.couponId")
            }),
            (l.wishlistId = function () {
              return this.proxy("properties.wishlist_id") || this.proxy("properties.wishlistId")
            }),
            (l.reviewId = function () {
              return this.proxy("properties.review_id") || this.proxy("properties.reviewId")
            }),
            (l.orderId = function () {
              return (
                this.proxy("properties.id") ||
                this.proxy("properties.order_id") ||
                this.proxy("properties.orderId")
              )
            }),
            (l.sku = o.Facade.proxy("properties.sku")),
            (l.tax = o.Facade.proxy("properties.tax")),
            (l.name = o.Facade.proxy("properties.name")),
            (l.price = o.Facade.proxy("properties.price")),
            (l.total = o.Facade.proxy("properties.total")),
            (l.repeat = o.Facade.proxy("properties.repeat")),
            (l.coupon = o.Facade.proxy("properties.coupon")),
            (l.shipping = o.Facade.proxy("properties.shipping")),
            (l.discount = o.Facade.proxy("properties.discount")),
            (l.shippingMethod = function () {
              return (
                this.proxy("properties.shipping_method") || this.proxy("properties.shippingMethod")
              )
            }),
            (l.paymentMethod = function () {
              return (
                this.proxy("properties.payment_method") || this.proxy("properties.paymentMethod")
              )
            }),
            (l.description = o.Facade.proxy("properties.description")),
            (l.plan = o.Facade.proxy("properties.plan")),
            (l.subtotal = function () {
              var e = u.default(this.properties(), "subtotal"),
                t = this.total() || this.revenue()
              if (e) return e
              if (!t) return 0
              if (this.total()) {
                var r = this.tax()
                r && (t -= r), (r = this.shipping()) && (t -= r), (r = this.discount()) && (t += r)
              }
              return t
            }),
            (l.products = function () {
              var e = this.properties(),
                t = u.default(e, "products")
              return Array.isArray(t)
                ? t.filter(function (e) {
                    return null !== e
                  })
                : []
            }),
            (l.quantity = function () {
              return (this.obj.properties || {}).quantity || 1
            }),
            (l.currency = function () {
              return (this.obj.properties || {}).currency || "USD"
            }),
            (l.referrer = function () {
              return (
                this.proxy("context.referrer.url") ||
                this.proxy("context.page.referrer") ||
                this.proxy("properties.referrer")
              )
            }),
            (l.query = o.Facade.proxy("options.query")),
            (l.properties = function (e) {
              var t = this.field("properties") || {}
              for (var r in (e = e || {}))
                if (Object.prototype.hasOwnProperty.call(e, r)) {
                  var n = null == this[r] ? this.proxy("properties." + r) : this[r]()
                  if (null == n) continue
                  ;(t[e[r]] = n), delete t[r]
                }
              return t
            }),
            (l.username = function () {
              return (
                this.proxy("traits.username") ||
                this.proxy("properties.username") ||
                this.userId() ||
                this.sessionId()
              )
            }),
            (l.email = function () {
              var e =
                this.proxy("traits.email") ||
                this.proxy("properties.email") ||
                this.proxy("options.traits.email")
              if (e) return e
              var t = this.userId()
              if (a.default(t)) return t
            }),
            (l.revenue = function () {
              var e = this.proxy("properties.revenue"),
                t = this.event()
              return (
                !e &&
                  t &&
                  t.match(/^[ _]?completed[ _]?order[ _]?|^[ _]?order[ _]?completed[ _]?$/i) &&
                  (e = this.proxy("properties.total")),
                (function (e) {
                  if (
                    e &&
                    ("number" == typeof e ||
                      ("string" == typeof e &&
                        !isNaN((e = parseFloat((e = e.replace(/\$/g, "")))))))
                  )
                    return e
                })(e)
              )
            }),
            (l.cents = function () {
              var e = this.revenue()
              return "number" != typeof e ? this.value() || 0 : 100 * e
            }),
            (l.identify = function () {
              var e = this.json()
              return (e.traits = this.traits()), new s.Identify(e, this.opts)
            })
        },
        {
          ef97448c695671e: "joR05",
          "63a8fb8dc8aa36d9": "aCZ9y",
          db6b504c0c274670: "l5vs1",
          da19f2ae8cdbbaef: "6zq8d",
          "8340893b7041997e": "8th0G",
        },
      ],
      "4T2AB": [
        function (e, t, r) {
          var n =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
          Object.defineProperty(r, "__esModule", { value: !0 }), (r.Page = void 0)
          var i = n(e("704987b37bf2ba5d")),
            o = e("f7f2f0b98e29f048"),
            s = e("e929e5bdeb05190f"),
            a = n(e("725b658d79ae58e0"))
          function u(e, t) {
            o.Facade.call(this, e, t)
          }
          ;(r.Page = u), i.default(u, o.Facade)
          var c = u.prototype
          ;(c.action = function () {
            return "page"
          }),
            (c.type = c.action),
            (c.category = o.Facade.field("category")),
            (c.name = o.Facade.field("name")),
            (c.title = o.Facade.proxy("properties.title")),
            (c.path = o.Facade.proxy("properties.path")),
            (c.url = o.Facade.proxy("properties.url")),
            (c.referrer = function () {
              return (
                this.proxy("context.referrer.url") ||
                this.proxy("context.page.referrer") ||
                this.proxy("properties.referrer")
              )
            }),
            (c.properties = function (e) {
              var t = this.field("properties") || {},
                r = this.category(),
                n = this.name()
              for (var i in ((e = e || {}), r && (t.category = r), n && (t.name = n), e))
                if (Object.prototype.hasOwnProperty.call(e, i)) {
                  var o = null == this[i] ? this.proxy("properties." + i) : this[i]()
                  if (null == o) continue
                  ;(t[e[i]] = o), i !== e[i] && delete t[i]
                }
              return t
            }),
            (c.email = function () {
              var e = this.proxy("context.traits.email") || this.proxy("properties.email")
              if (e) return e
              var t = this.userId()
              if (a.default(t)) return t
            }),
            (c.fullName = function () {
              var e = this.category(),
                t = this.name()
              return t && e ? e + " " + t : t
            }),
            (c.event = function (e) {
              return e ? "Viewed " + e + " Page" : "Loaded a Page"
            }),
            (c.track = function (e) {
              var t = this.json()
              return (
                (t.event = this.event(e)),
                (t.timestamp = this.timestamp()),
                (t.properties = this.properties()),
                new s.Track(t, this.opts)
              )
            })
        },
        {
          "704987b37bf2ba5d": "joR05",
          f7f2f0b98e29f048: "aCZ9y",
          e929e5bdeb05190f: "kZCAB",
          "725b658d79ae58e0": "6zq8d",
        },
      ],
      "443C4": [
        function (e, t, r) {
          var n =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
          Object.defineProperty(r, "__esModule", { value: !0 }), (r.Screen = void 0)
          var i = n(e("d8c86290fb06d737")),
            o = e("8d1a1bde7fcfe277"),
            s = e("fa7a5e2d2434b00b")
          function a(e, t) {
            o.Page.call(this, e, t)
          }
          ;(r.Screen = a),
            i.default(a, o.Page),
            (a.prototype.action = function () {
              return "screen"
            }),
            (a.prototype.type = a.prototype.action),
            (a.prototype.event = function (e) {
              return e ? "Viewed " + e + " Screen" : "Loaded a Screen"
            }),
            (a.prototype.track = function (e) {
              var t = this.json()
              return (
                (t.event = this.event(e)),
                (t.timestamp = this.timestamp()),
                (t.properties = this.properties()),
                new s.Track(t, this.opts)
              )
            })
        },
        { d8c86290fb06d737: "joR05", "8d1a1bde7fcfe277": "4T2AB", fa7a5e2d2434b00b: "kZCAB" },
      ],
      huts4: [
        function (e, t, r) {
          var n =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
          Object.defineProperty(r, "__esModule", { value: !0 }), (r.Delete = void 0)
          var i = n(e("c2cd0efed4550db")),
            o = e("52adb156565cd0f3")
          function s(e, t) {
            o.Facade.call(this, e, t)
          }
          ;(r.Delete = s),
            i.default(s, o.Facade),
            (s.prototype.type = function () {
              return "delete"
            })
        },
        { c2cd0efed4550db: "joR05", "52adb156565cd0f3": "aCZ9y" },
      ],
      "4URqS": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "isOnline", () => o),
            n.export(r, "isOffline", () => s)
          var i = e("../environment")
          function o() {
            return !(0, i.isBrowser)() || window.navigator.onLine
          }
          function s() {
            return !o()
          }
        },
        { "../environment": "95DB8", "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "95DB8": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          function i() {
            return "undefined" != typeof window
          }
          function o() {
            return !i()
          }
          n.defineInteropFlag(r),
            n.export(r, "isBrowser", () => i),
            n.export(r, "isServer", () => o)
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      lGERA: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "Context", () => a),
            n.export(r, "ContextCancelation", () => o.ContextCancelation)
          var i = e("tslib"),
            o = e("@segment/analytics-core"),
            s = e("../stats"),
            a = (function (e) {
              function t(t, r) {
                return e.call(this, t, r, new s.Stats()) || this
              }
              return (
                (0, i.__extends)(t, e),
                (t.system = function () {
                  return new this({ type: "track", event: "system" })
                }),
                t
              )
            })(o.CoreContext)
        },
        {
          tslib: "gdEuw",
          "@segment/analytics-core": "lfzmU",
          "../stats": "9RbVq",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      lfzmU: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "backoff", () => l.backoff),
            n.export(r, "CoreLogger", () => b.CoreLogger)
          var i = e("./emitter/interface")
          n.exportAll(i, r)
          var o = e("./plugins")
          n.exportAll(o, r)
          var s = e("./events/interfaces")
          n.exportAll(s, r)
          var a = e("./events")
          n.exportAll(a, r)
          var u = e("./callback")
          n.exportAll(u, r)
          var c = e("./priority-queue")
          n.exportAll(c, r)
          var l = e("./priority-queue/backoff"),
            p = e("./context")
          n.exportAll(p, r)
          var f = e("./queue/event-queue")
          n.exportAll(f, r)
          var d = e("./analytics")
          n.exportAll(d, r)
          var h = e("./analytics/dispatch")
          n.exportAll(h, r)
          var v = e("./validation/helpers")
          n.exportAll(v, r)
          var y = e("./validation/errors")
          n.exportAll(y, r)
          var m = e("./validation/assertions")
          n.exportAll(m, r)
          var g = e("./utils/bind-all")
          n.exportAll(g, r)
          var _ = e("./stats")
          n.exportAll(_, r)
          var b = e("./logger"),
            x = e("./queue/delivery")
          n.exportAll(x, r)
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
          n.defineInteropFlag(r), n.export(r, "CoreEventFactory", () => l)
          var i = e("tslib"),
            o = e("./interfaces")
          n.exportAll(o, r)
          var s = e("dset"),
            a = e("../utils/pick"),
            u = e("../validation/assertions"),
            c = function (e) {
              var t, r
              ;(this.settings = e),
                (this.createMessageId = e.createMessageId),
                (this.onEventMethodCall =
                  null !== (t = e.onEventMethodCall) && void 0 !== t ? t : function () {}),
                (this.onFinishedEvent =
                  null !== (r = e.onFinishedEvent) && void 0 !== r ? r : function () {})
            },
            l = (function () {
              function e(e) {
                this.settings = new c(e)
              }
              return (
                (e.prototype.track = function (e, t, r, n) {
                  return (
                    this.settings.onEventMethodCall({ type: "track", options: r }),
                    this.normalize(
                      (0, i.__assign)((0, i.__assign)({}, this.baseEvent()), {
                        event: e,
                        type: "track",
                        properties: null != t ? t : {},
                        options: (0, i.__assign)({}, r),
                        integrations: (0, i.__assign)({}, n),
                      }),
                    )
                  )
                }),
                (e.prototype.page = function (e, t, r, n, o) {
                  this.settings.onEventMethodCall({ type: "page", options: n })
                  var s,
                    a = {
                      type: "page",
                      properties: (0, i.__assign)({}, r),
                      options: (0, i.__assign)({}, n),
                      integrations: (0, i.__assign)({}, o),
                    }
                  return (
                    null !== e &&
                      ((a.category = e),
                      (a.properties = null !== (s = a.properties) && void 0 !== s ? s : {}),
                      (a.properties.category = e)),
                    null !== t && (a.name = t),
                    this.normalize((0, i.__assign)((0, i.__assign)({}, this.baseEvent()), a))
                  )
                }),
                (e.prototype.screen = function (e, t, r, n, o) {
                  this.settings.onEventMethodCall({ type: "screen", options: n })
                  var s = {
                    type: "screen",
                    properties: (0, i.__assign)({}, r),
                    options: (0, i.__assign)({}, n),
                    integrations: (0, i.__assign)({}, o),
                  }
                  return (
                    null !== e && (s.category = e),
                    null !== t && (s.name = t),
                    this.normalize((0, i.__assign)((0, i.__assign)({}, this.baseEvent()), s))
                  )
                }),
                (e.prototype.identify = function (e, t, r, n) {
                  return (
                    this.settings.onEventMethodCall({ type: "identify", options: r }),
                    this.normalize(
                      (0, i.__assign)((0, i.__assign)({}, this.baseEvent()), {
                        type: "identify",
                        userId: e,
                        traits: null != t ? t : {},
                        options: (0, i.__assign)({}, r),
                        integrations: n,
                      }),
                    )
                  )
                }),
                (e.prototype.group = function (e, t, r, n) {
                  return (
                    this.settings.onEventMethodCall({ type: "group", options: r }),
                    this.normalize(
                      (0, i.__assign)((0, i.__assign)({}, this.baseEvent()), {
                        type: "group",
                        traits: null != t ? t : {},
                        options: (0, i.__assign)({}, r),
                        integrations: (0, i.__assign)({}, n),
                        groupId: e,
                      }),
                    )
                  )
                }),
                (e.prototype.alias = function (e, t, r, n) {
                  this.settings.onEventMethodCall({ type: "alias", options: r })
                  var o = {
                    userId: e,
                    type: "alias",
                    options: (0, i.__assign)({}, r),
                    integrations: (0, i.__assign)({}, n),
                  }
                  return (null !== t && (o.previousId = t), void 0 === e)
                    ? this.normalize((0, i.__assign)((0, i.__assign)({}, o), this.baseEvent()))
                    : this.normalize((0, i.__assign)((0, i.__assign)({}, this.baseEvent()), o))
                }),
                (e.prototype.baseEvent = function () {
                  return { integrations: {}, options: {} }
                }),
                (e.prototype.context = function (e) {
                  var t,
                    r = ["userId", "anonymousId", "timestamp", "messageId"]
                  delete e.integrations
                  var n = Object.keys(e),
                    i = null !== (t = e.context) && void 0 !== t ? t : {},
                    o = {}
                  return (
                    n.forEach(function (t) {
                      "context" !== t &&
                        (r.includes(t) ? (0, s.dset)(o, t, e[t]) : (0, s.dset)(i, t, e[t]))
                    }),
                    [i, o]
                  )
                }),
                (e.prototype.normalize = function (e) {
                  var t,
                    r,
                    n = Object.keys(null !== (t = e.integrations) && void 0 !== t ? t : {}).reduce(
                      function (t, r) {
                        var n, o
                        return (0, i.__assign)(
                          (0, i.__assign)({}, t),
                          (((n = {})[r] = !!(null === (o = e.integrations) || void 0 === o
                            ? void 0
                            : o[r])),
                          n),
                        )
                      },
                      {},
                    )
                  e.options = (0, a.pickBy)(e.options || {}, function (e, t) {
                    return void 0 !== t
                  })
                  var o = (0, i.__assign)(
                      (0, i.__assign)({}, n),
                      null === (r = e.options) || void 0 === r ? void 0 : r.integrations,
                    ),
                    s = e.options ? this.context(e.options) : [],
                    c = s[0],
                    l = s[1],
                    p = e.options,
                    f = (0, i.__rest)(e, ["options"]),
                    d = (0, i.__assign)(
                      (0, i.__assign)(
                        (0, i.__assign)((0, i.__assign)({ timestamp: new Date() }, f), {
                          context: c,
                          integrations: o,
                        }),
                        l,
                      ),
                      { messageId: p.messageId || this.settings.createMessageId() },
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
      "86Bnd": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          function i(e, t, r) {
            t.split && (t = t.split("."))
            for (
              var n, i, o = 0, s = t.length, a = e;
              o < s && "__proto__" !== (i = t[o++]) && "constructor" !== i && "prototype" !== i;

            )
              a = a[i] =
                o === s
                  ? r
                  : typeof (n = a[i]) == typeof t
                    ? n
                    : 0 * t[o] != 0 || ~("" + t[o]).indexOf(".")
                      ? {}
                      : []
          }
          n.defineInteropFlag(r), n.export(r, "dset", () => i)
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "38qlM": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "pickBy", () => i)
          var i = function (e, t) {
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
            n.export(r, "assertUserIdentity", () => c),
            n.export(r, "assertEventExists", () => l),
            n.export(r, "assertEventType", () => p),
            n.export(r, "assertTrackEventName", () => f),
            n.export(r, "assertTrackEventProperties", () => d),
            n.export(r, "assertTraits", () => h),
            n.export(r, "assertMessageId", () => v),
            n.export(r, "validateEvent", () => y)
          var i = e("./errors"),
            o = e("./helpers"),
            s = "is not a string",
            a = "is not an object",
            u = "is nil"
          function c(e) {
            var t,
              r,
              n,
              a = ".userId/anonymousId/previousId/groupId",
              c =
                null !==
                  (n =
                    null !== (r = null !== (t = e.userId) && void 0 !== t ? t : e.anonymousId) &&
                    void 0 !== r
                      ? r
                      : e.groupId) && void 0 !== n
                  ? n
                  : e.previousId
            if ((0, o.exists)(c)) {
              if (!(0, o.isString)(c)) throw new i.ValidationError(a, s)
            } else throw new i.ValidationError(a, u)
          }
          function l(e) {
            if (!(0, o.exists)(e)) throw new i.ValidationError("Event", u)
            if ("object" != typeof e) throw new i.ValidationError("Event", a)
          }
          function p(e) {
            if (!(0, o.isString)(e.type)) throw new i.ValidationError(".type", s)
          }
          function f(e) {
            if (!(0, o.isString)(e.event)) throw new i.ValidationError(".event", s)
          }
          function d(e) {
            if (!(0, o.isPlainObject)(e.properties)) throw new i.ValidationError(".properties", a)
          }
          function h(e) {
            if (!(0, o.isPlainObject)(e.traits)) throw new i.ValidationError(".traits", a)
          }
          function v(e) {
            if (!(0, o.isString)(e.messageId)) throw new i.ValidationError(".messageId", s)
          }
          function y(e) {
            l(e),
              p(e),
              v(e),
              "track" === e.type && (f(e), d(e)),
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
          n.defineInteropFlag(r), n.export(r, "ValidationError", () => o)
          var i = e("tslib"),
            o = (function (e) {
              function t(t, r) {
                var n = e.call(this, "".concat(t, " ").concat(r)) || this
                return (n.field = t), n
              }
              return (0, i.__extends)(t, e), t
            })(Error)
        },
        { tslib: "gdEuw", "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      kdm5c: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          function i(e) {
            return "string" == typeof e
          }
          function o(e) {
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
            n.export(r, "isString", () => i),
            n.export(r, "isNumber", () => o),
            n.export(r, "isFunction", () => s),
            n.export(r, "exists", () => a),
            n.export(r, "isPlainObject", () => u)
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "4gLXe": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          function i(e, t) {
            return new Promise(function (r, n) {
              var i = setTimeout(function () {
                n(Error("Promise timed out"))
              }, t)
              e.then(function (e) {
                return clearTimeout(i), r(e)
              }).catch(n)
            })
          }
          function o(e) {
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
            return o(r)
              .then(function () {
                return i(n(), 1e3)
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
            n.export(r, "pTimeout", () => i),
            n.export(r, "sleep", () => o),
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
          var i = e("tslib"),
            o = e("@segment/analytics-generic-utils"),
            s = e("./backoff"),
            a = "onRemoveFromFuture",
            u = (function (e) {
              function t(t, r, n) {
                var i = e.call(this) || this
                return (
                  (i.future = []),
                  (i.maxAttempts = t),
                  (i.queue = r),
                  (i.seen = null != n ? n : {}),
                  i
                )
              }
              return (
                (0, i.__extends)(t, e),
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
            })(o.Emitter)
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
          var i = e("./create-deferred")
          n.exportAll(i, r)
          var o = e("./emitter")
          n.exportAll(o, r)
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
          var i = e("./create-deferred")
          n.exportAll(i, r)
        },
        { "./create-deferred": "e5jKi", "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      e5jKi: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "createDeferred", () => i)
          var i = function () {
            var e,
              t,
              r = !1,
              n = new Promise(function (n, i) {
                ;(e = function () {
                  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
                  ;(r = !0), n.apply(void 0, e)
                }),
                  (t = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
                    ;(r = !0), i.apply(void 0, e)
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
          var i = e("./emitter")
          n.exportAll(i, r)
        },
        { "./emitter": "7QmfY", "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "7QmfY": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "Emitter", () => i)
          var i = (function () {
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
                    for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o]
                    r.off(e, n), t.apply(r, i)
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
                for (var t, r = this, n = [], i = 1; i < arguments.length; i++)
                  n[i - 1] = arguments[i]
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
          function i(e) {
            var t = e.minTimeout,
              r = e.factor,
              n = e.attempt,
              i = e.maxTimeout
            return Math.min(
              (Math.random() + 1) * (void 0 === t ? 500 : t) * Math.pow(void 0 === r ? 2 : r, n),
              void 0 === i ? 1 / 0 : i,
            )
          }
          n.defineInteropFlag(r), n.export(r, "backoff", () => i)
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "7OiVm": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "ContextCancelation", () => u),
            n.export(r, "CoreContext", () => c)
          var i = e("@lukeed/uuid"),
            o = e("dset"),
            s = e("../logger"),
            a = e("../stats"),
            u = function (e) {
              var t, r, n
              ;(this.retry = null === (t = e.retry) || void 0 === t || t),
                (this.type = null !== (r = e.type) && void 0 !== r ? r : "plugin Error"),
                (this.reason = null !== (n = e.reason) && void 0 !== n ? n : "")
            },
            c = (function () {
              function e(e, t, r, n) {
                void 0 === t && (t = (0, i.v4)()),
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
                  return (0, o.dset)(this.event, e, t), this.event
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
          for (var i, o = 256, s = []; o--; ) s[o] = (o + 256).toString(16).substring(1)
          function a() {
            var e,
              t = 0,
              r = ""
            if (!i || o + 16 > 256) {
              for (i = Array((t = 256)); t--; ) i[t] = (256 * Math.random()) | 0
              t = o = 0
            }
            for (; t < 16; t++)
              (e = i[o + t]),
                6 == t ? (r += s[(15 & e) | 64]) : 8 == t ? (r += s[(63 & e) | 128]) : (r += s[e]),
                1 & t && t > 1 && t < 11 && (r += "-")
            return o++, r
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      lHKF4: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "CoreLogger", () => o)
          var i = e("tslib"),
            o = (function () {
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
                        o,
                        s = (0, i.__assign)((0, i.__assign)({}, t), {
                          json: JSON.stringify(t.extras, null, " "),
                          extras: t.extras,
                        })
                      delete s.time
                      var a =
                        null !==
                          (o = null === (n = t.time) || void 0 === n ? void 0 : n.toISOString()) &&
                        void 0 !== o
                          ? o
                          : ""
                      return (
                        e[a] && (a = "".concat(a, "-").concat(Math.random())),
                        (0, i.__assign)((0, i.__assign)({}, e), (((r = {})[a] = s), r))
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
            n.export(r, "CoreStats", () => o),
            n.export(r, "NullStats", () => s)
          var i = e("tslib"),
            o = (function () {
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
                    return (0, i.__assign)((0, i.__assign)({}, e), { tags: e.tags.join(",") })
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
                (0, i.__extends)(t, e),
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
            })(o)
        },
        { tslib: "gdEuw", "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "1SjnA": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "CoreEventQueue", () => p)
          var i = e("tslib"),
            o = e("../utils/group-by"),
            s = e("../priority-queue"),
            a = e("../context"),
            u = e("@segment/analytics-generic-utils"),
            c = e("../task/task-group"),
            l = e("./delivery"),
            p = (function (e) {
              function t(t) {
                var r = e.call(this) || this
                return (
                  (r.criticalTasks = (0, c.createTaskGroup)()),
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
                (0, i.__extends)(t, e),
                (t.prototype.register = function (e, t, r) {
                  return (0, i.__awaiter)(this, void 0, void 0, function () {
                    var n,
                      o,
                      s = this
                    return (0, i.__generator)(this, function (i) {
                      switch (i.label) {
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
                          return i.trys.push([1, 3, , 4]), [4, t.load(e, r)]
                        case 2:
                          return i.sent(), [3, 4]
                        case 3:
                          return (o = i.sent()), n(o), [3, 4]
                        case 4:
                          return [2]
                      }
                    })
                  })
                }),
                (t.prototype.deregister = function (e, t, r) {
                  return (0, i.__awaiter)(this, void 0, void 0, function () {
                    var n
                    return (0, i.__generator)(this, function (i) {
                      switch (i.label) {
                        case 0:
                          if ((i.trys.push([0, 3, , 4]), !t.unload)) return [3, 2]
                          return [4, Promise.resolve(t.unload(e, r))]
                        case 1:
                          i.sent(), (i.label = 2)
                        case 2:
                          return (
                            (this.plugins = this.plugins.filter(function (e) {
                              return e.name !== t.name
                            })),
                            [3, 4]
                          )
                        case 3:
                          return (
                            (n = i.sent()),
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
                  return (0, i.__awaiter)(this, void 0, void 0, function () {
                    var t
                    return (0, i.__generator)(this, function (r) {
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
                  return (0, i.__awaiter)(this, void 0, void 0, function () {
                    var t = this
                    return (0, i.__generator)(this, function (r) {
                      return [
                        2,
                        new Promise(function (r) {
                          var n = function (i, o) {
                            i.isSame(e) && (t.off("flush", n), r(i))
                          }
                          t.on("flush", n)
                        }),
                      ]
                    })
                  })
                }),
                (t.prototype.dispatchSingle = function (e) {
                  return (0, i.__awaiter)(this, void 0, void 0, function () {
                    var t = this
                    return (0, i.__generator)(this, function (r) {
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
                  return (0, i.__awaiter)(this, void 0, void 0, function () {
                    var t, r, n, o
                    return (0, i.__generator)(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return [4, this.criticalTasks.done()]
                        case 1:
                          i.sent(), (t = Date.now()), (i.label = 2)
                        case 2:
                          return i.trys.push([2, 4, , 5]), [4, this.flushOne(e)]
                        case 3:
                          return (
                            (e = i.sent()),
                            (r = Date.now() - t),
                            this.emit("delivery_success", e),
                            e.stats.gauge("delivered", r),
                            e.log("debug", "Delivered", e.event),
                            [2, e]
                          )
                        case 4:
                          throw (
                            ((o = n = i.sent()),
                            e.log("error", "Failed to deliver", o),
                            this.emit("delivery_failure", e, o),
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
                  return (0, i.__awaiter)(this, void 0, void 0, function () {
                    var e, t
                    return (0, i.__generator)(this, function (r) {
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
                        i,
                        o = void 0
                      return (
                        null === (r = t.alternativeNames) ||
                          void 0 === r ||
                          r.forEach(function (t) {
                            void 0 !== e[t] && (o = e[t])
                          }),
                        null !== (i = null !== (n = e[t.name]) && void 0 !== n ? n : o) &&
                        void 0 !== i
                          ? i
                          : !1 !== ("Segment.io" === t.name || e.All)
                      )
                    }),
                    r = (0, o.groupBy)(t, "type"),
                    n = r.before,
                    i = r.enrichment,
                    s = r.destination,
                    a = r.after
                  return {
                    before: void 0 === n ? [] : n,
                    enrichment: void 0 === i ? [] : i,
                    destinations: void 0 === s ? [] : s,
                    after: void 0 === a ? [] : a,
                  }
                }),
                (t.prototype.flushOne = function (e) {
                  var t, r
                  return (0, i.__awaiter)(this, void 0, void 0, function () {
                    var n, o, s, u, c, p, f, d, h, v, y, m, g
                    return (0, i.__generator)(this, function (i) {
                      switch (i.label) {
                        case 0:
                          if (!this.isReady()) throw Error("Not ready")
                          e.attempts > 1 && this.emit("delivery_retry", e),
                            (o = (n = this.availableExtensions(
                              null !== (t = e.event.integrations) && void 0 !== t ? t : {},
                            )).before),
                            (s = n.enrichment),
                            (u = 0),
                            (c = o),
                            (i.label = 1)
                        case 1:
                          if (!(u < c.length)) return [3, 4]
                          return (p = c[u]), [4, (0, l.ensure)(e, p)]
                        case 2:
                          ;(f = i.sent()) instanceof a.CoreContext && (e = f),
                            this.emit("message_enriched", e, p),
                            (i.label = 3)
                        case 3:
                          return u++, [3, 1]
                        case 4:
                          ;(d = 0), (h = s), (i.label = 5)
                        case 5:
                          if (!(d < h.length)) return [3, 8]
                          return (v = h[d]), [4, (0, l.attempt)(e, v)]
                        case 6:
                          ;(f = i.sent()) instanceof a.CoreContext && (e = f),
                            this.emit("message_enriched", e, v),
                            (i.label = 7)
                        case 7:
                          return d++, [3, 5]
                        case 8:
                          return (
                            (m = (y = this.availableExtensions(
                              null !== (r = e.event.integrations) && void 0 !== r ? r : {},
                            )).destinations),
                            (g = y.after),
                            [
                              4,
                              new Promise(function (t, r) {
                                setTimeout(function () {
                                  Promise.all(
                                    m.map(function (t) {
                                      return (0, l.attempt)(e, t)
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
                            i.sent(),
                            e.stats.increment("message_delivered"),
                            this.emit("message_delivered", e),
                            [
                              4,
                              Promise.all(
                                g.map(function (t) {
                                  return (0, l.attempt)(e, t)
                                }),
                              ),
                            ]
                          )
                        case 10:
                          return i.sent(), [2, e]
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
          n.defineInteropFlag(r), n.export(r, "groupBy", () => o)
          var i = e("tslib")
          function o(e, t) {
            var r = {}
            return (
              e.forEach(function (e) {
                var n,
                  o = void 0
                if ("string" == typeof t) {
                  var s = e[t]
                  o = "string" != typeof s ? JSON.stringify(s) : s
                } else t instanceof Function && (o = t(e))
                void 0 !== o &&
                  (r[o] = (0, i.__spreadArray)(
                    (0, i.__spreadArray)([], null !== (n = r[o]) && void 0 !== n ? n : [], !0),
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
          n.defineInteropFlag(r), n.export(r, "createTaskGroup", () => o)
          var i = e("../utils/is-thenable"),
            o = function () {
              var e,
                t,
                r = 0
              return {
                done: function () {
                  return e
                },
                run: function (n) {
                  var o = n()
                  return (
                    (0, i.isThenable)(o) &&
                      (1 == ++r &&
                        (e = new Promise(function (e) {
                          return (t = e)
                        })),
                      o.finally(function () {
                        return 0 == --r && t()
                      })),
                    o
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
          n.defineInteropFlag(r), n.export(r, "isThenable", () => i)
          var i = function (e) {
            return "object" == typeof e && null !== e && "then" in e && "function" == typeof e.then
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      kD4Ut: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "attempt", () => s), n.export(r, "ensure", () => a)
          var i = e("tslib"),
            o = e("../context")
          function s(e, t) {
            e.log("debug", "plugin", { plugin: t.name })
            var r = new Date().getTime(),
              n = t[e.event.type]
            return void 0 === n
              ? Promise.resolve(e)
              : (function (e) {
                  return (0, i.__awaiter)(this, void 0, void 0, function () {
                    return (0, i.__generator)(this, function (t) {
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
                    if (r instanceof o.ContextCancelation && "middleware_cancellation" === r.type)
                      throw r
                    return (
                      r instanceof o.ContextCancelation
                        ? e.log("warn", r.type, { plugin: t.name, error: r })
                        : (e.log("error", "plugin Error", { plugin: t.name, error: r }),
                          e.stats.increment("plugin_error", 1, ["plugin:".concat(t.name)])),
                      r
                    )
                  })
          }
          function a(e, t) {
            return s(e, t).then(function (t) {
              if (t instanceof o.CoreContext) return t
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
          var i = e("tslib"),
            o = e("../callback"),
            s = function (e, t) {
              return Math.max((null != t ? t : 300) - (Date.now() - e), 0)
            }
          function a(e, t, r, n) {
            return (0, i.__awaiter)(this, void 0, void 0, function () {
              var a, u
              return (0, i.__generator)(this, function (i) {
                switch (i.label) {
                  case 0:
                    if ((r.emit("dispatch_start", e), (a = Date.now()), !t.isEmpty())) return [3, 2]
                    return [4, t.dispatchSingle(e)]
                  case 1:
                    return (u = i.sent()), [3, 4]
                  case 2:
                    return [4, t.dispatch(e)]
                  case 3:
                    ;(u = i.sent()), (i.label = 4)
                  case 4:
                    if (!(null == n ? void 0 : n.callback)) return [3, 6]
                    return [4, (0, o.invokeCallback)(u, n.callback, s(a, n.timeout))]
                  case 5:
                    ;(u = i.sent()), (i.label = 6)
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
      "9RbVq": [
        function (e, t, r) {
          var n,
            i = e("@parcel/transformer-js/src/esmodule-helpers.js")
          i.defineInteropFlag(r), i.export(r, "Stats", () => u)
          var o = e("tslib"),
            s = e("@segment/analytics-core"),
            a = e("./remote-metrics"),
            u = (function (e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this
              }
              return (
                (0, o.__extends)(t, e),
                (t.initRemoteMetrics = function (e) {
                  n = new a.RemoteMetrics(e)
                }),
                (t.prototype.increment = function (t, r, i) {
                  e.prototype.increment.call(this, t, r, i),
                    null == n || n.increment(t, null != i ? i : [])
                }),
                t
              )
            })(s.CoreStats)
        },
        {
          tslib: "gdEuw",
          "@segment/analytics-core": "lfzmU",
          "./remote-metrics": "ky2Yh",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      ky2Yh: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "RemoteMetrics", () => p)
          var i = e("tslib"),
            o = e("../../lib/fetch"),
            s = e("../../generated/version"),
            a = e("../../lib/version-type"),
            u = e("../constants"),
            c = function (e, t, r) {
              var n = t.reduce(function (e, t) {
                var r = t.split(":"),
                  n = r[0],
                  i = r[1]
                return (e[n] = i), e
              }, {})
              return {
                type: "Counter",
                metric: e,
                value: 1,
                tags: (0, i.__assign)((0, i.__assign)({}, n), {
                  library: "analytics.js",
                  library_version:
                    "web" === r ? "next-".concat(s.version) : "npm:next-".concat(s.version),
                }),
              }
            }
          function l(e) {
            console.error("Error sending segment performance metrics", e)
          }
          var p = (function () {
            function e(e) {
              var t,
                r,
                n,
                i,
                o,
                s = this
              if (
                ((this.host =
                  null !== (t = null == e ? void 0 : e.host) && void 0 !== t
                    ? t
                    : u.SEGMENT_API_HOST),
                (this.sampleRate =
                  null !== (r = null == e ? void 0 : e.sampleRate) && void 0 !== r ? r : 1),
                (this.flushTimer =
                  null !== (n = null == e ? void 0 : e.flushTimer) && void 0 !== n ? n : 3e4),
                (this.maxQueueSize =
                  null !== (i = null == e ? void 0 : e.maxQueueSize) && void 0 !== i ? i : 20),
                (this.protocol =
                  null !== (o = null == e ? void 0 : e.protocol) && void 0 !== o ? o : "https"),
                (this.queue = []),
                this.sampleRate > 0)
              ) {
                var a = !1,
                  c = function () {
                    a || ((a = !0), s.flush().catch(l), (a = !1), setTimeout(c, s.flushTimer))
                  }
                c()
              }
            }
            return (
              (e.prototype.increment = function (e, t) {
                if (
                  !(
                    !e.includes("analytics_js.") ||
                    0 === t.length ||
                    Math.random() > this.sampleRate
                  ) &&
                  !(this.queue.length >= this.maxQueueSize)
                ) {
                  var r = c(e, t, (0, a.getVersionType)())
                  this.queue.push(r), e.includes("error") && this.flush().catch(l)
                }
              }),
              (e.prototype.flush = function () {
                return (0, i.__awaiter)(this, void 0, void 0, function () {
                  var e = this
                  return (0, i.__generator)(this, function (t) {
                    switch (t.label) {
                      case 0:
                        if (this.queue.length <= 0) return [2]
                        return [
                          4,
                          this.send().catch(function (t) {
                            l(t), (e.sampleRate = 0)
                          }),
                        ]
                      case 1:
                        return t.sent(), [2]
                    }
                  })
                })
              }),
              (e.prototype.send = function () {
                return (0, i.__awaiter)(this, void 0, void 0, function () {
                  var e, t, r
                  return (0, i.__generator)(this, function (n) {
                    return (
                      (e = { series: this.queue }),
                      (this.queue = []),
                      (t = { "Content-Type": "text/plain" }),
                      (r = "".concat(this.protocol, "://").concat(this.host, "/m")),
                      [2, (0, o.fetch)(r, { headers: t, body: JSON.stringify(e), method: "POST" })]
                    )
                  })
                })
              }),
              e
            )
          })()
        },
        {
          tslib: "gdEuw",
          "../../lib/fetch": "7h1qD",
          "../../generated/version": "lxnA2",
          "../../lib/version-type": "7W3Ve",
          "../constants": "7r3wF",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      "7h1qD": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "fetch", () => a)
          var i = e("unfetch"),
            o = n.interopDefault(i),
            s = e("./get-global"),
            a = function () {
              for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
              var r = (0, s.getGlobal)()
              return ((r && r.fetch) || (0, o.default)).apply(void 0, e)
            }
        },
        {
          unfetch: "byij0",
          "./get-global": "hHpms",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      byij0: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(
              r,
              "default",
              () =>
                function (e, t) {
                  return (
                    (t = t || {}),
                    new Promise(function (r, n) {
                      var i = new XMLHttpRequest(),
                        o = [],
                        s = [],
                        a = {},
                        u = function () {
                          return {
                            ok: 2 == ((i.status / 100) | 0),
                            statusText: i.statusText,
                            status: i.status,
                            url: i.responseURL,
                            text: function () {
                              return Promise.resolve(i.responseText)
                            },
                            json: function () {
                              return Promise.resolve(i.responseText).then(JSON.parse)
                            },
                            blob: function () {
                              return Promise.resolve(new Blob([i.response]))
                            },
                            clone: u,
                            headers: {
                              keys: function () {
                                return o
                              },
                              entries: function () {
                                return s
                              },
                              get: function (e) {
                                return a[e.toLowerCase()]
                              },
                              has: function (e) {
                                return e.toLowerCase() in a
                              },
                            },
                          }
                        }
                      for (var c in (i.open(t.method || "get", e, !0),
                      (i.onload = function () {
                        i
                          .getAllResponseHeaders()
                          .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (e, t, r) {
                            o.push((t = t.toLowerCase())),
                              s.push([t, r]),
                              (a[t] = a[t] ? a[t] + "," + r : r)
                          }),
                          r(u())
                      }),
                      (i.onerror = n),
                      (i.withCredentials = "include" == t.credentials),
                      t.headers))
                        i.setRequestHeader(c, t.headers[c])
                      i.send(t.body || null)
                    })
                  )
                },
            )
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      hHpms: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "getGlobal", () => o)
          var i = arguments[3],
            o = function () {
              return "undefined" != typeof globalThis
                ? globalThis
                : "undefined" != typeof self
                  ? self
                  : "undefined" != typeof window
                    ? window
                    : void 0 !== i
                      ? i
                      : null
            }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      lxnA2: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "version", () => i)
          var i = "1.69.0"
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "7W3Ve": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "setVersionType", () => o),
            n.export(r, "getVersionType", () => s)
          var i = "npm"
          function o(e) {
            i = e
          }
          function s() {
            return i
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "7r3wF": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "SEGMENT_API_HOST", () => i)
          var i = "api.segment.io/v1"
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "8Xjbl": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          function i(e, t) {
            var r, n
            return "boolean" == typeof (null == t ? void 0 : t.enabled)
              ? t.enabled
              : null ===
                  (n =
                    null === (r = null == e ? void 0 : e.__default) || void 0 === r
                      ? void 0
                      : r.enabled) ||
                  void 0 === n ||
                  n
          }
          n.defineInteropFlag(r), n.export(r, "isPlanEventEnabled", () => i)
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "9MLNj": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "mergedOptions", () => o)
          var i = e("tslib")
          function o(e, t) {
            var r,
              n = Object.entries(null !== (r = t.integrations) && void 0 !== r ? r : {}).reduce(
                function (e, t) {
                  var r,
                    n,
                    o = t[0],
                    s = t[1]
                  return "object" == typeof s
                    ? (0, i.__assign)((0, i.__assign)({}, e), (((r = {})[o] = s), r))
                    : (0, i.__assign)((0, i.__assign)({}, e), (((n = {})[o] = {}), n))
                },
                {},
              )
            return Object.entries(e.integrations).reduce(function (e, t) {
              var r,
                o = t[0],
                s = t[1]
              return (0, i.__assign)(
                (0, i.__assign)({}, e),
                (((r = {})[o] = (0, i.__assign)((0, i.__assign)({}, s), n[o])), r),
              )
            }, {})
          }
        },
        { tslib: "gdEuw", "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "7CDsQ": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "pWhile", () => o)
          var i = e("tslib"),
            o = function (e, t) {
              return (0, i.__awaiter)(void 0, void 0, void 0, function () {
                var r
                return (0, i.__generator)(this, function (n) {
                  return [
                    2,
                    (r = function (n) {
                      return (0, i.__awaiter)(void 0, void 0, void 0, function () {
                        var o
                        return (0, i.__generator)(this, function (i) {
                          switch (i.label) {
                            case 0:
                              if (!e(n)) return [3, 2]
                              return (o = r), [4, t()]
                            case 1:
                              return [2, o.apply(void 0, [i.sent()])]
                            case 2:
                              return [2]
                          }
                        })
                      })
                    })(void 0),
                  ]
                })
              })
            }
        },
        { tslib: "gdEuw", "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      g5NmY: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "PriorityQueue", () => i.PriorityQueue),
            n.export(r, "ON_REMOVE_FROM_FUTURE", () => i.ON_REMOVE_FROM_FUTURE)
          var i = e("@segment/analytics-core")
        },
        {
          "@segment/analytics-core": "lfzmU",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      "6tu3y": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "PersistedPriorityQueue", () => d)
          var i = e("tslib"),
            o = e("."),
            s = e("../../core/context"),
            a = e("../../core/environment"),
            u = { getItem: function () {}, setItem: function () {}, removeItem: function () {} }
          try {
            u = (0, a.isBrowser)() && window.localStorage ? window.localStorage : u
          } catch (e) {
            console.warn("Unable to access localStorage", e)
          }
          function c(e) {
            var t = u.getItem(e)
            return (t ? JSON.parse(t) : []).map(function (e) {
              return new s.Context(e.event, e.id)
            })
          }
          function l(e) {
            var t = u.getItem(e)
            return t ? JSON.parse(t) : {}
          }
          function p(e) {
            u.removeItem(e)
          }
          function f(e, t, r) {
            void 0 === r && (r = 0)
            var n = "persisted-queue:v1:".concat(e, ":lock"),
              i = u.getItem(n),
              o = i ? JSON.parse(i) : null,
              s = null === o || new Date().getTime() > o
            if (s) {
              u.setItem(n, JSON.stringify(new Date().getTime() + 50)), t(), u.removeItem(n)
              return
            }
            !s && r < 3
              ? setTimeout(function () {
                  f(e, t, r + 1)
                }, 50)
              : console.error("Unable to retrieve lock")
          }
          var d = (function (e) {
            function t(t, r) {
              var n = e.call(this, t, []) || this,
                o = "persisted-queue:v1:".concat(r, ":items"),
                s = "persisted-queue:v1:".concat(r, ":seen"),
                a = [],
                d = {}
              return (
                f(r, function () {
                  try {
                    ;(a = c(o)),
                      (d = l(s)),
                      p(o),
                      p(s),
                      (n.queue = (0, i.__spreadArray)(
                        (0, i.__spreadArray)([], a, !0),
                        n.queue,
                        !0,
                      )),
                      (n.seen = (0, i.__assign)((0, i.__assign)({}, d), n.seen))
                  } catch (e) {
                    console.error(e)
                  }
                }),
                window.addEventListener("pagehide", function () {
                  if (n.todo > 0) {
                    var e = (0, i.__spreadArray)(
                      (0, i.__spreadArray)([], n.queue, !0),
                      n.future,
                      !0,
                    )
                    try {
                      f(r, function () {
                        var t, r, a, p
                        ;(t = c(o)),
                          (r = (0, i.__spreadArray)((0, i.__spreadArray)([], e, !0), t, !0).reduce(
                            function (e, t) {
                              var r
                              return (0, i.__assign)(
                                (0, i.__assign)({}, e),
                                (((r = {})[t.id] = t), r),
                              )
                            },
                            {},
                          )),
                          u.setItem(o, JSON.stringify(Object.values(r))),
                          (a = n.seen),
                          (p = l(s)),
                          u.setItem(s, JSON.stringify((0, i.__assign)((0, i.__assign)({}, p), a)))
                      })
                    } catch (e) {
                      console.error(e)
                    }
                  }
                }),
                n
              )
            }
            return (0, i.__extends)(t, e), t
          })(o.PriorityQueue)
        },
        {
          tslib: "gdEuw",
          ".": "g5NmY",
          "../../core/context": "lGERA",
          "../../core/environment": "95DB8",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      g78U6: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "applyDestinationMiddleware", () => a),
            n.export(r, "sourceMiddlewarePlugin", () => u)
          var i = e("tslib"),
            o = e("../../core/context"),
            s = e("../../lib/to-facade")
          function a(e, t, r) {
            return (0, i.__awaiter)(this, void 0, void 0, function () {
              var n, o, a, u, c
              return (0, i.__generator)(this, function (l) {
                switch (l.label) {
                  case 0:
                    ;(n = (0, s.toFacade)(t, { clone: !0, traverse: !1 }).rawEvent()),
                      (o = 0),
                      (a = r),
                      (l.label = 1)
                  case 1:
                    if (!(o < a.length)) return [3, 4]
                    return (
                      (u = a[o]),
                      [
                        4,
                        (function (t, r) {
                          return (0, i.__awaiter)(this, void 0, void 0, function () {
                            var n, o, a
                            return (0, i.__generator)(this, function (u) {
                              switch (u.label) {
                                case 0:
                                  return (
                                    (n = !1),
                                    (o = null),
                                    [
                                      4,
                                      r({
                                        payload: (0, s.toFacade)(t, { clone: !0, traverse: !1 }),
                                        integration: e,
                                        next: function (e) {
                                          ;(n = !0), null === e && (o = null), e && (o = e.obj)
                                        },
                                      }),
                                    ]
                                  )
                                case 1:
                                  return (
                                    u.sent(),
                                    n ||
                                      null === o ||
                                      (o.integrations = (0, i.__assign)(
                                        (0, i.__assign)({}, t.integrations),
                                        (((a = {})[e] = !1), a),
                                      )),
                                    [2, o]
                                  )
                              }
                            })
                          })
                        })(n, u),
                      ]
                    )
                  case 2:
                    if (null === (c = l.sent())) return [2, null]
                    ;(n = c), (l.label = 3)
                  case 3:
                    return o++, [3, 1]
                  case 4:
                    return [2, n]
                }
              })
            })
          }
          function u(e, t) {
            function r(r) {
              return (0, i.__awaiter)(this, void 0, void 0, function () {
                var n
                return (0, i.__generator)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (n = !1),
                        [
                          4,
                          e({
                            payload: (0, s.toFacade)(r.event, { clone: !0, traverse: !1 }),
                            integrations: null != t ? t : {},
                            next: function (e) {
                              ;(n = !0), e && (r.event = e.obj)
                            },
                          }),
                        ]
                      )
                    case 1:
                      if ((i.sent(), !n))
                        throw new o.ContextCancelation({
                          retry: !1,
                          type: "middleware_cancellation",
                          reason: "Middleware `next` function skipped",
                        })
                      return [2, r]
                  }
                })
              })
            }
            return {
              name: "Source Middleware ".concat(e.name),
              type: "before",
              version: "0.1.0",
              isLoaded: function () {
                return !0
              },
              load: function (e) {
                return Promise.resolve(e)
              },
              track: r,
              page: r,
              identify: r,
              alias: r,
              group: r,
            }
          }
        },
        {
          tslib: "gdEuw",
          "../../core/context": "lGERA",
          "../../lib/to-facade": "8QbYr",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      "8QbYr": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "toFacade", () => o)
          var i = e("@segment/facade")
          function o(e, t) {
            var r = new i.Facade(e, t)
            return (
              "track" === e.type && (r = new i.Track(e, t)),
              "identify" === e.type && (r = new i.Identify(e, t)),
              "page" === e.type && (r = new i.Page(e, t)),
              "alias" === e.type && (r = new i.Alias(e, t)),
              "group" === e.type && (r = new i.Group(e, t)),
              "screen" === e.type && (r = new i.Screen(e, t)),
              Object.defineProperty(r, "obj", { value: e, writable: !0 }),
              r
            )
          }
        },
        { "@segment/facade": "gqQyk", "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "1ycfW": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "resolveIntegrationNameFromSource", () => c),
            n.export(r, "buildIntegration", () => l),
            n.export(r, "loadIntegration", () => p),
            n.export(r, "unloadIntegration", () => f),
            n.export(r, "resolveVersion", () => d)
          var i = e("tslib"),
            o = e("../../lib/parse-cdn"),
            s = e("../../lib/load-script")
          function a(e) {
            return e.toLowerCase().replace(".", "").replace(/\s+/g, "-")
          }
          function u(e, t) {
            return void 0 === t && (t = !1), t ? btoa(e).replace(/=/g, "") : void 0
          }
          function c(e) {
            return ("Integration" in e ? e.Integration : e).prototype.name
          }
          function l(e, t, r) {
            if ("Integration" in e) {
              var n
              e({
                user: function () {
                  return r.user()
                },
                addIntegration: function () {},
              }),
                (n = e.Integration)
            } else n = e
            var i = new n(t)
            return (i.analytics = r), i
          }
          function p(e, t, r, n) {
            return (0, i.__awaiter)(this, void 0, void 0, function () {
              var c, l, p, f, d
              return (0, i.__generator)(this, function (h) {
                switch (h.label) {
                  case 0:
                    ;(l = u((c = a(t)), n)),
                      (p = (0, o.getNextIntegrationsURL)()),
                      (f = ""
                        .concat(p, "/integrations/")
                        .concat(null != l ? l : c, "/")
                        .concat(r, "/")
                        .concat(null != l ? l : c, ".dynamic.js.gz")),
                      (h.label = 1)
                  case 1:
                    return h.trys.push([1, 3, , 4]), [4, (0, s.loadScript)(f)]
                  case 2:
                    return (
                      h.sent(),
                      (function (e, t, r) {
                        var n, o
                        try {
                          var s = (
                            null !==
                              (o =
                                null === (n = null == window ? void 0 : window.performance) ||
                                void 0 === n
                                  ? void 0
                                  : n.getEntriesByName(e, "resource")) && void 0 !== o
                              ? o
                              : []
                          )[0]
                          s &&
                            t.stats.gauge(
                              "legacy_destination_time",
                              Math.round(s.duration),
                              (0, i.__spreadArray)([r], s.duration < 100 ? ["cached"] : [], !0),
                            )
                        } catch (e) {}
                      })(f, e, t),
                      [3, 4]
                    )
                  case 3:
                    throw (
                      ((d = h.sent()),
                      e.stats.gauge("legacy_destination_time", -1, ["plugin:".concat(t), "failed"]),
                      d)
                    )
                  case 4:
                    return [
                      4,
                      Promise.all(
                        window["".concat(c, "Deps")].map(function (e) {
                          return (0, s.loadScript)(p + e + ".gz")
                        }),
                      ),
                    ]
                  case 5:
                    return (
                      h.sent(),
                      window["".concat(c, "Loader")](),
                      [2, window["".concat(c, "Integration")]]
                    )
                }
              })
            })
          }
          function f(e, t, r) {
            return (0, i.__awaiter)(this, void 0, void 0, function () {
              var n, c, l, p
              return (0, i.__generator)(this, function (i) {
                return (
                  (n = (0, o.getNextIntegrationsURL)()),
                  (c = a(e)),
                  (l = u(e, r)),
                  (p = ""
                    .concat(n, "/integrations/")
                    .concat(null != l ? l : c, "/")
                    .concat(t, "/")
                    .concat(null != l ? l : c, ".dynamic.js.gz")),
                  [2, (0, s.unloadScript)(p)]
                )
              })
            })
          }
          function d(e) {
            var t, r, n, i
            return null !==
              (i =
                null !==
                  (r =
                    null === (t = null == e ? void 0 : e.versionSettings) || void 0 === t
                      ? void 0
                      : t.override) && void 0 !== r
                  ? r
                  : null === (n = null == e ? void 0 : e.versionSettings) || void 0 === n
                    ? void 0
                    : n.version) && void 0 !== i
              ? i
              : "latest"
          }
        },
        {
          tslib: "gdEuw",
          "../../lib/parse-cdn": "1LPvw",
          "../../lib/load-script": "8Mc4S",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      "1LPvw": [
        function (e, t, r) {
          var n,
            i = e("@parcel/transformer-js/src/esmodule-helpers.js")
          i.defineInteropFlag(r),
            i.export(r, "setGlobalCDNUrl", () => l),
            i.export(r, "getCDN", () => p),
            i.export(r, "getNextIntegrationsURL", () => f),
            i.export(r, "getLegacyAJSPath", () => d)
          var o = e("./global-analytics-helper"),
            s = e("./embedded-write-key"),
            a = /(https:\/\/.*)\/analytics\.js\/v1\/(?:.*?)\/(?:platform|analytics.*)?/,
            u = function () {
              var e
              return (
                Array.prototype.slice
                  .call(document.querySelectorAll("script"))
                  .forEach(function (t) {
                    var r,
                      n = null !== (r = t.getAttribute("src")) && void 0 !== r ? r : "",
                      i = a.exec(n)
                    i && i[1] && (e = i[1])
                  }),
                e
              )
            },
            c = function () {
              var e
              return null != n
                ? n
                : null === (e = (0, o.getGlobalAnalytics)()) || void 0 === e
                  ? void 0
                  : e._cdn
            },
            l = function (e) {
              var t = (0, o.getGlobalAnalytics)()
              t && (t._cdn = e), (n = e)
            },
            p = function () {
              var e = c()
              return e ? e : u() || "https://cdn.segment.com"
            },
            f = function () {
              var e = p()
              return "".concat(e, "/next-integrations")
            }
          function d() {
            for (
              var e,
                t,
                r,
                n =
                  null !== (e = (0, s.embeddedWriteKey)()) && void 0 !== e
                    ? e
                    : null === (t = (0, o.getGlobalAnalytics)()) || void 0 === t
                      ? void 0
                      : t._writeKey,
                i = Array.prototype.slice.call(document.querySelectorAll("script")),
                u = void 0,
                c = 0;
              c < i.length;
              c++
            ) {
              var l = null !== (r = i[c].getAttribute("src")) && void 0 !== r ? r : "",
                p = a.exec(l)
              if (p && p[1]) {
                u = l
                break
              }
            }
            return u
              ? u.replace("analytics.min.js", "analytics.classic.js")
              : "https://cdn.segment.com/analytics.js/v1/".concat(n, "/analytics.classic.js")
          }
        },
        {
          "./global-analytics-helper": "auIt2",
          "./embedded-write-key": "8lr9n",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      auIt2: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "getGlobalAnalytics", () => o),
            n.export(r, "setGlobalAnalyticsKey", () => s),
            n.export(r, "setGlobalAnalytics", () => a)
          var i = "analytics"
          function o() {
            return window[i]
          }
          function s(e) {
            i = e
          }
          function a(e) {
            window[i] = e
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "8lr9n": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "embeddedWriteKey", () => i)
          try {
            window.analyticsWriteKey = "__WRITE_KEY__"
          } catch (e) {}
          function i() {
            if (void 0 !== window.analyticsWriteKey)
              return "__WRITE_KEY__" !== window.analyticsWriteKey
                ? window.analyticsWriteKey
                : void 0
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "8Mc4S": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          function i(e) {
            return Array.prototype.slice
              .call(window.document.querySelectorAll("script"))
              .find(function (t) {
                return t.src === e
              })
          }
          function o(e, t) {
            var r = i(e)
            if (void 0 !== r) {
              var n = null == r ? void 0 : r.getAttribute("status")
              if ("loaded" === n) return Promise.resolve(r)
              if ("loading" === n)
                return new Promise(function (e, t) {
                  r.addEventListener("load", function () {
                    return e(r)
                  }),
                    r.addEventListener("error", function (e) {
                      return t(e)
                    })
                })
            }
            return new Promise(function (r, n) {
              var i,
                o = window.document.createElement("script")
              ;(o.type = "text/javascript"),
                (o.src = e),
                (o.async = !0),
                o.setAttribute("status", "loading")
              for (var s = 0, a = Object.entries(null != t ? t : {}); s < a.length; s++) {
                var u = a[s],
                  c = u[0],
                  l = u[1]
                o.setAttribute(c, l)
              }
              ;(o.onload = function () {
                ;(o.onerror = o.onload = null), o.setAttribute("status", "loaded"), r(o)
              }),
                (o.onerror = function () {
                  ;(o.onerror = o.onload = null),
                    o.setAttribute("status", "error"),
                    n(Error("Failed to load ".concat(e)))
                })
              var p = window.document.getElementsByTagName("script")[0]
              null === (i = p.parentElement) || void 0 === i || i.insertBefore(o, p)
            })
          }
          function s(e) {
            var t = i(e)
            return void 0 !== t && t.remove(), Promise.resolve()
          }
          n.defineInteropFlag(r),
            n.export(r, "loadScript", () => o),
            n.export(r, "unloadScript", () => s)
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      aeu5T: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "isInstallableIntegration", () => i),
            n.export(r, "isDisabledIntegration", () => o)
          var i = function (e, t) {
              var r,
                n = t.type,
                i = t.bundlingStatus,
                o = t.versionSettings,
                s =
                  "unbundled" !== i &&
                  ("browser" === n ||
                    (null === (r = null == o ? void 0 : o.componentTypes) || void 0 === r
                      ? void 0
                      : r.includes("browser")))
              return !e.startsWith("Segment") && "Iterable" !== e && s
            },
            o = function (e, t) {
              var r = !1 === t.All && void 0 === t[e]
              return !1 === t[e] || r
            }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      krTqW: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          function i(e, t) {
            var r = t.methodName,
              n = t.integrationName,
              i = t.type,
              o = t.didError
            e.stats.increment(
              "analytics_js.integration.invoke".concat(void 0 !== o && o ? ".error" : ""),
              1,
              ["method:".concat(r), "integration_name:".concat(n), "type:".concat(i)],
            )
          }
          n.defineInteropFlag(r), n.export(r, "recordIntegrationMetric", () => i)
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
    },
    [],
    null,
    "parcelRequired52c",
  ),
  (globalThis.define = t)
