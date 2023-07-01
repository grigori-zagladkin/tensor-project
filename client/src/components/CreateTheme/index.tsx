import { FC, useState } from "react";
import Button from "../Button";
import "./CreateTheme.css";
import Input from "../Input";
import { ICreateTheme } from "../../types/theme.interface";
import { useStore } from "../Layout";

const CreateTheme: FC<{
  onCreate: (data: ICreateTheme) => void;
  voteId: number;
}> = ({ onCreate, voteId }) => {
  const { setIsShowPopup } = useStore();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <form className="form">
      <Input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Название"
      />
      <Input
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder={"Описание"}
      />
      <Button
        onClick={() => {
          try {
            onCreate({ title, description, voteId });
            setIsShowPopup(false);
            alert("Успешно");
          } catch (error) {
            console.error(error);
            alert("Произошла ошибка");
          }
        }}
        caption="Создать тему"
      />
    </form>
  );
};

export default CreateTheme;
