// Look into: Inline Minified CSS Tips (see 11ty docs)

import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default async function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("global.css");
    eleventyConfig.addPassthroughCopy("navbar.css");
    eleventyConfig.addPassthroughCopy("footer.css");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
        },
    }
}