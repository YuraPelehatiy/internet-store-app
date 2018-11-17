import React from 'react';
import s from './Counter.module.css'

const Counter = ({
    id,
    value,
    increment,
    decrement,
    onEnterValue,
}) => (
    <div className={s.Counter}>
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