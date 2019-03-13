import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import {DateTime} from 'luxon'

const capitalizeFirst = function(dag) {
    return dag.charAt(0).toUpperCase() + dag.slice(1)
};

export default ({ data }) => {
    const event = data.markdownRemark;
    const weekday = capitalizeFirst(DateTime.fromISO(event.frontmatter.from).setLocale('nb').toFormat('EEEE'));
    const from = DateTime.fromISO(event.frontmatter.from).toFormat('HH:mm');
    const to = DateTime.fromISO(event.frontmatter.to).toFormat('HH:mm');
    return (
        <Layout>
            <div>
                <h3 style={{color: 'black'}}>{weekday} {from} - {to}</h3>
                <h2>{event.frontmatter.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: event.html }} />
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
        from
        to
      }
    }
  }
`