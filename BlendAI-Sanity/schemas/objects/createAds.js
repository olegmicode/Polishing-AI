// createAds.js

export default {
    name: "createAds",
    type: "object",
    title: "Create Ads",
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
            name: 'bgImage',
            type: 'image',
            title: 'Background Image',
            options: {
                hotspot: true,
            },

        },
        {
            name: 'productImage',
            type: 'image',
            title: 'product Image',
            options: {
                hotspot: true,
            },

        },
    ]
}