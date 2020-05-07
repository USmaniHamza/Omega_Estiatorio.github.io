import * as ActionTypes from './ActionTypes';
//actions tene tarpor action banalo
import { DISHES } from '../shared/dishes'; 
//the impport {DISHES} is no longer needed  because it is the responsibility of the action creator to SUPPLY the Reducer 


export const addComment = (dishId, rating, author, comment) => ({ //FUNCTION THAT RETURNS AN ACTION
    type: ActionTypes.ADD_COMMENT, //action type bolte gele the actions
    payload: {
        dishId: dishId, //these are the information KIKI KORBE ARKI /////WHAT IS GOING ON HERE
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchDishes = () => (dispatch) => {  //this is a thunk that is a funciton that is dispatching actions
    //inner function 
    //eta multithreading er moto kaj korbe
    dispatch(dishesLoading(true));

    setTimeout(() => {
     dispatch(addDishes(DISHES));
    }, 2000);
}
//EGULI SHOB DISHES.js er mathabetha

export const dishesLoading = () => ({
   type:ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
})

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});