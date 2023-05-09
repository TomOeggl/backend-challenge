require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/routers/user.router");
const eventRouter = require("./api/routers/event.router");

app.use(express.json());

app.use("/users", userRouter);
app.use("/events", eventRouter);

app.listen(process.env.APP_PORT, () => {
    console.log("Server up and running on port: " + process.env.APP_PORT);
});