import React, { useContext, useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import card1Img from '../assets/car1Landing.png'
import card2Img from '../assets/car2Landing.png'
import card3Img from '../assets/car3Landing.png'
import iNeuronLogo from '../assets/iNeuronWhite.png'
import {BiSearch,BiMenu} from 'react-icons/bi'
import {MdToggleOff,MdToggleOn} from 'react-icons/md'
import Menu from './Menu';
import SearchForm from './SearchForm';
import ThemeContext from '../Context/ThemeContext';
import AppTheme from '../Colors';

const Landing = () => {

    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const [isSearchOpen,setIsSearchOpen] = useState(false)
    const [themeMode,setThemeMode] = useContext(ThemeContext)
    const theme= useContext(ThemeContext)[0]
    const currentTheme = AppTheme[theme]


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    const toggleTheme = () => {
        setThemeMode(themeMode === 'dark' ? 'light' : 'dark')
    }

    useEffect(()=>{
        document.querySelector('body').style.background = currentTheme.background
    },[currentTheme])

  return (
    <div className="landing__section">
        <header className="landing__header" style={{
            background: currentTheme.landing.headerBackground,
            boxShadow: currentTheme.fame.shadow
        }}>
            <nav className="landing__navbar">
                <img src={iNeuronLogo} alt="iNeuron Logo" className="navbar__logo"/>
                <form className="navbar__searchBox">
                    <input type="text" name="search" placeholder="What do you want to learn?" className="navbar__search" />
                    <BiSearch className='navbar__searchIcon' />
                </form>
                <div className="navbar__end">
                    <BiSearch className="navbar__theme__width600" onClick={e=> setIsSearchOpen(!isSearchOpen)} />
                    {
                        themeMode === 'light' ? 
                            (<MdToggleOff className="navbar__theme" onClick={toggleTheme} />) 
                            : (<MdToggleOn className="navbar__theme" onClick={toggleTheme} />)
                    }
                    <BiMenu className="navbar__menu" onClick={e=> setIsMenuOpen(!isMenuOpen)} />
                </div>
            </nav>
        </header>

        {
            isSearchOpen && (<SearchForm setIsSearchOpen={setIsSearchOpen} />)
        }

        {
            isMenuOpen && (<Menu setMenuOpen={setIsMenuOpen} />)
        }

        <div className="slideshow-container landing__carousal">
            <div className="glass"></div>
            <Carousel swipeable={false} responsive={responsive} infinite={true} className="carousel">
                <div className="mySlides fade" >
                    <img src={card1Img} className="car__first__img" />
                    <div className="text">
                        <h2 className="text__first">Learn from the best of industry</h2>
                        <hr className="line__decoration__landing" />
                        <h1 className="text__title">Highest in quality, affordable in price</h1>
                        <p className="text__para">Digital entrepreneurs, Youtubers and content creators provide affordable courses across technologies.</p>
                    </div>
                </div>
                
                <div className="mySlides fade" >
                    <img src={card2Img} />
                    <div className="text">
                        <h2 className="text__first">Our achivers works at top MNC's and startups</h2>
                        <hr className="line__decoration__landing" />
                        <h1 className="text__title">Learning that makes you ready for job</h1>
                        <p className="text__para">Over 10k+ students got placed and proved that our courses worked for them. They write their own success story and make us feel rewarded</p>
                    </div>
                </div>
                
                <div className="mySlides fade" >
                    <img src={card3Img} />
                    <div className="text">
                        <h2 className="text__first">24 hours of learning, networking and jobs on the floor</h2>
                        <hr className="line__decoration__landing" />
                        <h1 className="text__title">Hack-A-Thon</h1>
                        <p className="text__para">Our 24 hour offline coding events such as Hack-a-thons, Job-a-thons and Course-a-thons give participants an opportunity to exhibit their skills and receive prizes for completing courses, or get recruited for their skillset.</p>
                    </div>
                </div>
                <div className="mySlides fade" >
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/NCZwoMcgk50" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; 
                                autoplay; 
                                clipboard-write; 
                                encrypted-media; 
                                gyroscope; 
                                picture-in-picture" 
                        allowfullscreen
                        style={{height: '70%'}}
                    ></iframe>
                    <div className="text" style={{
                            bottom: '40px'
                        }}>
                        <h1 className="text__title">Put Your Impact, Write More Code</h1>
                        <p className="text__para" style={{
                            fontSize: "18px"
                        }}>
                            Write more code,
                            Build more stuff,
                            I WRITE CODE
                        </p>
                    </div>
                </div>
            </Carousel>
        </div>
    </div>
  )
}

export default Landing