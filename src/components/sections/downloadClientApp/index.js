import React from 'react'
import './section_download-client-app.less'

const DownloadClientApp = () => (
  <section className="section section_download-client-app">
    <div className="wrapper_section-content">
      <header className="headline">
        <h2 className="title title_theme_section">
          Download BTCNEXT exchange client
        </h2>
      </header>
      <div className="wrapper_cards">
        <div className="card">
          <div className="card__image-wrapper">
            <img
              className="card__image"
              src={require(`src/images/section-download-client-app/desktop.svg`)}
            />
          </div>
          <div className="card__list">
            <div className="card__list-item">
              <img
                className="card__list-item-icon"
                src={require('src/images/icons/apple.svg')}
              />
              <p className="card__list-item-content">Download for Mac</p>
            </div>
            <div className="card__list-item">
              <img
                className="card__list-item-icon"
                src={require('src/images/icons/windows.svg')}
              />
              <p className="card__list-item-content">Download for Windows</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__image-wrapper">
            <img
              className="card__image"
              src={require(`src/images/section-download-client-app/mobile.svg`)}
            />
          </div>
          <div className="card__list">
            <div className="card__list-item">
              <img
                className="card__list-item-icon"
                src={require('src/images/icons/apple.svg')}
              />
              <p className="card__list-item-content">Download for IOS</p>
            </div>
            <div className="card__list-item">
              <img
                className="card__list-item-icon"
                src={require('src/images/icons/windows.svg')}
              />
              <p className="card__list-item-content">Download for Android</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default DownloadClientApp
