// Require´s:

const express = require('express');
const path = require('path');

// Express:
const app = express();

// Middlewares:

app.use(express.static(path.join(__dirname, '../public')));

// Routes:
const mainRoutes = require('./routes/mainRoutes.js');

// Use of routes:

app.use('/', mainRoutes);

// Port:
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(
    `El servidor está corriendo correctamente en: http://localhost:${PORT}`
  );
});
