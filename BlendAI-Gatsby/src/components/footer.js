import React from "react"
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Modal from "./common/Modal"

import "./footer.css"
import "./home/contact.css"
const Footer = ({ footerLogo }) => {
  const [showModal, setShowModal] = React.useState(false);

  // const footerLogoImg = getImage(footerLogo)
  const foolterLogoURL = footerLogo.gatsbyImageData.images.fallback.src

  return (
    <footer className="footer">
      <div
        id="rec226479320"
        className="r t-rec"
        data-animationappear="off"
        data-record-type="396"
      >

        <div className="t396">
          <div
            className="t396__artboard"
            data-artboard-recid="226479320"
            data-artboard-height="130"
            data-artboard-height-res-320="250"
            data-artboard-height_vh=""
            data-artboard-valign="center"
            data-artboard-upscale=""
            data-artboard-ovrflw=""
          >
            <div className="t396__carrier" data-artboard-recid="226479320"></div>
            <div className="t396__filter" data-artboard-recid="226479320"></div>
            <div className="flex-block">
              {/* left */}
              <div
                className="t396__elem tn-elem tn-elem__2264793201599148361969 right-icon"
                data-elem-id="1599148361969"
                data-elem-type="image"
                data-field-top-value="26"
                data-field-top-res-960-value="26"
                data-field-top-res-320-value="40"
                data-field-left-value="20"
                data-field-left-res-960-value="11"
                data-field-left-res-320-value="10"
                data-field-width-value="140"
                data-field-axisy-value="top"
                data-field-axisy-res-320-value="top"
                data-field-axisx-value="left"
                data-field-container-value="grid"
                data-field-container-res-320-value="window"
                data-field-topunits-value="px"
                data-field-leftunits-value="px"
                data-field-heightunits-value=""
                data-field-widthunits-value="px"
                data-field-filewidth-value="280"
                data-field-fileheight-value="64"
              >
                <div className="tn-atom">
                <img
                    src={foolterLogoURL}
                    className="t228__imglogo"
                    imgfield="img"
                    style={{ maxHeight: "32px" }}
                    alt="BlendAi"
                  />
                  {/* <GatsbyImage image={footerLogoImg} alt="foolter logo image" /> */}
                </div>
              </div>
              {/* right */}
              <div className="left-block">
                <div
                  className="t396__elem tn-elem tn-elem__2264793201599148547451"
                  data-elem-id="1599148547451"
                  data-elem-type="text"
                  data-field-top-value="30"
                  data-field-top-res-960-value="30"
                  data-field-top-res-640-value="30"
                  data-field-top-res-480-value="30"
                  data-field-top-res-320-value="110"
                  data-field-left-value="921"
                  data-field-left-res-960-value="690"
                  data-field-left-res-640-value="371"
                  data-field-left-res-480-value="218"
                  data-field-left-res-320-value="170"
                  data-field-width-value="110"
                  data-field-width-res-960-value="100"
                  data-field-axisy-value="top"
                  data-field-axisx-value="left"
                  data-field-container-value="grid"
                  data-field-topunits-value="px"
                  data-field-leftunits-value="px"
                  data-field-heightunits-value=""
                  data-field-widthunits-value="px"
                >
                  <div className="tn-atom" field="tn_text_1599148547451">
                    Drop us a line
                  </div>
                </div>
                <div
                  className="t396__elem tn-elem tn-elem__2264793201599148573268"
                  data-elem-id="1599148573268"
                  data-elem-type="button"
                  data-field-top-value="20"
                  data-field-top-res-960-value="20"
                  data-field-top-res-640-value="20"
                  data-field-top-res-480-value="20"
                  data-field-top-res-320-value="100"
                  data-field-left-value="1040"
                  data-field-left-res-960-value="810"
                  data-field-left-res-640-value="490"
                  data-field-left-res-480-value="330"
                  data-field-left-res-320-value="11"
                  data-field-height-value="44"
                  data-field-width-value="140"
                  data-field-axisy-value="top"
                  data-field-axisx-value="left"
                  data-field-container-value="grid"
                  data-field-container-res-320-value="window"
                  data-field-topunits-value="px"
                  data-field-leftunits-value="px"
                  data-field-heightunits-value=""
                  data-field-widthunits-value=""
                >
                  <a className="tn-atom" role="button" onClick={() => setShowModal(true)}>CONTACT US</a>
                  <Modal
                    // title="Contact Us"
                    isOpen={showModal}
                    handleDismiss={() => setShowModal(false)}
                  >
                    <div className="container">
                      <h1>Contact Us</h1><br />
                      <div>
                        Leave your email and message and we'll be in touch as soon as possible.
                      </div><br />
                      <form action="action_page.php">

                        <input type="text" className="emailbox" id="email" name="email" placeholder="*Your email" />

                        <input type="text" className="phonenumberbox" id="phonenumber" name="phonenumber" placeholder="Your phone number" />

                        <textarea id="comment" className="commentarea" name="comment" placeholder="*Your comment" style={{ height: "200px" }}></textarea>

                        <input type="submit" className="btn-submit" value="Submit" />

                      </form><br />
                      <div className="bottomText">
                        By clicking the button you agree to our
                        <a
                          href="/privacy"
                          className="footer-link"
                          // style={{ color: "#00cab7 !important" }}
                          target="_blank">
                          {` Privacy Policy `}
                        </a>
                        and
                        <a
                          href="/terms"
                          className="footer-link"
                          // style={{ color: "#00cab7 !important" }}
                          target="_blank">
                          {` Terms and Conditions`}
                        </a>.
                      </div>
                    </div>
                  </Modal>
                </div>
              </div>
            </div>
            {/* bottom text */}
            <div
              className="t396__elem tn-elem tn-elem__2264793201610709018424"
              data-elem-id="1610709018424"
              data-elem-type="text"
              data-field-top-value="86"
              data-field-top-res-960-value="86"
              data-field-top-res-640-value="86"
              data-field-top-res-480-value="75"
              data-field-top-res-320-value="175"
              data-field-left-value="20"
              data-field-left-res-960-value="10"
              data-field-left-res-640-value="10"
              data-field-left-res-480-value="10"
              data-field-left-res-320-value="10"
              data-field-width-value="540"
              data-field-width-res-960-value="510"
              data-field-width-res-480-value="320"
              data-field-width-res-320-value="250"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="px"
            >
              <div className="tn-atom" field="tn_text_1610709018424">
                ©2021 All Rights Reserved.
                <a
                  href="/privacy"
                  className="footer-link"
                  target="_blank">
                  {` Privacy Policy `}
                </a>
                and
                <a
                  href="/terms"
                  className="footer-link"
                  target="_blank"> {` Terms and Conditions`}
                </a>.
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
