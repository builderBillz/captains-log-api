const { response } = require("express");
const express = require("express");
const app = require("../app");

const logsArray = require("../models/log")

const logs = express.Router();

logs.get("/",(_, response) => {
    console.log("GET request to /logs")
    response.json(logsArray)
});

logs.get("/:index", (request, response) => {
    if (logsArray[request.params.index]) {
        response.json(logsArray[request.params.index]);
    } else {
        response.redirect("/404");
    }
});

logs.post("/",(request, response) => {
    console.log("POST to /logs");
    logsArray.push(request.body);
    response.status(201).json(logsArray);
});

logs.delete("/:index",(request,response) =>{
    const {index} = request.params;
    console.log(logsArray[index]);
    if(logsArray[index]){
        const [deletedLog] = logsArray.splice(index, 1)
        return response.status(200).json(deletedLog)
    } else{
        return response.status(404).json({error: "Resource not found"}) 
    }
})

module.exports = logs;