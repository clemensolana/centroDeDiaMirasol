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
};

module.exports = mainController;
