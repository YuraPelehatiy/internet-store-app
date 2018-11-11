import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import s from './Desktop.module.css';
import { routes } from '../routes';
import AdminPage from '../pages/Admin/AdminPage';
import HomePage from '../pages/Home/HomePage';
import CartPage from '../pages/Cart/CartPage';
import CartPageModal from '../pages/Cart/CartModal/CartModal';
import AboutPage from '../pages/About/AboutPage';
import ContactPage from '../pages/Contact/ContactPage';
import PrivacyPolicyPage from '../pages/PrivacyPolicy/PrivacyPolicyPage';
import TermsAndConditionsPage from '../pages/TermsAndConditions/TermsAndConditionsPage';
import LoginPage from '../pages/Login/LoginPage';
import RegisterPage from '../pages/Register/RegisterPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import * as Api from '../api/Api';

function ProtectedRoute(props){
  if(!Api.isAuthenticated()){
    return <Redirect to={routes.authLogin} />;
  }

  return <Route {...props} />;
}

class App extends Component {
  previousLocation = this.props.location;

  componentWillUpdate(nextProps){
    let { location } = this.props;

    // Set previousLocation if props.location is not modal
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
      <div className={s.App}>
        <Header/>
        <div className={s.Content}>
          <Switch location={isModal ? this.previousLocation : location}>
            <ProtectedRoute path={routes.admin} component={AdminPage}/>
            <Route path={routes.cart} component={CartPage}/>
            <Route path={routes.about} component={AboutPage}/>
            <Route path={routes.contact} component={ContactPage}/>
            <Route path={routes.privacypolicy} component={PrivacyPolicyPage}/>
            <Route path={routes.termsandconditions} component={TermsAndConditionsPage}/>
            <Route path={routes.authLogin} component={LoginPage}/>
            <Route path={routes.authRegister} component={RegisterPage}/>
            <Route path={routes.home} component={HomePage}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </div>
        {isModal ? <Route path={routes.cart} component={CartPageModal}/> : null}
        <Footer/>
      </div>
    );
  }
}

export default App;
