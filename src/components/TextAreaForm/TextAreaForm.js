import React from 'react';
import classNames from 'classnames/bind';
import s from './TextAreaForm.module.css';

const cx = classNames.bind(s);

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
            rows={20}
        />
        {meta && meta.error && meta.touched && <span className={s.ErrorField}>{meta.error}</span>}
    </div>
);

export default TextAreaForm;