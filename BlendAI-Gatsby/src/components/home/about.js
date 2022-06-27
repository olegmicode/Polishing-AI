import React from "react"
import CampaignOverview from "../../images/contents/campaign_overview-mi.png"

const About = ({ data }) => (
  <div id="about" className="about-container">
    <div className="d-flex container">
      <div className="left-block">
        <div className="image-block">
          <img src={CampaignOverview} />

        </div>
      </div>
      <div className="right-block">
        <h2 className="about-right-text">
          Making online advertising easy for everyone.
        </h2>
      </div>
    </div>
  </div>
)

export default About
