import { FC, useState } from "react";
import { ITheme } from "../../types/theme.interface";
import Button from "../Button";
import CameraComponent from "../Camera";
import { VoteService } from "../../services/vote.service";
import styles from "./Main.module.scss";
import axios from "axios";

interface IProps {
  theme: ITheme;
}

const EMPTY_VIEW_TEMPLATE = <div>EMPY</div>;

let interval: number;

let flag: boolean;

const Main: FC<IProps> = ({ theme }) => {
  const [isShowSnapshot, setIsShowSnapshot] = useState(false);
  const [image, setImage] = useState("");
  const [result, setResult] = useState<{ color: string; value: number }[]>([]);
  const _sendResult = async () => {
    if (flag) {
      const _result = (await VoteService.sendResult(image, theme.id)).data
        .result;
      setResult(_result);
      setResultWithTimer();
    } else {
    }
  };
  const setResultWithTimer = () => {
    interval = setTimeout(_sendResult, 5000);
  };
  const finishVote = () => {
    clearInterval(interval);
  };
  return (
    <>
      {!theme ? (
        EMPTY_VIEW_TEMPLATE
      ) : (
        <section className={styles.wrapper}>
          <h1>{theme.title}</h1>
          <p style={{ textAlign: "left" }}>{theme.description}</p>
          {isShowSnapshot && (
            <CameraComponent image={image} setImage={setImage} />
          )}
          {isShowSnapshot && image && (
            <Button
              onClick={async () => {
                try {
                  finishVote();
                } catch (error) {
                  console.error(error);
                  alert("Произошла ошибка");
                }
              }}
              caption="Закончить"
            />
          )}
          {!isShowSnapshot && (
            <Button
              onClick={() => {
                setIsShowSnapshot(true);
                setResultWithTimer();
              }}
              caption="Начать голосование"
            />
          )}
          {result.length > 1 && (
            <div>
              <div>За {theme?.result[0]?.value || 1}</div>
              <div>Против {theme?.result[1]?.value || 1}</div>
              <div>Воздержался {theme?.result[2]?.value || 1}</div>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default Main;
