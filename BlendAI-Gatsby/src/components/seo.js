import * as React from "react"
import { Helmet } from "react-helmet"

function Seo({ data }) {

  return (

    <Helmet>
      <title>BlendAI</title>
      {data.map((item, index) => (
        item.selectPropertyName === "name" ?
          <meta name={item.seoPropertyName} content={item.seoContent} /> : <meta property={item.seoPropertyName} content={item.seoContent} />
      ))}
    </Helmet>
  )
}


export default Seo