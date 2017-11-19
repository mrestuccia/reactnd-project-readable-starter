import * as api from '../Utils/api.js'

// Constants
import { GET_POSTS, UPDATE_VOTE } from './actionTypes'

// Actions Creators
export function getPostSuccess(posts) {
  return {
    type: GET_POSTS,
    posts
  }
}

export function updateVoteSuccess(post) {
  return {
    type: UPDATE_VOTE,
    post
  }
}


// Middleware
export const requestPosts = () => dispatch => {
  return api.getPosts()
    .then(posts => dispatch(getPostSuccess(posts)))
};

export const updateVote = (id, option) => dispatch => {
  return api.updateVote(id, option)
    .then(post => dispatch(updateVoteSuccess(post)))
};