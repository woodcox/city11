var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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

// node_modules/@tannerhodges/snap-slider/snap-slider.min.js
var require_snap_slider_min = __commonJS({
  "node_modules/@tannerhodges/snap-slider/snap-slider.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.SnapSlider = e() : t.SnapSlider = e();
    }(window, function() {
      return function(t) {
        var e = {};
        function n(o) {
          if (e[o])
            return e[o].exports;
          var i = e[o] = { i: o, l: false, exports: {} };
          return t[o].call(i.exports, i, i.exports, n), i.l = true, i.exports;
        }
        return n.m = t, n.c = e, n.d = function(t2, e2, o) {
          n.o(t2, e2) || Object.defineProperty(t2, e2, { enumerable: true, get: o });
        }, n.r = function(t2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
        }, n.t = function(t2, e2) {
          if (1 & e2 && (t2 = n(t2)), 8 & e2)
            return t2;
          if (4 & e2 && "object" == typeof t2 && t2 && t2.__esModule)
            return t2;
          var o = /* @__PURE__ */ Object.create(null);
          if (n.r(o), Object.defineProperty(o, "default", { enumerable: true, value: t2 }), 2 & e2 && "string" != typeof t2)
            for (var i in t2)
              n.d(o, i, function(e3) {
                return t2[e3];
              }.bind(null, i));
          return o;
        }, n.n = function(t2) {
          var e2 = t2 && t2.__esModule ? function() {
            return t2.default;
          } : function() {
            return t2;
          };
          return n.d(e2, "a", e2), e2;
        }, n.o = function(t2, e2) {
          return Object.prototype.hasOwnProperty.call(t2, e2);
        }, n.p = "", n(n.s = 18);
      }([function(t, e) {
        t.exports = function(t2) {
          var e2 = typeof t2;
          return null != t2 && ("object" == e2 || "function" == e2);
        };
      }, function(t, e, n) {
        var o = n(0), i = n(7), r = n(10), a = Math.max, s = Math.min;
        t.exports = function(t2, e2, n2) {
          var l, c, u, d, f, p, h = 0, v = false, g = false, b = true;
          if ("function" != typeof t2)
            throw new TypeError("Expected a function");
          function y(e3) {
            var n3 = l, o2 = c;
            return l = c = void 0, h = e3, d = t2.apply(o2, n3);
          }
          function m(t3) {
            return h = t3, f = setTimeout(x, e2), v ? y(t3) : d;
          }
          function S(t3) {
            var n3 = t3 - p;
            return void 0 === p || n3 >= e2 || n3 < 0 || g && t3 - h >= u;
          }
          function x() {
            var t3 = i();
            if (S(t3))
              return w(t3);
            f = setTimeout(x, function(t4) {
              var n3 = e2 - (t4 - p);
              return g ? s(n3, u - (t4 - h)) : n3;
            }(t3));
          }
          function w(t3) {
            return f = void 0, b && l ? y(t3) : (l = c = void 0, d);
          }
          function k() {
            var t3 = i(), n3 = S(t3);
            if (l = arguments, c = this, p = t3, n3) {
              if (void 0 === f)
                return m(p);
              if (g)
                return clearTimeout(f), f = setTimeout(x, e2), y(p);
            }
            return void 0 === f && (f = setTimeout(x, e2)), d;
          }
          return e2 = r(e2) || 0, o(n2) && (v = !!n2.leading, u = (g = "maxWait" in n2) ? a(r(n2.maxWait) || 0, e2) : u, b = "trailing" in n2 ? !!n2.trailing : b), k.cancel = function() {
            void 0 !== f && clearTimeout(f), h = 0, l = p = c = f = void 0;
          }, k.flush = function() {
            return void 0 === f ? d : w(i());
          }, k;
        };
      }, function(t, e, n) {
        var o = n(1), i = n(0);
        t.exports = function(t2, e2, n2) {
          var r = true, a = true;
          if ("function" != typeof t2)
            throw new TypeError("Expected a function");
          return i(n2) && (r = "leading" in n2 ? !!n2.leading : r, a = "trailing" in n2 ? !!n2.trailing : a), o(t2, e2, { leading: r, maxWait: e2, trailing: a });
        };
      }, function(t, e, n) {
        var o = n(8), i = "object" == typeof self && self && self.Object === Object && self, r = o || i || Function("return this")();
        t.exports = r;
      }, function(t, e, n) {
        var o = n(3).Symbol;
        t.exports = o;
      }, function(t, e, n) {
        !function() {
          "use strict";
          t.exports = { polyfill: function() {
            var t2 = window, e2 = document;
            if (!("scrollBehavior" in e2.documentElement.style) || true === t2.__forceSmoothScrollPolyfill__) {
              var n2, o = t2.HTMLElement || t2.Element, i = { scroll: t2.scroll || t2.scrollTo, scrollBy: t2.scrollBy, elementScroll: o.prototype.scroll || s, scrollIntoView: o.prototype.scrollIntoView }, r = t2.performance && t2.performance.now ? t2.performance.now.bind(t2.performance) : Date.now, a = (n2 = t2.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(n2) ? 1 : 0);
              t2.scroll = t2.scrollTo = function() {
                void 0 !== arguments[0] && (true !== l(arguments[0]) ? h.call(t2, e2.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t2.scrollX || t2.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t2.scrollY || t2.pageYOffset) : i.scroll.call(t2, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t2.scrollX || t2.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t2.scrollY || t2.pageYOffset));
              }, t2.scrollBy = function() {
                void 0 !== arguments[0] && (l(arguments[0]) ? i.scrollBy.call(t2, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : h.call(t2, e2.body, ~~arguments[0].left + (t2.scrollX || t2.pageXOffset), ~~arguments[0].top + (t2.scrollY || t2.pageYOffset)));
              }, o.prototype.scroll = o.prototype.scrollTo = function() {
                if (void 0 !== arguments[0])
                  if (true !== l(arguments[0])) {
                    var t3 = arguments[0].left, e3 = arguments[0].top;
                    h.call(this, this, void 0 === t3 ? this.scrollLeft : ~~t3, void 0 === e3 ? this.scrollTop : ~~e3);
                  } else {
                    if ("number" == typeof arguments[0] && void 0 === arguments[1])
                      throw new SyntaxError("Value could not be converted");
                    i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop);
                  }
              }, o.prototype.scrollBy = function() {
                void 0 !== arguments[0] && (true !== l(arguments[0]) ? this.scroll({ left: ~~arguments[0].left + this.scrollLeft, top: ~~arguments[0].top + this.scrollTop, behavior: arguments[0].behavior }) : i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop));
              }, o.prototype.scrollIntoView = function() {
                if (true !== l(arguments[0])) {
                  var n3 = f(this), o2 = n3.getBoundingClientRect(), r2 = this.getBoundingClientRect();
                  n3 !== e2.body ? (h.call(this, n3, n3.scrollLeft + r2.left - o2.left, n3.scrollTop + r2.top - o2.top), "fixed" !== t2.getComputedStyle(n3).position && t2.scrollBy({ left: o2.left, top: o2.top, behavior: "smooth" })) : t2.scrollBy({ left: r2.left, top: r2.top, behavior: "smooth" });
                } else
                  i.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
              };
            }
            function s(t3, e3) {
              this.scrollLeft = t3, this.scrollTop = e3;
            }
            function l(t3) {
              if (null === t3 || "object" != typeof t3 || void 0 === t3.behavior || "auto" === t3.behavior || "instant" === t3.behavior)
                return true;
              if ("object" == typeof t3 && "smooth" === t3.behavior)
                return false;
              throw new TypeError("behavior member of ScrollOptions " + t3.behavior + " is not a valid value for enumeration ScrollBehavior.");
            }
            function c(t3, e3) {
              return "Y" === e3 ? t3.clientHeight + a < t3.scrollHeight : "X" === e3 ? t3.clientWidth + a < t3.scrollWidth : void 0;
            }
            function u(e3, n3) {
              var o2 = t2.getComputedStyle(e3, null)["overflow" + n3];
              return "auto" === o2 || "scroll" === o2;
            }
            function d(t3) {
              var e3 = c(t3, "Y") && u(t3, "Y"), n3 = c(t3, "X") && u(t3, "X");
              return e3 || n3;
            }
            function f(t3) {
              for (; t3 !== e2.body && false === d(t3); )
                t3 = t3.parentNode || t3.host;
              return t3;
            }
            function p(e3) {
              var n3, o2, i2, a2, s2 = (r() - e3.startTime) / 468;
              a2 = s2 = s2 > 1 ? 1 : s2, n3 = 0.5 * (1 - Math.cos(Math.PI * a2)), o2 = e3.startX + (e3.x - e3.startX) * n3, i2 = e3.startY + (e3.y - e3.startY) * n3, e3.method.call(e3.scrollable, o2, i2), o2 === e3.x && i2 === e3.y || t2.requestAnimationFrame(p.bind(t2, e3));
            }
            function h(n3, o2, a2) {
              var l2, c2, u2, d2, f2 = r();
              n3 === e2.body ? (l2 = t2, c2 = t2.scrollX || t2.pageXOffset, u2 = t2.scrollY || t2.pageYOffset, d2 = i.scroll) : (l2 = n3, c2 = n3.scrollLeft, u2 = n3.scrollTop, d2 = s), p({ scrollable: l2, method: d2, startTime: f2, startX: c2, startY: u2, x: o2, y: a2 });
            }
          } };
        }();
      }, function(t, e) {
        var n = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'], o = n.join(","), i = "undefined" == typeof Element ? function() {
        } : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
        function r(t2, e2) {
          e2 = e2 || {};
          var n2, r2, s2, l2 = [], d2 = [], f = t2.querySelectorAll(o);
          for (e2.includeContainer && i.call(t2, o) && (f = Array.prototype.slice.apply(f)).unshift(t2), n2 = 0; n2 < f.length; n2++)
            a(r2 = f[n2]) && (0 === (s2 = c(r2)) ? l2.push(r2) : d2.push({ documentOrder: n2, tabIndex: s2, node: r2 }));
          return d2.sort(u).map(function(t3) {
            return t3.node;
          }).concat(l2);
        }
        function a(t2) {
          return !(!s(t2) || function(t3) {
            return function(t4) {
              return d(t4) && "radio" === t4.type;
            }(t3) && !function(t4) {
              if (!t4.name)
                return true;
              var e2 = function(t5) {
                for (var e3 = 0; e3 < t5.length; e3++)
                  if (t5[e3].checked)
                    return t5[e3];
              }(t4.ownerDocument.querySelectorAll('input[type="radio"][name="' + t4.name + '"]'));
              return !e2 || e2 === t4;
            }(t3);
          }(t2) || c(t2) < 0);
        }
        function s(t2) {
          return !(t2.disabled || function(t3) {
            return d(t3) && "hidden" === t3.type;
          }(t2) || function(t3) {
            return null === t3.offsetParent || "hidden" === getComputedStyle(t3).visibility;
          }(t2));
        }
        r.isTabbable = function(t2) {
          if (!t2)
            throw new Error("No node provided");
          return false !== i.call(t2, o) && a(t2);
        }, r.isFocusable = function(t2) {
          if (!t2)
            throw new Error("No node provided");
          return false !== i.call(t2, l) && s(t2);
        };
        var l = n.concat("iframe").join(",");
        function c(t2) {
          var e2 = parseInt(t2.getAttribute("tabindex"), 10);
          return isNaN(e2) ? function(t3) {
            return "true" === t3.contentEditable;
          }(t2) ? 0 : t2.tabIndex : e2;
        }
        function u(t2, e2) {
          return t2.tabIndex === e2.tabIndex ? t2.documentOrder - e2.documentOrder : t2.tabIndex - e2.tabIndex;
        }
        function d(t2) {
          return "INPUT" === t2.tagName;
        }
        t.exports = r;
      }, function(t, e, n) {
        var o = n(3);
        t.exports = function() {
          return o.Date.now();
        };
      }, function(t, e, n) {
        (function(e2) {
          var n2 = "object" == typeof e2 && e2 && e2.Object === Object && e2;
          t.exports = n2;
        }).call(this, n(9));
      }, function(t, e) {
        var n;
        n = function() {
          return this;
        }();
        try {
          n = n || new Function("return this")();
        } catch (t2) {
          "object" == typeof window && (n = window);
        }
        t.exports = n;
      }, function(t, e, n) {
        var o = n(11), i = n(0), r = n(13), a = /^[-+]0x[0-9a-f]+$/i, s = /^0b[01]+$/i, l = /^0o[0-7]+$/i, c = parseInt;
        t.exports = function(t2) {
          if ("number" == typeof t2)
            return t2;
          if (r(t2))
            return NaN;
          if (i(t2)) {
            var e2 = "function" == typeof t2.valueOf ? t2.valueOf() : t2;
            t2 = i(e2) ? e2 + "" : e2;
          }
          if ("string" != typeof t2)
            return 0 === t2 ? t2 : +t2;
          t2 = o(t2);
          var n2 = s.test(t2);
          return n2 || l.test(t2) ? c(t2.slice(2), n2 ? 2 : 8) : a.test(t2) ? NaN : +t2;
        };
      }, function(t, e, n) {
        var o = n(12), i = /^\s+/;
        t.exports = function(t2) {
          return t2 ? t2.slice(0, o(t2) + 1).replace(i, "") : t2;
        };
      }, function(t, e) {
        var n = /\s/;
        t.exports = function(t2) {
          for (var e2 = t2.length; e2-- && n.test(t2.charAt(e2)); )
            ;
          return e2;
        };
      }, function(t, e, n) {
        var o = n(14), i = n(17);
        t.exports = function(t2) {
          return "symbol" == typeof t2 || i(t2) && "[object Symbol]" == o(t2);
        };
      }, function(t, e, n) {
        var o = n(4), i = n(15), r = n(16), a = o ? o.toStringTag : void 0;
        t.exports = function(t2) {
          return null == t2 ? void 0 === t2 ? "[object Undefined]" : "[object Null]" : a && a in Object(t2) ? i(t2) : r(t2);
        };
      }, function(t, e, n) {
        var o = n(4), i = Object.prototype, r = i.hasOwnProperty, a = i.toString, s = o ? o.toStringTag : void 0;
        t.exports = function(t2) {
          var e2 = r.call(t2, s), n2 = t2[s];
          try {
            t2[s] = void 0;
            var o2 = true;
          } catch (t3) {
          }
          var i2 = a.call(t2);
          return o2 && (e2 ? t2[s] = n2 : delete t2[s]), i2;
        };
      }, function(t, e) {
        var n = Object.prototype.toString;
        t.exports = function(t2) {
          return n.call(t2);
        };
      }, function(t, e) {
        t.exports = function(t2) {
          return null != t2 && "object" == typeof t2;
        };
      }, function(t, e, n) {
        "use strict";
        n.r(e);
        var o = function(t2) {
          var e2 = t2.Element.prototype;
          "function" != typeof e2.matches && (e2.matches = e2.msMatchesSelector || e2.mozMatchesSelector || e2.webkitMatchesSelector || function(t3) {
            for (var e3 = (this.document || this.ownerDocument).querySelectorAll(t3), n2 = 0; e3[n2] && e3[n2] !== this; )
              ++n2;
            return Boolean(e3[n2]);
          }), "function" != typeof e2.closest && (e2.closest = function(t3) {
            for (var e3 = this; e3 && 1 === e3.nodeType; ) {
              if (e3.matches(t3))
                return e3;
              e3 = e3.parentNode;
            }
            return null;
          });
        }, i = n(5), r = n.n(i), a = n(6), s = n.n(a), l = n(1), c = n.n(l), u = n(2), d = n.n(u);
        function f(t2) {
          return Array.prototype.slice.call(t2);
        }
        function p(t2, e2) {
          return t2 ? f((e2 || document).querySelectorAll(t2)) : [];
        }
        function h(t2, e2) {
          return "string" == typeof t2 ? p(t2, e2) : t2 instanceof Element ? [t2] : t2 ? Array.prototype.slice.call(t2) : [];
        }
        function v(t2, e2) {
          return Object.prototype.hasOwnProperty.call(t2, e2);
        }
        function g(t2) {
          return t2 && "Object" === t2.constructor.name;
        }
        function b(t2, e2, n2) {
          return t2 = Math.min(n2, t2), t2 = Math.max(e2, t2);
        }
        var y = function() {
          var t2 = false;
          try {
            var e2 = Object.defineProperty({}, "passive", { get: function() {
              t2 = { passive: true };
            } });
            window.addEventListener("testPassive", null, e2), window.removeEventListener("testPassive", null, e2);
          } catch (t3) {
          }
          return t2;
        }();
        function m(t2, e2) {
          return e2.reduce(function(e3, n2) {
            return e3[n2] = t2[n2], e3;
          }, {});
        }
        function S(t2) {
          var e2 = [];
          for (var n2 in t2)
            v(t2, n2) && e2.push(t2[n2]);
          return e2;
        }
        "function" == typeof Object.values && Object.values;
        function x(t2) {
          return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          })(t2);
        }
        function w(t2, e2) {
          var n2 = Object.keys(t2);
          if (Object.getOwnPropertySymbols) {
            var o2 = Object.getOwnPropertySymbols(t2);
            e2 && (o2 = o2.filter(function(e3) {
              return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
            })), n2.push.apply(n2, o2);
          }
          return n2;
        }
        function k(t2) {
          for (var e2 = 1; e2 < arguments.length; e2++) {
            var n2 = null != arguments[e2] ? arguments[e2] : {};
            e2 % 2 ? w(Object(n2), true).forEach(function(e3) {
              O(t2, e3, n2[e3]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(n2)) : w(Object(n2)).forEach(function(e3) {
              Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(n2, e3));
            });
          }
          return t2;
        }
        function O(t2, e2, n2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }
        function E(t2, e2) {
          if (!(t2 instanceof e2))
            throw new TypeError("Cannot call a class as a function");
        }
        function A(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var o2 = e2[n2];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(t2, o2.key, o2);
          }
        }
        var T = n(19), j = 1, I = function() {
          function t2(e3) {
            var n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            E(this, t2), this.terms = { prev: /(prev|back|before|left|up)/, next: /(next|forward|after|right|down)/ }, this.callbacks = { load: [], change: [], "change.click": [], "change.scroll": [], "change.keydown": [], "change.focusin": [], scroll: [], "scroll.start": [], "scroll.end": [] }, this.init(e3, n3), this.container && (this.watchForChanges(), this.container.SnapSlider = this, window._SnapSliders[this.id] = this);
          }
          var e2, n2, o2;
          return e2 = t2, o2 = [{ key: "isValidIndex", value: function(t3) {
            return ["first", "middle", "last", "prev", "next"].indexOf(t3) >= 0 || parseInt(t3, 10) >= 1;
          } }, { key: "getButtonTarget", value: function(t3) {
            var e3 = t3 ? t3.getAttribute("data-snap-slider-goto") : "";
            if (!e3)
              return {};
            var n3 = e3.split(":").map(function(t4) {
              return t4.trim();
            }), o3 = n3.pop(), i2 = n3.pop();
            if (!i2) {
              var r2 = t3.closest("[data-snap-slider-nav]"), a2 = t3.closest("[data-snap-slider]");
              r2 && (i2 = r2.getAttribute("data-snap-slider-nav")), a2 && (i2 = a2.getAttribute("data-snap-slider"));
            }
            if (!i2) {
              var s2 = t3.closest("data-snap-slider");
              s2 && (i2 = s2.getAttribute("data-snap-slider"));
            }
            return { sliderID: i2, index: o3 };
          } }, { key: "handleGoto", value: function(e3) {
            var n3 = e3.target.closest("[data-snap-slider-goto]"), o3 = t2.getButtonTarget(n3), i2 = o3.sliderID, r2 = o3.index, a2 = window._SnapSliders[i2];
            a2 && a2.goto(r2, null, e3);
          } }, { key: "isRelative", value: function(t3) {
            return "prev" === t3 || "next" === t3;
          } }, { key: "notFound", value: function(t3) {
            console.log(`
\u{1F622} Oh no! Snap Slider couldn't find a slider for "`.concat(t3, "\".\n\n-------------------------------------------------------------------------------------------\n\u2139\uFE0F NOTE: Make sure the elements you're trying to debug have a `data-snap-slider` attribute.\n-------------------------------------------------------------------------------------------\n\n"));
          } }, { key: "get", value: function(t3) {
            return window._SnapSliders[t3];
          } }, { key: "debug", value: function(e3) {
            var n3 = [];
            0 === arguments.length && (e3 = "[data-snap-slider]"), "string" == typeof e3 && v(window._SnapSliders, e3) && (e3 = '[data-snap-slider="'.concat(e3, '"]')), (n3 = h(e3)).length ? n3.forEach(function(o3, i2) {
              var r2 = o3.closest("[data-snap-slider-goto]"), a2 = o3.closest("[data-snap-slider-nav]"), s2 = o3.closest("[data-snap-slider]"), l2 = n3.length > 1 ? "#".concat(i2 + 1, " ") : "";
              if (r2) {
                var c2 = t2.getButtonTarget(r2), u2 = window._SnapSliders[c2.sliderID], d2 = c2.index, f2 = t2.isValidIndex(d2) ? '"'.concat(d2, '"') : '\u{1F6AB} "'.concat(d2, '" - Yikes! This index is invalid.\n\nUse a positive number instead, or one of the following aliases:\n\n  ').concat(["first", "middle", "last", "prev", "next"].map(function(t3) {
                  return "\u2022\xA0".concat(t3);
                }).join("\n")), h2 = c2.sliderID ? '"'.concat(c2.sliderID, '"') : "\u{1F937}\u200D\u2640\uFE0F We couldn't find any.\n\n  \u2022\xA0Make sure your button is inside a `data-snap-slider-nav` element, or...\n  \u2022\xA0Include the slider ID you want to target in your `data-snap-slider-goto` attribute.\n      \u25E6 For example, `data-snap-slider-goto=\"example-slider:".concat(c2.index || "prev", '"`.'), v2 = '\u{1F937}\u200D\u2640\uFE0F We couldn\'t find any.\n\n  \u2022\xA0Double check that your slider ID is correct (\u{1F446}).\n  \u2022\xA0Make sure your slider has the same ID in its `data-snap-slider` attribute.\n      \u25E6 For example, `data-snap-slider="example-slider"`.', g2 = "\u{1F937}\u200D\u2640\uFE0F We couldn't find any.\n\n  \u2022\xA0Double check that your index is valid (\u{1F446}).\n  \u2022\xA0Make sure a slide actually exists at that index (\u{1F447}).", b2 = "\u{1F937}\u200D\u2640\uFE0F We couldn't find any.\n\n  \u2022\xA0Double check that your index is valid (\u{1F446}).\n  \u2022\xA0Make sure a slide actually exists at that index.\n  \u2022\xA0Make sure your slider recognizes the slide element as a slide.";
                return u2 && u2.container && (v2 = u2.container, g2 = u2.getIndexNumber(d2), b2 = u2.getSlide(d2)), T.section({ heading: "\u{1F579} Button ".concat(l2), description: r2, groups: [{ heading: "1. What slider is this button targeting?", items: [{ heading: "Slider ID", description: h2 }, { heading: "Slider Element", description: v2 }, { heading: "Slider Object", description: u2 || "\u{1F937}\u200D\u2640\uFE0F We couldn't find any." }] }, { heading: "2. Which slide will it go to?", items: [{ heading: "Slide Index", description: f2 }, { heading: "Slide Index (Number)", description: g2 }, { heading: "Slide Element", description: b2 }] }], collapsed: true });
              }
              if (a2) {
                var y2 = a2.getAttribute("data-snap-slider-nav"), m2 = window._SnapSliders[y2], S2 = p("[data-snap-slider-goto]", a2);
                y2 = y2 ? '"'.concat(y2, '"') : '\u{1F937}\u200D\u2640\uFE0F We couldn\'t find any.\n\n  \u2022\xA0Include the slider ID you want to target in your `data-snap-slider-nav` attribute.\n      \u25E6 For example, `data-snap-slider-nav="example-slider"`.';
                var x2 = "\u{1F937}\u200D\u2640\uFE0F We couldn't find any.\n\n  \u2022\xA0Make sure the ID in your container's `data-snap-slider` attribute and the ID in your nav's `data-snap-slider-nav` attribute both match.";
                return S2.length || (S2 = "\u{1F937}\u200D\u2640\uFE0F We couldn't find any.\n\n  \u2022\xA0Make sure your buttons have a `data-snap-slider-goto` attribute."), m2 && m2.container && (x2 = m2.container), T.section({ heading: "\u{1F5FA} Navigation ".concat(l2), description: a2, groups: [{ heading: "1. What slider is this nav targeting?", items: [{ heading: "Slider ID", description: y2 }, { heading: "Slider Element", description: x2 }, { heading: "Slider Object", description: m2 || "\u{1F937}\u200D\u2640\uFE0F We couldn't find any." }] }, { heading: "2. What buttons are in this nav?", items: [{ heading: "Buttons", description: S2 }] }], collapsed: true });
              }
              if (s2) {
                var w2 = s2.getAttribute("data-snap-slider"), k2 = window._SnapSliders[w2], O2 = p('[data-snap-slider-nav="'.concat(w2, '"]')), E2 = k2 ? k2.getButtons() : [];
                return w2 = w2 ? '"'.concat(w2, '"') : '\u{1F937}\u200D\u2640\uFE0F We couldn\'t find any.\n\n  \u2022\xA0Include the slider ID you want in your `data-snap-slider` attribute.\n      \u25E6 For example, `data-snap-slider="example-slider"`.', O2.length || (O2 = "\u{1F937}\u200D\u2640\uFE0F We couldn't find any.\n\n  \u2022\xA0Make sure the ID in your container's `data-snap-slider` attribute and the ID in your nav's `data-snap-slider-nav` attribute both match."), E2.length || (E2 = '\u{1F937}\u200D\u2640\uFE0F We couldn\'t find any.\n\n  \u2022\xA0Make sure your button is inside a `data-snap-slider-nav` element, or...\n  \u2022\xA0Include the slider ID you want to target in your `data-snap-slider-goto` attribute.\n      \u25E6 For example, `data-snap-slider-goto="example-slider:prev"`.'), T.section({ heading: "\u{1F968} Slider ".concat(l2), description: s2, groups: [{ heading: "1. What slider is this?", items: [{ heading: "Slider ID", description: w2 }, { heading: "Slider Object", description: k2 || "\u{1F937}\u200D\u2640\uFE0F We couldn't find any." }] }, { heading: "2. What navs target this slider?", items: [{ heading: "Navs", description: O2 }] }, { heading: "3. What buttons target this slider?", items: [{ heading: "Buttons", description: E2 }] }], collapsed: true });
              }
              return t2.notFound(e3);
            }) : t2.notFound(e3);
          } }], (n2 = [{ key: "init", value: function(t3) {
            var e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            g(t3) && (e3 = t3), this.options = k({ container: t3, id: "", slides: "", nav: "", buttons: "", prev: "", next: "", start: 0, loop: null, on: {} }, e3);
            var n3 = h(this.options.container).shift();
            if (n3) {
              for (var o3 in this.container = n3, this.options.buttons = e3.buttons || this.container.getAttribute("data-snap-slider-buttons"), this.options.prev = e3.prev || this.container.getAttribute("data-snap-slider-prev"), this.options.next = e3.next || this.container.getAttribute("data-snap-slider-next"), this.id = this.getMaybeSetID(n3, this.options.id), this.slides = this.getMaybeSetSlides(n3, this.options.slides), this.align = this.getMaybeSetAlign(n3, this.options.align), this.current = this.getMaybeSetStart(n3, this.options.start), this.loop = this.getMaybeSetLoop(n3, this.options.loop), this.transition = null, this.scrolling = false, this.options.on)
                v(this.options.on, o3) && this.on(o3, this.options.on[o3]);
              var i2 = m(this.options, ["buttons", "prev", "next"]);
              this.addGotoButtons(k(k({}, i2), {}, { container: n3 })), this.addNav('[data-snap-slider-nav="'.concat(this.id, '"]'), i2), this.options.nav && this.addNav(this.options.nav, i2), this.update();
            } else
              console.log(`
\u{1F6AB} Whoops! Snap Slider can't find a container element matching "`.concat(this.options.container, `".

\u{1F50D} Please check your selectors for typos. Make sure the element actually exists
   in the DOM when Snap Slider tries to initialize it.

\u{1F447} Here's a copy of the options you tried to initialize with for debugging:

`), this.options, "\n\n");
          } }, { key: "getMaybeSetID", value: function(t3, e3) {
            return (e3 = e3 || t3.getAttribute("data-snap-slider") || t3.id) || (e3 = "slider-".concat(j), j += 1), t3.setAttribute("data-snap-slider", e3), e3;
          } }, { key: "getMaybeSetSlides", value: function(t3, e3) {
            e3 = e3 && "string" == typeof e3 ? e3 : t3.getAttribute("data-snap-slider-slides"), t3.setAttribute("data-snap-slider-slides", e3 || "");
            var n3 = e3 ? h(e3, t3) : f(t3.children);
            return n3.forEach(function(t4) {
              return t4.setAttribute("tabindex", "-1");
            }), n3;
          } }, { key: "getMaybeSetAlign", value: function(t3, e3) {
            return e3 = e3 || t3.getAttribute("data-snap-slider-align") || "", t3.setAttribute("data-snap-slider-align", e3), e3;
          } }, { key: "getMaybeSetStart", value: function(e3, n3) {
            return t2.isValidIndex(n3) || (n3 = e3.getAttribute("data-snap-slider-start") || 1), e3.setAttribute("data-snap-slider-start", n3), n3;
          } }, { key: "getMaybeSetLoop", value: function(t3, e3) {
            return e3 = "boolean" == typeof e3 ? e3 : "true" === t3.getAttribute("data-snap-slider-loop"), t3.setAttribute("data-snap-slider-loop", e3), e3;
          } }, { key: "getSnapAlign", value: function(t3) {
            var e3 = function(t4, e4) {
              var n3 = window.getComputedStyle(t4);
              return n3 && v(n3, e4) ? n3[e4] : "";
            }(t3, "scrollSnapAlign");
            return e3 && e3.indexOf("none") < 0 ? e3 : function(t4, e4) {
              return t4 && (t4 = t4.closest("[".concat(e4, "]"))) ? t4.getAttribute(e4) : "";
            }(t3, "data-snap-slider-align") || "start";
          } }, { key: "getSlide", value: function(t3) {
            return t3 = this.getIndexNumber(t3), this.slides[t3 - 1];
          } }, { key: "getCurrentSlide", value: function() {
            return this.slides[this.current - 1];
          } }, { key: "getIndexNumber", value: function(t3) {
            var e3;
            return e3 = "first" === t3 ? 1 : "middle" === t3 ? Math.ceil(this.slides.length / 2) : "last" === t3 ? this.slides.length : "prev" === t3 ? this.current - 1 : "next" === t3 ? this.current + 1 : parseInt(t3, 10) || -1, this.loop ? (e3 < 1 && (e3 = this.slides.length), e3 > this.slides.length && (e3 = 1)) : (e3 < 1 || e3 > this.slides.length) && (e3 = -1), e3 || 1;
          } }, { key: "getScrollOffset", value: function(t3) {
            var e3 = this.container, n3 = this.getSnapAlign(t3), o3 = t3.offsetTop, i2 = t3.offsetLeft;
            return n3.indexOf("center") >= 0 ? (o3 = t3.offsetTop + t3.offsetHeight / 2 - e3.offsetHeight / 2, i2 = t3.offsetLeft + t3.offsetWidth / 2 - e3.offsetWidth / 2) : n3.indexOf("end") >= 0 && (o3 = t3.offsetTop - e3.offsetHeight + t3.offsetHeight, i2 = t3.offsetLeft - e3.offsetWidth + t3.offsetWidth), { top: o3 = b(o3, 0, e3.scrollHeight), left: i2 = b(i2, 0, e3.scrollWidth) };
          } }, { key: "goto", value: function(t3) {
            var e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n3 = arguments.length > 2 ? arguments[2] : void 0;
            e3 = k({ focus: true, force: false, ignoreCallbacks: false, immediate: false }, e3);
            var o3 = this.getIndexNumber(t3);
            if (!e3.force && o3 === this.current)
              return false;
            var i2 = this.getSlide(o3);
            if (!i2)
              return false;
            var r2 = this.getScrollOffset(i2), a2 = r2.top, s2 = r2.left;
            return e3.immediate ? this.container.scroll({ top: a2, left: s2 }) : (this.startTransition(o3), this.container.scroll({ top: a2, left: s2, behavior: "smooth" })), this.current = o3, this.fireEvent("change", n3, e3), true;
          } }, { key: "buildGoto", value: function(t3) {
            var e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n3 = "";
            return t3 || (n3 += "".concat(this.id, ":")), n3 + e3;
          } }, { key: "setGoto", value: function(t3, e3) {
            var n3 = this;
            (t3 = h(t3)).forEach(function(t4) {
              t4.setAttribute("data-snap-slider-goto", n3.buildGoto(t4.closest("[data-snap-slider], [data-snap-slider-nav]"), e3));
            });
          } }, { key: "startTransition", value: function(t3) {
            var e3 = this;
            this.transition = { from: this.current, to: t3, diff: Math.abs(t3 - this.current) };
            var n3 = this.transition.to;
            this.checkTransition && clearTimeout(this.checkTransition), this.checkTransition = setTimeout(function() {
              e3.transition.to === n3 && e3.stopTransition();
            }, 1e3);
          } }, { key: "stopTransition", value: function() {
            this.transition = null, clearTimeout(this.checkTransition);
          } }, { key: "isPrevButton", value: function(t3) {
            return !!(t3 = h(t3).shift()) && ((t3.getAttribute("data-snap-slider-goto") || "").match(/\bprev$/) || t3.textContent.toLowerCase().match(this.terms.prev) || t3.className.toLowerCase().match(this.terms.prev));
          } }, { key: "isNextButton", value: function(t3) {
            return !!(t3 = h(t3).shift()) && ((t3.getAttribute("data-snap-slider-goto") || "").match(/\bnext$/) || t3.textContent.toLowerCase().match(this.terms.next) || t3.className.toLowerCase().match(this.terms.next));
          } }, { key: "isCurrent", value: function(e3) {
            return !t2.isRelative(e3) && this.getIndexNumber(e3) === this.current;
          } }, { key: "addGotoButtons", value: function(t3) {
            var e3 = this, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            g(t3) && (n3 = t3);
            var o3 = h((n3 = k({ container: "", buttons: t3, prev: "", next: "" }, n3)).buttons, n3.container), i2 = h(n3.prev, n3.container), r2 = h(n3.next, n3.container);
            i2.forEach(function(t4) {
              return t4.hasAttribute("data-snap-slider-goto") || e3.setGoto(i2, "prev");
            }), r2.forEach(function(t4) {
              return t4.hasAttribute("data-snap-slider-goto") || e3.setGoto(r2, "next");
            });
            var a2 = 1;
            return o3.forEach(function(t4) {
              if (t4.hasAttribute("data-snap-slider-goto"))
                return null;
              if (e3.isPrevButton(t4))
                return e3.setGoto(t4, "prev");
              if (e3.isNextButton(t4))
                return e3.setGoto(t4, "next");
              var n4 = parseInt(t4.textContent.replace(/.*\b(\d+)\b.*/, "$1"), 10) || a2;
              return a2 = n4 + 1, e3.setGoto(t4, n4);
            }), this.updateButtons(), true;
          } }, { key: "getNavs", value: function() {
            var t3 = this;
            return p("[data-snap-slider-nav]").filter(function(e3) {
              return e3.getAttribute("data-snap-slider-nav") === t3.id;
            });
          } }, { key: "getButtons", value: function() {
            var e3 = this;
            return p("[data-snap-slider-goto]").filter(function(n3) {
              return t2.getButtonTarget(n3).sliderID === e3.id;
            });
          } }, { key: "updateButtons", value: function() {
            var e3 = this;
            this.current && this.getButtons().forEach(function(n3) {
              var o3 = t2.getButtonTarget(n3).index;
              e3.isCurrent(o3) ? n3.classList.add("is-current") : n3.classList.remove("is-current"), !e3.loop && t2.isRelative(o3) && ("prev" === o3 && 1 === e3.current || "next" === o3 && e3.current === e3.slides.length ? n3.classList.add("is-disabled") : n3.classList.remove("is-disabled"));
            });
          } }, { key: "updateSlides", value: function() {
            var t3 = this;
            this.slides.forEach(function(e3, n3) {
              n3 === t3.current - 1 ? (e3.classList.add("is-current"), e3.removeAttribute("aria-hidden"), p("[data-snap-slider-tabindex]", e3).forEach(function(t4) {
                t4.removeAttribute("tabindex");
              })) : (e3.classList.remove("is-current"), e3.setAttribute("aria-hidden", "true"), s()(e3).forEach(function(t4) {
                t4.setAttribute("tabindex", "-1"), t4.setAttribute("data-snap-slider-tabindex", "");
              }));
            });
          } }, { key: "addNav", value: function(t3) {
            var e3 = this, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            g(t3) && (n3 = t3);
            var o3 = h((n3 = k({ container: t3, buttons: "", prev: "", next: "" }, n3)).container);
            return !!o3.length && (o3.forEach(function(t4) {
              t4.setAttribute("data-snap-slider-nav", e3.id);
              var o4 = t4.getAttribute("data-snap-slider-buttons") || n3.buttons || "button", i2 = n3.prev || t4.getAttribute("data-snap-slider-prev"), r2 = n3.next || t4.getAttribute("data-snap-slider-next");
              e3.addGotoButtons({ container: t4, buttons: o4, prev: i2, next: r2 });
            }), true);
          } }, { key: "getClosest", value: function() {
            var t3 = this;
            return this.slides.reduce(function(e3, n3, o3) {
              o3 += 1;
              var i2 = t3.getScrollOffset(n3), r2 = { index: o3, slide: n3, diff: { top: Math.abs(t3.container.scrollTop - i2.top), left: Math.abs(t3.container.scrollLeft - i2.left) } };
              return e3 ? r2.diff.left <= e3.diff.left && r2.diff.top <= e3.diff.top ? r2 : e3 : r2;
            }, false);
          } }, { key: "watchForChanges", value: function() {
            var t3 = this;
            this.scrollListener = d()(function(e3) {
              var n3 = t3.getClosest();
              t3.transition || n3.index === t3.current || (t3.current = n3.index, t3.fireEvent("change", e3)), t3.scrolling || (t3.scrolling = true, t3.fireEvent("scroll.start", e3)), t3.fireEvent("scroll", e3);
            }, 250), this.scrollEndListener = c()(function(e3) {
              t3.scrolling = false, t3.fireEvent("scroll.end", e3), t3.stopTransition();
            }, 250), this.arrowKeyListener = d()(function(e3) {
              if (!e3.defaultPrevented) {
                var n3 = ["Up", "ArrowUp", "Left", "ArrowLeft"].indexOf(e3.key) >= 0, o3 = ["Down", "ArrowDown", "Right", "ArrowRight"].indexOf(e3.key) >= 0;
                (n3 || o3) && (t3.goto(o3 ? "next" : "prev", null, e3), e3.preventDefault());
              }
            }, 250), this.focusListener = function(e3) {
              var n3, o3;
              t3.scrolling && !t3.transition || (t3.slides.forEach(function(t4, i2) {
                t4.contains(e3.target) && (n3 = t4, o3 = i2 + 1);
              }, null), n3 && t3.goto(o3, null, e3));
            }, this.resizeObserver = { observe: function() {
            }, disconnect: function() {
            } }, "ResizeObserver" in window && (this.resizeObserver = new ResizeObserver(this.resizeCallback.bind(this))), setTimeout(function() {
              t3.container.addEventListener("scroll", t3.scrollListener, y), t3.container.addEventListener("scroll", t3.scrollEndListener, y), t3.container.addEventListener("keydown", t3.arrowKeyListener), t3.container.addEventListener("focusin", t3.focusListener), t3.resizeObserver.observe(t3.container), t3.fireEvent("load");
            }, 100);
          } }, { key: "hasLoaded", value: function() {
            this.container.classList.add("has-loaded");
          } }, { key: "update", value: function() {
            this.goto(this.current, { focus: false, force: true, ignoreCallbacks: true, immediate: true });
          } }, { key: "destroy", value: function() {
            for (var t3 in this.stopTransition(), this.container.removeEventListener("scroll", this.scrollListener), this.container.removeEventListener("scroll", this.scrollEndListener), this.container.removeEventListener("keydown", this.arrowKeyListener), this.resizeObserver.disconnect(), this.callbacks)
              v(this.callbacks, t3) && (this.callbacks[t3] = []);
            delete this.container.SnapSlider, delete window._SnapSliders[this.id];
          } }, { key: "reset", value: function() {
            var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e3 = this.options;
            delete e3.on, delete t3.container, delete t3.id, this.init(this.container, k(k({}, e3), t3));
          } }, { key: "resizeCallback", value: function() {
            this.update();
          } }, { key: "fireEvent", value: function(t3, e3) {
            var n3 = this, o3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (v(this.callbacks, t3) && (o3 = k({ focus: true, ignoreCallbacks: false }, o3), "load" === t3 && this.hasLoaded(), "change" === t3 && (this.updateButtons(), this.updateSlides()), o3.focus && this.handleFocus(t3, e3), !o3.ignoreCallbacks)) {
              e3 = e3 || {};
              var i2 = [t3];
              v(this.callbacks, "".concat(t3, ".").concat(e3.type)) && i2.push("".concat(t3, ".").concat(e3.type)), i2.forEach(function(t4) {
                n3.callbacks[t4].forEach(function(t5) {
                  "function" == typeof t5 && t5(n3, e3);
                });
              });
            }
          } }, { key: "handleFocus", value: function(e3, n3) {
            if (this.transition) {
              if (n3 && "change" === e3) {
                var o3 = n3.target.closest("[data-snap-slider-goto]"), i2 = t2.getButtonTarget(o3).index;
                if (t2.isRelative(i2))
                  return;
              }
              this.transition.diff <= 1 && "change" === e3 && this.getCurrentSlide().focus({ preventScroll: true }), this.transition.diff > 1 && "scroll.end" === e3 && (document.activeElement && document.activeElement !== document.body && !document.activeElement.closest("[data-snap-slider-goto]") || this.getCurrentSlide().focus({ preventScroll: true }));
            }
          } }, { key: "on", value: function(t3, e3) {
            v(this.callbacks, t3) ? "function" == typeof e3 ? this.callbacks[t3].push(e3) : console.log('\n  \u{1F6AB} Whoops! Snap Slider can only add functions as callbacks.\n\n  \u{1F440} It looks like you passed a "'.concat(x(e3), '" instead.\n\n'), e3, "\n\n") : console.log(`
\u{1F6AB} Whoops! Snap Slider can't add events for "`.concat(t3, '".\n\n\u{1F4DD} Please make sure your event matches one of the ones in this list:\n\n'), Object.keys(this.callbacks), "\n\n");
          } }]) && A(e2.prototype, n2), o2 && A(e2, o2), t2;
        }();
        window._SnapSliders = [], window.SnapSlider = I, "undefined" != typeof $ && ($.fn.snapSlider = function(t2) {
          return new I(this, t2);
        }), function(t2) {
          "loading" !== document.readyState ? t2() : document.addEventListener("DOMContentLoaded", t2);
        }(function() {
          o(window), r.a.polyfill(), p("[data-snap-slider]").forEach(function(t2) {
            return new I(t2);
          }), function(t2, e2, n2, o2) {
            var i2 = document.querySelector(t2);
            !!i2 && i2.addEventListener(e2, function(t3) {
              for (var e3 = i2.querySelectorAll(n2), r2 = t3.target, a2 = 0, s2 = e3.length; a2 < s2; a2 += 1)
                for (var l2 = r2, c2 = e3[a2]; l2 && l2 !== i2; ) {
                  if (l2 === c2)
                    return o2.call(c2, t3);
                  l2 = l2.parentNode;
                }
            });
          }("body", "click", "[data-snap-slider-goto]", I.handleGoto);
        });
        e.default = I;
      }, function(t, e, n) {
        "use strict";
        function o(t2) {
          for (var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-", n2 = "", o2 = 0; o2 < t2; o2 += 1)
            n2 += e2;
          return n2;
        }
        function i(t2) {
          return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          })(t2);
        }
        function r(t2) {
          return "object" === i(t2) ? "%o" : "number" == typeof t2 ? "%d" : "%s";
        }
        function a(t2) {
          var e2 = t2.heading, n2 = t2.description, i2 = t2.groups, a2 = t2.collapsed ? "groupCollapsed" : "group";
          console.log("%c\n\u250F\u2501\u2501".concat(o(e2.length, "\u2501"), "\u2501\u2501\u2513\n\u2503  ").concat(e2, "  \u2503\n\u2517\u2501\u2501").concat(o(e2.length, "\u2501"), "\u2501\u2501\u251B"), "font-size: 1.25em;", "\n\n", n2, "\n\n"), i2.forEach(function(t3) {
            var e3;
            console[a2]("%c".concat(t3.heading), "font-weight: bold;");
            var n3 = [], o2 = "";
            t3.items.forEach(function(t4) {
              var e4 = t4.heading, i3 = t4.description;
              o2 += "\n%c".concat(r(e4), "\n"), n3.push("text-decoration: underline;", e4), o2 += "\n%c".concat(r(i3), "\n"), n3.push("text-decoration: none;", i3);
            }), (e3 = console).log.apply(e3, [o2].concat(n3)), console.groupEnd();
          }), console.log("\n");
        }
        n.r(e), n.d(e, "getSubstitution", function() {
          return r;
        }), n.d(e, "section", function() {
          return a;
        });
      }]).default;
    });
  }
});

