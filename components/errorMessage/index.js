import React from 'react';
import Image from 'next/image';
import style from './style.module.scss';

const ErrorMessage = () => {
    return (
        <div className={style.ErrorMessage}>
            <Image src='/image/error.jpg' alt='error' width='476' height='268' />
            <span>Somthing goes wrong</span>
        </div>
    )
}

export default ErrorMessage;