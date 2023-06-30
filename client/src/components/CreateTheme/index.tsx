import { FC, useState } from "react";
import Button from "../Button";
import { ThemeService } from "../../services/theme.service";
import "./CreateTheme.css";
import Input from "../Input";
import { ICreateTheme } from "../../types/theme.interface";

const CreateTheme: FC<{ onCreate: (data: ICreateTheme) => void }> = ({
  onCreate,
}) => {
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
            // await ThemeService.createTheme({ title, description });
            onCreate({ title, description });
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
