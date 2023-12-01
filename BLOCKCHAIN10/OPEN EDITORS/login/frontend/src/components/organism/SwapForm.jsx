import React from "react";
import styled from "styled-components";
import { SwapBox } from "../atoms";

const SwapFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const SwapForm = () => {
  // SWAPBOX STATE 만들고 2개 SWAP C언어처럼
  return (
    <SwapFormStyled>
      <SwapBox />
      <SwapBox />
    </SwapFormStyled>
  );
};

export default SwapForm;
