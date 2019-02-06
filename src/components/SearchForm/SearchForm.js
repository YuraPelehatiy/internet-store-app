import React from 'react';
import { Form, Field } from 'react-final-form';
/* import InputForm from '../InputForm/InputForm';
import ActionButton from '../ActionButton/ActionButton'; */
import s from './SearchForm.module.css';

const validate = (values) => {
    const errors = {};

    if (!values.search || values.search.trim().length === 0) {
        errors.search = 'Field is empty';
    }

    return errors;
};

const SearchForm = () => {
    const onSubmit = (values) => { // eslint-disable-line

    };

    return (
        <div className={s.SearchContainer}>
            <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit }) => ( // eslint-disable-line
                    <>
                        <Field name="search">
                            {({ input }) => (
                                <input
                                    className={s.SearchField}
                                    {...input}
                                    type="search"
                                    placeholder="What are you looking for..."
                                />
                            )}
                        </Field>
                        <button
                            className={s.SearchButton}
                        >
                            Search
                        </button>
                    </>

                )}
            />
        </div>
    );
};

export default SearchForm;