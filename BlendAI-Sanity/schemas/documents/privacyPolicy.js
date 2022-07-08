export default {
  name: "privacyPolicy",
  title: "Privacy Policy",
  type: "document",
  fields: [
    {
      name: "mainTitle",
      title: "MainTitle",
      type: "string",
    },
    {
      name: "subText",
      title: "Sub Text",
      type: "blockContent",
    },
    {
      name: 'sections',
      type: 'array',
      title: 'Sections',
      of: [
        { type: 'textWithTitle' },
      ]
    }
  ]
};
