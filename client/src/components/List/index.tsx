import { FC, useEffect, useState } from "react";
import Button from "../Button";
import "./List.css";
import Popup from "../Popup";
import CreateTheme from "../CreateTheme";
import { ICreateTheme } from "../../types/theme.interface";
import { fetchData } from "./dataGetter";
import { createItem } from './itemCreation';
import { useStore } from "../Layout";

interface ILIstProps {
  className?: string;
  ItemTemplate: any;
  source: {
    url: string;
    filter?: object;
    createUrl: string;
  };
  onItemClick: Function;
  onDataLoad?: Function;
}

const BaseList: FC<ILIstProps> = (props: ILIstProps) => {
  let { voting_id, setIsShowPopup } = useStore();
  const [isDataLoaded, dataLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const onPopUpClosed = (data: ICreateTheme) => {
    createItem(props.source.createUrl, data).then((res) => {
      setItems((prev: any) => [...prev, res] as any);
    });
  }

  useEffect(() => {
    if (items.length) {
      return;
    }
    fetchData(props.source)
      .then((data) => {
        setItems(data as any);
        return Promise.resolve();
      })
      .then(() => {
        if (props.onDataLoad) {
          props.onDataLoad();
        }
      });
  }, []);

  return (
    <div className={`baseList__container ${props.className}`}>
      <Popup
        onClose={() => {
          setIsShowPopup(false);
        }}>
        <CreateTheme voteId={voting_id} onCreate={onPopUpClosed} />
      </Popup>
      <ul className="baseList__container">
        {items.map((el: any) => {
          return (<props.ItemTemplate key={el.id} item={el} onClick={props.onItemClick} />);
        })}
      </ul>
      <Button caption="Добавить" onClick={() => setIsShowPopup(true)} />
    </div>
  );
};

export default BaseList;
