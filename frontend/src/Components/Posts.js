import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { requestPosts } from '../Actions/posts'

import PostForm from './PostForm'



class Posts extends Component {

  componentDidMount() {
    this.onRouteChanged();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    const { match } = this.props;
    let catid = null;

    if (match) {
      catid = match.params.categoryid
    }

    this.props.requestPosts(catid)
  }

  render() {
    const { posts } = this.props;

    if (!posts) return null;
    return (
      <div>
        <ul>
          {
            posts.map((post) => (
              <li key={post.id}>
                <Link to={`/post/${post.id}`}>
                  {post.title}
                </Link>
              </li>))
          }
        </ul>

        <Link to={`/edit/`}>New Post</Link>
      </div>
    );
  }
}


function mapStateToProps({ posts }) {
  return {
    posts
  }
}

export default connect(mapStateToProps, { requestPosts })(Posts);