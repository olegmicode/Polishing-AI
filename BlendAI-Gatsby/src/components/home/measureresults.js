import React from "react"

import { CharacterW } from "../../utils/imgImport"
import ChartsMin from "../../images/contents/charts-min.png"



const MeasureResults = ({ data }) => (
    <div id="measureresults" className="measureresults-container">
        <div className="d-flex container">
            <div className="left-block">
                <div>Step 4.</div>
                <h2>Measure results</h2>
                <div>Measure return on ad spend accurately with sales attributed directly to your adverts thanks to our integration with your store.</div>
                <div>
                    <a className="btn btn-white" href="https://app.blend-ai.com/#/auth/ecommerce" target="_blank">SIGN UP</a>
                </div>
            </div>
            <div className="right-block">
                <div className="img-block">
                    <img className="chart-img" src={ChartsMin} />
                    <h2 className="text">
                        Manage your entire portfolio of online ads.
                    </h2>
                    <img className="characterw-img" src={CharacterW} />

                </div>

            </div>
        </div>
    </div>
)

export default MeasureResults
