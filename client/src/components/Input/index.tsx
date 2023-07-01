import { ChangeEvent, FC } from 'react';
import './Input.css';

interface IProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input: FC<IProps> = ({ onChange, placeholder }) => (
  <div className='wrapper'>
    <label className='label'>{placeholder}</label>
    <input onChange={onChange} placeholder={placeholder} className='field' />
  </div>
);

export default Input;
