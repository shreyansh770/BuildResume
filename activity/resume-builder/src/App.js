import { connect } from 'react-redux';
import React from 'react';
import { BrowserRouter as Router, Route, Redirect ,Switch } from "react-router-dom";
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Education from './components/education';
import Finalize from './components/finalize';
import Header from "./components/Header";
import Landing from './components/landingPage';
import Register from './components/register';
import SignIn from './components/signin';
import Templates from './components/templates';



function App(props) {

  let {auth}  = props

  return (
        
        <React.Fragment>

          {/* we have added Router around App in index.js */}
             <Header/>

             <Switch>

              <Route path = "/" exact component={Landing}></Route>

              <Route path = "/templates" exact component ={auth.uid ? Templates : SignIn}></Route>

              <Route path = "/about" exact component={About}></Route>

              <Route path = "/register" exact component={auth.uid ? Landing : Register}></Route>

              <Route path = "/signin" exact component={auth.uid ? Landing : SignIn}></Route>

            {/* by passing a component like this component={Contact} we can get any more props (ex: history , match) */}
              <Route path = "/contact" exact component={auth.uid ? Contact :SignIn}></Route>

              <Route path = "/education" exact component={auth.uid ? Education : SignIn}></Route>

              <Route path = "/finalize" exact component={auth.uid ? Finalize : SignIn}></Route>


              <Redirect to="/">
                <Landing></Landing>
              </Redirect>

             </Switch>
          
          
        </React.Fragment>
  );
}

const mapStateToProps = (state) =>{
  return{
    //  auth : state.auth.isAuth
    auth : state.firebase.auth
  }
}
export default connect(mapStateToProps)(App);
