import * as React from "react"
import { Helmet } from "react-helmet"

function Seo({ seoData, seoImageData }) {
  return (

    <Helmet>
      <title>BlendAI</title>
      <meta name="description" content={seoData.meta_description} />
      <meta name="keywords" content={seoData.focus_synonyms.toString()} />
      <meta property="og:title" content={seoData.seo_title} />
      <meta property="og:description" content={seoData.meta_description} />
      <meta property="og:image" content={seoImageData.asset.gatsbyImageData.images.fallback.src} />
    </Helmet>
  )
}


export default Seo