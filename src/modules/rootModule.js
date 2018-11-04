import { combineReducers } from 'redux';
import products from './products/productsReducer';
import cart from './cart/cartReducer';
import entities from './entities/entitiesReducer';

export default combineReducers({
    products,
    cart,
    entities,
});