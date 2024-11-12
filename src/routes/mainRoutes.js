// Require's
const express = require('express');
const mainRouter = express.Router();

// Controller require
const mainController = require('../controllers/mainController');

// Main routes
mainRouter.get('/', mainController.index);
mainRouter.get('/services', mainController.services);
mainRouter.get('/installations', mainController.installations);
mainRouter.get('/aboutUs', mainController.aboutUs);
mainRouter.get('/contactUs', mainController.contactForm);

// Email routes
const emailRoutes = require('./emailRoutes.js');
mainRouter.use('/email', emailRoutes);

module.exports = mainRouter;
