import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux'

import Categories from './Categories'
import Posts from './Posts'
import Post from './Post'
import PostForm from './PostForm'

import { requestCategories } from '../Actions/categories'
import { requestPosts } from '../Actions/posts'


class App extends Component {

  componentDidMount() {
    this.props.requestCategories()
    this.props.requestPosts()
  }

  render() {
    return (
      <div className="container">
        <div className="title"><Link to='/'>Readable</Link></div>

        <Switch>

          <Route exact path='/add/' component={PostForm} />

          {this.props.categories.map((category, idx) => {
            return (
              this.props.posts
                .filter(post => (post.category === category.path || category === null))
                .map((post, idx2) => {
                  let path = `/${category.path}/${post.id}`
                  return (<Route key={`${idx}_${idx2}`} exact path={path} render={({ match, history }) => {
                    return (<Post category={category} post={post} history={history} />)
                  }} />)
                })
            )
          })
          }


          {this.props.categories.map((category, idx) => {
            return (
              this.props.posts
                .filter(post => (post.category === category.path || category === null))
                .map((post, idx2) => {
                  let path = `/${category.path}/${post.id}/edit`;
                  return (<Route key={`${idx}_${idx2}`} exact path={path} render={({ match, history }) => {
                    return (<PostForm category={category} post={post} history={history} match={match} />)
                }} />)
              })
            )
          })
          }


          {this.props.categories.map((category, idx) => {
            return (
              <Route key={idx} exact path={`/${category.path}`} render={({ match, props, history }) => {
                return (
                  <div>
                    <Categories categories={this.props.categories} history={history} match={match} />
                    <Posts history={history} />
                  </div>
                )
              }
              } />
            )
          })
          }


          <Route exact path={`/`} render={({ history, match }) => (
            <div>
              <Categories categories={this.props.categories} history={history} match={match} />
              <Posts history={history} />
            </div>
          )
          } />


          <Route component={noMatch} />

        </Switch>

      </div>
    );
  }
}

const noMatch = () => {
  return ('Not found :[')
}

function mapStateToProps({ categories, posts }) {
  return {
    categories: [{ path: '', name: 'all' }, ...categories],
    posts
  }
}

export default connect(mapStateToProps, { requestCategories, requestPosts })(App);