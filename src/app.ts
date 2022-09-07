import express from "express";
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
require("./db.js");
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "50mb",
  })
);
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use(cors());

export default app;

//probando bug con husky
