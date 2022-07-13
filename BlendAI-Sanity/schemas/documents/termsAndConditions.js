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
      name: "bodyContent",
      title: "Content",
      type: "termsPageContent",
    }
  ]
};
