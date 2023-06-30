import { FC, useState } from "react";
import { ITheme } from "../../types/theme.interface";
import Button from "../Button";
import CameraComponent from "../Camera";
import { VoteService } from "../../services/vote.service";
import styles from "./Main.module.scss";

interface IProps {
  theme: ITheme;
}

const Main: FC<IProps> = ({ theme }) => {
  const [isShowSnapshot, setIsShowSnapshot] = useState(false);
  const [image, setImage] = useState("");
  return (
    <section className={styles.wrapper}>
      <h1>{theme.title}</h1>
      <p style={{ textAlign: "left" }}>{theme.description}</p>
      {isShowSnapshot && <CameraComponent image={image} setImage={setImage} />}
      {isShowSnapshot && image && (
        <Button
          onClick={async () => {
            try {
              await VoteService.sendResult(image, theme.id);
            } catch (error) {
              console.error(error);
              alert("Произошла ошибка");
            }
          }}
          className={styles.btn}
        >
          Отправить результат
        </Button>
      )}
      {!isShowSnapshot && (
        <Button
          onClick={() => {
            setIsShowSnapshot(true);
          }}
        >
          Начать голосование
        </Button>
      )}
    </section>
  );
};

export default Main;
