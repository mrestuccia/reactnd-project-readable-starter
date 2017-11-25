import React, { Component } from 'react'
import { connect } from 'react-redux'
import Vote from './Vote'
import CommentForm from './CommentForm'


// Actions
import { updateComment, deleteComment, updateCommentVote } from '../Actions/comments'


class Comment extends Component {

  state = {
    editMode: false
  }

  onChangeState = () => {
    this.setState({ editMode: !this.state.editMode })
  }


  render() {
    const { comment, updateCommentVote, deleteComment } = this.props;

    if (!comment) return null;
    return (
      this.state.editMode ?
        <CommentForm comment = {comment} onChangeState= {this.onChangeState}/>
        :
        <div>
          <div key={comment.id}>
            [{comment.author}]
            {comment.body}
            {comment.voteScore}
            {<Vote id={comment.id} func={updateCommentVote} />} -
            <button onClick={() => deleteComment(comment.id)} >Delete</button>
            <button onClick={this.onChangeState}>Edit</button>
          </div>
        </div>
    )

  }
}


function mapDispatchToProps(dispatch) {
  return {
    //updateComment: (comment, options) => dispatch(updateComment(comment, options)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    updateCommentVote: (id, option) => dispatch(updateCommentVote(id, option)),
  }
}



export default connect(null, mapDispatchToProps)(Comment);