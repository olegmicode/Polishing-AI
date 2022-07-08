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
            name: "text",
            title: "Banner Text",
            type: "string",
        },
        {
            name: "blockText",
            title: "Banner Text",
            type: "blockContent",
        },
        {
            name: 'chartImage',
            type: 'image',
            title: 'Chart Image',
            options: {
                hotspot: true,
            },

        },
        {
            name: "bottomText",
            title: "Bottom Text",
            type: "string",
        },

    ]
}