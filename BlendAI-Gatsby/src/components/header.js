import React, { useState } from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import "./header.css"

const Header = ({ headerLogo }) => {
  const [hambugerActive, setHambugerActiveState] = useState(false)
  const Logo = getImage(headerLogo)

  const hamburgerHandler = () => {
    setHambugerActiveState(!hambugerActive)
  }

  let humbugerClsName = "t228__burger "
  let navMenuClsName = "t228 t228__positionfixed "

  if (hambugerActive) {
    humbugerClsName += "active"
  } else {
    navMenuClsName += "t228__hidden"
  }

  return (
    <header>
      <div
        id="rec246667908"
        className="r t-rec"
        data-animationappear="off"
        data-record-type="131"
      >
        <div className="t123">
          <div className="t-container_100">
            <div className="t-width t-width_100">
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="rec290925405"
        className="r t-rec t-screenmin-640px"
        data-animationappear="off"
        data-record-type="257"
        data-screen-min="640px"
      >
        <div id="nav290925405marker"></div>
        <div className="t228__mobile t228__positionfixed">
          <div className="t228__mobile_container">
            <div className="t228__mobile_text t-name t-name_md" field="text">
              &nbsp;
            </div>
            <div
              className={humbugerClsName}
              onClick={hamburgerHandler}
              onKeyDown={hamburgerHandler}
              role="button"
              tabIndex="0"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div
          id="nav290925405"
          className={navMenuClsName}
          style={{ backgroundColor: "rgba(255, 255, 255, 1)", height: "64px" }}
          data-bgcolor-hex="#ffffff"
          data-bgcolor-rgba="rgba(255,255,255,1)"
          data-navmarker="nav290925405marker"
          data-appearoffset=""
          data-bgopacity-two=""
          data-menushadow=""
          data-bgopacity="1"
          data-menu-items-align="center"
          data-menu="yes"
        >
          <div className="t228__maincontainer" style={{ height: "64px" }}>
            <div className="t228__padding40px"></div>
            <div className="t228__leftside">
              <div className="t228__leftcontainer">
                <a href="https://blend-ai.com" >
                  {/* <img
                    // src={Logo}
                    className="t228__imglogo"
                    imgfield="img"
                    style={{ maxHeight: "80px" }}
                    alt="BlendAi"
                  /> */}
                  <GatsbyImage className="t228__imglogo" imgfield="img" image={Logo} alt="header logo image" style={{ width: "140px", height:"32px" }} />
                </a>
              </div>
            </div>
            <div className="t228__centerside">
              <div className="t228__centercontainer">
                <ul className="t228__list t228__list_hidden">
                  <li className="t228__list_item" style={{ padding: "0 30px 0 0" }}>
                    <a
                      className="t-menu__link-item"
                      href="#about"
                      data-menu-submenu-hook=""
                      style={{
                        color: "#222e63",
                        fontSize: "16px",
                        fontWeight: 500,
                        fontFamily: 'NunitoSans'
                      }}
                      data-menu-item-number="1"
                    >About</a
                    >
                  </li>
                  <li className="t228__list_item" style={{ padding: "0 30px" }}>
                    <a
                      className="t-menu__link-item"
                      href="#services"
                      data-menu-submenu-hook=""
                      style={{
                        color: "#222e63",
                        fontSize: "16px",
                        fontWeight: 500,
                        fontFamily: 'NunitoSans',
                      }}
                      data-menu-item-number="2"
                    >Services</a
                    >
                  </li>
                  <li className="t228__list_item" style={{ padding: "0 30px" }}>
                    <a
                      className="t-menu__link-item"
                      href="#productfeed"
                      data-menu-submenu-hook=""
                      style={{
                        color: "#222e63",
                        fontSize: "16px",
                        fontWeight: 500,
                        fontFamily: 'NunitoSans',
                      }}
                      data-menu-item-number="3"
                    >Product Feed</a
                    >
                  </li>
                  <li className="t228__list_item" style={{ padding: "0 0 0 30px" }}>
                    <a
                      className="t-menu__link-item"
                      href="#pricing"
                      data-menu-submenu-hook=""
                      style={{
                        color: "#222e63",
                        fontSize: "16px",
                        fontWeight: 500,
                        fontFamily: 'NunitoSans',
                      }}
                      data-menu-item-number="4"
                    >Pricing</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div className="t228__rightside">
              <div className="t228__rightcontainer">
                <div className="t228__right_buttons">
                  <div className="t228__right_buttons_wrap">
                    <div className="t228__right_buttons_but">
                      <a
                        href="https://app.blend-ai.com/#/auth/ecommerce"
                        target="_blank"
                        className="t-btn js-click-stat"
                        data-tilda-event-name="/tilda/click/rec290925405/button1"
                        style={{
                          color: "#ffffff",
                          backgroundColor: "#566fff",
                          borderRadius: "4px",
                          fontFamily: "NunitoSans",
                          fontWeight: "600",
                        }}
                      >
                        <table style={{ width: "100%", height: "100%" }}>
                          <tr>
                            <td>Sign Up</td>
                          </tr>
                        </table>
                      </a>
                    </div>
                    <div className="t228__right_buttons_but">
                      <a
                        href="https://app.blend-ai.com/#/auth/login"
                        target=""
                        className="t-btn js-click-stat"
                        data-tilda-event-name="/tilda/click/rec290925405/button2"
                        style={{
                          color: "#222e63",
                          border: "1px solid #6a85fc",
                          borderRadius: "4px",
                          fontFamily: "NunitoSans",
                          fontWeight: 600,
                        }}
                      >
                        <table style={{ width: "100%", height: "100%" }}>
                          <tr>
                            <td>Log In</td>
                          </tr>
                        </table>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="t228__padding40px"></div>
          </div>
        </div>
      </div>

      <div
        id="rec290926020"
        className="r t-rec t-screenmax-640px"
        data-animationappear="off"
        data-record-type="396"
        data-screen-max="640px"
      >

        <div className="t396">
          <div
            className="t396__artboard"
            data-artboard-recid="290926020"
            data-artboard-height="64"
            data-artboard-height-res-320="64"
            data-artboard-height_vh=""
            data-artboard-valign="center"
            data-artboard-upscale="grid"
            data-artboard-ovrflw=""
          >
            <div className="t396__carrier" data-artboard-recid="290926020"></div>
            <div className="t396__filter" data-artboard-recid="290926020"></div>
            <div
              className="t396__elem tn-elem tn-elem__2909260201599720199226"
              data-elem-id="1599720199226"
              data-elem-type="image"
              data-field-top-value="20"
              data-field-top-res-320-value="19"
              data-field-left-value="20"
              data-field-left-res-320-value="10"
              data-field-width-value="120"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-container-res-320-value="window"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="px"
              data-field-filewidth-value="140"
              data-field-fileheight-value="32"
            >
              <div className="tn-atom">
                {/* <img
                  className="tn-atom__img t-img"
                  // data-original={Logo}
                  // src={Logo}
                  imgfield="tn_img_1599720199226"
                /> */}
                <GatsbyImage className="tn-atom__img t-img" imgfield="img" image={Logo} alt="header logo image" />

              </div>
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2909260201599720264742"
              data-elem-id="1599720264742"
              data-elem-type="button"
              data-field-top-value="12"
              data-field-top-res-960-value="12"
              data-field-top-res-640-value="12"
              data-field-top-res-480-value="12"
              data-field-top-res-320-value="0"
              data-field-left-value="1082"
              data-field-left-res-960-value="850"
              data-field-left-res-640-value="530"
              data-field-left-res-480-value="370"
              data-field-left-res-320-value="-10"
              data-field-height-value="40"
              data-field-height-res-320-value="40"
              data-field-width-value="100"
              data-field-width-res-320-value="70"
              data-field-axisy-value="top"
              data-field-axisy-res-320-value="center"
              data-field-axisx-value="left"
              data-field-axisx-res-320-value="right"
              data-field-container-value="grid"
              data-field-container-res-320-value="window"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value=""
            >
              <a
                className="tn-atom js-click-zero-stat"
                href="https://app.blend-ai.com/#/auth/login"
                data-tilda-event-name="/tilda/click/rec290926020/button1599720264742"
              >Log In</a
              >
            </div>
            <div
              className="t396__elem tn-elem tn-elem__2909260201599720426760"
              data-elem-id="1599720426760"
              data-elem-type="button"
              data-field-top-value="12"
              data-field-top-res-960-value="12"
              data-field-top-res-640-value="12"
              data-field-top-res-480-value="12"
              data-field-top-res-320-value="0"
              data-field-left-value="970"
              data-field-left-res-960-value="738"
              data-field-left-res-640-value="418"
              data-field-left-res-480-value="258"
              data-field-left-res-320-value="-88"
              data-field-height-value="40"
              data-field-height-res-320-value="40"
              data-field-width-value="100"
              data-field-width-res-320-value="70"
              data-field-axisy-value="top"
              data-field-axisy-res-320-value="center"
              data-field-axisx-value="left"
              data-field-axisx-res-320-value="right"
              data-field-container-value="grid"
              data-field-container-res-320-value="window"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value=""
            >
              <a
                className="tn-atom js-click-zero-stat"
                href="https://app.blend-ai.com/#/auth/ecommerce"
                data-tilda-event-name="/tilda/click/rec290926020/button1599720426760"
              >Sign Up</a
              >
            </div>
          </div>
        </div>
      </div>
    </header >
  )
}

export default Header
