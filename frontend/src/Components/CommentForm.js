import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';

import { addComment } from '../Actions/'

console.log('addComment', addComment);

class CommentForm extends Component {
  state = {
    body: '',
    author: ''
  }

  onInputChange = (key, ev) => {
    this.setState({ [key]: ev.target.value })
  }

  onSubmit = (ev) => {
    ev.preventDefault();
    var comment = {}
    comment.id = uuidv1();
    comment.timestamp = Date.now();
    comment.parentId = this.props.parentId;
    comment.author = this.state.author;
    comment.body = this.state.body;
    this.props.addComment(comment);
  }


  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name='author'
          value={this.state.author}
          onChange={this.onInputChange.bind(null, 'author')} />
        <textarea
          type="text"
          name='body'
          value={this.state.body}
          onChange={this.onInputChange.bind(null, 'body')} />
        <button>Comment</button>
      </form>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(addComment(comment))
  }
}


export default connect(null, mapDispatchToProps)(CommentForm);