import React from 'react';
import { Switch, Route } from 'react-router-dom';
import T from 'prop-types';
import { routes } from '../../routes';
import { productPropTypes } from '../../schemes/product';
import ProductLink from '../../components/ProductLink/ProductLink';
import ProductContainer from '../../components/Product/ProductContainer';
import ProductListContainer from './ProductList/ProductListContainer';

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
        </Switch>
    </div>
);

HomePage.propTypes = {
}

export default HomePage;