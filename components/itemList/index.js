import React from 'react';
import style from './style.module.scss';


const ItemList = ({data, renderItem, onItemSelected}) => {
    const renderItems = (arr) => {
        return arr.map((item) => {
            const {id} = item;
            const label = renderItem(item);
            return (
                <li 
                    key={id}
                    className={`list__item ${style.ItemList__item}`}
                    onClick={() => onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }

    const items = renderItems(data);

    return (
        <ul className="list">
            {items}
        </ul>
    );
}

ItemList.defaultProps = {
    onItemSelected: () => {},
}

export default ItemList;

