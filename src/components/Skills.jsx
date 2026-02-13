import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss, faGit, faHtml5, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";


export default function Skills(){
    return(
        <>
        <div className="skills-container" id="skills-section">
            <div className="slider">
                <div className="icon-div"><FontAwesomeIcon icon={faHtml5} /></div>
                <div className="icon-div"><FontAwesomeIcon icon={faCss} /></div>
                <div className="icon-div"><FontAwesomeIcon icon={faJs} /></div>
                <div className="icon-div"><FontAwesomeIcon icon={faReact} /></div>
                <div className="icon-div"><FontAwesomeIcon icon={faNodeJs} /></div>
                <div className="icon-div"><FontAwesomeIcon icon={faGit} /></div>

                <div className="icon-div"><FontAwesomeIcon icon={faHtml5} /></div>
                <div className="icon-div"><FontAwesomeIcon icon={faCss} /></div>
                <div className="icon-div"><FontAwesomeIcon icon={faJs} /></div>
                <div className="icon-div"><FontAwesomeIcon icon={faReact} /></div>
                <div className="icon-div"><FontAwesomeIcon icon={faNodeJs} /></div>
                <div className="icon-div"><FontAwesomeIcon icon={faGit} /></div>
            </div>
        </div>
        
        </>
    )
}