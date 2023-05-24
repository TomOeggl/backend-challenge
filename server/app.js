require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const userApiRouter = require("./src/routes/userRouter");
//const eventApiRouter = require("./src/routes/event.api.router");
const path = require("path");
const sequelize = require("./src/config/sequelize");
const User = require("./src/models/User");
const Artist = require("./src/models/Artist");
const Event = require("./src/models/Event");
const LinkCollection = require("./src/models/LinkCollection");
const Location = require("./src/models/Location");
const defineAssociatons = require ("./src/models/associations");
const UserRole = require("./src/models/UserRole");
const EventType = require("./src/models/EventType");


async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

async function syncDatabase() {
  await User.sync();
  await Artist.sync();
  await Event.sync();
  await LinkCollection.sync();
  await Location.sync();
  await UserRole.sync();
  await EventType.sync();
}
app.use(express.json());
app.use(
  cors({
    origin: "https://editor.swagger.io/",
  })
  );
  
  connectToDatabase();
  app.use("/api/users", userApiRouter);
  //app.use("/api/events", eventApiRouter);
  
  let testUser;
  async function createTestUser(){
    testUser = await User.create({name: "TestSequelize5", email: "testmail2111@test.com", password: "test3"});
    console.log(testUser.id);
  }
 // createTestUser();


app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./views"));
defineAssociatons();
syncDatabase();

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running on port: " + process.env.APP_PORT);
});
