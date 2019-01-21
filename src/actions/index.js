import axios from 'axios';

import history from '../history';

export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';
export const FETCH_POST = 'fetch_post';
export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=BLUESPIN';

export const fetchPosts = () => async dispatch => {
  const request = await axios.get(`${ROOT_URL}/posts${API_KEY}`);

  dispatch({ type: FETCH_POSTS, payload: request });
};

export const createPost = data => async dispatch => {
  const request = await axios.post(`${ROOT_URL}/posts${API_KEY}`, data);

  dispatch({ type: CREATE_POST, payload: request });

  history.push('/');
};

export const deletePost = id => async dispatch => {
  const request = await axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  dispatch({ type: DELETE_POST, payload: request });
};

export const fetchPost = id => async dispatch => {
  const request = await axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  dispatch({ type: FETCH_POST, payload: request });
};

// http://reduxblog.herokuapp.com/api/posts/305350?key=BLUESPIN
