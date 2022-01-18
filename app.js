const logsController = require("./controllers/logsController")

const express = require("express");
const cors = require("cors");

const app = express()

app.use(cors());
app.use(express.json());

app.use("/logs", logsController)

app.get("/",(request,response) => {
    console.log("GET request to /");
    response.send(`welcome to the Captain's log`);
});

app.get("*",(_,response) => {
response.status(404).json({error: "page not found"})
});



module.exports = app;