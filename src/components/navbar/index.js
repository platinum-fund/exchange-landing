import React from 'react'
import './navbar.less'

const Navbar = props => (
  <section className="section navbar">
    <div className="wrapper_section-content">
      <div className="navbar__logo">
        <img className="navbar__logo-icon" src={require('src/images/icons/logo.svg')} />
      </div>
      <button className="navbar__menu-button">
        Menu
      </button>
      <div className="navbar__links-wrapper">
        <div className="navbar__links">
          <div className="navbar__main-link">
            <img className="navbar__link-icon" src={require('src/images/icons/apps.svg')}/>
            <p>
              Apps
            </p>
          </div>
          <p className="navbar__link">
            Exchange
          </p>
          <p className="navbar__link">
            Markets
          </p>
          <p className="navbar__link">
            OTC
          </p>
          <p className="navbar__link">
            Spot trading
          </p>
          <p className="navbar__link">
            Ico market
          </p>
        </div>
        <div className="navbar__links">
          <p className="navbar__link">
            Help
          </p>
          <p className="navbar__link">
            Download app
          </p>
          <p className="navbar__link">
            Company
          </p>
          <p className="navbar__link">
            Join us
          </p>
          <p className="navbar__link">
            Support
          </p>
          <div className="navbar__link">
            <img className="navbar__link-icon" src={require('src/images/icons/account.svg')}/>
            <p>
              Login/Registration
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Navbar
