import React, { Component } from 'react';
import './Desktop.css';
import { Link, Route, Switch } from 'react-router-dom';
import { routes } from '../routes';
import AdminPage from '../pages/admin/admin';
import HomePage from '../pages/home/home';
import CartPage from '../pages/cart/cart';
import CartPageModal from '../pages/cart/CartModal/CartModal';
class App extends Component {
  constructor(){
    super();

    this.state = {}
  }

  componentWillUpdate(nextProps){
    let { location } = this.props;

    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    let { location } = this.props;

    let isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );

    return (
      <div className="App">
        <div className="Navigation">
          <Link className="NavigationLink" to={routes.home}>Home</Link>
          /
          <Link className="NavigationLink" to={routes.admin}>Admin</Link>
          /
          <Link className="NavigationLink" to={{ pathname: routes.cart, state: {modal: true} }}>Cart</Link>
        </div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route 
            path={routes.admin} 
            component={AdminPage}
          />
          <Route
            path={routes.cart}
            component={CartPage}
          />
          <Route  
            path={routes.home} 
            component={HomePage}
          />
          <Route render={() => <h2>Page Not Found</h2>}/>
        </Switch>
        {isModal ? <Route path={routes.cart} component={CartPageModal}/> : null}
      </div>
    );
  }
}

export default App;
