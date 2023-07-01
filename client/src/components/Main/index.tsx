import { FC, useState } from "react";
import { ITheme } from "../../types/theme.interface";
import Button from "../Button";
import CameraComponent from "../Camera";
import { VoteService } from "../../services/vote.service";
import styles from "./Main.module.scss";

interface IProps {
  theme: ITheme;
}

const EMPTY_VIEW_TEMPLATE = (<div>EMPY</div>);

const Main: FC<IProps> = ({ theme }) => {
  const [isShowSnapshot, setIsShowSnapshot] = useState(false);
  const [image, setImage] = useState("");
  return (
    <>
    {!theme ? EMPTY_VIEW_TEMPLATE : (
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
          caption="Отправить результат"
        />
      )}
      {!isShowSnapshot && (
        <Button
          onClick={() => {
            setIsShowSnapshot(true);
          }}
          caption="Начать голосование"
        />
      )}
    </section>
    )}
    </>
  );
};

export default Main;
