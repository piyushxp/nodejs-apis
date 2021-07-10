require("dotenv").config();

const express = require("express");
const notion = require("./notion");
const app = express();

app.get("/", (req, res) => res.send("hi"));

app.listen(process.env.PORT, () =>
	console.log(`App running @ ${process.env.PORT}`)
);
