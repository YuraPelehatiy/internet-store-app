import React from 'react';
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import InputField from '../../components/InputField/InputField';
import * as Api from '../../api/Api';

const validate = values => {
    const errors = {}

    if(!values.email || values.email.trim().length < 0 || !values.email.includes('@')){
        errors.email = "Please enter a valid email address"
    }

    if(!values.password || values.password.trim().length < 8){
        errors.password = "Please enter a valid password, password must be 8 or more symbols"
    }

    return errors;
}

const LoginPage = () => {
     const onSubmit = async (values, form) => {
        try {
            const res = await Api.Auth.login(values);

            Api.setToken(res.data.token);

            form.reset();
        } catch (err) {
            return{
                [FORM_ERROR]: "Wrong email or password"
            }
        }
    }

    return(
        <div>
            <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit, submitError }) => (
                    <>
                        <Field name="email">
                            {({ input, meta }) => (
                                <div>
                                    <InputField {...input} type="text" placeholder="Email" meta={meta}/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="password">
                            {({ input, meta }) => (
                                <div>
                                    <InputField {...input} type="password" placeholder="Password" meta={meta}/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <div>
                            <button onClick={handleSubmit}>Login In</button>
                        </div>
                        {submitError && <div>{submitError}</div>}
                    </>
                )}
            />
        </div>
    );
}

export default LoginPage;