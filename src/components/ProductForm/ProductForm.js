import React from 'react';
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import InputForm from '../InputForm/InputForm';
import ActionButton from '../ActionButton/ActionButton';
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

const ProductForm = ({ 
    onClose,
    onSubmitAction,
    onSubmitButtonTitle,
    product,
}) => {
    const onSubmit = async (values, form) => {
        try {
            await onSubmitAction(values);
            
            form.reset()
            onClose()
        } catch (err) {
            return {
                [FORM_ERROR]: "Something went wrong"
            }
        }
    }

    return (
        <> 
            <Form 
                initialValues={{ ...product }}
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit, submitError }) => (
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
                        {submitError && <div>{submitError}</div>}
                    </>
                )}
            />
        </>
)};

export default ProductForm;