import React, { useEffect, useState } from "react";
import Player from "../components/Player";
import { scissors, rock, paper } from "../image/RockScissorsPaper";

const Game2 = () => {
  const [playerSelect, setPlayerSelect] = useState(null);
  const [comSelect, setComSelect] = useState(null);
  const [result, setResult] = useState("대기");
  const [count, setCount] = useState(5);
  const [account, setAccount] = useState(20000);
  const [bet, setBet] = useState(1000);

  // 가위바위보

  // 1. 두명이 있어야된다. (플레이어 컴퓨터)(컴포넌트 2개)(재사용성)
  // 2. 컴퓨터는 랜덤의 값을 보여줘야한다. (3가지 경우의 수를 랜덤값을 만들어주는 함수)
  // 3. 가위인지 바위인지 보인지 값을 보여줄 수 있는 기능.(비교 승패 검증까지)
  // 4. 플레이어 컴퓨터

  // 객체로 만드는 이유는 여러개의 데이터를 다루는 경우
  const select = {
    scissors: {
      name: "가위",
      imgPath: scissors,
    },
    rock: {
      name: "바위",
      imgPath: rock,
    },
    paper: {
      name: "보",
      imgPath: paper,
    },
  };

  // 컴퓨터의 랜덤값 설정
  const comSelectHandler = () => {
    // 컴퓨터가 선택하는 랜덤 값은 0~2 3가지의 경우의 수
    let arr = Object.keys(select); // [scissors,rock,paper]
    console.log(arr);
    // 컴퓨터의 랜덤 값
    let comRandom = Math.floor(Math.random() * 3); // 0~2
    // select["scissors"] 랜덤값이 0이면
    setComSelect(select[arr[comRandom]]);
  };

  // 플레이어의 입력 값 설정
  const playerSelectHandler = (_select) => {
    setPlayerSelect(select[_select]);
    comSelectHandler();
    // resultHandler();
  };

  //    가위 == 가위 = 무승부     잔고 = 잔고
  //    가위 == 바위 = 패         잔고 = 잔고 - (판돈 * 2)
  //    가위 == 보   = 승         잔고 = 잔고 + 판돈
  //    바위 == 바위 = 무승부
  //    바위 == 보   = 패
  //    바위 == 가위 = 승
  //    보 == 보     = 무승부
  //    보 == 가위   = 패
  //    보 == 바위   = 승

  // 리액트의 라이프 사이클
  useEffect(() => {
    // mount 속성 막았음.
    if (comSelect === null || count < 0) return;
    // comSelect 업데이트 될때만
    resultHandler();
    betHandler(bet);
  }, [comSelect]);

  const resultHandler = () => {
    if (count > 0) {
      if (playerSelect.name === comSelect.name) {
        setResult("무승부");
        countHandler();
        accountHandler(result);
      } else if (playerSelect.name === "가위") {
        let result = comSelect.name === "보" ? "이겼음" : "졌음";
        setResult(result);
        countHandler();
        accountHandler(result);
      } else if (playerSelect.name === "바위") {
        let result = comSelect.name === "가위" ? "이겼음" : "졌음";
        setResult(result);
        countHandler();
        accountHandler(result);
      } else if (playerSelect.name === "보") {
        let result = comSelect.name === "바위" ? "이겼음" : "졌음";
        setResult(result);
        countHandler();
        accountHandler(result);
      }
    }
  };

  // 횟수 카운터 핸들러
  const countHandler = () => {
    // count--;
    setCount(count - 1);
  };

  // 판돈 올리기 핸들러
  const betHandler = (bet) => {
    setBet(bet);
  };

  // 결과 값을 받아 계좌의 잔고를 컨트롤 하는 핸들러
  const accountHandler = (result) => {
    if (result === "무승부") {
      setAccount(account);
    } else if (result === "이겼음") {
      setAccount(account + 2 * bet);
    } else if (result === "졌음") {
      setAccount(account - 2 * bet);
    }
  };

  // 부모 컴포넌트가 리렌더링 되면 자식 컴포넌트는 모두 리렌더링 된다.
  return (
    <div className="border">
      <Player name={"유저"} select={playerSelect} result={result} />
      <Player name={"컴퓨터"} select={comSelect} result={result} />
      <div>
        {count > 0 && account > 0 ? (
          <div>
            <div>{count}번 기회</div>
            <div>잔고 : {account}</div>
            <div>판돈 :{bet}</div>
            <div>
              <div>판돈키우기</div>
              <button
                onClick={() => {
                  betHandler(1000);
                }}
              >
                1000원
              </button>
              <button
                onClick={() => {
                  betHandler(2000);
                }}
              >
                2000원
              </button>
              <button
                onClick={() => {
                  betHandler(3000);
                }}
              >
                3000원
              </button>
            </div>

            <button
              onClick={() => {
                playerSelectHandler("scissors");
              }}
            >
              가위
            </button>
            <button
              onClick={() => {
                playerSelectHandler("rock");
              }}
            >
              바위
            </button>
            <button
              onClick={() => {
                playerSelectHandler("paper");
              }}
            >
              보
            </button>
          </div>
        ) : (
          <div>
            <div>게임종료</div>
            <div>내 잔고 :{account}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game2;
