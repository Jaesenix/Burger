// dependencies
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// middleware
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
    res.render("home");
});

app.listen(3000);

// Set the port of our application
// const PORT = process.env.PORT || 8080;

// const views = require("./views");