const row = require("./row");

module.exports = () => {
  return {
    title: "게시판",
    body: `
      <table class="board-table">
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
            ${list.map((item) => row(item))}
            </tbody>
      </table>  
      <a href = ".write.html" class="btn">글쓰기</a> 
`,
  };
};
