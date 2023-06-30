import { useState } from "react";
import "./App.css";
import MainPage from "./pages";
import BaseList from "./components/List";
import VoteItem from "./components/VoteItem";

function App() {
  return (
    <div style={ {display: 'flex'} }>
      <div className="navigation__panel">
        <BaseList ItemTemplate={VoteItem} source={{url: ''}} onItemClick={() => {}}/>
      </div>
      <MainPage />
    </div>
  );
}

export default App;