// assets/js/site.js
var import_snap_slider = __toESM(require_snap_slider_min());
var lozadObserver = lozad(".lozad", {
  loaded: function(el) {
    el.classList.add("fade");
  },
  error: function(el) {
    console.log("Error loading image:", el);
  }
});
lozadObserver.observe();
var slider = new import_snap_slider.default(".flex-row-slider", {
  id: "media-slider-link",
  nav: ".slider-nav",
  start: "first"
});
var svgElement = document.getElementById("svgColor");
var logoToggle = () => {
  if (document.getElementById("prim-menu-checkbox").checked) {
    svgElement.classList.add("toggle-svg");
  } else {
    svgElement.classList.remove("toggle-svg");
  }
};
var showBTNS = () => {
  const element = document.getElementById("contactBTN");
  element.classList.toggle("hide");
};
var hideBTN = () => {
  const element = document.getElementById("emailBTN");
  element.classList.toggle("hide");
};
var showBTNSpastor = () => {
  const element = document.getElementById("contactBTNpastor");
  element.classList.toggle("hide");
};
var hideBTNpastor = () => {
  const element = document.getElementById("emailBTNpastor");
  element.classList.toggle("hide");
};
var copyEmailBtn = document.querySelector(".emailCopyBtn");
copyEmailBtn.addEventListener("click", function(event) {
  const sendEmailLink2 = document.querySelector('a[href^="mailto:"]');
  const emailAddress = sendEmailLink2.href.replace(/^mailto:/, "");
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = emailAddress;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  try {
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    const original = copyEmailBtn.textContent;
    copyEmailBtn.textContent = "Copied!";
    copyEmailBtn.classList.add("success");
    setTimeout(() => {
      copyEmailBtn.textContent = original;
      copyEmailBtn.classList.remove("success");
      showBTNS();
      hideBTN();
    }, 2e3);
  } catch (e) {
    const errorMsg = document.querySelector(".errorMsg");
    errorMsg.classList.add("show");
    setTimeout(() => {
      errorMsg.classList.remove("show");
    }, 2e3);
  }
});
var sendEmailLink = document.querySelector('.emailLink[href^="mailto:"]');
sendEmailLink.addEventListener("click", function(event) {
  showBTNS();
  hideBTN();
});
var TxtType = class {
  constructor(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2e3;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  }
  tick() {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
    let that = this;
    let delta = 200 - Math.random() * 100;
    if (this.isDeleting) {
      delta /= 2;
    }
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
    setTimeout(() => {
      that.tick();
    }, delta);
  }
};
window.onload = function() {
  const elements = document.getElementsByClassName("typewrite");
  for (let i = 0; i < elements.length; i++) {
    const toRotate = elements[i].getAttribute("data-type");
    const period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  const css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #f19426 }";
  document.body.appendChild(css);
};
//# sourceMappingURL=site.js.map
