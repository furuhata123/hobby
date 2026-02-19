module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "public/assets": "assets" });

      
    return {
        pathPrefix:"/hobby/",
        dir: {
            input: "src",
            includes: "_includes",
            output: "docs",
        }

    };
};