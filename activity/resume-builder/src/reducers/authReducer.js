import {initialState} from "./intialState";



export const authReducer = (state = initialState.auth , action) =>{  
    if(action.type == "LOGOUT"){
         return{

             auth : {isAuth : false , user :null}
         }

     }
    return state;
}