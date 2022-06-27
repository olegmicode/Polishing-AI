import React from "react"

import { DotMin } from "../../utils/imgImport"
import CampaignOverview from "../../images/contents/campaign_overview-mi.png"
import CampaignOverviewSidebar from "../../images/contents/campaign_overview_sidebar.png"
import CampaignOverviewTooltips from "../../images/contents/campaign_overview_tooltips.png"

const About = ({ data }) => (
  <div id="about" className="about-container">
    <div className="d-flex container">
      <div className="left-block">
        <div className="image-block">
          <img src={CampaignOverview} />
        </div>
        <img className="sidebar-img" src={CampaignOverviewSidebar} />
        <img className="dot-img" src={DotMin}/>
        <img className="tooltips-img" src={CampaignOverviewTooltips} />

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
