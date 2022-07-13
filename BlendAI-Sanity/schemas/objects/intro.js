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
            name: "blockText",
            title: "Banner Text",
            type: "blockContent",
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
                    type: 'mainImage',

                },
            ],

            options: {
                layout: 'grid',
            },
        },
        {
            name: 'frametImages',
            type: 'array',
            title: 'Frame Images',
            of: [
                {
                    type: 'mainImage',

                },
            ],

            options: {
                layout: 'grid',
            },
        },
    ]
}