import {initialState} from "./intialState";


export const contactReducer =  (state = initialState.contactDetails , action) =>{
   
    if(action.type == "UPDATE_CONTACT"){
        console.log(state)
         return{

             ...action.contactDetails ,
         }
     }else if(action.type == "FAILED_UPDATE_CONTACT"){
         console.log(action.err);
         return state;
     }
    return state;
}