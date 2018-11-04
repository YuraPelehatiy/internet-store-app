import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../routes';
import ProductContainer from '../../components/Product/ProductContainer';
import ProductListContainer from './ProductList/ProductListContainer';
import NotFoundPage from '../NotFound/NotFoundPage';

const HomePage = ({ 
    match, 
}) => (
    <div>
        <Switch>
            <Route 
                exact 
                path={match.path} 
                component={ProductListContainer}
            />
            <Route 
                path={routes.product} 
                component={ProductContainer} 
            />
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
);

HomePage.propTypes = {
}

export default HomePage;