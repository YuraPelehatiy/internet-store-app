import React from 'react';
import s from './ErrorSubmiting.module.css';

const ErrorSubmiting = props => (
    <h4 className={s.ErrorSubmiting}>{props.children}</h4>
)

export default ErrorSubmiting;