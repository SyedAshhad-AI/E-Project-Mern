const express = require("express");
const { EventForm, GetEvent, DeleteEvent } = require("../Controller/eventController");



const eventRoutes = express.Router();

eventRoutes.post("/addevent", EventForm);
eventRoutes.get("/allevent", GetEvent);
eventRoutes.delete("/allevent/:id", DeleteEvent);

module.exports = eventRoutes;
