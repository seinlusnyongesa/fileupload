const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.static("uploads"));

app.post("/", upload.single("letter"), (req, res, next) => {
  console.log(req.file.path);

  return res.send("this is it");
});

// app.get("/", async (req, res) => {
//   fs.readFile(
//     "uploads/e021c12bf651e44c882c014c5b6b86ae",
//     { encoding: "utf-8" },
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
