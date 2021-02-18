export const  updateContact = (contactDetails) =>{

    return (dispatch , getState) =>{

     


      dispatch({type:"UPDATE_CONTACT" , contactDetails:contactDetails})
      
    }
    
}