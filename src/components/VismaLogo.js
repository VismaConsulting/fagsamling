import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const VismaLogo = () => (
  <StaticQuery
    query={graphql`
      query {
        fileName: file(relativePath: { eq: "visma-logo-smaller.png" }) {
          childImageSharp {
            fixed(height: 65) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
`}
    render={data => <Img fixed={data.fileName.childImageSharp.fixed} />}
  />
)
export default VismaLogo