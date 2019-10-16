import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const VismaLogo = () => (
  <StaticQuery
    query={graphql`
      query {
        fileName: file(relativePath: { eq: "images/visma-logo-white-smaller.png" }) {
          childImageSharp {
            fixed(height: 90) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fixed={data.fileName.childImageSharp.fixed}
        style={{top: 0}}
      />
    )}
  />
)
export default VismaLogo
