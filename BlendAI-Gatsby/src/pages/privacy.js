import React from "react"
import { graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react";
import { LogoBlack } from "../utils/imgImport"

const Privacy = ({ data }) => {
    const mainTitle = data?.allSanityPrivacyPolicy.nodes[0].mainTitle;
    const subText = data?.allSanityPrivacyPolicy.nodes[0].subText;
    const privacy = data?.allSanityPrivacyPolicy.nodes[0].sections;
    return (
        <>
            <div id="allrecords" data-tilda-export="yes" className="t-records" data-hook="blocks-collection-content-node" data-tilda-project-id="2918486" data-tilda-page-id="13886707" data-tilda-page-alias="privacy_policy" data-tilda-formskey="1c52105f6442dd6f3f3f9c8fb72f48d7" data-tilda-lazy="yes" data-tilda-project-headcode="yes">
                <div id="rec229885448" className="r t-rec" style={{ backgroundColor: "#dff6f4" }} data-animationappear="off" data-record-type="257" data-bg-color="#dff6f4">
                    <div id="nav229885448marker"></div>
                    <div id="nav229885448" className="t228 " style={{ backgroundColor: "rgba(34,46,99,1)", height: "64px" }} data-bgcolor-hex="#222e63" data-bgcolor-rgba="rgba(34,46,99,1)" data-navmarker="nav229885448marker" data-appearoffset="" data-bgopacity-two="" data-menushadow="" data-bgopacity="1" data-menu-items-align="center" data-menu="yes">
                        <div className="t228__maincontainer " style={{ height: "64px" }}>
                            <div className="t228__padding40px"></div>
                            <div className="t228__leftside">
                                <div className="t228__leftcontainer"> <a href="/" >
                                    <img src={LogoBlack} className="t228__imglogo t228__imglogomobile" imgfield="img" style={{ maxWidth: "150px", width: "150px", minWidth: "150px", height: "auto", display: "block" }} alt="BlendAi" /></a> </div>
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
                                <div className="t017__title t-title t-title_xxs" field="title" style={{ color: "#222e63" }}>{mainTitle}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="rec229848591" className="r t-rec t-rec_pt_15 t-rec_pb_0" style={{ paddingTop: "15px", paddingBottom: "0px", backgroundColor: "#ffffff" }} data-record-type="106" data-bg-color="#ffffff">
                    <div className="t004">
                        <div className="t-container ">
                            <div className="t-col t-col_8 t-prefix_2">
                                <div field="text" className="t-text t-text_md " style={{ color: "#222e63", fontSize: "18px", fontWeight: "400", fontFamily: 'NunitoSans' }}>
                                    <BlockContent
                                        blocks={subText}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {privacy.map((item, index) => (
                    <div key={index}>
                        <div id="rec270031368" className="r t-rec t-rec_pt_60 t-rec_pt-res-480_30 t-rec_pb_0" style={{ paddingTop: "40px", paddingBottom: "0px", backgroundColor: "#ffffff" }} data-record-type="128" data-bg-color="#ffffff">
                            <div className="t120">
                                <div className="t-container t-align_left">
                                    <div className="t-col t-col_8 t-prefix_2">
                                        <div className="t120__title t-heading t-heading_sm" field="title" style={{ color: "#222e63", fontSize: "20px", textTransform: "uppercase" }}>
                                            {item.title} <br /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="rec270031459" className="r t-rec t-rec_pt_0 t-rec_pb_90" style={{ paddingTop: "0px", paddingBottom: "40px", backgroundColor: "#ffffff" }} data-record-type="106" data-bg-color="#ffffff">
                            <div className="t004">
                                <div className="t-container ">
                                    <div className="t-col t-col_8 t-prefix_2">
                                        <div field="text" className="t-text t-text_md " style={{ color: "#222e63", fontSize: "18px", fontWeight: 500, fontFamily: 'NunitoSans' }}>
                                            <BlockContent
                                                blocks={item.text}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </>
    )
}
export default Privacy

export const query = graphql`
query Privacy {
    allSanityPrivacyPolicy {
        nodes {
          mainTitle
          subText {
            _type
            children {
              text
              _type
            }
          }
          sections {
            title
            text {
              _type
              children {
                marks
                text
                _type
                _key
              }
            }
          }
        }
      }
  }
  
` 