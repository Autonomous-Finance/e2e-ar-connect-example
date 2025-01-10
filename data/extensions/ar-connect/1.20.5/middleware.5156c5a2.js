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
      c =
        "undefined" != typeof module &&
        "function" == typeof module.require &&
        module.require.bind(module)
    function l(e, r) {
      if (!u[e]) {
        if (!t[e]) {
          var n = "function" == typeof s[o] && s[o]
          if (!r && n) return n(e, !0)
          if (a) return a(e, !0)
          if (c && "string" == typeof e) return c(e)
          var i = Error("Cannot find module '" + e + "'")
          throw ((i.code = "MODULE_NOT_FOUND"), i)
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
          return s[o]
        },
      }),
      (s[o] = l)
    for (var p = 0; p < r.length; p++) l(r[p])
    if (n) {
      var f = l(n)
      "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = f)
        : "function" == typeof e && e.amd
          ? e(function () {
              return f
            })
          : i && (this[i] = f)
    }
  })(
    {
      "4XMMU": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "applyDestinationMiddleware", () => a),
            n.export(r, "sourceMiddlewarePlugin", () => u)
          var o = e("tslib"),
            i = e("../../core/context"),
            s = e("../../lib/to-facade")
          function a(e, t, r) {
            return (0, o.__awaiter)(this, void 0, void 0, function () {
              var n, i, a, u, c
              return (0, o.__generator)(this, function (l) {
                switch (l.label) {
                  case 0:
                    ;(n = (0, s.toFacade)(t, { clone: !0, traverse: !1 }).rawEvent()),
                      (i = 0),
                      (a = r),
                      (l.label = 1)
                  case 1:
                    if (!(i < a.length)) return [3, 4]
                    return (
                      (u = a[i]),
                      [
                        4,
                        (function (t, r) {
                          return (0, o.__awaiter)(this, void 0, void 0, function () {
                            var n, i, a
                            return (0, o.__generator)(this, function (u) {
                              switch (u.label) {
                                case 0:
                                  return (
                                    (n = !1),
                                    (i = null),
                                    [
                                      4,
                                      r({
                                        payload: (0, s.toFacade)(t, { clone: !0, traverse: !1 }),
                                        integration: e,
                                        next: function (e) {
                                          ;(n = !0), null === e && (i = null), e && (i = e.obj)
                                        },
                                      }),
                                    ]
                                  )
                                case 1:
                                  return (
                                    u.sent(),
                                    n ||
                                      null === i ||
                                      (i.integrations = (0, o.__assign)(
                                        (0, o.__assign)({}, t.integrations),
                                        (((a = {})[e] = !1), a),
                                      )),
                                    [2, i]
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
                    return i++, [3, 1]
                  case 4:
                    return [2, n]
                }
              })
            })
          }
          function u(e, t) {
            function r(r) {
              return (0, o.__awaiter)(this, void 0, void 0, function () {
                var n
                return (0, o.__generator)(this, function (o) {
                  switch (o.label) {
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
                      if ((o.sent(), !n))
                        throw new i.ContextCancelation({
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
          tslib: "bGRfT",
          "../../core/context": "hFG7O",
          "../../lib/to-facade": "8x2Xj",
          "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4",
        },
      ],
      bGRfT: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "__extends", () => i),
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
            n.export(r, "__values", () => b),
            n.export(r, "__read", () => _),
            n.export(r, "__spread", () => x),
            n.export(r, "__spreadArrays", () => j),
            n.export(r, "__spreadArray", () => w),
            n.export(r, "__await", () => I),
            n.export(r, "__asyncGenerator", () => F),
            n.export(r, "__asyncDelegator", () => O),
            n.export(r, "__asyncValues", () => P),
            n.export(r, "__makeTemplateObject", () => D),
            n.export(r, "__importStar", () => T),
            n.export(r, "__importDefault", () => E),
            n.export(r, "__classPrivateFieldGet", () => S),
            n.export(r, "__classPrivateFieldSet", () => G),
            n.export(r, "__classPrivateFieldIn", () => A),
            n.export(r, "__addDisposableResource", () => M),
            n.export(r, "__disposeResources", () => R)
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
          function c(e, t) {
            return function (r, n) {
              t(r, n, e)
            }
          }
          function l(e, t, r, n, o, i) {
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
                i.push(s(e || null))
              }
              var y = (0, r[d])("accessor" === u ? { get: p.get, set: p.set } : p[c], h)
              if ("accessor" === u) {
                if (void 0 === y) continue
                if (null === y || "object" != typeof y) throw TypeError("Object expected")
                ;(a = s(y.get)) && (p.get = a),
                  (a = s(y.set)) && (p.set = a),
                  (a = s(y.init)) && o.unshift(a)
              } else (a = s(y)) && ("field" === u ? o.unshift(a) : (p[c] = a))
            }
            l && Object.defineProperty(l, n.name, p), (f = !0)
          }
          function p(e, t, r) {
            for (var n = arguments.length > 2, o = 0; o < t.length; o++)
              r = n ? t[o].call(e, r) : t[o].call(e)
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
          function y(e, t) {
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
          var m = Object.create
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
          function g(e, t) {
            for (var r in e)
              "default" === r || Object.prototype.hasOwnProperty.call(t, r) || m(t, e, r)
          }
          function b(e) {
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
          function _(e, t) {
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
          function x() {
            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(_(arguments[t]))
            return e
          }
          function j() {
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
          function I(e) {
            return this instanceof I ? ((this.v = e), this) : new I(e)
          }
          function F(e, t, r) {
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
                ;(r = o[e](t)).value instanceof I
                  ? Promise.resolve(r.value.v).then(u, c)
                  : l(i[0][2], r)
              } catch (e) {
                l(i[0][3], e)
              }
            }
            function u(e) {
              a("next", e)
            }
            function c(e) {
              a("throw", e)
            }
            function l(e, t) {
              e(t), i.shift(), i.length && a(i[0][0], i[0][1])
            }
          }
          function O(e) {
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
                    return (r = !r) ? { value: I(e[n](t)), done: !1 } : o ? o(t) : t
                  }
                : o
            }
          }
          function P(e) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.")
            var t,
              r = e[Symbol.asyncIterator]
            return r
              ? r.call(e)
              : ((e = b(e)),
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
          function D(e, t) {
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
          function T(e) {
            if (e && e.__esModule) return e
            var t = {}
            if (null != e)
              for (var r in e)
                "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && m(t, e, r)
            return k(t, e), t
          }
          function E(e) {
            return e && e.__esModule ? e : { default: e }
          }
          function S(e, t, r, n) {
            if ("a" === r && !n) throw TypeError("Private accessor was defined without a getter")
            if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw TypeError(
                "Cannot read private member from an object whose class did not declare it",
              )
            return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
          }
          function G(e, t, r, n, o) {
            if ("m" === n) throw TypeError("Private method is not writable")
            if ("a" === n && !o) throw TypeError("Private accessor was defined without a setter")
            if ("function" == typeof t ? e !== t || !o : !t.has(e))
              throw TypeError(
                "Cannot write private member to an object whose class did not declare it",
              )
            return "a" === n ? o.call(e, r) : o ? (o.value = r) : t.set(e, r), r
          }
          function A(e, t) {
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
          function R(e) {
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
            __param: c,
            __metadata: h,
            __awaiter: v,
            __generator: y,
            __createBinding: m,
            __exportStar: g,
            __values: b,
            __read: _,
            __spread: x,
            __spreadArrays: j,
            __spreadArray: w,
            __await: I,
            __asyncGenerator: F,
            __asyncDelegator: O,
            __asyncValues: P,
            __makeTemplateObject: D,
            __importStar: T,
            __importDefault: E,
            __classPrivateFieldGet: S,
            __classPrivateFieldSet: G,
            __classPrivateFieldIn: A,
            __addDisposableResource: M,
            __disposeResources: R,
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
      hFG7O: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "Context", () => a),
            n.export(r, "ContextCancelation", () => i.ContextCancelation)
          var o = e("tslib"),
            i = e("@segment/analytics-core"),
            s = e("../stats"),
            a = (function (e) {
              function t(t, r) {
                return e.call(this, t, r, new s.Stats()) || this
              }
              return (
                (0, o.__extends)(t, e),
                (t.system = function () {
                  return new this({ type: "track", event: "system" })
                }),
                t
              )
            })(i.CoreContext)
        },
        {
          tslib: "bGRfT",
          "@segment/analytics-core": "gQrUO",
          "../stats": "eUTiK",
          "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4",
        },
      ],
      gQrUO: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "backoff", () => l.backoff),
            n.export(r, "CoreLogger", () => _.CoreLogger)
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
          var b = e("./stats")
          n.exportAll(b, r)
          var _ = e("./logger"),
            x = e("./queue/delivery")
          n.exportAll(x, r)
        },
        {
          "./emitter/interface": !1,
          "./plugins": !1,
          "./events/interfaces": !1,
          "./events": "hkINY",
          "./callback": "7qj7J",
          "./priority-queue": "9D74L",
          "./priority-queue/backoff": !1,
          "./context": "1197z",
          "./queue/event-queue": "fITyz",
          "./analytics": !1,
          "./analytics/dispatch": "d1r6u",
          "./validation/helpers": "e3IHs",
          "./validation/errors": !1,
          "./validation/assertions": !1,
          "./utils/bind-all": !1,
          "./stats": "kFoxY",
          "./logger": !1,
          "./queue/delivery": "8ZPSa",
          "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4",
        },
      ],
      hkINY: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "CoreEventFactory", () => l)
          var o = e("tslib"),
            i = e("./interfaces")
          n.exportAll(i, r)
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
                    c = s[0],
                    l = s[1],
                    p = e.options,
                    f = (0, o.__rest)(e, ["options"]),
                    d = (0, o.__assign)(
                      (0, o.__assign)(
                        (0, o.__assign)((0, o.__assign)({ timestamp: new Date() }, f), {
                          context: c,
                          integrations: i,
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
          tslib: "bGRfT",
          "./interfaces": !1,
          dset: "8Tza3",
          "../utils/pick": "6GCwh",
          "../validation/assertions": "2ZlaG",
          "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4",
        },
      ],
      "8Tza3": [
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
        { "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4" },
      ],
      "6GCwh": [
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
        { "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4" },
      ],
      "2ZlaG": [
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
          var o = e("./errors"),
            i = e("./helpers"),
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
            if ((0, i.exists)(c)) {
              if (!(0, i.isString)(c)) throw new o.ValidationError(a, s)
            } else throw new o.ValidationError(a, u)
          }
          function l(e) {
            if (!(0, i.exists)(e)) throw new o.ValidationError("Event", u)
            if ("object" != typeof e) throw new o.ValidationError("Event", a)
          }
          function p(e) {
            if (!(0, i.isString)(e.type)) throw new o.ValidationError(".type", s)
          }
          function f(e) {
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
          function y(e) {
            l(e),
              p(e),
              v(e),
              "track" === e.type && (f(e), d(e)),
              ["group", "identify"].includes(e.type) && h(e)
          }
        },
        {
          "./errors": "lAoH4",
          "./helpers": "e3IHs",
          "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4",
        },
      ],
      lAoH4: [
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
        { tslib: "bGRfT", "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4" },
      ],
      e3IHs: [
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
        { "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4" },
      ],
      "7qj7J": [
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
        { "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4" },
      ],
      "9D74L": [
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
          tslib: "bGRfT",
          "@segment/analytics-generic-utils": "iTldU",
          "./backoff": "l0iMU",
          "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4",
        },
      ],
      iTldU: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r)
          var o = e("./create-deferred")
          n.exportAll(o, r)
          var i = e("./emitter")
          n.exportAll(i, r)
        },
        {
          "./create-deferred": "hrCFV",
          "./emitter": "fSZu0",
          "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4",
        },
      ],
      hrCFV: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r)
          var o = e("./create-deferred")
          n.exportAll(o, r)
        },
        { "./create-deferred": "hPQfI", "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4" },
      ],
      hPQfI: [
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
        { "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4" },
      ],
      fSZu0: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r)
          var o = e("./emitter")
          n.exportAll(o, r)
        },
        { "./emitter": "5tV09", "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4" },
      ],
      "5tV09": [
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
        { "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4" },
      ],
      l0iMU: [
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
        { "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4" },
      ],
      "1197z": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "ContextCancelation", () => u),
            n.export(r, "CoreContext", () => c)
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
            c = (function () {
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
          "@lukeed/uuid": "liJeZ",
          dset: "8Tza3",
          "../logger": "gIHG5",
          "../stats": "kFoxY",
          "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4",
        },
      ],
      liJeZ: [
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
        { "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4" },
      ],
      gIHG5: [
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
        { tslib: "bGRfT", "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4" },
      ],
      kFoxY: [
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
        { tslib: "bGRfT", "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4" },
      ],
      fITyz: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "CoreEventQueue", () => p)
          var o = e("tslib"),
            i = e("../utils/group-by"),
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
                    var n, i, s, u, c, p, f, d, h, v, y, m, g
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
                            (c = i),
                            (o.label = 1)
                        case 1:
                          if (!(u < c.length)) return [3, 4]
                          return (p = c[u]), [4, (0, l.ensure)(e, p)]
                        case 2:
                          ;(f = o.sent()) instanceof a.CoreContext && (e = f),
                            this.emit("message_enriched", e, p),
                            (o.label = 3)
                        case 3:
                          return u++, [3, 1]
                        case 4:
                          ;(d = 0), (h = s), (o.label = 5)
                        case 5:
                          if (!(d < h.length)) return [3, 8]
                          return (v = h[d]), [4, (0, l.attempt)(e, v)]
                        case 6:
                          ;(f = o.sent()) instanceof a.CoreContext && (e = f),
                            this.emit("message_enriched", e, v),
                            (o.label = 7)
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
                            o.sent(),
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
          tslib: "bGRfT",
          "../utils/group-by": "kZ3UQ",
          "../priority-queue": "9D74L",
          "../context": "1197z",
          "@segment/analytics-generic-utils": "iTldU",
          "../task/task-group": "4KDv9",
          "./delivery": "8ZPSa",
          "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4",
        },
      ],
      kZ3UQ: [
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
        { tslib: "bGRfT", "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4" },
      ],
      "4KDv9": [
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
          "../utils/is-thenable": "hqf2v",
          "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4",
        },
      ],
      hqf2v: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "isThenable", () => o)
          var o = function (e) {
            return "object" == typeof e && null !== e && "then" in e && "function" == typeof e.then
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4" },
      ],
      "8ZPSa": [
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
          tslib: "bGRfT",
          "../context": "1197z",
          "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4",
        },
      ],
      d1r6u: [
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
          tslib: "bGRfT",
          "../callback": "7qj7J",
          "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4",
        },
      ],
      eUTiK: [
        function (e, t, r) {
          var n,
            o = e("@parcel/transformer-js/src/esmodule-helpers.js")
          o.defineInteropFlag(r), o.export(r, "Stats", () => u)
          var i = e("tslib"),
            s = e("@segment/analytics-core"),
            a = e("./remote-metrics"),
            u = (function (e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this
              }
              return (
                (0, i.__extends)(t, e),
                (t.initRemoteMetrics = function (e) {
                  n = new a.RemoteMetrics(e)
                }),
                (t.prototype.increment = function (t, r, o) {
                  e.prototype.increment.call(this, t, r, o),
                    null == n || n.increment(t, null != o ? o : [])
                }),
                t
              )
            })(s.CoreStats)
        },
        {
          tslib: "bGRfT",
          "@segment/analytics-core": "gQrUO",
          "./remote-metrics": "icRzv",
          "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4",
        },
      ],
      icRzv: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "RemoteMetrics", () => p)
          var o = e("tslib"),
            i = e("../../lib/fetch"),
            s = e("../../generated/version"),
            a = e("../../lib/version-type"),
            u = e("../constants"),
            c = function (e, t, r) {
              var n = t.reduce(function (e, t) {
                var r = t.split(":"),
                  n = r[0],
                  o = r[1]
                return (e[n] = o), e
              }, {})
              return {
                type: "Counter",
                metric: e,
                value: 1,
                tags: (0, o.__assign)((0, o.__assign)({}, n), {
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
                o,
                i,
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
                  null !== (o = null == e ? void 0 : e.maxQueueSize) && void 0 !== o ? o : 20),
                (this.protocol =
                  null !== (i = null == e ? void 0 : e.protocol) && void 0 !== i ? i : "https"),
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
                return (0, o.__awaiter)(this, void 0, void 0, function () {
                  var e = this
                  return (0, o.__generator)(this, function (t) {
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
                return (0, o.__awaiter)(this, void 0, void 0, function () {
                  var e, t, r
                  return (0, o.__generator)(this, function (n) {
                    return (
                      (e = { series: this.queue }),
                      (this.queue = []),
                      (t = { "Content-Type": "text/plain" }),
                      (r = "".concat(this.protocol, "://").concat(this.host, "/m")),
                      [2, (0, i.fetch)(r, { headers: t, body: JSON.stringify(e), method: "POST" })]
                    )
                  })
                })
              }),
              e
            )
          })()
        },
        {
          tslib: "bGRfT",
          "../../lib/fetch": "9YkP9",
          "../../generated/version": "juvxy",
          "../../lib/version-type": "aNz5c",
          "../constants": "hcnAv",
          "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4",
        },
      ],
      "9YkP9": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "fetch", () => a)
          var o = e("unfetch"),
            i = n.interopDefault(o),
            s = e("./get-global"),
            a = function () {
              for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
              var r = (0, s.getGlobal)()
              return ((r && r.fetch) || (0, i.default)).apply(void 0, e)
            }
        },
        {
          unfetch: "as68e",
          "./get-global": "jJkZF",
          "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4",
        },
      ],
      as68e: [
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
                      var o = new XMLHttpRequest(),
                        i = [],
                        s = [],
                        a = {},
                        u = function () {
                          return {
                            ok: 2 == ((o.status / 100) | 0),
                            statusText: o.statusText,
                            status: o.status,
                            url: o.responseURL,
                            text: function () {
                              return Promise.resolve(o.responseText)
                            },
                            json: function () {
                              return Promise.resolve(o.responseText).then(JSON.parse)
                            },
                            blob: function () {
                              return Promise.resolve(new Blob([o.response]))
                            },
                            clone: u,
                            headers: {
                              keys: function () {
                                return i
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
                      for (var c in (o.open(t.method || "get", e, !0),
                      (o.onload = function () {
                        o
                          .getAllResponseHeaders()
                          .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (e, t, r) {
                            i.push((t = t.toLowerCase())),
                              s.push([t, r]),
                              (a[t] = a[t] ? a[t] + "," + r : r)
                          }),
                          r(u())
                      }),
                      (o.onerror = n),
                      (o.withCredentials = "include" == t.credentials),
                      t.headers))
                        o.setRequestHeader(c, t.headers[c])
                      o.send(t.body || null)
                    })
                  )
                },
            )
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4" },
      ],
      jJkZF: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "getGlobal", () => i)
          var o = arguments[3],
            i = function () {
              return "undefined" != typeof globalThis
                ? globalThis
                : "undefined" != typeof self
                  ? self
                  : "undefined" != typeof window
                    ? window
                    : void 0 !== o
                      ? o
                      : null
            }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4" },
      ],
      juvxy: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "version", () => o)
          var o = "1.69.0"
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4" },
      ],
      aNz5c: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "setVersionType", () => i),
            n.export(r, "getVersionType", () => s)
          var o = "npm"
          function i(e) {
            o = e
          }
          function s() {
            return o
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4" },
      ],
      hcnAv: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "SEGMENT_API_HOST", () => o)
          var o = "api.segment.io/v1"
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4" },
      ],
      "8x2Xj": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "toFacade", () => i)
          var o = e("@segment/facade")
          function i(e, t) {
            var r = new o.Facade(e, t)
            return (
              "track" === e.type && (r = new o.Track(e, t)),
              "identify" === e.type && (r = new o.Identify(e, t)),
              "page" === e.type && (r = new o.Page(e, t)),
              "alias" === e.type && (r = new o.Alias(e, t)),
              "group" === e.type && (r = new o.Group(e, t)),
              "screen" === e.type && (r = new o.Screen(e, t)),
              Object.defineProperty(r, "obj", { value: e, writable: !0 }),
              r
            )
          }
        },
        { "@segment/facade": "gYz3n", "@parcel/transformer-js/src/esmodule-helpers.js": "f6DG4" },
      ],
      gYz3n: [
        function (e, t, r) {
          var n =
            (this && this.__assign) ||
            function () {
              return (n =
                Object.assign ||
                function (e) {
                  for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in (t = arguments[r]))
                      Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
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
          var o = e("a467e031c8878919")
          Object.defineProperty(r, "Facade", {
            enumerable: !0,
            get: function () {
              return o.Facade
            },
          })
          var i = e("6217043d13ee3417")
          Object.defineProperty(r, "Alias", {
            enumerable: !0,
            get: function () {
              return i.Alias
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
            (r.default = n(n({}, o.Facade), {
              Alias: i.Alias,
              Group: s.Group,
              Identify: a.Identify,
              Track: u.Track,
              Page: c.Page,
              Screen: l.Screen,
              Delete: p.Delete,
            }))
        },
        {
          a467e031c8878919: "1UGcR",
          "6217043d13ee3417": "6hAm8",
          "73ca563f5f3d5620": "bHPam",
          "51979a9c859d6b32": "2cfjC",
          de327eb4b969061a: "2mWYt",
          d54e1a31dbb6299f: "8WH93",
          "66ec23a9b2cde56e": "lj7WN",
          b76fe96c2882b677: "cRouh",
        },
      ],
      "1UGcR": [
        function (e, t, r) {
          var n =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
          Object.defineProperty(r, "__esModule", { value: !0 }), (r.Facade = void 0)
          var o = n(e("babf673b1189b04a")),
            i = e("22ff2fd8a26e9049"),
            s = n(e("b0816d57c602b790")),
            a = n(e("f82ac8909da84a7e")),
            u = n(e("439a9d68c9f19251")),
            c = n(e("5c85568736f9877b"))
          function l(e, t) {
            ;(t = t || {}),
              (this.raw = i.clone(e)),
              "clone" in t || (t.clone = !0),
              t.clone && (e = i.clone(e)),
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
            return i.clone(e)
          }
          ;(p.proxy = function (e) {
            var t,
              r = e.split("."),
              n = this[(e = r.shift())] || this.obj[e]
            return n
              ? ("function" == typeof n && (n = n.call(this) || {}),
                0 === r.length || (n = u.default(n, r.join("."))),
                this.opts.clone ? ((t = n), i.clone(t)) : n)
              : n
          }),
            (p.field = function (e) {
              var t,
                r = this.obj[e]
              return this.opts.clone ? ((t = r), i.clone(t)) : r
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
                return r && (r = [this.opts.clone ? i.clone(r) : r]), r || []
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
              var e = this.opts.clone ? i.clone(this.obj) : this.obj
              return this.type && (e.type = this.type()), e
            }),
            (p.rawEvent = function () {
              return this.raw
            }),
            (p.options = function (e) {
              var t = this.obj.options || this.obj.context || {},
                r = this.opts.clone ? i.clone(t) : t
              if (!e) return r
              if (this.enabled(e)) {
                var n = this.integrations(),
                  o = n[e] || u.default(n, e)
                return (
                  "object" != typeof o && (o = u.default(this.options(), e)),
                  "object" == typeof o ? o : {}
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
                var o = n[e]
                r = "boolean" != typeof o || o
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
                  var o = null == this[n] ? this.proxy("options.traits." + n) : this[n]()
                  if (null == o) continue
                  ;(t[e[n]] = o), delete t[n]
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
            o.default(p)
        },
        {
          babf673b1189b04a: "5gXTQ",
          "22ff2fd8a26e9049": "3GXCe",
          b0816d57c602b790: "kkXBQ",
          f82ac8909da84a7e: "by7U0",
          "439a9d68c9f19251": "2QKvN",
          "5c85568736f9877b": "85lq5",
        },
      ],
      "5gXTQ": [
        function (e, t, r) {
          var n =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
          Object.defineProperty(r, "__esModule", { value: !0 })
          var o = n(e("b9ecada4c194725"))
          function i(e, t) {
            return function () {
              var r = this.traits(),
                n = this.properties ? this.properties() : {}
              return (
                o.default(r, "address." + e) ||
                o.default(r, e) ||
                (t ? o.default(r, "address." + t) : null) ||
                (t ? o.default(r, t) : null) ||
                o.default(n, "address." + e) ||
                o.default(n, e) ||
                (t ? o.default(n, "address." + t) : null) ||
                (t ? o.default(n, t) : null)
              )
            }
          }
          r.default = function (e) {
            ;(e.zip = i("postalCode", "zip")),
              (e.country = i("country")),
              (e.street = i("street")),
              (e.state = i("state")),
              (e.city = i("city")),
              (e.region = i("region"))
          }
        },
        { b9ecada4c194725: "2QKvN" },
      ],
      "2QKvN": [
        function (e, t, r) {
          function n(e) {
            return function (t, r, n, o) {
              var i,
                a = o && "function" == typeof o.normalizer ? o.normalizer : s
              r = a(r)
              for (var u = !1; !u; )
                (function () {
                  for (i in t) {
                    var e = a(i)
                    if (0 === r.indexOf(e)) {
                      var n = r.substr(e.length)
                      if ("." === n.charAt(0) || 0 === n.length) {
                        r = n.substr(1)
                        var o = t[i]
                        if (null == o || !r.length) {
                          u = !0
                          return
                        }
                        t = o
                        return
                      }
                    }
                  }
                  ;(i = void 0), (u = !0)
                })()
              if (i) return null == t ? t : e(t, i, n)
            }
          }
          function o(e, t) {
            return e.hasOwnProperty(t) && delete e[t], e
          }
          function i(e, t, r) {
            return e.hasOwnProperty(t) && (e[t] = r), e
          }
          function s(e) {
            return e.replace(/[^a-zA-Z0-9\.]+/g, "").toLowerCase()
          }
          ;(t.exports = n(function (e, t) {
            if (e.hasOwnProperty(t)) return e[t]
          })),
            (t.exports.find = t.exports),
            (t.exports.replace = function (e, t, r, o) {
              return n(i).call(this, e, t, r, o), e
            }),
            (t.exports.del = function (e, t, r) {
              return n(o).call(this, e, t, null, r), e
            })
        },
        {},
      ],
      "3GXCe": [
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
      kkXBQ: [
        function (e, t, r) {
          Object.defineProperty(r, "__esModule", { value: !0 })
          var n = { Salesforce: !0 }
          r.default = function (e) {
            return !n[e]
          }
        },
        {},
      ],
      by7U0: [
        function (e, t, r) {
          var n = e("2f19a45c0d85a975"),
            o = e("aabb62a2330824e"),
            i = e("995703c749ffdb56"),
            s = Object.prototype.toString
          t.exports = function (e) {
            return "[object Date]" === s.call(e)
              ? e
              : "[object Number]" === s.call(e)
                ? new Date(e < 315576e5 ? 1e3 * e : e)
                : n.is(e)
                  ? n.parse(e)
                  : o.is(e)
                    ? o.parse(e)
                    : i.is(e)
                      ? i.parse(e)
                      : new Date(e)
          }
        },
        { "2f19a45c0d85a975": "cxyCL", aabb62a2330824e: "9xWD4", "995703c749ffdb56": "6Ndzj" },
      ],
      cxyCL: [
        function (e, t, r) {
          var n =
            /^(\d{4})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:([ T])(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/
          ;(r.parse = function (e) {
            var t = [1, 5, 6, 7, 11, 12],
              r = n.exec(e),
              o = 0
            if (!r) return new Date(e)
            for (var i, s = 0; (i = t[s]); s++) r[i] = parseInt(r[i], 10) || 0
            ;(r[2] = parseInt(r[2], 10) || 1),
              (r[3] = parseInt(r[3], 10) || 1),
              r[2]--,
              (r[8] = r[8] ? (r[8] + "00").substring(0, 3) : 0),
              " " === r[4]
                ? (o = new Date().getTimezoneOffset())
                : "Z" !== r[9] && r[10] && ((o = 60 * r[11] + r[12]), "+" === r[10] && (o = 0 - o))
            var a = Date.UTC(r[1], r[2], r[3], r[5], r[6] + o, r[7], r[8])
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
      "9xWD4": [
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
      "6Ndzj": [
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
      "85lq5": [
        function (e, t, r) {
          var n = e("dc7348db6d2487a4")
          t.exports = function e(t, r) {
            var o, i
            return (void 0 === r && (r = !0), t && "object" == typeof t)
              ? ((o = r),
                Object.keys(t).forEach(function (r) {
                  t[r] = e(t[r], o)
                }),
                t)
              : Array.isArray(t)
                ? ((i = r),
                  t.forEach(function (r, n) {
                    t[n] = e(r, i)
                  }),
                  t)
                : n.is(t, r)
                  ? n.parse(t)
                  : t
          }
        },
        { dc7348db6d2487a4: "cxyCL" },
      ],
      "6hAm8": [
        function (e, t, r) {
          var n =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
          Object.defineProperty(r, "__esModule", { value: !0 }), (r.Alias = void 0)
          var o = n(e("ac8cf14739a746f2")),
            i = e("c81ef307ee78c6b7")
          function s(e, t) {
            i.Facade.call(this, e, t)
          }
          ;(r.Alias = s),
            o.default(s, i.Facade),
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
        { ac8cf14739a746f2: "3odFj", c81ef307ee78c6b7: "1UGcR" },
      ],
      "3odFj": [
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
      bHPam: [
        function (e, t, r) {
          var n =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
          Object.defineProperty(r, "__esModule", { value: !0 }), (r.Group = void 0)
          var o = n(e("fd593743ed4fdf41")),
            i = n(e("739beb8e5f67551f")),
            s = n(e("9ec84eb2fd45718c")),
            a = e("eedadc62e0ae3e3b")
          function u(e, t) {
            a.Facade.call(this, e, t)
          }
          ;(r.Group = u), o.default(u, a.Facade)
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
              if (i.default(t)) return t
            }),
            (c.traits = function (e) {
              var t = this.properties(),
                r = this.groupId()
              for (var n in ((e = e || {}), r && (t.id = r), e))
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                  var o = null == this[n] ? this.proxy("traits." + n) : this[n]()
                  if (null == o) continue
                  ;(t[e[n]] = o), delete t[n]
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
          fd593743ed4fdf41: "3odFj",
          "739beb8e5f67551f": "dQS64",
          "9ec84eb2fd45718c": "by7U0",
          eedadc62e0ae3e3b: "1UGcR",
        },
      ],
      dQS64: [
        function (e, t, r) {
          Object.defineProperty(r, "__esModule", { value: !0 })
          var n = /.+\@.+\..+/
          r.default = function (e) {
            return n.test(e)
          }
        },
        {},
      ],
      "2cfjC": [
        function (e, t, r) {
          var n =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
          Object.defineProperty(r, "__esModule", { value: !0 }), (r.Identify = void 0)
          var o = e("1d15fb9bedcee421"),
            i = n(e("90031cdad95380db")),
            s = n(e("9dec33e08b9dd4dd")),
            a = n(e("b65aa4cffd3720e2")),
            u = n(e("a7524d1218817873")),
            c = function (e) {
              return e.trim()
            }
          function l(e, t) {
            o.Facade.call(this, e, t)
          }
          ;(r.Identify = l), s.default(l, o.Facade)
          var p = l.prototype
          ;(p.action = function () {
            return "identify"
          }),
            (p.type = p.action),
            (p.traits = function (e) {
              var t = this.field("traits") || {},
                r = this.userId()
              for (var n in ((e = e || {}), r && (t.id = r), e)) {
                var o = null == this[n] ? this.proxy("traits." + n) : this[n]()
                null != o && ((t[e[n]] = o), n !== e[n] && delete t[n])
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
                t = i.default(this.traits(), "age")
              return null != t
                ? t
                : e instanceof Date
                  ? new Date().getFullYear() - e.getFullYear()
                  : void 0
            }),
            (p.avatar = function () {
              var e = this.traits()
              return i.default(e, "avatar") || i.default(e, "photoUrl") || i.default(e, "avatarUrl")
            }),
            (p.position = function () {
              var e = this.traits()
              return i.default(e, "position") || i.default(e, "jobTitle")
            }),
            (p.username = o.Facade.proxy("traits.username")),
            (p.website = o.Facade.one("traits.website")),
            (p.websites = o.Facade.multi("traits.website")),
            (p.phone = o.Facade.one("traits.phone")),
            (p.phones = o.Facade.multi("traits.phone")),
            (p.address = o.Facade.proxy("traits.address")),
            (p.gender = o.Facade.proxy("traits.gender")),
            (p.birthday = o.Facade.proxy("traits.birthday"))
        },
        {
          "1d15fb9bedcee421": "1UGcR",
          "90031cdad95380db": "2QKvN",
          "9dec33e08b9dd4dd": "3odFj",
          b65aa4cffd3720e2: "dQS64",
          a7524d1218817873: "by7U0",
        },
      ],
      "2mWYt": [
        function (e, t, r) {
          var n =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
          Object.defineProperty(r, "__esModule", { value: !0 }), (r.Track = void 0)
          var o = n(e("ef97448c695671e")),
            i = e("63a8fb8dc8aa36d9"),
            s = e("db6b504c0c274670"),
            a = n(e("da19f2ae8cdbbaef")),
            u = n(e("8340893b7041997e"))
          function c(e, t) {
            i.Facade.call(this, e, t)
          }
          ;(r.Track = c), o.default(c, i.Facade)
          var l = c.prototype
          ;(l.action = function () {
            return "track"
          }),
            (l.type = l.action),
            (l.event = i.Facade.field("event")),
            (l.value = i.Facade.proxy("properties.value")),
            (l.category = i.Facade.proxy("properties.category")),
            (l.id = i.Facade.proxy("properties.id")),
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
            (l.sku = i.Facade.proxy("properties.sku")),
            (l.tax = i.Facade.proxy("properties.tax")),
            (l.name = i.Facade.proxy("properties.name")),
            (l.price = i.Facade.proxy("properties.price")),
            (l.total = i.Facade.proxy("properties.total")),
            (l.repeat = i.Facade.proxy("properties.repeat")),
            (l.coupon = i.Facade.proxy("properties.coupon")),
            (l.shipping = i.Facade.proxy("properties.shipping")),
            (l.discount = i.Facade.proxy("properties.discount")),
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
            (l.description = i.Facade.proxy("properties.description")),
            (l.plan = i.Facade.proxy("properties.plan")),
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
            (l.query = i.Facade.proxy("options.query")),
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
          ef97448c695671e: "3odFj",
          "63a8fb8dc8aa36d9": "1UGcR",
          db6b504c0c274670: "2cfjC",
          da19f2ae8cdbbaef: "dQS64",
          "8340893b7041997e": "2QKvN",
        },
      ],
      "8WH93": [
        function (e, t, r) {
          var n =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
          Object.defineProperty(r, "__esModule", { value: !0 }), (r.Page = void 0)
          var o = n(e("704987b37bf2ba5d")),
            i = e("f7f2f0b98e29f048"),
            s = e("e929e5bdeb05190f"),
            a = n(e("725b658d79ae58e0"))
          function u(e, t) {
            i.Facade.call(this, e, t)
          }
          ;(r.Page = u), o.default(u, i.Facade)
          var c = u.prototype
          ;(c.action = function () {
            return "page"
          }),
            (c.type = c.action),
            (c.category = i.Facade.field("category")),
            (c.name = i.Facade.field("name")),
            (c.title = i.Facade.proxy("properties.title")),
            (c.path = i.Facade.proxy("properties.path")),
            (c.url = i.Facade.proxy("properties.url")),
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
              for (var o in ((e = e || {}), r && (t.category = r), n && (t.name = n), e))
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                  var i = null == this[o] ? this.proxy("properties." + o) : this[o]()
                  if (null == i) continue
                  ;(t[e[o]] = i), o !== e[o] && delete t[o]
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
          "704987b37bf2ba5d": "3odFj",
          f7f2f0b98e29f048: "1UGcR",
          e929e5bdeb05190f: "2mWYt",
          "725b658d79ae58e0": "dQS64",
        },
      ],
      lj7WN: [
        function (e, t, r) {
          var n =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
          Object.defineProperty(r, "__esModule", { value: !0 }), (r.Screen = void 0)
          var o = n(e("d8c86290fb06d737")),
            i = e("8d1a1bde7fcfe277"),
            s = e("fa7a5e2d2434b00b")
          function a(e, t) {
            i.Page.call(this, e, t)
          }
          ;(r.Screen = a),
            o.default(a, i.Page),
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
        { d8c86290fb06d737: "3odFj", "8d1a1bde7fcfe277": "8WH93", fa7a5e2d2434b00b: "2mWYt" },
      ],
      cRouh: [
        function (e, t, r) {
          var n =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
          Object.defineProperty(r, "__esModule", { value: !0 }), (r.Delete = void 0)
          var o = n(e("c2cd0efed4550db")),
            i = e("52adb156565cd0f3")
          function s(e, t) {
            i.Facade.call(this, e, t)
          }
          ;(r.Delete = s),
            o.default(s, i.Facade),
            (s.prototype.type = function () {
              return "delete"
            })
        },
        { c2cd0efed4550db: "3odFj", "52adb156565cd0f3": "1UGcR" },
      ],
    },
    ["4XMMU"],
    "4XMMU",
    "parcelRequired52c",
  ),
  (globalThis.define = t)
