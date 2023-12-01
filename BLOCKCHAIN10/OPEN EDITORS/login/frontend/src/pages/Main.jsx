import React from "react";
import { Header, Body } from "../components/layout";
import { Swap } from "../components/template";
import { Category, Login } from "../components/organism";

const Main = () => {
  return (
    <>
      <Header>
        <Category />
        <Login path={"/login"} />
      </Header>
      <Body path={"/"}>
        <Swap />
      </Body>
    </>
  );
};

export default Main;
