// import { Link } from "gatsby"
import React from "react"
import { Logo } from "../utils/imgImport"

const Footer = () => (
  <footer className="container">
    <div className="py-4 text-center">
      <img className="logo" src={Logo} alt="logo" />
    </div>
    <p className="text-center">
      © {new Date().getFullYear()} All Rights Reserved. Privacy Policy and Terms and Conditions.
    </p>
  </footer>
)

export default Footer
