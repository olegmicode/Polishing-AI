
export default {
    name: "privacyPageOptions",
    type: "document",
    title: "Privacy Page Options",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo-tools', // use seo-tools type
            options: {
                baseUrl: 'http://blend-ai.com', // (REQUIRED) This is the baseUrl for your site
                fetchRemote: false, // Can be set to false to disable fetching the remote source (you will need to pass the content helpers for analysis)
                // title(doc) {
                //   return 'page title'; // (OPTIONAL) return page title otherwise inferred from scrape
                // },
                // description(doc) {
                //   return 'page description'; // (OPTIONAL) return page description otherwise inferred from scrape
                // },
                "focus_keyword_required": false, // makes the focus_keyword field required
                // "focus_synonyms_required": false, // makes the focus_synonyms field required
                "seo_title_required": false, // makes the seo_title field required
                "meta_description_required": false // makes the meta_description field required
                // locale(doc) {
                //   return 'page locale'; // (OPTIONAL) return page locale otherwise inferred from scrape
                // },
                // contentSelector: 'body' // (OPTIONAL) option to finetune where Yoast will look for the content. (only applicable for scraping without content function)
            }
        },
        {
            name: "seoImage",
            title: "SEO Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },

    ]
}