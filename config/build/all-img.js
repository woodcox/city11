const Image = require('@11ty/eleventy-img');

const allImages = async (
  src,
  alt,
  widths = [400, 600, 800, 1000, 1160],
  formats = ['webp', 'jpeg']
) => {
  // we'll fill this in shortly
  const imageMetadata = await Image(src, {
    widths: [...widths],
    formats: [...formats],
    outputDir: 'dist/assets/images',
    urlPath: '/city11/assets/images',
  });
  
  const imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(imageMetadata, imageAttributes);
};

module.exports =  imageShortcode;
