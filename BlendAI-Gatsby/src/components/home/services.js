import React, { useEffect } from "react"

import ShopifyImg from "../../images/tild3763-6263-4138-b437-396561643236__shopify.png"
import MarapostImg from "../../images/tild3162-6339-4337-a363-636165623431__marapost.png"
import WoocommerceImg from "../../images/tild3561-3866-4163-b466-303031373737__woocommerce.png"
import "./services.css"

const Services = ({ data }) => {


  useEffect(() => {
    setTimeout(() => {
      const script = document.createElement("script")
      script.src =
        "tilda-blocks-2.7.js"
      let jqueryScript = document.getElementsByTagName("script")
      let src = Array.from(jqueryScript).filter(item => item.src === script.src)
      if (src.length === 0) {
        document.body.appendChild(script)
      }
      script.addEventListener("load", () => {
        // t396_init("225394903");
      })
    }, 500);
  }, [])

  return (
    <div id="services" className="services-container">
      {/* <div className="container">
      <h2>Ecommerce Platforms</h2>
      <div className="img-block">
        <img src={ShopifyImg} />
        <img src={MarapostImg} />
        <img src={WoocommerceImg} />
      </div>
      <div className="sevice-text">
        Blend connects to your store helping you measure the impact your ads are having on revenue.
      </div>
    </div> */}
      <div id="rec261087063" className="r t-rec" data-record-type="215">
        <a name="services" style={{ fontSize: 0 }}></a>
      </div>
      <div
        id="rec225410738"
        className="r t-rec t-rec_pt_0 t-rec_pb_0"
        style={{ paddingTop: "0px", paddingBottom: "0px"}}
      data-animationappear="off"
      data-record-type="396"
      >

      <div className="t396">
        <div
          className="t396__artboard"
          data-artboard-recid="225410738"
          data-artboard-height="900"
          data-artboard-height-res-960="780"
          data-artboard-height-res-640="610"
          data-artboard-height-res-480="1200"
          data-artboard-height-res-320="1130"
          data-artboard-height_vh=""
          data-artboard-valign="center"
          data-artboard-upscale="grid"
          data-artboard-ovrflw=""
        >
          <div className="t396__carrier" data-artboard-recid="225410738"></div>
          <div className="t396__filter" data-artboard-recid="225410738"></div>
          <div
            className="t396__elem tn-elem tn-elem__2254107381598875497653"
            data-elem-id="1598875497653"
            data-elem-type="text"
            data-field-top-value="555"
            data-field-top-res-960-value="505"
            data-field-top-res-640-value="350"
            data-field-top-res-480-value="970"
            data-field-top-res-320-value="872"
            data-field-left-value="420"
            data-field-left-res-960-value="330"
            data-field-left-res-640-value="220"
            data-field-left-res-480-value="60"
            data-field-left-res-320-value="10"
            data-field-width-value="692"
            data-field-width-res-960-value="620"
            data-field-width-res-640-value="410"
            data-field-width-res-480-value="360"
            data-field-width-res-320-value="300"
            data-field-axisy-value="top"
            data-field-axisx-value="left"
            data-field-container-value="grid"
            data-field-topunits-value="px"
            data-field-leftunits-value="px"
            data-field-heightunits-value=""
            data-field-widthunits-value="px"
          >
            <div className="tn-atom" field="tn_text_1598875497653">
              Blend connects to your store helping you measure the impact your
              ads are having on revenue.
            </div>
          </div>
          <div
            className="t396__elem tn-elem tn-elem__2254107381598875645951"
            data-elem-id="1598875645951"
            data-elem-type="image"
            data-field-top-value="235"
            data-field-top-res-960-value="235"
            data-field-top-res-640-value="175"
            data-field-top-res-480-value="140"
            data-field-top-res-320-value="166"
            data-field-left-value="20"
            data-field-left-res-960-value="10"
            data-field-left-res-640-value="10"
            data-field-left-res-480-value="59"
            data-field-left-res-320-value="10"
            data-field-width-value="362"
            data-field-width-res-960-value="300"
            data-field-width-res-640-value="200"
            data-field-width-res-480-value="362"
            data-field-width-res-320-value="300"
            data-field-axisy-value="top"
            data-field-axisx-value="left"
            data-field-container-value="grid"
            data-field-topunits-value="px"
            data-field-leftunits-value="px"
            data-field-heightunits-value=""
            data-field-widthunits-value="px"
            data-field-filewidth-value="724"
            data-field-fileheight-value="508"
          >
            <div className="tn-atom">
              <img
                className="tn-atom__img t-img"
                data-original={ShopifyImg}
                src={ShopifyImg}
                imgfield="tn_img_1598875645951"
              />
            </div>
          </div>
          <div
            className="t396__elem tn-elem tn-elem__2254107381598875671311"
            data-elem-id="1598875671311"
            data-elem-type="image"
            data-field-top-value="235"
            data-field-top-res-960-value="235"
            data-field-top-res-640-value="175"
            data-field-top-res-480-value="414"
            data-field-top-res-320-value="392"
            data-field-left-value="419"
            data-field-left-res-960-value="330"
            data-field-left-res-640-value="220"
            data-field-left-res-480-value="60"
            data-field-left-res-320-value="10"
            data-field-width-value="362"
            data-field-width-res-960-value="300"
            data-field-width-res-640-value="200"
            data-field-width-res-480-value="362"
            data-field-width-res-320-value="300"
            data-field-axisy-value="top"
            data-field-axisx-value="left"
            data-field-container-value="grid"
            data-field-topunits-value="px"
            data-field-leftunits-value="px"
            data-field-heightunits-value=""
            data-field-widthunits-value="px"
            data-field-filewidth-value="724"
            data-field-fileheight-value="508"
          >
            <div className="tn-atom">
              <img
                className="tn-atom__img t-img"
                data-original={MarapostImg}
                src={MarapostImg}
                imgfield="tn_img_1598875671311"
              />
            </div>
          </div>
          <div
            className="t396__elem tn-elem tn-elem__2254107381598875683272"
            data-elem-id="1598875683272"
            data-elem-type="image"
            data-field-top-value="235"
            data-field-top-res-960-value="235"
            data-field-top-res-640-value="175"
            data-field-top-res-480-value="688"
            data-field-top-res-320-value="618"
            data-field-left-value="819"
            data-field-left-res-960-value="650"
            data-field-left-res-640-value="430"
            data-field-left-res-480-value="60"
            data-field-left-res-320-value="10"
            data-field-width-value="362"
            data-field-width-res-960-value="300"
            data-field-width-res-640-value="200"
            data-field-width-res-480-value="362"
            data-field-width-res-320-value="300"
            data-field-axisy-value="top"
            data-field-axisx-value="left"
            data-field-container-value="grid"
            data-field-topunits-value="px"
            data-field-leftunits-value="px"
            data-field-heightunits-value=""
            data-field-widthunits-value="px"
            data-field-filewidth-value="724"
            data-field-fileheight-value="508"
          >
            <div className="tn-atom">
              <img
                className="tn-atom__img t-img"
                data-original={WoocommerceImg}
                src={WoocommerceImg}
                imgfield="tn_img_1598875683272"
              />
            </div>
          </div>
          <div
            className="t396__elem tn-elem tn-elem__2254107381599233670935"
            data-elem-id="1599233670935"
            data-elem-type="text"
            data-field-top-value="140"
            data-field-top-res-960-value="140"
            data-field-top-res-640-value="80"
            data-field-top-res-480-value="60"
            data-field-top-res-320-value="60"
            data-field-left-value="21"
            data-field-left-res-960-value="10"
            data-field-left-res-640-value="90"
            data-field-left-res-480-value="30"
            data-field-left-res-320-value="11"
            data-field-width-value="371"
            data-field-width-res-320-value="280"
            data-field-axisy-value="top"
            data-field-axisx-value="left"
            data-field-container-value="grid"
            data-field-topunits-value="px"
            data-field-leftunits-value="px"
            data-field-heightunits-value=""
            data-field-widthunits-value="px"
          >
            <h2 className="tn-atom" field="tn_text_1599233670935">
              Ecommerce Platforms
            </h2>
          </div>
        </div>
      </div>
      <script>
        $(document).ready(function () {
          // t396_init("225410738")
        });
      </script>
    </div>
    </div >
  )
}

export default Services
