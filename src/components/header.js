import PropTypes from "prop-types"
import React from "react"
import VismaLogo from "./VismaLogo";
import './navbar-overrides.css'
import {Link} from "gatsby"

const Header = ({siteTitle}) => (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <Link className="nav-link" to="/">
            <VismaLogo/>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/program/">Program</Link>
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
