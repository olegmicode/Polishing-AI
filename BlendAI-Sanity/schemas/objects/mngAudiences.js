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
            name: "bannerText",
            title: "Banner text",
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