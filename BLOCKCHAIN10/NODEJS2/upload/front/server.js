const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const multer = require("multer");
const path = require("path");
// const router = require("./src/route");
app.set("view engine", "html");
app.use(express.json());
app.use(express.static("uploads"));

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, done) => {
      done(null, "./uploads");
    },
    filename: (req, file, done) => {
      const ext = path.extname(file.originalname); // 확장자
      // aws1, .png
      const filename =
        path.basename(file.originalname, ext) + "_" + Date.now() + ext;
      done(null, filename);
    },
  }),
});

nunjucks.configure("views", {
  express: app,
});

// app.use(router);
app.get("/single", (req, res) => {
  res.render("single");
});

app.get("/array", (req, res) => {
  res.render("array");
});

// app.post("/single", upload.single("upload1"), (req, res) => {
//   console.log(req.file);
//   console.log(req.body);
//   // DB
//   // 원본이름 : originalname
//   // 파일이름 :[ë°°í\x8F¬ì\x9A©] ì¹´ì¹´ì\x98¤ë\x8A\x94 ì\x96´ë\x96»ê²\x8C ì½\x94ì\x9D¸ì\x9D\x84 í\x8C\x8Cë\x8A\x94ê°\x80_1698631448501.pdf
//   // 정적라우팅
//   // service 로직
//   res.send();
// });

app.listen(3000, () => {
  console.log("front server start");
});
