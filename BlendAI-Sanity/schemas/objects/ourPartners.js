export default {
    name: "ourPartners",
    title: "Our Partners",
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
            name: "bannerSubText",
            title: "Banner text",
            type: "string",
        },
        {
            name: 'partnerImages',
            type: 'array',
            title: 'Partners Images',
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
            images: 'images',
            image: 'images.0',
        },
        prepare(selection) {
            const { images, image } = selection;

            return {
                title: `Gallery block of ${Object.keys(images).length} images`,
                subtitle: `Alt text: ${image.alt}`,
                media: image,
            };
        },
    },
}