import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment';

import { requestPosts, deletePost, updateVote } from '../Actions/posts'

import Vote from './Vote'




class Posts extends Component {

  state = {
    sortOption: 'vote'
  }

  componentDidMount() {
    this.onRouteChanged();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onDeleteClick(postId){
    this.props.deletePost(postId)
      .then(
        this.props.history.push(`/`)
      )
  }


  handleOptionChange = (ev) => {
    this.setState({
      sortOption: ev.target.value
    });
  }


  onRouteChanged() {
    const { match } = this.props;
    let catid = null;

    if (match) {
      catid = match.params.categoryid
    }

    this.props.requestPosts(catid)
  }

  render() {
    const { posts, updateVote } = this.props;
    let func;
    if (this.state.sortOption === 'vote') {
      func = (a, b) => b.voteScore - a.voteScore;
    } else {
      func = (a, b) => b.timestamp - a.timestamp;
    }


    if (!posts) return null;
    return (
      <div>
        <p align='right'>Order by: &nbsp;
        <label className="radio-inline">
            <input type="radio" name="order" id="radio1" value="vote" checked={this.state.sortOption === 'vote'} onChange={this.handleOptionChange} /> Vote
        </label>
          <label className="radio-inline">
            <input type="radio" name="order" id="radio2" value="timestamp" checked={this.state.sortOption === 'timestamp'} onChange={this.handleOptionChange} /> Time
        </label>
        </p>

        <table className="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th>title</th>
              <th>date</th>
              <th>author</th>
              <th>comments</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              posts
                .filter(post => post.deleted === false)
                .sort(func)
                .map((post) => (
                  <tr key={post.id}>
                    <td> {<Vote id={post.id} func={updateVote} score={post.voteScore} />}</td>
                    <td><Link to={`/${post.category}/${post.id}`}>{post.title}</Link></td>
                    <td>{moment(post.timestamp).format('MM-DD-YYYY')}</td>
                    <td>{post.author}</td>
                    <td>{post.commentCount}</td>
                    <td>
                      <Link className="btn btn-default btn-sm pull-right" to={`/${post.category}/${post.id}`}>Edit</Link>
                      <button className="btn btn-default btn-sm pull-right" onClick={() => this.onDeleteClick(post.id)}>Delete</button>
                    </td>

                  </tr>))
            }
          </tbody>
        </table>

        <Link className="btn btn-default pull-right" to={`/add/`}>Add Post</Link>
      </div>
    );
  }
}


function mapStateToProps(state, props) {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestPosts: (id) => dispatch(requestPosts(id)),
    updateVote: (id, option) => dispatch(updateVote(id, option)),
    deletePost: (id) => dispatch(deletePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);