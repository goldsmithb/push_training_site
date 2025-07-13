// Look into: Inline Minified CSS Tips (see 11ty docs)

import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default async function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("global.css");
    eleventyConfig.addPassthroughCopy("robots.txt");
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addWatchTarget("src/css")
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);
    return {
        // Specify nunjuckjs as our templating engine - allows us to use html files
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
        },
    }
}