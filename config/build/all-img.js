const Image = require('@11ty/eleventy-img');
const glob = require('glob-all');
const path = require("path");

const allImages = async () => {

  // Use original file slug to write images to dist
  const imagePaths = glob.sync(['assets/images/master/*.jpg']);

  // loop over each image file in array
  for (let imagePath of imagePaths) {
    const imageMetadata = await Image(imagePath, {
      widths: [400, 600, 800, 1000, 1160],
      formats: ['webp', 'jpeg'],
      outputDir: 'dist/assets/images',
      urlPath: '/city11/assets/images',
      filenameFormat: function(id, src, width, format, options) {
        const { name } = path.parse(src);
        console.log(name);
      
        // writes all images to 'dist/assets/images' with formats of imageFileName-300w.webp and .jpg
        return `${name}-${width}.${format}`;
      }
    });
  }
};

module.exports =  allImages;
