import PropTypes from "prop-types"
import React, {useState} from "react"
import VismaLogo from "./VismaLogo";
import './navbar-overrides.css'
import {Link} from "gatsby"
import {Nav, Navbar, NavbarBrand, NavItem, Collapse, NavbarToggler} from "reactstrap"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (<Navbar style={{backgroundColor: '#222'}} dark expand="md" fixed="top">
            <NavbarBrand href="/">
                <VismaLogo/>
            </NavbarBrand>
            <NavbarToggler onClick={() => setIsOpen(!isOpen)}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link className="nav-link" to="/">Hjem <span className="sr-only">(current)</span></Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/program/">Program</Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
