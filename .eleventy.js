module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: "src",
      output: "dist",
    },
    templateFormats: ["html", "md", "njk"],
    passthroughFileCopy: true,
  };
};
