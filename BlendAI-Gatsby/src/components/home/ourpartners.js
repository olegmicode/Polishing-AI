import React from "react"

import { GooglePartner } from "../../utils/imgImport"
import { FbPartner } from "../../utils/imgImport"
import { OfficialPartner } from "../../utils/imgImport"
import { MarketingPartner } from "../../utils/imgImport"

const OurPartners = ({ data }) => (
    <div id="ourpartners" className="ourpartners-container">
        <div className="d-flex container">
            <div className="left-block">
                <h2>Our partners</h2>
                <div>Blend AI is a marketing partner of leading social platforms.</div>
            </div>
            <div className="right-block">
                <img className="partner-img" src={GooglePartner} />
                <img className="partner-img" src={FbPartner} />
                <img className="partner-img" src={OfficialPartner} />
                <img className="partner-img" src={MarketingPartner} />
            </div>
        </div>
    </div>
)

export default OurPartners
