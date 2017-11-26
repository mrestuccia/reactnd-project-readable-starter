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

  onClick = (ev) => {
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

  onCancel = (ev) => {
    ev.preventDefault();

    this.props.onChangeState()
  }
  componentDidMount() {
    const { comment } = this.props;

    if (comment) {
      this.setState(comment);
    }
  }

  render() {
    const { comment } = this.props;

    return (
      <div className="container">
        <form className="form-horizontal">
          <div className="form-group">
            <input className="form-control" type="text" name='body' value={this.state.body}
              onChange={(ev) => this.onInputChange('body', ev.target.value)}
              placeholder='Content' />
            <input className="form-control" type="text" name='author' value={this.state.author}
              onChange={(ev) => this.onInputChange('author', ev.target.value)}
              placeholder='Author' />

            <button className="btn btn-default btn-sm pull-right" onClick={this.onClick}>
              {(comment) ? 'Save' : 'Add comment'}
            </button>
            {(comment) ?
              <button className="btn btn-default btn-sm pull-right" onClick={this.onCancel}>Cancel</button> :
              ''}
          </div>
        </form>
      </div>
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