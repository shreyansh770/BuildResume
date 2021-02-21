import {initialState} from "./intialState";

export const educationReducer = (state = initialState.educationDetails , action) =>{
   
    if(action.type == "UPDATE_EDUCATION"){
         return {
             ...action.educationDetails
         }
    }
    else if(action.type == "FAILED_UPDATE_EDUCATION"){
        console.log(action.err)
        return state;
    }
    return state;
}