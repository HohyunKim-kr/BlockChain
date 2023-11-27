// 클래스형 컴포넌트
import { Component } from "react";

export default class Mycom extends Component {
  // 컴포넌트의 단위는 UI단위
  // 재료를 만들어서
  // 레이아웃 단위로 컴포넌틀 구상해서
  // 하나의 컴포넌트에 조립을 하면 페이지가 구성되는 것.

  // 버튼을 컴포넌트로 구상을 해서 만들었는 데
  // 확인 text, 취소 text 내용이 다른 두가지의 레이아웃.
  // props 값이 내용을 다르게 보여줄 수 있게 해준다.
  // state 모든 버튼의 최초의 상태값 해당 컴포넌트만 가지고 있는 본인의 상태값.

  // react의 생명주기
  componentDidMount() {
    console.log("내생성");
  }

  // 컴포넌트의 상태가 변경되어 업데이트 실행
  // 상태가 변환이 된 이후의 값을 보고싶어.
  // 상태가 변환되기 전에 값을 호출하면 안되기 때문에
  // 상태가 변환된 이후의 정확한 순서로 호출을 하기 위해
  componentDidUpdate() {
    console.log(this.props.name + "인데 rerender 됐어");
    console.log(this.state.num);
  }

  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      name: "",
    };
    console.log(props);
  }

  render() {
    return (
      <>
        <div className="mybtn">{this.props.name}</div>
        <button
          onClick={() => {
            this.setState({ ...this.state, num: this.state.num + 1 });
          }}
        >
          카운트증가
        </button>
      </>
    );
  }
}

// 하나의 파일에서 컴포넌트를여러개 작성하는 경우
class Mycom2 extends Component {
  render() {
    return <div>나는 Mycom2 컴포너트야</div>;
  }
}

export { Mycom, Mycom2 };
