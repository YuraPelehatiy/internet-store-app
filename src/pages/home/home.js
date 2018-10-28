import React from 'react';
import { Switch, Route } from 'react-router-dom';
import T from 'prop-types';
import { routes } from '../../routes';
import { productPropTypes } from '../../schemes/product';
import ProductLink from '../../components/ProductLink/ProductLink';
import ProductContainer from '../../components/Product/ProductContainer';

const HomePage = ({ 
    match, 
    productList 
}) => (
    <div>
        <Switch>
            <Route 
                exact 
                path={match.path} 
                render={() => (
                    productList.map(({id, title, image, price}) => (
                        <ProductLink 
                            key={id} 
                            id={id} 
                            title={title} 
                            image={image} 
                            price={price}
                        />
                        )
                    )
                )}
            />
            <Route 
                path={routes.product} 
                render={renderProps => (
                    <ProductContainer 
                        productList={productList} 
                        {...renderProps}
                    />
                )} 
            />
        </Switch>
    </div>
);

HomePage.propTypes = {
    productList: T.arrayOf(productPropTypes).isRequired
}

export default HomePage;