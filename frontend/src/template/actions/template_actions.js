import * as API from '../api/template_api'

export const RECEIVE_TEMPLATES = 'RECEIVE_TEMPLATES';
export const RECEIVE_TEMPLATE = 'RECEIVE_TEMPLATE';

export const getTemplates = () => dispatch => (
    API.getTemplates().then(templates => dispatch(receiveTemplates(templates)))
)

export const getTemplate = (templateId) => dispatch => (
    API.getTemplate(templateId).then(template => dispatch(receiveTemplate(template)))
)

export const createTemplate = (templateData) => dispatch => (
    API.createTemplate(templateData).then(template => dispatch(receiveTemplate(template)))
)

export const receiveTemplates = templates => ({
    type: RECEIVE_TEMPLATES,
    templates
})

export const receiveTemplate = data => ({
    type: RECEIVE_TEMPLATE,
    data
})