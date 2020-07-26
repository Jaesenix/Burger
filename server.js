// dependencies
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// middleware
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
    res.render("index");
});

app.use('/public', express.static('public'));

const port = Number(process.env.PORT || 3000);
app.listen(port);

// const views = require("./views");