import PropTypes from "prop-types"
import React from "react"
import VismaLogo from "./VismaLogo";

const Header = ({siteTitle}) => (

    <nav className="navbar fixed-top navbar-light bg-light">
        <a className="navbar-brand" href="/">
            VismaLogo
        </a>
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="/program">Program</a>
            </li>
        </ul>
    </nav>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
