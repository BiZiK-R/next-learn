import React from 'react';
import style from './style.module.scss';

const RowBlock = ({left, right}) => {
    return (
        <div className={style.RowBlock}>
            <div className={style.RowBlock__col}>
                {left}
            </div>
            <div className={style.RowBlock__col}>
                {right}
            </div>
        </div>
    )
}

export default RowBlock;