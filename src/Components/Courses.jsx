import React, { useState,useContext } from 'react'
import CourseCard from './CourseCard'
import {BsArrowRight} from 'react-icons/bs'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import dsa from '../assets/dsa.jpg'
import bigdata from '../assets/bigdata.jpg'
import java from '../assets/java.jpg'
import digital from '../assets/digital.jpg'
import dsaC from '../assets/MasteringDSAC.jpg'
import dsaJava from '../assets/MasteringDSA.jpg'
import django from '../assets/fullstackDjango.jpg'
import react from '../assets/rjscc.jpg'
import reactEcom from '../assets/ecomreact.jpg'
import python from '../assets/pythoncc.jpg'
import techNeu from '../assets/techNeuron.webp'
import kidNeu from '../assets/kidsneuron.webp'
import htmlInterview from '../assets/htmlCSSInterview.jpg'
import cCoding from '../assets/cCoding.jpg'
import ThemeContext from '../Context/ThemeContext'
import AppTheme from '../Colors';


const Courses = () => {
    const theme= useContext(ThemeContext)[0]
    const currentTheme = AppTheme[theme]
    const [currentSectionValues,setCurrentSectionValues] = useState({
        section: 'live',
        title: "Live Programs",
        para: 'Get your program with live "instructor led" learning.'
    })
    const responsive2 = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
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

    const switchSection = inp => {
        switch (inp) {
            case 'affordable':
                setCurrentSectionValues({
                    section: inp,
                    title: "Affordable Programs",
                    para: "Find your favourite courses in pocket-friendly ways."
                })
                break;
        
            case 'community':
                setCurrentSectionValues({
                    section: inp,
                    title: "Community Programs",
                    para: "Open to all pro-live classes on Youtube for free."
                })
                break;
        
            case 'one':
                setCurrentSectionValues({
                    section: inp,
                    title: "One Neuron",
                    para: "New Neurons all day, every day."
                })
                break;
        
            case 'test':
                setCurrentSectionValues({
                    section: inp,
                    title: "Test Series",
                    para: "Quiz-based courses to prepare you for interviews."
                })
                break;
        
            default:
                setCurrentSectionValues({
                    section: 'live',
                    title: "Live Programs",
                    para: 'Get your program with live "instructor led" learning.'
                })
                break;
        }
    }
  return (
    <div className="courses__section">
        <h1 className="section__title" style={{color: currentTheme.color}}>What you will learn</h1>
        <div className="courses__categories">
            <button 
            style={currentSectionValues.section === 'live' ? {
                background: currentTheme.courses.activeBg,
                border: currentTheme.courses.border
            } : {
                background: currentTheme.courses.bg,
                color: currentTheme.color,
                border: currentTheme.courses.border
            }}
            className={currentSectionValues.section === 'live' ? 'courses__category courses__category__active' : "courses__category"} onClick={e=>switchSection("live")}>Live Programs</button>
            <button 
            style={currentSectionValues.section === 'affordable' ? {
                background: currentTheme.courses.activeBg,
                border: currentTheme.courses.border
            } : {
                background: currentTheme.courses.bg,
                color: currentTheme.color,
                border: currentTheme.courses.border
            }}
            className={currentSectionValues.section === 'affordable' ? "courses__category courses__category__active" : "courses__category"} onClick={e=>switchSection("affordable")}>Affordable Programs</button>
            <button 
            style={currentSectionValues.section === 'community' ? {
                background: currentTheme.courses.activeBg,
                border: currentTheme.courses.border
            } : {
                background: currentTheme.courses.bg,
                color: currentTheme.color,
                border: currentTheme.courses.border
            }}
            className={currentSectionValues.section === 'community' ? "courses__category courses__category__active" : "courses__category"} onClick={e=>switchSection("community")}>Community Programs</button>
            <button 
            style={currentSectionValues.section === 'one' ? {
                background: currentTheme.courses.activeBg,
                border: currentTheme.courses.border
            } : {
                background: currentTheme.courses.bg,
                color: currentTheme.color,
                border: currentTheme.courses.border
            }}
            className={currentSectionValues.section === 'one' ? "courses__category courses__category__active" : "courses__category"} onClick={e=>switchSection("one")}>One Neuron</button>
            <button 
            style={currentSectionValues.section === 'test' ? {
                background: currentTheme.courses.activeBg,
                border: currentTheme.courses.border
            } : {
                background: currentTheme.courses.bg,
                color: currentTheme.color,
                border: currentTheme.courses.border
            }}
            className={currentSectionValues.section === 'test' ? "courses__category courses__category__active" : "courses__category"} onClick={e=>switchSection("test")}>Test Series</button>
        </div>

        <div className="section__secondary__title__wrapper">
            <h2 className="section__secondary__title" style={{color: currentTheme.color}}>{currentSectionValues.title}</h2>
            <p className="section__secondary__para" style={{color: currentTheme.fame.cardText2}}>{currentSectionValues.para}.</p> 
        </div>

        <div className="hallOfFame__carousal courses__carousal">
                {
                    currentSectionValues.section === 'live' ? (
                    <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000}>
                        <CourseCard
                            image={dsa}
                            title="DSA for FAANG prepation with Python and Javascript"
                            instructor="Anurag Tiwari"
                            fee="4000.00"
                            type="Live"
                            link="https://ineuron.ai/course/DSA-for-FAANG-preparation-with-Python-and-JavaScript"
                        />
                        <CourseCard
                            image={bigdata}
                            title="Job Guranteed Big Data Bootcamp"
                            instructor="Shashank Mishra"
                            fee="17700.00"
                            type="Live"
                            link="https://ineuron.ai/course/Job-Guaranteed-Big-Data-Bootcamp"
                        />
                        <CourseCard
                            image={java}
                            title="Full Stack Web Development using Python in Hindi"
                            instructor="Navin Reddy"
                            fee="4000.00"
                            type="Live"
                            link="https://ineuron.ai/course/Full-Stack-Web-Development-using-Python-in-Hindi"
                        />
                        <CourseCard
                            image={digital}
                            title="Digital Marketing Batch 2 in Hindi"
                            instructor="Amresh Bharti"
                            fee="11000.00"
                            type="Live"
                            link="https://ineuron.ai/course/Digital-Marketing-Batch-2-in-Hindi"
                        />
                    </Carousel>
                    ) : currentSectionValues.section === 'affordable' ? (
                        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000}>
                            <CourseCard
                                image={dsaC}
                                title="Mastering DSA with C++"
                                instructor="Hitesh Choudhary"
                                fee="499.00"
                                link="https://ineuron.ai/course/Mastering-DSA-with-C++"
                            />
                            <CourseCard
                                image={dsaJava}
                                title="Mastering DSA with Java"
                                instructor="Hitesh Choudhary"
                                fee="499.00"
                                link="https://ineuron.ai/course/Mastering-DSA-with-Java"
                            />
                            <CourseCard
                                image={django}
                                title="Full Stack Django Developer"
                                instructor="Hitesh Choudhary"
                                fee="499.00"
                                link="https://ineuron.ai/course/Full-Stack-Django-Developer"
                            />
                        </Carousel>
                    ) : currentSectionValues.section === 'community' ? (
                        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000}>
                        <CourseCard
                            image={react}
                            title="Build an Ecommerce with ReactJS"
                            instructor="Hitesh Choudhary"
                            fee="0"
                            link="https://ineuron.ai/course/Build-an-Ecommerce-with-ReactJS"
                        />
                        <CourseCard
                            image={reactEcom}
                            title="ReactJS Crash Course"
                            instructor="Hitesh Choudhary"
                            fee="0"
                            link="https://ineuron.ai/course/ReactJS-Crash-Course"
                        />
                        <CourseCard
                            image={python}
                            title="Python Crash Course by Hitesh"
                            instructor="Hitesh Choudhary"
                            fee="0"
                            link="https://ineuron.ai/course/Python-Crash-Course-by-Hitesh"
                        />
                    </Carousel>
                    ) : currentSectionValues.section === 'one' ? (
                        <Carousel responsive={responsive2} autoPlay={true} autoPlaySpeed={5000}>
                            <CourseCard
                                image={techNeu}
                                title="Tech Neuron"
                                para = "200+ courses, 500+ projects, raise your demand option, consistent services from iNeuron, work 1:1 with experts"
                                fee="25000.00"
                            />
                            <CourseCard
                                image={kidNeu}
                                title="Kids Neuron"
                                para="Lifetime access, Raise your demand option, Live Classes for all Tech Courses, Consistent services from iNeuron, One to One Mentorship,Personal Doubt..."
                                fee="7080.00"
                            />
                        </Carousel>
                    ) : currentSectionValues.section === 'test' ? (
                        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000}>
                            <CourseCard
                                image={htmlInterview}
                                title="HTML CSS Coding Interview Preparation"
                                fee="499.00"
                                link="https://ineuron.ai/course/HTML-CSS-Coding-Interview-Preparation"
                            />
                            <CourseCard
                                image={cCoding}
                                title="C Coding Interview Preparation"
                                fee="499.00"
                                link="https://ineuron.ai/course/C-Coding-Interview-Preparation"
                            />
                            <CourseCard
                                image={htmlInterview}
                                title="HTML CSS Coding Interview Preparation"
                                fee="499.00"
                                link="https://ineuron.ai/course/HTML-CSS-Coding-Interview-Preparation"
                            />
                        </Carousel>
                    ) : ''
                }
        </div> 

        <a href="https://ineuron.ai/courses" className="view__more" style={{color: currentTheme.fame.viewMore}}>View More <BsArrowRight className='fame__arrow__right' style={{fill: currentTheme.fame.viewMore}} /></a>
    </div>
  )
}

export default Courses