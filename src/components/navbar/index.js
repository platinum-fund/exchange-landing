import React from 'react'
import './navbar.less'

const Navbar = props => (
  <section className="section navbar">
    <div className="wrapper_section-content">
      <div className="navbar__logo">
        <img className="navbar__logo-icon" src={require('src/images/icons/logo.svg')} />
      </div>
    </div>
  </section>
)

export default Navbar
