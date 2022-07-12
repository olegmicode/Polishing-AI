import React from "react"
import BlockContent from "@sanity/block-content-to-react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import "./measureresults.css"

import { CharacterW } from "../../utils/imgImport"
import { SignupEnable } from "../../utils/imgImport"
import { SignupHover } from "../../utils/imgImport"


const MeasureResults = ({ data }) => (
    <div id="measureresults" className="measureresults-container">
        <div
            id="rec225496984"
            className="r t-rec"
            data-animationappear="off"
            data-record-type="396"
            style={{ overflow: "hidden" }}
        >

            <div className="t396">
                <div
                    className="t396__artboard"
                    data-artboard-recid="225496984"
                    data-artboard-height="900"
                    data-artboard-height-res-640="1060"
                    data-artboard-height-res-320="870"
                    data-artboard-height_vh=""
                    data-artboard-valign="center"
                    data-artboard-upscale="grid"
                    data-artboard-ovrflw="visible"
                >
                    <div className="t396__carrier" data-artboard-recid="225496984"></div>
                    <div className="t396__filter" data-artboard-recid="225496984"></div>
                    <div
                        className="t396__elem tn-elem tn-elem__2254969841598889024363"
                        data-elem-id="1598889024363"
                        data-elem-type="text"
                        data-field-top-value="260"
                        data-field-top-res-640-value="136"
                        data-field-top-res-480-value="136"
                        data-field-top-res-320-value="136"
                        data-field-left-value="23"
                        data-field-left-res-640-value="92"
                        data-field-left-res-480-value="11"
                        data-field-left-res-320-value="11"
                        data-field-width-value="360"
                        data-field-width-res-320-value="260"
                        data-field-axisy-value="top"
                        data-field-axisx-value="left"
                        data-field-container-value="grid"
                        data-field-topunits-value="px"
                        data-field-leftunits-value="px"
                        data-field-heightunits-value=""
                        data-field-widthunits-value="px"
                    >
                        <h2 className="tn-atom" field="tn_text_1598889024363">
                            {data.text}
                        </h2>
                    </div>
                    <div
                        className="t396__elem tn-elem tn-elem__2254969841598889024372"
                        data-elem-id="1598889024372"
                        data-elem-type="text"
                        data-field-top-value="319"
                        data-field-top-res-960-value="319"
                        data-field-top-res-640-value="195"
                        data-field-top-res-480-value="195"
                        data-field-top-res-320-value="194"
                        data-field-left-value="22"
                        data-field-left-res-960-value="22"
                        data-field-left-res-640-value="91"
                        data-field-left-res-480-value="10"
                        data-field-left-res-320-value="10"
                        data-field-width-value="400"
                        data-field-width-res-960-value="350"
                        data-field-width-res-480-value="460"
                        data-field-width-res-320-value="300"
                        data-field-axisy-value="top"
                        data-field-axisx-value="left"
                        data-field-container-value="grid"
                        data-field-topunits-value="px"
                        data-field-leftunits-value="px"
                        data-field-heightunits-value=""
                        data-field-widthunits-value="px"
                    >
                        <div className="tn-atom" field="tn_text_1598889024372">
                            <BlockContent
                                blocks={data.blockText}
                            />
                            <br />
                        </div>
                    </div>
                    <div
                        className="t396__elem tn-elem tn-elem__2254969841598889024381"
                        data-elem-id="1598889024381"
                        data-elem-type="text"
                        data-field-top-value="205"
                        data-field-top-res-640-value="81"
                        data-field-top-res-480-value="81"
                        data-field-left-value="22"
                        data-field-left-res-640-value="91"
                        data-field-left-res-480-value="10"
                        data-field-width-value="80"
                        data-field-axisy-value="top"
                        data-field-axisx-value="left"
                        data-field-container-value="grid"
                        data-field-topunits-value="px"
                        data-field-leftunits-value="px"
                        data-field-heightunits-value=""
                        data-field-widthunits-value="px"
                    >
                        <div className="tn-atom" field="tn_text_1598889024381">Step 4.</div>
                    </div>
                    <div
                        className="t396__elem tn-elem tn-elem__2254969841598889670378"
                        data-elem-id="1598889670378"
                        data-elem-type="image"
                        data-field-top-value="130"
                        data-field-top-res-960-value="135"
                        data-field-top-res-640-value="433"
                        data-field-top-res-480-value="410"
                        data-field-top-res-320-value="417"
                        data-field-left-value="970"
                        data-field-left-res-960-value="680"
                        data-field-left-res-640-value="356"
                        data-field-left-res-480-value="360"
                        data-field-left-res-320-value="170"
                        data-field-width-value="595"
                        data-field-width-res-640-value="535"
                        data-field-width-res-320-value="325"
                        data-field-axisy-value="top"
                        data-field-axisx-value="left"
                        data-field-container-value="grid"
                        data-field-topunits-value="px"
                        data-field-leftunits-value="px"
                        data-field-heightunits-value=""
                        data-field-widthunits-value="px"
                        data-field-filewidth-value="596"
                        data-field-fileheight-value="518"
                    >
                        <div className="tn-atom">
                            <img
                                className="tn-atom__img t-img"
                                data-original={CharacterW}
                                src={CharacterW}
                                imgfield="tn_img_1598889670378"
                            />
                        </div>
                    </div>
                    <div
                        className="t396__elem tn-elem tn-elem__2254969841598889801732"
                        data-elem-id="1598889801732"
                        data-elem-type="image"
                        data-field-top-value="155"
                        data-field-top-res-960-value="160"
                        data-field-top-res-640-value="455"
                        data-field-top-res-480-value="432"
                        data-field-top-res-320-value="430"
                        data-field-left-value="450"
                        data-field-left-res-960-value="380"
                        data-field-left-res-640-value="0"
                        data-field-left-res-480-value="4"
                        data-field-left-res-320-value="-10"
                        data-field-width-value="595"
                        data-field-width-res-960-value="520"
                        data-field-width-res-640-value="480"
                        data-field-width-res-320-value="320"
                        data-field-axisy-value="top"
                        data-field-axisx-value="left"
                        data-field-container-value="grid"
                        data-field-topunits-value="px"
                        data-field-leftunits-value="px"
                        data-field-heightunits-value=""
                        data-field-widthunits-value="px"
                        data-animate-sbs-event="blockintoview"
                        data-animate-sbs-trg="0.5"
                        data-animate-sbs-trgofst="0"
                        data-animate-sbs-opts="[{'ti':'0','mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'','dt':'0'},{'ti':0,'mx':0,'my':190,'sx':'1','sy':'1','op':0,'ro':'0','bl':'0','ea':'','dt':'0'},{'ti':'1000','mx':0,'my':0,'sx':'1','sy':'1','op':1,'ro':'0','bl':'0','ea':'easeInOut','dt':'0'}]"
                        data-field-filewidth-value="1176"
                        data-field-fileheight-value="984"
                    >
                        <div className="tn-atom">
                          
                            <GatsbyImage className="tn-atom__img t-img" image={getImage(data.chartImage.asset)} alt="product image" />

                        </div>
                    </div>
                    <div
                        className="t396__elem tn-elem tn-elem__2254969841599148751104"
                        data-elem-id="1599148751104"
                        data-elem-type="image"
                        data-field-top-value="483"
                        data-field-top-res-640-value="359"
                        data-field-top-res-480-value="328"
                        data-field-left-value="22"
                        data-field-left-res-640-value="91"
                        data-field-left-res-480-value="10"
                        data-field-width-value="200"
                        data-field-axisy-value="top"
                        data-field-axisx-value="left"
                        data-field-container-value="grid"
                        data-field-topunits-value="px"
                        data-field-leftunits-value="px"
                        data-field-heightunits-value=""
                        data-field-widthunits-value="px"
                        data-field-filewidth-value="400"
                        data-field-fileheight-value="128"
                    >
                        <div className="tn-atom">
                            <img
                                className="tn-atom__img t-img"
                                data-original={SignupEnable}
                                src={SignupEnable}
                                imgfield="tn_img_1599148751104"
                            />
                        </div>
                    </div>
                    <div
                        className="t396__elem tn-elem tn-elem__2254969841599148751113"
                        data-elem-id="1599148751113"
                        data-elem-type="image"
                        data-field-top-value="483"
                        data-field-top-res-640-value="359"
                        data-field-top-res-480-value="328"
                        data-field-left-value="22"
                        data-field-left-res-640-value="91"
                        data-field-left-res-480-value="10"
                        data-field-width-value="200"
                        data-field-axisy-value="top"
                        data-field-axisx-value="left"
                        data-field-container-value="grid"
                        data-field-topunits-value="px"
                        data-field-leftunits-value="px"
                        data-field-heightunits-value=""
                        data-field-widthunits-value="px"
                        data-animate-sbs-event="hover"
                        data-animate-sbs-opts="[{'ti':'0','mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'','dt':'0'},{'ti':0,'mx':'0','my':0,'sx':'1','sy':'1','op':0,'ro':'0','bl':'0','ea':'easeOut','dt':'0'},{'ti':200,'mx':'0','my':0,'sx':'1','sy':'1','op':1,'ro':'0','bl':'0','ea':'easeOut','dt':'0'}]"
                        data-field-filewidth-value="400"
                        data-field-fileheight-value="128"
                    >
                        <a className="tn-atom" href="https://app.blend-ai.com/#/auth/shopify">
                            <img
                                className="tn-atom__img t-img"
                                data-original={SignupHover}
                                src={SignupHover}
                                imgfield="tn_img_1599148751113"
                            />
                        </a>
                    </div>
                    <div
                        className="t396__elem tn-elem tn-elem__2254969841599462044795"
                        data-elem-id="1599462044795"
                        data-elem-type="text"
                        data-field-top-value="660"
                        data-field-top-res-960-value="595"
                        data-field-top-res-640-value="870"
                        data-field-top-res-480-value="845"
                        data-field-top-res-320-value="720"
                        data-field-left-value="620"
                        data-field-left-res-960-value="490"
                        data-field-left-res-640-value="90"
                        data-field-left-res-480-value="90"
                        data-field-left-res-320-value="10"
                        data-field-width-value="300"
                        data-field-width-res-960-value="280"
                        data-field-width-res-320-value="240"
                        data-field-axisy-value="top"
                        data-field-axisx-value="left"
                        data-field-container-value="grid"
                        data-field-topunits-value="px"
                        data-field-leftunits-value="px"
                        data-field-heightunits-value=""
                        data-field-widthunits-value="px"
                    >
                        <div className="tn-atom" field="tn_text_1599462044795">
                            {data.bottomText}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default MeasureResults
