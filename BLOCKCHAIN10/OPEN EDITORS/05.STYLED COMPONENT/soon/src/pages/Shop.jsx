import React from "react";
import { Body, Header } from "../components/layout";

const Shop = () => {
  let tempItem = [
    { num: 10, name: "이쁜셔츠" },
    { num: 20, name: "빈티지바지" },
    { num: 30, name: "나이키슈즈" },
  ];
  return (
    <>
      <Header name={"상품"}></Header>
      <Body path={"/"} pageName={"메인"}></Body>

      {tempItem.map((i, index) => (
        <Body path={`/detail/${index}/1/1`} pageName={i.name} />
      ))}
    </>
  );
};

export default Shop;
