const AUTH_KEY = process.env.REACT_AUTH_KEY || 'something'


// Setup the header // URL?
const headers = {
  'Accept': 'application/json',
  'Authorization': AUTH_KEY
}


// Get all the categories
export function getCategories() {
  console.log('feching categories');
  return fetch(`http://localhost:3001/categories`, {
    headers
  })
    .then(res => res.json())
    .then(data => data.categories);
}


// Get all the post
export function getPosts() {
  console.log('feching posts');
  return fetch(`http://localhost:3001/posts`, {
    headers
  })
    .then(res => (res.json()));
}


// Get all the comments
export function getComments(id) {
  console.log('feching comments');
  return fetch(`http://localhost:3001/posts/${id}/comments`, {
    headers
  })
    .then(res => (res.json()));
}