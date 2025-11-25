export default function(eleventyConfig) {
  // Order matters, put this at the top of your configuration file.
  // This is relative to your input directory!
  eleventyConfig.setInputDirectory("_site");
  eleventyConfig.setOutputDirectory("_dist")

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("favicons");
  eleventyConfig.addPassthroughCopy("CNAME");
};

export const config = {
  htmlTemplateEngine: "njk",
};
