import React from 'react'
import './section_trend-chart-overview.less'

const TrendChartOverview = () => (
  <section className="section section_trend-chart-overview">
    <div className="wrapper_section-content">
      <div className="wrapper_trend-charts">
        <div className="trend-chart trend-chart_theme_medium">
          <header className="trend-chart__header">
            <h6 className="trend-chart__name">
              BTC/TRX
            </h6>
            <p className="trend-chart__difference _positive">
              + 35.5%
            </p>
          </header>
          <div className="trend-chart__body">
            <div className="trend-chart__graph">
              <img className="trend-chart__graph-image" src={require('src/images/section-graphs/example-graph.svg')}/>
            </div>
          </div>
          <div className="trend-chart__footer">
            <h6 className="trend-chart__price">
              $ 29,000
            </h6>
            <button className="trend-chart__action-button button_theme_action">
              In stock
            </button>
          </div>
        </div>
        <div className="trend-chart trend-chart_theme_medium">
          <header className="trend-chart__header">
            <h6 className="trend-chart__name">
              BTT/USDT
            </h6>
            <p className="trend-chart__difference _positive">
              + 28.5%
            </p>
          </header>
          <div className="trend-chart__body">
            <div className="trend-chart__graph">
              <img className="trend-chart__graph-image" src={require('src/images/section-graphs/example-graph.svg')}/>
            </div>
          </div>
          <div className="trend-chart__footer">
            <h6 className="trend-chart__price">
              $ 29,000
            </h6>
            <button className="trend-chart__action-button button_theme_action">
              In stock
            </button>
          </div>
        </div>
        <div className="trend-chart trend-chart_theme_medium">
          <header className="trend-chart__header">
            <h6 className="trend-chart__name">
              XRP/ETH
            </h6>
            <p className="trend-chart__difference _positive">
              + 10.1%
            </p>
          </header>
          <div className="trend-chart__body">
            <div className="trend-chart__graph">
              <img className="trend-chart__graph-image" src={require('src/images/section-graphs/example-graph.svg')}/>
            </div>
          </div>
          <div className="trend-chart__footer">
            <h6 className="trend-chart__price">
              $ 29,000
            </h6>
            <button className="trend-chart__action-button button_theme_action">
              In stock
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default TrendChartOverview
