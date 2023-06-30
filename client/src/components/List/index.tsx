import { FC, ReactElement, useEffect, useState } from "react";
import styles from "./List.module.scss";
import { IVote } from "../../types/vote.interface";
import { ITheme } from "../../types/theme.interface";
import Button from "../Button";
import Popup from "../Popup";
import CreateTheme from "../CreateTheme";
import axios from "axios";

interface IProps {
  url: string;
  ItemTemplate: any;
  onItemClick: (id: number) => void;
  onCreate: () => void;
  type: "theme" | "vote";
}

const getData = () =>
  new Promise((resolve, reject) => {
    setTimeout;
  });

const List: FC<IProps> = ({}) => {
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [data, setData] = useState<any[]>([]);
  // useEffect(async () => {
  //   const data = await getData()
  //   setData(data)
  // })
  return (
    <aside>
      <Popup isShow={isShowPopup}>
        <CreateTheme />
      </Popup>
      <ul>
        {/* {
          data.map((item, idx) => <ItemTemplate key={idx} title={item.} />)
        } */}
      </ul>
      <Button
        onClick={() => {
          setIsShowPopup(true);
        }}
      >
        Создать
      </Button>
    </aside>
  );
};

export default List;
