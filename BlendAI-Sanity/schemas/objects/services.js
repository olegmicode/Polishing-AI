export default {
    name: "services",
    title: "Services",
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
            name: "bannerSubText",
            title: "Sub text",
            type: "string",
        },
        {
            name: 'platformImages',
            type: 'array',
            title: 'Platform Images',
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