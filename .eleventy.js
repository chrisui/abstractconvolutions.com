const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPlugin(eleventyPluginFilesMinifier);
  
  return {
    dir: {
      input : 'src',
      output: 'dist'
    },
    passthroughFileCopy: true
  };
};