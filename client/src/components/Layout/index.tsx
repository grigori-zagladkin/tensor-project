import { FC, PropsWithChildren, useState } from "react";
import BaseList from "../List";
import VoteItem from "../VoteItem";
import Button from "../Button";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [isTopicSelected, selectTopic] = useState(false);



  return (
    <div
      style={{
        display: "flex",
        width: '100%'
      }}>
      <div className='naviagtion_container' style={{display: 'flex'}}>
        <BaseList
          className={`navigation__list ${isTopicSelected ? 'topic-selected' : ''}`}
          ItemTemplate={VoteItem}
          source={{
            url: "",
          }}
          onItemClick={() => {
            selectTopic(() => true);
          }}
        />
        <div className={`navigation__topics__list navigation__list ${isTopicSelected ? 'topic-selected' : ''}`}>
          <Button caption="Назад" onClick={() => {
            selectTopic(() => false);
          }}/>
          <BaseList
            ItemTemplate={VoteItem}
            source={{
              url: "",
            }}
            onItemClick={() => {}}
          />
        </div>
      </div>
      <div  className='workspace__container'>{children}</div>
    </div>
  );
};

export default Layout;
