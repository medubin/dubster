import {RECEIVE_TEMPLATE, RECEIVE_TEMPLATES} from '../actions/template_actions';
import merge from 'lodash/merge';

const _nullTemplates = Object.freeze({
    templates: []
});

const TemplateReducer = (state = _nullTemplates, action) => {
    let newState = merge({}, state);
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_TEMPLATES:
            newState.templates = action.templates;
            return newState;
        case RECEIVE_TEMPLATE:
            newState.templates = merge(newState.templates, action.data);
            return newState;
        default:
            return state;
    }
}

export default TemplateReducer;