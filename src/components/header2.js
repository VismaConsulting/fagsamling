import PropTypes from "prop-types"
import React from "react"
import VismaLogo from "./VismaLogo";
import './navbar-overrides.css'

const Header = ({siteTitle}) => (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="#">
            <VismaLogo/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="program/">Program</a>
                </li>
            </ul>
        </div>
    </nav>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
