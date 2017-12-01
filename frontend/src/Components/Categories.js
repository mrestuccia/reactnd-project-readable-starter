import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { requestPosts } from '../Actions/posts'


class Categories extends Component {
  componentDidMount() {
    const { match } = this.props;
    const path = match.path.slice(1)
    this.props.requestPosts(path)
  }

  render() {
    const { categories, match } = this.props;
    const path = match.path

    if (!categories) return null;
    return (
      <div>
        <ul className="nav nav-tabs">
          {
            categories.map((category, idx) => {
              return (
                <li key={idx} className={(path === '/' + category.path) ? `active` : ``}>
                  <Link to={category.path} >
                    {category.name}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}


export default connect(null, { requestPosts })(Categories);