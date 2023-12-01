import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import { Main, Login } from "./pages";
// , Shop, MyPage, Login, Detail

import { useState, useEffect } from "react";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />

        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </div>
  );
}

export default App;
