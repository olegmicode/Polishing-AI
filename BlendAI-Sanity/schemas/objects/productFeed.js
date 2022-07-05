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
            name: "bannerText",
            title: "Banner text",
            type: "string",
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
    preview: {
        select: {
            images: 'productImages',
            image: 'productImages.0',
        },
        prepare(selection) {
            const { productImages, productImage } = selection;

            return {
                title: `Gallery block of ${Object.keys(productImages).length} images`,
                subtitle: `Alt text: ${productImage.alt}`,
                media: productImage,
            };
        },
    },
}