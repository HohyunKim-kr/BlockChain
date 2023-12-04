import { useReducer } from "react";

export const Reducer = () => {
  const initialState = {
    count: 0,
  };

  // ENUM 값처럼 사용 이게 머임?
  // 개발자가 개발을 할때 가독성이 좋게 만들기 위해서만 사용하는 값
  // 절때 변하지 않는 네이밍을 명시하기 위한 변수로 사용
  const INCREMENT = "INCREMENT";
  const DECREMENT = "DECREMENT";
  // 메뉴판
  const reducer = (state, action) => {
    // payload 사용해야하면 사용하고 안써도 상관 없다 매개변수니까
    // stateㄴ를 꼭 반환, 안그럼 오류남
    const { type, payload } = action;
    switch (type) {
      case INCREMENT:
        return { ...state, count: state.count + payload.count };
      case DECREMENT:
        return { ...state, count: state.count - payload.count };
      default:
        return state;
    }
  };

  // state 현재 상태와, dispatch 메서드 dispacth => action을 발생시킬 수 있는함수
  // 상태를 업데이트 해달라고 명령을 던진다. 행동을 던진다. reducer 메뉴판이 action을 받아서 처리
  // dispatch => action => reducer => state변경
  // useReducer 가게차리는중
  // useReducer 가게를 차린다. 첫번째 매개변수 메뉴판 두번째 매개변수가 초기가게 상태
  // 가게가 만들어지고 유저들 dispacth => 주문 날림 => 정상적으로 처리가 되면 상태가 업데이트가 되고
  // 가게 이용자들이 메뉴대한 상품을 확인할수가 있음.
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>{state.count}</p>;
      <button
        onClick={() => {
          dispatch({ type: INCREMENT, payload: { count: 1 } });
        }}
      >
        증가
      </button>
      <button
        onClick={() => {
          dispatch({ type: DECREMENT, payload: { count: 1 } });
        }}
      >
        감소
      </button>
    </>
  );
};
