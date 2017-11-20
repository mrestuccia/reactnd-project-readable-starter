const AUTH_KEY = process.env.REACT_AUTH_KEY || 'something'


// Setup the header // URL?
const headers = {
  'Accept': 'application/json',
  'Authorization': AUTH_KEY,
  'Content-Type': 'application/json'
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



// Update Vote
export function updateVote(id, option) {
  console.log('fech: post vote', option);

  return fetch(`http://localhost:3001/posts/${id}`, {
    method: 'POST',
    body: JSON.stringify({ option: option }),
    headers
  })
    .then(res => (res.json()));
}


// Add Comments 
export function addComment(comment) {
  console.log('api: Add Comment', comment);
  return fetch(`http://localhost:3001/comments`, {
    method: 'POST',
    body: JSON.stringify(comment),
    headers
  })
    .then(res => (res.json()));
}


// Add Comment 
export function deleteComment(id) {
  return fetch(`http://localhost:3001/comments/${id}`, {
    method: 'DELETE',
    headers
  })
    .then(res => (res.json()));
}

// Update Comment Vote 
export function updateCommentVote(id, option) {
  return fetch(`http://localhost:3001/comments/${id}`, {
    method: 'POST',
    body: JSON.stringify({option: option}),
    headers
  })
    .then(res => (res.json()));
}


