import React from "react"
import RangeSlider from "../common/rangeslider";

const Pricing = ({ data }) => (
  <div id="pricing" className="pricing-container">
    <div className="d-flex container">
      <div className="left-block">
        <h2> Pricing </h2>
        <div>Simple and transparent pricing for everyone.</div>
      </div>
      <div className="right-block">
        <div>
          What you pay
        </div>
        <div>
          Select your average monthly Ad spend below to see what you will pay.
        </div>
        <div className="price-slider-container">
          <RangeSlider />
        </div>
      </div>
    </div>
  </div>
)

export default Pricing
