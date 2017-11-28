import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Categories from './Categories'
import Posts from './Posts'
import Post from './Post'
import PostForm from './PostForm'



const App = () => {

  return (
    <div className="container">
      <h1><Link to='/'>Readable</Link></h1>

      <Switch>


        <Route exact path='/add/' component={PostForm} />
        <Route exact path='/:categoryid/:postid/edit/' component={PostForm} />
        <Route exact path='/:categoryid/:postid' component={Post} />
        <Route exact path='/:categoryid?' render={({ history }) => (
          <div>
            <Categories history={history} />
            <Posts history={history} />
          </div>
        )
        } />


      </Switch>

    </div>
  );
}


export default App;