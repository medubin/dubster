import {combineReducers} from 'redux';

import UserReducer from './user/reducers/user_reducer';

const RootReducer = combineReducers({
  user: UserReducer,
});

export default RootReducer;
