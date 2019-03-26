import PropTypes from "prop-types"
import React, {useState} from "react"
import VismaLogo from "./VismaLogo";
import './navbar-overrides.css'
import {Link} from "gatsby"
import {Nav, Navbar, NavbarBrand, NavItem, Collapse, NavbarToggler} from "reactstrap"

const Header = ({breadcrumbs}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (<Navbar color="light" light expand="md" fixed="top">
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

            {breadcrumbs && <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {breadcrumbs.map(crumb => {
                            const classNames = "breadcrumb-item" + (crumb.current ? ' active' : '');
                            const label = crumb.current ? crumb.label : <a href={crumb.slug}>{crumb.label}</a>
                            return (
                                <li key={crumb.label} className={classNames}>{label}</li>
                            )
                        }
                    )}
                </ol>
            </nav>
            }
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
