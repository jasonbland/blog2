import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>Posts Index</div>;
  }
}

const mapStateToProps = ({ posts }) => {
  console.log(posts);
  return {
    posts
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostsIndex);
