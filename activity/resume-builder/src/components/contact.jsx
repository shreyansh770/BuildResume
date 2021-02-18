import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./contact.css";
import Preview from "./preview";

class Contact extends Component {

  state = {
      contact : this.props.contactDetails,
      education : this.props.educationDetails,
      // skinCode : this.props.document.skinCode
  };


   onChangeHandler = (e) =>{
     e.preventDefault();
     
     let id  = e.target.id
     let value = e.target.value

     this.setState({
         /* contact will take the key value from the state
            it will check if any key:value([id]:value) pair is changed 
            it will will update it
         */
         contact : { ...this.state.contact , [id]:value }
     })
    
   }

   onSubmitContactDetails  = () =>{

    // abhi tak ki details db me save ho jaye
    //navigate to education
   

    this.props.updateContactDetails(this.state.contact)
     
    this.props.history.push("/education");//same work as window.location


   }


   componentWillReceiveProps(newProps) {
    console.log(newProps)
    console.log(this.props)
    this.setState({
      contact : newProps.contactDetails
    })
     
   }
   

  render() {

     let {contact , education} = this.state;

    return (
      <div className="contact">
        <div className="contact-form">
          <div className="contact-heading">
            <h1>Personal Details</h1>
          </div>
          <div className="contact-form-details">

            <div className="input-group">
              <label htmlFor="">First Name</label>
              <input type="text" name="" id="fname" value ={contact.fname} onChange = { (e) =>{this.onChangeHandler(e)}}/>
            </div>

            <div className="input-group">
              <label htmlFor="">Last Name</label>
              <input type="text" name="" id="lname" value ={contact.lname} onChange = { (e) =>{this.onChangeHandler(e)}}/>
            </div>

            <div className="input-group full">
              <label htmlFor="">Professional Summary</label>
              <input type="text" name="" id="summary" value ={contact.summary} onChange = { (e) =>{this.onChangeHandler(e)}}/>
            </div>

            <div className="input-group">
              <label htmlFor="">Email</label>
              <input type="text" name="" id="email" value ={contact.email} onChange = { (e) =>{this.onChangeHandler(e)}}/>
            </div>

            <div className="input-group">
              <label htmlFor="">Phone</label>
              <input type="text" name="" id="phone" value ={contact.phone} onChange = { (e) =>{this.onChangeHandler(e)}}/>
            </div>

            <div className="input-group">
              <label htmlFor="">Profession</label>
              <input type="text" name="" id="profession" value ={contact.profession} onChange = { (e) =>{this.onChangeHandler(e)}}/>
            </div>

            <div className="input-group">
              <label htmlFor="">Street</label>
              <input type="text" name="" id="street" value ={contact.street} onChange = { (e) =>{this.onChangeHandler(e)}}/>
            </div>

            <div className="input-group">
              <label htmlFor="">City</label>
              <input type="text" name="" id="city" value ={contact.city} onChange = { (e) =>{this.onChangeHandler(e)}}/>
            </div>

            <div className="input-group">
              <label htmlFor="">State</label>
              <input type="text" name="" id="state" value ={contact.state} onChange = { (e) =>{this.onChangeHandler(e)}}/>
            </div>

            <div className="input-group">
              <label htmlFor="">Country</label>
              <input type="text" name="" id="country" value ={contact.country} onChange = { (e) =>{this.onChangeHandler(e)}}/>
            </div>

            <div className="input-group">
              <label htmlFor="">Pin Code</label>
              <input type="text" name="" id="pin" value ={contact.pin} onChange = { (e) =>{this.onChangeHandler(e)}}/>
            </div> 

            <div className="next full">
               <button className = "btn" onClick={ this.onSubmitContactDetails }>Next</button>
            </div>

            <div className="back full">
            <Link to ="/templates">
               <button className ="btn">Back</button>
            </Link> 
            </div>
 
          </div>
        </div>

        <div className="preview-form">
            <Preview contact = {contact} education ={education}></Preview>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
    return {
      contactDetails : state.contactDetails,
      educationDetails : state.educationDetails
    }
}

const mapDispatchToProps = (dispatch)=>{
     return{
       // yaha se hamare component ke props ke pass updateContactDetails namm ka function hoga
       updateContactDetails: (contactDetails) => {dispatch({type:"UPDATE_CONTACT" , contactDetails:contactDetails})}
     }
}


export default connect(mapStateToProps , mapDispatchToProps)(Contact);
