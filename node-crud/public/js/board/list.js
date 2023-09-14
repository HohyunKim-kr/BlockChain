class list {}

const listLiteral = `
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="../public/css/index.css" />
  </head>
  <body>
    <h1><a href="/">Logo</a></h1>
    <table class="border-table">
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
        <tr>
          <td>1</td>
          <td><a href="./view.html">제목1</a></td>
          <td>web772</td>
          <td>2023-08-09</td>
          <td>0</td>
        </tr>
      </tbody>
    </table>
    <a href="./write.html" class="btn">글쓰기 버튼</a>
  </body>
</html>
`;

<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="../public/css/index.css" />
  </head>
  <body>
    <h1>
      <a href="/">Logo</a>
    </h1>
    <table class="border-table">
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
        <tr>
          <td>1</td>
          <td>
            <a href="./view.html">제목1</a>
          </td>
          <td>web772</td>
          <td>2023-08-09</td>
          <td>0</td>
        </tr>
      </tbody>
    </table>
    <a href="./write.html" class="btn">
      글쓰기 버튼
    </a>
  </body>
</html>;
