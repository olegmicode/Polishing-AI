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
                 
                    type: 'mainImage',
                 
                },
            ],

            options: {
                layout: 'grid',
            },
        }
        
    ]
}