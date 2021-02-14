import React, { Component } from "react";
import Preview from "./preview";
import "./education.css";
import {Link} from  "react-router-dom"
import { connect } from "react-redux";

class Education extends Component {
  state = {
    contact: this.props.contactDetails,
    education: this.props.educationDetails,
  };

  onChangeHandler = (e)=>{
    e.preventDefault();
  }

  render() {
    let { contact, education } = this.state;
    return (
      <div className="education">

       <div className="contact-form">

       <div className="contact-heading">
            <h1>Education Details</h1>
          </div>

        <div className="contact-form-details">
          <div className="input-group">
            <label htmlFor="">College Name</label>
            <input
              type="text"
              name=""
              id="collegeName"
              value={education.collegeName}
              onChange={(e) => {
                this.onChangeHandler(e);
              }}
            />
          </div>

          <div className="input-group">
            <label htmlFor="">Degree</label>
            <input
              type="text"
              name=""
              id="degree"
              value={education.degree}
              onChange={(e) => {
                this.onChangeHandler(e);
              }}
            />
          </div>

          <div className="input-group">
            <label htmlFor="">CGPA</label>
            <input
              type="text"
              name=""
              id="cgpa"
              value={education.cgpa}
              onChange={(e) => {
                this.onChangeHandler(e);
              }}
            />
          </div>

          <div className="input-group">
            <label htmlFor="">CITY</label>
            <input
              type="text"
              name=""
              id="city"
              value={education.city}
              onChange={(e) => {
                this.onChangeHandler(e);
              }}
            />
          </div>

          <div className="input-group">
            <label htmlFor="">STATE</label>
            <input
              type="text"
              name=""
              id="state"
              value={education.state}
              onChange={(e) => {
                this.onChangeHandler(e);
              }}
            />
          </div>

          <div className="input-group">
            <label htmlFor="">Graduation Month</label>
            <input
              type="text"
              name=""
              id="graduationMonth"
              value={education.graduationMonth}
              onChange={(e) => {
                this.onChangeHandler(e);
              }}
            />
          </div>

          <div className="input-group full">
            <label htmlFor="">Graduation Year</label>
            <input
              type="text"
              name=""
              id="graduationYear"
              value={education.graduationYear}
              onChange={(e) => {
                this.onChangeHandler(e);
              }}
            />
          </div>


          <div className="next full">
            <button
              className="btn"
              onClick={(e) => {
                this.onSubmitContactDetails(e);
              }}
            >
              Next
            </button>
          </div>

          <div className="back full">
            <Link to="/contact">
              <button className="btn">Back</button>
            </Link>
          </div>
        </div>
       </div>
          

        <div className="preview-form">
          <Preview contact={contact} education={education}></Preview>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contactDetails: state.contactDetails,
    educationDetails: state.educationDetails,
  };
};

export default connect(mapStateToProps)(Education);
