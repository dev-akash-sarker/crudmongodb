const express = require("express");
const _ = express.Router();
const auth = require("./auth");
const crud = require("./crud");

_.use("/auth", auth);
_.use("/crud", crud);

module.exports = _;
