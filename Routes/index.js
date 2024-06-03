const express = require("express");
const _ = express.Router();
const url = process.env.URL;
const api = require("../Routes/api");

_.use(url, api);

module.exports = _;
