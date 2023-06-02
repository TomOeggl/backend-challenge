require('dotenv').config();
const express = require('express');
const { Nuxt, Builder, loadNuxt } = require('nuxt');
const sequelize = require("./src/config/sequelize");
const defineAssociatons = require("./src/models/associations");

const userRouter = require("./src/routes/userRouter");
const eventRouter = require("./src/routes/eventRouter");
const roleRouter = require("./src/routes/roleRouter");
const artistRouter = require("./src/routes/artistRouter");

const app = express();

async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

async function syncDatabase() {
  await sequelize.sync();
}

connectToDatabase();
defineAssociatons();
syncDatabase();

app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/events", eventRouter);
app.use("/api/roles", roleRouter);
app.use("/api/artists", artistRouter);

const config = require('../client/nuxt.config.js');
config.dev = process.env.NODE_ENV !== 'production';
const nuxt = new Nuxt(config);


if (config.dev) {
  const builder = new Builder(nuxt);
  builder.build();
}

app.use(nuxt.render);

const port = process.env.APP_PORT || 3000;
app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
