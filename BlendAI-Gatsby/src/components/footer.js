// import { Link } from "gatsby"
import React from "react"
import { LogoBlack } from "../utils/imgImport"

const Footer = () => (
  <footer className="footer">
    <div className="d-flex container">
      <div className="left-block">
        <img className="logo" src={LogoBlack} alt="logo" />
        <div className="text">
          © {new Date().getFullYear()} All Rights Reserved. <a className="footer-link" target="_blank">Privacy Policy</a> and <a className="footer-link" target="_blank">Terms and Conditions</a>.
        </div>
      </div>
      <div className="right-block">
        Drop us a line
        <button className="btn btn-white">SIGN UP</button>
      </div>
    </div>

  </footer>
)

export default Footer
