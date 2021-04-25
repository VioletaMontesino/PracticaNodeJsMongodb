import express from "express";
const app = express();
import router from './router.js'
import config from './config.js'
import './dbConexion.js'

// Config
config(app);

// Router
router(app);

app.listen(process.env.PORT, () =>
  console.log("El servidor ha sido inicializado: http://localhost:" + process.env.PORT)
);