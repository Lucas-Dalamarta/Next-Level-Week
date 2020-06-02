import express from "express";

const app = express();

app.get("/users", (resquest, response) => {
  console.log("Listagem de users");

  response.json(["Luke", "Leia", "Han"]);
});

app.listen(3333);
