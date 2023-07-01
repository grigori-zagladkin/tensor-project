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

let flag: boolean = true;

const Main: FC<IProps> = ({ theme }) => {
  const [isShowSnapshot, setIsShowSnapshot] = useState(false);
  const [image, setImage] = useState("");
  const [isSetted, setIsSetted] = useState(false);
  const [result, setResult] = useState<{
    Yes: number;
    No: number;
    Unsure: number;
  }>({
    Yes: 1,
    No: 1,
    Unsure: 1,
  });
  const _sendResult = async () => {
    let _result = await axios
      .post<{
        Yes: number;
        No: number;
        Unsure: number;
      }>(import.meta.env.VITE_API_URL + `/processing`, {
        file: image,
        theme_id: theme.theme_id,
      })
      .then((data) => data.data);
    setResult(_result);
  };
  const setResultWithTimer = () => {
    interval = setTimeout(_sendResult, 5000);
  };
  const finishVote = async () => {
    await axios.post<ITheme>(import.meta.env.VITE_API_URL + `/processing`, {
      file: image,
      theme_id: theme.theme_id,
      end_vote: true,
    });
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
                  flag = false;
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
                setIsSetted(true);
                setIsShowSnapshot(true);
                setResultWithTimer();
              }}
              caption="Начать голосование"
            />
          )}
          {result && isSetted && (
            <div>
              <div>За {result.Yes || 1}</div>
              <div>Против {result.No || 1}</div>
              <div>Воздержался {result.Unsure || 1}</div>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default Main;
