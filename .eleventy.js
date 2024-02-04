module.exports = function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    module: '@11ty/eleventy-server-browsersync',
    enabled: true,
    files: ['dist/*'],
    injectChanges: true,
    reloadThrottle: 3000,
    watch: true,
    server: {
      baseDir: 'dist',
    },
  })

  // eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' })
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
