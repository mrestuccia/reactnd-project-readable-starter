import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { requestPosts } from '../Actions/posts'



class Posts extends Component {
  componentDidMount() {
    this.props.requestPosts()
  }

  render() {
    const { posts } = this.props;

    if (!posts) return null;
    return (
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
    );
  }
}


function mapStateToProps({ posts }) {
  return {
    posts
  }
}

export default connect(mapStateToProps, { requestPosts })(Posts);