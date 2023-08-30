export default (S) =>
  S.list()
    .title('Pages')
    .items([
      S.listItem()
        .title('Home Page')
        .child(
          S.list()
            .title('Home Page Settings')
            .items([
              S.listItem()
                .title('Home Page Content')
                .child(S.document().schemaType('homePageContent').documentId('homePageContent')),
              S.listItem()
                .title('Page Options')
                .child(S.document().schemaType('homePageOptions').documentId('homePageOptions')),
            ]),
        ),
      S.listItem()
        .title('Privacy Policy Page')
        .child(
          S.list()
            .title('Privacy and Policy Page Settings')
            .items([
              S.listItem()
                .title('Privacy and Policy Page Content')
                .child(
                  S.document().schemaType('privacyPageContent').documentId('privacyPageContent'),
                ),
              S.listItem()
                .title('Page Options')
                .child(
                  S.document().schemaType('privacyPageOptions').documentId('privacyPageOptions'),
                ),
            ]),
        ),
      S.listItem()
        .title('Terms and Conditions Page')
        .child(
          S.list()
            .title('Terms and Conditions Page Settings')
            .items([
              S.listItem()
                .title('Terms and Conditions Page Content')
                .child(S.document().schemaType('termsPageContent').documentId('termsPageContent')),
              S.listItem()
                .title('Page Options')
                .child(S.document().schemaType('termsPageOptions').documentId('termsPageOptions')),
            ]),
        ),
    ])
