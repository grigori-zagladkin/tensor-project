import { FC } from 'react';
import './ThemeItem.css';

interface IProps {
    key: any;
    item: {
        theme_id: number;
        title: string,
        res: Array<{color: string, value:number}>;
        date: Date;
        description: string;
    },
    onClick: Function;
}
interface IStatuses {
    [key: string]: string;
}

function getClass(color: string): string {
    const COLORS: IStatuses = {
        'Red': 'error',
        'Yellow': 'yellow',
        'Green': 'success'
    };
    return COLORS[color];
}

const ThemeItem: FC<IProps> = (props) => {
    return (
        <div key={props.item.theme_id} className='baseItem' onClick={() => props.onClick(props.item)}>
        <div>  
            <p className ="baseItem__title">{props.item.title}</p>
            <p className ="baseItem__date">{props.item.description}</p>
        </div>
        <div className='themeItem__status__container ' > 
            { props.item.res?.map((el)=>{
                return (
                    <div className={`baseItem__status baseItem__status__${getClass(el.color)} themeItem__status`}>
                        <p className='themeItem__status__value'>{el.value}</p>
                    </div>
                    );
            }) }
            </div>
        </div>

        
    );
}

export default ThemeItem;