import * as api from '../Utils/api.js'

// Constants
import { GET_CATEGORIES } from './actionTypes'

// Actions Creators
export function getCategories(categories) {
  return {
    type: GET_CATEGORIES,
    categories
  }
}

// Middleware
export const requestCategories = () => dispatch => {
  return api.getCategories()
    .then(categories => dispatch(getCategories(categories)))
};