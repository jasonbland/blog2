import axios from 'axios';

import history from '../history';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=BLUESPIN';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export const createPost = data => async dispatch => {
  const request = await axios.post(`${ROOT_URL}/posts${API_KEY}`, data);

  dispatch({ type: CREATE_POST, payload: request });
  history.push('/');
};
