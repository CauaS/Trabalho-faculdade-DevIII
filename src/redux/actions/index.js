import * as types from '../types';

//logins Actions//
export const login = ( email, password ) => ({ type: types.LOGIN, payload: { email, password }})
export const login_success = ({ data }) => ({ type: types.LOGIN_SUCCESS, payload: { data } })

//users Actions //
export const createUser = ( crm, name, cpf, email, userName, password ) => ({ 
    type: types.CREATE_USER, payload: { crm, name, cpf, email, userName, password }
})
export const createUserSuccess = ({ data }) => ({ type: types.CREATE_USER_SUCCESS, payload: { data } })

//sectors Actions

export const createSector = ( description ) => ({ 
    type: types.CREATE_SECTOR, payload: { description }
})
export const createSectorSuccess = ({ data }) => ({ type: types.CREATE_SECTOR_SUCCESS, payload: { data } })

//Product Actions

export const createProduct = ( code, description, quantity ) => ({ 
    type: types.CREATE_PRODUCT, payload: { code, description, quantity }
})
export const createProductSuccess = ({ data }) => ({ type: types.CREATE_PRODUCT_SUCCESS, payload: { data } })
export const getProducts = () => ({ type: types.GET_PRODUCT })
export const getProductSuccess = ({ data }) => ({ type: types.GET_PRODUCT_SUCCESS, payload: { data } })