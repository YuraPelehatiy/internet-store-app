import React from 'react';
import s from './ActionButton.module.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(s);

const ActionButton = ({
    smallSize,
    mediumSize,
    children,
    ...props,
}) => (
    <button
        className={cx({
            ActionButton,
            ActionButtonLarge: (!smallSize && !mediumSize),
            ActionButtonMedium: mediumSize,
            ActionButtonSmall: smallSize,
        })} 
        {...props}
    >
        {children}
    </button>
)

export default ActionButton;