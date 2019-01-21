import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    return <div>Posts show!</div>;
  }
}

const mapStateToProps = ({ posts }, ownProps) => {
  return {
    post: posts[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchPost }
)(PostsShow);
