import React, { Component } from 'react';
import './Desktop.css';
import { Link, Route } from 'react-router-dom';
import { routes } from '../routes';
import AdminPage from '../pages/admin/admin';
import HomePage from '../pages/home/home';
import CartPage from '../pages/cart/cart';

class App extends Component {
  constructor(){
    super();

    this.state = {}
  }

  updateProduct(newProduct){
    this.setState({
      products: this.state.products.map(oldProduct => {
        if(oldProduct.id === newProduct.id){
          newProduct.price = Number(newProduct.price);
          return newProduct;
        }
        return oldProduct;
      })
    })
  }

  removeProduct(id){
    let products = [...this.state.products];
    let index = products.findIndex(product => product.id === id);
    if(index === -1){
      return;
    }
    products.splice(index, 1);
    this.setState({ products });
  }

  render() {
    return (
      <div className="App">
        <div className="Navigation">
          <Link className="NavigationLink" to={routes.home}>Home</Link>
          /
          <Link className="NavigationLink" to={routes.admin}>Admin</Link>
        </div>
        
        <Route  
          path={routes.home} 
          component={HomePage}
        />
        <Route 
          path={routes.admin} 
          component={AdminPage}
        />
        <Route
          path={routes.cart}
          component={CartPage}
        />

      </div>
    );
  }
}

export default App;
