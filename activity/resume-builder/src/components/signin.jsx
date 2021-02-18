import { connect } from 'react-redux';
import React from 'react';

import {auth, provider} from "../firebase/fbConfig"

const handleLogin = (login)  =>{
       

    
    auth.signInWithPopup(provider).then((user)=>{

       let {displayName , email} = user.user
       let userDetail = {
         displayName,
         email
       }
       login(userDetail)

    }).catch((error) =>{
       console.log(error)
    })
     
}


const SignIn = (props) => {
    return <button onClick = {()=>{handleLogin(props.login)} }>Sign In With Google</button>
     
}

const mapStateToProps = (state) =>{
    return {
        auth : state.auth.isAuth
    }
}
 
const mapDispatchToProps = (dispatch) =>{
    return {
        login : (userDetails) => {dispatch({type : "LOGIN",userDetails : userDetails})}
 }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)