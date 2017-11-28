import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import uuidv1 from 'uuid/v1';

import { addPost, updatePost } from '../Actions/posts'
import { requestCategories } from '../Actions/categories'

class PostForm extends Component {
  state = {
    title: '',
    body: '',
    author: '',
    category: ''
  }

  onInputChange = (key, value) => {
    this.setState({ [key]: value })
  }

  onSubmit = (ev) => {
    ev.preventDefault();

    const { history, updatePost, addPost, post, categories } = this.props;

    if (!post) {
      const newPost = {
        id: uuidv1(),
        timestamp: Date.now(),
        title: this.state.title,
        body: this.state.body,
        author: this.state.author,
        category: this.state.category || categories[0].name
      }

      addPost(newPost);
      history.push(`/post/${newPost.id}`)        
    } else {
      updatePost(this.state.id, this.state.title, this.state.body)
      history.push(`/${this.state.category}/${this.state.id}`)
    }
  }

  componentDidMount() {
    this.setState(this.props.post);
    this.props.requestCategories();
  }

  render() {

    const { post, categories } = this.props;

    return (
      <div>
        <h4>{(!post) ? 'Add' : 'Edit'} post</h4>
        <form>
          <input
            className='form-control'
            type="text"
            name='title'
            value={this.state.title}
            onChange={(ev) => this.onInputChange('title', ev.target.value)} 
            placeholder="title"
            />
          <input
            className='form-control'
            type="text"
            name='author'
            value={this.state.author}
            onChange={(ev) => this.onInputChange('author', ev.target.value)} 
            placeholder="author"
            />
          <textarea
            className='form-control'
            type="text"
            name='body'
            value={this.state.body}
            onChange={(ev) => this.onInputChange('body', ev.target.value)} 
            placeholder = "body"
            />
          <select
            className='form-control'
            name='category'
            value={this.state.category}
            onChange={(ev) => this.onInputChange('category', ev.target.value)} >
            {categories.map((category) => (<option key={category.name}>{category.name}</option>))}
          </select>

          <button className='btn btn-default pull-right' onClick={this.onSubmit}>Save</button>
          <Link className="btn btn-default pull-right"to={`/`}>Cancel</Link>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state, props) => {
  const postid = props.match.params.postid
  const post = state.posts.filter(post => post.id === postid)[0];
  const categories = state.categories;
  return {
    post,
    categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => dispatch(addPost(post)),
    updatePost: (id, title, body) => dispatch(updatePost(id, title, body)),
    requestCategories: ()=> dispatch(requestCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);




