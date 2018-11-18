import React from 'react';
import s from './InputForm.module.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(s)

const InputForm = ({
    meta,
    ...props
}) => (
    <div className={s.InputContainer}>
        <input 
            {...props} 
            className={cx({ 
                InputField: true, 
                InputFieldError: (meta && meta.error && meta.touched),
            })}
        />
        {meta && meta.error && meta.touched && <span className={s.ErrorField}>{meta.error}</span>}
    </div>
);

export default InputForm;