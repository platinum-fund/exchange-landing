import React from 'react'
import socials from './content'
import './socials.less'

const Socials = () => (
  <div className="socials">
    {socials.map((social, i) => (
      <a
        className="socials__link"
        href={social.link}
        target="_blank"
        rel="nofollow noopener noreferrer"
        key={`socialsSlide${i}`}
      >
        <img className="socials__icon" src={social.icon} />
      </a>
    ))}
  </div>
)

export default Socials
