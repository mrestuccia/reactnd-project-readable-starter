import React, { Component } from 'react'
import { connect } from 'react-redux'

import CommentForm from './CommentForm'

class Comment extends Component {
  render() {
    const { comments, parentId } = this.props;
    if (!comments) return null;
    return (
      <div>
        {comments.map(comment => (<div key={comment.id}>{comment.body}</div>))}
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



export default connect(mapStateToProps)(Comment);