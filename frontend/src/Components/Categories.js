import React, { Component } from 'react'
import { connect } from 'react-redux'

import { requestCategories } from '../Actions/categories'



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
          categories.map((item, idx) => (<li key={idx}>{item.name} </li>))
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