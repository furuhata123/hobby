const isDev = process.env.ELEVENTY_RUN_MODE === "serve";

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "public/assets": "assets" });

      
    return {
        pathPrefix: isDev ? "/" : "/hobby/",
        dir: {
            input: "src",
            includes: "_includes",
            output: "docs",
        }

    };
};