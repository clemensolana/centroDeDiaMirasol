const path = require("path");

const mainController = {
  index: (req, res) => {
    return res.render("index");
  },
  services: (req, res) => {
    return res.render("services");
  },
  installations: (req, res) => {
    return res.render("installations");
  },
  aboutUs: (req, res) => {
    return res.render("aboutUs");
  },
  contactForm: (req, res) => {
    return res.render("contactForm");
  },
  news: (req, res) => {
    return res.render("news");
  },
  aNew: (req, res) => {
    return res.render("aNew");
  },
  termsAndConditions: (req, res) => {
    return res.render("t&c");
  },
  dataProtection: (req, res) => {
    return res.render("dataProtection");
  },
};

module.exports = mainController;
