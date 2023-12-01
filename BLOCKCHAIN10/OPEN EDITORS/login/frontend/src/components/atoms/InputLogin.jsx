import React from "react";
import styled from "styled-components";

const InputLoginStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputLogin = () => {
  return (
    <InputLoginStyled>
      <label htmlFor="name">이름</label>
      <input type="text" name="name"></input>
      <label htmlFor="password">비밀번호</label>
      <input type="text" name="password"></input>
      <label htmlFor="phoneNumber">전화번호</label>
      <input type="text" name="phoneNumber"></input>
      <label htmlFor="email">이메일</label>
      <input type="text" name="email"></input>
    </InputLoginStyled>
  );
};

export default InputLogin;
