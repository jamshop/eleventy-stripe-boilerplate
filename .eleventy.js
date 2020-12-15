const dumpFilter = require("@jamshop/eleventy-filter-dump");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({ "src/assets": "/" });
  eleventyConfig.addFilter("dump", dumpFilter);

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
