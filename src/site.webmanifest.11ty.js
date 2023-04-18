module.exports.data = {
  layout: null
};

module.exports = async function() {
  return await this.renderTemplate(`
  {
    "name":"{{ meta.companyName }}",
    "short_name":"{{ meta.companyShortname }}",
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
    "theme_color":"{{ meta.colors.cityblue }}",
    "background_color":"{{ meta.colors.cityblue }}",
    "display":"standalone"
  }`, "liquid");
};


