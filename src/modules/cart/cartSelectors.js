import { createSelector } from 'reselect';

const getProductsIds = state => state.cart.items;
const getProductsEntities = state => state.entities.products;

export const getProducts = createSelector(
    [getProductsIds, getProductsEntities],
    (ids, entities) => ids.map(id => entities[id]),
);

export const getTotalPrice = createSelector(
    [getProducts],
    items => items.reduce((acc, item) => acc + item.price, 0),
);