import { graphql } from "gatsby"

export default ( props ) => {
    return null;
}

export const query = graphql`
fragment CommonEventFragment on MarkdownRemark {
    id
    excerpt
    html
    fields {
      slug
    }
    frontmatter {
      title
      from
      to
      speaker
      type
      category
      location
    }
}
`;