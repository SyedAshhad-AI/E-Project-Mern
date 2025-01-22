const express = require("express");
const {
  EventForm,
  GetEvent,
  DeleteEvent,
  GetEventById,
  UpdateEvent,
  UpdateStatus,
  AddEventToUser,
  RemoveEventFromUser,
} = require("../Controller/eventController");

const eventRoutes = express.Router();

eventRoutes.post("/addEvent", EventForm);
eventRoutes.get("/allEvent", GetEvent);
eventRoutes.get("/eventById/:id", GetEventById);
eventRoutes.put("/editEvent/:id", UpdateEvent);
eventRoutes.delete("/deleteEvent/:id", DeleteEvent);
eventRoutes.put("/updateStatus/:id", UpdateStatus);
eventRoutes.post("/addEventToUser", AddEventToUser);
eventRoutes.delete("/deleteUserEvent/:userId/:eventId", RemoveEventFromUser);

module.exports = eventRoutes;
