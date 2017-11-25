import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';

// Actions
import { addComment, updateComment } from '../Actions/comments'

class CommentForm extends Component {
  // Local State
  state = {
    body: '',
    author: ''
  }

  // Local Actions
  onInputChange = (key, value) => {
    this.setState({ [key]: value })
  }

  onSubmit = (ev) => {
    ev.preventDefault();

    const { updateComment, addComment, comment, postId, onChangeState } = this.props;


    if (!comment) {

      const newComment = {
        id: uuidv1(),
        timestamp: Date.now(),
        body: this.state.body,
        author: this.state.author,
        parentId: postId
      }

      addComment(newComment).then(res => this.setState({ body: '', author: '' }));
    } else {
      updateComment(this.state).then(res => onChangeState())
    }
  }

  componentDidMount() {
    const { comment } = this.props;

    if (comment) {
      this.setState(comment);
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" name='author'
          value={this.state.author}
          onChange={(ev) => this.onInputChange('author', ev.target.value)} />
        <input type="text" name='body'
          value={this.state.body}
          onChange={(ev) => this.onInputChange('body', ev.target.value)} />
        <button>Save</button>
      </form>
    )
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(addComment(comment)),
    updateComment: (comment) => dispatch(updateComment(comment))
  }
}

export default connect(null, mapDispatchToProps)(CommentForm);