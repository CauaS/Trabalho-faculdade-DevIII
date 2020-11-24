import { combineReducers } from 'redux';
import users from './user';
import products from './product';
import sectors from './sectors';

const rootReducer = combineReducers({
    users: users,
    products: products,
    sectors: sectors
})

export default rootReducer;