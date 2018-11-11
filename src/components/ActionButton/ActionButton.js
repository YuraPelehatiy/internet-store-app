import React from 'react';
import s from './ActionButton.module.css';

const ActionButton = ({
    children,
    ...props,
}) => (
    <button
        className={s.ActionButton} 
        {...props}
    >
        {children}
    </button>
)

export default ActionButton;