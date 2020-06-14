import * as ActionTypes from './ActionTypes';

export const Comments = (state = {errMess: null,comments:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return {...state,isLoading:false, errMess: null, comments: action.payload};

    case ActionTypes.COMMENTS_FAILED:
      return {...state,isLoading:false, errMess: action.payload, comments:[]};

    case ActionTypes.ADD_COMMENT:
        var comment = action.payload; //this is will care of adding the comments in the store on our behalf
        //comment id shoray dilam jeta AMRA .LENGTH DIYE INDICATE KORSILAM je amra eta server theke ID nibo
        //date o shoray disi

        return { ...state, comments: state.comments.concat(comment)};
    default:
      return state;
  }
};