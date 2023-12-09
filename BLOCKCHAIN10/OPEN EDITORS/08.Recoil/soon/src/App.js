import { useEffect, useState } from "react";
import "./App.css";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { contentState, pagination } from "./components/recoil/atom";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  // 어떤 스토어의 조회할건지
  const [content, setContent] = useRecoilState(contentState);
  // 값을 호출만 하고싶다
  const { pageIndex: pageContentIndex } = useRecoilValue(contentState);
  // 값을 수정만 할 컴포넌트 일 경우

  const _pageIndex = useRecoilValueLoadable(pagination);

  const setPageIndex = useSetRecoilState(contentState);

  const pageCountHandler = () => {
    //setContent({ ...content, pageIndex: content.pageIndex + 1 });
    setPageIndex({ ...content, pageIndex: content.pageIndex + 1 });
  };

  useEffect(() => {
    console.log(_pageIndex);
  }, []);

  return (
    <div className="App">
      {content.name} <br />
      {content.status}
      <br />
      {content.massage}
      <br />
      {content.pageIndex}
      <br />
      {pageContentIndex}
      {"_pageIndex" + _pageIndex}
      <button onClick={pageCountHandler}>페이지 증가</button>
    </div>
  );
}

export default App;
