const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

// Import routes
const homeRouter = require("./routes/home");
const postsRouter = require("./routes/posts");

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use("/", homeRouter);
app.use("/posts", postsRouter);

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected");
  }
);

// Listening to the server
app.listen(3000, () => {
  console.log("Server running!");
});
