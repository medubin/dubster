import {
  RECEIVE_CURRENT_USER,
  LOGOUT,
  RECEIVE_ERRORS } from '../actions/user_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  userFetched: false,
  errors: []
});

const UserReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      window.currentUser = action.currentUser;
      console.log('updating userFetched')
      const userFetched = true
      const currentUser = action.currentUser;
      return merge({}, _nullUser, {currentUser, userFetched});
    case LOGOUT:
      window.currentUser = null;
      return merge({}, _nullUser);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, {errors});
    default:
      return state;
  }
};

export default UserReducer;
