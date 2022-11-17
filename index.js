const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const multer = require("multer");

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({ extended: true })
);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "Images");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },

  });
  const upload = multer({ storage: storage });

  //post image
  app.post("/images", upload.single("image"), (req, res) => {
    const file = req.file;
    if (!file) {
      const error = new Error("Please upload a file");
      error.httpStatusCode = 400;
      return next(error);
    }
    res.send(file);
  });

  //get images
  app.get("/images", (req, res) => {
    res.send("Images");
  });


app.listen(PORT , ()=>{
    console.log(`http://localhost:${PORT}`);
})