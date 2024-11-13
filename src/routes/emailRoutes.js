// Require's
const express = require('express');
const emailRouter = express.Router();

// Controller require
const emailController = require('../controllers/emailController');

// Email routes
emailRouter.post('/contactUs', emailController.sendContactForm);

module.exports = emailRouter;
