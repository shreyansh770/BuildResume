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
    return state;
}