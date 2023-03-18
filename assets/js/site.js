(() => {
  // assets/js/site.js
  lozad(".lozad", {
    load: function(el) {
      el.src = el.dataset.src;
      el.onload = function() {
        el.classList.add("fade");
      };
    }
  }).observe();
  const slider = new SnapSlider(".flex-row-slider", {
    id: "media-slider-link",
    nav: ".slider-nav",
    start: "first"
  });
  const svgElement = document.getElementById("svgColor");
  function logoToggle() {
    if (document.getElementById("prim-menu-checkbox").checked == true) {
      svgElement.classList.add("toggle-svg");
    } else {
      svgElement.classList.remove("toggle-svg");
    }
  }
  function showBTNSoffice() {
    const element = document.getElementById("contactBTNoffice");
    element.classList.toggle("hide");
  }
  function hideBTNoffice() {
    const element = document.getElementById("emailBTNoffice");
    element.classList.toggle("hide");
  }
  function showBTNSpastor() {
    const element = document.getElementById("contactBTNpastor");
    element.classList.toggle("hide");
  }
  function hideBTNpastor() {
    const element = document.getElementById("emailBTNpastor");
    element.classList.toggle("hide");
  }
  const contactEmailBtn = document.querySelectorAll(".js-emailcopybtn");
  contactEmailBtn.forEach((copyEmailBtn) => {
    copyEmailBtn.addEventListener("click", function(event) {
      var emailLink = document.querySelector(".js-emaillink");
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNode(emailLink);
      selection.removeAllRanges();
      selection.addRange(range);
      try {
        document.execCommand("copy");
        selection.removeAllRanges();
        const original = copyEmailBtn.textContent;
        copyEmailBtn.textContent = "Copied!";
        copyEmailBtn.classList.add("success");
        setTimeout(() => {
          copyEmailBtn.textContent = original;
          copyEmailBtn.classList.remove("success");
        }, 1200);
      } catch (e) {
        const errorMsg = document.querySelector(".error-msg");
        errorMsg.classList.add("show");
        setTimeout(() => {
          errorMsg.classList.remove("show");
        }, 1200);
      }
    });
  });
  function r(a, b) {
    return ++b ? String.fromCharCode((a = a.charCodeAt() + 47, a > 126 ? a - 94 : a)) : a.replace(/[^ ]/g, r);
  }
  ;
  document.getElementById("decryptoffice").innerHTML = r("@77:46o464=665D]4@]F<");
  document.getElementById("decryptpastor").innerHTML = r("A2DE@Co464=665D]4@]F<");
  const links = document.querySelectorAll("nav ul a");
  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }
  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  }
  const TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2e3;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };
  TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
    const that = this;
    const delta = 200 - Math.random() * 100;
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
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  window.onload = function() {
    const elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    const css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #f19426";
    document.body.appendChild(css);
  };
})();
//# sourceMappingURL=site.js.map
