// Contacts.js version 6

// You can reference contact1 in HTML by calling it in a script tag, like this:
// <script>
//  contact1("name", "domain", 0, "?subject=Email Subject&body=Email Body");
// </script>


const tld_ = [
  "com",
  "org",
  "net",
  "so",
  "io",
  "dev",
  "co",
  "uk",
  "us",
  "info",
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
  element.appendChild(link); // add link to the specified div element
};

const contact2 = (name, dom, tl, params, display) => {
  const link = createLink(
    `${m_}${e(name, dom, tl)}${params}`,
    display
  );
  element.appendChild(link); // add link to the specified div element
};

const contact3 = (name, dom, tl, params, display) => {
  const link = createLink(
    `${m_}${e(name, dom, tl)}${params}`,
    display,
    "button accent-button"
  );
  element.appendChild(link); // add link to the specified div element
};

const e = (name, dom, tl) => {
  let s = name + a_;
  if (tl !== -2) {
    s += dom;
    if (tl >= 0) s += d_ + tld_[tl];
  } else s += swapper(dom);
  return s;
};

const swapper = (d) => {
  let s = "";
  for (let i = 0; i < d.length; i += 2)
    if (i + 1 == d.length) s += d.charAt(i);
    else s += d.charAt(i + 1) + d.charAt(i);
  return s.replace(/\?/g, ".");
};

