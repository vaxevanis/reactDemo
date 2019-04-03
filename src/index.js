import React from 'react';
import ReactDOM from "react-dom";

import './index.css';
import 'bootstrap/dist/css/bootstrap.css'; // bootstrap library
import 'open-iconic/font/css/open-iconic-bootstrap.css'; //iconic fonts


// import App from './App';
import Counters from './components/counters';


// import * as serviceWorker from './serviceWorker';
const node = document.getElementById('root');

ReactDOM.render( < Counters / > , node);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();