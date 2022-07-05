// multipleAdChannels.js

export default {
    name: "multipleAdchannels",
    type: "object",
    title: "Multiple ad channels",
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
            name: 'overImage',
            type: 'image',
            title: 'Over Image',
            options: {
                hotspot: true,
            },

        },
        {
            name: 'adCardImages',
            type: 'array',
            title: 'Ad Card Images',
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
        
    ]
}