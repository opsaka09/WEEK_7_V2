const express = require("express");

const app = express();
app.use(express.json());
// HTTP Verbs - GET, POST, DELETE

// const response = await fetch("http://someaddress.com");

// HTTP Verb GET

const fakeArr = [];

app.get("/books", (request, response) => {
  response.send({ message: "Hello Hello!", fakeArr: fakeArr });
});

app.post("/books", (request, response) => {
  fakeArr.push(request.body);

  response.send({ message: "success", book: fakeArr[fakeArr.length - 1] });
});

app.listen(5001, () => {
  console.log("Server is listening on 5001");
});
