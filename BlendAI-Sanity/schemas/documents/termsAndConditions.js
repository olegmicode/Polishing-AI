export default {
    name: "termsAndConditions",
    title: "Terms and Conditions",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "bannerText",
        title: "Banner text",
        type: "blockContent",
      },
    ],
    preview: {
      select: {
        title: "title",
      },
    },
  };
  