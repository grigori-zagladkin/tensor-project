import { FC, useState } from "react";
import { ITheme } from "../../types/theme.interface";
import Button from "../Button";
import CameraComponent from "../Camera";
import { VoteService } from "../../services/vote.service";
import styles from "./Main.module.scss";
import axios from "axios";
import { MAIN_DOMAIN } from "../List/constants";

interface IProps {
  theme: ITheme;
}

const EMPTY_VIEW_TEMPLATE = <div>EMPY</div>;

let interval: number;

let flag: boolean = false;

const Main: FC<IProps> = ({ theme }) => {
  const [isShowSnapshot, setIsShowSnapshot] = useState(false);
  const [image, setImage] = useState("");
  const [result, setResult] = useState(null);

  const imageCapturedCallback = (image: string, flag: boolean = false) => {
    setImage(image);
    test(image, flag).then((data: any) => {
      setResult(data);
    });
  };

  const test = (image: string, end_vote: boolean): any => {
    if (!image) {
      return Promise.resolve();
    }
      return fetch(MAIN_DOMAIN + `/processing`, {
          method: 'POST',
          headers: { "Accept": "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({
            theme_id: theme.theme_id,
            file: image,
            end_vote
          })
      }).then((res) => res.json())
  }


  return (
    <>
      {!theme ? (
        EMPTY_VIEW_TEMPLATE
      ) : (
        <section className={styles.wrapper}>
          <h1>{theme.title}</h1>
          <p style={{ textAlign: "left" }}>{theme.description}</p>
          {isShowSnapshot && (
            <CameraComponent image={image} setImage={imageCapturedCallback} />
          )}
          {!isShowSnapshot && (
              <Button
              onClick={() => {
                setIsShowSnapshot(true);
              }}
              caption="Начать голосование"
            />)}

          {result && (<div>
            <div className="workspace__results">
              <div>За {result.Yes}</div>
              <div>Против {result.No}</div>
              <div>Воздержался {result.Unsure}</div>
            </div>
            {isShowSnapshot && (
                <Button
                  onClick={async () => {
                    setIsShowSnapshot(false);
                    imageCapturedCallback(image, true);
                  }}
                  caption="Закончить"
                />
            )}
          </div>)}
        </section>
      )}
    </>
  );
};

export default Main;
