const express = require("express");
var bodyParser = require("body-parser");

const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const cors = require("cors");
const knex = require("./util/database");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const subscriptionRouter = require("./routes/subscription");

const app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
// app.use(bodyParser.json());
// app.use(function(req, res) {
//   res.setHeader("Content-Type", "text/plain");
//   res.write("you posted:\n");
//   res.end(JSON.stringify(req.body, null, 2));
// });

app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/subscription", subscriptionRouter);

module.exports = app;
