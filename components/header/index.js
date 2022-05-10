import React from 'react';
import Link from 'next/link';
import style from './style.module.scss';

const Header = () => {
    return (
        <div className={style.header}>
            <h3 className={style.header__title}>
                <Link href='/'>
                Game of Thrones DB
                </Link>
            </h3>
            <ul className={style.header__list}>
                <li>
                    <Link href='/characters/'>Characters</Link>
                </li>
                <li>
                    <Link href='/books/'>Books</Link>   
                </li>
            </ul>
        </div>
    );
};

export default Header;