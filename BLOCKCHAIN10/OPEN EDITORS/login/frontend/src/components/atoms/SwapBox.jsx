import React from "react";
import styled from "styled-components";

const SwapBoxStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 20%;
  background-color: #a4575784;
  margin: 1rem;
`;
const InputStyled = styled.input`
  width: 300px;
  height: 80px;
  background-color: #f2505084;
`;

const SwapBox = () => {
  return (
    <SwapBoxStyled>
      <label htmlFor="coin"></label>
      <InputStyled type="text" name="coin" />
    </SwapBoxStyled>
  );
};

export default SwapBox;
