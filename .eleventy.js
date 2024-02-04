module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/css/')
  eleventyConfig.addWatchTarget('./src/js/')

  eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' })
  // eleventyConfig.addPassthroughCopy({ 'src/media': 'dist/media' })
  // eleventyConfig.addPassthroughCopy({ 'src/favicon': 'dist/favicon' })
  eleventyConfig.addPassthroughCopy({
    'src/_includes/partials/sprite.svg': '/sprite.svg',
  })

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    templateFormats: ['html', 'md', 'njk'],
    passthroughFileCopy: true,
  }
}
