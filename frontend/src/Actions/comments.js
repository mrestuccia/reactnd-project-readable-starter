import * as api from '../Utils/api.js'

// Constants
import {
  GET_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT
} from './actionTypes'

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

export function updateCommentSuccess(comment) {
  return {
    type: UPDATE_COMMENT,
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

export const updateComment = (comment) => (dispatch) => {
  return api.updateComment(comment)
    .then(comment => {
      return dispatch(updateCommentSuccess(comment))
    })
}

export const deleteComment = (id) => (dispatch) => {
  return api.deleteComment(id)
    .then(comment => {
      return dispatch(updateCommentSuccess(comment))
    })
}

export const updateCommentVote = (id, option) => dispatch => {
  return api.updateCommentVote(id, option)
    .then(comment => {
      return dispatch(updateCommentSuccess(comment))

    })
};