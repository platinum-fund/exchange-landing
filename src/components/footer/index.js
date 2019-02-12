import React from 'react'
import './footer.less'
import Socials from 'src/components/socials'

const Footer = props => (
  <footer className="footer">
    <section className="section">
      <div className="wrapper_section-content">
        <div className="footer__main">
          <div className="footer__column">
            <div className="footer__logo">
              <img className="footer__logo-icon" src={require('src/images/icons/logo-full.svg')} />
            </div>
            <p className="footer__risk-warning">
              All trading products offered throught FORBES exchange should be coinsidered HIGH RISK
            </p>
          </div>
          <div className="footer__socials">
            <p className="footer__contact-title">
              Contact us
            </p>
            <Socials />
          </div>
        </div>
      </div>
    </section>
    <section className="section section_footer-bottom">
      <div className="wrapper_section-content">
        <div className="footer__bottom">
          <p className="footer__rights">
            © 2019-2020 All rights reserved
          </p>
          <p className="footer__time">
            2019-01-01 21:00:00
          </p>
          <p className="footer__trend-pair">
            <span className="footer__trend-pair-name">
              24h Volume:
            </span>
            <span className="footer__trend-pair-value">
              377,399.19
            </span>
          </p>
          <p className="footer__trend-pair">
            <span className="footer__trend-pair-name">
              BNB /
            </span>
            <span className="footer__trend-pair-value">
              90,823.19
            </span>
          </p>
          <p className="footer__trend-pair">
            <span className="footer__trend-pair-name">
              BTC /
            </span>
            <span className="footer__trend-pair-value">
              142,595.02
            </span>
          </p>
          <p className="footer__trend-pair">
            <span className="footer__trend-pair-name">
              ETH /
            </span>
            <span className="footer__trend-pair-value">
              377,709,524.23
            </span>
          </p>
          <p className="footer__trend-pair">
            <span className="footer__trend-pair-name">
              USD /
            </span>
            <span className="footer__trend-pair-value">
              3,445,136.12
            </span>
          </p>
          <p className="footer__trend-pair">
            <span className="footer__trend-pair-name">
              XRP
            </span>
          </p>
        </div>
      </div>
    </section>
  </footer>
)

export default Footer
