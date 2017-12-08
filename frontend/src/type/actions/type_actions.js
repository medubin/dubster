import * as API from '../api/type_api'

export const RECEIVE_TYPES = 'RECEIVE_TYPES';
export const RECEIVE_TYPE = 'RECEIVE_TYPE';

export const getTypes = () => dispatch => (
    API.getTypes().then(types => dispatch(receiveTypes(types)))
)

export const getType = (typeId) => dispatch => (
    API.getType(typeId).then(type => dispatch(receiveType(type)))
)

export const createType = (typeData) => dispatch => (
    API.createType(typeData).then(type => dispatch(receiveType(type)))
)

export const receiveTypes = types => ({
    type: RECEIVE_TYPES,
    types
})

export const receiveType = data => ({
    type: RECEIVE_TYPE,
    data
})