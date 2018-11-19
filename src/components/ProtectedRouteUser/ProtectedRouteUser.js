import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from '../../routes';
import * as Api from '../../api/Api';

const ProtectedRouteUser = ({ user, ...props }) => {
    if(!Api.isAuthenticated() || (user && !user.id)){
        return <Redirect to={routes.authLogin}/>;
    }

    return <Route {...props} />;
}

const mapStateToProps = state => ({
    user: state.app.user
})

export default connect(
    mapStateToProps,
)(ProtectedRouteUser)
