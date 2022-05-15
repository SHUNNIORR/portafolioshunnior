import React from 'react'
import './skills.css'

const Skills = () => {

    const skills = [
        {title:'React.js',url:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png'},
        {title:'Node.js',url:'https://cdn.icon-icons.com/icons2/2699/PNG/512/nodejs_logo_icon_169910.png'},
        {title:'React Native',url:'https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1523276257276-EMMKZ7G962SDZKN2APIN/react_nativ_build_mobile_app-img.png?format=500w'},
        {title:'VTEX.io',url:'https://vtexhelp.vtexassets.com/_v/public/assets/v1/published/vtexhelp.help-io@2.1.3/public/logo.png'},
        {title:'Redux',url:'https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png'},
        {title:'SCSS',url:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png'},
        {title: 'English Level: B1', url:'https://img.genial.ly/5f24b6ce74300d3aa3c043e8/2656ef4c-39ef-4e0d-8605-ce035d0485ce.png'},
        {title: 'HTML5', url:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png'},
        {title: 'CSS3', url:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png'},
        {title: 'Javascript', url:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'},

    ]

  return (
    <div className='skills-container'>
        <h3 >My skills.</h3>
        <div className='skillscard-container'>
            {skills.map((skill, index)=>(
                <div key={index} className='skill-card'>
                    <img className='skill-img' src={skill.url}/>
                    <p className='skill-info' >{skill.title}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills