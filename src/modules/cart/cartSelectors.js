import { createSelector } from 'reselect';

const getProductsIds = (state, isLoadign) => {
    if(isLoadign){
        return [];
    }
    return state.cart.items;
};
const getProductsEntities = state => state.entities.products;
const getStatus = (state, isLoadign)=> {
    if(isLoadign){
        return true;
    }
    return false;
}

export const getProducts = createSelector(
    [getProductsIds, getProductsEntities],
    (ids, entities) => ids.map(id => entities[id])
);

export const getTotalPrice = createSelector(
    [getProducts, getStatus],
    (items, status) => {
        if(status || items.some(item => item === undefined)){
            return 0;
        }
        return items.reduce((acc, item) => acc + item.price, 0);
    }
);