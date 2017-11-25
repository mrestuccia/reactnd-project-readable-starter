import { GET_POSTS, UPDATE_POST, ADD_POST } from '../Actions/actionTypes'


const postsReducer = (state = [], action) => {
  switch (action.type) {

    case GET_POSTS:
      return [...action.posts];

    case ADD_POST:
      return [...state, action.post];

    case UPDATE_POST:
      let posts = state.map(post => {
        if (post.id === action.post.id){
          post = action.post;
        }
        return post;
      })
   
      return [...posts];
    
    default:
      return state;
  }
}

export default postsReducer;