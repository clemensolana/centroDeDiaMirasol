// Require's
const express = require("express");
const mainRouter = express.Router();

// Controller require
const mainController = require("../controllers/mainController");

// Main routes
mainRouter.get("/", mainController.index);
mainRouter.get("/services", mainController.services);
mainRouter.get("/installations", mainController.installations);
mainRouter.get("/aboutUs", mainController.aboutUs);
mainRouter.get("/contactUs", mainController.contactForm);
mainRouter.get("/news", mainController.news);
mainRouter.get("/aNew", mainController.aNew);
mainRouter.get("/termAndConditions", mainController.termsAndConditions);
mainRouter.get("/dataProtection", mainController.dataProtection);

// Email routes
const emailRoutes = require("./emailRoutes.js");
mainRouter.use("/email", emailRoutes);

// Intranet routes
const intranetRoutes = require("./intranetRoutes/mainIntranetRoutes.js");
mainRouter.use("/intranet", intranetRoutes);

module.exports = mainRouter;
