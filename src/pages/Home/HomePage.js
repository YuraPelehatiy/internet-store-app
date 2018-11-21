import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../routes';
import ProductPageContainer from '../Product/ProductPageContainer';
import ProdutcListPageComponent from './ProductListPage/ProductListPageContainer';
import NotFoundPage from '../NotFound/NotFoundPage';

const HomePage = ({ 
    match, 
}) => (
    <div>
        <Switch>
            <Route 
                exact 
                path={match.path} 
                component={ProdutcListPageComponent}
            />
            <Route 
                path={routes.product} 
                component={ProductPageContainer} 
            />
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
);

HomePage.propTypes = {
}

export default HomePage;