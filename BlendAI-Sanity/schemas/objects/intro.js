export default {
    name: "intro",
    title: "Intro",
    type: "object",
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
            name: "bannerSubText",
            title: "Banner Sub Text",
            type: "string",
        },
        {
            name: "mainProductImage",
            title: "Main Product image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: 'ProductImages',
            type: 'array',
            title: 'Product Images',
            of: [
                {
                    name: 'image',
                    type: 'image',
                    title: 'Image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative text',
                        },
                    ],
                },
            ],

            options: {
                layout: 'grid',
            },
        },


    ]
}