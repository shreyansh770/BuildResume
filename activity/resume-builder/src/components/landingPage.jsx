import React from 'react';
import "./landingPage.css"
import resume from "../static/images/resume.webp"
import { Link } from 'react-router-dom';

const Landing = () => {
    return ( 
        <div>
            <div className="landing-page">

                <h1>Create a resume that stands out</h1>
                <p>Create a resume that perfectally describes your skills and match your job profile</p>
               
               <Link to = "/templates">
               <div>
                   <button className="landing-btn">Get Started For Free</button>
               </div>
               </Link>

               <div className="logo">
                 <img src={resume} alt=""/>
               </div>


            </div>
        </div>
     );
}
 
export default Landing;