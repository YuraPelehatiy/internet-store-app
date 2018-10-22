import React from 'react';
import T from 'prop-types';
import { productPropTypes } from '../../schemes/product';
import ProductLink from '../../components/ProductLink/ProductLink'
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../routes';
import ProductContainer from '../../components/Product/ProductContainer'

const AdminPage = ({ productList, match, updateProduct, removeProduct }) => (
    <div>
        <Switch>
            <Route exact path={match.path} render = {() => productList.map(({id, title}) => <ProductLink key={id} id={id} title={title}/>)}/>
            <Route path={routes.adminProduct} render = {(props) => <ProductContainer {...props} productList={productList} updateProduct={updateProduct} removeProduct={removeProduct}/>}/>
        </Switch>
    </div>
);

AdminPage.propTypes = {
    productList: T.arrayOf(productPropTypes).isRequired,
    updateProduct: T.func.isRequired
}

export default AdminPage;