import React from 'react'
import './recent.css'

const RecentWork = () => {
  return (
    <div className='recent-container'>
        <h3>My most recent job.</h3>
        <div className='recent-container-info'>
            <h4 className='container-info-name' >Capsulas Express Nutresa</h4>
            <p className='recent-container-info-desc' > I worked on the renovation of the website, which was created using VTEX.io, React.js and Node.js, which allows creating an e-commerce, reusable, scalable and stable. This project took 5 months of development.</p>
            <img className='recent-container-info-img' width="600"src='https://gruponutresa.com/wp-content/uploads/2016/09/capsulas-maquina-nutresabias-Grupo-Nutresa.jpg'/>
            <a className='recent-container-info-link' href="https://www.capsulasexpressnutresa.com/" >Meet him</a>
        </div>
    </div>
  )
}

export default RecentWork