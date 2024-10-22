const path = require('path');

const mainController = {
  index: (req, res) => {
    const filePath = path.join(__dirname, '../views/index.html');
    return res.sendFile(filePath);
  },
};

module.exports = mainController;
