import {combineReducers} from 'redux';

import UserReducer from './user/reducers/user_reducer';
import ModalReducer from './modal/reducers/modal_reducer';
import TemplateReducer from './template/reducers/template_reducer';

const RootReducer = combineReducers({
  user: UserReducer,
  modal: ModalReducer,
  template: TemplateReducer
});

export default RootReducer;
