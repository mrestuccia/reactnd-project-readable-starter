import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import moment from 'moment';

import { requestComments } from '../Actions/comments'
import { updateVote, deletePost}  from '../Actions/posts'

import Comments from './Comments'
import Vote from './Vote'


class Post extends Component {
  componentDidMount() {
    this.props.requestComments(this.props.postId)
  }

  onDeleteClick(postId){
    const {history, deletePost} = this.props;

    deletePost(postId).then(history.goBack())
  }

  render() {
    const { post, updateVote, postId } = this.props;
    if (!post) return null;

    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
          <h2>{post.title}</h2>
          <div>{post.body}</div>
          <div>by {post.author}</div>
          <div>on { moment(post.timestamp).format('MM-DD-YYYY')}</div>
          <div>{post.category}</div>
          {<Vote id={post.id} func={updateVote} score={post.voteScore} />}

          <Link className="btn btn-default btn-sm pull-right" to={`/edit/${postId}`}>Edit</Link>
          <button className="btn btn-default btn-sm pull-right" onClick={()=>this.onDeleteClick(postId)}>Delete</button>
          </div>
        </div>

        <Comments postId={postId} />
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
    deletePost: (id) => dispatch(deletePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
