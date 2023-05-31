require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./src/routes/userRouter");
const eventRouter = require("./src/routes/eventRouter");
const roleRouter = require("./src/routes/roleRouter");
const artistRouter = require("./src/routes/artistRouter");
const path = require("path");
const sequelize = require("./src/config/sequelize");
const defineAssociatons = require("./src/models/associations");

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

app.use(express.json());
connectToDatabase();
defineAssociatons();
syncDatabase();

app.use("/api/users", userRouter);
app.use("/api/events", eventRouter);
app.use("/api/roles", roleRouter);
app.use("/api/artists", artistRouter);



app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./views"));

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running on port: " + process.env.APP_PORT);
});
