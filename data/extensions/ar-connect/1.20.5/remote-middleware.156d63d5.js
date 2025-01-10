var e, r
"function" == typeof (e = globalThis.define) && ((r = e), (e = null)),
  (function (r, t, n, o, a) {
    var i =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
              ? window
              : "undefined" != typeof global
                ? global
                : {},
      c = "function" == typeof i[o] && i[o],
      s = c.cache || {},
      l =
        "undefined" != typeof module &&
        "function" == typeof module.require &&
        module.require.bind(module)
    function u(e, t) {
      if (!s[e]) {
        if (!r[e]) {
          var n = "function" == typeof i[o] && i[o]
          if (!t && n) return n(e, !0)
          if (c) return c(e, !0)
          if (l && "string" == typeof e) return l(e)
          var a = Error("Cannot find module '" + e + "'")
          throw ((a.code = "MODULE_NOT_FOUND"), a)
        }
        ;(p.resolve = function (t) {
          var n = r[e][1][t]
          return null != n ? n : t
        }),
          (p.cache = {})
        var f = (s[e] = new u.Module(e))
        r[e][0].call(f.exports, p, f, f.exports, this)
      }
      return s[e].exports
      function p(e) {
        var r = p.resolve(e)
        return !1 === r ? {} : u(r)
      }
    }
    ;(u.isParcelRequire = !0),
      (u.Module = function (e) {
        ;(this.id = e), (this.bundle = u), (this.exports = {})
      }),
      (u.modules = r),
      (u.cache = s),
      (u.parent = c),
      (u.register = function (e, t) {
        r[e] = [
          function (e, r) {
            r.exports = t
          },
          {},
        ]
      }),
      Object.defineProperty(u, "root", {
        get: function () {
          return i[o]
        },
      }),
      (i[o] = u)
    for (var f = 0; f < t.length; f++) u(t[f])
    if (n) {
      var p = u(n)
      "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = p)
        : "function" == typeof e && e.amd
          ? e(function () {
              return p
            })
          : a && (this[a] = p)
    }
  })(
    {
      dgLGB: [
        function (e, r, t) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(t), n.export(t, "remoteMiddlewares", () => s)
          var o = e("tslib"),
            a = e("../../core/environment"),
            i = e("../../lib/load-script"),
            c = e("../../lib/parse-cdn")
          function s(e, r, t) {
            var n
            return (0, o.__awaiter)(this, void 0, void 0, function () {
              var s,
                l = this
              return (0, o.__generator)(this, function (u) {
                switch (u.label) {
                  case 0:
                    if ((0, a.isServer)()) return [2, []]
                    return (
                      (s = (0, c.getNextIntegrationsURL)()),
                      [
                        4,
                        Promise.all(
                          Object.entries(
                            null !== (n = r.enabledMiddleware) && void 0 !== n ? n : {},
                          )
                            .filter(function (e) {
                              return e[0], e[1]
                            })
                            .map(function (e) {
                              return e[0]
                            })
                            .map(function (r) {
                              return (0, o.__awaiter)(l, void 0, void 0, function () {
                                var n, a, c, l
                                return (0, o.__generator)(this, function (o) {
                                  switch (o.label) {
                                    case 0:
                                      ;(a = n = r.replace("@segment/", "")),
                                        t && (a = btoa(n).replace(/=/g, "")),
                                        (c = ""
                                          .concat(s, "/middleware/")
                                          .concat(a, "/latest/")
                                          .concat(a, ".js.gz")),
                                        (o.label = 1)
                                    case 1:
                                      return o.trys.push([1, 3, , 4]), [4, (0, i.loadScript)(c)]
                                    case 2:
                                      return o.sent(), [2, window["".concat(n, "Middleware")]]
                                    case 3:
                                      return (
                                        (l = o.sent()),
                                        e.log("error", l),
                                        e.stats.increment("failed_remote_middleware"),
                                        [3, 4]
                                      )
                                    case 4:
                                      return [2]
                                  }
                                })
                              })
                            }),
                        ),
                      ]
                    )
                  case 1:
                    return [2, u.sent().filter(Boolean)]
                }
              })
            })
          }
        },
        {
          tslib: "gdEuw",
          "../../core/environment": "95DB8",
          "../../lib/load-script": "8Mc4S",
          "../../lib/parse-cdn": "1LPvw",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      gdEuw: [
        function (e, r, t) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(t),
            n.export(t, "__extends", () => a),
            n.export(t, "__assign", () => i),
            n.export(t, "__rest", () => c),
            n.export(t, "__decorate", () => s),
            n.export(t, "__param", () => l),
            n.export(t, "__esDecorate", () => u),
            n.export(t, "__runInitializers", () => f),
            n.export(t, "__propKey", () => p),
            n.export(t, "__setFunctionName", () => d),
            n.export(t, "__metadata", () => y),
            n.export(t, "__awaiter", () => v),
            n.export(t, "__generator", () => _),
            n.export(t, "__createBinding", () => h),
            n.export(t, "__exportStar", () => b),
            n.export(t, "__values", () => m),
            n.export(t, "__read", () => w),
            n.export(t, "__spread", () => g),
            n.export(t, "__spreadArrays", () => j),
            n.export(t, "__spreadArray", () => x),
            n.export(t, "__await", () => O),
            n.export(t, "__asyncGenerator", () => P),
            n.export(t, "__asyncDelegator", () => S),
            n.export(t, "__asyncValues", () => E),
            n.export(t, "__makeTemplateObject", () => A),
            n.export(t, "__importStar", () => I),
            n.export(t, "__importDefault", () => R),
            n.export(t, "__classPrivateFieldGet", () => D),
            n.export(t, "__classPrivateFieldSet", () => F),
            n.export(t, "__classPrivateFieldIn", () => k),
            n.export(t, "__addDisposableResource", () => M),
            n.export(t, "__disposeResources", () => K)
          var o = function (e, r) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, r) {
                  e.__proto__ = r
                }) ||
              function (e, r) {
                for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
              })(e, r)
          }
          function a(e, r) {
            if ("function" != typeof r && null !== r)
              throw TypeError("Class extends value " + String(r) + " is not a constructor or null")
            function t() {
              this.constructor = e
            }
            o(e, r),
              (e.prototype = null === r ? Object.create(r) : ((t.prototype = r.prototype), new t()))
          }
          var i = function () {
            return (i =
              Object.assign ||
              function (e) {
                for (var r, t = 1, n = arguments.length; t < n; t++)
                  for (var o in (r = arguments[t]))
                    Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                return e
              }).apply(this, arguments)
          }
          function c(e, r) {
            var t = {}
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && 0 > r.indexOf(n) && (t[n] = e[n])
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                0 > r.indexOf(n[o]) &&
                  Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                  (t[n[o]] = e[n[o]])
            return t
          }
          function s(e, r, t, n) {
            var o,
              a = arguments.length,
              i = a < 3 ? r : null === n ? (n = Object.getOwnPropertyDescriptor(r, t)) : n
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              i = Reflect.decorate(e, r, t, n)
            else
              for (var c = e.length - 1; c >= 0; c--)
                (o = e[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(r, t, i) : o(r, t)) || i)
            return a > 3 && i && Object.defineProperty(r, t, i), i
          }
          function l(e, r) {
            return function (t, n) {
              r(t, n, e)
            }
          }
          function u(e, r, t, n, o, a) {
            function i(e) {
              if (void 0 !== e && "function" != typeof e) throw TypeError("Function expected")
              return e
            }
            for (
              var c,
                s = n.kind,
                l = "getter" === s ? "get" : "setter" === s ? "set" : "value",
                u = !r && e ? (n.static ? e : e.prototype) : null,
                f = r || (u ? Object.getOwnPropertyDescriptor(u, n.name) : {}),
                p = !1,
                d = t.length - 1;
              d >= 0;
              d--
            ) {
              var y = {}
              for (var v in n) y[v] = "access" === v ? {} : n[v]
              for (var v in n.access) y.access[v] = n.access[v]
              y.addInitializer = function (e) {
                if (p) throw TypeError("Cannot add initializers after decoration has completed")
                a.push(i(e || null))
              }
              var _ = (0, t[d])("accessor" === s ? { get: f.get, set: f.set } : f[l], y)
              if ("accessor" === s) {
                if (void 0 === _) continue
                if (null === _ || "object" != typeof _) throw TypeError("Object expected")
                ;(c = i(_.get)) && (f.get = c),
                  (c = i(_.set)) && (f.set = c),
                  (c = i(_.init)) && o.unshift(c)
              } else (c = i(_)) && ("field" === s ? o.unshift(c) : (f[l] = c))
            }
            u && Object.defineProperty(u, n.name, f), (p = !0)
          }
          function f(e, r, t) {
            for (var n = arguments.length > 2, o = 0; o < r.length; o++)
              t = n ? r[o].call(e, t) : r[o].call(e)
            return n ? t : void 0
          }
          function p(e) {
            return "symbol" == typeof e ? e : "".concat(e)
          }
          function d(e, r, t) {
            return (
              "symbol" == typeof r && (r = r.description ? "[".concat(r.description, "]") : ""),
              Object.defineProperty(e, "name", {
                configurable: !0,
                value: t ? "".concat(t, " ", r) : r,
              })
            )
          }
          function y(e, r) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
              return Reflect.metadata(e, r)
          }
          function v(e, r, t, n) {
            return new (t || (t = Promise))(function (o, a) {
              function i(e) {
                try {
                  s(n.next(e))
                } catch (e) {
                  a(e)
                }
              }
              function c(e) {
                try {
                  s(n.throw(e))
                } catch (e) {
                  a(e)
                }
              }
              function s(e) {
                var r
                e.done
                  ? o(e.value)
                  : ((r = e.value) instanceof t
                      ? r
                      : new t(function (e) {
                          e(r)
                        })
                    ).then(i, c)
              }
              s((n = n.apply(e, r || [])).next())
            })
          }
          function _(e, r) {
            var t,
              n,
              o,
              a,
              i = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1]
                  return o[1]
                },
                trys: [],
                ops: [],
              }
            return (
              (a = { next: c(0), throw: c(1), return: c(2) }),
              "function" == typeof Symbol &&
                (a[Symbol.iterator] = function () {
                  return this
                }),
              a
            )
            function c(c) {
              return function (s) {
                return (function (c) {
                  if (t) throw TypeError("Generator is already executing.")
                  for (; a && ((a = 0), c[0] && (i = 0)), i; )
                    try {
                      if (
                        ((t = 1),
                        n &&
                          (o =
                            2 & c[0]
                              ? n.return
                              : c[0]
                                ? n.throw || ((o = n.return) && o.call(n), 0)
                                : n.next) &&
                          !(o = o.call(n, c[1])).done)
                      )
                        return o
                      switch (((n = 0), o && (c = [2 & c[0], o.value]), c[0])) {
                        case 0:
                        case 1:
                          o = c
                          break
                        case 4:
                          return i.label++, { value: c[1], done: !1 }
                        case 5:
                          i.label++, (n = c[1]), (c = [0])
                          continue
                        case 7:
                          ;(c = i.ops.pop()), i.trys.pop()
                          continue
                        default:
                          if (
                            !(o = (o = i.trys).length > 0 && o[o.length - 1]) &&
                            (6 === c[0] || 2 === c[0])
                          ) {
                            i = 0
                            continue
                          }
                          if (3 === c[0] && (!o || (c[1] > o[0] && c[1] < o[3]))) {
                            i.label = c[1]
                            break
                          }
                          if (6 === c[0] && i.label < o[1]) {
                            ;(i.label = o[1]), (o = c)
                            break
                          }
                          if (o && i.label < o[2]) {
                            ;(i.label = o[2]), i.ops.push(c)
                            break
                          }
                          o[2] && i.ops.pop(), i.trys.pop()
                          continue
                      }
                      c = r.call(e, i)
                    } catch (e) {
                      ;(c = [6, e]), (n = 0)
                    } finally {
                      t = o = 0
                    }
                  if (5 & c[0]) throw c[1]
                  return { value: c[0] ? c[1] : void 0, done: !0 }
                })([c, s])
              }
            }
          }
          var h = Object.create
            ? function (e, r, t, n) {
                void 0 === n && (n = t)
                var o = Object.getOwnPropertyDescriptor(r, t)
                ;(!o || ("get" in o ? !r.__esModule : o.writable || o.configurable)) &&
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return r[t]
                    },
                  }),
                  Object.defineProperty(e, n, o)
              }
            : function (e, r, t, n) {
                void 0 === n && (n = t), (e[n] = r[t])
              }
          function b(e, r) {
            for (var t in e)
              "default" === t || Object.prototype.hasOwnProperty.call(r, t) || h(r, e, t)
          }
          function m(e) {
            var r = "function" == typeof Symbol && Symbol.iterator,
              t = r && e[r],
              n = 0
            if (t) return t.call(e)
            if (e && "number" == typeof e.length)
              return {
                next: function () {
                  return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e }
                },
              }
            throw TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.")
          }
          function w(e, r) {
            var t = "function" == typeof Symbol && e[Symbol.iterator]
            if (!t) return e
            var n,
              o,
              a = t.call(e),
              i = []
            try {
              for (; (void 0 === r || r-- > 0) && !(n = a.next()).done; ) i.push(n.value)
            } catch (e) {
              o = { error: e }
            } finally {
              try {
                n && !n.done && (t = a.return) && t.call(a)
              } finally {
                if (o) throw o.error
              }
            }
            return i
          }
          function g() {
            for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(w(arguments[r]))
            return e
          }
          function j() {
            for (var e = 0, r = 0, t = arguments.length; r < t; r++) e += arguments[r].length
            for (var n = Array(e), o = 0, r = 0; r < t; r++)
              for (var a = arguments[r], i = 0, c = a.length; i < c; i++, o++) n[o] = a[i]
            return n
          }
          function x(e, r, t) {
            if (t || 2 == arguments.length)
              for (var n, o = 0, a = r.length; o < a; o++)
                (!n && o in r) || (n || (n = Array.prototype.slice.call(r, 0, o)), (n[o] = r[o]))
            return e.concat(n || Array.prototype.slice.call(r))
          }
          function O(e) {
            return this instanceof O ? ((this.v = e), this) : new O(e)
          }
          function P(e, r, t) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.")
            var n,
              o = t.apply(e, r || []),
              a = []
            return (
              (n = {}),
              i("next"),
              i("throw"),
              i("return"),
              (n[Symbol.asyncIterator] = function () {
                return this
              }),
              n
            )
            function i(e) {
              o[e] &&
                (n[e] = function (r) {
                  return new Promise(function (t, n) {
                    a.push([e, r, t, n]) > 1 || c(e, r)
                  })
                })
            }
            function c(e, r) {
              try {
                var t
                ;(t = o[e](r)).value instanceof O
                  ? Promise.resolve(t.value.v).then(s, l)
                  : u(a[0][2], t)
              } catch (e) {
                u(a[0][3], e)
              }
            }
            function s(e) {
              c("next", e)
            }
            function l(e) {
              c("throw", e)
            }
            function u(e, r) {
              e(r), a.shift(), a.length && c(a[0][0], a[0][1])
            }
          }
          function S(e) {
            var r, t
            return (
              (r = {}),
              n("next"),
              n("throw", function (e) {
                throw e
              }),
              n("return"),
              (r[Symbol.iterator] = function () {
                return this
              }),
              r
            )
            function n(n, o) {
              r[n] = e[n]
                ? function (r) {
                    return (t = !t) ? { value: O(e[n](r)), done: !1 } : o ? o(r) : r
                  }
                : o
            }
          }
          function E(e) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.")
            var r,
              t = e[Symbol.asyncIterator]
            return t
              ? t.call(e)
              : ((e = m(e)),
                (r = {}),
                n("next"),
                n("throw"),
                n("return"),
                (r[Symbol.asyncIterator] = function () {
                  return this
                }),
                r)
            function n(t) {
              r[t] =
                e[t] &&
                function (r) {
                  return new Promise(function (n, o) {
                    ;(function (e, r, t, n) {
                      Promise.resolve(n).then(function (r) {
                        e({ value: r, done: t })
                      }, r)
                    })(n, o, (r = e[t](r)).done, r.value)
                  })
                }
            }
          }
          function A(e, r) {
            return (
              Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : (e.raw = r), e
            )
          }
          var T = Object.create
            ? function (e, r) {
                Object.defineProperty(e, "default", { enumerable: !0, value: r })
              }
            : function (e, r) {
                e.default = r
              }
          function I(e) {
            if (e && e.__esModule) return e
            var r = {}
            if (null != e)
              for (var t in e)
                "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && h(r, e, t)
            return T(r, e), r
          }
          function R(e) {
            return e && e.__esModule ? e : { default: e }
          }
          function D(e, r, t, n) {
            if ("a" === t && !n) throw TypeError("Private accessor was defined without a getter")
            if ("function" == typeof r ? e !== r || !n : !r.has(e))
              throw TypeError(
                "Cannot read private member from an object whose class did not declare it",
              )
            return "m" === t ? n : "a" === t ? n.call(e) : n ? n.value : r.get(e)
          }
          function F(e, r, t, n, o) {
            if ("m" === n) throw TypeError("Private method is not writable")
            if ("a" === n && !o) throw TypeError("Private accessor was defined without a setter")
            if ("function" == typeof r ? e !== r || !o : !r.has(e))
              throw TypeError(
                "Cannot write private member to an object whose class did not declare it",
              )
            return "a" === n ? o.call(e, t) : o ? (o.value = t) : r.set(e, t), t
          }
          function k(e, r) {
            if (null === r || ("object" != typeof r && "function" != typeof r))
              throw TypeError("Cannot use 'in' operator on non-object")
            return "function" == typeof e ? r === e : e.has(r)
          }
          function M(e, r, t) {
            if (null != r) {
              var n
              if ("object" != typeof r && "function" != typeof r)
                throw TypeError("Object expected.")
              if (t) {
                if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.")
                n = r[Symbol.asyncDispose]
              }
              if (void 0 === n) {
                if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.")
                n = r[Symbol.dispose]
              }
              if ("function" != typeof n) throw TypeError("Object not disposable.")
              e.stack.push({ value: r, dispose: n, async: t })
            } else t && e.stack.push({ async: !0 })
            return r
          }
          var G =
            "function" == typeof SuppressedError
              ? SuppressedError
              : function (e, r, t) {
                  var n = Error(t)
                  return (n.name = "SuppressedError"), (n.error = e), (n.suppressed = r), n
                }
          function K(e) {
            function r(r) {
              ;(e.error = e.hasError
                ? new G(r, e.error, "An error was suppressed during disposal.")
                : r),
                (e.hasError = !0)
            }
            return (function t() {
              for (; e.stack.length; ) {
                var n = e.stack.pop()
                try {
                  var o = n.dispose && n.dispose.call(n.value)
                  if (n.async)
                    return Promise.resolve(o).then(t, function (e) {
                      return r(e), t()
                    })
                } catch (e) {
                  r(e)
                }
              }
              if (e.hasError) throw e.error
            })()
          }
          t.default = {
            __extends: a,
            __assign: i,
            __rest: c,
            __decorate: s,
            __param: l,
            __metadata: y,
            __awaiter: v,
            __generator: _,
            __createBinding: h,
            __exportStar: b,
            __values: m,
            __read: w,
            __spread: g,
            __spreadArrays: j,
            __spreadArray: x,
            __await: O,
            __asyncGenerator: P,
            __asyncDelegator: S,
            __asyncValues: E,
            __makeTemplateObject: A,
            __importStar: I,
            __importDefault: R,
            __classPrivateFieldGet: D,
            __classPrivateFieldSet: F,
            __classPrivateFieldIn: k,
            __addDisposableResource: M,
            __disposeResources: K,
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      fRZO2: [
        function (e, r, t) {
          ;(t.interopDefault = function (e) {
            return e && e.__esModule ? e : { default: e }
          }),
            (t.defineInteropFlag = function (e) {
              Object.defineProperty(e, "__esModule", { value: !0 })
            }),
            (t.exportAll = function (e, r) {
              return (
                Object.keys(e).forEach(function (t) {
                  "default" === t ||
                    "__esModule" === t ||
                    r.hasOwnProperty(t) ||
                    Object.defineProperty(r, t, {
                      enumerable: !0,
                      get: function () {
                        return e[t]
                      },
                    })
                }),
                r
              )
            }),
            (t.export = function (e, r, t) {
              Object.defineProperty(e, r, { enumerable: !0, get: t })
            })
        },
        {},
      ],
      "95DB8": [
        function (e, r, t) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          function o() {
            return "undefined" != typeof window
          }
          function a() {
            return !o()
          }
          n.defineInteropFlag(t),
            n.export(t, "isBrowser", () => o),
            n.export(t, "isServer", () => a)
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "8Mc4S": [
        function (e, r, t) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          function o(e) {
            return Array.prototype.slice
              .call(window.document.querySelectorAll("script"))
              .find(function (r) {
                return r.src === e
              })
          }
          function a(e, r) {
            var t = o(e)
            if (void 0 !== t) {
              var n = null == t ? void 0 : t.getAttribute("status")
              if ("loaded" === n) return Promise.resolve(t)
              if ("loading" === n)
                return new Promise(function (e, r) {
                  t.addEventListener("load", function () {
                    return e(t)
                  }),
                    t.addEventListener("error", function (e) {
                      return r(e)
                    })
                })
            }
            return new Promise(function (t, n) {
              var o,
                a = window.document.createElement("script")
              ;(a.type = "text/javascript"),
                (a.src = e),
                (a.async = !0),
                a.setAttribute("status", "loading")
              for (var i = 0, c = Object.entries(null != r ? r : {}); i < c.length; i++) {
                var s = c[i],
                  l = s[0],
                  u = s[1]
                a.setAttribute(l, u)
              }
              ;(a.onload = function () {
                ;(a.onerror = a.onload = null), a.setAttribute("status", "loaded"), t(a)
              }),
                (a.onerror = function () {
                  ;(a.onerror = a.onload = null),
                    a.setAttribute("status", "error"),
                    n(Error("Failed to load ".concat(e)))
                })
              var f = window.document.getElementsByTagName("script")[0]
              null === (o = f.parentElement) || void 0 === o || o.insertBefore(a, f)
            })
          }
          function i(e) {
            var r = o(e)
            return void 0 !== r && r.remove(), Promise.resolve()
          }
          n.defineInteropFlag(t),
            n.export(t, "loadScript", () => a),
            n.export(t, "unloadScript", () => i)
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "1LPvw": [
        function (e, r, t) {
          var n,
            o = e("@parcel/transformer-js/src/esmodule-helpers.js")
          o.defineInteropFlag(t),
            o.export(t, "setGlobalCDNUrl", () => u),
            o.export(t, "getCDN", () => f),
            o.export(t, "getNextIntegrationsURL", () => p),
            o.export(t, "getLegacyAJSPath", () => d)
          var a = e("./global-analytics-helper"),
            i = e("./embedded-write-key"),
            c = /(https:\/\/.*)\/analytics\.js\/v1\/(?:.*?)\/(?:platform|analytics.*)?/,
            s = function () {
              var e
              return (
                Array.prototype.slice
                  .call(document.querySelectorAll("script"))
                  .forEach(function (r) {
                    var t,
                      n = null !== (t = r.getAttribute("src")) && void 0 !== t ? t : "",
                      o = c.exec(n)
                    o && o[1] && (e = o[1])
                  }),
                e
              )
            },
            l = function () {
              var e
              return null != n
                ? n
                : null === (e = (0, a.getGlobalAnalytics)()) || void 0 === e
                  ? void 0
                  : e._cdn
            },
            u = function (e) {
              var r = (0, a.getGlobalAnalytics)()
              r && (r._cdn = e), (n = e)
            },
            f = function () {
              var e = l()
              return e ? e : s() || "https://cdn.segment.com"
            },
            p = function () {
              var e = f()
              return "".concat(e, "/next-integrations")
            }
          function d() {
            for (
              var e,
                r,
                t,
                n =
                  null !== (e = (0, i.embeddedWriteKey)()) && void 0 !== e
                    ? e
                    : null === (r = (0, a.getGlobalAnalytics)()) || void 0 === r
                      ? void 0
                      : r._writeKey,
                o = Array.prototype.slice.call(document.querySelectorAll("script")),
                s = void 0,
                l = 0;
              l < o.length;
              l++
            ) {
              var u = null !== (t = o[l].getAttribute("src")) && void 0 !== t ? t : "",
                f = c.exec(u)
              if (f && f[1]) {
                s = u
                break
              }
            }
            return s
              ? s.replace("analytics.min.js", "analytics.classic.js")
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
        function (e, r, t) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(t),
            n.export(t, "getGlobalAnalytics", () => a),
            n.export(t, "setGlobalAnalyticsKey", () => i),
            n.export(t, "setGlobalAnalytics", () => c)
          var o = "analytics"
          function a() {
            return window[o]
          }
          function i(e) {
            o = e
          }
          function c(e) {
            window[o] = e
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "8lr9n": [
        function (e, r, t) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(t), n.export(t, "embeddedWriteKey", () => o)
          try {
            window.analyticsWriteKey = "__WRITE_KEY__"
          } catch (e) {}
          function o() {
            if (void 0 !== window.analyticsWriteKey)
              return "__WRITE_KEY__" !== window.analyticsWriteKey
                ? window.analyticsWriteKey
                : void 0
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
    },
    [],
    null,
    "parcelRequired52c",
  ),
  (globalThis.define = r)
