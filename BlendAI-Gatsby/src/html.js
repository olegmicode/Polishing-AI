import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* <script src="../../js/jquery-1.10.2.min.js" crossOrigin="anonymous"/> */}
        {/* <script src="./static/hammer.min.js" crossOrigin="anonymous"/>
        <script src="./static/lazyload-1.3.min.js" crossOrigin="anonymous"/>
        <script src="./static/tilda-animation-1.0.min.js" crossOrigin="anonymous"/>
        <script src="./static/tilda-animation-sbs-1.0.min.js" crossOrigin="anonymous"/>
        <script src="./static/tilda-blocks-2.7.js" crossOrigin="anonymous"/>
        <script src="./static/tilda-cover-1.0.min.js" crossOrigin="anonymous"/>
        <script src="./static/tilda-events-1.0.min.js" crossOrigin="anonymous"/>
        <script src="./static/tilda-forms-1.0.min.js" crossOrigin="anonymous"/>
        <script src="./static/tilda-map-1.0.min.js" crossOrigin="anonymous"/>
        <script src="./static/tilda-menusub-1.0.min.js" crossOrigin="anonymous"/>
        <script src="./static/tilda-scripts-3.0.min.js" crossOrigin="anonymous"/>
        <script src="./static/tilda-slds-1.4.min.js" crossOrigin="anonymous"/>
        <script src="./static/tilda-stat-1.0.min.js" crossOrigin="anonymous"/>
        <script src="./static/tilda-zoom-2.0.min.js" crossOrigin="anonymous"/> */}
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
