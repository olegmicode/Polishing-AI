import React from "react"
import BlockContent from "@sanity/block-content-to-react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import "./productFeed.css"

const ProductFeed = ({ data }) => {
  const text = data.text
  const blockText = data.blockText
  const productImages = data.productImages
  const adImages = data.adImages
  const GroupArrow = getImage(data.groupArrowImage.asset)

  return (
    <div id="productfeed" className="productfeed-container">

      {/* <div id="rec261087265" className="r t-rec" data-record-type="215">
        <a name="productfeed" style={{ fontSize: "0" }}></a>
      </div> */}
      <div
        id="rec279166044"
        className="r t-rec"
        data-animationappear="off"
        data-record-type="396"
      >

        <div className="t396">
          <div
            className="t396__artboard"
            data-artboard-recid="279166044"
            data-artboard-height="810"
            data-artboard-height-res-960="670"
            data-artboard-height-res-640="1010"
            data-artboard-height-res-480="960"
            data-artboard-height-res-320="870"
            data-artboard-height_vh=""
            data-artboard-valign="center"
            data-artboard-upscale=""
            data-artboard-ovrflw="visible"
          >
            <div className="t396__carrier" data-artboard-recid="279166044"></div>
            <div className="t396__filter" data-artboard-recid="279166044"></div>
            <div
              className="t396__elem tn-elem tn-elem__2791660441598884642155"
              data-elem-id="1598884642155"
              data-elem-type="text"
              data-field-top-value="187"
              data-field-top-res-960-value="165"
              data-field-top-res-640-value="110"
              data-field-top-res-480-value="91"
              data-field-top-res-320-value="90"
              data-field-left-value="720"
              data-field-left-res-960-value="570"
              data-field-left-res-640-value="92"
              data-field-left-res-480-value="10"
              data-field-left-res-320-value="10"
              data-field-width-value="400"
              data-field-width-res-960-value="320"
              data-field-width-res-640-value="360"
              data-field-width-res-320-value="300"
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
              className="t396__elem tn-elem tn-elem__2791660441598884642164"
              data-elem-id="1598884642164"
              data-elem-type="text"
              data-field-top-value="250"
              data-field-top-res-960-value="235"
              data-field-top-res-640-value="173"
              data-field-top-res-480-value="144"
              data-field-top-res-320-value="143"
              data-field-left-value="720"
              data-field-left-res-960-value="570"
              data-field-left-res-640-value="91"
              data-field-left-res-480-value="10"
              data-field-left-res-320-value="10"
              data-field-width-value="400"
              data-field-width-res-960-value="380"
              data-field-width-res-640-value="480"
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
              className="t396__elem tn-elem tn-elem__2791660441616584424277 t-animate"
              data-elem-id="1616584424277"
              data-elem-type="image"
              data-field-top-value="89"
              data-field-top-res-960-value="90"
              data-field-top-res-640-value="460"
              data-field-top-res-480-value="430"
              data-field-top-res-320-value="470"
              data-field-left-value="123"
              data-field-left-res-960-value="94"
              data-field-left-res-640-value="126"
              data-field-left-res-480-value="52"
              data-field-left-res-320-value="18"
              data-field-width-value="140"
              data-field-width-res-960-value="120"
              data-field-width-res-320-value="90"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="px"
              data-animate-style="fadein"
              data-animate-duration="1"
              data-field-filewidth-value="282"
              data-field-fileheight-value="328"
            >
              <div className="tn-atom">
                
                <GatsbyImage image={getImage(productImages[0].asset)} alt="product image" />

              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2791660441616584459787 t-animate"
              data-elem-id="1616584459787"
              data-elem-type="image"
              data-field-top-value="89"
              data-field-top-res-960-value="90"
              data-field-top-res-640-value="460"
              data-field-top-res-480-value="430"
              data-field-top-res-320-value="470"
              data-field-left-value="420"
              data-field-left-res-960-value="350"
              data-field-left-res-640-value="380"
              data-field-left-res-480-value="305"
              data-field-left-res-320-value="214"
              data-field-width-value="140"
              data-field-width-res-960-value="120"
              data-field-width-res-320-value="90"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="px"
              data-animate-style="fadein"
              data-animate-duration="1"
              data-animate-delay="0.4"
              data-field-filewidth-value="282"
              data-field-fileheight-value="328"
            >
              <div className="tn-atom">
                
                <GatsbyImage image={getImage(productImages[1].asset)} alt="product image" />

              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2791660441616584463076 t-animate"
              data-elem-id="1616584463076"
              data-elem-type="image"
              data-field-top-value="89"
              data-field-top-res-960-value="90"
              data-field-top-res-640-value="460"
              data-field-top-res-480-value="430"
              data-field-top-res-320-value="470"
              data-field-left-value="271"
              data-field-left-res-960-value="222"
              data-field-left-res-640-value="254"
              data-field-left-res-480-value="180"
              data-field-left-res-320-value="116"
              data-field-width-value="140"
              data-field-width-res-960-value="120"
              data-field-width-res-320-value="90"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="px"
              data-animate-style="fadein"
              data-animate-duration="1"
              data-animate-delay="0.2"
              data-field-filewidth-value="282"
              data-field-fileheight-value="328"
            >
              <div className="tn-atom">
                
                <GatsbyImage image={getImage(productImages[2].asset)} alt="product image" />

              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2791660441616584796737 t-animate"
              data-elem-id="1616584796737"
              data-elem-type="image"
              data-field-top-value="335"
              data-field-top-res-960-value="299"
              data-field-top-res-640-value="669"
              data-field-top-res-480-value="637"
              data-field-top-res-320-value="636"
              data-field-left-value="17"
              data-field-left-res-960-value="35"
              data-field-left-res-640-value="67"
              data-field-left-res-480-value="-7"
              data-field-left-res-320-value="-2"
              data-field-width-value="558"
              data-field-width-res-960-value="400"
              data-field-width-res-320-value="260"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="px"
              data-animate-style="fadeinup"
              data-animate-duration="1"
              data-animate-delay="0.6"
              data-animate-distance="100"
              data-field-filewidth-value="1116"
              data-field-fileheight-value="658"
            >
              <div className="tn-atom">
                
                <GatsbyImage image={getImage(adImages[0].asset)} alt="product image" />

              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2791660441616584822421 t-animate"
              data-elem-id="1616584822421"
              data-elem-type="image"
              data-field-top-value="369"
              data-field-top-res-960-value="330"
              data-field-top-res-640-value="700"
              data-field-top-res-480-value="668"
              data-field-top-res-320-value="656"
              data-field-left-value="90"
              data-field-left-res-960-value="82"
              data-field-left-res-640-value="114"
              data-field-left-res-480-value="40"
              data-field-left-res-320-value="31"
              data-field-width-value="558"
              data-field-width-res-960-value="400"
              data-field-width-res-320-value="260"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="px"
              data-animate-style="fadeinup"
              data-animate-duration="1"
              data-animate-delay="0.8"
              data-animate-distance="100"
              data-field-filewidth-value="1116"
              data-field-fileheight-value="658"
            >
              <div className="tn-atom">
               
                <GatsbyImage image={getImage(adImages[1].asset)} alt="product image" />
              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2791660441616584855982 t-animate"
              data-elem-id="1616584855982"
              data-elem-type="image"
              data-field-top-value="405"
              data-field-top-res-960-value="365"
              data-field-top-res-640-value="735"
              data-field-top-res-480-value="703"
              data-field-top-res-320-value="674"
              data-field-left-value="160"
              data-field-left-res-960-value="132"
              data-field-left-res-640-value="164"
              data-field-left-res-480-value="90"
              data-field-left-res-320-value="65"
              data-field-width-value="558"
              data-field-width-res-960-value="400"
              data-field-width-res-320-value="260"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="px"
              data-animate-style="fadeinup"
              data-animate-duration="1"
              data-animate-delay="1"
              data-animate-distance="100"
              data-field-filewidth-value="1116"
              data-field-fileheight-value="658"
            >
              <div className="tn-atom">
              
                <GatsbyImage image={getImage(adImages[2].asset)} alt="product image" />
              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2791660441616584925547 t-animate"
              data-elem-id="1616584925547"
              data-elem-type="image"
              data-field-top-value="259"
              data-field-top-res-960-value="236"
              data-field-top-res-640-value="606"
              data-field-top-res-480-value="576"
              data-field-top-res-320-value="580"
              data-field-left-value="180"
              data-field-left-res-960-value="151"
              data-field-left-res-640-value="183"
              data-field-left-res-480-value="109"
              data-field-left-res-320-value="60"
              data-field-width-value="310"
              data-field-width-res-960-value="260"
              data-field-width-res-320-value="200"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="px"
              data-animate-style="fadeindown"
              data-animate-duration="1"
              data-animate-delay="1.2"
              data-animate-distance="100"
              data-field-filewidth-value="613"
              data-field-fileheight-value="161"
            >
              <div className="tn-atom">

                <GatsbyImage image={GroupArrow} alt="GroupArrow image" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductFeed
