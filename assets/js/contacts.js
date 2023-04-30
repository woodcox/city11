// assets/js/contacts.js
var tld_ = [
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
var m_ = "mailto:";
var a_ = "@";
var d_ = ".";
var createLink = (href, text, className) => {
  const link = document.createElement("a");
  link.href = href;
  link.textContent = text;
  if (className)
    link.className = className;
  return link;
};
var contact1 = (name, dom, tl, params) => {
  const s = e(name, dom, tl);
  const link = createLink(`${m_}${s}${params}`, s);
  document.body.appendChild(link);
};
var contact2 = (name, dom, tl, params, display) => {
  const link = createLink(
    `${m_}${e(name, dom, tl)}${params}`,
    display
  );
  document.body.appendChild(link);
};
var contact3 = (name, dom, tl, params, display) => {
  const link = createLink(
    `${m_}${e(name, dom, tl)}${params}`,
    display,
    "button accent-button"
  );
  document.body.appendChild(link);
};
var e = (name, dom, tl) => {
  let s = name + a_;
  if (tl !== -2) {
    s += dom;
    if (tl >= 0)
      s += d_ + tld_[tl];
  } else
    s += swapper(dom);
  return s;
};
var swapper = (d) => {
  let s = "";
  for (let i = 0; i < d.length; i += 2)
    if (i + 1 == d.length)
      s += d.charAt(i);
    else
      s += d.charAt(i + 1) + d.charAt(i);
  return s.replace(/\?/g, ".");
};
//# sourceMappingURL=contacts.js.map
