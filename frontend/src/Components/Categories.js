import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { requestCategories } from '../Actions/'



class Categories extends Component {
  componentDidMount() {
    this.props.requestCategories()
  }

  render() {
    const { categories } = this.props;

    if (!categories) return null;
    return (
      <ul>
        {
          categories.map((category, idx) => {
            return (
              <Link to={`/category/${category.path}/`}>
                <li key={`_${category.path}/`}>
                  {category.name}
                </li>
              </Link>
            )
          })
        }
      </ul>
    );
  }
}



function mapStateToProps({ categories }) {
  return {
    categories
  }
}

export default connect(mapStateToProps, { requestCategories })(Categories);