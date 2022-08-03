import React,{useContext, useState} from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import {FaAngleRight,FaAngleLeft} from 'react-icons/fa'
import AppTheme from '../Colors'
import ThemeContext from '../Context/ThemeContext'

const Menu = ({setMenuOpen=f=>f}) => {
  const theme= useContext(ThemeContext)[0]
  const currentTheme = AppTheme[theme]
  const [current,setCurrent] = useState('main');
  return (
    <div className="menu" style={{background: currentTheme.menu.background}}>
      {
        current === 'main' ? (
          <>
            <div className="menu__close"><AiFillCloseCircle onClick={e=>setMenuOpen(false)} /></div>
            <ul className='menu__list'>
              <li className="menu__item" onClick={e=>setCurrent('courses')} style={{
                background: currentTheme.menu.items,
                color: currentTheme.color
              }} >Courses <FaAngleRight className='menu__more' style={{
                fill: currentTheme.color
              }} /></li>
              <a href="https://ineuron.ai/one-neuron"><li className="menu__item" style={{
                background: currentTheme.menu.items,
                color: currentTheme.color
              }} >One Neuron</li></a>
              <a href="https://jobs.ineuron.ai/"><li className="menu__item" style={{
                background: currentTheme.menu.items,
                color: currentTheme.color
              }} >Job Portal</li></a>
              <a href="https://internship.ineuron.ai/"><li className="menu__item" style={{
                background: currentTheme.menu.items,
                color: currentTheme.color
              }} >Internship Portal</li></a>
              <a href="https://affiliate.ineuron.ai/"><li className="menu__item" style={{
                background: currentTheme.menu.items,
                color: currentTheme.color
              }} >Become an affiliate</li></a>
              <a href="https://halloffame.ineuron.ai/"><li className="menu__item" style={{
                background: currentTheme.menu.items,
                color: currentTheme.color
              }} >Hall of Fame</li></a>
              <a href="https://blog.ineuron.ai/"><li className="menu__item" style={{
                background: currentTheme.menu.items,
                color: currentTheme.color
              }} >Blog</li></a>
              <li className="menu__item" onClick={e=>setCurrent('company')} style={{
                background: currentTheme.menu.items,
                color: currentTheme.color
              }} >Company <FaAngleRight className='menu__more' style={{
                fill: currentTheme.color
              }} /></li>
            </ul>

            <div className="auth">
              <a href="https://account.ineuron.ai/signup"><button className="signin" style={{background: currentTheme.menu.signin}}>Sign in</button></a>
              <a href="https://account.ineuron.ai/signin"><button className="signup">Sign up</button></a>
            </div>
          </>
        ) : current === 'courses' ? (
          <>
            <div className="menu__close"><FaAngleLeft onClick={e=>setCurrent('main')} style={{
                fill: currentTheme.color
              }} /></div>
            <ul className='menu__list'>
              <a href="https://ineuron.ai/courses"><li className="menu__item" style={{
                background: currentTheme.menu.items,
                color: currentTheme.color
              }} >All Courses</li></a>
              <li className="menu__item" style={{
                background: currentTheme.menu.items,
                color: currentTheme.color
              }} >Bigdata<FaAngleRight className='menu__more' style={{
                fill: currentTheme.color
              }} /></li>
              <li className="menu__item" style={{
                background: currentTheme.menu.items,
                color: currentTheme.color
              }} >Data Science<FaAngleRight className='menu__more' style={{
                fill: currentTheme.color
              }} /></li>
              <li className="menu__item" style={{
                background: currentTheme.menu.items,
                color: currentTheme.color
              }} >Web Development<FaAngleRight className='menu__more' style={{
                fill: currentTheme.color
              }} /></li>
              <li className="menu__item" style={{
                background: currentTheme.menu.items,
                color: currentTheme.color
              }} >Mobile Development<FaAngleRight className='menu__more' style={{
                fill: currentTheme.color
              }} /></li>
              <li className="menu__item" style={{
                background: currentTheme.menu.items,
                color: currentTheme.color
              }} >Blockchain<FaAngleRight className='menu__more' style={{
                fill: currentTheme.color
              }} /></li>
              <li className="menu__item" style={{
                background: currentTheme.menu.items,
                color: currentTheme.color
              }} >Programming<FaAngleRight className='menu__more' style={{
                fill: currentTheme.color
              }} /></li>
              <li className="menu__item" style={{
                background: currentTheme.menu.items,
                color: currentTheme.color
              }} >Testing <FaAngleRight className='menu__more' style={{
                fill: currentTheme.color
              }} /></li>
            </ul>
          </>
        ) : current === 'company' ? (
          <>
            <div className="menu__close"><FaAngleLeft onClick={e=>setCurrent('main')} style={{
                fill: currentTheme.color
              }} /></div>
            <ul className='menu__list'>
              <a href="https://ineuron.ai/courses"><li className="menu__item" style={{
                background: currentTheme.menu.items,
                color: currentTheme.color
              }} >All Courses</li></a>
              <a href="https://ineuron.ai/about-us"><li className="menu__item" style={{
                background: currentTheme.menu.items,
                color: currentTheme.color
              }} >About Us</li></a>
              <a href="https://ineuron.ai/contact-us"><li className="menu__item" style={{
                background: currentTheme.menu.items,
                color: currentTheme.color
              }} >Contact Us</li></a>
              <a href="https://ineuron.ai/faqs"><li className="menu__item" style={{
                background: currentTheme.menu.items,
                color: currentTheme.color
              }} >FAQs</li></a>
              <a href="https://ineuron.ai/job-assistance"><li className="menu__item" style={{
                background: currentTheme.menu.items,
                color: currentTheme.color
              }} >Job Assistance</li></a>
              <a href="https://ineuron.ai/job-guarantee"><li className="menu__item" style={{
                background: currentTheme.menu.items,
                color: currentTheme.color
              }} >Job Gurantee</li></a>
              <a href="https://ineuron.ai/terms-and-conditions"><li className="menu__item" style={{
                background: currentTheme.menu.items,
                color: currentTheme.color
              }} >Terms & Conditions</li></a>
              <a href="https://ineuron.ai/privacy-policy"><li className="menu__item" style={{
                background: currentTheme.menu.items,
                color: currentTheme.color
              }} >Privacy Policy</li></a>
              <a href="https://hackathon.ineuron.ai/"><li className="menu__item" style={{
                background: currentTheme.menu.items,
                color: currentTheme.color
              }} >Hack-A-Thon</li></a>
            </ul>
          </>
        ) : ''
      }
    </div>
  )
}

export default Menu