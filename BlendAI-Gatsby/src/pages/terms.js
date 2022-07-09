import React from "react"
import { graphql } from "gatsby"
import SanityBlockContent from "@sanity/block-content-to-react";
import { LogoBlack } from "../utils/imgImport"

const Terms = ({ data }) => {

    const mainTitle = data?.allSanityTermsAndConditions.nodes[0].mainTitle;
    const _rawSubText = data?.allSanityTermsAndConditions.nodes[0]._rawSubText;
    const terms = data?.allSanityTermsAndConditions.nodes[0].sections;

    return (
        <div className="terms">
            <div id="allrecords" data-tilda-export="yes" class="t-records" data-hook="blocks-collection-content-node" data-tilda-project-id="2918486" data-tilda-page-id="13886707" data-tilda-page-alias="privacy_policy" data-tilda-formskey="1c52105f6442dd6f3f3f9c8fb72f48d7" data-tilda-lazy="yes" data-tilda-project-headcode="yes">
                <div id="rec229885448" class="r t-rec" style={{ backgroundColor: "#dff6f4" }} data-animationappear="off" data-record-type="257" data-bg-color="#dff6f4">
                    <div id="nav229885448marker"></div>
                    <div id="nav229885448" class="t228 " style={{ backgroundColor: "rgba(34,46,99,1)", height: "64px" }} data-bgcolor-hex="#222e63" data-bgcolor-rgba="rgba(34,46,99,1)" data-navmarker="nav229885448marker" data-appearoffset="" data-bgopacity-two="" data-menushadow="" data-bgopacity="1" data-menu-items-align="center" data-menu="yes">
                        <div class="t228__maincontainer " style={{ height: "64px" }}>
                            <div class="t228__padding40px"></div>
                            <div class="t228__leftside">
                                <div class="t228__leftcontainer"> <a href="/" >
                                    <img src={LogoBlack} class="t228__imglogo t228__imglogomobile" imgfield="img" style={{ maxWidth: "150px", width: "150px", minWidth: "150px", height: "auto", display: "block" }} alt="BlendAi" /></a> </div>
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
                                    <div class="t017__title t-title t-title_xxs" field="title" style={{ color: "#222e63" }}>{mainTitle} <br /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="rec270035963" class="r t-rec t-rec_pt_15 t-rec_pb_0" style={{ paddingTop: "15px", paddingBottom: "0px", backgroundColor: "#ffffff" }} data-record-type="106" data-bg-color="#ffffff">
                        <div class="t004">
                            <div class="t-container ">
                                <div class="t-col t-col_8 t-prefix_2">
                                    <div field="text" class="t-text t-text_md " style={{ color: "#222e63", fontSize: "18px", fontWeight: 400, fontFamily: 'NunitoSans' }}>
                                        <SanityBlockContent
                                            blocks={_rawSubText}
                                        />
                                        <br /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        terms.map((item, idx) => (
                            <div>
                                <div id="rec270035980" class="r t-rec t-rec_pt_60 t-rec_pt-res-480_30 t-rec_pb_0" style={{ paddingTop: "40px", paddingBottom: "0px", backgroundColor: "#ffffff" }} data-record-type="128" data-bg-color="#ffffff">
                                    <div class="t120">
                                        <div class="t-container t-align_left">
                                            <div class="t-col t-col_8 t-prefix_2">
                                                <div class="t120__title t-heading t-heading_sm" field="title" style={{ color: "#222e63", fontSize: "20px", textTransform: "uppercase" }}>{item.title}<br /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="rec270035981" class="r t-rec t-rec_pt_0 t-rec_pb_60" style={{ paddingTop: "0px", paddingBottom: "40px", backgroundColor: "#ffffff" }} data-record-type="106" data-bg-color="#ffffff">
                                    <div class="t004">
                                        <div class="t-container ">
                                            <div class="t-col t-col_8 t-prefix_2">
                                                <div field="text" class="t-text t-text_md " style={{ color: "#222e63", fontSize: "18px", fontWeight: 500, fontFamily: 'NunitoSans' }}>
                                                    <SanityBlockContent
                                                        blocks={item._rawBlockText}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
export default Terms

export const query = graphql`
query Terms {
    allSanityTermsAndConditions {
      nodes {
        mainTitle
        sections {
          _type
          blockText {
            _type
            children {
              text
              _type
            }
          }
          title
          _rawBlockText
        }
        subText {
          _type
          children {
            text
            _type
          }
        }
        _rawSubText
      }
    }
  }  
  
`