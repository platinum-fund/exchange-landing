import React from "react"
import './section_kyc-overview.less'

const KycOverview = () => (
  <section className="section section_kyc-overview">
    <div className="wrapper_section-content">
      <header className="headline">
        <h2 className="hint hint_theme_default">
          KYC
        </h2>
      </header>
      <div className="wrapper_cards">
        <div className="card card_main">
          <h6 className="card__title">
            24h Withdrawal Limit:
            <span className="card__title-attention">
              2 BTC
            </span>
          </h6>
          <div className="card__image-wrapper">
            <img className="card__image" src={require('src/images/section-kyc-overview/diamond.svg')} />
          </div>
        </div>
        <div className="card card_arrow" />
        <div className="card card_main">
          <h6 className="card__title">
            24h Withdrawal Limit:
            <span className="card__title-attention">
              100 BTC
            </span>
          </h6>
          <div className="card__image-wrapper">
            <img className="card__image" src={require('src/images/section-kyc-overview/diamond.svg')} />
          </div>
        </div>
        <div className="card card_arrow" />
        <div className="card card_main">
          <h6 className="card__title">
            Higher Limit
          </h6>
          <div className="card__image-wrapper">
            <img className="card__image" src={require('src/images/section-kyc-overview/diamond-inactive.svg')} />
          </div>
          <p className="card__link">
            Contact us
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default KycOverview
