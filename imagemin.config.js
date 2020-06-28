module.exports = {
  gifsicle: { optimizationLevel: 2, interlaced: false, colors: 10 },
  jpegtran: { progressive: true, arithmetic: false },
  pngquant: { quality: [0.25, 0.5] },
  svgo: {
    plugins: [{ removeViewBox: false }, { cleanupIDs: true }],
  },
  webp: { quality: 10 },
};
