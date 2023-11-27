import React from "react";
import { Header } from "../components/Border/Header";
import { Item } from "../components/Border/Item";
export const Border = () => {
  const contetnsMaker = () => {
    const box = [];
    for (let i = 0; i < 10; i++) {
      box.push(<Item num={i} title={"하" + i} name={`${i}${i}`} />);
    }
    return box;
  };
  return (
    <div className="border">
      <Header />
      {contetnsMaker()}
    </div>
  );
};
