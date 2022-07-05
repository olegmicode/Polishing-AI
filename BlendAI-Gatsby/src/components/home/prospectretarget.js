import React from "react"

import { ShoppingMin2 } from "../../utils/imgImport"

const ProspectRetarget = ({ data }) => (
    <div id="prospectretarget" className="prospectretarget-container">
        <div className="d-flex container">
            <div className="left-block">
                <img className="shopping-img" src={ShoppingMin2} />
                <div className="bt-text">
                    Maximise your return on ad spend.
                </div>
            </div>
            <div className="right-block">
                <h2>Prospect & Retarget</h2>
                <div>Automatic prospecting and retargeting, spend allocation and constant monitoring means your ad budget is working harder, smarter and maximising return.</div>
            </div>
        </div>
    </div>
)

export default ProspectRetarget
