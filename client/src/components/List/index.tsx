import { FC, useEffect, useState} from 'react';
import { getData } from './debug';
import Button from '../Button';
import './List.css';

interface ILIstProps {
    ItemTemplate: any;
    source: {
        url: string
    };
    onItemClick: Function;
}

const BaseList: FC<ILIstProps> = ({ItemTemplate, onItemClick}) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        getData().then(data => {
            setItems(data as any);
        })
    }, []);

    function addBtnClickedCallback(name: string): void {
        setItems((prev: any) => [
            ...prev,
            {
                id: new Date().getTime(),
                title: name,
                date: new Date()
            }
        ] as any);
    }

    return (
        <div className='baseList__container'>
            <ul className='baseList__container'>
                {items.map((el: any) => {
                    return <ItemTemplate key={el.id} item={el} onClick={onItemClick}/>
                })}
            </ul>
            <Button caption='Добавить' onClick={addBtnClickedCallback}/>
        </div>
    )
}

export default BaseList;
