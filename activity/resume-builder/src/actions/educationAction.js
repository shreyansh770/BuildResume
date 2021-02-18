export const updateEducation = (educationDetails)=>{

    //we can use the function with thunk
   return (dispatch , getState) =>{

    // koi bhi asynchronus task karlo uske bad synchrnous dispatch function chlega

     dispatch({type:"UPDATE_EDUCATION" , educationDetails:educationDetails})
   }

   

     
}