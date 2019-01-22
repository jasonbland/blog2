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
      <div className="ui container">
        <Link to="/">Back to Index</Link>
        <div className="ui one cards">
          <div className="ui raised card">
            <div className="content">
              <div className="header">{post.title}</div>
              <div className="meta">Categories: {post.categories}</div>
              <p className="description">{post.content}</p>
              <button className="ui button primary right floated" onClick={this.onDeleteCLick}>
                Delete Post
              </button>
            </div>
          </div>
        </div>
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
