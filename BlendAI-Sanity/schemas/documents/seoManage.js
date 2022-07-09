export default {
    name: "seoManage",
    title: "SEO Management",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: 'seoItems',
        type: 'array',
        title: 'SEO Items',
        of: [
          { type: 'seoItem' },
        ]
      }
    ]
  };
  