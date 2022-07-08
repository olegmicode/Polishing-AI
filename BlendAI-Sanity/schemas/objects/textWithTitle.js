// about.js

export default {
    name: "textWithTitle",
    type: "object",
    title: "Text with Title",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "text",
            title: "Text",
            type: "blockContent",
        },
        
    ]
}