// mngAudiences.js

export default {
    name: "mngAudiences",
    type: "object",
    title: "Manage audiences",
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
            name: "bottomText",
            title: "Bottom Text",
            type: "string",
        },
        {
            name: 'cardImage',
            type: 'image',
            title: 'Card Image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'character1minImage',
            type: 'image',
            title: 'Character Man Image',
            options: {
                hotspot: true,
            },

        },
        {
            name: 'signupEnableImage',
            type: 'image',
            title: 'Signup Enable Image',
            options: {
                hotspot: true,
            },

        },
        {
            name: 'signupHoverImage',
            type: 'image',
            title: 'Signup Hover Image',
            options: {
                hotspot: true,
            },

        },
        {
            name: 'vector4Image',
            type: 'image',
            title: 'Vector4 Image',
            options: {
                hotspot: true,
            },

        },
        
    ]
}