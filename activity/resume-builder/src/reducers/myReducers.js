import {initialState} from "./intialState";


export function myReducer(state = initialState , action){
    console.log(state)
     return state;
}