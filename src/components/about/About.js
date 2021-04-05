import React from 'react'
import "./About.css"
import aboutImg from "./../../assets/about-img.jpg"

export const About = ({isScrolling}) => {
    return (
        <div className="container about-container">
            
                <div className={`about-descripcion ${isScrolling>400 && isScrolling<1000? "scrolling-about":null}`}>
                    <h3>Let me tell you something about me</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non sapien vehicula ipsum hendrerit iaculis quis quis lectus. Nam posuere eu leo sagittis accumsan. Aliquam aliquam bibendum sem id egestas. Ut aliquam eleifend finibus. Nulla sollicitudin bibendum convallis. Vestibulum in felis nec nisi sagittis pellentesque. Morbi aliquet tempor eros non interdum. Pellentesque consectetur hendrerit nunc eu pretium. Praesent nec imperdiet dolor.</p>
                </div>
                <div className='about-img '>
                    <img src={aboutImg} className={`about-img-img img-fluid ${isScrolling>400 && isScrolling<1000? "scrolling-img":null}`}></img>
                </div>
           
            
        </div>
    )
}
export default About