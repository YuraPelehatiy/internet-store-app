import React from 'react';
import classNames from 'classnames/bind';
import s from './ActionButton.module.css';

const cx = classNames.bind(s);

const ActionButton = ({
    smallSize,
    mediumSize,
    children,
    ...props
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
);

export default ActionButton;