import React from "react"
import BlockContent from "@sanity/block-content-to-react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import "./createads.css"

import Adsmin from "../../images/tild6461-3731-4131-a438-346363383636__ad-min.png"
import Rectangle from "../../images/tild6333-3334-4736-a132-653934613065__rectangle_165.png"
import { Hand } from "../../utils/imgImport"
import { Vector3 } from "../../utils/imgImport"

const CreateAds = ({ data }) => {

    const text = data.text
    const blockText = data.blockText
    const bottomText = data.bottomText


    return (
        <div id="createads" className="createads-container">
            <div
                id="rec225446007"
                className="r t-rec"
                data-animationappear="off"
                data-record-type="396"
            >

                <div className="t396">
                    <div
                        className="t396__artboard"
                        data-artboard-recid="225446007"
                        data-artboard-height="880"
                        data-artboard-height-res-960="830"
                        data-artboard-height-res-640="1040"
                        data-artboard-height-res-480="990"
                        data-artboard-height-res-320="790"
                        data-artboard-height_vh=""
                        data-artboard-valign="center"
                        data-artboard-upscale=""
                        data-artboard-ovrflw="visible"
                    >
                        <div className="t396__carrier" data-artboard-recid="225446007"></div>
                        <div className="t396__filter" data-artboard-recid="225446007"></div>
                        <div
                            className="t396__elem tn-elem tn-elem__2254460071598880049829"
                            data-elem-id="1598880049829"
                            data-elem-type="image"
                            data-field-top-value="140"
                            data-field-top-res-960-value="100"
                            data-field-top-res-640-value="390"
                            data-field-top-res-480-value="390"
                            data-field-top-res-320-value="388"
                            data-field-left-value="49"
                            data-field-left-res-960-value="-15"
                            data-field-left-res-640-value="20"
                            data-field-left-res-480-value="-10"
                            data-field-left-res-320-value="-4"
                            data-field-width-value="660"
                            data-field-width-res-960-value="590"
                            data-field-width-res-480-value="500"
                            data-field-width-res-320-value="330"
                            data-field-axisy-value="top"
                            data-field-axisx-value="left"
                            data-field-container-value="grid"
                            data-field-topunits-value="px"
                            data-field-leftunits-value="px"
                            data-field-heightunits-value=""
                            data-field-widthunits-value="px"
                            data-field-filewidth-value="738"
                            data-field-fileheight-value="504"
                        >
                            <div className="tn-atom">
                                {/* <img
                                    className="tn-atom__img t-img"
                                    data-original={Adsmin}
                                    src={Adsmin}
                                    imgfield="tn_img_1598880049829"
                                /> */}
                                <GatsbyImage className="tn-atom__img t-img" image={getImage(data.bgImage.asset)} alt="product image" />
                            </div>
                        </div>
                        <div
                            className="t396__elem tn-elem tn-elem__2254460071598880838326"
                            data-elem-id="1598880838326"
                            data-elem-type="image"
                            data-field-top-value="530"
                            data-field-top-res-960-value="492"
                            data-field-top-res-640-value="778"
                            data-field-top-res-480-value="727"
                            data-field-top-res-320-value="606"
                            data-field-left-value="150"
                            data-field-left-res-960-value="150"
                            data-field-left-res-640-value="140"
                            data-field-left-res-480-value="75"
                            data-field-left-res-320-value="30"
                            data-field-width-value="278"
                            data-field-width-res-640-value="200"
                            data-field-width-res-480-value="200"
                            data-field-width-res-320-value="140"
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
                            data-animate-sbs-opts="[{'ti':'0','mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'','dt':'0'},{'ti':0,'mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':-30,'bl':'0','ea':'','dt':'0'},{'ti':900,'mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':0,'bl':'0','ea':'','dt':'0'}]"
                            data-field-filewidth-value="598"
                            data-field-fileheight-value="1107"
                        >
                            <div className="tn-atom">
                                <img
                                    className="tn-atom__img t-img"
                                    data-original={Hand}
                                    src={Hand}
                                    imgfield="tn_img_1598880838326"
                                />
                            </div>
                        </div>
                        <div
                            className="t396__elem tn-elem tn-elem__2254460071598881201577"
                            data-elem-id="1598881201577"
                            data-elem-type="text"
                            data-field-top-value="231"
                            data-field-top-res-960-value="181"
                            data-field-top-res-640-value="131"
                            data-field-top-res-480-value="131"
                            data-field-top-res-320-value="135"
                            data-field-left-value="721"
                            data-field-left-res-960-value="571"
                            data-field-left-res-640-value="91"
                            data-field-left-res-480-value="11"
                            data-field-left-res-320-value="11"
                            data-field-width-value="190"
                            data-field-axisy-value="top"
                            data-field-axisx-value="left"
                            data-field-container-value="grid"
                            data-field-topunits-value="px"
                            data-field-leftunits-value="px"
                            data-field-heightunits-value=""
                            data-field-widthunits-value="px"
                        >
                            <h2 className="tn-atom" field="tn_text_1598881201577">{text}</h2>
                        </div>
                        <div
                            className="t396__elem tn-elem tn-elem__2254460071598881295720"
                            data-elem-id="1598881295720"
                            data-elem-type="text"
                            data-field-top-value="290"
                            data-field-top-res-960-value="240"
                            data-field-top-res-640-value="190"
                            data-field-top-res-480-value="190"
                            data-field-top-res-320-value="184"
                            data-field-left-value="720"
                            data-field-left-res-960-value="570"
                            data-field-left-res-640-value="90"
                            data-field-left-res-480-value="10"
                            data-field-left-res-320-value="10"
                            data-field-width-value="400"
                            data-field-width-res-960-value="380"
                            data-field-width-res-640-value="460"
                            data-field-width-res-320-value="300"
                            data-field-axisy-value="top"
                            data-field-axisx-value="left"
                            data-field-container-value="grid"
                            data-field-topunits-value="px"
                            data-field-leftunits-value="px"
                            data-field-heightunits-value=""
                            data-field-widthunits-value="px"
                        >
                            <div className="tn-atom" field="tn_text_1598881295720">
                                <BlockContent
                                    blocks={blockText}
                                />
                            </div>
                        </div>
                        <div
                            className="t396__elem tn-elem tn-elem__2254460071598881324223"
                            data-elem-id="1598881324223"
                            data-elem-type="text"
                            data-field-top-value="176"
                            data-field-top-res-960-value="126"
                            data-field-top-res-640-value="76"
                            data-field-top-res-480-value="76"
                            data-field-top-res-320-value="80"
                            data-field-left-value="720"
                            data-field-left-res-960-value="570"
                            data-field-left-res-640-value="90"
                            data-field-left-res-480-value="10"
                            data-field-left-res-320-value="10"
                            data-field-width-value="80"
                            data-field-axisy-value="top"
                            data-field-axisx-value="left"
                            data-field-container-value="grid"
                            data-field-topunits-value="px"
                            data-field-leftunits-value="px"
                            data-field-heightunits-value=""
                            data-field-widthunits-value="px"
                        >
                            <div className="tn-atom" field="tn_text_1598881324223">Step 1.</div>
                        </div>
                        <div
                            className="t396__elem tn-elem tn-elem__2254460071598881393025"
                            data-elem-id="1598881393025"
                            data-elem-type="text"
                            data-field-top-value="600"
                            data-field-top-res-960-value="500"
                            data-field-top-res-640-value="790"
                            data-field-top-res-480-value="730"
                            data-field-top-res-320-value="609"
                            data-field-left-value="380"
                            data-field-left-res-960-value="370"
                            data-field-left-res-640-value="330"
                            data-field-left-res-480-value="310"
                            data-field-left-res-320-value="190"
                            data-field-width-value="270"
                            data-field-width-res-960-value="240"
                            data-field-width-res-640-value="240"
                            data-field-width-res-480-value="160"
                            data-field-width-res-320-value="120"
                            data-field-axisy-value="top"
                            data-field-axisx-value="left"
                            data-field-container-value="grid"
                            data-field-topunits-value="px"
                            data-field-leftunits-value="px"
                            data-field-heightunits-value=""
                            data-field-widthunits-value="px"
                        >
                            <div className="tn-atom" field="tn_text_1598881393025">
                                {bottomText}
                            </div>
                        </div>
                        <div
                            className="t396__elem tn-elem tn-elem__2254460071598883041521"
                            data-elem-id="1598883041521"
                            data-elem-type="image"
                            data-field-top-value="386"
                            data-field-top-res-960-value="336"
                            data-field-top-res-640-value="630"
                            data-field-top-res-480-value="615"
                            data-field-top-res-320-value="515"
                            data-field-left-value="-20"
                            data-field-left-res-960-value="-20"
                            data-field-left-res-640-value="10"
                            data-field-left-res-480-value="10"
                            data-field-left-res-320-value="-14"
                            data-field-width-value="339"
                            data-field-width-res-960-value="300"
                            data-field-width-res-640-value="250"
                            data-field-width-res-480-value="260"
                            data-field-width-res-320-value="180"
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
                            data-animate-sbs-opts="[{'ti':'0','mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'','dt':'0'},{'ti':0,'mx':0,'my':51,'sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'','dt':'0'},{'ti':'1000','mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':30,'bl':'0','ea':'easeInOut','dt':'0'}]"
                            data-field-filewidth-value="963"
                            data-field-fileheight-value="1019"
                        >
                            <div className="tn-atom">
                                <GatsbyImage className="tn-atom__img t-img" image={getImage(data.productImage.asset)} alt="product image" />
                            </div>
                        </div>
                        <div
                            className="t396__elem tn-elem tn-elem__2254460071599231862763"
                            data-elem-id="1599231862763"
                            data-elem-type="image"
                            data-field-top-value="625"
                            data-field-top-res-960-value="575"
                            data-field-top-res-640-value="902"
                            data-field-top-res-480-value="840"
                            data-field-top-res-320-value="700"
                            data-field-left-value="215"
                            data-field-left-res-960-value="130"
                            data-field-left-res-640-value="90"
                            data-field-left-res-480-value="30"
                            data-field-left-res-320-value="10"
                            data-field-width-value="770"
                            data-field-width-res-960-value="700"
                            data-field-width-res-640-value="460"
                            data-field-width-res-480-value="420"
                            data-field-width-res-320-value="300"
                            data-field-axisy-value="top"
                            data-field-axisx-value="left"
                            data-field-container-value="grid"
                            data-field-topunits-value="px"
                            data-field-leftunits-value="px"
                            data-field-heightunits-value=""
                            data-field-widthunits-value="px"
                            data-field-filewidth-value="1413"
                            data-field-fileheight-value="1030"
                        >
                            <div className="tn-atom">
                                <img
                                    className="tn-atom__img t-img"
                                    data-original={Vector3}
                                    src={Vector3}
                                    imgfield="tn_img_1599231862763"

                                />
                            </div>
                        </div>
                        <div
                            className="t396__elem tn-elem tn-elem__2254460071612885017783"
                            data-elem-id="1612885017783"
                            data-elem-type="shape"
                            data-field-top-value="881"
                            data-field-top-res-960-value="829"
                            data-field-top-res-640-value="1040"
                            data-field-top-res-480-value="990"
                            data-field-top-res-320-value="789"
                            data-field-left-value="44"
                            data-field-left-res-960-value="44"
                            data-field-left-res-640-value="138"
                            data-field-left-res-480-value="98"
                            data-field-left-res-320-value="26"
                            data-field-height-value="169"
                            data-field-height-res-960-value="138"
                            data-field-height-res-640-value="93"
                            data-field-width-value="570"
                            data-field-width-res-960-value="570"
                            data-field-width-res-640-value="289"
                            data-field-axisy-value="top"
                            data-field-axisx-value="left"
                            data-field-container-value="grid"
                            data-field-topunits-value="px"
                            data-field-leftunits-value="px"
                            data-field-heightunits-value="px"
                            data-field-widthunits-value="px"
                        >
                            <div className="tn-atom"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default CreateAds
