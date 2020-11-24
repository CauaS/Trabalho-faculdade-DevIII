import * as types from '../types';

const initialState = {
    data: [],
}

export default function sectors(state = initialState, action ) {
    switch(action.type){
        case types.CREATE_SECTOR_SUCCESS: return { ...state, data: action.payload.data }
        default:
            return state;
    }
}

