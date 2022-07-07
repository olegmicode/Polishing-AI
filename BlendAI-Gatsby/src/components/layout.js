import React, { useEffect } from "react"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => {

  useEffect(() => {
    // await loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', { inBody: true });
    // window.onload = () => {
    //   addScript("https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js")

    // }
  }, [])

  // const addScript = url => {
  //   const script = document.createElement("script")
  //   script.src = url
  //   script.async = true
  //   document.body.appendChild(script)
  // }

  return (
    <div>
      <Helmet>
        <script src={withPrefix("jquery-1.10.2.min.js")} type="text/javascript" />
        <script src={withPrefix("tilda-scripts-3.0.min.js")} type="text/javascript" />
        <script src={withPrefix("tilda-blocks-2.7.js")} type="text/javascript" />
        <script src={withPrefix("lazyload-1.3.min.js")} type="text/javascript" />
        <script src={withPrefix("tilda-animation-1.0.min.js")} type="text/javascript" />
        <script src={withPrefix("tilda-cover-1.0.min.js")} type="text/javascript" />
        <script src={withPrefix("tilda-events-1.0.min.js")} type="text/javascript" />
        <script src={withPrefix("tilda-forms-1.0.min.js")} type="text/javascript" />
        <script src={withPrefix("tilda-menusub-1.0.min.js")} type="text/javascript" />
        <script src={withPrefix("tilda-slds-1.4.min.js")} type="text/javascript" />
        <script src={withPrefix("hammer.min.js")} type="text/javascript" />
        <script src={withPrefix("tilda-zoom-2.0.min.js")} type="text/javascript" />
        <script src={withPrefix("tilda-animation-sbs-1.0.min.js")} type="text/javascript" />
        <script src={withPrefix("tilda-stat-1.0.min.js")} type="text/javascript" />
        <script src={withPrefix("https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js")} type="text/javascript" />
        <script src={withPrefix("https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js")} type="text/javascript" />
        {/* <script src={withPrefix("slider.js")} type="text/javascript" /> */}
          
      </Helmet>

      <div
        id="allrecords"
        data-tilda-export="yes"
        className="t-records"
        data-hook="blocks-collection-content-node"
        data-tilda-project-id="2918486"
        data-tilda-page-id="13588868"
        data-tilda-formskey="1c52105f6442dd6f3f3f9c8fb72f48d7"
        data-tilda-lazy="yes"
        data-tilda-project-headcode="yes"
      >
        <Header />
        {children}
        <Footer />

      </div>
    </div>

  )
}

export default Layout
