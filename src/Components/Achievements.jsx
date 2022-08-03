import React, { useContext } from 'react'
import books from '../assets/books.png'
import graduated from '../assets/graduated.png'
import creditCard from '../assets/credit-card.png'
import ThemeContext from '../Context/ThemeContext'
import AppTheme from '../Colors'

const Achievements = () => {
    const theme= useContext(ThemeContext)[0]
    const currentTheme = AppTheme[theme]

  return (
    <div className="achievement__section">
        <h1 className="section__title" style={{color: currentTheme.achievement.color}}>"Pure Hardwork, No Shortcuts!"</h1>
        <hr className="line__decoration" style={{background: currentTheme.decoration_line}} />

        <div className="achievements">
            <div className="achievement" style={{
                background: currentTheme.achievement.cardBg,
                boxShadow: currentTheme.achievement.shadow
            }}>
                <img src={books} alt="" className="achievement__icon"/>
                <h2 className="achievement__number" style={{
                    color: currentTheme.achievement.color
                }}>400+</h2>
                <h2 className="achievement__type" style={{
                    color: currentTheme.achievement.cardText2
                }}>Different Courses</h2>
            </div>
            <div className="achievement" style={{
                background: currentTheme.achievement.cardBg,
                boxShadow: currentTheme.achievement.shadow
            }}>
                <img src={graduated} alt="" className="achievement__icon"/>
                <h2 className="achievement__number" style={{
                    color: currentTheme.achievement.color
                }}>400000+</h2>
                <h2 className="achievement__type" style={{
                    color: currentTheme.achievement.cardText2
                }}>Enrolled Students</h2>
            </div>
            <div className="achievement" style={{
                background: currentTheme.achievement.cardBg,
                boxShadow: currentTheme.achievement.shadow
            }}>
                <img src={creditCard} alt="" className="achievement__icon"/>
                <h2 className="achievement__number" style={{
                    color: currentTheme.achievement.color
                }}>10000+</h2>
                <h2 className="achievement__type" style={{
                    color: currentTheme.achievement.cardText2
                }}>Successful Transition</h2>
            </div>
        </div>
    </div>
  )
}

export default Achievements