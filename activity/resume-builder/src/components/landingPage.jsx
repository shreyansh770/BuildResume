import React from 'react';
import "./landingPage.css"
import resume from "../static/images/resume.webp"

const Landing = () => {
    return ( 
        <div>
            <div className="landing-page">

                <h1>Create a resume that stands out</h1>
                <p>Create a resume that perfectally describes your skills and match your job profile</p>
               
               <div>
                   <button className="landing-btn">Get Started For Free</button>
               </div>

               <div className="logo">
                 <img src={resume} alt=""/>
               </div>


            </div>
        </div>
     );
}
 
export default Landing;