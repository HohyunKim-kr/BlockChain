import React, { useEffect, useState } from "react";

import { Boom } from "../components/Boom";
import { boomIMG, flagIMG } from "../image/boomFlag";

// 요구사항
// 지뢰찾기

// 1. 배열로 컴포넌트를 3 * 3 으로 나열하고 (랜덤한 인데스로 폭탄을 심어주자. 2개)
// 2. 클릭하면 폭탄이 있는 컴포넌트는 폭타을 보여주고 폭탄이 없는 컴포넌트는 깃발을 보여줌
// 3. 깃발만 다 클릭하면 게임 승리
// 4. 폭탄찾으면 게임 오버. (랜덤 index)
const Game3 = () => {
  const [booms, setBooms] = useState([]);
  const [count, setCount] = useState(0);

  // 3 * 3 중 랜덤 booms 생성 2개
  useEffect(() => {
    const temp = new Array(3);
    for (let i = 0; i < temp.length; i++) {
      temp[i] = new Array(3);
    }

    for (let i = 0; i < temp.length; i++) {
      for (let j = 0; j < temp.length; j++) {
        temp[i][j] = <Boom />;
      }
    }
    setBooms(temp);
  }, []);

  const countHandler = () => {
    setCount(count + 1);
  };

  return booms.map((row) => {
    return (
      <div className="row">
        {row.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
    );
  });

  // GG GG GGG GGGGGG
  //   <div>{booms}</div>;
};

export default Game3;
