import React from 'react';
import { Form, Field } from 'react-final-form';
import InputField from '../../components/InputField/InputField';

const AuthPage = () => {
    const onSubmit = values => {
        console.log(values)
    }

    const validate = values => {
        const errors = {}

        if(!values.email || !values.email.includes('@')){
            errors.email = "Please enter a valid email address"
        }

        if(!values.password || values.password.length < 8){
            errors.password = "Please enter a valid password, password must be 8 or more symbols"
        }

        return errors;
    }

    return(
        <div>
            <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({handleSubmit, form}) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="email">
                            {({ input, meta }) => (
                                <div>
                                    <label>
                                        <h3>Email</h3>
                                    </label>
                                    <InputField {...input} type="text" placeholder="Email"/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="password">
                            {({ input, meta }) => (
                                <div>
                                    <label>Password</label>
                                    <InputField {...input} type="password" placeholder="Password"/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <div>
                            <button type="submit">Login In</button>
                        </div>
                    </form>
                )}
            />
        </div>
    );
}

export default AuthPage;