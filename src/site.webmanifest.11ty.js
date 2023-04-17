module.exports.data = {
  myData: {
    layout: null
  }
};

module.exports = async function() {
  return await this.renderTemplate(`
  {
    "name":"{{ settings.name }}",
    "short_name":"{{ settings.shortname }}",
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
    "theme_color":"{{ settings.primary_color }}",
    "background_color":"{{ settings.secondary_color }}",
    "display":"standalone"
  }`, "liquid");
};


