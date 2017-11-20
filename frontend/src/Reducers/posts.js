import { GET_POSTS, UPDATE_VOTE } from '../Actions/actionTypes'


const postsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      return [...action.posts];

    case UPDATE_VOTE:
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