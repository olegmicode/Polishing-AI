export default {
    name: "productFeed",
    title: "Product Feed",
    type: "object",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "bannerTitle",
            title: "Banner Title",
            type: "string",
        },
        {
            name: "bannerText",
            title: "Banner text",
            type: "blockContent",
        },
        {
            name: 'productImages',
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
        {
            name: 'adImages',
            type: 'array',
            title: 'Ad Images',
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
        }

    ],   
}