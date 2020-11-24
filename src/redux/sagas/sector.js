import * as types from '../types';
import * as actions from '../actions/index';
import { call, put, fork, takeEvery } from 'redux-saga/effects';
import api from '../../api/index';

async function async_create_sector(description){
    return await api.post('/department', { description })
}

function* createSector (action){
    const { description } = action.payload;    
    try {
       const result  = yield call(async_create_sector, description )
       yield put(actions.createSectorSuccess(result))
       
    } catch (error) {
        yield put({ type: types.CREATE_SECTOR_FAILED, password: { message: error }})
    }
}

function* watchsSector(){
   yield takeEvery(types.CREATE_SECTOR, createSector) 
}

const sectorSagas = [
    fork(watchsSector),
]

export default sectorSagas;