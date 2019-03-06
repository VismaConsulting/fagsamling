import React from "react"

const Programpost = ({post}) => {
    const {frontmatter, excerpt} = post;
    return (
        <div style={{border: '1px solid #ccc', padding: '10px', marginBottom: '10px'}}>
            <h3>{frontmatter.fra.split('T')[1]}</h3>
            <h4>{frontmatter.title}</h4>
            <h5>{frontmatter.sted}</h5>
            <p>{excerpt}</p>
        </div>
    )
};
export default Programpost
