import React from 'react';
import s from './TextAreaForm.module.css'
import classNames from 'classnames/bind';

let cx = classNames.bind(s)

const TextAreaForm = ({
    meta,
    ...props
}) => (
    <div className={s.TextAreaContainer}>
        <textarea 
            {...props} 
            className={cx({ 
                TextAreaField: true, 
                TextAreaFieldError: (meta && meta.error && meta.touched),
            })}
            rows={20}/>
        {meta && meta.error && meta.touched && <span className={s.ErrorField}>{meta.error}</span>}
    </div>
);

export default TextAreaForm;