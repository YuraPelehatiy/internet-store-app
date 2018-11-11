import React from 'react';
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as appOperations from '../../modules/app/appOperations';
import { routes } from '../../routes';
import InputForm from '../../components/InputForm/InputForm';
import ActionButton from '../../components/ActionButton/ActionButton';
import AuthForm from '../../components/AuthForm/AuthForm';

const validate = values => {
    const errors = {}

    if(!values.firstName || values.firstName.trim().length === 0){
        errors.firstName = "Please enter a valid first name"
    }

    if(!values.lastName || values.lastName.trim().length === 0){
        errors.lastName = "Please enter a valid last name"
    }

    if(!values.email ||  values.email.trim().length === 0 || !values.email.includes('@')){
        errors.email = "Please enter a valid email address"
    }

    if(!values.password || values.password.trim().length < 8){
        errors.password = "Please enter a valid password, password must be 8 or more symbols"
    }

    return errors;
}

const RegisterPage = ({ register, login }) => {
    const onSubmit = async (values, form) => {
        try {
            await register(values);
            await login({
                email: values.email,
                password: values.password,
            })
            form.reset();
        } catch (err) {
            return {
                [FORM_ERROR]: "User already registered"
            }
        }
    }

    return(
        <AuthForm>
            <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit, submitError, submitSucceeded }) => (
                    <>
                        <Field name="firstName">
                            {({ input, meta }) => (
                                <InputForm {...input} type="text" placeholder="First Name" meta={meta}/>
                            )}
                        </Field>
                        <Field name="lastName">
                            {({ input, meta }) => (
                                <InputForm {...input} type="text" placeholder="Last Name" meta={meta}/>
                            )}
                        </Field>
                        <Field name="email">
                            {({ input, meta }) => (
                                <InputForm {...input} type="text" placeholder="Email" meta={meta}/>
                            )}
                        </Field>
                        <Field name="password">
                            {({ input, meta }) => (
                                <InputForm {...input} type="password" placeholder="Create Password" meta={meta}/>
                            )}
                        </Field>
                        <div>
                            <ActionButton onClick={handleSubmit}>Register</ActionButton>
                        </div>
                        {submitError && <div>{submitError}</div>}
                        {submitSucceeded && <Redirect to={routes.home} />}
                    </>
                )}
            />
        </AuthForm>
    );
}

const mapStateToProps = state => ({});

const mapStateToDispatch = {
    register: appOperations.register,
    login: appOperations.login,
}


export default connect(
    mapStateToProps,
    mapStateToDispatch
)(RegisterPage);