import React, { useState } from "react"
import { Logo } from "../utils/imgImport"
import { nav_menus } from "../utils/staticData"

const Header = () => {
  const [hambugerActive, setHambugerActiveState] = useState(false)

  const hamburgerHandler = () => {
    setHambugerActiveState(!hambugerActive)
  }

  let humbugerClsName = "hamburger "
  let navMenuClsName = "navbar-nav "

  if (hambugerActive) {
    humbugerClsName += "active"
    navMenuClsName += "active"
  }

  return (
    <header className="container">
      <nav className="navbar">
        <a href="/">
          <img className="logo" src={Logo} alt="logo" />
        </a>
        <ul className={navMenuClsName}>
          {nav_menus.map((item, idx) => (
            <li className="nav-item" key={idx}>
              <a className="nav-link" activeClassName="active" href={item.to}>
                {item.name}
              </a>
            </li>
          ))}
          <li><a href="#" className="btn btn-blueberry"> Sign Up</a></li>
          <li><a href="#" className="btn btn-transparent">Login</a></li>
        </ul>

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
      </nav>
    </header>
  )
}

export default Header
