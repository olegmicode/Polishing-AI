import React from "react"
import BlockContent from "@sanity/block-content-to-react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import "./multipleadchannels.css"

import { Vector3Blue } from "../../utils/imgImport"
import { Vector3 } from "../../utils/imgImport"
import { Line7 } from "../../utils/imgImport"
import { Line6 } from "../../utils/imgImport"
import { Line8 } from "../../utils/imgImport"

import InstagramAdImg from "../../images/tild3734-6433-4265-a361-376664326338__instagram_ad-min.png"
import FbAdImg from "../../images/tild6237-3061-4130-b133-393437316231__facebook_ad.png"
import GgadImg from "../../images/tild3836-3564-4639-a531-313737616639__google_ad-min.png"
import LkadImg from "../../images/tild3038-3838-4264-b666-346135313131__linked_in_ad-min.png"
import TwadImg from "../../images/tild3764-3661-4134-b633-306433643662__twitter_ad-min.png"
import AdminImg from "../../images/tild6433-3265-4434-b738-346534643133__blend_ad-min.png"

const Multipleadchannels = ({ data }) => {
  const text = data.text
  const blockText = data.blockText
  const overImage = data.overImage.asset
  const adCardImages = data.adCardImages

  return (
    <div id="multipleadchannels" className="multipleadchannels-container">
      <div
        id="rec225479802"
        className="r t-rec"
        data-animationappear="off"
        data-record-type="396"
      >

        <div className="t396">
          <div
            className="t396__artboard"
            data-artboard-recid="225479802"
            data-artboard-height="1000"
            data-artboard-height-res-960="860"
            data-artboard-height-res-640="1260"
            data-artboard-height-res-480="980"
            data-artboard-height-res-320="800"
            data-artboard-height_vh=""
            data-artboard-valign="center"
            data-artboard-upscale=""
            data-artboard-ovrflw="visible"
          >
            <div className="t396__carrier" data-artboard-recid="225479802"></div>
            <div className="t396__filter" data-artboard-recid="225479802"></div>
            <div
              className="t396__elem tn-elem tn-elem__2254798021598884642155"
              data-elem-id="1598884642155"
              data-elem-type="text"
              data-field-top-value="365"
              data-field-top-res-960-value="335"
              data-field-top-res-640-value="136"
              data-field-top-res-480-value="136"
              data-field-left-value="720"
              data-field-left-res-960-value="570"
              data-field-left-res-640-value="91"
              data-field-left-res-480-value="10"
              data-field-width-value="370"
              data-field-width-res-960-value="320"
              data-field-width-res-640-value="360"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="px"
            >
              <h2 className="tn-atom" field="tn_text_1598884642155">
                {text}
              </h2>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2254798021598884642164"
              data-elem-id="1598884642164"
              data-elem-type="text"
              data-field-top-value="424"
              data-field-top-res-960-value="439"
              data-field-top-res-640-value="195"
              data-field-top-res-480-value="189"
              data-field-top-res-320-value="195"
              data-field-left-value="720"
              data-field-left-res-960-value="570"
              data-field-left-res-640-value="91"
              data-field-left-res-480-value="10"
              data-field-left-res-320-value="10"
              data-field-width-value="400"
              data-field-width-res-960-value="380"
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
              <div className="tn-atom" field="tn_text_1598884642164">
                <BlockContent
                  blocks={blockText}
                />
                <br />
              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2254798021598884642168"
              data-elem-id="1598884642168"
              data-elem-type="text"
              data-field-top-value="310"
              data-field-top-res-960-value="278"
              data-field-top-res-640-value="81"
              data-field-top-res-480-value="81"
              data-field-left-value="721"
              data-field-left-res-960-value="570"
              data-field-left-res-640-value="92"
              data-field-left-res-480-value="11"
              data-field-width-value="80"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="px"
            >
              <div className="tn-atom" field="tn_text_1598884642168">Step 3.</div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2254798021598885259842"
              data-elem-id="1598885259842"
              data-elem-type="image"
              data-field-top-value="130"
              data-field-top-res-960-value="90"
              data-field-top-res-640-value="445"
              data-field-top-res-480-value="410"
              data-field-top-res-320-value="402"
              data-field-left-value="260"
              data-field-left-res-960-value="150"
              data-field-left-res-640-value="160"
              data-field-left-res-480-value="180"
              data-field-left-res-320-value="80"
              data-field-width-value="500"
              data-field-width-res-480-value="320"
              data-field-width-res-320-value="260"
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
              data-animate-sbs-opts="[{'ti':'0','mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'','dt':'0'},{'ti':0,'mx':'0','my':'0','sx':'1','sy':'1','op':0,'ro':'0','bl':'0','ea':'','dt':'0'},{'ti':500,'mx':'0','my':'0','sx':'1','sy':'1','op':1,'ro':'0','bl':'0','ea':'','dt':'0'}]"
              data-field-filewidth-value="1016"
              data-field-fileheight-value="620"
            >
              <div className="tn-atom">
                <GatsbyImage className="tn-atom__img t-img" image={getImage(overImage)} alt="product image" />

              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2254798021598885640298"
              data-elem-id="1598885640298"
              data-elem-type="image"
              data-field-top-value="250"
              data-field-top-res-960-value="215"
              data-field-top-res-640-value="570"
              data-field-top-res-480-value="484"
              data-field-top-res-320-value="454"
              data-field-left-value="51"
              data-field-left-res-960-value="21"
              data-field-left-res-640-value="26"
              data-field-left-res-480-value="18"
              data-field-left-res-320-value="20"
              data-field-width-value="403"
              data-field-width-res-480-value="280"
              data-field-width-res-320-value="200"
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
              data-animate-sbs-opts="[{'ti':'0','mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'','dt':'0'},{'ti':0,'mx':0,'my':0,'sx':'1','sy':'1','op':0,'ro':'0','bl':'0','ea':'','dt':'0'},{'ti':500,'mx':0,'my':0,'sx':'1','sy':'1','op':1,'ro':'0','bl':'0','ea':'easeIn','dt':700}]"
              data-field-filewidth-value="838"
              data-field-fileheight-value="592"
            >
              <div className="tn-atom">
                <GatsbyImage className="tn-atom__img t-img" image={getImage(adCardImages[0].asset)} alt="product image" />

              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2254798021598885752849"
              data-elem-id="1598885752849"
              data-elem-type="image"
              data-field-top-value="130"
              data-field-top-res-960-value="90"
              data-field-top-res-640-value="445"
              data-field-top-res-480-value="414"
              data-field-top-res-320-value="404"
              data-field-left-value="20"
              data-field-left-res-960-value="6"
              data-field-left-res-640-value="5"
              data-field-left-res-480-value="6"
              data-field-left-res-320-value="10"
              data-field-width-value="270"
              data-field-width-res-480-value="180"
              data-field-width-res-320-value="150"
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
              data-animate-sbs-opts="[{'ti':'0','mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'','dt':'0'},{'ti':0,'mx':0,'my':0,'sx':'1','sy':'1','op':0,'ro':'0','bl':'0','ea':'','dt':'0'},{'ti':500,'mx':0,'my':0,'sx':'1','sy':'1','op':1,'ro':'0','bl':'0','ea':'easeIn','dt':500}]"
              data-field-filewidth-value="556"
              data-field-fileheight-value="676"
            >
              <div className="tn-atom">
                {/* <img
                  className="tn-atom__img t-img"
                  data-original={InstagramAdImg}
                  src={InstagramAdImg}
                  imgfield="tn_img_1598885752849"
                /> */}
                <GatsbyImage className="tn-atom__img t-img" image={getImage(adCardImages[1].asset)} alt="product image" />

              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2254798021599232345532"
              data-elem-id="1599232345532"
              data-elem-type="image"
              data-field-top-value="350"
              data-field-top-res-960-value="303"
              data-field-top-res-640-value="670"
              data-field-top-res-480-value="561"
              data-field-top-res-320-value="511"
              data-field-left-value="94"
              data-field-left-res-960-value="40"
              data-field-left-res-640-value="49"
              data-field-left-res-480-value="35"
              data-field-left-res-320-value="30"
              data-field-width-value="403"
              data-field-width-res-480-value="280"
              data-field-width-res-320-value="200"
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
              data-animate-sbs-opts="[{'ti':'0','mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'','dt':'0'},{'ti':0,'mx':0,'my':0,'sx':'1','sy':'1','op':0,'ro':'0','bl':'0','ea':'','dt':'0'},{'ti':500,'mx':0,'my':0,'sx':'1','sy':'1','op':1,'ro':'0','bl':'0','ea':'easeIn','dt':900}]"
              data-field-filewidth-value="838"
              data-field-fileheight-value="592"
            >
              <div className="tn-atom">
                <GatsbyImage className="tn-atom__img t-img" image={getImage(adCardImages[2].asset)} alt="product image" />

              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2254798021599232472471"
              data-elem-id="1599232472471"
              data-elem-type="image"
              data-field-top-value="460"
              data-field-top-res-960-value="392"
              data-field-top-res-640-value="778"
              data-field-top-res-480-value="640"
              data-field-top-res-320-value="568"
              data-field-left-value="139"
              data-field-left-res-960-value="61"
              data-field-left-res-640-value="74"
              data-field-left-res-480-value="60"
              data-field-left-res-320-value="40"
              data-field-width-value="403"
              data-field-width-res-480-value="280"
              data-field-width-res-320-value="200"
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
              data-animate-sbs-opts="[{'ti':'0','mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'','dt':'0'},{'ti':0,'mx':0,'my':0,'sx':'1','sy':'1','op':0,'ro':'0','bl':'0','ea':'','dt':'0'},{'ti':500,'mx':'0','my':'0','sx':'1','sy':'1','op':1,'ro':'0','bl':'0','ea':'easeIn','dt':1100}]"
              data-field-filewidth-value="838"
              data-field-fileheight-value="592"
            >
              <div className="tn-atom">
                {/* <img
                  className="tn-atom__img t-img"
                  data-original={LkadImg}
                  src={LkadImg}
                  imgfield="tn_img_1599232472471"
                /> */}
                <GatsbyImage className="tn-atom__img t-img" image={getImage(adCardImages[3].asset)} alt="product image" />

              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2254798021599232481074"
              data-elem-id="1599232481074"
              data-elem-type="image"
              data-field-top-value="570"
              data-field-top-res-960-value="482"
              data-field-top-res-640-value="880"
              data-field-top-res-480-value="720"
              data-field-top-res-320-value="625"
              data-field-left-value="184"
              data-field-left-res-960-value="86"
              data-field-left-res-640-value="99"
              data-field-left-res-480-value="85"
              data-field-left-res-320-value="50"
              data-field-width-value="403"
              data-field-width-res-480-value="280"
              data-field-width-res-320-value="200"
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
              data-animate-sbs-opts="[{'ti':'0','mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'','dt':'0'},{'ti':0,'mx':0,'my':0,'sx':'1','sy':'1','op':0,'ro':'0','bl':'0','ea':'','dt':'0'},{'ti':500,'mx':0,'my':0,'sx':'1','sy':'1','op':1,'ro':'0','bl':'0','ea':'easeIn','dt':1300}]"
              data-field-filewidth-value="838"
              data-field-fileheight-value="592"
            >
              <div className="tn-atom">
                <GatsbyImage className="tn-atom__img t-img" image={getImage(adCardImages[4].asset)} alt="product image" />

              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2254798021599489865571"
              data-elem-id="1599489865571"
              data-elem-type="image"
              data-field-top-value="305"
              data-field-top-res-960-value="265"
              data-field-top-res-640-value="640"
              data-field-top-res-480-value="525"
              data-field-top-res-320-value="494"
              data-field-left-value="513"
              data-field-left-res-960-value="438"
              data-field-left-res-640-value="450"
              data-field-left-res-480-value="320"
              data-field-left-res-320-value="224"
              data-field-width-value="140"
              data-field-width-res-960-value="120"
              data-field-width-res-640-value="120"
              data-field-width-res-480-value="110"
              data-field-width-res-320-value="75"
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
              data-animate-sbs-opts="[{'ti':'0','mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'','dt':'0'},{'ti':0,'mx':'0','my':'0','sx':'1','sy':'1','op':0,'ro':'0','bl':'0','ea':'','dt':'0'},{'ti':500,'mx':'0','my':'0','sx':'1','sy':'1','op':1,'ro':'0','bl':'0','ea':'','dt':800}]"
              data-field-filewidth-value="253"
              data-field-fileheight-value="393"
            >
              <div className="tn-atom">
                <img
                  className="tn-atom__img t-img"
                  data-original={Line6}
                  src={Line6}
                  imgfield="tn_img_1599489865571"
                />
              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2254798021599490178897"
              data-elem-id="1599490178897"
              data-elem-type="image"
              data-field-top-value="305"
              data-field-top-res-960-value="265"
              data-field-top-res-640-value="640"
              data-field-top-res-480-value="525"
              data-field-top-res-320-value="495"
              data-field-left-value="490"
              data-field-left-res-960-value="428"
              data-field-left-res-640-value="441"
              data-field-left-res-480-value="320"
              data-field-left-res-320-value="220"
              data-field-width-value="100"
              data-field-width-res-960-value="90"
              data-field-width-res-640-value="81"
              data-field-width-res-480-value="70"
              data-field-width-res-320-value="50"
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
              data-animate-sbs-opts="[{'ti':'0','mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'','dt':'0'},{'ti':0,'mx':'0','my':'0','sx':'1','sy':'1','op':0,'ro':'0','bl':'0','ea':'','dt':'0'},{'ti':500,'mx':'0','my':'0','sx':'1','sy':'1','op':1,'ro':'0','bl':'0','ea':'','dt':800}]"
              data-field-filewidth-value="183"
              data-field-fileheight-value="199"
            >
              <div className="tn-atom">
                <img
                  className="tn-atom__img t-img"
                  data-original={Line7}
                  src={Line7}
                  imgfield="tn_img_1599490178897"
                />
              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2254798021599490340587"
              data-elem-id="1599490340587"
              data-elem-type="image"
              data-field-top-value="305"
              data-field-top-res-960-value="265"
              data-field-top-res-640-value="640"
              data-field-top-res-480-value="525"
              data-field-top-res-320-value="495"
              data-field-left-value="525"
              data-field-left-res-960-value="422"
              data-field-left-res-640-value="440"
              data-field-left-res-480-value="320"
              data-field-left-res-320-value="220"
              data-field-width-value="18"
              data-field-width-res-960-value="20"
              data-field-width-res-640-value="30"
              data-field-width-res-480-value="34"
              data-field-width-res-320-value="35"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="%"
              data-animate-sbs-event="blockintoview"
              data-animate-sbs-trg="0.5"
              data-animate-sbs-trgofst="0"
              data-animate-sbs-opts="[{'ti':'0','mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'','dt':'0'},{'ti':0,'mx':'0','my':'0','sx':'1','sy':'1','op':0,'ro':'0','bl':'0','ea':'','dt':'0'},{'ti':500,'mx':'0','my':'0','sx':'1','sy':'1','op':1,'ro':'0','bl':'0','ea':'','dt':1200}]"
              data-field-filewidth-value="392"
              data-field-fileheight-value="765"
            >
              <div className="tn-atom">
                <img
                  className="tn-atom__img t-img"
                  data-original={Line8}
                  src={Line8}
                  imgfield="tn_img_1599490340587"
                />
              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2254798021599490405097"
              data-elem-id="1599490405097"
              data-elem-type="image"
              data-field-top-value="63"
              data-field-top-res-960-value="45"
              data-field-top-res-640-value="395"
              data-field-top-res-480-value="365"
              data-field-top-res-320-value="378"
              data-field-left-value="180"
              data-field-left-res-960-value="100"
              data-field-left-res-640-value="70"
              data-field-left-res-480-value="50"
              data-field-left-res-320-value="50"
              data-field-width-value="400"
              data-field-width-res-960-value="390"
              data-field-width-res-640-value="400"
              data-field-width-res-480-value="320"
              data-field-width-res-320-value="200"
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
              data-animate-sbs-opts="[{'ti':'0','mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'','dt':'0'},{'ti':0,'mx':'0','my':'0','sx':'1','sy':'1','op':0,'ro':'0','bl':'0','ea':'','dt':0},{'ti':500,'mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'','dt':700}]"
              data-field-filewidth-value="809"
              data-field-fileheight-value="120"
            >
              <div className="tn-atom">
                <img
                  className="tn-atom__img t-img"
                  data-original={Vector3Blue}
                  src={Vector3Blue}
                  imgfield="tn_img_1599490405097"
                />
              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2254798021599659282627"
              data-elem-id="1599659282627"
              data-elem-type="image"
              data-field-top-value="746"
              data-field-top-res-960-value="655"
              data-field-top-res-640-value="1105"
              data-field-top-res-480-value="850"
              data-field-top-res-320-value="725"
              data-field-left-value="220"
              data-field-left-res-960-value="130"
              data-field-left-res-640-value="80"
              data-field-left-res-480-value="30"
              data-field-left-res-320-value="30"
              data-field-width-value="770"
              data-field-width-res-960-value="700"
              data-field-width-res-640-value="460"
              data-field-width-res-480-value="420"
              data-field-width-res-320-value="260"
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
                  imgfield="tn_img_1599659282627"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Multipleadchannels