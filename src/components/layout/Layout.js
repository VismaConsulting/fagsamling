/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import './layout.css'
import Header from "./Header"

const Layout = ({children, breadcrumbs, fullWidth}) => {
    const containerClass = fullWidth ? 'container-fluid' : 'container';
    return (
        <>
            <Header />
            {breadcrumbs && <div className="container"><nav aria-label="breadcrumb">
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
            </nav></div>
            }
            <main role="main" className={containerClass}>{children}</main>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
