import React from "react"
import { graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react";
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"


const Privacy = ({ data }) => {

  // const logoBlackImage = getImage(data.allSanityPrivacyPageContent.nodes[0].logoBlackImage.asset)
  const logoBlackURL = data.allSanityPrivacyPageContent.nodes[0].logoBlackImage.asset.gatsbyImageData.images.fallback.src;

  const blockText = data.allSanityPrivacyPageContent.nodes[0]._rawSubText
  const seoDatas = data?.allSanityPrivacyPageOptions.nodes[0];
  const serializers = {
    marks: {
      link: ({ mark, children }) => {
        // Read https://css-tricks.com/use-target_blank/
        const { blank, href } = mark
        return blank ?
          <a href={href} target="_blank" rel="noreferrer">{children}</a>
          : <a href={href}>{children}</a>
      }
    }
  }
  return (
    <div className="privacy">
      <Seo seoData={seoDatas.seo} seoImageData={seoDatas.seoImage}></Seo>

      <div id="allrecords" data-tilda-export="yes" className="t-records" data-hook="blocks-collection-content-node" data-tilda-project-id="2918486" data-tilda-page-id="13886707" data-tilda-page-alias="privacy_policy" data-tilda-formskey="1c52105f6442dd6f3f3f9c8fb72f48d7" data-tilda-lazy="yes" data-tilda-project-headcode="yes">
        <div id="rec229885448" className="r t-rec" style={{ backgroundColor: "#dff6f4" }} data-animationappear="off" data-record-type="257" data-bg-color="#dff6f4">
          <div id="nav229885448marker"></div>
          <div id="nav229885448" className="t228 " style={{ backgroundColor: "rgba(34,46,99,1)", height: "64px" }} data-bgcolor-hex="#222e63" data-bgcolor-rgba="rgba(34,46,99,1)" data-navmarker="nav229885448marker" data-appearoffset="" data-bgopacity-two="" data-menushadow="" data-bgopacity="1" data-menu-items-align="center" data-menu="yes">
            <div className="t228__maincontainer " style={{ height: "64px" }}>
              <div className="t228__padding40px"></div>
              <div className="t228__leftside">
                <div className="t228__leftcontainer">
                  <a href="/" >
                    {/* <GatsbyImage image={logoBlackImage} style={{ maxWidth: "150px", width: "150px", minWidth: "150px", height: "auto", display: "block" }} alt="polishAi" /> */}
                    <img
                      src={logoBlackURL}
                      style={{ maxWidth: "150px", width: "150px", minWidth: "150px", height: "auto", display: "block" }} alt="polishAi"
                    />
                  </a>
                </div>


              </div>
              <div className="t228__centerside "> </div>
              <div className="t228__rightside"> </div>
              <div className="t228__padding40px"></div>
            </div>
          </div>

        </div>
        <div id="rec229848867" className="r t-rec t-rec_pt_135 t-rec_pt-res-480_60 t-rec_pb_15" style={{ paddingTop: "135px", paddingBottom: "15px", backgroundColor: "#ffffff" }} data-record-type="33" data-bg-color="#ffffff">
          <div className="t017">
            <div className="t-container t-align_left">
              <div className="t-col t-col_10 t-prefix_2">
                <div field="title" style={{ color: "#222e63" }}>
                  <PortableText
                    blocks={blockText}
                    serializers={serializers}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Privacy

export const query = graphql`
query Privacy {
  allSanityPrivacyPageContent {
    nodes {
      subText {
        _type
        children {
          text
          _type
        }
        style
      }
      logoBlackImage {
        asset {
          gatsbyImageData
        }
      }
      _rawSubText(resolveReferences: {maxDepth: 10})
    }
  }
  allSanityPrivacyPageOptions {
    nodes {
      seoImage {
        asset {
          gatsbyImageData
        }
      }
      seo {
        seo_title
        meta_description
        focus_synonyms
        focus_keyword
      }
    }
  }
}

  
`