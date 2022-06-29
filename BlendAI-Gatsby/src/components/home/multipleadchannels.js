import React from "react"

import { Vector3Blue } from "../../utils/imgImport"
import { Line7 } from "../../utils/imgImport"
import { Line6 } from "../../utils/imgImport"
import { Line8 } from "../../utils/imgImport"

import InstagramAdImg from "../../images/contents/instagram_ad-min.png"
import FbAdImg from "../../images/contents/facebook_ad.png"
import GgadImg from "../../images/contents/google_ad-min.png"
import LkadImg from "../../images/contents/linked_in_ad-min.png"
import TwadImg from "../../images/contents/twitter_ad-min.png"


const Multipleadchannels = ({ data }) => (
    <div id="multipleadchannels" className="multipleadchannels-container">
        <div className="d-flex container">
            <div className="left-block">
                <img className="vector3" src={Vector3Blue} />
                <div className="channels-block">

                    <img className="" src={InstagramAdImg} />
                    <img className="" src={FbAdImg} />
                    <img className="" src={GgadImg} />
                    <img className="" src={LkadImg} />
                    <img className="" src={TwadImg} />

                </div>
            </div>
            <div className="right-block">
                <div>Step 3.</div>
                <h2>Multiple ad channels</h2>
                <div>Tired of learning new ad channels? </div>
                <div>Our support for multiple advertising channels lets you quickly spread your message and trial new strategies in seconds. </div>
            </div>
        </div>
    </div>
)
export default Multipleadchannels