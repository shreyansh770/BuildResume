export const updateSkin = (skinCode) =>{
   return (dispatch , getState) =>{

     



      dispatch({type : "CHANGE_SKIN" , skinCode : skinCode})
   }
}

