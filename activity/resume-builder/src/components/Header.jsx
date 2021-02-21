import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import { auth } from "../firebase/fbConfig";
import { logout } from "../actions/authAction";



const handleLogout = (logout) =>{

    // auth.signOut().then(() =>{
    //   logout();
    // })

    logout();
}




const Header = (props) => {
  let {auth} = props;

  return (
    <div className="header">
      <div className="header-logo">
      <Link to = "/">
         <img src="/images/resume-header.jpg" alt="logo-img"/>
      </Link>
      </div>
      <div className="header-links">

      { auth.uid ? // auth.uid will come form firebase state

        <ul>

          <li>
            <Link to="/templates">Resume Templates</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>  

          <li>
            <Link to = "/" onClick={()=>handleLogout(props.logout)}> LogOut</Link>
          </li>

        </ul>

        :

        <ul>

          <li>
            <Link to="/about">About Us</Link>
          </li> 

          <li>
            <Link to="/register">
                    <button className="btn">Register</button>  
            </Link>
          </li>

          <li>
            <Link to="/Signin">Sign In</Link>
          </li>

        </ul>

      
      }



      </div>
    </div>
  );
};

const mapStateToProps = (state) =>{
  return {
      // auth :  state.auth.isAuth
      auth :  state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) =>{
     return {
      logout : () => {dispatch(logout())}
     }
}


export default connect(mapStateToProps , mapDispatchToProps)(Header);
