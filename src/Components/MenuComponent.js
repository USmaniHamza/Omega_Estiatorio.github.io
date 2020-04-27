import React, { Component } from 'react';
import { Media } from 'reactstrap';
//menu so it would return a list of dishes in my restaurant
class Menu extends Component{
   
    constructor(props){
        super(props); //immediate parent class constructor

        this.state = { //its a property i guess
            dishes: [  //dishes is a variable
            {
                id: 0,
                name:'Uthappizza',
                image: 'assets/images/uthappizza.png',
                category: 'mains',
                label:'Hot',
                price:'4.99',
                description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        
            },
             {
                id: 1,
                name:'Zucchipakoda',
                image: 'assets/images/zucchipakoda.png',
                category: 'appetizer',
                label:'',
                price:'1.99',
                description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        
            },
             {
                id: 2,
                name:'Vadonut',
                image: 'assets/images/vadonut.png',
                category: 'appetizer',
                label:'New',
                price:'1.99',
                description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        
            },
             {
                id: 3,
                name:'ElaiCheese Cake',
                image: 'assets/images/elaicheesecake.png',
                category: 'dessert',
                label:'',
                price:'2.99',
                description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'     

             }
            ],
        };
    }
render(){

    const menu=this.state.dishes.map((dish) => {   //so ami variable ta ke ekhane banailam jaate ami return e variable ta dite pari
        return( // ekhane bolte gele amra menu ta ke render ar structure korlam jate amra pore use korte pari
            //so this was out component
            //dish ta kemne shajano thakbe oita bollam
            //array hishabe ekhane anlam arki
            <div key={dish.id} className="col-12 mt-5">             
              <Media tag="li">
                  <Media left middle>
                      <Media object src={dish.image} alt={dish.name}  />
                  </Media>
                        <Media body className="ml-5">
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
              </Media>
            </div>
              );
    }) ; //menu defined as a JS variable
    //mapping

        return( // seems like we can use JS variables inside my JSX menu is a JS variable
            <div className="container">
                <div className="row"> 
                    <Media list> {/* list na dile horizontal hoye jabe */}
                        {menu} 
                    </Media>
                </div>
            </div>
            ); 
        }
        }
export default Menu;