// recentViews.js

export default {
    name: "seoItem",
    type: "object",
    title: "SEO Item",
    fields: [
        {
            name: "title",
            title: "SEO Title",
            type: "string",
        },
        {
            name: "description",
            title: "SEO Description",
            type: "string",
        },
        {
            name: "keywords",
            title: "SEO Keywords",
            type: "string",
        },
        {
            name: "seoImage",
            title: "SEO Image",
            type: "image",
        }
    ]
}