import React from "react"
import './section_identity-verification.less'

const IdentityVerificationOverview = () => (
  <section className="section section_identity-verification">
    <div className="wrapper_section-content">
      <header className="headline">
        <h2 className="hint hint_theme_default">
          Select Identity Verification Type
        </h2>
      </header>
      <div className="wrapper_cards">
        <div className="card">
          <div className="card__image-wrapper">
            <img className="card__image" src={require('src/images/section-identity-verification/personal.svg')}/>
          </div>
          <div className="card__main">
            <h6 className="card__title">
              Personal
            </h6>
            <p className="card__description">
              Personal info > Processing > Approval
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card__image-wrapper">
            <img className="card__image" src={require('src/images/section-identity-verification/enterprise.svg')}/>
          </div>
          <div className="card__main">
            <h6 className="card__title">
              Enterprise
            </h6>
            <p className="card__description">
              Contact info > Company info > Approval
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default IdentityVerificationOverview
