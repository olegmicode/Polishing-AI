
export default {
    name: "termsPageContent",
    type: "document",
    title: "Terms Page Content",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: 'logoBlackImage',
            type: 'image',
            title: 'Logo Black Image',
        },
        {
            name: "subText",
            title: "Sub Text",
            type: "blockContent",
        }
    ]
}