require("dotenv").config();
const express = require("express");
const app = express();
const _ = require("./Routes");
const mongooseConfig = require("./Database/mongooseConfig");

const port = process.env.PORT;
// DB
mongooseConfig();
// json
app.use(express.json());
//routes
app.use(_);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
