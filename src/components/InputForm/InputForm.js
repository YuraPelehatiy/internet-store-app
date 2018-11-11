import React from 'react';
import s from './InputForm.module.css'

const InputForm = ({
    meta,
    ...props
}) => (
    <div className={s.InputContainer}>
        <input {...props} className={s.InputField}/>
        {meta && meta.error && meta.touched && <span className={s.ErrorField}>{meta.error}</span>}
    </div>
);

export default InputForm;