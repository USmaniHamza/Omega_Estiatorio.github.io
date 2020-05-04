import React, { Component } from 'react'; 
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

// import { DISHES } from '../shared/dishes'; 
// import { COMMENTS } from '../shared/comments'; 
// import { LEADERS } from '../shared/leaders'; 
// import { PROMOTIONS } from '../shared/promotions'; 
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import { connect } from "react-redux";
//once i obtain the react redux HOW do i connect the main components
// because in this component we were storing the main components of the application
// now this component needs to go an obtain that state from the Redux Store

const mapStatetoProps = state =>{ //THIS STATE IS FROM MY REDUX STORE
//THIS MAPTOSTATEPROPS will make the redux store's 
//state into props that will become available to my component
   return{
     dishes: state.dishes,
     comments: state.comments,
     promotions: state.promotions,
     leaders: state.leaders
     //how do they become available to me as props for my main component
     //these are derived from Redux's stores by connecting this comment to the Redux store

     //mapping each of the properties so that it becomes available to them as PROPS
   }
    
}

class Main extends Component {
  constructor(props){
    super(props);
  
  }
 
 
 
  render(){ 
    const HomePage = () => {
        return(
          <Home dish={this.props.dishes.filter((dish) => dish.featured)[0] } //boolean return true jaader jaader featured hocche false
          promotions={this.props.promotions.filter((promo) => promo.featured)[0] }
          leaders={this.props.leaders.filter((leader) => leader.featured)[0] }/>
          //THE STATE WILL BE AVAILABLE HERE AS PROPS since THE PROPS WILL COME AS PROPERTIES FOR THE MAIN COMPONENT

        );// ektai array index ber hobe so index hocche zero since ekta featured eii khali true ase arki
    }
          const DishWithId = ({match}) =>{
          return( //ekhane shob onClick er kaj hocche
            //shob onno page theke URL e details ta deya jar karone amra match .params diye ante partesi
            <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            comments={this.props.comments.filter((comment)=>comment.dishId=== parseInt(match.params.dishId,10))}
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
        <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes}/>} />    
        <Route path="/menu/:dishId" component={DishWithId}></Route> 
        {/* /menu/:dishId dishId ta ami naam disi so that doesnt matter...: er pore ja ase that would be counted as  */}
        {/* oporer shathe URL match kore so eta hoile ei nichertai choose korbe so exact dile /menu tai choose korbe */}
        <Route exact path="/contactus" component={Contact} />
        {/* EKHANE */}
        {/* contact us e toh props diye toh kono kaj kore na so lage nai  */}
        <Route exact path="/aboutus" component={()=> <About leaders={this.props.leaders}/>}  />        
        <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  } 
  
}

export default withRouter(connect(mapStatetoProps)(Main));
//mapStatetoProps duita ase becareful
//matha thanda na rakhle shesh

//to connect the components to redux store
//export er belay we wrap this Main here inside a connect