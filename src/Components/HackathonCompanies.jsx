import React,{useContext} from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import github from '../assets/github.png'
import geekyants from '../assets/geekyants.png'
import learnyst from '../assets/learnyst.png'
import nvidia from '../assets/nvidia.png'
import redis from '../assets/redis.png'
import jetbrains from '../assets/jetbrains.png'
import ThemeContext from '../Context/ThemeContext'
import AppTheme from '../Colors';

const HackathonCompanies = () => {
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
    <div className="hackathon__section" style={{
      background: currentTheme.hack.bg
    }}>
    <h1 className="section__title">Hackathon Companies</h1>

        <div className="hackathon__companies__autoScroll">
            <div className="glass"></div>
            <Carousel infinite={true} responsive={responsive} autoPlay={true} arrows={false} className="carousel__auto" >
                <div className="mySlides2">
                        <img src={github} className="company" />
                </div>
                <div className="mySlides2">
                        <img src={geekyants} className="company" />
                </div>
                <div className="mySlides2">
                        <img src={learnyst} className="company" />
                </div>
                <div className="mySlides2">
                        <img src={jetbrains} className="company" />
                </div>
                <div className="mySlides2">
                        <img src={redis} className="company" />
                </div>
                <div className="mySlides2">
                        <img src={nvidia} className="company" />
                </div>
            </Carousel>
        </div>
    </div>

  )
}

export default HackathonCompanies