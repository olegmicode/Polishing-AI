import React from "react"
import BlockContent from "@sanity/block-content-to-react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import "./intro.css"

import FBMin from "../../images/tild3664-3733-4336-b162-373133666336__fb-min.png"
import InstaMin from "../../images/tild3232-3063-4231-b733-303431393035__insta-min.png"
import TwitterMin from "../../images/tild3037-3330-4130-a339-623031343433__twitter-min.png"
import GoogleMin from "../../images/tild6163-6365-4532-a334-366366313232__google-min.png"

// import StrollerTwitterImg from "../../images/tild6662-3237-4862-a361-613939383763__stroller_twitter.png"
// import StrollerFbImg from "../../images/tild3239-6263-4036-a532-316138336665__stroller_fb.png"
// import StrollerGgImg from "../../images/tild6361-3064-4331-b939-353232386637__-__resize__20x__stroller_google.png"
// import StrollerInstaImg from "../../images/tild6136-6333-4635-b463-663637626235__stroller_insta.png"

// import SofaFbImg1 from "../../images/tild3734-6364-4262-a531-386634376263__sofa_fb-1.png"
// import SofaGgImg from "../../images/tild6465-3431-4636-b164-356265333039__sofa_google.png"
// import SofaFbImg from "../../images/tild3337-3863-4539-a264-343235653436__sofa_fb.png"
// import SofaBingImg from "../../images/tild3162-6336-4239-a365-383363326564__sofar_bing.png"

// import BagInstaImg from "../../images/tild3736-3133-4232-b764-373162396461__bag_insta.png"
// import BagFbImg from "../../images/tild3039-3037-4165-b337-313639616535__bag_fb.png"
// import BagGgImg from "../../images/tild6235-3937-4637-a335-646163353065__bag_google.png"
// import BagBingImg from "../../images/tild3535-3639-4838-a563-663830333136__bag_bing.png"

// import ShoesFbImg from "../../images/tild3830-3839-4866-b834-623462313762__shoes_fb.png"
// import ShoesMainImg from "../../images/tild3936-3234-4033-b338-353262343230__shoes_main.png"
// import ShoesBingImg from "../../images/tild3733-3465-4734-b733-303639353131__shoes_bing.png"
// import ShoesGgImg from "../../images/tild3138-6235-4138-b032-663535366332__shoes_google.png"
// import ShoesInsta from "../../images/tild3139-3538-4565-b464-306363376264__shoes_insta.png"

