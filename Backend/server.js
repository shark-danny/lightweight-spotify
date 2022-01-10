require("dotenv").config({ path: "./process.env" });
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const routers = require("./routes");
const createError = require("http-errors");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());

app.use("/api", routers);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`App is running on Port ${port}`));
