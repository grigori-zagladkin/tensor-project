import { FC, PropsWithChildren } from "react";

import "./Popup.css";

interface IProps {
  isShow: boolean;
  onClose: () => void;
}

const Popup: FC<PropsWithChildren<IProps>> = ({
  children,
  isShow,
  onClose,
}) => {
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
