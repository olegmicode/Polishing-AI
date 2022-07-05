// about.js

export default {
    name: "about",
    type: "object",
    title: "About",
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
            name: 'overviewImage',
            type: 'image',
            title: 'Overview Image',
            options: {
                hotspot: true,
            },

        },
        {
            name: 'deviceImage',
            type: 'image',
            title: 'Device Image',
            options: {
                hotspot: true,
            },

        },
        {
            name: 'statusImage',
            type: 'image',
            title: 'Status Image',
            options: {
                hotspot: true,
            },

        },
    ]
}