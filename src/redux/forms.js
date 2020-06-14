 export const InitialFeedback = {
     firstname: '',
     lastname: '',
     telnum: '',
     email: '',
     agree: false,
     contactType: 'Tel.',
     message: '' //have a feeling some of the variables are builtin here
 }



// import * as ActionTypes from './ActionTypes';

// export const Forms = (state = { 
//         errMess: null,
//         feedback:[]
//         }, action) => {
//   switch (action.type) {
//     case ActionTypes.ADD_FEEDBACK:
      
//         var comment = action.payload; //this is will care of adding the comments in the store on our behalf
//         //comment id shoray dilam jeta AMRA .LENGTH DIYE INDICATE KORSILAM je amra eta server theke ID nibo
//         //date o shoray disi

//         return { ...state, comments: state.feedback.concat(feedback)};
//     default:
//       return state;
//   }
// };