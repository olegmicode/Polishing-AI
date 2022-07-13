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
            name: 'vector3BlueImage',
            type: 'image',
            title: 'Vector3Blue Image',
            options: {
                hotspot: true,
            },

        },
        {
            name: 'vector3Image',
            type: 'image',
            title: 'Vector3 Image',
            options: {
                hotspot: true,
            },

        },
        {
            name: 'line6Image',
            type: 'image',
            title: 'Line6 Image',
            options: {
                hotspot: true,
            },

        },
        {
            name: 'line7Image',
            type: 'image',
            title: 'Line7 Image',
            options: {
                hotspot: true,
            },

        },
        {
            name: 'line8Image',
            type: 'image',
            title: 'Line8 Image',
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