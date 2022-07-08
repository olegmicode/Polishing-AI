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
            name: 'productImages',
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
            name: 'adImages',
            type: 'array',
            title: 'Ad Images',
            of: [
                {

                    type: 'mainImage',

                },
            ],

            options: {
                layout: 'grid',
            },
        }

    ],
}