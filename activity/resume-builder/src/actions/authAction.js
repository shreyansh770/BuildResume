import { initialState } from "../reducers/intialState";

export const login = (userDetails)=>{

    return (dispatch,getState,{getFirebase,getFirestore}) =>{

        //userDetails => (id,pw) -> user hai ki nhi -> login || login failed

            let guid;
            let guser;
            let firebase = getFirebase();
            let db  = getFirestore();
            // console.log(getState()) this will have access to state

            firebase.auth().signInWithEmailAndPassword(userDetails.email ,userDetails.password).then((obj)=>{
                guid = obj.user.uid;
                guser  = obj.user;
                //check if resume document is already present

                return Promise.all([ db.collection("users").doc(guid).get() , db.collection("resumes").doc(guid).get()])
                 
            })
            .then((combineUsersAndReducers)=>{

                //    console.log(doc.data())//collection ka data dega
               //    console.log(doc.id)//ye doc id/uid dega

                let userDoc = combineUsersAndReducers[0] ;
                let doc = combineUsersAndReducers[1];


                if(!userDoc.data()){
                    db.collection("users").doc(guid).set({
                        email : guser.email
                    })
                }
                
                 if(!doc.data()){
                    db.collection("resumes").doc(guid).set({
                        initialState
                    })    
                }
            })
            .then(()=>{
                dispatch({type : "LOGIN", userDetails : userDetails})
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

    
    
    
