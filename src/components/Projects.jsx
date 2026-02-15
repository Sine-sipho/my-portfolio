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
                <Projectbox itemNumber="1" image={DIY} description="Building Material Retail-Company" brief="Custom company branding website to showcase the products and services of a retail business" tools={cambridgeDiyProject} link={"https://cambridgediy.netlify.app/"} />
                <Projectbox itemNumber="2" image={form} description="Login & Signup authentication" brief="A portal to ensure a secure and safe user authentication platform." tools={userAuthenticationProject} link={"https://login-redistration-auth-form.netlify.app/"}/>
                <Projectbox itemNumber="3" image={RecipeGenerator} description="Open AI LLM chatbot" brief="An AI recipe generator." tools={aiChatbotProject} link={"https://scratchrecipes.netlify.app/"}/>
            </div>
        </div>
        </>
    )
}