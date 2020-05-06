import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => { //REDUCER takes the previous state and the action and returns the next state
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:  //chooses the action that was created KORAY DEY
            var comment = action.payload; //the info is taken from the action creator WHAT IS 
            //GOING ON HERE I GUESS THIS IS THE ACTION BEING SET UP
            comment.id = state.length; //these are supposed to be the acions
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);

            return state.concat(comment); //the new immutated STATE returned

        default:
          return state;
      }
};