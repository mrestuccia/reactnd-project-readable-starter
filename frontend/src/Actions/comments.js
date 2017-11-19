import * as api from '../Utils/api.js'

// Constants
import { GET_COMMENTS } from './actionTypes'

// Actions Creators
export function getComments(comments) {
  return {
    type: GET_COMMENTS,
    comments
  }
}

// Middleware
export const requestComments = (id) => dispatch => {
  return api.getComments(id)
    .then(comments => dispatch(getComments(comments)))
};