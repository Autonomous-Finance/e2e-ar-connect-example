var e, t
"function" == typeof (e = globalThis.define) && ((t = e), (e = null)),
  (function (t, r, n, s, a) {
    var o =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
              ? window
              : "undefined" != typeof global
                ? global
                : {},
      i = "function" == typeof o[s] && o[s],
      l = i.cache || {},
      u =
        "undefined" != typeof module &&
        "function" == typeof module.require &&
        module.require.bind(module)
    function c(e, r) {
      if (!l[e]) {
        if (!t[e]) {
          var n = "function" == typeof o[s] && o[s]
          if (!r && n) return n(e, !0)
          if (i) return i(e, !0)
          if (u && "string" == typeof e) return u(e)
          var a = Error("Cannot find module '" + e + "'")
          throw ((a.code = "MODULE_NOT_FOUND"), a)
        }
        ;(h.resolve = function (r) {
          var n = t[e][1][r]
          return null != n ? n : r
        }),
          (h.cache = {})
        var f = (l[e] = new c.Module(e))
        t[e][0].call(f.exports, h, f, f.exports, this)
      }
      return l[e].exports
      function h(e) {
        var t = h.resolve(e)
        return !1 === t ? {} : c(t)
      }
    }
    ;(c.isParcelRequire = !0),
      (c.Module = function (e) {
        ;(this.id = e), (this.bundle = c), (this.exports = {})
      }),
      (c.modules = t),
      (c.cache = l),
      (c.parent = i),
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
          return o[s]
        },
      }),
      (o[s] = c)
    for (var f = 0; f < r.length; f++) c(r[f])
    if (n) {
      var h = c(n)
      "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = h)
        : "function" == typeof e && e.amd
          ? e(function () {
              return h
            })
          : a && (this[a] = h)
    }
  })(
    {
      bBpro: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js"),
            s = e("../package.json"),
            a = e("nanoid"),
            o = e("~api/foreground"),
            i = n.interopDefault(o),
            l = e("mitt"),
            u = n.interopDefault(l)
          let c = (0, u.default)(),
            f = { walletName: "ArConnect", walletVersion: s.version, events: c }
          for (let e of i.default)
            f[e.functionName] = (...t) =>
              new Promise(async (r, n) => {
                let s = await e.function(...t),
                  o = (0, a.nanoid)(),
                  i = {
                    type: `api_${e.functionName}`,
                    ext: "arconnect",
                    callID: o,
                    data: { params: s || t },
                  }
                async function l(a) {
                  let { data: o } = a
                  if (`${i.type}_result` === o.type && i.callID === o.callID) {
                    if ((window.removeEventListener("message", l), o.error)) return n(o.data)
                    if (e.finalizer) {
                      let r = await e.finalizer(o.data, s, t)
                      r && (o.data = r)
                    }
                    return o.error ? n(o.data) : r(o.data)
                  }
                }
                window.postMessage(i, window.location.origin), window.addEventListener("message", l)
              })
          ;(window.arweaveWallet = f),
            dispatchEvent(new CustomEvent("arweaveWalletLoaded", { detail: {} })),
            window.addEventListener("load", () => {
              window.arweaveWallet &&
                dispatchEvent(new CustomEvent("arweaveWalletLoaded", { detail: {} }))
            }),
            window.addEventListener("message", (e) => {
              "arconnect_event" === e.data.type && c.emit(e.data.event.name, e.data.event.value)
            })
        },
        {
          "../package.json": "gP8Oo",
          nanoid: "h72T4",
          "~api/foreground": "bvf1U",
          mitt: "9mMlk",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      gP8Oo: [
        function (e, t, r) {
          t.exports = JSON.parse(
            '{"name":"arconnect","displayName":"ArConnect","version":"1.20.5","description":"__MSG_extensionDescription__","author":"th8ta","packageManager":"yarn@1.22.18","homepage":"https://arconnect.io","scripts":{"dev:chrome":"plasmo dev --verbose","build:chrome":"plasmo build --no-hoist","dev:firefox":"plasmo dev --target=firefox-mv2","build:firefox":"plasmo build --target=firefox-mv2 --no-hoist","nuke":"rm -rf node_modules build .plasmo","fmt":"prettier --write .","fmt:check":"prettier --check .","prepare":"husky install"},"manifest":{"host_permissions":["*://*/*"],"default_locale":"en","permissions":["alarms","contextMenus","tabs","webNavigation","notifications","printerProvider"],"web_accessible_resources":[{"resources":["/redirect/**"],"matches":["https://*/*"]},{"resources":["assets/animation/*.png"],"matches":["*://*/*"]}]},"dependencies":{"@arconnect/components":"^0.3.11","@arconnect/keystone-sdk":"^0.0.5","@arconnect/warp-dre":"^0.0.1","@arconnect/webext-bridge":"^5.0.6","@iconicicons/react":"^1.5.0","@keystonehq/arweave-keyring":"^0.1.1-alpha.0","@keystonehq/bc-ur-registry-arweave":"^0.1.1-alpha.0","@ngraveio/bc-ur":"^1.1.6","@permaweb/aoconnect":"^0.0.55","@plasmohq/storage":"^1.7.2","@segment/analytics-next":"^1.53.2","@untitled-ui/icons-react":"^0.1.1","ao-tokens":"^0.0.4","ar-gql":"1.2.9","arbundles":"^0.9.5","arweave":"^1.13.0","axios":"^1.7.2","bignumber.js":"^9.1.2","bip39-web-crypto":"^4.0.1","check-password-strength":"^2.0.7","copy-to-clipboard":"^3.3.2","dayjs":"^1.11.6","framer-motion":"^11.11.7","human-crypto-keys":"^0.1.4","js-confetti":"^0.11.0","mitt":"^3.0.0","nanoid":"^4.0.0","path-to-regexp":"^6.2.1","plimit-lit":"^3.0.1","pretty-bytes":"^6.0.0","qrcode.react":"^3.1.0","qrloop":"^1.4.1","react":"18.2.0","react-dom":"18.2.0","react-fast-marquee":"^1.3.5","react-qr-reader":"^2.2.1","redstone-api":"^0.4.11","rss-parser":"^3.12.0","styled-components":"^5.3.6","typed-assert":"^1.0.9","uuid":"^9.0.0","warp-contracts":"^1.2.13","webextension-polyfill":"^0.10.0","wouter":"^2.8.0-alpha.2"},"devDependencies":{"@changesets/cli":"^2.27.1","@semantic-release/git":"^10.0.1","@semantic-release/github":"^9.2.6","@types/chrome":"^0.0.196","@types/human-crypto-keys":"^0.1.0","@types/react":"^18.0.18","@types/react-dom":"^18.0.6","@types/react-qr-reader":"^2.1.4","@types/serviceworker":"^0.0.55","@types/styled-components":"^5.1.26","@types/uuid":"^8.3.4","@types/webextension-polyfill":"^0.9.0","browserify-zlib":"^0.2.0","constants-browserify":"^1.0.0","crypto-browserify":"^3.12.0","https-browserify":"^1.0.0","husky":"^8.0.0","path-browserify":"^1.0.1","plasmo":"0.86.3","prettier":"^2.2.1","querystring-es3":"^0.2.1","semantic-release":"^23.0.0","stream-browserify":"^3.0.0","stream-http":"^3.2.0","timers-browserify":"^2.0.12","typescript":"^4.8.2","url":"^0.11.0","vm-browserify":"^1.1.2"},"resolutions":{"arbundles/arweave":"^1.13.0","**/msgpackr":">=1.10.1","human-crypto-keys/node-forge":"^1.3.1","human-crypto-keys/crypto-key-composer/node-forge":"^1.3.1","axios":"^1.7.2"}}',
          )
        },
        {},
      ],
      h72T4: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "urlAlphabet", () => s.urlAlphabet),
            n.export(r, "random", () => a),
            n.export(r, "customRandom", () => o),
            n.export(r, "customAlphabet", () => i),
            n.export(r, "nanoid", () => l)
          var s = e("./url-alphabet/index.js")
          let a = (e) => crypto.getRandomValues(new Uint8Array(e)),
            o = (e, t, r) => {
              let n = (2 << (Math.log(e.length - 1) / Math.LN2)) - 1,
                s = -~((1.6 * n * t) / e.length)
              return (a = t) => {
                let o = ""
                for (;;) {
                  let t = r(s),
                    i = s
                  for (; i--; ) if ((o += e[t[i] & n] || "").length === a) return o
                }
              }
            },
            i = (e, t = 21) => o(e, t, a),
            l = (e = 21) =>
              crypto
                .getRandomValues(new Uint8Array(e))
                .reduce(
                  (e, t) => (
                    (t &= 63) < 36
                      ? (e += t.toString(36))
                      : t < 62
                        ? (e += (t - 26).toString(36).toUpperCase())
                        : t > 62
                          ? (e += "-")
                          : (e += "_"),
                    e
                  ),
                  "",
                )
        },
        {
          "./url-alphabet/index.js": !1,
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
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
      bvf1U: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r)
          var s = e("./modules/permissions"),
            a = n.interopDefault(s),
            o = e("./modules/permissions/permissions.foreground"),
            i = n.interopDefault(o),
            l = e("./modules/active_address"),
            u = n.interopDefault(l),
            c = e("./modules/active_address/active_address.foreground"),
            f = n.interopDefault(c),
            h = e("./modules/all_addresses"),
            d = n.interopDefault(h),
            p = e("./modules/all_addresses/all_addresses.foreground"),
            g = n.interopDefault(p),
            y = e("./modules/public_key"),
            m = n.interopDefault(y),
            w = e("./modules/public_key/public_key.foreground"),
            b = n.interopDefault(w),
            v = e("./modules/wallet_names"),
            A = n.interopDefault(v),
            E = e("./modules/wallet_names/wallet_names.foreground"),
            _ = n.interopDefault(E),
            S = e("./modules/arweave_config"),
            j = n.interopDefault(S),
            O = e("./modules/arweave_config/arweave_config.foreground"),
            I = n.interopDefault(O),
            R = e("./modules/disconnect"),
            x = n.interopDefault(R),
            T = e("./modules/disconnect/disconnect.foreground"),
            k = n.interopDefault(T),
            C = e("./modules/add_token"),
            N = n.interopDefault(C),
            U = e("./modules/add_token/add_token.foreground"),
            B = n.interopDefault(U),
            D = e("./modules/is_token_added"),
            P = n.interopDefault(D),
            F = e("./modules/is_token_added/is_token_added.foreground"),
            L = n.interopDefault(F),
            M = e("./modules/connect"),
            $ = n.interopDefault(M),
            K = e("./modules/connect/connect.foreground"),
            z = n.interopDefault(K),
            q = e("./modules/sign"),
            G = n.interopDefault(q),
            Z = e("./modules/sign/sign.foreground"),
            H = n.interopDefault(Z),
            W = e("./modules/dispatch"),
            V = n.interopDefault(W),
            J = e("./modules/dispatch/dispatch.foreground"),
            Y = n.interopDefault(J),
            X = e("./modules/encrypt"),
            Q = n.interopDefault(X),
            ee = e("./modules/encrypt/encrypt.foreground"),
            et = n.interopDefault(ee),
            er = e("./modules/decrypt"),
            en = n.interopDefault(er),
            es = e("./modules/decrypt/decrypt.foreground"),
            ea = n.interopDefault(es),
            eo = e("./modules/signature"),
            ei = n.interopDefault(eo),
            el = e("./modules/signature/signature.foreground"),
            eu = n.interopDefault(el),
            ec = e("./modules/sign_message"),
            ef = n.interopDefault(ec),
            eh = e("./modules/sign_message/sign_message.foreground"),
            ed = n.interopDefault(eh),
            ep = e("./modules/subscription"),
            eg = n.interopDefault(ep),
            ey = e("./modules/subscription/subscription.foreground"),
            em = n.interopDefault(ey),
            ew = e("./modules/private_hash"),
            eb = n.interopDefault(ew),
            ev = e("./modules/private_hash/private_hash.foreground"),
            eA = n.interopDefault(ev),
            eE = e("./modules/verify_message"),
            e_ = n.interopDefault(eE),
            eS = e("./modules/verify_message/verify_message.foreground"),
            ej = n.interopDefault(eS),
            eO = e("./modules/batch_sign_data_item"),
            eI = n.interopDefault(eO),
            eR = e("./modules/batch_sign_data_item/batch_sign_data_item.foreground"),
            ex = n.interopDefault(eR),
            eT = e("./modules/sign_data_item"),
            ek = n.interopDefault(eT),
            eC = e("./modules/sign_data_item/sign_data_item.foreground"),
            eN = n.interopDefault(eC),
            eU = e("./modules/user_tokens"),
            eB = n.interopDefault(eU),
            eD = e("./modules/user_tokens/user_tokens.foreground"),
            eP = n.interopDefault(eD),
            eF = e("./modules/token_balance"),
            eL = n.interopDefault(eF),
            eM = e("./modules/token_balance/token_balance.foreground"),
            e$ = n.interopDefault(eM)
          let eK = [
            { ...a.default, function: i.default },
            { ...u.default, function: f.default },
            { ...d.default, function: g.default },
            { ...m.default, function: b.default },
            { ...A.default, function: _.default },
            { ...j.default, function: I.default },
            { ...x.default, function: k.default, finalizer: T.finalizer },
            { ...$.default, function: z.default },
            { ...G.default, function: H.default, finalizer: Z.finalizer },
            { ...V.default, function: Y.default, finalizer: J.finalizer },
            { ...Q.default, function: et.default, finalizer: ee.finalizer },
            { ...en.default, function: ea.default, finalizer: es.finalizer },
            { ...ei.default, function: eu.default, finalizer: el.finalizer },
            { ...N.default, function: B.default },
            { ...P.default, function: L.default },
            { ...ef.default, function: ed.default, finalizer: eh.finalizer },
            { ...eb.default, function: eA.default, finalizer: ev.finalizer },
            { ...e_.default, function: ej.default },
            { ...ek.default, function: eN.default, finalizer: eC.finalizer },
            { ...eg.default, function: em.default },
            { ...eB.default, function: eP.default },
            { ...eL.default, function: e$.default },
            { ...eI.default, function: ex.default, finalizer: eR.finalizer },
          ]
          r.default = eK
        },
        {
          "./modules/permissions": "bjgA3",
          "./modules/permissions/permissions.foreground": "dL9RA",
          "./modules/active_address": "kQQzC",
          "./modules/active_address/active_address.foreground": "fEEj9",
          "./modules/all_addresses": "i6liX",
          "./modules/all_addresses/all_addresses.foreground": "g3aOE",
          "./modules/public_key": "cMAUw",
          "./modules/public_key/public_key.foreground": "FQFda",
          "./modules/wallet_names": "ll9Ak",
          "./modules/wallet_names/wallet_names.foreground": "52V1h",
          "./modules/arweave_config": "gSXHH",
          "./modules/arweave_config/arweave_config.foreground": "2J1Yh",
          "./modules/disconnect": "ak3xk",
          "./modules/disconnect/disconnect.foreground": "bcp0J",
          "./modules/add_token": "hM1RF",
          "./modules/add_token/add_token.foreground": "eirl0",
          "./modules/is_token_added": "2AWLW",
          "./modules/is_token_added/is_token_added.foreground": "78GXT",
          "./modules/connect": "7PjOQ",
          "./modules/connect/connect.foreground": "5Euzg",
          "./modules/sign": "grztg",
          "./modules/sign/sign.foreground": "4ghwd",
          "./modules/dispatch": "9IOT0",
          "./modules/dispatch/dispatch.foreground": "69MV6",
          "./modules/encrypt": "eg7Kx",
          "./modules/encrypt/encrypt.foreground": "2KpJ9",
          "./modules/decrypt": "iONkl",
          "./modules/decrypt/decrypt.foreground": "8F30A",
          "./modules/signature": "4dxym",
          "./modules/signature/signature.foreground": "2KfbH",
          "./modules/sign_message": "chITW",
          "./modules/sign_message/sign_message.foreground": "86uxo",
          "./modules/subscription": "1wVK5",
          "./modules/subscription/subscription.foreground": "31j3w",
          "./modules/private_hash": "g2HC9",
          "./modules/private_hash/private_hash.foreground": "1GLFn",
          "./modules/verify_message": "94R61",
          "./modules/verify_message/verify_message.foreground": "hypMH",
          "./modules/batch_sign_data_item": "4Ug6R",
          "./modules/batch_sign_data_item/batch_sign_data_item.foreground": "c5fVx",
          "./modules/sign_data_item": "2uPdW",
          "./modules/sign_data_item/sign_data_item.foreground": "03nwn",
          "./modules/user_tokens": "lFuxJ",
          "./modules/user_tokens/user_tokens.foreground": "9uuJo",
          "./modules/token_balance": "6oN4b",
          "./modules/token_balance/token_balance.foreground": "1cGsr",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      bjgA3: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = { functionName: "getPermissions", permissions: [] })
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      dL9RA: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = () => {})
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      kQQzC: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = { functionName: "getActiveAddress", permissions: ["ACCESS_ADDRESS"] })
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      fEEj9: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = () => {})
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      i6liX: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = { functionName: "getAllAddresses", permissions: ["ACCESS_ALL_ADDRESSES"] })
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      g3aOE: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = () => {})
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      cMAUw: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = { functionName: "getActivePublicKey", permissions: ["ACCESS_PUBLIC_KEY"] })
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      FQFda: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = () => {})
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      ll9Ak: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = { functionName: "getWalletNames", permissions: ["ACCESS_ALL_ADDRESSES"] })
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "52V1h": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = () => {})
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      gSXHH: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = {
              functionName: "getArweaveConfig",
              permissions: ["ACCESS_ARWEAVE_CONFIG"],
            })
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "2J1Yh": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = () => {})
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      ak3xk: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = { functionName: "disconnect", permissions: [] })
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      bcp0J: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "finalizer", () => s)
          let s = () => {
            dispatchEvent(new CustomEvent("walletSwitch", { detail: { address: void 0 } }))
          }
          r.default = () => {}
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      hM1RF: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = { functionName: "addToken", permissions: [] })
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      eirl0: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = (e, t, r) => (
              r &&
                "string" != typeof r &&
                ((r = void 0),
                console.warn("Gateway is deprecated for tokens. Provide a DRE node instead.")),
              [e, t, r]
            ))
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "2AWLW": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = { functionName: "isTokenAdded", permissions: [] })
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "78GXT": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = () => {})
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "7PjOQ": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = { functionName: "connect", permissions: [] })
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "5Euzg": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r)
          var n = e("~utils/format")
          let s = async (e, t = {}, r) => {
            if (!e || 0 === e.length) throw Error("No permissions requested")
            if (!t.name) {
              let e = document.title,
                r = (0, n.getAppURL)(window.location.href)
              t.name = e.length < 11 ? e : r
            }
            return [e, t, r]
          }
          r.default = s
        },
        { "~utils/format": "k0ARn", "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      k0ARn: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "getAppURL", () => o),
            n.export(r, "getCommunityUrl", () => i),
            n.export(
              r,
              "formatAddress",
              () =>
                function e(t, r = 13) {
                  return t
                    ? "string" == typeof t
                      ? t.substring(0, r) + "..." + t.substring(t.length - r, t.length)
                      : `${e(t.address, r)} (you)`
                    : "-"
                },
            ),
            n.export(r, "isAddressFormat", () => l),
            n.export(r, "formatSettingName", () => u),
            n.export(r, "formatBalance", () => c)
          var s = e("bignumber.js"),
            a = n.interopDefault(s)
          function o(e) {
            if (!e) return ""
            let t = new URL(e)
            return t.host
          }
          function i(e) {
            if (!e) return ""
            let t = new URL(e)
            return t.hostname + (("/" !== t.pathname && t.pathname) || "")
          }
          let l = (e) => /^[a-z0-9_-]{43}$/i.test(e),
            u = (e) =>
              e
                ? "arconfetti" === e
                  ? "ArConfetti"
                  : "ao_support" === e
                    ? "ao support"
                    : e
                        .split("_")
                        .map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
                        .join(" ")
                : ""
          function c(e) {
            let t
            let r = !1,
              n = e.toFormat(20, a.default.ROUND_FLOOR).replace(/\.?0*$/, "")
            if (e.lte(1e4))
              (t = (0, a.default)(e.toPrecision(6, a.default.ROUND_FLOOR))
                .toFixed(20, a.default.ROUND_FLOOR)
                .replace(/\.?0*$/, "")),
                (r = !e.eq(t))
            else if (e.lt(1e6))
              (t = (0, a.default)(e.toPrecision(8, a.default.ROUND_FLOOR))
                .toFixed(20, a.default.ROUND_FLOOR)
                .replace(/\.?0*$/, "")),
                (r = !e.eq(t))
            else {
              r = !0
              let n = "",
                s = 1
              e.gte(1e21)
                ? ((n = "S"), (s = 1e21))
                : e.gte(1e18)
                  ? ((n = "Qi"), (s = 1e18))
                  : e.gte(1e15)
                    ? ((n = "Q"), (s = 1e15))
                    : e.gte(1e12)
                      ? ((n = "T"), (s = 1e12))
                      : e.gte(1e9)
                        ? ((n = "B"), (s = 1e9))
                        : e.gte(1e6) && ((n = "M"), (s = 1e6)),
                (t =
                  (0, a.default)(e.dividedBy(s).toPrecision(6, a.default.ROUND_FLOOR))
                    .toFixed(20, a.default.ROUND_FLOOR)
                    .replace(/\.?0*$/, "") + n)
            }
            return { displayBalance: t, tooltipBalance: n, showTooltip: r }
          }
        },
        { "bignumber.js": "l9tLK", "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      l9tLK: [
        function (t, r, n) {
          !(function (t) {
            var n,
              s = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
              a = Math.ceil,
              o = Math.floor,
              i = "[BigNumber Error] ",
              l = i + "Number primitive has more than 15 significant digits: ",
              u = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13]
            function c(e) {
              var t = 0 | e
              return e > 0 || e === t ? t : t - 1
            }
            function f(e) {
              for (var t, r, n = 1, s = e.length, a = e[0] + ""; n < s; ) {
                for (r = 14 - (t = e[n++] + "").length; r--; t = "0" + t);
                a += t
              }
              for (s = a.length; 48 === a.charCodeAt(--s); );
              return a.slice(0, s + 1 || 1)
            }
            function h(e, t) {
              var r,
                n,
                s = e.c,
                a = t.c,
                o = e.s,
                i = t.s,
                l = e.e,
                u = t.e
              if (!o || !i) return null
              if (((r = s && !s[0]), (n = a && !a[0]), r || n)) return r ? (n ? 0 : -i) : o
              if (o != i) return o
              if (((r = o < 0), (n = l == u), !s || !a)) return n ? 0 : !s ^ r ? 1 : -1
              if (!n) return (l > u) ^ r ? 1 : -1
              for (o = 0, i = (l = s.length) < (u = a.length) ? l : u; o < i; o++)
                if (s[o] != a[o]) return (s[o] > a[o]) ^ r ? 1 : -1
              return l == u ? 0 : (l > u) ^ r ? 1 : -1
            }
            function d(e, t, r, n) {
              if (e < t || e > r || e !== o(e))
                throw Error(
                  i +
                    (n || "Argument") +
                    ("number" == typeof e
                      ? e < t || e > r
                        ? " out of range: "
                        : " not an integer: "
                      : " not a primitive number: ") +
                    String(e),
                )
            }
            function p(e) {
              var t = e.c.length - 1
              return c(e.e / 14) == t && e.c[t] % 2 != 0
            }
            function g(e, t) {
              return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t
            }
            function y(e, t, r) {
              var n, s
              if (t < 0) {
                for (s = r + "."; ++t; s += r);
                e = s + e
              } else if (((n = e.length), ++t > n)) {
                for (s = r, t -= n; --t; s += r);
                e += s
              } else t < n && (e = e.slice(0, t) + "." + e.slice(t))
              return e
            }
            ;((n = (function e(t) {
              var r,
                n,
                m,
                w,
                b,
                v,
                A,
                E,
                _,
                S = (F.prototype = { constructor: F, toString: null, valueOf: null }),
                j = new F(1),
                O = 20,
                I = 4,
                R = -7,
                x = 21,
                T = -1e7,
                k = 1e7,
                C = !1,
                N = 1,
                U = 0,
                B = {
                  prefix: "",
                  groupSize: 3,
                  secondaryGroupSize: 0,
                  groupSeparator: ",",
                  decimalSeparator: ".",
                  fractionGroupSize: 0,
                  fractionGroupSeparator: "\xa0",
                  suffix: "",
                },
                D = "0123456789abcdefghijklmnopqrstuvwxyz",
                P = !0
              function F(e, t) {
                var r,
                  n,
                  a,
                  i,
                  u,
                  c,
                  f,
                  h,
                  p = this
                if (!(p instanceof F)) return new F(e, t)
                if (null == t) {
                  if (e && !0 === e._isBigNumber) {
                    ;(p.s = e.s),
                      !e.c || e.e > k
                        ? (p.c = p.e = null)
                        : e.e < T
                          ? (p.c = [(p.e = 0)])
                          : ((p.e = e.e), (p.c = e.c.slice()))
                    return
                  }
                  if ((c = "number" == typeof e) && 0 * e == 0) {
                    if (((p.s = 1 / e < 0 ? ((e = -e), -1) : 1), e === ~~e)) {
                      for (i = 0, u = e; u >= 10; u /= 10, i++);
                      i > k ? (p.c = p.e = null) : ((p.e = i), (p.c = [e]))
                      return
                    }
                    h = String(e)
                  } else {
                    if (!s.test((h = String(e)))) return _(p, h, c)
                    p.s = 45 == h.charCodeAt(0) ? ((h = h.slice(1)), -1) : 1
                  }
                  ;(i = h.indexOf(".")) > -1 && (h = h.replace(".", "")),
                    (u = h.search(/e/i)) > 0
                      ? (i < 0 && (i = u), (i += +h.slice(u + 1)), (h = h.substring(0, u)))
                      : i < 0 && (i = h.length)
                } else {
                  if ((d(t, 2, D.length, "Base"), 10 == t && P))
                    return K((p = new F(e)), O + p.e + 1, I)
                  if (((h = String(e)), (c = "number" == typeof e))) {
                    if (0 * e != 0) return _(p, h, c, t)
                    if (
                      ((p.s = 1 / e < 0 ? ((h = h.slice(1)), -1) : 1),
                      F.DEBUG && h.replace(/^0\.0*|\./, "").length > 15)
                    )
                      throw Error(l + e)
                  } else p.s = 45 === h.charCodeAt(0) ? ((h = h.slice(1)), -1) : 1
                  for (r = D.slice(0, t), i = u = 0, f = h.length; u < f; u++)
                    if (0 > r.indexOf((n = h.charAt(u)))) {
                      if ("." == n) {
                        if (u > i) {
                          i = f
                          continue
                        }
                      } else if (
                        !a &&
                        ((h == h.toUpperCase() && (h = h.toLowerCase())) ||
                          (h == h.toLowerCase() && (h = h.toUpperCase())))
                      ) {
                        ;(a = !0), (u = -1), (i = 0)
                        continue
                      }
                      return _(p, String(e), c, t)
                    }
                  ;(c = !1),
                    (i = (h = E(h, t, 10, p.s)).indexOf(".")) > -1
                      ? (h = h.replace(".", ""))
                      : (i = h.length)
                }
                for (u = 0; 48 === h.charCodeAt(u); u++);
                for (f = h.length; 48 === h.charCodeAt(--f); );
                if ((h = h.slice(u, ++f))) {
                  if (((f -= u), c && F.DEBUG && f > 15 && (e > 9007199254740991 || e !== o(e))))
                    throw Error(l + p.s * e)
                  if ((i = i - u - 1) > k) p.c = p.e = null
                  else if (i < T) p.c = [(p.e = 0)]
                  else {
                    if (((p.e = i), (p.c = []), (u = (i + 1) % 14), i < 0 && (u += 14), u < f)) {
                      for (u && p.c.push(+h.slice(0, u)), f -= 14; u < f; )
                        p.c.push(+h.slice(u, (u += 14)))
                      u = 14 - (h = h.slice(u)).length
                    } else u -= f
                    for (; u--; h += "0");
                    p.c.push(+h)
                  }
                } else p.c = [(p.e = 0)]
              }
              function L(e, t, r, n) {
                var s, a, o, i, l
                if ((null == r ? (r = I) : d(r, 0, 8), !e.c)) return e.toString()
                if (((s = e.c[0]), (o = e.e), null == t))
                  (l = f(e.c)),
                    (l = 1 == n || (2 == n && (o <= R || o >= x)) ? g(l, o) : y(l, o, "0"))
                else if (
                  ((a = (e = K(new F(e), t, r)).e),
                  (i = (l = f(e.c)).length),
                  1 == n || (2 == n && (t <= a || a <= R)))
                ) {
                  for (; i < t; l += "0", i++);
                  l = g(l, a)
                } else if (((t -= o), (l = y(l, a, "0")), a + 1 > i)) {
                  if (--t > 0) for (l += "."; t--; l += "0");
                } else if ((t += a - i) > 0) for (a + 1 == i && (l += "."); t--; l += "0");
                return e.s < 0 && s ? "-" + l : l
              }
              function M(e, t) {
                for (var r, n, s = 1, a = new F(e[0]); s < e.length; s++)
                  ((n = new F(e[s])).s && (r = h(a, n)) !== t && (0 !== r || a.s !== t)) || (a = n)
                return a
              }
              function $(e, t, r) {
                for (var n = 1, s = t.length; !t[--s]; t.pop());
                for (s = t[0]; s >= 10; s /= 10, n++);
                return (
                  (r = n + 14 * r - 1) > k
                    ? (e.c = e.e = null)
                    : r < T
                      ? (e.c = [(e.e = 0)])
                      : ((e.e = r), (e.c = t)),
                  e
                )
              }
              function K(e, t, r, n) {
                var s,
                  i,
                  l,
                  c,
                  f,
                  h,
                  d,
                  p = e.c
                if (p) {
                  e: {
                    for (s = 1, c = p[0]; c >= 10; c /= 10, s++);
                    if ((i = t - s) < 0)
                      (i += 14), (l = t), (d = o(((f = p[(h = 0)]) / u[s - l - 1]) % 10))
                    else if ((h = a((i + 1) / 14)) >= p.length) {
                      if (n) {
                        for (; p.length <= h; p.push(0));
                        ;(f = d = 0), (s = 1), (i %= 14), (l = i - 14 + 1)
                      } else break e
                    } else {
                      for (s = 1, f = c = p[h]; c >= 10; c /= 10, s++);
                      ;(i %= 14), (d = (l = i - 14 + s) < 0 ? 0 : o((f / u[s - l - 1]) % 10))
                    }
                    if (
                      ((n = n || t < 0 || null != p[h + 1] || (l < 0 ? f : f % u[s - l - 1])),
                      (n =
                        r < 4
                          ? (d || n) && (0 == r || r == (e.s < 0 ? 3 : 2))
                          : d > 5 ||
                            (5 == d &&
                              (4 == r ||
                                n ||
                                (6 == r &&
                                  (i > 0 ? (l > 0 ? f / u[s - l] : 0) : p[h - 1]) % 10 & 1) ||
                                r == (e.s < 0 ? 8 : 7)))),
                      t < 1 || !p[0])
                    )
                      return (
                        (p.length = 0),
                        n
                          ? ((t -= e.e + 1), (p[0] = u[(14 - (t % 14)) % 14]), (e.e = -t || 0))
                          : (p[0] = e.e = 0),
                        e
                      )
                    if (
                      (0 == i
                        ? ((p.length = h), (c = 1), h--)
                        : ((p.length = h + 1),
                          (c = u[14 - i]),
                          (p[h] = l > 0 ? o((f / u[s - l]) % u[l]) * c : 0)),
                      n)
                    )
                      for (;;)
                        if (0 == h) {
                          for (i = 1, l = p[0]; l >= 10; l /= 10, i++);
                          for (l = p[0] += c, c = 1; l >= 10; l /= 10, c++);
                          i != c && (e.e++, 1e14 == p[0] && (p[0] = 1))
                          break
                        } else {
                          if (((p[h] += c), 1e14 != p[h])) break
                          ;(p[h--] = 0), (c = 1)
                        }
                    for (i = p.length; 0 === p[--i]; p.pop());
                  }
                  e.e > k ? (e.c = e.e = null) : e.e < T && (e.c = [(e.e = 0)])
                }
                return e
              }
              function z(e) {
                var t,
                  r = e.e
                return null === r
                  ? e.toString()
                  : ((t = f(e.c)),
                    (t = r <= R || r >= x ? g(t, r) : y(t, r, "0")),
                    e.s < 0 ? "-" + t : t)
              }
              return (
                (F.clone = e),
                (F.ROUND_UP = 0),
                (F.ROUND_DOWN = 1),
                (F.ROUND_CEIL = 2),
                (F.ROUND_FLOOR = 3),
                (F.ROUND_HALF_UP = 4),
                (F.ROUND_HALF_DOWN = 5),
                (F.ROUND_HALF_EVEN = 6),
                (F.ROUND_HALF_CEIL = 7),
                (F.ROUND_HALF_FLOOR = 8),
                (F.EUCLID = 9),
                (F.config = F.set =
                  function (e) {
                    var t, r
                    if (null != e) {
                      if ("object" == typeof e) {
                        if (
                          (e.hasOwnProperty((t = "DECIMAL_PLACES")) &&
                            (d((r = e[t]), 0, 1e9, t), (O = r)),
                          e.hasOwnProperty((t = "ROUNDING_MODE")) &&
                            (d((r = e[t]), 0, 8, t), (I = r)),
                          e.hasOwnProperty((t = "EXPONENTIAL_AT")) &&
                            ((r = e[t]) && r.pop
                              ? (d(r[0], -1e9, 0, t), d(r[1], 0, 1e9, t), (R = r[0]), (x = r[1]))
                              : (d(r, -1e9, 1e9, t), (R = -(x = r < 0 ? -r : r)))),
                          e.hasOwnProperty((t = "RANGE")))
                        ) {
                          if ((r = e[t]) && r.pop)
                            d(r[0], -1e9, -1, t), d(r[1], 1, 1e9, t), (T = r[0]), (k = r[1])
                          else if ((d(r, -1e9, 1e9, t), r)) T = -(k = r < 0 ? -r : r)
                          else throw Error(i + t + " cannot be zero: " + r)
                        }
                        if (e.hasOwnProperty((t = "CRYPTO"))) {
                          if (!!(r = e[t]) === r) {
                            if (r) {
                              if (
                                "undefined" != typeof crypto &&
                                crypto &&
                                (crypto.getRandomValues || crypto.randomBytes)
                              )
                                C = r
                              else throw ((C = !r), Error(i + "crypto unavailable"))
                            } else C = r
                          } else throw Error(i + t + " not true or false: " + r)
                        }
                        if (
                          (e.hasOwnProperty((t = "MODULO_MODE")) &&
                            (d((r = e[t]), 0, 9, t), (N = r)),
                          e.hasOwnProperty((t = "POW_PRECISION")) &&
                            (d((r = e[t]), 0, 1e9, t), (U = r)),
                          e.hasOwnProperty((t = "FORMAT")))
                        ) {
                          if ("object" == typeof (r = e[t])) B = r
                          else throw Error(i + t + " not an object: " + r)
                        }
                        if (e.hasOwnProperty((t = "ALPHABET"))) {
                          if ("string" != typeof (r = e[t]) || /^.?$|[+\-.\s]|(.).*\1/.test(r))
                            throw Error(i + t + " invalid: " + r)
                          ;(P = "0123456789" == r.slice(0, 10)), (D = r)
                        }
                      } else throw Error(i + "Object expected: " + e)
                    }
                    return {
                      DECIMAL_PLACES: O,
                      ROUNDING_MODE: I,
                      EXPONENTIAL_AT: [R, x],
                      RANGE: [T, k],
                      CRYPTO: C,
                      MODULO_MODE: N,
                      POW_PRECISION: U,
                      FORMAT: B,
                      ALPHABET: D,
                    }
                  }),
                (F.isBigNumber = function (e) {
                  if (!e || !0 !== e._isBigNumber) return !1
                  if (!F.DEBUG) return !0
                  var t,
                    r,
                    n = e.c,
                    s = e.e,
                    a = e.s
                  e: if ("[object Array]" == {}.toString.call(n)) {
                    if ((1 === a || -1 === a) && s >= -1e9 && s <= 1e9 && s === o(s)) {
                      if (0 === n[0]) {
                        if (0 === s && 1 === n.length) return !0
                        break e
                      }
                      if (((t = (s + 1) % 14) < 1 && (t += 14), String(n[0]).length == t)) {
                        for (t = 0; t < n.length; t++)
                          if ((r = n[t]) < 0 || r >= 1e14 || r !== o(r)) break e
                        if (0 !== r) return !0
                      }
                    }
                  } else if (null === n && null === s && (null === a || 1 === a || -1 === a))
                    return !0
                  throw Error(i + "Invalid BigNumber: " + e)
                }),
                (F.maximum = F.max =
                  function () {
                    return M(arguments, -1)
                  }),
                (F.minimum = F.min =
                  function () {
                    return M(arguments, 1)
                  }),
                (F.random =
                  ((r =
                    (9007199254740992 * Math.random()) & 2097151
                      ? function () {
                          return o(9007199254740992 * Math.random())
                        }
                      : function () {
                          return (
                            ((1073741824 * Math.random()) | 0) * 8388608 +
                            ((8388608 * Math.random()) | 0)
                          )
                        }),
                  function (e) {
                    var t,
                      n,
                      s,
                      l,
                      c,
                      f = 0,
                      h = [],
                      p = new F(j)
                    if ((null == e ? (e = O) : d(e, 0, 1e9), (l = a(e / 14)), C)) {
                      if (crypto.getRandomValues) {
                        for (t = crypto.getRandomValues(new Uint32Array((l *= 2))); f < l; )
                          (c = 131072 * t[f] + (t[f + 1] >>> 11)) >= 9e15
                            ? ((n = crypto.getRandomValues(new Uint32Array(2))),
                              (t[f] = n[0]),
                              (t[f + 1] = n[1]))
                            : (h.push(c % 1e14), (f += 2))
                        f = l / 2
                      } else if (crypto.randomBytes) {
                        for (t = crypto.randomBytes((l *= 7)); f < l; )
                          (c =
                            (31 & t[f]) * 281474976710656 +
                            1099511627776 * t[f + 1] +
                            4294967296 * t[f + 2] +
                            16777216 * t[f + 3] +
                            (t[f + 4] << 16) +
                            (t[f + 5] << 8) +
                            t[f + 6]) >= 9e15
                            ? crypto.randomBytes(7).copy(t, f)
                            : (h.push(c % 1e14), (f += 7))
                        f = l / 7
                      } else throw ((C = !1), Error(i + "crypto unavailable"))
                    }
                    if (!C) for (; f < l; ) (c = r()) < 9e15 && (h[f++] = c % 1e14)
                    for (
                      l = h[--f], e %= 14, l && e && ((c = u[14 - e]), (h[f] = o(l / c) * c));
                      0 === h[f];
                      h.pop(), f--
                    );
                    if (f < 0) h = [(s = 0)]
                    else {
                      for (s = -1; 0 === h[0]; h.splice(0, 1), s -= 14);
                      for (f = 1, c = h[0]; c >= 10; c /= 10, f++);
                      f < 14 && (s -= 14 - f)
                    }
                    return (p.e = s), (p.c = h), p
                  })),
                (F.sum = function () {
                  for (var e = 1, t = arguments, r = new F(t[0]); e < t.length; ) r = r.plus(t[e++])
                  return r
                }),
                (E = (function () {
                  var e = "0123456789"
                  function t(e, t, r, n) {
                    for (var s, a, o = [0], i = 0, l = e.length; i < l; ) {
                      for (a = o.length; a--; o[a] *= t);
                      for (o[0] += n.indexOf(e.charAt(i++)), s = 0; s < o.length; s++)
                        o[s] > r - 1 &&
                          (null == o[s + 1] && (o[s + 1] = 0),
                          (o[s + 1] += (o[s] / r) | 0),
                          (o[s] %= r))
                    }
                    return o.reverse()
                  }
                  return function (r, n, s, a, o) {
                    var i,
                      l,
                      u,
                      c,
                      h,
                      d,
                      p,
                      g,
                      m = r.indexOf("."),
                      w = O,
                      b = I
                    for (
                      m >= 0 &&
                        ((c = U),
                        (U = 0),
                        (r = r.replace(".", "")),
                        (d = (g = new F(n)).pow(r.length - m)),
                        (U = c),
                        (g.c = t(y(f(d.c), d.e, "0"), 10, s, e)),
                        (g.e = g.c.length)),
                        u = c = (p = t(r, n, s, o ? ((i = D), e) : ((i = e), D))).length;
                      0 == p[--c];
                      p.pop()
                    );
                    if (!p[0]) return i.charAt(0)
                    if (
                      (m < 0
                        ? --u
                        : ((d.c = p),
                          (d.e = u),
                          (d.s = a),
                          (p = (d = A(d, g, w, b, s)).c),
                          (h = d.r),
                          (u = d.e)),
                      (m = p[(l = u + w + 1)]),
                      (c = s / 2),
                      (h = h || l < 0 || null != p[l + 1]),
                      (h =
                        b < 4
                          ? (null != m || h) && (0 == b || b == (d.s < 0 ? 3 : 2))
                          : m > c ||
                            (m == c &&
                              (4 == b || h || (6 == b && 1 & p[l - 1]) || b == (d.s < 0 ? 8 : 7)))),
                      l < 1 || !p[0])
                    )
                      r = h ? y(i.charAt(1), -w, i.charAt(0)) : i.charAt(0)
                    else {
                      if (((p.length = l), h))
                        for (--s; ++p[--l] > s; ) (p[l] = 0), l || (++u, (p = [1].concat(p)))
                      for (c = p.length; !p[--c]; );
                      for (m = 0, r = ""; m <= c; r += i.charAt(p[m++]));
                      r = y(r, u, i.charAt(0))
                    }
                    return r
                  }
                })()),
                (A = (function () {
                  function e(e, t, r) {
                    var n,
                      s,
                      a,
                      o,
                      i = 0,
                      l = e.length,
                      u = t % 1e7,
                      c = (t / 1e7) | 0
                    for (e = e.slice(); l--; )
                      (n = c * (a = e[l] % 1e7) + (o = (e[l] / 1e7) | 0) * u),
                        (i =
                          (((s = u * a + (n % 1e7) * 1e7 + i) / r) | 0) + ((n / 1e7) | 0) + c * o),
                        (e[l] = s % r)
                    return i && (e = [i].concat(e)), e
                  }
                  function t(e, t, r, n) {
                    var s, a
                    if (r != n) a = r > n ? 1 : -1
                    else
                      for (s = a = 0; s < r; s++)
                        if (e[s] != t[s]) {
                          a = e[s] > t[s] ? 1 : -1
                          break
                        }
                    return a
                  }
                  function r(e, t, r, n) {
                    for (var s = 0; r--; )
                      (e[r] -= s), (s = e[r] < t[r] ? 1 : 0), (e[r] = s * n + e[r] - t[r])
                    for (; !e[0] && e.length > 1; e.splice(0, 1));
                  }
                  return function (n, s, a, i, l) {
                    var u,
                      f,
                      h,
                      d,
                      p,
                      g,
                      y,
                      m,
                      w,
                      b,
                      v,
                      A,
                      E,
                      _,
                      S,
                      j,
                      O,
                      I = n.s == s.s ? 1 : -1,
                      R = n.c,
                      x = s.c
                    if (!R || !R[0] || !x || !x[0])
                      return new F(
                        n.s && s.s && (R ? !x || R[0] != x[0] : x)
                          ? (R && 0 == R[0]) || !x
                            ? 0 * I
                            : I / 0
                          : NaN,
                      )
                    for (
                      w = (m = new F(I)).c = [],
                        I = a + (f = n.e - s.e) + 1,
                        l || ((l = 1e14), (f = c(n.e / 14) - c(s.e / 14)), (I = (I / 14) | 0)),
                        h = 0;
                      x[h] == (R[h] || 0);
                      h++
                    );
                    if ((x[h] > (R[h] || 0) && f--, I < 0)) w.push(1), (d = !0)
                    else {
                      for (
                        _ = R.length,
                          j = x.length,
                          h = 0,
                          I += 2,
                          (p = o(l / (x[0] + 1))) > 1 &&
                            ((x = e(x, p, l)), (R = e(R, p, l)), (j = x.length), (_ = R.length)),
                          E = j,
                          v = (b = R.slice(0, j)).length;
                        v < j;
                        b[v++] = 0
                      );
                      ;(O = [0].concat((O = x.slice()))), (S = x[0]), x[1] >= l / 2 && S++
                      do {
                        if (((p = 0), (u = t(x, b, j, v)) < 0)) {
                          if (((A = b[0]), j != v && (A = A * l + (b[1] || 0)), (p = o(A / S)) > 1))
                            for (
                              p >= l && (p = l - 1), y = (g = e(x, p, l)).length, v = b.length;
                              1 == t(g, b, y, v);

                            )
                              p--, r(g, j < y ? O : x, y, l), (y = g.length), (u = 1)
                          else 0 == p && (u = p = 1), (y = (g = x.slice()).length)
                          if (
                            (y < v && (g = [0].concat(g)), r(b, g, v, l), (v = b.length), -1 == u)
                          )
                            for (; 1 > t(x, b, j, v); )
                              p++, r(b, j < v ? O : x, v, l), (v = b.length)
                        } else 0 === u && (p++, (b = [0]))
                        ;(w[h++] = p), b[0] ? (b[v++] = R[E] || 0) : ((b = [R[E]]), (v = 1))
                      } while ((E++ < _ || null != b[0]) && I--)
                      ;(d = null != b[0]), w[0] || w.splice(0, 1)
                    }
                    if (1e14 == l) {
                      for (h = 1, I = w[0]; I >= 10; I /= 10, h++);
                      K(m, a + (m.e = h + 14 * f - 1) + 1, i, d)
                    } else (m.e = f), (m.r = +d)
                    return m
                  }
                })()),
                (n = /^(-?)0([xbo])(?=\w[\w.]*$)/i),
                (m = /^([^.]+)\.$/),
                (w = /^\.([^.]+)$/),
                (b = /^-?(Infinity|NaN)$/),
                (v = /^\s*\+(?=[\w.])|^\s+|\s+$/g),
                (_ = function (e, t, r, s) {
                  var a,
                    o = r ? t : t.replace(v, "")
                  if (b.test(o)) e.s = isNaN(o) ? null : o < 0 ? -1 : 1
                  else {
                    if (
                      !r &&
                      ((o = o.replace(n, function (e, t, r) {
                        return (
                          (a = "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8),
                          s && s != a ? e : t
                        )
                      })),
                      s && ((a = s), (o = o.replace(m, "$1").replace(w, "0.$1"))),
                      t != o)
                    )
                      return new F(o, a)
                    if (F.DEBUG)
                      throw Error(i + "Not a" + (s ? " base " + s : "") + " number: " + t)
                    e.s = null
                  }
                  e.c = e.e = null
                }),
                (S.absoluteValue = S.abs =
                  function () {
                    var e = new F(this)
                    return e.s < 0 && (e.s = 1), e
                  }),
                (S.comparedTo = function (e, t) {
                  return h(this, new F(e, t))
                }),
                (S.decimalPlaces = S.dp =
                  function (e, t) {
                    var r, n, s
                    if (null != e)
                      return (
                        d(e, 0, 1e9),
                        null == t ? (t = I) : d(t, 0, 8),
                        K(new F(this), e + this.e + 1, t)
                      )
                    if (!(r = this.c)) return null
                    if (((n = ((s = r.length - 1) - c(this.e / 14)) * 14), (s = r[s])))
                      for (; s % 10 == 0; s /= 10, n--);
                    return n < 0 && (n = 0), n
                  }),
                (S.dividedBy = S.div =
                  function (e, t) {
                    return A(this, new F(e, t), O, I)
                  }),
                (S.dividedToIntegerBy = S.idiv =
                  function (e, t) {
                    return A(this, new F(e, t), 0, 1)
                  }),
                (S.exponentiatedBy = S.pow =
                  function (e, t) {
                    var r,
                      n,
                      s,
                      l,
                      u,
                      c,
                      f,
                      h,
                      d,
                      g = this
                    if ((e = new F(e)).c && !e.isInteger())
                      throw Error(i + "Exponent not an integer: " + z(e))
                    if (
                      (null != t && (t = new F(t)),
                      (c = e.e > 14),
                      !g.c ||
                        !g.c[0] ||
                        (1 == g.c[0] && !g.e && 1 == g.c.length) ||
                        !e.c ||
                        !e.c[0])
                    )
                      return (
                        (d = new F(Math.pow(+z(g), c ? e.s * (2 - p(e)) : +z(e)))), t ? d.mod(t) : d
                      )
                    if (((f = e.s < 0), t)) {
                      if (t.c ? !t.c[0] : !t.s) return new F(NaN)
                      ;(n = !f && g.isInteger() && t.isInteger()) && (g = g.mod(t))
                    } else {
                      if (
                        e.e > 9 &&
                        (g.e > 0 ||
                          g.e < -1 ||
                          (0 == g.e
                            ? g.c[0] > 1 || (c && g.c[1] >= 24e7)
                            : g.c[0] < 8e13 || (c && g.c[0] <= 9999975e7)))
                      )
                        return (
                          (l = g.s < 0 && p(e) ? -0 : 0),
                          g.e > -1 && (l = 1 / l),
                          new F(f ? 1 / l : l)
                        )
                      U && (l = a(U / 14 + 2))
                    }
                    for (
                      c
                        ? ((r = new F(0.5)), f && (e.s = 1), (h = p(e)))
                        : (h = (s = Math.abs(+z(e))) % 2),
                        d = new F(j);
                      ;

                    ) {
                      if (h) {
                        if (!(d = d.times(g)).c) break
                        l ? d.c.length > l && (d.c.length = l) : n && (d = d.mod(t))
                      }
                      if (s) {
                        if (0 === (s = o(s / 2))) break
                        h = s % 2
                      } else if ((K((e = e.times(r)), e.e + 1, 1), e.e > 14)) h = p(e)
                      else {
                        if (0 == (s = +z(e))) break
                        h = s % 2
                      }
                      ;(g = g.times(g)),
                        l ? g.c && g.c.length > l && (g.c.length = l) : n && (g = g.mod(t))
                    }
                    return n ? d : (f && (d = j.div(d)), t ? d.mod(t) : l ? K(d, U, I, u) : d)
                  }),
                (S.integerValue = function (e) {
                  var t = new F(this)
                  return null == e ? (e = I) : d(e, 0, 8), K(t, t.e + 1, e)
                }),
                (S.isEqualTo = S.eq =
                  function (e, t) {
                    return 0 === h(this, new F(e, t))
                  }),
                (S.isFinite = function () {
                  return !!this.c
                }),
                (S.isGreaterThan = S.gt =
                  function (e, t) {
                    return h(this, new F(e, t)) > 0
                  }),
                (S.isGreaterThanOrEqualTo = S.gte =
                  function (e, t) {
                    return 1 === (t = h(this, new F(e, t))) || 0 === t
                  }),
                (S.isInteger = function () {
                  return !!this.c && c(this.e / 14) > this.c.length - 2
                }),
                (S.isLessThan = S.lt =
                  function (e, t) {
                    return 0 > h(this, new F(e, t))
                  }),
                (S.isLessThanOrEqualTo = S.lte =
                  function (e, t) {
                    return -1 === (t = h(this, new F(e, t))) || 0 === t
                  }),
                (S.isNaN = function () {
                  return !this.s
                }),
                (S.isNegative = function () {
                  return this.s < 0
                }),
                (S.isPositive = function () {
                  return this.s > 0
                }),
                (S.isZero = function () {
                  return !!this.c && 0 == this.c[0]
                }),
                (S.minus = function (e, t) {
                  var r,
                    n,
                    s,
                    a,
                    o = this.s
                  if (((t = (e = new F(e, t)).s), !o || !t)) return new F(NaN)
                  if (o != t) return (e.s = -t), this.plus(e)
                  var i = this.e / 14,
                    l = e.e / 14,
                    u = this.c,
                    f = e.c
                  if (!i || !l) {
                    if (!u || !f) return u ? ((e.s = -t), e) : new F(f ? this : NaN)
                    if (!u[0] || !f[0])
                      return f[0] ? ((e.s = -t), e) : new F(u[0] ? this : 3 == I ? -0 : 0)
                  }
                  if (((i = c(i)), (l = c(l)), (u = u.slice()), (o = i - l))) {
                    for (
                      (a = o < 0) ? ((o = -o), (s = u)) : ((l = i), (s = f)), s.reverse(), t = o;
                      t--;
                      s.push(0)
                    );
                    s.reverse()
                  } else
                    for (n = (a = (o = u.length) < (t = f.length)) ? o : t, o = t = 0; t < n; t++)
                      if (u[t] != f[t]) {
                        a = u[t] < f[t]
                        break
                      }
                  if (
                    (a && ((s = u), (u = f), (f = s), (e.s = -e.s)),
                    (t = (n = f.length) - (r = u.length)) > 0)
                  )
                    for (; t--; u[r++] = 0);
                  for (t = 1e14 - 1; n > o; ) {
                    if (u[--n] < f[n]) {
                      for (r = n; r && !u[--r]; u[r] = t);
                      --u[r], (u[n] += 1e14)
                    }
                    u[n] -= f[n]
                  }
                  for (; 0 == u[0]; u.splice(0, 1), --l);
                  return u[0] ? $(e, u, l) : ((e.s = 3 == I ? -1 : 1), (e.c = [(e.e = 0)]), e)
                }),
                (S.modulo = S.mod =
                  function (e, t) {
                    var r, n
                    return ((e = new F(e, t)), this.c && e.s && (!e.c || e.c[0]))
                      ? e.c && (!this.c || this.c[0])
                        ? (9 == N
                            ? ((n = e.s), (e.s = 1), (r = A(this, e, 0, 3)), (e.s = n), (r.s *= n))
                            : (r = A(this, e, 0, N)),
                          (e = this.minus(r.times(e))).c[0] || 1 != N || (e.s = this.s),
                          e)
                        : new F(this)
                      : new F(NaN)
                  }),
                (S.multipliedBy = S.times =
                  function (e, t) {
                    var r,
                      n,
                      s,
                      a,
                      o,
                      i,
                      l,
                      u,
                      f,
                      h,
                      d,
                      p,
                      g,
                      y = this.c,
                      m = (e = new F(e, t)).c
                    if (!y || !m || !y[0] || !m[0])
                      return (
                        this.s && e.s && (!y || y[0] || m) && (!m || m[0] || y)
                          ? ((e.s *= this.s),
                            y && m ? ((e.c = [0]), (e.e = 0)) : (e.c = e.e = null))
                          : (e.c = e.e = e.s = null),
                        e
                      )
                    for (
                      n = c(this.e / 14) + c(e.e / 14),
                        e.s *= this.s,
                        (l = y.length) < (h = m.length) &&
                          ((g = y), (y = m), (m = g), (s = l), (l = h), (h = s)),
                        s = l + h,
                        g = [];
                      s--;
                      g.push(0)
                    );
                    for (s = h; --s >= 0; ) {
                      for (r = 0, d = m[s] % 1e7, p = (m[s] / 1e7) | 0, a = s + (o = l); a > s; )
                        (i = p * (u = y[--o] % 1e7) + (f = (y[o] / 1e7) | 0) * d),
                          (r =
                            (((u = d * u + (i % 1e7) * 1e7 + g[a] + r) / 1e14) | 0) +
                            ((i / 1e7) | 0) +
                            p * f),
                          (g[a--] = u % 1e14)
                      g[a] = r
                    }
                    return r ? ++n : g.splice(0, 1), $(e, g, n)
                  }),
                (S.negated = function () {
                  var e = new F(this)
                  return (e.s = -e.s || null), e
                }),
                (S.plus = function (e, t) {
                  var r,
                    n = this.s
                  if (((t = (e = new F(e, t)).s), !n || !t)) return new F(NaN)
                  if (n != t) return (e.s = -t), this.minus(e)
                  var s = this.e / 14,
                    a = e.e / 14,
                    o = this.c,
                    i = e.c
                  if (!s || !a) {
                    if (!o || !i) return new F(n / 0)
                    if (!o[0] || !i[0]) return i[0] ? e : new F(o[0] ? this : 0 * n)
                  }
                  if (((s = c(s)), (a = c(a)), (o = o.slice()), (n = s - a))) {
                    for (
                      n > 0 ? ((a = s), (r = i)) : ((n = -n), (r = o)), r.reverse();
                      n--;
                      r.push(0)
                    );
                    r.reverse()
                  }
                  for (
                    (n = o.length) - (t = i.length) < 0 && ((r = i), (i = o), (o = r), (t = n)),
                      n = 0;
                    t;

                  )
                    (n = ((o[--t] = o[t] + i[t] + n) / 1e14) | 0),
                      (o[t] = 1e14 === o[t] ? 0 : o[t] % 1e14)
                  return n && ((o = [n].concat(o)), ++a), $(e, o, a)
                }),
                (S.precision = S.sd =
                  function (e, t) {
                    var r, n, s
                    if (null != e && !!e !== e)
                      return d(e, 1, 1e9), null == t ? (t = I) : d(t, 0, 8), K(new F(this), e, t)
                    if (!(r = this.c)) return null
                    if (((n = 14 * (s = r.length - 1) + 1), (s = r[s]))) {
                      for (; s % 10 == 0; s /= 10, n--);
                      for (s = r[0]; s >= 10; s /= 10, n++);
                    }
                    return e && this.e + 1 > n && (n = this.e + 1), n
                  }),
                (S.shiftedBy = function (e) {
                  return d(e, -9007199254740991, 9007199254740991), this.times("1e" + e)
                }),
                (S.squareRoot = S.sqrt =
                  function () {
                    var e,
                      t,
                      r,
                      n,
                      s,
                      a = this.c,
                      o = this.s,
                      i = this.e,
                      l = O + 4,
                      u = new F("0.5")
                    if (1 !== o || !a || !a[0])
                      return new F(!o || (o < 0 && (!a || a[0])) ? NaN : a ? this : 1 / 0)
                    if (
                      (0 == (o = Math.sqrt(+z(this))) || o == 1 / 0
                        ? (((t = f(a)).length + i) % 2 == 0 && (t += "0"),
                          (o = Math.sqrt(+t)),
                          (i = c((i + 1) / 2) - (i < 0 || i % 2)),
                          (t =
                            o == 1 / 0
                              ? "5e" + i
                              : (t = o.toExponential()).slice(0, t.indexOf("e") + 1) + i),
                          (r = new F(t)))
                        : (r = new F(o + "")),
                      r.c[0])
                    ) {
                      for ((o = (i = r.e) + l) < 3 && (o = 0); ; )
                        if (
                          ((s = r),
                          (r = u.times(s.plus(A(this, s, l, 1)))),
                          f(s.c).slice(0, o) === (t = f(r.c)).slice(0, o))
                        ) {
                          if (
                            (r.e < i && --o,
                            "9999" != (t = t.slice(o - 3, o + 1)) && (n || "4999" != t))
                          ) {
                            ;(+t && (+t.slice(1) || "5" != t.charAt(0))) ||
                              (K(r, r.e + O + 2, 1), (e = !r.times(r).eq(this)))
                            break
                          }
                          if (!n && (K(s, s.e + O + 2, 0), s.times(s).eq(this))) {
                            r = s
                            break
                          }
                          ;(l += 4), (o += 4), (n = 1)
                        }
                    }
                    return K(r, r.e + O + 1, I, e)
                  }),
                (S.toExponential = function (e, t) {
                  return null != e && (d(e, 0, 1e9), e++), L(this, e, t, 1)
                }),
                (S.toFixed = function (e, t) {
                  return null != e && (d(e, 0, 1e9), (e = e + this.e + 1)), L(this, e, t)
                }),
                (S.toFormat = function (e, t, r) {
                  var n
                  if (null == r)
                    null != e && t && "object" == typeof t
                      ? ((r = t), (t = null))
                      : e && "object" == typeof e
                        ? ((r = e), (e = t = null))
                        : (r = B)
                  else if ("object" != typeof r) throw Error(i + "Argument not an object: " + r)
                  if (((n = this.toFixed(e, t)), this.c)) {
                    var s,
                      a = n.split("."),
                      o = +r.groupSize,
                      l = +r.secondaryGroupSize,
                      u = r.groupSeparator || "",
                      c = a[0],
                      f = a[1],
                      h = this.s < 0,
                      d = h ? c.slice(1) : c,
                      p = d.length
                    if ((l && ((s = o), (o = l), (l = s), (p -= s)), o > 0 && p > 0)) {
                      for (s = p % o || o, c = d.substr(0, s); s < p; s += o)
                        c += u + d.substr(s, o)
                      l > 0 && (c += u + d.slice(s)), h && (c = "-" + c)
                    }
                    n = f
                      ? c +
                        (r.decimalSeparator || "") +
                        ((l = +r.fractionGroupSize)
                          ? f.replace(
                              RegExp("\\d{" + l + "}\\B", "g"),
                              "$&" + (r.fractionGroupSeparator || ""),
                            )
                          : f)
                      : c
                  }
                  return (r.prefix || "") + n + (r.suffix || "")
                }),
                (S.toFraction = function (e) {
                  var t,
                    r,
                    n,
                    s,
                    a,
                    o,
                    l,
                    c,
                    h,
                    d,
                    p,
                    g,
                    y = this.c
                  if (null != e && ((!(l = new F(e)).isInteger() && (l.c || 1 !== l.s)) || l.lt(j)))
                    throw Error(
                      i +
                        "Argument " +
                        (l.isInteger() ? "out of range: " : "not an integer: ") +
                        z(l),
                    )
                  if (!y) return new F(this)
                  for (
                    t = new F(j),
                      h = r = new F(j),
                      n = c = new F(j),
                      g = f(y),
                      a = t.e = g.length - this.e - 1,
                      t.c[0] = u[(o = a % 14) < 0 ? 14 + o : o],
                      e = !e || l.comparedTo(t) > 0 ? (a > 0 ? t : h) : l,
                      o = k,
                      k = 1 / 0,
                      l = new F(g),
                      c.c[0] = 0;
                    (d = A(l, t, 0, 1)), 1 != (s = r.plus(d.times(n))).comparedTo(e);

                  )
                    (r = n),
                      (n = s),
                      (h = c.plus(d.times((s = h)))),
                      (c = s),
                      (t = l.minus(d.times((s = t)))),
                      (l = s)
                  return (
                    (s = A(e.minus(r), n, 0, 1)),
                    (c = c.plus(s.times(h))),
                    (r = r.plus(s.times(n))),
                    (c.s = h.s = this.s),
                    (a *= 2),
                    (p =
                      1 >
                      A(h, n, a, I)
                        .minus(this)
                        .abs()
                        .comparedTo(A(c, r, a, I).minus(this).abs())
                        ? [h, n]
                        : [c, r]),
                    (k = o),
                    p
                  )
                }),
                (S.toNumber = function () {
                  return +z(this)
                }),
                (S.toPrecision = function (e, t) {
                  return null != e && d(e, 1, 1e9), L(this, e, t, 2)
                }),
                (S.toString = function (e) {
                  var t,
                    r = this,
                    n = r.s,
                    s = r.e
                  return (
                    null === s
                      ? n
                        ? ((t = "Infinity"), n < 0 && (t = "-" + t))
                        : (t = "NaN")
                      : (null == e
                          ? (t = s <= R || s >= x ? g(f(r.c), s) : y(f(r.c), s, "0"))
                          : 10 === e && P
                            ? (t = y(f((r = K(new F(r), O + s + 1, I)).c), r.e, "0"))
                            : (d(e, 2, D.length, "Base"), (t = E(y(f(r.c), s, "0"), 10, e, n, !0))),
                        n < 0 && r.c[0] && (t = "-" + t)),
                    t
                  )
                }),
                (S.valueOf = S.toJSON =
                  function () {
                    return z(this)
                  }),
                (S._isBigNumber = !0),
                null != t && F.set(t),
                F
              )
            })()).default = n.BigNumber =
              n),
              "function" == typeof e && e.amd
                ? e(function () {
                    return n
                  })
                : r.exports
                  ? (r.exports = n)
                  : (t || (t = "undefined" != typeof self && self ? self : window),
                    (t.BigNumber = n))
          })(this)
        },
        {},
      ],
      grztg: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = { functionName: "sign", permissions: ["SIGN_TRANSACTION"] })
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "4ghwd": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "finalizer", () => c)
          var s = e("./animation"),
            a = e("./chunks"),
            o = e("./transaction_builder"),
            i = e("arweave"),
            l = n.interopDefault(i)
          let u = async (e, t) => {
              let {
                transaction: r,
                dataChunks: n,
                tagChunks: s,
                chunkCollectionID: i,
              } = (0, o.deconstructTransaction)(e)
              try {
                await (0, a.sendChunk)({ collectionID: i, type: "start", index: -1 })
              } catch (e) {
                throw Error(`Failed to initiate transaction chunk stream: 
${e}`)
              }
              for (let e of n)
                try {
                  await (0, a.sendChunk)(e)
                } catch (e) {
                  throw Error(`Error while sending a data chunk of collection "${i}": 
${e}`)
                }
              for (let e of s)
                try {
                  await (0, a.sendChunk)(e)
                } catch (e) {
                  throw Error(`Error while sending a tag chunk for tx from chunk collection "${i}": 
${e}`)
                }
              return [r, t, i]
            },
            c = (e, t, [r]) => {
              if (!e) throw Error("No transaction returned")
              let n = new l.default({ host: "arweave.net", port: 443, protocol: "https" }),
                a = n.transactions.fromRaw({
                  ...e.transaction,
                  tags: [...(r.tags || []), ...(e.transaction.tags || [])],
                  data: r.data,
                })
              if (e.arConfetti)
                for (let t = 0; t < 8; t++)
                  setTimeout(() => (0, s.createCoinWithAnimation)(e.arConfetti), 150 * t)
              return a
            }
          r.default = u
        },
        {
          "./animation": "5hcac",
          "./chunks": "1FDAY",
          "./transaction_builder": "hUeIO",
          arweave: "d5qd5",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      "5hcac": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          function s(e) {
            let t = document.createElement("img"),
              r = { x: 0, y: 0 },
              n = `ar-coin-animation-${document.querySelectorAll(".ar-coing-animation").length}`,
              s = 100
            t.setAttribute("src", e),
              t.setAttribute("alt", "a"),
              (t.style.position = "fixed"),
              (t.style.bottom = "0"),
              (t.style.right = `${Math.floor(30 * Math.random())}px`),
              (t.style.width = "18px"),
              (t.style.zIndex = "1000000"),
              (t.style.transition = "all .23s ease"),
              (t.id = n),
              t.classList.add("ar-coing-animation"),
              document.body.appendChild(t)
            let a = setInterval(() => {
              if (s < 0) return document.querySelector(`#${n}`)?.remove(), clearInterval(a)
              ;(s -= 6.5),
                (r.x += Math.floor(30 * Math.random()) - 10),
                (r.y += Math.floor(24 * Math.random())),
                (t.style.transform = `translate(-${r.x}px, -${r.y}px)`),
                (t.style.opacity = `${s / 100}`)
            }, 100)
          }
          n.defineInteropFlag(r), n.export(r, "createCoinWithAnimation", () => s)
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "1FDAY": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "CHUNK_SIZE", () => a),
            n.export(r, "sendChunk", () => i),
            n.export(r, "handleChunk", () => l),
            n.export(r, "getChunks", () => u),
            n.export(r, "cleanUpChunks", () => c)
          var s = e("nanoid")
          let a = 5e5,
            o = [],
            i = (e) =>
              new Promise((t, r) => {
                let n = (0, s.nanoid)()
                window.postMessage(
                  { type: "chunk", ext: "arconnect", data: e, callID: n },
                  window.location.origin,
                ),
                  window.addEventListener("message", function e(s) {
                    let { data: a } = s,
                      o = a.data
                    a.callID === n &&
                      (a.error || "string" == typeof o ? r(a.data) : t(),
                      window.removeEventListener("message", e))
                  })
              })
          function l(e, t) {
            if ("start" === e.type)
              o.push({ chunkCollectionID: e.collectionID, origin: t, rawChunks: [] })
            else {
              let r = o.findIndex(
                ({ chunkCollectionID: r, origin: n }) => r === e.collectionID && n === t,
              )
              if (r < 0) throw Error("Invalid origin or collection ID for chunk")
              o[r].rawChunks.push(e)
            }
            return e.index
          }
          function u(e, t) {
            let r = o.find(({ chunkCollectionID: r, origin: n }) => r === e && n === t)
            return r?.rawChunks
          }
          function c(e) {
            let t = o.findIndex(({ chunkCollectionID: t }) => t === e)
            o.splice(t, 1)
          }
        },
        { nanoid: "h72T4", "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      hUeIO: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "bytesToChunks", () => i),
            n.export(r, "bytesFromChunks", () => l),
            n.export(r, "deconstructTransaction", () => u),
            n.export(r, "getDataSize", () => c),
            n.export(r, "constructTransaction", () => f),
            n.export(r, "deconstructSignedTransaction", () => h)
          var s = e("./chunks"),
            a = e("./tags"),
            o = e("nanoid")
          let i = (e, t, r) => {
              let n = []
              for (let a = 0; a < Math.ceil(e.length / s.CHUNK_SIZE); a++) {
                let o = a * s.CHUNK_SIZE,
                  i = e.slice(o, o + s.CHUNK_SIZE)
                n.push({ collectionID: t, type: "bytes", index: a + r, value: Array.from(i) })
              }
              return n
            },
            l = (e) => {
              e.sort((e, t) => e.index - t.index)
              let t = c(e),
                r = new Uint8Array(t),
                n = 0
              for (let t of e)
                if ("bytes" === t.type) {
                  let e = new Uint8Array(t.value)
                  r.set(e, n), (n += e.length)
                }
              return r
            }
          function u(e) {
            let t = (0, o.nanoid)(),
              r = e.tags.map((e, r) => ({ collectionID: t, type: "tag", index: r, value: e })),
              n = []
            for (let a = 0; a < Math.ceil(e.data.length / s.CHUNK_SIZE); a++) {
              let o = a * s.CHUNK_SIZE,
                i = e.data.slice(o, o + s.CHUNK_SIZE)
              n.push({ collectionID: t, type: "data", index: a + r.length, value: Array.from(i) })
            }
            let a = { ...e, data: void 0, tags: void 0 }
            return { transaction: a, tagChunks: r, dataChunks: n, chunkCollectionID: t }
          }
          function c(e) {
            let t = 0
            for (let r of e)
              ("data" === r.type || "bytes" === r.type) && (t += r.value?.length || 0)
            return t
          }
          function f(e, t) {
            ;(e.tags = []), t.sort((e, t) => e.index - t.index)
            let r = c(t),
              n = new Uint8Array(r),
              s = 0
            for (let r of t)
              if ("data" === r.type) {
                let e = new Uint8Array(r.value)
                n.set(e, s), (s += e.length)
              } else "tag" === r.type && e.tags.push(r.value)
            return (e.data = n), e
          }
          function h(e) {
            let t = e.get("tags").filter((e) => {
              let t = e.get("name", { string: !0, decode: !0 })
              return (0, a.signedTxTags).find(({ name: e }) => e === t)
            })
            return { ...e, data: void 0, tags: t }
          }
        },
        {
          "./chunks": "1FDAY",
          "./tags": "nJcNK",
          nanoid: "h72T4",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      nJcNK: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "signedTxTags", () => a)
          var s = e("../../../../package.json")
          let a = [
            { name: "Signing-Client", value: "ArConnect" },
            { name: "Signing-Client-Version", value: s.version },
          ]
        },
        {
          "../../../../package.json": "gP8Oo",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      d5qd5: [
        function (e, t, r) {
          var n =
              (this && this.__createBinding) ||
              (Object.create
                ? function (e, t, r, n) {
                    void 0 === n && (n = r)
                    var s = Object.getOwnPropertyDescriptor(t, r)
                    ;(!s || ("get" in s ? !t.__esModule : s.writable || s.configurable)) &&
                      (s = {
                        enumerable: !0,
                        get: function () {
                          return t[r]
                        },
                      }),
                      Object.defineProperty(e, n, s)
                  }
                : function (e, t, r, n) {
                    void 0 === n && (n = r), (e[n] = t[r])
                  }),
            s =
              (this && this.__exportStar) ||
              function (e, t) {
                for (var r in e)
                  "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
              }
          Object.defineProperty(r, "__esModule", { value: !0 })
          let a = e("ef3109d6e8d1ddd2"),
            o = e("f486077ec9c61c99")
          ;(a.default.init = function (e = {}) {
            if ("object" != typeof location || !location.protocol || !location.hostname)
              return new a.default({ ...e, host: "arweave.net", port: 443, protocol: "https" })
            let t = location.protocol.replace(":", ""),
              r = location.hostname,
              n = location.port ? parseInt(location.port) : "https" == t ? 443 : 80,
              s = (0, o.getDefaultConfig)(t, r),
              i = e.protocol || s.protocol,
              l = e.host || s.host,
              u = e.port || s.port || n
            return new a.default({ ...e, host: l, protocol: i, port: u })
          }),
            "object" == typeof globalThis
              ? (globalThis.Arweave = a.default)
              : "object" == typeof self && (self.Arweave = a.default),
            s(e("ef3109d6e8d1ddd2"), r),
            (r.default = a.default)
        },
        { ef3109d6e8d1ddd2: "aW2qG", f486077ec9c61c99: "jdVR6" },
      ],
      aW2qG: [
        function (e, t, r) {
          Object.defineProperty(r, "__esModule", { value: !0 })
          let n = e("7b4926ed2a17a610"),
            s = e("f003cc8478913337"),
            a = e("8c9c6961e4e7478f"),
            o = e("b4cd665fac30c9e3"),
            i = e("e8d13f16487416d5"),
            l = e("3915d13ada13a62c"),
            u = e("9518bca8d6550d1e"),
            c = e("5563d08247098f22"),
            f = e("c56eaf40f22bda8d"),
            h = e("7e99389e28771ed5"),
            d = e("3814c923a60daa5a")
          class p {
            api
            wallets
            transactions
            network
            blocks
            ar
            silo
            chunks
            static init
            static crypto = new a.default()
            static utils = c
            constructor(e) {
              ;(this.api = new s.default(e)),
                (this.wallets = new l.default(this.api, p.crypto)),
                (this.chunks = new h.default(this.api)),
                (this.transactions = new i.default(this.api, p.crypto, this.chunks)),
                (this.silo = new f.default(this.api, this.crypto, this.transactions)),
                (this.network = new o.default(this.api)),
                (this.blocks = new d.default(this.api, this.network)),
                (this.ar = new n.default())
            }
            get crypto() {
              return p.crypto
            }
            get utils() {
              return p.utils
            }
            getConfig() {
              return { api: this.api.getConfig(), crypto: null }
            }
            async createTransaction(e, t) {
              let r = {}
              if ((Object.assign(r, e), !e.data && !(e.target && e.quantity)))
                throw Error(
                  "A new Arweave transaction must have a 'data' value, or 'target' and 'quantity' values.",
                )
              if (
                (void 0 == e.owner && t && "use_wallet" !== t && (r.owner = t.n),
                void 0 == e.last_tx && (r.last_tx = await this.transactions.getTransactionAnchor()),
                "string" == typeof e.data && (e.data = c.stringToBuffer(e.data)),
                e.data instanceof ArrayBuffer && (e.data = new Uint8Array(e.data)),
                e.data && !(e.data instanceof Uint8Array))
              )
                throw Error("Expected data to be a string, Uint8Array or ArrayBuffer")
              if (void 0 == e.reward) {
                let t = e.data ? e.data.byteLength : 0
                r.reward = await this.transactions.getPrice(t, r.target)
              }
              ;(r.data_root = ""),
                (r.data_size = e.data ? e.data.byteLength.toString() : "0"),
                (r.data = e.data || new Uint8Array(0))
              let n = new u.default(r)
              return await n.getSignatureData(), n
            }
            async createSiloTransaction(e, t, r) {
              let n = {}
              if ((Object.assign(n, e), !e.data))
                throw Error("Silo transactions must have a 'data' value")
              if (!r) throw Error("No Silo URI specified.")
              if (e.target || e.quantity)
                throw Error(
                  "Silo transactions can only be used for storing data, sending AR to other wallets isn't supported.",
                )
              if (void 0 == e.owner) {
                if (!t || !t.n)
                  throw Error(
                    "A new Arweave transaction must either have an 'owner' attribute, or you must provide the jwk parameter.",
                  )
                n.owner = t.n
              }
              void 0 == e.last_tx && (n.last_tx = await this.transactions.getTransactionAnchor())
              let s = await this.silo.parseUri(r)
              if ("string" == typeof e.data) {
                let t = await this.crypto.encrypt(c.stringToBuffer(e.data), s.getEncryptionKey())
                ;(n.reward = await this.transactions.getPrice(t.byteLength)),
                  (n.data = c.bufferTob64Url(t))
              }
              if (e.data instanceof Uint8Array) {
                let t = await this.crypto.encrypt(e.data, s.getEncryptionKey())
                ;(n.reward = await this.transactions.getPrice(t.byteLength)),
                  (n.data = c.bufferTob64Url(t))
              }
              let a = new u.default(n)
              return a.addTag("Silo-Name", s.getAccessKey()), a.addTag("Silo-Version", "0.1.0"), a
            }
            arql(e) {
              return this.api.post("/arql", e).then((e) => e.data || [])
            }
          }
          r.default = p
        },
        {
          "7b4926ed2a17a610": "3geze",
          f003cc8478913337: "88fGD",
          "8c9c6961e4e7478f": "4SOs9",
          b4cd665fac30c9e3: "iWBHa",
          e8d13f16487416d5: "luoZI",
          "3915d13ada13a62c": "dWcUz",
          "9518bca8d6550d1e": "eep0i",
          "5563d08247098f22": "g1Mao",
          c56eaf40f22bda8d: "17Kaj",
          "7e99389e28771ed5": "2dECD",
          "3814c923a60daa5a": "4l6f1",
        },
      ],
      "3geze": [
        function (e, t, r) {
          Object.defineProperty(r, "__esModule", { value: !0 })
          let n = e("3d4a554bb93adfb3")
          r.default = class {
            BigNum
            constructor() {
              this.BigNum = (e, t) => new (n.BigNumber.clone({ DECIMAL_PLACES: t }))(e)
            }
            winstonToAr(e, { formatted: t = !1, decimals: r = 12, trim: n = !0 } = {}) {
              let s = this.stringToBigNum(e, r).shiftedBy(-12)
              return t ? s.toFormat(r) : s.toFixed(r)
            }
            arToWinston(e, { formatted: t = !1 } = {}) {
              let r = this.stringToBigNum(e).shiftedBy(12)
              return t ? r.toFormat() : r.toFixed(0)
            }
            compare(e, t) {
              let r = this.stringToBigNum(e),
                n = this.stringToBigNum(t)
              return r.comparedTo(n)
            }
            isEqual(e, t) {
              return 0 === this.compare(e, t)
            }
            isLessThan(e, t) {
              let r = this.stringToBigNum(e),
                n = this.stringToBigNum(t)
              return r.isLessThan(n)
            }
            isGreaterThan(e, t) {
              let r = this.stringToBigNum(e),
                n = this.stringToBigNum(t)
              return r.isGreaterThan(n)
            }
            add(e, t) {
              let r = this.stringToBigNum(e)
              return this.stringToBigNum(t), r.plus(t).toFixed(0)
            }
            sub(e, t) {
              let r = this.stringToBigNum(e)
              return this.stringToBigNum(t), r.minus(t).toFixed(0)
            }
            stringToBigNum(e, t = 12) {
              return this.BigNum(e, t)
            }
          }
        },
        { "3d4a554bb93adfb3": "l9tLK" },
      ],
      "88fGD": [
        function (e, t, r) {
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = class {
              METHOD_GET = "GET"
              METHOD_POST = "POST"
              config
              constructor(e) {
                this.applyConfig(e)
              }
              applyConfig(e) {
                this.config = this.mergeDefaults(e)
              }
              getConfig() {
                return this.config
              }
              mergeDefaults(e) {
                let t = e.protocol || "http",
                  r = e.port || ("https" === t ? 443 : 80)
                return {
                  host: e.host || "127.0.0.1",
                  protocol: t,
                  port: r,
                  timeout: e.timeout || 2e4,
                  logging: e.logging || !1,
                  logger: e.logger || console.log,
                  network: e.network,
                }
              }
              async get(e, t) {
                return await this.request(e, { ...t, method: this.METHOD_GET })
              }
              async post(e, t, r) {
                let n = new Headers(r?.headers || {})
                return (
                  n.get("content-type")?.includes("application/json") ||
                    n.append("content-type", "application/json"),
                  n.append("accept", "application/json, text/plain, */*"),
                  await this.request(e, {
                    ...r,
                    method: this.METHOD_POST,
                    body: "string" != typeof t ? JSON.stringify(t) : t,
                    headers: n,
                  })
                )
              }
              async request(e, t) {
                let r = new Headers(t?.headers || {}),
                  s = `${this.config.protocol}://${this.config.host}:${this.config.port}`,
                  a = t?.responseType
                delete t?.responseType,
                  e.startsWith("/") && (e = e.slice(1)),
                  this.config.network && r.append("x-network", this.config.network),
                  this.config.logging && this.config.logger(`Requesting: ${s}/${e}`)
                let o = await fetch(`${s}/${e}`, { ...(t || {}), headers: r })
                this.config.logging && this.config.logger(`Response:   ${o.url} - ${o.status}`)
                let i = o.headers.get("content-type"),
                  l = i?.match(/charset=([^()<>@,;:\"/[\]?.=\s]*)/i)?.[1],
                  u = async () => {
                    if (l)
                      try {
                        o.data = new TextDecoder(l).decode(await o.arrayBuffer())
                      } catch (e) {
                        o.data = await o.text()
                      }
                    else o.data = await o.text()
                  }
                if ("arraybuffer" === a) o.data = await o.arrayBuffer()
                else if ("text" === a) await u()
                else if ("webstream" === a) o.data = n(o.body)
                else
                  try {
                    let e = await o.clone().json()
                    "object" != typeof e ? await u() : (o.data = await o.json()), (e = null)
                  } catch {
                    await u()
                  }
                return o
              }
            })
          let n = (e) => (
              void 0 === e[Symbol.asyncIterator] && (e[Symbol.asyncIterator] = s(e)), e
            ),
            s = function (e) {
              return async function* () {
                let t = e.getReader()
                try {
                  for (;;) {
                    let { done: e, value: r } = await t.read()
                    if (e) return
                    yield r
                  }
                } finally {
                  t.releaseLock()
                }
              }
            }
        },
        {},
      ],
      "4SOs9": [
        function (e, t, r) {
          Object.defineProperty(r, "__esModule", { value: !0 })
          let n = e("cca6f4dd88f0c030")
          r.default = class {
            keyLength = 4096
            publicExponent = 65537
            hashAlgorithm = "sha256"
            driver
            constructor() {
              if (!this.detectWebCrypto()) throw Error("SubtleCrypto not available!")
              this.driver = crypto.subtle
            }
            async generateJWK() {
              let e = await this.driver.generateKey(
                  {
                    name: "RSA-PSS",
                    modulusLength: 4096,
                    publicExponent: new Uint8Array([1, 0, 1]),
                    hash: { name: "SHA-256" },
                  },
                  !0,
                  ["sign"],
                ),
                t = await this.driver.exportKey("jwk", e.privateKey)
              return {
                kty: t.kty,
                e: t.e,
                n: t.n,
                d: t.d,
                p: t.p,
                q: t.q,
                dp: t.dp,
                dq: t.dq,
                qi: t.qi,
              }
            }
            async sign(e, t, { saltLength: r } = {}) {
              let n = await this.driver.sign(
                { name: "RSA-PSS", saltLength: 32 },
                await this.jwkToCryptoKey(e),
                t,
              )
              return new Uint8Array(n)
            }
            async hash(e, t = "SHA-256") {
              let r = await this.driver.digest(t, e)
              return new Uint8Array(r)
            }
            async verify(e, t, r) {
              let n = await this.jwkToPublicCryptoKey({ kty: "RSA", e: "AQAB", n: e }),
                s = await this.driver.digest("SHA-256", t),
                a = await this.driver.verify({ name: "RSA-PSS", saltLength: 0 }, n, r, t),
                o = await this.driver.verify({ name: "RSA-PSS", saltLength: 32 }, n, r, t),
                i = await this.driver.verify(
                  {
                    name: "RSA-PSS",
                    saltLength: Math.ceil((n.algorithm.modulusLength - 1) / 8) - s.byteLength - 2,
                  },
                  n,
                  r,
                  t,
                )
              return a || o || i
            }
            async jwkToCryptoKey(e) {
              return this.driver.importKey(
                "jwk",
                e,
                { name: "RSA-PSS", hash: { name: "SHA-256" } },
                !1,
                ["sign"],
              )
            }
            async jwkToPublicCryptoKey(e) {
              return this.driver.importKey(
                "jwk",
                e,
                { name: "RSA-PSS", hash: { name: "SHA-256" } },
                !1,
                ["verify"],
              )
            }
            detectWebCrypto() {
              if ("undefined" == typeof crypto) return !1
              let e = crypto?.subtle
              return (
                void 0 !== e &&
                ["generateKey", "importKey", "exportKey", "digest", "sign"].every(
                  (t) => "function" == typeof e[t],
                )
              )
            }
            async encrypt(e, t, r) {
              let s = await this.driver.importKey(
                  "raw",
                  "string" == typeof t ? n.stringToBuffer(t) : t,
                  { name: "PBKDF2", length: 32 },
                  !1,
                  ["deriveKey"],
                ),
                a = await this.driver.deriveKey(
                  {
                    name: "PBKDF2",
                    salt: r ? n.stringToBuffer(r) : n.stringToBuffer("salt"),
                    iterations: 1e5,
                    hash: "SHA-256",
                  },
                  s,
                  { name: "AES-CBC", length: 256 },
                  !1,
                  ["encrypt", "decrypt"],
                ),
                o = new Uint8Array(16)
              crypto.getRandomValues(o)
              let i = await this.driver.encrypt({ name: "AES-CBC", iv: o }, a, e)
              return n.concatBuffers([o, i])
            }
            async decrypt(e, t, r) {
              let s = await this.driver.importKey(
                  "raw",
                  "string" == typeof t ? n.stringToBuffer(t) : t,
                  { name: "PBKDF2", length: 32 },
                  !1,
                  ["deriveKey"],
                ),
                a = await this.driver.deriveKey(
                  {
                    name: "PBKDF2",
                    salt: r ? n.stringToBuffer(r) : n.stringToBuffer("salt"),
                    iterations: 1e5,
                    hash: "SHA-256",
                  },
                  s,
                  { name: "AES-CBC", length: 256 },
                  !1,
                  ["encrypt", "decrypt"],
                ),
                o = e.slice(0, 16),
                i = await this.driver.decrypt({ name: "AES-CBC", iv: o }, a, e.slice(16))
              return n.concatBuffers([i])
            }
          }
        },
        { cca6f4dd88f0c030: "g1Mao" },
      ],
      g1Mao: [
        function (e, t, r) {
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.b64UrlDecode =
              r.b64UrlEncode =
              r.bufferTob64Url =
              r.bufferTob64 =
              r.b64UrlToBuffer =
              r.stringToB64Url =
              r.stringToBuffer =
              r.bufferToString =
              r.b64UrlToString =
              r.concatBuffers =
                void 0)
          let n = e("e94bb6d56e381ded")
          function s(e) {
            return new TextDecoder("utf-8", { fatal: !0 }).decode(e)
          }
          function a(e) {
            return new TextEncoder().encode(e)
          }
          function o(e) {
            return new Uint8Array(n.toByteArray(c(e)))
          }
          function i(e) {
            return n.fromByteArray(new Uint8Array(e))
          }
          function l(e) {
            return u(i(e))
          }
          function u(e) {
            try {
              return e.replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "")
            } catch (e) {
              throw Error("Failed to encode string", { cause: e })
            }
          }
          function c(e) {
            try {
              let t
              return (
                (t =
                  (e = e.replace(/\-/g, "+").replace(/\_/g, "/")).length % 4 == 0
                    ? 0
                    : 4 - (e.length % 4)),
                e.concat("=".repeat(t))
              )
            } catch (e) {
              throw Error("Failed to decode string", { cause: e })
            }
          }
          ;(r.concatBuffers = function (e) {
            let t = 0
            for (let r = 0; r < e.length; r++) t += e[r].byteLength
            let r = new Uint8Array(t),
              n = 0
            r.set(new Uint8Array(e[0]), n), (n += e[0].byteLength)
            for (let t = 1; t < e.length; t++)
              r.set(new Uint8Array(e[t]), n), (n += e[t].byteLength)
            return r
          }),
            (r.b64UrlToString = function (e) {
              return s(o(e))
            }),
            (r.bufferToString = s),
            (r.stringToBuffer = a),
            (r.stringToB64Url = function (e) {
              return l(a(e))
            }),
            (r.b64UrlToBuffer = o),
            (r.bufferTob64 = i),
            (r.bufferTob64Url = l),
            (r.b64UrlEncode = u),
            (r.b64UrlDecode = c)
        },
        { e94bb6d56e381ded: "2pFqn" },
      ],
      "2pFqn": [
        function (e, t, r) {
          ;(r.byteLength = function (e) {
            var t = u(e),
              r = t[0],
              n = t[1]
            return ((r + n) * 3) / 4 - n
          }),
            (r.toByteArray = function (e) {
              var t,
                r,
                n = u(e),
                o = n[0],
                i = n[1],
                l = new a(((o + i) * 3) / 4 - i),
                c = 0,
                f = i > 0 ? o - 4 : o
              for (r = 0; r < f; r += 4)
                (t =
                  (s[e.charCodeAt(r)] << 18) |
                  (s[e.charCodeAt(r + 1)] << 12) |
                  (s[e.charCodeAt(r + 2)] << 6) |
                  s[e.charCodeAt(r + 3)]),
                  (l[c++] = (t >> 16) & 255),
                  (l[c++] = (t >> 8) & 255),
                  (l[c++] = 255 & t)
              return (
                2 === i &&
                  ((t = (s[e.charCodeAt(r)] << 2) | (s[e.charCodeAt(r + 1)] >> 4)),
                  (l[c++] = 255 & t)),
                1 === i &&
                  ((t =
                    (s[e.charCodeAt(r)] << 10) |
                    (s[e.charCodeAt(r + 1)] << 4) |
                    (s[e.charCodeAt(r + 2)] >> 2)),
                  (l[c++] = (t >> 8) & 255),
                  (l[c++] = 255 & t)),
                l
              )
            }),
            (r.fromByteArray = function (e) {
              for (var t, r = e.length, s = r % 3, a = [], o = 0, i = r - s; o < i; o += 16383)
                a.push(
                  (function (e, t, r) {
                    for (var s, a = [], o = t; o < r; o += 3)
                      a.push(
                        n[
                          ((s =
                            ((e[o] << 16) & 16711680) +
                            ((e[o + 1] << 8) & 65280) +
                            (255 & e[o + 2])) >>
                            18) &
                            63
                        ] +
                          n[(s >> 12) & 63] +
                          n[(s >> 6) & 63] +
                          n[63 & s],
                      )
                    return a.join("")
                  })(e, o, o + 16383 > i ? i : o + 16383),
                )
              return (
                1 === s
                  ? a.push(n[(t = e[r - 1]) >> 2] + n[(t << 4) & 63] + "==")
                  : 2 === s &&
                    a.push(
                      n[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] +
                        n[(t >> 4) & 63] +
                        n[(t << 2) & 63] +
                        "=",
                    ),
                a.join("")
              )
            })
          for (
            var n = [],
              s = [],
              a = "undefined" != typeof Uint8Array ? Uint8Array : Array,
              o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              i = 0,
              l = o.length;
            i < l;
            ++i
          )
            (n[i] = o[i]), (s[o.charCodeAt(i)] = i)
          function u(e) {
            var t = e.length
            if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4")
            var r = e.indexOf("=")
            ;-1 === r && (r = t)
            var n = r === t ? 0 : 4 - (r % 4)
            return [r, n]
          }
          ;(s["-".charCodeAt(0)] = 62), (s["_".charCodeAt(0)] = 63)
        },
        {},
      ],
      iWBHa: [
        function (e, t, r) {
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = class {
              api
              constructor(e) {
                this.api = e
              }
              getInfo() {
                return this.api.get("info").then((e) => e.data)
              }
              getPeers() {
                return this.api.get("peers").then((e) => e.data)
              }
            })
        },
        {},
      ],
      luoZI: [
        function (e, t, r) {
          Object.defineProperty(r, "__esModule", { value: !0 })
          let n = e("19d70b1c4db3933a"),
            s = e("52fe70980f02d21c"),
            a = e("8a41f74730f3e4d5"),
            o = e("14c8805a1b70b515")
          e("c1f334b584f111b7"),
            (r.default = class {
              api
              crypto
              chunks
              constructor(e, t, r) {
                ;(this.api = e), (this.crypto = t), (this.chunks = r)
              }
              async getTransactionAnchor() {
                let e = await this.api.get("tx_anchor")
                if (!e.data.match(/^[a-z0-9_-]{43,}/i) || !e.ok)
                  throw Error(
                    `Could not getTransactionAnchor. Received: ${e.data}. Status: ${e.status}, ${e.statusText}`,
                  )
                return e.data
              }
              async getPrice(e, t) {
                let r = t ? `price/${e}/${t}` : `price/${e}`,
                  n = await this.api.get(r)
                if (!/^\d+$/.test(n.data) || !n.ok)
                  throw Error(
                    `Could not getPrice. Received: ${n.data}. Status: ${n.status}, ${n.statusText}`,
                  )
                return n.data
              }
              async get(e) {
                let t = await this.api.get(`tx/${e}`)
                if (200 == t.status) {
                  let r = parseInt(t.data.data_size)
                  if (t.data.format >= 2 && r > 0 && r <= 12582912) {
                    let r = await this.getData(e)
                    return new s.default({ ...t.data, data: r })
                  }
                  return new s.default({ ...t.data, format: t.data.format || 1 })
                }
                if (404 == t.status) throw new n.default("TX_NOT_FOUND")
                if (410 == t.status) throw new n.default("TX_FAILED")
                throw new n.default("TX_INVALID")
              }
              fromRaw(e) {
                return new s.default(e)
              }
              async search(e, t) {
                return this.api
                  .post("arql", { op: "equals", expr1: e, expr2: t })
                  .then((e) => (e.data ? e.data : []))
              }
              getStatus(e) {
                return this.api
                  .get(`tx/${e}/status`)
                  .then((e) =>
                    200 == e.status
                      ? { status: 200, confirmed: e.data }
                      : { status: e.status, confirmed: null },
                  )
              }
              async getData(e, t) {
                let r
                try {
                  r = await this.chunks.downloadChunkedData(e)
                } catch (t) {
                  console.error(`Error while trying to download chunked data for ${e}`),
                    console.error(t)
                }
                if (!r) {
                  console.warn(`Falling back to gateway cache for ${e}`)
                  try {
                    let {
                      data: t,
                      ok: n,
                      status: s,
                      statusText: a,
                    } = await this.api.get(`/${e}`, { responseType: "arraybuffer" })
                    if (!n)
                      throw Error("Bad http status code", { cause: { status: s, statusText: a } })
                    r = t
                  } catch (t) {
                    console.error(
                      `Error while trying to download contiguous data from gateway cache for ${e}`,
                    ),
                      console.error(t)
                  }
                }
                if (!r) throw Error(`${e} data was not found!`)
                return t && t.decode && !t.string
                  ? r
                  : t && t.decode && t.string
                    ? a.bufferToString(r)
                    : a.bufferTob64Url(r)
              }
              async sign(e, t, r) {
                let n
                let s =
                    "object" == typeof t &&
                    ((n = !0),
                    ["n", "e", "d", "p", "q", "dp", "dq", "qi"].map((e) => !(e in t) && (n = !1)),
                    n),
                  o = "object" == typeof arweaveWallet
                if (s || o) {
                  if (s) {
                    e.setOwner(t.n)
                    let n = await e.getSignatureData(),
                      s = await this.crypto.sign(t, n, r),
                      o = await this.crypto.hash(s)
                    e.setSignature({
                      id: a.bufferTob64Url(o),
                      owner: t.n,
                      signature: a.bufferTob64Url(s),
                    })
                  } else if (o) {
                    try {
                      let e = await arweaveWallet.getPermissions()
                      e.includes("SIGN_TRANSACTION") ||
                        (await arweaveWallet.connect(["SIGN_TRANSACTION"]))
                    } catch {}
                    let t = await arweaveWallet.sign(e, r)
                    e.setSignature({
                      id: t.id,
                      owner: t.owner,
                      reward: t.reward,
                      tags: t.tags,
                      signature: t.signature,
                    })
                  } else throw Error("An error occurred while signing. Check wallet is valid")
                } else throw Error("No valid JWK or external wallet found to sign transaction.")
              }
              async verify(e) {
                let t = await e.getSignatureData(),
                  r = e.get("signature", { decode: !0, string: !1 }),
                  n = a.bufferTob64Url(await this.crypto.hash(r))
                if (e.id !== n)
                  throw Error(
                    "Invalid transaction signature or ID! The transaction ID doesn't match the expected SHA-256 hash of the signature.",
                  )
                return this.crypto.verify(e.owner, t, r)
              }
              async post(e) {
                if (
                  ("string" == typeof e
                    ? (e = new s.default(JSON.parse(e)))
                    : "function" == typeof e.readInt32BE
                      ? (e = new s.default(JSON.parse(e.toString())))
                      : "object" != typeof e || e instanceof s.default || (e = new s.default(e)),
                  !(e instanceof s.default))
                )
                  throw Error("Must be Transaction object")
                e.chunks || (await e.prepareChunks(e.data))
                let t = await this.getUploader(e, e.data)
                try {
                  for (; !t.isComplete; ) await t.uploadChunk()
                } catch (e) {
                  if (t.lastResponseStatus > 0)
                    return {
                      status: t.lastResponseStatus,
                      statusText: t.lastResponseError,
                      data: { error: t.lastResponseError },
                    }
                  throw e
                }
                return { status: 200, statusText: "OK", data: {} }
              }
              async getUploader(e, t) {
                let r
                if ((t instanceof ArrayBuffer && (t = new Uint8Array(t)), e instanceof s.default)) {
                  if ((t || (t = e.data), !(t instanceof Uint8Array)))
                    throw Error("Data format is invalid")
                  e.chunks || (await e.prepareChunks(t)),
                    ((r = new o.TransactionUploader(this.api, e)).data && 0 !== r.data.length) ||
                      (r.data = t)
                } else {
                  if (
                    ("string" == typeof e &&
                      (e = await o.TransactionUploader.fromTransactionId(this.api, e)),
                    !t || !(t instanceof Uint8Array))
                  )
                    throw Error("Must provide data when resuming upload")
                  r = await o.TransactionUploader.fromSerialized(this.api, e, t)
                }
                return r
              }
              async *upload(e, t) {
                let r = await this.getUploader(e, t)
                for (; !r.isComplete; ) await r.uploadChunk(), yield r
                return r
              }
            })
        },
        {
          "19d70b1c4db3933a": "dCfpA",
          "52fe70980f02d21c": "eep0i",
          "8a41f74730f3e4d5": "g1Mao",
          "14c8805a1b70b515": "ipTXV",
          c1f334b584f111b7: "56gsG",
        },
      ],
      dCfpA: [
        function (e, t, r) {
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.getError = void 0),
            (r.default = class extends Error {
              type
              response
              constructor(e, t = {}) {
                t.message ? super(t.message) : super(),
                  (this.type = e),
                  (this.response = t.response)
              }
              getType() {
                return this.type
              }
            }),
            (r.getError = function (e) {
              let t = e.data
              if ("string" == typeof e.data)
                try {
                  t = JSON.parse(e.data)
                } catch (e) {}
              if (e.data instanceof ArrayBuffer || e.data instanceof Uint8Array)
                try {
                  t = JSON.parse(t.toString())
                } catch (e) {}
              return t ? t.error || t : e.statusText || "unknown"
            })
        },
        {},
      ],
      eep0i: [
        function (e, t, r) {
          Object.defineProperty(r, "__esModule", { value: !0 }), (r.Tag = void 0)
          let n = e("bdf95f731612d918"),
            s = e("d3e91559d93cfd6a"),
            a = e("d8919f7b2741f07b")
          class o {
            get(e, t) {
              if (!Object.getOwnPropertyNames(this).includes(e))
                throw Error(`Field "${e}" is not a property of the Arweave Transaction class.`)
              if (this[e] instanceof Uint8Array)
                return t && t.decode && t.string
                  ? n.bufferToString(this[e])
                  : t && t.decode && !t.string
                    ? this[e]
                    : n.bufferTob64Url(this[e])
              if (this[e] instanceof Array) {
                if (t?.decode !== void 0 || t?.string !== void 0)
                  throw (
                    ("tags" === e && console.warn("Did you mean to use 'transaction[\"tags\"]' ?"),
                    Error("Cannot decode or stringify an array."))
                  )
                return this[e]
              }
              return t && !0 == t.decode
                ? t && t.string
                  ? n.b64UrlToString(this[e])
                  : n.b64UrlToBuffer(this[e])
                : this[e]
            }
          }
          class i extends o {
            name
            value
            constructor(e, t, r = !1) {
              super(), (this.name = e), (this.value = t)
            }
          }
          r.Tag = i
          class l extends o {
            format = 2
            id = ""
            last_tx = ""
            owner = ""
            tags = []
            target = ""
            quantity = "0"
            data_size = "0"
            data = new Uint8Array()
            data_root = ""
            reward = "0"
            signature = ""
            chunks
            constructor(e = {}) {
              super(),
                Object.assign(this, e),
                "string" == typeof this.data && (this.data = n.b64UrlToBuffer(this.data)),
                e.tags && (this.tags = e.tags.map((e) => new i(e.name, e.value)))
            }
            addTag(e, t) {
              this.tags.push(new i(n.stringToB64Url(e), n.stringToB64Url(t)))
            }
            toJSON() {
              return {
                format: this.format,
                id: this.id,
                last_tx: this.last_tx,
                owner: this.owner,
                tags: this.tags,
                target: this.target,
                quantity: this.quantity,
                data: n.bufferTob64Url(this.data),
                data_size: this.data_size,
                data_root: this.data_root,
                data_tree: this.data_tree,
                reward: this.reward,
                signature: this.signature,
              }
            }
            setOwner(e) {
              this.owner = e
            }
            setSignature({ id: e, owner: t, reward: r, tags: n, signature: s }) {
              ;(this.id = e),
                (this.owner = t),
                r && (this.reward = r),
                n && (this.tags = n),
                (this.signature = s)
            }
            async prepareChunks(e) {
              !this.chunks &&
                e.byteLength > 0 &&
                ((this.chunks = await (0, a.generateTransactionChunks)(e)),
                (this.data_root = n.bufferTob64Url(this.chunks.data_root))),
                this.chunks ||
                  0 !== e.byteLength ||
                  ((this.chunks = { chunks: [], data_root: new Uint8Array(), proofs: [] }),
                  (this.data_root = ""))
            }
            getChunk(e, t) {
              if (!this.chunks) throw Error("Chunks have not been prepared")
              let r = this.chunks.proofs[e],
                s = this.chunks.chunks[e]
              return {
                data_root: this.data_root,
                data_size: this.data_size,
                data_path: n.bufferTob64Url(r.proof),
                offset: r.offset.toString(),
                chunk: n.bufferTob64Url(t.slice(s.minByteRange, s.maxByteRange)),
              }
            }
            async getSignatureData() {
              switch (this.format) {
                case 1:
                  let e = this.tags.reduce(
                    (e, t) =>
                      n.concatBuffers([
                        e,
                        t.get("name", { decode: !0, string: !1 }),
                        t.get("value", { decode: !0, string: !1 }),
                      ]),
                    new Uint8Array(),
                  )
                  return n.concatBuffers([
                    this.get("owner", { decode: !0, string: !1 }),
                    this.get("target", { decode: !0, string: !1 }),
                    this.get("data", { decode: !0, string: !1 }),
                    n.stringToBuffer(this.quantity),
                    n.stringToBuffer(this.reward),
                    this.get("last_tx", { decode: !0, string: !1 }),
                    e,
                  ])
                case 2:
                  this.data_root || (await this.prepareChunks(this.data))
                  let t = this.tags.map((e) => [
                    e.get("name", { decode: !0, string: !1 }),
                    e.get("value", { decode: !0, string: !1 }),
                  ])
                  return await (0, s.default)([
                    n.stringToBuffer(this.format.toString()),
                    this.get("owner", { decode: !0, string: !1 }),
                    this.get("target", { decode: !0, string: !1 }),
                    n.stringToBuffer(this.quantity),
                    n.stringToBuffer(this.reward),
                    this.get("last_tx", { decode: !0, string: !1 }),
                    t,
                    n.stringToBuffer(this.data_size),
                    this.get("data_root", { decode: !0, string: !1 }),
                  ])
                default:
                  throw Error(`Unexpected transaction format: ${this.format}`)
              }
            }
          }
          r.default = l
        },
        { bdf95f731612d918: "g1Mao", d3e91559d93cfd6a: "2ePMB", d8919f7b2741f07b: "Ezr1N" },
      ],
      "2ePMB": [
        function (e, t, r) {
          Object.defineProperty(r, "__esModule", { value: !0 })
          let n = e("cb0a218793837510")
          async function s(e) {
            if (Array.isArray(e)) {
              let t = n.default.utils.concatBuffers([
                n.default.utils.stringToBuffer("list"),
                n.default.utils.stringToBuffer(e.length.toString()),
              ])
              return await a(e, await n.default.crypto.hash(t, "SHA-384"))
            }
            let t = n.default.utils.concatBuffers([
                n.default.utils.stringToBuffer("blob"),
                n.default.utils.stringToBuffer(e.byteLength.toString()),
              ]),
              r = n.default.utils.concatBuffers([
                await n.default.crypto.hash(t, "SHA-384"),
                await n.default.crypto.hash(e, "SHA-384"),
              ])
            return await n.default.crypto.hash(r, "SHA-384")
          }
          async function a(e, t) {
            if (e.length < 1) return t
            let r = n.default.utils.concatBuffers([t, await s(e[0])]),
              o = await n.default.crypto.hash(r, "SHA-384")
            return await a(e.slice(1), o)
          }
          r.default = s
        },
        { cb0a218793837510: "aW2qG" },
      ],
      Ezr1N: [
        function (e, t, r) {
          var n = e("ec5842c8de4d51e").Buffer
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.debug =
              r.validatePath =
              r.arrayCompare =
              r.bufferToInt =
              r.intToBuffer =
              r.arrayFlatten =
              r.generateProofs =
              r.buildLayers =
              r.generateTransactionChunks =
              r.generateTree =
              r.computeRootHash =
              r.generateLeaves =
              r.chunkData =
              r.MIN_CHUNK_SIZE =
              r.MAX_CHUNK_SIZE =
                void 0)
          let s = e("22f262738ba66ec3"),
            a = e("882445f08a018385")
          async function o(e) {
            let t = [],
              n = e,
              a = 0
            for (; n.byteLength >= r.MAX_CHUNK_SIZE; ) {
              let e = r.MAX_CHUNK_SIZE,
                o = n.byteLength - r.MAX_CHUNK_SIZE
              o > 0 && o < r.MIN_CHUNK_SIZE && (e = Math.ceil(n.byteLength / 2))
              let i = n.slice(0, e),
                l = await s.default.crypto.hash(i)
              ;(a += i.byteLength),
                t.push({ dataHash: l, minByteRange: a - i.byteLength, maxByteRange: a }),
                (n = n.slice(e))
            }
            return (
              t.push({
                dataHash: await s.default.crypto.hash(n),
                minByteRange: a,
                maxByteRange: a + n.byteLength,
              }),
              t
            )
          }
          async function i(e) {
            return Promise.all(
              e.map(async ({ dataHash: e, minByteRange: t, maxByteRange: r }) => ({
                type: "leaf",
                id: await g(await Promise.all([g(e), g(y(r))])),
                dataHash: e,
                minByteRange: t,
                maxByteRange: r,
              })),
            )
          }
          async function l(e) {
            let t = await u(e)
            return t.id
          }
          async function u(e) {
            let t = await f(await i(await o(e)))
            return t
          }
          async function c(e) {
            let t = await o(e),
              r = await i(t),
              n = await f(r),
              s = await h(n),
              a = t.slice(-1)[0]
            return (
              a.maxByteRange - a.minByteRange == 0 &&
                (t.splice(t.length - 1, 1), s.splice(s.length - 1, 1)),
              { data_root: n.id, chunks: t, proofs: s }
            )
          }
          async function f(e, t = 0) {
            if (e.length < 2) {
              let t = e[0]
              return t
            }
            let r = []
            for (let t = 0; t < e.length; t += 2) r.push(await p(e[t], e[t + 1]))
            return f(r, t + 1)
          }
          function h(e) {
            let t = (function e(t, r = new Uint8Array(), n = 0) {
              if ("leaf" == t.type)
                return {
                  offset: t.maxByteRange - 1,
                  proof: (0, a.concatBuffers)([r, t.dataHash, y(t.maxByteRange)]),
                }
              if ("branch" == t.type) {
                let s = (0, a.concatBuffers)([r, t.leftChild.id, t.rightChild.id, y(t.byteRange)])
                return [e(t.leftChild, s, n + 1), e(t.rightChild, s, n + 1)]
              }
              throw Error("Unexpected node type")
            })(e)
            return Array.isArray(t) ? d(t) : [t]
          }
          function d(e) {
            let t = []
            return (
              e.forEach((e) => {
                Array.isArray(e) ? t.push(...d(e)) : t.push(e)
              }),
              t
            )
          }
          async function p(e, t) {
            return t
              ? {
                  type: "branch",
                  id: await g([await g(e.id), await g(t.id), await g(y(e.maxByteRange))]),
                  byteRange: e.maxByteRange,
                  maxByteRange: t.maxByteRange,
                  leftChild: e,
                  rightChild: t,
                }
              : e
          }
          async function g(e) {
            return (
              Array.isArray(e) && (e = s.default.utils.concatBuffers(e)),
              new Uint8Array(await s.default.crypto.hash(e))
            )
          }
          function y(e) {
            let t = new Uint8Array(32)
            for (var r = t.length - 1; r >= 0; r--) {
              var n = e % 256
              ;(t[r] = n), (e = (e - n) / 256)
            }
            return t
          }
          function m(e) {
            let t = 0
            for (var r = 0; r < e.length; r++) (t *= 256), (t += e[r])
            return t
          }
          async function w(e, t, n, s, a) {
            if (s <= 0) return !1
            if (t >= s) return w(e, 0, s - 1, s, a)
            if (t < 0) return w(e, 0, 0, s, a)
            if (64 == a.length) {
              let t = a.slice(0, 32),
                o = a.slice(t.length, t.length + 32),
                i = await g([await g(t), await g(o)])
              return (
                !!(0, r.arrayCompare)(e, i) && {
                  offset: s - 1,
                  leftBound: n,
                  rightBound: s,
                  chunkSize: s - n,
                }
              )
            }
            let o = a.slice(0, 32),
              i = a.slice(o.length, o.length + 32),
              l = a.slice(o.length + i.length, o.length + i.length + 32),
              u = m(l),
              c = a.slice(o.length + i.length + l.length),
              f = await g([await g(o), await g(i), await g(l)])
            return (
              !!(0, r.arrayCompare)(e, f) &&
              (t < u ? await w(o, t, n, Math.min(s, u), c) : await w(i, t, Math.max(n, u), s, c))
            )
          }
          async function b(e, t = "") {
            if (e.byteLength < 1) return t
            let r = e.slice(0, 32),
              s = e.slice(r.length, r.length + 32),
              a = e.slice(r.length + s.length, r.length + s.length + 32),
              o = m(a),
              i = e.slice(r.length + s.length + a.length),
              l = await g([await g(r), await g(s), await g(a)]),
              u = `${t}
${JSON.stringify(n.from(r))},${JSON.stringify(n.from(s))},${o} => ${JSON.stringify(l)}`
            return b(i, u)
          }
          ;(r.MAX_CHUNK_SIZE = 262144),
            (r.MIN_CHUNK_SIZE = 32768),
            (r.chunkData = o),
            (r.generateLeaves = i),
            (r.computeRootHash = l),
            (r.generateTree = u),
            (r.generateTransactionChunks = c),
            (r.buildLayers = f),
            (r.generateProofs = h),
            (r.arrayFlatten = d),
            (r.intToBuffer = y),
            (r.bufferToInt = m),
            (r.arrayCompare = (e, t) => e.every((e, r) => t[r] === e)),
            (r.validatePath = w),
            (r.debug = b)
        },
        { ec5842c8de4d51e: "89Y7O", "22f262738ba66ec3": "aW2qG", "882445f08a018385": "g1Mao" },
      ],
      "89Y7O": [
        function (e, t, r) {
          var n,
            s,
            a = Object.create,
            o = Object.defineProperty,
            i = Object.getOwnPropertyDescriptor,
            l = Object.getOwnPropertyNames,
            u = Object.getPrototypeOf,
            c = Object.prototype.hasOwnProperty,
            f = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
            h = (e, t, r, n) => {
              if ((t && "object" == typeof t) || "function" == typeof t)
                for (let s of l(t))
                  c.call(e, s) ||
                    s === r ||
                    o(e, s, { get: () => t[s], enumerable: !(n = i(t, s)) || n.enumerable })
              return e
            },
            d = (e, t, r) => (
              (r = null != e ? a(u(e)) : {}),
              h(!t && e && e.__esModule ? r : o(r, "default", { value: e, enumerable: !0 }), e)
            ),
            p = f((e) => {
              ;(e.byteLength = function (e) {
                var t = i(e),
                  r = t[0],
                  n = t[1]
                return ((r + n) * 3) / 4 - n
              }),
                (e.toByteArray = function (e) {
                  var t,
                    r,
                    n = i(e),
                    o = n[0],
                    l = n[1],
                    u = new a(((o + l) * 3) / 4 - l),
                    c = 0,
                    f = l > 0 ? o - 4 : o
                  for (r = 0; r < f; r += 4)
                    (t =
                      (s[e.charCodeAt(r)] << 18) |
                      (s[e.charCodeAt(r + 1)] << 12) |
                      (s[e.charCodeAt(r + 2)] << 6) |
                      s[e.charCodeAt(r + 3)]),
                      (u[c++] = (t >> 16) & 255),
                      (u[c++] = (t >> 8) & 255),
                      (u[c++] = 255 & t)
                  return (
                    2 === l &&
                      ((t = (s[e.charCodeAt(r)] << 2) | (s[e.charCodeAt(r + 1)] >> 4)),
                      (u[c++] = 255 & t)),
                    1 === l &&
                      ((t =
                        (s[e.charCodeAt(r)] << 10) |
                        (s[e.charCodeAt(r + 1)] << 4) |
                        (s[e.charCodeAt(r + 2)] >> 2)),
                      (u[c++] = (t >> 8) & 255),
                      (u[c++] = 255 & t)),
                    u
                  )
                }),
                (e.fromByteArray = function (e) {
                  for (var t, r = e.length, s = r % 3, a = [], o = 0, i = r - s; o < i; o += 16383)
                    a.push(
                      (function (e, t, r) {
                        for (var s, a = [], o = t; o < r; o += 3)
                          a.push(
                            n[
                              ((s =
                                ((e[o] << 16) & 16711680) +
                                ((e[o + 1] << 8) & 65280) +
                                (255 & e[o + 2])) >>
                                18) &
                                63
                            ] +
                              n[(s >> 12) & 63] +
                              n[(s >> 6) & 63] +
                              n[63 & s],
                          )
                        return a.join("")
                      })(e, o, o + 16383 > i ? i : o + 16383),
                    )
                  return (
                    1 === s
                      ? a.push(n[(t = e[r - 1]) >> 2] + n[(t << 4) & 63] + "==")
                      : 2 === s &&
                        a.push(
                          n[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] +
                            n[(t >> 4) & 63] +
                            n[(t << 2) & 63] +
                            "=",
                        ),
                    a.join("")
                  )
                })
              var t,
                r,
                n = [],
                s = [],
                a = "u" > typeof Uint8Array ? Uint8Array : Array,
                o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
              for (t = 0, r = o.length; t < r; ++t) (n[t] = o[t]), (s[o.charCodeAt(t)] = t)
              function i(e) {
                var t = e.length
                if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4")
                var r = e.indexOf("=")
                ;-1 === r && (r = t)
                var n = r === t ? 0 : 4 - (r % 4)
                return [r, n]
              }
              ;(s["-".charCodeAt(0)] = 62), (s["_".charCodeAt(0)] = 63)
            }),
            g = f((e) => {
              ;(e.read = function (e, t, r, n, s) {
                var a,
                  o,
                  i = 8 * s - n - 1,
                  l = (1 << i) - 1,
                  u = l >> 1,
                  c = -7,
                  f = r ? s - 1 : 0,
                  h = r ? -1 : 1,
                  d = e[t + f]
                for (
                  f += h, a = d & ((1 << -c) - 1), d >>= -c, c += i;
                  c > 0;
                  a = 256 * a + e[t + f], f += h, c -= 8
                );
                for (
                  o = a & ((1 << -c) - 1), a >>= -c, c += n;
                  c > 0;
                  o = 256 * o + e[t + f], f += h, c -= 8
                );
                if (0 === a) a = 1 - u
                else {
                  if (a === l) return o ? NaN : (d ? -1 : 1) * (1 / 0)
                  ;(o += Math.pow(2, n)), (a -= u)
                }
                return (d ? -1 : 1) * o * Math.pow(2, a - n)
              }),
                (e.write = function (e, t, r, n, s, a) {
                  var o,
                    i,
                    l,
                    u = 8 * a - s - 1,
                    c = (1 << u) - 1,
                    f = c >> 1,
                    h = 23 === s ? 5960464477539062e-23 : 0,
                    d = n ? 0 : a - 1,
                    p = n ? 1 : -1,
                    g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0
                  for (
                    isNaN((t = Math.abs(t))) || t === 1 / 0
                      ? ((i = isNaN(t) ? 1 : 0), (o = c))
                      : ((o = Math.floor(Math.log(t) / Math.LN2)),
                        t * (l = Math.pow(2, -o)) < 1 && (o--, (l *= 2)),
                        o + f >= 1 ? (t += h / l) : (t += h * Math.pow(2, 1 - f)),
                        t * l >= 2 && (o++, (l /= 2)),
                        o + f >= c
                          ? ((i = 0), (o = c))
                          : o + f >= 1
                            ? ((i = (t * l - 1) * Math.pow(2, s)), (o += f))
                            : ((i = t * Math.pow(2, f - 1) * Math.pow(2, s)), (o = 0)));
                    s >= 8;
                    e[r + d] = 255 & i, d += p, i /= 256, s -= 8
                  );
                  for (
                    o = (o << s) | i, u += s;
                    u > 0;
                    e[r + d] = 255 & o, d += p, o /= 256, u -= 8
                  );
                  e[r + d - p] |= 128 * g
                })
            }),
            y = f((e) => {
              var t = p(),
                r = g(),
                n =
                  "function" == typeof Symbol && "function" == typeof Symbol.for
                    ? Symbol.for("nodejs.util.inspect.custom")
                    : null
              function s(e) {
                if (e > 2147483647)
                  throw RangeError('The value "' + e + '" is invalid for option "size"')
                let t = new Uint8Array(e)
                return Object.setPrototypeOf(t, a.prototype), t
              }
              function a(e, t, r) {
                if ("number" == typeof e) {
                  if ("string" == typeof t)
                    throw TypeError(
                      'The "string" argument must be of type string. Received type number',
                    )
                  return l(e)
                }
                return o(e, t, r)
              }
              function o(e, t, r) {
                if ("string" == typeof e)
                  return (function (e, t) {
                    if ((("string" != typeof t || "" === t) && (t = "utf8"), !a.isEncoding(t)))
                      throw TypeError("Unknown encoding: " + t)
                    let r = 0 | h(e, t),
                      n = s(r),
                      o = n.write(e, t)
                    return o !== r && (n = n.slice(0, o)), n
                  })(e, t)
                if (ArrayBuffer.isView(e))
                  return (function (e) {
                    if (P(e, Uint8Array)) {
                      let t = new Uint8Array(e)
                      return c(t.buffer, t.byteOffset, t.byteLength)
                    }
                    return u(e)
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
                  return c(e, t, r)
                if ("number" == typeof e)
                  throw TypeError(
                    'The "value" argument must not be of type number. Received type number',
                  )
                let n = e.valueOf && e.valueOf()
                if (null != n && n !== e) return a.from(n, t, r)
                let o = (function (e) {
                  var t
                  if (a.isBuffer(e)) {
                    let t = 0 | f(e.length),
                      r = s(t)
                    return 0 === r.length || e.copy(r, 0, 0, t), r
                  }
                  return void 0 !== e.length
                    ? "number" != typeof e.length || (t = e.length) != t
                      ? s(0)
                      : u(e)
                    : "Buffer" === e.type && Array.isArray(e.data)
                      ? u(e.data)
                      : void 0
                })(e)
                if (o) return o
                if (
                  "u" > typeof Symbol &&
                  null != Symbol.toPrimitive &&
                  "function" == typeof e[Symbol.toPrimitive]
                )
                  return a.from(e[Symbol.toPrimitive]("string"), t, r)
                throw TypeError(
                  "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                    typeof e,
                )
              }
              function i(e) {
                if ("number" != typeof e) throw TypeError('"size" argument must be of type number')
                if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"')
              }
              function l(e) {
                return i(e), s(e < 0 ? 0 : 0 | f(e))
              }
              function u(e) {
                let t = e.length < 0 ? 0 : 0 | f(e.length),
                  r = s(t)
                for (let n = 0; n < t; n += 1) r[n] = 255 & e[n]
                return r
              }
              function c(e, t, r) {
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
                    a.prototype,
                  ),
                  n
                )
              }
              function f(e) {
                if (e >= 2147483647)
                  throw RangeError(
                    "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes",
                  )
                return 0 | e
              }
              function h(e, t) {
                if (a.isBuffer(e)) return e.length
                if (ArrayBuffer.isView(e) || P(e, ArrayBuffer)) return e.byteLength
                if ("string" != typeof e)
                  throw TypeError(
                    'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                      typeof e,
                  )
                let r = e.length,
                  n = arguments.length > 2 && !0 === arguments[2]
                if (!n && 0 === r) return 0
                let s = !1
                for (;;)
                  switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                      return r
                    case "utf8":
                    case "utf-8":
                      return U(e).length
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return 2 * r
                    case "hex":
                      return r >>> 1
                    case "base64":
                      return B(e).length
                    default:
                      if (s) return n ? -1 : U(e).length
                      ;(t = ("" + t).toLowerCase()), (s = !0)
                  }
              }
              function d(e, r, n) {
                let s = !1
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
                        let s = ""
                        for (let n = t; n < r; ++n) s += F[e[n]]
                        return s
                      })(this, r, n)
                    case "utf8":
                    case "utf-8":
                      return b(this, r, n)
                    case "ascii":
                      return (function (e, t, r) {
                        let n = ""
                        r = Math.min(e.length, r)
                        for (let s = t; s < r; ++s) n += String.fromCharCode(127 & e[s])
                        return n
                      })(this, r, n)
                    case "latin1":
                    case "binary":
                      return (function (e, t, r) {
                        let n = ""
                        r = Math.min(e.length, r)
                        for (let s = t; s < r; ++s) n += String.fromCharCode(e[s])
                        return n
                      })(this, r, n)
                    case "base64":
                      var a, o
                      return (
                        (a = r),
                        (o = n),
                        0 === a && o === this.length
                          ? t.fromByteArray(this)
                          : t.fromByteArray(this.slice(a, o))
                      )
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return (function (e, t, r) {
                        let n = e.slice(t, r),
                          s = ""
                        for (let e = 0; e < n.length - 1; e += 2)
                          s += String.fromCharCode(n[e] + 256 * n[e + 1])
                        return s
                      })(this, r, n)
                    default:
                      if (s) throw TypeError("Unknown encoding: " + e)
                      ;(e = (e + "").toLowerCase()), (s = !0)
                  }
              }
              function y(e, t, r) {
                let n = e[t]
                ;(e[t] = e[r]), (e[r] = n)
              }
              function m(e, t, r, n, s) {
                var o
                if (0 === e.length) return -1
                if (
                  ("string" == typeof r
                    ? ((n = r), (r = 0))
                    : r > 2147483647
                      ? (r = 2147483647)
                      : r < -2147483648 && (r = -2147483648),
                  (o = r = +r) != o && (r = s ? 0 : e.length - 1),
                  r < 0 && (r = e.length + r),
                  r >= e.length)
                ) {
                  if (s) return -1
                  r = e.length - 1
                } else if (r < 0) {
                  if (!s) return -1
                  r = 0
                }
                if (("string" == typeof t && (t = a.from(t, n)), a.isBuffer(t)))
                  return 0 === t.length ? -1 : w(e, t, r, n, s)
                if ("number" == typeof t)
                  return (
                    (t &= 255),
                    "function" == typeof Uint8Array.prototype.indexOf
                      ? s
                        ? Uint8Array.prototype.indexOf.call(e, t, r)
                        : Uint8Array.prototype.lastIndexOf.call(e, t, r)
                      : w(e, [t], r, n, s)
                  )
                throw TypeError("val must be string, number or Buffer")
              }
              function w(e, t, r, n, s) {
                let a,
                  o = 1,
                  i = e.length,
                  l = t.length
                if (
                  void 0 !== n &&
                  ("ucs2" === (n = String(n).toLowerCase()) ||
                    "ucs-2" === n ||
                    "utf16le" === n ||
                    "utf-16le" === n)
                ) {
                  if (e.length < 2 || t.length < 2) return -1
                  ;(o = 2), (i /= 2), (l /= 2), (r /= 2)
                }
                function u(e, t) {
                  return 1 === o ? e[t] : e.readUInt16BE(t * o)
                }
                if (s) {
                  let n = -1
                  for (a = r; a < i; a++)
                    if (u(e, a) === u(t, -1 === n ? 0 : a - n)) {
                      if ((-1 === n && (n = a), a - n + 1 === l)) return n * o
                    } else -1 !== n && (a -= a - n), (n = -1)
                } else
                  for (r + l > i && (r = i - l), a = r; a >= 0; a--) {
                    let r = !0
                    for (let n = 0; n < l; n++)
                      if (u(e, a + n) !== u(t, n)) {
                        r = !1
                        break
                      }
                    if (r) return a
                  }
                return -1
              }
              function b(e, t, r) {
                r = Math.min(e.length, r)
                let n = [],
                  s = t
                for (; s < r; ) {
                  let t = e[s],
                    a = null,
                    o = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1
                  if (s + o <= r) {
                    let r, n, i, l
                    switch (o) {
                      case 1:
                        t < 128 && (a = t)
                        break
                      case 2:
                        ;(192 & (r = e[s + 1])) == 128 &&
                          (l = ((31 & t) << 6) | (63 & r)) > 127 &&
                          (a = l)
                        break
                      case 3:
                        ;(r = e[s + 1]),
                          (n = e[s + 2]),
                          (192 & r) == 128 &&
                            (192 & n) == 128 &&
                            (l = ((15 & t) << 12) | ((63 & r) << 6) | (63 & n)) > 2047 &&
                            (l < 55296 || l > 57343) &&
                            (a = l)
                        break
                      case 4:
                        ;(r = e[s + 1]),
                          (n = e[s + 2]),
                          (i = e[s + 3]),
                          (192 & r) == 128 &&
                            (192 & n) == 128 &&
                            (192 & i) == 128 &&
                            (l = ((15 & t) << 18) | ((63 & r) << 12) | ((63 & n) << 6) | (63 & i)) >
                              65535 &&
                            l < 1114112 &&
                            (a = l)
                    }
                  }
                  null === a
                    ? ((a = 65533), (o = 1))
                    : a > 65535 &&
                      ((a -= 65536), n.push(((a >>> 10) & 1023) | 55296), (a = 56320 | (1023 & a))),
                    n.push(a),
                    (s += o)
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
              function v(e, t, r) {
                if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint")
                if (e + t > r) throw RangeError("Trying to access beyond buffer length")
              }
              function A(e, t, r, n, s, o) {
                if (!a.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance')
                if (t > s || t < o) throw RangeError('"value" argument is out of bounds')
                if (r + n > e.length) throw RangeError("Index out of range")
              }
              function E(e, t, r, n, s) {
                T(t, n, s, e, r, 7)
                let a = Number(t & BigInt(4294967295))
                ;(e[r++] = a),
                  (a >>= 8),
                  (e[r++] = a),
                  (a >>= 8),
                  (e[r++] = a),
                  (a >>= 8),
                  (e[r++] = a)
                let o = Number((t >> BigInt(32)) & BigInt(4294967295))
                return (
                  (e[r++] = o),
                  (o >>= 8),
                  (e[r++] = o),
                  (o >>= 8),
                  (e[r++] = o),
                  (o >>= 8),
                  (e[r++] = o),
                  r
                )
              }
              function _(e, t, r, n, s) {
                T(t, n, s, e, r, 7)
                let a = Number(t & BigInt(4294967295))
                ;(e[r + 7] = a),
                  (a >>= 8),
                  (e[r + 6] = a),
                  (a >>= 8),
                  (e[r + 5] = a),
                  (a >>= 8),
                  (e[r + 4] = a)
                let o = Number((t >> BigInt(32)) & BigInt(4294967295))
                return (
                  (e[r + 3] = o),
                  (o >>= 8),
                  (e[r + 2] = o),
                  (o >>= 8),
                  (e[r + 1] = o),
                  (o >>= 8),
                  (e[r] = o),
                  r + 8
                )
              }
              function S(e, t, r, n, s, a) {
                if (r + n > e.length || r < 0) throw RangeError("Index out of range")
              }
              function j(e, t, n, s, a) {
                return (
                  (t = +t),
                  (n >>>= 0),
                  a || S(e, t, n, 4, 34028234663852886e22, -34028234663852886e22),
                  r.write(e, t, n, s, 23, 4),
                  n + 4
                )
              }
              function O(e, t, n, s, a) {
                return (
                  (t = +t),
                  (n >>>= 0),
                  a || S(e, t, n, 8, 17976931348623157e292, -17976931348623157e292),
                  r.write(e, t, n, s, 52, 8),
                  n + 8
                )
              }
              ;(e.Buffer = a),
                (e.SlowBuffer = function (e) {
                  return +e != e && (e = 0), a.alloc(+e)
                }),
                (e.INSPECT_MAX_BYTES = 50),
                (e.kMaxLength = 2147483647),
                (a.TYPED_ARRAY_SUPPORT = (function () {
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
                !a.TYPED_ARRAY_SUPPORT &&
                  "u" > typeof console &&
                  "function" == typeof console.error &&
                  console.error(
                    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
                  ),
                Object.defineProperty(a.prototype, "parent", {
                  enumerable: !0,
                  get: function () {
                    if (a.isBuffer(this)) return this.buffer
                  },
                }),
                Object.defineProperty(a.prototype, "offset", {
                  enumerable: !0,
                  get: function () {
                    if (a.isBuffer(this)) return this.byteOffset
                  },
                }),
                (a.poolSize = 8192),
                (a.from = function (e, t, r) {
                  return o(e, t, r)
                }),
                Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
                Object.setPrototypeOf(a, Uint8Array),
                (a.alloc = function (e, t, r) {
                  return (
                    i(e),
                    e <= 0
                      ? s(e)
                      : void 0 !== t
                        ? "string" == typeof r
                          ? s(e).fill(t, r)
                          : s(e).fill(t)
                        : s(e)
                  )
                }),
                (a.allocUnsafe = function (e) {
                  return l(e)
                }),
                (a.allocUnsafeSlow = function (e) {
                  return l(e)
                }),
                (a.isBuffer = function (e) {
                  return null != e && !0 === e._isBuffer && e !== a.prototype
                }),
                (a.compare = function (e, t) {
                  if (
                    (P(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
                    P(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
                    !a.isBuffer(e) || !a.isBuffer(t))
                  )
                    throw TypeError(
                      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
                    )
                  if (e === t) return 0
                  let r = e.length,
                    n = t.length
                  for (let s = 0, a = Math.min(r, n); s < a; ++s)
                    if (e[s] !== t[s]) {
                      ;(r = e[s]), (n = t[s])
                      break
                    }
                  return r < n ? -1 : n < r ? 1 : 0
                }),
                (a.isEncoding = function (e) {
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
                (a.concat = function (e, t) {
                  let r
                  if (!Array.isArray(e))
                    throw TypeError('"list" argument must be an Array of Buffers')
                  if (0 === e.length) return a.alloc(0)
                  if (void 0 === t) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length
                  let n = a.allocUnsafe(t),
                    s = 0
                  for (r = 0; r < e.length; ++r) {
                    let t = e[r]
                    if (P(t, Uint8Array))
                      s + t.length > n.length
                        ? (a.isBuffer(t) || (t = a.from(t)), t.copy(n, s))
                        : Uint8Array.prototype.set.call(n, t, s)
                    else if (a.isBuffer(t)) t.copy(n, s)
                    else throw TypeError('"list" argument must be an Array of Buffers')
                    s += t.length
                  }
                  return n
                }),
                (a.byteLength = h),
                (a.prototype._isBuffer = !0),
                (a.prototype.swap16 = function () {
                  let e = this.length
                  if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits")
                  for (let t = 0; t < e; t += 2) y(this, t, t + 1)
                  return this
                }),
                (a.prototype.swap32 = function () {
                  let e = this.length
                  if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits")
                  for (let t = 0; t < e; t += 4) y(this, t, t + 3), y(this, t + 1, t + 2)
                  return this
                }),
                (a.prototype.swap64 = function () {
                  let e = this.length
                  if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits")
                  for (let t = 0; t < e; t += 8)
                    y(this, t, t + 7),
                      y(this, t + 1, t + 6),
                      y(this, t + 2, t + 5),
                      y(this, t + 3, t + 4)
                  return this
                }),
                (a.prototype.toString = function () {
                  let e = this.length
                  return 0 === e
                    ? ""
                    : 0 == arguments.length
                      ? b(this, 0, e)
                      : d.apply(this, arguments)
                }),
                (a.prototype.toLocaleString = a.prototype.toString),
                (a.prototype.equals = function (e) {
                  if (!a.isBuffer(e)) throw TypeError("Argument must be a Buffer")
                  return this === e || 0 === a.compare(this, e)
                }),
                (a.prototype.inspect = function () {
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
                n && (a.prototype[n] = a.prototype.inspect),
                (a.prototype.compare = function (e, t, r, n, s) {
                  if ((P(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), !a.isBuffer(e)))
                    throw TypeError(
                      'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                        typeof e,
                    )
                  if (
                    (void 0 === t && (t = 0),
                    void 0 === r && (r = e ? e.length : 0),
                    void 0 === n && (n = 0),
                    void 0 === s && (s = this.length),
                    t < 0 || r > e.length || n < 0 || s > this.length)
                  )
                    throw RangeError("out of range index")
                  if (n >= s && t >= r) return 0
                  if (n >= s) return -1
                  if (t >= r) return 1
                  if (((t >>>= 0), (r >>>= 0), (n >>>= 0), (s >>>= 0), this === e)) return 0
                  let o = s - n,
                    i = r - t,
                    l = Math.min(o, i),
                    u = this.slice(n, s),
                    c = e.slice(t, r)
                  for (let e = 0; e < l; ++e)
                    if (u[e] !== c[e]) {
                      ;(o = u[e]), (i = c[e])
                      break
                    }
                  return o < i ? -1 : i < o ? 1 : 0
                }),
                (a.prototype.includes = function (e, t, r) {
                  return -1 !== this.indexOf(e, t, r)
                }),
                (a.prototype.indexOf = function (e, t, r) {
                  return m(this, e, t, r, !0)
                }),
                (a.prototype.lastIndexOf = function (e, t, r) {
                  return m(this, e, t, r, !1)
                }),
                (a.prototype.write = function (e, t, r, n) {
                  var s, a, o, i, l, u, c, f
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
                  let h = this.length - t
                  if (
                    ((void 0 === r || r > h) && (r = h),
                    (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
                  )
                    throw RangeError("Attempt to write outside buffer bounds")
                  n || (n = "utf8")
                  let d = !1
                  for (;;)
                    switch (n) {
                      case "hex":
                        return (function (e, t, r, n) {
                          let s
                          r = Number(r) || 0
                          let a = e.length - r
                          n ? (n = Number(n)) > a && (n = a) : (n = a)
                          let o = t.length
                          for (n > o / 2 && (n = o / 2), s = 0; s < n; ++s) {
                            let n = parseInt(t.substr(2 * s, 2), 16)
                            if (n != n) break
                            e[r + s] = n
                          }
                          return s
                        })(this, e, t, r)
                      case "utf8":
                      case "utf-8":
                        return (s = t), (a = r), D(U(e, this.length - s), this, s, a)
                      case "ascii":
                      case "latin1":
                      case "binary":
                        return (
                          (o = t),
                          (i = r),
                          D(
                            (function (e) {
                              let t = []
                              for (let r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r))
                              return t
                            })(e),
                            this,
                            o,
                            i,
                          )
                        )
                      case "base64":
                        return (l = t), (u = r), D(B(e), this, l, u)
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return (
                          (c = t),
                          (f = r),
                          D(
                            (function (e, t) {
                              let r,
                                n,
                                s = []
                              for (let a = 0; a < e.length && !((t -= 2) < 0); ++a)
                                (n = (r = e.charCodeAt(a)) >> 8), s.push(r % 256), s.push(n)
                              return s
                            })(e, this.length - c),
                            this,
                            c,
                            f,
                          )
                        )
                      default:
                        if (d) throw TypeError("Unknown encoding: " + n)
                        ;(n = ("" + n).toLowerCase()), (d = !0)
                    }
                }),
                (a.prototype.toJSON = function () {
                  return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) }
                }),
                (a.prototype.slice = function (e, t) {
                  let r = this.length
                  ;(e = ~~e),
                    (t = void 0 === t ? r : ~~t),
                    e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
                    t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
                    t < e && (t = e)
                  let n = this.subarray(e, t)
                  return Object.setPrototypeOf(n, a.prototype), n
                }),
                (a.prototype.readUintLE = a.prototype.readUIntLE =
                  function (e, t, r) {
                    ;(e >>>= 0), (t >>>= 0), r || v(e, t, this.length)
                    let n = this[e],
                      s = 1,
                      a = 0
                    for (; ++a < t && (s *= 256); ) n += this[e + a] * s
                    return n
                  }),
                (a.prototype.readUintBE = a.prototype.readUIntBE =
                  function (e, t, r) {
                    ;(e >>>= 0), (t >>>= 0), r || v(e, t, this.length)
                    let n = this[e + --t],
                      s = 1
                    for (; t > 0 && (s *= 256); ) n += this[e + --t] * s
                    return n
                  }),
                (a.prototype.readUint8 = a.prototype.readUInt8 =
                  function (e, t) {
                    return (e >>>= 0), t || v(e, 1, this.length), this[e]
                  }),
                (a.prototype.readUint16LE = a.prototype.readUInt16LE =
                  function (e, t) {
                    return (e >>>= 0), t || v(e, 2, this.length), this[e] | (this[e + 1] << 8)
                  }),
                (a.prototype.readUint16BE = a.prototype.readUInt16BE =
                  function (e, t) {
                    return (e >>>= 0), t || v(e, 2, this.length), (this[e] << 8) | this[e + 1]
                  }),
                (a.prototype.readUint32LE = a.prototype.readUInt32LE =
                  function (e, t) {
                    return (
                      (e >>>= 0),
                      t || v(e, 4, this.length),
                      (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 16777216 * this[e + 3]
                    )
                  }),
                (a.prototype.readUint32BE = a.prototype.readUInt32BE =
                  function (e, t) {
                    return (
                      (e >>>= 0),
                      t || v(e, 4, this.length),
                      16777216 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
                    )
                  }),
                (a.prototype.readBigUInt64LE = L(function (e) {
                  k((e >>>= 0), "offset")
                  let t = this[e],
                    r = this[e + 7]
                  ;(void 0 === t || void 0 === r) && C(e, this.length - 8)
                  let n = t + 256 * this[++e] + 65536 * this[++e] + 16777216 * this[++e],
                    s = this[++e] + 256 * this[++e] + 65536 * this[++e] + 16777216 * r
                  return BigInt(n) + (BigInt(s) << BigInt(32))
                })),
                (a.prototype.readBigUInt64BE = L(function (e) {
                  k((e >>>= 0), "offset")
                  let t = this[e],
                    r = this[e + 7]
                  ;(void 0 === t || void 0 === r) && C(e, this.length - 8)
                  let n = 16777216 * t + 65536 * this[++e] + 256 * this[++e] + this[++e],
                    s = 16777216 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r
                  return (BigInt(n) << BigInt(32)) + BigInt(s)
                })),
                (a.prototype.readIntLE = function (e, t, r) {
                  ;(e >>>= 0), (t >>>= 0), r || v(e, t, this.length)
                  let n = this[e],
                    s = 1,
                    a = 0
                  for (; ++a < t && (s *= 256); ) n += this[e + a] * s
                  return n >= (s *= 128) && (n -= Math.pow(2, 8 * t)), n
                }),
                (a.prototype.readIntBE = function (e, t, r) {
                  ;(e >>>= 0), (t >>>= 0), r || v(e, t, this.length)
                  let n = t,
                    s = 1,
                    a = this[e + --n]
                  for (; n > 0 && (s *= 256); ) a += this[e + --n] * s
                  return a >= (s *= 128) && (a -= Math.pow(2, 8 * t)), a
                }),
                (a.prototype.readInt8 = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || v(e, 1, this.length),
                    128 & this[e] ? -((255 - this[e] + 1) * 1) : this[e]
                  )
                }),
                (a.prototype.readInt16LE = function (e, t) {
                  ;(e >>>= 0), t || v(e, 2, this.length)
                  let r = this[e] | (this[e + 1] << 8)
                  return 32768 & r ? 4294901760 | r : r
                }),
                (a.prototype.readInt16BE = function (e, t) {
                  ;(e >>>= 0), t || v(e, 2, this.length)
                  let r = this[e + 1] | (this[e] << 8)
                  return 32768 & r ? 4294901760 | r : r
                }),
                (a.prototype.readInt32LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || v(e, 4, this.length),
                    this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
                  )
                }),
                (a.prototype.readInt32BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || v(e, 4, this.length),
                    (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
                  )
                }),
                (a.prototype.readBigInt64LE = L(function (e) {
                  k((e >>>= 0), "offset")
                  let t = this[e],
                    r = this[e + 7]
                  return (
                    (void 0 === t || void 0 === r) && C(e, this.length - 8),
                    (BigInt(this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24)) <<
                      BigInt(32)) +
                      BigInt(t + 256 * this[++e] + 65536 * this[++e] + 16777216 * this[++e])
                  )
                })),
                (a.prototype.readBigInt64BE = L(function (e) {
                  k((e >>>= 0), "offset")
                  let t = this[e],
                    r = this[e + 7]
                  return (
                    (void 0 === t || void 0 === r) && C(e, this.length - 8),
                    (BigInt((t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e]) <<
                      BigInt(32)) +
                      BigInt(16777216 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r)
                  )
                })),
                (a.prototype.readFloatLE = function (e, t) {
                  return (e >>>= 0), t || v(e, 4, this.length), r.read(this, e, !0, 23, 4)
                }),
                (a.prototype.readFloatBE = function (e, t) {
                  return (e >>>= 0), t || v(e, 4, this.length), r.read(this, e, !1, 23, 4)
                }),
                (a.prototype.readDoubleLE = function (e, t) {
                  return (e >>>= 0), t || v(e, 8, this.length), r.read(this, e, !0, 52, 8)
                }),
                (a.prototype.readDoubleBE = function (e, t) {
                  return (e >>>= 0), t || v(e, 8, this.length), r.read(this, e, !1, 52, 8)
                }),
                (a.prototype.writeUintLE = a.prototype.writeUIntLE =
                  function (e, t, r, n) {
                    if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
                      let n = Math.pow(2, 8 * r) - 1
                      A(this, e, t, r, n, 0)
                    }
                    let s = 1,
                      a = 0
                    for (this[t] = 255 & e; ++a < r && (s *= 256); ) this[t + a] = (e / s) & 255
                    return t + r
                  }),
                (a.prototype.writeUintBE = a.prototype.writeUIntBE =
                  function (e, t, r, n) {
                    if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
                      let n = Math.pow(2, 8 * r) - 1
                      A(this, e, t, r, n, 0)
                    }
                    let s = r - 1,
                      a = 1
                    for (this[t + s] = 255 & e; --s >= 0 && (a *= 256); )
                      this[t + s] = (e / a) & 255
                    return t + r
                  }),
                (a.prototype.writeUint8 = a.prototype.writeUInt8 =
                  function (e, t, r) {
                    return (
                      (e = +e),
                      (t >>>= 0),
                      r || A(this, e, t, 1, 255, 0),
                      (this[t] = 255 & e),
                      t + 1
                    )
                  }),
                (a.prototype.writeUint16LE = a.prototype.writeUInt16LE =
                  function (e, t, r) {
                    return (
                      (e = +e),
                      (t >>>= 0),
                      r || A(this, e, t, 2, 65535, 0),
                      (this[t] = 255 & e),
                      (this[t + 1] = e >>> 8),
                      t + 2
                    )
                  }),
                (a.prototype.writeUint16BE = a.prototype.writeUInt16BE =
                  function (e, t, r) {
                    return (
                      (e = +e),
                      (t >>>= 0),
                      r || A(this, e, t, 2, 65535, 0),
                      (this[t] = e >>> 8),
                      (this[t + 1] = 255 & e),
                      t + 2
                    )
                  }),
                (a.prototype.writeUint32LE = a.prototype.writeUInt32LE =
                  function (e, t, r) {
                    return (
                      (e = +e),
                      (t >>>= 0),
                      r || A(this, e, t, 4, 4294967295, 0),
                      (this[t + 3] = e >>> 24),
                      (this[t + 2] = e >>> 16),
                      (this[t + 1] = e >>> 8),
                      (this[t] = 255 & e),
                      t + 4
                    )
                  }),
                (a.prototype.writeUint32BE = a.prototype.writeUInt32BE =
                  function (e, t, r) {
                    return (
                      (e = +e),
                      (t >>>= 0),
                      r || A(this, e, t, 4, 4294967295, 0),
                      (this[t] = e >>> 24),
                      (this[t + 1] = e >>> 16),
                      (this[t + 2] = e >>> 8),
                      (this[t + 3] = 255 & e),
                      t + 4
                    )
                  }),
                (a.prototype.writeBigUInt64LE = L(function (e, t = 0) {
                  return E(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
                })),
                (a.prototype.writeBigUInt64BE = L(function (e, t = 0) {
                  return _(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
                })),
                (a.prototype.writeIntLE = function (e, t, r, n) {
                  if (((e = +e), (t >>>= 0), !n)) {
                    let n = Math.pow(2, 8 * r - 1)
                    A(this, e, t, r, n - 1, -n)
                  }
                  let s = 0,
                    a = 1,
                    o = 0
                  for (this[t] = 255 & e; ++s < r && (a *= 256); )
                    e < 0 && 0 === o && 0 !== this[t + s - 1] && (o = 1),
                      (this[t + s] = (((e / a) >> 0) - o) & 255)
                  return t + r
                }),
                (a.prototype.writeIntBE = function (e, t, r, n) {
                  if (((e = +e), (t >>>= 0), !n)) {
                    let n = Math.pow(2, 8 * r - 1)
                    A(this, e, t, r, n - 1, -n)
                  }
                  let s = r - 1,
                    a = 1,
                    o = 0
                  for (this[t + s] = 255 & e; --s >= 0 && (a *= 256); )
                    e < 0 && 0 === o && 0 !== this[t + s + 1] && (o = 1),
                      (this[t + s] = (((e / a) >> 0) - o) & 255)
                  return t + r
                }),
                (a.prototype.writeInt8 = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || A(this, e, t, 1, 127, -128),
                    e < 0 && (e = 255 + e + 1),
                    (this[t] = 255 & e),
                    t + 1
                  )
                }),
                (a.prototype.writeInt16LE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || A(this, e, t, 2, 32767, -32768),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    t + 2
                  )
                }),
                (a.prototype.writeInt16BE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || A(this, e, t, 2, 32767, -32768),
                    (this[t] = e >>> 8),
                    (this[t + 1] = 255 & e),
                    t + 2
                  )
                }),
                (a.prototype.writeInt32LE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || A(this, e, t, 4, 2147483647, -2147483648),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    (this[t + 2] = e >>> 16),
                    (this[t + 3] = e >>> 24),
                    t + 4
                  )
                }),
                (a.prototype.writeInt32BE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || A(this, e, t, 4, 2147483647, -2147483648),
                    e < 0 && (e = 4294967295 + e + 1),
                    (this[t] = e >>> 24),
                    (this[t + 1] = e >>> 16),
                    (this[t + 2] = e >>> 8),
                    (this[t + 3] = 255 & e),
                    t + 4
                  )
                }),
                (a.prototype.writeBigInt64LE = L(function (e, t = 0) {
                  return E(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
                })),
                (a.prototype.writeBigInt64BE = L(function (e, t = 0) {
                  return _(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
                })),
                (a.prototype.writeFloatLE = function (e, t, r) {
                  return j(this, e, t, !0, r)
                }),
                (a.prototype.writeFloatBE = function (e, t, r) {
                  return j(this, e, t, !1, r)
                }),
                (a.prototype.writeDoubleLE = function (e, t, r) {
                  return O(this, e, t, !0, r)
                }),
                (a.prototype.writeDoubleBE = function (e, t, r) {
                  return O(this, e, t, !1, r)
                }),
                (a.prototype.copy = function (e, t, r, n) {
                  if (!a.isBuffer(e)) throw TypeError("argument should be a Buffer")
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
                  let s = n - r
                  return (
                    this === e && "function" == typeof Uint8Array.prototype.copyWithin
                      ? this.copyWithin(t, r, n)
                      : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
                    s
                  )
                }),
                (a.prototype.fill = function (e, t, r, n) {
                  let s
                  if ("string" == typeof e) {
                    if (
                      ("string" == typeof t
                        ? ((n = t), (t = 0), (r = this.length))
                        : "string" == typeof r && ((n = r), (r = this.length)),
                      void 0 !== n && "string" != typeof n)
                    )
                      throw TypeError("encoding must be a string")
                    if ("string" == typeof n && !a.isEncoding(n))
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
                    for (s = t; s < r; ++s) this[s] = e
                  else {
                    let o = a.isBuffer(e) ? e : a.from(e, n),
                      i = o.length
                    if (0 === i)
                      throw TypeError('The value "' + e + '" is invalid for argument "value"')
                    for (s = 0; s < r - t; ++s) this[s + t] = o[s % i]
                  }
                  return this
                })
              var I = {}
              function R(e, t, r) {
                I[e] = class extends r {
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
              function x(e) {
                let t = "",
                  r = e.length,
                  n = "-" === e[0] ? 1 : 0
                for (; r >= n + 4; r -= 3) t = "_".concat(e.slice(r - 3, r)).concat(t)
                return "".concat(e.slice(0, r)).concat(t)
              }
              function T(e, t, r, n, s, a) {
                if (e > r || e < t) {
                  let n = "bigint" == typeof t ? "n" : "",
                    s
                  throw (
                    ((s =
                      a > 3
                        ? 0 === t || t === BigInt(0)
                          ? ">= 0"
                              .concat(n, " and < 2")
                              .concat(n, " ** ")
                              .concat((a + 1) * 8)
                              .concat(n)
                          : ">= -(2"
                              .concat(n, " ** ")
                              .concat((a + 1) * 8 - 1)
                              .concat(n, ") and < 2 ** ") + "".concat((a + 1) * 8 - 1).concat(n)
                        : ">= ".concat(t).concat(n, " and <= ").concat(r).concat(n)),
                    new I.ERR_OUT_OF_RANGE("value", s, e))
                  )
                }
                k(s, "offset"), (void 0 === n[s] || void 0 === n[s + a]) && C(s, n.length - (a + 1))
              }
              function k(e, t) {
                if ("number" != typeof e) throw new I.ERR_INVALID_ARG_TYPE(t, "number", e)
              }
              function C(e, t, r) {
                throw Math.floor(e) !== e
                  ? (k(e, r), new I.ERR_OUT_OF_RANGE(r || "offset", "an integer", e))
                  : t < 0
                    ? new I.ERR_BUFFER_OUT_OF_BOUNDS()
                    : new I.ERR_OUT_OF_RANGE(
                        r || "offset",
                        ">= ".concat(r ? 1 : 0, " and <= ").concat(t),
                        e,
                      )
              }
              R(
                "ERR_BUFFER_OUT_OF_BOUNDS",
                function (e) {
                  return e
                    ? "".concat(e, " is outside of buffer bounds")
                    : "Attempt to access memory outside buffer bounds"
                },
                RangeError,
              ),
                R(
                  "ERR_INVALID_ARG_TYPE",
                  function (e, t) {
                    return 'The "'
                      .concat(e, '" argument must be of type number. Received type ')
                      .concat(typeof t)
                  },
                  TypeError,
                ),
                R(
                  "ERR_OUT_OF_RANGE",
                  function (e, t, r) {
                    let n = 'The value of "'.concat(e, '" is out of range.'),
                      s = r
                    return (
                      Number.isInteger(r) && Math.abs(r) > 4294967296
                        ? (s = x(String(r)))
                        : "bigint" == typeof r &&
                          ((s = String(r)),
                          (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) &&
                            (s = x(s)),
                          (s += "n")),
                      (n += " It must be ".concat(t, ". Received ").concat(s))
                    )
                  },
                  RangeError,
                )
              var N = /[^+/0-9A-Za-z-_]/g
              function U(e, t) {
                t = t || 1 / 0
                let r,
                  n = e.length,
                  s = null,
                  a = []
                for (let o = 0; o < n; ++o) {
                  if ((r = e.charCodeAt(o)) > 55295 && r < 57344) {
                    if (!s) {
                      if (r > 56319 || o + 1 === n) {
                        ;(t -= 3) > -1 && a.push(239, 191, 189)
                        continue
                      }
                      s = r
                      continue
                    }
                    if (r < 56320) {
                      ;(t -= 3) > -1 && a.push(239, 191, 189), (s = r)
                      continue
                    }
                    r = (((s - 55296) << 10) | (r - 56320)) + 65536
                  } else s && (t -= 3) > -1 && a.push(239, 191, 189)
                  if (((s = null), r < 128)) {
                    if ((t -= 1) < 0) break
                    a.push(r)
                  } else if (r < 2048) {
                    if ((t -= 2) < 0) break
                    a.push((r >> 6) | 192, (63 & r) | 128)
                  } else if (r < 65536) {
                    if ((t -= 3) < 0) break
                    a.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128)
                  } else if (r < 1114112) {
                    if ((t -= 4) < 0) break
                    a.push(
                      (r >> 18) | 240,
                      ((r >> 12) & 63) | 128,
                      ((r >> 6) & 63) | 128,
                      (63 & r) | 128,
                    )
                  } else throw Error("Invalid code point")
                }
                return a
              }
              function B(e) {
                return t.toByteArray(
                  (function (e) {
                    if ((e = (e = e.split("=")[0]).trim().replace(N, "")).length < 2) return ""
                    for (; e.length % 4 != 0; ) e += "="
                    return e
                  })(e),
                )
              }
              function D(e, t, r, n) {
                let s
                for (s = 0; s < n && !(s + r >= t.length || s >= e.length); ++s) t[s + r] = e[s]
                return s
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
              var F = (function () {
                let e = "0123456789abcdef",
                  t = Array(256)
                for (let r = 0; r < 16; ++r) {
                  let n = 16 * r
                  for (let s = 0; s < 16; ++s) t[n + s] = e[r] + e[s]
                }
                return t
              })()
              function L(e) {
                return typeof BigInt > "u" ? M : e
              }
              function M() {
                throw Error("BigInt not supported")
              }
            }),
            m = {}
          ;((e, t) => {
            for (var r in t) o(e, r, { get: t[r], enumerable: !0 })
          })(m, { default: () => b }),
            (t.exports = h(o({}, "__esModule", { value: !0 }), m))
          var w = d(y())
          ;(n = d(y())), (s = t.exports), h(m, n, "default"), s && h(s, n, "default")
          var b = w.default /*! Bundled license information:

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
      ipTXV: [
        function (e, t, r) {
          Object.defineProperty(r, "__esModule", { value: !0 }), (r.TransactionUploader = void 0)
          let n = e("77f86d6db7212c23"),
            s = e("d98c7f282622a67f"),
            a = e("fad445db6d006197"),
            o = e("dfd337c78f99405c"),
            i = [
              "invalid_json",
              "chunk_too_big",
              "data_path_too_big",
              "offset_too_big",
              "data_size_too_big",
              "chunk_proof_ratio_not_attractive",
              "invalid_proof",
            ]
          class l {
            api
            chunkIndex = 0
            txPosted = !1
            transaction
            lastRequestTimeEnd = 0
            totalErrors = 0
            data
            lastResponseStatus = 0
            lastResponseError = ""
            get isComplete() {
              return this.txPosted && this.chunkIndex === this.transaction.chunks.chunks.length
            }
            get totalChunks() {
              return this.transaction.chunks.chunks.length
            }
            get uploadedChunks() {
              return this.chunkIndex
            }
            get pctComplete() {
              return Math.trunc((this.uploadedChunks / this.totalChunks) * 100)
            }
            constructor(e, t) {
              if (((this.api = e), !t.id)) throw Error("Transaction is not signed")
              if (!t.chunks) throw Error("Transaction chunks not prepared")
              ;(this.data = t.data),
                (this.transaction = new n.default(
                  Object.assign({}, t, { data: new Uint8Array(0) }),
                ))
            }
            async uploadChunk(e) {
              if (this.isComplete) throw Error("Upload is already complete")
              if (
                ("" !== this.lastResponseError ? this.totalErrors++ : (this.totalErrors = 0),
                100 === this.totalErrors)
              )
                throw Error(
                  `Unable to complete upload: ${this.lastResponseStatus}: ${this.lastResponseError}`,
                )
              let t =
                "" === this.lastResponseError
                  ? 0
                  : Math.max(this.lastRequestTimeEnd + 4e4 - Date.now(), 4e4)
              if (
                (t > 0 &&
                  ((t -= t * Math.random() * 0.3), await new Promise((e) => setTimeout(e, t))),
                (this.lastResponseError = ""),
                !this.txPosted)
              ) {
                await this.postTransaction()
                return
              }
              e && (this.chunkIndex = e)
              let r = this.transaction.getChunk(e || this.chunkIndex, this.data),
                n = await (0, o.validatePath)(
                  this.transaction.chunks.data_root,
                  parseInt(r.offset),
                  0,
                  parseInt(r.data_size),
                  s.b64UrlToBuffer(r.data_path),
                )
              if (!n) throw Error(`Unable to validate chunk ${this.chunkIndex}`)
              let l = await this.api
                .post("chunk", this.transaction.getChunk(this.chunkIndex, this.data))
                .catch(
                  (e) => (console.error(e.message), { status: -1, data: { error: e.message } }),
                )
              if (
                ((this.lastRequestTimeEnd = Date.now()),
                (this.lastResponseStatus = l.status),
                200 == this.lastResponseStatus)
              )
                this.chunkIndex++
              else if (
                ((this.lastResponseError = (0, a.getError)(l)), i.includes(this.lastResponseError))
              )
                throw Error(
                  `Fatal error uploading chunk ${this.chunkIndex}: ${this.lastResponseError}`,
                )
            }
            static async fromSerialized(e, t, r) {
              if (!t || "number" != typeof t.chunkIndex || "object" != typeof t.transaction)
                throw Error("Serialized object does not match expected format.")
              var s = new n.default(t.transaction)
              s.chunks || (await s.prepareChunks(r))
              let a = new l(e, s)
              if (
                ((a.chunkIndex = t.chunkIndex),
                (a.lastRequestTimeEnd = t.lastRequestTimeEnd),
                (a.lastResponseError = t.lastResponseError),
                (a.lastResponseStatus = t.lastResponseStatus),
                (a.txPosted = t.txPosted),
                (a.data = r),
                a.transaction.data_root !== t.transaction.data_root)
              )
                throw Error("Data mismatch: Uploader doesn't match provided data.")
              return a
            }
            static async fromTransactionId(e, t) {
              let r = await e.get(`tx/${t}`)
              if (200 !== r.status) throw Error(`Tx ${t} not found: ${r.status}`)
              let n = r.data
              return (
                (n.data = new Uint8Array(0)),
                {
                  txPosted: !0,
                  chunkIndex: 0,
                  lastResponseError: "",
                  lastRequestTimeEnd: 0,
                  lastResponseStatus: 0,
                  transaction: n,
                }
              )
            }
            toJSON() {
              return {
                chunkIndex: this.chunkIndex,
                transaction: this.transaction,
                lastRequestTimeEnd: this.lastRequestTimeEnd,
                lastResponseStatus: this.lastResponseStatus,
                lastResponseError: this.lastResponseError,
                txPosted: this.txPosted,
              }
            }
            async postTransaction() {
              let e = this.totalChunks <= 1
              if (e) {
                this.transaction.data = this.data
                let e = await this.api
                  .post("tx", this.transaction)
                  .catch((e) => (console.error(e), { status: -1, data: { error: e.message } }))
                if (
                  ((this.lastRequestTimeEnd = Date.now()),
                  (this.lastResponseStatus = e.status),
                  (this.transaction.data = new Uint8Array(0)),
                  e.status >= 200 && e.status < 300)
                ) {
                  ;(this.txPosted = !0), (this.chunkIndex = 1)
                  return
                }
                throw (
                  ((this.lastResponseError = (0, a.getError)(e)),
                  Error(`Unable to upload transaction: ${e.status}, ${this.lastResponseError}`))
                )
              }
              let t = await this.api.post("tx", this.transaction)
              if (
                ((this.lastRequestTimeEnd = Date.now()),
                (this.lastResponseStatus = t.status),
                !(t.status >= 200 && t.status < 300))
              )
                throw (
                  ((this.lastResponseError = (0, a.getError)(t)),
                  Error(`Unable to upload transaction: ${t.status}, ${this.lastResponseError}`))
                )
              this.txPosted = !0
            }
          }
          r.TransactionUploader = l
        },
        {
          "77f86d6db7212c23": "eep0i",
          d98c7f282622a67f: "g1Mao",
          fad445db6d006197: "dCfpA",
          dfd337c78f99405c: "Ezr1N",
        },
      ],
      "56gsG": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), (r.default = {})
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      dWcUz: [
        function (e, t, r) {
          Object.defineProperty(r, "__esModule", { value: !0 })
          let n = e("65c2d53211e21f84")
          e("ad1afae77e63cc51"),
            (r.default = class {
              api
              crypto
              constructor(e, t) {
                ;(this.api = e), (this.crypto = t)
              }
              getBalance(e) {
                return this.api.get(`wallet/${e}/balance`).then((e) => e.data)
              }
              getLastTransactionID(e) {
                return this.api.get(`wallet/${e}/last_tx`).then((e) => e.data)
              }
              generate() {
                return this.crypto.generateJWK()
              }
              async jwkToAddress(e) {
                return e && "use_wallet" !== e ? this.getAddress(e) : this.getAddress()
              }
              async getAddress(e) {
                if (e && "use_wallet" !== e) return this.ownerToAddress(e.n)
                try {
                  await arweaveWallet.connect(["ACCESS_ADDRESS"])
                } catch {}
                return arweaveWallet.getActiveAddress()
              }
              async ownerToAddress(e) {
                return n.bufferTob64Url(await this.crypto.hash(n.b64UrlToBuffer(e)))
              }
            })
        },
        { "65c2d53211e21f84": "g1Mao", ad1afae77e63cc51: "56gsG" },
      ],
      "17Kaj": [
        function (e, t, r) {
          Object.defineProperty(r, "__esModule", { value: !0 }), (r.SiloResource = void 0)
          let n = e("59d153d24120086c")
          r.default = class {
            api
            crypto
            transactions
            constructor(e, t, r) {
              ;(this.api = e), (this.crypto = t), (this.transactions = r)
            }
            async get(e) {
              if (!e) throw Error("No Silo URI specified")
              let t = await this.parseUri(e),
                r = await this.transactions.search("Silo-Name", t.getAccessKey())
              if (0 == r.length) throw Error(`No data could be found for the Silo URI: ${e}`)
              let n = await this.transactions.get(r[0])
              if (!n) throw Error(`No data could be found for the Silo URI: ${e}`)
              let s = n.get("data", { decode: !0, string: !1 })
              return this.crypto.decrypt(s, t.getEncryptionKey())
            }
            async readTransactionData(e, t) {
              if (!t) throw Error("No Silo URI specified")
              let r = await this.parseUri(t),
                n = e.get("data", { decode: !0, string: !1 })
              return this.crypto.decrypt(n, r.getEncryptionKey())
            }
            async parseUri(e) {
              let t = e.match(/^([a-z0-9-_]+)\.([0-9]+)/i)
              if (!t)
                throw Error(
                  "Invalid Silo name, must be a name in the format of [a-z0-9]+.[0-9]+, e.g. 'bubble.7'",
                )
              let r = t[1],
                a = Math.pow(2, parseInt(t[2])),
                o = await this.hash(n.stringToBuffer(r), a),
                i = n.bufferTob64(o.slice(0, 15)),
                l = await this.hash(o.slice(16, 31), 1)
              return new s(e, i, l)
            }
            async hash(e, t) {
              let r = await this.crypto.hash(e)
              for (let e = 0; e < t - 1; e++) r = await this.crypto.hash(r)
              return r
            }
          }
          class s {
            uri
            accessKey
            encryptionKey
            constructor(e, t, r) {
              ;(this.uri = e), (this.accessKey = t), (this.encryptionKey = r)
            }
            getUri() {
              return this.uri
            }
            getAccessKey() {
              return this.accessKey
            }
            getEncryptionKey() {
              return this.encryptionKey
            }
          }
          r.SiloResource = s
        },
        { "59d153d24120086c": "g1Mao" },
      ],
      "2dECD": [
        function (e, t, r) {
          Object.defineProperty(r, "__esModule", { value: !0 })
          let n = e("6d0bf66c494e4780"),
            s = e("34c7d4d09e7945b4")
          r.default = class {
            api
            constructor(e) {
              this.api = e
            }
            async getTransactionOffset(e) {
              let t = await this.api.get(`tx/${e}/offset`)
              if (200 === t.status) return t.data
              throw Error(`Unable to get transaction offset: ${(0, n.getError)(t)}`)
            }
            async getChunk(e) {
              let t = await this.api.get(`chunk/${e}`)
              if (200 === t.status) return t.data
              throw Error(`Unable to get chunk: ${(0, n.getError)(t)}`)
            }
            async getChunkData(e) {
              let t = await this.getChunk(e),
                r = s.b64UrlToBuffer(t.chunk)
              return r
            }
            firstChunkOffset(e) {
              return parseInt(e.offset) - parseInt(e.size) + 1
            }
            async downloadChunkedData(e) {
              let t = await this.getTransactionOffset(e),
                r = parseInt(t.size),
                n = parseInt(t.offset),
                s = n - r + 1,
                a = new Uint8Array(r),
                o = 0
              for (; o < r; ) {
                let e
                this.api.config.logging && console.log(`[chunk] ${o}/${r}`)
                try {
                  e = await this.getChunkData(s + o)
                } catch (e) {
                  console.error(`[chunk] Failed to fetch chunk at offset ${s + o}`),
                    console.error(
                      "[chunk] This could indicate that the chunk wasn't uploaded or hasn't yet seeded properly to a particular gateway/node",
                    )
                }
                if (e) a.set(e, o), (o += e.length)
                else throw Error(`Couldn't complete data download at ${o}/${r}`)
              }
              return a
            }
          }
        },
        { "6d0bf66c494e4780": "dCfpA", "34c7d4d09e7945b4": "g1Mao" },
      ],
      "4l6f1": [
        function (e, t, r) {
          Object.defineProperty(r, "__esModule", { value: !0 })
          let n = e("e07566413a468315")
          e("1c5bac30f8beebcd")
          class s {
            api
            network
            static HASH_ENDPOINT = "block/hash/"
            static HEIGHT_ENDPOINT = "block/height/"
            constructor(e, t) {
              ;(this.api = e), (this.network = t)
            }
            async get(e) {
              let t = await this.api.get(`${s.HASH_ENDPOINT}${e}`)
              if (200 === t.status) return t.data
              if (404 === t.status) throw new n.default("BLOCK_NOT_FOUND")
              throw Error(`Error while loading block data: ${t}`)
            }
            async getByHeight(e) {
              let t = await this.api.get(`${s.HEIGHT_ENDPOINT}${e}`)
              if (200 === t.status) return t.data
              if (404 === t.status) throw new n.default("BLOCK_NOT_FOUND")
              throw Error(`Error while loading block data: ${t}`)
            }
            async getCurrent() {
              let { current: e } = await this.network.getInfo()
              return await this.get(e)
            }
          }
          r.default = s
        },
        { e07566413a468315: "dCfpA", "1c5bac30f8beebcd": "56gsG" },
      ],
      jdVR6: [
        function (e, t, r) {
          Object.defineProperty(r, "__esModule", { value: !0 }), (r.getDefaultConfig = void 0)
          let n = (e, t) => {
              let r = /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
                n = t.split("."),
                s = n[n.length - 1],
                a = ["localhost", "[::1]"]
              return a.includes(t) || "file" == e || a.includes(s) || !!t.match(r) || !!s.match(r)
            },
            s = (e) => {
              let t = "[" === e.charAt(0)
              return (
                !!e.match(
                  /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/,
                ) || t
              )
            }
          r.getDefaultConfig = (e, t) => {
            if (n(e, t)) return { protocol: "https", host: "arweave.net", port: 443 }
            if (!s(t)) {
              let r = t.split(".")
              if (r.length >= 3) {
                r.shift()
                let t = r.join(".")
                return { protocol: e, host: t }
              }
            }
            return { protocol: e, host: t }
          }
        },
        {},
      ],
      "9IOT0": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "ACCEPTED_DISPATCH_SIZE", () => s)
          let s = 12e4
          r.default = { functionName: "dispatch", permissions: ["DISPATCH"] }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "69MV6": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "finalizer", () => l)
          var s = e("../sign/transaction_builder"),
            a = e("../sign/animation"),
            o = e("../sign/chunks")
          let i = async (e) => {
              let {
                transaction: t,
                dataChunks: r,
                tagChunks: n,
                chunkCollectionID: a,
              } = (0, s.deconstructTransaction)(e)
              try {
                await (0, o.sendChunk)({ collectionID: a, type: "start", index: -1 })
              } catch (e) {
                throw Error(`Failed to initiate dispatch chunk stream: 
${e}`)
              }
              for (let e of r)
                try {
                  await (0, o.sendChunk)(e)
                } catch (e) {
                  throw Error(`Error while sending a data (dispatch) chunk of collection "${a}": 
${e}`)
                }
              for (let e of n)
                try {
                  await (0, o.sendChunk)(e)
                } catch (e) {
                  throw Error(`Error while sending a tag chunk for tx from chunk collection "${a}": 
${e}`)
                }
              return [t, a]
            },
            l = (e) => {
              if (e.arConfetti)
                for (let t = 0; t < 8; t++)
                  setTimeout(() => (0, a.createCoinWithAnimation)(e.arConfetti), 150 * t)
              return e.res
            }
          r.default = i
        },
        {
          "../sign/transaction_builder": "hUeIO",
          "../sign/animation": "5hcac",
          "../sign/chunks": "1FDAY",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      eg7Kx: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = { functionName: "encrypt", permissions: ["ENCRYPT"] })
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "2KpJ9": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "finalizer", () => s)
          let s = (e) => new Uint8Array(Object.values(e))
          r.default = (e, t) => (
            t.algorithm &&
              console.warn(
                '[ArConnect] YOU\'RE USING DEPRECATED PARAMS FOR "encrypt()". Please check the documentation.\nhttps://github.com/arconnectio/ArConnect#encryptdata-options-promiseuint8array',
              ),
            ["string" == typeof e ? e : new Uint8Array(e), t]
          )
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      iONkl: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = { functionName: "decrypt", permissions: ["DECRYPT"] })
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "8F30A": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "finalizer", () => s)
          let s = (e) => new Uint8Array(Object.values(e))
          r.default = (e, t) => (
            t.algorithm &&
              console.warn(
                '[ArConnect] YOU\'RE USING DEPRECATED PARAMS FOR "decrypt()". Please check the documentation.\nhttps://github.com/arconnectio/ArConnect#decryptdata-options-promisestring',
              ),
            [new Uint8Array(e), t]
          )
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "4dxym": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = { functionName: "signature", permissions: ["SIGNATURE"] })
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "2KfbH": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "finalizer", () => s)
          let s = (e) => new Uint8Array(e)
          r.default = (e, t) => (
            console.warn(
              "Warning: The signature API is deprecated and it will be removed.\nVisit https://docs.arconnect.io/api/signature for alternatives.",
            ),
            [Object.values(e), t]
          )
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      chITW: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = { functionName: "signMessage", permissions: ["SIGNATURE"] })
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "86uxo": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "finalizer", () => a)
          var s = e("~utils/assertions")
          let a = (e) => new Uint8Array(e)
          r.default = (e, t) => ((0, s.isArrayBuffer)(e), [Object.values(e), t])
        },
        { "~utils/assertions": "0UJ99", "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "0UJ99": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "isGateway", () => l),
            n.export(r, "isSubscriptionType", () => u),
            n.export(r, "isTokenType", () => c),
            n.export(r, "isAddress", () => f),
            n.export(r, "isPermissionsArray", () => h),
            n.export(r, "isPermission", () => d),
            n.export(r, "isAppInfo", () => p),
            n.export(r, "isSplitTransaction", () => g),
            n.export(r, "isRawTransaction", () => y),
            n.export(r, "isTag", () => m),
            n.export(r, "isSignatureOptions", () => w),
            n.export(r, "isChunk", () => b),
            n.export(r, "isNumberArray", () => v),
            n.export(r, "isApiCall", () => A),
            n.export(r, "isEncryptionAlgorithm", () => E),
            n.export(r, "isLegacyEncryptionOptions", () => _),
            n.export(r, "isSignMessageOptions", () => S),
            n.export(r, "isArrayBuffer", () => j),
            n.export(r, "isRawArrayBuffer", () => O),
            n.export(r, "isLocalWallet", () => I),
            n.export(r, "isRawDataItem", () => R),
            n.export(r, "isSignatureAlgorithm", () => x),
            n.export(r, "isNull", () => T),
            n.export(r, "isUndefined", () => k),
            n.export(r, "isValidBalance", () => C),
            n.export(r, "isTokenState", () => N),
            n.export(r, "isNotEmptyArray", () => U),
            n.export(r, "isValidURL", () => B),
            n.export(r, "isNotCancelError", () => D)
          var s = e("~applications/permissions"),
            a = e("./format"),
            o = e("typed-assert"),
            i = e("~subscriptions/subscription")
          function l(e) {
            ;(0, o.isRecordWithKeys)(
              e,
              ["host", "port", "protocol"],
              "A gateway object should only have the following keys: host, port, protocol.",
            ),
              (0, o.isString)(e.host, "Gateway host should be a string."),
              (0, o.isNumber)(e.port, "Gateway port should be a number."),
              (0, o.isOneOf)(
                e.protocol,
                ["http", "https"],
                "Gateway protocol should be https/http.",
              )
          }
          function u(e) {
            ;(0, o.isInstanceOf)(e, Object, "Input should be an object.")
            let {
              arweaveAccountAddress: t,
              applicationName: r,
              subscriptionName: n,
              subscriptionFeeAmount: s,
              recurringPaymentFrequency: a,
              subscriptionEndDate: l,
              applicationIcon: u,
            } = e
            ;(0, o.isString)(t, "arweaveAccountAddress should be a string."),
              (0, o.isString)(r, "applicationName should be a string."),
              (0, o.isString)(n, "subscriptionName should be a string."),
              (0, o.isNumber)(s, "subscriptionFeeAmount should be a number."),
              (0, o.isOneOf)(
                a,
                Object.values(i.RecurringPaymentFrequency),
                "Invalid recurringPaymentFrequency.",
              ),
              (function (e, t) {
                let r
                if (!(r = e instanceof Date ? e.toISOString() : e) || isNaN(Date.parse(r)))
                  throw Error(t)
              })(l, "Invalid subscriptionEndDate date."),
              void 0 !== u && (0, o.isString)(u, "applicationIcon should be a string.")
          }
          function c(e) {
            ;(0, o.isString)(e, "Token type should be a string."),
              (0, o.isOneOf)(e, ["asset", "collectible"], "Token type should be asset/collectible.")
          }
          function f(e) {
            ;(0, o.isString)(e, "Address or ID should be a string."),
              (0, o.assert)((0, a.isAddressFormat)(e), "Invalid address or ID format.")
          }
          function h(e) {
            ;(0, o.isArray)(e, "Input has to be an array of permissions."),
              (0, o.isArrayOfType)(e, d, "Permission array has an invalid member.")
          }
          function d(e) {
            ;(0, o.isString)(e, "Permission has to be a string."),
              (0, o.isOneOf)(e, Object.keys(s.permissionData), "Input is not a valid permission.")
          }
          function p(e) {
            ;(0, o.isRecord)(e, "App info has to be a Record<string, any>.")
            let t = ["name", "logo"]
            for (let r in e) (0, o.isOneOf)(r, t, `"${r}" is not a valid field for AppInfo.`)
          }
          function g(e) {
            let t = [
              "id",
              "last_tx",
              "owner",
              "target",
              "quantity",
              "data_size",
              "data_root",
              "reward",
              "signature",
            ]
            for (let r of ((0, o.isRecordWithKeys)(
              e,
              [...t, "format", "chunks"],
              "A key is missing from the raw transaction object.",
            ),
            t))
              (0, o.isString)(e[r], `"${r}" of transaction has to be a string.`)
            ;(0, o.isNumber)(e.format, '"format" of transaction has to be a number.'),
              (0, o.isRecordWithKeys)(
                e.chunks,
                ["data_root", "chunks", "proofs"],
                "Invalid transaction chunk format.",
              )
          }
          function y(e) {
            g(e),
              (0, o.isInstanceOf)(e.data, Uint8Array, "Transaction data has to be Uint8Array."),
              (0, o.isArrayOfType)(e.tags, m, "Invalid tags array.")
          }
          function m(e) {
            try {
              ;(0, o.isRecordWithKeys)(e, ["name", "value"], "Invalid keys in tag.")
            } catch {
              throw Error(
                `Issue with ${JSON.stringify(e)}, please ensure that "name" and "value" exist on all tags`,
              )
            }
            ;(0, o.isString)(e.name, "Tag name has to be a string"),
              (0, o.isString)(e.value, "Tag value has to be a string.")
          }
          function w(e) {
            ;(0, o.isRecord)(e, "Signature options has to be a record."),
              void 0 !== e.saltLength &&
                (0, o.isNumber)(e.saltLength, "Salt length has to be a number.")
          }
          function b(e) {
            ;(0, o.isRecord)(e, "Chunk has to be a record."),
              (0, o.isString)(e.collectionID, "Chunk collection ID has to be a string."),
              (0, o.isOneOf)(e.type, ["tag", "data", "start", "end"], "Invalid chunk type."),
              (0, o.isNumber)(e.index, "Chunk index has to be a number."),
              e.value &&
                (0, o.isOneOfType)(
                  e.value,
                  [v, m],
                  "Chunk value has to be a tag or a raw typed array.",
                )
          }
          function v(e) {
            ;(0, o.isArrayOfType)(e, o.isNumber, "Array can only contain numbers.")
          }
          function A(e) {
            ;(0, o.isRecord)(e, "Api call has to be a record."),
              (0, o.isString)(e.callID, "Call ID has to be a string."),
              (0, o.isString)(e.type, "Message type has to be a string.")
          }
          function E(e) {
            ;(0, o.isNotUndefined)(e, "Algorithm cannot be undefined."),
              (0, o.isNotNull)(e, "Algorithm cannot be null."),
              "string" != typeof e &&
                ((0, o.isRecord)(e, "Algorithm needs to be a string on a record."),
                (0, o.isString)(e.name, "Algorithm name needs to be a string."))
          }
          function _(e) {
            ;(0, o.isNotUndefined)(e, "Encryption options have to be defined."),
              (0, o.isRecord)(e, "Encryption options have to be a record."),
              (0, o.isString)(e.algorithm, "Encryption algorithm has to be a string."),
              (0, o.isString)(e.hash, "Encryption hash has to be a string."),
              e.salt && (0, o.isString)(e.salt, "Encryption salt has to be a string.")
          }
          function S(e) {
            ;(0, o.isNotUndefined)(e, "Options cannot be undefined."),
              (0, o.isRecordWithKeys)(
                e,
                ["hashAlgorithm"],
                "Sign message options has to be a record.",
              ),
              (0, o.isOneOf)(
                e.hashAlgorithm,
                ["SHA-256", "SHA-384", "SHA-512"],
                "Invalid hash algorithm.",
              )
          }
          function j(e) {
            ;(0, o.isNotUndefined)("Data has to be defined."),
              (0, o.assert)(ArrayBuffer.isView(e), "Input is not an ArrayBuffer.")
          }
          function O(e) {
            for (let t of ((0, o.assert)("object" == typeof e, "Input has to be an object."),
            (0, o.isNotNull)(e, "Input cannot be null."),
            Object.keys(e)))
              (0, o.isNumber)(Number(t), "Invalid array buffer index."),
                (0, o.assert)(!Number.isNaN(Number[t]), "Invalid array buffer index: NaN."),
                (0, o.isNumber)(e[t], "Invalid array buffer byte.")
          }
          function I(e) {
            ;(0, o.isExactly)(
              e.type,
              "local",
              "Hardware wallets don't support this API method currently.",
            )
          }
          function R(e) {
            ;(0, o.isRecord)(e, "Raw data item has to be a record."),
              v(e.data),
              e.target && f(e.target),
              e.anchor && (0, o.isString)(e.anchor, "Anchor needs to be a string."),
              e.tags && (0, o.isArrayOfType)(e.tags, m, "Invalid tags array.")
          }
          function x(e) {
            E(e)
          }
          function T(e, t) {
            ;(0, o.assert)(null === e, t)
          }
          function k(e, t) {
            ;(0, o.assert)(void 0 === e, t)
          }
          function C(e) {
            ;(0, o.isOneOfType)(e, [o.isNumber, T, k], "Invalid balance.")
          }
          function N(e) {
            for (let t in ((0, o.isRecord)(e, "Invalid or no token state."),
            (0, o.isString)(e.ticker, "Invalid token ticker: not a string."),
            (0, o.isRecord)(e.balances, "Invalid balances object: not a record."),
            e.balances))
              (0, o.isString)(t), C(e.balances[t])
          }
          function U(e) {
            ;(0, o.isArray)(e, "Input is not an array."),
              (0, o.assert)(e.length > 0, "Array is empty.")
          }
          function B(e, t) {
            let r
            ;(0, o.isString)(e, t)
            try {
              r = new URL(e)
            } catch {
              throw TypeError(t)
            }
            ;(0, o.isOneOf)(r.protocol, ["http:", "https:"], t)
          }
          function D(e) {
            let t = ""
            "string" == typeof e ? (t = e) : e instanceof Error && (t = e.message),
              (0, o.assert)(!t.includes("User cancelled the auth"), "User cancelled the operation")
          }
        },
        {
          "~applications/permissions": "8nmiz",
          "./format": "k0ARn",
          "typed-assert": "62Y1j",
          "~subscriptions/subscription": "yHzLa",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      "8nmiz": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "permissionData", () => s),
            n.export(r, "getMissingPermissions", () => a)
          let s = {
            ACCESS_ADDRESS: "permissionDescriptionAccessAddress",
            ACCESS_PUBLIC_KEY: "permissionDescriptionAccessPublicKey",
            ACCESS_ALL_ADDRESSES: "permissionDescriptionAccessAllAddresses",
            SIGN_TRANSACTION: "permissionDescriptionSign",
            ENCRYPT: "permissionDescriptionEncrypt",
            DECRYPT: "permissionDescriptionDecrypt",
            SIGNATURE: "permissionDescriptionSignature",
            ACCESS_ARWEAVE_CONFIG: "permissionDescriptionArweaveConfig",
            DISPATCH: "permissionDescriptionDispatch",
            ACCESS_TOKENS: "permissionAccessTokens",
          }
          function a(e, t) {
            let r = t.filter((t) => !e.includes(t))
            return r
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "62Y1j": [
        function (e, t, r) {
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.check =
              r.isPromise =
              r.isInstanceOf =
              r.isOneOfType =
              r.isOneOf =
              r.isOptionOfType =
              r.isArrayOfType =
              r.isRecordOfType =
              r.isArray =
              r.isRecordWithKeys =
              r.isRecord =
              r.isDate =
              r.isString =
              r.isNumber =
              r.isBoolean =
              r.isExactly =
              r.isNotVoid =
              r.isNotUndefined =
              r.isNotNull =
              r.isNever =
              r.isUnknown =
              r.safeJsonParse =
              r.setBaseAssert =
              r.assert =
              r.defaultAssert =
                void 0)
          let n = (e) => `expected to be ${e}`
          r.defaultAssert = (e, t) => {
            if (!e) throw TypeError(t)
          }
          let s = r.defaultAssert
          function a(e, t = n("not null")) {
            ;(0, r.assert)(null !== e, t)
          }
          function o(e, t = n("not undefined")) {
            ;(0, r.assert)(void 0 !== e, t)
          }
          function i(e, t = n("a string")) {
            ;(0, r.assert)("string" == typeof e, t)
          }
          function l(e, t = n("a record")) {
            for (let n of ((0, r.assert)("object" == typeof e, t), a(e, t), Object.keys(e))) i(n, t)
          }
          function u(e, t = n("an array")) {
            ;(0, r.assert)(Array.isArray(e), t)
          }
          function c(e, t, s = n("an instance of given constructor")) {
            ;(0, r.assert)(e instanceof t, s)
          }
          ;(r.assert = (e, t) => s(e, t)),
            (r.setBaseAssert = function (e) {
              e && (s = e)
            }),
            (r.safeJsonParse = (e) => JSON.parse(e)),
            (r.isUnknown = function (e) {
              return !0
            }),
            (r.isNever = function (e, t = n("unreachable")) {
              throw TypeError(t)
            }),
            (r.isNotNull = a),
            (r.isNotUndefined = o),
            (r.isNotVoid = function (e, t = n("neither null nor undefined")) {
              ;(0, r.assert)(null != e, t)
            }),
            (r.isExactly = function (e, t, s = n(`exactly ${t}`)) {
              ;(0, r.assert)(e === t, s)
            }),
            (r.isBoolean = function (e, t = n("a boolean")) {
              ;(0, r.assert)("boolean" == typeof e, t)
            }),
            (r.isNumber = function (e, t = n("a number")) {
              ;(0, r.assert)("number" == typeof e, t)
            }),
            (r.isString = i),
            (r.isDate = function (e, t = n("a Date")) {
              ;(0, r.assert)(e instanceof Date, t)
            }),
            (r.isRecord = l),
            (r.isRecordWithKeys = function (e, t, r = n(`a record with keys ${t.join(", ")}`)) {
              for (let n of (l(e, r), t)) o(e[n])
            }),
            (r.isArray = u),
            (r.isRecordOfType = function (
              e,
              t,
              r = n("a record of given type"),
              s = n("of given type"),
            ) {
              for (let n of (l(e, r), Object.values(e))) t(n, s)
            }),
            (r.isArrayOfType = function (
              e,
              t,
              r = n("an array of given type"),
              s = n("of given type"),
            ) {
              for (let n of (u(e, r), e)) t(n, s)
            }),
            (r.isOptionOfType = function (e, t, r = n("option of given type")) {
              void 0 !== e && t(e, r)
            }),
            (r.isOneOf = function (e, t, s = n(`one of ${t.join(", ")}`)) {
              ;(0, r.assert)(t.includes(e), s)
            }),
            (r.isOneOfType = function (e, t, r = n("one of type"), s) {
              for (let r of t)
                try {
                  r(e, s)
                  return
                } catch (e) {}
              throw TypeError(r)
            }),
            (r.isInstanceOf = c),
            (r.isPromise = function (e, t = n("a promise")) {
              c(e, Promise, t)
            }),
            (r.check = function (e) {
              return (t) => {
                try {
                  return e(t), !0
                } catch (e) {
                  return !1
                }
              }
            })
        },
        {},
      ],
      yHzLa: [
        function (e, t, r) {
          var n,
            s,
            a,
            o,
            i = e("@parcel/transformer-js/src/esmodule-helpers.js")
          i.defineInteropFlag(r),
            i.export(r, "SubscriptionStatus", () => a),
            i.export(r, "RecurringPaymentFrequency", () => o)
          var l = e("~applications/application"),
            u = i.interopDefault(l),
            c = e("~utils/storage")
          ;(r.default = class {
            #e
            constructor(e, t) {
              ;(this.activeAddress = e),
                (this.application = new u.default(t)),
                (this.applicationUrl = t),
                (this.#e = c.ExtensionStorage)
            }
          }),
            ((n = a || (a = {})).ACTIVE = "Active"),
            (n.EXPIRED = "Expired"),
            (n.CANCELED = "Canceled"),
            (n.AWAITING_PAYMENT = "Awaiting-Payment"),
            ((s = o || (o = {})).QUARTERLY = "Quarterly"),
            (s.MONTHLY = "Monthly"),
            (s.WEEKLY = "Weekly"),
            (s.DAILY = "Daily")
        },
        {
          "~applications/application": "lzUpm",
          "~utils/storage": "9fRwA",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      lzUpm: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "PREFIX", () => f),
            n.export(r, "defaultBundler", () => h),
            n.export(r, "pricingEndpoint", () => d)
          var s = e("./permissions"),
            a = e("./allowance"),
            o = e("@plasmohq/storage/hook"),
            i = e("~utils/storage"),
            l = e("~gateways/gateway"),
            u = e("bignumber.js"),
            c = n.interopDefault(u)
          let f = "app_",
            h = "https://turbo.ardrive.io",
            d = "https://payment.ardrive.io"
          r.default = class {
            #e
            constructor(e) {
              ;(this.url = e), (this.#e = i.ExtensionStorage)
            }
            async #t() {
              let e = await this.#e.get(`${f}${this.url}`)
              return e || {}
            }
            async updateSettings(e) {
              let t = await this.#t()
              for (let r in ("function" == typeof e && (e = await e(t)), e)) t[r] = e[r]
              let r = await this.#e.set(`${f}${this.url}`, t)
              return r
            }
            async getAppData() {
              let e = await this.#t()
              return { name: e.name, logo: e.logo }
            }
            async getPermissions() {
              let e = await this.#t()
              return e.permissions || []
            }
            async hasPermissions(e) {
              let t = await this.getPermissions(),
                r = (0, s.getMissingPermissions)(t, e)
              return { result: 0 === r.length, has: t, missing: r }
            }
            async isConnected() {
              let e = await this.getPermissions()
              return e.length > 0
            }
            async getGatewayConfig() {
              let e = await this.#t()
              return e.gateway || l.defaultGateway
            }
            async getBundler() {
              let e = await this.#t()
              return e.bundler || h
            }
            async getAllowance() {
              let e = await this.#t(),
                t = e.allowance || a.defaultAllowance
              return {
                enabled: t.enabled,
                limit: (0, c.default)(t.limit),
                spent: (0, c.default)(t.spent),
              }
            }
            async isBlocked() {
              let e = await this.#t()
              return !!e.blocked
            }
            hook() {
              return (0, o.useStorage)(
                { key: `${f}${this.url}`, instance: i.ExtensionStorage },
                (e) => {
                  if (void 0 === e) return e
                  let t = {
                    allowance: a.defaultAllowance,
                    gateway: l.defaultGateway,
                    bundler: h,
                    ...e,
                  }
                  return t
                },
              )
            }
          }
        },
        {
          "./permissions": "8nmiz",
          "./allowance": "bUEh6",
          "@plasmohq/storage/hook": "91QWS",
          "~utils/storage": "9fRwA",
          "~gateways/gateway": "dHAtj",
          "bignumber.js": "l9tLK",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      bUEh6: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "defaultAllowance", () => s)
          let s = { enabled: !0, limit: "1000000000000", spent: "0" }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "91QWS": [
        function (e, t, r) {
          var n,
            s = Object.create,
            a = Object.defineProperty,
            o = Object.getOwnPropertyDescriptor,
            i = Object.getOwnPropertyNames,
            l = Object.getPrototypeOf,
            u = Object.prototype.hasOwnProperty,
            c = (e, t, r, n) => {
              if ((t && "object" == typeof t) || "function" == typeof t)
                for (let s of i(t))
                  u.call(e, s) ||
                    s === r ||
                    a(e, s, { get: () => t[s], enumerable: !(n = o(t, s)) || n.enumerable })
              return e
            },
            f = {}
          ;((e, t) => {
            for (var r in t) a(e, r, { get: t[r], enumerable: !0 })
          })(f, { useStorage: () => m }),
            (t.exports = c(a({}, "__esModule", { value: !0 }), f))
          var h = e("36dec1c1bab540b0"),
            d = c(
              a(null != (n = e("c8025b1fa8e8f3d6")) ? s(l(n)) : {}, "default", {
                value: n,
                enumerable: !0,
              }),
              n,
            ),
            p = () => {
              try {
                let e =
                  globalThis.navigator?.userAgent.match(
                    /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i,
                  ) || []
                if ("Chrome" === e[1])
                  return (
                    100 > parseInt(e[2]) ||
                    globalThis.chrome.runtime?.getManifest()?.manifest_version === 2
                  )
              } catch {}
              return !1
            },
            g = class {
              #r
              #n
              get primaryClient() {
                return this.#n
              }
              #s
              get secondaryClient() {
                return this.#s
              }
              #a
              get area() {
                return this.#a
              }
              get hasWebApi() {
                try {
                  return "u" > typeof window && !!window.localStorage
                } catch (e) {
                  return console.error(e), !1
                }
              }
              #o = new Map()
              #i
              get copiedKeySet() {
                return this.#i
              }
              isCopied = (e) => this.hasWebApi && (this.allCopied || this.copiedKeySet.has(e))
              #l = !1
              get allCopied() {
                return this.#l
              }
              getExtStorageApi = () => globalThis.browser?.storage || globalThis.chrome?.storage
              get hasExtensionApi() {
                try {
                  return !!this.getExtStorageApi()
                } catch (e) {
                  return console.error(e), !1
                }
              }
              isWatchSupported = () => this.hasExtensionApi
              keyNamespace = ""
              isValidKey = (e) => e.startsWith(this.keyNamespace)
              getNamespacedKey = (e) => `${this.keyNamespace}${e}`
              getUnnamespacedKey = (e) => e.slice(this.keyNamespace.length)
              constructor({ area: e = "sync", allCopied: t = !1, copiedKeyList: r = [] } = {}) {
                this.setCopiedKeySet(r), (this.#a = e), (this.#l = t)
                try {
                  this.hasWebApi && (t || r.length > 0) && (this.#s = window.localStorage)
                } catch {}
                try {
                  this.hasExtensionApi &&
                    ((this.#r = this.getExtStorageApi()),
                    p()
                      ? (this.#n = (0, d.default)(this.#r[this.area], {
                          exclude: ["getBytesInUse"],
                          errorFirst: !1,
                        }))
                      : (this.#n = this.#r[this.area]))
                } catch {}
              }
              setCopiedKeySet(e) {
                this.#i = new Set(e)
              }
              rawGetAll = () => this.#n?.get()
              getAll = async () =>
                Object.entries(await this.rawGetAll())
                  .filter(([e]) => this.isValidKey(e))
                  .reduce((e, [t, r]) => ((e[this.getUnnamespacedKey(t)] = r), e), {})
              copy = async (e) => {
                let t = void 0 === e
                if ((!t && !this.copiedKeySet.has(e)) || !this.allCopied || !this.hasExtensionApi)
                  return !1
                let r = this.allCopied
                  ? await this.rawGetAll()
                  : await this.#n.get((t ? [...this.copiedKeySet] : [e]).map(this.getNamespacedKey))
                if (!r) return !1
                let n = !1
                for (let e in r) {
                  let t = r[e],
                    s = this.#s?.getItem(e)
                  this.#s?.setItem(e, t), (n ||= t !== s)
                }
                return n
              }
              rawGet = async (e) =>
                this.hasExtensionApi
                  ? (await this.#n.get(e))[e]
                  : this.isCopied(e)
                    ? this.#s?.getItem(e)
                    : null
              rawSet = async (e, t) => (
                this.isCopied(e) && this.#s?.setItem(e, t),
                this.hasExtensionApi && (await this.#n.set({ [e]: t })),
                null
              )
              clear = async (e = !1) => {
                e && this.#s?.clear(), await this.#n.clear()
              }
              rawRemove = async (e) => {
                this.isCopied(e) && this.#s?.removeItem(e),
                  this.hasExtensionApi && (await this.#n.remove(e))
              }
              removeAll = async () => {
                let e = Object.keys(await this.getAll())
                await Promise.all(e.map(this.remove))
              }
              watch = (e) => {
                let t = this.isWatchSupported()
                return t && this.#u(e), t
              }
              #u = (e) => {
                for (let t in e) {
                  let r = this.getNamespacedKey(t),
                    n = this.#o.get(r)?.callbackSet || new Set()
                  if ((n.add(e[t]), n.size > 1)) continue
                  let s = (e, t) => {
                    if (t !== this.area || !e[r]) return
                    let n = this.#o.get(r)
                    if (!n) throw Error(`Storage comms does not exist for nsKey: ${r}`)
                    Promise.all([
                      this.parseValue(e[r].newValue),
                      this.parseValue(e[r].oldValue),
                    ]).then(([e, r]) => {
                      for (let s of n.callbackSet) s({ newValue: e, oldValue: r }, t)
                    })
                  }
                  this.#r.onChanged.addListener(s), this.#o.set(r, { callbackSet: n, listener: s })
                }
              }
              unwatch = (e) => {
                let t = this.isWatchSupported()
                return t && this.#c(e), t
              }
              #c(e) {
                for (let t in e) {
                  let r = this.getNamespacedKey(t),
                    n = e[t],
                    s = this.#o.get(r)
                  s &&
                    (s.callbackSet.delete(n),
                    0 === s.callbackSet.size &&
                      (this.#o.delete(r), this.#r.onChanged.removeListener(s.listener)))
                }
              }
              unwatchAll = () => this.#f()
              #f() {
                this.#o.forEach(({ listener: e }) => this.#r.onChanged.removeListener(e)),
                  this.#o.clear()
              }
              async getItem(e) {
                return this.get(e)
              }
              async setItem(e, t) {
                await this.set(e, t)
              }
              async removeItem(e) {
                return this.remove(e)
              }
            },
            y = class extends g {
              get = async (e) => {
                let t = this.getNamespacedKey(e),
                  r = await this.rawGet(t)
                return this.parseValue(r)
              }
              set = async (e, t) => {
                let r = this.getNamespacedKey(e),
                  n = JSON.stringify(t)
                return this.rawSet(r, n)
              }
              remove = async (e) => {
                let t = this.getNamespacedKey(e)
                return this.rawRemove(t)
              }
              setNamespace = (e) => {
                this.keyNamespace = e
              }
              parseValue = async (e) => {
                try {
                  if (void 0 !== e) return JSON.parse(e)
                } catch (e) {
                  console.error(e)
                }
              }
            }
          function m(e, t) {
            let r = "object" == typeof e,
              n = r ? e.key : e,
              [s, a] = (0, h.useState)(t),
              o = (0, h.useRef)(!1),
              i = (0, h.useRef)(t instanceof Function ? t() : t)
            ;(0, h.useEffect)(() => {
              i.current = s
            }, [s])
            let l = (0, h.useRef)(r ? e.instance : new y()),
              u = (0, h.useCallback)((e) => l.current.set(n, void 0 !== e ? e : i.current), [n]),
              c = (0, h.useCallback)(
                async (e) => {
                  let t = e instanceof Function ? e(i.current) : e
                  await u(t), o.current && a(t)
                },
                [u],
              )
            ;(0, h.useEffect)(() => {
              o.current = !0
              let e = {
                [n]: (e) => {
                  o.current && a(e.newValue)
                },
              }
              return (
                l.current.watch(e),
                l.current.get(n)?.then((e) => {
                  if (t instanceof Function) {
                    let r = t?.(e, !0)
                    void 0 !== r && c(r)
                  } else a(void 0 !== e ? e : t)
                }),
                () => {
                  ;(o.current = !1), l.current.unwatch(e), t instanceof Function && a(t)
                }
              )
            }, [n, c])
            let f = (0, h.useCallback)(() => {
              l.current.remove(n), a(void 0)
            }, [n])
            return [s, c, { setRenderValue: a, setStoreValue: u, remove: f }]
          }
        },
        { "36dec1c1bab540b0": "a8qhJ", c8025b1fa8e8f3d6: "lWzVJ" },
      ],
      a8qhJ: [
        function (e, t, r) {
          t.exports = e("956f36295e4e0134")
        },
        { "956f36295e4e0134": "iTdc5" },
      ],
      iTdc5: [
        function (e, t, r) {
          var n = Symbol.for("react.element"),
            s = Symbol.for("react.portal"),
            a = Symbol.for("react.fragment"),
            o = Symbol.for("react.strict_mode"),
            i = Symbol.for("react.profiler"),
            l = Symbol.for("react.provider"),
            u = Symbol.for("react.context"),
            c = Symbol.for("react.forward_ref"),
            f = Symbol.for("react.suspense"),
            h = Symbol.for("react.memo"),
            d = Symbol.for("react.lazy"),
            p = Symbol.iterator,
            g = {
              isMounted: function () {
                return !1
              },
              enqueueForceUpdate: function () {},
              enqueueReplaceState: function () {},
              enqueueSetState: function () {},
            },
            y = Object.assign,
            m = {}
          function w(e, t, r) {
            ;(this.props = e), (this.context = t), (this.refs = m), (this.updater = r || g)
          }
          function b() {}
          function v(e, t, r) {
            ;(this.props = e), (this.context = t), (this.refs = m), (this.updater = r || g)
          }
          ;(w.prototype.isReactComponent = {}),
            (w.prototype.setState = function (e, t) {
              if ("object" != typeof e && "function" != typeof e && null != e)
                throw Error(
                  "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
                )
              this.updater.enqueueSetState(this, e, t, "setState")
            }),
            (w.prototype.forceUpdate = function (e) {
              this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }),
            (b.prototype = w.prototype)
          var A = (v.prototype = new b())
          ;(A.constructor = v), y(A, w.prototype), (A.isPureReactComponent = !0)
          var E = Array.isArray,
            _ = Object.prototype.hasOwnProperty,
            S = { current: null },
            j = { key: !0, ref: !0, __self: !0, __source: !0 }
          function O(e, t, r) {
            var s,
              a = {},
              o = null,
              i = null
            if (null != t)
              for (s in (void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (o = "" + t.key), t))
                _.call(t, s) && !j.hasOwnProperty(s) && (a[s] = t[s])
            var l = arguments.length - 2
            if (1 === l) a.children = r
            else if (1 < l) {
              for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2]
              a.children = u
            }
            if (e && e.defaultProps)
              for (s in (l = e.defaultProps)) void 0 === a[s] && (a[s] = l[s])
            return { $$typeof: n, type: e, key: o, ref: i, props: a, _owner: S.current }
          }
          function I(e) {
            return "object" == typeof e && null !== e && e.$$typeof === n
          }
          var R = /\/+/g
          function x(e, t) {
            var r, n
            return "object" == typeof e && null !== e && null != e.key
              ? ((r = "" + e.key),
                (n = { "=": "=0", ":": "=2" }),
                "$" +
                  r.replace(/[=:]/g, function (e) {
                    return n[e]
                  }))
              : t.toString(36)
          }
          function T(e, t, r) {
            if (null == e) return e
            var a = [],
              o = 0
            return (
              (function e(t, r, a, o, i) {
                var l,
                  u,
                  c,
                  f = typeof t
                ;("undefined" === f || "boolean" === f) && (t = null)
                var h = !1
                if (null === t) h = !0
                else
                  switch (f) {
                    case "string":
                    case "number":
                      h = !0
                      break
                    case "object":
                      switch (t.$$typeof) {
                        case n:
                        case s:
                          h = !0
                      }
                  }
                if (h)
                  return (
                    (i = i((h = t))),
                    (t = "" === o ? "." + x(h, 0) : o),
                    E(i)
                      ? ((a = ""),
                        null != t && (a = t.replace(R, "$&/") + "/"),
                        e(i, r, a, "", function (e) {
                          return e
                        }))
                      : null != i &&
                        (I(i) &&
                          ((l = i),
                          (u =
                            a +
                            (!i.key || (h && h.key === i.key)
                              ? ""
                              : ("" + i.key).replace(R, "$&/") + "/") +
                            t),
                          (i = {
                            $$typeof: n,
                            type: l.type,
                            key: u,
                            ref: l.ref,
                            props: l.props,
                            _owner: l._owner,
                          })),
                        r.push(i)),
                    1
                  )
                if (((h = 0), (o = "" === o ? "." : o + ":"), E(t)))
                  for (var d = 0; d < t.length; d++) {
                    var g = o + x((f = t[d]), d)
                    h += e(f, r, a, g, i)
                  }
                else if (
                  "function" ==
                  typeof (g =
                    null === (c = t) || "object" != typeof c
                      ? null
                      : "function" == typeof (c = (p && c[p]) || c["@@iterator"])
                        ? c
                        : null)
                )
                  for (t = g.call(t), d = 0; !(f = t.next()).done; )
                    (g = o + x((f = f.value), d++)), (h += e(f, r, a, g, i))
                else if ("object" === f)
                  throw Error(
                    "Objects are not valid as a React child (found: " +
                      ("[object Object]" === (r = String(t))
                        ? "object with keys {" + Object.keys(t).join(", ") + "}"
                        : r) +
                      "). If you meant to render a collection of children, use an array instead.",
                  )
                return h
              })(e, a, "", "", function (e) {
                return t.call(r, e, o++)
              }),
              a
            )
          }
          function k(e) {
            if (-1 === e._status) {
              var t = e._result
              ;(t = t()).then(
                function (t) {
                  ;(0 === e._status || -1 === e._status) && ((e._status = 1), (e._result = t))
                },
                function (t) {
                  ;(0 === e._status || -1 === e._status) && ((e._status = 2), (e._result = t))
                },
              ),
                -1 === e._status && ((e._status = 0), (e._result = t))
            }
            if (1 === e._status) return e._result.default
            throw e._result
          }
          var C = { current: null },
            N = { transition: null }
          ;(r.Children = {
            map: T,
            forEach: function (e, t, r) {
              T(
                e,
                function () {
                  t.apply(this, arguments)
                },
                r,
              )
            },
            count: function (e) {
              var t = 0
              return (
                T(e, function () {
                  t++
                }),
                t
              )
            },
            toArray: function (e) {
              return (
                T(e, function (e) {
                  return e
                }) || []
              )
            },
            only: function (e) {
              if (!I(e))
                throw Error("React.Children.only expected to receive a single React element child.")
              return e
            },
          }),
            (r.Component = w),
            (r.Fragment = a),
            (r.Profiler = i),
            (r.PureComponent = v),
            (r.StrictMode = o),
            (r.Suspense = f),
            (r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
              ReactCurrentDispatcher: C,
              ReactCurrentBatchConfig: N,
              ReactCurrentOwner: S,
            }),
            (r.cloneElement = function (e, t, r) {
              if (null == e)
                throw Error(
                  "React.cloneElement(...): The argument must be a React element, but you passed " +
                    e +
                    ".",
                )
              var s = y({}, e.props),
                a = e.key,
                o = e.ref,
                i = e._owner
              if (null != t) {
                if (
                  (void 0 !== t.ref && ((o = t.ref), (i = S.current)),
                  void 0 !== t.key && (a = "" + t.key),
                  e.type && e.type.defaultProps)
                )
                  var l = e.type.defaultProps
                for (u in t)
                  _.call(t, u) &&
                    !j.hasOwnProperty(u) &&
                    (s[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u])
              }
              var u = arguments.length - 2
              if (1 === u) s.children = r
              else if (1 < u) {
                l = Array(u)
                for (var c = 0; c < u; c++) l[c] = arguments[c + 2]
                s.children = l
              }
              return { $$typeof: n, type: e.type, key: a, ref: o, props: s, _owner: i }
            }),
            (r.createContext = function (e) {
              return (
                ((e = {
                  $$typeof: u,
                  _currentValue: e,
                  _currentValue2: e,
                  _threadCount: 0,
                  Provider: null,
                  Consumer: null,
                  _defaultValue: null,
                  _globalName: null,
                }).Provider = { $$typeof: l, _context: e }),
                (e.Consumer = e)
              )
            }),
            (r.createElement = O),
            (r.createFactory = function (e) {
              var t = O.bind(null, e)
              return (t.type = e), t
            }),
            (r.createRef = function () {
              return { current: null }
            }),
            (r.forwardRef = function (e) {
              return { $$typeof: c, render: e }
            }),
            (r.isValidElement = I),
            (r.lazy = function (e) {
              return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: k }
            }),
            (r.memo = function (e, t) {
              return { $$typeof: h, type: e, compare: void 0 === t ? null : t }
            }),
            (r.startTransition = function (e) {
              var t = N.transition
              N.transition = {}
              try {
                e()
              } finally {
                N.transition = t
              }
            }),
            (r.unstable_act = function () {
              throw Error("act(...) is not supported in production builds of React.")
            }),
            (r.useCallback = function (e, t) {
              return C.current.useCallback(e, t)
            }),
            (r.useContext = function (e) {
              return C.current.useContext(e)
            }),
            (r.useDebugValue = function () {}),
            (r.useDeferredValue = function (e) {
              return C.current.useDeferredValue(e)
            }),
            (r.useEffect = function (e, t) {
              return C.current.useEffect(e, t)
            }),
            (r.useId = function () {
              return C.current.useId()
            }),
            (r.useImperativeHandle = function (e, t, r) {
              return C.current.useImperativeHandle(e, t, r)
            }),
            (r.useInsertionEffect = function (e, t) {
              return C.current.useInsertionEffect(e, t)
            }),
            (r.useLayoutEffect = function (e, t) {
              return C.current.useLayoutEffect(e, t)
            }),
            (r.useMemo = function (e, t) {
              return C.current.useMemo(e, t)
            }),
            (r.useReducer = function (e, t, r) {
              return C.current.useReducer(e, t, r)
            }),
            (r.useRef = function (e) {
              return C.current.useRef(e)
            }),
            (r.useState = function (e) {
              return C.current.useState(e)
            }),
            (r.useSyncExternalStore = function (e, t, r) {
              return C.current.useSyncExternalStore(e, t, r)
            }),
            (r.useTransition = function () {
              return C.current.useTransition()
            }),
            (r.version = "18.2.0")
        },
        {},
      ],
      lWzVJ: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "default", () => o)
          let s = (e, t, r, n) =>
              function (...s) {
                let a = t.promiseModule
                return new a((a, o) => {
                  t.multiArgs
                    ? s.push((...e) => {
                        t.errorFirst ? (e[0] ? o(e) : (e.shift(), a(e))) : a(e)
                      })
                    : t.errorFirst
                      ? s.push((e, t) => {
                          e ? o(e) : a(t)
                        })
                      : s.push(a)
                  let i = this === r ? n : this
                  Reflect.apply(e, i, s)
                })
              },
            a = new WeakMap()
          function o(e, t) {
            t = { exclude: [/.+(?:Sync|Stream)$/], errorFirst: !0, promiseModule: Promise, ...t }
            let r = typeof e
            if (!(null !== e && ("object" === r || "function" === r)))
              throw TypeError(
                `Expected \`input\` to be a \`Function\` or \`Object\`, got \`${null === e ? "null" : r}\``,
              )
            let n = (e, r) => {
                let n = a.get(e)
                if ((n || ((n = {}), a.set(e, n)), r in n)) return n[r]
                let s = (e) => ("string" == typeof e || "symbol" == typeof r ? r === e : e.test(r)),
                  o = Reflect.getOwnPropertyDescriptor(e, r),
                  i = void 0 === o || o.writable || o.configurable,
                  l = t.include ? t.include.some((e) => s(e)) : !t.exclude.some((e) => s(e)),
                  u = l && i
                return (n[r] = u), u
              },
              o = new WeakMap(),
              i = new Proxy(e, {
                apply(e, r, n) {
                  let a = o.get(e)
                  if (a) return Reflect.apply(a, r, n)
                  let l = t.excludeMain ? e : s(e, t, i, e)
                  return o.set(e, l), Reflect.apply(l, r, n)
                },
                get(e, r) {
                  let a = e[r]
                  if (!n(e, r) || a === Function.prototype[r]) return a
                  let l = o.get(a)
                  if (l) return l
                  if ("function" == typeof a) {
                    let r = s(a, t, i, e)
                    return o.set(a, r), r
                  }
                  return a
                },
              })
            return i
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "9fRwA": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "ExtensionStorage", () => a),
            n.export(r, "TempTransactionStorage", () => o),
            n.export(r, "TRANSFER_TX_STORAGE", () => i),
            n.export(r, "OLD_STORAGE_NAME", () => l)
          var s = e("@plasmohq/storage")
          let a = new s.Storage({ area: "local" }),
            o = new s.Storage({ area: "session" }),
            i = "last_transfer_tx",
            l = "persist:root"
        },
        { "@plasmohq/storage": "25Hq9", "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "25Hq9": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "BaseStorage", () => i),
            n.export(r, "Storage", () => l)
          var s = e("pify"),
            a = n.interopDefault(s),
            o = () => {
              try {
                let e =
                  globalThis.navigator?.userAgent.match(
                    /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i,
                  ) || []
                if ("Chrome" === e[1])
                  return (
                    100 > parseInt(e[2]) ||
                    globalThis.chrome.runtime?.getManifest()?.manifest_version === 2
                  )
              } catch {}
              return !1
            },
            i = class {
              #r
              #n
              get primaryClient() {
                return this.#n
              }
              #s
              get secondaryClient() {
                return this.#s
              }
              #o
              get area() {
                return this.#o
              }
              get hasWebApi() {
                try {
                  return "u" > typeof window && !!window.localStorage
                } catch (e) {
                  return console.error(e), !1
                }
              }
              #a = new Map()
              #l
              get copiedKeySet() {
                return this.#l
              }
              isCopied = (e) => this.hasWebApi && (this.allCopied || this.copiedKeySet.has(e))
              #i = !1
              get allCopied() {
                return this.#i
              }
              getExtStorageApi = () => globalThis.browser?.storage || globalThis.chrome?.storage
              get hasExtensionApi() {
                try {
                  return !!this.getExtStorageApi()
                } catch (e) {
                  return console.error(e), !1
                }
              }
              isWatchSupported = () => this.hasExtensionApi
              keyNamespace = ""
              isValidKey = (e) => e.startsWith(this.keyNamespace)
              getNamespacedKey = (e) => `${this.keyNamespace}${e}`
              getUnnamespacedKey = (e) => e.slice(this.keyNamespace.length)
              constructor({ area: e = "sync", allCopied: t = !1, copiedKeyList: r = [] } = {}) {
                this.setCopiedKeySet(r), (this.#o = e), (this.#i = t)
                try {
                  this.hasWebApi && (t || r.length > 0) && (this.#s = window.localStorage)
                } catch {}
                try {
                  this.hasExtensionApi &&
                    ((this.#r = this.getExtStorageApi()),
                    o()
                      ? (this.#n = (0, a.default)(this.#r[this.area], {
                          exclude: ["getBytesInUse"],
                          errorFirst: !1,
                        }))
                      : (this.#n = this.#r[this.area]))
                } catch {}
              }
              setCopiedKeySet(e) {
                this.#l = new Set(e)
              }
              rawGetAll = () => this.#n?.get()
              getAll = async () =>
                Object.entries(await this.rawGetAll())
                  .filter(([e]) => this.isValidKey(e))
                  .reduce((e, [t, r]) => ((e[this.getUnnamespacedKey(t)] = r), e), {})
              copy = async (e) => {
                let t = void 0 === e
                if ((!t && !this.copiedKeySet.has(e)) || !this.allCopied || !this.hasExtensionApi)
                  return !1
                let r = this.allCopied
                  ? await this.rawGetAll()
                  : await this.#n.get((t ? [...this.copiedKeySet] : [e]).map(this.getNamespacedKey))
                if (!r) return !1
                let n = !1
                for (let e in r) {
                  let t = r[e],
                    s = this.#s?.getItem(e)
                  this.#s?.setItem(e, t), (n ||= t !== s)
                }
                return n
              }
              rawGet = async (e) =>
                this.hasExtensionApi
                  ? (await this.#n.get(e))[e]
                  : this.isCopied(e)
                    ? this.#s?.getItem(e)
                    : null
              rawSet = async (e, t) => (
                this.isCopied(e) && this.#s?.setItem(e, t),
                this.hasExtensionApi && (await this.#n.set({ [e]: t })),
                null
              )
              clear = async (e = !1) => {
                e && this.#s?.clear(), await this.#n.clear()
              }
              rawRemove = async (e) => {
                this.isCopied(e) && this.#s?.removeItem(e),
                  this.hasExtensionApi && (await this.#n.remove(e))
              }
              removeAll = async () => {
                let e = Object.keys(await this.getAll())
                await Promise.all(e.map(this.remove))
              }
              watch = (e) => {
                let t = this.isWatchSupported()
                return t && this.#u(e), t
              }
              #u = (e) => {
                for (let t in e) {
                  let r = this.getNamespacedKey(t),
                    n = this.#a.get(r)?.callbackSet || new Set()
                  if ((n.add(e[t]), n.size > 1)) continue
                  let s = (e, t) => {
                    if (t !== this.area || !e[r]) return
                    let n = this.#a.get(r)
                    if (!n) throw Error(`Storage comms does not exist for nsKey: ${r}`)
                    Promise.all([
                      this.parseValue(e[r].newValue),
                      this.parseValue(e[r].oldValue),
                    ]).then(([e, r]) => {
                      for (let s of n.callbackSet) s({ newValue: e, oldValue: r }, t)
                    })
                  }
                  this.#r.onChanged.addListener(s), this.#a.set(r, { callbackSet: n, listener: s })
                }
              }
              unwatch = (e) => {
                let t = this.isWatchSupported()
                return t && this.#c(e), t
              }
              #c(e) {
                for (let t in e) {
                  let r = this.getNamespacedKey(t),
                    n = e[t],
                    s = this.#a.get(r)
                  s &&
                    (s.callbackSet.delete(n),
                    0 === s.callbackSet.size &&
                      (this.#a.delete(r), this.#r.onChanged.removeListener(s.listener)))
                }
              }
              unwatchAll = () => this.#h()
              #h() {
                this.#a.forEach(({ listener: e }) => this.#r.onChanged.removeListener(e)),
                  this.#a.clear()
              }
              async getItem(e) {
                return this.get(e)
              }
              async setItem(e, t) {
                await this.set(e, t)
              }
              async removeItem(e) {
                return this.remove(e)
              }
            },
            l = class extends i {
              get = async (e) => {
                let t = this.getNamespacedKey(e),
                  r = await this.rawGet(t)
                return this.parseValue(r)
              }
              set = async (e, t) => {
                let r = this.getNamespacedKey(e),
                  n = JSON.stringify(t)
                return this.rawSet(r, n)
              }
              remove = async (e) => {
                let t = this.getNamespacedKey(e)
                return this.rawRemove(t)
              }
              setNamespace = (e) => {
                this.keyNamespace = e
              }
              parseValue = async (e) => {
                try {
                  if (void 0 !== e) return JSON.parse(e)
                } catch (e) {
                  console.error(e)
                }
              }
            }
        },
        { pify: "lWzVJ", "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      dHAtj: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(r, "suggestedGateways", () => s),
            n.export(r, "testnets", () => a),
            n.export(r, "fallbackGateway", () => o),
            n.export(r, "printTxWorkingGateways", () => i),
            n.export(r, "txHistoryGateways", () => l),
            n.export(r, "defaultGateway", () => u)
          let s = [
              { host: "arweave.net", port: 443, protocol: "https" },
              { host: "ar-io.net", port: 443, protocol: "https" },
              { host: "arweave.dev", port: 443, protocol: "https" },
              { host: "g8way.io", port: 443, protocol: "https" },
            ],
            a = [
              { host: "www.arweave.run", port: 443, protocol: "https" },
              { host: "testnet.redstone.tools", port: 443, protocol: "https" },
            ],
            o = { host: "ar-io.dev", port: 443, protocol: "https" },
            i = [
              { host: "arweave-search.goldsky.com", port: 443, protocol: "https" },
              { host: "permagate.io", port: 443, protocol: "https" },
              { host: "ar-io.dev", port: 443, protocol: "https" },
              { host: "arweave.dev", port: 443, protocol: "https" },
            ],
            l = [s[1], s[0], s[3]],
            u = s[0]
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "1wVK5": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = { functionName: "subscription", permissions: ["ACCESS_ADDRESS"] })
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "31j3w": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = (e) => {
              let t = [
                "arweaveAccountAddress",
                "applicationName",
                "subscriptionName",
                "subscriptionFeeAmount",
                "recurringPaymentFrequency",
                "subscriptionManagementUrl",
                "subscriptionEndDate",
              ]
              for (let r of t) if (void 0 === e[r]) throw Error(`Missing required field: ${r}`)
              let r = [...t, "applicationIcon"]
              return (
                Object.keys(e).forEach((e) => {
                  if (!r.includes(e)) throw Error(`Unexpected extra field: ${e}`)
                }),
                [{ ...e, applicationIcon: e.applicationIcon }]
              )
            })
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      g2HC9: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = { functionName: "privateHash", permissions: ["SIGNATURE"] })
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "1GLFn": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "finalizer", () => a)
          var s = e("~utils/assertions")
          let a = (e) => new Uint8Array(e)
          r.default = (e, t) => ((0, s.isArrayBuffer)(e), [Object.values(e), t])
        },
        { "~utils/assertions": "0UJ99", "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "94R61": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = { functionName: "verifyMessage", permissions: ["SIGNATURE"] })
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      hypMH: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r)
          var s = e("~utils/assertions"),
            a = e("arweave"),
            o = n.interopDefault(a)
          r.default = (e, t, r, n) => (
            (0, s.isArrayBuffer)(e),
            "string" == typeof t && (t = (0, o.default).utils.b64UrlToBuffer(t)),
            (0, s.isArrayBuffer)(t),
            [Object.values(e), Object.values(t), r, n]
          )
        },
        {
          "~utils/assertions": "0UJ99",
          arweave: "d5qd5",
          "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2",
        },
      ],
      "4Ug6R": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = { functionName: "batchSignDataItem", permissions: ["SIGN_TRANSACTION"] })
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      c5fVx: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "finalizer", () => o)
          var s = e("~utils/assertions")
          let a = async (e) => {
              if (!Array.isArray(e)) throw Error("Input must be an array of data items")
              let t = e.reduce((e, t) => {
                let r =
                  "string" == typeof t.data
                    ? new TextEncoder().encode(t.data).length
                    : t.data.length
                return e + r
              }, 0)
              if (t > 204800) throw Error("Total size of data items exceeds 200 KB")
              let r = e.map((e) => {
                let t
                return (
                  "string" != typeof e.data
                    ? ((0, s.isArrayBuffer)(e.data), (t = { ...e, data: Array.from(e.data) }))
                    : (t = { ...e, data: Array.from(new TextEncoder().encode(e.data)) }),
                  t
                )
              })
              return [r]
            },
            o = (e) => e.map((e) => new Uint8Array(e).buffer)
          r.default = a
        },
        { "~utils/assertions": "0UJ99", "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "2uPdW": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = { functionName: "signDataItem", permissions: ["SIGN_TRANSACTION"] })
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "03nwn": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r), n.export(r, "finalizer", () => o)
          var s = e("~utils/assertions")
          let a = async (e) => {
              let t
              return (
                "string" != typeof e.data
                  ? ((0, s.isArrayBuffer)(e.data), (t = { ...e, data: Array.from(e.data) }))
                  : (t = { ...e, data: Array.from(new TextEncoder().encode(e.data)) }),
                [t]
              )
            },
            o = (e) => {
              let t = new Uint8Array(e)
              return t.buffer
            }
          r.default = a
        },
        { "~utils/assertions": "0UJ99", "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      lFuxJ: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = { functionName: "userTokens", permissions: ["ACCESS_TOKENS"] })
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "9uuJo": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = () => {})
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "6oN4b": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = { functionName: "tokenBalance", permissions: ["ACCESS_TOKENS"] })
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "1cGsr": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),
            (r.default = () => {})
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
      "9mMlk": [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js")
          n.defineInteropFlag(r),
            n.export(
              r,
              "default",
              () =>
                function (e) {
                  return {
                    all: (e = e || new Map()),
                    on: function (t, r) {
                      var n = e.get(t)
                      n ? n.push(r) : e.set(t, [r])
                    },
                    off: function (t, r) {
                      var n = e.get(t)
                      n && (r ? n.splice(n.indexOf(r) >>> 0, 1) : e.set(t, []))
                    },
                    emit: function (t, r) {
                      var n = e.get(t)
                      n &&
                        n.slice().map(function (e) {
                          e(r)
                        }),
                        (n = e.get("*")) &&
                          n.slice().map(function (e) {
                            e(t, r)
                          })
                    },
                  }
                },
            )
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "fRZO2" },
      ],
    },
    ["bBpro"],
    "bBpro",
    "parcelRequired52c",
  ),
  (globalThis.define = t)