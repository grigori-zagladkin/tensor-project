import { FC } from 'react';
import './VoteItem.css';
import '../stylesItems/stylesItems.css';

interface IProps {
    item: {
        voting_id: number;
        title: string; //18
        date_voting: string; // 12
        status: number;
    },
    onClick: Function;
}

interface IStatuses {
    [key: number]: string;
}

function getStatusName(statusIndex: number): string {
    const STATUS_INDEX: IStatuses = {
        0: 'success',
        1: 'yellow',
        2: 'error'
    };
    return STATUS_INDEX[statusIndex];
}

const VoteItem : FC <IProps> = (Props) => {
    return (
        <div key={Props.item.voting_id} className='baseItem' onClick={() => Props.onClick(Props.item)}>
            <div>
                <p className ="baseItem__title">{Props.item.title}</p>
                <p className ="baseItem__date">{Props.item.date_voting}</p>
            </div>
            <div className='voteItem__status__container ' >
                <div className={`baseItem__status baseItem__status__${getStatusName(Props.item.status)}`}></div>
            </div>
        </div>

    );
}
export default VoteItem;