import { FC } from 'react';
import './ThemeItem.css';

interface IProps {
    key: any;
    item: {
        theme_id: number;
        title: string,
        res: {[key: string]: number};
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
        'No': 'error',
        'Unsure': 'yellow',
        'Yes': 'success'
    };
    return COLORS[color];
}

const ThemeItem: FC<IProps> = (props) => {
    return (
        <div key={props.item.theme_id} className='baseItem' onClick={() => props.onClick(props.item)}>
        <div>  
            <p className ="baseItem__title">{props.item.title}</p>
        </div>
        <div className='themeItem__status__container ' > 
            { Object.keys(JSON.parse(props.item.res as any))?.map((el)=>{
                return (
                    <div className={`baseItem__status baseItem__status__${getClass(el)} themeItem__status`}>
                        <p className='themeItem__status__value'>{JSON.parse(props.item.res as any)[el]}</p>
                    </div>
                    );
            }) }
            </div>
        </div>

        
    );
}

export default ThemeItem;