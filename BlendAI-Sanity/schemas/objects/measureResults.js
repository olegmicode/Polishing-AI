// measureResults.js

export default {
    name: "measureResults",
    type: "object",
    title: "Measure results",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "bannerText",
            title: "Banner text",
            type: "string",
        },
        {
            name: 'chartImage',
            type: 'image',
            title: 'Chart Image',
            options: {
                hotspot: true,
            },

        },

    ]
}