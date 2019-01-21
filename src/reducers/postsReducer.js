import _ from 'lodash';
import { CREATE_POST, DELETE_POST, FETCH_POST, FETCH_POSTS } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return { ...state, ..._.mapKeys(action.payload.data, 'id') };
    case CREATE_POST:
      return { ...state, [action.payload.data.id]: action.payload };
    case DELETE_POST:
      return _.omit(state, action.payload.data.id);
    default:
      return state;
  }
};
