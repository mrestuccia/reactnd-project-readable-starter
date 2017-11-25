import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { requestComments, updateVote } from '../Actions/'

import Comments from './Comments'
import Vote from './Vote'


class Post extends Component {
  componentDidMount() {
    this.props.requestComments(this.props.postId)
  }

  render() {
    const { post, updateVote, postId } = this.props;
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

        <Comments postId={postId}/>

        <br />
        <Link to={`/edit/${postId}`}>Edit</Link>


      </div>


    )
  }
}


const mapStateToProps = (state, props) => {
  const postId = props.match.params.postid
  const post = state.posts.filter(post => post.id === postId)[0];
  const comments = state.comments
  return {
    post,
    postId,
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
