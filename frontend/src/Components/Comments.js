import React, { Component } from 'react'
import { connect } from 'react-redux'

import CommentForm from './CommentForm'
import Comment from './Comment'


class Comments extends Component {
  render() {
    const { comments, postId } = this.props;

    if (!comments) return null;
    return (
      <div>
        {comments
          .filter(comment => comment.deleted === false)
          .map(comment => (<Comment key={comment.id} comment={comment} />))}
        <CommentForm postId={postId} />
      </div>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps, null)(Comments);