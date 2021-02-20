export const  updateContact = (contactDetails) =>{

    return (dispatch , getState , { getFirebase, getFirestore }) =>{

     
      let db = getFirestore();
      let uid = getState().firebase.auth.uid;


      //db me changes kr rahe hai jase jase store me chnages ho rahe hai
      db.collection("resumes").doc(uid).set(
      {
        contactDetails : contactDetails
      }, 
      {merge : true}
      ).then(()=>{
        dispatch({type:"UPDATE_CONTACT" , contactDetails:contactDetails})
      })
      .catch((err)=>{
        dispatch({type:"FAILED_UPDATE_CONTACT" , error:err.message})
      })

      

      
      
    }
    
}