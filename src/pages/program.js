import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import Dag from "../components/dag";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

export default ({data = {}}) => {
    const posts = data.allMarkdownRemark.edges;
    const hovedposter = posts.filter(item => item.node.frontmatter.type !== 'underprogrampost');
    const underposter = posts.filter(item => item.node.frontmatter.type === 'underprogrampost');
    const postsByDay = groupByFra(hovedposter, item => item.node.frontmatter.fra.substring(0, 10));
    const underposterByDay = groupByFra(underposter, item => item.node.frontmatter.fra.substring(0, 10));
    return (
        <Layout>
            <h1 style={{marginBottom: '30px'}}>
                <FontAwesomeIcon style={{fontSize: '0.8em'}} icon={faCalendarAlt}/> Program
            </h1>
            <div className="row">
                {Array.from(postsByDay, ([key, value]) => {
                    const underposter = underposterByDay.get(key);
                    return <Dag key={key} dag={key} poster={value} underposter={underposter} />
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
    allMarkdownRemark(sort: {fields: [frontmatter___fra], order: ASC}) {
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
            sted
            fra
            til
            kategori
            type
            speaker
            undersider
          }
          excerpt
        }
      }
    }
  }
`
;
