import React, { Component } from 'react'
import { connect } from 'react-redux'

class Comment extends Component {
  render() {
    const { comments } = this.props;
    if (!comments) return null;
    return (
      <div>
        {comments.map(comment => (<div key={comment.id}>{comment.body}</div>))}
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