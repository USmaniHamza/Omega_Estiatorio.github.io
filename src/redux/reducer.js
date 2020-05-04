import { DISHES } from '../shared/dishes'; 
import { COMMENTS } from '../shared/comments'; 
import { LEADERS } from '../shared/leaders'; 
import { PROMOTIONS } from '../shared/promotions';

export const initialState={
    dishes:DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
}
export const Reducer =(state= initialState,action)=>{ //so as you'll recall reducer generate the next state we need the current state and an action
//if state is undefined then the default value of state is initialState AJKE
//cannot modify state directly
// EKHANE KONO DHORONER STATE CHANGE KORA HOCCHE NA
//only an immutable change
//and return updated version of the state from this reducer
//ONE THING about the state is that at the start of our application the state will be uninitialized
//so at the start of the application we initialize our state to the initial step 
//and that initial state contains four properties which is in the above variable
return state; //no changes yet so default e dilam state ferot dite jokhon change ashbe tokhon bujha jabe

}

