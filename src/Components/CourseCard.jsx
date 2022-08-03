import React,{useContext} from 'react'
import ThemeContext from '../Context/ThemeContext'
import AppTheme from '../Colors';
const CourseCard = ({
    image,
    title,
    instructor,
    para,
    fee,
    type,
    link
}) => {
  
  const theme= useContext(ThemeContext)[0]
  const currentTheme = AppTheme[theme]
  return (
    <a href={link}>
        <div className="fame__card course__card" style={{
          background: currentTheme.courses.bg,
          boxShadow: currentTheme.fame.shadow
        }}>
            <img src={image} alt="" className="course__img" />
            <h2 className="course__title" style={{color: currentTheme.color}}>{title}</h2>
            {instructor ? (<p className="course__instructor" style={{color: currentTheme.color}}>{instructor}</p>) : (<p className="course__para">{para}</p>)}
            <div className="course__fees">
                <p className="course__fee" style={{color: currentTheme.color}}>{fee !== '0' ?(`₹ ${fee}`) : "FREE"}</p>
                {type ==='Live' ?(<div className="course__type">{type}</div>) : ' '}
            </div>
        </div>  
    </a>
  )
}

export default CourseCard