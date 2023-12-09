import REACT, { useState } from "react";
// 우리가 작성할 때 내부 모듈과 서브파트 모듈을 따로 나눠서 작성을 해주면

// 서브 파트 모듈
import { BoomImg, flag } from "../image";
export const Boom = (img) => {
  // 1. 이미지 보여줘야함(이미지를 가져와야 겠구나)
  // 2. 클릭이 되면 이미지가 변경되어야함(상태를 가지고 있어야하고 상태가 클릭이벤트시
  // 변경이되어야한다.)
  // public 폴더에 이미지를 포함시켜도 되고 src 폴더에 이미지를 포함시켜도 되는데, 최적화
  // 방면으로는 cashdata를 저장해주는 src 폴더가 좋다.

  const [onActive, setOnActive] = useState(false);
  // 초기값은 아직 활성화가 되지않은 상태

  // 클릭 이벤트
  const oncClickHandler = () => {
    // 클릭이 되면 이미지가 변경이 되어야 하는데
    // onActive
    setOnActive(true);
  };
  return (
    <td onClick={oncClickHandler}>
      <img src={onActive ? flag : BoomImg} alt="" />
    </td>
  );
};
