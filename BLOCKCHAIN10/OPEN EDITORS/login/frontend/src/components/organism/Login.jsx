import React from "react";
import { LoginBtn } from "../atoms";
import styled from "styled-components";

const LoginStyled = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 10px;
`;

const Login = (path) => {
  return (
    <LoginStyled>
      <LoginBtn path={path} />
    </LoginStyled>
  );
};

export default Login;
