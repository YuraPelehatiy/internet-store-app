import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../routes';
import ProductAdminContainer from '../../components/ProductAdmin/ProductAdminContainer';
import ModalAddProductContainer from '../../components/ModalAddProduct/ModalAddProductContainer';
import ProductList from './ProductList/ProductListContainer';

const AdminPage = ({  
    match
}) => (
    <div>
        <ModalAddProductContainer/>
        <Switch>
            <Route 
                exact 
                path={match.path} 
                component={ProductList}
            />
            <Route 
                path={routes.adminProduct} 
                component={ProductAdminContainer}
            />
        </Switch>
    </div>
);

AdminPage.propTypes = {}

export default AdminPage;