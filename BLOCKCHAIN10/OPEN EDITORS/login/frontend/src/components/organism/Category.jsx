import React from "react";
import { Button } from "../atoms";
import styled from "styled-components";

const CategoryStyled = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 10px;
`;

const Category = () => {
  return (
    <CategoryStyled>
      <Button />
      <Button />
      <Button />
    </CategoryStyled>
  );
};

export default Category;
