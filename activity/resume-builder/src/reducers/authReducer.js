import {initialState} from "./intialState";



export const authReducer = (state = initialState.auth , action) =>{  
    if(action.type == "LOGOUT"){
         return{

             isAuth : false ,
             user :null
         }

     }
     else if(action.type == "LOGIN"){
         return {
            isAuth : true,
            user : action.userDetails,
            message : null

         }
     }     
     else if(action.type == "LOGIN_FAILED"){
         return {
             ...state ,
             message : action.error
         }
     }
     else if(action.type == "LOGOUT_FAILED"){
         return state;
     }
     else if(action.type == "SIGNUP_FAILED"){
         return{
             ...state,
             message : action.error
         }
     }
     else if(action.type == "SIGNUP"){
         return state;     
     }
     
    return state;
}