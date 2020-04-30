import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'; //registerserviceworker module does not exist anymore

ReactDOM.render(
  
    <App />,
  
  document.getElementById('root') //the structure from the .html and <App> for the rendering purpose
  //index.js e ki khali shudhu amra grouping kortesi?
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/* The service worker is a web API that helps you cache your assets 
and other files so that when the user is offline or on slow network,
 he/she can still see results on the screen, as such, it helps you 
 build a better user experience, that's what you should know about service worker's for now.
 */