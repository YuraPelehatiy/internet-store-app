import React from 'react';
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import { connect } from 'react-redux';
import * as appOperations from '../../modules/app/appOperations';
import InputForm from '../../components/InputForm/InputForm';
import ActionButton from '../../components/ActionButton/ActionButton';
import AuthForm from '../../components/AuthForm/AuthForm';
import ErrorSubmiting from '../../components/ErrorSubmiting/ErrorSubmiting';

const validate = values => {
    const errors = {}

    if(!values.email ||  values.email.trim().length === 0 || !values.email.includes('@')){
        errors.email = "Please enter a valid email address"
    }

    return errors;
}

const RememberPage = ({ remember }) => {
    const onSubmit = async (values, form) => {
        try {
            await remember(values);
            form.reset();
        } catch (err) {
            return {
                [FORM_ERROR]: "Something went wrong"
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
                        <Field name="email">
                            {({ input, meta }) => (
                                <InputForm {...input} type="text" placeholder="Email" meta={meta}/>
                            )}
                        </Field>
                        <div>
                            <ActionButton onClick={handleSubmit}>Remember</ActionButton>
                        </div>
                        {submitError && <ErrorSubmiting>{submitError}</ErrorSubmiting>}
                        {submitSucceeded && <div>We have sent instructions for your email</div>}
                    </>
                )}
            />
        </AuthForm>
    );
}

const mapStateToProps = state => ({});

const mapStateToDispatch = {
    remember: appOperations.remember,
}


export default connect(
    mapStateToProps,
    mapStateToDispatch
)(RememberPage);