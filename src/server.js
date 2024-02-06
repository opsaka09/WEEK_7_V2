const express = require("express");

const app = express();

app.use("/example", express.static("example"));
app.use("/about", express.static("about"));
app.use("/dave", express.static("dave"));
app.listen(5001, () => {
  console.log("Server is listening on 5001");
});
