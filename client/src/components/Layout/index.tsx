import { FC, PropsWithChildren, useState } from "react";
import BaseList from "../List";
import VoteItem from "../VoteItem";
import Button from "../Button";
import Main from "../Main";
import ThemeItem from "../ThemeItem";
import { ITheme } from "../../types/theme.interface";

const Layout: FC = () => {
  const [selectedTopic, selectTopic] = useState(null);
  const [selectedTheme, selectTheme] = useState(null);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      <div className="naviagtion_container" style={{ display: "flex" }}>
        <BaseList
          className={`navigation__list ${
            selectedTopic ? "topic-selected" : ""
          }`}
          ItemTemplate={VoteItem}
          source={{
            url: "",
          }}
          onItemClick={(item: object) => {
            selectTopic(item as any);
          }}
        />
        <div
          className={`navigation__topics__list navigation__list ${
            selectedTopic ? "topic-selected" : ""
          }`}
        >
          <Button
            caption="Назад"
            onClick={() => {
              selectTopic(null);
            }}
          />
          <BaseList
            ItemTemplate={ThemeItem}
            source={{
              url: "",
              filter: {
                voteId: (selectTopic as any).id,
              },
            }}
            onItemClick={(items: object) => {
              selectTheme(items as any);
            }}
          />
        </div>
      </div>
      <div className="workspace__container">
        {selectedTheme ? (
          <Main theme={selectedTheme as any} />
        ) : (
          <div
            style={{
              fontSize: "30px",
              fontWeight: "600",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            Выберите тему для голосования
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
