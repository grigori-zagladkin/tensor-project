import { FC } from 'react';
import './VoteItem.css';

interface IProps {
    item: {
        title: string; //18
        date: Date; // 12
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
        <div className='voteItem' onClick={() => Props.onClick(Props.item)}>
            <div>
                <p className ="voteItem__title">{Props.item.title}</p>
                <p className ="voteItem__date">{Props.item.date.toDateString()}</p>
            </div>
            <div className='voteItem__status__container ' style={{flex: '0 1 30px'}}>
                <div className={`voteItem__status voteItem__status__${getStatusName(Props.item.status)}`}></div>
            </div>
        </div>

    );
}
export default VoteItem;