import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { compose, lifecycle, mapProps, withProps } from 'recompose';
import s from './Desktop.module.css';
import { routes } from '../routes';
import AdminPage from '../pages/Admin/AdminPage';
import HomePage from '../pages/Home/HomePage';
import CartPage from '../pages/Cart/CartPageContainer';
import CartPageModal from '../pages/Cart/CartModal/CartModal';
import AboutPage from '../pages/About/AboutPage';
import ContactPage from '../pages/Contact/ContactPage';
import PrivacyPolicyPage from '../pages/PrivacyPolicy/PrivacyPolicyPage';
import TermsAndConditionsPage from '../pages/TermsAndConditions/TermsAndConditionsPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import ProtectedRouteUser from '../components/ProtectedRouteUser/ProtectedRouteUser';
import UserPage from '../pages/User/UserPageContainer';

const App = ({ location, previousLocation }) => {
  
  let isModal = !!(
    location.state &&
    location.state.modal &&
    previousLocation !== location
  );

  return(
    <div className={s.App}>
      <Header/>
      <div className={s.Content}>
        <Switch location={isModal ? previousLocation : location}>
          <ProtectedRoute path={routes.admin} component={AdminPage}/>
          <Route path={routes.cart} component={CartPage}/>
          <Route path={routes.about} component={AboutPage}/>
          <Route path={routes.contact} component={ContactPage}/>
          <Route path={routes.privacypolicy} component={PrivacyPolicyPage}/>
          <Route path={routes.termsandconditions} component={TermsAndConditionsPage}/>
          <ProtectedRouteUser path={routes.user} component={UserPage}/>
          <Route path={routes.home} component={HomePage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
      {isModal ? <Route path={routes.cart} component={CartPageModal}/> : null}
      <Footer/>
    </div>
  );
}


// This logic allows you to open the cart page in the modal window
// when we click on the cart link and on a separate page when we 
// go to the cart page directly by the link or reload the page with 
// the open modal box of the cart

let previousLocation;

const getPreviousLocation = () => previousLocation;
const setPreviousLocation = newPreviousLocation => {
  previousLocation = newPreviousLocation;
}

export default compose(
  withProps(
    props => {
      setPreviousLocation(props.location)
    }
  ),
  lifecycle({
    componentWillUpdate(nextProps){
      let { location } = this.props;

      // Set previousLocation if props.location is not modal
      if (
        nextProps.history.action !== "POP" &&
        (!location.state || !location.state.modal)
      ) {
        setPreviousLocation(this.props.location);
      }
    }
  }),
  mapProps(props => ({
    ...props,
    previousLocation: getPreviousLocation()
  }))
)(App);
