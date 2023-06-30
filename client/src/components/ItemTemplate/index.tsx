import { FC } from "react";

import styles from "./ItemTemplate.module.scss";

interface IProps {
  key: number;
  title: string;
  onClick: (id: number) => void;
}

const ItemTemplate: FC<IProps> = ({ key, title, onClick }) => {
  return (
    <li
      key={key}
      onClick={() => {
        onClick(key);
      }}
      className={styles.item}
    >
      {title}
    </li>
  );
};

export default ItemTemplate;
