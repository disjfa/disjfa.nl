module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("build");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.setUseGitIgnore(false);

  // eleventyConfig.addCollection("nav", function (collection) {
  //   return collection.getFilteredByTag("menu").sort((a, b) => a.data.order - b.data.order);
  // });

  return {
    pathPrefix: "/",
  };
};
