import { GET_COMMENTS, ADD_COMMENT, UPDATE_COMMENT } from '../Actions/actionTypes'


const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return [...action.comments];
    case ADD_COMMENT:
      return [...state, action.comment]
    case UPDATE_COMMENT:
      let comments = state.map(comment => {
        if (comment.id === action.comment.id){
          comment = action.comment;
        }
        return comment;
      })
      return  [...comments];
    default:
      return state;
  }
}


export default commentsReducer;