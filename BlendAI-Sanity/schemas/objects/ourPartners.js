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