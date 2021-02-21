export const updateEducation = (educationDetails)=>{

    //we can use the function with thunk
   return (dispatch , getState, { getFirebase, getFirestore }) =>{

    // koi bhi asynchronus task karlo uske bad synchrnous dispatch function chlega

    let db = getFirestore();
    let uid = getState().firebase.auth.uid;

    db.collection("resumes").doc(uid).set(
    {
       educationDetails : educationDetails
    },
    {merge : true}
    )
    .then(()=>{
      dispatch({type:"UPDATE_EDUCATION" , educationDetails:educationDetails})
    })
    .catch((err)=>{
      dispatch({type:"FAILED_UPDATE_EDUCATION" , error:err.message})
    })
    
   }
 
}