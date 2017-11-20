import React, { Component } from 'react'
import { connect } from 'react-redux'

import CommentForm from './CommentForm'
import Vote from './Vote'


// Actions
import { deleteComment, updateCommentVote } from '../Actions/comments'


class Comment extends Component {
  render() {
    const { comments, parentId, updateCommentVote, deleteComment } = this.props;

    console.log('')
    if (!comments) return null;
    return (
      <div>
        {comments.map(comment => (
          <div key={comment.id}>
            {comment.body} -
            {comment.author} -
            {comment.voteScore} -
            {<Vote id={comment.id} func={updateCommentVote} />} -
            <button onClick={() => deleteComment(comment.id)} >Delete</button>

          </div>))}
        <CommentForm parentId={parentId} />
      </div>
    )

  }
}

const mapStateToProps = (state, props) => {
  return {
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    //updateComment: (comment, options) => dispatch(updateComment(comment, options)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    updateCommentVote: (id, option) => dispatch(updateCommentVote(id, option)),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Comment);