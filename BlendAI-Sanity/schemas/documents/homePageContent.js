
export default {
    name: "homePageContent",
    type: "document",
    title: "Home Page Content",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: 'sections',
            type: 'array',
            title: 'Sections',
            of: [
                { type: 'header' },
                { type: 'intro' },
                { type: 'about' },
                { type: 'services' },
                { type: 'productFeed' },
                { type: 'createAds' },
                { type: 'mngAudiences' },
                { type: 'multipleAdchannels' },
                { type: 'measureResults' },
                { type: 'prospectRetarget' },
                { type: 'ourPartners' },
                { type: 'pricing' },
                { type: 'recentViews' },
                { type: 'footer' },

                // etc...
            ]
        }
    ]
}