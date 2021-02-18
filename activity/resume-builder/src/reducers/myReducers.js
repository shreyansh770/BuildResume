import {initialState} from "./intialState";

import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { contactReducer } from "./contactReducer";
import { documentReducer } from "./documentReducer";
import { educationReducer } from "./educationReducer";


// export function myReducer(state = initialState , action){
     
//      if(action.type == "UPDATE_CONTACT"){
//          return{
//              ...state,
//              contactDetails : {...action.contactDetails}
//          }
//      }
//      else if(action.type == "UPDATE_EDUCATION"){
//          return {
//              ...state,
//              educationDetails : {...action.educationDetails}
//          }
//      }else if(action.type == "CHANGE_SKIN"){
//          return{
//              ...state,
//              document  : {...action.document , skinCode :action.skinCode}
//          }
//      }else if(action.type == "LOGOUT"){
//          return{
//              ...state,
//              auth : {isAuth : false , user :null}
//          }

//      }

//      return state;
// }
//UPDATE_EDUCATION


import {firebaseReducer} from "react-redux-firebase"
import {firestoreReducer} from "redux-firebase"

//combining reducers
export const myReducer = combineReducers({
    auth :authReducer,
    contactDetails : contactReducer,
    educationDetails : educationReducer,
    document : documentReducer,
    //these two will link our local store to firbase and give us multiple function
    firebase : firebaseReducer,
    firestore : firestoreReducer
})