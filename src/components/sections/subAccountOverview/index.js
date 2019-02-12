import React from "react"
import './section_sub-account-overview.less'

const SubAccountOverview = () => (
  <section className="section section_sub-account-overview">
    <div className="wrapper_section-content">
      <div className="card card_theme_subject-features">
        <div className="card__main">
          <h6 className="card__title hint_theme_default">
            Sub-account
          </h6>
          <div className="card__features">
            Multiple trading accounts within a single organization and provide control access on an account level
          </div>
        </div>
        <div className="card__subject">
          <img className="card__subject-image" src={require('src/images/section-sub-account-overview/accounts-tree.svg')} />
        </div>
      </div>
    </div>
  </section>
)

export default SubAccountOverview
