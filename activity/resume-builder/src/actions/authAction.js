import { initialState } from "../reducers/intialState";

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


        return (dispatch,getState,{getFirebase,getFirestore}) =>{
            let firebase = getFirebase();

            firebase.auth().signOut().then((obj)=>{
                dispatch({type : "LOGOUT" })
                 
            })
            .catch((error)=>{
                dispatch({type:"LOGOUT_FAILED"})
            })
       

        }

    
    
    
}



export const signUp = (userDetails)=>{
    
        return (dispatch,getState,{getFirebase,getFirestore}) =>{
            let firebase = getFirebase();
            let firestore = getFirestore();
            let uid;
            firebase.auth().createUserWithEmailAndPassword(userDetails.email,userDetails.password)
            .then((obj)=>{
                uid  = obj.user.uid;
                return firestore.collection("users").doc(obj.user.uid).set({
                    firstName : userDetails.fname,
                    lastName : userDetails.lname,
                    email : userDetails.email,
                })
            })
            .then(()=>{
                return firestore.collection("resumes").doc(uid).set({
                    ...initialState
                 })
            })
            .then(()=>{
                dispatch({type:"SIGNUP"})
            })
            .catch((err)=>{
                dispatch({type:"SIGNUP_FAILED" , error:err.message})
            })

        }
       

}

    
    
    
