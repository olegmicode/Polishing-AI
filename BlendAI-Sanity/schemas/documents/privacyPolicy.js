export default {
    name: "privacyPolicy",
    title: "Privacy Policy",
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
  