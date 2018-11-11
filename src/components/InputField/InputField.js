import React from 'react';
import s from './InputField.module.css'

const InputField = (
    props
) => (
    <input {...props} className={s.InputField}/>
);

export default InputField;