import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.reverse(
      _.map(this.props.posts, post => {
        return (
          <li className="ui raised link card" key={post.id}>
            <div className="content">
              <div className="header">{post.title}</div>
              <div className="meta">{post.categories}</div>
              <div className="description">{post.content}</div>
            </div>
          </li>
        );
      })
    );
  }

  render() {
    if (!this.props.posts) {
      return <div>Loading...</div>;
    }

    return (
      <div className="ui container">
        <h3>Posts</h3>
        <ul className="ui one cards">{this.renderPosts()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostsIndex);
