require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/routers/user.router");
const eventRouter = require("./api/routers/event.router");
const path = require("path");

app.use(express.json());

app.use("/users", userRouter);
app.use("/events", eventRouter);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './api/views'));

app.listen(process.env.APP_PORT, () => {
    console.log("Server up and running on port: " + process.env.APP_PORT);
});