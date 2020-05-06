import * as ActionTypes from './ActionTypes';

export const addComment = (dishId, rating, author, comment) => ({ //FUNCTION THAT RETURNS AN ACTION
    type: ActionTypes.ADD_COMMENT, //action type bolte gele the actions
    payload: {
        dishId: dishId, //these are the information KIKI KORBE ARKI /////WHAT IS GOING ON HERE
        rating: rating,
        author: author,
        comment: comment
    }
});