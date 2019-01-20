import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost, fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  removePost = e => {
    this.props.deletePost(e.target.id);
  };

  renderPosts() {
    return _.reverse(
      _.map(this.props.posts, post => {
        return (
          <li className="ui raised link card" key={post.id}>
            <div className="content">
              <div className="header">{post.title}</div>
              <div className="meta">{post.categories}</div>
              <div className="description">{post.content}</div>
              <i className="trash alternate outline icon" id={post.id} onClick={this.removePost} />
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
        <ul className="ui one cards">
          <li className="ui card">
            <div className="content">
              <div className="header">
                <Link to="/posts/new">Create Post</Link>
              </div>
            </div>
          </li>
          {this.renderPosts()}
        </ul>
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
  { deletePost, fetchPosts }
)(PostsIndex);
