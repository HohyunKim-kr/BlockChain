import { LoginBtn } from "../atoms/LoginBtn";

export const LoginForm = () => {
  const LoginHandler = () => {};

  return (
    <>
      <label htmlFor="email">이메일</label>
      <input type="text" name="email"></input>
      <label htmlFor="password">비밀번호</label>
      <input type="text" name="password"></input>
    </>
  );
};
