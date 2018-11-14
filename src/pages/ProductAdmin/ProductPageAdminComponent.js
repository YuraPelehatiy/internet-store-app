import React from 'react';
import { Form, Field } from 'react-final-form';
import InputForm from '../../components/InputForm/InputForm';
import TextAreaForm from '../../components/TextAreaForm/TextAreaForm';
import ActionButton from '../../components/ActionButton/ActionButton';
import { FORM_ERROR } from 'final-form';

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

const ProductPageAdminComponent = ({ 
    product,
    updateProduct,
    removeProduct,
    history,
}) => {
    const onSubmitUpdate = async ({id, ...values}) => {
        try {
            await updateProduct(id, values);
            history.go(-1);
        } catch (err) {
            return {
                [FORM_ERROR]: "Somethings went wrogn"
            }
        }
    }

    const onSubmitRemove = async ({ id }) => {
        try {
            await removeProduct(id);
            history.go(-1);
        } catch (err) {
            return {
                [FORM_ERROR]: "Somethings went wrogn"
            }
        }
    }
    
    return (
        <div>
            <Form 
                initialValues={{ ...product }}
                onSubmit={onSubmitUpdate}
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
                            <ActionButton onClick={handleSubmit}>Update</ActionButton>
                        </div>
                    </>
                )}
            />
            <Form
                initialValues = {{ ...product }}
                onSubmit={onSubmitRemove}
                render={({ handleSubmit }) => (
                    <ActionButton onClick={handleSubmit}>Remove</ActionButton>
                )}
            />
        </div>
    );
}

export default ProductPageAdminComponent;