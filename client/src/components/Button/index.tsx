import { FC } from 'react';
import './Button.css';

interface IProps {
    caption: string;
    onClick: Function;
}

const Button: FC <IProps> = (Props) => {
    return (
        <div onClick={() => Props.onClick()} className='button'>{Props.caption}</div>
    );
};

export default Button;
