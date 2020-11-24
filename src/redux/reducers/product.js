import * as types from '../types';

const initialState = {
    data: [],
    allProducts: []
}

export default function products(state = initialState, action ) {
    switch(action.type){
        case types.CREATE_PRODUCT_SUCCESS: return { ...state, data: action.payload.data }
        case types.GET_PRODUCT_SUCCESS: return { ...state, allProducts: action.payload.data }
        default:
            return state;
    }
}
