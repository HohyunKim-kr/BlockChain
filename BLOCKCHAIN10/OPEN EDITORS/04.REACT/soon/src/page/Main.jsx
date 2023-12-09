import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      Main
      <div>
        <Link to={"/game"}>게임페이지로 이동</Link>
      </div>
      <div>
        <Link to={"/game2"}>가위바위보게임페이지로 이동</Link>
      </div>
      <div>
        <Link to={"/game3"}>지뢰찾기로 이동</Link>
      </div>
    </div>
  );
};

export default Main;
