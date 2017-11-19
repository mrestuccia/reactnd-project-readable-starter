import React, { Component } from 'react'
import { connect } from 'react-redux'

import { requestComments, updateVote } from '../Actions/'

import Comment from './Comment'
import Vote from './Vote'


class Post extends Component {
  componentDidMount() {
    this.props.requestComments(this.props.postid)
  }

  render() {
    const { post, updateVote } = this.props;
    if (!post) return null;

    return (
      <div>
        <h2>{post.title}</h2>
        <div>{post.body}</div>
        <div>{post.author}</div>
        <div>{post.category}</div>
        <div>{post.voteScore}</div>

        {<Vote id={post.id} func={updateVote} />}

        <div>{post.deleted}</div>

        <Comment parentId={post.id} />

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
    updateVote: (id, option) => dispatch(updateVote(id, option)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
