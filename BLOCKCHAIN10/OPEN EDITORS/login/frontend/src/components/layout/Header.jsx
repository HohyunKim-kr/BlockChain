import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
  position: absolute;
  font-size: 15px;
  width: 100%;
  height: 80px;
  padding-top: 1.5rem;
  background-color: gray;
  display: flex;
  justify-content: space-between;
`;

const Header = ({ name, children }) => {
  return (
    <HeaderStyle width={"60px"}>
      {name}
      {children}
    </HeaderStyle>
  );
};

export default Header;
