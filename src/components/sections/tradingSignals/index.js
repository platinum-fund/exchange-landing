import React from 'react'
import './section_trading-signals.less'

const TradingSignals = () => (
  <section className="section section_trading-signals">
    <div className="wrapper_section-content">
      <header className="headline">
        <h2 className="title_theme_section">
          Trading Signals
        </h2>
      </header>
      <div className="wrapper_cards">
        <div className="card card_theme_default">
          <header className="card__header">
            <img className="card__image" src={require('src/images/section-trading-signals/analytics.svg')}/>
          </header>
          <h6 className="card__title">
            Analytics
          </h6>
          <p className="card__description">
            Our expert trend prediction algorithm backed by big data analysis and AI will make an analysis to make your decision making process faster and easier.
          </p>
        </div>
        <div className="card arrow-next">
          <img className="arrow-next__image" src={require('src/images/icons/long-arrow.svg')}/>
        </div>
        <div className="card card_theme_default">
          <header className="card__header">
            <img className="card__image" src={require('src/images/section-trading-signals/signal.svg')}/>
          </header>
          <h6 className="card__title">
            Signal
          </h6>
          <p className="card__description">
            Make an easy instant decision to buy or sell certain assets once the signal is received.
          </p>
        </div>
        <div className="card arrow-next">
          <img className="arrow-next__image" src={require('src/images/icons/long-arrow.svg')}/>
        </div>
        <div className="card card_theme_default">
          <header className="card__header">
            <img className="card__image" src={require('src/images/section-trading-signals/action.svg')}/>
          </header>
          <h6 className="card__title">
            Action
          </h6>
          <p className="card__description">
            Confirm your buy or sell order and wait for the next signal.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default TradingSignals
