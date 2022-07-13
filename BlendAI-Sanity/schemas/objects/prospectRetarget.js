// prospectRetarget.js

export default {
    name: "prospectRetarget",
    type: "object",
    title: "Prospect & Retarget",
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
            name: 'shoppingMin2Image',
            type: 'image',
            title: 'ShoppingMin2 Image',
            options: {
                hotspot: true,
            },

        },
    ]
}