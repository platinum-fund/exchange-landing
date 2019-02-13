import React from "react"
import './section_full-features.less'
import content from './content'

const FullFeatures = () => (
  <section className="section section_full-features">
    <div className="wrapper_section-content">
      <div className="wrapper_cards">
        {content.features.map(feature => (
          <div className="card card_theme_default">
            <header className="card__header">
              <img className="card__image" src={feature.image}/>
            </header>
            <div className="card__title">
              {feature.title}
            </div>
            <div className="card__description">
              {feature.description}
            </div>
            <a className="card__link">
              {feature.linkName}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default FullFeatures

