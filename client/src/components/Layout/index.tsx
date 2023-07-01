import { FC, useState } from "react";
import { create } from "zustand";
import BaseList from "../List";
import VoteItem from "../VoteItem";
import Button from "../Button";
import Main from "../Main";
import ThemeItem from "../ThemeItem";

type Store = {
  voting_id: number | null;
  setVoting: Function;
  isShowPopup: boolean;
  setIsShowPopup: (f: boolean) => void;
};

export const useStore = create<Store>()((set) => ({
  voting_id: null,
  setVoting: (id: number | null) => set((s) => ({ voting_id: id })),
  isShowPopup: false,
  setIsShowPopup: (f: boolean) => set((s) => ({ isShowPopup: f })),
}));

const Layout: FC = () => {
  const { voting_id, setVoting } = useStore();
  const [selectedTheme, selectTheme] = useState(null);
  const [showThemes, setShowThemes] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        gap: "12px",
      }}
    >
      <div className="naviagtion_container" style={{ display: "flex" }}>
        <BaseList
          className={`navigation__list ${showThemes ? "topic-selected" : ""}`}
          ItemTemplate={VoteItem}
          source={{
            url: "/get_all_voting",
            createUrl: "/create_voting",
          }}
          onItemClick={(item: any) => {
            setVoting(item.voting_id);
          }}
        />
        <div
          className={`navigation__topics__list navigation__list ${
            showThemes ? "topic-selected" : ""
          }`}
        >
          <Button
            caption="Назад"
            onClick={() => {
              setVoting(null);
              setShowThemes(false);
              selectTheme(null);
            }}
          />
          {voting_id ? (
            <BaseList
              ItemTemplate={ThemeItem}
              onDataLoad={() => {
                setShowThemes(true);
              }}
              source={{
                url: "/get_all_themes",
                filter: {
                  vote_id: voting_id,
                },
                createUrl: "/create_themes",
              }}
              onItemClick={(items: object) => {
                selectTheme(items as any);
              }}
            />
          ) : (
            <div></div>
          )}
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
