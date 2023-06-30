import { FC, PropsWithChildren, useState } from "react";
import List from "../List";
import ItemTemplate from "../ItemTemplate";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "3fr 8fr",
        gap: "50px",
      }}
    >
      {/* <List itemTemplate={ItemTemplate}  /> */}
      <div>{children}</div>
    </div>
  );
};

export default Layout;
