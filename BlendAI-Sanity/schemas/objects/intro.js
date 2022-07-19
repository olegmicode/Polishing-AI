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
            title: 'Product1 Images',
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
            name: 'Product2Images',
            type: 'array',
            title: 'Product2 Images',
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
            name: 'Product3Images',
            type: 'array',
            title: 'Product3 Images',
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
            name: 'Product4Images',
            type: 'array',
            title: 'Product4 Images',
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