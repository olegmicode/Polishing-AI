import React from "react"
import { graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"

const Terms = ({ data }) => {
    const logoBlackImage = getImage(data.allSanityTermsPageContent.nodes[0].logoBlackImage.asset)
    const blockText = data.allSanityTermsPageContent.nodes[0].subText
    const seoDatas = data?.allSanityTermsPageOptions.nodes[0];

    return (
        <div className="terms">
            <Seo seoData={seoDatas.seo} seoImageData={seoDatas.seoImage}></Seo>

            <div id="allrecords" data-tilda-export="yes" class="t-records" data-hook="blocks-collection-content-node" data-tilda-project-id="2918486" data-tilda-page-id="13886707" data-tilda-page-alias="privacy_policy" data-tilda-formskey="1c52105f6442dd6f3f3f9c8fb72f48d7" data-tilda-lazy="yes" data-tilda-project-headcode="yes">
                <div id="rec229885448" class="r t-rec" style={{ backgroundColor: "#dff6f4" }} data-animationappear="off" data-record-type="257" data-bg-color="#dff6f4">
                    <div id="nav229885448marker"></div>
                    <div id="nav229885448" class="t228 " style={{ backgroundColor: "rgba(34,46,99,1)", height: "64px" }} data-bgcolor-hex="#222e63" data-bgcolor-rgba="rgba(34,46,99,1)" data-navmarker="nav229885448marker" data-appearoffset="" data-bgopacity-two="" data-menushadow="" data-bgopacity="1" data-menu-items-align="center" data-menu="yes">
                        <div class="t228__maincontainer " style={{ height: "64px" }}>
                            <div class="t228__padding40px"></div>
                            <div class="t228__leftside">
                                <div class="t228__leftcontainer"> <a href="/" >
                                    <GatsbyImage image={logoBlackImage}  imgfield="img" style={{ maxWidth: "150px", width: "150px", minWidth: "150px", height: "auto", display: "block" }} alt="BlendAi" />
                                </a>
                                </div>
                            </div>
                            <div class="t228__centerside "> </div>
                            <div class="t228__rightside"> </div>
                            <div class="t228__padding40px"></div>
                        </div>
                    </div>
                    <div id="rec270035962" class="r t-rec t-rec_pt_135 t-rec_pt-res-480_60 t-rec_pb_15" style={{ paddingTop: "135px", paddingBottom: "15px", backgroundColor: "#ffffff" }} data-record-type="33" data-bg-color="#ffffff">
                        <div class="t017">
                            <div class="t-container t-align_left">
                                <div class="t-col t-col_10 t-prefix_2">
                                    <div style={{ color: "#222e63" }}>
                                        <BlockContent
                                            blocks={blockText}
                                        />
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Terms

export const query = graphql`
query Terms {
    allSanityTermsPageContent {
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
        }
      }
      allSanityTermsPageOptions {
        nodes {
          seo {
            focus_keyword
            focus_synonyms
            meta_description
            seo_title
          }
          seoImage {
            asset {
              gatsbyImageData
            }
          }
        }
      }
}
`
