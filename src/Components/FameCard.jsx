import React,{useContext} from 'react'
import ThemeContext from '../Context/ThemeContext'
import AppTheme from '../Colors';

const FameCard = ({
    image,
    name,
    company,
    feedback,
    social,
    socialLinks
}) => {

    const theme= useContext(ThemeContext)[0]
    const currentTheme = AppTheme[theme]
  return (
    <div className="fame__card" style={{
        background: currentTheme.fame.cardBg,
        boxShadow: currentTheme.fame.shadow,
    }}>
        <div className="upperDecoration__div" style={{background: currentTheme.fame.upper}}></div>
        <img src={image} alt="" className="fame__img" />
        <h2 className="fame__name" style={{color: currentTheme.color}}>{name}</h2>
        <p className="fame__company" style={{color: currentTheme.fame.cardText2}}>{company}</p>
        <p className="fame__feedback" style={{color: currentTheme.fame.cardText2}}>{feedback}</p>
        <div className="fame__social">{
            social.map((elm,index)=>(
                <a key={index} href={socialLinks[index]} className="fame__social__links">
                    {elm}
                </a>
            ))
        }</div>
    </div>
  )
}

export default FameCard