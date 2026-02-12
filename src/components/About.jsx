import React from "react";
import profile from "../assets/profile.jpg"
import { Download } from "lucide-react";

export default function AboutSection (){
    return(
        <>
        <div className="about-container" id="about-section"> 
            <h1 className="about-heading">Who am I ?</h1>
            <div className="flex">
                <div className="profile-image">
                    <img src={profile} alt="profile" className="profile-img"/>
                </div>
                <div className="bio">
                    <p>Sinesipho Siyaka is a talented and dynamic Self-taught Software Developer. She is passionate about building solutions using Full-stack development and AI Systems to solve society's problems.
                        She believes that her purpose is in using technology to improve and enhance people's quality of life.
                    </p>
                    <a href="#" download className="download">Download Full Resume<Download color="#fff" size={20}/></a>
                </div>
            </div>
        </div>
        </>
    )
}