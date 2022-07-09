// recentViews.js

export default {
    name: "seoItem",
    type: "object",
    title: "SEO Item",
    fields: [
        {
            name: "selectPropertyName",
            title: "Select Property or Name",
            type: "string",
            initialValue: "name",
            options: {
                list: [
                    { title: "name", value: "name" },
                    { title: "property", value: "property" },
                ],
            }
        },
        {
            name: "seoPropertyName",
            title: "SEO Property or Name Setting",
            type: "string",
        },
        {
            name: "seoContent",
            title: "SEO Content",
            type: "string",
        }
    ]
}