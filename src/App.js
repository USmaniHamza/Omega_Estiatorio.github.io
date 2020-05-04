import React, { Component } from 'react'; 
import Main from './Components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"; //configure application so that redux becomes available
import { ConfigureStore } from "./redux/configureStore"; //now time to conigure the application

const store=ConfigureStore(); //HENCE THE STORE BECOMES AVAILABLE TO ME

class App extends Component {

  
  render(){ 
    return (
      <Provider store={store}>
        {/* React store becomes available to all the components within my React application */}
      <BrowserRouter>
      <div className="App"> 
        <Main /> 
      </div>
      </BrowserRouter>
      </Provider>
    );
  } 
  
}

export default App;
