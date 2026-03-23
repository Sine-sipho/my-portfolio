import React from "react";
// import profile from "../assets/profile.jpg"
import profile from "../assets/profile-image.jpg"
import { Download } from "lucide-react";

export default function AboutSection (){
    return(
        <>
        <div className="about-container" id="about-section"> 
            <h1 className="about-heading">Get to know me.</h1>
            <div className="flex">
                <div className="profile-image">
                    <img src={profile} alt="profile" className="profile-img"/>
                </div>
                <div className="bio">
                    <blockquote className="exaggerated-quotes">
                    <p>Sinesipho Siyaka is a talented and dynamic Self-taught Software Developer. She is passionate about building solutions using Full-stack development and AI Systems to solve society's problems.
                        She believes that her purpose is in using technology to improve and enhance people's quality of life. Sinesipho's Journey with Software development began with her taking fundamental courses with online platforms such as SheCodes and the likes.
                        Her journey of learning to code all while isolated has had it's unique set of challenges but it taught her valuable skills such as persistance, problem solving and coping under immense pressure.
                    </p></blockquote>
                    <h2 className="resume-heading">My Resume</h2>
                    <p>Download my latest resume (PDF) by pressing the "Download Resume" button below.</p>
                    <a href="#" download className="download">Download Resume (PDF)<Download color="rgb(23, 23,49)" size={20}/></a>
                </div>
            </div>
        </div>
        </>
    )
}