const express = require("express");
const app = express();

const workers = [
  {
    id: 1,
    name: "Ali",
    age: 24,
  },
  {
    id: 2,
    name: "Lale",
    age: 22,
  },
  {
    id: 3,
    name: "Natiq",
    age: 27,
  },
];

app.get("/", (request, response) => {
  response.send(
    workers.map(worker => (`<p>Name: ${worker.name}, Age: ${worker.age}</p>`)).join('')
  );
});

app.listen(3000, () => {
  console.log("Server is started");
});
