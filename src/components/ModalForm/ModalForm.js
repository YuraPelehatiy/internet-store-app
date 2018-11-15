import React from 'react';
import { Form, Field } from 'react-final-form';
import Modal from 'react-responsive-modal';
import InputForm from '../InputForm/InputForm';
import ActionButton from '../ActionButton/ActionButton';
import { FORM_ERROR } from 'final-form';
import s from './ModalForm.module.css'
import TextAreaForm from '../TextAreaForm/TextAreaForm';

const validate = values => {
    const errors = {}

    if(!values.title || values.title.trim().length === 0){
        errors.title = "Requared"
    }
    if(!values.description || values.description.trim().length === 0){
        errors.description = "Requared"
    }
    if(!values.image || values.image.trim().length === 0){
        errors.image = "Requared"
    }
    if(!values.price){
        errors.price = "Requared"
    }

    return errors;
}

const ModalFormComponent = ({ 
    open,
    onClose,
    onSubmitAction,
    onSubmitButtonTitle,
    product,
}) => {
    const onSubmit = async (values, form) => {
        try {
            if(values.id){
                await onSubmitAction(values.id, values);
            } else {
                await onSubmitAction(values);
            }
            
            form.reset()
            onClose()
        } catch (err) {
            return {
                [FORM_ERROR]: "Something went wrong"
            }
        }
    }

    return (
        <Modal open={open} onClose={onClose}>
            <div className={s.ModalForm}> 
                <Form 
                    initialValues={{ ...product }}
                    onSubmit={onSubmit}
                    validate={validate}
                    render={({ handleSubmit }) => (
                        <>
                            <Field name="title">
                                {({ input, meta }) => (
                                    <InputForm {...input} type="text" placeholder="Title" meta={meta}/>
                                )} 
                            </Field>
                            <Field name="description">
                                {({ input, meta }) => (
                                    <TextAreaForm {...input} placeholder="Description" meta={meta} />
                                )} 
                            </Field>
                            <Field name="image">
                                {({ input, meta }) => (
                                    <InputForm {...input} type="text" placeholder="Image URL" meta={meta}/>
                                )} 
                            </Field>
                            <Field name="price">
                                {({ input, meta }) => (
                                    <InputForm {...input} type="number" placeholder="Price" meta={meta}/>
                                )} 
                            </Field>
                            <div>
                                <ActionButton onClick={handleSubmit}>{onSubmitButtonTitle}</ActionButton>
                            </div>
                        </>
                    )}
                />
            </div>
        </Modal>
)};

export default ModalFormComponent;