import * as types from '../types';

const initialState = {
    data: [],
    login_success: false
}

export default function users(state = initialState, action ) {
    switch(action.type){
        case types.LOGIN_SUCCESS: return { ...state, data: action.payload.data, login_success: true }
        case types.CREATE_USER_SUCCESS: return { ...state, data: action.payload.data }
        default:
            return state;
    }
}

