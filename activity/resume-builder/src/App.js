import React from 'react';
import { BrowserRouter as Router, Route, Redirect ,Switch } from "react-router-dom";
import './App.css';
import About from './components/about';
import Contact from './components/contact';
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

              <Route path = "/templates" exact>
                <Templates></Templates>
              </Route>

              <Route path = "/about" exact>
                <About></About>
              </Route>

              <Route path = "/register" exact>
                <Register></Register>
              </Route>

              <Route path = "/signin" exact>
                <SignIn></SignIn>
              </Route>

              <Route path = "/contact" exact>
                <Contact></Contact>
              </Route>

              <Redirect to="/">
                <Landing></Landing>
              </Redirect>

             </Switch>
          
          
        </React.Fragment>
  );
}

export default App;
