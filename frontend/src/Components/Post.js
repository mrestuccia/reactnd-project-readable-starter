import React, { Component } from 'react'
import { connect } from 'react-redux'

import { requestComments } from '../Actions/'

import Comment from './Comment'


class Post extends Component {
  componentDidMount() {
    this.props.requestComments(this.props.postid)
  }

  render() {
    const { post } = this.props;
    if (!post) return null;

    return (
      <div>
        <h2>{post.title}</h2>
        <div>{post.body}</div>
        <div>{post.author}</div>
        <div>{post.category}</div>
        <div>{post.voteScore}</div>
        <div>{post.deleted}</div>

        <Comment />

      </div>


    )
  }
}


const mapStateToProps = (state, props) => {
  const postid = props.match.params.postid
  const post = state.posts.filter(post => post.id === postid)[0];
  const comments = state.comments
  return {
    post,
    postid,
    comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestComments: (id) => dispatch(requestComments(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
