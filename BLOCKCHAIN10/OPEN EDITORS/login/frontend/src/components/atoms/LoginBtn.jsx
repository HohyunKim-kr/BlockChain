import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled.div`
  font-size: 10px;
  width: 100px;
  height: 50px;
  margin-right: 1rem;
  background-color: #5353f5;
`;

const LoginBtn = ({ path }) => {
  const nav = useNavigate();
  const ButtonClickHandler = () => {
    console.log(path.path);
    nav(path.path);
  };

  return <ButtonStyle onClick={ButtonClickHandler}>로그인</ButtonStyle>;
};

export default LoginBtn;
