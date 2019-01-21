import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost, fetchPost } from '../actions';
import history from '../history';

class PostsShow extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteCLick = () => {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      history.push('/');
    });
  };

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back to Index</Link>
        <button onClick={this.onDeleteCLick}>Delete Post</button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categoris}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }, ownProps) => {
  return {
    post: posts[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { deletePost, fetchPost }
)(PostsShow);
