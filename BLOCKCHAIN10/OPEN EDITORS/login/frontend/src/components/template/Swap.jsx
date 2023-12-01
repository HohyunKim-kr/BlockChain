import React from "react";
import styled from "styled-components";
import { SwapForm } from "../organism";

const SwapStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
`;

const Swap = () => {
  return (
    <SwapStyled>
      <SwapForm />
    </SwapStyled>
  );
};

export default Swap;
