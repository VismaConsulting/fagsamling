import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout/Layout"
import InlineDay from "../components/program/InlineDay";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons'
import '../components/graphql/fragments/CommonEventFragment'
import groupBy from "../utils/groupBy";

export default ({location, data = {}}) => {
    const {currentFagsamling} = data.site.siteMetadata;
    const posts = data.allMarkdownRemark.edges
        .filter(item => item.node.fields.slug.includes(currentFagsamling))
        .map(item => item.node);
    const mainEvents = posts.filter(event => event.frontmatter.page_subtype !== 'subevent');
    const postsByDay = groupBy(mainEvents, event => event.frontmatter.from.substring(0, 10));
    return (
        <Layout location={location} crumbLabel="Program">
            <h1 style={{marginBottom: '30px'}}>
                <FontAwesomeIcon style={{fontSize: '0.8em'}} icon={faCalendarAlt}/> Program
            </h1>
            <div className="row">
                {Array.from(postsByDay, ([key, value]) => {
                    return <InlineDay key={key} day={key} events={value} />
                })
                }
            </div>
        </Layout>
    )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        currentFagsamling
      }
    }
    allMarkdownRemark(filter: {frontmatter: { page_type: { eq: "event" }}}, sort: {fields: [frontmatter___from], order: ASC}) {
      totalCount
      edges {
        node {
         ...CommonEventFragment
          fields {
            subevents {
              id
              html
              fields {
                slug
              }
              excerpt
              ...CommonEventFragment
            }
          }
        }
      }
    }
  }
`
;
