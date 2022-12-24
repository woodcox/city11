// https://www.seancdavis.com/posts/javascript-for-11ty-with-esbuild/
const esbuild = require('esbuild');
const glob = require('glob-all'); // to enable * glob pattern in esbuild
const isProd = process.env.ELEVENTY_ENV === 'prod' ? true : false;
const manifestPlugin = require('esbuild-plugin-manifest');
const purgecssPlugin2 = require("esbuild-plugin-purgecss-2")
const fs = require('fs');
const path = require("path");


module.exports = async () => {
  result = await esbuild.build({
    entryPoints: glob.sync(['assets/js/*.js', 'assets/css/*.css']),
    entryNames: '[dir]/[name]-[hash]',
    outExtension: isProd ? {'.js': '.min.js', '.css': '.min.css'} : {'.js': '.js', '.css': '.css'},
    bundle: true,
    watch: !isProd,
    plugins: [
      manifestPlugin({
        // NOTE: Save to src/_data. This is always relative to `outdir`.
        filename: '../../../src/_data/manifest.json',
        shortNames: true,
        extensionless: 'input',
        // Generate manifest.json - https://github.com/pellebjerkestrand/pokesite/blob/main/source/build/build-client.js
        generate: (entries) =>
          Object.fromEntries(
            Object.entries(entries).map(([from, to]) => [
              from,
              `${path.basename(to)}`,
            ])
          ),
        }),
        purgecssPlugin2({
          content: glob.sync([
            "./*.html",
            "./views/**/*.html",
            "./src/scripts/*.js",
            "./src/scripts/**/*.js",
          ])
        })
    ],
    minify: isProd,
    outdir: './dist/assets',
    sourcemap: !isProd,
    target: isProd ? 'es6' : 'esnext',
    metafile: true,
  }).catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  fs.writeFileSync('./src/_data/builddata.json', JSON.stringify(result.metafile));
}
