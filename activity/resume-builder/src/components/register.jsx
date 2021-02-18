import React from 'react';
import "./register.css"

const Register = () => {
    return ( 

    <div className="signup-form">

        <div className="signup-heading">
            <h1>Sign Up</h1>
        </div>

        <div className="signup-form-details">
               <div className="input-group full">
                   <label htmlFor="">First Name</label>
                   <input type="text" id="fname" value="" onChange={(e)=>{this.onChangeHandler(e)}}/>
               </div>

               <div className="input-group full">
                   <label htmlFor="">Last Name</label>
                   <input type="text" id="fname" value="" onChange={(e)=>{this.onChangeHandler(e)}}/>
               </div>

               <div className="input-group full">
                   <label htmlFor="">Email Id</label>
                   <input type="text" id="fname" value="" onChange={(e)=>{this.onChangeHandler(e)}}/>
               </div>

               <div className="input-group full">
                   <label htmlFor="">Password</label>
                   <input type="text" id="fname" value="" onChange={(e)=>{this.onChangeHandler(e)}}/>
               </div>

               <div className="input-group full">
                   <button className = "btn">Sign Up</button>
               </div>
        </div>

    </div>
     );
}
 
export default Register;