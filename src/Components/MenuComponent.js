import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';
//menu so it would return a list of dishes in my restaurant
class Menu extends Component { //this is a component
   
    constructor(props){
        super(props); //immediate parent class constructor

        this.state = { //its a property i guess, nijer variable
            selectedDish: null
        }
    }
    onDishSelect(dish){
         this.setState({selectedDish:dish}); //AJKEE if we want to update the variable over 

    }
    renderDish(dish){ //the variable that is going to be passed here
        // AJKE so if the selected dish is null then else e giye khali dekhabo
        //AJKE ar jodi null na hoy tahole if e jabo as said per condition
         if(dish!=null){
            return(
                //selected dish ami dishdetails e pathabo
               <DishDetail SelectedDishes={this.state.selectedDish} />
               
            );
         }
         else{
             return(
                <div></div>
             );
         }

    }

render(){

    const menu=this.props.dishes.map( (dish) => {   //so ami variable ta ke ekhane banailam jaate ami return e variable ta dite pari &dish is a variable
        return( // ekhane bolte gele amra menu ta ke render ar structure korlam jate amra pore use korte pari
            //so this was out component
            //dish ta kemne shajano thakbe oita bollam
            //array hishabe ekhane anlam arki
            //ETA VARIABLE CALL ER RETURN over here which is menu
            <div key={dish.id} className="col-12 col-md-5 m-1">             
              <Card onClick={()=> this.onDishSelect(dish)}>  {/* BUT HOW DOES IT KNOW THAT IT IS A LOOP   */}
                  {/* Nicher shathe toh onCLick er kono relationship nai remember that   */}
                        <CardImg width="100%" src={dish.image} alt={dish.name}  />
                                      
                        <CardImgOverlay body className="ml-4"> {/*ml to slide the title left and right */}
                            <CardTitle>{dish.name}</CardTitle>
                            
                        </CardImgOverlay>
              </Card>
            </div>
              );
    }) ; //menu defined as a JS variable
    //mapping

        return( // seems like we can use JS variables inside my JSX menu is a JS variable
            //ETA RENDER ER RETURN
            <div className="container">
                <div className="row"> 
                     {/* list na dile horizontal hoye jabe */}
                        {menu} 
                    
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)} {/* This deals with the onClick event   */}
                </div>
            </div>
            ); 
        }
        }
export default Menu;
