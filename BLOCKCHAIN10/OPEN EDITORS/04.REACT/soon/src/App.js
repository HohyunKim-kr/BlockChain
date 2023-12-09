import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Game } from "./page/Game";
import Main from "./page/Main";
import Login from "./page/Login";
import Game2 from "./page/Game2";
import Game3 from "./page/Game3";

function App() {
  // 우리가 폭탄 컴포넌트
  // 컴포넌트를 누르면 폭탄이 펑 하고 터지는 이미지를 보여줘보자.
  const test = () => {};
  // Route에는 속성값이 두개 있는데
  // path : 브라우저의 경로 (이 url조건값)
  // element : path 조건에 충족했을때 보여줄 컴포넌트
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/game" element={<Game />} />
        <Route path="/login" element={<Login />} />
        <Route path="/game2" element={<Game2 />} />
        <Route path="/game3" element={<Game3 />} />
      </Routes>
    </div>
  );
}

export default App;
