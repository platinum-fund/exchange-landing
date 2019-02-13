import React from "react"
import './section_portfolio-short-overview.less'

const PortfolioShortOverview = () => (
  <section className="section section_portfolio-short-overview">
    <div className="wrapper_section-content">
      <div className="column_left">
        <img className="image" src={require('src/images/section-portfolio-short-overview/screen.png')}/>
      </div>
      <div className="column_right">
        <h4 className="title">
          Detailed portfolio information with visualization for easy interpretation
        </h4>
        <h6 className="description">
          A compiling information for personal records analysis and tax obligations made as simple as possible yet very detailed. Specify a time period, currency, a single asset or an entire account.
        </h6>
      </div>
    </div>
  </section>
)

export default PortfolioShortOverview
