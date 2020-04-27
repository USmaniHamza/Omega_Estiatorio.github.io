import React, { Component } from 'react';
import { Navbar,NavbarBrand } from 'reactstrap'; //   watch the whole video with patience please
import Menu from './Components/MenuComponent';
import './App.css';


class App extends Component {
  render(){
    return (
      <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
      </div>
    );
  } //kono extension kore nai just like in the tutorial
  
}

export default App;
