const express = require("express");
const {getCurrencies, getCurrency} = require("./controllers/currencies.controllers")
const {getUsers, getuser, searchUser} = require("./controllers/users.controllers")  

const app = express();
const PORT = 8080;

app.listen(PORT, () => console.log("Server started on port:- " + PORT));

app.get("/", (req, res) => {
  res.send("Welcome to the server. we have differnt path :- currencies, user");
});

app.get("/currencies", getCurrencies);
app.get("/currencies/:currency", getCurrency);

app.get("/users", getUsers);
app.get("/users/search", searchUser);
app.get("/users/:uuid", getuser);