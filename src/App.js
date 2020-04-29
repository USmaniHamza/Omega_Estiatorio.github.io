import React, { Component } from 'react'; // THIS JS  FILE IS THE PLAYGROUND FOR EVERYTHING

import Main from './Components/MainComponent';
import './App.css';

//ekhane shob structurewise shajaylam
class App extends Component {

  render(){ //since extension thakle render return must dite hobe nahole hobe na
    return (
      <div> {/* class name app has been removed */}
        <Main /> {/* props, and the fact that dishes is a made up variable PATHAYDILAM SHAJAY DEYAR JONNO*/}
      </div>
    );
  } 
  
}

export default App;
