import * as api from '../Utils/api.js'

// Constants
import { GET_COMMENTS, ADD_COMMENT } from './actionTypes'

// Actions Creators
export function getComments(comments) {
  return {
    type: GET_COMMENTS,
    comments
  }
}

export function addCommentsSuccess(comment) {
  return {
    type: ADD_COMMENT,
    comment
  }
}

// Middleware
export const requestComments = (id) => dispatch => {
  return api.getComments(id)
    .then(comments => dispatch(getComments(comments)))
};


export const addComment = (comment) => (dispatch) => {
  return api.addComment(comment)
    .then(comment => {
      return dispatch(addCommentsSuccess(comment))
    })
}