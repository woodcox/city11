import SnapSlider from '@tannerhodges/snap-slider';

//=======================================
// Initialize lozad library
//=======================================
const lozadObserver = lozad('.lozad', {
  loaded: function(el) {
    el.classList.add('fade');
  },
  error: function(el) {
    console.log('Error loading image:', el);
  }
});
lozadObserver.observe();

//======================================
// Initialize Snap slider
//======================================
// Create a new slider.
const slider = new SnapSlider('.flex-row-slider', {
  id: 'media-slider-link',
  nav: '.slider-nav',
  start: 'first',
});

//======================================
// Logo svg color toggle
//======================================
const svgElement = document.getElementById("svgColor");

const logoToggle = () => {
  if (document.getElementById("prim-menu-checkbox").checked) {
    svgElement.classList.add("toggle-svg");
  } else {
    svgElement.classList.remove("toggle-svg");
  }
}

//=====================================================
// Show or hide contact buttons
//=====================================================
const showBTNS = () => {
  const element = document.getElementById("contactBTN");
  element.classList.toggle("hide");
}

const hideBTN = () => {
  const element = document.getElementById("emailBTN");
  element.classList.toggle("hide");
}

const showBTNSpastor = () => {
  const element = document.getElementById("contactBTNpastor");
  element.classList.toggle("hide");
}

const hideBTNpastor = () => {
  const element = document.getElementById("emailBTNpastor");
  element.classList.toggle("hide");
}

//=====================================================
// Copy contact button
//=====================================================
const copyEmailBtn = document.querySelector('.emailCopyBtn');

copyEmailBtn.addEventListener('click', function(event) {  
  // Select the email link anchor text  
  const emailLink = document.querySelector('.emailLink');
  const selection = window.getSelection(); 
  const range = document.createRange();  
  range.selectNode(emailLink);
  selection.removeAllRanges();
  selection.addRange(range);  

  try {  
    // Now that we've selected the anchor text, execute the copy command  
    document.execCommand('copy');
    selection.removeAllRanges();

    const original = copyEmailBtn.textContent;
    copyEmailBtn.textContent = 'Copied!';
    copyEmailBtn.classList.add('success');

    setTimeout(() => {
      copyEmailBtn.textContent = original;
      copyEmailBtn.classList.remove('success');
      showBTNS();
      hideBTN();
    }, 2000);
  } catch(e) {
    const errorMsg = document.querySelector('.errorMsg');
    errorMsg.classList.add('show');

    setTimeout(() => {
      errorMsg.classList.remove('show');
    }, 1200);
  }
});

const sendEmailLink = document.querySelector('.button[href^="mailto:"]');
sendEmailLink.addEventListener('click', function(event) {
  showBTNS();
  hideBTN();
});

//=====================================================
// Smooth scroll (plus polyfill)
//=====================================================
const smoothLinks = document.querySelectorAll("nav ul a");

for (const s_link of smoothLinks) {
  s_link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  window.scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

//=======================================
// Typing text animation
//=======================================
class TxtType {
  constructor(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
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

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    let that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(() => {
      that.tick();
    }, delta);
  }
}

window.onload = function() {
  const elements = document.getElementsByClassName('typewrite');
  for (let i = 0; i < elements.length; i++) {
    const toRotate = elements[i].getAttribute('data-type');
    const period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  const css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #f19426 }";
  document.body.appendChild(css);
};
