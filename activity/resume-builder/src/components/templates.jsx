import React, { Component } from 'react'
import {skinCodes} from "../Constants/skinCodes"
import { connect } from "react-redux";

import "./templates.css";
import { updateSkin } from '../actions/documentAction';


class Templates extends Component {
  state = { 
    skinCode : this.props.skinCode
   }


   handleSkinSelect = (skinCode) => {
      this.props.changeSkinCode(skinCode)
      this.props.history.push("/contact")
   }

  //  componentDidMount() {
  //    console.log("cdm" , this.props)
  //  }
   

   componentWillReceiveProps(newProps) {
     console.log(newProps)
     this.setState({
       skinCode : newProps.skinCode
     })
   }



  render() { 
  
    let {skinCode} = this.state

    return (   

    <div className="templates">

    <div className="template-intro">
      <h1>Select a template to get started</h1>
      <p>You can edit and change the template later</p>
    </div>

    <div className="template-styles">

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
 

const mapStateToProps = (state) =>{
  return{
    skinCode : state.document.skinCode
  }
}

const mapDispatchToProps = (dispatch) =>{
   return{
      changeSkinCode : (skinCode) => {dispatch(updateSkin(skinCode))}
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Templates);
