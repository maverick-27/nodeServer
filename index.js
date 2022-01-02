const express = require("express");
const app = express();

// app.get("/", function (req, res) {
//   res.send("This IS the world");
// });

// app.get("/maruti", function (req, res) {
//   res.send("This is maruti Page");
// });

// app.get("/audi", function (req, res) {
//   res.send({ data: "This is car" });
// });

// app.get("/honda", function (req, res) {
//   res.send("This is honda page");
// });

// app.get("/r/:type", (req, res) => {
//   const { data } = req.params;
//   console.log("Data", req.params);
//   res.send(`This is ${data} Page`);
// });

// app.get("/search", (req, res) => {
//   const { data } = req.query;
//   if (!data) res.send("404");
//   res.send(`This is ${data} Page`);
// });

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/random", (req, res) => {
    const data = Math.floor(Math.random() * 10) + 1;
    res.render("random.ejs", { random: data });
});

app.get("/r/:reddit", (req, res) => {
    const { reddit } = req.params;
    res.render("reddit", { reddit });
});

app.get("/cars", (req, res) => {
    const { reddit } = req.params;
    res.render("reddit", { reddit });
});

app.listen(3001);
