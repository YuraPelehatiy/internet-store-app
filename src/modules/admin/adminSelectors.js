import { createSelector } from 'reselect';

const getProductsIds = state => state.admin.products;
const getProductById = (state, id) => state.entities.products[id];
const getProductsEntities = state => state.entities.products;

export const getProducst = createSelector(
    [getProductsIds, getProductsEntities],
    (products, entities) => products.map(id => entities[id]),
);

export const getProduct = createSelector(getProductById, result => result);