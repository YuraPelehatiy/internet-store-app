import React from 'react';
import classNames from 'classnames/bind';
import s from './InputForm.module.css';

const cx = classNames.bind(s);

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