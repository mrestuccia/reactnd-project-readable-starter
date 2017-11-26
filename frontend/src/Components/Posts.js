import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment';

import { requestPosts } from '../Actions/posts'




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


  handleOptionChange =(ev)=> {
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
    const { posts } = this.props;
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
          <tbody>
            {

              posts
                .filter(post => post.deleted === false)
                .sort(func)
                .map((post) => (
                  <tr key={post.id}>
                    <td>{post.voteScore}</td>
                    <td><Link to={`/post/${post.id}`}>{post.title}</Link></td>
                    <td>{moment(post.timestamp).format('MM-DD-YYYY')}</td>
                  </tr>))
            }
          </tbody>
        </table>

        <Link className="btn btn-default pull-right"to={`/edit/`}>Add Post</Link>
      </div>
    );
  }
}


function mapStateToProps({ posts }) {
  return {
    posts
  }
}

export default connect(mapStateToProps, { requestPosts })(Posts);