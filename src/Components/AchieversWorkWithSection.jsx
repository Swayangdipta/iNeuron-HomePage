import React, { useContext } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import learnyst from '../assets/learnyst.png'
import boeing from '../assets/boeing.png'
import mindtree from '../assets/mindtree.png'
import geekyants from '../assets/geekyants.png'
import redbus from '../assets/redbus.png'
import wipro from '../assets/wipro.png'
import AppTheme from '../Colors';
import ThemeContext from '../Context/ThemeContext';

const AchieversWorkWithSection = () => {
  const theme= useContext(ThemeContext)[0]
  const currentTheme = AppTheme[theme]

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

  return (
    <div className="achievers__workwith__section" style={{background: currentTheme.workWith.background}}>
        <h1 className="section__title">Our Achiever's Work With</h1>
            <div className="achievers__comapnies">
                <div className="glass"></div>

                <Carousel infinite={true} responsive={responsive} autoPlay={true} arrows={false} className="carousel__auto" >
                    <div className="mySlides2">
                        <img src={learnyst} className="company" />
                    </div>

                    <div className="mySlides2">
                        <img src={geekyants} className="company" />
                    </div>

                    <div className="mySlides2">
                        <img src={redbus} className="company" />
                    </div>

                    <div className="mySlides2">
                        <img src={mindtree} className="company" />
                    </div>

                    <div className="mySlides2">
                        <img src={boeing} className="company" />
                    </div>

                    <div className="mySlides2">
                        <img src={wipro} className="company" />
                    </div>

                  </Carousel>
              </div>
        </div>
  )
}

export default AchieversWorkWithSection