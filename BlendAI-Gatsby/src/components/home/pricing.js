import React, { useState, useEffect } from "react"
import BlockContent from "@sanity/block-content-to-react";

import "./pricing.css"

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const Pricing = ({ data }) => {
  const [value, onChange] = useState(100);
  const size = useWindowSize();

  const formatNumber = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const getPercent = (x) => {
    return Number(x / 1000 * 100);
  }
  useEffect(() => {
    const eleThumbText = document.querySelector('.thumb-text');
    const eleInfoWindow = document.querySelector('.info-window');
    
    if (eleThumbText && eleInfoWindow && size.width >= 960) {
      eleThumbText.style.left = `calc(${value / 10}% - 60px)`;
      eleThumbText.innerHTML = `$${formatNumber(value * 10)}`;
      eleInfoWindow.style.left = `calc(${Number(value / 1000 * 100)}% - 170px)`;
    } else if (size.width < 960) {
      eleThumbText.style.left = `calc(${value / 10}% - 60px)`;
      eleThumbText.innerHTML = `$${formatNumber(value * 10)}`;
      eleInfoWindow.style.left = `calc(50% - 160px)`;

    }

  })

  return (
    <div id="pricing" className="pricing-container">

      <div id="rec261085834" className="r t-rec" data-record-type="215">
        <a name="pricing" style={{ fontSize: "0" }}></a>
      </div>
      <div
        id="rec243411125"
        className="r t-rec"
        data-animationappear="off"
        data-record-type="396"
      >

        <div className="t396">
          <div
            className="t396__artboard"
            data-artboard-recid="243411125"
            data-artboard-height="610"
            data-artboard-height-res-960="620"
            data-artboard-height-res-640="700"
            data-artboard-height-res-480="650"
            data-artboard-height-res-320="680"
            data-artboard-height_vh=""
            data-artboard-valign="center"
            data-artboard-upscale=""
            data-artboard-ovrflw=""
          >
            <div className="t396__carrier" data-artboard-recid="243411125"></div>
            <div className="t396__filter" data-artboard-recid="243411125"></div>
            <div
              className="t396__elem tn-elem tn-elem__2434111251603784887988"
              data-elem-id="1603784887988"
              data-elem-type="text"
              data-field-top-value="102"
              data-field-top-res-960-value="101"
              data-field-top-res-640-value="91"
              data-field-top-res-480-value="102"
              data-field-top-res-320-value="81"
              data-field-left-value="20"
              data-field-left-res-960-value="20"
              data-field-left-res-640-value="90"
              data-field-left-res-480-value="10"
              data-field-left-res-320-value="10"
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
              <h2 className="tn-atom" field="tn_text_1603784887988">{data.text}</h2>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2434111251603784887993"
              data-elem-id="1603784887993"
              data-elem-type="text"
              data-field-top-value="161"
              data-field-top-res-960-value="165"
              data-field-top-res-640-value="146"
              data-field-top-res-480-value="152"
              data-field-top-res-320-value="131"
              data-field-left-value="20"
              data-field-left-res-960-value="20"
              data-field-left-res-640-value="90"
              data-field-left-res-480-value="9"
              data-field-left-res-320-value="10"
              data-field-width-value="400"
              data-field-width-res-960-value="350"
              data-field-width-res-640-value="300"
              data-field-width-res-480-value="460"
              data-field-width-res-320-value="270"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="px"
            >
              <div className="tn-atom" field="tn_text_1603784887993">
                <BlockContent
                  blocks={data.blockText}
                />
                <br />
              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2434111251603784926374"
              data-elem-id="1603784926374"
              data-elem-type="text"
              data-field-top-value="161"
              data-field-top-res-960-value="165"
              data-field-top-res-640-value="251"
              data-field-top-res-480-value="206"
              data-field-top-res-320-value="220"
              data-field-left-value="520"
              data-field-left-res-960-value="390"
              data-field-left-res-640-value="90"
              data-field-left-res-480-value="9"
              data-field-left-res-320-value="10"
              data-field-width-value="400"
              data-field-width-res-960-value="350"
              data-field-width-res-640-value="320"
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
              <div className="tn-atom" field="tn_text_1603784926374">
                What you pay
              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2434111251603784961295"
              data-elem-id="1603784961295"
              data-elem-type="text"
              data-field-top-value="200"
              data-field-top-res-960-value="210"
              data-field-top-res-640-value="290"
              data-field-top-res-480-value="245"
              data-field-top-res-320-value="250"
              data-field-left-value="520"
              data-field-left-res-960-value="390"
              data-field-left-res-640-value="90"
              data-field-left-res-480-value="9"
              data-field-left-res-320-value="10"
              data-field-width-value="400"
              data-field-width-res-960-value="340"
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
              <div className="tn-atom" field="tn_text_1603784961295">
                Select your average monthly Ad spend below to see what you will
                pay.
              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2434111251604563123595"
              data-elem-id="1604563123595"
              data-elem-type="html"
              data-field-top-value="280"
              data-field-top-res-960-value="290"
              data-field-top-res-640-value="370"
              data-field-top-res-480-value="321"
              data-field-top-res-320-value="359"
              data-field-left-value="520"
              data-field-left-res-960-value="389"
              data-field-left-res-640-value="91"
              data-field-left-res-480-value="9"
              data-field-left-res-320-value="9"
              data-field-height-value="170"
              data-field-height-res-960-value="170"
              data-field-height-res-640-value="170"
              data-field-height-res-480-value="170"
              data-field-height-res-320-value="168"
              data-field-width-value="562"
              data-field-width-res-960-value="536"
              data-field-width-res-640-value="483"
              data-field-width-res-480-value="462"
              data-field-width-res-320-value="302"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value="px"
              data-field-widthunits-value="px"
            >
              <div className="tn-atom tn-atom__html">
                <script
                  src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"
                  rel="preload"
                ></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>

                <div className="slider-parent">
                  <input
                    type="range"
                    min="100"
                    max="1000"
                    value={value}
                    onChange={({ target: { value: radius } }) => {
                      onChange(radius);
                    }}
                    style={{ backgroundSize: `${getPercent(value)}% 100%` }}
                  />
                  <div className="thumb-text">
                    {/* ${`${formatNumber(value * 10)}`} */}
                  </div>
                  <div className="info-window responsive">
                    <div className="info-arrow"></div>
                    <div className="info-title">Fee</div>
                    <div className="info-desc">Based on your Ad spend</div>
                    <div className="fee-amount">${`${value}`}</div>
                    <div className="fee-dur">/month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Pricing
