import {RECEIVE_TYPE, RECEIVE_TYPES} from '../actions/type_actions';
import merge from 'lodash/merge';

const _nullTypes = Object.freeze({
    types: []
});

const TypeReducer = (state = _nullTypes, action) => {
    let newState = merge({}, state);
    Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_TYPES:
            newState.types = action.types;
            return newState;
        case RECEIVE_TYPE:
            newState.types = merge(newState.types, action.data);
            return newState;
        default:
            return state;
    }
}

export default TypeReducer;