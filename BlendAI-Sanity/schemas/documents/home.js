
export default {
  name: "home",
  type: "document",
  title: "home",
  fields: [
    {
      name: 'sections',
      type: 'array',
      title: 'Sections',
      of: [
        { type: 'intro' },
        { type: 'about' },
        { type: 'services' },
        { type: 'productFeed' }, 
        { type: 'createAds' }, 
        { type: 'mngAudiences' }, 
        { type: 'multipleAdchannels' }, 
        { type: 'measureResults' }, 
        { type: 'prospectRetarget' }, 
        { type: 'ourPartners' }, 
        { type: 'pricing' }, 
        { type: 'recentViews' }, 
        // { type: 'testimonials' },  

        // etc...
      ]
    }
  ]
}