import * as types from '../types';
import * as actions from '../actions/index';
import { call, put, fork, takeEvery } from 'redux-saga/effects';
import api from '../../api/index';

async function async_login_user(email, password){
    return await api.put('/login', { email, password })
}
async function async_create_user(crm, name, cpf, email, username, password, departmentId){
    return await api.post('/user', { crm, name, cpf, email, username, password, departmentId })
}

function* login (action){
    const { email, password } = action.payload;    
    try {
       const result  = yield call(async_login_user, email, password )
       yield put(actions.login_success(result))
       
    } catch (error) {
        yield put({ type: types.LOGIN_FAILED, password: { message: error }})
    }
}
function* createUser(action){
    const { crm, name, cpf, email, username, password } = action.payload;
    const departmentId = 1;
    try {
        const result = yield call(async_create_user, crm, name, cpf, email, username, password, departmentId)

        yield put(actions.createUserSuccess(result))
    }catch(error) {
        yield put({ type: types.CREATE_USER_FAILED, password: { message: error }})
    }
}

function* watchLogin(){
   yield takeEvery(types.LOGIN, login) 
}

function* watchCreateUser(){
    yield takeEvery(types.CREATE_USER, createUser)
}

const userSagas = [
    fork(watchLogin),
    fork(watchCreateUser),
]

export default userSagas;