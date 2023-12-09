import React from "react";
import { useSelector } from "react-redux";

const Count = () => {
  // 저장소의 값을 가져와서 보여주는 페이지
  // hook
  // useSelector : store의 전역상태를 참조할 수 있게 도와주는 함수
  // 함수 실행을 할 때 콜백을 전달합니다. 함수의 반환으로 상태를 반환 받을 수 있다.
  const count = useSelector((state) => state.count);
  // 전역 상태의 객체에 있는 count만 받아온다.
  return <div>{count}</div>;
};

export default Count;
