import React from 'react';
import { Form } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import ActionButton from '../../components/ActionButton/ActionButton';
import UserForm from '../../components/UserForm/UserForm';
import ErrorSubmiting from '../../components/ErrorSubmiting/ErrorSubmiting';

const UserPageAdminComponent = ({ 
    user,
    updateUser,
    removeUser,
    history,
}) => {
    const onSubmitRemove = async ({ id }) => {
        try {
            await removeUser(id);
            history.go(-1);
        } catch (err) {
            return {
                [FORM_ERROR]: "Somethings went wrogn"
            }
        }
    }
    
    return (
        <div>
            <UserForm 
                user={user} 
                onSubmitAction={updateUser} 
                onSubmitButtonTitle="Update"
                actionAfterSucceeded={history.goBack}
            />
            <Form
                initialValues = {{ ...user }}
                onSubmit={onSubmitRemove}
                render={({ handleSubmit, submitError, submitting, submitSucceeded }) => (
                    <>
                        <ActionButton onClick={handleSubmit}>Remove</ActionButton>
                        {submitting && <h2>Submiting...</h2>}
                        {submitSucceeded && <h2>Complete</h2>}
                        {submitError && <ErrorSubmiting>{submitError}</ErrorSubmiting>}
                    </>
                )}
            />
        </div>
    );
}

export default UserPageAdminComponent;