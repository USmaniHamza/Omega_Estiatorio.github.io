import { createStore } from "redux"; //createStore allows us to create ReduxStore
import { Reducer,initialState } from "./reducer"; //both of them export deya bole they are available for import

export const ConfigureStore = () => { //CREATE the store here
    const store = createStore(
        Reducer,
        initialState    //two parameters to create store
    );

    return store; //created the store
}