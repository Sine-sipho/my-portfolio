import React from "react";
import Projectbox from "./Project-box";
import { Images } from "lucide-react";
import form from "../assets/auth-system-preview.png"
import DIY from "../assets/DIY-preview-image.png"
import RecipeGenerator from "../assets/recipe-generator.png"



export default function Projects(){

    const tools = ["Html", "Css", "JavaScript", "React", "NodeJs", "Git", "API"]
    
    const cambridgeDiyProject = tools.filter((_, index) => index <= 2 || index === 4 || index === 5)
    const userAuthenticationProject = tools.filter((_, index) => index <= 2 || index >=4)
    const aiChatbotProject = tools.filter((_, index) => index)

    return(
        <>
        <div className="projects-container" id="projects-section">
            <div className="projects-heading"><p>My notable Projects</p></div>
            <div className="projects-grid">
                <Projectbox itemNumber="01" image={DIY} description="Building Material Retail-Company" brief="A responsive website built with modern frontend technologies, featuring a clean UI and optimized performance across devices. It follows best practices for accessibility, SEO, and maintainable code structure to deliver a seamless user experience." tools={cambridgeDiyProject} link={"https://cambridgediy.netlify.app/"} />
                <Projectbox itemNumber="02" image={form} description="Login & Signup authentication" brief="A secure authentication system featuring user registration and login with form validation and error handling. It implements encrypted password storage and session management to ensure safe and reliable access control." tools={userAuthenticationProject} link={"https://login-redistration-auth-form.netlify.app/"}/>
                <Projectbox itemNumber="03" image={RecipeGenerator} description="AI Prompt Recipe Gernerator" brief="An AI-powered recipe generator that creates customized meal ideas based on user-input ingredients, dietary preferences, and cuisine styles. It leverages natural language processing to deliver structured, easy-to-follow recipes in real time." tools={aiChatbotProject} link={"https://scratchrecipes.netlify.app/"}/>
            </div>
        </div>
        </>
    )
}