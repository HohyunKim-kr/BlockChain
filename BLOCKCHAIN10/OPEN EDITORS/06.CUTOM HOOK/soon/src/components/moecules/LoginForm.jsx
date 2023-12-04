import { useEffect, useRef, useState } from "react";
import { LoginButton } from "../atoms/LoginButton";
import { LoginInput } from "../atoms/LoginInput";
import { LoginLabel } from "../atoms/LoginLabel";

const LoginForm = () => {
  const [SubmitData, setSubmitData] = useState(null);
  const selectInput = useRef(null);

  const loginHandler = (e) => {
    e.preventDefault();
    // const resp = await axios.post("요청 도메인.com/login");
    const { uid, upw } = e.target;
    setSubmitData({ uid: uid.value, upw: upw.value });
  };
  useEffect(() => {
    if (SubmitData) console.log(SubmitData);
  }, [SubmitData]);
  return (
    <form onSubmit={loginHandler}>
      <LoginLabel>아이디</LoginLabel>
      <LoginInput name={"uid"} type={"text"}></LoginInput>
      <LoginLabel>비밀번호</LoginLabel>
      <LoginInput name={"upw"} type={"password"}></LoginInput>
      <LoginLabel>아이디 (useRef)</LoginLabel>
      <input ref={selectInput} />
      <LoginButton>로그인 하기</LoginButton>
    </form>
  );
};

export default LoginForm;
