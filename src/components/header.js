import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderStyles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <ul className={HeaderStyles.ul}>
        <ul className={HeaderStyles.left}>
          <li className={`${HeaderStyles.li} ${HeaderStyles.li_left}`}>
            <Link className={`${HeaderStyles.link_left}`} to="/">
              {siteTitle}.
            </Link>
          </li>
        </ul>
        <ul className={HeaderStyles.right}>
          <li className={`${HeaderStyles.li} ${HeaderStyles.li_right}`}>
            <Link
              className={`${HeaderStyles.link_right} ${HeaderStyles.about}`}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className={`${HeaderStyles.li} ${HeaderStyles.li_right}`}>
            <a
              className={`${HeaderStyles.link_right} ${HeaderStyles.contact}`}
              href="mailto:venkanna.penubothu@gmail.com?subject=Hi%20Venkanna!%20%E2%9C%8B"
            >
              Contact
            </a>
          </li>
        </ul>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
