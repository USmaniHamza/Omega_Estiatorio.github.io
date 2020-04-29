import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
//import dishdetail moved to main component AJKE
//menu so it would return a list of dishes in my restaurant
class Menu extends Component { //this is a component
   
    constructor(props){
        super(props); //immediate parent class constructor

        
    }
render(){

    const menu=this.props.dishes.map( (dish) => {   //so ami variable ta ke ekhane banailam jaate ami return e variable ta dite pari &dish is a variable
        return( // ekhane bolte gele amra menu ta ke render ar structure korlam jate amra pore use korte pari
            //so this was out component
            //dish ta kemne shajano thakbe oita bollam
            //array hishabe ekhane anlam arki
            //ETA VARIABLE CALL ER RETURN over here which is menu
            <div key={dish.id} className="col-12 col-md-5 m-1">             
              <Card onClick={() => this.props.onClick(dish.id)}>  {/* BUT HOW DOES IT KNOW THAT IT IS A LOOP   AJKE */}
              {/* ja click kora hoise okhan theke ami dish.id ta nibo */}
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
                
                    {/* {this.renderDish(this.state.selectedDish)} This deals with the onClick event   */}
                
            </div>
            ); 
        }
        }
export default Menu;
