import React, { Component } from 'react'; // THIS JS  FILE IS THE PLAYGROUND FOR EVERYTHING
import { Navbar,NavbarBrand } from 'reactstrap'; //   watch the whole video with patience please
import Menu from './MenuComponent';
//STYLING BAAD so we dont need no styling in this component //AJKE
import DishDetail from './DishdetailComponent';//brought from the menucomponent AJKE
import { DISHES } from '../shared/dishes'; //going up one leve AJKE
//so main component becomes responsible for both the menu component and the dish detail component AJKE 
//dish detail and menucomponent will do all the rendering from our behalf AJKE
//ekhane shob structurewise shajaylam
class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes:DISHES,
      selectedDish:null ///eta onclick handle korbe
    };
  }

  onDishSelection(dishId){
    this.setState({selectedDish:dishId}); //AJKEE if we want to update the variable over 
//tracking the dishId not the entire dish item AJKE
}
//NOW the nclick parrt

  render(){ 
    return (
      <div> {/* class name app has been removed */}
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar> {/* the menu component placed here */}
        <Menu dishes={this.state.dishes} onClick={(dishId)=> this.onDishSelection(dishId)}/> {/* props, and the fact that dishes is a made up variable PATHAYDILAM SHAJAY DEYAR JONNO*/}
       {/* onclick function ta pass korsi */}
       {/* props hishabe shob passkortesi */}
       
        <DishDetail 
        dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]} />   {/* ekhane kintu shob check kortesena khali id ta by using the first index*/}
       {/* JEI ARRAY TA FILTER OUT KORSI SINCE EKTAI ARRAY SO INDEX 0 DIYE KORSI DUITA ELEMENT HOLE [0] or [1] diye hoito */}
        {/* //will get access to each dish AJKE */}

        {/* filter array er moddhe the dish is the variable declared as an interator for accessing the index just like in maps AJKE */}
        {/* ar selectedDish er moddhe kintu dishID ase not the details of the entire dish AJKE */}
        {/* filter is the constrainted part of the array AJKE */}
        {/* the collected elements of the array for which this propert dishID matches the selectedID the subarray bolte gele
        obviously we will get one id wala subarray the filter function will supply that as an array  AJKE */}
        {/* the item in index zero since eta ekta item so what we are doing is that we are selecting the selectedDish
        and then passing that dish to the dishdetail component AJKE*/}
      </div>
    );
  } 
  
}

export default Main;
