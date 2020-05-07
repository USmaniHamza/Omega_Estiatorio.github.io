import { createStore, combineReducers, applyMiddleware } from "redux"; //createStore allows us to create ReduxStore
import {createForms} from 'react-redux-form';
import { Dishes } from "./dishes"; //both of them export deya bole they are available for import
import { Comments } from "./comments"; //THESE ARE THE REDUCERS
import { Promotions } from "./promotions";
import { Leaders } from "./leaders";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from "./forms"; //is this a reducer


export const ConfigureStore = () => { //CREATE the store here
    const store = createStore(
       combineReducers({ //we show how exactly various reducers combine
           dishes: Dishes, //dishes managed by Dishes
           comments: Comments,
           promotions: Promotions,
           leaders: Leaders,
           ...createForms({ //enables us to add the forms state
            //gives us a reducer that takes care of the forms
                feedback: InitialFeedback // adds necessary reducer functions and and stetea infor in the createStore
                //as it was said before that redux brings in its own support for Forms
                //so we dont need to write our own reducers or our own action creators and so on
                //REACT REDUX FORMS FILLS IN ALL THE DETAILS BY ITSELF in order to make it available to us
           })
           //recomposition of global state in our application
           //THESE ARE OVERALL STATES

       }),
       applyMiddleware(thunk ,logger) //this is where it calls the thunk
    );

    return store; //created the store
}