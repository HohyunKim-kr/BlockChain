const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, res, done) => {
      done(null, "./uploads");
    },
    filename: (req, file, done) => {
      const ext = path.extname(file.originalname);
      const filename =
        path.basename(file.originalname) + "_" + Date.now() + ext;
      done(null, filename);
    },
  }),
});

app.use(cors());
app.use(express.json());

app.post("/upload", upload.single("upload1"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  // service 로직
  res.send();
});

app.listen(4000, () => {
  console.log("back server start");
});
