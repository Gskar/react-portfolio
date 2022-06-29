import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'


function HeaderSocials() {
  return (
    <div className="header__socials">
        <a href="htttps://linkedin.com" target='_blank'><BsLinkedin /></a>
        <a href="htttps://github.com" target='_blank'><FaGithub /></a>
        <a href="htttps://dribble.com" target='_blank'><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials