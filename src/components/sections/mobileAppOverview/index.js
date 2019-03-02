import React from 'react'

const MobileAppOverview = () => (
  <section className="section section_mobile-app-overview">
    <div className="wrapper_section-content">
      <div className="card card_theme_subject-features">
        <div className="card__main">
          <h5 className="card__title">BTCNEXT Exchange Mobile App</h5>
          <h6 className="card__subtitle">Trade Anytime and Anywhere</h6>
          <div className="card__features">
            <p className="card__feature">
              - All the tools available via our web version
            </p>
            <p className="card__feature">- User friendly interface</p>
            <p className="card__feature">- Crypto newsfeed</p>
            <p className="card__feature">- Kline chart at Trading panel</p>
            <p className="card__feature">
              - Switch between Fiat, Digital Stocks and Crypto arketseasily
            </p>
            <p className="card__feature">
              - Trading auxiliary functions are integrated together
            </p>
            <p className="card__feature">
              - Customize your trading panel the way you want it with various
              indicators
            </p>
          </div>
        </div>
        <div className="card__subject">
          <img
            className="card__subject-image"
            src={require('src/images/section-mobile-app-overview/mobile.png')}
          />
        </div>
      </div>
    </div>
  </section>
)

export default MobileAppOverview
