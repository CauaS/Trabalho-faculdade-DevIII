import * as types from '../types';
import * as actions from '../actions/index';
import { call, put, fork, takeEvery } from 'redux-saga/effects';
import api from '../../api/index';

async function async_create_product(code, description, quantity){
    return await api.post('/product', { code, description, quantity })    
}
async function async_get_products(){
    return await api.get('/product')    
}

function* createProduct (action){
    const { code, description, quantity } = action.payload;  
    try {
       const result  = yield call(async_create_product, code, description, quantity )
       yield put(actions.createProductSuccess(result))
       
    } catch (error) {
        yield put({ type: types.GET_PRODUCT_FAILED, payload: { message: error }})
    }
}

function* getProducts (){
    try {
        const result  = yield call(async_get_products)
        yield put(actions.getProductSuccess(result))
        
    } catch (error) {
        yield put({ type: types.GET_PRODUCT_FAILED, payload: { message: error }})
    }
} 

function* watchProduct(){
   yield takeEvery(types.CREATE_PRODUCT, createProduct)
}
function* watchGetProducts(){
   yield takeEvery(types.GET_PRODUCT, getProducts)
}

const productSagas = [
    fork(watchProduct),
    fork(watchGetProducts)
]

export default productSagas;