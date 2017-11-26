import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link} from 'react-router-dom'

import { requestCategories } from '../Actions/categories'
import { requestPosts } from '../Actions/posts'


class Categories extends Component {
  state = {
    selected: 'all'
  }
  componentDidMount() {
    this.props.requestCategories()
  }

  onClick = (ev, category) => {
    ev.preventDefault();
    this.setState({ selected: category.name });
    this.props.requestPosts(category.path)
  }

  render() {
    const { categories } = this.props;

    if (!categories) return null;
    return (
      <div>
        <ul className="nav nav-tabs">
          {
            categories.map((category, idx) => {
              return (
                <li key={idx} className={(category.name === this.state.selected) ? `active` : ``}>
                  <Link to={(category.path) ? `/category/${category.path}/` : `/`} onClick={(ev, ) => this.onClick(ev, category)}>
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



function mapStateToProps({ categories, posts }) {
  return {
    categories: [{ path: null, name: 'all' }, ...categories],
    posts
  }
}

export default connect(mapStateToProps, { requestCategories, requestPosts })(Categories);