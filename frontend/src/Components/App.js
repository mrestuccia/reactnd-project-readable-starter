import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Categories from './Categories'
import Posts from './Posts'
import Post from './Post'
import CreatePost from './CreatePost'



class App extends Component {
  render() {
    return (
      <div>
        <h1><Link to='/'>Readable</Link></h1>
        <Categories />
        <Route exact path='/' render={() => (
          <Posts />
        )} />
       

        <Route exact path='/category/:categoryid' render={() => (
          <Posts />
        )} />

        <Route path='/post/:postid' component={Post} />

        <Route exact path='/create' render={() => (
          <CreatePost />
        )} />
      </div>
    );
  }
}

export default App;
