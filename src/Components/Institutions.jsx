import React, { useContext } from 'react'
import kiet from '../assets/keit.svg'
import taxila from '../assets/taxila.svg'
import vit from '../assets/vit.svg'
import gim from '../assets/gim.svg'
import malnad from '../assets/malnad-college.svg'
import ThemeContext from '../Context/ThemeContext'
import AppTheme from '../Colors'

const Institutions = () => {
  const theme= useContext(ThemeContext)[0]
  const currentTheme = AppTheme[theme]
  return (
    <div className="institutions__section">
        <h1 className="section__title" style={{color: currentTheme.color}}>Our Partnered Institutions</h1>
        <div className="institutions">
            <img src={taxila} alt="" className="institute" />
            <img src={vit} alt="" className="institute" />
            <img src={gim} alt="" className="institute" />
            <img src={kiet} alt="" className="institute" />
            <img src={malnad} alt="" className="institute" />
        </div>
    </div>
  )
}

export default Institutions