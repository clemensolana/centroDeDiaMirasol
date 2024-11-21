const path = require('path');

const mainController = {
  index: (req, res) => {
    const filePath = path.join(__dirname, '../views/index.html');
    return res.sendFile(filePath);
  },
  services: (req, res) => {
    const filePath = path.join(__dirname, '../views/services.html');
    return res.sendFile(filePath);
  },
  installations: (req, res) => {
    const filePath = path.join(__dirname, '../views/installations.html');
    return res.sendFile(filePath);
  },
  aboutUs: (req, res) => {
    const filePath = path.join(__dirname, '../views/aboutUs.html');
    return res.sendFile(filePath);
  },
  contactForm: (req, res) => {
    const filePath = path.join(__dirname, '../views/contactForm.html');
    return res.sendFile(filePath);
  },
  news: (req, res) => {
    const filePath = path.join(__dirname, '../views/news.html');
    return res.sendFile(filePath);
  },
  aNew: (req, res) => {
    const filePath = path.join(__dirname, '../views/aNew.html');
    return res.sendFile(filePath);
  },
  termsAndConditions: (req, res) => {
    const filePath = path.join(__dirname, '../views/t&c.html');
    return res.sendFile(filePath);
  },
  dataProtection: (req, res) => {
    const filePath = path.join(__dirname, '../views/dataProtection.html');
    return res.sendFile(filePath);
  },
};

module.exports = mainController;
