import { FC } from 'react';
import './VoteItem.css';

interface IProps {
    item: {
        title: string;
        date: Date;
        id: number;
    }
}

const VoteItem : FC <IProps> = (Props) => {
    return (
        <div className='voteitem'>{Props.item.title}</div>
    );
}
export default VoteItem;