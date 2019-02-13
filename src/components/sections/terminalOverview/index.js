import React from "react"
import './section_terminal-overview.less'

const TerminalOverview = () => (
  <section className="section section_terminal-overview">
    <div className="wrapper_section-content">
      <header className="headline">
        <h2 className="title title_theme_section">
          FORBES Exchange Trading Terminal Has Two Modes
        </h2>
        <h3 className="subtitle">
          <span className="subtitle_theme_attention">
            Basic:
          </span>
          for quick and easy trading
        </h3>
        <h3 className="subtitle">
          <span className="subtitle_theme_attention">
            Advanced:
          </span>
          for professional traders
        </h3>
      </header>
      <div className="gallery">
        <img className="gallery__image" src={require('src/images/section-terminal/screens.png')} />
      </div>
    </div>
  </section>
)

export default TerminalOverview

