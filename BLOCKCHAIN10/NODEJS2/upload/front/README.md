```sh
npm init -y
npm install express nunjucks
```

name 속성은 키값

enctype
enctype="multipart/form-data"
요청헤더가 변경해야됨

body parser가 안되기 때문에
post만 하면 req.body를 했을 때 빈 객체가 나온다.

## multer

```sh
npm install multer
```

```js
const multer = require("multer");

//
const upload = multer(); // 객체가 나옴 {single:()=>{},array:()=>{}}

upload.single(); // ()=>{} // handler 함수 
```
