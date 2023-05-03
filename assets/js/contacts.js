// Contacts.js version 6

// Use data attributes in the HTML to provide the props for each contact link. For example:
//  <a href="#" data-name="John" data-dom="example" data-tl="0" data-params="?subject=Contact" class="contact-link"></a>
//  <a href="#" data-name="Jane" data-dom="example" data-tl="1" data-params="?subject=Contact" data-display="Email Jane" class="contact-link">Email Jane</a>
//  <a href="#" data-name="Bob" data-dom="example" data-tl="-2" data-params="?subject=Contact" data-display="Contact Bob" class="contact-link">Contact Bob</a>

// Data attribute props:
// - `data-name`: The name of the contact.
// - `data-dom`: The domain name of the contact's email address.
// - `data-tl`: The index of the top-level domain in the `tld_` array (or -2 if the domain should be swapped).
// - `data-params`: Additional query parameters to include in the email link.
// - `display`: The text to display for the link (only used for `contact2`).

const tld_ = [
  "com",
  "org",
  "net",
  "io",
  "dev",
  "co",
  "uk",
  "co.uk",
  "org.uk",
  "gov.uk",
  "ac.uk"
];
const m_ = "mailto:";
const a_ = "@";
const d_ = ".";

const createLink = (href, text, className) => {
  const link = document.createElement("a");
  link.href = href;
  link.textContent = text;
  if (className) link.className = className;
  return link;
};

const contact1 = (name, dom, tl, params) => {
  const s = e(name, dom, tl);
  const link = createLink(`${m_}${s}${params}`, s);
  return link;
};

const contact2 = (name, dom, tl, params, display) => {
  const link = createLink(
    `${m_}${e(name, dom, tl)}${params}`,
    display
  );
  return link;
};

const e = (name, dom, tl) => {
  let s = name + a_;
  if (tl !== -2) {
    s += dom;
    if (tl >= 0) s += d_ + tld_[tl];
  } else s += swapper(dom);
  return s;
};

// If data-tl="-2" Swapper function replaces a ? with . john@example?com
const swapper = (d) => {
  let s = "";
  for (let i = 0; i < d.length; i += 2)
    if (i + 1 == d.length) s += d.charAt(i);
    else s += d.charAt(i + 1) + d.charAt(i);
  return s.replace(/\?/g, ".");
};

const contactElements = document.querySelectorAll(".contact-link");

contactElements.forEach((contactElement) => {
  const name = contactElement.getAttribute("data-name");
  const dom = contactElement.getAttribute("data-dom");
  const tl = parseInt(contactElement.getAttribute("data-tl"));
  const params = contactElement.getAttribute("data-params");
  const display = contactElement.textContent.trim();

  let link;
  if (contactElement.classList.contains("contact1")) {
    link = contact1(name, dom, tl, params);
  } else if (contactElement.classList.contains("contact2")) {
    link = contact2(name, dom, tl, params, display);
  }

  if (link) {
    contactElement.innerHTML = "";
    contactElement.appendChild(link);
  }
});
