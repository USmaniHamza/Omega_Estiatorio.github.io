import React, { Component } from 'react'; 
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes'; 
import { COMMENTS } from '../shared/comments'; 
import { LEADERS } from '../shared/leaders'; 
import { PROMOTIONS } from '../shared/promotions'; 
import {Switch,Route,Redirect} from 'react-router-dom';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes:DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }


  render(){ 
    const HomePage = () => {
        return(
          <Home dish={this.state.dishes.filter((dish) => dish.featured)[0] } 
          promotions={this.state.promotions.filter((promo) => promo.featured)[0] }
          leaders={this.state.leaders.filter((leader) => leader.featured)[0] }/>
        );// ektai array index ber hobe so index hocche zero since ekta featured eii khali true ase arki
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
        <Route exact path="/contactus" component={Contact} />
        <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  } 
  
}

export default Main;
