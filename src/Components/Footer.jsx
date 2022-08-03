import React, { useContext } from 'react'
import {MdLocationCity,MdEmail} from 'react-icons/md'
import {FaFacebook,FaLinkedin,FaTwitter,FaYoutube} from 'react-icons/fa'
import logo from '../assets/iNeuronWhite.png'
import ThemeContext from '../Context/ThemeContext'
import AppTheme from '../Colors'

const Footer = () => {
    const theme= useContext(ThemeContext)[0]
    const currentTheme = AppTheme[theme]
  return (
    <footer className="footer" style={{background: currentTheme.footer.background}}>
        <div className="footer__wrapper">
            <div className="footer__first">
                <div className="footer__header"><img src={logo} alt="" className="footer__logo" /></div>
                <ul className="footer__items">
                    <li className="footer__item"><MdLocationCity className='icon__footer' /><a href="https://www.google.com/maps/place/iNeuron.ai/@13.0542869,77.7624757,15z/data=!4m5!3m4!1s0x0:0x89fbcd434743b11b!8m2!3d13.0540489!4d77.7614087">17th Floor Tower A, Brigade Signature Towers, Sannatammanahalli, Bengaluru, Karnataka 562129.</a></li>
                    <li className="footer__item"><MdEmail /> Email: <a href="mailto:contact@ineuron.ai"> contact@ineuron.ai</a></li>
                    <li className="footer__item footer__item__social"><FaFacebook className='footer__social__icon fb'/> <FaTwitter className='footer__social__icon twitter'/> <FaLinkedin className='footer__social__icon linkedin'/> <FaYoutube className='footer__social__icon yt'/></li>
                    <li className="footer__item footer__item__iso">An ISO 9001 Certified Company</li>
                </ul>
            </div>
            <div className="footer__mid">
            <div className="footer__header"><h1 className="footer__title">Company</h1></div>
                <ul className="footer__items">
                    <li className="footer__item"><a href="https://ineuron.ai/about-us">About Us</a></li>
                    <li className="footer__item"><a href="https://ineuron.ai/contact-us">Contact Us</a></li>
                    <li className="footer__item"><a href="https://ineuron.ai/faqs">FAQs</a></li>
                    <li className="footer__item"><a href="https://ineuron.ai/job-assistance">Job Assistance</a></li>
                    <li className="footer__item"><a href="https://ineuron.ai/job-guarantee">Job Gurantee</a></li>
                    <li className="footer__item"><a href="https://ineuron.ai/terms-and-conditions">Terms & Conditions</a></li>
                    <li className="footer__item"><a href="https://ineuron.ai/privacy-policy">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="footer__last">
                <div className="footer__header"><h1 className="footer__title">Products</h1></div>
                <ul className="footer__items">
                    <li className="footer__item"><a href="https://jobs.ineuron.ai/">Job Portal</a></li>
                    <li className="footer__item"><a href="https://internship.ineuron.ai/">Internship Portal</a></li>
                    <li className="footer__item"><a href="https://affiliate.ineuron.ai/">Become an Affiliate</a></li>
                    <li className="footer__item"><a href="https://hackathon.ineuron.ai/">Hack-A-Thon</a></li>
                    <li className="footer__item"><a href="https://halloffame.ineuron.ai/">Hall of Fame</a></li>
                    <li className="footer__item"><a href="https://blog.ineuron.ai/">InBlog</a></li>
                </ul>
            </div>            
        </div>
    </footer>
  )
}

export default Footer