import { combineReducers } from 'redux';
import products from './products/productsReducer';
import cart from './cart/cartReducer';
import entities from './entities/entitiesReducer';
import admin from './admin/adminReducer';

export default combineReducers({
    products,
    cart,
    entities,
    admin,
});