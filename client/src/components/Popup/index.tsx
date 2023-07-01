import { FC, PropsWithChildren } from "react";

import "./Popup.css";
import { useStore } from "../Layout";

interface IProps {
  onClose: () => void;
}

const Popup: FC<PropsWithChildren<IProps>> = ({ children, onClose }) => {
  const { isShowPopup: isShow } = useStore();
  if (!isShow) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="close" onClick={onClose}>
          &times;
        </div>
        {children}
      </div>
    </div>
  );
};

export default Popup;
