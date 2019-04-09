import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout/Layout"
import SEO from "../components/layout/seo"

const IndexPage = ({location}) => {
    return (
        <Layout location={location}>
            <SEO title="Hjem" keywords={[`gatsby`, `application`, `react`]}/>
            <div className="jumbotron">
                <h1 className="display-4">Velkommen til fagsamling!</h1>
                <h2 className="lead">18. og 19. oktober 2019</h2>
                <hr className="my-4"/>
                <p>Programmet er under utvikling.</p>
                {/*<Link className="btn btn-primary btn-lg" role="button" to="/program/">Se program</Link>*/}
            </div>
        </Layout>
    );
}

export default IndexPage
