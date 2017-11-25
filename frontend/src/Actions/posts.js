import * as api from '../Utils/api.js'

// Constants
import { GET_POSTS, ADD_POST, UPDATE_POST } from './actionTypes'

// Actions Creators
export function getPostSuccess(posts) {
  return {
    type: GET_POSTS,
    posts
  }
}

export function updatePostSuccess(post) {
  return {
    type: UPDATE_POST,
    post
  }
}

export function addPostSuccess(post) {
  return {
    type: ADD_POST,
    post
  }
}


// Middleware
export const requestPosts = (catId) => dispatch => {
  return api.getPosts(catId)
    .then(posts => dispatch(getPostSuccess(posts)))
};

export const addPost = (post) => dispatch => {
  return api.addPost(post)
    .then(post => dispatch(addPostSuccess(post)))
};

export const deletePost = (id) => dispatch => {
  return api.deletePost(id)
    .then(post => dispatch(updatePostSuccess(post)))
};

export const updatePost = (id, title, body) => dispatch => {
  return api.updatePost(id, title, body)
    .then(post => dispatch(updatePostSuccess(post)))
};

export const updateVote = (id, option) => dispatch => {
  return api.updateVote(id, option)
    .then(post => dispatch(updatePostSuccess(post)))
};