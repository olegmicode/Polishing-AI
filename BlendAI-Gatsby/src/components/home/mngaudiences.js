import React from "react"

import { Character1min } from "../../utils/imgImport"
import { UserCard } from "../../utils/imgImport"
import { Vector4 } from "../../utils/imgImport"

const MngAudiences = ({ data }) => (
  <div id="mngaudience" className="mngaudiences-container">
    <div className="d-flex container">
      <div className="left-block">
        <div>Step 1.</div>
        <h2>Manage audiences</h2>
        <div>You don't need to be an expert to craft new target audiences for your ads.</div>
        <div>Blend makes audience creation easy for everyone.</div>
        <div>
          <a className="btn btn-white" href="https://app.blend-ai.com/#/auth/ecommerce" target="_blank">SIGN UP</a>
        </div>
      </div>
      <div className="right-block">
        <img className="character1min" src={Character1min} />
        <div className="progress-block">
          <img className="usercard" src={UserCard} />
          <div className="progress-bg">
            <div className="progress-bg-active" style={{width: '180px'}}>
              <div className="circle" style={{left: '160px'}}>
              </div>
            </div>
          </div>
          <div className="progress-bg">
            <div className="progress-bg-active">
              <div className="circle">
              </div>
            </div>
          </div>
          <div className="progress-bg">
            <div className="progress-bg-active" style={{width: '130px'}}>
              <div className="circle" style={{left: '110px'}}>
              </div>
            </div>
          </div>
          <div className="progress-bg">
            <div className="progress-bg-active" style={{width: '50px'}}>
              <div className="circle" style={{left: '30px'}}>
              </div>
            </div>
          </div>
          <div className="bt-text">
          Define your target audiences with ease.
          </div>
        </div>
        <img className="vector4-img" src={Vector4}/>
      </div>
    </div>
  </div>
)

export default MngAudiences