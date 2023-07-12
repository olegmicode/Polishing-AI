// recentViews.js

export default {
    name: "recentViews",
    type: "object",
    title: "Most Recent Views",
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
            name: 'recentViewsData',
            type: 'array',
            title: 'Recent Views Data',
            of: [
                {
                    type: 'recentView',
                },
            ],

        }

    ]
}