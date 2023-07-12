// createAds.js

export default {
    name: "createAds",
    type: "object",
    title: "Create Ads",
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
            name: 'bgImage',
            type: 'image',
            title: 'Background Image',
            options: {
                hotspot: true,
            },

        },
        {
            name: 'handImage',
            type: 'image',
            title: 'Hand Image',
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
            name: 'productImage',
            type: 'image',
            title: 'product Image',
            options: {
                hotspot: true,
            },

        },
    ]
}