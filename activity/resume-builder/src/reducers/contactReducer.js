import {initialState} from "./intialState";


export const contactReducer =  (state = initialState.contactDetails , action) =>{
   
    if(action.type == "UPDATE_CONTACT"){
         return{

             contactDetails : {...action.contactDetails}
         }
     }
    return state;
}