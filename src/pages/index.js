import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css'

const IndexPage = () => (
    <Layout>
        <SEO title="Hjem" keywords={[`gatsby`, `application`, `react`]}/>
        <div className="jumbotron">
            <h1 className="display-4">Velkommen til fagsamling!</h1>
            <h2 className="lead">29. til 30. mars 2019 på <a target="_blank" rel="noopener noreferrer"
                                            href="https://www.google.com/maps/place/Thon+Hotel+Vika+Atrium/@59.9112924,10.722671,17z/data=!3m1!4b1!4m5!3m4!1s0x46416e81c9441aa1:0x13cb91d4ce51ae51!8m2!3d59.9112924!4d10.7248597">Vika
                Atrium</a></h2>
            <hr className="my-4" />
                <p>Vi har jobbet hardt for å lage en fantastisk fagsamling for deg.</p>
            <Link className="btn btn-primary btn-lg" role="button" to="/program/">Se program</Link>
        </div>
    </Layout>
)

export default IndexPage
