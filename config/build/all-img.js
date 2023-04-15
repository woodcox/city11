const Image = require('@11ty/eleventy-img');
const glob = require('glob-all');
const path = require("path");

const allImages = async (
  widths = [400, 600, 800, 1000, 1160],
  formats = ['webp', 'jpeg']
) => {

  // Use original file slug to write images to dist
  const imagePath = glob.sync(['assets/images/master/*.jpg']);
  const imageMetadata = await Image(imagePath, {
    widths: [...widths],
    formats: [...formats],
    outputDir: 'dist/assets/images',
    urlPath: '/city11/assets/images',
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);
      
      // writes all images to 'dist/assets/images' with formats of imageFileName-300w.webp and .jpg
      return `${name}-${width}w.${format}`;
    }
  }); 
};

module.exports =  allImages;
