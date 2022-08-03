import React, { useContext } from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import FameCard from './FameCard';
import tempPhoto1 from '../assets/jurica.jpg'
import tempPhoto2 from '../assets/luis-villasmil.jpg'
import tempPhoto3 from '../assets/may-gauthier.jpg'
import tempPhoto4 from '../assets/toa-heftiba.jpg'
import {FaLinkedin} from 'react-icons/fa'
import {BsArrowRight} from 'react-icons/bs'
import ThemeContext from '../Context/ThemeContext'
import AppTheme from '../Colors';

const HallOfFame = () => {
  const theme= useContext(ThemeContext)[0]
  const currentTheme = AppTheme[theme]

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
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
  return (
    <div className="hallOfFame__section">
        <h1 className="section__title" style={{
          color: currentTheme.color
        }}>Hall of fame</h1>
        <div className="hallOfFame__carousal">
            <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={4000}>
                <FameCard image={tempPhoto1} 
                    name="John Doe"
                    company="Lorem ipsum dolor sit amet."
                    feedback="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti nostrum necessitatibus excepturi fuga deserunt, quo error unde quasi? Odio, atque."
                    social={[<FaLinkedin className="fame__social__link" />]} 
                    socialLinks={['#']} 
                />

                <FameCard image={tempPhoto4} 
                    name="Jane Doe"
                    company="Lorem ipsum dolor sit amet."
                    feedback="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti nostrum necessitatibus excepturi fuga deserunt, quo error unde quasi? Odio, atque."
                    social={[<FaLinkedin className="fame__social__link" />]} 
                    socialLinks={['#']} 
                />

                <FameCard image={tempPhoto3} 
                    name="John Doe"
                    company="Lorem ipsum dolor sit amet."
                    feedback="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti nostrum necessitatibus excepturi fuga deserunt, quo error unde quasi? Odio, atque."
                    social={[<FaLinkedin className="fame__social__link" />]} 
                    socialLinks={['#']} 
                />

                <FameCard image={tempPhoto2} 
                    name="John Doe"
                    company="Lorem ipsum dolor sit amet."
                    feedback="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti nostrum necessitatibus excepturi fuga deserunt, quo error unde quasi? Odio, atque."
                    social={[<FaLinkedin className="fame__social__link" />]} 
                    socialLinks={['#']} 
                />

                <FameCard image={tempPhoto4} 
                    name="Jane Doe"
                    company="Lorem ipsum dolor sit amet."
                    feedback="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti nostrum necessitatibus excepturi fuga deserunt, quo error unde quasi? Odio, atque."
                    social={[<FaLinkedin className="fame__social__link" />]} 
                    socialLinks={['#']} 
                />

                <FameCard image={tempPhoto3} 
                    name="John Doe"
                    company="Lorem ipsum dolor sit amet."
                    feedback="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti nostrum necessitatibus excepturi fuga deserunt, quo error unde quasi? Odio, atque."
                    social={[<FaLinkedin className="fame__social__link" />]} 
                    socialLinks={['#']} 
                />

            </Carousel>
        </div> 
        
        <a href="https://halloffame.ineuron.ai/" className="view__more" style={{color: currentTheme.fame.viewMore}}>View More <BsArrowRight className='fame__arrow__right' style={{fill: currentTheme.fame.viewMore}} /></a>
    </div>
  )
}

export default HallOfFame