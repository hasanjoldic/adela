const path = require("path");
const { execFile } = require("child_process");

const dotenv = require("dotenv");

const express = require("express");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const PORT = process.env.API_PORT;

console.log({ PORT });

const app = express();

app.get("/reset-databases/:token", (req, res) => {
  if (req.params.token === process.env.API_TOKEN) {
    execFile(
      `${path.resolve(__dirname, "../reset-databases.sh")}`,
      (error, stdout, stderr) => {
        if (error || stderr) {
          console.error(error);
          console.error(stderr);
          res.status(400).send();
        } else {
          console.log(stdout);
          res.status(200).send();
        }
      }
    );
  }
});

app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.status || 500);
  res.send({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
