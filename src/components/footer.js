import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import FooterStyles from "./footer.module.css"

const Footer = ({ siteTitle }) => {
  return (
    <div className="container-fluid" style={{ overflow: "hidden" }}>
      <div
        className="row"
        style={{
          padding: "190px 0 70px 0",
          overflow: "hidden",
        }}
      >
        <div className="col-md-6 pl-md-4">
          <span className={FooterStyles.venkanna}>
            <Link to="/" className={FooterStyles.title}>
              {siteTitle}.
            </Link>
          </span>
          <span className={FooterStyles.great_day} role="img" aria-label="Love">Have a great day. 😘</span>
        </div>
        <div className="col-md-6 p-0 pl-3">
          <span className={FooterStyles.github}>
            <a
              href="https://github.com/vnkt66"
              target="_blank"
              rel="noreferrer"
              className={FooterStyles.link_right}
            >
              Github
            </a>
          </span>
          <span className={FooterStyles.linkedin}>
            <a
              href="https://www.linkedin.com/in/venkanna-chowdary-penubothu-29742312a/"
              target="_blank"
              rel="noreferrer"
              className={`${FooterStyles.link_right} ${FooterStyles.right_two}`}
            >
              Linkedin
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
