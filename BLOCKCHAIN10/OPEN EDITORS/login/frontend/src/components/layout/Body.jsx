import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const BodyStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ae9e9e;
`;

const Body = ({ path, pageName, children }) => {
  const nav = useNavigate();
  const NavHandler = (_path) => {
    nav(_path);
  };

  return (
    <BodyStyled>
      <Link to={path}>{pageName}</Link>
      {children}
    </BodyStyled>
  );
};

export default Body;
