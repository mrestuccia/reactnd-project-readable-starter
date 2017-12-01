const AUTH_KEY = process.env.REACT_AUTH_KEY || 'something'
const URL = process.env.URL || 'http://localhost:3001'


// Setup the header // URL?
const headers = {
  'Accept': 'application/json',
  'Authorization': AUTH_KEY,
  'Content-Type': 'application/json'
}


// Get all the categories
export function getCategories() {
  return fetch(`${URL}/categories`, {
    headers
  })
    .then(res => res.json())
    .then(data => data.categories);
}


// Get all the post
export function getPosts(category) {
  return fetch((!category)?`${URL}/posts`:`${URL}/${category}/posts`, {
    headers
  })
    .then(res => (res.json()));
}


// Get all the comments
export function getComments(id) {
  return fetch(`${URL}/posts/${id}/comments`, {
    headers
  })
    .then(res => (res.json()));
}



// Update Vote
export function updateVote(id, option) {
  return fetch(`${URL}/posts/${id}`, {
    method: 'POST',
    body: JSON.stringify({ option: option }),
    headers
  })
    .then(res => (res.json()));
}


// Add Comments 
export function addComment(comment) {
  return fetch(`${URL}/comments`, {
    method: 'POST',
    body: JSON.stringify(comment),
    headers
  })
    .then(res => (res.json()));
}


// Delete Comment 
export function deleteComment(id) {
  return fetch(`${URL}/comments/${id}`, {
    method: 'DELETE',
    headers
  })
    .then(res => (res.json()));
}


// Update Comment 
export function updateComment(comment) {
  return fetch(`${URL}/comments/${comment.id}`, {
    method: 'PUT',
    body: JSON.stringify(comment),
    headers
  })
    .then(res => (res.json()));
}


// Update Comment Vote 
export function updateCommentVote(id, option) {
  return fetch(`${URL}/comments/${id}`, {
    method: 'POST',
    body: JSON.stringify({option: option}),
    headers
  })
    .then(res => (res.json()));
}


// Post
export function addPost(post) {
  return fetch(`${URL}/posts/`, {
    method: 'POST',
    body: JSON.stringify(post),
    headers
  })
    .then(res => (res.json()));
}


export function updatePost(id, title, body, category) {
  return fetch(`${URL}/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({title, body, category}),
    headers
  })
    .then(res => (res.json()));
}


export function deletePost(id) {
  return fetch(`${URL}/posts/${id}`, {
    method: 'DELETE',
    headers
  })
    .then(res => (res.json()));
}