import React, { Component } from "react";
import { connect } from "react-redux";
import "./finalize.css";
import Preview from "./preview";
import {skinCodes} from "../Constants/skinCodes"
import { updateSkin } from "../actions/documentAction";


class Finalize extends Component {
  state = {
    contact: this.props.contact,
    education: this.props.education,
    skinCode :  this.props.skinCode
  };

  handleSkinSelect = (skinCode) => {
    this.props.changeSkinCode(skinCode)
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      skinCode : newProps.skinCode
    })
  }

  render() {
    let { contact, education,skinCode } = this.state;
    return (

      <div className="finalize">
        <div className="final-preview">
          <Preview contact={contact} education={education}></Preview>
        </div>

        <div className="final-templates">

        {skinCodes.map((skin)=>{
          let className = skin.value == skinCode ? "selected-skin" : ""
          return  <div key = {skin.id} className={`template ${className}`}>
           <img src={`/images/${skin.value}.svg`} alt="" />
           <button className="template-btn" onClick={()=>{this.handleSkinSelect(skin.value)}}>USE TEMPLATE</button>
        </div>
        })}

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contact: state.contactDetails,
    education: state.educationDetails,
    skinCode :  state.document.skinCode
  };
};

const mapDispatchToProps = (dispatch) =>{
  return{
     changeSkinCode : (skinCode) => {dispatch(updateSkin(skinCode))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Finalize);