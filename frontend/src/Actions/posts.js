import * as api from '../Utils/api.js'

// Constants
import { GET_POSTS } from './actionTypes'

// Actions Creators
export function getPost(posts) {
  return {
    type: GET_POSTS,
    posts
  }
}

// Middleware
export const requestPosts = () => dispatch => {
  return api.getPosts()
    .then(posts => dispatch(getPost(posts)))
};