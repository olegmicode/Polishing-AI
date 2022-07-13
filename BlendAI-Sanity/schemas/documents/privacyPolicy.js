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
      name: "bodyContent",
      title: "Content",
      type: "privacyPageContent",
    }
  ]
};
