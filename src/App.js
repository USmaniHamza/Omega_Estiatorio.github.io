import React, { Component } from 'react';
import { Navbar,NavbarBrand } from 'reactstrap'; //learn to watch the whole video with patience please
import './App.css';


class App extends Component {
  render(){
    return (
      <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      </div>
    );
  } //kono extension kore nai just like in the tutorial
  
}

export default App;
