import React from 'react'
import "./Footer.css"
import footerVideo from "./../../assets/footer-video.mp4"
export const Footer = () => {
    return (
        <footer className="footer">
            <video className="video-footer" src={footerVideo} autoPlay loop muted></video>
            <div className="footer-info">
                <h1>Jorge Perez.</h1>
                <p> <i>Front-end & React Developer.</i> </p>
            </div>
            <div className="footer-contact">
                <h3>Contact me</h3>
                <p>And let´s get down to work</p>
                <p ><i class="fas fa-envelope"></i> jperezpenaranda@gmail.com</p>
            </div>
            <div className="footer-sns">
                <div className="design-by">
                    Design by  <p className="footer-nombre">Shunnior.</p>
                </div>
                <div className="sns-links">
                    <a className="social" href="https://www.linkedin.com/in/jorge-perez-a8b20a188/" target="_blank" rel="noreferrer">
                        <i className=" fab fa-linkedin linkedin"></i>                       
                    </a>
                    <a className="social" href="https://github.com/SHUNNIORR" target="_blank" rel="noreferrer">
                        <i className=" fab fa-github github"></i>
                    </a>
                    <a className="social" href="https://www.instagram.com/shunnior/" target="_blank" rel="noreferrer">
                        <i className=" fab fa-instagram instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
