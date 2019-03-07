/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {graphql, StaticQuery} from "gatsby"

import Header from "./header"

const Layout = ({children}) => (
    <StaticQuery
        query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
        render={data => (
            <>
                <Header siteTitle={data.site.siteMetadata.title}/>
                <main role="main" className="container">{children}</main>
                {/*<footer className="container-fluid">*/}
                    {/*© {new Date().getFullYear()}, Built with*/}
                    {/*{` `}*/}
                    {/*<a href="https://www.gatsbyjs.org">Gatsby</a>*/}
                {/*</footer>*/}
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
