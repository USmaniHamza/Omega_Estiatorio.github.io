import React, { Component } from 'react'; 
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import { postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators'; //the action creator
import {actions} from 'react-redux-form';
import { TransitionGroup,CSSTransition } from "react-transition-group";

const mapDispatchToProps = dispatch => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromos: () => {dispatch(fetchPromos())}
});

const mapStateToProps = state => { //state gula props e anlam then it will be available as this.props instead of this.state
  return {
    dishes: state.dishes, ///but where are the states 
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {
  constructor(props){
    super(props);
  
  }
  
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }
 
  render(){ 
    const HomePage = () => {
        return(
          <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
              promoLoading={this.props.promotions.isLoading}
              promoErrMess={this.props.promotions.errMess}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
          //EKHANE PROMOS LOADING AR PROMOS ERRMESS  ADD KORA HOISE
          //THE STATE WILL BE AVAILABLE HERE AS PROPS since THE PROPS WILL COME AS PROPERTIES FOR THE MAIN COMPONENT

        );// ektai array index ber hobe so index hocche zero since ekta featured eii khali true ase arki
    }

    
         const DishWithId = ({match}) => {
      return(
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
        isLoading={this.props.dishes.isLoading}
        errMess={this.props.dishes.errMess}
        comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        commentsErrMess={this.props.comments.errMess}
        postComment={this.props.postComment}
      />
      );
    };

           


    return (//React Routing through any page is basically what single page app is about
      <div>
        <Header/>
        
        <div>
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}> 
          {/* //every component receives match key history so we are using location */}
        <Switch> 
        <Route path="/home" component={HomePage} /> 
          {/* path dibo ar kon component e jabo eta dibo 
          PATH hocche URL er*/}
        <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes}/>} />    
        <Route path="/menu/:dishId" component={DishWithId}/>
        {/* /menu/:dishId dishId ta ami naam disi so that doesnt matter...: er pore ja ase that would be counted as  */}
        {/* oporer shathe URL match kore so eta hoile ei nichertai choose korbe so exact dile /menu tai choose korbe */}
        <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
        {/* //WHERE IS THIS PROPS COMING FROM INCASE OF THE UPPER LINE */}
        {/* EKHANE */}
        {/* contact us e toh props diye toh kono kaj kore na so lage nai  */}
        <Route exact path="/aboutus" component={()=> <About leaders={this.props.leaders}/>}  />        
        <Redirect to="/home" />
        </Switch>
          </CSSTransition>
        </TransitionGroup>
        </div>
        
        <Footer />
      </div>
    );
  } 
  
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));

//mapStatetoProps duita ase becareful
//matha thanda na rakhle shesh 

//to connect the components to redux store
//export er belay we wrap this Main here inside a connect