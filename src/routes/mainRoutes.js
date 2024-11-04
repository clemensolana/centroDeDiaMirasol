// Require's
const express = require('express');
const mainRouter = express.Router();

// Controller require
const mainController = require('../controllers/mainController');

// Main routes
mainRouter.get('/', mainController.index);
mainRouter.get('/services', mainController.services);

module.exports = mainRouter;
