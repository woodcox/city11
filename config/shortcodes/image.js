const Image = require('@11ty/eleventy-img');

const imageShortcode = async (
  src,
  alt,
  className = undefined,
  widths = [400, 600, 800, 1000, 1160],
  formats = ['webp', 'jpeg'],
  sizes = '100vw'
) => {
  // we'll fill this in shortly
  const imageMetadata = await Image(src, {
    widths: [...widths, null],
    formats: [...formats, null],
    outputDir: 'dist/assets/images',
    urlPath: 'city11/assets/images',
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
