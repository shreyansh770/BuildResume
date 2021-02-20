import React, { Component } from 'react';
import "./landingPage.css"
import resume from "../static/images/resume.webp"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';




class Landing extends Component {
    state = {  }

    getStartedHandler = ()=>{
        console.log(this.props)
        let uid  = this.props.firebaseAuth.uid;
        let data  = this.props.firebaseData.resumes[uid];
        console.log(data)
    }


    render() { 
        return ( 
            <div>
            <div className="landing-page">

                <h1>Create a resume that stands out</h1>
                <p>Create a resume that perfectally describes your skills and match your job profile</p>
               
               <Link to = "/templates">
               <div>
                   <button className="landing-btn" onClick={this.getStartedHandler}>Get Started For Free</button>
               </div>
               </Link>

               <div className="logo">
                 <img src={resume} alt=""/>
               </div>


            </div>
        </div>
         );
    }
}
 
const mapStateToProps = (state) =>{
    return {
        firebaseAuth :  state.firebase.auth,
        firebaseData : state.firestore.data
    };
}




 //compose is used when we have to use to high order component
export default compose(connect(mapStateToProps),firestoreConnect([{collection:"resumes"}]))(Landing);