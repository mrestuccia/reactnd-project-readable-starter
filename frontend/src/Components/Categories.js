import React, { Component } from 'react'
import { connect } from 'react-redux'

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
    const { history } = this.props;
    ev.preventDefault();
    this.setState({ selected: category.name });
    this.props.requestPosts(category.path);

    if(!category.path){
      history.push('/');
    }else{
      history.push(`/${category.path}`)      
    }
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
                  <a onClick={(ev) => this.onClick(ev, category)}>
                    {category.name}
                  </a>
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