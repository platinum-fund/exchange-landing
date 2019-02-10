import React from 'react'
import './section_preface.less'

const Preface = () => (
  <section className="section section_preface">
    <div className="wrapper_section-content">
      <header className="headline">
        <h6 className="foreword-title">
          COMING SOON
        </h6>
        <h1 className="main-title">
          The Most Trusted Digital Stocks and Crypto Exchange Platform
        </h1>
        <h2 className="subtitle">
          Invest in Cryptocurrencies and real digital stocks fast, easy and 24/7
        </h2>
      </header>
      <div className="wrapper_main-actions">
        <button className="button button_theme_light-main">
          Get Started
        </button>
      </div>
      <div className="wrapper_articles">
        {[1,2,3].map(() => (
          <div className="card card_theme_article-preview">
            <header className="card__header">
              STO tokens trading
            </header>
            <div className="card__body">
              COMING SOON
            </div>
            <div className="card__footer">
              Read more>>
            </div>
          </div>
        ))}
      </div>
      <div className="wrapper_trend-charts">
        {[1,2,3,4,5].map(() => (
          <div className="trend-chart trend-chart_theme_mini">
            <header className="trend-chart__header">
              <h6 className="trend-chart__name">
                BTC/PAX
              </h6>
              <p className="trend-chart__difference _positive">
                +0.38%
              </p>
            </header>
            <div className="trend-chart__body">
              <div className="trend-chart__price">
                <p className="trend-chart__price-main">
                  0.0007049
                </p>
                <p className="trend-chart__price-second">
                  $3,677,91
                </p>
              </div>
              <p className="trend-chart__volume">
                Volume: 1,111.01 BTC
              </p>
            </div>
            <div className="trend-chart__graph">
              <img className="trend-chart__graph-image" src={require('src/images/graph-example.svg')}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Preface
