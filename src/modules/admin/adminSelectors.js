import { createSelector } from 'reselect';

const getProductsIds = state => state.admin.products;
const getProductById = (state, id) => state.entities.products[id];
const getProductsEntities = state => state.entities.products;

export const getProducst = createSelector(
    [getProductsIds, getProductsEntities],
    (products, entities) => products.map(id => entities[id]),
);

export const getProduct = createSelector(getProductById, result => result);

const getUsersIds = state => state.admin.users;
const getUserById = (state, id) => state.entities.users[id];
const getUsersEntities = state => state.entities.users;

export const getUsers = createSelector(
    [getUsersIds, getUsersEntities],
    (products, entities) => products.map(id => entities[id]),
);

export const getUser = createSelector(getUserById, result => result);