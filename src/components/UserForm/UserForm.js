import React from 'react';
import { Form, Field } from 'react-final-form';
import InputForm from '../InputForm/InputForm';
import ActionButton from '../ActionButton/ActionButton';
import { FORM_ERROR } from 'final-form';

const validate = values => {
    const errors = {}

    if(!values.firstName || values.firstName.trim().length === 0){
        errors.firstName = "Please enter a valid first name"
    }

    if(!values.lastName || values.lastName.trim().length === 0){
        errors.lastName = "Please enter a valid last name"
    }

    if(!values.email || values.email.trim().length === 0 || !values.email.includes('@')){
        errors.email = "Please enter a valid email address"
    }
    
    return errors;
}

const UserForm = ({
    user,
    onSubmitAction,
    onSubmitButtonTitle,
    actionAfterSucceeded,
}) => {
    const onSubmit = async ({ id, ...values }) => {
        try {
            await onSubmitAction(id, values);

            if(actionAfterSucceeded){
                actionAfterSucceeded();
            }
        } catch (err) {
            return {
                [FORM_ERROR]: "Something went wrong"
            }
        }
    }

    return (
        <>
            <Form
                initialValues={{ ...user }}
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit, submitError }) => (
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
                        <div>
                            <label>
                                <Field name="role" type="radio" component="input" value="user"/>
                                {" "}User{"   "}
                            </label>
                            <label>
                                <Field name="role" type="radio" component="input" value="admin"/>
                                {" "}Admin{" "}
                            </label>
                        </div>
                        <div>
                            <ActionButton onClick={handleSubmit}>{onSubmitButtonTitle}</ActionButton>
                        </div>
                        {submitError && <div>{submitError}</div>}
                    </>
                )}
            />
        </>
    )
}

export default UserForm;