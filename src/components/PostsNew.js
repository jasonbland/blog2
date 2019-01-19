import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions';
import PostsForm from './PostsForm';

class PostsNew extends React.Component {
  onSubmit = formValues => {
    this.props.createPost(formValues);
  };

  render() {
    return (
      <div className="ui container">
        <h3>Create new post</h3>
        <PostsForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = { createPost };

export default connect(
  null,
  mapDispatchToProps
)(PostsNew);
