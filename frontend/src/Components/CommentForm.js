import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';

// Actions
import { addComment } from '../Actions/comments'

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

  // Action connected
  onSubmit = (ev) => {
    ev.preventDefault();

    this.props.addComment({
      id: uuidv1(),
      timestamp: Date.now(),
      parentid: this.props.parentId,
      author: this.state.author,
      body: this.state.body,
    })
      .then(res => {
        this.setState({
          body: '',
          author: ''
        });
      });
  }


  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name='author'
          value={this.state.author}
          onChange={(ev) => this.onInputChange('author', ev.target.value)} />
        <input
          type="text"
          name='body'
          value={this.state.body}
          onChange={(ev) => this.onInputChange('body', ev.target.value)} />
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