const express = require("express");

// Knex Query Builder and Objection ORM
const Knex = require("knex");
const knexDbConfig = require("./util/database");
const { Model } = require("objection");

// Middleware
var bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

// Router
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const subscriptionRouter = require("./routes/subscription");

const app = express();

// Initialize knex.
const knex = Knex(knexConfig.development);

// Bind all Models to the knex instance. You only
// need to do this once before you use any of
// your model classes.
Model.knex(knex);

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/subscription", subscriptionRouter);

module.exports = app;
