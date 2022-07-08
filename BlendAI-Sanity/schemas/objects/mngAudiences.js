// mngAudiences.js

export default {
    name: "mngAudiences",
    type: "object",
    title: "Manage audiences",
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
            name: "bottomText",
            title: "Bottom Text",
            type: "string",
        },
        {
            name: 'cardImage',
            type: 'image',
            title: 'Card Image',
            options: {
                hotspot: true,
            },
        },
        
    ]
}