const Intro = ({ data }) => {

  const mainImage = getImage(data.mainProductImage.asset)
  const productImage1 = getImage(data.ProductImages[0].asset)
  const productImage2 = getImage(data.ProductImages[1].asset)
  const productImage3 = getImage(data.ProductImages[2].asset)
  const productImage4 = getImage(data.ProductImages[3].asset)

  return (
    <div id="intro" className="intro-container">
      <div
        id="rec294576515"
        className="r t-rec"
        data-animationappear="off"
        data-record-type="396"
      >
        <div className="t396">
          <div
            className="t396__artboard"
            data-artboard-recid="294576515"
            data-artboard-height="800"
            data-artboard-height-res-960="670"
            data-artboard-height-res-640="620"
            data-artboard-height-res-480="890"
            data-artboard-height-res-320="930"
            data-artboard-height_vh=""
            data-artboard-valign="center"
            data-artboard-upscale="grid"
            data-artboard-ovrflw="visible"
          >
            <div className="t396__carrier" data-artboard-recid="294576515"></div>
            <div className="t396__filter" data-artboard-recid="294576515"></div>
            <div
              className="t396__elem tn-elem tn-elem__2945765151470210011265 t-animate"
              data-elem-id="1470210011265"
              data-elem-type="text"
              data-field-top-value="145"
              data-field-top-res-960-value="119"
              data-field-top-res-640-value="85"
              data-field-top-res-480-value="585"
              data-field-top-res-320-value="575"
              data-field-left-value="20"
              data-field-left-res-960-value="20"
              data-field-left-res-640-value="20"
              data-field-left-res-480-value="10"
              data-field-left-res-320-value="10"
              data-field-width-value="450"
              data-field-width-res-960-value="420"
              data-field-width-res-640-value="260"
              data-field-width-res-480-value="410"
              data-field-width-res-320-value="310"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="px"
              data-animate-style="fadeinup"
              data-animate-duration="1"
              data-animate-distance="100"
            >
              <h1 className="tn-atom" field="tn_text_1470210011265">
                <BlockContent
                  blocks={data.blockText}
                />
              </h1>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2945765151598861479822 t-animate"
              data-elem-id="1598861479822"
              data-elem-type="text"
              data-field-top-value="345"
              data-field-top-res-960-value="311"
              data-field-top-res-640-value="287"
              data-field-top-res-480-value="673"
              data-field-top-res-320-value="713"
              data-field-left-value="20"
              data-field-left-res-960-value="20"
              data-field-left-res-640-value="20"
              data-field-left-res-480-value="10"
              data-field-left-res-320-value="10"
              data-field-width-value="460"
              data-field-width-res-960-value="420"
              data-field-width-res-640-value="260"
              data-field-width-res-480-value="430"
              data-field-width-res-320-value="300"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="px"
              data-animate-style="fadeinup"
              data-animate-duration="1"
              data-animate-delay="0.1"
              data-animate-distance="100"
            >
              <div className="tn-atom" field="tn_text_1598861479822">
                {data.bannerSubText}<br />
              </div>
            </div>
            {/* start */}
            <div
              className="t396__elem tn-elem tn-elem__2945765151599580706341 t-animate"
              data-elem-id="1599580706341"
              data-elem-type="image"
              data-field-top-value="80"
              data-field-top-res-960-value="25"
              data-field-top-res-640-value="40"
              data-field-top-res-480-value="36"
              data-field-top-res-320-value="373"
              data-field-left-value="631"
              data-field-left-res-960-value="520"
              data-field-left-res-640-value="300"
              data-field-left-res-480-value="163"
              data-field-left-res-320-value="94"
              data-field-width-value="320"
              data-field-width-res-960-value="283"
              data-field-width-res-640-value="220"
              data-field-width-res-480-value="200"
              data-field-width-res-320-value="215"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="px"
              data-animate-style="fadeindown"
              data-animate-style-res-320="fadeinleft"
              data-animate-duration="1"
              data-animate-delay="0.4"
              data-animate-distance="50"
              data-animate-mobile="y"
              data-field-filewidth-value="640"
              data-field-fileheight-value="468"
            >
              <div className="tn-atom">
                <img
                  className="tn-atom__img t-img"
                  data-original={FBMin}
                  src={FBMin}
                  imgfield="tn_img_1599580706341"
                />
              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2945765151599580706363 t-animate"
              data-elem-id="1599580706363"
              data-elem-type="image"
              data-field-top-value="379"
              data-field-top-res-960-value="375"
              data-field-top-res-640-value="293"
              data-field-top-res-480-value="225"
              data-field-top-res-320-value="31"
              data-field-left-value="1010"
              data-field-left-res-960-value="847"
              data-field-left-res-640-value="529"
              data-field-left-res-480-value="330"
              data-field-left-res-320-value="11"
              data-field-width-value="230"
              data-field-width-res-960-value="210"
              data-field-width-res-640-value="140"
              data-field-width-res-480-value="160"
              data-field-width-res-320-value="150"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="px"
              data-animate-style="fadeinleft"
              data-animate-style-res-320="fadeinright"
              data-animate-duration="1"
              data-animate-delay="0.4"
              data-animate-distance="50"
              data-animate-mobile="y"
              data-field-filewidth-value="530"
              data-field-fileheight-value="626"
            >
              <div className="tn-atom">
                <img
                  className="tn-atom__img t-img"
                  data-original={InstaMin}
                  src={InstaMin}
                  imgfield="tn_img_1599580706363"
                />
              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2945765151599580706371 t-animate"
              data-elem-id="1599580706371"
              data-elem-type="image"
              data-field-top-value="633"
              data-field-top-res-960-value="570"
              data-field-top-res-640-value="481"
              data-field-top-res-480-value="410"
              data-field-top-res-320-value="379"
              data-field-left-value="520"
              data-field-left-res-960-value="435"
              data-field-left-res-640-value="347"
              data-field-left-res-480-value="29"
              data-field-left-res-320-value="109"
              data-field-width-value="308"
              data-field-width-res-960-value="283"
              data-field-width-res-640-value="220"
              data-field-width-res-480-value="200"
              data-field-width-res-320-value="200"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="px"
              data-animate-style="fadeinup"
              data-animate-style-res-320="fadeinright"
              data-animate-duration="1"
              data-animate-delay="0.4"
              data-animate-distance="50"
              data-animate-mobile="y"
              data-field-filewidth-value="680"
              data-field-fileheight-value="514"
            >
              <div className="tn-atom">
                <img
                  className="tn-atom__img t-img"
                  data-original={TwitterMin}
                  src={TwitterMin}
                  imgfield="tn_img_1599580706371"
                />
              </div>
            </div>
            {/* Background images Ads End  */}
            <div
              className="t396__elem tn-elem tn-elem__2945765151616416750790 t-animate"
              data-elem-id="1616416750790"
              data-elem-type="shape"
              data-field-top-value="693"
              data-field-top-res-960-value="626"
              data-field-top-res-640-value="524"
              data-field-top-res-480-value="447"
              data-field-top-res-320-value="420"
              data-field-left-value="536"
              data-field-left-res-960-value="449"
              data-field-left-res-640-value="357"
              data-field-left-res-480-value="37"
              data-field-left-res-320-value="117"
              data-field-height-value="157"
              data-field-height-res-960-value="144"
              data-field-height-res-640-value="114"
              data-field-height-res-480-value="106"
              data-field-height-res-320-value="102"
              data-field-width-value="276"
              data-field-width-res-960-value="255"
              data-field-width-res-640-value="200"
              data-field-width-res-480-value="184"
              data-field-width-res-320-value="184"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value="px"
              data-field-widthunits-value="px"
              data-animate-style="fadeinup"
              data-animate-style-res-320="fadeinright"
              data-animate-duration="1"
              data-animate-delay="0.4"
              data-animate-distance="50"
              data-animate-mobile="y"
            >
              <div
                className="tn-atom t-bgimg"
                >
                <GatsbyImage image={productImage1} alt="product image" />
              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2945765151616416826174 t-animate"
              data-elem-id="1616416826174"
              data-elem-type="shape"
              data-field-top-value="142"
              data-field-top-res-960-value="91"
              data-field-top-res-640-value="84"
              data-field-top-res-480-value="77"
              data-field-top-res-320-value="418"
              data-field-left-value="647"
              data-field-left-res-960-value="534"
              data-field-left-res-640-value="310"
              data-field-left-res-480-value="171"
              data-field-left-res-320-value="102"
              data-field-height-value="156"
              data-field-height-res-960-value="127"
              data-field-height-res-640-value="107"
              data-field-height-res-480-value="98"
              data-field-height-res-320-value="104"
              data-field-width-value="288"
              data-field-width-res-960-value="255"
              data-field-width-res-640-value="200"
              data-field-width-res-480-value="184"
              data-field-width-res-320-value="199"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value="px"
              data-field-widthunits-value="px"
              data-animate-style="fadeindown"
              data-animate-style-res-320="fadeinleft"
              data-animate-duration="1"
              data-animate-delay="0.4"
              data-animate-distance="50"
              data-animate-mobile="y"
            >
              <div
                className="tn-atom t-bgimg"
                
              >
                <GatsbyImage image={productImage1} alt="product image" />
                
              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2945765151616416876415 t-animate"
              data-elem-id="1616416876415"
              data-elem-type="shape"
              data-field-top-value="501"
              data-field-top-res-960-value="449"
              data-field-top-res-640-value="550"
              data-field-top-res-480-value="468"
              data-field-top-res-320-value="484"
              data-field-left-value="522"
              data-field-left-res-960-value="425"
              data-field-left-res-640-value="303"
              data-field-left-res-480-value="129"
              data-field-left-res-320-value="110"
              data-field-height-value="91"
              data-field-height-res-960-value="85"
              data-field-height-res-640-value="68"
              data-field-height-res-480-value="64"
              data-field-width-value="140"
              data-field-width-res-960-value="126"
              data-field-width-res-640-value="96"
              data-field-width-res-480-value="92"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value="px"
              data-field-widthunits-value="px"
              data-animate-style="fadeinright"
              data-animate-style-res-320="fadeinleft"
              data-animate-duration="1"
              data-animate-delay="0.4"
              data-animate-distance="50"
              data-animate-mobile="y"
            >
              <div
                className="tn-atom t-bgimg"
              >
                <GatsbyImage image={productImage1} alt="product image" />

              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2945765151616417440825 t-animate"
              data-elem-id="1616417440825"
              data-elem-type="shape"
              data-field-top-value="435"
              data-field-top-res-960-value="428"
              data-field-top-res-640-value="334"
              data-field-top-res-480-value="266"
              data-field-top-res-320-value="68"
              data-field-left-value="1026"
              data-field-left-res-960-value="861"
              data-field-left-res-640-value="539"
              data-field-left-res-480-value="338"
              data-field-left-res-320-value="19"
              data-field-height-value="200"
              data-field-height-res-960-value="181"
              data-field-height-res-640-value="115"
              data-field-height-res-480-value="140"
              data-field-height-res-320-value="132"
              data-field-width-value="198"
              data-field-width-res-960-value="182"
              data-field-width-res-640-value="120"
              data-field-width-res-480-value="144"
              data-field-width-res-320-value="134"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value="px"
              data-field-widthunits-value="px"
              data-animate-style="fadeinleft"
              data-animate-style-res-320="fadeinright"
              data-animate-duration="1"
              data-animate-delay="0.4"
              data-animate-distance="50"
              data-animate-mobile="y"
            >
              <div
                className="tn-atom t-bgimg"
              >
                <GatsbyImage image={productImage1} alt="product image" />

              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2945765151616419383643 t-animate"
              data-elem-id="1616419383643"
              data-elem-type="button"
              data-field-top-value="457"
              data-field-top-res-960-value="418"
              data-field-top-res-640-value="418"
              data-field-top-res-480-value="765"
              data-field-top-res-320-value="820"
              data-field-left-value="20"
              data-field-left-res-960-value="20"
              data-field-left-res-640-value="20"
              data-field-left-res-480-value="10"
              data-field-left-res-320-value="10"
              data-field-height-value="64"
              data-field-height-res-640-value="58"
              data-field-height-res-480-value="56"
              data-field-height-res-320-value="56"
              data-field-width-value="200"
              data-field-width-res-640-value="230"
              data-field-width-res-480-value="460"
              data-field-width-res-320-value="300"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value=""
              data-animate-style="fadeinup"
              data-animate-duration="1"
              data-animate-delay="0.2"
              data-animate-distance="100"
            >
              <a
                className="tn-atom js-click-zero-stat"
                href="https://app.blend-ai.com/#/auth/ecommerce"
                target="_blank"
                data-tilda-event-name="/tilda/click/rec294576515/button1616419383643"
              >SIGN UP</a
              >
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2945765151616496480325 t-animate"
              data-elem-id="1616496480325"
              data-elem-type="shape"
              data-field-top-value="142"
              data-field-top-res-960-value="91"
              data-field-top-res-640-value="84"
              data-field-top-res-480-value="77"
              data-field-top-res-320-value="418"
              data-field-left-value="647"
              data-field-left-res-960-value="534"
              data-field-left-res-640-value="310"
              data-field-left-res-480-value="171"
              data-field-left-res-320-value="102"
              data-field-height-value="156"
              data-field-height-res-960-value="127"
              data-field-height-res-640-value="107"
              data-field-height-res-480-value="98"
              data-field-height-res-320-value="104"
              data-field-width-value="288"
              data-field-width-res-960-value="255"
              data-field-width-res-640-value="200"
              data-field-width-res-480-value="184"
              data-field-width-res-320-value="199"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value="px"
              data-field-widthunits-value="px"
              data-animate-style="fadein"
              data-animate-style-res-320="fadein"
              data-animate-duration="1"
              data-animate-delay="2"
              data-animate-mobile="y"
            >
              <div
                className="tn-atom t-bgimg"
              >
                <GatsbyImage image={productImage2} alt="product image" />

              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2945765151616496542381 t-animate"
              data-elem-id="1616496542381"
              data-elem-type="shape"
              data-field-top-value="501"
              data-field-top-res-960-value="449"
              data-field-top-res-640-value="550"
              data-field-top-res-480-value="468"
              data-field-top-res-320-value="484"
              data-field-left-value="522"
              data-field-left-res-960-value="425"
              data-field-left-res-640-value="303"
              data-field-left-res-480-value="129"
              data-field-left-res-320-value="110"
              data-field-height-value="91"
              data-field-height-res-960-value="85"
              data-field-height-res-640-value="68"
              data-field-height-res-480-value="64"
              data-field-width-value="140"
              data-field-width-res-960-value="126"
              data-field-width-res-640-value="96"
              data-field-width-res-480-value="92"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value="px"
              data-field-widthunits-value="px"
              data-animate-style="fadein"
              data-animate-style-res-320="fadein"
              data-animate-duration="1"
              data-animate-delay="2"
              data-animate-mobile="y"
            >
              <div
                className="tn-atom t-bgimg"
              >
                <GatsbyImage image={productImage2} alt="product image" />

              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2945765151616496562949 t-animate"
              data-elem-id="1616496562949"
              data-elem-type="shape"
              data-field-top-value="435"
              data-field-top-res-960-value="428"
              data-field-top-res-640-value="334"
              data-field-top-res-480-value="266"
              data-field-top-res-320-value="68"
              data-field-left-value="1026"
              data-field-left-res-960-value="861"
              data-field-left-res-640-value="539"
              data-field-left-res-480-value="338"
              data-field-left-res-320-value="19"
              data-field-height-value="200"
              data-field-height-res-960-value="181"
              data-field-height-res-640-value="115"
              data-field-height-res-480-value="140"
              data-field-height-res-320-value="132"
              data-field-width-value="198"
              data-field-width-res-960-value="182"
              data-field-width-res-640-value="120"
              data-field-width-res-480-value="144"
              data-field-width-res-320-value="134"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value="px"
              data-field-widthunits-value="px"
              data-animate-style="fadein"
              data-animate-style-res-320="fadein"
              data-animate-duration="1"
              data-animate-delay="2"
              data-animate-mobile="y"
            >
              <div
                className="tn-atom t-bgimg"
              >
                <GatsbyImage image={productImage2} alt="product image" />

              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2945765151616496605755 t-animate"
              data-elem-id="1616496605755"
              data-elem-type="shape"
              data-field-top-value="693"
              data-field-top-res-960-value="626"
              data-field-top-res-640-value="524"
              data-field-top-res-480-value="447"
              data-field-top-res-320-value="420"
              data-field-left-value="536"
              data-field-left-res-960-value="449"
              data-field-left-res-640-value="357"
              data-field-left-res-480-value="37"
              data-field-left-res-320-value="117"
              data-field-height-value="157"
              data-field-height-res-960-value="144"
              data-field-height-res-640-value="114"
              data-field-height-res-480-value="106"
              data-field-height-res-320-value="102"
              data-field-width-value="276"
              data-field-width-res-960-value="255"
              data-field-width-res-640-value="200"
              data-field-width-res-480-value="184"
              data-field-width-res-320-value="184"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value="px"
              data-field-widthunits-value="px"
              data-animate-style="fadein"
              data-animate-style-res-320="fadein"
              data-animate-duration="1"
              data-animate-delay="2"
              data-animate-delay-res-320="1.2"
              data-animate-mobile="y"
            >
              <div
                className="tn-atom t-bgimg"
              >
                <GatsbyImage image={productImage2} alt="product image" />

              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2945765151616506319528 t-animate"
              data-elem-id="1616506319528"
              data-elem-type="shape"
              data-field-top-value="435"
              data-field-top-res-960-value="428"
              data-field-top-res-640-value="334"
              data-field-top-res-480-value="266"
              data-field-top-res-320-value="68"
              data-field-left-value="1026"
              data-field-left-res-960-value="861"
              data-field-left-res-640-value="539"
              data-field-left-res-480-value="338"
              data-field-left-res-320-value="19"
              data-field-height-value="200"
              data-field-height-res-960-value="181"
              data-field-height-res-640-value="115"
              data-field-height-res-480-value="140"
              data-field-height-res-320-value="132"
              data-field-width-value="198"
              data-field-width-res-960-value="182"
              data-field-width-res-640-value="120"
              data-field-width-res-480-value="144"
              data-field-width-res-320-value="134"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value="px"
              data-field-widthunits-value="px"
              data-animate-style="fadein"
              data-animate-style-res-320="fadein"
              data-animate-duration="1"
              data-animate-delay="5"
              data-animate-mobile="y"
            >
              <div
                className="tn-atom t-bgimg"
              >
                <GatsbyImage image={productImage3} alt="product image" />

              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2945765151616506417742 t-animate"
              data-elem-id="1616506417742"
              data-elem-type="shape"
              data-field-top-value="142"
              data-field-top-res-960-value="91"
              data-field-top-res-640-value="84"
              data-field-top-res-480-value="77"
              data-field-top-res-320-value="418"
              data-field-left-value="647"
              data-field-left-res-960-value="534"
              data-field-left-res-640-value="310"
              data-field-left-res-480-value="171"
              data-field-left-res-320-value="102"
              data-field-height-value="156"
              data-field-height-res-960-value="127"
              data-field-height-res-640-value="107"
              data-field-height-res-480-value="98"
              data-field-height-res-320-value="104"
              data-field-width-value="288"
              data-field-width-res-960-value="255"
              data-field-width-res-640-value="200"
              data-field-width-res-480-value="184"
              data-field-width-res-320-value="199"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value="px"
              data-field-widthunits-value="px"
              data-animate-style="fadein"
              data-animate-style-res-320="fadein"
              data-animate-duration="1"
              data-animate-delay="5"
              data-animate-mobile="y"
            >
              <div
                className="tn-atom t-bgimg"
              >
                <GatsbyImage image={productImage3} alt="product image" />

              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2945765151616506845355 t-animate"
              data-elem-id="1616506845355"
              data-elem-type="shape"
              data-field-top-value="501"
              data-field-top-res-960-value="449"
              data-field-top-res-640-value="550"
              data-field-top-res-480-value="468"
              data-field-top-res-320-value="484"
              data-field-left-value="522"
              data-field-left-res-960-value="425"
              data-field-left-res-640-value="303"
              data-field-left-res-480-value="129"
              data-field-left-res-320-value="110"
              data-field-height-value="91"
              data-field-height-res-960-value="85"
              data-field-height-res-640-value="68"
              data-field-height-res-480-value="64"
              data-field-width-value="140"
              data-field-width-res-960-value="126"
              data-field-width-res-640-value="96"
              data-field-width-res-480-value="92"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value="px"
              data-field-widthunits-value="px"
              data-animate-style="fadein"
              data-animate-style-res-320="fadein"
              data-animate-duration="1"
              data-animate-delay="5"
              data-animate-mobile="y"
            >
              <div
                className="tn-atom t-bgimg"
              >
                <GatsbyImage image={productImage3} alt="product image" />

              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2945765151616506872278 t-animate"
              data-elem-id="1616506872278"
              data-elem-type="shape"
              data-field-top-value="693"
              data-field-top-res-960-value="626"
              data-field-top-res-640-value="524"
              data-field-top-res-480-value="447"
              data-field-top-res-320-value="420"
              data-field-left-value="536"
              data-field-left-res-960-value="449"
              data-field-left-res-640-value="357"
              data-field-left-res-480-value="37"
              data-field-left-res-320-value="117"
              data-field-height-value="157"
              data-field-height-res-960-value="144"
              data-field-height-res-640-value="114"
              data-field-height-res-480-value="106"
              data-field-height-res-320-value="102"
              data-field-width-value="276"
              data-field-width-res-960-value="255"
              data-field-width-res-640-value="200"
              data-field-width-res-480-value="184"
              data-field-width-res-320-value="184"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value="px"
              data-field-widthunits-value="px"
              data-animate-style="fadein"
              data-animate-style-res-320="fadein"
              data-animate-duration="1"
              data-animate-delay="5"
              data-animate-delay-res-320="2.2"
              data-animate-mobile="y"
            >
              <div
                className="tn-atom t-bgimg"
              >
                <GatsbyImage image={productImage3} alt="product image" />

              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2945765151616508491292 t-animate"
              data-elem-id="1616508491292"
              data-elem-type="shape"
              data-field-top-value="142"
              data-field-top-res-960-value="91"
              data-field-top-res-640-value="84"
              data-field-top-res-480-value="77"
              data-field-top-res-320-value="418"
              data-field-left-value="647"
              data-field-left-res-960-value="534"
              data-field-left-res-640-value="310"
              data-field-left-res-480-value="171"
              data-field-left-res-320-value="102"
              data-field-height-value="156"
              data-field-height-res-960-value="127"
              data-field-height-res-640-value="107"
              data-field-height-res-480-value="98"
              data-field-height-res-320-value="104"
              data-field-width-value="288"
              data-field-width-res-960-value="255"
              data-field-width-res-640-value="200"
              data-field-width-res-480-value="184"
              data-field-width-res-320-value="199"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value="px"
              data-field-widthunits-value="px"
              data-animate-style="fadein"
              data-animate-style-res-320="fadein"
              data-animate-duration="1"
              data-animate-delay="8"
              data-animate-mobile="y"
            >
              <div
                className="tn-atom t-bgimg"
              >
                <GatsbyImage image={productImage4} alt="product image" />

              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2945765151616508539364 t-animate"
              data-elem-id="1616508539364"
              data-elem-type="shape"
              data-field-top-value="139"
              data-field-top-res-960-value="119"
              data-field-top-res-640-value="85"
              data-field-top-res-480-value="98"
              data-field-top-res-320-value="93"
              data-field-left-value="602"
              data-field-left-res-960-value="472"
              data-field-left-res-640-value="287"
              data-field-left-res-480-value="57"
              data-field-left-res-320-value="26"
              data-field-height-value="634"
              data-field-height-res-960-value="621"
              data-field-height-res-640-value="458"
              data-field-height-res-480-value="386"
              data-field-height-res-320-value="364"
              data-field-width-value="517"
              data-field-width-res-960-value="479"
              data-field-width-res-640-value="329"
              data-field-width-res-480-value="354"
              data-field-width-res-320-value="269"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value="px"
              data-field-widthunits-value="px"
              data-animate-style="fadein"
              data-animate-duration="1"
              data-animate-delay="7"
              data-animate-mobile="y"
            >
              <div
                className="tn-atom t-bgimg"
              >
                <GatsbyImage image={mainImage} alt="main product" />
              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2945765151616508582576 t-animate"
              data-elem-id="1616508582576"
              data-elem-type="shape"
              data-field-top-value="435"
              data-field-top-res-960-value="428"
              data-field-top-res-640-value="334"
              data-field-top-res-480-value="266"
              data-field-top-res-320-value="68"
              data-field-left-value="1026"
              data-field-left-res-960-value="861"
              data-field-left-res-640-value="539"
              data-field-left-res-480-value="338"
              data-field-left-res-320-value="19"
              data-field-height-value="200"
              data-field-height-res-960-value="181"
              data-field-height-res-640-value="115"
              data-field-height-res-480-value="140"
              data-field-height-res-320-value="132"
              data-field-width-value="198"
              data-field-width-res-960-value="182"
              data-field-width-res-640-value="120"
              data-field-width-res-480-value="144"
              data-field-width-res-320-value="134"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value="px"
              data-field-widthunits-value="px"
              data-animate-style="fadein"
              data-animate-style-res-320="fadein"
              data-animate-duration="1"
              data-animate-delay="8"
              data-animate-mobile="y"
            >
              <div
                className="tn-atom t-bgimg"
              >
                <GatsbyImage image={productImage4} alt="product image" />

              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2945765151616508620151 t-animate"
              data-elem-id="1616508620151"
              data-elem-type="shape"
              data-field-top-value="693"
              data-field-top-res-960-value="626"
              data-field-top-res-640-value="524"
              data-field-top-res-480-value="447"
              data-field-top-res-320-value="420"
              data-field-left-value="536"
              data-field-left-res-960-value="449"
              data-field-left-res-640-value="357"
              data-field-left-res-480-value="37"
              data-field-left-res-320-value="117"
              data-field-height-value="157"
              data-field-height-res-960-value="144"
              data-field-height-res-640-value="114"
              data-field-height-res-480-value="106"
              data-field-height-res-320-value="102"
              data-field-width-value="276"
              data-field-width-res-960-value="255"
              data-field-width-res-640-value="200"
              data-field-width-res-480-value="184"
              data-field-width-res-320-value="184"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value="px"
              data-field-widthunits-value="px"
              data-animate-style="fadein"
              data-animate-style-res-320="fadein"
              data-animate-duration="1"
              data-animate-delay="8"
              data-animate-delay-res-320="3"
              data-animate-mobile="y"
            >
              <div
                className="tn-atom t-bgimg"
              >
                <GatsbyImage image={productImage4} alt="product image" />

              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2945765151616508666944 t-animate"
              data-elem-id="1616508666944"
              data-elem-type="shape"
              data-field-top-value="501"
              data-field-top-res-960-value="449"
              data-field-top-res-640-value="550"
              data-field-top-res-480-value="468"
              data-field-top-res-320-value="484"
              data-field-left-value="522"
              data-field-left-res-960-value="425"
              data-field-left-res-640-value="303"
              data-field-left-res-480-value="129"
              data-field-left-res-320-value="110"
              data-field-height-value="91"
              data-field-height-res-960-value="85"
              data-field-height-res-640-value="68"
              data-field-height-res-480-value="64"
              data-field-width-value="140"
              data-field-width-res-960-value="126"
              data-field-width-res-640-value="96"
              data-field-width-res-480-value="92"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value="px"
              data-field-widthunits-value="px"
              data-animate-style="fadein"
              data-animate-style-res-320="fadein"
              data-animate-duration="1"
              data-animate-delay="8"
              data-animate-mobile="y"
            >
              <div
                className="tn-atom t-bgimg"
              >
                <GatsbyImage image={productImage4} alt="product image" />

              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2945765151648638183416 t-animate"
              data-elem-id="1648638183416"
              data-elem-type="image"
              data-field-top-value="485"
              data-field-top-res-960-value="435"
              data-field-top-res-640-value="540"
              data-field-top-res-480-value="460"
              data-field-top-res-320-value="476"
              data-field-left-value="370"
              data-field-left-res-960-value="282"
              data-field-left-res-640-value="190"
              data-field-left-res-480-value="29"
              data-field-left-res-320-value="10"
              data-field-width-value="308"
              data-field-width-res-960-value="283"
              data-field-width-res-640-value="220"
              data-field-width-res-480-value="200"
              data-field-width-res-320-value="200"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="px"
              data-animate-style="fadeinright"
              data-animate-style-res-320="fadeinright"
              data-animate-duration="1"
              data-animate-delay="0.4"
              data-animate-distance="50"
              data-animate-mobile="y"
              data-field-filewidth-value="626"
              data-field-fileheight-value="250"
            >
              <div className="tn-atom">
                <img
                  className="tn-atom__img t-img"
                  data-original={GoogleMin}
                  src={GoogleMin}
                  imgfield="tn_img_1648638183416"
                />
              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2945765151648711868466 t-animate"
              data-elem-id="1648711868466"
              data-elem-type="shape"
              data-field-top-value="149px"
              data-field-top-res-960-value="129px"
              data-field-top-res-640-value="95px"
              data-field-top-res-480-value="108px"
              data-field-top-res-320-value="103px"
              data-field-left-value="612px"
              data-field-left-res-960-value="482px"
              data-field-left-res-640-value="297px"
              data-field-left-res-480-value="67px"
              data-field-left-res-320-value="36px"
              data-field-height-value="634"
              data-field-height-res-960-value="621"
              data-field-height-res-640-value="458"
              data-field-height-res-480-value="386"
              data-field-height-res-320-value="364"
              data-field-width-value="517"
              data-field-width-res-960-value="479"
              data-field-width-res-640-value="329"
              data-field-width-res-480-value="354"
              data-field-width-res-320-value="269"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value="px"
              data-field-widthunits-value="px"
              data-animate-style="fadein"
              data-animate-duration="1"
              data-animate-delay="7"
              data-animate-mobile="y"
            >
              <div
                className="tn-atom t-bgimg"
              >
                <GatsbyImage image={mainImage} alt="main product" />

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Intro
