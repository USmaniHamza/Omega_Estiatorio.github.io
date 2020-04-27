import React, { Component } from 'react'; // THIS JS  FILE IS THE PLAYGROUND FOR EVERYTHING
import { Navbar,NavbarBrand } from 'reactstrap'; //   watch the whole video with patience please
import Menu from './Components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';
//ekhane shob structurewise shajaylam
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes:DISHES
    };
  }
  render(){ //since extension thakle render return must dite hobe nahole hobe na
    return (
      <div> {/* class name app has been removed */}
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar> {/* the menu component placed here */}

        <Menu dishes={this.state.dishes} /> {/* props, and the fact that dishes is a made up variable PATHAYDILAM SHAJAY DEYAR JONNO*/}
      </div>
    );
  } 
  
}

export default App;
