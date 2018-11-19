import React from 'react';
import s from './Counter.module.css'
import classNames from 'classnames/bind';

let cx = classNames.bind(s);

const Counter = ({
    id,
    value,
    increment,
    decrement,
    onEnterValue,
    horizontalStyle
}) => (
    <div className={cx({
        Counter: true,
        CounterVertical: !horizontalStyle,
        CounterHorizontal: horizontalStyle,
    })}>
        <button onClick={() => increment({id})}>+</button>
        <input value={value} onChange={e => {
            if (e.target.value.match(/^\d+$/) || e.target.value.trim().length === 0) {
                onEnterValue({ value: Number(e.target.value), id });
            } 
        }} />
        <button onClick={() => decrement({id})}>-</button>
    </div>
)

export default Counter;