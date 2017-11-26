import React from 'react';
import { Route, Link } from 'react-router-dom';

import Categories from './Categories'
import Posts from './Posts'
import Post from './Post'
import PostForm from './PostForm'



const App = () => {
  
  return (
    <div className="container">
      <h1><Link to='/'>Readable</Link></h1>

      <Route exact path='/' render={() => (
        <div>
          <Categories />
          <Posts /> 
        </div>
        )
      } />

      <Route exact path='/category/:categoryid' component={Posts} />
      <Route exact path='/post/:postid' component={Post} />

      <Route exact path='/edit/:postid?' component={PostForm} />
    </div>
  );
}


export default App;
