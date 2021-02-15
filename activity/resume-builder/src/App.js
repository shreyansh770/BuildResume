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



function App() {
  return (
        
        <React.Fragment>

          {/* we have added Router around App in index.js */}
             <Header/>

             <Switch>

              <Route path = "/" exact>
                <Landing></Landing>
              </Route>

              <Route path = "/templates" exact component ={Templates}></Route>

              <Route path = "/about" exact>
                <About></About>
              </Route>

              <Route path = "/register" exact>
                <Register></Register>
              </Route>

              <Route path = "/signin" exact>
                <SignIn></SignIn>
              </Route>

            {/* by passing a component like this component={Contact} we can get any more props (ex: history , match) */}
              <Route path = "/contact" exact component={Contact}></Route>

              <Route path = "/education" exact component={Education}></Route>

              <Route path = "/finalize" exact component={Finalize}></Route>


              <Redirect to="/">
                <Landing></Landing>
              </Redirect>

             </Switch>
          
          
        </React.Fragment>
  );
}

export default App;
