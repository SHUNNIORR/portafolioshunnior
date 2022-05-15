import React from 'react'
import "./About.css"

export const About = ({isScrolling}) => {
    return (
        <div className="container about-container">
            
                <div className={`about-descripcion ${isScrolling>400 && isScrolling<1000? "scrolling-about":null}`}>
                    <h3>Let me tell you something about me</h3>
                    <p>Dedicated, responsible, self-taught, productive, technology enthusiast, who is always looking for new challenges and never stops learning, apart from being a lover of interface design, I am currently finishing my studies in Systems Engineering in Cúcuta, Colombia.</p>
                </div>
                <div className='about-img '>
                    <img src="https://avatars.githubusercontent.com/u/54753972?v=4" className={`about-img-img img-fluid ${isScrolling>400 && isScrolling<1000? "scrolling-img":null}`} style={{borderRadius:"50%"}}></img>
                </div>
           
            
        </div>
    )
}
export default About