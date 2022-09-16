const path = require("path");
const { execFile } = require("child_process");

const express = require("express");

const PORT = process.env.API_PORT;

const app = express();

app.get("/reset-databases/:token", (req, res) => {
  if (req.params.token === process.env.API_TOKEN) {
    execFile(
      `${path.resolve(__dirname, "../reset-databases.sh")}`,
      (error, stdout, stderr) => {
        if (error || stderr) {
          res.status(400).send();
        } else {
          res.status(200).send();
        }
        console.log(stdout);
        console.error(stderr);
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
