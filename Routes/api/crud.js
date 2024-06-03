const express = require("express");
// create
const createController = require("../../controllers/createController");
// read
const readController = require("../../controllers/readController");
const secureAPI = require("../../SecureAPI/secureAPI");
const updateController = require("../../controllers/updateController");
const deleteController = require("../../controllers/deleteController");

const _ = express.Router();

// create
_.post("/create", secureAPI, createController);
//read
_.get("/read", secureAPI, readController);
//update
_.put("/update", secureAPI, updateController);
//delete
_.delete("/delete", deleteController);

module.exports = _;
