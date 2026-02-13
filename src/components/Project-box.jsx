import React from "react";
import Projects from "./Projects" 
import { ExternalLink } from "lucide-react";



export default function Projectbox({name, description, brief, tools, link, image, itemNumber}){
    return(
        <>
        <div className="project-box">
            <p className="item-no">{itemNumber}</p>
            <img src={image} className="image-preview"></img>
            <p className="description">{description}</p>
            <p className="brief">{brief}</p>
            <ul className="tool-list">
                {tools.map(tool=>(
                    <li key={tool} className="tool-item">{tool}</li>
                ))}
            </ul>
                <a href={link} className="external-link">Visit Site <ExternalLink color="#bed5f1" size={16} /></a>  
        </div>
        </>
    )
}