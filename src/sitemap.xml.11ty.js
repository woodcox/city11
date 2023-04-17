module.exports.data = {
  layout: null
};

module.exports = async function() {
  return await this.renderTemplate(`
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
          xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" 
          xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    {%- for primary in nav.primary %}
    <url>
      <loc>{{ meta.url }}{{ primary.href | url }}</loc>
      {%- if primary.lastmod == null %}
      <lastmod>{{ "now" | date: "%Y-%m-%d %H:%M" | date }}</lastmod>
      {%- else %}
      <lastmod>{{ primary.lastmod | date }}</lastmod>
      {%- endif %}
      <changefreq>monthly</changefreq>
      {%- if primary.text == "Home" %}
      <priority>1.0</priority>
      {%- else %}
      <priority>0.7</priority>
      {%- endif %}
    </url>
    {%- endfor %}
    {%- for doc in meta.documents %}
    {%- if doc.sitemap == true %}
    <url>
      <loc>{{ meta.url }}{{ doc.url | url }}</loc>
      {%- if doc.lastmod == null %}
      <lastmod>{{ "now" | date: "%Y-%m-%d %H:%M" | date }}</lastmod>
      {%- else %}
      <lastmod>{{ doc.lastmod | date }}</lastmod>
      {%- endif %}
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
    </url>
    {%- endif %}
    {%- endfor %}
    {%- for page in meta.pages %}
    {%- if page.sitemap != null and page.sitemap != empty %}
    <url>
      <loc>{{ meta.url }}{{ page.url | url }}</loc>
      <lastmod>{{ page.sitemap.lastmod | date }}</lastmod>
      <changefreq>{{ page.sitemap.changefreq }}</changefreq>
      <priority>{{ page.sitemap.priority }}</priority>
    </url>
    {%- endif %}
  {%- endfor %}
  </urlset>
  `, "liquid");
};

