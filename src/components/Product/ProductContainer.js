import React from 'react';
import ProductComponent from './ProductComponent';
import { productPropTypes } from '../../schemes/product';
import T from 'prop-types';
import { routes } from '../../routes';

class ProductContainer extends React.Component {
    constructor(props){
        super(props);
        const { match: { params }, productList } = this.props;
        const product = productList.find(({id}) => id === Number(params.id));
        
        this.state = {
            ...product
        };

        this.onSubmitUpdate = this.onSubmitUpdate.bind(this);
        this.onChangeField = this.onChangeField.bind(this);
    }

    onSubmitUpdate(e){
        e.preventDefault();
        this.props.updateProduct(this.state);
        this.props.history.push(routes.admin)
    }

    

    onChangeField(name){ 
        return (e) => {
            this.setState({
                [name]: e.target.value
            });
        }
        
    }

    render(){
        return(
            <ProductComponent 
                {...this.state} 
                onSubmitUpdate={this.onSubmitUpdate} 
                handleOnRemove={this.props.removeProduct}
                onChangeField={this.onChangeField}/>
        );
    }
} 

ProductComponent.propTypes = {
    productList: T.arrayOf(productPropTypes),
};

export default ProductContainer;