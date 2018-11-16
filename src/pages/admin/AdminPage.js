import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../routes';
import AdminNav from './AdminNav/AdminNav'
import ProductListAdminContainer from './ProductListAdmin/ProductListAdminContainer';
import ProductPageAdminContainer from '../ProductAdmin/ProductPageAdminContainer';
import UserListAdminContainer from './UserListAdmin/UserListAdminContainer';
import UsersPageAdminContainer from '../UsersAdmin/UsersPageAdminContainer';

const AdminPage = ({  
    match
}) => (
    <div>
        <AdminNav />
        <Switch>
            <Route 
                exact 
                path={match.path} 
                component={ProductListAdminContainer}
            />
            <Route 
                path={routes.adminProduct} 
                component={ProductPageAdminContainer}
            />
            <Route 
                path={routes.adminUsers} 
                component={UserListAdminContainer}
            />
            <Route 
                path={routes.adminUser} 
                component={UsersPageAdminContainer}
            />
        </Switch>
    </div>
);
export default AdminPage;