export const updateResumeTemplate = (userData) =>{
    return (dispatch , getState) =>{
       dispatch({type : "UPDATE_RESUME_TEMPLATE" , userData})
    }
 }
 