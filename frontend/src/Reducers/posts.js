import { GET_POSTS } from '../Actions/actionTypes'


const postsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      return [...action.posts];
    default:
      return state;
  }
}

export default postsReducer;