import React from "react";

const Preview = (props) => {
  let {
    fname,
    lname,
    summary,
    email,
    phone,
    profession,
    street,
    city,
    state,
    country,
    pin,
  } = props.contact;

  
  let {cgpa , city :educationCity ,state :educationState , degree , graduationMonth , graduationYear , collegeName} = props.education

  return (
    <React.Fragment>

    <div className="contact-details">
      
      <h1>contact Details</h1>
      <div className="fname">{fname}</div>
      <div className="lname">{lname}</div>
      <div className="summary">{summary}</div>
      <div className="email">{email}</div>
      <div className="phone">{phone}</div>
      <div className="profession">{profession}</div>
      <div className="street">{street}</div>
      <div className="city">{city}</div>
      <div className="state">{state}</div>
      <div className="country">{country}</div>
      <div className="pin">{pin}</div>

    </div>

     <div className="education-details">
          <h1>Eduaction Details</h1>
        <div className="cgpa">{cgpa}</div>
        <div className="degree">{degree}</div>
        <div className="state">{educationState}</div>
        <div className="city">{educationCity}</div>
        <div className="college-name">{collegeName}</div>
        <div className="graduationMonth">{graduationMonth}</div>
        <div className="graduationYear">{graduationYear}</div>

     </div>

    </React.Fragment>
  );
};

export default Preview;
