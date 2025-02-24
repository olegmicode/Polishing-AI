module.exports = {
  siteMetadata: {
    title: `Polish-AI-Blog`,
    siteUrl: `https://polishing-ai.netlify.app/`
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,        
        dataset: process.env.SANITY_DATASET,
        // token: process.env.SANITY_TOKEN,
        // watchMode: true,
        // overlayDrafts: true
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass", "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        // name: `gatsby-starter-default`,
        // short_name: `starter`,
        // start_url: `/`,
        // background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        // display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
   
  ]
};