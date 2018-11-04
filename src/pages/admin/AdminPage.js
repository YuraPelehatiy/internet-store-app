import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../routes';
import ProductAdminContainer from '../../components/ProductAdmin/ProductAdminContainer';
import ProductListAdmin from './ProductList/ProductListAdminContainer';

const AdminPage = ({  
    match
}) => (
    <div>
        <Switch>
            <Route 
                exact 
                path={match.path} 
                component={ProductListAdmin}
            />
            <Route 
                path={routes.adminProduct} 
                component={ProductAdminContainer}
            />
        </Switch>
    </div>
);
export default AdminPage;