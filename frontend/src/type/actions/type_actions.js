import * as API from '../api/type_api'

export const RECEIVE_TYPES = 'RECEIVE_TYPES';
export const RECEIVE_TYPE = 'RECEIVE_TYPE';

export const getTypes = () => dispatch => (
    Api.getTypes().then(types => dispatch(receiveTypes(types)))
)

export const getType = (typeId) => dispatch => (
    Api.getType(typeId).then(type => dispatch(receiveType(type)))
)

export const createType = (typeData) => dispatch => (
    Api.createType(typeData).then(type => dispatch(receiveType(type)))
)

export const receiveTypes = types => ({
    type: RECEIVE_TYPES,
    types
})

export const receiveType = type => ({
    type: RECEIVE_TYPE,
    type
})