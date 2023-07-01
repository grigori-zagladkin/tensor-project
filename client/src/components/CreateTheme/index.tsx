import { FC, useState} from "react";
import Button from "../Button";
import "./CreateTheme.css";
import Input from "../Input";
import { ICreateTheme } from "../../types/theme.interface";
import { useStore } from "../Layout";

interface IProps {
  onCreate: (data: ICreateTheme) => void;
  voteId: number | null;
}

const CreateTheme: FC<IProps> = ({ onCreate, voteId }) => {
  const { setIsShowPopup } = useStore();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const titleChangedCallback: any = (el: any) => setTitle(el.target.value);
  const descrChangedCallback: any = (el: any) => setDescription(el.target.value);
  const btnClickedCallback: any = () => {
    onCreate({ title, description, voteId});
    setIsShowPopup(false);
  };

  return (
    <form className="form">
      <Input onChange={titleChangedCallback} placeholder="Название" />
      { voteId ? (
        <Input onChange={descrChangedCallback} placeholder={"Описание"} />
      ) : '' } 
      <Button caption="Создать тему" onClick={btnClickedCallback} />
    </form>
  );
};

export default CreateTheme;
