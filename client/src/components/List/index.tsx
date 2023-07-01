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

const EMPTY_VIEW: any = (
  <div className='baseList__loader__container'>
    <div className='baseList__loader'></div>
  </div>
);

const BaseList: FC<ILIstProps> = (props: ILIstProps) => {
  let { voting_id, setIsShowPopup } = useStore();
  const [isDataLoading, endLoading] = useState(true);
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
        endLoading(false);
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
      {isDataLoading ? EMPTY_VIEW : 
        (
          <div>
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
        )
      }
    </div>
  );
};

export default BaseList;
