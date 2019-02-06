import React from 'react';
import s from './UserPage.module.css';

const UserPageComponent = ({
    firstName,
    lastName,
    email,
    created_at, // eslint-disable-line
}) => (
    <div className={s.UserPage}>
        <h2 className={s.UserPageHeader}>Your account</h2>
        <div className={s.Line}>
            <div>First Name:</div>
            <div>{firstName}</div>
        </div>
        <div className={s.Line}>
            <div>Last Name</div>
            <div>{lastName}</div>
        </div>
        <div className={s.Line}>
            <div>Email:</div>
            <div>{email}</div>
        </div>
        <div className={s.Line}>
            <div>Registred:</div>
            <div>{`${new Date(created_at).getFullYear()}.${new Date(created_at).getMonth()}.${new Date(created_at).getDate()}`}</div>
        </div>
    </div>
);

export default UserPageComponent;