export default {
    name: "privacyPolicy",
    title: "Privacy Policy",
    type: "document",
    fields: [
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
  