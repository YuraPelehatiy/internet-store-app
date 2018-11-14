import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../routes';
import ProductPageAdminContainer from '../ProductAdmin/ProductPageAdminContainer';
import ProductListAdmin from './ProductListAdmin/ProductListAdminContainer';

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
                component={ProductPageAdminContainer}
            />
        </Switch>
    </div>
);
export default AdminPage;