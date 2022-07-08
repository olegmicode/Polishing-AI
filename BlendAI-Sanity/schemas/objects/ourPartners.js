export default {
    name: "ourPartners",
    title: "Our Partners",
    type: "object",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "bannerTitle",
            title: "Banner Title",
            type: "string",
        },
        {
            name: "bannerSubText",
            title: "Banner text",
            type: "string",
        },
        {
            name: 'partnerImages',
            type: 'array',
            title: 'Partners Images',
            of: [
                {
                    
                    type: 'mainImage',
                    
                    
                },
            ],

            options: {
                layout: 'grid',
            },
        }

    ],
   
}