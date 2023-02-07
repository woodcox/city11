const yaml = require("js-yaml");
const htmlmin = require('html-minifier');
const now = String(Date.now());
const svgContent = require('./config/shortcodes/svgcontent.js');
const iconShortcode = require('./config/shortcodes/feathericons.js');
const postbuildPipeline = require('./config/build/postbuild.js');
const sass = require("sass");
const path = require("path");
const esbuildPipeline = require('./config/build/esbuild.js');
const manifest = require('./src/_data/manifest.json');
const isProd = process.env.ELEVENTY_ENV === 'prod' ? true : false;

const TEMPLATE_ENGINE = 'liquid';


module.exports = function (eleventyConfig) {
  // DEV SERVER
  eleventyConfig.setServerOptions({
    port: 8080,
    watch: ["dist/assets/css/*.css"],
    liveReload: true,
    domDiff: true,
  });
  
  // WATCH
  // esbuild is also watching the js & jsx files
  eleventyConfig.watchIgnores.add("./src/_data/manifest.json");
  eleventyConfig.watchIgnores.add("./src/_data/buildmeta.json");


  // BUILD HOOK
  eleventyConfig.on("eleventy.before", esbuildPipeline);
  if (isProd){
    eleventyConfig.on("eleventy.after", postbuildPipeline);
  };

  // To Support .yaml Extension in _data
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  // COPY
  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
    "./assets/webfonts": "./assets/webfonts",
  });

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/assets/image");

  // Copy favicon to route of /_site
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");

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

  // FILTERS
  // add sass filter to template engine
  eleventyConfig.addFilter("scssify", code => {
    return sass.compileString(code).css.toString();
  });


  // Change things based on the envirnoment
  let env = process.env.ELEVENTY_ENV;

  if (env === "prod") {
    eleventyConfig.addPassthroughCopy({ './assets/images/favicon/11up.jpg': './assets/images/11up.jgp'})
  }

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (
      process.env.ELEVENTY_ENV === "prod" &&
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
    templateFormats: ['html', 'md', TEMPLATE_ENGINE],
    dir: {
      input: 'src',
      output: 'dist',
      data: "_data",
    },
  };
};
