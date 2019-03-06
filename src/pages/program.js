import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import Dag from "../components/dag";

export default ({data = {}}) => {
    const posts = data.allMarkdownRemark.edges;
    const postsByDay = groupByFra(posts, item => item.node.frontmatter.fra.substring(0, 10));
    return (
        <Layout>
            <h1>Program</h1>
            {Array.from(postsByDay, ([key, value]) => <Dag key={key} dag={key} poster={value}/>)}
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
          frontmatter {
            title
            sted
            fra
            til
          }
          excerpt
        }
      }
    }
  }
`
;
