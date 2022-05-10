import React, {useState, useEffect} from 'react';
import style from './style.module.scss';

const Field = ({item, field, label}) => {
    return (
        <li className="list__item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {Field}


function ItemDetails({selectError, itemId, getData, data, children}) {

    const [item, upItem] = useState(data);

    useEffect(() => {
        updateItem()
    }, [itemId]);

    function updateItem() {

        if (!itemId) {
            return;
        }

        if (!data && getData) {
            getData(itemId)
                .then((item) => {
                    upItem(item)
                })
        }
    }


    if (!item) {
        return <span className={style.selectError}>{selectError}</span>
    }

    const {name} = item;

    return (
        <div className={style.ItemDetails}>
            <h4>{name}</h4>
            <ul className="list">
                {
                    React.Children.map(children, (child) => {
                        return React.cloneElement(child, {item})
                    })
                }
            </ul>
        </div>
    );
}

export default ItemDetails;