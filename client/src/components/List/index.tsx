import { FC, useEffect, useState } from "react";
import { getData } from "./debug";
import Button from "../Button";
import "./List.css";
import Popup from "../Popup";
import CreateTheme from "../CreateTheme";
import { ICreateTheme } from "../../types/theme.interface";

interface ILIstProps {
  className?: string;
  ItemTemplate: any;
  source: {
    url: string;
    filter?: object;
  };
  onItemClick: Function;
}

const BaseList: FC<ILIstProps> = ({ ItemTemplate, onItemClick, className }) => {
  const [items, setItems] = useState([]);

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    getData().then((data) => {
      setItems(data as any);
    });
  }, []);

  return (
    <div className={`baseList__container ${className}`}>
      <Popup
        onClose={() => {
          setIsShow(false);
        }}
        isShow={isShow}
      >
        <CreateTheme
          onCreate={(data: ICreateTheme) => {
            setItems(
              (prev: any) =>
                [
                  ...prev,
                  {
                    id: new Date().getTime(),
                    title: data.title,
                    description: data.description,
                    date: new Date(),
                  },
                ] as any
            );
          }}
        />
      </Popup>
      <ul className="baseList__container">
        {items.map((el: any) => {
          return <ItemTemplate key={el.id} item={el} onClick={onItemClick} />;
        })}
      </ul>
      <Button caption="Добавить" onClick={() => setIsShow(true)} />
    </div>
  );
};

export default BaseList;
