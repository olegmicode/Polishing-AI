import React from "react"
import BlockContent from "@sanity/block-content-to-react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import "./mngaudiences.css"

const MngAudiences = ({ data }) => {

  const Character1min = getImage(data.character1minImage.asset)
  const Vector4 = getImage(data.vector4Image.asset)

  return (
    <div id="mngaudience" className="mngaudiences-container">
      <div
        id="rec225458528"
        className="r t-rec"
        data-animationappear="off"
        data-record-type="396"
      >
        <div className="t396">
          <div
            className="t396__artboard"
            data-artboard-recid="225458528"
            data-artboard-height="930"
            data-artboard-height-res-960="750"
            data-artboard-height-res-640="1080"
            data-artboard-height-res-480="1050"
            data-artboard-height-res-320="1030"
            data-artboard-height_vh=""
            data-artboard-valign="center"
            data-artboard-upscale=""
            data-artboard-ovrflw="visible"
          >
            <div className="t396__carrier" data-artboard-recid="225458528"></div>
            <div className="t396__filter" data-artboard-recid="225458528"></div>
            <div
              className="t396__elem tn-elem tn-elem__2254585281598881632905"
              data-elem-id="1598881632905"
              data-elem-type="text"
              data-field-top-value="285"
              data-field-top-res-960-value="230"
              data-field-top-res-640-value="136"
              data-field-top-res-480-value="137"
              data-field-top-res-320-value="135"
              data-field-left-value="21"
              data-field-left-res-960-value="21"
              data-field-left-res-640-value="91"
              data-field-left-res-480-value="11"
              data-field-left-res-320-value="11"
              data-field-width-value="360"
              data-field-width-res-320-value="280"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="px"
            >
              <h2 className="tn-atom" field="tn_text_1598881632905">
                {data.text}
              </h2>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2254585281598881632912"
              data-elem-id="1598881632912"
              data-elem-type="text"
              data-field-top-value="344"
              data-field-top-res-960-value="289"
              data-field-top-res-640-value="195"
              data-field-top-res-480-value="194"
              data-field-top-res-320-value="188"
              data-field-left-value="20"
              data-field-left-res-960-value="20"
              data-field-left-res-640-value="90"
              data-field-left-res-480-value="10"
              data-field-left-res-320-value="10"
              data-field-width-value="350"
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
              <div className="tn-atom" field="tn_text_1598881632912">
                <BlockContent
                  blocks={data.blockText}
                />
              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2254585281598881632918"
              data-elem-id="1598881632918"
              data-elem-type="text"
              data-field-top-value="230"
              data-field-top-res-960-value="175"
              data-field-top-res-640-value="81"
              data-field-top-res-480-value="82"
              data-field-top-res-320-value="80"
              data-field-left-value="20"
              data-field-left-res-960-value="20"
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
              <div className="tn-atom" field="tn_text_1598881632918">Step 2.</div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2254585281598881821815"
              data-elem-id="1598881821815"
              data-elem-type="image"
              data-field-top-value="195"
              data-field-top-res-960-value="105"
              data-field-top-res-640-value="465"
              data-field-top-res-480-value="465"
              data-field-top-res-320-value="500"
              data-field-left-value="220"
              data-field-left-res-960-value="170"
              data-field-left-res-640-value="-141"
              data-field-left-res-480-value="-181"
              data-field-left-res-320-value="-240"
              data-field-width-value="510"
              data-field-width-res-960-value="480"
              data-field-width-res-640-value="460"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="px"
              data-field-filewidth-value="1022"
              data-field-fileheight-value="1011"
            >
              <div className="tn-atom">

                <GatsbyImage image={Character1min} alt="Character image" />

              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2254585281598881868732"
              data-elem-id="1598881868732"
              data-elem-type="text"
              data-field-top-value="615"
              data-field-top-res-960-value="460"
              data-field-top-res-640-value="810"
              data-field-top-res-480-value="810"
              data-field-top-res-320-value="870"
              data-field-left-value="720"
              data-field-left-res-960-value="650"
              data-field-left-res-640-value="310"
              data-field-left-res-480-value="220"
              data-field-left-res-320-value="90"
              data-field-width-value="300"
              data-field-width-res-960-value="250"
              data-field-width-res-320-value="180"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="px"
            >
              <div className="tn-atom" field="tn_text_1598881868732">
                {data.bottomText}
              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2254585281598881901954"
              data-elem-id="1598881901954"
              data-elem-type="image"
              data-field-top-value="69"
              data-field-top-res-960-value="-45"
              data-field-top-res-640-value="635"
              data-field-top-res-480-value="635"
              data-field-top-res-320-value="645"
              data-field-left-value="822"
              data-field-left-res-960-value="621"
              data-field-left-res-640-value="770"
              data-field-left-res-480-value="760"
              data-field-left-res-320-value="770"
              data-field-width-value="300"
              data-field-width-res-640-value="220"
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
              data-animate-sbs-opts="[{'ti':'0','mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'','dt':'0'},{'ti':0,'mx':0,'my':-142,'sx':'1','sy':'1','op':0,'ro':'0','bl':'0','ea':'','dt':'0'},{'ti':900,'mx':0,'my':0,'sx':'1','sy':'1','op':1,'ro':'0','bl':'0','ea':'easeInOut','dt':1300}]"
              data-field-filewidth-value="462"
              data-field-fileheight-value="373"
            >
              <div className="tn-atom" style={{ width: "300px" }}>

                <GatsbyImage image={getImage(data.cardImage.asset)} alt="product image" />

              </div>
            </div>
            {/* start */}

            <div className="t396__elem tn-elem tn-elem__2254585281599128751436" data-elem-id="1599128751436" data-elem-type="shape" data-field-top-value="297" data-field-top-res-960-value="192" data-field-top-res-640-value="547" data-field-top-res-480-value="547" data-field-top-res-320-value="582" data-field-left-value="653" data-field-left-res-960-value="592" data-field-left-res-640-value="262" data-field-left-res-480-value="222" data-field-left-res-320-value="40" data-field-height-value="19" data-field-height-res-960-value="19" data-field-height-res-640-value="19" data-field-height-res-480-value="19" data-field-height-res-320-value="19" data-field-width-value="318" data-field-width-res-960-value="183" data-field-width-res-640-value="240" data-field-width-res-480-value="189" data-field-width-res-320-value="131" data-field-axisy-value="top" data-field-axisx-value="left" data-field-container-value="grid" data-field-topunits-value="px" data-field-leftunits-value="px" data-field-heightunits-value="px" data-field-widthunits-value="px" data-animate-sbs-event="blockintoview" data-animate-sbs-trg="0.5" data-animate-sbs-trgofst="0" data-animate-sbs-opts="[{'ti':'0','mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'','dt':'0'},{'ti':500,'mx':0,'my':0,'sx':1,'sy':'1','op':'1','ro':'0','bl':'0','ea':'easeInOut','dt':0},{'ti':500,'mx':57,'my':0,'sx':1.4,'sy':'1','op':'1','ro':'0','bl':'0','ea':'easeInOut','dt':0},{'ti':800,'mx':0,'my':0,'sx':1,'sy':'1','op':'1','ro':'0','bl':'0','ea':'easeInOut','dt':0}]"><div className="tn-atom__sbs-anim-wrapper" style={{ display: "table", width: "inherit", height: "inherit" }}>
              <div className="tn-atom">
              </div>
            </div>
            </div>
            <div className="t396__elem tn-elem tn-elem__2254585281599128846931" data-elem-id="1599128846931" data-elem-type="shape" data-field-top-value="286" data-field-top-res-960-value="181" data-field-top-res-640-value="538" data-field-top-res-480-value="538" data-field-top-res-320-value="573" data-field-left-value="951" data-field-left-res-960-value="752" data-field-left-res-640-value="477" data-field-left-res-480-value="393" data-field-left-res-320-value="147" data-field-height-value="41" data-field-height-res-640-value="36" data-field-width-value="41" data-field-width-res-640-value="36" data-field-axisy-value="top" data-field-axisx-value="left" data-field-container-value="grid" data-field-topunits-value="px" data-field-leftunits-value="px" data-field-heightunits-value="px" data-field-widthunits-value="px" data-animate-sbs-event="blockintoview" data-animate-sbs-trg="0.5" data-animate-sbs-trgofst="0" data-animate-sbs-opts="[{'ti':'0','mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'','dt':'0'},{'ti':500,'mx':0,'my':0,'sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'easeInOut','dt':'0'},{'ti':500,'mx':108,'my':0,'sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'easeInOut','dt':'0'},{'ti':800,'mx':0,'my':0,'sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'easeInOut','dt':'0'}]"><div className="tn-atom__sbs-anim-wrapper" style={{ display: "table", width: "inherit", height: "inherit" }}><div className="tn-atom"></div></div></div>

            <div className="t396__elem tn-elem tn-elem__2254585281599128915541" data-elem-id="1599128915541" data-elem-type="shape" data-field-top-value="354" data-field-top-res-960-value="254" data-field-top-res-640-value="609" data-field-top-res-480-value="609" data-field-top-res-320-value="644" data-field-left-value="672" data-field-left-res-960-value="596" data-field-left-res-640-value="266" data-field-left-res-480-value="226" data-field-left-res-320-value="167" data-field-height-value="41" data-field-height-res-640-value="36" data-field-width-value="41" data-field-width-res-640-value="36" data-field-axisy-value="top" data-field-axisx-value="left" data-field-container-value="grid" data-field-topunits-value="px" data-field-leftunits-value="px" data-field-heightunits-value="px" data-field-widthunits-value="px"><div className="tn-atom"></div></div>

            <div className="t396__elem tn-elem tn-elem__2254585281599129069793" data-elem-id="1599129069793" data-elem-type="shape" data-field-top-value="433" data-field-top-res-960-value="328" data-field-top-res-640-value="683" data-field-top-res-480-value="683" data-field-top-res-320-value="718" data-field-left-value="650" data-field-left-res-960-value="590" data-field-left-res-640-value="260" data-field-left-res-480-value="220" data-field-left-res-320-value="38" data-field-height-value="19" data-field-width-value="127" data-field-axisy-value="top" data-field-axisx-value="left" data-field-container-value="grid" data-field-topunits-value="px" data-field-leftunits-value="px" data-field-heightunits-value="px" data-field-widthunits-value="px" data-animate-sbs-event="blockintoview" data-animate-sbs-trg="0.5" data-animate-sbs-trgofst="0" data-animate-sbs-opts="[{'ti':'0','mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'','dt':'0'},{'ti':400,'mx':0,'my':0,'sx':1,'sy':'1','op':'1','ro':'0','bl':'0','ea':'easeInOut','dt':0},{'ti':700,'mx':88,'my':0,'sx':2.4,'sy':'1','op':'1','ro':'0','bl':'0','ea':'easeInOut','dt':0},{'ti':'1000','mx':0,'my':0,'sx':1,'sy':'1','op':'1','ro':'0','bl':'0','ea':'easeInOut','dt':0}]"><div className="tn-atom__sbs-anim-wrapper" style={{ display: "table", width: "inherit", height: "inherit" }}><div className="tn-atom"></div></div></div>

            <div className="t396__elem tn-elem tn-elem__2254585281599129080163" data-elem-id="1599129080163" data-elem-type="shape" data-field-top-value="422" data-field-top-res-960-value="317" data-field-top-res-640-value="674" data-field-top-res-480-value="674" data-field-top-res-320-value="709" data-field-left-value="750" data-field-left-res-960-value="690" data-field-left-res-640-value="360" data-field-left-res-480-value="320" data-field-left-res-320-value="138" data-field-height-value="41" data-field-height-res-640-value="36" data-field-width-value="41" data-field-width-res-640-value="36" data-field-axisy-value="top" data-field-axisx-value="left" data-field-container-value="grid" data-field-topunits-value="px" data-field-leftunits-value="px" data-field-heightunits-value="px" data-field-widthunits-value="px" data-animate-sbs-event="blockintoview" data-animate-sbs-trg="0.5" data-animate-sbs-trgofst="0" data-animate-sbs-opts="[{'ti':'0','mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'','dt':'0'},{'ti':600,'mx':170,'my':0,'sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'easeInOut','dt':400},{'ti':1200,'mx':0,'my':0,'sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'easeInOut','dt':'0'}]"><div className="tn-atom__sbs-anim-wrapper" style={{ display: "table", width: "inherit", height: "inherit" }}><div className="tn-atom"></div></div></div>

            <div className="t396__elem tn-elem tn-elem__2254585281599129137517" data-elem-id="1599129137517" data-elem-type="shape" data-field-top-value="501" data-field-top-res-960-value="396" data-field-top-res-640-value="751" data-field-top-res-480-value="751" data-field-top-res-320-value="786" data-field-left-value="650" data-field-left-res-960-value="590" data-field-left-res-640-value="260" data-field-left-res-480-value="220" data-field-left-res-320-value="39" data-field-height-value="19" data-field-height-res-480-value="19" data-field-height-res-320-value="19" data-field-width-value="44" data-field-width-res-480-value="65" data-field-width-res-320-value="199" data-field-axisy-value="top" data-field-axisx-value="left" data-field-container-value="grid" data-field-topunits-value="px" data-field-leftunits-value="px" data-field-heightunits-value="px" data-field-widthunits-value="px" data-animate-sbs-event="blockintoview" data-animate-sbs-trg="0.5" data-animate-sbs-trgofst="0" data-animate-sbs-opts="[{'ti':'0','mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'','dt':'0'},{'ti':0,'mx':0,'my':0,'sx':1,'sy':'1','op':'1','ro':'0','bl':'0','ea':'','dt':0},{'ti':800,'mx':127,'my':0,'sx':7,'sy':'1','op':'1','ro':'0','bl':'0','ea':'easeInOut','dt':0},{'ti':1000,'mx':0,'my':0,'sx':1,'sy':'1','op':'1','ro':'0','bl':'0','ea':'easeInOut','dt':0}]"><div className="tn-atom__sbs-anim-wrapper" style={{ display: "table", width: "inherit", height: "inherit" }}><div className="tn-atom"></div></div></div>

            <div className="t396__elem tn-elem tn-elem__2254585281599129151818" data-elem-id="1599129151818" data-elem-type="shape" data-field-top-value="492" data-field-top-res-960-value="387" data-field-top-res-640-value="742" data-field-top-res-480-value="742" data-field-top-res-320-value="776" data-field-left-value="677" data-field-left-res-960-value="617" data-field-left-res-640-value="287" data-field-left-res-480-value="270" data-field-left-res-320-value="225" data-field-height-value="41" data-field-height-res-640-value="36" data-field-width-value="41" data-field-width-res-640-value="36" data-field-axisy-value="top" data-field-axisx-value="left" data-field-container-value="grid" data-field-topunits-value="px" data-field-leftunits-value="px" data-field-heightunits-value="px" data-field-widthunits-value="px" data-animate-sbs-event="blockintoview" data-animate-sbs-trg="0.5" data-animate-sbs-trgofst="0" data-animate-sbs-opts="[{'ti':'0','mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'','dt':'0'},{'ti':0,'mx':0,'my':0,'sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'easeInOut','dt':0},{'ti':800,'mx':233,'my':0,'sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'easeInOut','dt':0},{'ti':1000,'mx':0,'my':0,'sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'easeInOut','dt':0}]"><div className="tn-atom__sbs-anim-wrapper" style={{ display: "table", width: "inherit", height: "inherit" }}><div className="tn-atom"></div></div></div>

            <div className="t396__elem tn-elem tn-elem__2254585281599129163876" data-elem-id="1599129163876" data-elem-type="shape" data-field-top-value="297" data-field-top-res-960-value="192" data-field-top-res-640-value="547" data-field-top-res-480-value="547" data-field-top-res-320-value="582" data-field-left-value="652" data-field-left-res-960-value="592" data-field-left-res-640-value="262" data-field-left-res-480-value="222" data-field-left-res-320-value="40" data-field-height-value="19" data-field-height-res-960-value="19" data-field-height-res-480-value="19" data-field-height-res-320-value="19" data-field-width-value="405" data-field-width-res-960-value="260" data-field-width-res-640-value="280" data-field-width-res-480-value="248" data-field-width-res-320-value="270" data-field-axisy-value="top" data-field-axisx-value="left" data-field-container-value="grid" data-field-topunits-value="px" data-field-leftunits-value="px" data-field-heightunits-value="px" data-field-widthunits-value="px"><div className="tn-atom"></div></div>

            <div className="t396__elem tn-elem tn-elem__2254585281599129275299" data-elem-id="1599129275299" data-elem-type="shape" data-field-top-value="364" data-field-top-res-960-value="259" data-field-top-res-640-value="614" data-field-top-res-480-value="614" data-field-top-res-320-value="649" data-field-left-value="652" data-field-left-res-960-value="592" data-field-left-res-640-value="262" data-field-left-res-480-value="222" data-field-left-res-320-value="62" data-field-height-value="19" data-field-height-res-960-value="19" data-field-width-value="405" data-field-width-res-960-value="260" data-field-width-res-640-value="280" data-field-width-res-480-value="248" data-field-axisy-value="top" data-field-axisx-value="left" data-field-container-value="grid" data-field-topunits-value="px" data-field-leftunits-value="px" data-field-heightunits-value="px" data-field-widthunits-value="px"><div className="tn-atom"></div></div>

            <div className="t396__elem tn-elem tn-elem__2254585281599129311832" data-elem-id="1599129311832" data-elem-type="shape" data-field-top-value="433" data-field-top-res-960-value="328" data-field-top-res-640-value="683" data-field-top-res-480-value="683" data-field-top-res-320-value="718" data-field-left-value="650" data-field-left-res-960-value="590" data-field-left-res-640-value="260" data-field-left-res-480-value="220" data-field-left-res-320-value="62" data-field-height-value="19" data-field-width-value="405" data-field-width-res-960-value="260" data-field-width-res-640-value="280" data-field-width-res-480-value="248" data-field-axisy-value="top" data-field-axisx-value="left" data-field-container-value="grid" data-field-topunits-value="px" data-field-leftunits-value="px" data-field-heightunits-value="px" data-field-widthunits-value="px"><div className="tn-atom"></div></div>

            <div className="t396__elem tn-elem tn-elem__2254585281599129321909" data-elem-id="1599129321909" data-elem-type="shape" data-field-top-value="501" data-field-top-res-960-value="396" data-field-top-res-640-value="751" data-field-top-res-480-value="751" data-field-top-res-320-value="786" data-field-left-value="650" data-field-left-res-960-value="590" data-field-left-res-640-value="260" data-field-left-res-480-value="220" data-field-left-res-320-value="62" data-field-height-value="19" data-field-width-value="405" data-field-width-res-960-value="260" data-field-width-res-640-value="280" data-field-width-res-480-value="248" data-field-axisy-value="top" data-field-axisx-value="left" data-field-container-value="grid" data-field-topunits-value="px" data-field-leftunits-value="px" data-field-heightunits-value="px" data-field-widthunits-value="px"><div className="tn-atom"></div></div>

            {/* end */}
            <div className="mng-btn-signup-block">
              <a className="btn-signup" href="https://app.blend-ai.com/#/auth/shopify">
                SIGN UP
              </a>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2254585281599143926500"
              data-elem-id="1599143926500"
              data-elem-type="text"
              data-field-top-value="290"
              data-field-top-res-960-value="190"
              data-field-top-res-640-value="545"
              data-field-top-res-480-value="523"
              data-field-top-res-320-value="558"
              data-field-left-value="1070"
              data-field-left-res-960-value="860"
              data-field-left-res-640-value="554"
              data-field-left-res-480-value="220"
              data-field-left-res-320-value="230"
              data-field-width-value="80"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="px"
            >
              <div className="tn-atom" field="tn_text_1599143926500">Gender</div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2254585281599143976937"
              data-elem-id="1599143976937"
              data-elem-type="text"
              data-field-top-value="360"
              data-field-top-res-960-value="258"
              data-field-top-res-640-value="613"
              data-field-top-res-480-value="585"
              data-field-top-res-320-value="625"
              data-field-left-value="1070"
              data-field-left-res-960-value="860"
              data-field-left-res-640-value="554"
              data-field-left-res-480-value="220"
              data-field-left-res-320-value="230"
              data-field-width-value="80"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="px"
            >
              <div className="tn-atom" field="tn_text_1599143976937">Age</div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2254585281599144016997"
              data-elem-id="1599144016997"
              data-elem-type="text"
              data-field-top-value="427"
              data-field-top-res-960-value="325"
              data-field-top-res-640-value="680"
              data-field-top-res-480-value="659"
              data-field-top-res-320-value="694"
              data-field-left-value="1070"
              data-field-left-res-960-value="860"
              data-field-left-res-640-value="554"
              data-field-left-res-480-value="220"
              data-field-left-res-320-value="230"
              data-field-width-value="80"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="px"
            >
              <div className="tn-atom" field="tn_text_1599144016997">Interests</div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2254585281599144036952"
              data-elem-id="1599144036952"
              data-elem-type="text"
              data-field-top-value="495"
              data-field-top-res-960-value="393"
              data-field-top-res-640-value="748"
              data-field-top-res-480-value="728"
              data-field-top-res-320-value="763"
              data-field-left-value="1070"
              data-field-left-res-960-value="860"
              data-field-left-res-640-value="554"
              data-field-left-res-480-value="220"
              data-field-left-res-320-value="230"
              data-field-width-value="80"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="px"
            >
              <div className="tn-atom" field="tn_text_1599144036952">Job</div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2254585281599661010642"
              data-elem-id="1599661010642"
              data-elem-type="image"
              data-field-top-value="710"
              data-field-top-res-960-value="595"
              data-field-top-res-640-value="950"
              data-field-top-res-480-value="940"
              data-field-top-res-320-value="970"
              data-field-left-value="215"
              data-field-left-res-960-value="130"
              data-field-left-res-640-value="90"
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
              data-field-filewidth-value="1509"
              data-field-fileheight-value="650"
            >
              <div className="tn-atom">
                <GatsbyImage image={Vector4} alt="Vector4 image" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MngAudiences