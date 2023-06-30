import { FC, PropsWithChildren } from "react";

import styles from "./Popup.module.scss";

interface IProps {
  isShow: boolean;
}

const Popup: FC<PropsWithChildren<IProps>> = ({ children, isShow }) => {
  return (
    <div className={isShow ? styles.popupOpen : styles.popupClose}>
      {children}
    </div>
  );
};

export default Popup;
