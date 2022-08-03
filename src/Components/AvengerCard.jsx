import React, { useContext } from 'react'
import {FaLinkedin,FaYoutube} from 'react-icons/fa'
import AppTheme from '../Colors'
import ThemeContext from '../Context/ThemeContext'


const AvengerCard = ({
    image,
    name,
    role,
    yt,
    links
}) => {
  const theme= useContext(ThemeContext)[0]
  const currentTheme = AppTheme[theme]
  return (
    <div className="avenger__card" style={{
      background: currentTheme.avenger.background,
      boxShadow: currentTheme.fame.shadow
    }}>
        <div className="decoration__bg" style={{backgroundColor: currentTheme.avenger.decoration}}></div>
        <img src={image}alt="" className="avenger__img" style={{background: currentTheme.avenger.decoration}} />
        <h2 className="avenger__name" style={{color: currentTheme.avenger.text}}>{name}</h2>
        <p className="avenger__role" style={{color: currentTheme.avenger.para}}>{role}</p>
        <div className="avenger__social">
            <a href={links[0]}><FaLinkedin className='avenger__linkedin' /></a>
            {yt && (<a href={links[1]}><FaYoutube className='avenger__youtube' /></a>)}
        </div>
    </div>
  )
}

export default AvengerCard