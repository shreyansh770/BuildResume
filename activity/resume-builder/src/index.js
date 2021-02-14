import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';

import {createStore} from "redux"

import {Provider} from "react-redux"
import { myReducer } from './reducers/myReducers';


const store = createStore(myReducer);

ReactDOM.render(<Provider store ={store}><Router><App /></Router></Provider>,document.getElementById('root'));


