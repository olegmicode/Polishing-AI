
export default {
    name: "privacyPageContent",
    type: "document",
    title: "Privacy Page Content",
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