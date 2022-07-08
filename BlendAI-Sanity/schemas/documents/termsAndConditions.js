export default {
  name: "termsAndConditions",
  title: "Terms and Conditions",
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
