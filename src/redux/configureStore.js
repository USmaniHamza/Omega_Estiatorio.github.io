import { createStore, combineReducers, applyMiddleware } from "redux"; //createStore allows us to create ReduxStore
import {createForms} from 'react-redux-form';
import { Dishes } from "./dishes"; //both of them export deya bole they are available for import
import { Comments } from "./comments"; //THESE ARE THE REDUCERS
import { Promotions } from "./promotions";

import { Leaders } from "./leaders";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback, Forms } from "./forms"; //is this a reducer


export const ConfigureStore = () => { //CREATE the store here
    const store = createStore(
       combineReducers({ //we show how exactly various reducers combine
           dishes: Dishes, //dishes managed by Dishes
           comments: Comments,
           promotions: Promotions,
           leaders: Leaders,           
           ...createForms({ 
                feedback: InitialFeedback 
           })
       }),
       applyMiddleware(thunk ,logger) //this is where it calls the thunk
    );

    return store; //created the store
}