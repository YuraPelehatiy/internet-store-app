import React from 'react';
import T from 'prop-types';
import { productPropTypes } from '../../schemes/product';
import ProductLinkAdmin from '../../components/ProductLinkAdmin/ProductLinkAdmin'
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../routes';
import ProductContainerAdmin from '../../components/ProductAdmin/ProductContainerAdmin';
import ModalAddProductContainer from '../../components/ModalAddProduct/ModalAddProductContainer';

const AdminPage = ({ productList, match, updateProduct, removeProduct, addProduct}) => (
    <div>
        <ModalAddProductContainer addProduct={addProduct}/>
        <Switch>
            <Route exact path={match.path} render = {() => productList.map(({id, title}) => <ProductLinkAdmin key={id} id={id} title={title}/>)}/>
            <Route path={routes.adminProduct} render = {(props) => <ProductContainerAdmin {...props} productList={productList} updateProduct={updateProduct} removeProduct={removeProduct}/>}/>
        </Switch>

    </div>
);

AdminPage.propTypes = {
    productList: T.arrayOf(productPropTypes).isRequired,
    updateProduct: T.func.isRequired,
    removeProduct: T.func.isRequired,
    addProduct: T.func.isRequired,
}

export default AdminPage;