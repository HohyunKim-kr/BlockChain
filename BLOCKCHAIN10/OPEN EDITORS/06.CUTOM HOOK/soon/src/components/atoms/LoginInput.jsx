import useInput from "../../hooks/useInput";

export const LoginInput = (name, type) => {
  // input의 상태 변수
  // custom hook input
  const uidInput = useInput("");

  // value ={uidInput.value} onChange={uidInput.onChange}
  //   <input name={name} type={type} {...uidInput} />;
  return (
    <>
      <input name={name} type={type} {...uidInput} />;
    </>
  );
};
