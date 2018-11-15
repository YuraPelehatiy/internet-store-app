import { createSelector } from 'reselect';

const getProductsItems = (state, isLoadign) => {
    if(isLoadign){
        return [];
    }
    return state.cart.items;
};

const getProductsEntities = state => state.entities.products;

const getStatusLoading = (state, isLoadign) => {
    if(isLoadign){
        return true;
    }
    return false;
}

export const getProducts = createSelector(
    [getProductsItems, getProductsEntities],
    (items, entities) => Object.keys(items).map(id => {
        if(entities[id] === undefined){
            return ({
                id: id,
                title: "Loading...",
                price: 0,
            });
        }
        
        return entities[id];
    })
);

export const getTotalPrice = createSelector(
    [getProducts, getProductsItems, getStatusLoading],
    (products, items, status) => {
        return products.reduce((acc, product) => acc + product.price * items[product.id].count, 0);
    }
);

export const getCountItems = createSelector(
    [getProductsItems],
    items => {
        const ids = Object.keys(items);
        return ids.reduce((acc, id) => acc + items[id].count, 0);
    }
)