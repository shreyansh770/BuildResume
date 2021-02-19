import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';

import {createStore, applyMiddleware, compose} from 'redux';

import {Provider} from "react-redux"
import { myReducer } from './reducers/myReducers';
import thunk from 'redux-thunk';
/*
thunk(is a middleware) gives a function that recevies a dispatch which does the regular synchronous actions inside the function's 
body once the asynchronous operations have been completed. 

*/

import {reactReduxFirebase , getFirebase} from "react-redux-firebase"
import {reduxFirestore , getFirestore} from "redux-firestore"
import {firebaseApp} from "./firebase/fbConfig"

const store = createStore(

     myReducer ,
     compose(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})) ,
     window.devToolsExtension ? window.devToolsExtension() : (f) => f,
     //redux binding for firebase
     reactReduxFirebase(firebaseApp),
     reduxFirestore(firebaseApp)

    ));

ReactDOM.render(<Provider store ={store}><Router><App /></Router></Provider>,document.getElementById('root'));


