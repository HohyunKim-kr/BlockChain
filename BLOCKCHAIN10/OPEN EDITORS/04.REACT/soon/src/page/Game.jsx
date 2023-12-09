import React, { useEffect, useState } from "react";

import { Boom } from "../components/Boom";

export const Game = () => {
  const [booms, setBooms] = useState([]);
  // 초기에 한번 컴포넌트를 세팅하고 싶어
  // 라이프 사이클
  // [] => render -> 처음에는 빈뱁열이 최초에 렌더링되고 => 상태변수가 변경이되어서 리렌더링 => 데이터가 보임
  useEffect(() => {
    // mount 최초에 한번만 실행되고 끝 [] 빈배열이니까
    const temp = new Array(8);
    for (let i = 0; i < temp.length; i++) {
      temp[i] = <Boom />;
    }
    setBooms(temp);
  }, []);
  return (
    <div>
      {/* {Array.map(() => <div></div>)} */}
      {booms}
    </div>
  );
};
