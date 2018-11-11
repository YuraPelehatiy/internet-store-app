import React from 'react';
import { Form, Field } from 'react-final-form';
import InputField from '../../components/InputField/InputField';
import * as Api from '../../api/Api';

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

    if(values.rePassword !== values.password){
        errors.rePassword = "Passwords do not match"
    }

    return errors;
}

const RegisterPage = () => {
    const onSubmit = async values => {
        
    }

    return(
        <div>
            <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({handleSubmit}) => (
                    <>
                        <Field name="firstName">
                            {({ input, meta }) => (
                                <div>
                                    <InputField {...input} type="text" placeholder="First Name"/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="lastName">
                            {({ input, meta }) => (
                                <div>
                                    <InputField {...input} type="text" placeholder="Last Name"/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="email">
                            {({ input, meta }) => (
                                <div>
                                    <InputField {...input} type="text" placeholder="Email"/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="password">
                            {({ input, meta }) => (
                                <div>
                                    <InputField {...input} type="password" placeholder="Create Password"/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="rePassword">
                            {({ input, meta }) => (
                                <div>
                                    <InputField {...input} type="password" placeholder="Re-type Password"/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <div>
                            <button onClick={handleSubmit}>Register</button>
                        </div>
                    </>
                )}
            />
        </div>
    );
}

export default RegisterPage;