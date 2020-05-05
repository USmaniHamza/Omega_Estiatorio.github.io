import { DISHES } from '../shared/dishes'; 

export const Dishes =(state = DISHES, action) => {
    //parameter e state=DISHES its default
    //if the state in the parameter is undefined
    switch(action.type){
        default:
            return state;
    }
}