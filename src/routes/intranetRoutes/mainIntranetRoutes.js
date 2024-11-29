// Require's
const express = require("express");
const intranetRouter = express.Router();

// Controller require
const mainIntranetController = require("../../controllers/intranetController/mainIntranetController");

// Main routes
intranetRouter.get("/login", mainIntranetController.login);

module.exports = intranetRouter;
