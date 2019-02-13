import React from 'react'
import './section_preface.less'

const Preface = () => (
  <section className="section section_preface">
    <div className="wrapper_section-content">
      <header className="headline">
        <h6 className="foreword-title">
          COMING SOON
          <br/>
          OFFICIAL LAUNCH IN Q1 2019
        </h6>
        <h1 className="main-title">
          Trusted Digital Stocks <br/> and Crypto Exchange Platform
        </h1>
        <h2 className="subtitle">
          Invest in Cryptocurrencies and real digital stocks fast, easy and 24/7
        </h2>
      </header>
      <div className="wrapper_cards">
        <div className="card card_theme_main-feature">
          <h4 className="card__title">
            Licensed and Regulated Exchange
          </h4>
          <img className="card__background" src={require('src/images/section-preface/license.svg')}/>
        </div>
        <div className="card card_theme_main-feature">
          <h4 className="card__title">
            Crypto & Digital
            Stocks Trading
          </h4>
          <img className="card__background" src={require('src/images/section-preface/stock.svg')}/>
        </div>
        <div className="card card_theme_main-feature">
          <h4 className="card__title">
            Fiat Gateway
          </h4>
          <img className="card__background" src={require('src/images/section-preface/gateway.svg')}/>
        </div>
      </div>
    </div>
  </section>
)

export default Preface
