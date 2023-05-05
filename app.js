require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
/*
app.get("/api", (req, res) => {
    res.json({
        sucess: 1,
        message: "This REST api is working"
    });
});

app.get("/events", (req, res) => {
    res.json([{
        id: 1,
        name: "Lets Rave"
    }]);
});
*/

app.use(express.json());

app.use("/api/users", userRouter);

app.listen(process.env.APP_PORT, () => {
    console.log("Server up and running on port: " + process.env.APP_PORT);
});