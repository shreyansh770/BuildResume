import { connect } from "react-redux";
import React, { Component } from 'react'
import "./signin.css";
import { auth, provider } from "../firebase/fbConfig";
import { login } from "../actions/authAction";

// const handleLogin = (login) => {
//   // auth.signInWithPopup(provider).then((user)=>{

//   //    let {displayName , email} = user.user
//   //    let userDetail = {
//   //      displayName,
//   //      email
//   //    }
//   //    login(userDetail)

//   // }).catch((error) =>{
//   //    console.log(error)
//   // })
//   console.log("object");
//   let userDetail = {
//     name: "shreyansh",
//     email: "test@123.gmail",
//   };
//   login(userDetail);
// };

class SignIn extends Component {
  state = {
      email:"",
      password:""
  };

    onChangeHandler = (e) =>{
      //id pw set
      
      let id = e.target.id;
      let value = e.target.value;

       this.setState({
          ...this.state,
          [id]:value
       })
    }

    onSubmit = (e)=>{
      e.preventDefault();
      this.props.login(this.state);
    };

  render() {
    return (
      <div className="signin-form">
        <div className="signin-heading">
          <h1>Sign In</h1>
        </div>

        <div className="signin-form-details">
          <div className="input-group full">
            <label htmlFor="">Email Id</label>
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={(e) => {
                this.onChangeHandler(e);
              }}
            />
          </div>

          <div className="input-group full">
            <label htmlFor="">Password</label>
            <input
              type="password"
              id="password"
              value={this.state.password}
              onChange={(e) => {
                this.onChangeHandler(e);
              }}
            />
          </div>

          <div className="input-group full">
            <button
              className="btn f"
              onClick={this.onSubmit}
            >
              Sign In
            </button>
            {/* <button className = "btn" >Sign In With Google</button> */}
          </div>

            <div className="input-group full">
                {this.props.message && <span>{this.props.message}</span>}
            </div>

        </div>
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    // auth: state.auth.isAuth,
    message : state.auth.message
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userDetails) => {
      dispatch(login(userDetails));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
