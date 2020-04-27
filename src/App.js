import React, { Component } from 'react';
import { Navbar,NavbarBrand } from 'reactstrap'; //   watch the whole video with patience please
import Menu from './Components/MenuComponent';
import './App.css';
//ekhane shob structurewise shajaylam
class App extends Component {
  render(){
    return (
      <div> {/* class name app has been removed */}
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar> {/* the menu component placed here */}

        <Menu /> {/* the menu component placed here */}
      </div>
    );
  } 
  
}

export default App;
