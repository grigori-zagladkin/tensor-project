import { ChangeEvent, FC } from "react";
import "./Input.css";

interface IProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input: FC<IProps> = ({ value, onChange, placeholder }) => (
  <div className="wrapper">
    <label className="label">{placeholder}</label>
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="field"
    />
  </div>
);

export default Input;
