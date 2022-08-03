import React,{useContext} from 'react'
import job from '../assets/suitcase.png'
import internship from '../assets/internship.png'
import affiliate from '../assets/affiliate.png'
import fame from '../assets/fame.png'
import blog from '../assets/blogging.png'
import ThemeContext from '../Context/ThemeContext'
import AppTheme from '../Colors';

const Products = () => {
    const theme= useContext(ThemeContext)[0]
    const currentTheme = AppTheme[theme]
  return (
    <div className="products__section__wrapper">
    <h1 className="section__title" style={{color: currentTheme.color}}>Our Products</h1>
        <div className="products__section">
            <a href="https://jobs.ineuron.ai/">
                <div className="product" style={{
                    background: currentTheme.achievement.cardBg,
                    boxShadow: currentTheme.achievement.shadow
                }}>
                    <img src={job} alt="" className="product__icon" />
                    <h2 className="product__title" style={{
                        color: currentTheme.achievement.color
                    }}>Job Portal</h2>
                    <p className="product__para" style={{
                        color: currentTheme.achievement.cardText2
                    }}>Use exceptional templates for a stand-out resume minus the sign up process.</p>
                </div>
            </a>
            <a href="https://internship.ineuron.ai/">
                <div className="product" style={{
                    background: currentTheme.achievement.cardBg,
                    boxShadow: currentTheme.achievement.shadow
                }}>
                    <img src={internship} alt="" className="product__icon" />
                    <h2 className="product__title" style={{
                        color: currentTheme.achievement.color
                    }}>Internship Portal</h2>
                    <p className="product__para" style={{
                        color: currentTheme.achievement.cardText2
                    }}>iNeuron's self-paced internship portal prioritises hands-on training with 570+ internship projects.</p>
                </div>
            </a>
            <a href="https://affiliate.ineuron.ai/">
                <div className="product" style={{
                    background: currentTheme.achievement.cardBg,
                    boxShadow: currentTheme.achievement.shadow
                }}>
                    <img src={affiliate} alt="" className="product__icon" />
                    <h2 className="product__title" style={{
                        color: currentTheme.achievement.color
                    }}>Become an affiliate</h2>
                    <p className="product__para" style={{
                        color: currentTheme.achievement.cardText2
                    }}>Explore affiliate marketing opportunities with iNeuron and attain financial frredom.</p>
                </div>
            </a>
            <a href="https://halloffame.ineuron.ai/">
                <div className="product" style={{
                    background: currentTheme.achievement.cardBg,
                    boxShadow: currentTheme.achievement.shadow
                }}>
                    <img src={fame} alt="" className="product__icon" />
                    <h2 className="product__title" style={{
                        color: currentTheme.achievement.color
                    }}>Hall of fame</h2>
                    <p className="product__para" style={{
                        color: currentTheme.achievement.cardText2
                    }}>Our student placements and 10+ career transitions speak volumes about our courses.</p>
                </div>
            </a>
            <a href="https://blog.ineuron.ai/">
                <div className="product" style={{
                    background: currentTheme.achievement.cardBg,
                    boxShadow: currentTheme.achievement.shadow
                }}>
                    <img src={blog} alt="" className="product__icon" />
                    <h2 className="product__title" style={{
                        color: currentTheme.achievement.color
                    }}>InBlog</h2>
                    <p className="product__para" style={{
                        color: currentTheme.achievement.cardText2
                    }}>Explore all you want about your favourite courses.</p>
                </div>
            </a>
        </div>
    </div>
  )
}

export default Products