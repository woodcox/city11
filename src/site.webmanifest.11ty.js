module.exports.data = {
  layout: null
};

module.exports = async function() {
  return await this.renderTemplate(`
  {
    "name":"{{ meta.name }}",
    "short_name":"{{ meta.shortname }}",
    "icons":[
      {
        "src":"/android-chrome-192x192.png",
        "sizes":"192x192",
        "type":"image/png"
      },
      {
        "src":"/android-chrome-512x512.png",
        "sizes":"512x512",
        "type":"image/png"
      }
    ],
    "theme_color":"{{ meta.primary_color }}",
    "background_color":"{{ meta.secondary_color }}",
    "display":"standalone"
  }`, "liquid");
};


