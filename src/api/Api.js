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
}
