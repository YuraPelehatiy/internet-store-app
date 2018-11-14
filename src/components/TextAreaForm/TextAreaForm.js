import React from 'react';
import s from './TextAreaForm.module.css'

const TextAreaForm = ({
    meta,
    ...props
}) => (
    <div className={s.TextAreaContainer}>
        <textarea {...props} className={s.TextAreaField} rows={20}/>
        {meta && meta.error && meta.touched && <span className={s.ErrorField}>{meta.error}</span>}
    </div>
);

export default TextAreaForm;