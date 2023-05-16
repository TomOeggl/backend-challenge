require("dotenv").config();
const express = require("express");
const app = express();
const userApiRouter = require("./endpoints/api/routers/user.api.router");
const eventApiRouter = require("./endpoints/api/routers/event.api.router");
const path = require("path");

app.use(express.json());

app.use("/api/users", userApiRouter);
app.use("/api/events", eventApiRouter);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));

app.listen(process.env.APP_PORT, () => {
    console.log("Server up and running on port: " + process.env.APP_PORT);
});