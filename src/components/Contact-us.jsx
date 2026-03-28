import React from "react";
import { Headset, MessageSquareText, Mails } from "lucide-react";

export default function ContactMe(){
    return(
        <>
    <div className="contact-section" id="contact-section">
        <div className="form-section">
            <h1>Send me a message.</h1>
            <p>Thank you for getting in touch!</p>

            <form action={"https://formspree.io/f/mykkvkwj"} method="POST">
                <div className="full-name text-input">
                    <label for="name">Full Name</label><br/>
                    <input type="text" placeholder="Enter your full name"></input>
                </div>
                <div className="email-address text-input">
                    <label for="email">Email</label><br/>
                    <input type="text" placeholder="Enter your email"></input>
                </div>
                <div className="subject text-input">
                    <label for="subject">Subject</label><br/>
                    <input type="text" placeholder="Enter your subject"></input>
                </div>
                <div className="message text-input">
                    <label for="message">Message</label><br/>
                    <textarea placeholder="Enter your message"></textarea>
                </div>
                <button type="submit">Send a message</button>
            </form>
            <div className="details-section">
            <p className="details-heading">Hi, contact me here!</p>

            <div className="telephone box">
                <Headset color="#fff" size={20}/>
                <span>
                    <p className="contact-type">Telephone</p>
                    <p>06 000 0000</p>
                </span>
            </div>
            <div className="sms box">
                <MessageSquareText color="#fff" size={20}/>
                <span>
                    <p className="contact-type">SMS/ Whatsapp</p>
                    <p>06 000 0000</p>
                </span>
            </div>
            <div className="email box">
                <Mails color="#fff" size={20}/>
                <span>
                    <p className="contact-type">Email</p>
                    <p>si@gmail.com</p>
                </span>
            </div>
            </div>
        </div>
        
    </div>
    </>
    )
    
}