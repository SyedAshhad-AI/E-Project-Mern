const express = require("express");
const {
  EventForm,
  GetEvent,
  DeleteEvent,
  GetEventById,
  UpdateEvent,
  UpdateStatus,
} = require("../Controller/eventController");

const eventRoutes = express.Router();

eventRoutes.post("/addEvent", EventForm);
eventRoutes.get("/allEvent", GetEvent);
eventRoutes.get("/eventById/:id", GetEventById);
eventRoutes.put("/editEvent/:id", UpdateEvent);
eventRoutes.delete("/deleteEvent/:id", DeleteEvent);
eventRoutes.put("/updateStatus/:id", UpdateStatus);

module.exports = eventRoutes;
