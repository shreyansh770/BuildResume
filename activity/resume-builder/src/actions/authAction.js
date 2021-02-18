export const login = (userDetails)=>{

    return (dispatch,getState,{getFirebase,getFirestore}) =>{

        //userDetails => (id,pw) -> user hai ki nhi -> login || login failed

            let firebase = getFirebase();

            firebase.auth().signInWithEmailAndPassword(userDetails.email ,userDetails.password).then((obj)=>{
                dispatch({type : "LOGIN",userDetails : userDetails})
            })
            .catch((err)=>{
                dispatch({type : "LOGIN_FAILED",error : err.message})
            })
            


        
    }
    
}


export const logout = ()=>{
    return (dispatch,getState) =>{
        dispatch({type : "LOGOUT" })
    }
    
    
}