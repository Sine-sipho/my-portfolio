import React from "react"
import { Link } from "react-scroll"
import { ArrowDown } from "lucide-react"

export default function Hero(){

    return(
        <>
        <div className="hero-container">
        <nav className="nav-bar">
            <div className="logo"><h1><span></span></h1></div>

             <div class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div> 

            <div className="nav-bar-links">
                <ul className="nav-links">
                    <li><Link to="home-section" smooth="true" duration="500">Home</Link></li>
                    <li><Link to="skills-section" smooth="true" duration="500">Skills</Link></li>
                    <li><Link to="projects-section" smooth="true" duration="500">Projects</Link></li>
                    <li><Link to="about-section" smooth="true" duration="500">About</Link></li>
                    <li><Link to="contact-section" smooth="true" duration="500">Contact</Link></li>
                </ul>
            </div>
        </nav>
        <div className="content">
            <h1>Hi, I'm Sinesipho. <br/> I'm an aspiring <span id="title"> Software Developer.</span></h1>
            <div className="pull-down-arrow">
                <p>Scroll to see my work</p>
                <span><Link to="projects-section" smooth="true" duration="500"><ArrowDown color="rgb(23, 23, 49)" size={35}/></Link></span>
            </div>
        </div>
        </div>
        </>
    )
}