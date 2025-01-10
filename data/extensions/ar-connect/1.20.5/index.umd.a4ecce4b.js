var e, t
"function" == typeof (e = globalThis.define) && ((t = e), (e = null)),
  (function (t, a, n, i, r) {
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
      s = "function" == typeof o[i] && o[i],
      l = s.cache || {},
      u =
        "undefined" != typeof module &&
        "function" == typeof module.require &&
        module.require.bind(module)
    function d(e, a) {
      if (!l[e]) {
        if (!t[e]) {
          var n = "function" == typeof o[i] && o[i]
          if (!a && n) return n(e, !0)
          if (s) return s(e, !0)
          if (u && "string" == typeof e) return u(e)
          var r = Error("Cannot find module '" + e + "'")
          throw ((r.code = "MODULE_NOT_FOUND"), r)
        }
        ;(f.resolve = function (a) {
          var n = t[e][1][a]
          return null != n ? n : a
        }),
          (f.cache = {})
        var c = (l[e] = new d.Module(e))
        t[e][0].call(c.exports, f, c, c.exports, this)
      }
      return l[e].exports
      function f(e) {
        var t = f.resolve(e)
        return !1 === t ? {} : d(t)
      }
    }
    ;(d.isParcelRequire = !0),
      (d.Module = function (e) {
        ;(this.id = e), (this.bundle = d), (this.exports = {})
      }),
      (d.modules = t),
      (d.cache = l),
      (d.parent = s),
      (d.register = function (e, a) {
        t[e] = [
          function (e, t) {
            t.exports = a
          },
          {},
        ]
      }),
      Object.defineProperty(d, "root", {
        get: function () {
          return o[i]
        },
      }),
      (o[i] = d)
    for (var c = 0; c < a.length; c++) d(a[c])
    if (n) {
      var f = d(n)
      "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = f)
        : "function" == typeof e && e.amd
          ? e(function () {
              return f
            })
          : r && (this[r] = f)
    }
  })(
    {
      "64qiU": [
        function (e, t, a) {
          window,
            (t.exports = (function (e) {
              var t = {}
              function a(n) {
                if (t[n]) return t[n].exports
                var i = (t[n] = { i: n, l: !1, exports: {} })
                return e[n].call(i.exports, i, i.exports, a), (i.l = !0), i.exports
              }
              return (
                (a.m = e),
                (a.c = t),
                (a.d = function (e, t, n) {
                  a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
                }),
                (a.r = function (e) {
                  "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                    Object.defineProperty(e, "__esModule", { value: !0 })
                }),
                (a.t = function (e, t) {
                  if (
                    (1 & t && (e = a(e)),
                    8 & t || (4 & t && "object" == typeof e && e && e.__esModule))
                  )
                    return e
                  var n = Object.create(null)
                  if (
                    (a.r(n),
                    Object.defineProperty(n, "default", { enumerable: !0, value: e }),
                    2 & t && "string" != typeof e)
                  )
                    for (var i in e)
                      a.d(
                        n,
                        i,
                        function (t) {
                          return e[t]
                        }.bind(null, i),
                      )
                  return n
                }),
                (a.n = function (e) {
                  var t =
                    e && e.__esModule
                      ? function () {
                          return e.default
                        }
                      : function () {
                          return e
                        }
                  return a.d(t, "a", t), t
                }),
                (a.o = function (e, t) {
                  return Object.prototype.hasOwnProperty.call(e, t)
                }),
                (a.p = ""),
                a((a.s = 2))
              )
            })([
              function (e, t, a) {
                a.r(t)
                var n =
                  "function" == typeof fetch
                    ? fetch.bind()
                    : function (e, t) {
                        return (
                          (t = t || {}),
                          new Promise(function (a, n) {
                            var i = new XMLHttpRequest()
                            for (var r in (i.open(t.method || "get", e, !0), t.headers))
                              i.setRequestHeader(r, t.headers[r])
                            ;(i.withCredentials = "include" == t.credentials),
                              (i.onload = function () {
                                a(
                                  (function e() {
                                    var t,
                                      a = [],
                                      n = [],
                                      r = {}
                                    return (
                                      i
                                        .getAllResponseHeaders()
                                        .replace(
                                          /^(.*?):[^\S\n]*([\s\S]*?)$/gm,
                                          function (e, i, o) {
                                            a.push((i = i.toLowerCase())),
                                              n.push([i, o]),
                                              (t = r[i]),
                                              (r[i] = t ? t + "," + o : o)
                                          },
                                        ),
                                      {
                                        ok: 2 == ((i.status / 100) | 0),
                                        status: i.status,
                                        statusText: i.statusText,
                                        url: i.responseURL,
                                        clone: e,
                                        text: function () {
                                          return Promise.resolve(i.responseText)
                                        },
                                        json: function () {
                                          return Promise.resolve(i.responseText).then(JSON.parse)
                                        },
                                        blob: function () {
                                          return Promise.resolve(new Blob([i.response]))
                                        },
                                        headers: {
                                          keys: function () {
                                            return a
                                          },
                                          entries: function () {
                                            return n
                                          },
                                          get: function (e) {
                                            return r[e.toLowerCase()]
                                          },
                                          has: function (e) {
                                            return e.toLowerCase() in r
                                          },
                                        },
                                      }
                                    )
                                  })(),
                                )
                              }),
                              (i.onerror = n),
                              i.send(t.body)
                          })
                        )
                      }
                t.default = n
              },
              function (e, t, a) {
                Object.defineProperty(t, "__esModule", { value: !0 })
                var n = (function () {
                    function e(e, t) {
                      for (var a = 0; a < t.length; a++) {
                        var n = t[a]
                        ;(n.enumerable = n.enumerable || !1),
                          (n.configurable = !0),
                          "value" in n && (n.writable = !0),
                          Object.defineProperty(e, n.key, n)
                      }
                    }
                    return function (t, a, n) {
                      return a && e(t.prototype, a), n && e(t, n), t
                    }
                  })(),
                  i = (function () {
                    function e(t, a) {
                      ;(function (e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                      })(this, e),
                        (this.pluginName = t)
                    }
                    return (
                      n(e, [
                        {
                          key: "track",
                          value: function (e, t) {
                            window.analytics.track(e, t, { integration: { name: this.pluginName } })
                          },
                        },
                      ]),
                      e
                    )
                  })()
                t.default = i
              },
              function (e, t, a) {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.YouTubeAnalytics = t.VimeoAnalytics = void 0)
                var n = r(a(3)),
                  i = r(a(4))
                function r(e) {
                  return e && e.__esModule ? e : { default: e }
                }
                ;(t.VimeoAnalytics = n.default), (t.YouTubeAnalytics = i.default)
              },
              function (e, t, a) {
                Object.defineProperty(t, "__esModule", { value: !0 })
                var n = (function () {
                    function e(e, t) {
                      for (var a = 0; a < t.length; a++) {
                        var n = t[a]
                        ;(n.enumerable = n.enumerable || !1),
                          (n.configurable = !0),
                          "value" in n && (n.writable = !0),
                          Object.defineProperty(e, n.key, n)
                      }
                    }
                    return function (t, a, n) {
                      return a && e(t.prototype, a), n && e(t, n), t
                    }
                  })(),
                  i = r(a(0))
                function r(e) {
                  return e && e.__esModule ? e : { default: e }
                }
                var o = (function (e) {
                  function t(e, a) {
                    !(function (e, t) {
                      if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                    })(this, t)
                    var n = (function (e, t) {
                      if (!e)
                        throw ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        )
                      return t && ("object" == typeof t || "function" == typeof t) ? t : e
                    })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "VimeoAnalytics"))
                    return (
                      (n.authToken = a),
                      (n.player = e),
                      (n.metadata = { content: {}, playback: { videoPlayer: "Vimeo" } }),
                      (n.mostRecentHeartbeat = 0),
                      (n.isPaused = !1),
                      n
                    )
                  }
                  return (
                    (function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw TypeError(
                          "Super expression must either be null or a function, not " + typeof t,
                        )
                      ;(e.prototype = Object.create(t && t.prototype, {
                        constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                      })),
                        t &&
                          (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
                    })(t, e),
                    n(t, [
                      {
                        key: "initialize",
                        value: function () {
                          var e = this,
                            t = {
                              loaded: this.retrieveMetadata,
                              play: this.trackPlay,
                              pause: this.trackPause,
                              ended: this.trackEnded,
                              timeupdate: this.trackHeartbeat,
                            }
                          for (var a in t) this.registerHandler(a, t[a])
                          this.player
                            .getVideoId()
                            .then(function (t) {
                              e.retrieveMetadata({ id: t })
                            })
                            .catch(console.error)
                        },
                      },
                      {
                        key: "registerHandler",
                        value: function (e, t) {
                          var a = this
                          this.player.on(e, function (e) {
                            a.updateMetadata(e), t.call(a, e)
                          })
                        },
                      },
                      {
                        key: "trackPlay",
                        value: function () {
                          this.isPaused
                            ? (this.track("Video Playback Resumed", this.metadata.playback),
                              (this.isPaused = !1))
                            : (this.track("Video Playback Started", this.metadata.playback),
                              this.track("Video Content Started", this.metadata.content))
                        },
                      },
                      {
                        key: "trackEnded",
                        value: function () {
                          this.track("Video Playback Completed", this.metadata.playback),
                            this.track("Video Content Completed", this.metadata.content)
                        },
                      },
                      {
                        key: "trackHeartbeat",
                        value: function () {
                          var e = this.mostRecentHeartbeat,
                            t = this.metadata.playback.position
                          t !== e &&
                            t - e >= 10 &&
                            (this.track("Video Content Playing", this.metadata.content),
                            (this.mostRecentHeartbeat = Math.floor(t)))
                        },
                      },
                      {
                        key: "trackPause",
                        value: function () {
                          ;(this.isPaused = !0),
                            this.track("Video Playback Paused", this.metadata.playback)
                        },
                      },
                      {
                        key: "retrieveMetadata",
                        value: function (e) {
                          var t = this
                          return new Promise(function (a, n) {
                            var r = e.id
                            ;(0, i.default)("https://api.vimeo.com/videos/" + r, {
                              headers: { Authorization: "Bearer " + t.authToken },
                            })
                              .then(function (e) {
                                return e.ok ? e.json() : n(e)
                              })
                              .then(function (e) {
                                ;(t.metadata.content.title = e.name),
                                  (t.metadata.content.description = e.description),
                                  (t.metadata.content.publisher = e.user.name),
                                  (t.metadata.playback.position = 0),
                                  (t.metadata.playback.totalLength = e.duration)
                              })
                              .catch(function (e) {
                                return console.error("Request to Vimeo API Failed with: ", e), n(e)
                              })
                          })
                        },
                      },
                      {
                        key: "updateMetadata",
                        value: function (e) {
                          var t = this
                          return new Promise(function (a, n) {
                            t.player
                              .getVolume()
                              .then(function (n) {
                                n && (t.metadata.playback.sound = 100 * n),
                                  (t.metadata.playback.position = e.seconds),
                                  a()
                              })
                              .catch(n)
                          })
                        },
                      },
                    ]),
                    t
                  )
                })(r(a(1)).default)
                t.default = o
              },
              function (e, t, a) {
                Object.defineProperty(t, "__esModule", { value: !0 })
                var n = (function () {
                    function e(e, t) {
                      for (var a = 0; a < t.length; a++) {
                        var n = t[a]
                        ;(n.enumerable = n.enumerable || !1),
                          (n.configurable = !0),
                          "value" in n && (n.writable = !0),
                          Object.defineProperty(e, n.key, n)
                      }
                    }
                    return function (t, a, n) {
                      return a && e(t.prototype, a), n && e(t, n), t
                    }
                  })(),
                  i = r(a(0))
                function r(e) {
                  return e && e.__esModule ? e : { default: e }
                }
                var o = (function (e) {
                  function t(e, a) {
                    !(function (e, t) {
                      if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                    })(this, t)
                    var n = (function (e, t) {
                      if (!e)
                        throw ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        )
                      return t && ("object" == typeof t || "function" == typeof t) ? t : e
                    })(
                      this,
                      (t.__proto__ || Object.getPrototypeOf(t)).call(this, "YoutubeAnalytics"),
                    )
                    return (
                      (n.player = e),
                      (n.apiKey = a),
                      (n.playerLoaded = !1),
                      (n.playbackStarted = !1),
                      (n.contentStarted = !1),
                      (n.isPaused = !1),
                      (n.isBuffering = !1),
                      (n.isSeeking = !1),
                      (n.lastRecordedTime = { timeReported: Date.now(), timeElapsed: 0 }),
                      (n.metadata = [{ playback: { video_player: "youtube" }, content: {} }]),
                      (n.playlistIndex = 0),
                      n
                    )
                  }
                  return (
                    (function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw TypeError(
                          "Super expression must either be null or a function, not " + typeof t,
                        )
                      ;(e.prototype = Object.create(t && t.prototype, {
                        constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                      })),
                        t &&
                          (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
                    })(t, e),
                    n(t, [
                      {
                        key: "initialize",
                        value: function () {
                          ;(window.segmentYoutubeOnStateChange =
                            this.onPlayerStateChange.bind(this)),
                            (window.segmentYoutubeOnReady = this.onPlayerReady.bind(this)),
                            this.player.addEventListener("onReady", "segmentYoutubeOnReady"),
                            this.player.addEventListener(
                              "onStateChange",
                              "segmentYoutubeOnStateChange",
                            )
                        },
                      },
                      {
                        key: "onPlayerReady",
                        value: function (e) {
                          this.retrieveMetadata()
                        },
                      },
                      {
                        key: "onPlayerStateChange",
                        value: function (e) {
                          var t = this.player.getCurrentTime()
                          switch (
                            (this.metadata[this.playlistIndex] &&
                              ((this.metadata[this.playlistIndex].playback.position = this.metadata[
                                this.playlistIndex
                              ].content.position =
                                t),
                              (this.metadata[this.playlistIndex].playback.quality =
                                this.player.getPlaybackQuality()),
                              (this.metadata[this.playlistIndex].playback.sound =
                                this.player.isMuted() ? 0 : this.player.getVolume())),
                            e.data)
                          ) {
                            case -1:
                              if (this.playerLoaded) break
                              this.retrieveMetadata(), (this.playerLoaded = !0)
                              break
                            case YT.PlayerState.BUFFERING:
                              this.handleBuffer()
                              break
                            case YT.PlayerState.PLAYING:
                              this.handlePlay()
                              break
                            case YT.PlayerState.PAUSED:
                              this.handlePause()
                              break
                            case YT.PlayerState.ENDED:
                              this.handleEnd()
                          }
                          this.lastRecordedTime = {
                            timeReported: Date.now(),
                            timeElapsed: 1e3 * this.player.getCurrentTime(),
                          }
                        },
                      },
                      {
                        key: "retrieveMetadata",
                        value: function () {
                          var e = this
                          return new Promise(function (t, a) {
                            var n = e.player.getVideoData(),
                              r = e.player.getPlaylist() || [n.video_id],
                              o = r.join()
                            ;(0, i.default)(
                              "https://www.googleapis.com/youtube/v3/videos?id=" +
                                o +
                                "&part=snippet,contentDetails&key=" +
                                e.apiKey,
                            )
                              .then(function (e) {
                                if (!e.ok) {
                                  var t = Error(
                                    "Segment request to Youtube API failed (likely due to a bad API Key. Events will still be sent but will not contain video metadata)",
                                  )
                                  throw ((t.response = e), t)
                                }
                                return e.json()
                              })
                              .then(function (a) {
                                e.metadata = []
                                for (var n = 0, i = 0; i < r.length; i++) {
                                  var o = a.items[i]
                                  e.metadata.push({
                                    content: {
                                      title: o.snippet.title,
                                      description: o.snippet.description,
                                      keywords: o.snippet.tags,
                                      channel: o.snippet.channelTitle,
                                      airdate: o.snippet.publishedAt,
                                    },
                                  }),
                                    (n += (function (e) {
                                      var t = e.match(/PT(\d+H)?(\d+M)?(\d+S)?/)
                                      return (
                                        3600 *
                                          (parseInt(
                                            (t = t.slice(1).map(function (e) {
                                              if (null != e) return e.replace(/\D/, "")
                                            }))[0],
                                          ) || 0) +
                                        60 * (parseInt(t[1]) || 0) +
                                        (parseInt(t[2]) || 0)
                                      )
                                    })(o.contentDetails.duration))
                                }
                                for (i = 0; i < r.length; i++)
                                  e.metadata[i].playback = {
                                    total_length: n,
                                    video_player: "youtube",
                                  }
                                t()
                              })
                              .catch(function (t) {
                                ;(e.metadata = r.map(function (e) {
                                  return { playback: { video_player: "youtube" }, content: {} }
                                })),
                                  a(t)
                              })
                          })
                        },
                      },
                      {
                        key: "handleBuffer",
                        value: function () {
                          var e = this.determineSeek()
                          this.playbackStarted ||
                            ((this.playbackStarted = !0),
                            this.track(
                              "Video Playback Started",
                              this.metadata[this.playlistIndex].playback,
                            )),
                            e &&
                              !this.isSeeking &&
                              ((this.isSeeking = !0),
                              this.track(
                                "Video Playback Seek Started",
                                this.metadata[this.playlistIndex].playback,
                              )),
                            this.isSeeking &&
                              (this.track(
                                "Video Playback Seek Completed",
                                this.metadata[this.playlistIndex].playback,
                              ),
                              (this.isSeeking = !1))
                          var t = this.player.getPlaylist()
                          t &&
                            0 === this.player.getCurrentTime() &&
                            this.player.getPlaylistIndex() !== this.playlistIndex &&
                            ((this.contentStarted = !1),
                            this.playlistIndex === t.length - 1 &&
                              0 === this.player.getPlaylistIndex() &&
                              (this.track(
                                "Video Playback Completed",
                                this.metadata[this.player.getPlaylistIndex()].playback,
                              ),
                              this.track(
                                "Video Playback Started",
                                this.metadata[this.player.getPlaylistIndex()].playback,
                              ))),
                            this.track(
                              "Video Playback Buffer Started",
                              this.metadata[this.playlistIndex].playback,
                            ),
                            (this.isBuffering = !0)
                        },
                      },
                      {
                        key: "handlePlay",
                        value: function () {
                          this.contentStarted ||
                            ((this.playlistIndex = this.player.getPlaylistIndex()),
                            -1 === this.playlistIndex && (this.playlistIndex = 0),
                            this.track(
                              "Video Content Started",
                              this.metadata[this.playlistIndex].content,
                            ),
                            (this.contentStarted = !0)),
                            this.isBuffering &&
                              (this.track(
                                "Video Playback Buffer Completed",
                                this.metadata[this.playlistIndex].playback,
                              ),
                              (this.isBuffering = !1)),
                            this.isPaused &&
                              (this.track(
                                "Video Playback Resumed",
                                this.metadata[this.playlistIndex].playback,
                              ),
                              (this.isPaused = !1))
                        },
                      },
                      {
                        key: "handlePause",
                        value: function () {
                          var e = this.determineSeek()
                          this.isBuffering &&
                            (this.track(
                              "Video Playback Buffer Completed",
                              this.metadata[this.playlistIndex].playback,
                            ),
                            (this.isBuffering = !1)),
                            this.isPaused ||
                              (e
                                ? (this.track(
                                    "Video Playback Seek Started",
                                    this.metadata[this.playlistIndex].playback,
                                  ),
                                  (this.isSeeking = !0))
                                : (this.track(
                                    "Video Playback Paused",
                                    this.metadata[this.playlistIndex].playback,
                                  ),
                                  (this.isPaused = !0)))
                        },
                      },
                      {
                        key: "handleEnd",
                        value: function () {
                          this.track(
                            "Video Content Completed",
                            this.metadata[this.playlistIndex].content,
                          ),
                            (this.contentStarted = !1)
                          var e = this.player.getPlaylistIndex(),
                            t = this.player.getPlaylist()
                          ;((t && e === t.length - 1) || -1 === e) &&
                            (this.track(
                              "Video Playback Completed",
                              this.metadata[this.playlistIndex].playback,
                            ),
                            (this.playbackStarted = !1))
                        },
                      },
                      {
                        key: "determineSeek",
                        value: function () {
                          return (
                            Math.abs(
                              (this.isPaused || this.isBuffering
                                ? 0
                                : Date.now() - this.lastRecordedTime.timeReported) -
                                (1e3 * this.player.getCurrentTime() -
                                  this.lastRecordedTime.timeElapsed),
                            ) > 2e3
                          )
                        },
                      },
                    ]),
                    t
                  )
                })(r(a(1)).default)
                t.default = o
              },
            ]))
        },
        {},
      ],
    },
    [],
    null,
    "parcelRequired52c",
  ),
  (globalThis.define = t)
