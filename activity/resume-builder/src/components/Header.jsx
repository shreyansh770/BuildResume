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
         <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F892-8928473_document-logo-rsum.png&imgrefurl=https%3A%2F%2Fwww.pngkey.com%2Fdetail%2Fu2t4i1i1w7u2q8y3_document-logo-rsum%2F&tbnid=_Lf_JJ-6Ltuz8M&vet=12ahUKEwjg7vWA2uPuAhWROCsKHSM0B5kQMygJegUIARC5AQ..i&docid=SajPp3flmmVqjM&w=820&h=732&q=resume%20logo%20png%20imges&ved=2ahUKEwjg7vWA2uPuAhWROCsKHSM0B5kQMygJegUIARC5AQ" alt="logo-img"/>
      </Link>
      </div>
      <div className="header-links">

      { auth ?

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
      auth :  state.auth.isAuth
  }
}

const mapDispatchToProps = (dispatch) =>{
     return {
      logout : () => {dispatch(logout())}
     }
}


export default connect(mapStateToProps , mapDispatchToProps)(Header);
