// Require´s:

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// Express:
const app = express();

// Middlewares:

app.use(express.static(path.join(__dirname, "../public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Template engines
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Routes:
const mainRoutes = require("./routes/mainRoutes.js");

// Use of routes:

app.use("/", mainRoutes);

// Port:
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(
    `El servidor está corriendo correctamente en: http://localhost:${PORT}`
  );
});
