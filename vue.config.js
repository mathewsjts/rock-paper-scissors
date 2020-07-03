module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/rock-paper-scissors/'
    : '/',

  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/functions.scss";`
      }
    }
  }
};
