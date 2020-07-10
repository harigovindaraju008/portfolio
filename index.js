const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
var cors = require("cors");
require("dotenv").config();

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build")); // change this if your dir structure is different
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 4001;
const mongoDBUrl = process.env.MONGODB_URL;
mongoose.set("useCreateIndex", true);
mongoose
  .connect(mongoDBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("mongodb connected succesfully");
    app.listen(port, () => console.log(`backend is listening on port ${port}`));
  })
  .catch((error) => {
    console.log("error connection to MongoDB:", error.message);
  });
