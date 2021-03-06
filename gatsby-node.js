/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

function addFieldsToMarkdown(node, getNode, getNodesByType, createNodeField, resolve) {
    const basePath = `pages`;
    const slug = createFilePath({node, getNode, basePath})
    const subevents = node.frontmatter.subevents;
    let subeventIds = [];
    const markdownNodes = getNodesByType(`MarkdownRemark`);
    console.log("# of markdown nodes", markdownNodes.length);
    if (subevents) {
        subeventIds = markdownNodes.filter(mdNode => {
            const basePathLastLetterIndex = mdNode.fileAbsolutePath.indexOf(basePath) + basePath.length;
            const fileRelativePath = mdNode.fileAbsolutePath.substring(basePathLastLetterIndex);
            return subevents.filter(subevent => fileRelativePath.replace('.md', '/').includes(subevent)).length > 0;
        }).map(mdNode => mdNode.id);
        console.log("Number of subevents", subeventIds.length)
    }
    let speakers = [];
    const speaker_links = node.frontmatter.speakers;
    if (speaker_links) {
        speakers = markdownNodes.filter(mdNode => {
            const basePathLastLetterIndex = mdNode.fileAbsolutePath.indexOf(basePath) + basePath.length;
            const fileRelativePath = mdNode.fileAbsolutePath.substring(basePathLastLetterIndex);
            return speaker_links.filter(speaker => fileRelativePath.replace('.md', '/').includes(speaker)).length > 0
        }).map(mdNode => mdNode.id);
    }
    createNodeField({
        node,
        name: `slug`,
        value: slug,
    })
    createNodeField({
        node,
        name: 'subevents___NODE',
        value: subeventIds
    })
    createNodeField({
        node,
        name: 'speakers___NODE',
        value: speakers
    })
    resolve()
}

exports.onCreateNode = ({ node, getNode, getNodesByType, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        return new Promise((resolve, reject) => {
            setTimeout(addFieldsToMarkdown, 1500, node, getNode, getNodesByType, createNodeField, resolve);
        });

    }
}

function createEvent(createPage, node) {
    createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/EventPage.js`),
        context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
        },
    })
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
    {
      allMarkdownRemark(filter: {frontmatter: { page_type: { eq: "event" }}}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createEvent(createPage, node);
        })
    })
}