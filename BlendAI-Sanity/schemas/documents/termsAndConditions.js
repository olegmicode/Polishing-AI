export default {
    name: "termsAndConditions",
    title: "Terms and Conditions",
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
  