var e, t
"function" == typeof (e = globalThis.define) && ((t = e), (e = null)),
  (function (t, r, n, o, i) {
    var a =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
              ? window
              : "undefined" != typeof global
                ? global
                : {},
      c = "function" == typeof a[o] && a[o],
      s = c.cache || {},
      u =
        "undefined" != typeof module &&
        "function" == typeof module.require &&
        module.require.bind(module)
    function l(e, r) {
      if (!s[e]) {
        if (!t[e]) {
          var n = "function" == typeof a[o] && a[o]
          if (!r && n) return n(e, !0)
          if (c) return c(e, !0)
          if (u && "string" == typeof e) return u(e)
          var i = Error("Cannot find module '" + e + "'")
          throw ((i.code = "MODULE_NOT_FOUND"), i)
        }
        ;(p.resolve = function (r) {
          var n = t[e][1][r]
          return null != n ? n : r
        }),
          (p.cache = {})
        var f = (s[e] = new l.Module(e))
        t[e][0].call(f.exports, p, f, f.exports, this)
      }
      return s[e].exports
      function p(e) {
        var t = p.resolve(e)
        return !1 === t ? {} : l(t)
      }
    }
    ;(l.isParcelRequire = !0),
      (l.Module = function (e) {
        ;(this.id = e), (this.bundle = l), (this.exports = {})
      }),
      (l.modules = t),
      (l.cache = s),
      (l.parent = c),
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
          return a[o]
        },
      }),
      (a[o] = l)
    for (var f = 0; f < r.length; f++) l(r[f])
    if (n) {
      var p = l(n)
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
      a2dsy: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "schemaFilter", () => a)
          var o = e("tslib"),
            i = e("../../lib/is-plan-event-enabled")
          function a(e, t) {
            function r(r) {
              var n = r.event.event
              if (e && n) {
                var a = e[n]
                if ((0, i.isPlanEventEnabled)(e, a)) {
                  var c = (function (e, t) {
                    if (!e || !Object.keys(e)) return {}
                    var r,
                      n,
                      o = e.integrations
                        ? Object.keys(e.integrations).filter(function (t) {
                            return !1 === e.integrations[t]
                          })
                        : [],
                      i = []
                    return (
                      (null !== (r = t.remotePlugins) && void 0 !== r ? r : []).forEach(
                        function (e) {
                          o.forEach(function (t) {
                            e.creationName == t && i.push(e.name)
                          })
                        },
                      ),
                      (null !== (n = t.remotePlugins) && void 0 !== n ? n : []).reduce(function (
                        e,
                        t,
                      ) {
                        return (
                          t.settings.subscriptions &&
                            i.includes(t.name) &&
                            t.settings.subscriptions.forEach(function (r) {
                              return (e["".concat(t.name, " ").concat(r.partnerAction)] = !1)
                            }),
                          e
                        )
                      }, {})
                    )
                  })(a, t)
                  r.updateEvent(
                    "integrations",
                    (0, o.__assign)(
                      (0, o.__assign)(
                        (0, o.__assign)({}, r.event.integrations),
                        null == a ? void 0 : a.integrations,
                      ),
                      c,
                    ),
                  )
                } else
                  r.updateEvent(
                    "integrations",
                    (0, o.__assign)((0, o.__assign)({}, r.event.integrations), {
                      All: !1,
                      "Segment.io": !0,
                    }),
                  )
              }
              return r
            }
            return {
              name: "Schema Filter",
              version: "0.1.0",
              isLoaded: function () {
                return !0
              },
              load: function () {
                return Promise.resolve()
              },
              type: "before",
              page: r,
              alias: r,
              track: r,
              identify: r,
              group: r,
            }
          }
        },
        {
          tslib: "bGRfT",
          "../../lib/is-plan-event-enabled": "jAqOc",
          "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4",
        },
      ],
      bGRfT: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "__extends", () => i),
            n.export(r, "__assign", () => a),
            n.export(r, "__rest", () => c),
            n.export(r, "__decorate", () => s),
            n.export(r, "__param", () => u),
            n.export(r, "__esDecorate", () => l),
            n.export(r, "__runInitializers", () => f),
            n.export(r, "__propKey", () => p),
            n.export(r, "__setFunctionName", () => d),
            n.export(r, "__metadata", () => y),
            n.export(r, "__awaiter", () => _),
            n.export(r, "__generator", () => v),
            n.export(r, "__createBinding", () => b),
            n.export(r, "__exportStar", () => h),
            n.export(r, "__values", () => m),
            n.export(r, "__read", () => g),
            n.export(r, "__spread", () => w),
            n.export(r, "__spreadArrays", () => x),
            n.export(r, "__spreadArray", () => j),
            n.export(r, "__await", () => O),
            n.export(r, "__asyncGenerator", () => P),
            n.export(r, "__asyncDelegator", () => E),
            n.export(r, "__asyncValues", () => S),
            n.export(r, "__makeTemplateObject", () => T),
            n.export(r, "__importStar", () => I),
            n.export(r, "__importDefault", () => k),
            n.export(r, "__classPrivateFieldGet", () => F),
            n.export(r, "__classPrivateFieldSet", () => A),
            n.export(r, "__classPrivateFieldIn", () => R),
            n.export(r, "__addDisposableResource", () => G),
            n.export(r, "__disposeResources", () => q)
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
          var a = function () {
            return (a =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var o in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                return e
              }).apply(this, arguments)
          }
          function c(e, t) {
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
          function s(e, t, r, n) {
            var o,
              i = arguments.length,
              a = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              a = Reflect.decorate(e, t, r, n)
            else
              for (var c = e.length - 1; c >= 0; c--)
                (o = e[c]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a)
            return i > 3 && a && Object.defineProperty(t, r, a), a
          }
          function u(e, t) {
            return function (r, n) {
              t(r, n, e)
            }
          }
          function l(e, t, r, n, o, i) {
            function a(e) {
              if (void 0 !== e && "function" != typeof e) throw TypeError("Function expected")
              return e
            }
            for (
              var c,
                s = n.kind,
                u = "getter" === s ? "get" : "setter" === s ? "set" : "value",
                l = !t && e ? (n.static ? e : e.prototype) : null,
                f = t || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}),
                p = !1,
                d = r.length - 1;
              d >= 0;
              d--
            ) {
              var y = {}
              for (var _ in n) y[_] = "access" === _ ? {} : n[_]
              for (var _ in n.access) y.access[_] = n.access[_]
              y.addInitializer = function (e) {
                if (p) throw TypeError("Cannot add initializers after decoration has completed")
                i.push(a(e || null))
              }
              var v = (0, r[d])("accessor" === s ? { get: f.get, set: f.set } : f[u], y)
              if ("accessor" === s) {
                if (void 0 === v) continue
                if (null === v || "object" != typeof v) throw TypeError("Object expected")
                ;(c = a(v.get)) && (f.get = c),
                  (c = a(v.set)) && (f.set = c),
                  (c = a(v.init)) && o.unshift(c)
              } else (c = a(v)) && ("field" === s ? o.unshift(c) : (f[u] = c))
            }
            l && Object.defineProperty(l, n.name, f), (p = !0)
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
          function y(e, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
              return Reflect.metadata(e, t)
          }
          function _(e, t, r, n) {
            return new (r || (r = Promise))(function (o, i) {
              function a(e) {
                try {
                  s(n.next(e))
                } catch (e) {
                  i(e)
                }
              }
              function c(e) {
                try {
                  s(n.throw(e))
                } catch (e) {
                  i(e)
                }
              }
              function s(e) {
                var t
                e.done
                  ? o(e.value)
                  : ((t = e.value) instanceof r
                      ? t
                      : new r(function (e) {
                          e(t)
                        })
                    ).then(a, c)
              }
              s((n = n.apply(e, t || [])).next())
            })
          }
          function v(e, t) {
            var r,
              n,
              o,
              i,
              a = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1]
                  return o[1]
                },
                trys: [],
                ops: [],
              }
            return (
              (i = { next: c(0), throw: c(1), return: c(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this
                }),
              i
            )
            function c(c) {
              return function (s) {
                return (function (c) {
                  if (r) throw TypeError("Generator is already executing.")
                  for (; i && ((i = 0), c[0] && (a = 0)), a; )
                    try {
                      if (
                        ((r = 1),
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
                          return a.label++, { value: c[1], done: !1 }
                        case 5:
                          a.label++, (n = c[1]), (c = [0])
                          continue
                        case 7:
                          ;(c = a.ops.pop()), a.trys.pop()
                          continue
                        default:
                          if (
                            !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                            (6 === c[0] || 2 === c[0])
                          ) {
                            a = 0
                            continue
                          }
                          if (3 === c[0] && (!o || (c[1] > o[0] && c[1] < o[3]))) {
                            a.label = c[1]
                            break
                          }
                          if (6 === c[0] && a.label < o[1]) {
                            ;(a.label = o[1]), (o = c)
                            break
                          }
                          if (o && a.label < o[2]) {
                            ;(a.label = o[2]), a.ops.push(c)
                            break
                          }
                          o[2] && a.ops.pop(), a.trys.pop()
                          continue
                      }
                      c = t.call(e, a)
                    } catch (e) {
                      ;(c = [6, e]), (n = 0)
                    } finally {
                      r = o = 0
                    }
                  if (5 & c[0]) throw c[1]
                  return { value: c[0] ? c[1] : void 0, done: !0 }
                })([c, s])
              }
            }
          }
          var b = Object.create
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
          function h(e, t) {
            for (var r in e)
              "default" === r || Object.prototype.hasOwnProperty.call(t, r) || b(t, e, r)
          }
          function m(e) {
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
          function g(e, t) {
            var r = "function" == typeof Symbol && e[Symbol.iterator]
            if (!r) return e
            var n,
              o,
              i = r.call(e),
              a = []
            try {
              for (; (void 0 === t || t-- > 0) && !(n = i.next()).done; ) a.push(n.value)
            } catch (e) {
              o = { error: e }
            } finally {
              try {
                n && !n.done && (r = i.return) && r.call(i)
              } finally {
                if (o) throw o.error
              }
            }
            return a
          }
          function w() {
            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]))
            return e
          }
          function x() {
            for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length
            for (var n = Array(e), o = 0, t = 0; t < r; t++)
              for (var i = arguments[t], a = 0, c = i.length; a < c; a++, o++) n[o] = i[a]
            return n
          }
          function j(e, t, r) {
            if (r || 2 == arguments.length)
              for (var n, o = 0, i = t.length; o < i; o++)
                (!n && o in t) || (n || (n = Array.prototype.slice.call(t, 0, o)), (n[o] = t[o]))
            return e.concat(n || Array.prototype.slice.call(t))
          }
          function O(e) {
            return this instanceof O ? ((this.v = e), this) : new O(e)
          }
          function P(e, t, r) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.")
            var n,
              o = r.apply(e, t || []),
              i = []
            return (
              (n = {}),
              a("next"),
              a("throw"),
              a("return"),
              (n[Symbol.asyncIterator] = function () {
                return this
              }),
              n
            )
            function a(e) {
              o[e] &&
                (n[e] = function (t) {
                  return new Promise(function (r, n) {
                    i.push([e, t, r, n]) > 1 || c(e, t)
                  })
                })
            }
            function c(e, t) {
              try {
                var r
                ;(r = o[e](t)).value instanceof O
                  ? Promise.resolve(r.value.v).then(s, u)
                  : l(i[0][2], r)
              } catch (e) {
                l(i[0][3], e)
              }
            }
            function s(e) {
              c("next", e)
            }
            function u(e) {
              c("throw", e)
            }
            function l(e, t) {
              e(t), i.shift(), i.length && c(i[0][0], i[0][1])
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
            function n(n, o) {
              t[n] = e[n]
                ? function (t) {
                    return (r = !r) ? { value: O(e[n](t)), done: !1 } : o ? o(t) : t
                  }
                : o
            }
          }
          function S(e) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.")
            var t,
              r = e[Symbol.asyncIterator]
            return r
              ? r.call(e)
              : ((e = m(e)),
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
          function T(e, t) {
            return (
              Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e
            )
          }
          var D = Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", { enumerable: !0, value: t })
              }
            : function (e, t) {
                e.default = t
              }
          function I(e) {
            if (e && e.__esModule) return e
            var t = {}
            if (null != e)
              for (var r in e)
                "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && b(t, e, r)
            return D(t, e), t
          }
          function k(e) {
            return e && e.__esModule ? e : { default: e }
          }
          function F(e, t, r, n) {
            if ("a" === r && !n) throw TypeError("Private accessor was defined without a getter")
            if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw TypeError(
                "Cannot read private member from an object whose class did not declare it",
              )
            return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
          }
          function A(e, t, r, n, o) {
            if ("m" === n) throw TypeError("Private method is not writable")
            if ("a" === n && !o) throw TypeError("Private accessor was defined without a setter")
            if ("function" == typeof t ? e !== t || !o : !t.has(e))
              throw TypeError(
                "Cannot write private member to an object whose class did not declare it",
              )
            return "a" === n ? o.call(e, r) : o ? (o.value = r) : t.set(e, r), r
          }
          function R(e, t) {
            if (null === t || ("object" != typeof t && "function" != typeof t))
              throw TypeError("Cannot use 'in' operator on non-object")
            return "function" == typeof e ? t === e : e.has(t)
          }
          function G(e, t, r) {
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
          var M =
            "function" == typeof SuppressedError
              ? SuppressedError
              : function (e, t, r) {
                  var n = Error(r)
                  return (n.name = "SuppressedError"), (n.error = e), (n.suppressed = t), n
                }
          function q(e) {
            function t(t) {
              ;(e.error = e.hasError
                ? new M(t, e.error, "An error was suppressed during disposal.")
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
            __assign: a,
            __rest: c,
            __decorate: s,
            __param: u,
            __metadata: y,
            __awaiter: _,
            __generator: v,
            __createBinding: b,
            __exportStar: h,
            __values: m,
            __read: g,
            __spread: w,
            __spreadArrays: x,
            __spreadArray: j,
            __await: O,
            __asyncGenerator: P,
            __asyncDelegator: E,
            __asyncValues: S,
            __makeTemplateObject: T,
            __importStar: I,
            __importDefault: k,
            __classPrivateFieldGet: F,
            __classPrivateFieldSet: A,
            __classPrivateFieldIn: R,
            __addDisposableResource: G,
            __disposeResources: q,
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4" },
      ],
      f6DG4: [
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
      jAqOc: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          function o(e, t) {
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
          n.defineInteropFlag(r), n.export(r, "isPlanEventEnabled", () => o)
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4" },
      ],
    },
    ["a2dsy"],
    "a2dsy",
    "parcelRequired52c",
  ),
  (globalThis.define = t)
