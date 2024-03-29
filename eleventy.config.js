const yaml = require("js-yaml");
const htmlmin = require('html-minifier');
const now = String(Date.now());
const svgContent = require('./config/shortcodes/svgcontent.js');
const iconShortcode = require('./config/shortcodes/feathericons.js');
const imageShortcode = require('./config/shortcodes/image.js');
const optomiseImages = require('./config/build/optomiseimg.js');
const postbuildPipeline = require('./config/build/postbuild.js');
const sass = require("sass");
const path = require("path");
const esbuildPipeline = require('./config/build/esbuild.js');
const manifest = require('./src/_data/manifest.json');
const isProd = process.env.ELEVENTY_ENV === 'prod' ? true : false;
const { EleventyRenderPlugin } = require("@11ty/eleventy");

const TEMPLATE_ENGINE = 'liquid';


module.exports = function (eleventyConfig) {
  // DEV SERVER
  eleventyConfig.setServerOptions({
    port: 8080,
    watch: ["dist/assets/css/*.css", "dist/assets/js/*.js"],
  });
  
  // WATCH
  // esbuild is also watching the js & jsx files
  eleventyConfig.watchIgnores.add("./src/_data/manifest.json");
  eleventyConfig.watchIgnores.add("./src/_data/buildmeta.json");
  eleventyConfig.watchIgnores.add("./assets/images/svg");

  // BUILD HOOK
  eleventyConfig.on("eleventy.before", esbuildPipeline);
  eleventyConfig.on("eleventy.before", optomiseImages);
  if (isProd){
    eleventyConfig.on("eleventy.after", postbuildPipeline);
  };
  
  // PLUGINS
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  // To Support .yaml Extension in _data
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  // COPY Static Files to /dist
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
    "./assets/webfonts": "./assets/webfonts",
    "./assets/images/favicon": "./assets/images/favicon",
  });

  // SHORTCODES
  // Add cache busting with {{ 'myurl' | version }} time string
  eleventyConfig.addFilter("version", (url) => {
    const [urlPart, paramPart] = url.split("?");
    const params = new URLSearchParams(paramPart || "");
    params.set("v", `${now}`);
    console.log(params);
    return `${urlPart}?${params}`;
  });
  
  // Use this filter only if the asset is processed by esbuild and is in _data/manifest.json. Use {{ 'myurl' | hash }}
  eleventyConfig.addFilter("hash", (url) => {
    const urlbase = path.basename(url);
    const [basePart, ...paramPart] = urlbase.split(".");
    const urldir = path.dirname(url);
    let hashedBasename = manifest[basePart];
    return `${urldir}/${hashedBasename}`;
  });

  // Insert any .svg file with {% svg "github" %} saved in .assets/images/svg/
  eleventyConfig.addShortcode('svg', svgContent);
  
  // Insert a feather-icon with {% icon "github" %} from https://feathericons.com/
  eleventyConfig.addShortcode('icon', iconShortcode);

  // Image optimisation
  eleventyConfig.addShortcode('image', imageShortcode);

  // FILTERS
  // add sass filter to template engine
  eleventyConfig.addFilter("scssify", code => {
    return sass.compileString(code).css.toString();
  });

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (
      isProd &&
      outputPath &&
      outputPath.endsWith('.html')
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      })
      return minified
    }

    return content
  })
  
  // Let Eleventy transform HTML files as liquidjs
  // So that we can use .html instead of .liquid

  return {
    dataTemplateEngine: TEMPLATE_ENGINE,
    markdownTemplateEngine: TEMPLATE_ENGINE,
    htmlTemplateEngine: TEMPLATE_ENGINE,
    templateFormats: ['html', 'md', '11ty.js', TEMPLATE_ENGINE],
    dir: {
      input: 'src',
      output: 'dist',
      data: "_data",
    },
  };
};
