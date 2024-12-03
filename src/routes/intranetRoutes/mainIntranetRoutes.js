// Require's
const express = require("express");
const intranetRouter = express.Router();

// Controller require
const mainIntranetController = require("../../controllers/intranetController/mainIntranetController");

// Login Main routes
intranetRouter.get("/login", mainIntranetController.login);
intranetRouter.get("/myProfile", mainIntranetController.myProfile);

module.exports = intranetRouter;
