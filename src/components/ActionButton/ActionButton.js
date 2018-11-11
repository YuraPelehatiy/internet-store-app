import React from 'react';
import s from './ActionButton.module.css';

const ActionButton = ({
    onActionButtonClick,
    actionButtonTitle,
}) => (
    <button
        className={s.ActionButton} 
        onClick={onActionButtonClick}
    >
        {actionButtonTitle}
    </button>
)

export default ActionButton;