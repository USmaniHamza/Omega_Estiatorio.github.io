//the impport {DISHES} is no longer needed 
// because it is the responsibility of the action creator to supply the Reducer
import * as ActionTypes from './ActionTypes';
////CONNECTION ASE WITH ACTION CREATOR NOT TO WORRY
export const Dishes =(state = {
         isLoading: true,
         errMEss: null,
         dishes: []  //three different property
    }, action) => {
   
    switch(action.type){
        case ActionTypes.ADD_DISHES:
            return{...state, isLoading:false, errMess: null, dishes:action.payload }
            //the payload is carrying the dishes
        case ActionTypes.DISHES_LOADING:
            return{...state, isLoading:true, errMess: null, dishes:[] } //kind of an immutable change that is done to the object
            //the state wont be mutated
        case ActionTypes.DISHES_FAILED:
            return{...state, isLoading:false, errMess: action.payload, dishes:[] }
        default:
            return state;
    }
}