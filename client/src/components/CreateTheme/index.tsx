import { useState } from "react";
import Button from "../Button";
import { ThemeService } from "../../services/theme.service";

const CreateTheme = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <Button
        onClick={async () => {
          try {
            await ThemeService.createTheme({ title, description });
            alert("Успешно");
          } catch (error) {
            console.error(error);
            alert("Произошла ошибка");
          }
        }}
      >
        Создать тему
      </Button>
    </>
  );
};

export default CreateTheme;
