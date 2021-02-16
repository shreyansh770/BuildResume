import { connect } from "react-redux";
import React from "react";
import Skin1 from "../skins/skin1";
import Skin2 from "../skins/skin2";
import Skin3 from "../skins/skin3";
import Skin4 from "../skins/skin4";
import Skin5 from "../skins/skin5"


const Preview = (props) => {


  console.log("inside preview" , props);

   let skinCode  = props.skinCode;

  return (
    <React.Fragment>
 
      {skinCode == "skin1" && <Skin1 contact={props.contact} education={props.education}></Skin1>}
      {skinCode == "skin2" && <Skin2 contact={props.contact} education={props.education}></Skin2>}
      {skinCode == "skin3" && <Skin3 contact={props.contact} education={props.education}></Skin3>}
      {skinCode == "skin4" && <Skin4 contact={props.contact} education={props.education}></Skin4>}
      {skinCode == "skin5" && <Skin5 contact={props.contact} education={props.education}></Skin5>}
 
    </React.Fragment>
  );
};

const mapStateToProps = (state) =>{

  return{
    skinCode : state.document.skinCode
  }
}


export default connect(mapStateToProps)(Preview);
