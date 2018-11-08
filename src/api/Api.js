import axios from 'axios';

let _token = null;

const setToken = (token) => {
    _token = token;

    axios.defaults.headers.Authorization = _token
       ? `Bearer ${_token}`
       : null;
}

export const AdminProducts = {
    fetchProducts(){
        return axios.get(`/api/v1/products`);
    },

    getProductsById(id){
        return axios.get(`/api/v1/products/${id}`);
    },

    createProduct(body){
        return axios.post('/api/v1/products', body);
    },

    updateProductById(id, body){
        return axios.patch(`/api/v1/products/${id}`, body);
    },

    removeProductById(id){
        return axios.delete(`/api/v1/products/${id}`);
    }
}

export const Products = {
    fetchProducts(){
        return axios.get(`/api/v1/products`);
    },

    getProductsById(id){
        return axios.get(`/api/v1/products/${id}`);
    },
}

export const Cart = {
    getProductsByIds(ids){
        let query = "ids[]=" + ids.join("&ids[]=");
        return axios.get(`/api/v1/products?${query}`);
    }
}
