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

                    type: 'mainImage',
                    title: 'Image',

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