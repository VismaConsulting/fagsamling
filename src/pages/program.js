import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout/Layout"
import InlineDay from "../components/program/InlineDay";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

export default ({data = {}}) => {
    const {currentFagsamling} = data.site.siteMetadata;
    const posts = data.allMarkdownRemark.edges
        .filter(item => item.node.fields.slug.includes(currentFagsamling))
        .map(item => item.node);
    const mainEvents = posts.filter(event => event.frontmatter.type !== 'underprogrampost');
    const subEvents = posts.filter(event => event.frontmatter.type === 'underprogrampost');
    const postsByDay = groupByFra(mainEvents, event => event.frontmatter.from.substring(0, 10));
    const subeventsByDay = groupByFra(subEvents, event => event.frontmatter.from.substring(0, 10));
    console.log(subeventsByDay);
    return (
        <Layout>
            <h1 style={{marginBottom: '30px'}}>
                <FontAwesomeIcon style={{fontSize: '0.8em'}} icon={faCalendarAlt}/> Program
            </h1>
            <div className="row">
                {Array.from(postsByDay, ([key, value]) => {
                    const subeventsForDay = subeventsByDay.get(key);
                    return <InlineDay key={key} day={key} events={value} subeventsForDay={subeventsForDay} />
                })
                }
            </div>
        </Layout>
    )
}

function groupByFra(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        currentFagsamling
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___from], order: ASC}) {
      totalCount
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
            location
            from
            to
            category
            type
            speaker
            subevents
          }
          excerpt
        }
      }
    }
  }
`
;
