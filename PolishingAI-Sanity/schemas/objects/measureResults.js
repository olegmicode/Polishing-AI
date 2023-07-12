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
            name: 'characterWimage',
            type: 'image',
            title: 'Character Woman Image',
            options: {
                hotspot: true,
            },

        },
        {
            name: 'signupEnableImage',
            type: 'image',
            title: 'Signup Enable Image',
            options: {
                hotspot: true,
            },

        },
        {
            name: 'signupHoverImage',
            type: 'image',
            title: 'Signup Hover Image',
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