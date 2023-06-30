import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div></div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
