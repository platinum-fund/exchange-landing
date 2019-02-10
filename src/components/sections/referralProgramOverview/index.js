import React from "react"
import './section_referral-program-overview.less'

const ReferralProgramOverview = () => (
  <section className="section section_referral-program-overview">
    <div className="wrapper_section-content">
      <header className="headline">
        <h2 className="hint hint_theme_default">
          XXX Referral Program
        </h2>
      </header>
      <div className="wrapper_cards">
        <div className="card card_theme_default">
          <header className="card__header">
            <img className="card__image" src={require('src/images/section-referral-program/internet.svg')}/>
          </header>
          <div className="card__title">
            Get your link
          </div>
        </div>
        <div className="card arrow-next">
          <img className="arrow-next__image" src={require('src/images/icons/long-arrow.svg')}/>
        </div>
        <div className="card card_theme_default">
          <header className="card__header">
            <img className="card__image" src={require('src/images/section-referral-program/account.svg')}/>
          </header>
          <div className="card__title">
            Invite Friends
          </div>
        </div>
        <div className="card arrow-next">
          <img className="arrow-next__image" src={require('src/images/icons/long-arrow.svg')}/>
        </div>
        <div className="card card_theme_default">
          <header className="card__header">
            <img className="card__image" src={require('src/images/section-referral-program/reward.svg')}/>
          </header>
          <div className="card__title">
            Get Reward
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ReferralProgramOverview
