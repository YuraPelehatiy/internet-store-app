import React from 'react';
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import InputForm from '../InputForm/InputForm';
import ActionButton from '../ActionButton/ActionButton';
import ErrorSubmiting from '../ErrorSubmiting/ErrorSubmiting';

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
    const onSubmit = async (values) => {
        try {
            await onSubmitAction(values);

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
                render={({ handleSubmit, submitError, submitting, submitSucceeded }) => (
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
                        {submitting && <h2>Submiting...</h2>}
                        {submitSucceeded && <h2>Complete</h2>}
                        {submitError && <ErrorSubmiting>{submitError}</ErrorSubmiting>}
                    </>
                )}
            />
        </>
    )
}

export default UserForm;