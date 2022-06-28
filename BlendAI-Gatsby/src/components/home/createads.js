import React from "react"

import Adsmin from "../../images/contents/ads-min.png"
import Rectangle from "../../images/contents/rectangle_165.png"
import { Hand } from "../../utils/imgImport"
import { Vector3 } from "../../utils/imgImport"

const CreateAds = ({ data }) => (
    <div id="createads" className="createads-container">
        <div className="d-flex container">
            <div className="left-block">
                <img className="img-adsmin" src={Adsmin} />
                <img className="img-rect" src={Rectangle} />
                <img className="img-hand" src={Hand} />
                <img className="img-vector3" src={Vector3} />
            </div>
            <div className="right-block">
                <div>Step 1.</div>
                <h2>Create Ads</h2>
                <div>Say goodbye to platform fatigue and start testing new channels for your digital marketing.</div>
                <div>Create one version of your ad and publish it across multiple advertising channels with a few simple clicks.</div>
            </div>
        </div>
    </div>
)
export default CreateAds
