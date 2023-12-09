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

  // useRef 태그를 선택을 해야할 때 사용해라
  // <input ref ={selectInput}/>
  // ref 속성에 전달을 하면 화면을 그리고 이 인스턴스에 객체의 속성에 태그가 요소로 참조 되는데,
  // ref 속성에 useRef 인스턴스를 전달한 해당 요소가 참조된다.
  // current 키에 값으로 해당 요소가 들어있다.
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
