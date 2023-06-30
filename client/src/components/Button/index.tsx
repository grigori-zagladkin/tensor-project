import { FC, PropsWithChildren } from "react";

interface IProps {
  onClick?: () => void;
  className?: string;
}

const Button: FC<PropsWithChildren<IProps>> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
