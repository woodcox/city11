(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // assets/js/smoothscroll-polyfill.js
  var require_smoothscroll_polyfill = __commonJS({
    "assets/js/smoothscroll-polyfill.js"(exports, module) {
      !function() {
        "use strict";
        function o() {
          var o2 = window, t = document;
          if (!("scrollBehavior" in t.documentElement.style && true !== o2.__forceSmoothScrollPolyfill__)) {
            var l, e = o2.HTMLElement || o2.Element, r = 468, i = { scroll: o2.scroll || o2.scrollTo, scrollBy: o2.scrollBy, elementScroll: e.prototype.scroll || n, scrollIntoView: e.prototype.scrollIntoView }, s = o2.performance && o2.performance.now ? o2.performance.now.bind(o2.performance) : Date.now, c = (l = o2.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(l) ? 1 : 0);
            o2.scroll = o2.scrollTo = function() {
              void 0 !== arguments[0] && (true !== f(arguments[0]) ? h.call(o2, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : o2.scrollX || o2.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : o2.scrollY || o2.pageYOffset) : i.scroll.call(o2, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : o2.scrollX || o2.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : o2.scrollY || o2.pageYOffset));
            }, o2.scrollBy = function() {
              void 0 !== arguments[0] && (f(arguments[0]) ? i.scrollBy.call(o2, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : h.call(o2, t.body, ~~arguments[0].left + (o2.scrollX || o2.pageXOffset), ~~arguments[0].top + (o2.scrollY || o2.pageYOffset)));
            }, e.prototype.scroll = e.prototype.scrollTo = function() {
              if (void 0 !== arguments[0])
                if (true !== f(arguments[0])) {
                  var o3 = arguments[0].left, t2 = arguments[0].top;
                  h.call(this, this, void 0 === o3 ? this.scrollLeft : ~~o3, void 0 === t2 ? this.scrollTop : ~~t2);
                } else {
                  if ("number" == typeof arguments[0] && void 0 === arguments[1])
                    throw new SyntaxError("Value could not be converted");
                  i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop);
                }
            }, e.prototype.scrollBy = function() {
              void 0 !== arguments[0] && (true !== f(arguments[0]) ? this.scroll({ left: ~~arguments[0].left + this.scrollLeft, top: ~~arguments[0].top + this.scrollTop, behavior: arguments[0].behavior }) : i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop));
            }, e.prototype.scrollIntoView = function() {
              if (true !== f(arguments[0])) {
                var l2 = function(o3) {
                  for (; o3 !== t.body && false === (e3 = p(l3 = o3, "Y") && a(l3, "Y"), r3 = p(l3, "X") && a(l3, "X"), e3 || r3); )
                    o3 = o3.parentNode || o3.host;
                  var l3, e3, r3;
                  return o3;
                }(this), e2 = l2.getBoundingClientRect(), r2 = this.getBoundingClientRect();
                l2 !== t.body ? (h.call(this, l2, l2.scrollLeft + r2.left - e2.left, l2.scrollTop + r2.top - e2.top), "fixed" !== o2.getComputedStyle(l2).position && o2.scrollBy({ left: e2.left, top: e2.top, behavior: "smooth" })) : o2.scrollBy({ left: r2.left, top: r2.top, behavior: "smooth" });
              } else
                i.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
            };
          }
          function n(o3, t2) {
            this.scrollLeft = o3, this.scrollTop = t2;
          }
          function f(o3) {
            if (null === o3 || "object" != typeof o3 || void 0 === o3.behavior || "auto" === o3.behavior || "instant" === o3.behavior)
              return true;
            if ("object" == typeof o3 && "smooth" === o3.behavior)
              return false;
            throw new TypeError("behavior member of ScrollOptions " + o3.behavior + " is not a valid value for enumeration ScrollBehavior.");
          }
          function p(o3, t2) {
            return "Y" === t2 ? o3.clientHeight + c < o3.scrollHeight : "X" === t2 ? o3.clientWidth + c < o3.scrollWidth : void 0;
          }
          function a(t2, l2) {
            var e2 = o2.getComputedStyle(t2, null)["overflow" + l2];
            return "auto" === e2 || "scroll" === e2;
          }
          function d(t2) {
            var l2, e2, i2, c2, n2 = (s() - t2.startTime) / r;
            c2 = n2 = n2 > 1 ? 1 : n2, l2 = 0.5 * (1 - Math.cos(Math.PI * c2)), e2 = t2.startX + (t2.x - t2.startX) * l2, i2 = t2.startY + (t2.y - t2.startY) * l2, t2.method.call(t2.scrollable, e2, i2), e2 === t2.x && i2 === t2.y || o2.requestAnimationFrame(d.bind(o2, t2));
          }
          function h(l2, e2, r2) {
            var c2, f2, p2, a2, h2 = s();
            l2 === t.body ? (c2 = o2, f2 = o2.scrollX || o2.pageXOffset, p2 = o2.scrollY || o2.pageYOffset, a2 = i.scroll) : (c2 = l2, f2 = l2.scrollLeft, p2 = l2.scrollTop, a2 = n), d({ scrollable: c2, method: a2, startTime: h2, startX: f2, startY: p2, x: e2, y: r2 });
          }
        }
        "object" == typeof exports && "undefined" != typeof module ? module.exports = { polyfill: o } : o();
      }();
    }
  });
  require_smoothscroll_polyfill();
})();
//# sourceMappingURL=smoothscroll-polyfill.js.map
