import { createStore, combineReducers } from "redux"; //createStore allows us to create ReduxStore
import { Dishes } from "./dishes"; //both of them export deya bole they are available for import
import { Comments } from "./comments";
import { Promotions } from "./promotions";
import { Leaders } from "./leaders";
export const ConfigureStore = () => { //CREATE the store here
    const store = createStore(
       combineReducers({ //we show how exactly various reducers combine
           dishes: Dishes, //dishes managed by Dishes
           comments: Comments,
           promotions: Promotions,
           leaders: Leaders
           //recomposition of global state in our application
           //THESE ARE OVERALL STATES

       })
    );

    return store; //created the store
}