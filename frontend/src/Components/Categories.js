import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { requestCategories } from '../Actions/categories'
import { requestPosts } from '../Actions/posts'


class Categories extends Component {
  componentDidMount() {
    this.props.requestCategories()
  }

  postsCategories(ev, name) {
    ev.preventDefault();
    this.props.requestPosts(name)
  }

  render() {
    const { categories } = this.props;

    if (!categories) return null;
    return (
      <ul>
        {
          categories.map((category, idx) => {
            return (
              <Link key={idx} to={`/category/${category.path}/`}>
                <li>{category.name}</li>
              </Link>
            )
          })
        }
      </ul>
    );
  }
}



function mapStateToProps({ categories, posts }) {
  return {
    categories,
    posts
  }
}

export default connect(mapStateToProps, { requestCategories, requestPosts })(Categories);