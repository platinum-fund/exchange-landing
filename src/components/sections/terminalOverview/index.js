import React from "react"
import './section_terminal-overview.less'

const TerminalOverview = () => (
  <section className="section section_terminal-overview">
    <div className="wrapper_section-content">
      <div className="card_theme_subject-features">
        <div className="card__main">
          <h6 className="card__title hint_theme_default">
            Terminal
          </h6>
          <div className="card__features">
            <p className="card__feature">
              XXX has 2 differend terminals:
            </p>
            <p className="card__feature">
              - For fast trading;
            </p>
            <p className="card__feature">
              - For PRO;
            </p>
          </div>
        </div>
        <div className="card__subject">
          <img className="card__subject-image" src={require('src/images/section-terminal/screens.png')} />
        </div>
      </div>
    </div>
  </section>
)

export default TerminalOverview

