import React, { Component } from 'react'; 
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes'; 
import {Switch,Route,Redirect} from 'react-router-dom';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes:DISHES,
      
    };
  }


  render(){ 
    const HomePage = () => {
        return(
          <Home />
        );
    }
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage} /> 
          {/* path dibo ar kon component e jabo eta dibo 
          PATH hocche URL er*/}
          <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/>} /> 
    {/* in order to pass a props we did this inside the router....shudhu Component specify jodi kortam like component={Menu}
    tahole shudh  {Menu} like pass kortam ar but this way of sending components wont let me pass any components to the menu component
    so we did that <Menu dishes={this.state.dishes}/> through a function component to pass props too
    */}
        <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  } 
  
}

export default Main;
