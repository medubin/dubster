import {combineReducers} from 'redux';

import UserReducer from './user/reducers/user_reducer';
import ModalReducer from './modal/reducers/modal_reducer';
import TypeReducer from './type/reducers/type_reducer';

const RootReducer = combineReducers({
  user: UserReducer,
  modal: ModalReducer,
  type: TypeReducer
});

export default RootReducer;
