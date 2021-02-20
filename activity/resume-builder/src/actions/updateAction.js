export const updateState = (state) =>{
       
    return (dispatch , getState)=>{
        console.log(state.initialState)

        dispatch({type:"UPDATE_CONTACT" , contactDetails:state.initialState.contactDetails})
        dispatch({type:"UPDATE_EDUCATION" , educationDetails:state.initialState.educationDetails})
        dispatch({type:"CHANGE_SKIN" , skinCode:state.initialState.document.skinCode});
        

    }




}