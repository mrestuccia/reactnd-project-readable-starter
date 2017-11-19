import { GET_COMMENTS } from '../Actions/actionTypes'


const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return [...action.comments];
    default:
      return state;
  }
}


export default commentsReducer;