class App extends React.Component {
  render() {
    return (
      <ul>
        <li>list 1</li>
      </ul>
    );
  }
}

// 요소를 선택해올 필요하는 없는 친구인데..
// 딱 한번 루트 요소를 한번 지정한다.
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);
