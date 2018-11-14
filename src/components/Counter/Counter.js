import React from 'react';
import s from './Counter.module.css'

const Counter = ({
    id,
    value,
    increment,
    decrement,
}) => (
    <div className={s.Counter}>
        <button onClick={() => increment({id})}>+</button>
        <h2>{value}</h2>
        <button onClick={() => decrement({id})}>-</button>
    </div>
)

export default Counter;