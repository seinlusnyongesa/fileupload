const express = require("express");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().slice(0, 13) + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    console.log("we can't accept such files");
    cb(null, false);
  }
};
const upload = multer({ storage: storage, fileFilter });
const fs = require("fs");
const path = require("path");

const app = express();
app.use("/uploads", express.static("uploads"));

app.post("/", upload.single("letter"), (req, res) => {
  return res.send("this is it");
});

// app.get("/", async (req, res) => {
//   fs.readFile(
//     "uploads/2022-02-04T19attachment_letter.pdf",
//     { encoding: "utf8" },
//     (err, data) => {
//       if (err) {
//         console.error(err);
//         return;
//       }

//       return res.send(data);
//     }
//   );
// });

app.listen(5000, () => {
  console.log("app running on port 5000");
});
