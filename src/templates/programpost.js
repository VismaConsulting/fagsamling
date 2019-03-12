import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import {DateTime} from 'luxon'

const capitalizeFirst = function(dag) {
    return dag.charAt(0).toUpperCase() + dag.slice(1)
};

export default ({ data }) => {
    const post = data.markdownRemark;
    const ukedag = capitalizeFirst(DateTime.fromISO(post.frontmatter.fra).setLocale('nb').toFormat('EEEE'));
    const fra = DateTime.fromISO(post.frontmatter.fra).toFormat('HH:mm');
    const til = DateTime.fromISO(post.frontmatter.til).toFormat('HH:mm');
    return (
        <Layout>
            <div>
                <h3 style={{color: 'black'}}>{ukedag} {fra} - {til}</h3>
                <h2>{post.frontmatter.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        fra
        til
      }
    }
  }
`