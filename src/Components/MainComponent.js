import React, { Component } from 'react'; 
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
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
          <Home dish={this.state.dishes.filter((dish) => dish.featured)[0] } //boolean return true jaader jaader featured hocche false
          promotions={this.state.promotions.filter((promo) => promo.featured)[0] }
          leaders={this.state.leaders.filter((leader) => leader.featured)[0] }/>
        );// ektai array index ber hobe so index hocche zero since ekta featured eii khali true ase arki
    }
          const DishWithId = ({match}) =>{
          return( //ekhane shob onClick er kaj hocche
            //shob onno page theke URL e details ta deya jar karone amra match .params diye ante partesi
            <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            comments={this.state.comments.filter((comment)=>comment.dishId=== parseInt(match.params.dishId,10))}
            />
            );

          }

           


    return (//React Routing through any page is basically what single page app is about
      <div>
        <Header/>
        <Switch> 
        <Route path="/home" component={HomePage} /> 
          {/* path dibo ar kon component e jabo eta dibo 
          PATH hocche URL er*/}
        <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/>} />    
        <Route path="/menu/:dishId" component={DishWithId}></Route> 
        {/* /menu/:dishId dishId ta ami naam disi so that doesnt matter...: er pore ja ase that would be counted as  */}
        {/* oporer shathe URL match kore so eta hoile ei nichertai choose korbe so exact dile /menu tai choose korbe */}
        <Route exact path="/contactus" component={Contact} />
        {/* EKHANE */}
        {/* contact us e toh props diye toh kono kaj kore na so lage nai  */}
        <Route exact path="/aboutus" component={()=> <About leaders={this.state.leaders}/>}  />        
        <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  } 
  
}

export default Main;
