import { FC, PropsWithChildren, useState } from "react";
import BaseList from "../List";
import VoteItem from "../VoteItem";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "3fr 8fr",
        gap: "50px",
      }}
    >
      <BaseList
        ItemTemplate={VoteItem}
        source={{
          url: "",
        }}
        onItemClick={() => {}}
      />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
