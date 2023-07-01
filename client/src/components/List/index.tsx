import { FC, useEffect, useState } from "react";
import { getData } from "./debug";
import Button from "../Button";
import "./List.css";
import Popup from "../Popup";
import CreateTheme from "../CreateTheme";
import { ICreateTheme } from "../../types/theme.interface";
import { fetchData } from "./dataGetter";
import { useStore } from "../Layout";
import axios from "axios";

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

  const [items, setItems] = useState([]);

  const [isShow, setIsShow] = useState(false);

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
        }}
      >
        <CreateTheme
          voteId={voting_id || 1}
          onCreate={async (data: ICreateTheme) => {
            let _data = await (
              await axios.post(props.source.createUrl, data)
            ).data;
            setItems((prev: any) => [...prev, _data] as any);
          }}
        />
      </Popup>
      <ul className="baseList__container">
        {items.map((el: any) => {
          return (
            <props.ItemTemplate
              key={el.id}
              item={el}
              onClick={props.onItemClick}
            />
          );
        })}
      </ul>
      <Button caption="Добавить" onClick={() => setIsShowPopup(true)} />
    </div>
  );
};

export default BaseList;
