import React,{useContext} from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import hitesh from '../assets/hitesh-square.png'
import navin from '../assets/telusko-square.png'
import sudhanshu from '../assets/sudhanshu-square.png'
import krish from '../assets/krish-square.png'
import amresh from '../assets/amresh-square.png'
import saurabh from '../assets/mysirg-square.png'
import saksham from '../assets/saksham-square.png'
import souranghsu from '../assets/Souranghsu-Pal.png'
import AvengerCard from './AvengerCard';
import AppTheme from '../Colors';
import ThemeContext from '../Context/ThemeContext';

const Avengers = () => {
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
    <div className="hallOfFame__section avengers__section">
        <h1 className="section__title" style={{color: currentTheme.color}}>Tech Avengers</h1>
        <div className="hallOfFame__carousal avengers__carousel">
            <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={4000}>
                <AvengerCard 
                image={hitesh}
                name="Hitesh Choudhary"
                role="CTO"
                yt={true}
                links={['https://www.linkedin.com/in/hiteshchoudhary/','https://www.youtube.com/c/HiteshChoudharydotcom']}
                />
                <AvengerCard 
                image={sudhanshu}
                name="Sudhanshu Kumar"
                role="AI Engineer & CEO"
                yt={true}
                links={['https://www.linkedin.com/in/-sudhanshu-kumar/','https://www.youtube.com/c/sudhanshukumarall']}
                />
                <AvengerCard 
                image={krish}
                name="Krish Naik"
                role="CIO"
                yt={true}
                links={['https://www.linkedin.com/in/naikkrish/','https://www.youtube.com/user/krishnaik06']}
                />
                <AvengerCard 
                image={navin}
                name="Navin Reddy"
                role="Senior VP"
                yt={true}
                links={['https://www.linkedin.com/in/navinreddy20/','https://www.youtube.com/c/Telusko']}
                />
                <AvengerCard 
                image={saurabh}
                name="Saurabh Shukla"
                role="Senior VP"
                yt={true}
                links={['https://www.linkedin.com/in/saurabh-shukla-5b73bb6/','https://www.youtube.com/user/saurabhexponent1']}
                />
                <AvengerCard 
                image={saksham}
                name="Saksham Choudhary"
                role="Cyber Security Lead"
                yt={true}
                links={['https://www.linkedin.com/in/saksham-choudhary-6920651a2/','https://www.youtube.com/c/SakshamTheComputerGuy']}
                />
                <AvengerCard 
                image={souranghsu}
                name="Souranghsu Pal"
                role="Mentor"
                yt={false}
                links={['https://www.linkedin.com/in/sourangshu-pal-0774b212a/']}
                />
                <AvengerCard 
                image={amresh}
                name="Amresh Bharti"
                role="VP Marketing"
                yt={true}
                links={['https://www.linkedin.com/in/amresh-bharti-571122166/','https://www.youtube.com/c/MahatmajiTechnical']}
                />
            </Carousel>
        </div> 
    </div>
  )
}

export default Avengers