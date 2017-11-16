const AUTH_KEY = process.env.REACT_AUTH_KEY


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