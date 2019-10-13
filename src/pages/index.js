import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/Layout"
import SEO from "../components/layout/seo"
import shouldShowInstallMessage from "../utils/webappUtil"

const IndexPage = ({ location }) => {
  const [showInstallMessage, setShowInstallMessage] = useState(false)

  useEffect(() => {
    if (shouldShowInstallMessage()) {
      setShowInstallMessage(true)
    }
  }, [showInstallMessage])

  //TODO: Add check for which browser, and change css depending on that.

  return (
    <Layout location={location}>
      <SEO
        title="Hjem"
        keywords={[`visma`, `fagsamling`, `visma consulting`, `En dag i skyen`]}
      />
      <div className="jumbotron">
        <h1 className="display-4">Velkommen til fagsamling!</h1>
        <h2 className="lead">18. og 19. oktober 2019</h2>
        <hr className="my-4" />
        <p>Programmet er under utvikling.</p>
        {/*<Link className="btn btn-primary btn-lg" role="button" to="/program/">Se program</Link>*/}
      </div>
      {showInstallMessage && (
        <div className="pwaPopup">
          <p>
            Installer nettsiden som en webapp på telefonen din. Trykk på
            del-ikonet og trykk på "Legg til på hjem-skjermen"
          </p>
        </div>
      )}
    </Layout>
  )
}

export default IndexPage
