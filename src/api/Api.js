import axios from 'axios';

let _token = null;

export const setToken = (token) => {
    _token = token;

    localStorage.setItem('token', token);

    if(_token === "undefined"){
        _token = null;
    }

    axios.defaults.headers.Authorization = _token
       ? `Bearer ${_token}`
       : null;
}

export const removeToken = () => {
    localStorage.removeItem('token');
    
    axios.defaults.headers.Authorization = null;
}

export const isAuthenticated = () => {
    if(_token === "undefined"){
        return false;
    }
    return !!_token
};

export const initApi = () => {
    const token = localStorage.getItem('token');

    setToken(token);
}

export const AdminProducts = {
    fetchProducts(){
        return axios.get(`/api/v2/products`);
    },

    getProductsById(id){
        return axios.get(`/api/v2/products/${id}`);
    },

    createProduct(body){
        return axios.post('/api/v2/products', body);
    },

    updateProductById(id, body){
        return axios.patch(`/api/v2/products/${id}`, body);
    },

    removeProductById(id){
        return axios.delete(`/api/v2/products/${id}`);
    }
}

export const Products = {
    fetchProducts(){
        return axios.get(`/api/v2/products`);
    },

    getProductsById(id){
        return axios.get(`/api/v2/products/${id}`);
    },
}

export const Cart = {
    getProductsByIds(ids){
        let query = "ids[]=" + ids.join("&ids[]=");
        return axios.get(`/api/v2/products?${query}`);
    }
}

export const Auth = {
    login(body){
        return axios.post('/api/v2/auth/login', body)
    },

    register(body){
        return axios.post('/api/v2/auth/rgister', body)
    },

    remember(body){
        return axios.post('/api/v2/auth/remember', body)
    }
}

export const User = {
    getCurrent(){
        return axios.get('/api/v2/users/current');
    }
}
