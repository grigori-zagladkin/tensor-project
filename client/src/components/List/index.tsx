import { FC, useEffect, useState } from "react";
import { getData } from "./debug";
import Button from "../Button";
import "./List.css";
import Popup from "../Popup";
import CreateTheme from "../CreateTheme";
import { ICreateTheme } from "../../types/theme.interface";
import { fetchData } from './dataGetter';

interface ILIstProps {
  className?: string;
  ItemTemplate: any;
  source: {
    url: string;
    filter?: object;
  };
  onItemClick: Function;
  onDataLoad?: Function;
}

const BaseList: FC<ILIstProps> = (props: ILIstProps) => {
  const [items, setItems] = useState([]);

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (items.length) {
      return;
    }
    fetchData(props.source).then((data) => {
      setItems(data as any);
      return Promise.resolve()
    }).then(() => {
      if (props.onDataLoad) {
        props.onDataLoad();
      }
    });
  }, []);

  return (
    <div className={`baseList__container ${props.className}`}>
      <Popup
        onClose={() => {
          setIsShow(false);
        }}
        isShow={isShow}
      >
        <CreateTheme
          voteId={}
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
          return <props.ItemTemplate key={el.id} item={el} onClick={props.onItemClick} />;
        })}
      </ul>
      <Button caption="Добавить" onClick={() => setIsShow(true)} />
    </div>
  );
};

export default BaseList;
