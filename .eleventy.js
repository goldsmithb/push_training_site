export default async function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");
    
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
        },
    }
}