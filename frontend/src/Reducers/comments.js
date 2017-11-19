import { GET_COMMENTS, ADD_COMMENT } from '../Actions/actionTypes'


const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return [...action.comments];
    case ADD_COMMENT:
      return [...state, action.comment]
    default:
      return state;
  }
}


export default commentsReducer;