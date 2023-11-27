import { Component } from "react";
import { Mycom, Mycom2 } from "../components/Mycom";
import { FunctionCom } from "../components/FunctionCom";

class Mypage extends Component {
  render() {
    return (
      <div>
        마이페이지
        <FunctionCom name={"함수형 컴포넌트"} />
      </div>
    );
  }
}

// 하나의 인스턴스만 내보내는 경우
export default Mypage;
