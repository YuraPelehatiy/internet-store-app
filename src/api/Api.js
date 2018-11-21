import axios from 'axios';

// ---------------------------------------------
// Provides API for work with products, users,
// auth and token
// ---------------------------------------------

// Provides API for work with token and localStorage

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

    _token = null;
    
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

// Provides API for work with proucts on admin side
export const AdminProducts = {
    fetchProducts(offset, limit){
        const query = `?offset=${offset}&limit=${limit}`;

        return axios.get(`/api/v3/products${query}`);
    },

    getProductsById(id){
        return axios.get(`/api/v3/products/${id}`);
    },

    createProduct(body){
        return axios.post('/api/v3/products', body);
    },

    updateProductById(id, body){
        return axios.patch(`/api/v3/products/${id}`, body);
    },

    removeProductById(id){
        return axios.delete(`/api/v3/products/${id}`);
    }
}

// Provides API for work with users on admin side
export const AdminUsers = {
    fetchUsers(offset, limit){
        const query = `?offset=${offset}&limit=${limit}`;

        return axios.get(`/api/v3/users${query}`);
    },

    getUserById(id){
        return axios.get(`/api/v3/users/${id}`);
    },

    updateUserById(id, body){
        return axios.patch(`/api/v3/users/${id}`, body);
    },

    removeUserById(id){
        return axios.delete(`/api/v3/users/${id}`);
    }
}

// Provides API for work with proucts on users side
export const Products = {
    fetchProducts(offset, limit){
        const query = `?offset=${offset}&limit=${limit}`;

        return axios.get(`/api/v3/products${query}`);
    },

    getProductsById(id){
        return axios.get(`/api/v3/products/${id}`);
    },
}

// Provides API for work with proucts on cart page
export const Cart = {
    getProductsByIds(ids){
        let query = "ids[]=" + ids.join("&ids[]=");
        return axios.get(`/api/v3/products?${query}`);
    }
}

// Provides API for Authenticate
export const Auth = {
    login(body){
        return axios.post('/api/v3/auth/login', body)
    },

    register(body){
        return axios.post('/api/v3/auth/register', body)
    },

    remember(body){
        return axios.post('/api/v3/auth/remember', body)
    }
}

// Provides API for work wtih users on user side
export const User = {
    getCurrent(){
        return axios.get('/api/v3/users/current');
    }
}
