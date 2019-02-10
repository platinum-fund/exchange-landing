import React from "react"
import './section_portfolio-short-overview.less'

const PortfolioShortOverview = () => (
  <section className="section section_portfolio-short-overview">
    <div className="wrapper_section-content">
      <div className="column_left">
        <img className="image" src={require('src/images/section-portfolio-short-overview/screen.png')}/>
      </div>
      <div className="column_right">
        <h6 className="title">
          Compiling information for personal records and tax obligations made as simple as a few mouse clicks. Specify a period time, currency, a single asset or an entire account.
        </h6>
      </div>
    </div>
  </section>
)

export default PortfolioShortOverview
