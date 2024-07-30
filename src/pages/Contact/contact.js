import React from 'react';
import './contact.css';
import Aman from '../../assets/images/Aman.png'

function contact() {
    return (
        <div className="about-us">
            <h1>Contact Me</h1>
            <div className="content">
                <div className="image-section">
                <img src={Aman} alt="Aman Mulla" />
                </div>
                <div className="text-section">
                <h1>Hey There My name is Aman Mulla</h1>
                As an experienced Full Stack Developer with over 2 years in web
              development and app development, I excel in Both front-end and
              back-end technologies. Skilled in HTML, CSS, JavaScript, React.js,
              Node.js, and more. I've built robust, user-friendly web
              applications as well as mobile applications.
                </div>
            </div>
        </div>
    );
}

export default contact;
