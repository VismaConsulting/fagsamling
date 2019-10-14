import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/Layout"
import SEO from "../components/layout/seo"
import { shouldShowInstallMessage } from "../utils/webappUtil"
import MikkoHypponen from "./../images/mikko-hypponen.jpg"
import Vippa from "./../images/vippa.jpg"
import Cookies from "universal-cookie"
import { isIOS, isMobileSafari } from "react-device-detect"

const IndexPage = ({ location }) => {
  const HAS_SEEN_WEBAPP_POPUP = "hasSeenWebappPopup"

  useEffect(() => {
    const cookies = new Cookies()
    if (shouldShowInstallMessage() && !hasSeenWebappPopup()) {
      cookies.set(HAS_SEEN_WEBAPP_POPUP, true, { path: "/", maxAge: 6100000 })
    }
  }, [])

  const hasSeenWebappPopup = () => {
    const cookies = new Cookies()

    return cookies.get(HAS_SEEN_WEBAPP_POPUP)
  }

  return (
    <Layout location={location}>
      <SEO
        title="Hjem"
        keywords={[`visma`, `fagsamling`, `visma consulting`, `En dag i skyen`]}
      />
      <div className="jumbotron" style={{ textAlign: "center" }}>
        <h1 className="display-4">EN KVELD I SKYEN</h1>
        <p className="lead">
          En temakveld om bruk av skytjenester og sikkerhet. Kom og møt
          ekspertene!
        </p>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="landingPageInfoContainer speakerContainer col-sm-12 col-md-4">
            <img
              src={MikkoHypponen}
              className="img-responsive"
              alt="Mikko Hypponen, internasjonal sikkerhetsekspert"
            />
            <p>
              Internasjonal sikkerhetsekspert <b>Mikko Hypponen</b>,{" "}
              <b>Freddie Rinderud</b>, skyleverandørene og <b>Espen Johansen</b>
              , Vismas angrepsekspert
            </p>
          </div>
          <div className="landingPageInfoContainer locationContainer col-sm-12 col-md-4 mt-3">
            <img
              src={Vippa}
              className="img-responsive"
              alt="Mennesker foran Vippa Mathall"
            />
            <p>
              Visma @ Vippa <br /> Fredag 18.oktober 14:30-23:00
            </p>
          </div>
        </div>
      </div>
      <div className="d-md-none d-lg-none d-xl-none text-center">
        <p className="py-0 my-0 d-center-block">Ta en titt på programmet!</p>
        <Link
          className="btn btn-light btn-lg btn-md-block mb-5"
          role="button"
          to="/program/"
        >
          Se program
        </Link>
      </div>
      {isIOS && !hasSeenWebappPopup() && (
        <div className="pwaPopup">
          <p>
            Installer nettsiden som en webapp på telefonen din.{" "}
            {isMobileSafari
              ? "Trykk på del-ikonet og trykk på Legg til på hjem-skjermen"
              : "Åpne opp denne siden i Safari, trykk på del-ikonet og trykk på Legg til på hjem-skjermen"}
          </p>
        </div>
      )}
    </Layout>
  )
}

export default IndexPage
