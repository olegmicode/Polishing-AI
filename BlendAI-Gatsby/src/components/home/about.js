import React, { useEffect } from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import "./about.css"
import { DotMin } from "../../utils/imgImport"

const About = ({ data }) => {
  const text = data.text
  const CampaignOverview = getImage(data.overviewImage.asset)
  const CampaignOverviewSidebar = getImage(data.deviceImage.asset)
  const CampaignOverviewTooltips = getImage(data.statusImage.asset)

  return (
    <div>
      <div id="rec261086492" className="r t-rec" data-record-type="215">
        <a name="about" style={{ fontSize: 0 }}></a>
      </div>
      <div
        id="rec225394903"
        className="r t-rec t-rec_pb_0"
        style={{ paddingBottom: "0px" }}
        data-animationappear="off"
        data-record-type="396"
      >

        <div className="t396">
          <div
            className="t396__artboard"
            data-artboard-recid="225394903"
            data-artboard-height="760"
            data-artboard-height-res-960="750"
            data-artboard-height-res-480="680"
            data-artboard-height-res-320="580"
            data-artboard-height_vh=""
            data-artboard-valign="center"
            data-artboard-upscale=""
            data-artboard-ovrflw="visible"
          >
            <div className="t396__carrier" data-artboard-recid="225394903"></div>
            <div className="t396__filter" data-artboard-recid="225394903"></div>
            <div
              className="t396__elem tn-elem tn-elem__2253949031598875098592 t-animate"
              data-elem-id="1598875098592"
              data-elem-type="text"
              data-field-top-value="290"
              data-field-top-res-960-value="245"
              data-field-top-res-640-value="65"
              data-field-top-res-480-value="80"
              data-field-top-res-320-value="90"
              data-field-left-value="780"
              data-field-left-res-960-value="656"
              data-field-left-res-640-value="90"
              data-field-left-res-480-value="70"
              data-field-left-res-320-value="10"
              data-field-width-value="400"
              data-field-width-res-960-value="294"
              data-field-width-res-640-value="404"
              data-field-width-res-480-value="354"
              data-field-width-res-320-value="294"
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
              data-animate-distance="50"
            >
              <h2 className="tn-atom" field="tn_text_1598875098592">
                {text}
              </h2>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2253949031599489601275 t-animate"
              data-elem-id="1599489601275"
              data-elem-type="image"
              data-field-top-value="160"
              data-field-top-res-960-value="160"
              data-field-top-res-640-value="285"
              data-field-top-res-480-value="265"
              data-field-top-res-320-value="245"
              data-field-left-value="4"
              data-field-left-res-960-value="-6"
              data-field-left-res-640-value="-5"
              data-field-left-res-480-value="0"
              data-field-left-res-320-value="3"
              data-field-width-value="560"
              data-field-width-res-960-value="540"
              data-field-width-res-640-value="520"
              data-field-width-res-480-value="380"
              data-field-width-res-320-value="280"
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
              data-field-filewidth-value="1068"
              data-field-fileheight-value="840"
            >
              <div className="tn-atom">
                {/* <img
                  className="tn-atom__img t-img"
                  data-original={CampaignOverview}
                  src={CampaignOverview}
                  imgfield="tn_img_1599489601275"
                /> */}
                <GatsbyImage image={CampaignOverview} alt="CampaignOverview image" />
              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2253949031599489637723 t-animate"
              data-elem-id="1599489637723"
              data-elem-type="image"
              data-field-top-value="195"
              data-field-top-res-960-value="200"
              data-field-top-res-640-value="330"
              data-field-top-res-480-value="275"
              data-field-top-res-320-value="270"
              data-field-left-value="465"
              data-field-left-res-960-value="390"
              data-field-left-res-640-value="424"
              data-field-left-res-480-value="300"
              data-field-left-res-320-value="200"
              data-field-width-value="250"
              data-field-width-res-960-value="240"
              data-field-width-res-640-value="220"
              data-field-width-res-480-value="180"
              data-field-width-res-320-value="120"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="px"
              data-animate-style="fadeinup"
              data-animate-duration="1"
              data-animate-delay="0.5"
              data-animate-distance="100"
              data-field-filewidth-value="488"
              data-field-fileheight-value="896"
            >
              <div className="tn-atom">
                {/* <img
                  className="tn-atom__img t-img"
                  data-original={CampaignOverviewSidebar}
                  src={CampaignOverviewSidebar}
                  imgfield="tn_img_1599489637723"
                /> */}
                <GatsbyImage image={CampaignOverviewSidebar} alt="CampaignOverviewSidebar image" />
              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2253949031599497419170"
              data-elem-id="1599497419170"
              data-elem-type="image"
              data-field-top-value="373"
              data-field-top-res-960-value="365"
              data-field-top-res-640-value="481"
              data-field-top-res-480-value="605"
              data-field-left-value="155"
              data-field-left-res-960-value="143"
              data-field-left-res-640-value="136"
              data-field-left-res-480-value="-500"
              data-field-width-value="50"
              data-field-width-res-480-value="42"
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
              data-animate-sbs-opts="[{'mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ti':'0'},{'mx':-119,'my':23,'sx':'1','sy':'1','op':0,'ro':'0','bl':'0','ti':0},{'mx':-55,'my':23,'sx':'1','sy':'1','op':1,'ro':'0','bl':'0','ti':800,'ea':'easeIn','dt':600},{'mx':0,'my':0,'sx':'1','sy':'1','op':1,'ro':'0','bl':'0','ti':700,'ea':'easeOut','dt':0}]"
              data-field-filewidth-value="72"
              data-field-fileheight-value="72"
            >
              <div className="tn-atom">
                <img
                  className="tn-atom__img t-img"
                  data-original={DotMin}
                  src={DotMin}
                  imgfield="tn_img_1599497419170"
                />
              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2253949031599497499130"
              data-elem-id="1599497499130"
              data-elem-type="image"
              data-field-top-value="312"
              data-field-top-res-960-value="304"
              data-field-top-res-640-value="420"
              data-field-top-res-480-value="575"
              data-field-left-value="180"
              data-field-left-res-960-value="168"
              data-field-left-res-640-value="161"
              data-field-left-res-480-value="-570"
              data-field-width-value="240"
              data-field-width-res-480-value="200"
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
              data-animate-sbs-opts="[{'ti':'0','mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':'0','bl':'0','ea':'','dt':'0'},{'ti':0,'mx':80,'my':0,'sx':'1','sy':'1','op':0,'ro':'0','bl':'0','ea':'','dt':'0'},{'ti':800,'mx':0,'my':0,'sx':'1','sy':'1','op':1,'ro':'0','bl':'0','ea':'easeInOut','dt':1600}]"
              data-field-filewidth-value="398"
              data-field-fileheight-value="320"
            >
              <div className="tn-atom">
                {/* <img
                  className="tn-atom__img t-img"
                  data-original={CampaignOverviewTooltips}
                  src={CampaignOverviewTooltips}
                  imgfield="tn_img_1599497499130"
                /> */}
                <GatsbyImage image={CampaignOverviewTooltips} alt="CampaignOverviewTooltips image" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
