import React from "react";
import { Body, Header } from "../components/layout";
import { Signup } from "../components/template";

const Login = () => {
  return (
    <>
      <Header>
        로그인
        {/* 회원가입 */}
      </Header>
      <Body>
        <Signup />
      </Body>
    </>
  );
};

export default Login;
