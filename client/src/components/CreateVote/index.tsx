import { ChangeEvent, FC, useState } from "react";
import Input from "../Input";
import Button from "../Button";
import "../CreateTheme/CreateTheme.css";

interface IProps {
  onCreate: (title: string) => void;
}

const CreateVote: FC<IProps> = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  return (
    <form className="form">
      <Input
        placeholder="Название"
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setTitle(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          onCreate(title);
        }}
        caption="Создать голосование"
      />
    </form>
  );
};

export default CreateVote;
