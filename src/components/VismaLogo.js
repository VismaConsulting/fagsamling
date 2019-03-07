import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const VismaLogo = () => (
  <StaticQuery
    query={graphql`
      query {
        fileName: file(relativePath: { eq: "images/visma-logo.png" }) {
          childImageSharp {
            fixed(height: 100) {
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